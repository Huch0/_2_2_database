import { Manager_requests } from "../models/index.js";

export async function getAllManager_requests(selectedRole) {
  const Manager_request = setManager_request(selectedRole);

  const manager_requests = await Manager_request.findAll({
    order: [["createdAt", "DESC"]],
  });

  return manager_requests;
}

export async function createManager_request(selectedRole, manager_request) {
  const Manager_request = setManager_request(selectedRole);

  const newManager_request = await Manager_request.create(
    {
      user_id: manager_request.user_id,
      lab_id: manager_request.lab_id,
    }
  );

  return newManager_request;
}

function setManager_request(selectedRole) {
  let Manager_request = null;

  switch (selectedRole) {
    case "admin":
      Manager_request = Manager_requests.adminManager_request;
      break;
    case "reader":
      Manager_request = Manager_requests.readerManager_request;
      break;
    case "student":
      Manager_request = Manager_requests.studentManager_request;
      break;
    case "researcher":
      Manager_request = Manager_requests.researcherManager_request;
      break;
    case "lab_manager":
      Manager_request = Manager_requests.labManagerManager_request;
      break;
    case "banned":
      Manager_request = Manager_requests.bannedManager_request;
      break;
    default:
      throw new Error("Invalid role");
  }

  return Manager_request;
}
