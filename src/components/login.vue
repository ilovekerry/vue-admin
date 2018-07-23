<template>
	<div>
		<div>login works</div>
		<i-button @click="show">Click me!</i-button>
		<Modal v-model="visible" title="Welcome">Welcome to iView</Modal>
		<Table :columns="columns1" :data="data1"></Table>
	</div>
</template>

<script>
import loginService from '@/service/login.service'
export default {
    name: "login",
	data () {
    	return {
			visible: false,
			columns1: [
				{
					title: 'Name',
					key: 'name'
				},
				{
					title: 'Age',
					key: 'age'
				},
				{
					title: 'Address',
					key: 'address'
				}
			],
			data1: [
				{
					name: 'John Brown',
					age: 18,
					address: 'New York No. 1 Lake Park',
					date: '2016-10-03'
				},
				{
					name: 'Jim Green',
					age: 24,
					address: 'London No. 1 Lake Park',
					date: '2016-10-01'
				},
				{
					name: 'Joe Black',
					age: 30,
					address: 'Sydney No. 1 Lake Park',
					date: '2016-10-02'
				},
				{
					name: 'Jon Snow',
					age: 26,
					address: 'Ottawa No. 2 Lake Park',
					date: '2016-10-04'
				}
			]
		}
	},
	methods: {
		show: function () {
			this.visible = true;
		}
	},
	created () {
		loginService.login({username:"web",password:"web"}).then(res => {
			if (res.status === 200) {
				console.log(res);
			}
		});
	}
};
</script>

<style scoped>

</style>
