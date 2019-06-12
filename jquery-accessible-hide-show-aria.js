jQuery(document).ready(function($) {

    /*
     * jQuery simple and accessible hide-show system (collapsible regions), using ARIA
     * @version v1.9.1   
     * Website: https://a11y.nicolas-hoffmann.net/hide-show/
     * License MIT: https://github.com/nico3333fr/jquery-accessible-hide-show-aria/blob/master/LICENSE
     */
    // loading expand paragraphs
    // these are recommended settings by a11y experts. You may update to fulfill your needs, but be sure of what you’re doing.
    var attr_control = 'data-controls',
        attr_expanded = 'aria-expanded',
        attr_labelledby = 'data-labelledby',
        attr_hidden = 'data-hidden',
        $expandmore = $('.js-expandmore'),
        $body = $('body'),
        delay = 1500,
        hash = window.location.hash.replace("#", ""),
        multiexpandable = true,
        expand_all_text = 'Expand All',
        collapse_all_text = 'Collapse All';


    if ($expandmore.length) { // if there are at least one :)
        $expandmore.each(function(index_to_expand) {
            var $this = $(this),
                index_lisible = index_to_expand + 1,
                options = $this.data(),
                $hideshow_prefix_classes = typeof options.hideshowPrefixClass !== 'undefined' ? options.hideshowPrefixClass + '-' : '',
                not_all_expands = typeof options.notAllExpands !== 'undefined' ? true : false,
                $to_expand = $this.next(".js-to_expand"),
                $expandmore_text = $this.html();

            $this.html('<button type="button" class="' + $hideshow_prefix_classes + 'expandmore__button js-expandmore-button"' + ( not_all_expands ? 'data-not-all-expands="true"' : '' ) + '><span class="' + $hideshow_prefix_classes + 'expandmore__symbol" aria-hidden="true"></span>' + $expandmore_text + '</button>');
            var $button = $this.children('.js-expandmore-button');

            $to_expand.addClass($hideshow_prefix_classes + 'expandmore__to_expand').stop().delay(delay).queue(function() {
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
            
            if (not_all_expands) {
               $to_expand.attr('data-not-all-expands', 'true');
            }

            // quick tip to open (if it has class is-opened or if hash is in expand)
            if ($to_expand.hasClass('is-opened') || (hash !== "" && $to_expand.find($("#" + hash)).length)) {
                $button.addClass('is-opened').attr(attr_expanded, 'true');
                $to_expand.removeClass('is-opened').removeAttr(attr_hidden);
            }


        });


    }


    $body.on('click', '.js-expandmore-button', function(event) {
        var $this = $(this),
            $destination = $('#' + $this.attr(attr_control));

        if ($this.attr(attr_expanded) === 'false') {

            if (multiexpandable === false) {
                $('.js-expandmore-button').removeClass('is-opened').attr(attr_expanded, 'false');
                $('.js-to_expand').attr(attr_hidden, 'true');
            }

            $this.addClass('is-opened').attr(attr_expanded, 'true');
            $destination.removeAttr(attr_hidden);
        } else {
            $this.removeClass('is-opened').attr(attr_expanded, 'false');
            $destination.attr(attr_hidden, 'true');
        }

        event.preventDefault();

    });

    $body.on('click keydown', '.js-expandmore', function(event) {
        var $this = $(this),
            $target = $(event.target),
            $button_in = $this.find('.js-expandmore-button');

        if (!$target.is($button_in) && !$target.closest($button_in).length) {

            if (event.type === 'click') {
                $button_in.trigger('click');
                return false;
            }
            if (event.type === 'keydown' && (event.keyCode === 13 || event.keyCode === 32)) {
                $button_in.trigger('click');
                return false;
            }

        }


    });

    $body.on('click', '.js-expandmore-all', function(event) {
        var $this = $(this),
            options = $this.data(),
            is_expanded = $this.attr('data-expand'),
            txt_expand_all = typeof options.textExpandAll !== 'undefined' ? options.textExpandAll : expand_all_text,
            txt_collapse_all = typeof options.textCloseAll !== 'undefined' ? options.textCloseAll : collapse_all_text,
            $all_buttons = $('.js-expandmore-button:not([data-not-all-expands])'),
            $all_destinations = $('.js-to_expand:not([data-not-all-expands])');

        if (is_expanded === 'true') {
            $all_buttons.addClass('is-opened').attr(attr_expanded, 'true');
            $all_destinations.removeAttr(attr_hidden);
            $this.attr('data-expand', 'false').html(txt_collapse_all);
        } else {
            $all_buttons.removeClass('is-opened').attr(attr_expanded, 'false');
            $all_destinations.attr(attr_hidden, 'true');
            $this.attr('data-expand', 'true').html(txt_expand_all);
        }


    });


});
