const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cvSchema = new Schema({
    profileImage: {
        type: String,
        required: true
    },
    smallIntroduction: {
        type: String,
        required: true
    },
    languages: {
        lang1: {
            name: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: true
            }
        },
        lang2: {
            name: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: true
            }
        },
        lang3: {
            name: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: true
            }
        },
        lang4: {
            name: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: true
            }
        },
        lang5: {
            name: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: true
            }
        },
        lang6: {
            name: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: true
            }
        },
        lang7: {
            name: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: true
            }
        }
    },
    education: {
        type: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    experience: {
        exp_1: {
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        },
        exp_2: {
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        },
        exp_3: {
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }
    },
    awards: {
        aw_1: {
            type: String,
            required: true
        },
        aw_2: {
            type: String,
            required: true
        },
        aw_3: {
            type: String,
            required: true
        },
        aw_4: {
            type: String,
            required: true
        },
        aw_5: {
            type: String,
            required: true
        },
        aw_6: {
            type: String,
            required: true
        },
        aw_7: {
            type: String,
            required: true
        }
    },
    skills: {
        sk_1: {
            type: String,
            required: true
        },
        sk_2: {
            type: String,
            required: true
        },
        sk_3: {
            type: String,
            required: true
        },
        sk_4: {
            type: String,
            required: true
        },
        sk_5: {
            type: String,
            required: true
        },
        sk_6: {
            type: String,
            required: true
        },
        sk_7: {
            type: String,
            required: true
        }
    }

}, { timestamps: true });

const Cv = mongoose.model('Cv', cvSchema);
module.exports = Cv;