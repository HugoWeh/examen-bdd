import { Model } from "objection"
import Supplier from "@/db/models/Supplier"

class Product extends Model {
  static get tableName() {
    return "produits"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [
        "nom",
        "description",
        "categorie",
        "quantite",
        "prix_unitaire",
      ],
      properties: {
        id: { type: "integer" },
        nom: { type: "string", minLength: 1, maxLength: 255 },
        description: { type: "string", minLength: 1, maxLength: 255 },
        categorie: { type: "string", minLength: 1, maxLength: 255 },
        quantite: { type: "integer" },
        prix_unitaire: { type: "decimal" },
      },
    }
  }

  static get relationMappings() {
    return {
      suppliers: {
        relation: Model.HasOneThroughRelation,
        modelClass: Supplier,
        join: {
          from: "produits.id",
          through: {
            from: "produit_fournisseur.id_produit",
            to: "produit_fournisseur.id_fournisseur",
          },
          to: "fournisseurs.id",
        },
      },
    }
  }
}

export default Product
