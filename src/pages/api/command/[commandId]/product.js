import knexInstance from "@/lib/db"
import Lines_Command from "@/db/models/Lines_Command"
import Product from "@/db/models/Product"

const handler = async (req, res) => {
  if (req.method === "GET" && req.method === "POST") {
    res.status(405).json({ message: "Method not allowed" })

    return
  }

  if (req.method === "GET") {
    const { commandId } = req.query

    const commandProducts = await Product.query(knexInstance)
      .select("produits.*", "lignes_commande.quantite")
      .join("lignes_commande", "id", "lignes_commande.id_produit")
      .where("lignes_commande.id_commande", commandId)

    res.status(200).json(commandProducts)

    return
  }

  if (req.method === "POST") {
    const { commandId, id, quantity } = req.query

    const [productQuantity] = await Product.query(knexInstance)
      .select("quantite")
      .where("id", id)

    if (productQuantity.quantite < quantity) {
      res.status(400).json({ message: "Not enough stock" })

      return
    }

    const isInCommand = await Lines_Command.query(knexInstance)
      .select("*")
      .where("id_commande", commandId)
      .andWhere("id_produit", id)

    if (isInCommand.length > 0) {
      await Product.query(knexInstance)
        .update({
          quantite: knexInstance.raw("quantite + ?", [isInCommand[0].quantite]),
          total_ventes: knexInstance.raw("total_ventes - ?", [
            isInCommand[0].quantite,
          ]),
        })
        .where("id", id)

      await Lines_Command.query(knexInstance)
        .update({
          id_commande: parseInt(commandId),
          id_produit: parseInt(id),
          quantite: parseInt(quantity),
        })
        .where("id_commande", commandId)
        .andWhere("id_produit", id)

      await Product.query(knexInstance)
        .update({
          quantite: knexInstance.raw("quantite - ?", [quantity]),
          total_ventes: knexInstance.raw("total_ventes + ?", [quantity]),
        })
        .where("id", id)

      res.status(200).json({ message: "Product updated" })

      return
    }

    await Lines_Command.query(knexInstance).insert({
      id_commande: parseInt(commandId),
      id_produit: parseInt(id),
      quantite: parseInt(quantity),
    })

    await Product.query(knexInstance)
      .update({
        quantite: knexInstance.raw("quantite - ?", [quantity]),
        total_ventes: knexInstance.raw("total_ventes + ?", [quantity]),
      })
      .where("id", id)

    res.status(200).json({ message: "Product added to command" })

    return
  }
}

export default handler
