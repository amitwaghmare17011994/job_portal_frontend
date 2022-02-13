import axios from "axios"

export const get = (url) => {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                return resolve(response.data)
            }).catch(err => {
                return reject(err)
            })
    })
}


export const post = (url, params) => {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                return resolve(response.data)
            }).catch(err => {
                return reject(err)
            })
    })
}



export const put = (url, params) => {
    return new Promise((resolve, reject) => {
        axios
            .put(url, params, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                return resolve(response.data)
            }).catch(err => {
                return reject(err)
            })
    })
}



