import mongoose from "mongoose";


const ReferrerSchema = mongoose.Schema({
    user: {
        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    referrer: {
        type: String,
        required: true
    }
}, { timestamp: true })

const Referrer = mongoose.model('Referrer', ReferrerSchema);
export default Referrer;