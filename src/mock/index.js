var Mock = require('mockjs')  //引入下载的依赖包

const loginData = function(){
	let loginData = [
		 {
		code:"1",   //请求是否成功
		msg:"登录成功"
	     }
    ]
	return{
		data:loginData  //返回加数据

	}
}
Mock.mock('login',/post|get/i,loginData)