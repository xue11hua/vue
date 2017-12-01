<template>
	<div>
		<div class="title">
			<div class="titlea"><img :src="imgurl" alt=""></div>
			<div class="titleb">
				<h1>{{titlea}}</h1>
				<p><span>作者：</span>{{zuoname}} <span>发表于：</span>{{time}}</p>
				<p><span>标签：</span><span v-for="itm in tags">{{itm}}</span></p>
				<p>{{context}}</p>
			</div>
		</div>
		<div class="con">
			<p>歌曲列表</p>
		</div>
		
		<div class="listgq" v-for="(itm,index) in yinyuea.response.listtracks" :class="{ active: index==myindex }">
			<span class="spana">{{itm.track.title}}</span>
			<span v-for="itmc in itm.track.medias" style="display:none">
				<audio class="audio" :src="itmc.url" controls="controls"></audio>
			</span>
			<span class="spanb" ><b v-for="itma in itm.track.artists">{{itma.name}}</b></span>
			<span class="spanc"><b @click="plyy(index)">播放</b></span>
		</div>
		<!-- <p v-for="itmb in gq.tracks">
				<b v-for="itmc in itmb.medias">
				<audio :src="itmc.p2purl" controls="controls">
					Your browser does not support the audio element.
				</audio>
				{{itmc.p2purl}}</b>

		</p> -->
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
	import moment from "moment"
	Vue.prototype.$moment = moment;
	export default{
		data(){
			return{
				id:'',
				ypage:1,
				yshul:10,
				yinyuea:[],
				gq:[],
				gjz:'',
				myindex:null,
				total:0,
				imgurl:'',
				titlea:'',
				context:'',
				zuoname:'',
				tags:'',
				time:'',
				
			}
		},
		methods:{
			shuju(){
				const url = '/api/third-ajaxthird-playlist';
				axios.get(url,{
							params:{
							id:this.id,
							pz:this.yshul,
							pi:this.ypage,
						}
					})
					.then(response=>{
         				this.yinyuea=response.data;
         				
         				this.total=this.yinyuea.response.total;
         				this.time=this.yinyuea.response.listtracks[0].time;
         				this.time=this.getLocalTime(this.time);
         				console.log(this.time);
      				})
			},
			//搜索
			jiazai(){
				const url = '/scachapi/search-ajaxsearch-searchall';
				  axios.get(url,{
							params:{
							kw:this.gjz,
							pi:1,
							pz:1,
						}
					})
					.then(response=>{
         				this.gq=response.data;
         				console.log(this.gq);

      				})
			},
			// playmp(index){
			// 	this.gjz=index;

			// 	this.jiazai();
			// }
			plyy(index){
			var audio=document.getElementsByTagName('audio');
				for(var i=0;i<audio.length;i++){
					audio[i].pause();
					audio[i].currentTime=0;
				}
				if(audio[index].networkState==3){
					alert("因版权问题无法播放")
				}else if(audio[index].networkState==2){
					alert("正在下载数据")
				}else{
					this.myindex=index;
					audio[index].play();
				}
				
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
		    //转化时间戳
		    getLocalTime(nS){  
 				return new Date(parseInt(nS)*1000).toLocaleString().replace(/:\d{1,2}$/,' ');  
			}

		},
		
		created(){
			this.id=this.$route.query.id;
			console.log(this.id);
			this.imgurl=this.$store.state.imgurl;
			this.titlea=this.$store.state.title;
			this.context=this.$store.state.context;
			this.zuoname=this.$store.state.zuoname;
			this.tags=this.$store.state.tags;
			this.shuju();
		},

		store
	}
	// Vue.filter("suma",function(value){
	// 		return moment(value).format("YYYY-MM-DD HH:mm:ss x");
 //            });
</script>
<style scoped>
	.listgq{
		width: 1000px;
		margin:0 auto;
		clear: both;
		padding: 10px 0;
		clear: both;
	}
	.listgq span{
		display: inline-block;
		text-align: center;
	}
	.listgq .spana{
		width: 600px;
		text-align: left;
	}
	.listgq .spanb{
		width: 250px;
		text-align: left;
	}
	.listgq .spanc{
		width: 100px;
		text-align: left;
	}
	.active{
		background: #999999;
	}
	.block{
		margin-top: 30px;
	}
	.title{
		clear: both;
		width: 1000px;
		margin:0 auto;
		padding-top: 40px;
	}
	.title .titlea{width: 200px;float: left;}
	.title .titleb{
		width: 800px;float: left;
		text-align: left;
	}
	.con{
		clear: both;
		text-align: left;
		width: 940px;
		margin: 0 auto;
		line-height: 60px;
	}
</style>