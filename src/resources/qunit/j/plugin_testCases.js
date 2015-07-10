// JavaScript Document
/* global  console, testObject */
window.setTimeout(function(){
	test('Units should be exported to testObject',function(){
		ok(testObject.init(),'Init function exported');
		ok(testObject.privateFunc(),'Private function exported');	
	});
},1000)