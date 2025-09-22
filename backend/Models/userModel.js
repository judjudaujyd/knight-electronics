import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        required: true,
        type: String
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

const userModel = new mongoose.model("user", userSchema);

export default userModel;