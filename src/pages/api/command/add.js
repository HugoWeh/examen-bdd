import mysql from "mysql2/promise";
import dbConfig from "@/lib/db";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const connection = await mysql.createConnection(dbConfig);

    const { clientId, date } = req.body;

    await connection.execute(
      `INSERT INTO commandes (id_client, date) VALUES (?, ?);`,
      [clientId, date]
    );

    res.status(200).json({ message: "Command added" });

    await connection.end();
  }
};

export default handler;