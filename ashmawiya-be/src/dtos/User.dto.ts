import { User } from "../types/response";

export type RegisterUserDto = User

export type LoginUserDto = {
    email: string;
    password: string;
}