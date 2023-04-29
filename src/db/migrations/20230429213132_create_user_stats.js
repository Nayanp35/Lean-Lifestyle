/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable('user_stats', (table) => {
        table.integer('user_id').notNullable();
        table.foreign("user_id").references("id").inTable("users");
        table.integer('height').notNullable();
        table.integer('weight').notNullable();
        table.float('bmi').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTable('user_stats');
};
