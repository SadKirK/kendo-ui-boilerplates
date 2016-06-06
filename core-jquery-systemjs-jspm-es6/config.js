System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ],
    "stage": 0
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "app.js",
      "js/dropdown.js",
      "js/dropdownData.json!github:systemjs/plugin-json@0.1.2.js",
      "js/dropdownTemplate.txt!github:systemjs/plugin-text@0.0.8.js",
      "npm:kendo-ui-core@2016.2.603/css/web/kendo.default.min.css!github:systemjs/plugin-css@0.1.22.js",
      "npm:kendo-ui-core@2016.2.603/css/web/kendo.common.core.min.css!github:systemjs/plugin-css@0.1.22.js",
      "npm:kendo-ui-core@2016.2.603/js/kendo.dropdownlist.js",
      "npm:kendo-ui-core@2016.2.603/js/kendo.mobile.scroller.js",
      "npm:kendo-ui-core@2016.2.603/js/kendo.draganddrop.js",
      "npm:kendo-ui-core@2016.2.603/js/kendo.userevents.js",
      "npm:kendo-ui-core@2016.2.603/js/kendo.core.js",
      "npm:jquery@2.2.4.js",
      "npm:jquery@2.2.4/dist/jquery.js",
      "npm:kendo-ui-core@2016.2.603/js/kendo.fx.js",
      "npm:kendo-ui-core@2016.2.603/js/kendo.list.js",
      "npm:kendo-ui-core@2016.2.603/js/kendo.popup.js",
      "npm:kendo-ui-core@2016.2.603/js/kendo.data.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:process@0.11.3.js",
      "npm:process@0.11.3/browser.js",
      "github:jspm/nodelibs-buffer@0.1.0.js",
      "github:jspm/nodelibs-buffer@0.1.0/index.js",
      "npm:buffer@3.6.0.js",
      "npm:buffer@3.6.0/index.js",
      "npm:isarray@1.0.0.js",
      "npm:isarray@1.0.0/index.js",
      "npm:ieee754@1.1.6.js",
      "npm:ieee754@1.1.6/index.js",
      "npm:base64-js@0.0.8.js",
      "npm:base64-js@0.0.8/lib/b64.js",
      "npm:kendo-ui-core@2016.2.603/js/kendo.data.xml.js",
      "npm:kendo-ui-core@2016.2.603/js/kendo.data.odata.js",
      "npm:jquery@2.1.4.js",
      "npm:jquery@2.1.4/dist/jquery.js",
      "style/app.css!github:systemjs/plugin-css@0.1.22.js"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.22",
    "jquery": "npm:jquery@2.1.4",
    "json": "github:systemjs/plugin-json@0.1.2",
    "kendo-ui-core": "npm:kendo-ui-core@2016.2.603",
    "text": "github:systemjs/plugin-text@0.0.8",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:kendo-ui-core@2016.2.603": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "jquery": "npm:jquery@2.2.4",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
