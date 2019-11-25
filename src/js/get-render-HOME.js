define(['jquery','cookie'],function($,cookie){
     return{
        render:function(){
            if(cookie.get('car')==undefined){
                $('.car1').html( '购物车 ('+0+')');
            }else{
            $('.car1').html( '购物车 ('+cookie.get('car')+')');}
           
            $.ajax({
                type: "get",
                url: "http://127.0.0.1:8080/1910exercise/lol/lib/render.HOME.php",
                dataType: "json",
                
                success: function (res) {
                    //  console.log(res);
                     let temp='';
                     res.forEach(elm=> {
                        //  console.log(elm);
                        //  console.log(elm.smpic)
                        let pic = JSON.parse(elm.smpic);
                    //   console.log(pic)
                      temp+=` 
                      
                       <div class="prop">
                                <dt>
                                    <a href="http://127.0.0.1:8080/1910exercise/lol/src/html/shopping-info.html?id=${elm.id} ">
                                        <img src="${pic[0].small}" width="116" height="212">
                                        
                                    </a>
                                </dt>
                                <dd>
                                <a href="" class="bt">
                                    <strong>${elm.name}</strong>
                                </a>
                                <div class="bxlist-t1">
                                    Q币价：<span >&nbsp;&nbsp;&nbsp;${elm.price}</span> <span>Q币</span>
                                </div>
                                <div class="bxlist-t1">
                                    微信价：<span >&nbsp;&nbsp;&nbsp;¥</span><span>${elm.vxprice}</span>
                                </div>
                                <div class="bxlist-t2">
                                    <a href="http://127.0.0.1:8080/1910exercise/lol/src/html/shopping-info.html?id=${elm.id}" data-seqid="18400" class="buy-now">立即购买</a>
                                </div>
                                </dd>
                    </div>`;
                     });
                     $('#new-mian').append(temp);
                     
                }
            })
        }

     }
})  