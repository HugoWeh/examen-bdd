import knexInstance from "@/lib/db"
import Command from "@/db/models/Command"

const handler = async (req, res) => {
  if (req.method === "GET") {
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

    res.status(200).json(commands)

    return
  }

  if (req.method === "POST") {
    const { clientId } = req.body

    await Command.query(knexInstance).insert({
      id_client: clientId,
      date: new Date(),
    })

    res.status(200).json({ message: "Command added" })

    return
  }
}

export default handler
