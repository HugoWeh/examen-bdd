import mysql from "mysql2/promise"
import dbConfig from "@/lib/db"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const connection = await mysql.createConnection(dbConfig)

    const [commandes] = await connection.execute(
      `SELECT c.id, c.date, cl.nom, cl.prenom
      FROM commandes c
      JOIN clients cl
      ON c.id_client = cl.id;`
    )

    res.status(200).json(commandes)

    await connection.end()
  }

  if (req.method === "POST") {
    const connection = await mysql.createConnection(dbConfig)

    const { clientId } = req.body
    const date = new Date()

    await connection.execute(
      `INSERT INTO commandes (id_client, date) VALUES (?, ?);`,
      [clientId, date]
    )

    res.status(200).json({ message: "Command added" })

    await connection.end()

    return
  }

  if (req.method === "PUT") {
    const connection = await mysql.createConnection(dbConfig)

    const { id, clientId, date } = req.body

    await connection.execute(
      `UPDATE commandes SET id_client = ?, date = ? WHERE id = ?;`,
      [clientId, date, id]
    )

    res.status(200).json({ message: "Command updated" })

    await connection.end()

    return
  }

  if (req.method === "DELETE") {
    const { id } = req.query

    console.log(id)

    const connection = await mysql.createConnection(dbConfig)

    await connection.execute(
      "DELETE FROM lignes_commande WHERE id_commande = ?",
      [id]
    )
    await connection.execute("DELETE FROM commandes WHERE id = ?", [id])

    res.status(200).json({ id })

    await connection.end()

    return
  }
}

export default handler
