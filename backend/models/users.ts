import mongoose, { Types } from "mongoose";

export interface IUserSnippet {
  name: string,
  // headline: string,
  about : string,
}
export interface IUser extends IUserSnippet {
  _id: Types.ObjectId,
  emailVerfied: boolean,
  email: string,
  skills:string[],
}
export interface IUserCreate {
  name: string,
  emailVerfied: boolean,
  email: string,
  password?: string,
  auth_type: string[],
  about:string,
}
export interface IUserStored extends IUserSnippet {
  _id: Types.ObjectId,
  emailVerfied: boolean,
  email: string,
  password?: string,
  auth_type: string[],
  about:string,
  skills:string[],
  haveUploaded:number,
  haveSeen:number
}

const userSchema = new mongoose.Schema<IUserStored>({
  name: { type: String, required: true, maxLength: 50, minlength: 3 },
  email: { type: String, unique: true, maxLength: 50, minlength: 3 },
  password: { type: String, maxLength: 100, minlength: 5 },
  auth_type: [{ type: String, required: true, enum: ['google', 'github', 'password'] }],
  emailVerfied: { type: Boolean, default: false },
  about: { type: String, default: '', maxLength: 250 },
  skills: [{ type: String }],
  haveUploaded: {type: Number, default:0},
  haveSeen: {type: Number, default:0}

})

const User = mongoose.model<IUserStored>("User", userSchema);
export default User;