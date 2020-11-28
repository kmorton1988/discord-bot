exports.up = function(knex) {
	return Promise.all([
		knex.schema.createTable('user', function(t) {
			t.increments('id').primary().unsigned();
			t.string('username');
			t.string('discord_name');
			t.integer('crew_id').unsigned().notNullable().references('id').inTable('crews');
		}),
		knex.schema.createTable('crews', function(t) {
			t.increments('id').primary().unsigned();
			t.string('name');
			t.integer('members').unsigned().references('id').inTable('crew_members');
		}),
		knex.schema.createTable('user_submission', function(t) {
			t.increments('id').primary().unsigned();
			t.integer('user_id').unsigned().notNullable().references('id').inTable('user');
			t.integer('submission_id').unsigned().notNullable().references('id').inTable('submissions');
			t.integer('crew_id').unsigned().notNullable().references('id').inTable('crews');
		}),
		knex.schema.createTable('submissions', function(t) {
			t.increments('id').primary().unsigned();
			t.integer('count');
		}),
		knex.schema.createTable('crew_members', function(t) {
			t.increments('id').primary().unsigned();
			t.integer('crew_id').unsigned().notNullable().references('id').inTable('crews');
			t.integer('user_id').unsigned().notNullable().references('id').inTable('user');
		}),
	]);
};

exports.down = function(knex) {
	return [
		knex.schema.dropTable('user'),
		knex.schema.dropTable('user_submission'),
		knex.schema.dropTable('submissions'),
		knex.schema.dropTable('crews'),
		knex.schema.dropTable('crew_members'),
	];
};
