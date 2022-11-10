import mysql from "mysql2/promise";

export async function query({query, values = []}) {
    const dbconnection = await mysql.createConnection({
        host: "localhost",
        port: "3306",
        database: "nextsql",
        user: "root",
        password: ""
    });
    try {
        const [results] = await dbconnection.execute(query, values);
        dbconnection.end();
        return results
    } catch (error) {
        throw Error(error.messages)
    }
}