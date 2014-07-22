socicon.js
==========

Socicon.js - the easiest way to create and customize social icons

#Add Socicon to your project

##Installation

Using [Bower] [bower]

```bash
bower install socicon --save-dev
```
###Manual installation

Download and extract the [latest zip package][bower] from this repositiory and copy the two files `source/js/socicon.min.js` and `sourse/css/socicon.min.css` into your project. Then include one of them into your <head> as above.

### What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
socicon/
├── css/
│   ├── socicon.css
│   └── socicon.min.css
├── js/
│   ├── socicon.js
│   └── socicon.min.js
└── fonts/
    ├── socicon-webfont.eot
    ├── socicon-webfont.svg
    ├── socicon-webfont.ttf
    └── socicon-webfont.woff
```


##How to use

| Attributes          | Defaults value             | Available values         |
| ------------------- |:--------------------------:| -------------------------|
| ```data-size```     | ```data-size="50"```        |    Any number (script automatically adds the suffix) ```50 -> 50px``` |
| ```data-radius```   |  ```data-radius="auto"```   |   ```auto```, ```square```, ```circle```, ```10px```, ```20%``` |
| ```data-color```    | ```data-color="white"```    |   ```related```, ```#FF6347```, ```tomato```, ```rgb(255, 99, 71)```,  etc.| 
| ```data-bg```       | ```data-bg="auto"```        |   ```auto```, ```none```, ```#FF6347```, ```tomato```, ```rgb(255, 99, 71)```, etc.|

###Description
```data-radius="auto"``` - uses the border-radius equal to 20% of base size (best value at any size)

```data-radius="square"``` - uses the border-radius equal to "none"

```data-radius="circle"``` - uses the border-radius equal to 50% of base size

```data-color="related"``` - uses corresponding brand color

```data-bg="auto"``` - uses corresponding brand color

```data-bg="none"``` - uses transparent background color


##License
This software is released under the terms of the
[MIT license](https://github.com/evgenTraytyak/socicon.js/blob/master/LICENSE).

[bower]:http://bower.io/
