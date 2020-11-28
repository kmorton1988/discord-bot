exports.up = function(knex, Promise) {
	return Promise.all([
		knex.schema.createTable('user', function(t) {
			t.increments('id').primary();
			t.string('username').notNullable();
			t.int('crew_id').notNullable();
			t.timestamp(false, true);
		}),
		knex.schema.createTable('user_submission', function(t) {
			t.increments('id').primary();
			t.int('submission_id').references('user.id');
			t.int('crew_id').references('crews.id');
		}),
		knex.schema.createTable('submissions', function(t) {
			t.increments('id').primary();
			t.int('count');
		}),
		knex.schema.createTable('crews', function(t) {
			t.increments('id').primary();
			t.string('name');
			t.int('members').references('crew_members.id');
		}),
		knex.schema.createTable('crew_members', function(t) {
			t.increments('id').primary();
			t.int('crew_id').references('crews.id');
			t.int('users_id').references('user.id');
		}),
	]);
};

exports.down = function(knex, Promise) {
	return Promise.all([
		knex.schema.dropTable('user'),
		knex.schema.dropTable('user_submission'),
		knex.schema.dropTable('submissions'),
		knex.schema.dropTable('crews'),
		knex.schema.dropTable('crew_members'),
	]);
};
