import knexInstance from "@/lib/db"
import Command from "@/db/models/Command"

const handler = async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" })
    return
  }

  const { commandId } = req.query

  const command = await Command.query(knexInstance)
    .select("*")
    .where("commandes.id", commandId)

  res.status(200).json(command)

  return
}

export default handler
