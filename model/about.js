const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
    aboutPhoto: {
        type: String,
        required: true
    },
    myHistory: {
        type: String,
        required: true
    },
    socialLinks: {
        instagram: {
            username: {
                type: String,
                required: true
            },
            urlAddress: {
                type: String,
                required: true
            }
        },
        linkdin: {
            username: {
                type: String,
                required: true
            },
            urlAddress: {
                type: String,
                required: true
            }
        },
        twitter: {
            username: {
                type: String,
                required: true
            },
            urlAddress: {
                type: String,
                required: true
            }
        },
        facebook: {
            username: {
                type: String,
                required: true
            },
            urlAddress: {
                type: String,
                required: true
            }
        },
        github: {
            username: {
                type: String,
                required: true
            },
            urlAddress: {
                type: String,
                required: true
            }
        },
        phoneNumber: {
            number: {
                type: String,
                required: true
            }
        }
    }
}, { timestamps: true });

const About = mongoose.model('About', aboutSchema);
module.exports = About;