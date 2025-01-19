import mysql2 from "mysql2/promise"
import dbConfig from "@/lib/db"

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { commandId, id, quantity } = req.query

    const connection = await mysql2.createConnection(dbConfig)

    const [product] = await connection.execute(
      "Select quantite from produits where id = ?",
      [id]
    )

    if (product[0].quantite < quantity) {
      res.status(400).json({ message: "Not enough product in stock" })
      await connection.end()
      return
    }

    await connection.execute(
      `INSERT INTO Lignes_Commande (id_commande, id_produit, quantite) VALUES (?, ?, ?);`,
      [commandId, id, quantity]
    )

    await connection.execute(
      `UPDATE produits SET quantite = quantite - ? WHERE id = ?;`,
      [quantity, id]
    )

    res.status(200).json({ message: "Product added to command" })

    await connection.end()

    return
  }
}

export default handler
