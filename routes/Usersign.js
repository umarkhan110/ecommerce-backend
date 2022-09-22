const express = require('express')
const router = express.Router();
const Users = require('../models/User.js');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Signup Route for Service Provider

router.post('/signup', async (req, res) => {
    const { username, email, password} = req.body;
    try {
        const userExist = await Users.findOne({ email: email });
        if (userExist) {
            return res.status(422).send({ message: "Email is already exist." });
        } else {
            const user = new Users({ username, email,password});
            await user.save();
            return res.status(200).json({ message: "User Created Successfully" });
        }
    } catch (error) {
        console.log(error)
    }
})

//Signin Route for Service Provider
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        let token;
        if (!email || !password) {
            return res.status(400).json({ error: "plz fill all feild" })
        }
        const emailExist = await Users.findOne({ email: email });
        if (emailExist) {
            const passMatch = await bcrypt.compare(password, emailExist.password);
            token = await emailExist.generateAuthToken();
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 300000),
                httpOnly: true
            });
            if (!passMatch) {
                res.status(400).json({ error: "Password is not correct" })
            } else {
                res.json({ message: "Login Successfully" });
            }
        } else {
            res.status(400).json({ error: "Wrong Email" });
        }
    } catch (error) {
        console.log(error)
    }
})



module.exports = router;