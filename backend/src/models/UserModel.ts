import  mongoose, { Schema } from "mongoose";
import { genSalt, hash, compare } from "bcrypt";
import { IUserModel } from "../interfaces";

export const UserSchema : Schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})
.pre("save", async function(next) {
    try {
        if(this.isNew) {
            const salt = await genSalt(10);
            const hashedPassword = await hash(this.password, salt);
            this.password = hashedPassword;
            next();
        }
    } catch(error) {
        console.log(error);
    }
});

UserSchema.methods.comparePassword = async function(pwd: string, callback: Function): Promise<boolean | null> {
    try {
      return await compare(pwd, this.password);
    } catch(error) {
        return callback(error);
    }
};

export default mongoose.model<IUserModel>("Users",UserSchema);


