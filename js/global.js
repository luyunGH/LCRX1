//全局公共JavaScript

$(document).ready(function() {
	if(document.documentElement.clientHeight >= document.documentElement.offsetHeight) {
       $("#header").css('padding-right', '17px');
    }

	 $(".qcode").bind('click',function(event){
		 $(".wcode").css("display","block");
        event.stopPropagation();
	    
     });
     
     $(".wcode").mouseleave(function(){
	    $(".wcode").css("display","none");
	 });
     

	 $(document).bind('click',function(ev){
         $(".wcode").css("display","none");
     });
     
	// $(".w_wrap2 ").css("position","relative").prepend('');
	$("head title").after('<meta name="keywords" content="泛微,OA,OA系统,移动办公,OA软件,办公自动化,协同OA,知识管理,流程管理,信息门户,协同管理,移动OA,OA集成,e8,e-cology">');
	$("head title").after('<meta name="description" content="泛微是移动办公OA行业唯一一家上交所主板上市公司，专注OA领域16年。发布了以“移动化、社交化、平台化、云端化”为核心的全新一代办公自动化产品系列">');
});