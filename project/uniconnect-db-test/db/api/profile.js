import { Profile } from "../models/index.js";

export async function getProfileByUserId(id) {
  const profile = await Profile.findOne({
    where: {
      user_id: id,
    },
  });

  return profile;
}
