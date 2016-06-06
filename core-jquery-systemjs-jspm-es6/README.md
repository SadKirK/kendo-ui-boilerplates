# Kendo UI Core jQuery SystemJS/jspm & ES6 Boilerplate

A Kendo UI Core jQuery SystemJS/jspm & ES6 boilerplate to get you started.

### Prerequisites

First, install or update [Node.js & npm](https://nodejs.org/).

Once you have Node.js/npm working open a terminal and install [browsersync](https://www.browsersync.io/) globally by running (might have to [sudo](https://support.apple.com/en-us/HT202035)):

```
$ npm install jspm browser-sync -g
```

### Installing

Download a [ZIP](https://github.com/kendo-labs/kendo-ui-boilerplates/archive/master.zip) of this [repository](https://github.com/kendo-labs/kendo-ui-boilerplates) (i.e. kendo-ui-boilerplates).

Or, if you have GIT installed you can Git clone this [repository](https://github.com/kendo-labs/kendo-ui-boilerplates).

SSH:

```
$ git clone git@github.com:kendo-labs/kendo-ui-boilerplates.git
```

https:

```
$ git clone https://github.com/kendo-labs/kendo-ui-boilerplates.git
```

Select the boilerplate you'd like to use from the directory you just downloaded/cloned and `cd` into that directory from a terminal.

Then run the following command from the directory of the boilerplate you selected:

```
$ npm install && jspm install
```

This will install the required [npm](https://www.npmjs.com/) and jspm packages.

### Running

Open a terminal from the boilerplate directory. You should have one open at this point.

Run the following [npm scripts](https://docs.npmjs.com/misc/scripts) commands:

```
$ npm run server
```

This will open the `index.html` page at localhost:4000 in your default browser using [browsersync](https://www.browsersync.io/). Browsersync has been setup to reload after any changes to any `.html`, `.css`, or `.js `files.

SystemJS/jspm offers a bundled mode. From the root of the setup directory open a command prompt and run the following npm command:

```
> npm run bundle
```

By running this command the browser should reload and be running from a `build.js` file that has been created for you in the root of the setup directory. Additionally, the bundling process will combine and in-line into the HTML document any CSS that was imported in a module (e.g. `app.css`)

To unbundle simply run:

```
> npm run unBundle
```

## License

This project has been released under the [Apache License, version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)
