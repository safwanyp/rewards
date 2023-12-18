const pool = require("./pool");

async function execDatabaseQuery(query, params = []) {
    pool.connect((err, client, done) => {
        if (err) {
            console.log("Error connecting to database.", err);
        }
        client.query(query, params, (err, res) => {
            done();
            if (err) {
                console.log("Error executing query.", err);
            }
            return res;
        });
    });
}

module.exports = execDatabaseQuery;
