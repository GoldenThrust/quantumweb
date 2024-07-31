import { Router } from "express";
import projectController from "../controllers/projectController.js";

const project = new Router();

project.put('/changekey', projectController.changekey);
project.post('/create', projectController.create);
project.delete('/delete', projectController.delete);
project.get('/refresh/:id', projectController.refresh);
project.put('/update', projectController.update);
project.get('/getprojects/:page([0-9]+)', projectController.getProjects);
project.get('/getproject/:key([0-9]+)', projectController.getProject);

export default project;