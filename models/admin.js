import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    ip_address: [String],
    password: {
        type: String,
        required: true
    },
    resetcode: String,
    image: {
        type: String,
        default: "img/olajide.png"
    },
}, { timestamps: true })

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;