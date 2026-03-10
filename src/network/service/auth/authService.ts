import { auth } from "../../api/authClient";
import { 
  RegisterReq,
  RegisterRes,
  VerifyCode,
  LoginReq,
  LoginRes, 
  SendResetPassword,
  ResetPassword
} from "../../api/type";

export const AuthService = {
  Register: async (payload : RegisterReq): Promise<RegisterRes> => {
    try {
      const response = await auth.post<RegisterRes>("/register", payload);
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

  verifyCode: async (code : string): Promise<VerifyCode> => {
    try {
      const response = await auth.post("/email/verify/check", {code});
      return response.data;
    } catch (error: any) {
      console.log("Error! verifyCode: ", error.response?.data);
      throw error;
    }
  },

  login: async (payload : LoginReq): Promise<LoginRes> => {
    try {
      const response = await auth.post<LoginRes>("/login", payload);
      return response.data;
    } catch (error: any) {
      console.log("Error! login: ", error.response?.data);
      throw error;
    }
  },

  sendResetPasswordCode: async (payload : SendResetPassword): Promise<SendResetPassword> => {
    try {
      const response = await auth.post("/forgot-password/send-code", payload);
      return response.data;
    } catch (error: any) {
      console.log("Error! sendResetPasswordCode: ", error.response?.data);
      throw error;
    }
  },

  resetPassword: async (payload : ResetPassword): Promise<ResetPassword> => {
    try {
      const response = await auth.post<ResetPassword>("/forgot-password/reset", payload);
      return response.data;
    } catch (error: any) {
      console.log("Error, resetPassword: ", error.response?.data);
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
