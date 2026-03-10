export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  profile_image?: string;
}

export interface RegisterResponse {
  token: string;
  user: User;
  password_confirmation: string;
}

export interface VerifyCodeResponse {
  code : number;
}

export interface LoginResponse {
  token: string;
  user: User;
  is_verify: boolean;
}