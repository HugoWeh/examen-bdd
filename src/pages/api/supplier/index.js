import knexInstance from "@/lib/db"
import Supplier from "@/db/models/Supplier"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const suppliers = await Supplier.query(knexInstance).select("*")

    res.status(200).json(suppliers)

    return
  }

  if (req.method === "POST") {
    const { name, address, phone } = req.body

    try {
      await Supplier.query(knexInstance).insert({
        nom: name,
        adresse: address,
        telephone: phone,
      })

      res.status(200).json({ message: "Supplier added" })
      return
    } catch (error) {
      res.status(400).json({ message: "Missing required fields" })
    }
  }

  if (req.method === "PUT") {
    const { id, name, address, phone } = req.body

    await Supplier.query(knexInstance)
      .update({
        nom: name,
        adresse: address,
        telephone: phone,
      })
      .where("id", id)

    res.status(200).json({ message: "Supplier updated" })

    return
  }

  if (req.method === "DELETE") {
    const { id } = req.body

    await Supplier.query(knexInstance).delete().where("id", id)

    res.status(200).json({ message: "Supplier deleted" })

    return
  }
}

export default handler
