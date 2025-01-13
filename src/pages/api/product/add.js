import mysql from "mysql2/promise"
import dbConfig from "@/lib/db"

const handler = async (req, res) => {
  if (req.method === "POST") {
    const connection = await mysql.createConnection(dbConfig)

    const { name, description, category, quantity, unitPrice } = req.body

    await connection.execute(
      `INSERT INTO produits (nom, description, categorie, quantite, prix_unitaire) VALUES (?, ?, ? ,?, ?);`,
      [name, description, category, quantity, unitPrice]
    )

    res.status(200).json({ message: "Product added" })

    await connection.end()
  }
}

export default handler
