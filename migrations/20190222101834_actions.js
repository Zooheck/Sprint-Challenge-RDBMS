
exports.up = function(knex, Promise) {
    tbl.increments();

    tbl.string('name', 128).notNullable().unique();

    tbl
    .text('description')
    .notNullable()

    tbl.boolean('completed').notNullable().defaultTo(false)
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
};
