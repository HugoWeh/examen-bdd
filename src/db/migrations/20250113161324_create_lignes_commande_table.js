/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) =>
  knex.schema.createTable("lignes_commande", (table) => {
    table
      .integer("id_commande")
      .unsigned()
      .references("id")
      .inTable("commandes")
    table.integer("id_produit").unsigned().references("id").inTable("produits")
    table.integer("quantite")
    table.primary(["id_commande", "id_produit"])
  })

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => knex.schema.dropTable("lignes_commande")
