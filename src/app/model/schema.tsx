import mongoose, { Schema, Model } from "mongoose";

const { model } = mongoose;

const userSchema = new Schema({
    unit: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

interface IUser {
    unit: number;
    email: string;
    password: string;
}

export const getUserModel = (): Model<IUser> => {
    try {
        return model<IUser>('User', userSchema);
    } catch (error) {
        return mongoose.models.User;
    }
};

