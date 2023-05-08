import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'
import cookieParser from 'cookie-parser'
import indexRouter from './routes/indexRoutes'
import userRouter from './routes/userRoutes'
import cookieSession from 'cookie-session'

dotenv.config();

const app = express();
const port = process.env.PORT;

app.set("trust proxy", 1);
// ['http://localhost:5173/','http://localhost:5174/']

const origin: string[] = []
let url1 = process.env.CLIENT_URL_1
let url2 = process.env.CLIENT_URL_2
let url3 = process.env.CLIENT_URL_3
let url4 = process.env.CLIENT_URL_4
if (url1) origin.push(url1)
if (url2) origin.push(url2)
if (url3) origin.push(url3)
if (url4) origin.push(url4)

console.log(origin)
// app.use()
app.use(cors({ origin, credentials: true, optionsSuccessStatus: 200 }));
app.use(express.urlencoded({ extended: false, limit: '1kb' }));
app.use(express.json({ limit: '20kb' })) // limit the size of incoming request body and parse i.e convert string json to js object for every incoming request
app.use(cookieParser())
// app.use(cookieSession({
//   name: "__session",
//   keys: ["key1"],
//   maxAge: 24 * 60 * 60 * 100,
//   secure: false,
//   httpOnly: true,
//   sameSite: 'none'
// }))

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => { console.log("Connected to database") })
  .catch((err) => { console.error("Unable to connect database", err) })


app.use('/', indexRouter)
app.use('/u', userRouter)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});