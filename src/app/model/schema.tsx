import mongoose, { InferSchemaType, Model, Schema, model } from "mongoose";


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

type userSchema = InferSchemaType<typeof userSchema>;


export const getUserModel = (): Model<userSchema> => {
    try {
        return mongoose.model<userSchema>("User", userSchema);
    } catch (error) {
        return mongoose.models?.User;
    }
};

