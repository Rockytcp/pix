exports.up = function (knex) {
    return knex.schema.createTable('user', (table) => {
        table.increments('id')
        table.string('firstName', 255).notNullable()
        table.string('lastName', 255).notNullable()
        table.string('email', 255).notNullable().unique()
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('user')
}
