//ȫ�ֹ���JavaScript

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
	$("head title").after('<meta name="keywords" content="��΢,OA,OAϵͳ,�ƶ��칫,OA���,�칫�Զ���,ЭͬOA,֪ʶ����,���̹���,��Ϣ�Ż�,Эͬ����,�ƶ�OA,OA����,e8,e-cology">');
	$("head title").after('<meta name="description" content="��΢���ƶ��칫OA��ҵΨһһ���Ͻ����������й�˾��רעOA����16�ꡣ�������ԡ��ƶ������罻����ƽ̨�����ƶ˻���Ϊ���ĵ�ȫ��һ���칫�Զ�����Ʒϵ��">');
});