/**
 * Created by chen_xiahui on 2016/9/1.
 */
var test="源辰信息科技有限公司";
var txt="hello world";
exports.test=test;//将test变量通过exports对象传递到模块外，其他模块就可以访问这个变量了
exports.info=txt;