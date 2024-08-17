import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import terceroRoutes from './routes/routes.js';
import dotenv from "dotenv";
dotenv.config();

const app = express(); 
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use('/tercero', terceroRoutes);

try {
    await db.authenticate();
    console.log('Conexión a la base de datos exitosa');
} catch (error) {
    console.log('Error en la conexión a la base de datos:', error);
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
