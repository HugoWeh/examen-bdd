import knexInstance from "@/lib/db"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const orders = await knexInstance("clients")
      .distinct("clients.*")
      .join("commandes", "commandes.id_client", "clients.id")

    res.status(200).json(orders)

    return
  }
}

export default handler
