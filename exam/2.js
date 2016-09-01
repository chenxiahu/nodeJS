/**
 * Created by chen_xiahui on 2016/9/1.
 */
var req={
    session:{
        user:{
            uname:'navy',
            age:'27'
        }
    }
}
console.info(req.session.user.uname);
for(var attr in req.session.user){
    console.info(attr+":"+req.session.user[attr]);
};
with(req.session.user){
    console.info(uname+" "+age);
}
