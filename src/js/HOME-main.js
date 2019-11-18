// 
require.config({
   
    paths:{
        jquery:'../../node_modules/jquery/dist/jquery.min',
        HOME:"./HOME"
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

require(['jquery','HOME'],function($,HOME){
     HOME.banner()
})
