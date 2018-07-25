<template>
	<div>
		<input type="text" class="username" v-model="params.username">
		<input type="password" class="password" v-model="params.password">
		<button @click="login(params)">login</button>
		<Button @click="open(true)">Open notice(only title)</Button>
	</div>
</template>

<script>
import loginService from '@/service/login.service'
export default {
    name: "login",
	data () {
    	return {
			params: {
				username:"",
				password:"",
			},

		}
	},
	methods: {
		login: function (params) {
			loginService.login(params).then(res => {
				if(res){
					console.log(res);
				}
			});
		},
		open (nodesc) {
			this.$Notice.open({
				title: 'Notification title',
				desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
			});
		}
	}
};
</script>

<style scoped>

</style>
