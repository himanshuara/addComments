// JavaScript Document

var loadResources = function(obj){
	var $frag = $('<div class="testingResources">');
	
	
	for(var key in obj){
		if(key == 'j'){
			for(var index in obj.j){

				//To execute scripts in order
				var script = $('<script async="false" />');
				var value = obj.j[index];

				if(value["data-cover"]){						
					addCoveredScript(value.src);
				}
				else{
					script.attr('src',value);
					$frag.append(script);
				}			
				
			}
		}
		if(key == 'c'){
			for(href in obj.c){
				$frag.prepend('<link rel="stylesheet" href="'+obj.c[href]+'">');
			}
		}
		if(key == 'html'){
			$frag.prepend(obj.html);			
		}
	}
	
	$('body').append($frag);
	
}

function addCoveredScript(url) {
	blanket.utils.cache[url] = {};
	blanket.utils.attachScript({url:url}, function (content) {
		blanket.instrument({inputFile: content, inputFileName: url},function (instrumented) {
			blanket.utils.cache[url].loaded = true;
			blanket.utils.blanketEval(instrumented);
			blanket.requiringFile(url, true);
			
		});
   });
}


/** 

	Blanket.js is loading scripts twice
	Workaround can be to load covered script using blanket
	and
	Normal scripts normally
	
	but in order
*/