/**
 * Created by chen_xiahui on 2016/8/30.
 */
/* var htttp=require("http");
var server=htttp.createServer();
server.on("ycEvent",function(arg1,arg2,arg3){
    console.info("自定义事件");
    console.info(arg1+arg2+arg3);

});
server.emit("ycEvent",10,20,30);
server.listen(8888); */
var yc=require("./yc");
//var myyc=new yc();
var myyc=new yc("chen",22);
console.info(myyc.getName());
console.info(myyc.getAge());
myyc.setAge(110);
console.info(myyc.getAge());
myyc.setName("哈哈");
console.info(myyc.getName());
console.info(myyc.toString());