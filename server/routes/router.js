const express = require("express");
const route = express.Router();
const service = require("../services/render");
// const controller = require("../controller/controller");

/**
 * @description Root Page
 * @method GET/
 */
route.get("/", service.homeRoute);

/**
 * @description About Page
 * @method GET/
 */
route.get("/about", service.aboutRoute);

/**
 * @description Services Page
 * @method GET/
 */
route.get("/services", service.servicesRoute);

/**
 * @description Portfolio Page
 * @method GET/
 */
route.get("/portfolio", service.portfolioRoute);

/**
 * @description Contact Page
 * @method GET/
 */
route.get("/contact", service.contactRoute);

// API
// route.post("/sendmail", controller.sendEmail);
module.exports = route;
