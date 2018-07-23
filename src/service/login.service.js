import axios from 'axios';

export default {
	// 登录
	login: (data) => axios({
		method: 'post',
		url: '/jwt/token',
		data: data
	})
};
