import mysql2 from "mysql2/promise"
import dbConfig from "@/lib/db"

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { supplierId, id } = req.query

    const connection = await mysql2.createConnection(dbConfig)

    await connection.execute(
      `INSERT INTO produit_fournisseur (id_produit, id_fournisseur) VALUES (?, ?);`,
      [id, supplierId]
    )

    res.status(200).json({ message: "Product added to supplier" })

    await connection.end()
  }
}

export default handler
