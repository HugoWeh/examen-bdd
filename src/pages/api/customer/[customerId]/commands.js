import knexInstance from "@/lib/db"
import Command from "@/db/models/Command"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { customerId } = req.query

    const commands = await Command.query(knexInstance)
      .select("*")
      .where("id_client", customerId)

    res.status(200).json(commands)

    return
  }
}

export default handler
