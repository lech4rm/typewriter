# Typewriter (A simple lightweight jQuery plugin to emulate typewriter text effect)

## Version
`1.0.0`

## Usage
This plugin requires jQuery.
Add the following CDN after including jQuery in your project

```
<script src="https://cdn.rawgit.com/lech4rm/typewriter/4e71c107/dist/typewriter.min.js"></script>

<! -- optional CSS blinking effect -->

<link rel="stylesheet" href="https://cdn.rawgit.com/lech4rm/typewriter/4e71c107/dist/blinker.css"></link>

<script>
// call the function to the required element and pass in the textType

$(element).typewriter({ text : 'Some dank text!' })
</script>
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

'`npm install && gulp build` ( if you only need to minify and transpile app.js)
