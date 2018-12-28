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
//   权限管理
function showwf1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/01_01.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：负责搭建组织架构模块，将人员按照对应的岗位进行关联，通过给岗位定权限来控制人员操作范围，同时人员也可以进行个人权限设置。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
function showwf2(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/01_02.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：角色管理主要负责管理各个岗位或员工所需要的系统操作权限。可以根据岗位性质创建该岗位的操作权限，也可以根据个人（这个人可能在各部门都有一定的操作权限）来进行设置。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
function showwf3(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/01_03.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：系统菜单：管理员操作模块。主要用来建立系统的层级关系，主要给系统各模块赋予权限。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//   <!--岗位管理-->
    function showmhgl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/04_01.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：通过指标的权重配置，来设置此岗位类型的综合完成率；奖金系数：当某个指标的完成率达到某个标准后，其奖金计算应该用的系数。同时可进行模拟试算的操作，可以模拟出不同条件的指标结果。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
    function showmhgl2(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/04_02.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：岗位设置关联岗位类型，将人员和岗位关联，同时设置是否使用订单二次过滤；通过设置岗位观察者，来更加方便的管理此岗位，拥有此权限的人(调整时间需要在设置的允许范围内)，可以维护此岗位信息。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
    function showmhgl3(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/04_03.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：通过对系统的批次、考核树及人员ITCode的筛选，通过‘权重设置’操作，来设置各岗的综合完成率权重。页面会显示此人兼岗的数量，以及各岗的信息。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
    function showmhgl4(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/04_04.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：此处维护的属性信息，会在岗位设置功能中的‘订单二次过滤’模块显示。可对某个列中的属性进行增删改操作。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//  <!--指标管理-->
    function showlcgl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/03_01.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：现实业务中，需要对一些对象进行清零或加速，例如产品组等于21的订单，口径(毛利)清零，就需要在此设置条件。指标类型分为计算和非计算指标两种，针对不同类型，有不同的显示和操作。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
    function showlcgl2(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/03_02.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：复合指标是将系统中存在的指标，按照算数或者加权的方式，复合起来。复合过的指标还可以再次参与复合。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//   <!--基础配置-->
    function showzsgl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/02_01.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：对于考核计算所需要的订单源，可能会发生变化。该页面的功能主要是配置考核计算用的数据来源。订单来源在引用时只能选择一个。在该页面配置的时候，可以指定是某个系统/某个数据库，并且自定义抽取考核计算用的SQL，并且设置SQL中字段别名。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
    function showzsgl2(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/02_02.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：考核批次指的是在特定的场景下对订单数据做的订单划分，维护考核批次主要功能：维护考核计算用的订单来源及范围、基础数据的来源、基础数据调整动作的时间限制等；执行考核计算动作；发布考核结果等。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
    function showzsgl3(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/02_03.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：常量维护指将有规律的产品定义为一个常量，我们在此不仅可以创建常量还可以根据需求修改常量，方便日后使用。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
    function showzsgl4(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/02_04.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：在考核操作中，有很多操作管理员需要其他非管理协助维护考核用的信息，因为有时候需要确认这些信息的准确性，这时候可以引入“审批流”。即：按照某种流程，经过一系列的审批后，数据才可以生效。本系统中预设有六种审批流，如：岗位审批、考核树审批、任务审批、订单调整审批、非计算指标审批、虚拟订单调整审批。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//   <!--考核树管理-->
    function showrlzy1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/05_01.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：考核树是将岗位类型和人员关联起来的树形结构，通过考核树会比较容易的将组织结构展现出来。新建树，节点观察者加载范围：所有人员ITCode。 可以创建多个节点观察者，用于完善子节点内容。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
    function showrlzy2(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/05_02.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：考核树浏览’主要提供考核树查看的功能。方便一些人员可以随时查看考核树的整体状况。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//   <!--任务管理-->
    function showzcgl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/06_01.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：上传任务时间，如果在批次设置中允许任务调整范围内，可进行任务上传，否则，系统不允许上传任务。如果在审批流中开启任务维护审批，数据会根据审批流程走。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
    function showzcgl2(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/06_02.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：对于需要任务确认的人员，系统会根据岗位生成报表，考核管理人员通过下载并维护报表，然后上传系统。系统会给这些人员发送消息通知，需要去任务确认，同时在我的待办生成数据。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//   <!--数据源调整-->
    function showkhgl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/07_01.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：订单调整主要解决由于人员转岗或者离职，需要将订单在人员之间进行转移的情景。即：更改订单的归属人。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
    function showkhgl2(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/07_02.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：在实际业务中，存在某些订单没有进系统，或者需要模拟订单的情况，通过上传虚拟订单信息，可实现业务中的需求。订单调整时间，需要在批次设置的允许‘虚拟订单调整时间’范围内。如开启了审批流程，系统会根据设置的审批流程走。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
    function showkhgl3(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/07_03.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：此功能是将调整后的订单数据和虚拟订单，通过条件筛选，以UI的形式查看。同时可导出数据源。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//   <!--考核结果管理-->
    function showxmgl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/08_01.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：对结果调整的内容为岗位综合完成率和基础指标完成量的调整，通过下载对应模板，将调整完的数据上传至系统。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
function showxmgl2(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/08_02.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：根据人员信息，加载整合完成率明细，此处调整的综合完成率，统一称为奖金发放完成率。注：在‘考核结果调整’功能中，是对完成量的调整。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
function showxmgl3(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/08_03.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：基础指标类型分为计算指标和非计算指标，在非计算指标上传时，需要根据批次、考核树和指标名称来定位。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//   <!--考核结果查询分析-->
function showsxxz1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/09_01.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：系统根据权限和查询条件，显示岗位的报表信息。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
function showsxxz2(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/09_02.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：根据查询条件来筛选综合完成率、指标完成率及订单明细。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
function showsxxz3(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/09_03.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：每个岗位每日的岗位考核结果查询。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
    function showsxxz4(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/09_04.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：以“人”为维度进行的以“日“为计算单位的岗位考核结果。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--提交记录-->
    function showgzwb1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/11.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：申请人申请审批界面，只有申请人和选择的审批人可见。申请人可以在该页面查询自己所有审批的流程进度。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--我的待办-->
    function showrcgl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/10.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：用于查找在系统中所有审批的数据（只限于审批人使用且只限于【审批人】为自己的数据）。根据不同的批次，待办类型，是否审批来查询所需要的数据，数据在展示区显示。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//   <!--管理员设置-->
    function showhygl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/12.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：添加管理人页面，只有管理人可操作。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
    
}

//   <!--文件下载-->
    function showtxgl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/13.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：所有异步下载的文件都可以从此处找到下载文件。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
    
}

// <!--字段配置-->
    function showwysd1(){
    var html = "<div class='weaver_img'>"+
            "<img src='./images/KH/14.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：对不同的批次进行字段的统一管理。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
    
}
// <!--日志查询-->
    function showxtzss1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/15_01.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：人员在系统中的所有操作会被系统自动记录下来，而我们可以在日志查询中查看到所有的操作轨迹，操作行为包括登陆记录，操作记录及审批记录。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
    
}

    function showxtzss2(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/15_02.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：人员在系统中的所有操作会被系统自动记录下来，而我们可以在日志查询中查看到所有的操作轨迹，操作行为包括登陆记录，操作记录及审批记录。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
    function showxtzss3(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/KH/15_03.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：人员在系统中的所有操作会被系统自动记录下来，而我们可以在日志查询中查看到所有的操作轨迹，操作行为包括登陆记录，操作记录及审批记录。"+
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
            " <span>组织结构</span> "+
            "</div>";
            submenus.push(submenu);
            submenu= "<div class='e8_submenu' itemid='wf_2'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>角色管理</span> "+
            "</div>";
            submenus.push(submenu);
            submenu= "<div class='e8_submenu' itemid='wf_3'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>系统菜单</span> "+
            "</div>";
            submenus.push(submenu);

            $(".e8_modulename").html("权限管理");
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
            $(".e8_modulename").html("岗位管理模块");	  
            
        } else if(itemid === 'lcgl'){
            submenu= "<div class='e8_submenu' itemid='lcgl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>基础指标</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='lcgl_2'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>复合指标</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("指标管理模块");	  
        }else if(itemid === 'mhgl'){
            submenu= "<div class='e8_submenu' itemid='zsgl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>数据源设置</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='zsgl_2'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>考核批次管理</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='zsgl_3'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>常量维护</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='zsgl_4'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>审批流配置</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("基础配置模块");	  
        }else if(itemid === 'rlzy'){
            submenu= "<div class='e8_submenu' itemid='rlzy_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>考核树设置</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='rlzy_2'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>考核树浏览</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("考核树管理模块");	  
        }else if(itemid === 'zcgl'){
            submenu= "<div class='e8_submenu' itemid='zcgl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>任务导入/导出</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='zcgl_2'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>销售人员确认维护</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("任务管理模块");	  
        }else if(itemid === 'khgl'){
            submenu= "<div class='e8_submenu' itemid='khgl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>订单划拨调整</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='khgl_2'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>虚拟订单调整</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='khgl_3'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>数据源查看/导出</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("数据源调整模块");	  
        }else if(itemid === 'xmgl'){
            submenu= "<div class='e8_submenu' itemid='xmgl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>完成量调整</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='xmgl_2'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>综合完成率调整</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='xmgl_3'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>非计算指标上传/调整</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("考核结果管理模块");	  
        }else if(itemid === 'sxxz'){
            submenu= "<div class='e8_submenu' itemid='sxxz_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>个岗查询</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='sxxz_2'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>综合查询</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='sxxz_3'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>日计算个岗查询</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='sxxz_4'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>日计算综合查询</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("考核结果查询分析");	  
        }  else if(itemid === 'gzwb'){
            submenu= "<div class='e8_submenu' itemid='gzwb_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>提交记录</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("提交记录模块");	  
        }  else if(itemid === 'rcgl'){
            submenu= "<div class='e8_submenu' itemid='rcgl_1'> "+
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
        }  else if(itemid === 'txgl'){
            submenu= "<div class='e8_submenu' itemid='txgl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>文件下载</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("文件下载模块");	  
        }else if(itemid === 'wysd'){
            submenu= "<div class='e8_submenu' itemid='wysd_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>字段配置</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("字段配置模块");	  
        }else if(itemid === 'xtzss'){
            submenu= "<div class='e8_submenu' itemid='xtzss_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>日志查询</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='xtzss_2'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>登录日志</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='xtzss_3'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>审批日志</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("日志查询模块");	  
        }
        $(".e8_menu").removeClass("e8_menulight");
        current.addClass("e8_menulight");
        $(".e8_submenus").html(submenus.join(""));
        $(".e8_submenu").eq(0).trigger("click");
    });
    $(".e8_menu").eq(0).trigger("click");
});