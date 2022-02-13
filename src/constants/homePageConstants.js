export const jobFilterOptions = {
    query: "",
    jobType: {
        fullTime: false,
        partTime: false,
        wfh: false,
    },
    salary: [0, 100],
    duration: "0",
    sort: {
        salary: {
            status: false,
            desc: false,
        },
        duration: {
            status: false,
            desc: false,
        },
        rating: {
            status: false,
            desc: false,
        },
    },
}