import dotenv from "dotenv"

dotenv.config({ path: ".env.local" })

const knexConfig = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  },
  migrations: {
    directory: "./src/db/migrations",
  },
  pool: {
    min: 2,
    max: 10,
  },
}

export default knexConfig
