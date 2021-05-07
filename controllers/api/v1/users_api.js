const User = require('../../../models/user');
const jwt = require('jsonwebtoken');

module.exports.create = async function(req, res){
    try {
        if(req.body.password != req.body.confirm_password){
            console.log('Password and Confirm Password does not match');
            return res.status(400).json({
                message: 'Password and Confirm Password does not match',
            });
        }
        let user = await User.findOne({email: req.body.email});
    
        if(user){
            console.log('User already exists in the database');
            return res.status(409).json({
                message: 'User account by the email provided already exists',
            });
        }else{
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            });
    
            return res.status(200).json({
                message: 'User account created, please sign-in to continue',
            });
        }
    } catch (error) {
        console.log('Error in creating user: ', error);
        return res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

module.exports.createSession = async function(req, res){
    try {
        let user = await User.findOne({email: req.body.email});
        if(!user || (user.password != req.body.password)){
            return res.status(422).json({
                message: 'Invalid Username/Password',
            });
        }
        if(user){
            return res.status(200).json({
                message: 'Logged in successfully, here is your token:',
                data: {
                    token: jwt.sign(user.toJSON(), 'todoapp', {expiresIn: '1000000'}),
                }
            });
        }
    } catch (error) {
        console.log('Error in creating user session:', error);
        return res.status(500),json({
            message: 'Internal Server Error',
        });
    }
}