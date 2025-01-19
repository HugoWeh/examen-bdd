import knexInstance from "@/lib/db"
import Product from "@/db/models/Product"
import Lines_Command from "@/db/models/Lines_Command"

const handler = async (req, res) => {
  if (req.method === "GET") {
    const products = await Product.query(knexInstance).select("*")

    res.status(200).json(products)

    return
  }

  if (req.method === "POST") {
    const { nom, description, prix, quantite } = req.body

    if (!nom || !description || !prix || !quantite) {
      res.status(400).json({ message: "Missing required fields" })

      return
    }

    await Product.query(knexInstance).insert({
      nom,
      description,
      prix,
      quantite,
    })

    res.status(201).json({ message: "Product added" })

    return
  }

  if (req.method === "PUT") {
    const { id, nom, description, prix, quantite } = req.body

    if (!id || !nom || !description || !prix || !quantite) {
      res.status(400).json({ message: "Missing required fields" })

      return
    }

    await Product.query(knexInstance).findById(id).patch({
      nom,
      description,
      prix,
      quantite,
    })

    res.status(200).json({ message: "Product updated" })

    return
  }

  if (req.method === "DELETE") {
    const { id } = req.body

    if (!id) {
      res.status(400).json({ message: "Missing required fields" })

      return
    }

    await Lines_Command.query(knexInstance).delete().where("id_produit", id)
    await knexInstance("produit_fournisseur").delete().where("id_produit", id)
    await Product.query(knexInstance).delete().where("id", id)

    res.status(200).json({ message: "Product deleted" })

    return
  }
}

export default handler
