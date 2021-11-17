
const courseRepository = require('../repository/repo');
const path = require('path');


const getAggregations =async (req, res) => {
    const results = await courseRepository.getAggregation();
    res.status(200).json(results)
};


const getAggregationsChart =async (req, res) => {
    const results = await courseRepository.getAggregation();
    res.status(200).json(     
      
            [12, 17, 7, 17, 23, 18, 38]
        
    )
};


const getCourseDictionaryById =async (req, res) => {
    const results = await courseRepository.getAllCourseDictionaryId(req.params.id);
    res.status(200).json(results)
};

const getCourseDictionary =async (req, res) => {
    const results = await courseRepository.getAllCourseDictionary();
    res.status(200).json(results)
};

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


module.exports = {getAggregationsChart,getAggregations,getCourseDictionaryById,getCourseDictionary, handleUpload,getAllCourse, getCourseById,addCourse,deleteCourseId,getCourseByName,patchCourse, addMultipleCourses};
