<template>
  <div class="refer">
    <app-header title=综合资讯></app-header>
    <div class="page">第二页</div>
  </div>
</template>

<script>
import Header from '../home/components/Header'
export default {
  name: 'Refer',
  data () {
    return {
     
    }
  },
  components:{
  	"app-header":Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.refer{
	color: #212121;
	font-size:3rem;
}
.page{
	margin-top: 5rem;
}
</style>
