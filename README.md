# placeholder.js

A small jQuery plugin that is used to add placeholder functionality 
for browsers that do not support the html5 placeholder attribute.

The plugin will test if the current browser supports the placeholder attribute.
If the browser supports placeholder, then this script does nothing.
If the browser does not support placeholder, then this script will:
  * wrap the input/textarea element within a span element.
  * add a child span element that contains the placeholder text.
  * positions the placeholder span element over the input/textarea element.
  * hooks into events in order to show/hide the placeholder span.

## Usage

  $('input[placeholder], textarea[placeholder]').placeHolder();
  
Runs the plugin for each input/textarea element with a placeholder attribute.


