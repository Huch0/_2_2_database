import { Lab } from "../models/index.js";

export async function getAllLabs() {
  const labs = await Lab.findAll({
    order: [["createdAt", "DESC"]],
  });

  return labs;
}

export async function getLabByManagerId(id) {
  const lab = await Lab.findOne({
    where: {
      manager_id: id,
    },
  });

  return lab;
}

export async function getLabById(id) {
  const lab = await Lab.findOne({
    where: {
      id,
    },
  });

  return lab;
}
