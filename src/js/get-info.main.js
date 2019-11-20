require.config({
    paths:{
        jquery:'../../node_modules/jquery/dist/jquery.min',
        getr:'./get-render-info',
    },
    shim:{

    }
});
require(['jquery','getr'],function($,getr){
    getr.renderinfo();
});
