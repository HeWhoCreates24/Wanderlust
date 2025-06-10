const User = require("../models/user.js");

module.exports.getSignup = (req, res) => {
    res.render("users/signup.ejs");
}

module.exports.postSignup = async (req, res) => {
    try{
        const {email, username, password} = req.body;
        let user = new User({email, username});
        let registeredUser = await User.register(user, password);
        req.login(registeredUser, (err) => {
            if(err){
                return next(err);
            }else{
                req.flash("success", `Hello ${username}, welcome to Wanderlust!`);
                res.redirect("/listings");
            }
        })
    }catch(err){
        req.flash("failure", err.message);
        res.redirect("/signup");
    }
}

module.exports.getLogin = (req, res) => {
    res.render("users/login.ejs");
}

module.exports.postLogin = async (req, res) => {
        req.flash("success", `Welcome back ${req.body.username}`);
        let redirectUrl = res.locals.redirectUrl || "/listings";
        if(res.locals.redirectUrl){
            req.flash("success", "Continue where you left!")
        }
        res.redirect(redirectUrl);
}

module.exports.getLogout = (req, res, next) => {
    let user = req.user.username;
    req.logout((err) => {
        if(err){
            return next(err);
        }else{
            req.flash("success", `${user} successfully logged out`);
            res.redirect("/listings");
        }
    });
}