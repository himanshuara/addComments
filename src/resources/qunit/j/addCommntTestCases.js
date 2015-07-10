window.setTimeout(function(){
	test( "Open count should be correct ", function() {
		var result=[{count:1,message:"Correct count,1"}];		
		$(".cmmntCount").addComment({targetUrls:{"save":"demo.php","delete":"","fetch":'demo.php'},customScroll:false});

		$(".cmmntCount").trigger("click");		
		for(var k in iniStack){			
			var obj = iniStack[k];	
			//console.log(obj.length);
			ok(  result[0].count == obj.length, result[0].message );
		}
		
		
	});
	test( "Message count should be as per maxFetchCount for prefetched data", function() {
		var result=[{count:2,message:"Total Messages should be 2",liCount:2},
					{count:5,message:"Total Messages should be 5",liCount:3}];		
		var prefilledData={"1":[{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1223,comment:"Candidate has good knowledge in software",suggComment:"",comment_time:"01 Apr 2015 3:24 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1222,comment:"Cnadidate is duffer",suggComment:"",comment_time:"01 Apr 2015 3:19 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"}],"2":[{USERNAME:"sdfsdfds",comment_id:1223,comment:"Candidate has good knowledge in software222222",suggComment:"",comment_time:"01 Apr 2015 3:24 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1222,comment:"Cnadidate is duffer222222",suggComment:"",comment_time:"01 Apr 2015 3:19 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc22222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"khdghg22222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"tututyu2222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"vxcvxcvxc2222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"qeqweq333",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"jlhljk222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"fjghjgh222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"nbvnbv22222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"}]};
		$(".cmmntCount1").addComment({targetUrls:{"save":"newMsg.php","delete":"","fetch":'demo.php'},
									customScroll:false,maxFetchCount:2,
									prefilledData:prefilledData});
		$(".cmmntCount2").addComment({targetUrls:{"save":"demo.php","delete":"","fetch":'demo.php'},
									customScroll:false,maxFetchCount:5,
									prefilledData:prefilledData});
		
		for(var k=0;k <result.length;k++){							
			var obj = $(".cmmntCount"+(k+1)).data("addComment");
			//console.log("2nd tc"+(obj.getDataFrmObj()).length);
			ok(  result[k].count == (obj.getDataFrmObj()).length, result[k].message );
		}
		
		
	});
test( "Div count for added messages should be as per maxFetchCount for prefetched data", function() {
		var result=[{count:2,message:"Total div count should be 2",liCount:2},
					{count:5,message:"Total div count should be 5",liCount:5}];		
		var prefilledData={"1":[{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1223,comment:"Candidate has good knowledge in software",suggComment:"",comment_time:"01 Apr 2015 3:24 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1222,comment:"Cnadidate is duffer",suggComment:"",comment_time:"01 Apr 2015 3:19 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"}],"2":[{USERNAME:"sdfsdfds",comment_id:1223,comment:"Candidate has good knowledge in software222222",suggComment:"",comment_time:"01 Apr 2015 3:24 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1222,comment:"Cnadidate is duffer222222",suggComment:"",comment_time:"01 Apr 2015 3:19 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc22222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"khdghg22222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"tututyu2222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"vxcvxcvxc2222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"qeqweq333",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"jlhljk222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"fjghjgh222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"nbvnbv22222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"}]};
		$(".cmmntCount3").addComment({targetUrls:{"save":"newMsg.php","delete":"","fetch":'demo.php'},
									customScroll:false,maxFetchCount:2,
									prefilledData:prefilledData});
		$(".cmmntCount4").addComment({targetUrls:{"save":"demo.php","delete":"","fetch":'demo.php'},
									customScroll:false,maxFetchCount:5,
									prefilledData:prefilledData});
		$(".cmmntCount3,.cmmntCount4").trigger("click");
		
		for(var k=0;k <result.length;k++){							
			var obj = $(".cmmntCount"+(k+3)).data("addComment");
			//console.log("div count"+obj.msgCont.find("div.tuple").length);			
			ok(  result[k].liCount == obj.msgCont.find("div.tuple").length, result[k].message );
		}
		
		
	});
test( "One div should be appended on adding messages", function(assert) {
		//console.log(assert);
		var result=[{count:1,message:"Count of added message should be 1"}];		
		var prefilledData={"1":[{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1223,comment:"Candidate has good knowledge in software",suggComment:"",comment_time:"01 Apr 2015 3:24 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1222,comment:"Cnadidate is duffer",suggComment:"",comment_time:"01 Apr 2015 3:19 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"}],"2":[{USERNAME:"sdfsdfds",comment_id:1223,comment:"Candidate has good knowledge in software222222",suggComment:"",comment_time:"01 Apr 2015 3:24 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1222,comment:"Cnadidate is duffer222222",suggComment:"",comment_time:"01 Apr 2015 3:19 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc22222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"khdghg22222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"tututyu2222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"vxcvxcvxc2222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"qeqweq333",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"jlhljk222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"fjghjgh222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"nbvnbv22222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"}]};
		$(".cmmntCount5").addComment({targetUrls:{"save":"newMsg.php","delete":"","fetch":'demo.php'},
									customScroll:false,maxFetchCount:2,
									prefilledData:prefilledData});
		
		$(".cmmntCount5").trigger("click");
		var obj = $(".cmmntCount5").data("addComment");		
		var preMsgCount = obj.msgCont.find("div.tuple").length;		
		obj.prntElm.find("textarea").val("test data");
		obj.addBtnElm.trigger("click");
		var done = assert.async();
		setTimeout(function(){
		//console.log("entered timeout");
		var postMsgCount = obj.msgCont.find("div.tuple").length;
		//console.log(postMsgCount);
		ok(  result[0].count == (postMsgCount -preMsgCount) , result[0].message );
		done();
		},2000)
	});

test( "tupleTemplate option test", function(assert) {
		//console.log(assert);
		var result=[{count:2,message:"Added Tuples using tuple template should 2"}];		
		var prefilledData={"1":[{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1223,comment:"Candidate has good knowledge in software",suggComment:"",comment_time:"01 Apr 2015 3:24 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1222,comment:"Cnadidate is duffer",suggComment:"",comment_time:"01 Apr 2015 3:19 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"}],"2":[{USERNAME:"sdfsdfds",comment_id:1223,comment:"Candidate has good knowledge in software222222",suggComment:"",comment_time:"01 Apr 2015 3:24 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1222,comment:"Cnadidate is duffer222222",suggComment:"",comment_time:"01 Apr 2015 3:19 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc22222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"khdghg22222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"tututyu2222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"vxcvxcvxc2222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"qeqweq333",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"jlhljk222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"fjghjgh222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"nbvnbv22222",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"}]};
		$(".cmmntCount6").addComment({targetUrls:{"save":"newMsg.php","delete":"","fetch":'demo.php'},
									customScroll:false,maxFetchCount:2,
									prefilledData:prefilledData,
									tupleTemplate: ' <div class="tuple"> <div class="USERNAME"><%data[i].USERNAME%> said </div><div class="comment_time"> <%data[i].comment_time%> </div><div class="comment"><%data[i].comment%></div></div>'});
		
		$(".cmmntCount6").trigger("click");
		var obj = $(".cmmntCount6").data("addComment");		
		var preMsgCount = obj.msgCont.find("div.tuple").length;				
		var done = assert.async();
		
		//console.log("entered timeout");
		var MsgCount = obj.msgCont.find("div.tuple").length;
		
		ok(  result[0].count == MsgCount , result[0].message );
		
		
	});

},3000);

