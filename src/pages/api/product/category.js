import mysql from "mysql2/promise";
import dbConfig from "@/lib/db";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const connection = await mysql.createConnection(dbConfig);

    const { name } = req.query;

    const [categories] = await connection.execute("select * from produits where categorie = ?;", [name]);

    res.status(200).json(categories);

    await connection.end();
  }
}

export default handler;