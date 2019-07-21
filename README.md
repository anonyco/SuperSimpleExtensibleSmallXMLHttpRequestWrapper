# SuperSimpleExtensibleSmallXMLHttpRequestWrapper
The ULTIMATE super small, simple, light, fast, XMLHttpRequest wrapper. The documentation is as follows:

### How To use / Install

#### From A Dropbox Server

Just simply put this into your `<head>` (or at least somewhere before the code that uses it).
```Html
<script src="https://dl.dropboxusercontent.com/s/y9muahvy3m8bsp6/superxhr.min.js?dl=0"></script>
```

#### From A Local Copy
If the drop box link broke or you simply don't want to use dropbox, then you can download superxhr.min.js, place it in the same directory (folder) as your HTML file, and put this into your `<head>` (or at least somewhere before the code that uses it).
```Html
<script src="superxhr.min.js"></script>
```

Then, Super XHR JS will set `window.HTTP` to the XHRing function it creates.

### Documentation

To use Super XHR JS, simply pass an object to `window.HTTP` with all the properties going to the XMLHttpRequest object, and some special properties listed below effecting the behavior.

```Javascript
var XHRobj = HTTP({
    URL: "/path/to/file",	// the relative URL to the file
	USER: "username",		// the username sent to the server when performing the request.
	PASSWORD: "password",	// the username sent to the server when performing the request.
    METHOD: "GET",			// Any valid HTTP method
    POST: "post data goes here if METHOD is POST",	// Post data (if the selected METHOD supports post data)
    SYNC: false,			// pass true for synchronous transfer (which is not reccomended)
	// Super XHR JS also supports all standard and future properties of requests:
	onreadystatechange: function(evt){
		var readyState = evt.target.readyState;
		// ... 
	},
	timeout: 2500, // Timeout after 2.5 seconds
	setRequestHeader: [["Content-Type", "text/html"], ['Range', 'bytes=100-200']]
	// There are many more methods not listed here to keep the above code nice and short. See
	// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/ for a complete list.
});
```

Then, after you have sent the request once, you can keep on reusing it with the awesome `XHRobj.resend(new_url, new_post_data)` function to keep on reusing the same setup like so:

```Javascript
XHRobj.resend("/new/path/to/file", "new post data");
```
Next, looking at the above example code, notice setRequestHeader. The format for this may look rather foreign, but I assure you it is incredibly simple. Basicly. when you set a property of the XMLHttpRequest object that is a function, instead of the new value being set there, the new value is instead used as an array of arrays whereby each sub array is `Function.prototype.apply`ed to the XMLHttpRequest object. So, from the example above:


```Javascript
var XHRobj = HTTP({
	// ...
	setRequestHeader: [["Content-Type", "text/html"], ['Range', 'bytes=100-200'], ["Foo", "Bar"]]
	// ...
});
```

The vanilla javascript equivelent of this is as listed below:


```Javascript
var k = new XMLHttpRequest();
k.setRequestHeader("Content-Type", "text/html");
k.setRequestHeader('Range', 'bytes=100-200');
k.setRequestHeader("Foo", "Bar");
```

Likewise, this setup can be applied to any function on the XMLHttpRequest interface like so:

```Javascript
var XHRobj = HTTP({
	// ...
	overrideMimeType: [["text/html"]],
	addEventListener: [
		["load", function(x){
			// ...
		}],
		["error", function(x){
			// ...
		}]
	]
	// ...
});
```









