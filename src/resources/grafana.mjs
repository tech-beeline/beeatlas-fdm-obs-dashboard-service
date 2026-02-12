import { NotImplemented } from "../utils/errors.mjs";

const GRAFANA_URL = process.env.GRAFANA_URL;
const GRAFANA_ACCESS_TOKEN = process.env.GRAFANA_ACCESS_TOKEN;

if (!GRAFANA_URL) throw Error('Grafana url not specified');

export async function postDashboard(uid, dashboard) {
    NotImplemented();
}

export async function getDashboard(uid) {
    NotImplemented();
}