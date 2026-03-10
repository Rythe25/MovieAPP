export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  profile_image?: string;
}

export interface RegisterReq {
  first_name: string, 
  last_name: string, 
  email: string, 
  password: string, 
  password_confirmation: string
}

export interface RegisterRes {
  token: string;
  user: User;
  password_confirmation: string;
}

export interface VerifyCode {
  code : number;
}

export interface SendResetPassword {
  email : string;
}

export interface LoginReq {
  email : string;
  password : string;
}

export interface LoginRes {
  token: string;
  user: User;
  is_verify: boolean;
}

export interface ResetPassword {
  email: string;
  code: string;
  password: string;
  password_confirmation: string;
}