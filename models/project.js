import { type } from "express/lib/response";
import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    priority: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: String,
    tools: {
        type: [String],
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    trailer: {
        type: String,
        required: true,
    },
    figma: String,
    stars: Number,
    url: String,
    homepage: String,
});

const Project = mongoose.model("Project", UserSchema);

export default Project;
