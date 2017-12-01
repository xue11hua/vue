<template>
	<div>
		<div class="nav">
			<ul>
				<li :class="{color:addys=='aaa'}" @click="paixu()">最新歌单</li>
				<li :class="{color:addys=='bbb'}" @click="shuju()">推荐歌单</li>
				<li :class="{color:addys=='ccc'}" @click="paixua()">最热歌单</li>
			</ul>
		</div>

		<div class="list">
			<div v-for="itm in yinyue.childs" class="list_a" @click="play(itm.id,itm.coverurl,itm.name,itm.description,itm.creator.nick_name,itm.tags)">
				<p class="listp"><img :src="itm.coverurl" alt=""></p>
				<div class="list_b">
					<h2>{{itm.name}}</h2>
					<p class="p1">{{itm.description}}{{itm.tags}}</p>

					<p class="p2">
					<span class="spana"><b>次数:{{itm.play_times}}</b><b>点赞{{itm.subscribers_num}}</b></span><span class="spanb"><b>{{itm.creator.nick_name}}</b><b><img :src="itm.creator.portrait" alt=""></b></span>
					</p>

				</div>	
			</div>
		</div>
		<div class="block">
	      <el-pagination @size-change="handleSizeChange" @current-change="vpage"  layout="total, sizes, prev, pager, next, jumper" :total="total">
	      </el-pagination>
    	</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import axios from 'axios'
	import store from '@/vuex/store'
	export default{
		name:'yinyue',
		data(){
			return {
				ypage:1,
				yshul:10,
				yguanj:'音乐',
				yinyue:[],
				addys:'bbb',
				total:0,
				time:'',
				

			}
		},
		methods:{
			shuju(){
				this.addys='bbb';
				const url = '/api/list-list-getlist';
				axios.get(url,{
							params:{
							id:'user_rec',
							pi:this.ypage,
							pz:this.yshul,
						}
					})
					.then(response=>{
         				this.yinyue=response.data;
         				this.total=this.yinyue.total;
         				console.log(this.yinyue.total);
      				})
			},
			play(index,imgurl,titlea,context,zuoname,tags){
				this.$router.push({path:'/bofang',query:{id:index}});
				this.$store.state.imgurl=imgurl;
				this.$store.state.title=titlea;
				this.$store.state.context=context;
				this.$store.state.zuoname=zuoname;
				this.$store.state.tags=tags;
			},
			vpage(val){
    
		     this.ypage=val;
		     this.shuju();
		     //this.add=false;
		     //setTimeout(this.shuj(),6000);
		    },
		    handleSizeChange(val){
		      this.yshul=val;
		      this.shuju();
		    },
		    //数组排序
		    paixu(addys){
		    	this.addys='aaa';
		    	this.yinyue.childs.sort(function(a,b){return a.play_times-b.play_times});
		    	
		    },
		    paixua(){
		    	this.addys='ccc';
		    	this.yinyue.childs.sort(function(a,b){return a.play_times-b.play_times}).reverse();
		    },
		},
		created(){
			this.shuju()
		},
		store
	}
</script>
<style scoped>
	.list .list_a{width: 1000px;margin:0 auto;clear: both;padding: 10px 0;text-align: left;}
	.list .list_a .listp{width: 146px;height: 168px;float: left;}
	.list .list_a .listp img{width: 100%}
	.list .list_a .list_b{width: 800px;float: right;}
	b{font-weight: normal;}
	.list .list_a .list_b .spana{display: inline-block;width: 200px;float: left;}
	.list .list_a .list_b .spana b{display: inline-block;width: 100px;}
	.list .list_a .list_b .spanb{display: inline-block;width: 200px;float: right;text-align: center;}
	.list .list_a .list_b .spanb img{width: 40px;height: 40px;border-radius: 20px;float: right;}
	.list .list_a .list_b .p2{line-height: 40px;}
	.block{clear: both;}
	.nav{width: 1000px;margin:0 auto;line-height: 60px;height: 60px;text-align: center;}
	.nav ul li{width: 333px;float: left;}
	.color{background: #eee;}
</style>