import db from '../database/db.js';
//importamos sequelize
import { DataTypes } from 'sequelize';

const TerceroModel = db.define('tercero', {
    tipoPersona: { type: DataTypes.STRING },
    tipoDocumento: { type: DataTypes.STRING },
    identificacion: { type: DataTypes.STRING },
    digitoVerificacion: { type: DataTypes.STRING },
    razonSocial: { type: DataTypes.STRING },
    tipoTercero: { type: DataTypes.STRING },
    tipoActividad: { type: DataTypes.STRING },
    tipoCliente: { type: DataTypes.STRING },
    nombreRepresentanteLegal: { type: DataTypes.STRING },
    fechaNacimiento: { type: DataTypes.DATE },
    pais: { type: DataTypes.STRING },
    codigoPais: { type: DataTypes.STRING },
    departamento: { type: DataTypes.STRING },
    codigoDepartamento: { type: DataTypes.STRING },
    municipio: { type: DataTypes.STRING },
    codigoMunicipio: { type: DataTypes.STRING },
    direccion: { type: DataTypes.STRING },
    telefono: { type: DataTypes.INTEGER },
    celular: { type: DataTypes.INTEGER },
    correo: { type: DataTypes.STRING },
    codigoVendedor: { type: DataTypes.STRING },
    nombre: { type: DataTypes.STRING },
    cupoCredito: { type: DataTypes.STRING },
    cobrador: { type: DataTypes.STRING },
    tipoPago: { type: DataTypes.STRING },
    lPrecio: { type: DataTypes.STRING },
    zona: { type: DataTypes.STRING },
    plazo: { type: DataTypes.STRING },
    descuento: { type: DataTypes.STRING },
    centroCosto: { type: DataTypes.STRING },
    observacion: { type: DataTypes.STRING },
}, {
    tableName: 'tercero',
    timestamps: false
});

//sincronizamos el modelo con la base de datos
(async () => {
    try {
        await db.sync();
        console.log('Tabla sincronizada correctamente.');
    } catch (error) {
        console.error('Error al sincronizar la tabla:', error);
    }
})();

export default TerceroModel;
