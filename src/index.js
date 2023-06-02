import express from "express";
import cors from "cors";
import { PORT } from './config.js'
import delizamientos from "./routes/tarea.routes.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(delizamientos);

app.listen(PORT | 3000);
console.log('server up port', PORT);


