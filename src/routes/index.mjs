import express from "express"
import { DASHBOARD_CJ_ROUTER } from "./api/v1/dashboard-cj.mjs";

/**
 * 
 * @param {express.Application} app 
 */
export function addApiRoutes(app) {
    app.use("/api/v1", DASHBOARD_CJ_ROUTER);
}