import { Profile } from "../models/index.js";

export async function getProfileByUserId(id) {
  const profile = await Profile.findOne({
    where: {
      user_id: id,
    },
  });

  return profile;
}

export async function editDegreeByUserId(id, degree) {
  const profile = await Profile.update(
    { degree: degree },
    {
      where: {
        user_id: id,
      },
    }
  );

  return profile;
}
