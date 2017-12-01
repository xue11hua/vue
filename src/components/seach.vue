<template>
	<div class="div">
		<div class="diva">
			<h1>搜索一下</h1>
			<p>
			<input class="input" @keyup="jiazai()" v-model="giz" type="text">
			<input class="btn" type="button" @click="jiazai()" value="搜索"></p>
		</div>
		
		<div class="divb">
			<h2 v-show="add">专辑</h2>
			<div class="divba" v-for="itm in souyinyue.albums">
				<p><img :src="itm.cover" alt=""></p>
				<p>{{itm.name}}</p>
				<p>时间:{{itm.release_date}}</p>
				<p><img width="60" :src="itm.artists[0].portrait" alt=""></p>
				<p>歌手:{{itm.artists[0].name}}</p>
			</div>
		</div>
		<div class="divc">
			<h2 v-show="add">艺术家</h2>
			<div class="divca" v-for="itm in souyinyue.artists">
				<p><img :src="itm.portrait" alt=""></p>
				<p>{{itm.name}}</p>
			</div>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import axios from 'axios'
	export default{
		name:'seach',
		data(){
			return{
				
				giz:'',
				souyinyue:[],
				add:false,
			}
		},
		methods:{
			jiazai(){
				if(this.giz==""){
					this.add=false;
				}else{
					this.add=true;
				}
				
				const url = '/scachapi/search-ajaxsearch-searchall';
				  axios.get(url,{
							params:{
							kw:this.giz,
							pi:1,
							pz:1,
						}
					})
					.then(response=>{
         				this.souyinyue=response.data;

      				})
			},
		}

	}
</script>
<style scoped>
	p{line-height: 30px;}
	.input{width: 300px;height: 30px;text-indent: 20px;}
	.btn{width: 60px;height: 30px;}
</style>