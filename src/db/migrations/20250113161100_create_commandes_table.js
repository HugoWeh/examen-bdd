/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) =>
  knex.schema.createTable("commandes", (table) => {
    table.increments("id").primary()
    table.integer("id_client").unsigned().references("id").inTable("clients")
    table.date("date")
  })

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => knex.schema.dropTable("commandes")
