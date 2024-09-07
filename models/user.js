import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    country: String,
    city: String,
    loc: String,
    accepted: String,
    visit: {
        type: Number,
        default: 1,
    },
    dates: {
        type: [Date],
        default: [new Date()]
    },
    ip_address: {
        type: String,
        required: true,
        unique: true
    },
    blocked: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

export default User;
