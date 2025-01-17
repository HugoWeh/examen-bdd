import knexInstance from "@/lib/db"
import Supplier from "@/db/models/Supplier"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { productId } = req.query

    const suppliers = await Supplier.query(knexInstance)
      .select("fournisseurs.*")
      .join(
        "produit_fournisseur",
        "fournisseurs.id",
        "produit_fournisseur.id_fournisseur"
      )
      .where("produit_fournisseur.id_produit", productId)

    res.status(200).json(suppliers)

    return
  }
}

export default handler
