import knexInstance from "@/lib/db"
import Product from "@/db/models/Product"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { productId } = req.query

    const productCommands = await Product.query(knexInstance)
      .select("produits.*", "commandes.*")
      .where("produits.id", productId)
      .join("lignes_commande", "lignes_commande.id_produit", "produits.id")
      .join("commandes", "commandes.id", "lignes_commande.id_commande")

    res.status(200).json(productCommands)

    return
  }
}

export default handler
