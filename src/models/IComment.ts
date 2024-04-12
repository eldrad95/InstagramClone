import { IUser } from "./IUser";

export interface IComment {
    id: string;
    comment: string;
    user: IUser;
   }