import axios from 'axios';
import { CONST } from '../helpers';

axios.defaults.timeout = 5000;

axios.interceptors.request.use((config) => {
	const requireAuth = store.state.Auth.status.loggedIn;

	if (requireAuth) {
		const token = localStorage.getItem('jwt');
		config.headers.common.Authorization = token;
	}

	return config;
});

// intercept responses
axios.interceptors.response.use(
	data => data,
	(error) => {
		const err = error.response;
		const requestURL = err.request.responseURL.split('/');
		const isLogin = requestURL[requestURL.length - 1] === 'sign_in';
		const errorCode = err.status;

		if (errorCode === 401 && !isLogin) {
			store.dispatch(CONST.VUEX_MUTTATIONS.auth_undo, null);
			return Promise.reject(error);
		}
		return Promise.reject(error);
	},
);
export default axios;
