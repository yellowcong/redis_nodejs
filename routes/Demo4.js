/**
 * 操作缓存
 */
//导入redis
var redis = require('redis');
//导入缓存
var CacheClient = require('redis-cache-client');
 
var cache = CacheClient({
    client: redis.createClient(),
    //定义存储字段的前缀
    prefix: 'cache:'
});

//定义数据
var users = {name:"yellowcong",age:20,email:"717350389@qq.com",phone:"15335761939"};

//设定缓存
//设定存 360s
cache.set('yellowcong', users, 360, function(err) {
	if(err){
		console.log(err);
	}else{
		console.log("添加成功");
	}
});

//设定缓存 不添加时间
//一直贮存在缓存中
cache.set('author', users, null, function(err) {
	if(err){
		console.log(err);
	}else{
		console.log("添加成功");
	}
});

//获取缓存数据
//直接会添加前最 cache:author
cache.get('author',function(err,date){
	console.log(date);
});


//清空所有缓存
cache.purge();

//带回调函数的清空方法
cache.purge(function(err){
	if(err){
		console.log(err);
	}else{
		console.log("清空成功");
	}
});
