import mysql from "mysql2/promise"
import dbConfig from "@/lib/db"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { commandId } = req.query 

    const connection = await mysql.createConnection(dbConfig)

    const [command] = await connection.query(
      `SELECT p.* FROM Produits p JOIN Lignes_Commande lc ON p.id = lc.id_produit WHERE lc.id_commande = ${commandId};`
    )

    if (command.length === 0) {
      res.status(404).json({ message: "Command not found" })
      await connection.end()
      return
    }

    res.status(200).json(command)

    await connection.end()

    return
  }
}

export default handler
