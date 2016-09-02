/**
 * Created by chen_xiahui on 2016/9/2.
 */
var net=require("net");
var server=net.createServer(function(socket){//套接字
    console.info("有客户端连接上来...");
    console.info(socket);//mongodb
})
//server.listen(8888);
/*server.listen(8888,function(){
    console.info("服务器开始监听");
    var addr=server.address();//获取服务器监听地址
    console.info("监听的地址信息为：%j",addr);
})*/
var server=net.createServer().listen(8888);//创建并启动服务器监听8888端口
//当创建服务器
server.on("connection",function(socket){
    console.info("有客户端连接上来...");
    //获取客户端的访问地址
   console.info(socket.address().address);
})
