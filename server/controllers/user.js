const User = require ("../../client/src/models/user");

exports.registerform = async (req,res) => {
    const usernameExists = await User.findOne({
        username: req.body.username,
    });
    const emailExists = await User.findOne({
        email: req.body.email,
    });
    if (usernameExists) {
        return res.status(403).json({
            error: "Username is taken",
        });
    }
    if (emailExists) {
        return res.status(403).json({
            error: "Email is taken",
        })
    }

    // if new user, crete a new user

    const user = new User(req.body);
    await user.save();
    res.status(201).json({
        message: "Signup Successful! Please Log in to proceed",
    })
}