import express from 'express';
import cors from 'cors';
import path from 'path';
import terceroRoutes from './routes/routes.js'; // Asegúrate de que la ruta sea correcta

const app = express();
const PORT = process.env.PORT || 5000;

// Configuración de CORS
const corsOptions = {
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());

// Servir archivos estáticos
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'build')));

// Rutas de la API
app.use('/tercero', terceroRoutes);

// Servir el archivo HTML principal para cualquier otra ruta
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

try {
    await db.authenticate();
    console.log('Conexión a la base de datos exitosa');
} catch (error) {
    console.log('Error en la conexión a la base de datos:', error);
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});