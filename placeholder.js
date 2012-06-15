(function($) {
    $.fn.placeHolder = function () {

        var placeHolderSupport = function(){
            var i = document.createElement('input');
            return ('placeholder' in i);
        };
        
        if (placeHolderSupport())
        {
          return;
        }
        
        $(this).each(function() {
          var input = $(this);
          var placeholderText = input.attr('placeholder');
          
          if (placeholderText.length == 0 || input.hasClass('placeholder-input'))
          {
            return;
          }
          
          input.addClass('placeholder-input');
          input.css('z-index', 100);
		  
          // Create the placeholder element.
          var spn = $(document.createElement('span'));
          spn.html(placeholderText);
          spn.addClass("placeholder");
          spn.css('position', 'absolute');
          spn.css('top', '0');
          spn.css('left', '0');
          spn.css('overflow', 'hidden');
          spn.css('width', input.width());
          spn.css('white-space', 'nowrap');
          spn.css('color', '#999');
		  spn.css('z-index', 1);
          
          // Create the placeholder container.
          var spnContainer = $(document.createElement('span'));
          spnContainer.addClass("placeholder-container");
          spnContainer.css('position', 'relative');
          
          // Add the input and placeholder element to the DOM.
          var parentContainer =  input.parent();
          $(spnContainer).append(input, spn);
          
          $(parentContainer).append(spnContainer);
          
          spn.click(function() { input.focus(); });
          input.focus(function() { hidePlaceHolder(spnContainer); });
          
          input.change(function() { showPlaceHolder(spnContainer); });
          input.focusout(function() { showPlaceHolder(spnContainer); });
          
        });
        
        var hidePlaceHolder = function(placeHolderContainer) {
          var placeholder = $(placeHolderContainer.find('.placeholder')[0]);
          var input = $(placeHolderContainer.find('.placeholder-input')[0]);
          placeholder.hide();
        }
        
        var showPlaceHolder = function(placeHolderContainer) {
          var placeholder = $(placeHolderContainer.find('.placeholder')[0]);
          var input = $(placeHolderContainer.find('.placeholder-input')[0]);
          if (input.val().length == 0) placeholder.show();
        }
        

        
    }
})(jQuery);