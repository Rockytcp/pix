exports.up = function (knex) {
    return knex.schema.createTable('user', (table) => {
        table.increments('id')
        table.string('fullName', 255).notNullable()
        table.string('userDocument', 255).notNullable()
        table.string('email', 255).notNullable()
        table.string('address', 255).notNullable()
        table.string('city', 255).notNullable()
        table.string('state', 255).notNullable()
        table.string('postalCode', 255).notNullable()
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('user')
}
