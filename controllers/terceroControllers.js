import TerceroModel from "../models/terceroModel.js";


//mostar todos los registros
export const getAllTercero= async(req,res)=>{
    try{
        const terceros = await TerceroModel.findAll();
        res.json(terceros);
}catch(error){
    res.json({
        message: error.message 
    });
}
}
//mostrar un registro
export const getTercero = async(req,res)=>{
    try{
       const tercero= await TerceroModel.findAll({
            where:{
                id:req.params.id
            }
    })
    res.json(tercero[0]);
}catch(error){
    console.log(error);
    res.json({
        message: "Error en el servidor"
    });
}
}

//crear un registro

export const createTercero = async (req, res) => {
    try {
        await TerceroModel.create(req.body);
        res.json({
            message: "Registro creado correctamente"
        });
    } catch (error) {
        console.log(error);
        res.json({
            message: "Error en el servidor"
        });
    }
};

//actualizar un registro

export const updateTercero = async(req,res)=>{
    try {
        await TerceroModel.update(req.body,{
            where:{
                id:req.params.id
            }
        });
        res.json({
            message: "Registro actualizado correctamente"
        });
    } catch (error) {
        console.log(error);
        res.json({
            message: "Error en el servidor"
        });
    }
}

//eliminar un registro

export const deleteTercero = async(req,res)=>{
    try {
        await TerceroModel.destroy({
            where:{
                id:req.params.id
            }
        });
        res.json({
            message: "Registro eliminado correctamente"
        });
    } catch (error) {
        console.log(error);
        res.json({
            message: "Error en el servidor"
        });
    }
}