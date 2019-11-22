require.config({
    paths:{
        jquery:'../../node_modules/jquery/dist/jquery.min',
        cookie:'./cookie',
        getshopp:'./get-render-shopping',
        dr:"./dr",
        drajax:"drajax",
        md5:"./jquery.md5",
    }
});
require(['jquery','getshopp'],function($,getshopp ){
    getshopp.shopping(function(){
        $('.sc').on('click',function( ){
           $(this).parents('.tr-info').remove()
        })
    })
});
require(['jquery','dr','HOME','drajax'],function($,dr,HOME,  drajax){
    HOME.banner();
});
require(['jquery','md5','dr','drajax'],function($,md5,dr,drajax){
   drajax.drajax();
});