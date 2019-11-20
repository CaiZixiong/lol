let baseUrl = "http://localhost:8080/1910exercise/lol";
define(['jquery','md5'],function($){
    return {
        drajax:function(){
            
         $('.btn').on('click',function(){
            let u=$('#u').val();
            let p=$('#p').val();
            $.ajax({
                url:`${baseUrl}/lib/dr.php`,
                type:'post',
                data:{
                   "u":u,
                   "p":$.md5($('#p').val()),
                },
                dataType:'json',
                success:function(res){
                    
                    if(res){
                   
                         alert('登入成功'); 
                 
                       $('#dr').html(`<a href="../html/HOME.html" style="color: #9f9f9f">欢迎您，`+$('#u').val()+`退出</a>`);
                       $('#_login_div_quick_').css("display","none");
                        $('.gb').html(`<p>欢迎您，`+$('#u').val()+`</p>`) 
                        
                    }else{
                        alert('请重新确认密码或账号的正确性')
                        $('#_login_div_quick_').css("display","none");
                    }
                }
            });
         })
            }        
        }
    }
);