import knexInstance from "@/lib/db"
import Command from "@/db/models/Command"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { start, end } = req.query

    const commands = await Command.query(knexInstance)
      .select(
        "commandes.id_client",
        "commandes.id",
        "commandes.date",
        "lignes_commande.id_commande",
        "lignes_commande.id_produit",
        "lignes_commande.quantite"
      )
      .join("lignes_commande", "commandes.id", "lignes_commande.id_commande")
      .whereBetween("commandes.date", [start, end])

    res.status(200).json(commands)

    return
  }
}

export default handler
