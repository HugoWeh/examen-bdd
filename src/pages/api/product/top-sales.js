import knexInstance from "@/lib/db"
import Product from "@/db/models/Product"

const handler = async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" })

    return
  }

  const topProducts = await Product.query(knexInstance)
    .select("*")
    .orderBy("total_ventes", "desc")
    .limit(5)

  res.status(200).json(topProducts)

  return
}

export default handler
