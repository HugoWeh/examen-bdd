import mysql from 'mysql2/promise';
import dbConfig from '@/lib/db';
import fs from 'fs';

const handler = async (req, res) => {
  if (req.method === "POST") {
    const connection = await mysql.createConnection(dbConfig);

    const createTables = fs.readFileSync('src/sql/tables.sql', 'utf-8');
    
    await connection.execute(createTables);

    res.status(200).json({ message: "Tables created" });

    await connection.end();
  }
}

export default handler;