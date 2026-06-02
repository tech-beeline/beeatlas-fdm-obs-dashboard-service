/*
 * Copyright (c) 2024 PJSC VimpelCom
 */
import Express from "express";
import { BadRequest, NotImplemented } from "../utils/errors.mjs";
import { DashboardCjService } from "../services/index.mjs";

export async function putDashboard(request, response) {
    if (!request.params.id) BadRequest("id is not specified");
    return response.json(await DashboardCjService.publishCjDashboardById(request.params.id));
}

/**
 * 
 * @param {Express.Request} request 
 * @param {Express.Response} response 
 * @returns 
 */
export async function postDashboardController(request, response) {
    return response.json(await DashboardCjService.publishCjDashboard(request.body));
}

/**
 * 
 * @param {Express.Request} request 
 * @param {Express.Response} response 
 */
export function getDashboard(request, response) {
    response.json({ message: "sample" })
}