/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) =>
  knex.schema.createTable("produits", (table) => {
    table.increments("id").primary()
    table.string("nom")
    table.string("description")
    table.string("categorie")
    table.integer("quantite")
    table.decimal("prix_unitaire")
  })

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => knex.schema.dropTable("produits")
