import mysql from "mysql2/promise"
import dbConfig from "@/lib/db"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const connection = await mysql.createConnection(dbConfig)

    const [products] = await connection.execute(`SELECT * FROM produits;`)

    res.status(200).json(products)

    await connection.end()

    return
  }

  if (req.method === "POST") {
    const connection = await mysql.createConnection(dbConfig)

    const { name, description, category, quantity, unitPrice } = req.body

    await connection.execute(
      `INSERT INTO produits (nom, description, categorie, quantite, prix_unitaire) VALUES (?, ?, ? ,?, ?);`,
      [name, description, category, quantity, unitPrice]
    )

    res.status(200).json({ message: "Product added" })

    await connection.end()

    return
  }

  if (req.method === "PUT") {
    const connection = await mysql.createConnection(dbConfig)

    const { id, name, description, category, quantity, unitPrice } = req.body

    await connection.execute(
      `UPDATE produits SET nom = ?, description = ?, categorie = ?, quantite = ?, prix_unitaire = ? WHERE id = ?;`,
      [name, description, category, quantity, unitPrice, id]
    )

    res.status(200).json({ message: "Product updated" })

    await connection.end()

    return
  }

  if (req.method === "DELETE") {
    const connection = await mysql.createConnection(dbConfig)

    const { id } = req.query

    await connection.execute(
      `DELETE FROM produit_fournisseur WHERE id_produit = ?`,
      [id]
    )
    await connection.execute(`DELETE FROM produits WHERE id = ?`, [id])

    res.status(200).json({ message: "Product deleted" })

    await connection.end()

    return
  }
}

export default handler
