/*global ieObj*/
/*jslint eqeq:true*/
/*******Start of addComment (version : v.0.0.1)*/
//var stack=[];
var iniStack = {}; //[];
$(document).click(function(e) {
    if (!$(e.target).hasClass('addComment') && !$(e.target).parents('.addComment').length) {
        $('.addComment').children(".drpLyr").hide();
        for (var k in iniStack) {
            $.each(iniStack[k], function(idx, val) {
                val.isOpen = false;
            })
        }
    }
});



(function($) {

    $.fn.addComment = function(opt) {

        var defaults = {
                bindEvt: 'click',
                template: '<div class="dropLayerCont ie7Fix posR"> <em class="upArr"></em><div class="dropLayer"><div><div class="messages"></div><div class="addBtnCont"><div><textarea class="textArea big" placeholder="Add Comment"></textarea></div><div class="addBtnWrapper"><a href="#"  class="btn-small btn-primary fl upLoadRefCv addMsg fl">Post Comment</a></div></div></div></div></div>',
                requiredKeys: false,
                dropLayerClass: "dropLayerCont",
                targetUrls: {
                    "save": null,
                    "delete": null,
                    "fetch": null,
                    "method":"POST"
                },
                maxFetchCount: 20,
                addBtn: "addMsg",
                addMessageCallBack: false,
                errorCallBack: false,
                readonly: false,
                customScroll: false,
                prefilledData: false,                
                onOpen:false,
                footerTemplate:false

            },
            opts = $.extend({}, defaults, opt); //override defaults options


        var isFirstIni = $.fn.addComment.iniCount;
        if (isFirstIni) {
            $.fn.addComment.iniCount = isFirstIni++;
        } else {
            $.fn.addComment.iniCount = isFirstIni = 1;

        }
        iniStack["stack_" + isFirstIni] = [];
        //var iniCount = $.fn.addComment.iniCount;
        var count = 0;

        var dropLayerIdPreFix = "dropLayer" + (Math.floor(Math.random() * 11));
        /*Function to bind events related to comments*/
        function bindCommentEvents() {
            var _ths = this;

            _ths.node.on(opts.bindEvt, function(e) {
                if (e.target !== this)
                    return;
                if (!_ths.isRead) {
                    _ths.appendTemplate($(opts.template));
                    _ths.prntElm.find("." + opts.dropLayerClass).addClass("drpLyr")[0].id = dropLayerIdPreFix + "_" + count;
                    _ths.dropLayerId = dropLayerIdPreFix + "_" + count;
                    count++;

                    _ths.addScroll();
                    _ths.addBtnClick();
                    _ths.fetchPgCount=1;
                    _ths.loadMsg(!opts.prefilledData ? {
                        url: opts.targetUrls.fetch,
                        pageId:_ths.fetchPgCount
                    } : "");
                    _ths.isRead = true;
                    _ths.isOpen = true;
                    _ths.hideLayer();
                    iniStack["stack_" + isFirstIni].push(_ths);

                } else if (!_ths.isOpen) {
                    _ths.prntElm.find("#" + _ths.dropLayerId).show();
                    _ths.isOpen = true;
                    _ths.hideLayer();
                    iniStack["stack_" + isFirstIni].push(_ths);
                } else {
                    _ths.prntElm.find("#" + _ths.dropLayerId).hide();
                    _ths.isOpen = false;
                    iniStack["stack_" + isFirstIni].pop();
                }

                if (opts.footerTemplate) {
                    //var status = _ths.prntElm.parents("tr:eq(0)").find("" + opts.statusObj.statusEl).val();
                    //_ths.prntElm.find("" + opts.statusObj.statusCnt).html("for <b>" + (status || "Applied")+"</b> Status");
                    _ths.regenerateFooter();

                }
                if (opts.onOpen) {
                    opts.onOpen.call(_ths);
                }

                for (var k in iniStack) {
                    $.each(iniStack[k], function(idx, val) {
                        if (val.prntElm.find("." + opts.dropLayerClass)[0].id != _ths.prntElm.find("." + opts.dropLayerClass)[0].id) {
                            val.isOpen = false;
                            val.prntElm.find(".drpLyr").hide();
                        }

                    });
                }
            });
        }

        function init(node) {
            var _ths = this;
            _ths.node = node;
            _ths.params = (node.attr("data-params") ? eval('(' + node.attr("data-params") + ')') : "");
            _ths.prntElm = node.parent();
            _ths._this = _ths;
            _ths.prntElm.addClass("addComment");
            _ths.isRead = false;
            _ths.isOpen = false;
            bindCommentEvents.call(_ths);
        }

        var prototype_Objects = {
            appendTemplate: function(html) {
                var _ths = this;
                _ths.prntElm.append(html);
            },
            createTuple: function(data) {
                var _ths = this;
                var html = '';
                if (!opts.tupleTemplate) {
                    if (opts.requiredKeys) {
                        $.each(data, function(idx, obj) {
                            html += '<div class="tuple">';
                            for (var k = 0; k < opts.requiredKeys.length; k++) {

                                if (obj.hasOwnProperty(opts.requiredKeys[k])) {
                                    var key = opts.requiredKeys[k];
                                    if (k == 0) {
                                        html += '<div class="' + opts.requiredKeys[k] + '" >' + obj[key] + '</div>';
                                    } else {
                                        html += '<div class="' + opts.requiredKeys[k] + '" >' + obj[key] + '</div>';

                                    }
                                }
                            }
                            html += "</div>";
                        });
                    } else {
                        $.each(data, function(idx, obj) {
                            html += '<div class="tuple">';
                            for (var k in obj) {
                                if (obj.hasOwnProperty(k)) {
                                    //var key = opts.requiredKeys[k];
                                    html += '<div class="' + obj[k] + '" >' + obj[k] + '</div>';                                  
                                }
                            }
                            html += "</div>";
                        });
                    }
                } else {
                    var tmpl = '<% for ( var i=0 ; i < data.length; i++ ) { %>' + opts.tupleTemplate + '<% } %>';
                    html += _ths.generateHTML(tmpl, data);
                }


                if (_ths.customScrollCont && opts.customScroll) {
                    _ths.customScrollCont.append(html);
                } else {
                    _ths.msgCont.append(html);
                }
            },
            generateHTML: function(html, data) {
                var re = /<%(.+?)%>/g,
                    reExp = /(^( )?(var|if|for|else|switch|case|break|{|}|;))(.*)?/g,
                    code = 'with(data) { var r=[];\n',
                    cursor = 0,
                    result;

                var add = function(line, js) {
                    js ? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
                        (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
                    return add;
                }

                while (match = re.exec(html)) {
                    add(html.slice(cursor, match.index))(match[1], true);
                    cursor = match.index + match[0].length;
                }

                add(html.substr(cursor, html.length - cursor));
                code = (code + 'return r.join(""); }').replace(/[\r\t\n]/g, '');
                try {
                    result = new Function('data', code).apply(data, [data]);
                } catch (err) {
                    if (console.error) console.error("'" + err.message + "'", " in \n\nCode:\n", code, "\n");
                }

                return result;

            },
            regenerateFooter:function(){
                this.prntElm.find(""+opts.footerTemplate.footerEl).html(opts.footerTemplate.template.call(this));
            },
            loadMsg: function(optns, isSave) {
                var _ths = this,
                params=$.extend({},_ths.params,{"count":opts.maxFetchCount},optns);
                var options = {
                    type: opts.targetUrls.method,
                    url: optns.url,
                    data: params,
                    dataType: "json",
                    successCallBack: function(data) {
                        _ths.createTuple(data);
                        if (!_ths.scrollAdded) {
                            _ths.addScrollEvt();
                        }
                    },
                    errorCallBack: function(jqXHR, textStatus, errorThrown) {
                        _ths.createTuple("Error");
                    }

                };
                if (!isSave) {
                    if (!opts.prefilledData) {
                        var ajaxOpts = $.extend({}, options, optns);
                        _ths.callAjax(ajaxOpts);
                    } else {
                        var data = _ths.getDataFrmObj();
                        if (data) {
                            _ths.createTuple(data);
                        }
                        if (!_ths.scrollAdded) {
                            _ths.addScrollEvt();
                        }
                    }
                } else {
                    var ajaxOpts = $.extend({}, options, optns);
                    _ths.callAjax(ajaxOpts);
                }

            },
            getDataFrmObj: function() {
                var _ths = this,
                    obj = opts.prefilledData[_ths.params.id],
                    startCount = _ths.startCount || 0;
                if (obj) {
                    var maxCount = (startCount + opts.maxFetchCount) > obj.length ? obj.length : (startCount + opts.maxFetchCount),
                        retArr = [];
                    for (var i = startCount; i < maxCount; i++) {
                        retArr.push(obj[i]);
                    }
                    _ths.startCount = maxCount + 1;
                    return retArr;
                } else {
                    return false;
                }

            },
            callAjax: function(options) {
                $.ajax({
                    type: options.type,
                    url: options.url,
                    data: options.data || {}, //
                    dataType: options.dataType,
                    success: options.successCallBack,
                    error: options.errorCallBack
                });
            },
            addScroll: function() {
                var _ths = this;
                _ths.msgCont = _ths.prntElm.find(".messages");
                var scrollClass = opts.customScroll ? 'nScroll' : '';
                _ths.msgCont.addClass(scrollClass);
                //_ths.addMsgCont = _ths.prntElm.find(""+opts.addMsgCont);
                _ths.addBtnElm = _ths.prntElm.find("." + opts.addBtn);

            },
            addScrollEvt: function() {
                var _ths = this;
                if (!opts.customScroll) {
                    _ths.msgCont.on("scroll", function(e) {
                        if (!_ths.triggerScroll) {
                            if (($(this).scrollTop() + $(this).outerHeight()) >= $(this)[0].scrollHeight) {
                                if (!opts.prefilledData) {
                                    var options = {
                                        url: opts.targetUrls.fetch,
                                        pageId:++_ths.fetchPgCount
                                    };
                                }
                                _ths.loadMsg(options || "");
                            }
                        } else {
                            _ths.triggerScroll = false;
                        }

                    });
                } else {
                    customScroll.init();
                    _ths.customScrollCont = _ths.msgCont.find(".matchParent.content");
                    _ths.customScrollCont.on("scroll", function(e) {
                        if (!_ths.triggerScroll) {
                            if (($(this).scrollTop() + $(this).outerHeight()) >= $(this)[0].scrollHeight) {
                                var options = {
                                    url: opts.targetUrls.fetch,
                                    pageId:++_ths.fetchPgCount
                                };
                                _ths.loadMsg(options);
                            }
                        } else {
                            _ths.triggerScroll = false;
                        }


                    });
                }
                _ths.scrollAdded = true;
            },
            hideLayer: function() {
                var _ths = this;
                $.each(iniStack["stack_" + isFirstIni], function(idx, val) {
                    if (_ths != val) {
                        $("#" + val.dropLayerId).hide();
                        val.isOpen = false;
                    }
                });
                iniStack["stack_" + isFirstIni].pop();

            },
            addBtnClick: function() {
                var _ths = this;
                if (!opts.readonly && opts.addBtn) {
                    _ths.addBtnElm.on("click", function(e) {
                        if (e.target !== this)
                            return;
                        var val = _ths.prntElm.find("textarea").val();
                        if ($.trim(val) != '') {
                            var params = $.extend({}, _ths.params, {
                                "comment": val
                            });
                            var options = {
                                url: opts.targetUrls.save,
                                type: opts.targetUrls.method,
                                data: params,
                                successCallBack: function(data) {
                                    var dt = typeof data == "string" ? JSON.parse(data) : data;
                                    if (dt.status == "success") {
                                        _ths.createTuple(dt.message);
                                        if (opts.addMessageCallBack) {
                                            opts.addMessageCallBack.call(_ths, dt);
                                        }

                                    } else {
                                        if (opts.errorCallBack) {
                                            opts.errorCallBack.call(_ths, dt);
                                        }
                                    }
                                    _ths.prntElm.find("textarea").val('');
                                    if (opts.customScroll) {
                                        _ths.triggerScroll = true;
                                        _ths.customScrollCont.scrollTop(_ths.customScrollCont[0].scrollHeight); //animate({ scrollTop: _ths.customScrollCont[0].scrollHeight}, 1000);
                                    } else {
                                        _ths.triggerScroll = true;
                                        _ths.msgCont.scrollTop(_ths.msgCont[0].scrollHeight);
                                    }

                                },
                                errorCallBack: function(jqXHR, textStatus, errorThrown) {
                                    _ths.createTuple("Error");
                                }

                            };

                            _ths.callAjax(options, true);
                        }

                    });
                }
            }


        };

        function addComment_Constructor(nodeElem) {
            init.call(this, nodeElem);
        }

        addComment_Constructor.prototype = prototype_Objects;

        this.each(function() {
            if (!$(this).data('addComment')) {
                var addComment_instance = new addComment_Constructor($(this));
                $(this).data('addComment', addComment_instance);
            }
        });

        return this.data('addComment');

    };

})(jQuery);
//End of addComment