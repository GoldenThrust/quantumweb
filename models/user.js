import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    country: String,
    area: String,
    visit: {
        type: Number,
        default: 1,
    },
    dates: {
        type: [Date],
        default: [Date.now]
    },
    ip_address: {
        type: String,
        required: true
    }
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

export default User;
