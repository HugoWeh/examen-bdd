import mysql from 'mysql2/promise';
import dbConfig from '@/lib/db';

const handler = async (req, res) => {
  if (req.method === "POST") {
    const connection = await mysql.createConnection(dbConfig);

    const { lastName, firstName, address, phone } = req.body;

    await connection.execute(
      `INSERT INTO clients (nom, prenom, adresse, telephone) VALUES (?, ?, ?, ?);`,
      [lastName, firstName, address, phone]
    );

    res.status(200).json({ message: "Client added" });

    await connection.end();
  }
}

export default handler;