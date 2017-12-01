<template>
	<div class="div">
		<div v-for="(itm,index) in Goods.results">
			<div class="img" v-show="myindex==index">
				<span v-if="itm.images"><img :src="itm.images"></span>
			</div>
		</div>
		<div class="btn" v-for="(itm,index) in Goods.results">
			<span v-if="itm.images" @click="fn(index)" :class="{active:myindex==index}"><img :src="itm.images"></span>
		</div>
	</div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
	export default {
  		name: 'tupian',
		  data () {
		    return {
		     Goods:[],
		     myindex:9,
		    }
		  },
		  methods:{
		  	shuj(){
	        	var url='http://gank.io/api/data/Android/100/1';
		        axios.get(url).then(response=>{
		         console.log(response);
		         this.Goods=response.data;
		          //this.add=true;
	      	})
	       },
	       fn(index){
	       	this.myindex=index;
	       	//alert(index)

	       }

		  },

		  
	    created(){
    		this.shuj();
    		
  		},
}
</script>
<style scoped>
	.div{padding-top: 50px;clear: both;}
	.div .img{
		width: 600px;
		height: 600px;
		overflow: hidden;
		margin:20px auto;
	}
	.div img{height: 100%}
	.btn{margin:0 auto;}
	.btn span{
		display: inline-block;
		width: 60px;
		height: 60px;
		overflow: hidden;
		float: left;
		margin:20px;
		border-radius: 15px;
		cursor: pointer;
	}
	.btn span img{border-radius: 15px;}
	.active{
		border:2px solid blue;
		
	}
</style>