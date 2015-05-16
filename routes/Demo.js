/**
 * Reids的连接
 */
//导入redis模块
var redis = require("redis");
//redis 客户端
var client = redis.createClient();

//数据库连接错误
client.on("error", function (err) {
    console.log("Error " + err);
});


//hset 散列数据设定
//hset(key,fieldName,val)
client.hset("user","name","yellowcong",redis.print,function(err,result){
	//获取散列中的所有数据
	client.hgetall("user",function(err,result){
		console.log(result);
	});
});

//设定多个散列数据
//异步设定
client.hmset("car",{"color":"yellow","price":200},function(err){
	client.hgetall("car",function(err,result){
		console.log(result);
	});
})

//这个没有回调函数的方法是同步的
client.hmset("car:2","color","yellowcong","price",200,"name","bwm");
client.hgetall("car:2",function(err,result){
	console.log(result);
});



//设定String 类型等简单数据
//redis.print 打出返回 数据
client.set("name","yellowcong",redis.print,function(err,result){
	//查询数据
	client.get("name",function(err,result){
		console.log(result);
	});
});


//设定多个数据
//mest(key,val,key2,val2)
client.mset("age",20,"email","717350389@qq.com","phone","15335761939");


//断开连接
//client.quit();
