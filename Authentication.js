const jwt = require("jsonwebtoken");
const Users= require("./models/User");


const Authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await Users.findOne({ _id: verifyToken._id, "tokens.token": token });
        if (!rootUser) { throw new Error('User not Found') }
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        req.message = rootUser.message;
        next();

    } catch (err) {
        res.status(401).send('No token Provided')
        console.log(err)
    }
}

module.exports = Authenticate;