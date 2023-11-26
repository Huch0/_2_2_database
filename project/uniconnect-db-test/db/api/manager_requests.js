import { Manager_request } from "../models/index.js";

export async function getAllManager_requests() {
  const manager_requests = await Manager_request.findAll({
    order: [["createdAt", "DESC"]],
  });

  return manager_requests;
}
