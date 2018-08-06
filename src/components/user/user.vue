<template>
	<div>
		user works;
		<login-card :initialUserInfo="params" :submit='loginTo' nameLabel="用户名" passwordLabel="密码"></login-card>
	</div>
</template>

<script>
	import loginCard from "./component/loginCard.vue";
	export default {
		name: "login",
		components:{
			loginCard
		},
		data () {
			return {
				params: {
					username:"admin",
					password:"password",
				},
				loginTo: function (params) {
					console.log(params);
					console.log(params.username,params.password);
				}
			}
		},
		methods: {
//			loginTo: function (params) {
//				loginService.login(params).then(res => {
//					if(res){
//						console.log(res);
//					}
//				});
//			},
		}
	};
</script>

<style scoped>

</style>
