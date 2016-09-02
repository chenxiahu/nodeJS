/**
 * Created by chen_xiahui on 2016/9/2.
 */
var http=require("http");
var server=http.createServer().listen(8888 ,function(){
    console.info("服务器已经启动");
})
var fs=require("fs");
server.on("request",function(req,res){
    console.info(req.url);
    fs.readFile("./temp.txt",function(err,data){
        if(!err){
            res.write("<meta charset='UTF-8'/>");
            res.write(data.toString());
            res.end("bye");
        }else{
            console.info(err);
        }
    })

    //server.close();
});
server.on("connection",function(socket){
    console.info(socket.address().address);
})
server.on("close",function(){
    console.info("服务器被关闭");
})
server.on("error",function(err){
    if(err.code=="EADDRINUSE"){
        console.info("端口号被占用");
    }
})