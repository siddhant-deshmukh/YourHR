export interface IUserSnippet {
  name: string,
  headline: string,
}
export interface IUser extends IUserSnippet {
  _id: string,

  emailVerfied: boolean,
  about:string,
  skills:string[],
  email: string,
}

export interface IUserStored extends IUserSnippet {
  _id: string,
  emailVerfied: boolean,
  email: string,
  password?: string,
  auth_type: string[],
  about?:string,
  skills:string[],
}