$(document).ready(function(){

   /*
    * jQuery simple and accessible hide-show system (collapsible regions), using ARIA
    * Website: http://a11y.nicolas-hoffmann.net/hide-show/
    * License MIT: https://github.com/nico3333fr/jquery-accessible-hide-show-aria/blob/master/LICENSE
    */
   // loading expand paragraphs
   if ( $('.js-expandmore').length  &&  $( ".js-to_expand" ).length ) { // if there are at least one :)
      $('.js-expandmore' ).each( function(index_to_expand) {
          var $this = $(this) ,
              index_lisible = index_to_expand+1,
              options = $this.data(),
              $hideshow_prefix_classes = typeof options.hideshowPrefixClass !== 'undefined' ? options.hideshowPrefixClass + '-' : '',
              $to_expand = $this.next(".js-to_expand"),
              $expandmore_text = $this.html();
          
          $this.html( '<button class="' + $hideshow_prefix_classes + 'expandmore__button js-expandmore-button">' + $expandmore_text + '</button>' );
          $button = $this.children('.js-expandmore-button');
          
          $to_expand.addClass( $hideshow_prefix_classes + 'expandmore__to_expand' );
          
          $button.attr({
                  'id' : 'label_expand_' + index_lisible,
                  'aria-controls': 'expand_' + index_lisible,
                  'aria-expanded': 'false'
                });
          $to_expand.attr({
                  'id' : 'expand_' + index_lisible,
                  'aria-hidden': 'true',
                  'aria-labelledby': 'label_expand_' + index_lisible
                });
          // quick tip to open
          if ($to_expand.hasClass('is-opened') ){
             $button.addClass('is-opened').attr('aria-expanded', 'true');
             $to_expand.removeClass('is-opened').removeAttr('aria-hidden');
          }

      });
       
       
      $( '.js-expandmore-button' ).on( 'click', function( event ) {
         var $this = $(this),
             $destination = $( '#' + $this.attr('aria-controls') );
         
         if ($this.attr('aria-expanded') === 'false') {
             $this.addClass('is-opened').attr('aria-expanded', 'true');
             $destination.removeAttr('aria-hidden');
         } 
         else {
              $this.removeClass('is-opened').attr('aria-expanded', 'false');
              $destination.attr('aria-hidden', 'true');
              }
         
         event.preventDefault();
         
      });
       

   
   }
 
  
});
