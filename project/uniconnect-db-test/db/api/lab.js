import { Lab } from "../models/index.js";

export async function getAllLabs() {
  const labs = await Lab.findAll({
    order: [["createdAt", "DESC"]],
  });

  return labs;
}
