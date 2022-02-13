import apiList from "../lib/apiList";
import { get, put } from ".";

export const getApplications = async () => {
  try {
    const res = await get(apiList.applications);
     
    return res;
  } catch (error) {
    throw error;
  }
};

export const getRating = async (application) => {
  try {
    const res = await get(`${apiList.rating}?id=${application.job._id}`);
    return res.rating;
  } catch (error) {
    throw error;
  }
};

export const updateRating = async ({application,rating}) => {
  try {
    const res = await put(apiList.rating, {
      rating: rating,
      jobId: application.job._id,
    });
    return res;
  } catch (error) {
    throw error;
  }
};
