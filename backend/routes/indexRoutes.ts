import express from 'express'
import { body } from 'express-validator';
import { loginUser, registerUser, sendEmailVerificationLink } from '../controllers/userControllers';
import verifyToken from '../middlewares/auth';
import { expressValidate } from '../middlewares/validator';
const router = express.Router();

router.get(
  '/',
  verifyToken,
  function(req,res){
    return res.json({user : res.user})
  }
)
router.post(
  '/login',
  body('email').isEmail().isLength({ max: 30, min: 3 }).toLowerCase().trim(),
  body('password').isString().isLength({ max: 20, min: 5 }).trim(),
  expressValidate,
  loginUser
)
router.post(
  '/register',
  body('email').isEmail().isLength({ max: 30, min: 3 }).toLowerCase().trim(),
  body('password').isString().isLength({ max: 20, min: 5 }).trim(),
  body('name').isString().isLength({ max: 20, min: 1 }).trim(),
  expressValidate,
  registerUser
)
router.get(
  '/logout',
  function (req,res){
    res.clearCookie("access_token");
    return res.status(200).json({})
  }
)
router.get(
  '/send-verify/:emailId',
  sendEmailVerificationLink
)
router.get(
  '/verify/:token',
  sendEmailVerificationLink
)

export default router