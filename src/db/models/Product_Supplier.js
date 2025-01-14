import { Model } from "objection"
import Product from "@/db/models/Product"
import Supplier from "@/db/models/Supplier"

class Product_Supplier extends Model {
  static get tableName() {
    return "produit_fournisseur"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["id_produit", "id_fournisseur"],
      properties: {
        id: { type: "integer" },
        id_produit: { type: "integer" },
        id_fournisseur: { type: "integer" },
      },
    }
  }

  static get relationMappings() {
    return {
      product: {
        relation: Model.BelongsToOneRelation,
        modelClass: Product,
        join: {
          from: "produit_fournisseur.id_produit",
          to: "produits.id",
        },
      },
      supplier: {
        relation: Model.BelongsToOneRelation,
        modelClass: Supplier,
        join: {
          from: "produit_fournisseur.id_fournisseur",
          to: "fournisseurs.id",
        },
      },
    }
  }
}

export default Product_Supplier
