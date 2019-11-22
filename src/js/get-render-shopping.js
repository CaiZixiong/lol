define(['jquery','cookie'],function($,cookie){
    return{
        shopping:function(callback){
           let shop = cookie.get('shop');
         
          
          if(shop){ 
               shop = JSON.parse(shop);
              
               let idlist= shop.map(elm=>elm.id).join();
               $.ajax({
               type: "get",
               url: "http://127.0.0.1:8080/1910exercise/lol/lib/reder.shopping.php",
               data: {
                   idlist:idlist
               },
               dataType: "json",
               success: function (res) {
              
                let temps='';
               
                res.forEach(elm => {
                     let pic = JSON.parse(elm.smpic);
                  
                temps+=`
                    
                    <ul class="tr-info">
                    <li class="quer" "><input type="checkbox"></li>
                    <li class="img"><img src="${pic[2].sm}" alt="" style="width: 39px;
                        height: 28px;">
                     <span >${elm.name}</span> 
                   </li>
                   <li>英雄</li>
                   <li>${elm.price}</li>
                   <li style="width:75px">永久</li>
                   <li class="num">
                    <a href="javascript:void(0);" >-</a>
                    <input name="good_num" type="text" class="cart-amount tac" value="&nbsp;&nbsp;&nbsp;&nbsp;1">
                    <a href="javascript:void(0);">+</a>
                   </li>
                   <li>暂无优惠</li>
                   <li>${elm.price}</li>
                   <li>
                       <a href="">关注</a>
                       <a href="javascript:;" class="sc">删除</a>
                   </li>
                </ul>`;
                });
                $('.info').append(temps);
                 
                callback&&callback(idlist);
               }
           });
          }
         

        }
    }
})