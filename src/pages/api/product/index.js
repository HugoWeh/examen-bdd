import knexInstance from "@/lib/db"
import Product from "@/db/models/Product"

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
}

export default handler
