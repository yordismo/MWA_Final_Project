const database = require('../db/db_connection');
let db = database.dbConnection((dbObj) => {
    console.log("DB");
    db = dbObj;
});

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

async function deleteById(_id){
    var id = new require('mongodb').ObjectID(_id);
    let courseCollection = db.collection("courseList");
    let dataSet = await courseCollection.deleteOne({"_id": id});
    console.log(dataSet);
}


async function searchByName(name){
    let courseCollection = db.collection("courseList");
    let dataSet = await courseCollection.find({ 'name': new RegExp(name, 'i') }).toArray();
    console.log(dataSet);
    return dataSet
}

module.exports = {addCourse, getAll, getById, deleteById,searchByName};



