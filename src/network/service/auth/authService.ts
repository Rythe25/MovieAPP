import { auth } from "../../api/authClient";
import { LoginResponse } from "../../api/type";

export const AuthService = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    try {
      const response = await auth.post<LoginResponse>("/login", {
        email,
        password,
      });
      return response.data;
    } catch (error: any) {
      console.log("LOGIN ERROR", error.response?.data);
      throw error;
    }
  },
  logout: async () => {
    await auth.post("/logout");
  },
};
