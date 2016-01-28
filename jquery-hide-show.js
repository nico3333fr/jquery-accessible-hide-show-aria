$(document).ready(function(){

   /*
    * jQuery simple and accessible hide-show system (collapsible regions), using ARIA
    * Website: http://a11y.nicolas-hoffmann.net/hide-show/
    * License MIT: https://github.com/nico3333fr/jquery-accessible-hide-show-aria/blob/master/LICENSE
    */
   // loading expand paragraphs
   var use_aria = true,
       attr_control = 'aria-controls',
       attr_expanded = 'aria-expanded',
       attr_labelledby = 'aria-labelledby',
       attr_hidden = 'aria-hidden',
       $expandmore = $('.js-expandmore'),
       $to_expand = $('.js-to_expand'),
       delay = 1500;

   // just parameter use_aria or set yourself the settings above if you know exactly what you need to use as attributes
   if ( use_aria === false ){
       attr_control = 'data-controls';
       attr_expanded = 'data-expanded';
       attr_labelledby = 'data-labelledby';
       attr_hidden = 'data-hidden';
      }
	  
   

   if ( $expandmore.length  &&  $to_expand.length ) { // if there are at least one :)
      $expandmore.each( function(index_to_expand) {
          var $this = $(this) ,
              index_lisible = index_to_expand+1,
              options = $this.data(),
              $hideshow_prefix_classes = typeof options.hideshowPrefixClass !== 'undefined' ? options.hideshowPrefixClass + '-' : '',
              $to_expand = $this.next(".js-to_expand"),
              $expandmore_text = $this.html();
          
          $this.html( '<button class="' + $hideshow_prefix_classes + 'expandmore__button js-expandmore-button">' + $expandmore_text + '</button>' );
          $button = $this.children('.js-expandmore-button');
          
          $to_expand.addClass( $hideshow_prefix_classes + 'expandmore__to_expand' ).stop().delay( delay ).queue( function() {
            var $this = $(this); 
            if ($this.hasClass('js-first_load')) {
               $this.removeClass('js-first_load');
            }
          });
          
          $button.attr('id', 'label_expand_' + index_lisible);
          $button.attr(attr_control, 'expand_' + index_lisible);
          $button.attr(attr_expanded, 'false');

          $to_expand.attr('id', 'expand_' + index_lisible);
          $to_expand.attr(attr_hidden, 'true');
          $to_expand.attr(attr_labelledby, 'label_expand_' + index_lisible);
		  
          // quick tip to open
          if ($to_expand.hasClass('is-opened') ){
             $button.addClass('is-opened').attr(attr_expanded, 'true');
             $to_expand.removeClass('is-opened').removeAttr(attr_hidden);
          }

      });
       
      
      $( '.js-expandmore-button' ).on( 'click', function( event ) {
         var $this = $(this),
             $destination = $( '#' + $this.attr(attr_control) );
         
         if ($this.attr(attr_expanded) === 'false') {
             $this.addClass('is-opened').attr(attr_expanded, 'true');
             $destination.removeAttr(attr_hidden);
         } 
         else {
              $this.removeClass('is-opened').attr(attr_expanded, 'false');
              $destination.attr(attr_hidden, 'true');
              }
         
         event.preventDefault();
         
      });
	  
      $expandmore.on( 'click keydown', function( event ) {
         var $this = $(this),
             $target = $(event.target),
             $button_in = $this.find( '.js-expandmore-button' );
             
         if ( !$target.is($button_in) ) {
             
             if ( event.type == 'click' ){
                 $button_in.trigger('click');
                 return false;
                 }
             if ( event.type == 'keydown' && (event.keyCode==13 || event.keyCode==32 )  ){
                 $button_in.trigger('click');
                 return false;
                 }
             
             } 
         
         
      });
       

   
   }
 
  
});
