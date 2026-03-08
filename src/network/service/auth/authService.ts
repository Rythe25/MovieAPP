import { auth } from "../../api/client";
import { LoginResponse } from "../../api/type";

export const AuthService = {
    login: async ( email: string, password: string): Promise<LoginResponse> => {
      const response = await auth.post<LoginResponse>("/login", { email, password,});
      return response.data;
    },
    logout: async () => {
        await auth.post("/logout")
    }
}