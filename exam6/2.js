/**
 * Created by chen_xiahui on 2016/9/2.
 */
var net=require("net");
var server=net.createServer(function(socket){
    server.getConnections(function(err,count){
        console.info("当前有%d个人在线...",count);
        server.maxConnections=2;//设置最大的连接数
        console.info("当前tcp服务器允许的最大连接数为：%d",server.maxConnections);
        if(count==2){
            console.info("服务器正在被关闭...");
            server.close(function(){
                console.info("tcp服务器已经关闭..");
            });
        }
    })
});
server.listen(0,function(){
   console.info("服务器开始启动，监听端口为：%j",server.address());
});