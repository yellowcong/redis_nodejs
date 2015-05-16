/**
 * 操作Set 单列集合
 */
//导入redis模块
var redis = require("redis");
//redis 客户端
var client = redis.createClient();

//添加的集合数据
var args = ["userIds",1,"user1",2,"user2"];
//添加数据
client.zadd(args,function(err,result){
	//获取数据
	client.zrange("userIds",0,-1,function(err,result){
		console.log(result);
	});
});