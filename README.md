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
![Example Output](https://github.com/Hedzer/Simple-Syrup/blob/master/Examples/Github/example-output.png?raw=true)
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
* Add a syrup element to the current one. For example, `box.add(smallBox)` adds the `smallBox` instance into the `box` instance.  This also adds the DOM from one into the other.  Both box and smallBox are Syrup elements in this example.
* If passed a string will add a property with that string as its name. For example, `box.add("firstName")` adds the evented property `firstName` to `box`.  The following would then be possible:
```javascript
   box.add("firstName");
   box.firstName = "No Name";
   box.on("firstNamePropertyChanged", function(e){
       var detail = e.detail;
       console.log("Changed first name from ", detail.old, " to ", detail.new);
   });
   box.firstName = "Leeeeroy Jenkins!";  //TRIGGERS THE EVENT
   //The log generated by the event would read:
   //"Changed first name from No Name to Leeeeroy Jenkins!"
```
* If passed an HTML string will add the HTML elements represented in the string to the Syrup element.
* If passed an array will add each item accordingly (can be mixed types).
* If passed an already instantiated element (using `document.createElement`) it will add it.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; element.addTo(item)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The addTo method accepts one of two types of arguments, a Syrup element or an instantiated javascript element.
* If passed a Syrup element, the element currently running `addTo` will add itself into the element passed as the parameter. For example, `card.addTo(box)` adds `card` into `box`.
* If passed an already instantiated element will add itself to that. For example `box.addTo(document.body)` or 
```javascript
var box = new div();
var biggerBox = document.createElement("div");
box.addTo(biggerBox);
```

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; element.remove()
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Remove will eventually also be overloaded. For now it's only use is with no argument.  Running `element.remove()` will remove `element` from the DOM and any parent references made with the `parent.add(element).as(name)` chain. 

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; element.on(eventName, method)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This method has two parameters.  The `eventName` and the `method` parameter.  As can be guessed, this method creates an event listener for the event `eventName` and adds `method` to the list of functions to be triggered when the event occurs.  `eventName` can also be an array; this will bind `method` to all events `eventName[]`.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; element.trigger(eventName, data)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This method triggers event `eventName` with data `data`. For example:
```javascript
box.on("canMoonWalk", function(e){
    console.log(e.detail);
});
box.trigger("canMoonWalk", {yes:true});
```
The above event would trigger and console log `{yes:true}`.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; element.find(what)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This method is used for searching and accepts several types of parameters.
*  If passed a nothing, returns all children of the Syrup element as an array.
*  If passed a string will search for elements within this Syrup element using `querySelectorAll`.  This returns an array of matching `HTMLElements`.
*  If passed a regex value, the method will do a search through the 'innerText' of each added Syrup element.  It returns an array with matching elements.
*  If given an instantiated or un-instantiated Syrup element, the method will return a filtered list containing only children that are of that type or that have inherited that type.
*  If passed an array, will perform all searches within that array and return an array with each value containing an array of results corresponding to the query.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; element.with(method)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The with method runs a function under the context of the current Syrup element.  `with` also accepts an array, which will run all given methods using the `element` as context.

#### Styles
##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Assigning a stylesheet to a class
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The code below adds a green dotted border to all `login` elements.  Setting a new object reference to any instantated `login` class's `element.style.sheet` property will replace the stylesheet for all `login` elements.
```javascript
(function(){
    var style = {
        "[this]":{
            border:"dotted green 3px"
        }
    };
    class login extends card{
	    constructor(){
		    super();
		    this.class = "login";
            this.style.sheet = style;
	    }
    }
})();
```
The above code will generate a single stylesheet for the `login` class when the login class is instantiated. When all instances of the `login` class are removed, the generated stylesheet will be removed.
##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Media queries
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Media quieries are easy to add to a Syrup stylesheet.  Take a look at the code below:
```javascript
(function(){
    var style = {
        "[this]":{
            border:"dotted green 3px"
        },
        "@media print":{
            "[this]":{
                border:"none"
            }
        }
    };
    class login extends card{
	    constructor(){
		    super();
		    this.class = "login";
            this.style.sheet = style;
	    }
    }
})();
```
The code above paints the login element's border green, except when printed, where the border will not be shown.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Setting inline styles
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Inline styles can be individually or batch assigned.  Take a look at the example below to see both:
```javascript
(function(){
    class login extends card{
	    constructor(){
		    super();
		    this.class = "login";
            
            // INDIVIDUAL ASSIGNMENT
            this.style.width = "100px";
            this.style.height = "100px";
            this.style.border = "solid blue 3px";
            
            //BATCH ASSIGNMENT
            this.style.inline = {
                background:"yellow",
                borderRadius:"4px",
                float:"left"
            };
            
	    }
    }
})();
```
These can also be assigned to individual instances, and are recommended over stylesheets for changes that apply only to specific elements.

#### Events

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Adding an event listener
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Event listeners can be added using the `on` method provided by the Syrup element prototype. For example:
```javascript
var box = new div();
box.on("click", function(){
    console.log("The box was clicked");
});
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Event listeners can also be removed. The following code shows how to remove a specific event:
```javascript
var box = new div();
var handle = box.on("click", function(){
    console.log("The box was clicked");
    handle.remove();
    console.log("Removed event");
});
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In the example above, the `on` method returns the event handle and that handle is used to remove the event once it's triggered.  The event handle is an object that contains methods associated with the event bound by the `on` method.  Right now, it only contains the `remove()` function which removes the event.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The `on` method also accepts an array of strings as an event name.  This will bind all the events in the array to the same method.  When the `on` method is given an array it returns an array of handlers.
```javascript
var box = new div();
var handles = box.on(["click", "dblclick", "mouseup"], function(){
	console.log("One of the events was triggered");
    handles.forEach(function(handle){
        handle.remove();
    });
});
```
##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Triggering an event
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Events, including custom ones, can be triggered using the `trigger` method.  The `trigger` method requires an event name or array of names as its first argument and can optionally be given data to pass to the listeners at it's second argument.  Check out the following example:
```javascript
var box = new div();
box.on("click", function(){
	console.log("The box was clicked");
});
box.trigger("click");
```

#### Plugins

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Prototype Plugins
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Prototype modifications are a good way of targeting a particular Syrup class for modification. The following code shows how to alter the prototype of the `div` class to add the method `myNewMethod`:
```javascript
(function(window, Syrup){
    Syrup.Prototypes.div.myNewMethod = function(){
        console.log("Method added!");
    }
})(window, Syrup);
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This would add `myNewMethod` to all Syrup `div` elements and to any inherited elements as well.

If you're interested in adding to all elements, the `Syrup.Prototypes.element` object contains the root prototype for all Syrup elements.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Constructor & Destructor Plugins
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Syrup keeps a list of constructors that run when any element is instantiated (`new element()`) and a list of destructors that run when any element is (`element.removed()`).  Constructors and destructors apply to all elements, including those inherited from other elements.


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Here's how to add a global constructor:
```javascript
(function(window, Syrup){
  if (Syrup && Syrup.Constructors && !Syrup.Constructors.makeItRed){
      Syrup.Constructors.makeItRed = function(){
          this.style.background = "red";
      };
  }
})(window, Syrup);
```
The code above would make the background of all elements red.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; As a **warning**, try not to overwrite the `standard` constructor unless you're absolutely certain you'd like to change standard element instantiation.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sometimes a constructor can leave behind loose ends, such as a `setInterval` reference.  Destructors occur when an element is being removed with the `element.remove()` method and can be used to clean up these loose ends.  The `remove()` method, when triggered by a parent, also removes all children and triggers their respective destructors.  

Here's an example for adding a global destructor:
```javascript
(function(window, Syrup){
  if (Syrup && Syrup.Destructors && !Syrup.Destructors.stopBlinking){
      Syrup.Destructors.stopBlinking = function(){
          if (this.private){
              clearInterval(this.private.blinkHandle);
          }
      };
  }
})(window, Syrup);
```
In the code above, we remove a "previously added" interval.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; As a **warning**, try not to overwrite the `standard` destructor.  The `standard` destructor runs all other destructors before itself.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Global Property & Method Plugins
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Properties and methods can be added to all elements by modifying the `Syrup.Prototypes.element` object.  In the following example, I'll add a property and a method:
```javascript
(function(window, Syrup){
    Syrup.Prototypes.element.startBlinking = function(){
        console.log("Why God? why did we make things blink early on?");
    };
    Object.defineProperty(Syrup.Prototypes.element, "isBlinking", {
         set:function(value){
             //set the value
         },
         get:function(){
             //get the value
         }
    });
})(window, Syrup);
```

### ES6/Class concerns
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Syrup, by itself, contains no ES6 references.  Code produced using Syrup looks best using the `class` keyword and other ES6 only syntax.  To circumvent this I would highly suggest naming the files with ES6 references as *.es6.js and compiling them using [Babel](https://babeljs.io/) into an ES5 compatible version. Use ES6, practice it, but convert it to legacy code for production.
 
### Node-Webkit
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Simple Syrup was originally written for [Node-Webkit](http://nwjs.io/) projects and didn't require a property map to build the proxy element classes Syrup uses.  The `class` reserved word can also be used freely in Node-Webkit whereas this would require compilation to run in a browser.