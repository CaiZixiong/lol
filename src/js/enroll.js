
define(['jquery','md5'], function($) {
   return {
      enroll:function(){
        let uname = /\w{6,16}$/;
        let upass = /^[A-z]\w{7,15}$/
        let num = /^1[3-9]\d{9}$/;
          //验证用户名
          $('#username').on('keyup', function() {
            if (uname.test($('#username').val())) {
                $('.uname').html('通过验证').addClass('green').removeClass('red')
            } else {
                $('.uname').html('未通过验证').addClass('red').removeClass('green')
            }
        }); 
         //验证密码
        $('#password').on('keyup', function() {
            if (upass.test($('#password').val())) {
                $('.upass').html('通过验证').addClass('green').removeClass('red')
            } else {
                $('.upass').html('未通过验证').addClass('red').removeClass('green')
            }
        });
          //验证手机号
        $('#phone').on('keyup', function() {
                if (num.test($('#phone').val())) {
                    $('.uphone').html('通过验证').addClass('green').removeClass('red')
                   
                } else {
                    $('.uphone').html('未通过验证').addClass('red').removeClass('green')
                }
            })
             //提交数据
             $('.but').on('click', function() {
             $.ajax({
                  type: "get",
                  url: "../../lib/enroll.php",
                  data:  {
                        username: $('#username').val(),
                        password: $.md5($('#password').val()),
                        phone: $('#phone').val()
                },
                  
                  success: function (res) {
                     alert(JSON.parse(res).msg);
                     
                  }
              });
                // location.reload(); //刷新页面
                
            })
       }
            
   }
    
});