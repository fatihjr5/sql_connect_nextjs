import mysql from "mysql2/promise";

export default async function handler(req, res) {
    const dbconnection = await mysql.createConnection({
        host: "localhost",
        port: "3306",
        database: "nextsql",
        user: "root",
        password: ""
    });
    try {
        const query = "SELECT productid, productname, productimage FROM products";
        const values = [];
        const [data] = await dbconnection.execute(query, values);
        dbconnection.end();
    
        res.status(200).json({ products: data });
    } catch (error) {
        // unhide to check error
        res.status(500).json({ error: error.message });
    }
}