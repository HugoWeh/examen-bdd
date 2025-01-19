import knexInstance from "@/lib/db"
import Customer from "@/db/models/Customer"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { customerId } = req.query

    const clientCommands = await Customer.query(knexInstance)
      .select("clients.*", "produits.*")
      .where("clients.id", customerId)
      .join("commandes", "commandes.id_client", "clients.id")
      .join("lignes_commande", "lignes_commande.id_commande", "commandes.id")
      .join("produits", "produits.id", "lignes_commande.id_produit")

    res.status(200).json(clientCommands)

    return
  }
}

export default handler
