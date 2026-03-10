import { auth } from "../../api/authClient";
import { LoginResponse, RegisterResponse, VerifyCodeResponse } from "../../api/type";

export const AuthService = {
  Register: async (
    first_name: string, 
    last_name: string, 
    email: string, 
    password: string, 
    password_confirmation: string
  ): Promise<RegisterResponse> => {
    try {
      const response = await auth.post<RegisterResponse>("/register", {
        first_name,
        last_name,
        email,
        password,
        password_confirmation,
      });
      return response.data;
    } catch (error: any) {
      console.log("Error, registration: ", error.response?.data);
      throw error;
    }
  },

  sendCode: async () => {
    try {
      await auth.post("/email/verify/send");
    } catch (error: any) {
      console.log("Error! sendCode: ", error.response?.data);
      throw error;
    }
  },

  verifyCode: async (code : number): Promise<VerifyCodeResponse> => {
    try {
      const response = await auth.post("/email/verify/check", {code});
      return response.data;
    } catch (error: any) {
      console.log("Error! verifyCode: ", error.response?.data);
      throw error;
    }
  },

  login: async (
    email: string, 
    password: string
  ): Promise<LoginResponse> => {
    try {
      const response = await auth.post<LoginResponse>("/login", {
        email,
        password,
      });
      return response.data;
    } catch (error: any) {
      console.log("Error! login: ", error.response?.data);
      throw error;
    }
  },

  logout: async () => {
    try {
      await auth.post("/logout");
    } catch (error: any) {
      console.log("Error! logout: ", error.response?.data);
      throw error;
    }
  },
};
