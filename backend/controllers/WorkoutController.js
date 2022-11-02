const workoutsession = require('../models/Session')
const ExerciseName = require('../models/exerciseName')
const Routine = require('../models/Routine')
const Exercise = require('../models/Exercise')
const Set = require('../models/Sets')
const Session = require('../models/Session')

const mongoose = require('mongoose')

//GET (GET ALL WORKOUT SESSIONS)
const getworkoutsessions = async(req, res) => {
    const workoutsessions = await workoutsession.find({}).sort({createdAt: -1})
    res.status(200).json(workoutsessions)
}

//GET (GET A SINGLE WORKOUT SESSION)
const getsingleworkoutsession = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such Session"})
    }

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

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such Single Routine found"})
    }

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
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such Single Exercise Name found"})
    }

    const singleExerciseName = await ExerciseName.findById(id)

    if (!singleExerciseName) {
        return res.status(404).json({error: "No such Exercise Name Found"})
    }
    res.status(200).json(singleExerciseName)
}
//GET (GET AN EXERICSE CONTAINING NAME AND SETS INFO)
const getExercise = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such Single Exercise found"})
    }

    const singleExercise = await Exercise.findById(id)

    if (!singleExercise) {
        return res.status(404).json({error: "No such Exercise Found"})
    }
    res.status(200).json(singleExercise)
}
//GET (GET A SET)
const getSet = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such Single Set found"})
    }

    const singleSet = await Set.findById(id)

    if (!singleSet) {
        return res.status(404).json({error: "No such Set Found"})
    }
    res.status(200).json(singleSet)
}

//////////////////////////////////////////////////////////////
//CREATE 
const createsession = async (req, res) => {
    const {SessionName, SessionExercises} = req.body
    try {
        const session = await workoutsession.create({SessionName, SessionExercises})
        res.status(200).json(session)
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

const createroutine = async (req, res) => {
    const {title, exercises} = req.body
    try {
        if (title && exercises){
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

////////////////////////////////////////////////////////////////////////////
//DELETE
const deleteexercisename = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such exercise name found"})
    }

    const deletedexercisename = await ExerciseName.findOneAndDelete({_id: id})
    
    if (! deletedexercisename) {
        return res.status(200).json({error: 'No such exercise name found'})
    }
    
    res.status(400).json(deletedexercisename)
}
const deleteset = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such Single Set found"})
    }

}

const deleteexercise = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such Exercise found"})
    }

    const deletedexercise = await Exercise.findOneAndDelete({_id: id})

    if (! deletedexercise) {
        return res.status(400).json({error: "No such Exercise found"})
    }

    res.status(200).json(deletedexercise)
}

const deleteroutine = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such Routine found"})
    }

    const deletedroutine = await Routine.findOneAndDelete({_id: id})

    if (! deletedroutine) {
        return res.status(400).json({error: "No such Routine found"})
    }
    res.status(200).json(deletedroutine)
}

const deletesession = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such Session found"})
    }

    const deletedsession = await Session.findOneAndDelete({_id: id})

    if (! deletedsession) {
        return res.status(400).json({error: "No such Session found"})
    }
    res.status(200).json(deletedsession)
}

/////////////////////////////////////////////////////////////////////////////
//UPDATE 
const updateExerciseName = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such Exercise Name found"})
    }

    const updatedExerciseName = await ExerciseName.findOneAndUpdate({_id : id}, {
      ...req.body  
    })

    if (! updatedExerciseName) {
        return res.status(400).json({error: "No such Exercise name found"})
    }

    res.status(200).json(updatedExerciseName)
}

const updateSet = async (req, res) => {

    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such Set found"})
    }
    const updatedSet = await Set.findOneAndUpdate({_id: id} , {
        ...req.body
    })
    
    if (! updatedSet) {
        return res.status(400).json({error: "No such Set found"})
    }

    res.status(200).json(updatedSet)
    
}

const updateExercise = async (req, res) => {

    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such Exercise found"})
    }
    const updatedExercise = await Exercise.findOneAndUpdate({_id: id, 
        ...req.body
    })
    if (!updatedExercise) {
        return res.status(400).json({error: "No such Exercise found"})
    }
    res.status(200).json(updatedExercise)
}

const updateRoutine = async (req, res) => {

    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such Routine found"})
    }

    const updatedRoutine = await Routine.findOneAndUpdate({_id: id,
        ...req.body
    })
    if (! updatedRoutine){
        return res.status(400).json({error: "No such Routine found"})
    }
    res.status(200).json(updatedRoutine)
}

const updateSession = async (req, res) => {

    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such Session found"})
    }

    const updatedSession = await workoutsession.findOneAndUpdate({_id: id,
        ...req.body
    })
    if(!updatedSession){
        return res.status(400).json({error: "No such Session found"})
    }
    res.status(200).json(updateSession)
}
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
    getSet,

    deleteexercisename,
    deleteset,
    deleteexercise,
    deleteroutine,
    deletesession,

    updateExerciseName,
    updateSet,
    updateExercise,
    updateRoutine,
    updateSession
}