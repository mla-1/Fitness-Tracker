const express = require('express')
const workoutsession = require('../models/Session')
const ExerciseName = require('../models/exerciseName')
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


//////////////////////////////////////////////////////////////////////////////////////////
// POST a new workout SESSION
router.post('/session', async (req,res) => {
    const {SessionRoutine, SessionExercises} = req.body
    try {
        if (SessionExercises == undefined){
            console.log("undefined")
        }
        else{
            console.log("defined")
        }
        const session = await workoutsession.create({SessionRoutine, SessionExercises})
        res.status(200).json(session)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// POST a new ROUTINE 

// POST a new EXERCISE

// POST a new EXERCISE NAME
router.post('/exercisename', async (req, res) => {
    const {name, description} = req.body
    try {
        const exercisename = await ExerciseName.create({name, description})
        res.status(200).json(exercisename)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
})
//////////////////////////////////////////////////////////////////////////////////////////

// DELETE a workout SESSION
router.delete('/:id',(req,res) => {
    res.json({mssg: 'DELETE a workout'})
})

// UPDATE a workout SESSIOB
router.patch('/:id',(req,res) => {
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router