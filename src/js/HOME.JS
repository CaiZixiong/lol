define(['jquery','dr'],function($){
    
        return {
            banner: function() {
               
                var index = 0, //初始化
                    left = 0,
                    timer = null; //定义时间函数
                var btn = $('.btn>li'); //轮播图小点
                var t = function() {
                    return (timer = setInterval(() => {
                      
                        if (index < 3) {
                            left -= 775; //每次移动距离
                            $('.mover').animate({ left: left });
                            btn.eq(index + 1).addClass('hover').siblings().removeClass('hover'); //给小点添加样式
                            index++; //移动步数+1
                            if (index >= 3) { //最后一张图初始化点的位置
                                btn.eq(0).addClass('hover').siblings().removeClass('hover');
                            }
                        
                        } else { //最后一张图初始化图的位置
                            btn.eq(0).addClass('hover').siblings().removeClass('hover');
                            index = 0;
                            left = 0;
                            $('.mover').stop(true, true).css('left', left);
                        
                        }
                    }, 2000));
                };
                t();
                btn.mouseover(function() { //小点点击事件
                    clearInterval(timer); //移除时间函数，防止index+1
                    index = $(this).index(); //初始化index为小点的index
                    left = -(index) * 770;
                    $('.mover').animate({ left: left }); //跳转到对应图片
                    btn.eq(index).addClass('hover').siblings().removeClass('hover');
                    t(); //图片和小点跳转后，重启时间函数
                })
                $('.mover').on('mouseover', () => {
                    clearInterval(timer); //鼠标悬停图片静止，移除时间函数
                });
                $('.mover').on('mouseout', () => {
                    t(); //鼠标离开后重启时间函数，图片移动
                });
                $.login('#loginStart');
            }
        }
     });
   
