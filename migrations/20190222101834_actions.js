
exports.up = function(knex, Promise) {
    tbl.increments();


    tbl
    .integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('projects')
    .onDelete('NO ACTION')
    .onUpdate('CASCADE')
    tbl.string('description', 128).notNullable();

    tbl
    .text('notes')
    .notNullable()

    tbl.boolean('completed').notNullable().defaultTo(false)
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
};
