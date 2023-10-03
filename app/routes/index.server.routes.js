const express = require('express');
const router = express.Router();

router.get('/', (req,res,next)=>{
    res.render('index',{title:'Home'})
})

router.get('/contact', (req,res,next)=>{
    res.render('contact',{title:'Contact'})
})
router.get('/projects', (req,res,next)=>{
    res.render('projects',{title:'Projects'})
})
router.get('/services', (req,res,next)=>{
    res.render('services',{title:'Services'})
})



router.get('/home', (req,res,next)=>{
    res.render('home',{title:'Home'})
})


router.get('/about', (req,res,next)=>{
    res.render('about',{title:'About'})
})

module.exports = router;