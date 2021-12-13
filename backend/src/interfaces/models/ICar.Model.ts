import { Document } from "mongoose";

export interface ICarModel extends Document {
    year: string,
    make: string,
    model: string,
    color: string,
};
