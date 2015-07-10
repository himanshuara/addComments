$(document).ready(function(){
	$(".cmmntPfData").addComment({
                bindEvt: 'click',				
				template:'<div class="dropLayerCont ie7Fix posR"> <em class="upArr"></em><div class="dropLayer"><div><div class="messages"></div><div class="addBtnCont"><div><textarea class="textArea big" placeholder="Add Comment"></textarea></div><div class="addBtnWrapper"><a href="javascript:void(0)"  class="btn-small btn-primary fl upLoadRefCv addMsg fl">Post Comment</a></div></div></div></div></div>',				
				requiredKeys:["comment_time","comment"],
				dropLayerClass:"dropLayerCont",
				targetUrls:{"save":"j/newMsg.php","delete":"","fetch":'../patch/demo.php'},
				maxFetchCount:5,
				addBtn:"addMsg",				
				addMessageCallBack:function(){
				 console.log("messages added");
				},
				errorCallBack:function(){
				console.log("error");
				},
				readonly:false,
				customScroll:true,
				prefilledData:prefilledData
					
            });
    $(".cmmntAjax").addComment({
                bindEvt: 'click',               
                template:'<div class="dropLayerCont ie7Fix posR"> <em class="upArr"></em><div class="dropLayer"><div><div class="messages"></div><div class="addBtnCont"><div><textarea class="textArea big" placeholder="Add Comment"></textarea></div><div class="addBtnWrapper"><a href="javascript:void(0)"  class="btn-small btn-primary fl upLoadRefCv addMsg fl">Post Comment</a></div></div></div></div></div>',                
                requiredKeys:["comment_time","comment"],
                dropLayerClass:"dropLayerCont",
                targetUrls:{"save":"j/newMsg.php","delete":"","fetch":'j/fetchMsg.php'},
                maxFetchCount:5,
                addBtn:"addMsg",                
                addMessageCallBack:function(){
                 console.log("messages added");
                },
                errorCallBack:function(){
                console.log("error");
                },
                readonly:false,
                customScroll:true
                    
            });
$(".cmmntRdOnly").addComment({
                bindEvt: 'click',               
                template:'<div class="dropLayerCont ie7Fix posR"> <em class="upArr"></em> <div class="dropLayer"> <div> <div class="messages"></div></div></div></div>',                
                requiredKeys:["comment_time","comment"],
                dropLayerClass:"dropLayerCont",
                targetUrls:{"save":"","delete":"","fetch":'j/fetchMsg.php'},
                maxFetchCount:5, 
                readonly:true,
                customScroll:true,
                prefilledData:prefilledData
                    
            });
$(".cmmntTupTpl").addComment({
                bindEvt: 'click',               
                template:'<div class="dropLayerCont ie7Fix posR"> <em class="upArr"></em><div class="dropLayer"><div><div class="messages"></div><div class="addBtnCont"><div><textarea class="textArea big" placeholder="Add Comment"></textarea></div><div class="addBtnWrapper"><a href="javascript:void(0)"  class="btn-small btn-primary fl upLoadRefCv addMsg fl">Post Comment</a></div></div></div></div></div>',
                tupleTemplate: ' <div class="tuple"> <div class="USERNAME"><%data[i].USERNAME%> said </div><div class="comment_time"> <%data[i].comment_time%> </div><div class="comment"><%data[i].comment%></div></div>',                
                requiredKeys:["comment_time","comment"],
                dropLayerClass:"dropLayerCont",
                targetUrls:{"save":"j/newMsg.php","delete":"","fetch":'j/fetchMsg.php'},
                maxFetchCount:5, 
                readonly:false,
                customScroll:true,
                prefilledData:prefilledData
                    
            });
$(".cmmntFotTpl").addComment({
                bindEvt: 'click',               
                template: '<div class="dropLayerCont ie7Fix posR"> <em class="upArr"></em><div class="dropLayer"><div><div class="messages"></div><div class="addBtnCont"><div><textarea class="textArea big" placeholder="Add Message for Employees"></textarea></div><div class="addBtnWrapper"><a href="javascript:void(0)"  class="btn-small btn-primary fl upLoadRefCv addMsg fl">Send Message</a></div><div class="cmtFooter"></div></div></div></div></div>',
                tupleTemplate: ' <div class="tuple"> <div class="USERNAME"><%data[i].USERNAME%> said </div><div class="comment_time"> <%data[i].comment_time%> </div><div class="comment"><%data[i].comment%></div></div>',                
                requiredKeys:["comment_time","comment"],
                dropLayerClass:"dropLayerCont",
                targetUrls:{"save":"j/newMsg.php","delete":"","fetch":'j/fetchMsg.php'},
                maxFetchCount:5, 
                readonly:false,
                customScroll:true,
                prefilledData:prefilledData,
                footerTemplate: {
            template: function() {
                return '<span class="frDup fr" >for <b>' + "Any dynamic footer" + '</b></span>';
            },
            footerEl: ".cmtFooter"
        }
                    
            });
});