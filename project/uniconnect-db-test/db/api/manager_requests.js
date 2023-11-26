import { Manager_request } from "../models/manager_request.js";

export async function getAllManager_requests() {
  const manger_requests = await Manager_request.findAll({
    order: [["createdAt", "DESC"]],
  });

  return manger_requests;
}
