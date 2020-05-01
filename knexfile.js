// Update with your config settings.

module.exports = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './data/cooking_database.db3' // location of our DB file
  },
    // needed when using foreign keys
  pool: {
    afterCreate: (conn, done) => {
      // runs after a connection is made to the sqlite engine
      conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
    },
  },
};
