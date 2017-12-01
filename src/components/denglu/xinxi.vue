<template>
	<div class="div">
		<ul>
			<li>登录名：<span>{{myname}}</span></li>
			<li>邮箱号：<span>{{myqqem}}</span></li>
			<li>爱好：<span>{{mymim}}</span></li>
		</ul>
	</div>
</template>
<script>
import store from '@/vuex/store'
export default{
	name:'xinxi',
	data(){
		return{
			myname:'',
			myqqem:'',
			mymim:''
		}
	},
	methods:{
		fn(){
			if(!this.$store.state.name){
				alert("请登陆");
				this.$router.push({path:'/denglu'})
			}
		}
	},
	created(){
		console.log(this.$store+'1111111');
		this.myname=this.$store.state.name;
		this.myqqem=this.$store.state.qqem;
		this.mymim=this.$store.state.mim;
		this.fn();
	},
	store
}
</script>
<style scoped>
	.div{
		width: 1000px;
		clear: both;
		padding-top: 200px;
	}
	.div ul li{
		width: 100%;
		height: 50px;
	}

</style>