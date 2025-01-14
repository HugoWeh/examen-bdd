/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) =>
  knex.schema.createTable("fournisseurs", (table) => {
    table.increments("id").primary()
    table.string("nom")
    table.string("adresse")
    table.string("telephone")
  })

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => knex.schema.dropTable("fournisseurs")
