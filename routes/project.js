import { Router } from "express";
import projectController from "../controllers/projectController.js";

const project = new Router();

project.post('/changekey', projectController.changekey);
project.post('/create', projectController.create);
project.post('/delete', projectController.delete);
project.post('/refresh', projectController.refresh);
project.post('/update', projectController.update);
project.get('/getprojects/:page([0-9]+)', projectController.getProjects);
project.get('/getproject/:key([0-9]+)', projectController.getProject);

export default project;