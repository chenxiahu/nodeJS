/**
 * Created by chen_xiahui on 2016/8/30.
 */
var http=require("http");
var server=http.createServer();
var restFun=function(req,res){
if(req.url!="/favorite.ico") {
    console.info("接收到了客户端图标的信息...");
}
};
server.on("request",function(req,res) {
    if (req.url != "/favorite.ico") {
        console.info("发送响应信息...");
        res.write("<!doctype html><head><title>哈哈</title><meta charset='utf-8'/></head></html>");
        res.write("欢迎欢迎..");
        res.end();
    }
});
server.on("request", function (req,res) {
    if (req.url != "/favorite.ico") {
        console.info("发送响应完毕...");
    }

})
server.on("request")




