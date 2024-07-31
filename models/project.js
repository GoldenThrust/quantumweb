import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    key: {
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
    preview: {
        type: String,
        required: true,
    },
    hasvideo: {
        type: Boolean,
        default: false,
    },
    private: Boolean,
    figma: String,
    stars: Number,
    url: String,
    homepage: String,
});

const Project = mongoose.model("Project", ProjectSchema);

export default Project;
