import { type } from "express/lib/response";
import mongoose from "mongoose";


const Email = mongoose.Schema({
    Vis: {
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