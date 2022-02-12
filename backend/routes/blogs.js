const express = require('express');
const taskRoute = express.Router();
const multer = require('multer');
//task model
let BlogModel = require('../models/blog');

//define storage for the images

const storage = multer.diskStorage({
    //destination for files
    destination: function (request, file, callback) {
      callback(null, '../uploads/images');
    },
  
    //add back the extension
    filename: function (request, file, callback) {
      callback(null, Date.now() + file.originalname);
    },
  });
  
  //upload parameters for multer
  const upload = multer({
    storage: storage,
    limits: {
      fieldSize: 1024 * 1024 * 3,
    },
  });


//get all data
taskRoute.route('/').get((_req, res, next) => {
    BlogModel.find((error, data) => {
        if (error) {
            return next(error);
        }else {
            res.json(data);
        }
    })
})


// Create Task data
taskRoute.route('/create-blog',upload.single('images')).post((req, res, next) => {
    BlogModel.create(req.body, (error, data) => {
        if (error){
            return next(error);
        } else {
            res.json(data);
            console.log("success")
        }
    })
})



//get task Data
taskRoute.route('/edit-blog/:id').get((req, res, next) => {
    BlogModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})



// Update task Data
taskRoute.route('/update-blog/:id').put((req, res, next) => {
    BlogModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log('blog succesfully Updated');
        }
    })
})



// Delete task Data
taskRoute.route('/delete-blog/:id').delete((req, res, next) => {
    BlogModel.findByIdAndDelete(req.params.id, (error, data) => {
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

