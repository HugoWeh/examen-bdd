import mysql from 'mysql2/promise';
import dbConfig from '@/lib/db';

const handler = async (req, res) => {
  if (req.method === "GET") {
    const connection = await mysql.createConnection(dbConfig);

    const [orders] = await connection.execute(
      `SELECT DISTINCT cl.* from clients cl join commandes co on co.id_client = cl.id;`
    );

    res.status(200).json(orders);

    await connection.end();
  }
}

export default handler;