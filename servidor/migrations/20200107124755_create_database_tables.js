exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("tipo_persona", function(table) {
      table.increments("id");
      table.string("tipo_persona_nombre").unique();
    })

    .createTable("persona", function(table) {
      table.increments("id");
      table.string("nombres");
      table.string("apellidos");
      table.string("direccion");
      table.string("password");
      table.string("email").unique();
      table.integer("id_tipo_persona").references("id").inTable("tipo_persona");
    })

    .createTable("tipo_reserva",function(table){
      table.increments("id");
      table.string("description");
      table.integer("costo");
      table.time("hora");
    })

    .createTable("scooter",function(table){
      table.increments("id");
      table.string("descripcion");
      table.boolean("Estado");
      table.string("codigo");
    })
    
    .createTable("detalle_reserva",function(table){
      table.increments("id");
      table.string("descripcion");
      table.integer("costo");
      table.integer("id_persona").references("id").inTable("persona");
      table.integer("id_scooter").references("id").inTable("scooter");
      table.integer("id_tipo_reserva").references("id").inTable("tipo_reserva");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("tipo_persona")
    .dropTableIfExists("persona")
    .dropTableIfExists("tipo_reserva")
    .dropTableIfExists("scooter")
    .dropTableIfExists("detalle_reserva");
};
