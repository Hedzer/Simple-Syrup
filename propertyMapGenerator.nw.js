		
(function(){
		var tags = [
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
		];
		var results = {};
		var uniques = {};
		var count = 0;
		var out = {};
		var lookup = [];
		tags.forEach(function(tag, index){
			var p = document.createElement(tag);
			var current = Object.getOwnPropertyNames(p);
			current.forEach(function(key){
				results[key] = (results[key] || []);
				results[key].push(index.toString(36));
			});
		});
		Object.keys(results).forEach(function(key){
			results[key] = results[key].join(",");
			var value = results[key];
			if (!uniques[value]){
				lookup.push(value);
				uniques[value] = count.toString(36);
				count++;
			}
			results[key] = uniques[value];
		});
		out.tags = tags;
		out.map = results;
		out.lookup = lookup;
		console.log(out);
		var fs = require('fs');
		fs.writeFile("compressedTagMap.txt", JSON.stringify(out), function(err) {
			if(err) {
				console.log(err);
			}
		});
		window.results = results;
})();