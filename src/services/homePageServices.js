import { get, post } from ".";
import apiList from "../lib/apiList";
import { getFilterQuery } from "../utils/homePageUtils";

export const getJobs = async (searchOptions) => {
    try {
        const address = getFilterQuery(searchOptions);
        const jobList = await get(address);
        return jobList;
    } catch (err) {
        throw err;
    }
};

export const applyJob = async ({ job, sop }) => {
    try {
        const res = await post(`${apiList.jobs}/${job._id}/applications`,
            {
                sop: sop,
            })
        return res;
    } catch (error) {
        throw error
    }
}