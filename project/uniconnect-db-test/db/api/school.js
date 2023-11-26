import { School } from "../models/index.js";

export async function getSchoolById(id) {
  const school = await School.findOne({
    where: {
      id: id,
    },
  });

  return school;
}
