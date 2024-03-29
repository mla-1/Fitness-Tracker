const express = require('express')
const workoutsession = require('../models/Session')
const ExerciseName = require('../models/exerciseName')
const Routine = require('../models/Routine')
const Exercise = require('../models/Exercise')
const Set = require('../models/Sets')
const router = express.Router()

const {
    createexercisename,
    createset,
    createexercise,
    createroutine,
    createsession,

    getworkoutsessions,
    getsingleworkoutsession,
    getAllWorkoutRoutines,
    getSingleWorkoutRoutine,
    getAllExerciseNames,
    getSingleExerciseName,
    getExercise,
    getSet,

    deleteexercise,
    deleteset,
    deleteexercisename,
    deleteroutine,
    deletesession,

    updateExerciseName,
    updateSet,
    updateExercise,
    updateRoutine,
    updateSession

} = require('../controllers/WorkoutController')


// GET all workouts SESSIONS (HISTORY)
router.get('/sessions' , getworkoutsessions) 

// GET a single workout SESSION
router.get('/sessions/:id', getsingleworkoutsession) 

//GET all workout routines
router.get('/routines',getAllWorkoutRoutines) 

//GET a single workout routine
router.get('/routines/:id',getSingleWorkoutRoutine)

// GET list of all possible available exercises names
router.get('/exercisenames',getAllExerciseNames) 

//GET ExerciseName
router.get('/exercisenames/:id',getSingleExerciseName)

//GET an Exercise (Contains Name and Sets Info)
router.get('/exercise/:id', getExercise)

//GET a Set
router.get('/set/:id', getSet) 

////////////////////////////////////////////////////////////////////////////////////////////////
// POST a new workout SESSION
router.post('/session', createsession)

// POST a new ROUTINE 
router.post('/routine', createroutine) 

// POST a new EXERCISE
router.post('/exercise', createexercise)

// POST A new SET
router.post('/set', createset) 

// POST a new EXERCISE NAME
router.post('/exerciseNames', createexercisename)

//////////////////////////////////////////////////////////////////////////////////////////

// DELETE a workout SESSION
router.delete('/session/:id', deletesession)

// DELETE an Exercise
router.delete('/exercise/:id', deleteexercise)

// DELETE an Exercise Name
router.delete('/exerciseNames/:id', deleteexercisename)

// Delete a Set
router.delete('/set/:id', deleteset)

// Delete a Routine
router.delete('/routine/:id', deleteroutine)

//////////////////////////////////////////////////////////////////////////////////////////

//UPDATE a workout Session
router.patch('/session/:id',updateSession)
//UPDATE an Exercise
router.patch('/exercise/:id', updateExercise)

//UPDATE an Exercise Name
router.patch('/exerciseNames/:id', updateExerciseName)

//UPDATE a Set
router.patch('/set/:id', updateSet)

//Update a Routine
router.patch('/routine/:id', updateRoutine)


//////////////////////////////////////////////////////////////////////////////////////////



module.exports = router