import { Router } from "express";

const service = new Router();


service.get('/request', (req, res) => {
    res.render("comingsoon", {
        layout: 'layouts/general'
    });
})

export default service;