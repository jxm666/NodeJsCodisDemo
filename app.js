
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

//设置key与key值
client.set("nodeJsKey", "nodeJsKeyValue");
//获取key值
client.get("testKey", function (err, date) {
    //打印获取key值
    console.log(date.toString());
});
//退出客户端链接
client.quit();