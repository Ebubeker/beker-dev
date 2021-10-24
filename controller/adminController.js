const Projects = require('../model/projects');
const Cv = require('../model/cv');
const About = require('../model/about');
const User = require('../model/user');
const Email = require('../model/subscription');

let getAdmin = (req, res) => {

    if (req.session.authenticated === true) {
        Projects.find()
            .then((result) => {
                Cv.find()
                    .then((resque) => {
                        About.find()
                            .then((resu) => {
                                res.render('admin', { title: "Admin", products: result, cv: resque, about: resu });
                            })
                    })
            })
    } else {
        res.redirect('/login');
    }

}

let login = (req, res) => {
    res.render('login', { title: "Login", par: ' login' });
}

let postLogin = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    User.findOne({ username: username, password: password }, (err, user) => {
        if (err) {
            console.log(err)
        }
        if (!user) {
            res.render('login', { title: 'Admin-Login', par: 'Login Unsuccessful, Try Again!' });
        } else {
            req.session.authenticated = true;
            res.redirect('/admin22042004');
        }
    });

}

let getProducts = (req, res) => {
    Projects.find()
        .then((result) => {
            res.render('projectEdit', { title: "Admin", products: result });
        })
}

let getCv = (req, res) => {
    Cv.find()
        .then((result) => {
            res.render('cvEdit', { title: "Admin", cv: result });
        })
}

let getAbout = (req, res) => {
    About.find()
        .then((result) => {
            res.render('aboutEdit', { title: "Admin", about: result });
        })
}



let postRequestProjects = (req, res) => {
    const title = req.body.title,
        slogan = req.body.slogan,
        image = req.body.image,
        description = req.body.description,
        repositoryLink = req.body.repositoryLink,
        websiteLink = req.body.websiteLink,
        id = req.body.id.replace(/\s+/, "");

    Projects.findById(id)
        .then((result) => {
            result.title = title;
            result.slogan = slogan;
            result.image = image;
            result.description = description;
            result.repositoryLink = repositoryLink;
            result.websiteLink = websiteLink;

            result.save();
            res.redirect('/admin22042004')
        })
        .catch((err) => console.log(err))
}

let postRequestCv = (req, res) => {
    const profileImg = req.body.profileImg,
        description = req.body.description,
        lang1name = req.body.lang1Name,
        lang1value = req.body.lang1value,
        lang2name = req.body.lang2Name,
        lang2value = req.body.lang2value,
        lang3name = req.body.lang3Name,
        lang3value = req.body.lang3value,
        lang4name = req.body.lang4Name,
        lang4value = req.body.lang4value,
        lang5name = req.body.lang5Name,
        lang5value = req.body.lang5value,
        lang6name = req.body.lang6Name,
        lang6value = req.body.lang6value,
        lang7name = req.body.lang7Name,
        lang7value = req.body.lang7value,
        edname = req.body.edname,
        eddate = req.body.eddate,
        eddescription = req.body.eddescription,
        exp_1Name = req.body.exp_1Name,
        exp_1Description = req.body.exp_1Description,
        exp_2Name = req.body.exp_2Name,
        exp_2Description = req.body.exp_2Description,
        exp_3Name = req.body.exp_3Name,
        exp_3Description = req.body.exp_3Description,
        aw_1 = req.body.aw_1,
        aw_2 = req.body.aw_2,
        aw_3 = req.body.aw_3,
        aw_4 = req.body.aw_4,
        aw_5 = req.body.aw_5,
        aw_6 = req.body.aw_6,
        aw_7 = req.body.aw_7,
        sk_1 = req.body.sk_1,
        sk_2 = req.body.sk_2,
        sk_3 = req.body.sk_3,
        sk_4 = req.body.sk_4,
        sk_5 = req.body.sk_5,
        sk_6 = req.body.sk_6,
        sk_7 = req.body.sk_7;


    Cv.find()
        .then((result) => {
            let resu = result[0];

            resu.profileImage = profileImg;

            resu.smallIntroduction = description;

            resu.languages.lang1.name = lang1name;
            resu.languages.lang1.value = lang1value;

            resu.languages.lang2.name = lang2name;
            resu.languages.lang2.value = lang2value;

            resu.languages.lang3.name = lang3name;
            resu.languages.lang3.value = lang3value;

            resu.languages.lang4.name = lang4name;
            resu.languages.lang4.value = lang4value;

            resu.languages.lang5.name = lang5name;
            resu.languages.lang5.value = lang5value;

            resu.languages.lang6.name = lang6name;
            resu.languages.lang6.value = lang6value;

            resu.languages.lang7.name = lang7name;
            resu.languages.lang7.value = lang7value;

            resu.education.type = edname;
            resu.education.date = eddate;
            resu.education.description = eddescription;


            resu.experience.exp_1.name = exp_1Name;
            resu.experience.exp_1.description = exp_1Description;

            resu.experience.exp_2.name = exp_2Name;
            resu.experience.exp_2.description = exp_2Description;

            resu.experience.exp_3.name = exp_3Name;
            resu.experience.exp_3.description = exp_3Description;

            resu.awards.aw_1 = aw_1;
            resu.awards.aw_2 = aw_2;
            resu.awards.aw_3 = aw_3;
            resu.awards.aw_4 = aw_4;
            resu.awards.aw_5 = aw_5;
            resu.awards.aw_6 = aw_6;
            resu.awards.aw_7 = aw_7;

            resu.skills.sk_1 = sk_1;
            resu.skills.sk_2 = sk_2;
            resu.skills.sk_3 = sk_3;
            resu.skills.sk_4 = sk_4;
            resu.skills.sk_5 = sk_5;
            resu.skills.sk_6 = sk_6;
            resu.skills.sk_7 = sk_7;

            resu.save();
            res.redirect('/admin22042004')

        })
        .catch((err) => console.log(err))
}

let postRequestAbout = (req, res) => {
    const aboutImage = req.body.aboutImage,
        myHistory = req.body.myHistory,
        instagramUsername = req.body.instagramUsername,
        instagramLink = req.body.instagramLink,
        linkdinUsername = req.body.linkdinUsername,
        linkdinLink = req.body.linkdinLink,
        twitterUsername = req.body.twitterUsername,
        twitterLink = req.body.twitterLink,
        facebookUsername = req.body.favebookUsername,
        facebookLink = req.body.facebookLink,
        githubUsername = req.body.githubUsername,
        githubLink = req.body.githubLink,
        number = req.body.number;

    About.find()
        .then((resu) => {
            const result = resu[0];
            result.aboutPhoto = aboutImage;
            result.myHistory = myHistory;
            result.socialLinks.instagram.username = instagramUsername;
            result.socialLinks.instagram.urlAddress = instagramLink;
            result.socialLinks.linkdin.username = linkdinUsername;
            result.socialLinks.linkdin.urlAddress = linkdinLink;
            result.socialLinks.twitter.username = twitterUsername;
            result.socialLinks.twitter.urlAddress = twitterLink;
            result.socialLinks.facebook.username = facebookUsername;
            result.socialLinks.facebook.urlAddress = facebookLink;
            result.socialLinks.github.username = githubUsername;
            result.socialLinks.github.urlAddress = githubLink;
            result.socialLinks.phoneNumber.number = number;

            result.save();
            res.redirect('/admin22042004')
        })
        .catch((err) => console.log(err))
}

let subscription = (req, res) => {
    const email = req.body.email;

    const emailer = new Email({ email });

    emailer.save()
        .then((result) => {
            res.redirect('/home');
        })
        .catch((err) => {
            console.log(err);
        })

}

module.exports = { getAdmin, getProducts, getCv, getAbout, postRequestProjects, postRequestCv, postRequestAbout, login, postLogin, subscription };