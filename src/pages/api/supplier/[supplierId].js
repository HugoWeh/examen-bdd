import knexInstance from "@/lib/db"
import Supplier from "@/db/models/Supplier"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { supplierId } = req.query

    const supplier = await Supplier.query(knexInstance)
      .select("*")
      .where("fournisseurs.id", supplierId)

    res.status(200).json(supplier)

    return
  }
}

export default handler
