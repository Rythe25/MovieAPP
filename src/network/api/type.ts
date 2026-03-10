export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  profile_image?: string;
}

export interface RegisterRequest {
  token: string;
  user: User;
  password_confirmation: string;
}

export interface RegisterResponse {
  token: string;
  user: User;
  password_confirmation: string;
}

export interface VerifyCodeRequest {
  code : number;
}

export interface SendResetPasswordCodeRequest {
  email : string;
}

export interface LoginRequest {
  token: string;
  user: User;
  is_verify: boolean;
}

export interface ResetPasswordRequest {
  email: string;
  code: string;
  password: string;
  password_confirmation: string;
}