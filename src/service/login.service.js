import axios from 'axios';
import iView from 'iview';

export default {
	// 登录
	login: (data) => axios({
		method: 'post',
		url: '/jwt/token',
		data: data
	}).then(res => {
		// 请求成功之后的回调在这里处理，失败之后的回调由拦截器统一处理
		if (res.status === 200) {
			iView.Notice.success({
				title: '登录成功'
			});
			return res.data;
		};
	}).catch(error => {
		console.warn(error);
	})
};
