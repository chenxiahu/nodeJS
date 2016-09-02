/**
 * Created by chen_xiahui on 2016/9/2.
 */
var net=require("net");
var fs=require("fs");
var file=fs.createWriteStream("./temp.txt");
var server=net.createServer(function(socket){
    socket.setEncoding("utf8");
    /*
    可以利用socket对象中的pipe（destination）,[options]来将接受到的数据写入到指定文件中
    destination:文件
    options是一个对象，其中有一个boolean类型的属性end，该属性如果是true,当数据全部接受完毕后，自动关闭写操作
    该属性默认为true
    * */
    //将接受到的数据全部存放到一个文件中
    socket.pipe(file);
    socket.on("end",function(){
        console.info("用户已经下线，数据写入完成..");
    })
});
server.listen(0,"127.0.0.1",function(){
    console.info("服务器开始启动，监听端口为:%j",server.address());
})