import { Model } from "objection"
import Command from "@/db/models/Command"

class Lines_Command extends Model {
  static get tableName() {
    return "lignes_commande"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["id_commande", "id_produit", "quantite"],
      properties: {
        id: { type: "integer" },
        id_commande: { type: "integer" },
        id_produit: { type: "integer" },
        quantite: { type: "integer" },
      },
    }
  }

  static get relationMappings() {
    return {
      command: {
        relation: Model.BelongsToOneRelation,
        modelClass: Command,
        join: {
          from: "lignes_commande.id_commande",
          to: "commandes.id",
        },
      },
    }
  }
}

export default Lines_Command
