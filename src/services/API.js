import axios from "axios";

export const baseURL = "http://localhost:8000/";

const API = axios.create({
	baseURL: baseURL,
	validateStatus: function (status) {
		return status < 500;
	},
	headers: {
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyb2xhbmRzb2JjemFrQGdtYWlsLmNvbSIsImV4cCI6MTY4NTg3NzM5OX0.WK1JXez3ZhSlFMvPWrnosE84SVeoaopYdcUJjzscJfw",
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
