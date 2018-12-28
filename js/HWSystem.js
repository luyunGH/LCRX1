var beforecss;
$(document.body).click(function(e){
    var current = $(e.target),weaverdialog = $(".weaver_dialog");
    if(!current.hasClass("weaver_dialog") && weaverdialog.has(current).length === 0 && current.attr("id") !='onlinechatimg' && current.attr("id") !='onlinetitle' && current.attr("id") !='chatClose' && current.attr("id") !='topcontrol'){
        closeDialog();
    }
});
function openDialog(){
    var container = $("#menu_container"),weaverdialog = $(".weaver_dialog"),
            laywidth = container.width(),
            offset = container.offset();
    weaverdialog.css("width",laywidth+'px').css("left",(offset.left-10)+'px');
    $(".weaver_dialogbody").css("width",(laywidth+20)+'px');
    weaverdialog.show();
    //加载动画
    setTimeout(function(){$(".animateoverlay").css("width",(laywidth+20)+'px');},200);
}
window.onresize=function(){
//          if($(".animateoverlay").width()>0){
//              openDialog();
//          }
}
function closeDialog(){
    $(".applyfloat").hide();
    var weaverdialog = $(".weaver_dialog");
    $(".animateoverlay").css(beforecss);
    setTimeout(function(){
        weaverdialog.hide();},300);
}
$(".tilecomponent").click(function(e){
    //openDialog();
    var container = $("#menu_container"),weaverdialog = $(".weaver_dialog"),
            laywidth = 1000,
            offset = container.offset(),
            target = $(this),position = target.position(),
            moduleid = target.attr("itemid");
    weaverdialog.css("width",laywidth+'px').css("left",(offset.left-124)+'px');
    $(".weaver_dialogbody").css("width",(laywidth+20)+'px');
    weaverdialog.show();
    $(".animateoverlay").hide();
    var topnew = position.top+($("#menu_container").offset().top-$(".weaver_dialog").offset().top);
    beforecss = {left:(position.left+124)+"px",top:topnew+"px","right":(laywidth-position.left-target.width()-120)+"px","bottom":(weaverdialog.height()-target.height()-topnew)+"px"};
    $(".animateoverlay").show();
    $(".animateoverlay").css(beforecss);
    //加载动画
    setTimeout(function(){
        var after = {left:0,top:0,width:"auto","height":"auto","right":"-20px","bottom":0};
        $("span[itemid='"+moduleid+"']").trigger("click");
        $(".animateoverlay").css(after); $(".applyfloat").fadeIn();},100);
    e.stopPropagation();
});


function showMenu(){
    $(".e8_menuswrapper").css("height","auto").css("overflow","auto").css("background","#2a2e34");
    $(".e8_menus").css("color","#63aeeb");
    $(".e8_menusmore").css("background-color","#2a2e34");
}
function hideMenu(){
    $(".e8_menuswrapper").css("height","40px").css("overflow","hidden").css("background","#006ec6");
    $(".e8_menus").css("color","#A4CCEB");
    $(".e8_menusmore").css("background-color","#0783e5");
}
//   2级栏目图片
//   首页
function showhome1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/01.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//   <!--业务数据导出-->
function showywsjdc1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/02.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//  <!--权限管理-->
function showqxgl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/03_01.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
function showqxgl2(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/03_02.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
function showqxgl3(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/03_03.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}


//   <!--客户-->
    function showkh1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/04.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//   <!--客户查重（管理员）-->
    function showkhccgly1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/05.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//  <!--客户查重-->
    function showkhcc1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/06.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//   <!--联系人-->
    function showlxr1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/07.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}

//   <!--call-plan-->
    function showcp1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/08_01.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
    function showcp2(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/08_02.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
    function showcp3(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/08_03.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}function showcp4(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/08_04.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
function showcp5(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/08_05.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
function showcp6(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/08_06.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//   <!--营销活动-->
    function showyxhd1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/09.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
    
//   <!--商机线索-->
    function showsjxs1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/10.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}

// <!--我的待办-->
    function showwddb1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/11.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--对象子对象管理-->
    function showdxzdxgl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/12.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//   <!--审批流设置-->
    function showsplsz1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/13.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
    
}

//   <!--批量邮寄-->
    function showplyj1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/14.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
    
}

// <!--员工承接-->
    function showygcj1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/15.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
    
}
// <!--赠品管理-->
    function showzpgl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/16.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
    
}
// <!--系统公告-->
    function showxtgg1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/17.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--文件下载-->
    function showwjxz1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/18.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--日志管理-->
function showrzgl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/19_01.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
function showrzgl2(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/19_02.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--预约任务-->
function showyyrw1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/20.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--申请历史-->
function showsqls1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/21.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--对象共享-->
function showdxgx1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/22.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--未接来电-->
function showwjld1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/23.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--语音留言-->
function showyyly1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/24.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--客户标签-->
function showkhbq1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/25.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}

// <!--系统报表-->
function showxtbb1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/26.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--客户动态-->
function showkhdt1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/27.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--IB工单-->
function showibgd1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/28.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--码表-->
function showmb1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/29.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
function getYeallFulls(){
    initialDate = new Date();
    $(".copyright-year").text(initialDate.getFullYear());
}
$(function() {
    getYeallFulls();
    $(".e8_menusmore").click(function(){
        showMenu();
    });
    $(".e8_menuswrapper").hover(function(){},function(){
        hideMenu();
    });
    $(document.body).click(function(e){
        var current = $(e.target),e8_menuswrapper = $(".e8_menuswrapper");
        if(!current.hasClass("e8_menuswrapper") && e8_menuswrapper.has(current).length === 0){
            hideMenu();
        }
    });
    $(".e8_submenus").delegate(".e8_submenu","click",function(e){
        var current = $(this);
        var itemid = current.attr("itemid");
        $(".e8_submenu").removeClass("subactive");
        current.addClass('subactive');
        if(itemid === 'home_1'){
            showhome1();
        }else if(itemid === 'ywsjdc_1'){
            showywsjdc1();
        }else if(itemid === 'qxgl_1'){
            showqxgl1();
        }else if(itemid === 'qxgl_2'){
            showqxgl2();
        }else if(itemid === 'qxgl_3'){
            showqxgl3();
        }else if(itemid === 'kh_1'){
            showkh1();
        }else if(itemid === 'khccgly_1'){
            showkhccgly1();
        }else if(itemid === 'khcc_1'){
            showkhcc1();
        }else if(itemid === 'lxr_1'){
            showlxr1();
        }else if(itemid === 'cp_1'){
            showcp1();
        }else if(itemid === 'cp_2'){
            showcp2();
        }else if(itemid === 'cp_3'){
            showcp3();
        }else if(itemid === 'cp_4'){
            showcp4();
        }else if(itemid === 'cp_5'){
            showcp5();
        }else if(itemid === 'cp_6'){
            showcp6();
        }else if(itemid === 'yxhd_1'){
            showyxhd1();
        }else if(itemid === 'sjxs_1'){
            showsjxs1();
        }else if(itemid === 'wddb_1'){
            showwddb1();
        }else if(itemid === 'dxzdxgl_1'){
            showdxzdxgl1();
        }else if(itemid === 'splsz_1'){
            showsplsz1();
        }else if(itemid === 'plyj_1'){
            showplyj1();
        }else if(itemid === 'ygcj_1'){
            showygcj1();
        }else if(itemid === 'zpgl_1'){
            showzpgl1();
        }else if(itemid === 'xtgg_1'){
            showxtgg1();
        }else if(itemid === 'wjxz_1'){
            showwjxz1();
        }else if(itemid === 'rzgl_1'){
            showrzgl1();
        }else if(itemid === 'rzgl_2'){
            showrzgl2();
        }else if(itemid === 'yyrw_1'){
            showyyrw1();
        }else if(itemid === 'sqls_1'){
            showsqls1();
        }else if(itemid === 'dxgx_1'){
            showdxgx1();
        }else if(itemid === 'wjld_1'){
            showwjld1();
        }else if(itemid === 'yyly_1'){
            showyyly1();
        }else if(itemid === 'khbq_1'){
            showkhbq1();
        }else if(itemid === 'xtbb_1'){
            showxtbb1();
        }else if(itemid === 'khdt_1'){
            showkhdt1();
        }else if(itemid === 'ibgd_1'){
            showibgd1();
        }else if(itemid === 'mb_1'){
            showmb1();
        }   
        e.stopPropagation();
    });
    $(".e8_close").click(function(){
        closeDialog();
    });
    $(".e8_menu").click(function(){
        var current = $(this);
        var itemid = current.attr("itemid"),submenus= [],submenu;
        if(itemid === 'sy'){
            submenu= "<div class='e8_submenu' itemid='home_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>首页</span> "+
            "</div>";
            submenus.push(submenu);
           
            $(".e8_modulename").html("首页模块");
        }
        else if(itemid === 'ywsjdc'){
            submenu= "<div class='e8_submenu' itemid='ywsjdc_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>业务数据导出</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("业务数据导出模块");	  
            
        } else if(itemid === 'qxgl'){
            submenu= "<div class='e8_submenu' itemid='qxgl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>组织架构</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='qxgl_2'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>角色管理</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='qxgl_3'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>系统菜单调整</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("权限管理模块");	  
        }else if(itemid === 'kh'){
            submenu= "<div class='e8_submenu' itemid='kh_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>客户</span> "+
            "</div>";
            submenus.push(submenu);
           
            $(".e8_modulename").html("客户模块");	  
        }else if(itemid === 'khccgly'){
            submenu= "<div class='e8_submenu' itemid='khccgly_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>客户查重(管理员)</span> "+
            "</div>";
            submenus.push(submenu);

            $(".e8_modulename").html("客户查重(管理员)模块");	  
        }else if(itemid === 'khcc'){

            submenu= "<div class='e8_submenu' itemid='khcc_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>客户查重</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("客户查重模块");

        }else if(itemid === 'lxr'){
            submenu= "<div class='e8_submenu' itemid='lxr_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>联系人</span> "+
            "</div>";
            submenus.push(submenu);

            
            $(".e8_modulename").html("联系人模块");	  
        }else if(itemid === 'cp'){
            submenu= "<div class='e8_submenu' itemid='cp_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>call-plan</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='cp_2'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>call-plan设置</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='cp_3'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>call-plan明细</span> "+
            "</div>";
            submenus.push(submenu);
            submenu= "<div class='e8_submenu' itemid='cp_4'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>call-list</span> "+
            "</div>";
            submenus.push(submenu);
            submenu= "<div class='e8_submenu' itemid='cp_5'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>call-log</span> "+
            "</div>";
            submenus.push(submenu);
            submenu= "<div class='e8_submenu' itemid='cp_6'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>call-log-NRT</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("call-plan模块");	  
        }else if(itemid === 'yxhd'){
            submenu= "<div class='e8_submenu' itemid='yxhd_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>营销活动</span> "+
            "</div>";
            submenus.push(submenu);
            
            $(".e8_modulename").html("营销活动模块");	  
        }  else if(itemid === 'sjxs'){
            submenu= "<div class='e8_submenu' itemid='sjxs_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>商机线索</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("商机线索模块");	  
        }  else if(itemid === 'wddb'){
            submenu= "<div class='e8_submenu' itemid='wddb_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>我的待办</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("我的待办模块");	  
        }  else if(itemid === 'hygl'){
            submenu= "<div class='e8_submenu' itemid='hygl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>管理员设置</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("管理员设置模块");	  
        }  else if(itemid === 'dxzdxgl'){
            submenu= "<div class='e8_submenu' itemid='dxzdxgl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>对象子对象管理</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("对象子对象管理模块");	  
        }else if(itemid === 'splsz'){
            submenu= "<div class='e8_submenu' itemid='splsz_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>审批流设置</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("审批流设置模块");	  
        }else if(itemid === 'plyj'){
            submenu= "<div class='e8_submenu' itemid='plyj_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>批量邮寄</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("批量邮寄模块");	  
        }else if(itemid === 'ygcj'){
            submenu= "<div class='e8_submenu' itemid='ygcj_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>员工承接</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("员工承接模块");	  
        }else if(itemid === 'zpgl'){
            submenu= "<div class='e8_submenu' itemid='zpgl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>赠品管理</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("赠品管理模块");	  
        }else if(itemid === 'xtgg'){
            submenu= "<div class='e8_submenu' itemid='xtgg_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>系统公告</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("系统公告模块");	  
        }else if(itemid === 'wjxz'){
            submenu= "<div class='e8_submenu' itemid='wjxz_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>文件下载</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("文件下载模块");	  
        }else if(itemid === 'rzgl'){
            submenu= "<div class='e8_submenu' itemid='rzgl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>登录日志</span> "+
            "</div>";
            submenus.push(submenu);
            submenu= "<div class='e8_submenu' itemid='rzgl_2'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>操作日志</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("日志管理模块");	  
        }else if(itemid === 'yyrw'){
            submenu= "<div class='e8_submenu' itemid='yyrw_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>预约任务</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("预约任务模块");	  
        }else if(itemid === 'sqls'){
            submenu= "<div class='e8_submenu' itemid='sqls_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>申请历史</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("申请历史模块");	  
        }else if(itemid === 'dxgx'){
            submenu= "<div class='e8_submenu' itemid='dxgx_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>对象共享</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("对象共享模块");	  
        }else if(itemid === 'wjld'){
            submenu= "<div class='e8_submenu' itemid='wjld_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>未接来电</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("未接来电模块");	  
        }else if(itemid === 'yyly'){
            submenu= "<div class='e8_submenu' itemid='yyly_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>语音留言</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("语音留言模块");	  
        }else if(itemid === 'khbq'){
            submenu= "<div class='e8_submenu' itemid='khbq_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>客户标签</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("客户标签模块");	  
        }else if(itemid === 'xtbb'){
            submenu= "<div class='e8_submenu' itemid='xtbb_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>系统报表</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("系统报表模块");	  
        }else if(itemid === 'khdt'){
            submenu= "<div class='e8_submenu' itemid='khdt_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>客户动态</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("客户动态模块");	  
        }else if(itemid === 'ibgd'){
            submenu= "<div class='e8_submenu' itemid='ibgd_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>IB工单</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("IB工单模块");	  
        }else if(itemid === 'mb'){
            submenu= "<div class='e8_submenu' itemid='mb_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>码表</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("码表模块");	  
        }
        $(".e8_menu").removeClass("e8_menulight");
        current.addClass("e8_menulight");
        $(".e8_submenus").html(submenus.join(""));
        $(".e8_submenu").eq(0).trigger("click");
    });
    $(".e8_menu").eq(0).trigger("click");
});