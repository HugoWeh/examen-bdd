import mysql from "mysql2/promise";
import dbConfig from "@/lib/db";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { id } = req.query;

    const connection = await mysql.createConnection(dbConfig);

    const [product] = await connection.query(
      `SELECT p.*,  f.* from produits p join produit_fournisseur pf ON pf.id_produit = p.id join fournisseurs f on f.id = pf.id_fournisseur where p.id = '${id}'`,
    );

    console.log(product);

    if (product.length === 0) {
      res.status(404).json({ message: "Product not found" });
      await connection.end();
      return;
    }

    res.status(200).json(product);

    await connection.end();
  }
};

export default handler;