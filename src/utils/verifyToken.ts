import { jwtDecode } from "jwt-decode";
import { TUserFromToken } from "@/types/global";

export const verifyToken = (token: string): TUserFromToken => {
  return jwtDecode<TUserFromToken>(token);
};
