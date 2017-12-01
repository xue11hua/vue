<template>
	<div class="div">
		<div>
		<div>
			<h1>{{Goods.desc}}</h1>
			<p>时间：{{Goods.createdAt | suma}}</p>
			<p>时间：{{Goods.publishedAt | suma}}</p>
			<p>来源：{{Goods.source}}</p>
			<p>类型：{{Goods.type}}</p>
			<p>地址：{{Goods.url}}</p>
			<p v-if="Goods.who">作者：{{Goods.who}}</p>
			
		</div>
		<div class="ping">
			<p><textarea placeholder="请输入评论" type="text" v-model="ping"></textarea></p>
			<el-button type="primary" @click="fn()">提交</el-button>
			<div :class="{active:heghta}"><p v-for="itma in pings"><span v-if="itma.name">姓名：{{itma.name}}</span><span>{{itma.text}}</span></p></div>
			<el-button type="primary" @click="showa()" v-show="heghta">点击展开</el-button>
		</div>
		</div>
		<div class="loading" v-show="!add">
      		<loading></loading>
    	</div>
	</div>

</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import store from '@/vuex/store'
import loading from '@/components/loading/loading'
import moment from "moment"
Vue.prototype.$moment = moment;
	export default {
  		name: 'wenzhang',
		  data () {
		    return {
		     Goods:[],
		     ping:'',
		     pings:[],
		     add:false,
		     shul:0,
		     heghta:false,
		     pingbd:false,
		     page:0,
		     id:0,
		    }
		  },
		  components:{
   			 loading
  			},
		  methods:{
		  	shuj(){
	        	var url='http://gank.io/api/data/Android/'+this.shul+'/'+this.page;
	        	
		        axios.get(url).then(response=>{
		         //console.log(response);
		         this.Goods=response.data.results[this.id];
		         // for(var o in this.Goods){
		         // 	this.Goods.url="";
		         // }
		       		//console.log(this.Goods.createdAt);
		          this.add=true;
	      	})
	       },
	       fn(){
	       	if(!this.$store.state.name){
	       		alert("请登录");
	       		this.$router.push({path:'/denglu'});
	       	}else if(!this.ping){
	       		alert('请输入评论');

	       	}else{
	       		this.pings.push({'text':this.ping});
	       		this.pings.push({'name':this.$store.state.name});
	       		this.ping='';

	       	}
	       },
	       showa(){
	       	this.heghta=false;
	       	this.pingbd=true;

	       }
	       
		  },
		  
	    created(){
	    	this.id=this.$route.query.id;
	    	this.shul=this.$route.query.shul;
	    	this.page=this.$route.query.page;
    		this.shuj();
    		
  		},
  		//监听数组的长度
  		watch:{
  			pings:{
  				 handler:function(val){  
                   //console.log(oldval.length);
                   if(val.length>4 && !this.pingbd){
                   	
						this.heghta=true;
                   
            
                   }
                },  
                deep:true 
  			}
  		},
  		store
}
Vue.filter("suma",function(value){
			return moment(value).format("YYYY-MM-DD HH:mm:ss");
            });
</script>
<style scoped>
	.div{width: 1000px;margin:0 auto;}
	.div p{line-height: 30px;text-align: left;}
	.ping textarea{width: 1000px;height: 100px;padding: 10px;font-size: 16px;}
	.ping div p{width: 1000px;text-align: left;margin:0 auto;margin-top: 30px;}
	.active{height: 300px;overflow:hidden;}
</style>