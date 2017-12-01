<template>
  <div class="header">
    <ul>
      <li><router-link to="/">行业资讯</router-link></li>
      <li><router-link to="/tupian">图片</router-link></li>
      <li><router-link to="/yinyue">音乐</router-link></li>
      <li><router-link to="/seach">搜一下</router-link></li>
      <!--  <li><router-link to="/dianying">电影</router-link></li>
        <li><router-link to="/tushu">图书</router-link></li> -->
      <ol>
      <li><router-link to="/denglu">登陆</router-link></li>
      <li><router-link to="/xinxi">个人中心</router-link></li>
      </ol>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  li{list-style: none;}
  .header{
    width: 100%;
    height: 165px;
    background:#000000 url(../../assets/bg-nav.jpg) no-repeat;
    float: left;
  }
  .header ul{
    width: 966px;
    margin:0 auto;
    margin-top: 136px;
  }
  .header ul li{
    float: left;
    width: 90px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    color: #ffffff;
  }
  .header ul li:hover{
    background-color: #ff1461;
  }
  a{
    color: #ffffff;
    display: inline-block;
    width: 100%;height: 100%;
    text-decoration: none;
  }
  .router-link-exact-active{
    background: red;
  }
  ol{float: right;}
  .header ol li{width: 70px;}

</style>
