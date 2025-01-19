import mysql from "mysql2/promise"
import dbConfig from "@/lib/db"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const connection = await mysql.createConnection(dbConfig)

    const [fournisseurs] = await connection.execute(
      `SELECT * FROM fournisseurs;`
    )

    res.status(200).json(fournisseurs)

    await connection.end()

    return
  }

  if (req.method === "POST") {
    const connection = await mysql.createConnection(dbConfig)

    const { name, address } = req.body

    await connection.execute(
      `INSERT INTO fournisseurs (nom, adresse) VALUES (?, ?);`,
      [name, address]
    )

    res.status(200).json({ message: "Supplier added" })

    await connection.end()

    return
  }

  if (req.method === "PUT") {
    const connection = await mysql.createConnection(dbConfig)

    const { id, name, address } = req.body

    await connection.execute(
      `UPDATE fournisseurs SET nom = ?, adresse = ? WHERE id = ?;`,
      [name, address, id]
    )

    res.status(200).json({ message: "Supplier updated" })

    await connection.end()

    return
  }

  if (req.method === "DELETE") {
    const connection = await mysql.createConnection(dbConfig)

    const { id } = req.query

    await connection.execute(
      `DElETE FROM produit_fournisseur WHERE id_fournisseur = ?`,
      [id]
      )
    await connection.execute(`DELETE FROM fournisseurs WHERE id = ?`, [id])

    res.status(200).json({ message: "Supplier deleted" })

    await connection.end()

    return
  }
}

export default handler
