<template>
	<div class="div">
		<ul>
			<li><span>登录名：</span><input type="text" v-model="myname"></li>
			<li><span>邮箱号：</span><input type="text" v-model="myqqem"></li>
			<li><span>爱好：</span><input type="text" v-model="mymim"></li>
			<el-button type="info" @click="dj()">登陆</el-button>
		</ul>
	</div>
</template>
<script>
import store from '@/vuex/store'
	export default{
		name:'denglu',
		data(){
			return{
				myname:'',
				myqqem:'',
				mymim:''
			}
		},
		methods:{
			dj(){
				this.$store.state.name=this.myname;
				this.$store.state.qqem=this.myqqem;
				this.$store.state.mim=this.mymim;
				this.$router.push({path:'/xinxi'})
			}
		},

		store
	}
</script>
<style scoped>
	.div{width: 1000px;clear: both;margin: 0 auto;padding-top: 100px;}
	.div li{height: 50px;}
	.div li input{width: 170px;height: 30px;}
	.div span{display: inline-block;width: 70px;}
</style>