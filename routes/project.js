import { Router } from "express";
import projectController from "../controllers/projectController.js";

const project = new Router();

project.post('/changekey', projectController.changekey);
project.post('/create', projectController.create);
project.post('/delete', projectController.delete);
project.post('/refresh', projectController.refresh);
project.post('/update', projectController.update);

export default project;