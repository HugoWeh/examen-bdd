import { Model } from "objection"

class Customer extends Model {
  static get tableName() {
    return "clients"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["nom", "prenom", "adresse", "telephone"],
      properties: {
        id: { type: "integer" },
        nom: { type: "string", minLength: 1, maxLength: 255 },
        prenom: { type: "string", minLength: 1, maxLength: 255 },
        adresse: { type: "string", minLength: 1, maxLength: 255 },
        telephone: { type: "string", minLength: 1, maxLength: 255 },
      },
    }
  }

  static get relationMappings() {
    return {
      commands: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + "/Command",
        join: {
          from: "clients.id",
          to: "commandes.id_client",
        },
      },
    }
  }
}

export default Customer
