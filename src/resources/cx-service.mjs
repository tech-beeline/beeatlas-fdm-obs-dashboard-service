import { NotImplemented } from "../utils/errors.mjs";


const CX_SERVICE_URL = process.env.CX_SERVICE_URL;

if (CX_SERVICE_URL) throw Error("CX_SERVICE_URL is not specified");

export async function getCjById(id) {
    NotImplemented();
}

export const CxService = {
    getCjById: getCjById
}