import axios from 'axios';
import md5 from 'md5';
const BASE_URL = '//api.valantis.store:40000';

const currentDate = new Date();
const year = currentDate.getUTCFullYear();
const month = (currentDate.getUTCMonth() + 1).toString().padStart(2, '0');
const day = currentDate.getUTCDate().toString().padStart(2, '0');

const X_Auth_VALUE = md5(`Valantis_${year}${month}${day}`);

const serverProductApi = axios.create({
    baseURL: BASE_URL,
    headers: { 'X-Auth': X_Auth_VALUE },
});

const QUANTITY_TRY_REQUEST = 3;

serverProductApi.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        originalRequest._Retry = 0;

        if (error.response && error.response.status === 500 && originalRequest._Retry < QUANTITY_TRY_REQUEST) {
            originalRequest._Retry++;
            console.log(`${error.response.status}: ${error.response.statusText} ${error.message}---Retrying request`);
            return serverProductApi(error.config);
        }

        return Promise.reject(error);
    }
);
export { serverProductApi };
