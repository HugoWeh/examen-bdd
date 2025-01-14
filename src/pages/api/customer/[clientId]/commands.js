import knexInstance from "@/lib/db"
import Command from "@/db/models/Command"
import Customer from "@/db/models/Customer"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { clientId } = req.query

    //select * from clients cl join commandes co on co.id_client = cl.id join lignes_commande lc on lc.id_commande = co.id join produits p on p.id = lc.id_commande where cl.id = 1;

    const clientCommands = await Customer.query(knexInstance)
      .select("clients.*", "produits.*")
      .where("clients.id", clientId)
      .join("commandes", "commandes.id_client", "clients.id")
      .join("lignes_commande", "lignes_commande.id_commande", "commandes.id")
      .join("produits", "produits.id", "lignes_commande.id_produit")

    res.status(200).json(clientCommands)

    return
  }
}

export default handler
