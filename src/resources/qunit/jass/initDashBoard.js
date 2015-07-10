$(function(){

	var dropDown  = $('#pluginList');
	for(key in resourceConfig){
		dropDown.append('<option value="'+key+'">'+key+'</option>');
	}
	
//	$('#dd_pluginList').singleDD({data: arr,maxHeight: 290,prefillData: ''});
	
	$('form[name=testFor]').submit(function(e){
		e.preventDefault();
		var selected = dropDown.val();
		var resources = resourceConfig[selected];
		window.testObject = {};
		if(selected != -1){
			QUnit.module(selected);
			loadResources(resources);				
		}
	});	

});