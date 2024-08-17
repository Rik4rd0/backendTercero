import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import terceroRoutes from './routes/routes.js';

const express = require('express');
const cors = require('cors');


app.use(cors({
    origin: 'https://tercero-1.onrender.com', // Reemplaza con el dominio de tu frontend
    methods: 'GET,POST,PUT,DELETE',           // Métodos HTTP permitidos
    credentials: true                         // Habilitar envío de cookies y credenciales
}));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/tercero', terceroRoutes);

try {
    db.authenticate();
    console.log('Conexión a la base de datos exitosa');
} catch (error) {
    console.log('Error en la conexión a la base de datos:', error);
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);
