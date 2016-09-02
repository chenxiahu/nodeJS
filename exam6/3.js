/**
 * Created by chen_xiahui on 2016/9/2.
 */
var fs=require("fs");
var file=fs.createReadStream("./yc.txt",{start:0,end:11});
var out=fs.createWriteStream("./message.txt");
file.on("open",function(d){
    console.info("文件被打开了...");
})
file.on("data",function(data){
    console.info("读取数据："+data);
    out.write(data,function(){
        console.info(data.toString());
    })
})