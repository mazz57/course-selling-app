const { Router } = require('express')
const { userModel } = require('../db')

userRouter = Router();

userRouter.post('/signup',async function(req,res){
    const { email, password, firstName, lastName } = req.body;

    await userModel.create({
     email,
     password,
     firstName,
     lastName
    });
    res.json({
         message: "Admin created successfully"
    })
 
})

userRouter.post('/signin',async function(req,res){
    const { email, password } = req.body;

    const user = userModel.findOne({email, password});
    if(user){
        const token = jwt.sign({
            id: user._id,
        }, JWT_USER_SECRET);

        res.json({
            token: token
        });
    }else {
        res.status(401).json({
            message: "Invalid email or password"
        });
    }
})



userRouter.post('/purchase', function(req,res){
    
})

module.exports = {
    userRouter: userRouter,
}
