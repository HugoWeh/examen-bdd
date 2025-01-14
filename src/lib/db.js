import knex from "knex"
import knexConfig from "../../knexfile"
import { Model } from "objection"

const knexInstance = knex(knexConfig)

Model.knex(knexInstance)

export default knexInstance
