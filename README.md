# BigText Makes Text Big 

A meteor package of the Jquery plugin [bigtext.js](https://github.com/zachleat/BigText) 

* Read the [original blog post](http://www.zachleat.com/web/bigtext-makes-text-big/)
* Play around on the [demo](http://zachleat.github.io/BigText/demo/wizard.html)
* Watch the [video](http://www.youtube.com/watch?v=OuqB6e6NPRM)

## Installation

    meteor add projik:bigtext

## Requirements

1. Meteor
1. A block level parent element. BigText will force all children to be block level as well.

## Learn More

BigText works best on browsers that support [subpixel font scaling](http://status.modern.ie/subpixelfontscaling). In order to best serve sizes to all browsers, BigText will adjust `word-spacing` as well as `font-size`.

## Examples

### Simple Example

    <template name="myTemplate">
      <div id="bigtext">
        <span>BIGTEXT</span>
        <span>Makes Text Big</span>
      </div>
    </template>

    Template.myTemplate.onRendered(function() {
        $('#bigtext').bigtext();
    });

### Better, Progressive Enhancement-Based Example

Use `display: inline` children (like a `span`) so the text will flow correctly if BigText doesn’t run.

    <template name="myTemplate">
      <div id="bigtext">
        <span>BIGTEXT</span>
        <span>Makes Text Big</span>
      </div>
    </template>

    Template.myTemplate.onRendered(function() {
        // Only BigText on “new-ish” browsers
        if( 'querySelectorAll' in document ) {
          $('#bigtext').bigtext();    
        }
    });

### Using a List (ordered/unordered)

    <template name="myTemplate">
      <ol id="bigtext">
        <li>BIGTEXT</li>
        <li>Makes Text Big</li>
      </ol>
    </template>

    Template.myTemplate.onRendered(function() {
        $('#bigtext').bigtext();
    });

### Restrict to a subset of children

#### Opt-in children with JS

    <template name="myTemplate">
      <div id="bigtext">
        <p>BIGTEXT</p>
        <p>Makes Text Big</p>
      </div>
    </template>

    Template.myTemplate.onRendered(function() {
        $('#bigtext').bigtext({
            childSelector: '> p'
        });
    });

#### Opt-out lines using markup

    <template name="myTemplate">
      <ol id="bigtext">
        <li>BIGTEXT</li>
        <li class="bigtext-exempt">Makes Text Big</li>
      </ol>
    </template>

    Template.myTemplate.onRendered(function() {
        $('#bigtext').bigtext();
    });


### Mix and Match Fonts

    <template name="myTemplate">
      <ol id="bigtext">
        <li>
            <span style="font-family: sans-serif">BIG</span>
            <span style="font-family: serif">TEXT</span>
        </li>
        <li>Makes Text Big</li>
      </ol>
    </template>

    Template.myTemplate.onRendered(function() {
        $('#bigtext').bigtext();
    });

Works also with `letter-spacing`, `word-spacing`, and `text-transform`.

### Change the default max font size

    <template name="myTemplate">
      <div id="bigtext">
          <span>BIG</span><!-- the shorter the line, the larger the size required --> 
      </div>
    </template>

    Template.myTemplate.onRendered(function() {
    $('#bigtext').bigtext({
        maxfontsize: 60 // default is 528 (in px)
    });
    });

### Adding a default min font size

    <template name="myTemplate">
      <div id="bigtext">
          <span>This is a super long line that will probably be resized to epically small proportions. We need a minimum font size!</span>
      </div>
    </template>

    Template.myTemplate.onRendered(function() {
    $('#bigtext').bigtext({
        minfontsize: 16 // default is null
    });
    });

### Is your text static and unchanging?

See [Paravel's FitText plugin](http://fittextjs.com/). Curious how the two plugins compare? I've written a full [comparison between FitText and BigText](http://www.zachleat.com/web/fittext-and-bigtext/).

## Extra Features

### Re-BigText on Resize (Responsive BigText)

As of 0.1.8, BigText implements its own debounced resize event.

### Debug Mode

BigText uses an off-canvas detached node to improve performance when sizing. Setting `DEBUG_MODE` to true will leave this detached node on the canvas for visual inspection for problem resolution.

    BigText.DEBUG_MODE = true;

## Common Problems

### Lines Wrapping Pre-BigText
The starting font-size must be small enough to guarantee that each individual line is not wrapping pre-BigText. If the line is too long, BigText will not size it correctly.
    


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
