import { Model } from "objection"
import Lines_Command from "@/db/models/Lines_Command"

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
      lines_command: {
        relation: Model.HasManyRelation,
        modelClass: Lines_Command,
        join: {
          from: "produits.id",
          to: "lignes_commande.id_produit",
        },
      },
    }
  }
}

export default Product
