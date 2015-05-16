/**
 * 操作set集合
 */
//导入redis模块
var redis = require("redis");
//redis 客户端
var client = redis.createClient();

//由于set
for(var i=0;i<10;i++){
	client.sadd("stus","stu"+1,redis.print);
}