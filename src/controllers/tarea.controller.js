import {getUsuario} from '../db.js'

export const almacenaDatos = async(req, res) => {
    console.log(req.body);
}

export const obtenerDatos = async (req, res) => {
    const resultado = await getUsuario("SELECT * FROM datos");
    console.log(resultado.rows);
    if (resultado.rows.length>0) {
        res.status(200).json({hay: true ,data: resultado.rows});
    }else{
        res.json({hay:false})
    }
}