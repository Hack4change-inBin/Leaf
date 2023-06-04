import axios from "axios";

export const baseUrl = "http://localhost:8000/";

const API = axios.create({
	baseURL: baseUrl,
	validateStatus: function (status) {
		return status < 500;
	},
	headers: {
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyb2xhbmRzb2JjemFrQGdtYWlsLmNvbSIsImV4cCI6MTY4NTg1ODQxOX0.iCQorl_nU8lYYAI9e7xweHWlsXawML6hhZ-4Fw_WAMU",
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
