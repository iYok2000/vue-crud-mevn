const express = require('express');
const taskRoute = express.Router();

//task model
let TaskModel = require('../models/task');

//get all data
taskRoute.route('/').get((_req, res, next) => {
    TaskModel.find((error, data) => {
        if (error) {
            return next(error);
        }else {
            res.json(data);
        }
    })
})

// Create Task data
taskRoute.route('/create-task').post((req, res, next) => {
    TaskModel.create(req.body, (error, data) => {
        if (error){
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Edit task Data
taskRoute.route('/edit-task/:id').get((req, res, next) => {
    TaskModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Update task Data
taskRoute.route('/update-task/:id').put((req, res, next) => {
    TaskModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log('Task succesfully Updated');
        }
    })
})

// Delete task Data
taskRoute.route('/delete-task/:id').delete((req, res, next) => {
    TaskModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    
    })
})

module.exports = taskRoute;