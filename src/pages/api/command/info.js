import mysql from "mysql2/promise"
import dbConfig from "@/lib/db"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const connection = await mysql.createConnection(dbConfig)

    const [commands] = await connection.execute("SELECT * FROM commandes;")

    res.status(200).json(commands)

    await connection.end()
  }
}

export default handler
