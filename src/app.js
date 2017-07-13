


(function($){

  $.fn.typewriter = function (options) {

    /*

    Default plugin options

    */

    let defaultSettings = $.extend({
          text : 'Default text',
          speed : 100,
          loop : true,
          loopDelay : 1000,
          cursor : true,
          cursorType : '_',
          hideCursorAfterTyping : false
        }, options )

    // DANK MAIN FUNCTION

    function main (element){

      // Defining some dank globals

      let i = 0
      let textArray = defaultSettings.text.split('')
      element.append('<span class="textSpan"></span>')
      let textSpan = element.find('.textSpan')


      // Adding cursor animation span
      if(defaultSettings.cursor){
        $(`<span class="blinker">${defaultSettings.cursorType}</span>`).insertAfter(textSpan)
      }


      // Function to append char ( recursive func to loop over the array )
      function appendText(arr, delay){
        textSpan.append(arr[i]);
        i++;
        if(i < arr.length){
          setTimeout(() => {
            appendText(arr , delay);
          } , delay);
        }
      }

      // func to text after typing out the string

      function reset (){
        textSpan.html('')
        if(defaultSettings.cursorHideOnEnd){
          element.find('.blinker').css("display", "inline-block")
        }
        return i = 0;
      }

      // function to execute one instance of typing

      function execTextType (resetFunc) {
        resetFunc()
        appendText(textArray, defaultSettings.speed)
      }

      // check if the typing needs to be looped
      if(defaultSettings.loop){
        execTextType(reset)

        // This timeout func removed the cursor after the end of typing if the user wishes to do so by passing ({hideCursorAfterTyping :  true}) prop in the options

        setTimeout(() => {
          if(defaultSettings.cursorHideOnEnd){
            element.find('.blinker').css("display", "none")
          }
        }, defaultSettings.speed * textArray.length)    // the timing here is the time taken to type out all the chars

        // Looping interval

        setInterval(() => {
          execTextType(reset)
        }, (defaultSettings.speed * textArray.length) + defaultSettings.loopDelay)  // The interval has to be the time taken for typing out all chars which is the product of speed and the length of the array plus the loop delay
      }

      else{
        execTextType(reset)

        // Timeout function for removing the blinker same as above

        setTimeout(() => {
          if(defaultSettings.cursorHideOnEnd){
            element.find('.blinker').css("display", "none")
          }
        }, defaultSettings.speed * textArray.length)  // the timing here is the time taken to type out all the chars
      }
    }


    // HAIL HYDRA
    main(this)




  }
})(jQuery)
