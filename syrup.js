var Syrup = (function(window, lenient){
	'use strict';
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
	var Syrup = {
		tags:[
			"a", "abbr", "acronym", "address", "applet", "area", "article",	"aside", "audio",
			"b", "base", "basefont", "bdi",	"bdo", "big", "blockquote",	"body", "br", "button", 
			"canvas", "caption", "center", "cite", "code", "col", "colgroup", "command",
			"datalist", "dd", "del", "details", "dfn", "dir", "div", "dl", "dt",
			"em", "embed",
			"fieldset","figcaption","figure","footer","form",
			"h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html",
			"i","iframe","img","input","ins",
			"kbd", "keygen",
			"label","legend","li","link",
			"map","mark","menu","meta","meter",
			"nav", "noscript",
			"object","ol","optgroup","option","output",
			"p","param","pre","progress",
			"q",
			"rp", "rt", "ruby",
			"s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup",
			"table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track",
			"u", "ul",
			"video",
			"wbr"
		],
		addTag:function(to, tag){
			var element = document.createElement(tag);
			var method = Function('return function '+tag+'(a, b, c, d, e, f, g, h, i, j, k){\
				Syrup.Constructors.standard.call(this, \''+tag+'\', a, b, c, d, e, f, g, h, i, j, k);\
			}')();
			var primordial = Syrup.Prototypes.element;
			var prototype = Object.create(primordial);
			method.prototype = prototype;
			Object.keys(element).forEach(function(key){
				if (key === "style"){return;}
				if (prototype.hasOwnProperty(key)){
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
			var additions = Syrup.Additions;
			Object.keys(additions).forEach(function(key){
				var method = additions[key];
				prototype[key] = method;
			});
			to[tag] = method;
			Syrup.Classes[tag] = method;
			Syrup.Prototypes[tag] = prototype;
		},
		addClass:function(oClass, as){
			Syrup.Classes[as] = oClass;
		},
		generate:function(inside){
			inside = (inside || window || {});
			if (!Syrup.Classes.element){
				function element(){}
				element.prototype = Syrup.Prototypes.element;
				Syrup.Classes.element = element;
			}
			Syrup.tags.forEach(Syrup.addTag.bind(Syrup, inside));
		},
		Tools:{
			uid:function(){
				var now = new Date().valueOf();
				return now.toString(16)+"-"+parseInt(Math.random()*now).toString(16);
			},
			getType:function(u){
				var t = typeof u;
				if (t === "object"){
					if (u.constructor === Array){return "array"}
					if (u instanceof Element){return "element"}
					if (u instanceof Syrup.Classes.element){return "syrup"}
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
		Constructors:{
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
				var inline = new Syrup.Classes.inlineStyle(this);
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
		},
		Destructors:{
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
		},
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
					string:function(str){},
					html:function(str){},
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
					object:function(item){},
					string:function(name){
						var pool = events[name];
						if (!pool){
							events[name] = {};
							pool = events[name];
							var hook = function(a,b,c,d,e,f,g,h,i,j,k){
								Object.keys(pool).forEach(function(id){
									var method = pool[id];
									method(a,b,c,d,e,f,g,h,i,j,k);
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
							results.push(Syrup.Additions.on.call(self, item, args));
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
					boolean:function(value){
						var results = [];
						if (value){
							eachChild(function(child){
								results.push(child);
							});
						}
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
				Object.keys(document.createElement("FauxElement")).forEach(function(key){
					if (key === "style"){return;}
					addElementProperty(prototype, key);
				});
				return prototype;
			})()
		},
		Classes:{
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
				Object.keys(faux.style).forEach(function(key){
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