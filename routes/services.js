import { Router } from "express";
import { __rootDir, upload } from "../utils/constant.js";
import { serviceRequestQueue } from "../worker.js";
import path from "path";
import { redis } from "../config/db.js";


const service = new Router();


service.get('/request', async (req, res) => {
    let visits = await redis.get('visit-service') || 0;
    visits = Number(visits) + 1;
    await redis.set('visit-service', `${visits}`, 604800);

    res.render("services-request", {
        layout: 'layouts/general',
        customJS: ['services.bundle.js'],
        pageTitle: 'Request Service',
        hostname: req.get('host'),
        url: req.fulUrl,
    });
})

service.post('/submit_form', upload.array('files', 10), async (req, res) => {
    const body = req.body;
    const name = body['full-name'];
    const email = body.email;
    const phone = body['phone-number'];
    const projectName = body['project-name'];
    const serviceRequired = body['service-required'];
    const projectDescription = body['project-description'];
    const paymentType = body['payment-type'];
    const fromPrice = body['from-price'];
    const toPrice = body['to-price'];
    const filePath = [];
    const attachments = req.files.map(file => {
        filePath.push(file.path);
        return {
            filename: file.originalname,
            path: path.join(__rootDir, file.path),
        }
    })
    const ip = req.ip


    serviceRequestQueue.add({ name, email, phone, projectName, serviceRequired, projectDescription, paymentType, fromPrice, toPrice, attachments, hostname: req.get('host'), filePath });

    res.redirect("/");
})

export default service;