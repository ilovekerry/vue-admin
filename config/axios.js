import axios from 'axios';
import iView from 'iview';

// 添加请求拦截器
axios.interceptors.request.use(function(config){
	// 一般在这里统一配置请求头什么的
	return config;
},function(error){
	// 我也不知道这里可以用来做什么
	return Promise.reject(error)
});
// 添加响应拦截器
axios.interceptors.response.use(function(response){
	// 这里指响应成功之后的处理，一般什么都不做
	return response;
},function(error){
	// 这里是对响应错误的处理，一般用来弹出toastr提示用户错误原因。
	iView.Notice.error({
		title: '状态:' + String(error.response.data.status || error.response.status) + "  " + String(error.response.data.message || error.response.data)
	});
	return Promise.reject(error.response);
});
