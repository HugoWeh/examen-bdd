import knexInstance from "@/lib/db"
import Customer from "@/db/models/Customer"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const customers = await Customer.query(knexInstance).select("*")

    res.status(200).json(customers)

    return
  }

  if (req.method === "POST") {
    const { lastName, firstName, address, phone } = req.body

    await Customer.query(knexInstance).insert({
      nom: lastName,
      prenom: firstName,
      adresse: address,
      telephone: phone,
    })

    res.status(200).json({ message: "Customer added" })

    return
  }

  if (req.method === "PUT") {
    const { id, lastName, firstName, address, phone } = req.body

    await Customer.query(knexInstance).findById(id).patch({
      nom: lastName,
      prenom: firstName,
      adresse: address,
      telephone: phone,
    })

    res.status(200).json({ message: "Customer updated" })

    return
  }

  if (req.method === "DELETE") {
    const { id } = req.body

    await Customer.query(knexInstance).delete().where("id", id)

    res.status(200).json({ message: "Customer deleted" })

    return
  }
}

export default handler
