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

##Examples
![Example](https://raw.githubusercontent.com/evgenTraytyak/socicon.js/master/demo/demo.png "Example icons")

##License
Copyright (c) 2014 [Evgeny Traytyak][twitter]

[bower]:http://bower.io/
[twitter]:https://twitter.com/evgen_traytyak
