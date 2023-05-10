const express = require('express')

const router = express.Router()

//Get All Workouts
router.get('/', (req,res) => {
    res.json({msg: "GET all workouts"})
})

//Get Single Workout
router.get('/:id', (req,res) => {
    res.json({msg: "GET single workout"})
})

//Post New Workout
router.post('/', (req,res) => {
    res.json({msg: "POST new workout"})
})

//Delete Workout
router.delete('/:id', (req,res) => {
    res.json({msg: "DELETE a workout"})
})

//Update Workout
router.patch('/:id', (req,res) => {
    res.json({msg: "UPDATE a workout"})
})

module.exports = router