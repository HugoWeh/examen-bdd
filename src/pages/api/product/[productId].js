import knexInstance from "@/lib/db"
import Product from "@/db/models/Product"

const handler = async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" })

    return
  }
  
  const { productId } = req.query

  const product = await Product.query(knexInstance)
    .select("*")
    .where("produits.id", productId)

  res.status(200).json(product)

  return
}

export default handler
