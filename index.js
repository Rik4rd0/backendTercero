import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import terceroRoutes from './routes/routes.js';
import dotenv from "dotenv";
dotenv.config();

const app = express(); 
const PORT = process.env.PORT || 5000;

// Define la ruta
app.get('/showTercero', (req, res) => {
    res.send('Ruta /showTercero funcionando!');
  });

app.get('/', (req, res) => {
    res.send('Ruta / funcionando!');
});
// Configuración de CORS
const corsOptions = {
    origin: process.env.CORS_ORIGIN || '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/tercero', terceroRoutes);

try {
    await db.authenticate();
    console.log('Conexión a la base de datos exitosa');
} catch (error) {
    console.log('Error en la conexión a la base de datos:', error);
}


//Configura el servidor para servir archivos estáticos correctamente
app.use(express.static(path.join(__dirname, 'public'), {
    setHeaders: (res, path) => {
        if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
