<template>
  <div id="app">
    <div class="text" v-show="add">
    <div v-for="(itm,index) in Goods.results" class="div" @click="conut(index)">
      <p><span class="span">{{itm.desc}}</span><span class="spana" v-if="itm.who">作者：{{itm.who}}</span></p>
      <p><span class="span">类型：{{itm.type}}--{{itm._id | sum}}</span><span class="spana">发表时间：{{itm.createdAt}}</span></p>
    </div>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="vpage"  layout="total, sizes, prev, pager, next, jumper" :total="100">
      </el-pagination>
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
import loading from '@/components/loading/loading'
import moment from "moment"
Vue.prototype.$moment = moment;
export default {
  name: 'app',
  data(){
    return{
     page:1,
     shul:10,
     id:0,
     shijian:[],
     add:false,
      Goods:[],
    }
  },
  components:{
    loading
  },
  created(){
    
    this.shuj();
  },
  methods:{
    vpage(val){
    
     this.page=val;
     this.add=false;
     setTimeout(this.shuj(),6000);
    },
    handleSizeChange(val){
      this.shul=val;
      this.shuj();
    },
    shuj(){
        var url='http://gank.io/api/data/Android/'+this.shul+'/'+this.page;
        axios.get(url).then(response=>{
         //console.log(response);
         this.Goods=response.data;
         //处理时间
         for(let i=0;i<this.Goods.results.length;i++){
         this.Goods.results[i].createdAt=moment(this.Goods.results[i].createdAt).format("YYYY-MM-DD HH:mm:ss");
         this.Goods.results[i]._id=i;
          
         };
          this.add=true;
      })
    },
    conut(index){
      this.$router.push({path:'/wenzhang',query:{id:index,shul:this.shul,page:this.page}})  
    }
  },
  filter:{
    timeid:function(value){
      return value;
    }
  }

  
}
 Vue.filter("sum", function(value) {
                return value + 4;
            });
</script>

<style scoped>
*{margin:0;padding:0;}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1000px;margin:0 auto;
}
.ander{}
.div{
  clear: both;
  height: 60px;
  padding: 10px;
  border:1px solid #999999;
  margin:10px 0;
  cursor: pointer;
}
.div:hover{
  background: #eeeeee;
}
.div p{
  width: 100%;
  height: 30px;
}
.div .span{
  float: left;
}
.div .spana{
  float: right;
}
.block{
  margin: 30px auto;
  font-size: 20px;
}


</style>
