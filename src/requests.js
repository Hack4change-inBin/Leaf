import axios from "axios";

const API = axios.create({
	baseURL: "http://34.116.198.24/",
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
