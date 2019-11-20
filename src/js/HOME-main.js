
require.config({
   
    paths:{
        jquery:'../../node_modules/jquery/dist/jquery.min',
        dr:"./dr",
        drajax:"drajax",
        md5:"./jquery.md5",
        get:'./get-render-HOME',
      
      
    },
    shim:{
        md5:['jquery'],
        dr:['jquery','md5'],
       
        
    }
});

require(['jquery'],function(){
   return $(function() {
        $('.lastli').on('mouseover', function() {
            $('#ds-on').css('display', 'block')
        })
        $('.lastli').on('mouseout', function() {
            $('#ds-on').css('display', 'none')
        })
        $('#ds-on').on('mouseover', function() {
            $('#ds-on').css('display', 'block')
        })
        $('#ds-on').on('mouseout', function() {
            $('#ds-on').css('display', 'none')
        })
    })
});

require(['jquery','dr','HOME','drajax'],function($,dr,HOME,  drajax){
     HOME.banner();
});
require(['jquery','md5','dr','drajax'],function($,md5,dr,drajax){
    drajax.drajax();
});
require(['jquery','get'],function($,get){
    get.render();
});
