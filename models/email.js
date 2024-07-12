import mongoose from "mongoose";


const EmailSchema = mongoose.Schema({
    user: {
        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    message: {
        type: String,
        required: true
    }
}, { timestamp: true })

const Email = mongoose.model('Email', EmailSchema);