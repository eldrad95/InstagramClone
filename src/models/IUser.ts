import { IPost } from "./IPost";

export type IEditableUserFields = 'name' | 'username' | 'website' | 'bio'

export type IEditableUser = Pick<IUser, IEditableUserFields>

export interface IUser {
    id?: string;
    username: string;
    image?: string;
    name?: string;
    bio?: string;
    posts?: IPost[];
    website?: string;
}
