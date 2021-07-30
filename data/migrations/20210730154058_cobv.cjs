exports.up = function (knex) {
    return knex.schema.createTable('cobv', (table) => {
        table.increments('id')
        table.string('txid').notNullable().unique()
        table.integer('revisao').notNullable()
        table.string('status').notNullable()
        table.string('devedor').references('user')
        table.string('recebedor').references('user')
        table.string('solicitacaoPagador')
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('cobv')
}
