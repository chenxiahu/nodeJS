/**
 * Created by chen_xiahui on 2016/8/30.
 */
var __name,__age;//两个私有变量，注意：私有变量用两个下划线
var name="匿名",age=20;//公有变量
var yc=function(name,age){
    console.info("调用构造方法");
    __name=name;
    __age=age;
}
//提供一个获取私有变量__name的值的方法
yc.prototype.getName=function(){
    return __name;
}
yc.prototype.getAge=function(){
    return __age;
}
//提供一个公有的方法，用来修改私有变量__name的值
yc.prototype.setName= function (name) {
    __name=name;
}
yc.prototype.setAge=function(age){
    //在这个公有方法中，我们可以做一些基本的校验，用来处理用户给定的数据是否符合要求
    if(age<10||age>100){
        __age=18;
    }else
    {
        __age=age;
    }
}
yc.prototype.name=name;
yc.prototype.toString=function(name,age){
    return "name="+__name+"age="+__age;

}
module.exports=yc;