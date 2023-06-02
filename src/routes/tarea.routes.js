import { Router } from "express";
import { almacenaDatos, obtenerDatos } from "../controllers/tarea.controller.js";

const delizamientos = Router();

delizamientos.get('/listarDatos', obtenerDatos);
delizamientos.post('/almacena', almacenaDatos);


export default delizamientos;