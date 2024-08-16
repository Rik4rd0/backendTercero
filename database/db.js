import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Cargar variables de entorno desde el archivo .env
dotenv.config();

console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_DIALECT:', process.env.DB_DIALECT);

const db = new Sequelize(process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    }
);
export default db;
