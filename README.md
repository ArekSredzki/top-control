# Top Control
A lightweight Vanilla JS based go-to-top control.

## Installation
You can install `top-control` from bower:

```
$ bower install top-control
```

## Usage
top-control is a very minimalistic library, all you have to do is have an element with the id `top-control`.

### Example
Please note that this example uses a fair amount of styling and has dependencies on font awesome.

```html
<div id="top-control" title="Scroll Back to Top">
  <i class="fa fa-angle-up"></i>
</div>
```

```css
#top-control {
  background: #666;
  color: #fff;
  text-align: center;
  position: fixed;
  bottom: 5px;
  right: 5px;
  opacity: 0;
  cursor: pointer;
  display: inline-block;
  width: 35px;
  height: 35px;
  border: none;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  -webkit-transition: opacity 0.4s ease-in-out;
  -moz-transition: opacity 0.4s ease-in-out;
  -ms-transition: opacity 0.4s ease-in-out;
  -o-transition: opacity 0.4s ease-in-out;
  transition: opacity 0.4s ease-in-out;
  z-index: 30;
}
#top-control.active {
  opacity: 1;
}
#top-control:hover {
  background: #888;
}
#top-control .fa {
  position: relative;
  top: 3px;
  font-size: 25px;
}
```

#### What it looks like
![Example Image](/example/img.png?raw=true)
