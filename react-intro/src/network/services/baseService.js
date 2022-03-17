import { API_URL } from "../env/config";

export const baseService = {
    get: async (url) => {
        let response = [];

        await fetch(API_URL + url)
            .then(res => res.json())
            .then(data => {
                response = data
            })

        return response;
    },
    post: async (url, data) => {
        let response = {};
        let requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }

        await fetch(API_URL + url, requestOptions)
            .then(res => res.json())
            .then(data => {
                response = data
            })

        return response;
    },
    delete: async (url) => {
        let response = {};
        let requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }

        await fetch(API_URL + url, requestOptions)
            .then(res => res.json())
            .then(data => {
                response = data
            })

        return response;
    }
};
