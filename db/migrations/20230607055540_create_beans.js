const { tab } = require("@testing-library/user-event/dist/tab");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("beans", function (table) {
        table.integer("id").primary().unique().notNullable();
        table.string("name", 64).unique().notNullable();
        table.integer("bitterness").notNullable();
        table.integer("acidity").notNullable();
        table.integer("sweets").notNullable();
        table.integer("richbody").notNullable();
        table.integer("flavor").notNullable();
        table.string("about", 1000).notNullable();
        table.string("yen", 64).notNullable();
        table.string("img").notNullable();
        table.string("url").notNullable();
        table.float("score").notNullable()
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("beans");
};
