import mysql from "mysql2/promise"
import dbConfig from "@/lib/db"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const connection = await mysql.createConnection(dbConfig)

    const [orders] = await connection.execute(
      `SELECT DISTINCT cl.* from clients cl join commandes co on co.id_client = cl.id;`
    )

    res.status(200).json(orders)

    await connection.end()

    return
  }

  if (req.method === "POST") {
    const connection = await mysql.createConnection(dbConfig)

    const { lastName, firstName, address, phone } = req.body

    await connection.execute(
      `INSERT INTO clients (nom, prenom, adresse, telephone) VALUES (?, ?, ?, ?);`,
      [lastName, firstName, address, phone]
    )

    res.status(200).json({ message: "Client added" })

    await connection.end()

    return
  }

  if (req.method === "PUT") {
    const connection = await mysql.createConnection(dbConfig)

    const { id, lastName, firstName, address, phone } = req.body

    await connection.execute(
      `UPDATE clients SET nom = ?, prenom = ?, adresse = ?, telephone = ? WHERE id = ?;`,
      [lastName, firstName, address, phone, id]
    )

    res.status(200).json({ message: "Client updated" })

    await connection.end()

    return
  }

  if (req.method === "DELETE") {
    const { id } = req.query

    const connection = await mysql.createConnection(dbConfig)

    await connection.execute("DELETE FROM commandes WHERE id_client = ?", [id])
    await connection.execute("DELETE FROM clients WHERE id = ?", [id])

    res.status(200).json({ id })

    await connection.end()

    return
  }
}

export default handler
