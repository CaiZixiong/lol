

require.config({
    paths:{
        jquery:'../../node_modules/jquery/dist/jquery.min',
      
        getr:'./get-render-info',
         cookie:'./cookie',
        dr:"./dr",
        drajax:"drajax",
        md5:"./jquery.md5",
    },
    shim:{
        md5:['jquery'],
        dr:['jquery','md5'],
    }
});
require(['jquery','md5','dr','drajax'],function($,md5,dr,drajax){
    drajax.drajax();
    
});
require(['jquery','dr','HOME','drajax'],function($,dr,HOME,  drajax){
    HOME.banner();
});
require(['jquery','getr','cookie'],function($,getr,cookie){
    getr.renderinfo(function(id,price){
        // console.log(id,price,1);
        $('.fdj').on('click',function(){
              $('.onclic').css("display","block");
                
        });
        $('.p').on('click',function(){
            $('.onclic').css("display","none");
        });
       $('.car').on('click',function(){
        getr.addcar(id,price);
        
        
       })
    })
    
});


