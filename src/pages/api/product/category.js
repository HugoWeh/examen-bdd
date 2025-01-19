import knexInstance from "@/lib/db"
import Product from "@/db/models/Product"

const handler = async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" })

    return
  }

  const { name } = req.query

  const products = await Product.query(knexInstance)
    .select("*")
    .where("produits.nom", "like", `%${name}%`)

  res.status(200).json(products)

  return
}

export default handler
