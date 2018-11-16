<template>
  <div class="home">
  	<app-header title=善意达></app-header> <!-- 使用 -->
  	
    <div class="home-min">
        我是内容
      <router-link tag="a" :to="'/refer/'">
       <p>综合资讯</p>
       
       </router-link>
       <p @click="login(1)">请求数据</p>
        <p>{{logRen}}</p>
    </div>
     
    <div class="home-foot">
        我是底部
        
    </div>
  </div>
</template>

<script>
import Header from './components/Header'//引入
export default {
  name: 'Home',
  data () {
    return {
     logRen:''
    }
  },
  components:{
  	"app-header":Header //注册
  },
  methods:{
    login(index){
        let that =this
        this.$axios.post('login').then(function(res){
          console.log(res)
          that.logRen = res.data.data[0].msg
          console.log(res.data.data[0].msg)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-min{
	padding-top: 5rem;
	z-index:0;
	padding-bottom: 5rem;
	z-index: 0;
	
}
.home-foot{
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 5rem;
	border-top: 1px solid #212121;
	z-index: 100;
	background: #fff;
}
</style>