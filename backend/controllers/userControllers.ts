import { Request, Response } from "express";
import User, { IUser, IUserStored } from "../models/users";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export async function loginUser(req: Request, res: Response) {
  try {
    const { email, password }: { email: string, password: string } = req.body
    const checkUser = await User.findOne({ email })

    if (!checkUser) return res.status(404).json({ msg: 'Email doesn`t exists!' });
    if (!checkUser.password) return res.status(403).json({ msg: 'Try another method' });
    if (!(await bcrypt.compare(password, checkUser.password))) return res.status(406).json({ msg: 'Wrong password!' });

    // console.log(process.env.TOKEN_KEY)
    const token = jwt.sign({ _id: checkUser._id.toString(), email }, process.env.TOKEN_KEY || 'KuchBhi', { expiresIn: '2h' })
    res.cookie("access_token", token)

    const user : IUser = {
      _id : checkUser._id,
      email : checkUser.email,
      emailVerfied : checkUser.emailVerfied,
      about : checkUser.about,
      name : checkUser.name,
      skills : checkUser.skills
    }
    return res.status(200).json({ user  })
  } catch (err) {
    res.status(500).json({ msg: 'Some internal error occured', err })
  }
}

export async function registerUser(req: Request, res: Response) {
  try {
    const { email, password, name }: { email: string, password: string, name: string } = req.body

    const checkEmail = await User.findOne({ email });

    if (checkEmail) return res.status(409).json({ msg: 'User already exists!' });

    const encryptedPassword = await bcrypt.hash(password, 15)

    const newUser: IUserStored = await User.create({
      email,
      name,
      password: encryptedPassword,
    })

    const token = jwt.sign({ _id: newUser._id.toString(), email }, process.env.TOKEN_KEY || 'KuchBhi', { expiresIn: '2h' })
    res.cookie("access_token", token)
    const user : IUser = {
      _id : newUser._id,
      email : newUser.email,
      emailVerfied : newUser.emailVerfied,
      about : newUser.about,
      name : newUser.name,
      skills : newUser.skills
    }

    return res.status(201).json({ user })
  } catch (err) {
    res.status(500).json({ msg: 'Some internal error occured', err })
  }
}

export function sendEmailVerificationLink(req : Request, res : Response){
  try {
    
    res.status(200).json({msg : 'Check your email'})
  } catch (err) {
    res.status(500).json({ msg: 'Some internal error occured', err })
  }
}