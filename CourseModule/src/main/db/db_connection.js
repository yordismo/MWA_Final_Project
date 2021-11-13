const mongoClient = require("mongodb").MongoClient;
const db_name = "course";
const db_url = 'mongodb://127.0.0.1:27017/' + db_name;

async function dbConnection(callback){
    console.log("Run in");

    let _connection = null;

    mongoClient.connect(db_url, (err, client) => {
        if (err) {
            console.log("DB connection failed");
            return;
        }
        _connection = client.db(db_name);
        callback(_connection)
    });



}

module.exports = {dbConnection};
