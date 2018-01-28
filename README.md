jQuery accessible hide/show using ARIA
=================================

A simple jQuery code to provide accessible hide/show system using ARIA.

Full demo is here: https://a11y.nicolas-hoffmann.net/hide-show/

This simple script transforms this simple piece of code:

```html
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

Keyboard navigation is supported, based on ARIA DP (http://heydonworks.com/practical_aria_examples/#progressive-collapsibles && http://www.oaa-accessibility.org/examplep/tabpanel1/).

### Hide/Show all

It is possible to hide/show all with a button. All you have to do is wrapping each group with the class "js-collapse-group". You may set the button yourself if you prefer. Examples:

```html
    <div class="js-collapse-group">
      <h3 class="js-expandmore">Content 4</h3>
      <div class="js-to_expand">
      <p>Lorem ipsum</p>
      </div>
      <h3 class="js-expandmore">Content 5</h3>
      <div class="js-to_expand">
        <p>Sic dolor</p>
      </div>
    </div>

    <div class="js-collapse-group">
      <button type="button" class="js-expandmore-all" data-open-text="Read all answers" data-close-text="Hide answers">Read all answers</button>
      <h3 class="js-expandmore">Question 1</h3>
      <div class="js-to_expand">
        <p>Answer 1.</p>
      </div>
      <h3 class="js-expandmore">Question 2</h3>
      <div class="js-to_expand is-opened">
        <p>Answer 2 (is opened by default).</p>
      </div>
    </div>
```

## Requirements

- jQuery (others smaller libraries should be ok, but didn't test for the moment)
- a small piece of CSS `` .js-to_expand[data-hidden=true] { display: none; } ``
- or you may use ```npm i jquery-accessible-hide-show-aria```

## Optionnal

You may set up if you're using aria or data attributes.

For CSS, you may add:

```
.expandmore__button {
  background: none;
  font-size: inherit;
  color: inherit;
}

.expandmore__button[aria-expanded=false] > .expandmore__symbol:before,
.expandmore__button[data-expanded=false] > .expandmore__symbol:before{
  content : '+ ';
}
.expandmore__button[aria-expanded=true] > .expandmore__symbol:before,
.expandmore__button[data-expanded=true] > .expandmore__symbol:before{
  content : '− ';
}
```

## Examples
 
This jQuery plugin __doesn't style anything__, styles can be added using other classes.

A demo page can be found here: https://a11y.nicolas-hoffmann.net/hide-show/

Enjoy.

## Vanilla version

This script exists also in a Vanilla-JS version, have a look at [Van11y hide-show script](https://van11y.net/accessible-hide-show/).

<img src="https://www.nicolas-hoffmann.net/bordel/chuck-norris1.jpg" alt="Chuck Norris approved this" />

P.S: this plugin is in [MIT license](https://github.com/nico3333fr/jquery-accessible-tabs-aria/blob/master/LICENSE). It couldn't be done without the precious help of @ScreenFeedFr, @goetsu, @johan_ramon, @accesbilis, @Kozlika, @anneCav and @romaingervois.
