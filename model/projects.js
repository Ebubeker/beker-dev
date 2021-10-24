const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slogan: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    repositoryLink: {
        type: String,
        required: true
    },
    websiteLink: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Projects = mongoose.model('Project', projectSchema);
module.exports = Projects;