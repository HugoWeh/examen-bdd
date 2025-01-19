import mysql from "mysql2/promise"
import dbConfig from "@/lib/db"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { productId } = req.query

    const connection = await mysql.createConnection(dbConfig)

    const [product] = await connection.query(
      `SELECT f.* FROM Fournisseurs f JOIN Produit_Fournisseur pf ON f.id = pf.id_fournisseur WHERE pf.id_produit = ${productId};`
    )

    if (product.length === 0) {
      res.status(404).json({ message: "Product not found" })
      await connection.end()
      return
    }

    res.status(200).json(product)

    await connection.end()
  }
}

export default handler
