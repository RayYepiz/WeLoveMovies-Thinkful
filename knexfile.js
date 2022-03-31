const path = require("path");
// const {DATABASE_URL} = process.env;
require("dotenv").config();

const config = {
  client:"postgresql",
  connection:"postgres://oszkwkfa:8RCeiKZ6Nojh3OE5gpqTcpp6trFeDlti@kashin.db.elephantsql.com/oszkwkfa"
}


const knex = require("knex")(config);



module.exports = {
  development: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },

  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};
