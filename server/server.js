/**
 * Created by chen_xiahui on 2016/8/29.
 */
/*var http=require('http');//引入http模块<script></script>
http.createServer(function(){
//客户端发送给服务器端的信息被封装在request对象中，即服务器获取客户端的信息，必须通过request这个对象
    //服务器向客户端回送信息，通过response对象
   // console.info(request);
   // console.info(response);
   response.write("HELLO WORLD");
    response.end();
}).listen(6666)//指定服务器监听的ip地址和端口号，如果监听所有地址，则ip地址可以省略
console.info("服务器已经启动,占用的端口为6666")*/
 var http=require('http');
var server=http.createServer();
server.on("request",function(req,res){
    console.info(req.url);
    res.write("<meta charset='utf-8'>");
    res.write("哈哈");
    res.end();
});
server.listen(6666);