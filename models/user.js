import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    area: {
        type: String,
        required: false
    },
    ip_adress: {
        type: String,
        required: true
    }
}, { timestamps: true })

const User = mongoose.model("User", UserSchema);

export default User;