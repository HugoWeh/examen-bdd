import mysql2 from "mysql2/promise"
import dbConfig from "@/lib/db"

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { commandId, id, quantity } = req.query

    console.log(commandId, id, quantity)

    const connection = await mysql2.createConnection(dbConfig)

    await connection.execute(
      `INSERT INTO Lignes_Commande (id_commande, id_produit, quantite) VALUES (?, ?, ?);`,
      [commandId, id, quantity]
    )

    res.status(200).json({ message: "Product added to command" })

    await connection.end()

    return
  }
}

export default handler
