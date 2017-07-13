# Typewriter (A simple lightweight jQuery plugin to emulate typewriter text effect)

## Version
`1.0.0`

## Demo
Click [here](https://plnkr.co/edit/Fj7vmPgqxE8aS5cQZWeZ?p=preview) to view a plunkr.

## Usage
This plugin requires jQuery.
Add the following CDN after including jQuery in your project


`<script src="https://cdn.rawgit.com/lech4rm/typewriter/4e71c107/dist/typewriter.min.js"></script>`

Optional CSS blinking effect css

`<link rel="stylesheet" href="https://cdn.rawgit.com/lech4rm/typewriter/4e71c107/dist/blinker.css"></link>`

Add the typewriter method to your element and pass in an object with the text property

```javascript
$(element).typewriter({ text : 'Some dank text!' })        // check below for additional parameters
```

### Options

You can pass in the following options along with the text property as a parameter to the typewriter function.

```javascript

// Default options

$(element).typewriter({ text : 'Default text',     
                        speed : 100,                  // speed of each character in milliseconds
                        loop : true,                  // can be set to false to disable looping
                        loopDelay : 1000,             // delay between the looping iterations in ms
                        cursor : true,                // can be set to false to disable the trailing cursor
                        cursorType : '_',             // takes a string which represents the cursor type
                        hideCursorAfterTyping : false // can be set to true if you need the cursor to disappear after typing out the text
})
```
### Development

You can clone this repository and run the following commands to do some dev stuff with browsersync running on port 3000


You need npm and gulp-cli for this to work

`npm install && gulp`

or

`npm install && gulp build` ( if you only need to minify and transpile app.js)
