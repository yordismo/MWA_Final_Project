
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
    console.log(req.body);
    if (verify(req.body)) {
        courseRepository.addCourse(req.body);
        res.status(201).json(req.body);
    }
    else {
        next({ msg: 'Invalid data' });
    }
};

const verify = function verifyStudentObject(course) {
    return course.hasOwnProperty("name") &&
        course.hasOwnProperty("code") ;
};


/*const storage = multer.diskStorage(
    {
        destination: './assets/pics/',
        filename: function ( req, file, cb ) {
            cb( null, Math.floor(new Date().getTime() / 1000)+".jpg");
        }
    }
);

const upload = multer({
    dest: './assets/pics/',
    limits: { fileSize: 1024*1024*1024 }, //3MB
    storage: storage,
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if(ext !== '.jpg') {
            return callback(new Error('Only .jpg are allowed'))
        }
        callback(null, true)
    }
});
*/


const handleUpload=(req, res) => {
    console.log(req.file);
    res.json(req.file);
}


module.exports = { handleUpload,getAllCourse, getCourseById,addCourse,deleteCourseId,getCourseByName};
