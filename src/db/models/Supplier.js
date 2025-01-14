import { Model } from "objection"
import Product_Supplier from "@/db/models/Product_Supplier"

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
        relation: Model.HasManyRelation,
        modelClass: Product_Supplier,
        join: {
          from: "fournisseurs.id",
          to: "produit_fournisseur.id_fournisseur",
        },
      },
    }
  }
}

export default Supplier
