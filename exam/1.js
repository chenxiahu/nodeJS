/**
 * Created by chen_xiahui on 2016/9/1.
 */
//js中跳出多重循环
outter:for(var i=1;i<10;i++){
    for(var j=1;j<5;j++){
        if(i*j==15){
            break outter;
        }
        console.info(i+" "+j);
    }
    console.info(i+"...");
}