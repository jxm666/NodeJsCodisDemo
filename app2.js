
var redis = require("redis");

//db=2 类似 redis 命令select 2
var client = redis.createClient({host:"codis-tcp.zxbike.top",port:"36379",db:"2"});
//链接Codis密钥口令
client.auth("o0OE%3wGAFSR");
//错误异常输出
client.on('error', function(err) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
});
client.on('connect', function() {
    console.log('connect redis ok.');
});

//设置key与key值
client.set("testKey", "testKey_OK");
//获取key值
client.get("testKey", function (err, date) {
    console.log(date.toString());
});
//退出客户端链接
client.quit();