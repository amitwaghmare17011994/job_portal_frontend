import apiList from "../lib/apiList";

export const getFilterQuery = (searchOptions) => {
    let searchParams = [];
    if (searchOptions.query !== "") {
        searchParams = [...searchParams, `q=${searchOptions.query}`];
    }
    if (searchOptions.jobType.fullTime) {
        searchParams = [...searchParams, `jobType=Full%20Time`];
    }
    if (searchOptions.jobType.partTime) {
        searchParams = [...searchParams, `jobType=Part%20Time`];
    }
    if (searchOptions.jobType.wfh) {
        searchParams = [...searchParams, `jobType=Work%20From%20Home`];
    }
    if (searchOptions.salary[0] != 0) {
        searchParams = [
            ...searchParams,
            `salaryMin=${searchOptions.salary[0] * 1000}`,
        ];
    }
    if (searchOptions.salary[1] != 100) {
        searchParams = [
            ...searchParams,
            `salaryMax=${searchOptions.salary[1] * 1000}`,
        ];
    }
    if (searchOptions.duration != "0") {
        searchParams = [...searchParams, `duration=${searchOptions.duration}`];
    }

    let asc = [],
        desc = [];

    Object.keys(searchOptions.sort).forEach((obj) => {
        const item = searchOptions.sort[obj];
        if (item.status) {
            if (item.desc) {
                desc = [...desc, `desc=${obj}`];
            } else {
                asc = [...asc, `asc=${obj}`];
            }
        }
    });
    searchParams = [...searchParams, ...asc, ...desc];
    const queryString = searchParams.join("&");
    console.log(queryString);
    let address = apiList.jobs;
    if (queryString !== "") {
        address = `${address}?${queryString}`;
    }
    return address;
}

export const mapJobs = (jobList) => {
    return jobList?.filter((obj) => {
        const today = new Date();
        const deadline = new Date(obj.deadline);
        return deadline > today;
    }) || []

}