import axios from "axios";

export const baseURL = "http://localhost:8000/";

const API = axios.create({
	baseURL: baseURL,
	validateStatus: function (status) {
		return status < 500;
	},
});

export default API;

// export const setHeader = (token) => {
// 	API.interceptors.request.use(
// 		(config) => {
// 			if (token) {
// 				config.headers.Authorization = `Bearer ${token}`;
// 			} else {
// 				delete API.defaults.headers.common.Authorization;
// 			}
// 			return config;
// 		},

// 		(error) => Promise.reject(error)
// 	);
// };
