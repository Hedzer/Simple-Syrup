### Simple Syrup
    Simple Syrup is a JavaScript framework for creating modular, inheritable visual components.

### Getting Started
###### HTML
```html
<!DOCTYPE html>
<html>
	<head>
        <script src="syrup.js"></script>
    </head>
		<body>
		</body>
</html>
```
###### Creating A New Element
The following creates a "card" element.  This element is a div with three child divs (Header, Body, Footer).
```javascript
(function(window, Syrup){
    //let's save this as card.es6.js
	'use strict';

    //shorthands
    var div = Syrup.Elements.div;
    //end shorthands

	//define the style sheet
	var style = {
		"[this]":{
			position:"relative",
			width:"100px",
			height:"100px",
			border:"solid 2px",
			borderRadius:"4px" //can also be "border-radius"
		},
		"[this] > .card-element":{
			position:"relative",
			width:"100%",
			height:"auto"
		},
		"[this] > .Header":{
			textAlign:"center",
			"border-bottom":"solid 1px gainsboro"
		}
	};
    
	//define the class
	class card extends div{
		constructor(){
			//standard calls
			super();
			var self = this;
			this.class = "card";
			this.style.sheet = style; //produces a stylesheet if there isn't one
			this.style.borderColor = "green"; //writes to the inline style
			this
				.add(new div())
				.as("Header")
				.with(function(){
					this.classList.add("Header", "card-element");
					this.innerText = "Header";
				});
			this
				.add(new div())
				.as("Body")
				.with(function(){
					this.classList.add("Body", "card-element");
				});
			this
				.add(new div())
				.as("Footer")
				.with(function(){
					this.classList.add("Footer", "card-element");
				});
		}
	}
	Syrup.Elements.card = card;
})(window, Syrup);
```
###### Using The New Element
```html
<!DOCTYPE html>
<html>
	<head>
		<script src="syrup.js"></script>
		<script src="card.es6.js"></script>
	</head>
		<body>
			<script type="text/javascript">
			(function(window, Syrup){
				'use strict';

			    //shorthands
			    var card = Syrup.Elements.card;
			    //end shorthands

			    var example = new card(); //create a new instance
			    example.addTo(document.body); //add it to body

			})(window, Syrup)
			</script>
		</body>
</html>
```
###### Rendered Result
![Example Output](/Examples/Github/example-output.png)
###### DOM Result
```html
<div div="" card="" style="border-color: green;">
	<div div="" class="Header card-element">Header</div>
	<div div="" class="Body card-element"></div>
	<div div="" class="Footer card-element"></div>
</div>
```