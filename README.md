KSU Online
==========
Just the web page for [KSU Online](http://ksuonline.se).

Setup
-----
#### Install
Grunt is used for building the project (e.g. minification and versioning
of assets):

    $ npm install -g grunt

Bower is used to install the Javascript and CSS dependencies:

    $ npm install -g bower

#### Install dependencies
Install grunt and bower dependencies:

    $ npm install
    $ bower install

#### Build
Build the project:

    $ grunt

Afterwards, the `dist` directory contains everything needed. Unless the web
server is already pointing to this directory, the contents should be copied
to the final destination. It's advisable to always blank out the destination
and then copy `dist` in its entirety.

#### Linting
Javascript:

    $ grunt jshint

CSS:

    $ grunt csslint

Javascript should pass without warnings and errors but CSSlint raises a few
issues in regards to compatibility with older browsers and heading
font-sizes due to media queries.

Screenshots
-----------
![First page](https://raw.githubusercontent.com/lemonad/ksu-online/master/images/screenshot1.png)

![Second page](https://raw.githubusercontent.com/lemonad/ksu-online/master/images/screenshot2.png)

