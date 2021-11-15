
const courseRepository = require('../repository/repo');
const multer = require('multer');
const path = require('path');



const getAllCourse =async (req, res) => {
    const results = await courseRepository.getAll();
    res.status(200).json(results)
};

const getCourseById =async (req, res) => {
    const results = await courseRepository.getById(req.params.id);
    res.status(200).json(results)
};

const getCourseByName =async (req, res) => {
    const results = await courseRepository.searchByName(req.params.name);
    res.status(200).json(results)
};


const deleteCourseId =  async (req, res, next) => {
    const results = await courseRepository.deleteById(req.params.id);
    res.status(200).json({ msg: 'Course deleted successfully' })
};

const addCourse = (req, res, next) => {
        courseRepository.addCourse(req.body);
        res.status(201).json(req.body);
};

const addMultipleCourses = (req, res, next) => {
    courseRepository.addMultipleCourses(req.body);
    res.status(201).json(req.body);
}

const patchCourse = (req, res, next) => {
    courseRepository.patchCourseById(req.params.id, req.body);
    res.status(201).json(req.body);
};

const handleUpload=(req, res) => {
    console.log(req.file);
    res.json(req.file);
}


module.exports = { handleUpload,getAllCourse, getCourseById,addCourse,deleteCourseId,getCourseByName,patchCourse, addMultipleCourses};
