import knexInstance from "@/lib/db"
import Customer from "@/db/models/Customer"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const customers = await Customer.query(knexInstance).select("*")

    res.status(200).json(customers)

    return
  }
  // if (req.method === "POST") {
  //   const { lastName, firstName, address, phone } = req.body

  //   await connection.execute(
  //     `INSERT INTO clients (nom, prenom, adresse, telephone) VALUES (?, ?, ?, ?);`,
  //     [lastName, firstName, address, phone]
  //   )

  //   res.status(200).json({ message: "Client added" })

  //   await connection.end()
  // }
}

export default handler
