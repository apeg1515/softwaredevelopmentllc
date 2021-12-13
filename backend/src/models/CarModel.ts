import  mongoose, { Schema } from "mongoose";
import { ICarModel } from "../interfaces";

export const CarSchema : Schema = new Schema({
    year: { type: String },
    make: { type: String },
    model: { type: String },
    color: { type: String },
});

export default mongoose.model<ICarModel>("Cars", CarSchema);
