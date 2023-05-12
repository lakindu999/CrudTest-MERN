const express = require('express')
const {createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout} = require('../controllers/workoutContoller')

const router = express.Router()

//Get All Workouts
router.get('/',getWorkouts)

//Get Single Workout
router.get('/:id',getWorkout)

//Post New Workout
router.post('/',createWorkout )

//Delete Workout
router.delete('/:id',deleteWorkout)

//Update Workout
router.patch('/:id',updateWorkout)

module.exports = router