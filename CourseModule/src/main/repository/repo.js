const database = require('../db/db_connection');
let db = database.dbConnection((dbObj) => {
    console.log("DB");
    db = dbObj;
});

const agg = [{
    $group: {
        _id: '$name', __id: { $first: "$_id" }
      }},{
      $project : 
        { _id: 1, __id: 1 } 
      }        
  ];

/***{ 
        labels: ['February', 'May', 'August', 'November'], 
        series: [ 
            [100,150, 130, 96] 
        ] 
    } */
  const agg1 = [{
    $group: {
        _id: '$name', __id: { $first: "$_id" }
      }},{
      $project : 
        {"labels":{ _id: 1}, "series":{ __id: 1} } 
      }        
  ];

async function getAggregation(){
    let courseCollection = db.collection("courseList");
    let dataSet = await courseCollection.aggregate(agg).toArray();
    console.log(dataSet);
    return dataSet;
}

async function getAggregationChart(){
    let courseCollection = db.collection("courseList");
    let dataSet = await courseCollection.aggregate(agg1).toArray();
    console.log(dataSet);
    return dataSet;
}

async function getAllCourseDictionaryId(_id){
    var id = new require('mongodb').ObjectID(_id);
    let courseCollection = db.collection("courseDictionary");
    let dataSet = await courseCollection.findOne({'_id': id});
    console.log(dataSet);
    return dataSet;
}


async function getAllCourseDictionary(){
    let courseCollection = db.collection('courseDictionary');
    let dataSet = await courseCollection.find().toArray();
    console.log(dataSet);
    return dataSet;
}

async function getAll(){
    let courseCollection = db.collection('courseList');
    let dataSet = await courseCollection.find().toArray();
    console.log(dataSet);
    return dataSet;
}

async function getById(_id){
    var id = new require('mongodb').ObjectID(_id);
    let courseCollection = db.collection("courseList");
    let dataSet = await courseCollection.findOne({'_id': id});
    console.log(dataSet);
    return dataSet;
}

async function addCourse(course){
    let courseCollection = db.collection("courseList");
    let dataSet = await courseCollection.insertMany([course]);
    console.log(dataSet);
}

async function addMultipleCourses(courses){
    let courseCollection = db.collection("courseList");
    let dataSet = await courseCollection.insertMany(courses);
    console.log(dataSet);
}

async function deleteById(_id){
    var id = new require('mongodb').ObjectID(_id);
    let courseCollection = db.collection("courseList");
    let dataSet = await courseCollection.deleteOne({"_id": id});
    console.log(dataSet);
}
async function patchCourseById(_id, course){
    var id = new require('mongodb').ObjectID(_id);
    let courseCollection = db.collection("courseList");
    if ('_id' in course) {
        delete course._id;
    }
    await courseCollection.updateOne(
        {"_id": id},
        {$set: course}
    );
}

async function searchByName(name){
    let courseCollection = db.collection("courseList");
    let dataSet = await courseCollection.find({ 'name': new RegExp(name, 'i') }).toArray();
    console.log(dataSet);
    return dataSet
}

module.exports = {getAggregation,getAllCourseDictionaryId,addCourse, getAll, getById, deleteById,searchByName, patchCourseById, addMultipleCourses,getAllCourseDictionary};



