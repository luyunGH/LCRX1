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
    //  openDialog();
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
function showwf1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/BY/01.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// function showwf2(){
//     var html = "<div class='weaver_img' >"+
//             "<img src='./images/KH/01_02.png'/>" +
//             "</div>" +
//             "<div class='weaver_title' >"+
//             "说明：点击【执行】的【任务】对任务收集，进行有效的安排、分解、执行反馈、任务督导"+
//             "</div>" ;
//     $(".e8_silideritem").html(html);
// }
// function showwf3(){
//     var html = "<div class='weaver_img' >"+
//             "<img src='./images/KH/01_03.png'/>" +
//             "</div>" +
//             "<div class='weaver_title' >"+
//             "说明：点击【任务】的【下属】，上级可以了解到每个下属的任务安排情况，并且对下属的任务执行进行回复评价指导"+
//             "</div>" ;
//     $(".e8_silideritem").html(html);
// }
//   <!--出库领用-->
    function showmhgl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/BY/03.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//     function showmhgl2(){
//     var html = "<div class='weaver_img' >"+
//             "<img src='./images/KH/04_02.png'/>" +
//             "</div>" +
//             "<div class='weaver_title' >"+
//             "说明：企业战略思想统一、文化宣传、信息发布的重要渠道，集团（公司）统一的信息发布平台、各项重大规章制度以及企业动态的推送"+
//             "</div>" ;
//     $(".e8_silideritem").html(html);
// }
//     function showmhgl3(){
//     var html = "<div class='weaver_img' >"+
//             "<img src='./images/KH/04_03.png'/>" +
//             "</div>" +
//             "<div class='weaver_title' >"+
//             "说明：在营销门户中会每天自动推送签约新闻、每月的销售之星、销售相关的培训知识、销售过程中常会用到的模板或参考学习文件、销售部的一些制度和流程、我们常见的一些解决方案、投标中可能会涉及用到的资质文件等"+
//             "</div>" ;
//     $(".e8_silideritem").html(html);
// }
//     function showmhgl4(){
//     var html = "<div class='weaver_img' >"+
//             "<img src='./images/KH/04_04.png'/>" +
//             "</div>" +
//             "<div class='weaver_title' >"+
//             "说明：通过产品门户可以方便获取产品功能介绍、产品宣传资料及培训课件等。作为新员工可以根据产品自学引导快速掌握产品知识"+
//             "</div>" ;
//     $(".e8_silideritem").html(html);
// }
//  <!--资产入库-->
    function showlcgl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/BY/02.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//     function showlcgl2(){
//     var html = "<div class='weaver_img' >"+
//             "<img src='./images/KH/03_02.png'/>" +
//             "</div>" +
//             "<div class='weaver_title' >"+
//             "说明：我今天我要外出到客户现场做方案讲解，我就在来之前，我首先要填一个【外出申请流程】，找到打开后，系统直接展现给外出申请表单，通过这个表单可以看出要填哪些信息，哪些信息必须要填的，填好了之后要通过流程图你就可以知道要怎么办的。"+
//             "</div>" ;
//     $(".e8_silideritem").html(html);
// }
//   <!--设置-->
    function showzsgl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/BY/11_01.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
    function showzsgl2(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/BY/11_02.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
    function showzsgl3(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/BY/11_03.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//     function showzsgl4(){
//     var html = "<div class='weaver_img' >"+
//             "<img src='./images/KH/02_04.png'/>" +
//             "</div>" +
//             "<div class='weaver_title' >"+
//             "说明：根据文档所在的不同目录会推送到相应的门户文档元素中；也会推送到【最新文档】中"+
//             "</div>" ;
//     $(".e8_silideritem").html(html);
// }
//   <!--资产转移-->
    function showrlzy1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/BY/04.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//     function showrlzy2(){
//     var html = "<div class='weaver_img' >"+
//             "<img src='./images/KH/05_02.png'/>" +
//             "</div>" +
//             "<div class='weaver_title' >"+
//             "说明：【我的下属】中列出的是当前操作者的直接下级，也就是他们人事卡片中的【上级】字段中的上级是当前操作者，下级的下级是不会在这里直接列出的，这样单独列出的目的是为了方便领导更好的查找自己的下级，并通过菜单了解下级的工作日程、待办流程等信息"+
//             "</div>" ;
//     $(".e8_silideritem").html(html);
// }
//   <!--资产退库-->
    function showzcgl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/BY/05.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//     function showzcgl2(){
//     var html = "<div class='weaver_img' >"+
//             "<img src='./images/KH/06_02.png'/>" +
//             "</div>" +
//             "<div class='weaver_title' >"+
//             "说明：资产管理员收到我的申请流程后，审批通过"+
//             "</div>" ;
//     $(".e8_silideritem").html(html);
// }
//   <!--资产维修-->
    function showkhgl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/BY/06.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//     function showkhgl2(){
//     var html = "<div class='weaver_img' >"+
//             "<img src='./images/KH/07_02.png'/>" +
//             "</div>" +
//             "<div class='weaver_title' >"+
//             "说明：建立一个客户卡片信息，让客户经理具体维护客户信息、联系人信息、联系记录、合同、销售机会等内容"+
//             "</div>" ;
//     $(".e8_silideritem").html(html);
// }
//     function showkhgl3(){
//     var html = "<div class='weaver_img' >"+
//             "<img src='./images/KH/07_03.png'/>" +
//             "</div>" +
//             "<div class='weaver_title' >"+
//             "说明：点击【客户联系】，新建客户联系信息，记录联系内容等，还可以设置周期，对客户经理进行提醒，说明需要和客户进行联系了"+
//             "</div>" ;
//     $(".e8_silideritem").html(html);
// }
//   <!--清理报废-->
    function showxmgl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/BY/07.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//     function showxmgl2(){
//     var html = "<div class='weaver_img' >"+
//             "<img src='./images/KH/08_02.png'/>" +
//             "</div>" +
//             "<div class='weaver_title' >"+
//             "说明：点击【项目】的【我的项目】，点项目名称，打开一个项目，查看项目的卡片基本信息、参与人员、项目背景、任务列表等信息"+
//             "</div>" ;
//     $(".e8_silideritem").html(html);
// }
//     function showxmgl3(){
//     var html = "<div class='weaver_img' >"+
//             "<img src='./images/KH/08_03.png'/>" +
//             "</div>" +
//             "<div class='weaver_title' >"+
//             "说明：可以对当前项目的计划结束日期、相关进度安排进行设置，支持添加子项目"+
//             "</div>" ;
//     $(".e8_silideritem").html(html);
// }
//   <!--分析报表-->
    function showsxxz1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/BY/09.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//     function showsxxz2(){
//     var html = "<div class='weaver_img' >"+
//             "<img src='./images/KH/09_02.png'/>" +
//             "</div>" +
//             "<div class='weaver_title' >"+
//             "说明：点击【协作】的【协作交流】可以有权限查阅所有协作，我们可以从相关交流，与我相关，参与情况，相关资源四个维度进行查看协作区相关内容，我们也可以通过搜索获取协作区相关的交流"+
//             "</div>" ;
//     $(".e8_silideritem").html(html);
// }
//     function showsxxz3(){
//     var html = "<div class='weaver_img' >"+
//             "<img src='./images/KH/09_03.png'/>" +
//             "</div>" +
//             "<div class='weaver_title' >"+
//             "说明：进入任意一个协作区，进行回复，我们可以【与我相关】直接回复"+
//             "</div>" ;
//     $(".e8_silideritem").html(html);
// }
//     function showsxxz4(){
//     var html = "<div class='weaver_img' >"+
//             "<img src='./images/KH/09_04.png'/>" +
//             "</div>" +
//             "<div class='weaver_title' >"+
//             "说明：右击鼠标【编辑】协作。可以增加参与者，这样新增的人员就有权限查看该协作区了"+
//             "</div>" ;
//     $(".e8_silideritem").html(html);
// }
// <!--资产盘点-->
    function showgzwb1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/BY/08.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--角色管理-->
    function showrcgl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/BY/12.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//   <!--操作记录-->
    function showhygl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/BY/10.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
    
}

//   <!--管理员设置-->
    function showtxgl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/BY/13.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
    
}

// <!--企业认证设置-->
    function showwysd1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/BY/15.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
    
}
// <!--组织架构设置-->
    function showxtzss1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/BY/14.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
    
}

    function showxtzss2(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/15_02.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明："+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
    function showxtzss3(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/15_03.png'/>" +
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
        if(itemid === 'wf_1'){
            showwf1();
        }else if(itemid === 'wf_2'){
            showwf2();
        }else if(itemid === 'wf_3'){
            showwf3();
        }else if(itemid === 'mhgl_1'){
            showmhgl1();
        }else if(itemid === 'mhgl_2'){
            showmhgl2();
        }else if(itemid === 'mhgl_3'){
            showmhgl3();
        }else if(itemid === 'mhgl_4'){
            showmhgl4();
        }else if(itemid === 'lcgl_1'){
            showlcgl1();
        }else if(itemid === 'lcgl_2'){
            showlcgl2();
        }else if(itemid === 'zsgl_1'){
            showzsgl1();
        }else if(itemid === 'zsgl_2'){
            showzsgl2();
        }else if(itemid === 'zsgl_3'){
            showzsgl3();
        }else if(itemid === 'zsgl_4'){
            showzsgl4();
        }else if(itemid === 'rlzy_1'){
            showrlzy1();
        }else if(itemid === 'rlzy_2'){
            showrlzy2();
        }else if(itemid === 'zcgl_1'){
            showzcgl1();
        }else if(itemid === 'zcgl_2'){
            showzcgl2();
        }else if(itemid === 'khgl_1'){
            showkhgl1();
        }else if(itemid === 'khgl_2'){
            showkhgl2();
        }else if(itemid === 'khgl_3'){
            showkhgl3();
        }else if(itemid === 'xmgl_1'){
            showxmgl1();
        }else if(itemid === 'xmgl_2'){
            showxmgl2();
        }else if(itemid === 'xmgl_3'){
            showxmgl3();
        }else if(itemid === 'sxxz_1'){
            showsxxz1();
        }else if(itemid === 'sxxz_2'){
            showsxxz2();
        }else if(itemid === 'sxxz_3'){
            showsxxz3();
        }else if(itemid === 'sxxz_4'){
            showsxxz4();
        }else if(itemid === 'gzwb_1'){
            showgzwb1();
        }else if(itemid === 'rcgl_1'){
            showrcgl1();
        }else if(itemid === 'hygl_1'){
            showhygl1();
        }else if(itemid === 'txgl_1'){
            showtxgl1();
        }else if(itemid === 'wysd_1'){
            showwysd1();
        }else if(itemid === 'xtzss_1'){
            showxtzss1();
        }else if(itemid === 'xtzss_2'){
            showxtzss2();
        }else if(itemid === 'xtzss_3'){
            showxtzss3();
        }
        e.stopPropagation();
    });
    $(".e8_close").click(function(){
        closeDialog();
    });
    $(".e8_menu").click(function(){
        var current = $(this);
        var itemid = current.attr("itemid"),submenus= [],submenu;
        if(itemid === 'wf'){
            submenu= "<div class='e8_submenu' itemid='wf_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>首页</span> "+
            "</div>";
            submenus.push(submenu);
            // submenu= "<div class='e8_submenu' itemid='wf_2'> "+
            // " <span class='middlehelper'></span> "+
            // " <img src='../images/nav.png'> "+
            // " <span>角色管理</span> "+
            // "</div>";
            // submenus.push(submenu);
            // submenu= "<div class='e8_submenu' itemid='wf_3'> "+
            // " <span class='middlehelper'></span> "+
            // " <img src='../images/nav.png'> "+
            // " <span>系统菜单</span> "+
            // "</div>";
            // submenus.push(submenu);

            $(".e8_modulename").html("首页模块");
        }else if(itemid === 'zsgl'){
            submenu= "<div class='e8_submenu' itemid='mhgl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>岗位类型设置</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='mhgl_2'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>岗位设置</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='mhgl_3'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>兼岗设置</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='mhgl_4'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>订单二次过滤</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("资产管理-出库领用模块");	  
            
        } else if(itemid === 'lcgl'){
            submenu= "<div class='e8_submenu' itemid='lcgl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>资产入库</span> "+
            "</div>";
            submenus.push(submenu);

            // submenu= "<div class='e8_submenu' itemid='lcgl_2'> "+
            // " <span class='middlehelper'></span> "+
            // " <img src='../images/nav.png'> "+
            // " <span>复合指标</span> "+
            // "</div>";
            // submenus.push(submenu);
            $(".e8_modulename").html("资产管理-资产入库模块");	  
        }else if(itemid === 'mhgl'){
            submenu= "<div class='e8_submenu' itemid='zsgl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>资产类别设置</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='zsgl_2'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>位置设置</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='zsgl_3'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>资产编码规则设置</span> "+
            "</div>";
            submenus.push(submenu);

            // submenu= "<div class='e8_submenu' itemid='zsgl_4'> "+
            // " <span class='middlehelper'></span> "+
            // " <img src='../images/nav.png'> "+
            // " <span>审批流配置</span> "+
            // "</div>";
            // submenus.push(submenu);
            $(".e8_modulename").html("设置模块");	  
        }else if(itemid === 'rlzy'){
            submenu= "<div class='e8_submenu' itemid='rlzy_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>资产转移</span> "+
            "</div>";
            submenus.push(submenu);

            // submenu= "<div class='e8_submenu' itemid='rlzy_2'> "+
            // " <span class='middlehelper'></span> "+
            // " <img src='../images/nav.png'> "+
            // " <span>考核树浏览</span> "+
            // "</div>";
            // submenus.push(submenu);
            $(".e8_modulename").html("资产管理-资产转移模块");	  
        }else if(itemid === 'zcgl'){
            submenu= "<div class='e8_submenu' itemid='zcgl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>资产退库</span> "+
            "</div>";
            submenus.push(submenu);

            // submenu= "<div class='e8_submenu' itemid='zcgl_2'> "+
            // " <span class='middlehelper'></span> "+
            // " <img src='../images/nav.png'> "+
            // " <span>销售人员确认维护</span> "+
            // "</div>";
            // submenus.push(submenu);
            $(".e8_modulename").html("资产管理-资产退库模块");	  
        }else if(itemid === 'khgl'){
            submenu= "<div class='e8_submenu' itemid='khgl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>资产维修</span> "+
            "</div>";
            submenus.push(submenu);

            // submenu= "<div class='e8_submenu' itemid='khgl_2'> "+
            // " <span class='middlehelper'></span> "+
            // " <img src='../images/nav.png'> "+
            // " <span>虚拟订单调整</span> "+
            // "</div>";
            // submenus.push(submenu);

            // submenu= "<div class='e8_submenu' itemid='khgl_3'> "+
            // " <span class='middlehelper'></span> "+
            // " <img src='../images/nav.png'> "+
            // " <span>数据源查看/导出</span> "+
            // "</div>";
            // submenus.push(submenu);
            $(".e8_modulename").html("资产管理-资产维修模块");	  
        }else if(itemid === 'xmgl'){
            submenu= "<div class='e8_submenu' itemid='xmgl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>清理报废</span> "+
            "</div>";
            submenus.push(submenu);

            // submenu= "<div class='e8_submenu' itemid='xmgl_2'> "+
            // " <span class='middlehelper'></span> "+
            // " <img src='../images/nav.png'> "+
            // " <span>综合完成率调整</span> "+
            // "</div>";
            // submenus.push(submenu);

            // submenu= "<div class='e8_submenu' itemid='xmgl_3'> "+
            // " <span class='middlehelper'></span> "+
            // " <img src='../images/nav.png'> "+
            // " <span>非计算指标上传/调整</span> "+
            // "</div>";
            // submenus.push(submenu);
            $(".e8_modulename").html("资产管理-清理报废模块");	  
        }else if(itemid === 'sxxz'){
            submenu= "<div class='e8_submenu' itemid='sxxz_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>分析报表</span> "+
            "</div>";
            submenus.push(submenu);

            // submenu= "<div class='e8_submenu' itemid='sxxz_2'> "+
            // " <span class='middlehelper'></span> "+
            // " <img src='../images/nav.png'> "+
            // " <span>综合查询</span> "+
            // "</div>";
            // submenus.push(submenu);

            // submenu= "<div class='e8_submenu' itemid='sxxz_3'> "+
            // " <span class='middlehelper'></span> "+
            // " <img src='../images/nav.png'> "+
            // " <span>日计算个岗查询</span> "+
            // "</div>";
            // submenus.push(submenu);

            // submenu= "<div class='e8_submenu' itemid='sxxz_4'> "+
            // " <span class='middlehelper'></span> "+
            // " <img src='../images/nav.png'> "+
            // " <span>日计算综合查询</span> "+
            // "</div>";
            // submenus.push(submenu);
            $(".e8_modulename").html("资产管理-分析报表");	  
        }  else if(itemid === 'gzwb'){
            submenu= "<div class='e8_submenu' itemid='gzwb_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>资产盘点</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("资产管理-资产盘点模块");	  
        }  else if(itemid === 'rcgl'){
            submenu= "<div class='e8_submenu' itemid='rcgl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>角色管理</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("系统管理-角色管理模块");	  
        }  else if(itemid === 'hygl'){
            submenu= "<div class='e8_submenu' itemid='hygl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>操作记录</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("资产管理-操作记录模块");	  
        }  else if(itemid === 'txgl'){
            submenu= "<div class='e8_submenu' itemid='txgl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>管理员设置</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("系统管理-管理员设置模块");	  
        }else if(itemid === 'wysd'){
            submenu= "<div class='e8_submenu' itemid='wysd_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>企业认证设置</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("系统管理-企业认证设置模块");	  
        }else if(itemid === 'xtzss'){
            submenu= "<div class='e8_submenu' itemid='xtzss_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>组织架构设置</span> "+
            "</div>";
            submenus.push(submenu);

            // submenu= "<div class='e8_submenu' itemid='xtzss_2'> "+
            // " <span class='middlehelper'></span> "+
            // " <img src='../images/nav.png'> "+
            // " <span>登录日志</span> "+
            // "</div>";
            // submenus.push(submenu);

            // submenu= "<div class='e8_submenu' itemid='xtzss_3'> "+
            // " <span class='middlehelper'></span> "+
            // " <img src='../images/nav.png'> "+
            // " <span>审批日志</span> "+
            // "</div>";
            // submenus.push(submenu);
            $(".e8_modulename").html("系统管理-组织架构设置模块");	  
        }
        $(".e8_menu").removeClass("e8_menulight");
        current.addClass("e8_menulight");
        $(".e8_submenus").html(submenus.join(""));
        $(".e8_submenu").eq(0).trigger("click");
    });
    $(".e8_menu").eq(0).trigger("click");
});