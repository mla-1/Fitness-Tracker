const express = require('express')

const router = express.Router()

// GET all workouts (HISTORY)
router.get('/' , (req,res) => {
    res.json({mssg: 'GET all workouts'})
})

// GET user profile (PROFILE)
router.get('/profile',(req, res) => {
    res.json({mssg: 'GET current user profile'})
})

// GET list of all possible available exercises that the CURRENT
//user added
router.get('/list',(req,res) => {
    res.json({mssg: 'Get list of all workouts for cur user'})
})

// GET a single workout
router.get('/:id',(req, res) => {
    res.json({mssg: 'GET a single workout'})
})



// POST a new workout
router.post('/',(req,res) => {
    res.json({mssg: 'POST a new workout'})
})

// DELETE  a workout
router.delete('/:id',(req,res) => {
    res.json({mssg: 'DELETE a workout'})
})

// UPDATE a workout
router.patch('/:id',(req,res) => {
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router