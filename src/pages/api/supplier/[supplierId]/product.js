import knexInstance from "@/lib/db"
import Product from "@/db/models/Product"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { supplierId } = req.query

    const products = await Product.query(knexInstance)
      .select("*")
      .join("produit_fournisseur", "produit_fournisseur.id_produit", "id")
      .where("produit_fournisseur.id_fournisseur", supplierId)

    res.status(200).json(products)

    return
  }
}

export default handler
