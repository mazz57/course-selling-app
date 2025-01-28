const { Router } = require('express');
const { adminModel } = require('../db')
const adminRouter = Router();
const jwt = require('jsonwebtoken');

adminRouter.post('/signup', async (req, res) => {
   const { email, password, firstName, lastName } = req.body;

   await adminModel.create({
    email,
    password,
    firstName,
    lastName
   });
   res.json({
        message: "Admin created successfully"
   })
});

adminRouter.post('/signin', function(req, res) {
    const { email, password } = req.body;

    const admin = adminModel.findOne({email, password});
    if(admin){
        const token = jwt.sign({
            id: user._id,
        }, JWT_ADMIN_SECRET);

        res.json({
            token: token
        });
    }else {
        res.status(401).json({
            message: "Invalid email or password"
        });
    }

});

adminRouter.post('/course',async function(req, res) {
    const { title, description, price, imageurl, creatorid } = req.body;

    await courseModel.create({
        title,
        description,
        price,
        imageurl,
        creatorid
    });
    
    res.json({
        message: "Course created successfully",
        creatorid:course._id
    });
});

adminRouter.put('/course', function(req, res) {
    res.json({});
});

adminRouter.post('/course/bulk', function(req, res) {
    res.json({});
});

module.exports = {
    adminRouter: adminRouter,
};