/**
 * Created by chen_xiahui on 2016/8/29.
 */
/*var test="源辰信息科技有限公司";
var txt="Hello world";
exports.test=test;
exports.info=txt;
*/
var test=function(msg){
    console.info(msg);
}
//多少毫秒之后执行指定的方法一次
var timer=setTimeout(test,1000,'hello world');
var count=1;
function test1(msg){
    console.info(msg+" "+count);
    count++;
    if(count==10){
        clearInterval(mytimer);
    }
}
var mytimer=setInterval(test1,1000,"你好");