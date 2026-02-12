import express from "express"

import {
    putDashboard,
    getDashboard,
    postDashboard
} from "../../../controllers/index.mjs"


/**
 * @type {express.Router}
 */
export const DASHBOARD_CJ_ROUTER = new express.Router({ mergeParams: true });

DASHBOARD_CJ_ROUTER.get("/dashboard-cj/:id", getDashboard);
DASHBOARD_CJ_ROUTER.put("/dashboard-cj/:id", putDashboard);
DASHBOARD_CJ_ROUTER.post("/dashboard-cj", postDashboard);
