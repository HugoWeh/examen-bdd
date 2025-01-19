import knexInstance from "@/lib/db"
import Command from "@/db/models/Command"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const commands = await Command.query(knexInstance).select("*")

    res.status(200).json(commands)

    return
  }

  if (req.method === "POST") {
    const { clientId } = req.body

    try {
      const command = await Command.query(knexInstance).insert({
        id_client: clientId,
      })

      res.status(201).json({ message: "Command created", command })

      return
    } catch (error) {
      res.status(400).json({ message: "Error creating command" })

      return
    }
  }

  if (req.method === "PUT") {
    const { id, clientId } = req.body

    await Command.query(knexInstance).findById(id).patch({
      id_client: clientId,
    })

    res.status(200).json({ message: "Command updated" })

    return
  }

  if (req.method === "DELETE") {
    const { id } = req.body

    await Command.query(knexInstance).delete().where("id", id)

    res.status(200).json({ message: "Command deleted" })

    return
  }
}

export default handler
