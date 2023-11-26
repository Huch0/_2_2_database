import { Major } from "../models/index.js";

export async function getMajorById(id) {
  const major = await Major.findOne({
    where: {
      id: id,
    },
  });

  return major;
}
