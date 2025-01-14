/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) =>
  knex.schema.createTable("produit_fournisseur", (table) => {
    table.integer("id_produit").unsigned().references("id").inTable("produits")
    table
      .integer("id_fournisseur")
      .unsigned()
      .references("id")
      .inTable("fournisseurs")
    table.primary(["id_produit", "id_fournisseur"])
  })

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => knex.schema.dropTable("produit_fournisseur")
