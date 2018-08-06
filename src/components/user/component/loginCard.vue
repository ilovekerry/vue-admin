<style lang="scss">

</style>

<template>
	<div class="login" @keydown.enter="handleSubmit">
		<div class="login-con">
			<Card :bordered="false">
				<div class="form-con">
					<Form ref="loginForm" :model="userInfo">
						<FormItem prop="userName">
							<Input v-model="userInfo.username" :placeholder="nameLabel">
							<span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
							</Input>
						</FormItem>
						<FormItem prop="password">
							<Input type="password" v-model="userInfo.password" :placeholder="passwordLabel">
							<span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
							</Input>
						</FormItem>
						<FormItem>
							<Button @click="handleSubmit" type="primary" long>登录</Button>
						</FormItem>
					</Form>
				</div>
			</Card>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'loginCard',
		props: {
			nameLabel: String,
			passwordLabel: String,
			initialUserInfo: {
				type: Object,
				default: {
					username:"",
					password:"",
				}
			},
			submit: {}
		},
		data: function () {
			return {
				userInfo: this.initialUserInfo
			}
		},
		methods: {
			handleSubmit(){
				this.submit(this.userInfo);
			}
		}
	};
</script>

