# Add Comments


-------------------------------------------------------
-------------------------------------------------------

## Demo
[Click me --:](http://dev1.fed.infoedge.com/himanshu/addComments/src/index.html)

-------------------------------------------------------
-------------------------------------------------------

## Browser Support
* Internet Explorer 7+
* Chrome 10+
* Firefox 3.5+
* Safari 4+
* Opera 11+

-------------------------------------------------------
-------------------------------------------------------

## Features
* Plug n Play system to add comments
* Works with only minimal CSS changes
* Feature to customize HTML structure
* Works on both Ajax and prefilled data
* Feature to customize footer



-------------------------------------------------------
-------------------------------------------------------


# Usage

### HTML

```HTML
<div>
    <div class="cmmntCont cmmt posR fl">
        <em class="cmmntPfData" data-params="{id:'1'}">Click Here</em>
    </div>
                              
</div>
```
data-params attribute is an object which allows to get unique id of a tuple

### Data format
```javascript

Object

var data = {1:[{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1223,comment:"Candidate has good knowledge in software",suggComment:"",comment_time:"01 Apr 2015 3:24 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1222,comment:"Cnadidate is duffer",suggComment:"",comment_time:"01 Apr 2015 3:19 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"},{USERNAME:"resdexrevamp1@yopmail.com",comment_id:1221,comment:"adc",suggComment:"",comment_time:"01 Apr 2015 3:16 PM",creator:null,creator_id:"9883814",CompID:"168613"}]};


```


### Call

```javascript
$(".cmmntPfData").addComment({
                bindEvt: 'click',               
                template:'<div class="dropLayerCont ie7Fix posR"> <em class="upArr"></em><div class="dropLayer"><div><div class="messages"></div><div class="addBtnCont"><div><textarea class="textArea big" placeholder="Add Comment"></textarea></div><div class="addBtnWrapper"><a href="javascript:void(0)"  class="btn-small btn-primary fl upLoadRefCv addMsg fl">Post Comment</a></div></div></div></div></div>',                
                requiredKeys:["comment_time","comment"],
                dropLayerClass:"dropLayerCont",
                targetUrls:{"save":"j/newMsg.php","delete":"","fetch":'../patch/demo.php'},
                maxFetchCount:5,
                addBtn:"addMsg",                
                addMessageCallBack:function(){                 
                },
                errorCallBack:function(){                
                },
                readonly:false,
                customScroll:false,
                prefilledData:prefilledData
                    
            });
```

### Parameters (Options)


Name  | Type | Default Value | Discription
--- |--- | --- | ---
bindEvt  | string | click | Event on which the container will open 
template | string | None |HTML string for the comment container 
tupleTemplate | string | false | HTML string that will be populated to display each message
requiredKeys  | Array of String | false | Array of keys from the data which need to be populated in each comment tuple.Data will be populated in the order provided in this array
dropLayerClass | String|  'dropLayerCont' | CSS class name of the element that will be acting as drop container
targetUrls| Object | Empty String | "save"- URL to be called on saving the comment,"fetch"- URL to be called for fetching the comments, it works only when prefilledData is false
maxFetchCount | Integer  | 20 | Maximum number of messages to be fetched in each fetch call
addBtn | String | "addMsg" | CSS class name of the element on whose click a message will be saved
addMessageCallBack | Function | false | Callback function that will be called when a message is successfully added
errorCallBack | Function | false | Callback function that will be called when an error occurs on saving a message 
readonly | Boolean | false | On setting the flag to true the add message button will not be visible
customScroll | Boolean | false | Flag to allow custom scroll
prefilledData | Object | false | Object containing the required data that need to be populated. On providing this object ajax fetch will not work
onOpen | Function | false | Callback that will be fired when the comment container opens
footerTemplate | Object | false | Consists of 'footerEl' and 'template' properties. footerEl specifies the footer container, template is a function that returns dynamic html content to be added in footer