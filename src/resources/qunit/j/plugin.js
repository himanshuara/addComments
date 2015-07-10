/* global  testObject, console */
$.fn.plugin = (function($){
		
	var t = typeof testObject != "undefined" ?testObject : {};
	
	t.privateFunc = function(){
		return Math.random();
	};
	
	t.init = function(){
		return t.privateFunc();
	};
	
	return {
		init : t.init
		
	};	
	
}(jQuery));
