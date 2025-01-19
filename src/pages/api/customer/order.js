import knexInstance from "@/lib/db"
import Customer from "@/db/models/Customer"

const handler = async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" })

    return
  }

  const orders = await Customer.query(knexInstance)
    .distinct()
    .select("clients.*")
    .join("commandes", "commandes.id_client", "clients.id")

  res.status(200).json(orders)

  return
}

export default handler
