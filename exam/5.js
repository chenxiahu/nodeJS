/**
 * Created by chen_xiahui on 2016/9/1.
 */
/*
* process对象提供一系列属性，用于返回系统信息。

 process.pid：当前进程的进程号。
 process.version：Node的版本，比如v0.10.18。
 process.platform：当前系统平台，比如Linux。
 process.title：默认值为“node”，可以自定义该值。
 process.argv：当前进程的命令行参数数组。
 process.env：指向当前shell的环境变量，比如process.env.HOME。
 process.execPath：运行当前进程的可执行文件的绝对路径。
 process.stdout：指向标准输出。
 process.stdin：指向标准输入。
 process.stderr：指向标准错误。
 */
//process.stdout.write("请输入：");//指向标准输出
//process.stdin.write("请输入：");//指向标准输入
/* process.stdin.setEncoding("utf-8");//设置编码集
process.stdin.on("data",function(data){//监听用户的输入，用户输入的信息会自动保存到回调函数的data中
    console.info(data);
})*/
process.stdout.write("请输入：");
process.stdin.setEncoding("utf-8");//设置编码集
process.stdin.on("readable",function(){//监听用户的输入，用户输入的信息会自动保存到回调函数的data中
    console.info(process.stdin.read());
})
