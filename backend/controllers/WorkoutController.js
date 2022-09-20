const workoutsession = require('../models/Session')
const ExerciseName = require('../models/exerciseName')
const Routine = require('../models/Routine')
const Exercise = require('../models/Exercise')
const Set = require('../models/Sets')

//GET (GET ALL WORKOUT SESSIONS)
const getworkoutsessions = async(req, res) => {
    const workoutsessions = await workoutsession.find({}).sort({createdAt: -1})
    res.status(200).json(workoutsessions)
}

//GET (GET A SINGLE WORKOUT SESSION)
const getsingleworkoutsession = async(req, res) => {
    const {id} = req.params

    const singlesess = await workoutsession.findById(id)

    if (! singlesess) {
        return res.status(404).json({error: "No such session found "})
    }
    res.status(200).json(singlesess)
}

//GET (GET ALL WORKOUT ROUTINES)
const getAllWorkoutRoutines = async(req, res) => {
    const listOfRoutines = await Routine.find({}).sort({createdAt: -1})
    res.status(200).json(listOfRoutines)
}

//GET (GET SINGLE WORKOUT ROUTINE)
const getSingleWorkoutRoutine = async(req,res) => {
    const {id} = req.params
    const singleroutine = await Routine.findById(id)
    if (!singleroutine) {
        return res.status(404).json({error: "No such Routine found"})
    }
    res.status(200).json(singleroutine)
}
//GET (GET LIST OF ALL POSSIBLE AVAILABLE EXERCISE NAMES)
const getAllExerciseNames = async(req, res) => {
    const listofExerciseNames = await ExerciseName.find({}).sort({createdAt: -1})
    res.status(200).json(listofExerciseNames)
}
//GET (GET SINGLE EXERCISE NAME)
const getSingleExerciseName = async(req, res) => {
    const {id} = req.params
    const singleExerciseName = await ExerciseName.findById(id)

    if (!singleExerciseName) {
        return res.status(404).json({error: "No such Exercise Name Found"})
    }
    res.status(200).json(singleExerciseName)
}
//GET (GET AN EXERICSE CONTAINING NAME AND SETS INFO)
const getExercise = async(req, res) => {
    const {id} = req.params
    const singleExercise = await Exercise.findById(id)

    if (!singleExercise) {
        return res.status(404).json({error: "No such Exercise Found"})
    }
    res.status(200).json(singleExercise)
}
//GET (GET A SET)
const getSet = async(req, res) => {
    const {id} = req.params
    const singleSet = await Set.findById(id)

    if (!singleSet) {
        return res.status(404).json({error: "No such Set Found"})
    }
    res.status(200).json(singleSet)
}
//////////////////////////////////////////////////////////////
//CREATE 
const createsession = async (req, res) => {
    const {SessionRoutine, SessionExercises} = req.body
    try {
        // if both the routine and exercises are undefined then
        if (SessionExercises == undefined && SessionRoutine == undefined){
            console.log("EXERCISES AND ROUTINE undefined")
            res.status(400).json({error: error.message})
        }
        // if only the routine is defined
        else if ((SessionRoutine) && (SessionExercises == undefined)){
            console.log("ONLY ROUTINE DEFINED")
            const session = await workoutsession.create({SessionRoutine})
            res.status(200).json(session)
        }
        // if only the exercises is defined and being used 
        else {
            console.log("ONLY EXERCISES DEFINED")
            const session = await workoutsession.create({SessionExercises})
            res.status(200).json(session)
        }
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

const createroutine = async (req, res) => {
    const {title, exercises} = req.body
    try {
        if (title && exericses){
            const routine = await Routine.create({title, exercises})
            res.status(400).json(routine)
        }
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

const createexercise = async (req, res) => {
    const {name, exercisesets} = req.body
    try {
        const completeexercise = await Exercise.create({name, exercisesets})
        res.status(200).json(completeexercise)
    }catch (error) {
        res.status(400).json({error : error.message})
    }
}

const createset = async (req, res) => {
    const {setnumber, weight, reps} = req.body
    try {
        const completeset = await Set.create({setnumber, weight, reps})
        res.status(200).json(completeset)
    }catch (error) {
        res.status(400).json({error: error.message})
    }
}

const createexercisename = async (req, res) => {
    const {name, description} = req.body
    try {
        const exercisename = await ExerciseName.create({name, description})
        res.status(200).json(exercisename)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}

//DELETE


//UPDATE

module.exports = {
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
    getSet
}