import mysql from 'mysql2/promise';
import dbConfig from '@/lib/db';

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { name } = req.query;

    const connection = await mysql.createConnection(dbConfig);

    const [products] = await connection.execute(`SELECT * from ${name}`);

    res.status(200).json(products);

    await connection.end();
  }
}

export default handler;