import knexInstance from "@/lib/db"
import Product from "@/db/models/Product"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { threshold } = req.query

    const lowStockProducts = await Product.query(knexInstance)
      .select("produits.*")
      .where("produits.quantite", "<", threshold)

    res.status(200).json(lowStockProducts)

    return
  }
}

export default handler
