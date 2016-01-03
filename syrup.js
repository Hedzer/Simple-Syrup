var Syrup = (function(window, lenient){
	'use strict';
	var HTMLSpec = (function(){
		var compressed = {"tags":["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","datalist","dd","del","details","dfn","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","map","mark","menu","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","video","wbr"],"map":{"hash":"0","search":"0","pathname":"0","port":"0","hostname":"0","host":"0","password":"0","username":"0","protocol":"0","origin":"0","href":"1","text":"2","type":"3","target":"4","shape":"0","rev":"5","rel":"5","ping":"0","name":"6","hreflang":"5","download":"7","coords":"0","charset":"8","onwaiting":"9","onvolumechange":"9","ontoggle":"9","ontimeupdate":"9","onsuspend":"9","onsubmit":"9","onstalled":"9","onshow":"9","onselect":"9","onseeking":"9","onseeked":"9","onscroll":"9","onresize":"9","onreset":"9","onratechange":"9","onprogress":"9","onplaying":"9","onplay":"9","onpause":"9","onmousewheel":"9","onmouseup":"9","onmouseover":"9","onmouseout":"9","onmousemove":"9","onmouseleave":"9","onmouseenter":"9","onmousedown":"9","onloadstart":"9","onloadedmetadata":"9","onloadeddata":"9","onload":"9","onkeyup":"9","onkeypress":"9","onkeydown":"9","oninvalid":"9","oninput":"9","onfocus":"9","onerror":"9","onended":"9","onemptied":"9","ondurationchange":"9","ondrop":"9","ondragstart":"9","ondragover":"9","ondragleave":"9","ondragenter":"9","ondragend":"9","ondrag":"9","ondblclick":"9","oncuechange":"9","oncontextmenu":"9","onclose":"9","onclick":"9","onchange":"9","oncanplaythrough":"9","oncanplay":"9","oncancel":"9","onblur":"9","onabort":"9","spellcheck":"9","isContentEditable":"9","contentEditable":"9","outerText":"9","innerText":"9","accessKey":"9","hidden":"9","webkitdropzone":"9","draggable":"9","tabIndex":"9","dir":"9","translate":"9","lang":"9","title":"9","childElementCount":"9","lastElementChild":"9","firstElementChild":"9","children":"9","nextElementSibling":"9","previousElementSibling":"9","onwebkitfullscreenerror":"9","onwebkitfullscreenchange":"9","onwheel":"9","onselectstart":"9","onsearch":"9","onpaste":"9","oncut":"9","oncopy":"9","onbeforepaste":"9","onbeforecut":"9","onbeforecopy":"9","shadowRoot":"9","dataset":"9","classList":"9","className":"9","outerHTML":"9","innerHTML":"9","scrollHeight":"9","scrollWidth":"9","scrollTop":"9","scrollLeft":"9","clientHeight":"9","clientWidth":"9","clientTop":"9","clientLeft":"9","offsetParent":"9","offsetHeight":"9","offsetWidth":"9","offsetTop":"9","offsetLeft":"9","localName":"9","prefix":"9","namespaceURI":"9","id":"9","style":"9","attributes":"9","tagName":"9","parentElement":"9","textContent":"9","baseURI":"9","ownerDocument":"9","nextSibling":"9","previousSibling":"9","lastChild":"9","firstChild":"9","childNodes":"9","parentNode":"9","nodeType":"9","nodeValue":"9","nodeName":"9","width":"a","vspace":"b","object":"c","hspace":"b","height":"d","codeBase":"e","code":"e","archive":"e","alt":"f","align":"g","noHref":"h","onwebkitneedkey":"i","onwebkitkeymessage":"i","onwebkitkeyerror":"i","onwebkitkeyadded":"i","webkitVideoDecodedByteCount":"i","webkitAudioDecodedByteCount":"i","textTracks":"i","defaultMuted":"i","muted":"i","volume":"i","controls":"i","loop":"i","autoplay":"i","ended":"i","seekable":"i","played":"i","playbackRate":"i","defaultPlaybackRate":"i","paused":"i","duration":"i","currentTime":"i","seeking":"i","readyState":"j","buffered":"i","preload":"i","networkState":"i","crossOrigin":"k","currentSrc":"l","src":"m","error":"i","cite":"n","onunload":"o","onstorage":"o","onpopstate":"o","onpageshow":"o","onpagehide":"o","ononline":"o","onoffline":"o","onmessage":"o","onlanguagechange":"o","onhashchange":"o","onbeforeunload":"o","vLink":"o","link":"o","bgColor":"p","background":"o","aLink":"o","clear":"q","labels":"r","validationMessage":"s","validity":"s","willValidate":"s","value":"t","formTarget":"u","formNoValidate":"u","formMethod":"u","formEnctype":"u","formAction":"u","form":"v","disabled":"w","autofocus":"x","vAlign":"y","span":"z","chOff":"y","ch":"y","options":"10","dateTime":"11","open":"12","compact":"13","elements":"14","length":"15","noValidate":"16","method":"16","encoding":"16","enctype":"16","autocomplete":"17","action":"16","acceptCharset":"16","size":"18","noShade":"19","color":"19","version":"1a","contentWindow":"1b","contentDocument":"1c","nwfaketop":"1b","nwdisable":"1b","nwUserAgent":"1b","srcdoc":"1b","scrolling":"1b","sandbox":"1b","marginWidth":"1b","marginHeight":"1b","longDesc":"1d","frameBorder":"1b","allowFullscreen":"1b","y":"1e","x":"1e","useMap":"1f","sizes":"1g","srcset":"1h","naturalWidth":"1e","naturalHeight":"1e","lowsrc":"1e","isMap":"1e","complete":"1e","border":"1i","webkitEntries":"1j","nwsaveas":"1j","nwworkingdir":"1j","nwdirectory":"1j","incremental":"1j","webkitdirectory":"1j","selectionDirection":"1k","selectionEnd":"1k","selectionStart":"1k","valueAsNumber":"1j","valueAsDate":"1j","defaultValue":"1l","step":"1j","required":"1m","readOnly":"1k","placeholder":"1k","pattern":"1j","multiple":"1n","min":"1o","minLength":"1k","maxLength":"1k","max":"1p","list":"1j","indeterminate":"1j","files":"1j","dirName":"1k","checked":"1j","defaultChecked":"1j","accept":"1j","keytype":"1q","challenge":"1q","control":"1r","htmlFor":"1s","import":"1t","sheet":"1u","media":"1v","areas":"1w","scheme":"1x","httpEquiv":"1x","content":"1x","optimum":"1y","high":"1y","low":"1y","standby":"1z","declare":"1z","data":"1z","codeType":"1z","reversed":"20","start":"20","label":"21","index":"22","selected":"22","defaultSelected":"22","valueType":"23","position":"24","defer":"25","async":"25","event":"25","selectedIndex":"26","selectedOptions":"26","summary":"27","rules":"27","frame":"27","cellSpacing":"27","cellPadding":"27","tBodies":"27","rows":"28","tFoot":"27","tHead":"27","caption":"27","scope":"29","rowSpan":"29","noWrap":"29","headers":"29","colSpan":"29","axis":"29","abbr":"29","cellIndex":"29","textLength":"2a","wrap":"2a","cols":"2a","cells":"2b","sectionRowIndex":"2b","rowIndex":"2b","track":"2c","default":"2c","srclang":"2c","kind":"2c","webkitDisplayingFullscreen":"2d","webkitSupportsFullscreen":"2d","webkitDroppedFrameCount":"2d","webkitDecodedFrameCount":"2d","poster":"2d","videoHeight":"2d","videoWidth":"2d"},"lookup":[["0","5"],["0","5","a","1s"],["0","g","23","2f","2y"],["0","i","11","12","1l","1o","1r","1s","20","21","24","26","2f","2h","2j","2m","2t","32"],["0","5","a","16","1s"],["0","1s"],["0","4","i","11","12","16","1j","1k","1l","1o","1t","1w","20","24","26","2h","2t"],["0"],["0","1s","2f"],["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","1g","1h","1i","1j","1k","1l","1m","1n","1o","1p","1q","1r","1s","1t","1u","1v","1w","1x","1y","1z","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","2g","2h","2i","2j","2k","2l","2m","2n","2o","2p","2q","2r","2s","2t","2u","2v","2w","2x","2y","2z","30","31","32","33","34"],["4","j","o","p","11","1g","1j","1k","1l","20","27","2q","2s","2v","33"],["4","1k","20"],["4"],["4","j","11","1j","1k","1l","20","2s","2v","33"],["4","20"],["4","5","1k","1l"],["4","k","o","p","x","11","17","18","19","1a","1b","1c","1g","1j","1k","1l","1q","20","25","2q","2r","2s","2u","2v","2w","2z"],["5"],["8","33"],["8","30","33"],["8","1k","1s","2f","33"],["8","1k","33"],["8","11","1j","1k","1l","2f","2j","30","33"],["f","t","1m","29"],["g"],["g","2q","2s","2v","2z"],["h"],["i","1l","1o","1x","24","28","2h","2t"],["i","12","1l","1o","20","24","2h","2t"],["i","1l","1r","1x","23","24","26","28","2h","2t"],["i","1l"],["i","12","1l","1o","1p","1q","20","23","24","2h","2t"],["i","12","1l","1o","1s","22","23","2h","2m","2t"],["i","1l","1o","2h","2t"],["o","p","2r","2s","2u","2v","2w","2z"],["o","p"],["r","2h"],["t","1m"],["u"],["w","y","1v","21","32"],["12","16"],["16","2h"],["16"],["16","1l"],["1g","1l","2h"],["1g"],["1h"],["1j"],["1j","20"],["1j","1k"],["1k"],["1k","1l","20"],["1k","1s","2j"],["1k","2j"],["1k","20","2q"],["1l"],["1l","2t"],["1l","24","2t"],["1l","2h","2t"],["1l","2h"],["1l","1x"],["1l","1x","28"],["1o"],["1p"],["1p","24","2f"],["1s"],["1s","2m"],["1s","2j","2m"],["1t"],["1w"],["1x"],["20"],["21"],["22","23","30"],["23"],["26"],["28"],["2f"],["2h"],["2q"],["2q","2r","2t","2u","2w"],["2s","2v"],["2t"],["2z"],["30"],["33"]]};
		var decompressed = {};
		Object.keys(compressed.map).forEach(function(propName){
			var index = parseInt(compressed.map[propName], 36);
			compressed.map[propName] = compressed.lookup[index];
			var rebuilt = {};
			compressed.map[propName].forEach(function(tagChar){
				var index = parseInt(tagChar, 36);
				var tag = compressed.tags[index];
				rebuilt[tag] = true;
				decompressed[tag] = (decompressed[tag] || []);
				decompressed[tag].push(propName);
			});
			compressed.map[propName] = rebuilt;
		});
		var cleanup = setTimeout(function(){
			compressed = undefined;
			decompressed = undefined;
			cleanup = undefined;
		}, 0);
		return decompressed;
	})();
	var addElementProperty = function(host, name){
		Object.defineProperty(host, name, {
			get:function(){
				return this.element[name];
			},
			set:function(value){
				if (this.element){
					var old = this.element[name];
					this.element[name] = value;
					if (old !== value){
						var data = {
							owner:this,
							property:name,
							old:old,
							new:value
						};
						if (this.trigger){
							this.trigger(name+"PropertyChanged", data);
							this.trigger("PropertyChanged", data);
						}
					}								
				}
			},
			configurable:true,
			enumerable:true
		});
	};
	var initialized = false;
	var container = {};
	var Syrup = {
		tags:Object.keys(HTMLSpec),
		addTag:function(tag){
			var element = document.createElement(tag);
			var method = Function('return function '+tag+'(a, b, c, d, e, f, g, h, i, j, k){\
				Syrup.Constructors.standard.call(this, \''+tag+'\', a, b, c, d, e, f, g, h, i, j, k);\
			}')();
			var primordial = Syrup.Prototypes.element;
			var prototype = Object.create(primordial);
			method.prototype = prototype;
			var properties = Object.keys(element);
			if (!properties.length){
				properties = (HTMLSpec[tag] || []);
			}
			properties.forEach(function(key){
				if (key === "style"){return;}
				if (prototype.hasOwnProperty(key) || Element.prototype.hasOwnProperty(key)){
					return;
				}
				if (primordial){
					if (primordial.hasOwnProperty(key)){
						return;
					}
					if (primordial.prototype && primordial.prototype.hasOwnProperty(key)){
						return;
					}
				}
				addElementProperty(prototype, key);
			});
			Syrup.Elements[tag] = method;
			Syrup.Prototypes[tag] = prototype;
		},
		addClass:function(oClass, as){
			Syrup.Elements[as] = oClass;
		},
		initialize:function(inside){
			if (initialized){return container;}
			//add default additions to root prototype
			var additions = Syrup.Additions;
			Object.keys(additions).forEach(function(key){
				var method = additions[key];
				Syrup.Prototypes.element[key] = method;
			});
			if (!Syrup.Elements.element){
				function element(){}
				element.prototype = Syrup.Prototypes.element;
				Syrup.Elements.element = element;
			}
			Syrup.tags.forEach(Syrup.addTag.bind(Syrup));
			initialized = true;
			HTMLSpec = undefined;
			delete Syrup.initialize;
		},
		pollute:function(inside){
			inside = (inside || window);
			container = inside;
			Object.keys(Syrup.Elements).forEach(function(key){
				container[key] = Syrup.Elements[key];
			});
		},
		Tools:{
			uid:function(){
				var now = new Date().valueOf();
				return now.toString(16)+"-"+parseInt(Math.random()*now).toString(16);
			},
			getType:function(u){
				var t = typeof u;
				if (t === "object"){
					if (u === null){return "null"}
					if (u.constructor === Array){return "array"}
					if (u instanceof Element){return "element"}
					if (u instanceof Syrup.Elements.element){return "syrup"}
					if (u instanceof RegExp){return "regex"}
				}
				if (t === "string"){
					var rHTML = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
					if (rHTML.test(u)){
						return "html";
					}
				}
				return t;
			},
			addElementProperty:addElementProperty,
			addEventedProperty:function(host, name, defaultValue){
				var value = defaultValue;
				Object.defineProperty(host, name, {
					get:function(){
						return value;
					},
					set:function(v){
						var old = value;
						value = v;
						if (old !== v){
							var data = {
								owner:this,
								property:name,
								old:old,
								new:value
							};
							if (this.trigger){
								this.trigger(name+"PropertyChanged", data);
								this.trigger("PropertyChanged", data);
							}
						}
					},
					configurable:true,
					enumerable:true
				});
			}
		},
		Constructors:Object.create({
			standard:function(tag, a, b, c, d, e, f, g, h, i, j, k){
				var self = this;
				this.uid = Syrup.Tools.uid();
				this.element = document.createElement(tag);
				this.element.uid = this.uid;
				this.private = {};
				Syrup.Tools.addEventedProperty(this, "class");
				this.on("classPropertyChanged", function(e){
					if (e && e.detail && e.detail.new){
						if (self.element){
							self.element.setAttribute(e.detail.new,"");
						}
					}
				});
				this.class = tag;
				var inline = new Syrup.Elements.inlineStyle(this);
				delete this.style;
				this.style = inline;
				Object.keys(Syrup.Constructors).forEach(function(name){
					if (name === "standard"){return;}
					var constructor = Syrup.Constructors[name];
					if (typeof constructor === "function"){
						constructor.call(self, a, b, c, d, e, f, g, h, i, j, k);
					}
				});
				self.trigger("constructed");
			}
		}),
		Destructors:Object.create({
			standard:function(){
				var self = this;
				var element = this.element;
				var priv = this.private;
				Object.keys(Syrup.Destructors).forEach(function(name){
					if (name === "standard"){return;}
					var destructor = Syrup.Destructors[name];
					if (typeof destructor === "function"){
						destructor.call(self);
					}
				});
				if (element){
					var parent = element.parentNode;
					if (typeof element.remove === "function"){
						element.remove();
						return;
					}
					if (parent && typeof parent.removeChild === "function"){
						parent.removeChild(element);
						return;
					}
				}
				if (this.style && this.style.Host){
					delete this.style.Host;
				}
				Object.keys(this).forEach(function(key){
					delete self[key];
				});
				if (priv.parent){
					if (self.private && self.private.mapped){
						var map = self.private.mapped[priv.parent.uid];
						if (map && map.constructor === Array){
							map.forEach(function(name){
								delete priv.parent[name];
							});
						}
					}
					if (priv.parent.children){
						delete priv.parent.children[self.uid];
					}
				}
				if (priv.children){
					Object.keys(priv.children).forEach(function(key){
						var child = priv.children[key];
						if (!child){return;}
						if (typeof child.remove === "function"){
							child.remove();
						}
						delete priv.children[key];
					});					
				}
			}
		}),
		Additions:{
			add:function(item){
				var self = this;
				var types = {
					element:function(element){
						if (self.element){
							self.element.appendChild(element);
						}
					},
					syrup:function(instance){
						if (self.element && instance.element){
							self.element.appendChild(instance.element);
							self.private.children = (self.private.children || {});
							self.private.children[instance.uid] = instance;
							instance.private.parent = self;
						}
						var options = {
							as:function(name){
								if (name){
									self[name] = instance;
									instance.private.mapped = (instance.private.mapped || {});
									var map = instance.private.mapped;
									map[self.uid] = (map[self.uid] || []);
									map[self.uid].push(name);
								}
								return instance;
							}
						};
						return options;
					},
					array:function(collection){
						var results = [];
						collection.forEach(function(item){
							results.push(Syrup.Additions.add.call(self, item));
						});
						return results;
					},
					// object:function(item){
					// 	if (item.this){
					// 		types.syrup(item.this);
					// 		if (item.as){
					// 			if (self.hasOwnProperty(item.as)){
					// 				var value = self[item.as];
					// 				var vType = Syrup.Tools.getType(value);
					// 				//missing
					// 			}
					// 		}
					// 	}
					// },
					string:function(str){
						Syrup.Tools.addEventedProperty(self, str);
					},
					html:function(str){
						if (self.element && self.element.appendChild){
							var fragment = document.createDocumentFragment();
							var root = document.createElement('div');
							root.innerHTML = str;
							while (root.firstChild) {
								fragment.appendChild(root.firstChild);
							}
							self.element.appendChild(fragment);			
						}
					}
				};
				var type = Syrup.Tools.getType(item);
				var action = types[type];
				return (action || function(){})(item);
			},
			addTo:function(item){
				var self = this;
				var types = {
					element:function(element){
						if (element){
							element.appendChild(self.element);
						}
					},
					syrup:function(instance){
						return Syrup.Additions.add.call(instance, self)
					},
					array:function(collection){
						var results = [];
						collection.forEach(function(item){
							results.push(Syrup.Additions.addTo.call(self, item));
						});
						return results;
					}
				};
				var type = Syrup.Tools.getType(item);
				var action = types[type];
				return (action || function(){})(item);
			},
			remove:function(item){
				var self = this;
				var types = {
					element:function(element){
					},
					syrup:function(instance){
					},
					array:function(collection){
						var results = [];
						collection.forEach(function(item){
							results.push(Syrup.Additions.remove.call(self, item));
						});
						return results;
					},
					// object:function(item){
					// },
					// string:function(str){},
					// html:function(str){},
					undefined:function(){
						self.trigger("destructed");
						Syrup.Destructors.standard.call(self);
					}
				};
				var type = Syrup.Tools.getType(item);
				var action = types[type];
				return (action || function(){})(item);
			},
			on:function(ev, method){
				if (!ev){return false;}
				this.private = (this.private || {});
				this.private.Events = (this.private.Events || {});
				var events = this.private.Events;
				var self = this;
				var types = {
					array:function(collection){
						var results = [];
						collection.forEach(function(item){
							results.push(Syrup.Additions.on.call(self, item, method));
						});
						return results;
					},
					// object:function(item){},
					string:function(name){
						var pool = events[name];
						if (!pool){
							events[name] = {};
							pool = events[name];
							var hook = function(a,b,c,d,e,f,g,h,i,j,k){
								Object.keys(pool).forEach(function(id){
									var method = pool[id];
									method.call(self, a,b,c,d,e,f,g,h,i,j,k);
								});
							};
							self.element.addEventListener(name, hook, false);
						}
						if (typeof method === "function"){
							var eid = Syrup.Tools.uid();
							pool[eid] = method;
						}
						var handle = {
							remove:function(){
								delete pool[eid];
							}
						};
						return handle;
					}
				};
				var type = Syrup.Tools.getType(ev);
				var action = types[type];
				return (action || function(){})(ev, method);
			},
			trigger:function(ev, args){
				var self = this;
				var types = {
					array:function(collection){
						var results = [];
						collection.forEach(function(item){
							results.push(Syrup.Additions.trigger.call(self, item, args));
						});
						return results;
					},
					object:function(item){},
					string:function(name){
						if (!self.element){return false;}
						var event = new CustomEvent(name, {"detail": args});
						self.element.dispatchEvent(event);
						return true;
					}
				};
				var type = Syrup.Tools.getType(ev);
				var action = types[type];
				return (action || function(){})(ev, args);
			},
			find:function(item){
				var self = this;
				var eachChild = function(callback){
					if (typeof callback === "function" && self.private && self.private.children){
						var children = self.private.children;
						Object.keys(children).forEach(function(id){
							var child = children[id];
							if (child){
								callback(child, id);
							}
						});
					}
				};
				var types = {
					array:function(collection){
						var results = [];
						collection.forEach(function(item){
							results.push(Syrup.Additions.find.call(self, item));
						});
						return results;
					},
					function:function(method){
						var results = [];
						var isSyrup = Syrup.Prototypes.element.isPrototypeOf(method.prototype);
						if (isSyrup){
							var proto = method.prototype;
							eachChild(function(child){
								if (proto.isPrototypeOf(child)){
									results.push(child);
								}								
							});
							return results;
						}

					},
					syrup:function(proto){
						var results = [];
						eachChild(function(child){
							if (child instanceof proto){
								results.push(child);
							}
						});
						return results;
					},
					regex:function(expression){
						var results = [];
						eachChild(function(child){
							if (child.element){
								var element = child.element;
								var text = (element.innerText || element.textContent || '');
								if (expression.test(text)){
									results.push(child);
								}
							}
						});
						return results;
					},
					string:function(query){
						var results = null;
						results = self.element.querySelectorAll(query);
						results = (!results || results === null ? [] : results);
						return results;
					},
					undefined:function(){
						var results = [];
						eachChild(function(child){
							results.push(child);
						});
						return results;
					}
				};
				var type = Syrup.Tools.getType(item);
				var action = types[type];
				return (action || function(){return []})(item);
				//use to find elements, children, filter... returns a .each
			},
			with:function(method){
				var self = this;
				var types = {
					array:function(collection){
						var results = [];
						collection.forEach(function(item){
							results.push(Syrup.Additions.with.call(self, item));
						});
						return results;
					},
					function:function(method){
						method.call(self);
						return self;
					}
				};
				var type = Syrup.Tools.getType(method);
				var action = types[type];
				return (action || function(){})(method);
			}
		},
		Prototypes:{
			element:(function(){
				var prototype = {};
				Object.getOwnPropertyNames(Element.prototype).forEach(function(key){
					if (key === "style"){return;}
					addElementProperty(prototype, key);
				});
				return prototype;
			})()
		},
		Elements:{
			inlineStyle:(function(){
				var sheetEquivalent = {};
				var capitalized = function(style){return style.charAt(0).toUpperCase() + style.slice(1);};
				var uncapitalized = function(style){return style.charAt(0).toLowerCase() + style.slice(1);};
				var vendors = [
					"webkit",
					"moz",
					"ms",
					"o"
				];
				function inlineStyle(host){
					this.private = {};
					this.Host = host;
				}
				function addInlineStyleProperty(key, name){
					Object.defineProperty(inlineStyle.prototype, (name || key), {
						get:function(){
							if (this.Host && this.Host.element && this.Host.element.style){
								var element = this.Host.element;
								return element.style[key];
							}
							return null;
						},
						set:function(value){
							if (this.Host && this.Host.element){
								var old = this.Host.element.style[key];
								this.Host.element.style[key] = value;
								if (old !== value){
									var data = {
										owner:this.Host,
										property:key,
										old:old,
										new:value
									};
									if (this.Host.trigger){
										this.Host.trigger(key+"StyleChanged", data);
										this.Host.trigger("StyleChanged", data);
									}
								}								
							}
						},
						configurable:true,
						enumerable:true
					});
				}
				var faux = document.createElement("FauxElement");
				Object.getOwnPropertyNames(faux.style).forEach(function(key){
					faux.style[key] = "inherit";
					var sheetStyleName = (faux.getAttribute("style") || "").split(":")[0];
					sheetEquivalent[key] = sheetStyleName;
					faux.setAttribute("style", "");
					addInlineStyleProperty(key);
					addInlineStyleProperty(key, sheetStyleName);
					vendors.forEach(function(vendor){
						var prefix = "-"+vendor+"-";
						if (~sheetStyleName.indexOf(prefix)){
							var w3cKey = key;
							w3cKey = uncapitalized(w3cKey.replace(vendor, ""));
							sheetEquivalent[w3cKey] = sheetStyleName;
							sheetEquivalent[sheetStyleName.replace(prefix,"")] = sheetStyleName;
							addInlineStyleProperty(key, w3cKey);
						}
					});
				});
				Object.defineProperty(inlineStyle.prototype, "sheet", {
					get:function(){
						var host = this.Host;
						if (host && host.class && host.element){
							var type = host.class;
							var element = host.element;
							var sheet = document.querySelector("#"+type+"-stylesheet");
							if (sheet){
								sheet = sheet.ocss;
							}
							return sheet;
						}
						return null;
					},
					set:function(value){
						if (typeof value !== "object"){return;}
						var host = this.Host;
						var priv = this.Host.private;
						if (host && host.class && host.element){
							var type = host.class;
							var element = host.element;
							var sheet = document.querySelector("#"+type+"-stylesheet");
							var isNew = false;
							var createRule = function(selector, styles){
								var added = "";
								Object.keys(styles).forEach(function(style){
									var val = styles[style];
									added+=(sheetEquivalent[style] || style)+":"+val+";";
								});
								var me = "["+type+"]";
								var rule = selector.replace(/\[this\]/g, me)+"{"+added+"}";
								return rule;
							};
							var setStyles = function(){
								Object.keys(value).forEach(function(selector){
									var styles = value[selector];
									var added = "\n";
									var mediaQuery = "";
									if (selector.trim()[0] === "@"){
										mediaQuery = selector;
										Object.keys(styles).forEach(function(mqSelector){
											var mqSelectedStyles = styles[mqSelector];
											if (typeof mqSelectedStyles === "object" && mqSelectedStyles.constructor !== Array){
												var rule = createRule(mqSelector, mqSelectedStyles);
												added+="\t"+rule+"\n";
											}
										});
										var mqRule = selector+"{"+added+"}";
										if (sheet.sheet && sheet.sheet.insertRule){
											sheet.sheet.insertRule(mqRule, 0);
										}
										return;
									} else {
										var rule = createRule(selector, styles);
										if (sheet.sheet && sheet.sheet.insertRule){
											sheet.sheet.insertRule(rule, 0);
										}
										return;
									}
								});	
							};
							var createSheet = function(){
								sheet = document.createElement("style");
								sheet.id = type+"-stylesheet";
								sheet.appendChild(document.createTextNode(""));
								sheet.setAttribute("data-use-count", "0");
								sheet.ocss = value;
								(document.head || document.body).appendChild(sheet);								
							};
							var increaseCount = function(){
								priv.style = (priv.style || {});
								priv.style.sheet = (priv.style.sheet || {});
								if (priv.style.sheet.counted){return;}
								var count = sheet.getAttribute("data-use-count");
								count = (parseInt(count) || 0);
								count++;
								sheet.setAttribute("data-use-count", count+"");
								priv.style.sheet.counted = true;
								host.on("destructed", function(){
									decreaseCount();
								});			
							};
							var decreaseCount = function(){
								var sheet = document.querySelector("#"+type+"-stylesheet");
								if (sheet){
									priv.style = (priv.style || {});
									priv.style.sheet = (priv.style.sheet || {});
									var count = sheet.getAttribute("data-use-count");
									count = (parseInt(count) || 0);
									count--;
									sheet.setAttribute("data-use-count", count+"");
									if (!count){
										destroySheet();
									}									
								}
							};
							var destroySheet = function(){
								if (typeof sheet.remove == "function"){
									sheet.remove();
								} else {
									if (sheet.parentNode){
										sheet.parentNode.removeChild(sheet);
									}
								}
							};
							var checkForChange = function(){
								if (sheet && sheet.ocss && sheet.ocss !== value){
									var count = sheet.getAttribute("data-use-count");
									count = (parseInt(count) || 0);
									destroySheet();
									createSheet();
									setStyles();
									sheet.setAttribute("data-use-count", count+"");
								}
							};
							checkForChange();
							if (!sheet){
								isNew = true;
								createSheet();
								setStyles();								
							}
							increaseCount();
							return value;
						}
					},
					configurable:true
				});
				Object.defineProperty(inlineStyle.prototype, "inline", {
					set:function(value){
						if (typeof value === "object" && value.constructor != Array){
							var self = this;
							Object.keys(value).forEach(function(style){
								var val = value[style];
								self[style] = val;
							});
						}
					},
					configurable:true
				});
				return inlineStyle;
			})()
		}
	};
	Syrup.initialize();
	return Syrup;
})
(
	window,
	(function(){
		'use lenient';
		return {
			arguments:function(){
				return arguments;
			}
		};
	})()
);