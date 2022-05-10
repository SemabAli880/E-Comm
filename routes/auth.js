const router=require('express').Router();
const User=require('../model/User')

const bcrypt=require('bcrypt')

// //Register Method
// router.post('/register',async(req,res)=>{
//     const user=new User({
//         username:req.body.username,
//         email:req.body.email,
//         password:req.body.password,
// });
//     try {
//         // const salt=await bcrypt.genSalt(10);
//         // const hashPass=await bcrypt.hash(req.body.password,salt);
        
//         const newUser=await user.save();
//         console.log(user);
//         res.status(201).json(user);
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })
router.post("/register", async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    try {
      const user = await newUser.save();
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });




module.exports=router