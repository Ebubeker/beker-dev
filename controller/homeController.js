const Projects = require('../model/projects');
const Cv = require('../model/cv');
const About = require('../model/about');

let home = (req, res) => {
    Projects.find()
        .then((result) => {
            Cv.find()
                .then((resque) => {
                    About.find()
                        .then((resu) => {
                            res.render('index', { title: "Home", products: result, cv: resque, about: resu });
                        })
                })
        })
};

module.exports = { home };