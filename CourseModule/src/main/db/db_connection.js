const mongoClient = require("mongodb").MongoClient;
const db_name = "course";
//const db_url = 'mongodb://127.0.0.1:27017/' + db_name;
const db_url = 'mongodb+srv://mongoD:mongoD@cluster0.1xlhi.mongodb.net/course?retryWrites=true&w=majority';
async function dbConnection(callback){


    let _connection = null;

    mongoClient.connect(db_url, (err, client) => {
        if (err) {
            console.log("DB connection failed");
            return;
        }
        _connection = client.db(db_name);
        console.log("Run in");

        callback(_connection)
    });



}

module.exports = {dbConnection};
