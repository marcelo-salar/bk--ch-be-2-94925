import { User } from "../models/User.js";

export class UsersDAO {
    
    static findByEmail = async(email) => {
        return await User.findOne({email});
    }

    static create = async(userData) => {
        return await User.create(userData)
    };
}

