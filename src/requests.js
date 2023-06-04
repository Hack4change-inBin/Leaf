import axios from "axios";

export const baseUrl = "http://localhost:8000/";

const API = axios.create({
	baseURL: baseUrl,
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
