<template>
  <div class="home-header">
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'Header',
  props:{
  	title:String
  },
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-header{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 5rem;
	background: #fff;
	border-bottom:  1px solid #212121;
	z-index: 100;
	text-align: center;
	font-size: 2rem;
	line-height: 5rem;
}
</style>
