### Simple Syrup, what is it?
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Simple Syrup is a JavaScript framework for creating modular, inheritable visual components.
### Why build another JS UI framework?
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I got tired of how ugly a lot of the other framework syntax looked.  I know it's a matter of opinion, but personally I found Angular, React, and other major frameworks to produce really hideous code. It's almost as if the functionality of the framework was developed without regard for the fact that someone was going to have to maintian the code after it was written.  I'm not saying I built a better framework than Google or Facebook, but it is something that I find more pleasing to write with.  I hope that at the very least, if you're just as dissatisfied as me, that you'll give writing your own a shot (or maybe help me) and possibly make the next big framework.
### Getting started
#### HTML
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
#### Creating a new element
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The following creates a `card` element.  This element is a div with three child divs (Header, Body, Footer).
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
#### Using the new element
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Here, we are creating a box with a solid black border and three cards inside.
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
				    var div = Syrup.Elements.div;
				    var card = Syrup.Elements.card;
				    //end shorthands

				    var box = new div();  //create a new div instance
				    box.style.inline = {  //set the inline style
				    	border:"solid",
				    	padding:"10px"
				    };
				    box
				    	.add(new card())  //add a card
				    	.as("RedCard")    //call it RedCard
				    	.with(function(){
				    		//setting an individual style
				    		this.style.border = "solid red";
				    	});
				    box
				    	.add(new card())  //add a card
				    	.as("BlueCard")   //call it BlueCard
				    	.with(function(){
				    		this.style.border = "solid blue";
				    	});
				    box
				    	.add(new card())  //add a card
				    	.as("YellowCard")    //call it YellowCard
				    	.with(function(){
				    		this.style.border = "solid yellow";
				    	});

				    //going deep to change details
				    box.RedCard.Header.innerText = "I'm Red";
				    box.BlueCard.Header.innerText = "I'm Blue";
				    box.YellowCard.Header.innerText = "I'm Yellow";

				    box.addTo(document.body); //add it to body
				})(window, Syrup)
			</script>
		</body>
</html>
```
#### Rendered result
![Example Output](/Examples/Github/example-output.png)
#### DOM result
```html
<div div style="border: thick; padding: 10px;">
	<div div card style="border: solid red;">
		<div div class="Header card-element">I'm Red</div>
		<div div class="Body card-element"></div>
		<div div class="Footer card-element"></div>
	</div>
	<div div card style="border: solid blue;">
		<div div class="Header card-element">I'm Blue</div>
		<div div class="Body card-element"></div>
		<div div class="Footer card-element"></div>
	</div>
	<div div card style="border: solid yellow;">
		<div div class="Header card-element">I'm Yellow</div>
		<div div class="Body card-element"></div>
		<div div class="Footer card-element"></div>
	</div>
</div>
```
### Basic usage
#### Inheritance
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Inheritance is heavily used by the framework.  Here's an example of an element based on the previous `card` element.
```javascript
class login extends card{
	constructor(){
		super();
		this.class = "login";
	}
}
```
That's it! you can now add custom properties, methods, events or elements to it to differentiate it from the card element.
#### Inherited properties & methods
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Almost all elements have a corresponding Syrup class, so just as you can do `new div()` you can also use `new table()` or `new ul()`, etc.
<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; All element classes come with the same properties and methods you'd have access to when using an instantiated element (`document.createElement()`).  The only addition is that modifying properties triggers events, so using:
```javascript
   var box = new div();
   box.on("idPropertyChanged", function(e){
       console.log("box.id has been changed");
   });
```
Would allow for the `id` property to be monitored for change. <br><br> Inline styles are also monitored for change.  These trigger "[style name]StyleChanged", e.g. `borderStyleChanged` would trigger when `box.style.border = "solid green"` is run.
#### Added properties & methods
##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; element.add(item)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The add method can do many things.  It can:
* Add a syrup element to the current one.
* If passed a string will add a property with that string as its name.
* If passed an HTML string will add it as HTML.
* If passed an array will add each item accordingly (can be mixed types).
* If passed an already instantiated element (using `document.createElement`) it will add it.
##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; element.addTo(item)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The addTo method accepts one of two types of arguments, a Syrup element or an instantiated javascript element.
* If passed a Syrup element will add itself to that element.
* If passed an already instantiated element will add itself to that. This includes `document.body`, for example.
##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; element.remove()
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Remove will eventually also be overloaded. For now it's only use is with no argument.  Running `element.remove()` will remove `element` from the DOM and any parent references made with the `parent.add(element).as(name)` chain. 
##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; element.on(eventName, method)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This method has two parameters.  The `eventName` and the `method` parameter.  As can be guessed, this method creates an event listener for the event `eventName` and adds `method` to the list of functions to be triggered when the event occurs.  `eventName` can also be an array; this will bind `method` to all events `eventName[]`.
##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; element.trigger(eventName, data)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This method triggers event `eventName` with data `data`.
##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; element.find(what)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This method is used for searching and accepts several types of parameters.
*  If passed a boolean, returns all children of the Syrup element as an array.
*  If passed a string will search for elements within this Syrup element using `querySelectorAll`.  This returns an array of matching `HTMLElements`.
*  If passed a regex value, the method will do a search through the 'innerText' of each added Syrup element.  It returns an array with matching elements.
*  If given an instantiated or un-instantiated Syrup element, the method will return a filtered list containing only children that are of that type or that have inherited that type.
*  If passed an array, will perform all searches within that array and return an array with each value containing an array of results corresponding to the query.
##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; element.with(method)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The with method runs a function under the context of the current Syrup element.  `with` also accepts an array, which will run all given methods using the `element` as context.
#### Events
##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Adding an event listener
##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Triggering an event

#### Plugins
### ES6/Class concerns
### Node-Webkit