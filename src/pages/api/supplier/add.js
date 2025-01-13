import mysql from "mysql2/promise"
import dbConfig from "@/lib/db"

const handler = async (req, res) => {
  if (req.method === "POST") {
    const connection = await mysql.createConnection(dbConfig)

    const { name, address } = req.body

    await connection.execute(
      `INSERT INTO fournisseurs (nom, adresse) VALUES (?, ?);`,
      [name, address]
    )

    res.status(200).json({ message: "Supplier added" })

    await connection.end()
  }
}

export default handler
