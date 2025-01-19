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
    table.decimal("prix_unitaire")
    table.integer("quantite")
    table.integer("total_ventes")
  })

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => knex.schema.dropTable("produits")
