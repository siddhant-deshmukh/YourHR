import express from 'express'
import { body } from 'express-validator';
import verifyToken from '../middlewares/auth';
import { expressValidate } from '../middlewares/validator';
import User from '../models/users';
import dotenv from 'dotenv'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { S3Client, GetObjectCommand, GetObjectCommandInput, HeadObjectCommand } from '@aws-sdk/client-s3'
import { createPresignedPost, PresignedPost } from '@aws-sdk/s3-presigned-post'
import { Conditions } from '@aws-sdk/s3-presigned-post/dist-types/types';

dotenv.config()

const router = express.Router();
const Bucket = process.env.BUCKET_NAME as string 
if(!Bucket){
  console.log('error no bucket!')
}

router.get('/',
  verifyToken,
  function (req, res) {
    if (res.user) {
      return res.status(200).json({ user: res.user })
    }
    res.status(500).json({ msg: 'Some error occured' })
  }
)

router.put('/',
  body('name').optional().isString().isLength({ max: 50, min: 3 }).trim(),
  body('about').optional().isString().isLength({ max: 50, min: 0 }).trim(),
  body('skills').optional().isArray({ max: 50 }).isLength({ max: 50, min: 1 })
    .custom((options) => {
      let b = true
      options.forEach((option: unknown) => {
        if (typeof option !== 'string' || option.length < 1 || option.length > 25) {
          b = false
          return false
        }
      })
      return b
    }),
  expressValidate,
  verifyToken,
  async function (req, res) {
    try {
      if (!res.user) {
        throw 'no user found internal error'
      }
      const { name, about, skills } = req.body
      await User.findByIdAndUpdate(res.user._id, {
        about,
        name,
        skills
      })
      return res.status(201).json({ msg: 'updated' })
    } catch (err) {
      res.status(500).json({ msg: 'Some error occured', err })
    }
  }
)

// console.log(process.env.AWS_ACCESS_KEY_ID, process.env.AWS_SECRET_ACCESS_KEY)
const client = new S3Client({
  region: process.env.BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string
  }
});


router.post('/resume',
  body('Content_Length').isNumeric(),
  body('Content_Type').isIn(['application/pdf', 'application/msword']),
  expressValidate,
  verifyToken,
  async function (req, res) {
    try {
      if (!res.user) {
        throw 'no user found internal error'
      }
      if (res.user.haveUploaded && res.user.haveUploaded > 5) return res.status(403).json({ msg: 'Have reached limit! Can not upload resume more than 5 times' })

      const {Content_Type } : { Content_Type : string } = req.body
      const Key = `${res.user._id.toString()}/resume.${(Content_Type==='application/pdf')?'pdf':'doc'}`
      console.log(Key)
      const Conditions: Conditions[] = [
        ["starts-with", "$key", Key],
        ["content-length-range", 1, 1024 * 1024],
      ];

      const { url, fields } = await createPresignedPost(client, {
        Bucket,
        Key ,
        Conditions,
        Expires: 3600,
      });

      await User.findByIdAndUpdate(res.user._id,{
        haveSeen : (res.user.haveSeen || 0) + 1 
      })
      
      return res.status(200).json({ url, fields })
    } catch (err) {
      res.status(500).json({ msg: 'Some error occured', err })
    }
  }
)
router.get('/resume/:uid',
  verifyToken,
  async function (req, res) {
    try {
      if (!res.user) {
        throw 'no user found internal error'
      }
      if (res.user.haveSeen && res.user.haveSeen > 15) return res.status(403).json({ msg: 'Have reached limit! Can not see resume more than 10 times' })
      
      let userId : string | null = req.params.uid
      if (!userId) return res.status(400).json({ msg: 'no user id', userId })

      const user = await User.findById(userId)
      if (!user) return res.status(404).json({ msg: 'user does not exist' })

      await User.findByIdAndUpdate(userId,{
        haveSeen : (res.user.haveSeen || 0) + 1 
      })

      const head_command = new HeadObjectCommand({
        Bucket: 'yourhr',
        Key: `${userId}/resume.pdf`
      });
      try {
        const response = await client.send(head_command);
        if (!response) {
          return res.status(404).json({ msg: 'resume does not exist' })
        }
      } catch (err) {
        return res.status(404).json({ msg: 'resume Does not exist' })
      }

      const getObjectParams: GetObjectCommandInput = {
        Bucket: 'yourhr',
        Key: `${res.user._id.toString()}/resume.pdf`,
      }
      const command = new GetObjectCommand(getObjectParams);
      const url = await getSignedUrl(client, command, { expiresIn: 3600 });

      return res.status(200).json({ url })
    } catch (err) {
      res.status(500).json({ msg: 'Some error occured', err })
    }
  }
)
export default router