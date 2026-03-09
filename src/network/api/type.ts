export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  profile_image: string;
}

export interface LoginResponse {
  token: string;
  user: User;
  is_verify: boolean;
}