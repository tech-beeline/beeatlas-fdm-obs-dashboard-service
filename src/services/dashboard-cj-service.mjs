import { getCjById } from "../resources/cx-service.mjs";
import { NotImplemented } from "../utils/errors.mjs";

export async function publishCjDashboard(cj) {
    console.log(cj);
    NotImplemented();
}

export async function publishCjDashboardById(id) {
    const cj = await getCjById(id);
    NotImplemented();
}

export const DashboardCjService = {
    publishCjDashboard: publishCjDashboard,
    publishCjDashboardById: publishCjDashboardById
}