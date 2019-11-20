require.config({
    paths:{
        jquery:'../../node_modules/jquery/dist/jquery.min',
        md5:"./jquery.md5",
        enroll:"./enroll"
    },
    shim:{
        md5:['jquery'],
        enroll:['jquery','md5']
    }
});
require(['jquery','md5','enroll'],function($,md5,enroll){
    
    enroll.enroll();
 })