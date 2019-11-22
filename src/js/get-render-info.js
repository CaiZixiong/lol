define(['jquery','cookie'],function($,cookie){
    return{
       renderinfo:function(callback){
         let id=location.search.split('=')[1];
      
           $.ajax({
               type: "get",
               url: "http://127.0.0.1:8080/1910exercise/lol/lib/reder.info.php",
               data:{
                   id:id
               },
               dataType: "json",
               
               success: function (res) {
                   
                    let temp='';
                  
                   let pic = JSON.parse(res.smpic);
                   
                     temp+=` 
                    
                     <div class="info ">
                         <div class="commodity ">
                              <div class="com-left ">
                                  <img src="${pic[1].big} " alt=" " >
                                 <a href="" class="sc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收藏商品</a>
                                  <div class="fdj"></div>
                                 
                              </div>
                              <div class="com-right">
                                  <h4>${res.name}</h4>
                                  <div class="pic">
                                      
                                     <p class="qB">Q币价:<a href=""> ${res.price} </a>Q币</p>
                                    <p class="wx">微信价:<a href="">￥${res.vxprice}</a></p>
                                  </div>
                                  <p class="p">期限:永久</p>
                                  <a href="javascript:;" class="car">加入购物车</a> <a href="" class="gei">赠送</a>
                              </div>
                         </div>
                         <div class="xq">
                             <a href="">商品详情</a>
                             <p>${res.title}</p>
                         </div> 
                          <div class="onclic">
                                      <img src="${pic[1].big}" alt="">
                                      <span class="p">x</span>
                          </div> 
                     </div>`
               
                      
                
                    $('.main-right').append(temp);
                    
                    callback&&callback(res.id,res.price);
                    
               }
           })
       },
      
      addcar:function(id,price){
        alert('加入购物车成功');
     
       let shop =cookie.get('shop');
     console.log(shop);
       let product={
           id:id,
           price:price,
       }
      
       if(shop){
        shop=JSON.parse(shop);
           if(shop.some(elm=>elm.id==id)){
             null
           }else{
            shop.push(product);
            cookie.set('shop',JSON.stringify(shop),1);
           }
       }else{
       shop=[];
       shop.push(product);  
       cookie.set('shop',JSON.stringify(shop),1);
       }
      
    
      }

    }
})  