Jquery accessible hide/show using ARIA
=================================

A simple jQuery code to provide accessible hide/show system using ARIA

===========================

This simple script transforms this simple piece of code:

```
    <h2 class="js-expandmore">
    	Content 1
    </h2> 
    <div class="js-to_expand">here a wonderful hidden content about content 1</div>
    <br /><br /><br />
    <h2 class="js-expandmore">
    	Content 2
    </h2> 
    <div class="js-to_expand is-opened">Lorem <a href="#">fdsfdsfds</a> ipsum about content 2 (opened by default)</div>
    <br /><br /><br />
    <h2 class="js-expandmore">Content 3 </h2>
    <div class="js-to_expand">here a wonderful hidden content about content 3</div>
```

into shiny accessible hide/show by adding ARIA attributes. 

Keyboard navigation is supported, based on ARIA DP (http://heydonworks.com/practical_aria_examples/#progressive-collapsibles && http://www.oaa-accessibility.org/examplep/tabpanel1/):

## Requirements

- jQuery (others smaller libraries should be ok, but didn't test for the moment)
- a small piece of CSS `` .js-to_expand[aria-hidden=true] { display: none; } ``

## Optionnal

You can add:

```
.expandmore__button {
  background: none;
  font-size: inherit;
  color: inherit;
}

.expandmore__button[aria-expanded=false]:before {
  content : '+ ';
}
.expandmore__button[aria-expanded=true]:before {
  content : '- ';
}
```

## Examples
 
This jQuery plugin __doesn't style anything__, styles can be added using other classes.

A example and demo page can be found here: http://a11y.nicolas-hoffmann.net/hide-show/

Enjoy.

<img src="http://www.nicolas-hoffmann.net/bordel/chuck-norris1.jpg" alt="Chuck Norris approved this" />

P.S: this plugin is in [MIT license](https://github.com/nico3333fr/jquery-accessible-tabs-aria/blob/master/LICENSE). It couldn't be done without the precious help of @ScreenFeedFr, @goetsu, @johan_ramon, @accesbilis, @Kozlika and @romaingervois.
