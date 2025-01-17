import { Model } from "objection"
import Product from "@/db/models/Product"

class Supplier extends Model {
  static get tableName() {
    return "fournisseurs"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["nom", "adresse", "telephone"],
      properties: {
        id: { type: "integer" },
        nom: { type: "string", minLength: 1, maxLength: 255 },
        adresse: { type: "string", minLength: 1, maxLength: 255 },
        telephone: { type: "string", minLength: 1, maxLength: 255 },
      },
    }
  }

  static get relationMappings() {
    return {
      products: {
        relation: Model.HasOneThroughRelation,
        modelClass: Product,
        join: {
          from: "fournisseurs.id",
          through: {
            from: "produit_fournisseur.id_fournisseur",
            to: "produit_fournisseur.id_produit",
          },
          to: "produits.id",
        },
      },
    }
  }
}

export default Supplier
