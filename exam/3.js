/**
 * Created by chen_xiahui on 2016/9/1.
 */
var http=require('http');//引入http模块
http.createServer(function(request,response){
    //客户端发送给服务器端的信息被封装在request对象中，即服务器要获取客户端的信息，必须通过request这个对象
    //服务器想客户端回送信息，通过response对象
    console.info(request);
    console.info(response);
    response.write("hello world");
    response.end();
}).listen(6,6,6,6);
console.info("服务器已经启动，占用的端口为:6666")