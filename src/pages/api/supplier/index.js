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

    await Supplier.query(knexInstance).insert({
      nom: name,
      adresse: address,
      telephone: phone,
    })

    res.status(200).json({ message: "Supplier added" })

    return
  }
}

export default handler
