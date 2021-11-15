const {addMultipleCourses, handleUpload,getAllCourse, getCourseById,addCourse, deleteCourseId,getCourseByName, patchCourse} = require('../controller/controller');
const express = require('express');
const { get } = require('http');
const router = express.Router();

//router.post("/upload", upload.single('image'),  handleUpload);
router.get("/", getAllCourse);
router.get("/:id", getCourseById);
router.post("/", addCourse);
router.post("/addMultiple", addMultipleCourses);
router.delete("/:id", deleteCourseId);
router.get("/search/:name", getCourseByName);
router.get("/signUp", getCourseByName);
router.get("/aggrega", get);
router.patch("/:id", patchCourse)
module.exports = { router };