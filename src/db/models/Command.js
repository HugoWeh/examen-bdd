import { Model } from "objection"
import Customer from "@/db/models/Customer"
import Lines_Command from "@/db/models/Lines_Command"

class Command extends Model {
  static get tableName() {
    return "commandes"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["id_client", "date"],
      properties: {
        id: { type: "integer" },
        id_client: { type: "integer" },
        date: { type: "string", format: "date" },
      },
    }
  }

  static get relationMappings() {
    return {
      customer: {
        relation: Model.BelongsToOneRelation,
        modelClass: Customer,
        join: {
          from: "commandes.id_client",
          to: "clients.id",
        },
      },
      lines_command: {
        relation: Model.HasManyRelation,
        modelClass: Lines_Command,
        join: {
          from: "commandes.id",
          to: "lignes_commande.id_commande",
        },
      },
    }
  }
}

export default Command
