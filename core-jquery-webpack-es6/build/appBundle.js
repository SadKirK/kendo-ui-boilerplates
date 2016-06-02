/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(18);

	__webpack_require__(19);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.1.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-04-28T16:01Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//

	var arr = [];

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		// Use the correct document accordingly with window argument (sandbox)
		document = window.document,

		version = "2.1.4",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		// (You can seed the arguments with an array of args, but this is
		// only used internally.)
		each: function( callback, args ) {
			return jQuery.each( this, callback, args );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map(this, function( elem, i ) {
				return callback.call( elem, i, elem );
			}));
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor(null);
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( (options = arguments[ i ]) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type(obj) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
		},

		isPlainObject: function( obj ) {
			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			if ( obj.constructor &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}

			// If the function hasn't returned already, we're confident that
			// |obj| is a plain object, created by {} or constructed with new Object
			return true;
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call(obj) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {
				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf("use strict") === 1 ) {
					script = document.createElement("script");
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {
				// Otherwise, avoid the DOM node creation, insertion
				// and removal by using an indirect global eval
					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		// args is for internal usage only
		each: function( obj, callback, args ) {
			var value,
				i = 0,
				length = obj.length,
				isArray = isArraylike( obj );

			if ( args ) {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.apply( obj[ i ], args );

						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.apply( obj[ i ], args );

						if ( value === false ) {
							break;
						}
					}
				}

			// A special, fast, case for the most common use of each
			} else {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.call( obj[ i ], i, obj[ i ] );

						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.call( obj[ i ], i, obj[ i ] );

						if ( value === false ) {
							break;
						}
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArraylike( Object(arr) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var value,
				i = 0,
				length = elems.length,
				isArray = isArraylike( elems ),
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	});

	function isArraylike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.nodeType === 1 && length ) {
			return true;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.0-pre
	 * http://sizzlejs.com/
	 *
	 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-16
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
		// http://www.w3.org/TR/css3-syntax/#characters
		characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Loosely modeled on CSS identifier characters
		// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
		// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = characterEncoding.replace( "w", "w#" ),

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + characterEncoding + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + characterEncoding + ")" ),
			"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
			"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var match, elem, m, nodeType,
			// QSA vars
			i, groups, old, nid, newContext, newSelector;

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}

		context = context || document;
		results = results || [];
		nodeType = context.nodeType;

		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		if ( !seed && documentIsHTML ) {

			// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
				// Speed-up: Sizzle("#ID")
				if ( (m = match[1]) ) {
					if ( nodeType === 9 ) {
						elem = context.getElementById( m );
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document (jQuery #6963)
						if ( elem && elem.parentNode ) {
							// Handle the case where IE, Opera, and Webkit return items
							// by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}
					} else {
						// Context is not a document
						if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
							contains( context, elem ) && elem.id === m ) {
							results.push( elem );
							return results;
						}
					}

				// Speed-up: Sizzle("TAG")
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Speed-up: Sizzle(".CLASS")
				} else if ( (m = match[3]) && support.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// QSA path
			if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
				nid = old = expando;
				newContext = context;
				newSelector = nodeType !== 1 && selector;

				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					groups = tokenize( selector );

					if ( (old = context.getAttribute("id")) ) {
						nid = old.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", nid );
					}
					nid = "[id='" + nid + "'] ";

					i = groups.length;
					while ( i-- ) {
						groups[i] = nid + toSelector( groups[i] );
					}
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
					newSelector = groups.join(",");
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch(qsaError) {
					} finally {
						if ( !old ) {
							context.removeAttribute("id");
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = attrs.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// If no document and documentElement is available, return
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Set our document
		document = doc;
		docElem = doc.documentElement;
		parent = doc.defaultView;

		// Support: IE>8
		// If iframe document is assigned to "document" variable and if iframe has been reloaded,
		// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
		// IE6-8 do not support the defaultView property so parent will be undefined
		if ( parent && parent !== parent.top ) {
			// IE11 does not have attachEvent, so all must suffer
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Support tests
		---------------------------------------------------------------------- */
		documentIsHTML = !isXML( doc );

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( doc.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					return m && m.parentNode ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\f]' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = doc.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully does not implement inclusive descendent
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === doc ? -1 :
					b === doc ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return doc;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, outerCache, node, diff, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
								// Seek `elem` from a previously-cached index
								outerCache = parent[ expando ] || (parent[ expando ] = {});
								cache = outerCache[ type ] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = cache[0] === dirruns && cache[2];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										outerCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							// Use previously-cached element index if available
							} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
								diff = cache[1];

							// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
							} else {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
										// Cache the index of each encountered element
										if ( useCache ) {
											(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
							if ( (oldCache = outerCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								outerCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context !== document && context;
				}

				// Add elements passing elementMatchers directly to results
				// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context, xml ) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// Apply set filters to unmatched elements
				matchedCount += i;
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is no seed and only one group
		if ( match.length === 1 ) {

			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			});

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			});

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
		});
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			}));
	};

	jQuery.fn.extend({
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter(function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				}) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow(this, selector || [], false) );
		},
		not: function( selector ) {
			return this.pushStack( winnow(this, selector || [], true) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	});


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && (match[1] || !context) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[1] ) {
						context = context instanceof jQuery ? context[0] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[1],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[2] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {
							// Inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || rootjQuery ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return typeof rootjQuery.ready !== "undefined" ?
					rootjQuery.ready( selector ) :
					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.extend({
		dir: function( elem, dir, until ) {
			var matched = [],
				truncate = until !== undefined;

			while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
				if ( elem.nodeType === 1 ) {
					if ( truncate && jQuery( elem ).is( until ) ) {
						break;
					}
					matched.push( elem );
				}
			}
			return matched;
		},

		sibling: function( n, elem ) {
			var matched = [];

			for ( ; n; n = n.nextSibling ) {
				if ( n.nodeType === 1 && n !== elem ) {
					matched.push( n );
				}
			}

			return matched;
		}
	});

	jQuery.fn.extend({
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter(function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[i] ) ) {
						return true;
					}
				}
			});
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
					// Always skip document fragments
					if ( cur.nodeType < 11 && (pos ?
						pos.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector(cur, selectors)) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.unique(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter(selector)
			);
		}
	});

	function sibling( cur, dir ) {
		while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each({
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return jQuery.dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return jQuery.dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return jQuery.dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return jQuery.sibling( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.unique( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	});
	var rnotwhite = (/\S+/g);



	// String to Object options format cache
	var optionsCache = {};

	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions( options ) {
		var object = optionsCache[ options ] = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		});
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			( optionsCache[ options ] || createOptions( options ) ) :
			jQuery.extend( {}, options );

		var // Last fire value (for non-forgettable lists)
			memory,
			// Flag to know if list was already fired
			fired,
			// Flag to know if list is currently firing
			firing,
			// First callback to fire (used internally by add and fireWith)
			firingStart,
			// End of the loop when firing
			firingLength,
			// Index of currently firing callback (modified by remove if needed)
			firingIndex,
			// Actual callback list
			list = [],
			// Stack of fire calls for repeatable lists
			stack = !options.once && [],
			// Fire callbacks
			fire = function( data ) {
				memory = options.memory && data;
				fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for ( ; list && firingIndex < firingLength; firingIndex++ ) {
					if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
						memory = false; // To prevent further calls using add
						break;
					}
				}
				firing = false;
				if ( list ) {
					if ( stack ) {
						if ( stack.length ) {
							fire( stack.shift() );
						}
					} else if ( memory ) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			// Actual Callbacks object
			self = {
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
						// First, we save the current length
						var start = list.length;
						(function add( args ) {
							jQuery.each( args, function( _, arg ) {
								var type = jQuery.type( arg );
								if ( type === "function" ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && type !== "string" ) {
									// Inspect recursively
									add( arg );
								}
							});
						})( arguments );
						// Do we need to add the callbacks to the
						// current firing batch?
						if ( firing ) {
							firingLength = list.length;
						// With memory, if we're not firing then
						// we should call right away
						} else if ( memory ) {
							firingStart = start;
							fire( memory );
						}
					}
					return this;
				},
				// Remove a callback from the list
				remove: function() {
					if ( list ) {
						jQuery.each( arguments, function( _, arg ) {
							var index;
							while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
								list.splice( index, 1 );
								// Handle firing indexes
								if ( firing ) {
									if ( index <= firingLength ) {
										firingLength--;
									}
									if ( index <= firingIndex ) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
				},
				// Remove all callbacks from the list
				empty: function() {
					list = [];
					firingLength = 0;
					return this;
				},
				// Have the list do nothing anymore
				disable: function() {
					list = stack = memory = undefined;
					return this;
				},
				// Is it disabled?
				disabled: function() {
					return !list;
				},
				// Lock the list in its current state
				lock: function() {
					stack = undefined;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				// Is it locked?
				locked: function() {
					return !stack;
				},
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( list && ( !fired || stack ) ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						if ( firing ) {
							stack.push( args );
						} else {
							fire( args );
						}
					}
					return this;
				},
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend({

		Deferred: function( func ) {
			var tuples = [
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks("memory") ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred(function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[1] ](function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.done( newDefer.resolve )
											.fail( newDefer.reject )
											.progress( newDefer.notify );
									} else {
										newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
									}
								});
							});
							fns = null;
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[1] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(function() {
						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[0] ] = function() {
					deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[0] + "With" ] = list.fireWith;
			});

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject )
							.progress( updateFunc( i, progressContexts, progressValues ) );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	});


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend({
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	});

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// We once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if ( document.readyState === "complete" ) {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed, false );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed, false );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[0], key ) : emptyGet;
	};


	/**
	 * Determines whether an object can have data
	 */
	jQuery.acceptData = function( owner ) {
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};


	function Data() {
		// Support: Android<4,
		// Old WebKit does not have Object.preventExtensions/freeze method,
		// return new empty object instead with no [[set]] accessor
		Object.defineProperty( this.cache = {}, 0, {
			get: function() {
				return {};
			}
		});

		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;
	Data.accepts = jQuery.acceptData;

	Data.prototype = {
		key: function( owner ) {
			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return the key for a frozen object.
			if ( !Data.accepts( owner ) ) {
				return 0;
			}

			var descriptor = {},
				// Check if the owner object already has a cache key
				unlock = owner[ this.expando ];

			// If not, create one
			if ( !unlock ) {
				unlock = Data.uid++;

				// Secure it in a non-enumerable, non-writable property
				try {
					descriptor[ this.expando ] = { value: unlock };
					Object.defineProperties( owner, descriptor );

				// Support: Android<4
				// Fallback to a less secure definition
				} catch ( e ) {
					descriptor[ this.expando ] = unlock;
					jQuery.extend( owner, descriptor );
				}
			}

			// Ensure the cache object
			if ( !this.cache[ unlock ] ) {
				this.cache[ unlock ] = {};
			}

			return unlock;
		},
		set: function( owner, data, value ) {
			var prop,
				// There may be an unlock assigned to this node,
				// if there is no entry for this "owner", create one inline
				// and set the unlock as though an owner entry had always existed
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {
				// Fresh assignments by object are shallow copied
				if ( jQuery.isEmptyObject( cache ) ) {
					jQuery.extend( this.cache[ unlock ], data );
				// Otherwise, copy the properties one-by-one to the cache object
				} else {
					for ( prop in data ) {
						cache[ prop ] = data[ prop ];
					}
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			// Either a valid cache is found, or will be created.
			// New caches will be created and the unlock returned,
			// allowing direct access to the newly created
			// empty data object. A valid owner object must be provided.
			var cache = this.cache[ this.key( owner ) ];

			return key === undefined ?
				cache : cache[ key ];
		},
		access: function( owner, key, value ) {
			var stored;
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					((key && typeof key === "string") && value === undefined) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase(key) );
			}

			// [*]When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];

			if ( key === undefined ) {
				this.cache[ unlock ] = {};

			} else {
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );
					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {
						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;
				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}
		},
		hasData: function( owner ) {
			return !jQuery.isEmptyObject(
				this.cache[ owner[ this.expando ] ] || {}
			);
		},
		discard: function( owner ) {
			if ( owner[ this.expando ] ) {
				delete this.cache[ owner[ this.expando ] ];
			}
		}
	};
	var data_priv = new Data();

	var data_user = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch( e ) {}

				// Make sure we set the data so it isn't changed later
				data_user.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend({
		hasData: function( elem ) {
			return data_user.hasData( elem ) || data_priv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return data_user.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			data_user.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to data_priv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return data_priv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			data_priv.remove( elem, name );
		}
	});

	jQuery.fn.extend({
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = data_user.get( elem );

					if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice(5) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						data_priv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each(function() {
					data_user.set( this, key );
				});
			}

			return access( this, function( value ) {
				var data,
					camelKey = jQuery.camelCase( key );

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
					// Attempt to get data from the cache
					// with the key as-is
					data = data_user.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to get data from the cache
					// with the key camelized
					data = data_user.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each(function() {
					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = data_user.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					data_user.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf("-") !== -1 && data !== undefined ) {
						data_user.set( this, key, value );
					}
				});
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each(function() {
				data_user.remove( this, key );
			});
		}
	});


	jQuery.extend({
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = data_priv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = data_priv.access( elem, type, jQuery.makeArray(data) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return data_priv.get( elem, key ) || data_priv.access( elem, key, {
				empty: jQuery.Callbacks("once memory").add(function() {
					data_priv.remove( elem, [ type + "queue", key ] );
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[0], type );
			}

			return data === undefined ?
				this :
				this.each(function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[0] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				});
		},
		dequeue: function( type ) {
			return this.each(function() {
				jQuery.dequeue( this, type );
			});
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = data_priv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	});
	var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
		};

	var rcheckableType = (/^(?:checkbox|radio)$/i);



	(function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	})();
	var strundefined = typeof undefined;



	support.focusinBubbles = "onfocusin" in window;


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !(events = elemData.events) ) {
				events = elemData.events = {};
			}
			if ( !(eventHandle = elemData.handle) ) {
				eventHandle = elemData.handle = function( e ) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join(".")
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !(handlers = events[ type ]) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.hasData( elem ) && data_priv.get( elem );

			if ( !elemData || !(events = elemData.events) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;
				data_priv.remove( elem, "events" );
			}
		},

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf(".") >= 0 ) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === (elem.ownerDocument || document) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
					jQuery.acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
								.apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( (event.result = ret) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			// Avoid non-left-click bubbling in Firefox (#3861)
			if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.disabled !== true || event.type !== "click" ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) >= 0 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},

		simulate: function( type, elem, event, bubble ) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true,
					originalEvent: {}
				}
			);
			if ( bubble ) {
				jQuery.event.trigger( e, null, elem );
			} else {
				jQuery.event.dispatch.call( elem, e );
			}
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	};

	jQuery.Event = function( src, props ) {
		// Allow instantiation without the 'new' keyword
		if ( !(this instanceof jQuery.Event) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && e.preventDefault ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && e.stopPropagation ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && e.stopImmediatePropagation ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// Support: Chrome 15+
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	});

	// Support: Firefox, Chrome, Safari
	// Create "bubbling" focus and blur events
	if ( !support.focusinBubbles ) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
					jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
				};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = data_priv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = data_priv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						data_priv.remove( doc, fix );

					} else {
						data_priv.access( doc, fix, attaches );
					}
				}
			};
		});
	}

	jQuery.fn.extend({

		on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
			var origFn, type;

			// Types can be a map of types/handlers
			if ( typeof types === "object" ) {
				// ( types-Object, selector, data )
				if ( typeof selector !== "string" ) {
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for ( type in types ) {
					this.on( type, selector, data, types[ type ], one );
				}
				return this;
			}

			if ( data == null && fn == null ) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if ( fn == null ) {
				if ( typeof selector === "string" ) {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if ( fn === false ) {
				fn = returnFalse;
			} else if ( !fn ) {
				return this;
			}

			if ( one === 1 ) {
				origFn = fn;
				fn = function( event ) {
					// Can use an empty set, since event contains the info
					jQuery().off( event );
					return origFn.apply( this, arguments );
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
			}
			return this.each( function() {
				jQuery.event.add( this, types, fn, data, selector );
			});
		},
		one: function( types, selector, data, fn ) {
			return this.on( types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each(function() {
				jQuery.event.remove( this, types, fn, selector );
			});
		},

		trigger: function( type, data ) {
			return this.each(function() {
				jQuery.event.trigger( type, data, this );
			});
		},
		triggerHandler: function( type, data ) {
			var elem = this[0];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	});


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		rtagName = /<([\w:]+)/,
		rhtml = /<|&#?\w+;/,
		rnoInnerhtml = /<(?:script|style|link)/i,
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptType = /^$|\/(?:java|ecma)script/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

		// We have to close these tags to support XHTML (#13200)
		wrapMap = {

			// Support: IE9
			option: [ 1, "<select multiple='multiple'>", "</select>" ],

			thead: [ 1, "<table>", "</table>" ],
			col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
			tr: [ 2, "<table><tbody>", "</tbody></table>" ],
			td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

			_default: [ 0, "", "" ]
		};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	// Support: 1.x compatibility
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName("tbody")[0] ||
				elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute("type");
		}

		return elem;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			data_priv.set(
				elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
			);
		}
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( data_priv.hasData( src ) ) {
			pdataOld = data_priv.access( src );
			pdataCur = data_priv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( data_user.hasData( src ) ) {
			udataOld = data_user.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			data_user.set( dest, udataCur );
		}
	}

	function getAll( context, tag ) {
		var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
				context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	jQuery.extend({
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		buildFragment: function( elems, context, scripts, selection ) {
			var elem, tmp, tag, wrap, contains, j,
				fragment = context.createDocumentFragment(),
				nodes = [],
				i = 0,
				l = elems.length;

			for ( ; i < l; i++ ) {
				elem = elems[ i ];

				if ( elem || elem === 0 ) {

					// Add nodes directly
					if ( jQuery.type( elem ) === "object" ) {
						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

					// Convert non-html into a text node
					} else if ( !rhtml.test( elem ) ) {
						nodes.push( context.createTextNode( elem ) );

					// Convert html into DOM nodes
					} else {
						tmp = tmp || fragment.appendChild( context.createElement("div") );

						// Deserialize a standard representation
						tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
						wrap = wrapMap[ tag ] || wrapMap._default;
						tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

						// Descend through wrappers to the right content
						j = wrap[ 0 ];
						while ( j-- ) {
							tmp = tmp.lastChild;
						}

						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( nodes, tmp.childNodes );

						// Remember the top-level container
						tmp = fragment.firstChild;

						// Ensure the created nodes are orphaned (#12392)
						tmp.textContent = "";
					}
				}
			}

			// Remove wrapper from fragment
			fragment.textContent = "";

			i = 0;
			while ( (elem = nodes[ i++ ]) ) {

				// #4087 - If origin and destination elements are the same, and this is
				// that element, do not do anything
				if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
					continue;
				}

				contains = jQuery.contains( elem.ownerDocument, elem );

				// Append to fragment
				tmp = getAll( fragment.appendChild( elem ), "script" );

				// Preserve script evaluation history
				if ( contains ) {
					setGlobalEval( tmp );
				}

				// Capture executables
				if ( scripts ) {
					j = 0;
					while ( (elem = tmp[ j++ ]) ) {
						if ( rscriptType.test( elem.type || "" ) ) {
							scripts.push( elem );
						}
					}
				}
			}

			return fragment;
		},

		cleanData: function( elems ) {
			var data, elem, type, key,
				special = jQuery.event.special,
				i = 0;

			for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
				if ( jQuery.acceptData( elem ) ) {
					key = elem[ data_priv.expando ];

					if ( key && (data = data_priv.cache[ key ]) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
						if ( data_priv.cache[ key ] ) {
							// Discard any remaining `private` data
							delete data_priv.cache[ key ];
						}
					}
				}
				// Discard any remaining `user` data
				delete data_user.cache[ elem[ data_user.expando ] ];
			}
		}
	});

	jQuery.fn.extend({
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each(function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					});
			}, null, value, arguments.length );
		},

		append: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			});
		},

		prepend: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			});
		},

		before: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			});
		},

		after: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			});
		},

		remove: function( selector, keepData /* Internal Use Only */ ) {
			var elem,
				elems = selector ? jQuery.filter( selector, this ) : this,
				i = 0;

			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem ) );
				}

				if ( elem.parentNode ) {
					if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
						setGlobalEval( getAll( elem, "script" ) );
					}
					elem.parentNode.removeChild( elem );
				}
			}

			return this;
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; (elem = this[i]) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			});
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = value.replace( rxhtmlTag, "<$1></$2>" );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var arg = arguments[ 0 ];

			// Make the changes, replacing each context element with the new content
			this.domManip( arguments, function( elem ) {
				arg = this.parentNode;

				jQuery.cleanData( getAll( this ) );

				if ( arg ) {
					arg.replaceChild( elem, this );
				}
			});

			// Force removal if there was no new content (e.g., from empty arguments)
			return arg && (arg.length || arg.nodeType) ? this : this.remove();
		},

		detach: function( selector ) {
			return this.remove( selector, true );
		},

		domManip: function( args, callback ) {

			// Flatten any nested arrays
			args = concat.apply( [], args );

			var fragment, first, scripts, hasScripts, node, doc,
				i = 0,
				l = this.length,
				set = this,
				iNoClone = l - 1,
				value = args[ 0 ],
				isFunction = jQuery.isFunction( value );

			// We can't cloneNode fragments that contain checked, in WebKit
			if ( isFunction ||
					( l > 1 && typeof value === "string" &&
						!support.checkClone && rchecked.test( value ) ) ) {
				return this.each(function( index ) {
					var self = set.eq( index );
					if ( isFunction ) {
						args[ 0 ] = value.call( this, index, self.html() );
					}
					self.domManip( args, callback );
				});
			}

			if ( l ) {
				fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
				first = fragment.firstChild;

				if ( fragment.childNodes.length === 1 ) {
					fragment = first;
				}

				if ( first ) {
					scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
					hasScripts = scripts.length;

					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for ( ; i < l; i++ ) {
						node = fragment;

						if ( i !== iNoClone ) {
							node = jQuery.clone( node, true, true );

							// Keep references to cloned scripts for later restoration
							if ( hasScripts ) {
								// Support: QtWebKit
								// jQuery.merge because push.apply(_, arraylike) throws
								jQuery.merge( scripts, getAll( node, "script" ) );
							}
						}

						callback.call( this[ i ], node, i );
					}

					if ( hasScripts ) {
						doc = scripts[ scripts.length - 1 ].ownerDocument;

						// Reenable scripts
						jQuery.map( scripts, restoreScript );

						// Evaluate executable scripts on first document insertion
						for ( i = 0; i < hasScripts; i++ ) {
							node = scripts[ i ];
							if ( rscriptType.test( node.type || "" ) &&
								!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

								if ( node.src ) {
									// Optional AJAX dependency, but won't run scripts if not present
									if ( jQuery._evalUrl ) {
										jQuery._evalUrl( node.src );
									}
								} else {
									jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
								}
							}
						}
					}
				}
			}

			return this;
		}
	});

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	});


	var iframe,
		elemdisplay = {};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */
	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var style,
			elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			// getDefaultComputedStyle might be reliably used only on attached element
			display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

				// Use of this method is a temporary fix (more like optimization) until something better comes along,
				// since it was removed from specification and supported only in FF
				style.display : jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = (/^margin/);

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {
			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			if ( elem.ownerDocument.defaultView.opener ) {
				return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
			}

			return window.getComputedStyle( elem, null );
		};



	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
		}

		if ( computed ) {

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// Support: iOS < 6
			// A tribute to the "awesome hack by Dean Edwards"
			// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?
			// Support: IE
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return (this.get = hookFn).apply( this, arguments );
			}
		};
	}


	(function() {
		var pixelPositionVal, boxSizingReliableVal,
			docElem = document.documentElement,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
			"position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computePixelPositionAndBoxSizingReliable() {
			div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
				"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
				"border:1px;padding:1px;width:4px;position:absolute";
			div.innerHTML = "";
			docElem.appendChild( container );

			var divStyle = window.getComputedStyle( div, null );
			pixelPositionVal = divStyle.top !== "1%";
			boxSizingReliableVal = divStyle.width === "4px";

			docElem.removeChild( container );
		}

		// Support: node.js jsdom
		// Don't assume that getComputedStyle is a property of the global object
		if ( window.getComputedStyle ) {
			jQuery.extend( support, {
				pixelPosition: function() {

					// This test is executed only once but we still do memoizing
					// since we can use the boxSizingReliable pre-computing.
					// No need to check if the test was already performed, though.
					computePixelPositionAndBoxSizingReliable();
					return pixelPositionVal;
				},
				boxSizingReliable: function() {
					if ( boxSizingReliableVal == null ) {
						computePixelPositionAndBoxSizingReliable();
					}
					return boxSizingReliableVal;
				},
				reliableMarginRight: function() {

					// Support: Android 2.3
					// Check if div with explicit width and no margin-right incorrectly
					// gets computed margin-right based on width of container. (#3333)
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// This support function is only executed once so no memoizing is needed.
					var ret,
						marginDiv = div.appendChild( document.createElement( "div" ) );

					// Reset CSS: box-sizing; display; margin; border; padding
					marginDiv.style.cssText = div.style.cssText =
						// Support: Firefox<29, Android 2.3
						// Vendor-prefix box-sizing
						"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
						"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
					marginDiv.style.marginRight = marginDiv.style.width = "0";
					div.style.width = "1px";
					docElem.appendChild( container );

					ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

					docElem.removeChild( container );
					div.removeChild( marginDiv );

					return ret;
				}
			});
		}
	})();


	// A method for quickly swapping in/out CSS properties to get correct calculations.
	jQuery.swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var
		// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
		rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( style, name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in style ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[0].toUpperCase() + name.slice(1),
			origName = name,
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in style ) {
				return name;
			}
		}

		return origName;
	}

	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
			// If we already have the right measurement, avoid augmentation
			4 :
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test(val) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = data_priv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend({

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && (ret = rrelNum.exec( value )) ) {
					value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number, add 'px' to the (except for certain CSS properties)
				if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
					value += "px";
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
					style[ name ] = value;
				}

			} else {
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
			}
			return val;
		}
	});

	jQuery.each([ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
						jQuery.swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						}) :
						getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	});

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return jQuery.swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	});

	jQuery.fn.extend({
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each(function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			});
		}
	});


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				if ( tween.elem[ tween.prop ] != null &&
					(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		}
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
		rrun = /queueHooks$/,
		animationPrefilters = [ defaultPrefilter ],
		tweeners = {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value ),
					target = tween.cur(),
					parts = rfxnum.exec( value ),
					unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

					// Starting value computation is required for potential unit mismatches
					start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
						rfxnum.exec( jQuery.css( tween.elem, prop ) ),
					scale = 1,
					maxIterations = 20;

				if ( start && start[ 3 ] !== unit ) {
					// Trust units reported by jQuery.css
					unit = unit || start[ 3 ];

					// Make sure we update the tween properties later on
					parts = parts || [];

					// Iteratively approximate from a nonzero starting point
					start = +target || 1;

					do {
						// If previous iteration zeroed out, double until we get *something*.
						// Use string for doubling so we don't accidentally see scale as unchanged below
						scale = scale || ".5";

						// Adjust and apply
						start = start / scale;
						jQuery.style( tween.elem, prop, start + unit );

					// Update scale, tolerating zero or NaN from tween.cur(),
					// break the loop if scale is unchanged or perfect, or if we've just had enough
					} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
				}

				// Update tween properties
				if ( parts ) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;
					// If a +=/-= token was provided, we're doing a relative animation
					tween.end = parts[ 1 ] ?
						start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
						+parts[ 2 ];
				}

				return tween;
			} ]
		};

	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function() {
			fxNow = undefined;
		});
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( (tween = collection[ index ].call( animation, prop, value )) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = data_priv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function() {
				// Ensure the complete handler is called before this completes
				anim.always(function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				});
			});
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = data_priv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done(function() {
					jQuery( elem ).hide();
				});
			}
			anim.done(function() {
				var prop;

				data_priv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			});
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = animationPrefilters.length,
			deferred = jQuery.Deferred().always( function() {
				// Don't match elem in the :animated selector
				delete tick.elem;
			}),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ]);

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise({
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, { specialEasing: {} }, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			}),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			})
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.split(" ");
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				tweeners[ prop ] = tweeners[ prop ] || [];
				tweeners[ prop ].unshift( callback );
			}
		},

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				animationPrefilters.unshift( callback );
			} else {
				animationPrefilters.push( callback );
			}
		}
	});

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend({
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || data_priv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each(function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = data_priv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			});
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each(function() {
				var index,
					data = data_priv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			});
		}
	});

	jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	});

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	});

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;

	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		clearInterval( timerId );
		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	};


	(function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	})();


	var nodeHook, boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend({
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each(function() {
				jQuery.removeAttr( this, name );
			});
		}
	});

	jQuery.extend({
		attr: function( elem, name, value ) {
			var hooks, ret,
				nType = elem.nodeType;

			// don't get/set attributes on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === strundefined ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
			}

			if ( value !== undefined ) {

				if ( value === null ) {
					jQuery.removeAttr( elem, name );

				} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
					return ret;

				} else {
					elem.setAttribute( name, value + "" );
					return value;
				}

			} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				ret = jQuery.find.attr( elem, name );

				// Non-existent attributes return null, we normalize to undefined
				return ret == null ?
					undefined :
					ret;
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( (name = attrNames[i++]) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		}
	});

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	});




	var rfocusable = /^(?:input|select|textarea|button)$/i;

	jQuery.fn.extend({
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each(function() {
				delete this[ jQuery.propFix[ name ] || name ];
			});
		}
	});

	jQuery.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},

		prop: function( elem, name, value ) {
			var ret, hooks, notxml,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

			if ( notxml ) {
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
					ret :
					( elem[ name ] = value );

			} else {
				return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
					ret :
					elem[ name ];
			}
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {
					return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
						elem.tabIndex :
						-1;
				}
			}
		}
	});

	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			}
		};
	}

	jQuery.each([
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	});




	var rclass = /[\t\r\n\f]/g;

	jQuery.fn.extend({
		addClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				proceed = typeof value === "string" && value,
				i = 0,
				len = this.length;

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).addClass( value.call( this, j, this.className ) );
				});
			}

			if ( proceed ) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = ( value || "" ).match( rnotwhite ) || [];

				for ( ; i < len; i++ ) {
					elem = this[ i ];
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						" "
					);

					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				proceed = arguments.length === 0 || typeof value === "string" && value,
				i = 0,
				len = this.length;

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).removeClass( value.call( this, j, this.className ) );
				});
			}
			if ( proceed ) {
				classes = ( value || "" ).match( rnotwhite ) || [];

				for ( ; i < len; i++ ) {
					elem = this[ i ];
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						""
					);

					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = value ? jQuery.trim( cur ) : "";
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( i ) {
					jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
				});
			}

			return this.each(function() {
				if ( type === "string" ) {
					// Toggle individual class names
					var className,
						i = 0,
						self = jQuery( this ),
						classNames = value.match( rnotwhite ) || [];

					while ( (className = classNames[ i++ ]) ) {
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( type === strundefined || type === "boolean" ) {
					if ( this.className ) {
						// store className if set
						data_priv.set( this, "__className__", this.className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
				}
			});
		},

		hasClass: function( selector ) {
			var className = " " + selector + " ",
				i = 0,
				l = this.length;
			for ( ; i < l; i++ ) {
				if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
					return true;
				}
			}

			return false;
		}
	});




	var rreturn = /\r/g;

	jQuery.fn.extend({
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[0];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?
						// Handle most common string cases
						ret.replace(rreturn, "") :
						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each(function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function( elem ) {
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						jQuery.trim( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE6-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	});

	// Radios and checkboxes getter/setter
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});




	// Return jQuery for attributes-only inclusion


	jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	});

	jQuery.fn.extend({
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		},

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
		}
	});


	var nonce = jQuery.now();

	var rquery = (/\?/);



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			tmp = new DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Document location
		ajaxLocation = window.location.href,

		// Segment location into parts
		ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {
				// For each dataType in the dataTypeExpression
				while ( (dataType = dataTypes[i++]) ) {
					// Prepend if requested
					if ( dataType[0] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

					// Otherwise append
					} else {
						(structure[ dataType ] = structure[ dataType ] || []).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			});
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,
				// URL without anti-cache param
				cacheURL,
				// Response headers
				responseHeadersString,
				responseHeaders,
				// timeout handle
				timeoutTimer,
				// Cross-domain detection vars
				parts,
				// To know if global events are to be dispatched
				fireGlobals,
				// Loop variable
				i,
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
				// Callbacks context
				callbackContext = s.context || s,
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks("once memory"),
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
				// The jqXHR state
				state = 0,
				// Default abort message
				strAbort = "canceled",
				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( (match = rheaders.exec( responseHeadersString )) ) {
									responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
				.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
					s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = setTimeout(function() {
						jqXHR.abort("timeout");
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	});

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	};


	jQuery.fn.extend({
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapAll( html.call(this, i) );
				});
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map(function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				}).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapInner( html.call(this, i) );
				});
			}

			return this.each(function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			});
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each(function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
			});
		},

		unwrap: function() {
			return this.parent().each(function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			}).end();
		}
	});


	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
	};
	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
					// Treat each array item as a scalar.
					add( prefix, v );

				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
				}
			});

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {
			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});

		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend({
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map(function() {
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			})
			.filter(function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			})
			.map(function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						}) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			}).get();
		}
	});


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest();
		} catch( e ) {}
	};

	var xhrId = 0,
		xhrCallbacks = {},
		xhrSuccessStatus = {
			// file protocol always yields status code 0, assume 200
			0: 200,
			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	// Support: IE9
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if ( window.attachEvent ) {
		window.attachEvent( "onunload", function() {
			for ( var key in xhrCallbacks ) {
				xhrCallbacks[ key ]();
			}
		});
	}

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport(function( options ) {
		var callback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					xhr.open( options.type, options.url, options.async, options.username, options.password );

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								delete xhrCallbacks[ id ];
								callback = xhr.onload = xhr.onerror = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
									complete(
										// file: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
										// Support: IE9
										// Accessing binary-data responseText throws an exception
										// (#11426)
										typeof xhr.responseText === "string" ? {
											text: xhr.responseText
										} : undefined,
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					xhr.onerror = callback("error");

					// Create the abort callback
					callback = xhrCallbacks[ id ] = callback("abort");

					try {
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});




	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	});

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery("<script>").prop({
						async: true,
						charset: s.scriptCharset,
						src: s.url
					}).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function() {
				// Restore preexisting value
				window[ callbackName ] = overwritten;

				// Save back as free
				if ( s[ callbackName ] ) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});




	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}

		parsed = jQuery.buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf(" ");

		if ( off >= 0 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax({
				url: url,

				// if "type" variable is undefined, then "GET" method will be used
				type: type,
				dataType: "html",
				data: params
			}).done(function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			}).complete( callback && function( jqXHR, status ) {
				self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
			});
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	});




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};




	var docElem = window.document.documentElement;

	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {
				options = options.call( elem, i, curOffset );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend({
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each(function( i ) {
						jQuery.offset.setOffset( this, options, i );
					});
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			// Support: BlackBerry 5, iOS 3 (original iPhone)
			// If we don't have gBCR, just use 0,0 rather than error
			if ( typeof elem.getBoundingClientRect !== strundefined ) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {
				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		offsetParent: function() {
			return this.map(function() {
				var offsetParent = this.offsetParent || docElem;

				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || docElem;
			});
		}
	});

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : window.pageXOffset,
						top ? val : window.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	});

	// Support: Safari<7+, Chrome<37+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	});


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		});
	});


	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( typeof noGlobal === strundefined ) {
		window.jQuery = window.$ = jQuery;
	}




	return jQuery;

	}));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ({

	/***/ 0:
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(452);


	/***/ },

	/***/ 422:
	/***/ function(module, exports) {

		module.exports = function() { throw new Error("define cannot be used indirect"); };


	/***/ },

	/***/ 426:
	/***/ function(module, exports) {

		module.exports = __webpack_require__(4);

	/***/ },

	/***/ 427:
	/***/ function(module, exports) {

		module.exports = __webpack_require__(10);

	/***/ },

	/***/ 452:
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
		    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(426), __webpack_require__(427) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		})(function(){

		var __meta__ = { // jshint ignore:line
		    id: "dropdownlist",
		    name: "DropDownList",
		    category: "web",
		    description: "The DropDownList widget displays a list of values and allows the selection of a single value from the list.",
		    depends: [ "list" ],
		    features: [ {
		        id: "mobile-scroller",
		        name: "Mobile scroller",
		        description: "Support for kinetic scrolling in mobile device",
		        depends: [ "mobile.scroller" ]
		    }, {
		        id: "virtualization",
		        name: "VirtualList",
		        description: "Support for virtualization",
		        depends: [ "virtuallist" ]
		    } ]
		};

		(function($, undefined) {
		    var kendo = window.kendo,
		        ui = kendo.ui,
		        List = ui.List,
		        Select = ui.Select,
		        support = kendo.support,
		        activeElement = kendo._activeElement,
		        ObservableObject = kendo.data.ObservableObject,
		        keys = kendo.keys,
		        ns = ".kendoDropDownList",
		        DISABLED = "disabled",
		        READONLY = "readonly",
		        CHANGE = "change",
		        FOCUSED = "k-state-focused",
		        DEFAULT = "k-state-default",
		        STATEDISABLED = "k-state-disabled",
		        ARIA_DISABLED = "aria-disabled",
		        ARIA_READONLY = "aria-readonly",
		        HOVEREVENTS = "mouseenter" + ns + " mouseleave" + ns,
		        TABINDEX = "tabindex",
		        STATE_FILTER = "filter",
		        STATE_ACCEPT = "accept",
		        MSG_INVALID_OPTION_LABEL = "The `optionLabel` option is not valid due to missing fields. Define a custom optionLabel as shown here http://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist#configuration-optionLabel",
		        proxy = $.proxy;

		    var DropDownList = Select.extend( {
		        init: function(element, options) {
		            var that = this;
		            var index = options && options.index;
		            var optionLabel, text, disabled;

		            that.ns = ns;
		            options = $.isArray(options) ? { dataSource: options } : options;

		            Select.fn.init.call(that, element, options);

		            options = that.options;
		            element = that.element.on("focus" + ns, proxy(that._focusHandler, that));

		            that._focusInputHandler = $.proxy(that._focusInput, that);

		            that.optionLabel = $();
		            that._optionLabel();

		            that._inputTemplate();

		            that._reset();

		            that._prev = "";
		            that._word = "";

		            that._wrapper();

		            that._tabindex();
		            that.wrapper.data(TABINDEX, that.wrapper.attr(TABINDEX));

		            that._span();

		            that._popup();

		            that._mobile();

		            that._dataSource();

		            that._ignoreCase();

		            that._filterHeader();

		            that._aria();

		            that._enable();

		            that._oldIndex = that.selectedIndex = -1;

		            if (index !== undefined) {
		                options.index = index;
		            }

		            that._initialIndex = options.index;
		            that._initList();

		            that._cascade();

		            if (options.autoBind) {
		                that.dataSource.fetch();
		            } else if (that.selectedIndex === -1) { //selectedIndex !== -1 when cascade functionality happens instantly
		                text = options.text || "";
		                if (!text) {
		                    optionLabel = options.optionLabel;

		                    if (optionLabel && options.index === 0) {
		                        text = optionLabel;
		                    } else if (that._isSelect) {
		                        text = element.children(":selected").text();
		                    }
		                }

		                that._textAccessor(text);
		            }

		            disabled = $(that.element).parents("fieldset").is(':disabled');

		            if (disabled) {
		                that.enable(false);
		            }

		            that.listView.bind("click", function(e) { e.preventDefault(); });

		            kendo.notify(that);
		        },

		        options: {
		            name: "DropDownList",
		            enabled: true,
		            autoBind: true,
		            index: 0,
		            text: null,
		            value: null,
		            delay: 500,
		            height: 200,
		            dataTextField: "",
		            dataValueField: "",
		            optionLabel: "",
		            cascadeFrom: "",
		            cascadeFromField: "",
		            ignoreCase: true,
		            animation: {},
		            filter: "none",
		            minLength: 1,
		            virtual: false,
		            template: null,
		            valueTemplate: null,
		            optionLabelTemplate: null,
		            groupTemplate: "#:data#",
		            fixedGroupTemplate: "#:data#"
		        },

		        events: [
		            "open",
		            "close",
		            CHANGE,
		            "select",
		            "filtering",
		            "dataBinding",
		            "dataBound",
		            "cascade",
		            "set"
		        ],

		        setOptions: function(options) {
		            Select.fn.setOptions.call(this, options);

		            this.listView.setOptions(this._listOptions(options));

		            this._optionLabel();
		            this._inputTemplate();
		            this._accessors();
		            this._filterHeader();
		            this._enable();
		            this._aria();

		            if (!this.value() && this.hasOptionLabel()) {
		                this.select(0);
		            }
		        },

		        destroy: function() {
		            var that = this;

		            Select.fn.destroy.call(that);

		            that.wrapper.off(ns);
		            that.element.off(ns);
		            that._inputWrapper.off(ns);

		            that._arrow.off();
		            that._arrow = null;

		            that.optionLabel.off();
		        },

		        open: function() {
		            var that = this;

		            if (that.popup.visible()) {
		                return;
		            }

		            if (!that.listView.bound() || that._state === STATE_ACCEPT) {
		                that._open = true;
		                that._state = "rebind";

		                if (that.filterInput) {
		                    that.filterInput.val("");
		                    that._prev = "";
		                }

		                that._filterSource();
		            } else if (that._allowOpening()) {
		                that.popup.one("activate", that._focusInputHandler);
		                that.popup.open();
		                that._focusItem();
		            }
		        },

		        _focusInput: function () {
		            this._focusElement(this.filterInput);
		        },

		        _allowOpening: function() {
		            return this.hasOptionLabel() || this.filterInput || this.dataSource.view().length;
		        },

		        toggle: function(toggle) {
		            this._toggle(toggle, true);
		        },

		        current: function(candidate) {
		            var current;

		            if (candidate === undefined) {
		                current = this.listView.focus();

		                if (!current && this.selectedIndex === 0 && this.hasOptionLabel()) {
		                    return this.optionLabel;
		                }

		                return current;
		            }

		            this._focus(candidate);
		        },

		        dataItem: function(index) {
		            var that = this;
		            var dataItem = null;

		            if (index === null) { return index; }

		            if (index === undefined) {
		                dataItem = that.listView.selectedDataItems()[0];
		            } else {
		                if (typeof index !== "number") {
		                    if (that.options.virtual) {
		                        return that.dataSource.getByUid($(index).data("uid"));
		                    }
		                    if (index.hasClass("k-list-optionlabel")) {
		                        index = -1;
		                    } else {
		                        index = $(that.items()).index(index);
		                    }
		                } else if (that.hasOptionLabel()) {
		                    index -= 1;
		                }

		                dataItem = that.dataSource.flatView()[index];
		            }

		            if (!dataItem) {
		                dataItem = that._optionLabelDataItem();
		            }

		            return dataItem;
		        },

		        refresh: function() {
		            this.listView.refresh();
		        },

		        text: function (text) {
		            var that = this;
		            var dataItem, loweredText;
		            var ignoreCase = that.options.ignoreCase;

		            text = text === null ? "" : text;

		            if (text !== undefined) {
		                if (typeof text === "string") {
		                    loweredText = ignoreCase ? text.toLowerCase() : text;

		                    that._select(function(data) {
		                        data = that._text(data);

		                        if (ignoreCase) {
		                            data = (data + "").toLowerCase();
		                        }

		                        return data === loweredText;
		                    });

		                    dataItem = that.dataItem();

		                    if (dataItem) {
		                        text = dataItem;
		                    }
		                }

		                that._textAccessor(text);
		            } else {
		                return that._textAccessor();
		            }
		        },

		        value: function(value) {
		            var that = this;
		            var listView = that.listView;
		            var dataSource = that.dataSource;

		            if (value === undefined) {
		                value = that._accessor() || that.listView.value()[0];
		                return value === undefined || value === null ? "" : value;
		            }

		            if (value || !that.hasOptionLabel()) {
		                that._initialIndex = null;
		            }

		            this.trigger("set", { value: value });

		            if (that._request && that.options.cascadeFrom && that.listView.bound()) {
		                if (that._valueSetter) {
		                    dataSource.unbind(CHANGE, that._valueSetter);
		                }

		                that._valueSetter = proxy(function() { that.value(value); }, that);

		                dataSource.one(CHANGE, that._valueSetter);
		                return;
		            }

		            if (that._isFilterEnabled() && listView.bound() && listView.isFiltered()) {
		                that._clearFilter();
		            } else {
		                that._fetchData();
		            }

		            listView.value(value).done(function() {
		                if (that.selectedIndex === -1 && that.text()) {
		                    that.text("");
		                    that._accessor("", -1);
		                }

		                that._old = that._accessor();
		                that._oldIndex = that.selectedIndex;
		            });
		        },

		        hasOptionLabel: function() {
		            return this.optionLabel && !!this.optionLabel[0];
		        },

		        _optionLabel: function() {
		            var that = this;
		            var options = that.options;
		            var optionLabel = options.optionLabel;
		            var template = options.optionLabelTemplate;

		            if (!optionLabel) {
		                that.optionLabel.off().remove();
		                that.optionLabel = $();
		                return;
		            }

		            if (!template) {
		                template = "#:";

		                if (typeof optionLabel === "string") {
		                    template += "data";
		                } else {
		                    template += kendo.expr(options.dataTextField, "data");
		                }

		                template += "#";
		            }

		            if (typeof template !== "function") {
		                template = kendo.template(template);
		            }

		            that.optionLabelTemplate = template;

		            if (!that.hasOptionLabel()) {
		                that.optionLabel = $('<div class="k-list-optionlabel"></div>').prependTo(that.list);
		            }

		            that.optionLabel.html(template(optionLabel))
		                            .off()
		                            .click(proxy(that._click, that))
		                            .on(HOVEREVENTS, that._toggleHover);

		            that.angular("compile", function() {
		                return { elements: that.optionLabel, data: [{ dataItem: that._optionLabelDataItem() }] };
		            });
		        },

		        _optionLabelText: function() {
		            var optionLabel = this.options.optionLabel;
		            return (typeof optionLabel === "string") ? optionLabel : this._text(optionLabel);
		        },

		        _optionLabelDataItem: function() {
		            var that = this;
		            var optionLabel = that.options.optionLabel;

		            if (that.hasOptionLabel()) {
		                return $.isPlainObject(optionLabel) ? new ObservableObject(optionLabel) : that._assignInstance(that._optionLabelText(), "");
		            }

		            return null;
		        },

		        _buildOptions: function(data) {
		            var that = this;
		            if (!that._isSelect) {
		                return;
		            }

		            var value = that.listView.value()[0];
		            var optionLabel = that._optionLabelDataItem();

		            if (value === undefined || value === null) {
		                value = "";
		            }

		            if (optionLabel) {
		                optionLabel = '<option value="' + that._value(optionLabel) + '">' + that._text(optionLabel) + "</option>";
		            }

		            that._options(data, optionLabel, value);

		            if (value !== List.unifyType(that._accessor(), typeof value)) {
		                that._customOption = null;
		                that._custom(value);
		            }
		        },

		        _listBound: function() {
		            var that = this;
		            var initialIndex = that._initialIndex;
		            var filtered = that._state === STATE_FILTER;

		            var data = that.dataSource.flatView();
		            var dataItem;

		            that._angularItems("compile");

		            that._presetValue = false;

		            that._resizePopup(true);

		            that.popup.position();

		            that._buildOptions(data);

		            that._makeUnselectable();

		            if (!filtered) {
		                if (that._open) {
		                    that.toggle(that._allowOpening());
		                }

		                that._open = false;

		                if (!that._fetch) {
		                    if (data.length) {
		                        if (!that.listView.value().length && initialIndex > -1 && initialIndex !== null) {
		                            that.select(initialIndex);
		                        }

		                        that._initialIndex = null;
		                        dataItem = that.listView.selectedDataItems()[0];
		                        if (dataItem && that.text() !== that._text(dataItem)) {
		                            that._selectValue(dataItem);
		                        }
		                    } else if (that._textAccessor() !== that._optionLabelText()) {
		                        that.listView.value("");
		                        that._selectValue(null);
		                        that._oldIndex = that.selectedIndex;
		                    }
		                }
		            }

		            that._hideBusy();
		            that.trigger("dataBound");
		        },

		        _listChange: function() {
		            this._selectValue(this.listView.selectedDataItems()[0]);

		            if (this._presetValue || (this._old && this._oldIndex === -1)) {
		                this._oldIndex = this.selectedIndex;
		            }
		        },

		        _focusHandler: function() {
		            this.wrapper.focus();
		        },

		        _focusinHandler: function() {
		            this._inputWrapper.addClass(FOCUSED);
		            this._prevent = false;
		        },

		        _focusoutHandler: function() {
		            var that = this;
		            var filtered = that._state === STATE_FILTER;
		            var isIFrame = window.self !== window.top;
		            var focusedItem = that._focus();

		            if (!that._prevent) {
		                clearTimeout(that._typingTimeout);

		                if (filtered && focusedItem && !that.trigger("select", { item: focusedItem })) {
		                    that._select(focusedItem, !that.dataSource.view().length);
		                }

		                if (support.mobileOS.ios && isIFrame) {
		                    that._change();
		                } else {
		                    that._blur();
		                }

		                that._inputWrapper.removeClass(FOCUSED);
		                that._prevent = true;
		                that._open = false;
		                that.element.blur();
		            }
		        },

		        _wrapperMousedown: function() {
		            this._prevent = !!this.filterInput;
		        },

		        _wrapperClick: function(e) {
		            e.preventDefault();
		            this.popup.unbind("activate", this._focusInputHandler);
		            this._focused = this.wrapper;
		            this._toggle();
		        },

		        _editable: function(options) {
		            var that = this;
		            var element = that.element;
		            var disable = options.disable;
		            var readonly = options.readonly;
		            var wrapper = that.wrapper.add(that.filterInput).off(ns);
		            var dropDownWrapper = that._inputWrapper.off(HOVEREVENTS);

		            if (!readonly && !disable) {
		                element.removeAttr(DISABLED).removeAttr(READONLY);

		                dropDownWrapper
		                    .addClass(DEFAULT)
		                    .removeClass(STATEDISABLED)
		                    .on(HOVEREVENTS, that._toggleHover);

		                wrapper
		                    .attr(TABINDEX, wrapper.data(TABINDEX))
		                    .attr(ARIA_DISABLED, false)
		                    .attr(ARIA_READONLY, false)
		                    .on("keydown" + ns, proxy(that._keydown, that))
		                    .on("focusin" + ns, proxy(that._focusinHandler, that))
		                    .on("focusout" + ns, proxy(that._focusoutHandler, that))
		                    .on("mousedown" + ns, proxy(that._wrapperMousedown, that));

		                that.wrapper.on("click" + ns, proxy(that._wrapperClick, that));

		                if (!that.filterInput) {
		                    wrapper.on("keypress" + ns, proxy(that._keypress, that));
		                }

		            } else if (disable) {
		                wrapper.removeAttr(TABINDEX);
		                dropDownWrapper
		                    .addClass(STATEDISABLED)
		                    .removeClass(DEFAULT);
		            } else {
		                dropDownWrapper
		                    .addClass(DEFAULT)
		                    .removeClass(STATEDISABLED);

		                wrapper
		                    .on("focusin" + ns, proxy(that._focusinHandler, that))
		                    .on("focusout" + ns, proxy(that._focusoutHandler, that));
		            }

		            element.attr(DISABLED, disable)
		                   .attr(READONLY, readonly);

		            wrapper.attr(ARIA_DISABLED, disable)
		                   .attr(ARIA_READONLY, readonly);
		        },

		        _keydown: function(e) {
		            var that = this;
		            var key = e.keyCode;
		            var altKey = e.altKey;
		            var isInputActive;
		            var handled;

		            var isPopupVisible = that.popup.visible();

		            if (that.filterInput) {
		                isInputActive = that.filterInput[0] === activeElement();
		            }

		            if (key === keys.LEFT) {
		                key = keys.UP;
		                handled = true;
		            } else if (key === keys.RIGHT) {
		                key = keys.DOWN;
		                handled = true;
		            }

		            if (handled && isInputActive) {
		                return;
		            }

		            e.keyCode = key;

		            if ((altKey && key === keys.UP) || key === keys.ESC) {
		                that._focusElement(that.wrapper);
		            }

		            if (key === keys.ENTER && that._typingTimeout && that.filterInput && isPopupVisible) {
		                e.preventDefault();
		                return;
		            }

		            handled = that._move(e);

		            if (handled) {
		                return;
		            }

		            if (!isPopupVisible || !that.filterInput) {
		                var current = that._focus();

		                if (key === keys.HOME) {
		                    handled = true;
		                    that._firstItem();
		                } else if (key === keys.END) {
		                    handled = true;
		                    that._lastItem();
		                }

		                if (handled) {
		                    if (that.trigger("select", { item: that._focus() })) {
		                        that._focus(current);
		                        return;
		                    }

		                    that._select(that._focus(), true);

		                    if (!isPopupVisible) {
		                        that._blur();
		                    }
		                }
		            }

		            if (!altKey && !handled && that.filterInput) {
		                that._search();
		            }
		        },

		        _matchText: function(text, word) {
		            var ignoreCase = this.options.ignoreCase;

		            if (text === undefined || text === null) {
		                return false;
		            }

		            text = text + "";

		            if (ignoreCase) {
		                text = text.toLowerCase();
		            }

		            return text.indexOf(word) === 0;
		        },

		        _shuffleData: function(data, splitIndex) {
		            var optionDataItem = this._optionLabelDataItem();

		            if (optionDataItem) {
		                data = [optionDataItem].concat(data);
		            }

		            return data.slice(splitIndex).concat(data.slice(0, splitIndex));
		        },

		        _selectNext: function() {
		            var that = this;
		            var data = that.dataSource.flatView();
		            var dataLength = data.length + (that.hasOptionLabel() ? 1 : 0);
		            var isInLoop = sameCharsOnly(that._word, that._last);
		            var startIndex = that.selectedIndex;
		            var oldFocusedItem;
		            var text;

		            if (startIndex === -1) {
		                startIndex = 0;
		            } else {
		                startIndex += isInLoop ? 1 : 0;
		                startIndex = normalizeIndex(startIndex, dataLength);
		            }

		            data = data.toJSON ? data.toJSON() : data.slice();
		            data = that._shuffleData(data, startIndex);

		            for (var idx = 0; idx < dataLength; idx++) {
		                text = that._text(data[idx]);

		                if (isInLoop && that._matchText(text, that._last)) {
		                    break;
		                } else if (that._matchText(text, that._word)) {
		                    break;
		                }
		            }

		            if (idx !== dataLength) {
		                oldFocusedItem = that._focus();

		                that._select(normalizeIndex(startIndex + idx, dataLength));

		                if (that.trigger("select", { item: that._focus() })) {
		                    that._select(oldFocusedItem);
		                }

		                if (!that.popup.visible()) {
		                    that._change();
		                }
		            }
		        },

		        _keypress: function(e) {
		            var that = this;

		            if (e.which === 0 || e.keyCode === kendo.keys.ENTER) {
		                return;
		            }

		            var character = String.fromCharCode(e.charCode || e.keyCode);

		            if (that.options.ignoreCase) {
		                character = character.toLowerCase();
		            }

		            if (character === " ") {
		                e.preventDefault();
		            }

		            that._word += character;
		            that._last = character;

		            that._search();
		        },

		        _popupOpen: function() {
		            var popup = this.popup;

		            popup.wrapper = kendo.wrap(popup.element);

		            if (popup.element.closest(".km-root")[0]) {
		                popup.wrapper.addClass("km-popup km-widget");
		                this.wrapper.addClass("km-widget");
		            }
		        },

		        _popup: function() {
		            Select.fn._popup.call(this);
		            this.popup.one("open", proxy(this._popupOpen, this));
		        },

		        _click: function (e) {
		            var item = e.item || $(e.currentTarget);

		            e.preventDefault();

		            if (this.trigger("select", { item: item })) {
		                this.close();
		                return;
		            }

		            this._userTriggered = true;

		            this._select(item);
		            this._focusElement(this.wrapper);

		            this._blur();
		        },

		        _focusElement: function(element) {
		            var active = activeElement();
		            var wrapper = this.wrapper;
		            var filterInput = this.filterInput;
		            var compareElement = element === filterInput ? wrapper : filterInput;
		            var touchEnabled = support.mobileOS && (support.touch || support.MSPointers || support.pointers);

		            if (filterInput && filterInput[0] === element[0] && touchEnabled) {
		                return;
		            }

		            if (filterInput && compareElement[0] === active) {
		                this._prevent = true;
		                this._focused = element.focus();
		            }
		        },

		        _filter: function(word) {
		            if (word) {
		                var that = this;
		                var ignoreCase = that.options.ignoreCase;

		                if (ignoreCase) {
		                    word = word.toLowerCase();
		                }

		                that._select(function(dataItem) {
		                    return that._matchText(that._text(dataItem), word);
		                });
		            }
		        },

		        _search: function() {
		            var that = this;
		            var dataSource = that.dataSource;

		            clearTimeout(that._typingTimeout);

		            if (that._isFilterEnabled()) {
		                that._typingTimeout = setTimeout(function() {
		                    var value = that.filterInput.val();

		                    if (that._prev !== value) {
		                        that._prev = value;
		                        that.search(value);
		                    }

		                    that._typingTimeout = null;
		                }, that.options.delay);
		            } else {
		                that._typingTimeout = setTimeout(function() {
		                    that._word = "";
		                }, that.options.delay);

		                if (!that.listView.bound()) {
		                    dataSource.fetch().done(function () {
		                        that._selectNext();
		                    });
		                    return;
		                }

		                that._selectNext();
		            }
		        },

		        _get: function(candidate) {
		            var data, found, idx;
		            var isFunction = typeof candidate === "function";
		            var jQueryCandidate = !isFunction ? $(candidate) : $();

		            if (this.hasOptionLabel()) {
		                if (typeof candidate === "number") {
		                    if (candidate > -1) {
		                        candidate -= 1;
		                    }
		                } else if (jQueryCandidate.hasClass("k-list-optionlabel")) {
		                    candidate = -1;
		                }
		            }

		            if (isFunction) {
		                data = this.dataSource.flatView();

		                for (idx = 0; idx < data.length; idx++) {
		                    if (candidate(data[idx])) {
		                        candidate = idx;
		                        found = true;
		                        break;
		                    }
		                }

		                if (!found) {
		                    candidate = -1;
		                }
		            }

		            return candidate;
		        },

		        _firstItem: function() {
		            if (this.hasOptionLabel()) {
		                this._focus(this.optionLabel);
		            } else {
		                this.listView.focusFirst();
		            }
		        },

		        _lastItem: function() {
		            this._resetOptionLabel();
		            this.listView.focusLast();
		        },

		        _nextItem: function() {
		            if (this.optionLabel.hasClass("k-state-focused")) {
		                this._resetOptionLabel();
		                this.listView.focusFirst();
		            } else {
		                this.listView.focusNext();
		            }
		        },

		        _prevItem: function() {
		            if (this.optionLabel.hasClass("k-state-focused")) {
		                return;
		            }

		            this.listView.focusPrev();
		            if (!this.listView.focus()) {
		                this._focus(this.optionLabel);
		            }
		        },

		        _focusItem: function() {
		            var listView = this.listView;
		            var focusedItem = listView.focus();
		            var index = listView.select();

		            index = index[index.length - 1];

		            if (index === undefined && this.options.highlightFirst && !focusedItem) {
		                index = 0;
		            }

		            if (index !== undefined) {
		                listView.focus(index);
		            } else {
		                if (this.options.optionLabel) {
		                    this._focus(this.optionLabel);
		                    this._select(this.optionLabel);
		                } else {
		                    listView.scrollToIndex(0);
		                }
		            }
		        },

		        _resetOptionLabel: function(additionalClass) {
		            this.optionLabel.removeClass("k-state-focused" + (additionalClass || "")).removeAttr("id");
		        },

		        _focus: function(candidate) {
		            var listView = this.listView;
		            var optionLabel = this.optionLabel;

		            if (candidate === undefined) {
		                candidate = listView.focus();

		                if (!candidate && optionLabel.hasClass("k-state-focused")) {
		                    candidate = optionLabel;
		                }

		                return candidate;
		            }

		            this._resetOptionLabel();

		            candidate = this._get(candidate);

		            listView.focus(candidate);

		            if (candidate === -1) {
		                optionLabel.addClass("k-state-focused")
		                           .attr("id", listView._optionID);

		                this._focused.add(this.filterInput)
		                    .removeAttr("aria-activedescendant")
		                    .attr("aria-activedescendant", listView._optionID);
		            }
		        },

		        _select: function(candidate, keepState) {
		            var that = this;

		            candidate = that._get(candidate);

		            that.listView.select(candidate);

		            if (!keepState && that._state === STATE_FILTER) {
		                that._state = STATE_ACCEPT;
		            }

		            if (candidate === -1) {
		                that._selectValue(null);
		            }
		        },

		        _selectValue: function(dataItem) {
		            var that = this;
		            var optionLabel = that.options.optionLabel;
		            var idx = that.listView.select();

		            var value = "";
		            var text = "";

		            idx = idx[idx.length - 1];
		            if (idx === undefined) {
		                idx = -1;
		            }

		            this._resetOptionLabel(" k-state-selected");

		            if (dataItem) {
		                text = dataItem;
		                value = that._dataValue(dataItem);
		                if (optionLabel) {
		                    idx += 1;
		                }
		            } else if (optionLabel) {
		                that._focus(that.optionLabel.addClass("k-state-selected"));

		                text = that._optionLabelText();

		                if (typeof optionLabel === "string") {
		                    value = "";
		                } else {
		                    value = that._value(optionLabel);
		                }

		                idx = 0;
		            }

		            that.selectedIndex = idx;

		            if (value === null) {
		                value = "";
		            }

		            that._textAccessor(text);
		            that._accessor(value, idx);

		            that._triggerCascade();
		        },

		        _mobile: function() {
		            var that = this,
		                popup = that.popup,
		                mobileOS = support.mobileOS,
		                root = popup.element.parents(".km-root").eq(0);

		            if (root.length && mobileOS) {
		                popup.options.animation.open.effects = (mobileOS.android || mobileOS.meego) ? "fadeIn" : (mobileOS.ios || mobileOS.wp) ? "slideIn:up" : popup.options.animation.open.effects;
		            }
		        },

		        _filterHeader: function() {
		            var icon;

		            if (this.filterInput) {
		                this.filterInput
		                    .off(ns)
		                    .parent()
		                    .remove();

		                this.filterInput = null;
		            }

		            if (this._isFilterEnabled()) {
		                icon = '<span unselectable="on" class="k-icon k-i-search">select</span>';

		                this.filterInput = $('<input class="k-textbox"/>')
		                                      .attr({
		                                          placeholder: this.element.attr("placeholder"),
		                                          role: "listbox",
		                                          "aria-haspopup": true,
		                                          "aria-expanded": false
		                                      });

		                this.list
		                    .prepend($('<span class="k-list-filter" />')
		                    .append(this.filterInput.add(icon)));
		            }
		        },

		        _span: function() {
		            var that = this,
		                wrapper = that.wrapper,
		                SELECTOR = "span.k-input",
		                span;

		            span = wrapper.find(SELECTOR);

		            if (!span[0]) {
		                wrapper.append('<span unselectable="on" class="k-dropdown-wrap k-state-default"><span unselectable="on" class="k-input">&nbsp;</span><span unselectable="on" class="k-select"><span unselectable="on" class="k-icon k-i-arrow-s">select</span></span></span>')
		                       .append(that.element);

		                span = wrapper.find(SELECTOR);
		            }

		            that.span = span;
		            that._inputWrapper = $(wrapper[0].firstChild);
		            that._arrow = wrapper.find(".k-icon");
		        },

		        _wrapper: function() {
		            var that = this,
		                element = that.element,
		                DOMelement = element[0],
		                wrapper;

		            wrapper = element.parent();

		            if (!wrapper.is("span.k-widget")) {
		                wrapper = element.wrap("<span />").parent();
		                wrapper[0].style.cssText = DOMelement.style.cssText;
		                wrapper[0].title = DOMelement.title;
		            }

		            element.hide();

		            that._focused = that.wrapper = wrapper
		                              .addClass("k-widget k-dropdown k-header")
		                              .addClass(DOMelement.className)
		                              .css("display", "")
		                              .attr({
		                                  accesskey: element.attr("accesskey"),
		                                  unselectable: "on",
		                                  role: "listbox",
		                                  "aria-haspopup": true,
		                                  "aria-expanded": false
		                              });
		        },

		        _clearSelection: function(parent) {
		            this.select(parent.value() ? 0 : -1);
		        },

		        _inputTemplate: function() {
		            var that = this,
		                template = that.options.valueTemplate;


		            if (!template) {
		                template = $.proxy(kendo.template('#:this._text(data)#', { useWithBlock: false }), that);
		            } else {
		                template = kendo.template(template);
		            }

		            that.valueTemplate = template;

		            if (that.hasOptionLabel() && !that.options.optionLabelTemplate) {
		                try {
		                    that.valueTemplate(that._optionLabelDataItem());
		                } catch(e) {
		                    throw new Error(MSG_INVALID_OPTION_LABEL);
		                }
		            }
		        },

		        _textAccessor: function(text) {
		            var dataItem = null;
		            var template = this.valueTemplate;
		            var options = this.options;
		            var optionLabel = options.optionLabel;
		            var span = this.span;

		            if (text !== undefined) {
		                if ($.isPlainObject(text) || text instanceof ObservableObject) {
		                    dataItem = text;
		                } else if (optionLabel && this._optionLabelText() === text) {
		                    dataItem = optionLabel;
		                    template = this.optionLabelTemplate;
		                }

		                if (!dataItem) {
		                    dataItem = this._assignInstance(text, this._accessor());
		                }

		                var getElements = function(){
		                    return {
		                        elements: span.get(),
		                        data: [ { dataItem: dataItem } ]
		                    };
		                };
		                this.angular("cleanup", getElements);

		                try {
		                    span.html(template(dataItem));
		                } catch(e) {
		                    //dataItem has missing fields required in custom template
		                    span.html("");
		                }

		                this.angular("compile", getElements);
		            } else {
		                return span.text();
		            }
		        },

		        _preselect: function(value, text) {
		            if (!value && !text) {
		                text = this._optionLabelText();
		            }

		            this._accessor(value);
		            this._textAccessor(text);

		            this._old = this._accessor();
		            this._oldIndex = this.selectedIndex;

		            this.listView.setValue(value);

		            this._initialIndex = null;
		            this._presetValue = true;
		        },

		        _assignInstance: function(text, value) {
		            var dataTextField = this.options.dataTextField;
		            var dataItem = {};

		            if (dataTextField) {
		                assign(dataItem, dataTextField.split("."), text);
		                assign(dataItem, this.options.dataValueField.split("."), value);
		                dataItem = new ObservableObject(dataItem);
		            } else {
		                dataItem = text;
		            }

		            return dataItem;
		        }
		    });

		    function assign(instance, fields, value) {
		        var idx = 0,
		            lastIndex = fields.length - 1,
		            field;

		        for (; idx < lastIndex; ++idx) {
		            field = fields[idx];

		            if (!(field in instance)) {
		                instance[field] = {};
		            }

		            instance = instance[field];
		        }

		        instance[fields[lastIndex]] = value;
		    }

		    function normalizeIndex(index, length) {
		        if (index >= length) {
		            index -= length;
		        }
		        return index;
		    }

		    function sameCharsOnly(word, character) {
		        for (var idx = 0; idx < word.length; idx++) {
		            if (word.charAt(idx) !== character) {
		                return false;
		            }
		        }
		        return true;
		    }

		    ui.plugin(DropDownList);
		})(window.kendo.jQuery);

		return window.kendo;

		}, __webpack_require__(422));


	/***/ }

	/******/ });

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ({

	/***/ 0:
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(458);


	/***/ },

	/***/ 422:
	/***/ function(module, exports) {

		module.exports = function() { throw new Error("define cannot be used indirect"); };


	/***/ },

	/***/ 429:
	/***/ function(module, exports) {

		module.exports = __webpack_require__(5);

	/***/ },

	/***/ 435:
	/***/ function(module, exports) {

		module.exports = __webpack_require__(9);

	/***/ },

	/***/ 458:
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
		    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(429), __webpack_require__(435) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		})(function(){

		var __meta__ = { // jshint ignore:line
		    id: "list",
		    name: "List",
		    category: "framework",
		    depends: [ "data", "popup" ],
		    hidden: true
		};

		/*jshint evil: true*/
		(function($, undefined) {
		    var kendo = window.kendo,
		        ui = kendo.ui,
		        Widget = ui.Widget,
		        keys = kendo.keys,
		        support = kendo.support,
		        htmlEncode = kendo.htmlEncode,
		        activeElement = kendo._activeElement,
		        ObservableArray = kendo.data.ObservableArray,
		        ID = "id",
		        CHANGE = "change",
		        FOCUSED = "k-state-focused",
		        HOVER = "k-state-hover",
		        LOADING = "k-loading",
		        OPEN = "open",
		        CLOSE = "close",
		        CASCADE = "cascade",
		        SELECT = "select",
		        SELECTED = "selected",
		        REQUESTSTART = "requestStart",
		        REQUESTEND = "requestEnd",
		        WIDTH = "width",
		        extend = $.extend,
		        proxy = $.proxy,
		        isArray = $.isArray,
		        browser = support.browser,
		        isIE8 = browser.msie && browser.version < 9,
		        quotRegExp = /"/g,
		        alternativeNames = {
		            "ComboBox": "DropDownList",
		            "DropDownList": "ComboBox"
		        };

		    var List = kendo.ui.DataBoundWidget.extend({
		        init: function(element, options) {
		            var that = this,
		                ns = that.ns,
		                id;

		            Widget.fn.init.call(that, element, options);
		            element = that.element;
		            options = that.options;

		            that._isSelect = element.is(SELECT);

		            if (that._isSelect && that.element[0].length) {
		                if (!options.dataSource) {
		                    options.dataTextField = options.dataTextField || "text";
		                    options.dataValueField = options.dataValueField || "value";
		                }
		            }

		            that.ul = $('<ul unselectable="on" class="k-list k-reset"/>')
		                        .attr({
		                            tabIndex: -1,
		                            "aria-hidden": true
		                        });

		            that.list = $("<div class='k-list-container'/>")
		                        .append(that.ul)
		                        .on("mousedown" + ns, proxy(that._listMousedown, that));

		            id = element.attr(ID);

		            if (id) {
		                that.list.attr(ID, id + "-list");
		                that.ul.attr(ID, id + "_listbox");
		            }

		            that._header();
		            that._accessors();
		            that._initValue();
		        },

		        options: {
		            valuePrimitive: false,
		            headerTemplate: ""
		        },

		        setOptions: function(options) {
		            Widget.fn.setOptions.call(this, options);

		            if (options && options.enable !== undefined) {
		                options.enabled = options.enable;
		            }
		        },

		        focus: function() {
		            this._focused.focus();
		        },

		        readonly: function(readonly) {
		            this._editable({
		                readonly: readonly === undefined ? true : readonly,
		                disable: false
		            });
		        },

		        enable: function(enable) {
		            this._editable({
		                readonly: false,
		                disable: !(enable = enable === undefined ? true : enable)
		            });
		        },

		        _listOptions: function(options) {
		            var that = this;
		            var currentOptions = that.options;
		            var virtual = currentOptions.virtual;
		            var listBoundHandler = proxy(that._listBound, that);

		            virtual = typeof virtual === "object" ? virtual : {};

		            options = $.extend({
		                autoBind: false,
		                selectable: true,
		                dataSource: that.dataSource,
		                click: proxy(that._click, that),
		                change: proxy(that._listChange, that),
		                activate: proxy(that._activateItem, that),
		                deactivate: proxy(that._deactivateItem, that),
		                dataBinding: function() {
		                    that.trigger("dataBinding");
		                    that._angularItems("cleanup");
		                },
		                dataBound: listBoundHandler,
		                listBound: listBoundHandler,
		                height: currentOptions.height,
		                dataValueField: currentOptions.dataValueField,
		                dataTextField: currentOptions.dataTextField,
		                groupTemplate: currentOptions.groupTemplate,
		                fixedGroupTemplate: currentOptions.fixedGroupTemplate,
		                template: currentOptions.template
		            }, options, virtual);

		            if (!options.template) {
		                options.template = "#:" + kendo.expr(options.dataTextField, "data") + "#";
		            }

		            return options;
		        },

		        _initList: function() {
		            var that = this;
		            var listOptions = that._listOptions({
		                selectedItemChange: proxy(that._listChange, that)
		            });

		            if (!that.options.virtual) {
		                that.listView = new kendo.ui.StaticList(that.ul, listOptions);
		            } else {
		                that.listView = new kendo.ui.VirtualList(that.ul, listOptions);
		            }

		            that._setListValue();
		        },

		        _setListValue: function(value) {
		            value = value || this.options.value;

		            if (value !== undefined) {
		                this.listView.value(value)
		                    .done(proxy(this._updateSelectionState, this));
		            }
		        },

		        _updateSelectionState: $.noop,

		        _listMousedown: function(e) {
		            if (!this.filterInput || this.filterInput[0] !== e.target) {
		                e.preventDefault();
		            }
		        },

		        _isFilterEnabled: function() {
		            var filter = this.options.filter;
		            return filter && filter !== "none";
		        },

		        _clearFilter: function() {
		            if (!this.options.virtual) {
		                this.listView.bound(false);
		            }

		            this._filterSource();
		        },

		        _filterSource: function(filter, force) {
		            var that = this;
		            var options = that.options;
		            var dataSource = that.dataSource;
		            var expression = extend({}, dataSource.filter() || {});

		            var removed = removeFiltersForField(expression, options.dataTextField);

		            if ((filter || removed) && that.trigger("filtering", { filter: filter })) {
		                return;
		            }

		            expression = {
		                filters: expression.filters || [],
		                logic: "and"
		            };

		            if (filter) {
		                expression.filters.push(filter);
		            }

		            if (that._cascading) {
		                this.listView.setDSFilter(expression);
		            }

		            if (!force) {
		                dataSource.filter(expression);
		            } else {
		                dataSource.read({ filter: expression });
		            }
		        },

		        _header: function() {
		            var that = this;
		            var template = that.options.headerTemplate;
		            var header;

		            if ($.isFunction(template)) {
		                template = template({});
		            }

		            if (template) {
		                that.list.prepend(template);

		                header = that.ul.prev();

		                that.header = header[0] ? header : null;
		                if (that.header) {
		                    that.angular("compile", function(){
		                        return { elements: that.header };
		                    });
		                }
		            }
		        },

		        _initValue: function() {
		            var that = this,
		                value = that.options.value;

		            if (value !== null) {
		                that.element.val(value);
		            } else {
		                value = that._accessor();
		                that.options.value = value;
		            }

		            that._old = value;
		        },

		        _ignoreCase: function() {
		            var that = this,
		                model = that.dataSource.reader.model,
		                field;

		            if (model && model.fields) {
		                field = model.fields[that.options.dataTextField];

		                if (field && field.type && field.type !== "string") {
		                    that.options.ignoreCase = false;
		                }
		            }
		        },

		        _focus: function(candidate) {
		            return this.listView.focus(candidate);
		        },

		        current: function(candidate) {
		            return this._focus(candidate);
		        },

		        items: function() {
		            return this.ul[0].children;
		        },

		        destroy: function() {
		            var that = this;
		            var ns = that.ns;

		            Widget.fn.destroy.call(that);

		            that._unbindDataSource();

		            that.listView.destroy();
		            that.list.off(ns);

		            that.popup.destroy();

		            if (that._form) {
		                that._form.off("reset", that._resetHandler);
		            }
		        },

		        dataItem: function(index) {
		            var that = this;

		            if (index === undefined) {
		                return that.listView.selectedDataItems()[0];
		            }

		            if (typeof index !== "number") {
		                if (that.options.virtual) {
		                    return that.dataSource.getByUid($(index).data("uid"));
		                }

		                index = $(that.items()).index(index);
		            }

		            return that.dataSource.flatView()[index];
		        },

		        _activateItem: function() {
		            var current = this.listView.focus();
		            if (current) {
		                this._focused.add(this.filterInput).attr("aria-activedescendant", current.attr("id"));
		            }
		        },

		        _deactivateItem: function() {
		            this._focused.add(this.filterInput).removeAttr("aria-activedescendant");
		        },

		        _accessors: function() {
		            var that = this;
		            var element = that.element;
		            var options = that.options;
		            var getter = kendo.getter;
		            var textField = element.attr(kendo.attr("text-field"));
		            var valueField = element.attr(kendo.attr("value-field"));

		            if (!options.dataTextField && textField) {
		                options.dataTextField = textField;
		            }

		            if (!options.dataValueField && valueField) {
		                options.dataValueField = valueField;
		            }

		            that._text = getter(options.dataTextField);
		            that._value = getter(options.dataValueField);
		        },

		        _aria: function(id) {
		            var that = this,
		                options = that.options,
		                element = that._focused.add(that.filterInput);

		            if (options.suggest !== undefined) {
		                element.attr("aria-autocomplete", options.suggest ? "both" : "list");
		            }

		            id = id ? id + " " + that.ul[0].id : that.ul[0].id;

		            element.attr("aria-owns", id);

		            that.ul.attr("aria-live", !that._isFilterEnabled() ? "off" : "polite");
		        },

		        _blur: function() {
		            var that = this;

		            that._change();
		            that.close();
		        },

		        _change: function() {
		            var that = this;
		            var index = that.selectedIndex;
		            var optionValue = that.options.value;
		            var value = that.value();
		            var trigger;

		            if (that._isSelect && !that.listView.bound() && optionValue) {
		                value = optionValue;
		            }

		            if (value !== unifyType(that._old, typeof value)) {
		                trigger = true;
		            } else if (index !== undefined && index !== that._oldIndex) {
		                trigger = true;
		            }

		            if (trigger) {
		                that._old = value;
		                that._oldIndex = index;

		                if (!that._typing) {
		                    // trigger the DOM change event so any subscriber gets notified
		                    that.element.trigger(CHANGE);
		                }

		                that.trigger(CHANGE);
		            }

		            that.typing = false;
		        },

		        _data: function() {
		            return this.dataSource.view();
		        },

		        _enable: function() {
		            var that = this,
		                options = that.options,
		                disabled = that.element.is("[disabled]");

		            if (options.enable !== undefined) {
		                options.enabled = options.enable;
		            }

		            if (!options.enabled || disabled) {
		                that.enable(false);
		            } else {
		                that.readonly(that.element.is("[readonly]"));
		            }
		        },

		        _dataValue: function(dataItem) {
		            var value = this._value(dataItem);

		            if (value === undefined) {
		                value = this._text(dataItem);
		            }

		            return value;
		        },

		        _offsetHeight: function() {
		            var offsetHeight = 0;
		            var siblings = this.listView.content.prevAll(":visible");

		            siblings.each(function() {
		                var element = $(this);

		                if (element.hasClass("k-list-filter")) {
		                    offsetHeight += element.children().outerHeight();
		                } else {
		                    offsetHeight += element.outerHeight();
		                }
		            });

		            return offsetHeight;
		        },

		        _height: function(length) {
		            var that = this;
		            var list = that.list;
		            var height = that.options.height;
		            var visible = that.popup.visible();
		            var offsetTop;
		            var popups;

		            if (length) {
		                popups = list.add(list.parent(".k-animation-container")).show();

		                if (!list.is(":visible")) {
		                    popups.hide();
		                    return;
		                }

		                height = that.listView.content[0].scrollHeight > height ? height : "auto";

		                popups.height(height);

		                if (height !== "auto") {
		                    offsetTop = that._offsetHeight();

		                    if (offsetTop) {
		                        height -= offsetTop;
		                    }
		                }

		                that.listView.content.height(height);

		                if (!visible) {
		                    popups.hide();
		                }
		            }

		            return height;
		        },

		        _adjustListWidth: function() {
		            var list = this.list,
		                width = list[0].style.width,
		                wrapper = this.wrapper,
		                computedStyle, computedWidth;

		            if (!list.data(WIDTH) && width) {
		                return;
		            }

		            computedStyle = window.getComputedStyle ? window.getComputedStyle(wrapper[0], null) : 0;
		            computedWidth = parseFloat(computedStyle  && computedStyle.width) || wrapper.outerWidth();

		            if (computedStyle && browser.msie) { // getComputedStyle returns different box in IE.
		                computedWidth += parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight) + parseFloat(computedStyle.borderLeftWidth) + parseFloat(computedStyle.borderRightWidth);
		            }

		            if (list.css("box-sizing") !== "border-box") {
		                width = computedWidth - (list.outerWidth() - list.width());
		            } else {
		                width = computedWidth;
		            }

		            list.css({
		                fontFamily: wrapper.css("font-family"),
		                width: width
		            })
		            .data(WIDTH, width);

		            return true;
		        },

		        _openHandler: function(e) {
		            this._adjustListWidth();

		            if (this.trigger(OPEN)) {
		                e.preventDefault();
		            } else {
		                this._focused.attr("aria-expanded", true);
		                this.ul.attr("aria-hidden", false);
		            }
		        },

		        _closeHandler: function(e) {
		            if (this.trigger(CLOSE)) {
		                e.preventDefault();
		            } else {
		                this._focused.attr("aria-expanded", false);
		                this.ul.attr("aria-hidden", true);
		            }
		        },

		        _focusItem: function() {
		            var listView = this.listView;
		            var focusedItem = listView.focus();
		            var index = listView.select();

		            index = index[index.length - 1];

		            if (index === undefined && this.options.highlightFirst && !focusedItem) {
		                index = 0;
		            }

		            if (index !== undefined) {
		                listView.focus(index);
		            } else {
		                listView.scrollToIndex(0);
		            }
		        },

		        _calculateGroupPadding: function(height) {
		            var li = this.ul.children(".k-first:first");
		            var groupHeader = this.listView.content.prev(".k-group-header");
		            var padding = 0;

		            if (groupHeader[0] && groupHeader[0].style.display !== "none") {
		                if (height !== "auto") {
		                    padding = kendo.support.scrollbar();
		                }

		                padding += parseFloat(li.css("border-right-width"), 10) + parseFloat(li.children(".k-group").css("padding-right"), 10);

		                groupHeader.css("padding-right", padding);
		            }
		        },

		        _calculatePopupHeight: function(force) {
		            var height = this._height(this.dataSource.flatView().length || force);
		            this._calculateGroupPadding(height);
		        },

		        _resizePopup: function(force) {
		            if (this.options.virtual) {
		                return;
		            }

		            if (!this.popup.element.is(":visible")) {
		                this.popup.one("open", (function(force) {
		                    return proxy(function() {
		                        this._calculatePopupHeight(force);
		                    }, this);
		                }).call(this, force));
		            } else {
		                this._calculatePopupHeight(force);
		            }
		        },

		        _popup: function() {
		            var that = this;

		            that.popup = new ui.Popup(that.list, extend({}, that.options.popup, {
		                anchor: that.wrapper,
		                open: proxy(that._openHandler, that),
		                close: proxy(that._closeHandler, that),
		                animation: that.options.animation,
		                isRtl: support.isRtl(that.wrapper)
		            }));
		        },

		        _makeUnselectable: function() {
		            if (isIE8) {
		                this.list.find("*").not(".k-textbox").attr("unselectable", "on");
		            }
		        },

		        _toggleHover: function(e) {
		            $(e.currentTarget).toggleClass(HOVER, e.type === "mouseenter");
		        },

		        _toggle: function(open, preventFocus) {
		            var that = this;
		            var touchEnabled = support.mobileOS && (support.touch || support.MSPointers || support.pointers);

		            open = open !== undefined? open : !that.popup.visible();

		            if (!preventFocus && !touchEnabled && that._focused[0] !== activeElement()) {
		                that._prevent = true;
		                that._focused.focus();
		                that._prevent = false;
		            }

		            that[open ? OPEN : CLOSE]();
		        },

		        _triggerCascade: function() {
		            var that = this;

		            if (!that._cascadeTriggered || that._old !== that.value() || that._oldIndex !== that.selectedIndex) {
		                that._cascadeTriggered = true;
		                that.trigger(CASCADE, { userTriggered: that._userTriggered });
		            }
		        },

		        _triggerChange: function() {
		            if (this._valueBeforeCascade !== this.value()) {
		                this.trigger(CHANGE);
		            }
		        },

		        _unbindDataSource: function() {
		            var that = this;

		            that.dataSource.unbind(REQUESTSTART, that._requestStartHandler)
		                           .unbind(REQUESTEND, that._requestEndHandler)
		                           .unbind("error", that._errorHandler);
		        }
		    });

		    function unifyType(value, type) {
		        if (value !== undefined && value !== "" && value !== null) {
		            if (type === "boolean") {
		                value = Boolean(value);
		            } else if (type === "number") {
		                value = Number(value);
		            } else if (type === "string") {
		                value = value.toString();
		            }
		        }

		        return value;
		    }

		    extend(List, {
		        inArray: function(node, parentNode) {
		            var idx, length, siblings = parentNode.children;

		            if (!node || node.parentNode !== parentNode) {
		                return -1;
		            }

		            for (idx = 0, length = siblings.length; idx < length; idx++) {
		                if (node === siblings[idx]) {
		                    return idx;
		                }
		            }

		            return -1;
		        },
		        unifyType: unifyType
		    });

		    kendo.ui.List = List;

		    ui.Select = List.extend({
		        init: function(element, options) {
		            List.fn.init.call(this, element, options);
		            this._initial = this.element.val();
		        },

		        setDataSource: function(dataSource) {
		            var that = this;
		            var parent;

		            that.options.dataSource = dataSource;

		            that._dataSource();

		            if (that.listView.bound()) {
		                that._initialIndex = null;
		            }

		            that.listView.setDataSource(that.dataSource);

		            if (that.options.autoBind) {
		                that.dataSource.fetch();
		            }

		            parent = that._parentWidget();

		            if (parent) {
		                that._cascadeSelect(parent);
		            }
		        },

		        close: function() {
		            this.popup.close();
		        },

		        select: function(candidate) {
		            var that = this;

		            if (candidate === undefined) {
		                return that.selectedIndex;
		            } else {
		                that._select(candidate);

		                that._old = that._accessor();
		                that._oldIndex = that.selectedIndex;
		            }
		        },

		        search: function(word) {
		            word = typeof word === "string" ? word : this.text();
		            var that = this;
		            var length = word.length;
		            var options = that.options;
		            var ignoreCase = options.ignoreCase;
		            var field = options.dataTextField;

		            clearTimeout(that._typingTimeout);

		            if (!length || length >= options.minLength) {
		                that._state = "filter";

		                if (!that._isFilterEnabled()) {
		                    that._filter(word);
		                } else {
		                    that._open = true;
		                    that._filterSource({
		                        value: ignoreCase ? word.toLowerCase() : word,
		                        field: field,
		                        operator: options.filter,
		                        ignoreCase: ignoreCase
		                    });
		                }
		            }
		        },

		        _accessor: function(value, idx) {
		            return this[this._isSelect ? "_accessorSelect" : "_accessorInput"](value, idx);
		        },

		        _accessorInput: function(value) {
		            var element = this.element[0];

		            if (value === undefined) {
		                return element.value;
		            } else {
		                if (value === null) {
		                    value = "";
		                }
		                element.value = value;
		            }
		        },

		        _accessorSelect: function(value, idx) {
		            var element = this.element[0];
		            var selectedIndex = element.selectedIndex;
		            var option;

		            if (value === undefined) {
		                if (selectedIndex > -1) {
		                    option = element.options[selectedIndex];
		                }

		                if (option) {
		                    value = option.value;
		                }
		                return value || "";
		            } else {
		                if (selectedIndex > -1) {
		                    element.options[selectedIndex].removeAttribute(SELECTED);
		                    element.options[selectedIndex].selected = false;
		                }

		                if (idx === undefined) {
		                    idx = -1;
		                }

		                if (value !== null && value !== "" && idx == -1) {
		                    this._custom(value);
		                } else {
		                    if (value) {
		                        element.value = value;
		                    } else {
		                        element.selectedIndex = idx;
		                    }

		                    if (element.selectedIndex > -1) {
		                        option = element.options[element.selectedIndex];
		                    }

		                    if (option) {
		                       option.setAttribute(SELECTED, SELECTED);
		                    }
		                }
		            }
		        },

		        _custom: function(value) {
		            var that = this;
		            var element = that.element;
		            var custom = that._customOption;

		            if (!custom) {
		                custom = $("<option/>");
		                that._customOption = custom;

		                element.append(custom);
		            }

		            custom.text(value);
		            custom[0].setAttribute(SELECTED, SELECTED);
		            custom[0].selected = true;
		        },

		        _hideBusy: function () {
		            var that = this;
		            clearTimeout(that._busy);
		            that._arrow.removeClass(LOADING);
		            that._focused.attr("aria-busy", false);
		            that._busy = null;
		        },

		        _showBusy: function () {
		            var that = this;

		            that._request = true;

		            if (that._busy) {
		                return;
		            }

		            that._busy = setTimeout(function () {
		                if (that._arrow) { //destroyed after request start
		                    that._focused.attr("aria-busy", true);
		                    that._arrow.addClass(LOADING);
		                }
		            }, 100);
		        },

		        _requestEnd: function() {
		            this._request = false;
		            this._hideBusy();
		        },

		        _dataSource: function() {
		            var that = this,
		                element = that.element,
		                options = that.options,
		                dataSource = options.dataSource || {},
		                idx;

		            dataSource = $.isArray(dataSource) ? {data: dataSource} : dataSource;

		            if (that._isSelect) {
		                idx = element[0].selectedIndex;
		                if (idx > -1) {
		                    options.index = idx;
		                }

		                dataSource.select = element;
		                dataSource.fields = [{ field: options.dataTextField },
		                                     { field: options.dataValueField }];
		            }

		            if (that.dataSource) {
		                that._unbindDataSource();
		            } else {
		                that._requestStartHandler = proxy(that._showBusy, that);
		                that._requestEndHandler = proxy(that._requestEnd, that);
		                that._errorHandler = proxy(that._hideBusy, that);
		            }

		            that.dataSource = kendo.data.DataSource.create(dataSource)
		                                   .bind(REQUESTSTART, that._requestStartHandler)
		                                   .bind(REQUESTEND, that._requestEndHandler)
		                                   .bind("error", that._errorHandler);
		        },

		        _firstItem: function() {
		            this.listView.focusFirst();
		        },

		        _lastItem: function() {
		            this.listView.focusLast();
		        },

		        _nextItem: function() {
		            this.listView.focusNext();
		        },

		        _prevItem: function() {
		            this.listView.focusPrev();
		        },

		        _move: function(e) {
		            var that = this;
		            var key = e.keyCode;
		            var down = key === keys.DOWN;
		            var dataItem;
		            var pressed;
		            var current;

		            if (key === keys.UP || down) {
		                if (e.altKey) {
		                    that.toggle(down);
		                } else {
		                    if (!that.listView.bound()) {
		                        if (!that._fetch) {
		                            that.dataSource.one(CHANGE, function() {
		                                that._fetch = false;
		                                that._move(e);
		                            });

		                            that._fetch = true;
		                            that._filterSource();
		                        }

		                        e.preventDefault();

		                        return true; //pressed
		                    }

		                    current = that._focus();

		                    if (!that._fetch && (!current || current.hasClass("k-state-selected"))) {
		                        if (down) {
		                            that._nextItem();

		                            if (!that._focus()) {
		                                that._lastItem();
		                            }
		                        } else {
		                            that._prevItem();

		                            if (!that._focus()) {
		                                that._firstItem();
		                            }
		                        }
		                    }

		                    if (that.trigger(SELECT, { item: that._focus() })) {
		                        that._focus(current);
		                        return;
		                    }

		                    that._select(that._focus(), true);

		                    if (!that.popup.visible()) {
		                        that._blur();
		                    }
		                }

		                e.preventDefault();
		                pressed = true;
		            } else if (key === keys.ENTER || key === keys.TAB) {
		                if (that.popup.visible()) {
		                    e.preventDefault();
		                }

		                current = that._focus();
		                dataItem = that.dataItem();

		                if (!that.popup.visible() && (!dataItem || that.text() !== that._text(dataItem))) {
		                    current = null;
		                }

		                var activeFilter = that.filterInput && that.filterInput[0] === activeElement();

		                if (current) {
		                    if (that.trigger(SELECT, { item: current })) {
		                        return;
		                    }

		                    that._select(current);
		                } else if (that.input) {
		                    that._accessor(that.input.val());
		                    that.listView.value(that.input.val());
		                }

		                if (that._focusElement) {
		                    that._focusElement(that.wrapper);
		                }

		                if (activeFilter && key === keys.TAB) {
		                    that.wrapper.focusout();
		                } else {
		                    that._blur();
		                }

		                that.close();
		                pressed = true;
		            } else if (key === keys.ESC) {
		                if (that.popup.visible()) {
		                    e.preventDefault();
		                }
		                that.close();
		                pressed = true;
		            }

		            return pressed;
		        },

		        _fetchData: function() {
		            var that = this;
		            var hasItems = !!that.dataSource.view().length;

		            if (that._request || that.options.cascadeFrom) {
		                return;
		            }

		            if (!that.listView.bound() && !that._fetch && !hasItems) {
		                that._fetch = true;
		                that.dataSource.fetch().done(function() {
		                    that._fetch = false;
		                });
		            }
		        },

		        _options: function(data, optionLabel, value) {
		            var that = this,
		                element = that.element,
		                length = data.length,
		                options = "",
		                option,
		                dataItem,
		                dataText,
		                dataValue,
		                idx = 0;

		            if (optionLabel) {
		                options = optionLabel;
		            }

		            for (; idx < length; idx++) {
		                option = "<option";
		                dataItem = data[idx];
		                dataText = that._text(dataItem);
		                dataValue = that._value(dataItem);

		                if (dataValue !== undefined) {
		                    dataValue += "";

		                    if (dataValue.indexOf('"') !== -1) {
		                        dataValue = dataValue.replace(quotRegExp, "&quot;");
		                    }

		                    option += ' value="' + dataValue + '"';
		                }

		                option += ">";

		                if (dataText !== undefined) {
		                    option += htmlEncode(dataText);
		                }

		                option += "</option>";
		                options += option;
		            }

		            element.html(options);

		            if (value !== undefined) {
		                element[0].value = value;
		                if (element[0].value && !value) {
		                    element[0].selectedIndex = -1;
		                }
		            }
		        },

		        _reset: function() {
		            var that = this,
		                element = that.element,
		                formId = element.attr("form"),
		                form = formId ? $("#" + formId) : element.closest("form");

		            if (form[0]) {
		                that._resetHandler = function() {
		                    setTimeout(function() {
		                        that.value(that._initial);
		                    });
		                };

		                that._form = form.on("reset", that._resetHandler);
		            }
		        },

		        _parentWidget: function() {
		            var name = this.options.name;
		            var parentElement = $("#" + this.options.cascadeFrom);
		            var parent = parentElement.data("kendo" + name);

		            if (!parent) {
		                parent = parentElement.data("kendo" + alternativeNames[name]);
		            }

		            return parent;
		        },

		        _cascade: function() {
		            var that = this;
		            var options = that.options;
		            var cascade = options.cascadeFrom;
		            var parent;

		            if (cascade) {
		                parent = that._parentWidget();

		                that._cascadeHandlerProxy = proxy(that._cascadeHandler, that);

		                if (!parent) {
		                    return;
		                }

		                options.autoBind = false;

		                parent.bind("set", function() { //will cascade
		                    that.one("set", function(e) { //get your value
		                        that._selectedValue = e.value;
		                    });
		                });

		                parent.first(CASCADE, that._cascadeHandlerProxy);

		                //refresh was called
		                if (parent.listView.bound()) {
		                    that._toggleCascadeOnFocus();
		                    that._cascadeSelect(parent);
		                } else {
		                    parent.one("dataBound", function() {
		                        that._toggleCascadeOnFocus();
		                    });

		                    if (!parent.value()) {
		                        that.enable(false);
		                    }
		                }
		            }
		        },

		        _toggleCascadeOnFocus: function() {
		            var that = this;
		            var parent = that._parentWidget();

		            parent._focused.add(parent.filterInput).bind("focus", function() {
		                parent.unbind(CASCADE, that._cascadeHandlerProxy);
		                parent.first(CHANGE, that._cascadeHandlerProxy);
		            });

		            parent._focused.add(parent.filterInput).bind("focusout", function() {
		                parent.unbind(CHANGE, that._cascadeHandlerProxy);
		                parent.first(CASCADE, that._cascadeHandlerProxy);
		            });
		        },

		        _cascadeHandler: function(e) {
		            var parent = this._parentWidget();
		            var valueBeforeCascade = this.value();

		            this._userTriggered = e.userTriggered;

		            if (this.listView.bound()) {
		                this._clearSelection(parent, true);
		            }

		            this._cascadeSelect(parent, valueBeforeCascade);
		        },

		        _cascadeChange: function(parent) {
		            var that = this;
		            var value = that._accessor() || that._selectedValue;

		            that._selectedValue = null;

		            if (that._userTriggered) {
		                that._clearSelection(parent, true);
		            } else if (value) {
		                if (value !== that.listView.value()[0]) {
		                    that.value(value);
		                }

		                if (!that.dataSource.view()[0] || that.selectedIndex === -1) {
		                    that._clearSelection(parent, true);
		                }
		            } else if (that.dataSource.flatView().length) {
		                that.select(that.options.index);
		            }

		            that.enable();
		            that._triggerCascade();
		            that._triggerChange();
		            that._userTriggered = false;
		        },

		        _cascadeSelect: function(parent, valueBeforeCascade) {
		            var that = this;
		            var dataItem = parent.dataItem();
		            var filterValue = dataItem ? parent._value(dataItem) : null;
		            var valueField = that.options.cascadeFromField || parent.options.dataValueField;
		            var expressions;

		            that._valueBeforeCascade = valueBeforeCascade !== undefined ? valueBeforeCascade : that.value();

		            if (filterValue || filterValue === 0) {
		                expressions = that.dataSource.filter() || {};
		                removeFiltersForField(expressions, valueField);

		                var handler = function() {
		                    that.unbind("dataBound", handler);
		                    that._cascadeChange(parent);
		                };

		                that.first("dataBound", handler);

		                that._cascading = true;
		                that._filterSource({
		                    field: valueField,
		                    operator: "eq",
		                    value: filterValue
		                });
		                that._cascading = false;
		            } else {
		                that.enable(false);
		                that._clearSelection(parent);
		                that._triggerCascade();
		                that._triggerChange();
		                that._userTriggered = false;
		            }
		        }
		    });

		    var STATIC_LIST_NS = ".StaticList";

		    var StaticList = kendo.ui.DataBoundWidget.extend({
		        init: function(element, options) {
		            Widget.fn.init.call(this, element, options);

		            this.element.attr("role", "listbox")
		                        .on("click" + STATIC_LIST_NS, "li", proxy(this._click, this))
		                        .on("mouseenter" + STATIC_LIST_NS, "li", function() { $(this).addClass(HOVER); })
		                        .on("mouseleave" + STATIC_LIST_NS, "li", function() { $(this).removeClass(HOVER); });

		            this.content = this.element.wrap("<div class='k-list-scroller' unselectable='on'></div>").parent();
		            this.header = this.content.before('<div class="k-group-header" style="display:none"></div>').prev();

		            this.bound(false);

		            this._optionID = kendo.guid();

		            this._selectedIndices = [];

		            this._view = [];
		            this._dataItems = [];
		            this._values = [];

		            var value = this.options.value;

		            if (value) {
		                this._values = $.isArray(value) ? value.slice(0) : [value];
		            }

		            this._getter();
		            this._templates();

		            this.setDataSource(this.options.dataSource);

		            this._onScroll = proxy(function() {
		                var that = this;
		                clearTimeout(that._scrollId);

		                that._scrollId = setTimeout(function() {
		                    that._renderHeader();
		                }, 50);
		            }, this);
		        },

		        options: {
		            name: "StaticList",
		            dataValueField: null,
		            valuePrimitive: false,
		            selectable: true,
		            template: null,
		            groupTemplate: null,
		            fixedGroupTemplate: null
		        },

		        events: [
		           "click",
		            CHANGE,
		           "activate",
		           "deactivate",
		           "dataBinding",
		           "dataBound",
		           "selectedItemChange"
		        ],

		        setDataSource: function(source) {
		            var that = this;
		            var dataSource = source || {};
		            var value;

		            dataSource = $.isArray(dataSource) ? { data: dataSource } : dataSource;
		            dataSource = kendo.data.DataSource.create(dataSource);

		            if (that.dataSource) {
		                that.dataSource.unbind(CHANGE, that._refreshHandler);

		                value = that.value();

		                that.value([]);
		                that.bound(false);

		                that.value(value);
		            } else {
		                that._refreshHandler = proxy(that.refresh, that);
		            }

		            that.setDSFilter(dataSource.filter());

		            that.dataSource = dataSource.bind(CHANGE, that._refreshHandler);
		            that._fixedHeader();
		        },

		        skip: function() {
		            return this.dataSource.skip();
		        },

		        setOptions: function(options) {
		            Widget.fn.setOptions.call(this, options);

		            this._getter();
		            this._templates();
		            this._render();
		        },

		        destroy: function() {
		            this.element.off(STATIC_LIST_NS);

		            if (this._refreshHandler) {
		                this.dataSource.unbind(CHANGE, this._refreshHandler);
		            }

		            clearTimeout(this._scrollId);

		            Widget.fn.destroy.call(this);
		        },

		        scrollToIndex: function(index) {
		            var item = this.element[0].children[index];

		            if (item) {
		                this.scroll(item);
		            }
		        },

		        scroll: function (item) {
		            if (!item) {
		                return;
		            }

		            if (item[0]) {
		                item = item[0];
		            }

		            var content = this.content[0],
		                itemOffsetTop = item.offsetTop,
		                itemOffsetHeight = item.offsetHeight,
		                contentScrollTop = content.scrollTop,
		                contentOffsetHeight = content.clientHeight,
		                bottomDistance = itemOffsetTop + itemOffsetHeight;

		                if (contentScrollTop > itemOffsetTop) {
		                    contentScrollTop = itemOffsetTop;
		                } else if (bottomDistance > (contentScrollTop + contentOffsetHeight)) {
		                    contentScrollTop = (bottomDistance - contentOffsetHeight);
		                }

		                content.scrollTop = contentScrollTop;
		        },

		        selectedDataItems: function(dataItems) {
		            if (dataItems === undefined) {
		                return this._dataItems.slice();
		            }

		            this._dataItems = dataItems;
		            this._values = this._getValues(dataItems);
		        },

		        _getValues: function(dataItems) {
		            var getter = this._valueGetter;

		            return $.map(dataItems, function(dataItem) {
		                return getter(dataItem);
		            });
		        },

		        focusNext: function() {
		            var current = this.focus();

		            if (!current) {
		                current = 0;
		            } else {
		                current = current.next();
		            }

		            this.focus(current);
		        },

		        focusPrev: function() {
		            var current = this.focus();

		            if (!current) {
		                current = this.element[0].children.length - 1;
		            } else {
		                current = current.prev();
		            }

		            this.focus(current);
		        },

		        focusFirst: function() {
		            this.focus(this.element[0].children[0]);
		        },

		        focusLast: function() {
		            this.focus(this.element[0].children[this.element[0].children.length - 1]);
		        },

		        focus: function(candidate) {
		            var that = this;
		            var id = that._optionID;
		            var hasCandidate;

		            if (candidate === undefined) {
		                return that._current;
		            }

		            candidate = that._get(candidate);
		            candidate = candidate[candidate.length - 1];
		            candidate = $(this.element[0].children[candidate]);

		            if (that._current) {
		                that._current
		                    .removeClass(FOCUSED)
		                    .removeAttr("aria-selected")
		                    .removeAttr(ID);

		                that.trigger("deactivate");
		            }

		            hasCandidate = !!candidate[0];

		            if (hasCandidate) {
		                candidate.addClass(FOCUSED);
		                that.scroll(candidate);

		                candidate.attr("id", id);
		            }

		            that._current = hasCandidate ? candidate : null;
		            that.trigger("activate");
		        },

		        focusIndex: function() {
		            return this.focus() ? this.focus().index() : undefined;
		        },

		        skipUpdate: function(skipUpdate) {
		            this._skipUpdate = skipUpdate;
		        },

		        select: function(indices) {
		            var that = this;
		            var selectable = that.options.selectable;
		            var singleSelection = selectable !== "multiple" && selectable !== false;
		            var selectedIndices = that._selectedIndices;

		            var added = [];
		            var removed = [];
		            var result;

		            if (indices === undefined) {
		                return selectedIndices.slice();
		            }

		            indices = that._get(indices);

		            if (indices.length === 1 && indices[0] === -1) {
		                indices = [];
		            }

		            var filtered = that.isFiltered();

		            if (filtered && !singleSelection && that._deselectFiltered(indices)) {
		                return;
		            }

		            if (singleSelection && !filtered && $.inArray(indices[indices.length - 1], selectedIndices) !== -1) {
		                if (that._dataItems.length && that._view.length) {
		                    that._dataItems = [that._view[selectedIndices[0]].item];
		                }

		                return;
		            }

		            result = that._deselect(indices);

		            removed = result.removed;
		            indices = result.indices;

		            if (indices.length) {
		                if (singleSelection) {
		                    indices = [indices[indices.length - 1]];
		                }

		                added = that._select(indices);
		            }

		            if (added.length || removed.length) {
		                that._valueComparer = null;
		                that.trigger(CHANGE, {
		                    added: added,
		                    removed: removed
		                });
		            }
		        },

		        removeAt: function(position) {
		            this._selectedIndices.splice(position, 1);
		            this._values.splice(position, 1);
		            this._valueComparer = null;

		            return {
		                position: position,
		                dataItem: this._dataItems.splice(position, 1)[0]
		            };
		        },

		        setValue: function(value) {
		            value = $.isArray(value) || value instanceof ObservableArray ? value.slice(0) : [value];

		            this._values = value;

		            this._valueComparer = null;
		        },

		        value: function(value) {
		            var that = this;
		            var deferred = that._valueDeferred;
		            var indices;

		            if (value === undefined) {
		                return that._values.slice();
		            }

		            that.setValue(value);

		            if (!deferred || deferred.state() === "resolved") {
		                that._valueDeferred = deferred = $.Deferred();
		            }

		            if (that.bound()) {
		                indices = that._valueIndices(that._values);

		                if (that.options.selectable === "multiple") {
		                    that.select(-1);
		                }

		                that.select(indices);

		                deferred.resolve();
		            }

		            that._skipUpdate = false;

		            return deferred;
		        },

		        items: function() {
		            return this.element.children(".k-item");
		        },

		        _click: function(e) {
		            if (!e.isDefaultPrevented()) {
		                if (!this.trigger("click", { item: $(e.currentTarget) })) {
		                    this.select(e.currentTarget);
		                }
		            }
		        },

		        _valueExpr: function(type, values) {
		            var that = this;
		            var idx = 0;

		            var body;
		            var comparer;
		            var normalized = [];

		            if (!that._valueComparer  || that._valueType !== type) {
		                that._valueType = type;

		                for (; idx < values.length; idx++) {
		                    normalized.push(unifyType(values[idx], type));
		                }

		                body = "for (var idx = 0; idx < " + normalized.length + "; idx++) {" +
		                        " if (current === values[idx]) {" +
		                        "   return idx;" +
		                        " }" +
		                        "} " +
		                        "return -1;";

		                comparer = new Function("current", "values", body);

		                that._valueComparer = function(current) {
		                    return comparer(current, normalized);
		                };
		            }

		            return that._valueComparer;
		        },

		        _dataItemPosition: function(dataItem, values) {
		            var value = this._valueGetter(dataItem);

		            var valueExpr = this._valueExpr(typeof value, values);

		            return valueExpr(value);
		        },

		        _getter: function() {
		            this._valueGetter = kendo.getter(this.options.dataValueField);
		        },

		        _deselect: function(indices) {
		            var that = this;
		            var children = that.element[0].children;
		            var selectable = that.options.selectable;
		            var selectedIndices = that._selectedIndices;
		            var dataItems = that._dataItems;
		            var values = that._values;
		            var removed = [];
		            var i = 0;
		            var j;

		            var index, selectedIndex;
		            var removedIndices = 0;

		            indices = indices.slice();

		            if (selectable === true || !indices.length) {
		                for (; i < selectedIndices.length; i++) {
		                    $(children[selectedIndices[i]]).removeClass("k-state-selected");

		                    removed.push({
		                        position: i,
		                        dataItem: dataItems[i]
		                    });
		                }

		                that._values = [];
		                that._dataItems = [];
		                that._selectedIndices = [];
		            } else if (selectable === "multiple") {
		                for (; i < indices.length; i++) {
		                    index = indices[i];

		                    if (!$(children[index]).hasClass("k-state-selected")) {
		                        continue;
		                    }

		                    for (j = 0; j < selectedIndices.length; j++) {
		                        selectedIndex = selectedIndices[j];

		                        if (selectedIndex === index) {
		                            $(children[selectedIndex]).removeClass("k-state-selected");

		                            removed.push({
		                                position: j + removedIndices,
		                                dataItem: dataItems.splice(j, 1)[0]
		                            });

		                            selectedIndices.splice(j, 1);
		                            indices.splice(i, 1);
		                            values.splice(j, 1);

		                            removedIndices += 1;
		                            i -= 1;
		                            j -= 1;
		                            break;
		                        }
		                    }
		                }
		            }

		            return {
		                indices: indices,
		                removed: removed
		            };
		        },

		        _deselectFiltered: function(indices) {
		            var children = this.element[0].children;
		            var dataItem, index, position;
		            var removed = [];
		            var idx = 0;

		            for (; idx < indices.length; idx++) {
		                index = indices[idx];
		                dataItem = this._view[index].item;
		                position = this._dataItemPosition(dataItem, this._values);

		                if (position > -1) {
		                    removed.push(this.removeAt(position));
		                    $(children[index]).removeClass("k-state-selected");
		                }
		            }

		            if (removed.length) {
		                this.trigger(CHANGE, {
		                    added: [],
		                    removed: removed
		                });

		                return true;
		            }

		            return false;
		        },

		        _select: function(indices) {
		            var that = this;
		            var children = that.element[0].children;
		            var data = that._view;
		            var dataItem, index;
		            var added = [];
		            var idx = 0;

		            if (indices[indices.length - 1] !== -1) {
		                that.focus(indices);
		            }

		            for (; idx < indices.length; idx++) {
		                index = indices[idx];
		                dataItem = data[index];

		                if (index === -1 || !dataItem) {
		                    continue;
		                }

		                dataItem = dataItem.item;

		                that._selectedIndices.push(index);
		                that._dataItems.push(dataItem);
		                that._values.push(that._valueGetter(dataItem));

		                $(children[index]).addClass("k-state-selected").attr("aria-selected", true);

		                added.push({
		                    dataItem: dataItem
		                });
		            }

		            return added;
		        },

		        _get: function(candidate) {
		            if (typeof candidate === "number") {
		                candidate = [candidate];
		            } else if (!isArray(candidate)) {
		                candidate = $(candidate).data("offset-index");

		                if (candidate === undefined) {
		                    candidate = -1;
		                }

		                candidate = [candidate];
		            }

		            return candidate;
		        },

		        _template: function() {
		            var that = this;
		            var options = that.options;
		            var template = options.template;

		            if (!template) {
		                template = kendo.template('<li tabindex="-1" role="option" unselectable="on" class="k-item">${' + kendo.expr(options.dataTextField, "data") + "}</li>", { useWithBlock: false });
		            } else {
		                template = kendo.template(template);
		                template = function(data) {
		                    return '<li tabindex="-1" role="option" unselectable="on" class="k-item">' + template(data) + "</li>";
		                };
		            }

		            return template;
		        },

		        _templates: function() {
		            var template;
		            var templates = {
		                template: this.options.template,
		                groupTemplate: this.options.groupTemplate,
		                fixedGroupTemplate: this.options.fixedGroupTemplate
		            };

		            for (var key in templates) {
		                template = templates[key];
		                if (template && typeof template !== "function") {
		                    templates[key] = kendo.template(template);
		                }
		            }

		            this.templates = templates;
		        },

		        _normalizeIndices: function(indices) {
		            var newIndices = [];
		            var idx = 0;

		            for (; idx < indices.length; idx++) {
		                if (indices[idx] !== undefined) {
		                    newIndices.push(indices[idx]);
		                }
		            }

		            return newIndices;
		        },

		        _valueIndices: function(values, indices) {
		            var data = this._view;
		            var idx = 0;
		            var index;

		            indices = indices ? indices.slice() : [];

		            if (!values.length) {
		                return [];
		            }

		            for (; idx < data.length; idx++) {
		                index = this._dataItemPosition(data[idx].item, values);

		                if (index !== -1) {
		                    indices[index] = idx;
		                }
		            }

		            return this._normalizeIndices(indices);
		        },

		        _firstVisibleItem: function() {
		            var element = this.element[0];
		            var content = this.content[0];
		            var scrollTop = content.scrollTop;
		            var itemHeight = $(element.children[0]).height();
		            var itemIndex = Math.floor(scrollTop / itemHeight) || 0;
		            var item = element.children[itemIndex] || element.lastChild;
		            var forward = item.offsetTop < scrollTop;

		            while (item) {
		                if (forward) {
		                    if ((item.offsetTop + itemHeight) > scrollTop || !item.nextSibling) {
		                        break;
		                    }

		                    item = item.nextSibling;
		                } else {
		                    if (item.offsetTop <= scrollTop || !item.previousSibling) {
		                        break;
		                    }

		                    item = item.previousSibling;
		                }
		            }

		            return this._view[$(item).data("offset-index")];
		        },

		        _fixedHeader: function() {
		            if (this.isGrouped() && this.templates.fixedGroupTemplate) {
		                this.header.show();
		                this.content.scroll(this._onScroll);
		            } else {
		                this.header.hide();
		                this.content.off("scroll", this._onScroll);
		            }
		        },

		        _renderHeader: function() {
		            var template = this.templates.fixedGroupTemplate;
		            if (!template) {
		                return;
		            }

		            var visibleItem = this._firstVisibleItem();

		            if (visibleItem) {
		                this.header.html(template(visibleItem.group));
		            }
		        },

		        _renderItem: function(context) {
		            var item = '<li tabindex="-1" role="option" unselectable="on" class="k-item';

		            var dataItem = context.item;
		            var notFirstItem = context.index !== 0;
		            var selected = context.selected;

		            if (notFirstItem && context.newGroup) {
		                item += ' k-first';
		            }

		            if (selected) {
		                item += ' k-state-selected';
		            }

		            item += '"' + (selected ? ' aria-selected="true"' : "") + ' data-offset-index="' + context.index + '">';

		            item += this.templates.template(dataItem);

		            if (notFirstItem && context.newGroup) {
		                item += '<div class="k-group">' + this.templates.groupTemplate(context.group) + '</div>';
		            }

		            return item + "</li>";
		        },

		        _render: function() {
		            var html = "";

		            var i = 0;
		            var idx = 0;
		            var context;
		            var dataContext = [];
		            var view = this.dataSource.view();
		            var values = this.value();

		            var group, newGroup, j;
		            var isGrouped = this.isGrouped();

		            if (isGrouped) {
		                for (i = 0; i < view.length; i++) {
		                    group = view[i];
		                    newGroup = true;

		                    for (j = 0; j < group.items.length; j++) {
		                        context = {
		                            selected: this._selected(group.items[j], values),
		                            item: group.items[j],
		                            group: group.value,
		                            newGroup: newGroup,
		                            index: idx };
		                        dataContext[idx] = context;
		                        idx += 1;

		                        html += this._renderItem(context);
		                        newGroup = false;
		                    }
		                }
		            } else {
		                for (i = 0; i < view.length; i++) {
		                    context = { selected: this._selected(view[i], values), item: view[i], index: i };

		                    dataContext[i] = context;

		                    html += this._renderItem(context);
		                }
		            }

		            this._view = dataContext;

		            this.element[0].innerHTML = html;

		            if (isGrouped && dataContext.length) {
		                this._renderHeader();
		            }
		        },

		        _selected: function(dataItem, values) {
		            var select = !this.isFiltered() || this.options.selectable === "multiple";
		            return select && this._dataItemPosition(dataItem, values) !== -1;
		        },

		        setDSFilter: function(filter) {
		            this._lastDSFilter = extend({}, filter);
		        },

		        isFiltered: function() {
		            if (!this._lastDSFilter) {
		                this.setDSFilter(this.dataSource.filter());
		            }

		            return !kendo.data.Query.compareFilters(this.dataSource.filter(), this._lastDSFilter);
		        },

		        refresh: function(e) {
		            var that = this;
		            var action = e && e.action;
		            var skipUpdateOnBind = that.options.skipUpdateOnBind;
		            var isItemChange = action === "itemchange";
		            var result;

		            that.trigger("dataBinding");

		            that._fixedHeader();

		            that._render();

		            that.bound(true);

		            if (isItemChange || action === "remove") {
		                result = mapChangedItems(that._dataItems, e.items);

		                if (result.changed.length) {
		                    if (isItemChange) {
		                        that.trigger("selectedItemChange", {
		                            items: result.changed
		                        });
		                    } else {
		                        that.value(that._getValues(result.unchanged));
		                    }
		                }
		            } else if (that.isFiltered() || that._skipUpdate) {
		                that.focus(0);
		                if (that._skipUpdate) {
		                    that._skipUpdate = false;
		                    that._selectedIndices = that._valueIndices(that._values, that._selectedIndices);
		                }
		            } else if (!skipUpdateOnBind && (!action || action === "add")) {
		                that.value(that._values);
		            }

		            if (that._valueDeferred) {
		                that._valueDeferred.resolve();
		            }

		            that.trigger("dataBound");
		        },

		        bound: function(bound) {
		            if (bound === undefined) {
		                return this._bound;
		            }

		            this._bound = bound;
		        },

		        isGrouped: function() {
		            return (this.dataSource.group() || []).length;
		        }
		    });

		    ui.plugin(StaticList);

		    function mapChangedItems(selected, itemsToMatch) {
		        var itemsLength = itemsToMatch.length;
		        var selectedLength = selected.length;
		        var dataItem;
		        var found;
		        var i, j;

		        var changed = [];
		        var unchanged = [];

		        if (selectedLength) {
		            for (i = 0; i < selectedLength; i++) {
		                dataItem = selected[i];
		                found = false;

		                for (j = 0; j < itemsLength; j++) {
		                    if (dataItem === itemsToMatch[j]) {
		                        found = true;
		                        changed.push({ index: i, item: dataItem });
		                        break;
		                    }
		                }

		                if (!found) {
		                    unchanged.push(dataItem);
		                }
		            }
		        }

		        return {
		            changed: changed,
		            unchanged: unchanged
		        };
		    }

		    function removeFiltersForField(expression, field) {
		        var filters;
		        var found = false;

		        if (expression.filters) {
		            filters = $.grep(expression.filters, function(filter) {
		                found = removeFiltersForField(filter, field);
		                if (filter.filters) {
		                    return filter.filters.length;
		                } else {
		                    return filter.field != field;
		                }
		            });

		            if (!found && expression.filters.length !== filters.length) {
		                found = true;
		            }

		            expression.filters = filters;
		        }

		        return found;
		    }

		})(window.kendo.jQuery);

		return window.kendo;

		}, __webpack_require__(422));


	/***/ }

	/******/ });

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ({

	/***/ 0:
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(440);


	/***/ },

	/***/ 421:
	/***/ function(module, exports) {

		module.exports = __webpack_require__(6);

	/***/ },

	/***/ 422:
	/***/ function(module, exports) {

		module.exports = function() { throw new Error("define cannot be used indirect"); };


	/***/ },

	/***/ 440:
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
		    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(421), __webpack_require__(441), __webpack_require__(442) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		})(function(){

		var __meta__ = { // jshint ignore:line
		    id: "data",
		    name: "Data source",
		    category: "framework",
		    description: "Powerful component for using local and remote data.Fully supports CRUD, Sorting, Paging, Filtering, Grouping, and Aggregates.",
		    depends: [ "core" ],
		    features: [ {
		        id: "data-odata",
		        name: "OData",
		        description: "Support for accessing Open Data Protocol (OData) services.",
		        depends: [ "data.odata" ]
		    }, {
		        id: "data-signalr",
		        name: "SignalR",
		        description: "Support for binding to SignalR hubs.",
		        depends: [ "data.signalr" ]
		    }, {
		        id: "data-XML",
		        name: "XML",
		        description: "Support for binding to XML.",
		        depends: [ "data.xml" ]
		    }]
		};

		/*jshint eqnull: true, loopfunc: true, evil: true */
		(function($, undefined) {
		    var extend = $.extend,
		        proxy = $.proxy,
		        isPlainObject = $.isPlainObject,
		        isEmptyObject = $.isEmptyObject,
		        isArray = $.isArray,
		        grep = $.grep,
		        ajax = $.ajax,
		        map,
		        each = $.each,
		        noop = $.noop,
		        kendo = window.kendo,
		        isFunction = kendo.isFunction,
		        Observable = kendo.Observable,
		        Class = kendo.Class,
		        STRING = "string",
		        FUNCTION = "function",
		        CREATE = "create",
		        READ = "read",
		        UPDATE = "update",
		        DESTROY = "destroy",
		        CHANGE = "change",
		        SYNC = "sync",
		        GET = "get",
		        ERROR = "error",
		        REQUESTSTART = "requestStart",
		        PROGRESS = "progress",
		        REQUESTEND = "requestEnd",
		        crud = [CREATE, READ, UPDATE, DESTROY],
		        identity = function(o) { return o; },
		        getter = kendo.getter,
		        stringify = kendo.stringify,
		        math = Math,
		        push = [].push,
		        join = [].join,
		        pop = [].pop,
		        splice = [].splice,
		        shift = [].shift,
		        slice = [].slice,
		        unshift = [].unshift,
		        toString = {}.toString,
		        stableSort = kendo.support.stableSort,
		        dateRegExp = /^\/Date\((.*?)\)\/$/,
		        newLineRegExp = /(\r+|\n+)/g,
		        quoteRegExp = /(?=['\\])/g;

		    var ObservableArray = Observable.extend({
		        init: function(array, type) {
		            var that = this;

		            that.type = type || ObservableObject;

		            Observable.fn.init.call(that);

		            that.length = array.length;

		            that.wrapAll(array, that);
		        },

		        at: function(index) {
		            return this[index];
		        },

		        toJSON: function() {
		            var idx, length = this.length, value, json = new Array(length);

		            for (idx = 0; idx < length; idx++){
		                value = this[idx];

		                if (value instanceof ObservableObject) {
		                    value = value.toJSON();
		                }

		                json[idx] = value;
		            }

		            return json;
		        },

		        parent: noop,

		        wrapAll: function(source, target) {
		            var that = this,
		                idx,
		                length,
		                parent = function() {
		                    return that;
		                };

		            target = target || [];

		            for (idx = 0, length = source.length; idx < length; idx++) {
		                target[idx] = that.wrap(source[idx], parent);
		            }

		            return target;
		        },

		        wrap: function(object, parent) {
		            var that = this,
		                observable;

		            if (object !== null && toString.call(object) === "[object Object]") {
		                observable = object instanceof that.type || object instanceof Model;

		                if (!observable) {
		                    object = object instanceof ObservableObject ? object.toJSON() : object;
		                    object = new that.type(object);
		                }

		                object.parent = parent;

		                object.bind(CHANGE, function(e) {
		                    that.trigger(CHANGE, {
		                        field: e.field,
		                        node: e.node,
		                        index: e.index,
		                        items: e.items || [this],
		                        action: e.node ? (e.action || "itemloaded") : "itemchange"
		                    });
		                });
		            }

		            return object;
		        },

		        push: function() {
		            var index = this.length,
		                items = this.wrapAll(arguments),
		                result;

		            result = push.apply(this, items);

		            this.trigger(CHANGE, {
		                action: "add",
		                index: index,
		                items: items
		            });

		            return result;
		        },

		        slice: slice,

		        sort: [].sort,

		        join: join,

		        pop: function() {
		            var length = this.length, result = pop.apply(this);

		            if (length) {
		                this.trigger(CHANGE, {
		                    action: "remove",
		                    index: length - 1,
		                    items:[result]
		                });
		            }

		            return result;
		        },

		        splice: function(index, howMany, item) {
		            var items = this.wrapAll(slice.call(arguments, 2)),
		                result, i, len;

		            result = splice.apply(this, [index, howMany].concat(items));

		            if (result.length) {
		                this.trigger(CHANGE, {
		                    action: "remove",
		                    index: index,
		                    items: result
		                });

		                for (i = 0, len = result.length; i < len; i++) {
		                    if (result[i] && result[i].children) {
		                        result[i].unbind(CHANGE);
		                    }
		                }
		            }

		            if (item) {
		                this.trigger(CHANGE, {
		                    action: "add",
		                    index: index,
		                    items: items
		                });
		            }
		            return result;
		        },

		        shift: function() {
		            var length = this.length, result = shift.apply(this);

		            if (length) {
		                this.trigger(CHANGE, {
		                    action: "remove",
		                    index: 0,
		                    items:[result]
		                });
		            }

		            return result;
		        },

		        unshift: function() {
		            var items = this.wrapAll(arguments),
		                result;

		            result = unshift.apply(this, items);

		            this.trigger(CHANGE, {
		                action: "add",
		                index: 0,
		                items: items
		            });

		            return result;
		        },

		        indexOf: function(item) {
		            var that = this,
		                idx,
		                length;

		            for (idx = 0, length = that.length; idx < length; idx++) {
		                if (that[idx] === item) {
		                    return idx;
		                }
		            }
		            return -1;
		        },

		        forEach: function(callback) {
		            var idx = 0,
		                length = this.length;

		            for (; idx < length; idx++) {
		                callback(this[idx], idx, this);
		            }
		        },

		        map: function(callback) {
		            var idx = 0,
		                result = [],
		                length = this.length;

		            for (; idx < length; idx++) {
		                result[idx] = callback(this[idx], idx, this);
		            }

		            return result;
		        },

		        reduce: function(callback) {
		            var idx = 0,
		                result,
		                length = this.length;

		            if (arguments.length == 2) {
		                result = arguments[1];
		            } else if (idx < length) {
		                result = this[idx++];
		            }

		            for (; idx < length; idx++) {
		                result = callback(result, this[idx], idx, this);
		            }

		            return result;
		        },

		        reduceRight: function(callback) {
		            var idx = this.length - 1,
		                result;

		            if (arguments.length == 2) {
		                result = arguments[1];
		            } else if (idx > 0) {
		                result = this[idx--];
		            }

		            for (; idx >= 0; idx--) {
		                result = callback(result, this[idx], idx, this);
		            }

		            return result;
		        },

		        filter: function(callback) {
		            var idx = 0,
		                result = [],
		                item,
		                length = this.length;

		            for (; idx < length; idx++) {
		                item = this[idx];
		                if (callback(item, idx, this)) {
		                    result[result.length] = item;
		                }
		            }

		            return result;
		        },

		        find: function(callback) {
		            var idx = 0,
		                item,
		                length = this.length;

		            for (; idx < length; idx++) {
		                item = this[idx];
		                if (callback(item, idx, this)) {
		                    return item;
		                }
		            }
		        },

		        every: function(callback) {
		            var idx = 0,
		                item,
		                length = this.length;

		            for (; idx < length; idx++) {
		                item = this[idx];
		                if (!callback(item, idx, this)) {
		                    return false;
		                }
		            }

		            return true;
		        },

		        some: function(callback) {
		            var idx = 0,
		                item,
		                length = this.length;

		            for (; idx < length; idx++) {
		                item = this[idx];
		                if (callback(item, idx, this)) {
		                    return true;
		                }
		            }

		            return false;
		        },

		        // non-standard collection methods
		        remove: function(item) {
		            var idx = this.indexOf(item);

		            if (idx !== -1) {
		                this.splice(idx, 1);
		            }
		        },

		        empty: function() {
		            this.splice(0, this.length);
		        }
		    });

		    var LazyObservableArray = ObservableArray.extend({
		        init: function(data, type) {
		            Observable.fn.init.call(this);

		            this.type = type || ObservableObject;

		            for (var idx = 0; idx < data.length; idx++) {
		                this[idx] = data[idx];
		            }

		            this.length = idx;
		            this._parent = proxy(function() { return this; }, this);
		        },
		        at: function(index) {
		            var item = this[index];

		            if (!(item instanceof this.type)) {
		                item = this[index] = this.wrap(item, this._parent);
		            } else {
		                item.parent = this._parent;
		            }

		            return item;
		        }
		    });

		    function eventHandler(context, type, field, prefix) {
		        return function(e) {
		            var event = {}, key;

		            for (key in e) {
		                event[key] = e[key];
		            }

		            if (prefix) {
		                event.field = field + "." + e.field;
		            } else {
		                event.field = field;
		            }

		            if (type == CHANGE && context._notifyChange) {
		                context._notifyChange(event);
		            }

		            context.trigger(type, event);
		        };
		    }

		    var ObservableObject = Observable.extend({
		        init: function(value) {
		            var that = this,
		                member,
		                field,
		                parent = function() {
		                    return that;
		                };

		            Observable.fn.init.call(this);

		            this._handlers = {};

		            for (field in value) {
		                member = value[field];

		                if (typeof member === "object" && member && !member.getTime && field.charAt(0) != "_") {
		                    member = that.wrap(member, field, parent);
		                }

		                that[field] = member;
		            }

		            that.uid = kendo.guid();
		        },

		        shouldSerialize: function(field) {
		            return this.hasOwnProperty(field) && field !== "_handlers" && field !== "_events" && typeof this[field] !== FUNCTION && field !== "uid";
		        },

		        forEach: function(f) {
		            for (var i in this) {
		                if (this.shouldSerialize(i)) {
		                    f(this[i], i);
		                }
		            }
		        },

		        toJSON: function() {
		            var result = {}, value, field;

		            for (field in this) {
		                if (this.shouldSerialize(field)) {
		                    value = this[field];

		                    if (value instanceof ObservableObject || value instanceof ObservableArray) {
		                        value = value.toJSON();
		                    }

		                    result[field] = value;
		                }
		            }

		            return result;
		        },

		        get: function(field) {
		            var that = this, result;

		            that.trigger(GET, { field: field });

		            if (field === "this") {
		                result = that;
		            } else {
		                result = kendo.getter(field, true)(that);
		            }

		            return result;
		        },

		        _set: function(field, value) {
		            var that = this;
		            var composite = field.indexOf(".") >= 0;

		            if (composite) {
		                var paths = field.split("."),
		                    path = "";

		                while (paths.length > 1) {
		                    path += paths.shift();
		                    var obj = kendo.getter(path, true)(that);
		                    if (obj instanceof ObservableObject) {
		                        obj.set(paths.join("."), value);
		                        return composite;
		                    }
		                    path += ".";
		                }
		            }

		            kendo.setter(field)(that, value);

		            return composite;
		        },

		        set: function(field, value) {
		            var that = this,
		                isSetPrevented = false,
		                composite = field.indexOf(".") >= 0,
		                current = kendo.getter(field, true)(that);

		            if (current !== value) {
		                if (current instanceof Observable && this._handlers[field]) {
		                    if (this._handlers[field].get) {
		                       current.unbind(GET, this._handlers[field].get);
		                    }
		                    current.unbind(CHANGE, this._handlers[field].change);
		                }

		                isSetPrevented = that.trigger("set", { field: field, value: value });

		                if (!isSetPrevented) {
		                    if (!composite) {
		                        value = that.wrap(value, field, function() { return that; });
		                    }
		                    if (!that._set(field, value) || field.indexOf("(") >= 0 || field.indexOf("[") >= 0) {
		                        that.trigger(CHANGE, { field: field });
		                    }
		                }
		            }

		            return isSetPrevented;
		        },

		        parent: noop,

		        wrap: function(object, field, parent) {
		            var that = this;
		            var get;
		            var change;
		            var type = toString.call(object);

		            if (object != null && (type === "[object Object]" || type === "[object Array]")) {
		                var isObservableArray = object instanceof ObservableArray;
		                var isDataSource = object instanceof DataSource;

		                if (type === "[object Object]" && !isDataSource && !isObservableArray) {
		                    if (!(object instanceof ObservableObject)) {
		                        object = new ObservableObject(object);
		                    }

		                    get = eventHandler(that, GET, field, true);
		                    object.bind(GET, get);
		                    change = eventHandler(that, CHANGE, field, true);
		                    object.bind(CHANGE, change);

		                    that._handlers[field] = { get: get, change: change };
		                } else if (type === "[object Array]" || isObservableArray || isDataSource) {
		                    if (!isObservableArray && !isDataSource) {
		                        object = new ObservableArray(object);
		                    }

		                    change = eventHandler(that, CHANGE, field, false);

		                    object.bind(CHANGE, change);

		                    that._handlers[field] = { change: change };
		                }

		                object.parent = parent;
		            }

		            return object;
		        }
		    });

		    function equal(x, y) {
		        if (x === y) {
		            return true;
		        }

		        var xtype = $.type(x), ytype = $.type(y), field;

		        if (xtype !== ytype) {
		            return false;
		        }

		        if (xtype === "date") {
		            return x.getTime() === y.getTime();
		        }

		        if (xtype !== "object" && xtype !== "array") {
		            return false;
		        }

		        for (field in x) {
		            if (!equal(x[field], y[field])) {
		                return false;
		            }
		        }

		        return true;
		    }

		    var parsers = {
		        "number": function(value) {
		            return kendo.parseFloat(value);
		        },

		        "date": function(value) {
		            return kendo.parseDate(value);
		        },

		        "boolean": function(value) {
		            if (typeof value === STRING) {
		                return value.toLowerCase() === "true";
		            }
		            return value != null ? !!value : value;
		        },

		        "string": function(value) {
		            return value != null ? (value + "") : value;
		        },

		        "default": function(value) {
		            return value;
		        }
		    };

		    var defaultValues = {
		        "string": "",
		        "number": 0,
		        "date": new Date(),
		        "boolean": false,
		        "default": ""
		    };

		    function getFieldByName(obj, name) {
		        var field,
		            fieldName;

		        for (fieldName in obj) {
		            field = obj[fieldName];
		            if (isPlainObject(field) && field.field && field.field === name) {
		                return field;
		            } else if (field === name) {
		                return field;
		            }
		        }
		        return null;
		    }

		    var Model = ObservableObject.extend({
		        init: function(data) {
		            var that = this;

		            if (!data || $.isEmptyObject(data)) {
		                data = $.extend({}, that.defaults, data);

		                if (that._initializers) {
		                    for (var idx = 0; idx < that._initializers.length; idx++) {
		                         var name = that._initializers[idx];
		                         data[name] = that.defaults[name]();
		                    }
		                }
		            }

		            ObservableObject.fn.init.call(that, data);

		            that.dirty = false;

		            if (that.idField) {
		                that.id = that.get(that.idField);

		                if (that.id === undefined) {
		                    that.id = that._defaultId;
		                }
		            }
		        },

		        shouldSerialize: function(field) {
		            return ObservableObject.fn.shouldSerialize.call(this, field) && field !== "uid" && !(this.idField !== "id" && field === "id") && field !== "dirty" && field !== "_accessors";
		        },

		        _parse: function(field, value) {
		            var that = this,
		                fieldName = field,
		                fields = (that.fields || {}),
		                parse;

		            field = fields[field];
		            if (!field) {
		                field = getFieldByName(fields, fieldName);
		            }
		            if (field) {
		                parse = field.parse;
		                if (!parse && field.type) {
		                    parse = parsers[field.type.toLowerCase()];
		                }
		            }

		            return parse ? parse(value) : value;
		        },

		        _notifyChange: function(e) {
		            var action = e.action;

		            if (action == "add" || action == "remove") {
		                this.dirty = true;
		            }
		        },

		        editable: function(field) {
		            field = (this.fields || {})[field];
		            return field ? field.editable !== false : true;
		        },

		        set: function(field, value, initiator) {
		            var that = this;
		            var dirty = that.dirty;

		            if (that.editable(field)) {
		                value = that._parse(field, value);

		                if (!equal(value, that.get(field))) {
		                    that.dirty = true;

		                    if (ObservableObject.fn.set.call(that, field, value, initiator) && !dirty) {
		                        that.dirty = dirty;
		                    }
		                }
		            }
		        },

		        accept: function(data) {
		            var that = this,
		                parent = function() { return that; },
		                field;

		            for (field in data) {
		                var value = data[field];

		                if (field.charAt(0) != "_") {
		                    value = that.wrap(data[field], field, parent);
		                }

		                that._set(field, value);
		            }

		            if (that.idField) {
		                that.id = that.get(that.idField);
		            }

		            that.dirty = false;
		        },

		        isNew: function() {
		            return this.id === this._defaultId;
		        }
		    });

		    Model.define = function(base, options) {
		        if (options === undefined) {
		            options = base;
		            base = Model;
		        }

		        var model,
		            proto = extend({ defaults: {} }, options),
		            name,
		            field,
		            type,
		            value,
		            idx,
		            length,
		            fields = {},
		            originalName,
		            id = proto.id,
		            functionFields = [];

		        if (id) {
		            proto.idField = id;
		        }

		        if (proto.id) {
		            delete proto.id;
		        }

		        if (id) {
		            proto.defaults[id] = proto._defaultId = "";
		        }

		        if (toString.call(proto.fields) === "[object Array]") {
		            for (idx = 0, length = proto.fields.length; idx < length; idx++) {
		                field = proto.fields[idx];
		                if (typeof field === STRING) {
		                    fields[field] = {};
		                } else if (field.field) {
		                    fields[field.field] = field;
		                }
		            }
		            proto.fields = fields;
		        }

		        for (name in proto.fields) {
		            field = proto.fields[name];
		            type = field.type || "default";
		            value = null;
		            originalName = name;

		            name = typeof (field.field) === STRING ? field.field : name;

		            if (!field.nullable) {
		                value = proto.defaults[originalName !== name ? originalName : name] = field.defaultValue !== undefined ? field.defaultValue : defaultValues[type.toLowerCase()];

		                if (typeof value === "function") {
		                    functionFields.push(name);
		                }
		            }

		            if (options.id === name) {
		                proto._defaultId = value;
		            }

		            proto.defaults[originalName !== name ? originalName : name] = value;

		            field.parse = field.parse || parsers[type];
		        }

		        if (functionFields.length > 0) {
		            proto._initializers = functionFields;
		        }

		        model = base.extend(proto);
		        model.define = function(options) {
		            return Model.define(model, options);
		        };

		        if (proto.fields) {
		            model.fields = proto.fields;
		            model.idField = proto.idField;
		        }

		        return model;
		    };

		    var Comparer = {
		        selector: function(field) {
		            return isFunction(field) ? field : getter(field);
		        },

		        compare: function(field) {
		            var selector = this.selector(field);
		            return function (a, b) {
		                a = selector(a);
		                b = selector(b);

		                if (a == null && b == null) {
		                    return 0;
		                }

		                if (a == null) {
		                    return -1;
		                }

		                if (b == null) {
		                    return 1;
		                }

		                if (a.localeCompare) {
		                    return a.localeCompare(b);
		                }

		                return a > b ? 1 : (a < b ? -1 : 0);
		            };
		        },

		        create: function(sort) {
		            var compare = sort.compare || this.compare(sort.field);

		            if (sort.dir == "desc") {
		                return function(a, b) {
		                    return compare(b, a, true);
		                };
		            }

		            return compare;
		        },

		        combine: function(comparers) {
		            return function(a, b) {
		                var result = comparers[0](a, b),
		                    idx,
		                    length;

		                for (idx = 1, length = comparers.length; idx < length; idx ++) {
		                    result = result || comparers[idx](a, b);
		                }

		                return result;
		            };
		        }
		    };

		    var StableComparer = extend({}, Comparer, {
		        asc: function(field) {
		            var selector = this.selector(field);
		            return function (a, b) {
		                var valueA = selector(a);
		                var valueB = selector(b);

		                if (valueA && valueA.getTime && valueB && valueB.getTime) {
		                    valueA = valueA.getTime();
		                    valueB = valueB.getTime();
		                }

		                if (valueA === valueB) {
		                    return a.__position - b.__position;
		                }

		                if (valueA == null) {
		                    return -1;
		                }

		                if (valueB == null) {
		                    return 1;
		                }

		                if (valueA.localeCompare) {
		                    return valueA.localeCompare(valueB);
		                }

		                return valueA > valueB ? 1 : -1;
		            };
		        },

		        desc: function(field) {
		            var selector = this.selector(field);
		            return function (a, b) {
		                var valueA = selector(a);
		                var valueB = selector(b);

		                if (valueA && valueA.getTime && valueB && valueB.getTime) {
		                    valueA = valueA.getTime();
		                    valueB = valueB.getTime();
		                }

		                if (valueA === valueB) {
		                    return a.__position - b.__position;
		                }

		                if (valueA == null) {
		                    return 1;
		                }

		                if (valueB == null) {
		                    return -1;
		                }

		                if (valueB.localeCompare) {
		                    return valueB.localeCompare(valueA);
		                }

		                return valueA < valueB ? 1 : -1;
		            };
		        },
		        create: function(sort) {
		           return this[sort.dir](sort.field);
		        }
		    });

		    map = function (array, callback) {
		        var idx, length = array.length, result = new Array(length);

		        for (idx = 0; idx < length; idx++) {
		            result[idx] = callback(array[idx], idx, array);
		        }

		        return result;
		    };

		    var operators = (function(){

		        function quote(value) {
		            return value.replace(quoteRegExp, "\\").replace(newLineRegExp, "");
		        }

		        function operator(op, a, b, ignore) {
		            var date;

		            if (b != null) {
		                if (typeof b === STRING) {
		                    b = quote(b);
		                    date = dateRegExp.exec(b);
		                    if (date) {
		                        b = new Date(+date[1]);
		                    } else if (ignore) {
		                        b = "'" + b.toLowerCase() + "'";
		                        a = "((" + a + " || '')+'').toLowerCase()";
		                    } else {
		                        b = "'" + b + "'";
		                    }
		                }

		                if (b.getTime) {
		                    //b looks like a Date
		                    a = "(" + a + "&&" + a + ".getTime?" + a + ".getTime():" + a + ")";
		                    b = b.getTime();
		                }
		            }

		            return a + " " + op + " " + b;
		        }

		        return {
		            quote: function(value) {
		                if (value && value.getTime) {
		                    return "new Date(" + value.getTime() + ")";
		                }

		                if (typeof value == "string") {
		                    return "'" + quote(value) + "'";
		                }

		                return "" + value;
		            },
		            eq: function(a, b, ignore) {
		                return operator("==", a, b, ignore);
		            },
		            neq: function(a, b, ignore) {
		                return operator("!=", a, b, ignore);
		            },
		            gt: function(a, b, ignore) {
		                return operator(">", a, b, ignore);
		            },
		            gte: function(a, b, ignore) {
		                return operator(">=", a, b, ignore);
		            },
		            lt: function(a, b, ignore) {
		                return operator("<", a, b, ignore);
		            },
		            lte: function(a, b, ignore) {
		                return operator("<=", a, b, ignore);
		            },
		            startswith: function(a, b, ignore) {
		                if (ignore) {
		                    a = "(" + a + " || '').toLowerCase()";
		                    if (b) {
		                        b = b.toLowerCase();
		                    }
		                }

		                if (b) {
		                    b = quote(b);
		                }

		                return a + ".lastIndexOf('" + b + "', 0) == 0";
		            },
		            doesnotstartwith: function(a, b, ignore) {
		                if (ignore) {
		                    a = "(" + a + " || '').toLowerCase()";
		                    if (b) {
		                        b = b.toLowerCase();
		                    }
		                }

		                if (b) {
		                    b = quote(b);
		                }

		                return a + ".lastIndexOf('" + b + "', 0) == -1";
		            },
		            endswith: function(a, b, ignore) {
		                if (ignore) {
		                    a = "(" + a + " || '').toLowerCase()";
		                    if (b) {
		                        b = b.toLowerCase();
		                    }
		                }

		                if (b) {
		                    b = quote(b);
		                }

		                return a + ".indexOf('" + b + "', " + a + ".length - " + (b || "").length + ") >= 0";
		            },
		            doesnotendwith: function(a, b, ignore) {
		                if (ignore) {
		                    a = "(" + a + " || '').toLowerCase()";
		                    if (b) {
		                        b = b.toLowerCase();
		                    }
		                }

		                if (b) {
		                    b = quote(b);
		                }

		                return a + ".indexOf('" + b + "', " + a + ".length - " + (b || "").length + ") < 0";
		            },
		            contains: function(a, b, ignore) {
		                if (ignore) {
		                    a = "(" + a + " || '').toLowerCase()";
		                    if (b) {
		                        b = b.toLowerCase();
		                    }
		                }

		                if (b) {
		                    b = quote(b);
		                }

		                return a + ".indexOf('" + b + "') >= 0";
		            },
		            doesnotcontain: function(a, b, ignore) {
		                if (ignore) {
		                    a = "(" + a + " || '').toLowerCase()";
		                    if (b) {
		                        b = b.toLowerCase();
		                    }
		                }

		                if (b) {
		                    b = quote(b);
		                }

		                return a + ".indexOf('" + b + "') == -1";
		            },
		            isempty: function(a) {
		                return a + " === ''";
		            },
		            isnotempty: function(a) {
		                return a + " !== ''";
		            },
		            isnull: function(a) {
		                return "(" + a + " === null || " + a + " === undefined)";
		            },
		            isnotnull: function(a) {
		                return "(" + a + " !== null && " + a + " !== undefined)";
		            }
		        };
		    })();

		    function Query(data) {
		        this.data = data || [];
		    }

		    Query.filterExpr = function(expression) {
		        var expressions = [],
		            logic = { and: " && ", or: " || " },
		            idx,
		            length,
		            filter,
		            expr,
		            fieldFunctions = [],
		            operatorFunctions = [],
		            field,
		            operator,
		            filters = expression.filters;

		        for (idx = 0, length = filters.length; idx < length; idx++) {
		            filter = filters[idx];
		            field = filter.field;
		            operator = filter.operator;

		            if (filter.filters) {
		                expr = Query.filterExpr(filter);
		                //Nested function fields or operators - update their index e.g. __o[0] -> __o[1]
		                filter = expr.expression
		                .replace(/__o\[(\d+)\]/g, function(match, index) {
		                    index = +index;
		                    return "__o[" + (operatorFunctions.length + index) + "]";
		                })
		                .replace(/__f\[(\d+)\]/g, function(match, index) {
		                    index = +index;
		                    return "__f[" + (fieldFunctions.length + index) + "]";
		                });

		                operatorFunctions.push.apply(operatorFunctions, expr.operators);
		                fieldFunctions.push.apply(fieldFunctions, expr.fields);
		            } else {
		                if (typeof field === FUNCTION) {
		                    expr = "__f[" + fieldFunctions.length +"](d)";
		                    fieldFunctions.push(field);
		                } else {
		                    expr = kendo.expr(field);
		                }

		                if (typeof operator === FUNCTION) {
		                    filter = "__o[" + operatorFunctions.length + "](" + expr + ", " + operators.quote(filter.value) + ")";
		                    operatorFunctions.push(operator);
		                } else {
		                    filter = operators[(operator || "eq").toLowerCase()](expr, filter.value, filter.ignoreCase !== undefined? filter.ignoreCase : true);
		                }
		            }

		            expressions.push(filter);
		        }

		        return  { expression: "(" + expressions.join(logic[expression.logic]) + ")", fields: fieldFunctions, operators: operatorFunctions };
		    };

		    function normalizeSort(field, dir) {
		        if (field) {
		            var descriptor = typeof field === STRING ? { field: field, dir: dir } : field,
		            descriptors = isArray(descriptor) ? descriptor : (descriptor !== undefined ? [descriptor] : []);

		            return grep(descriptors, function(d) { return !!d.dir; });
		        }
		    }

		    var operatorMap = {
		        "==": "eq",
		        equals: "eq",
		        isequalto: "eq",
		        equalto: "eq",
		        equal: "eq",
		        "!=": "neq",
		        ne: "neq",
		        notequals: "neq",
		        isnotequalto: "neq",
		        notequalto: "neq",
		        notequal: "neq",
		        "<": "lt",
		        islessthan: "lt",
		        lessthan: "lt",
		        less: "lt",
		        "<=": "lte",
		        le: "lte",
		        islessthanorequalto: "lte",
		        lessthanequal: "lte",
		        ">": "gt",
		        isgreaterthan: "gt",
		        greaterthan: "gt",
		        greater: "gt",
		        ">=": "gte",
		        isgreaterthanorequalto: "gte",
		        greaterthanequal: "gte",
		        ge: "gte",
		        notsubstringof: "doesnotcontain",
		        isnull: "isnull",
		        isempty: "isempty",
		        isnotempty: "isnotempty"
		    };

		    function normalizeOperator(expression) {
		        var idx,
		        length,
		        filter,
		        operator,
		        filters = expression.filters;

		        if (filters) {
		            for (idx = 0, length = filters.length; idx < length; idx++) {
		                filter = filters[idx];
		                operator = filter.operator;

		                if (operator && typeof operator === STRING) {
		                    filter.operator = operatorMap[operator.toLowerCase()] || operator;
		                }

		                normalizeOperator(filter);
		            }
		        }
		    }

		    function normalizeFilter(expression) {
		        if (expression && !isEmptyObject(expression)) {
		            if (isArray(expression) || !expression.filters) {
		                expression = {
		                    logic: "and",
		                    filters: isArray(expression) ? expression : [expression]
		                };
		            }

		            normalizeOperator(expression);

		            return expression;
		        }
		    }

		    Query.normalizeFilter = normalizeFilter;

		    function compareDescriptor(f1, f2) {
		        if (f1.logic || f2.logic) {
		            return false;
		        }

		        return f1.field === f2.field && f1.value === f2.value && f1.operator === f2.operator;
		    }

		    function normalizeDescriptor(filter) {
		        filter = filter || {};

		        if (isEmptyObject(filter)) {
		            return { logic: "and", filters: [] };
		        }

		        return normalizeFilter(filter);
		    }

		    function fieldComparer(a, b) {
		        if (b.logic || (a.field > b.field)) {
		            return 1;
		        } else if (a.field < b.field) {
		            return -1;
		        } else {
		            return 0;
		        }
		    }

		    function compareFilters(expr1, expr2) {
		        expr1 = normalizeDescriptor(expr1);
		        expr2 = normalizeDescriptor(expr2);

		        if (expr1.logic !== expr2.logic) {
		            return false;
		        }

		        var f1, f2;
		        var filters1 = (expr1.filters || []).slice();
		        var filters2 = (expr2.filters || []).slice();

		        if (filters1.length !== filters2.length) {
		            return false;
		        }

		        filters1 = filters1.sort(fieldComparer);
		        filters2 = filters2.sort(fieldComparer);

		        for (var idx = 0; idx < filters1.length; idx++) {
		            f1 = filters1[idx];
		            f2 = filters2[idx];

		            if (f1.logic && f2.logic) {
		                if (!compareFilters(f1, f2)) {
		                    return false;
		                }
		            } else if (!compareDescriptor(f1, f2)) {
		                return false;
		            }
		        }

		        return true;
		    }

		    Query.compareFilters = compareFilters;

		    function normalizeAggregate(expressions) {
		        return isArray(expressions) ? expressions : [expressions];
		    }

		    function normalizeGroup(field, dir) {
		        var descriptor = typeof field === STRING ? { field: field, dir: dir } : field,
		        descriptors = isArray(descriptor) ? descriptor : (descriptor !== undefined ? [descriptor] : []);

		        return map(descriptors, function(d) { return { field: d.field, dir: d.dir || "asc", aggregates: d.aggregates }; });
		    }

		    Query.prototype = {
		        toArray: function () {
		            return this.data;
		        },
		        range: function(index, count) {
		            return new Query(this.data.slice(index, index + count));
		        },
		        skip: function (count) {
		            return new Query(this.data.slice(count));
		        },
		        take: function (count) {
		            return new Query(this.data.slice(0, count));
		        },
		        select: function (selector) {
		            return new Query(map(this.data, selector));
		        },
		        order: function(selector, dir) {
		            var sort = { dir: dir };

		            if (selector) {
		                if (selector.compare) {
		                    sort.compare = selector.compare;
		                } else {
		                    sort.field = selector;
		                }
		            }

		            return new Query(this.data.slice(0).sort(Comparer.create(sort)));
		        },
		        orderBy: function(selector) {
		            return this.order(selector, "asc");
		        },
		        orderByDescending: function(selector) {
		            return this.order(selector, "desc");
		        },
		        sort: function(field, dir, comparer) {
		            var idx,
		            length,
		            descriptors = normalizeSort(field, dir),
		            comparers = [];

		            comparer = comparer || Comparer;

		            if (descriptors.length) {
		                for (idx = 0, length = descriptors.length; idx < length; idx++) {
		                    comparers.push(comparer.create(descriptors[idx]));
		                }

		                return this.orderBy({ compare: comparer.combine(comparers) });
		            }

		            return this;
		        },

		        filter: function(expressions) {
		            var idx,
		            current,
		            length,
		            compiled,
		            predicate,
		            data = this.data,
		            fields,
		            operators,
		            result = [],
		            filter;

		            expressions = normalizeFilter(expressions);

		            if (!expressions || expressions.filters.length === 0) {
		                return this;
		            }

		            compiled = Query.filterExpr(expressions);
		            fields = compiled.fields;
		            operators = compiled.operators;

		            predicate = filter = new Function("d, __f, __o", "return " + compiled.expression);

		            if (fields.length || operators.length) {
		                filter = function(d) {
		                    return predicate(d, fields, operators);
		                };
		            }


		            for (idx = 0, length = data.length; idx < length; idx++) {
		                current = data[idx];

		                if (filter(current)) {
		                    result.push(current);
		                }
		            }

		            return new Query(result);
		        },

		        group: function(descriptors, allData) {
		            descriptors =  normalizeGroup(descriptors || []);
		            allData = allData || this.data;

		            var that = this,
		            result = new Query(that.data),
		            descriptor;

		            if (descriptors.length > 0) {
		                descriptor = descriptors[0];
		                result = result.groupBy(descriptor).select(function(group) {
		                    var data = new Query(allData).filter([ { field: group.field, operator: "eq", value: group.value, ignoreCase: false } ]);
		                    return {
		                        field: group.field,
		                        value: group.value,
		                        items: descriptors.length > 1 ? new Query(group.items).group(descriptors.slice(1), data.toArray()).toArray() : group.items,
		                        hasSubgroups: descriptors.length > 1,
		                        aggregates: data.aggregate(descriptor.aggregates)
		                    };
		                });
		            }
		            return result;
		        },

		        groupBy: function(descriptor) {
		            if (isEmptyObject(descriptor) || !this.data.length) {
		                return new Query([]);
		            }

		            var field = descriptor.field,
		                sorted = this._sortForGrouping(field, descriptor.dir || "asc"),
		                accessor = kendo.accessor(field),
		                item,
		                groupValue = accessor.get(sorted[0], field),
		                group = {
		                    field: field,
		                    value: groupValue,
		                    items: []
		                },
		                currentValue,
		                idx,
		                len,
		                result = [group];

		            for(idx = 0, len = sorted.length; idx < len; idx++) {
		                item = sorted[idx];
		                currentValue = accessor.get(item, field);
		                if(!groupValueComparer(groupValue, currentValue)) {
		                    groupValue = currentValue;
		                    group = {
		                        field: field,
		                        value: groupValue,
		                        items: []
		                    };
		                    result.push(group);
		                }
		                group.items.push(item);
		            }
		            return new Query(result);
		        },

		        _sortForGrouping: function(field, dir) {
		            var idx, length,
		                data = this.data;

		            if (!stableSort) {
		                for (idx = 0, length = data.length; idx < length; idx++) {
		                    data[idx].__position = idx;
		                }

		                data = new Query(data).sort(field, dir, StableComparer).toArray();

		                for (idx = 0, length = data.length; idx < length; idx++) {
		                    delete data[idx].__position;
		                }
		                return data;
		            }
		            return this.sort(field, dir).toArray();
		        },

		        aggregate: function (aggregates) {
		            var idx,
		                len,
		                result = {},
		                state = {};

		            if (aggregates && aggregates.length) {
		                for(idx = 0, len = this.data.length; idx < len; idx++) {
		                    calculateAggregate(result, aggregates, this.data[idx], idx, len, state);
		                }
		            }
		            return result;
		        }
		    };

		    function groupValueComparer(a, b) {
		        if (a && a.getTime && b && b.getTime) {
		            return a.getTime() === b.getTime();
		        }
		        return a === b;
		    }

		    function calculateAggregate(accumulator, aggregates, item, index, length, state) {
		        aggregates = aggregates || [];
		        var idx,
		            aggr,
		            functionName,
		            len = aggregates.length;

		        for (idx = 0; idx < len; idx++) {
		            aggr = aggregates[idx];
		            functionName = aggr.aggregate;
		            var field = aggr.field;
		            accumulator[field] = accumulator[field] || {};
		            state[field] = state[field] || {};
		            state[field][functionName] = state[field][functionName] || {};
		            accumulator[field][functionName] = functions[functionName.toLowerCase()](accumulator[field][functionName], item, kendo.accessor(field), index, length, state[field][functionName]);
		        }
		    }

		    var functions = {
		        sum: function(accumulator, item, accessor) {
		            var value = accessor.get(item);

		            if (!isNumber(accumulator)) {
		                accumulator = value;
		            } else if (isNumber(value)) {
		                accumulator += value;
		            }

		            return accumulator;
		        },
		        count: function(accumulator) {
		            return (accumulator || 0) + 1;
		        },
		        average: function(accumulator, item, accessor, index, length, state) {
		            var value = accessor.get(item);

		            if (state.count === undefined) {
		                state.count = 0;
		            }

		            if (!isNumber(accumulator)) {
		                accumulator = value;
		            } else if (isNumber(value)) {
		                accumulator += value;
		            }

		            if (isNumber(value)) {
		                state.count++;
		            }

		            if(index == length - 1 && isNumber(accumulator)) {
		                accumulator = accumulator / state.count;
		            }
		            return accumulator;
		        },
		        max: function(accumulator, item, accessor) {
		            var value = accessor.get(item);

		            if (!isNumber(accumulator) && !isDate(accumulator)) {
		                accumulator = value;
		            }

		            if(accumulator < value && (isNumber(value) || isDate(value))) {
		                accumulator = value;
		            }
		            return accumulator;
		        },
		        min: function(accumulator, item, accessor) {
		            var value = accessor.get(item);

		            if (!isNumber(accumulator) && !isDate(accumulator)) {
		                accumulator = value;
		            }

		            if(accumulator > value && (isNumber(value) || isDate(value))) {
		                accumulator = value;
		            }
		            return accumulator;
		        }
		    };

		    function isNumber(val) {
		        return typeof val === "number" && !isNaN(val);
		    }

		    function isDate(val) {
		        return val && val.getTime;
		    }

		    function toJSON(array) {
		        var idx, length = array.length, result = new Array(length);

		        for (idx = 0; idx < length; idx++) {
		            result[idx] = array[idx].toJSON();
		        }

		        return result;
		    }

		    Query.process = function(data, options) {
		        options = options || {};

		        var query = new Query(data),
		            group = options.group,
		            sort = normalizeGroup(group || []).concat(normalizeSort(options.sort || [])),
		            total,
		            filterCallback = options.filterCallback,
		            filter = options.filter,
		            skip = options.skip,
		            take = options.take;

		        if (filter) {
		            query = query.filter(filter);

		            if (filterCallback) {
		                query = filterCallback(query);
		            }

		            total = query.toArray().length;
		        }

		        if (sort) {
		            query = query.sort(sort);

		            if (group) {
		                data = query.toArray();
		            }
		        }

		        if (skip !== undefined && take !== undefined) {
		            query = query.range(skip, take);
		        }

		        if (group) {
		            query = query.group(group, data);
		        }

		        return {
		            total: total,
		            data: query.toArray()
		        };
		    };

		    var LocalTransport = Class.extend({
		        init: function(options) {
		            this.data = options.data;
		        },

		        read: function(options) {
		            options.success(this.data);
		        },
		        update: function(options) {
		            options.success(options.data);
		        },
		        create: function(options) {
		            options.success(options.data);
		        },
		        destroy: function(options) {
		            options.success(options.data);
		        }
		    });

		    var RemoteTransport = Class.extend( {
		        init: function(options) {
		            var that = this, parameterMap;

		            options = that.options = extend({}, that.options, options);

		            each(crud, function(index, type) {
		                if (typeof options[type] === STRING) {
		                    options[type] = {
		                        url: options[type]
		                    };
		                }
		            });

		            that.cache = options.cache? Cache.create(options.cache) : {
		                find: noop,
		                add: noop
		            };

		            parameterMap = options.parameterMap;

		            if (isFunction(options.push)) {
		                that.push = options.push;
		            }

		            if (!that.push) {
		                that.push = identity;
		            }

		            that.parameterMap = isFunction(parameterMap) ? parameterMap : function(options) {
		                var result = {};

		                each(options, function(option, value) {
		                    if (option in parameterMap) {
		                        option = parameterMap[option];
		                        if (isPlainObject(option)) {
		                            value = option.value(value);
		                            option = option.key;
		                        }
		                    }

		                    result[option] = value;
		                });

		                return result;
		            };
		        },

		        options: {
		            parameterMap: identity
		        },

		        create: function(options) {
		            return ajax(this.setup(options, CREATE));
		        },

		        read: function(options) {
		            var that = this,
		                success,
		                error,
		                result,
		                cache = that.cache;

		            options = that.setup(options, READ);

		            success = options.success || noop;
		            error = options.error || noop;

		            result = cache.find(options.data);

		            if(result !== undefined) {
		                success(result);
		            } else {
		                options.success = function(result) {
		                    cache.add(options.data, result);

		                    success(result);
		                };

		                $.ajax(options);
		            }
		        },

		        update: function(options) {
		            return ajax(this.setup(options, UPDATE));
		        },

		        destroy: function(options) {
		            return ajax(this.setup(options, DESTROY));
		        },

		        setup: function(options, type) {
		            options = options || {};

		            var that = this,
		                parameters,
		                operation = that.options[type],
		                data = isFunction(operation.data) ? operation.data(options.data) : operation.data;

		            options = extend(true, {}, operation, options);
		            parameters = extend(true, {}, data, options.data);

		            options.data = that.parameterMap(parameters, type);

		            if (isFunction(options.url)) {
		                options.url = options.url(parameters);
		            }

		            return options;
		        }
		    });

		    var Cache = Class.extend({
		        init: function() {
		            this._store = {};
		        },
		        add: function(key, data) {
		            if(key !== undefined) {
		                this._store[stringify(key)] = data;
		            }
		        },
		        find: function(key) {
		            return this._store[stringify(key)];
		        },
		        clear: function() {
		            this._store = {};
		        },
		        remove: function(key) {
		            delete this._store[stringify(key)];
		        }
		    });

		    Cache.create = function(options) {
		        var store = {
		            "inmemory": function() { return new Cache(); }
		        };

		        if (isPlainObject(options) && isFunction(options.find)) {
		            return options;
		        }

		        if (options === true) {
		            return new Cache();
		        }

		        return store[options]();
		    };

		    function serializeRecords(data, getters, modelInstance, originalFieldNames, fieldNames) {
		        var record,
		            getter,
		            originalName,
		            idx,
		            setters = {},
		            length;

		        for (idx = 0, length = data.length; idx < length; idx++) {
		            record = data[idx];
		            for (getter in getters) {
		                originalName = fieldNames[getter];

		                if (originalName && originalName !== getter) {
		                    if (!setters[originalName]) {
		                        setters[originalName] = kendo.setter(originalName);
		                    }
		                    setters[originalName](record, getters[getter](record));
		                    delete record[getter];
		                }
		            }
		        }
		    }

		    function convertRecords(data, getters, modelInstance, originalFieldNames, fieldNames) {
		        var record,
		            getter,
		            originalName,
		            idx,
		            length;

		        for (idx = 0, length = data.length; idx < length; idx++) {
		            record = data[idx];
		            for (getter in getters) {
		                record[getter] = modelInstance._parse(getter, getters[getter](record));

		                originalName = fieldNames[getter];
		                if (originalName && originalName !== getter) {
		                    delete record[originalName];
		                }
		            }
		        }
		    }

		    function convertGroup(data, getters, modelInstance, originalFieldNames, fieldNames) {
		        var record,
		            idx,
		            fieldName,
		            length;

		        for (idx = 0, length = data.length; idx < length; idx++) {
		            record = data[idx];

		            fieldName = originalFieldNames[record.field];
		            if (fieldName && fieldName != record.field) {
		                record.field = fieldName;
		            }

		            record.value = modelInstance._parse(record.field, record.value);

		            if (record.hasSubgroups) {
		                convertGroup(record.items, getters, modelInstance, originalFieldNames, fieldNames);
		            } else {
		                convertRecords(record.items, getters, modelInstance, originalFieldNames, fieldNames);
		            }
		        }
		    }

		    function wrapDataAccess(originalFunction, model, converter, getters, originalFieldNames, fieldNames) {
		        return function(data) {
		            data = originalFunction(data);

		            if (data && !isEmptyObject(getters)) {
		                if (toString.call(data) !== "[object Array]" && !(data instanceof ObservableArray)) {
		                    data = [data];
		                }

		                converter(data, getters, new model(), originalFieldNames, fieldNames);
		            }

		            return data || [];
		        };
		    }

		    var DataReader = Class.extend({
		        init: function(schema) {
		            var that = this, member, get, model, base;

		            schema = schema || {};

		            for (member in schema) {
		                get = schema[member];

		                that[member] = typeof get === STRING ? getter(get) : get;
		            }

		            base = schema.modelBase || Model;

		            if (isPlainObject(that.model)) {
		                that.model = model = base.define(that.model);
		            }

		            var dataFunction = proxy(that.data, that);

		            that._dataAccessFunction = dataFunction;

		            if (that.model) {
		                var groupsFunction = proxy(that.groups, that),
		                    serializeFunction = proxy(that.serialize, that),
		                    originalFieldNames = {},
		                    getters = {},
		                    serializeGetters = {},
		                    fieldNames = {},
		                    shouldSerialize = false,
		                    fieldName;

		                model = that.model;

		                if (model.fields) {
		                    each(model.fields, function(field, value) {
		                        var fromName;

		                        fieldName = field;

		                        if (isPlainObject(value) && value.field) {
		                            fieldName = value.field;
		                        } else if (typeof value === STRING) {
		                            fieldName = value;
		                        }

		                        if (isPlainObject(value) && value.from) {
		                            fromName = value.from;
		                        }

		                        shouldSerialize = shouldSerialize || (fromName && fromName !== field) || fieldName !== field;

		                        getters[field] = getter(fromName || fieldName);
		                        serializeGetters[field] = getter(field);
		                        originalFieldNames[fromName || fieldName] = field;
		                        fieldNames[field] = fromName || fieldName;
		                    });

		                    if (!schema.serialize && shouldSerialize) {
		                        that.serialize = wrapDataAccess(serializeFunction, model, serializeRecords, serializeGetters, originalFieldNames, fieldNames);
		                    }
		                }

		                that._dataAccessFunction = dataFunction;
		                that.data = wrapDataAccess(dataFunction, model, convertRecords, getters, originalFieldNames, fieldNames);
		                that.groups = wrapDataAccess(groupsFunction, model, convertGroup, getters, originalFieldNames, fieldNames);
		            }
		        },
		        errors: function(data) {
		            return data ? data.errors : null;
		        },
		        parse: identity,
		        data: identity,
		        total: function(data) {
		            return data.length;
		        },
		        groups: identity,
		        aggregates: function() {
		            return {};
		        },
		        serialize: function(data) {
		            return data;
		        }
		    });

		    function mergeGroups(target, dest, skip, take) {
		        var group,
		            idx = 0,
		            items;

		        while (dest.length && take) {
		            group = dest[idx];
		            items = group.items;

		            var length = items.length;

		            if (target && target.field === group.field && target.value === group.value) {
		                if (target.hasSubgroups && target.items.length) {
		                    mergeGroups(target.items[target.items.length - 1], group.items, skip, take);
		                } else {
		                    items = items.slice(skip, skip + take);
		                    target.items = target.items.concat(items);
		                }
		                dest.splice(idx--, 1);
		            } else if (group.hasSubgroups && items.length) {
		                mergeGroups(group, items, skip, take);
		                if (!group.items.length) {
		                    dest.splice(idx--, 1);
		                }
		            } else {
		                items = items.slice(skip, skip + take);
		                group.items = items;

		                if (!group.items.length) {
		                    dest.splice(idx--, 1);
		                }
		            }

		            if (items.length === 0) {
		                skip -= length;
		            } else {
		                skip = 0;
		                take -= items.length;
		            }

		            if (++idx >= dest.length) {
		                break;
		            }
		        }

		        if (idx < dest.length) {
		            dest.splice(idx, dest.length - idx);
		        }
		    }

		    function flattenGroups(data) {
		        var idx,
		            result = [],
		            length,
		            items,
		            itemIndex;

		        for (idx = 0, length = data.length; idx < length; idx++) {
		            var group = data.at(idx);
		            if (group.hasSubgroups) {
		                result = result.concat(flattenGroups(group.items));
		            } else {
		                items = group.items;
		                for (itemIndex = 0; itemIndex < items.length; itemIndex++) {
		                    result.push(items.at(itemIndex));
		                }
		            }
		        }
		        return result;
		    }

		    function wrapGroupItems(data, model) {
		        var idx, length, group;
		        if (model) {
		            for (idx = 0, length = data.length; idx < length; idx++) {
		                group = data.at(idx);

		                if (group.hasSubgroups) {
		                    wrapGroupItems(group.items, model);
		                } else {
		                    group.items = new LazyObservableArray(group.items, model);
		                }
		            }
		        }
		    }

		    function eachGroupItems(data, func) {
		        for (var idx = 0, length = data.length; idx < length; idx++) {
		            if (data[idx].hasSubgroups) {
		                if (eachGroupItems(data[idx].items, func)) {
		                    return true;
		                }
		            } else if (func(data[idx].items, data[idx])) {
		                return true;
		            }
		        }
		    }

		    function replaceInRanges(ranges, data, item, observable) {
		        for (var idx = 0; idx < ranges.length; idx++) {
		            if (ranges[idx].data === data) {
		                break;
		            }
		            if (replaceInRange(ranges[idx].data, item, observable)) {
		                break;
		            }
		        }
		    }

		    function replaceInRange(items, item, observable) {
		        for (var idx = 0, length = items.length; idx < length; idx++) {
		            if (items[idx] && items[idx].hasSubgroups) {
		                return replaceInRange(items[idx].items, item, observable);
		            } else if (items[idx] === item || items[idx] === observable) {
		               items[idx] = observable;
		               return true;
		            }
		        }
		    }

		    function replaceWithObservable(view, data, ranges, type, serverGrouping) {
		        for (var viewIndex = 0, length = view.length; viewIndex < length; viewIndex++) {
		            var item = view[viewIndex];

		            if (!item || item instanceof type) {
		                continue;
		            }

		            if (item.hasSubgroups !== undefined && !serverGrouping) {
		                replaceWithObservable(item.items, data, ranges, type, serverGrouping);
		            } else {
		                for (var idx = 0; idx < data.length; idx++) {
		                    if (data[idx] === item) {
		                        view[viewIndex] = data.at(idx);
		                        replaceInRanges(ranges, data, item, view[viewIndex]);
		                        break;
		                    }
		                }
		            }
		        }
		    }

		    function removeModel(data, model) {
		        var idx, length;

		        for (idx = 0, length = data.length; idx < length; idx++) {
		            var dataItem = data.at(idx);
		            if (dataItem.uid == model.uid) {
		                data.splice(idx, 1);
		                return dataItem;
		            }
		        }
		    }

		    function indexOfPristineModel(data, model) {
		        if (model) {
		            return indexOf(data, function(item) {
		                return (item.uid && item.uid == model.uid) || (item[model.idField] === model.id && model.id !== model._defaultId);
		            });
		        }
		        return -1;
		    }

		    function indexOfModel(data, model) {
		        if (model) {
		            return indexOf(data, function(item) {
		                return item.uid == model.uid;
		            });
		        }
		        return -1;
		    }

		    function indexOf(data, comparer) {
		        var idx, length;

		        for (idx = 0, length = data.length; idx < length; idx++) {
		            if (comparer(data[idx])) {
		                return idx;
		            }
		        }

		        return -1;
		    }

		    function fieldNameFromModel(fields, name) {
		        if (fields && !isEmptyObject(fields)) {
		            var descriptor = fields[name];
		            var fieldName;
		            if (isPlainObject(descriptor)) {
		                fieldName = descriptor.from || descriptor.field || name;
		            } else {
		                fieldName = fields[name] || name;
		            }

		            if (isFunction(fieldName)) {
		                return name;
		            }

		            return fieldName;
		        }
		        return name;
		    }

		    function convertFilterDescriptorsField(descriptor, model) {
		        var idx,
		            length,
		            target = {};

		        for (var field in descriptor) {
		            if (field !== "filters") {
		                target[field] = descriptor[field];
		            }
		        }

		        if (descriptor.filters) {
		            target.filters = [];
		            for (idx = 0, length = descriptor.filters.length; idx < length; idx++) {
		                target.filters[idx] = convertFilterDescriptorsField(descriptor.filters[idx], model);
		            }
		        } else {
		            target.field = fieldNameFromModel(model.fields, target.field);
		        }
		        return target;
		    }

		    function convertDescriptorsField(descriptors, model) {
		        var idx,
		            length,
		            result = [],
		            target,
		            descriptor;

		        for (idx = 0, length = descriptors.length; idx < length; idx ++) {
		            target = {};

		            descriptor = descriptors[idx];

		            for (var field in descriptor) {
		                target[field] = descriptor[field];
		            }

		            target.field = fieldNameFromModel(model.fields, target.field);

		            if (target.aggregates && isArray(target.aggregates)) {
		                target.aggregates = convertDescriptorsField(target.aggregates, model);
		            }
		            result.push(target);
		        }
		        return result;
		    }

		    var DataSource = Observable.extend({
		        init: function(options) {
		            var that = this, model, data;

		            if (options) {
		                data = options.data;
		            }

		            options = that.options = extend({}, that.options, options);

		            that._map = {};
		            that._prefetch = {};
		            that._data = [];
		            that._pristineData = [];
		            that._ranges = [];
		            that._view = [];
		            that._pristineTotal = 0;
		            that._destroyed = [];
		            that._pageSize = options.pageSize;
		            that._page = options.page  || (options.pageSize ? 1 : undefined);
		            that._sort = normalizeSort(options.sort);
		            that._filter = normalizeFilter(options.filter);
		            that._group = normalizeGroup(options.group);
		            that._aggregate = options.aggregate;
		            that._total = options.total;

		            that._shouldDetachObservableParents = true;

		            Observable.fn.init.call(that);

		            that.transport = Transport.create(options, data, that);

		            if (isFunction(that.transport.push)) {
		                that.transport.push({
		                    pushCreate: proxy(that._pushCreate, that),
		                    pushUpdate: proxy(that._pushUpdate, that),
		                    pushDestroy: proxy(that._pushDestroy, that)
		                });
		            }

		            if (options.offlineStorage != null) {
		                if (typeof options.offlineStorage == "string") {
		                    var key = options.offlineStorage;

		                    that._storage = {
		                        getItem: function() {
		                            return JSON.parse(localStorage.getItem(key));
		                        },
		                        setItem: function(item) {
		                            localStorage.setItem(key, stringify(that.reader.serialize(item)));
		                        }
		                    };
		                } else {
		                    that._storage = options.offlineStorage;
		                }
		            }

		            that.reader = new kendo.data.readers[options.schema.type || "json" ](options.schema);

		            model = that.reader.model || {};

		            that._detachObservableParents();

		            that._data = that._observe(that._data);
		            that._online = true;

		            that.bind(["push", ERROR, CHANGE, REQUESTSTART, SYNC, REQUESTEND, PROGRESS], options);
		        },

		        options: {
		            data: null,
		            schema: {
		               modelBase: Model
		            },
		            offlineStorage: null,
		            serverSorting: false,
		            serverPaging: false,
		            serverFiltering: false,
		            serverGrouping: false,
		            serverAggregates: false,
		            batch: false
		        },

		        clone: function() {
		            return this;
		        },

		        online: function(value) {
		            if (value !== undefined) {
		                if (this._online != value) {
		                    this._online = value;

		                    if (value) {
		                        return this.sync();
		                    }
		                }

		                return $.Deferred().resolve().promise();
		            } else {
		                return this._online;
		            }
		        },

		        offlineData: function(state) {
		            if (this.options.offlineStorage == null) {
		                return null;
		            }

		            if (state !== undefined) {
		                return this._storage.setItem(state);
		            }

		            return this._storage.getItem() || [];
		        },

		        _isServerGrouped: function() {
		            var group = this.group() || [];

		            return this.options.serverGrouping && group.length;
		        },

		        _pushCreate: function(result) {
		            this._push(result, "pushCreate");
		        },

		        _pushUpdate: function(result) {
		            this._push(result, "pushUpdate");
		        },

		        _pushDestroy: function(result) {
		            this._push(result, "pushDestroy");
		        },

		        _push: function(result, operation) {
		            var data = this._readData(result);

		            if (!data) {
		                data = result;
		            }

		            this[operation](data);
		        },

		        _flatData: function(data, skip) {
		            if (data) {
		                if (this._isServerGrouped()) {
		                    return flattenGroups(data);
		                }

		                if (!skip) {
		                    for (var idx = 0; idx < data.length; idx++) {
		                        data.at(idx);
		                    }
		                }
		            }

		            return data;
		        },

		        parent: noop,

		        get: function(id) {
		            var idx, length, data = this._flatData(this._data);

		            for (idx = 0, length = data.length; idx < length; idx++) {
		                if (data[idx].id == id) {
		                    return data[idx];
		                }
		            }
		        },

		        getByUid: function(id) {
		            var idx, length, data = this._flatData(this._data);

		            if (!data) {
		                return;
		            }

		            for (idx = 0, length = data.length; idx < length; idx++) {
		                if (data[idx].uid == id) {
		                    return data[idx];
		                }
		            }
		        },

		        indexOf: function(model) {
		            return indexOfModel(this._data, model);
		        },

		        at: function(index) {
		            return this._data.at(index);
		        },

		        data: function(value) {
		            var that = this;
		            if (value !== undefined) {
		                that._detachObservableParents();
		                that._data = this._observe(value);

		                that._pristineData = value.slice(0);

		                that._storeData();

		                that._ranges = [];
		                that.trigger("reset");
		                that._addRange(that._data);

		                that._total = that._data.length;
		                that._pristineTotal = that._total;

		                that._process(that._data);
		            } else {
		                if (that._data) {
		                    for (var idx = 0; idx < that._data.length; idx++) {
		                        that._data.at(idx);
		                    }
		                }

		                return that._data;
		            }
		        },

		        view: function(value) {
		            if (value === undefined) {
		                return this._view;
		            } else {
		                this._view = this._observeView(value);
		            }
		        },

		        _observeView: function(data) {
		            var that = this;
		            replaceWithObservable(data, that._data, that._ranges, that.reader.model || ObservableObject, that._isServerGrouped());

		            var view = new LazyObservableArray(data, that.reader.model);
		            view.parent = function() { return that.parent(); };
		            return view;
		        },

		        flatView: function() {
		            var groups = this.group() || [];

		            if (groups.length) {
		                return flattenGroups(this._view);
		            } else {
		                return this._view;
		            }
		        },

		        add: function(model) {
		            return this.insert(this._data.length, model);
		        },

		        _createNewModel: function(model) {
		            if (this.reader.model) {
		                return new this.reader.model(model);
		            }

		            if (model instanceof ObservableObject) {
		                return model;
		            }

		            return new ObservableObject(model);
		        },

		        insert: function(index, model) {
		            if (!model) {
		                model = index;
		                index = 0;
		            }

		            if (!(model instanceof Model)) {
		                model = this._createNewModel(model);
		            }

		            if (this._isServerGrouped()) {
		                this._data.splice(index, 0, this._wrapInEmptyGroup(model));
		            } else {
		                this._data.splice(index, 0, model);
		            }

		            return model;
		        },

		        pushCreate: function(items) {
		            if (!isArray(items)) {
		                items = [items];
		            }

		            var pushed = [];
		            var autoSync = this.options.autoSync;
		            this.options.autoSync = false;

		            try {
		                for (var idx = 0; idx < items.length; idx ++) {
		                    var item = items[idx];

		                    var result = this.add(item);

		                    pushed.push(result);

		                    var pristine = result.toJSON();

		                    if (this._isServerGrouped()) {
		                        pristine = this._wrapInEmptyGroup(pristine);
		                    }

		                    this._pristineData.push(pristine);
		                }
		            } finally {
		                this.options.autoSync = autoSync;
		            }

		            if (pushed.length) {
		                this.trigger("push", {
		                    type: "create",
		                    items: pushed
		                });
		            }
		        },

		        pushUpdate: function(items) {
		            if (!isArray(items)) {
		                items = [items];
		            }

		            var pushed = [];

		            for (var idx = 0; idx < items.length; idx ++) {
		                var item = items[idx];
		                var model = this._createNewModel(item);

		                var target = this.get(model.id);

		                if (target) {
		                    pushed.push(target);

		                    target.accept(item);

		                    target.trigger(CHANGE);

		                    this._updatePristineForModel(target, item);
		                } else {
		                    this.pushCreate(item);
		                }
		            }

		            if (pushed.length) {
		                this.trigger("push", {
		                    type: "update",
		                    items: pushed
		                });
		            }
		        },

		        pushDestroy: function(items) {
		            var pushed = this._removeItems(items);

		            if (pushed.length) {
		                this.trigger("push", {
		                    type: "destroy",
		                    items: pushed
		                });
		            }
		        },

		        _removeItems: function(items) {
		            if (!isArray(items)) {
		                items = [items];
		            }

		            var destroyed = [];
		            var autoSync = this.options.autoSync;
		            this.options.autoSync = false;
		            try {
		                for (var idx = 0; idx < items.length; idx ++) {
		                    var item = items[idx];
		                    var model = this._createNewModel(item);
		                    var found = false;

		                    this._eachItem(this._data, function(items){
		                        for (var idx = 0; idx < items.length; idx++) {
		                            var item = items.at(idx);
		                            if (item.id === model.id) {
		                                destroyed.push(item);
		                                items.splice(idx, 1);
		                                found = true;
		                                break;
		                            }
		                        }
		                    });

		                    if (found) {
		                        this._removePristineForModel(model);
		                        this._destroyed.pop();
		                    }
		                }
		            } finally {
		                this.options.autoSync = autoSync;
		            }

		            return destroyed;
		        },

		        remove: function(model) {
		            var result,
		                that = this,
		                hasGroups = that._isServerGrouped();

		            this._eachItem(that._data, function(items) {
		                result = removeModel(items, model);
		                if (result && hasGroups) {
		                    if (!result.isNew || !result.isNew()) {
		                        that._destroyed.push(result);
		                    }
		                    return true;
		                }
		            });

		            this._removeModelFromRanges(model);

		            this._updateRangesLength();

		            return model;
		        },

		        destroyed: function() {
		            return this._destroyed;
		        },

		        created: function() {
		            var idx,
		                length,
		                result = [],
		                data = this._flatData(this._data);

		            for (idx = 0, length = data.length; idx < length; idx++) {
		                if (data[idx].isNew && data[idx].isNew()) {
		                    result.push(data[idx]);
		                }
		            }
		            return result;
		        },

		        updated: function() {
		            var idx,
		                length,
		                result = [],
		                data = this._flatData(this._data);

		            for (idx = 0, length = data.length; idx < length; idx++) {
		                if ((data[idx].isNew && !data[idx].isNew()) && data[idx].dirty) {
		                    result.push(data[idx]);
		                }
		            }
		            return result;
		        },

		        sync: function() {
		            var that = this,
		                created = [],
		                updated = [],
		                destroyed = that._destroyed;

		            var promise = $.Deferred().resolve().promise();

		            if (that.online()) {

		                if (!that.reader.model) {
		                    return promise;
		                }

		                created = that.created();
		                updated = that.updated();

		                var promises = [];

		                if (that.options.batch && that.transport.submit) {
		                    promises = that._sendSubmit(created, updated, destroyed);
		                } else {
		                    promises.push.apply(promises, that._send("create", created));
		                    promises.push.apply(promises, that._send("update", updated));
		                    promises.push.apply(promises, that._send("destroy", destroyed));
		                }

		                promise = $.when
		                 .apply(null, promises)
		                 .then(function() {
		                    var idx, length;

		                    for (idx = 0, length = arguments.length; idx < length; idx++){
		                        that._accept(arguments[idx]);
		                    }

		                    that._storeData(true);

		                    that._change({ action: "sync" });

		                    that.trigger(SYNC);
		                });
		            } else {
		                that._storeData(true);

		                that._change({ action: "sync" });
		            }

		            return promise;
		        },

		        cancelChanges: function(model) {
		            var that = this;

		            if (model instanceof kendo.data.Model) {
		                that._cancelModel(model);
		            } else {
		                that._destroyed = [];
		                that._detachObservableParents();
		                that._data = that._observe(that._pristineData);
		                if (that.options.serverPaging) {
		                    that._total = that._pristineTotal;
		                }

		                that._ranges = [];
		                that._addRange(that._data);

		                that._change();

		                that._markOfflineUpdatesAsDirty();
		            }
		        },

		        _markOfflineUpdatesAsDirty: function() {
		            var that = this;

		            if (that.options.offlineStorage != null) {
		                that._eachItem(that._data, function(items) {
		                    for (var idx = 0; idx < items.length; idx++) {
		                        var item = items.at(idx);
		                        if (item.__state__ == "update" || item.__state__ == "create") {
		                            item.dirty = true;
		                        }
		                    }
		                });
		            }
		        },

		        hasChanges: function() {
		            var idx,
		                length,
		                data = this._flatData(this._data);

		            if (this._destroyed.length) {
		                return true;
		            }

		            for (idx = 0, length = data.length; idx < length; idx++) {
		                if ((data[idx].isNew && data[idx].isNew()) || data[idx].dirty) {
		                    return true;
		                }
		            }

		            return false;
		        },

		        _accept: function(result) {
		            var that = this,
		                models = result.models,
		                response = result.response,
		                idx = 0,
		                serverGroup = that._isServerGrouped(),
		                pristine = that._pristineData,
		                type = result.type,
		                length;

		            that.trigger(REQUESTEND, { response: response, type: type });

		            if (response && !isEmptyObject(response)) {
		                response = that.reader.parse(response);

		                if (that._handleCustomErrors(response)) {
		                    return;
		                }

		                response = that.reader.data(response);

		                if (!isArray(response)) {
		                    response = [response];
		                }
		            } else {
		                response = $.map(models, function(model) { return model.toJSON(); } );
		            }

		            if (type === "destroy") {
		                that._destroyed = [];
		            }

		            for (idx = 0, length = models.length; idx < length; idx++) {
		                if (type !== "destroy") {
		                    models[idx].accept(response[idx]);

		                    if (type === "create") {
		                        pristine.push(serverGroup ? that._wrapInEmptyGroup(models[idx]) : response[idx]);
		                    } else if (type === "update") {
		                        that._updatePristineForModel(models[idx], response[idx]);
		                    }
		                } else {
		                    that._removePristineForModel(models[idx]);
		                }
		            }
		        },

		        _updatePristineForModel: function(model, values) {
		            this._executeOnPristineForModel(model, function(index, items) {
		                kendo.deepExtend(items[index], values);
		            });
		        },

		        _executeOnPristineForModel: function(model, callback) {
		            this._eachPristineItem(
		                function(items) {
		                    var index = indexOfPristineModel(items, model);
		                    if (index > -1) {
		                        callback(index, items);
		                        return true;
		                    }
		                });
		        },

		        _removePristineForModel: function(model) {
		            this._executeOnPristineForModel(model, function(index, items) {
		                items.splice(index, 1);
		            });
		        },

		        _readData: function(data) {
		            var read = !this._isServerGrouped() ? this.reader.data : this.reader.groups;
		            return read.call(this.reader, data);
		        },

		        _eachPristineItem: function(callback) {
		            this._eachItem(this._pristineData, callback);
		        },

		       _eachItem: function(data, callback) {
		            if (data && data.length) {
		                if (this._isServerGrouped()) {
		                    eachGroupItems(data, callback);
		                } else {
		                    callback(data);
		                }
		            }
		        },

		        _pristineForModel: function(model) {
		            var pristine,
		                idx,
		                callback = function(items) {
		                    idx = indexOfPristineModel(items, model);
		                    if (idx > -1) {
		                        pristine = items[idx];
		                        return true;
		                    }
		                };

		            this._eachPristineItem(callback);

		            return pristine;
		        },

		        _cancelModel: function(model) {
		            var pristine = this._pristineForModel(model);

		            this._eachItem(this._data, function(items) {
		                var idx = indexOfModel(items, model);
		                if (idx >= 0) {
		                    if (pristine && (!model.isNew() || pristine.__state__)) {
		                        items[idx].accept(pristine);

		                        if (pristine.__state__ == "update") {
		                            items[idx].dirty = true;
		                        }

		                    } else {
		                        items.splice(idx, 1);
		                    }
		                }
		            });
		        },

		        _submit: function(promises, data) {
		            var that = this;

		            that.trigger(REQUESTSTART, { type: "submit" });

		            that.transport.submit(extend({
		                success: function(response, type) {
		                    var promise = $.grep(promises, function(x) {
		                        return x.type == type;
		                    })[0];

		                    if (promise) {
		                        promise.resolve({
		                            response: response,
		                            models: promise.models,
		                            type: type
		                        });
		                    }
		                },
		                error: function(response, status, error) {
		                    for (var idx = 0; idx < promises.length; idx++) {
		                        promises[idx].reject(response);
		                    }

		                    that.error(response, status, error);
		                }
		            }, data));
		        },

		        _sendSubmit: function(created, updated, destroyed) {
		            var that = this,
		                promises = [];

		            if (that.options.batch) {
		                if (created.length) {
		                    promises.push($.Deferred(function(deferred) {
		                        deferred.type = "create";
		                        deferred.models = created;
		                    }));
		                }

		                if (updated.length) {
		                    promises.push($.Deferred(function(deferred) {
		                        deferred.type = "update";
		                        deferred.models = updated;
		                    }));
		                }

		                if (destroyed.length) {
		                    promises.push($.Deferred(function(deferred) {
		                        deferred.type = "destroy";
		                        deferred.models = destroyed;
		                    }));
		                }

		                that._submit(promises, {
		                    data: {
		                        created: that.reader.serialize(toJSON(created)),
		                        updated: that.reader.serialize(toJSON(updated)),
		                        destroyed: that.reader.serialize(toJSON(destroyed))
		                    }
		                });
		            }

		            return promises;
		        },

		        _promise: function(data, models, type) {
		            var that = this;

		            return $.Deferred(function(deferred) {
		                that.trigger(REQUESTSTART, { type: type });

		                that.transport[type].call(that.transport, extend({
		                    success: function(response) {
		                        deferred.resolve({
		                            response: response,
		                            models: models,
		                            type: type
		                        });
		                    },
		                    error: function(response, status, error) {
		                        deferred.reject(response);
		                        that.error(response, status, error);
		                    }
		                }, data));
		            }).promise();
		        },

		        _send: function(method, data) {
		            var that = this,
		                idx,
		                length,
		                promises = [],
		                converted = that.reader.serialize(toJSON(data));

		            if (that.options.batch) {
		                if (data.length) {
		                    promises.push(that._promise( { data: { models: converted } }, data , method));
		                }
		            } else {
		                for (idx = 0, length = data.length; idx < length; idx++) {
		                    promises.push(that._promise( { data: converted[idx] }, [ data[idx] ], method));
		                }
		            }

		            return promises;
		        },

		        read: function(data) {
		            var that = this, params = that._params(data);
		            var deferred = $.Deferred();

		            that._queueRequest(params, function() {
		                var isPrevented = that.trigger(REQUESTSTART, { type: "read" });
		                if (!isPrevented) {
		                    that.trigger(PROGRESS);

		                    that._ranges = [];
		                    that.trigger("reset");
		                    if (that.online()) {
		                        that.transport.read({
		                            data: params,
		                            success: function(data) {
		                                that.success(data, params);

		                                deferred.resolve();
		                            },
		                            error: function() {
		                                var args = slice.call(arguments);

		                                that.error.apply(that, args);

		                                deferred.reject.apply(deferred, args);
		                            }
		                        });
		                    } else if (that.options.offlineStorage != null){
		                        that.success(that.offlineData(), params);

		                        deferred.resolve();
		                    }
		                } else {
		                    that._dequeueRequest();

		                    deferred.resolve(isPrevented);
		                }
		            });

		            return deferred.promise();
		        },

		        _readAggregates: function(data) {
		            return this.reader.aggregates(data);
		        },

		        success: function(data) {
		            var that = this,
		                options = that.options;

		            that.trigger(REQUESTEND, { response: data, type: "read" });

		            if (that.online()) {
		                data = that.reader.parse(data);

		                if (that._handleCustomErrors(data)) {
		                    that._dequeueRequest();
		                    return;
		                }

		                that._total = that.reader.total(data);

		                if (that._aggregate && options.serverAggregates) {
		                    that._aggregateResult = that._readAggregates(data);
		                }

		                data = that._readData(data);
		                that._destroyed = [];
		            } else {
		                data = that._readData(data);

		                var items = [];
		                var itemIds = {};
		                var model = that.reader.model;
		                var idField = model ? model.idField : "id";
		                var idx;

		                for (idx = 0; idx < this._destroyed.length; idx++) {
		                    var id = this._destroyed[idx][idField];
		                    itemIds[id] = id;
		                }

		                for (idx = 0; idx < data.length; idx++) {
		                    var item = data[idx];
		                    var state = item.__state__;
		                    if (state == "destroy") {
		                        if (!itemIds[item[idField]]) {
		                            this._destroyed.push(this._createNewModel(item));
		                        }
		                    } else {
		                        items.push(item);
		                    }
		                }

		                data = items;

		                that._total = data.length;
		            }

		            that._pristineTotal = that._total;

		            that._pristineData = data.slice(0);

		            that._detachObservableParents();

		            that._data = that._observe(data);

		            that._markOfflineUpdatesAsDirty();

		            that._storeData();

		            that._addRange(that._data);

		            that._process(that._data);

		            that._dequeueRequest();
		        },

		        _detachObservableParents: function() {
		            if (this._data && this._shouldDetachObservableParents) {
		                for (var idx = 0; idx < this._data.length; idx++) {
		                    if (this._data[idx].parent) {
		                        this._data[idx].parent = noop;
		                    }
		                }
		            }
		        },

		        _storeData: function(updatePristine) {
		            var serverGrouping = this._isServerGrouped();
		            var model = this.reader.model;

		            function items(data) {
		                var state = [];

		                for (var idx = 0; idx < data.length; idx++) {
		                    var dataItem = data.at(idx);
		                    var item = dataItem.toJSON();

		                    if (serverGrouping && dataItem.items) {
		                        item.items = items(dataItem.items);
		                    } else {
		                        item.uid = dataItem.uid;

		                        if (model) {
		                            if (dataItem.isNew()) {
		                                item.__state__ = "create";
		                            } else if (dataItem.dirty) {
		                                item.__state__ = "update";
		                            }
		                        }
		                    }
		                    state.push(item);
		                }

		                return state;
		            }

		            if (this.options.offlineStorage != null) {
		                var state = items(this._data);

		                var destroyed = [];

		                for (var idx = 0; idx < this._destroyed.length; idx++) {
		                    var item = this._destroyed[idx].toJSON();
		                    item.__state__ = "destroy";
		                    destroyed.push(item);
		                }

		                this.offlineData(state.concat(destroyed));

		                if (updatePristine) {
		                    this._pristineData = this._readData(state);
		                }
		            }
		        },

		        _addRange: function(data) {
		            var that = this,
		                start = that._skip || 0,
		                end = start + that._flatData(data, true).length;

		            that._ranges.push({ start: start, end: end, data: data, timestamp: new Date().getTime() });
		            that._ranges.sort( function(x, y) { return x.start - y.start; } );
		        },

		        error: function(xhr, status, errorThrown) {
		            this._dequeueRequest();
		            this.trigger(REQUESTEND, { });
		            this.trigger(ERROR, { xhr: xhr, status: status, errorThrown: errorThrown });
		        },

		        _params: function(data) {
		            var that = this,
		                options =  extend({
		                    take: that.take(),
		                    skip: that.skip(),
		                    page: that.page(),
		                    pageSize: that.pageSize(),
		                    sort: that._sort,
		                    filter: that._filter,
		                    group: that._group,
		                    aggregate: that._aggregate
		                }, data);

		            if (!that.options.serverPaging) {
		                delete options.take;
		                delete options.skip;
		                delete options.page;
		                delete options.pageSize;
		            }

		            if (!that.options.serverGrouping) {
		                delete options.group;
		            } else if (that.reader.model && options.group) {
		                options.group = convertDescriptorsField(options.group, that.reader.model);
		            }

		            if (!that.options.serverFiltering) {
		                delete options.filter;
		            } else if (that.reader.model && options.filter) {
		               options.filter = convertFilterDescriptorsField(options.filter, that.reader.model);
		            }

		            if (!that.options.serverSorting) {
		                delete options.sort;
		            } else if (that.reader.model && options.sort) {
		                options.sort = convertDescriptorsField(options.sort, that.reader.model);
		            }

		            if (!that.options.serverAggregates) {
		                delete options.aggregate;
		            } else if (that.reader.model && options.aggregate) {
		                options.aggregate = convertDescriptorsField(options.aggregate, that.reader.model);
		            }

		            return options;
		        },

		        _queueRequest: function(options, callback) {
		            var that = this;
		            if (!that._requestInProgress) {
		                that._requestInProgress = true;
		                that._pending = undefined;
		                callback();
		            } else {
		                that._pending = { callback: proxy(callback, that), options: options };
		            }
		        },

		        _dequeueRequest: function() {
		            var that = this;
		            that._requestInProgress = false;
		            if (that._pending) {
		                that._queueRequest(that._pending.options, that._pending.callback);
		            }
		        },

		        _handleCustomErrors: function(response) {
		            if (this.reader.errors) {
		                var errors = this.reader.errors(response);
		                if (errors) {
		                    this.trigger(ERROR, { xhr: null, status: "customerror", errorThrown: "custom error", errors: errors });
		                    return true;
		                }
		            }
		            return false;
		        },

		        _shouldWrap: function(data) {
		            var model = this.reader.model;

		            if (model && data.length) {
		                return !(data[0] instanceof model);
		            }

		            return false;
		        },

		        _observe: function(data) {
		            var that = this,
		                model = that.reader.model;

		            that._shouldDetachObservableParents = true;

		            if (data instanceof ObservableArray) {
		                that._shouldDetachObservableParents = false;
		                if (that._shouldWrap(data)) {
		                    data.type = that.reader.model;
		                    data.wrapAll(data, data);
		                }
		            } else {
		                var arrayType = that.pageSize() && !that.options.serverPaging ? LazyObservableArray : ObservableArray;
		                data = new arrayType(data, that.reader.model);
		                data.parent = function() { return that.parent(); };
		            }

		            if (that._isServerGrouped()) {
		                wrapGroupItems(data, model);
		            }

		            if (that._changeHandler && that._data && that._data instanceof ObservableArray) {
		                that._data.unbind(CHANGE, that._changeHandler);
		            } else {
		                that._changeHandler = proxy(that._change, that);
		            }

		            return data.bind(CHANGE, that._changeHandler);
		        },

		        _updateTotalForAction: function(action, items) {
		            var that = this;

		            var total = parseInt(that._total, 10);

		            if (!isNumber(that._total)) {
		                total = parseInt(that._pristineTotal, 10);
		            }
		            if (action === "add") {
		                total += items.length;
		            } else if (action === "remove") {
		                total -= items.length;
		            } else if (action !== "itemchange" && action !== "sync" && !that.options.serverPaging) {
		                total = that._pristineTotal;
		            } else if (action === "sync") {
		                total = that._pristineTotal = parseInt(that._total, 10);
		            }

		            that._total = total;
		        },

		        _change: function(e) {
		            var that = this, idx, length, action = e ? e.action : "";

		            if (action === "remove") {
		                for (idx = 0, length = e.items.length; idx < length; idx++) {
		                    if (!e.items[idx].isNew || !e.items[idx].isNew()) {
		                        that._destroyed.push(e.items[idx]);
		                    }
		                }
		            }

		            if (that.options.autoSync && (action === "add" || action === "remove" || action === "itemchange")) {

		                var handler = function(args) {
		                    if (args.action === "sync") {
		                        that.unbind("change", handler);
		                        that._updateTotalForAction(action, e.items);
		                    }
		                };

		                that.first("change", handler);

		                that.sync();

		            } else {
		                that._updateTotalForAction(action, e ? e.items : []);

		                that._process(that._data, e);
		            }
		        },

		        _calculateAggregates: function (data, options) {
		            options = options || {};

		            var query = new Query(data),
		                aggregates = options.aggregate,
		                filter = options.filter;

		            if (filter) {
		                query = query.filter(filter);
		            }

		            return query.aggregate(aggregates);
		        },

		        _process: function (data, e) {
		            var that = this,
		                options = {},
		                result;

		            if (that.options.serverPaging !== true) {
		                options.skip = that._skip;
		                options.take = that._take || that._pageSize;

		                if(options.skip === undefined && that._page !== undefined && that._pageSize !== undefined) {
		                    options.skip = (that._page - 1) * that._pageSize;
		                }
		            }

		            if (that.options.serverSorting !== true) {
		                options.sort = that._sort;
		            }

		            if (that.options.serverFiltering !== true) {
		                options.filter = that._filter;
		            }

		            if (that.options.serverGrouping !== true) {
		                options.group = that._group;
		            }

		            if (that.options.serverAggregates !== true) {
		                options.aggregate = that._aggregate;
		                that._aggregateResult = that._calculateAggregates(data, options);
		            }

		            result = that._queryProcess(data, options);

		            that.view(result.data);

		            if (result.total !== undefined && !that.options.serverFiltering) {
		                that._total = result.total;
		            }

		            e = e || {};

		            e.items = e.items || that._view;

		            that.trigger(CHANGE, e);
		        },

		        _queryProcess: function(data, options) {
		            return Query.process(data, options);
		        },

		        _mergeState: function(options) {
		            var that = this;

		            if (options !== undefined) {
		                that._pageSize = options.pageSize;
		                that._page = options.page;
		                that._sort = options.sort;
		                that._filter = options.filter;
		                that._group = options.group;
		                that._aggregate = options.aggregate;
		                that._skip = that._currentRangeStart = options.skip;
		                that._take = options.take;

		                if(that._skip === undefined) {
		                    that._skip = that._currentRangeStart = that.skip();
		                    options.skip = that.skip();
		                }

		                if(that._take === undefined && that._pageSize !== undefined) {
		                    that._take = that._pageSize;
		                    options.take = that._take;
		                }

		                if (options.sort) {
		                    that._sort = options.sort = normalizeSort(options.sort);
		                }

		                if (options.filter) {
		                    that._filter = options.filter = normalizeFilter(options.filter);
		                }

		                if (options.group) {
		                    that._group = options.group = normalizeGroup(options.group);
		                }
		                if (options.aggregate) {
		                    that._aggregate = options.aggregate = normalizeAggregate(options.aggregate);
		                }
		            }
		            return options;
		        },

		        query: function(options) {
		            var result;
		            var remote = this.options.serverSorting || this.options.serverPaging || this.options.serverFiltering || this.options.serverGrouping || this.options.serverAggregates;

		            if (remote || ((this._data === undefined || this._data.length === 0) && !this._destroyed.length)) {
		                return this.read(this._mergeState(options));
		            }

		            var isPrevented = this.trigger(REQUESTSTART, { type: "read" });
		            if (!isPrevented) {
		                this.trigger(PROGRESS);

		                result = this._queryProcess(this._data, this._mergeState(options));

		                if (!this.options.serverFiltering) {
		                    if (result.total !== undefined) {
		                        this._total = result.total;
		                    } else {
		                        this._total = this._data.length;
		                    }
		                }

		                this._aggregateResult = this._calculateAggregates(this._data, options);
		                this.view(result.data);
		                this.trigger(REQUESTEND, { type: "read" });
		                this.trigger(CHANGE, { items: result.data });
		            }

		            return $.Deferred().resolve(isPrevented).promise();
		        },

		        fetch: function(callback) {
		            var that = this;
		            var fn = function(isPrevented) {
		                if (isPrevented !== true && isFunction(callback)) {
		                    callback.call(that);
		                }
		            };

		            return this._query().then(fn);
		        },

		        _query: function(options) {
		            var that = this;

		            return that.query(extend({}, {
		                page: that.page(),
		                pageSize: that.pageSize(),
		                sort: that.sort(),
		                filter: that.filter(),
		                group: that.group(),
		                aggregate: that.aggregate()
		            }, options));
		        },

		        next: function(options) {
		            var that = this,
		                page = that.page(),
		                total = that.total();

		            options = options || {};

		            if (!page || (total && page + 1 > that.totalPages())) {
		                return;
		            }

		            that._skip = that._currentRangeStart = page * that.take();

		            page += 1;
		            options.page = page;

		            that._query(options);

		            return page;
		        },

		        prev: function(options) {
		            var that = this,
		                page = that.page();

		            options = options || {};

		            if (!page || page === 1) {
		                return;
		            }

		            that._skip = that._currentRangeStart = that._skip - that.take();

		            page -= 1;
		            options.page = page;

		            that._query(options);

		            return page;
		        },

		        page: function(val) {
		            var that = this,
		            skip;

		            if(val !== undefined) {
		                val = math.max(math.min(math.max(val, 1), that.totalPages()), 1);
		                that._query({ page: val });
		                return;
		            }
		            skip = that.skip();

		            return skip !== undefined ? math.round((skip || 0) / (that.take() || 1)) + 1 : undefined;
		        },

		        pageSize: function(val) {
		            var that = this;

		            if(val !== undefined) {
		                that._query({ pageSize: val, page: 1 });
		                return;
		            }

		            return that.take();
		        },

		        sort: function(val) {
		            var that = this;

		            if(val !== undefined) {
		                that._query({ sort: val });
		                return;
		            }

		            return that._sort;
		        },

		        filter: function(val) {
		            var that = this;

		            if (val === undefined) {
		                return that._filter;
		            }

		            that.trigger("reset");
		            that._query({ filter: val, page: 1 });
		        },

		        group: function(val) {
		            var that = this;

		            if(val !== undefined) {
		                that._query({ group: val });
		                return;
		            }

		            return that._group;
		        },

		        total: function() {
		            return parseInt(this._total || 0, 10);
		        },

		        aggregate: function(val) {
		            var that = this;

		            if(val !== undefined) {
		                that._query({ aggregate: val });
		                return;
		            }

		            return that._aggregate;
		        },

		        aggregates: function() {
		            var result = this._aggregateResult;

		            if (isEmptyObject(result)) {
		                result = this._emptyAggregates(this.aggregate());
		            }

		            return result;
		        },

		        _emptyAggregates: function(aggregates) {
		            var result = {};

		            if (!isEmptyObject(aggregates)) {
		                var aggregate = {};

		                if (!isArray(aggregates)){
		                    aggregates = [aggregates];
		                }

		                for (var idx = 0; idx <aggregates.length; idx++) {
		                    aggregate[aggregates[idx].aggregate] = 0;
		                    result[aggregates[idx].field] = aggregate;
		                }
		            }

		            return result;
		        },

		        _wrapInEmptyGroup: function(model) {
		            var groups = this.group(),
		                parent,
		                group,
		                idx,
		                length;

		            for (idx = groups.length-1, length = 0; idx >= length; idx--) {
		                group = groups[idx];
		                parent = {
		                    value: model.get(group.field),
		                    field: group.field,
		                    items: parent ? [parent] : [model],
		                    hasSubgroups: !!parent,
		                    aggregates: this._emptyAggregates(group.aggregates)
		                };
		            }

		            return parent;
		        },

		        totalPages: function() {
		            var that = this,
		            pageSize = that.pageSize() || that.total();

		            return math.ceil((that.total() || 0) / pageSize);
		        },

		        inRange: function(skip, take) {
		            var that = this,
		                end = math.min(skip + take, that.total());

		            if (!that.options.serverPaging && that._data.length > 0) {
		                return true;
		            }

		            return that._findRange(skip, end).length > 0;
		        },

		        lastRange: function() {
		            var ranges = this._ranges;
		            return ranges[ranges.length - 1] || { start: 0, end: 0, data: [] };
		        },

		        firstItemUid: function() {
		            var ranges = this._ranges;
		            return ranges.length && ranges[0].data.length && ranges[0].data[0].uid;
		        },

		        enableRequestsInProgress: function() {
		            this._skipRequestsInProgress = false;
		        },

		        _timeStamp: function() {
		            return new Date().getTime();
		        },

		        range: function(skip, take) {
		            this._currentRequestTimeStamp = this._timeStamp();
		            this._skipRequestsInProgress = true;

		            skip = math.min(skip || 0, this.total());

		            var that = this,
		                pageSkip = math.max(math.floor(skip / take), 0) * take,
		                size = math.min(pageSkip + take, that.total()),
		                data;

		            data = that._findRange(skip, math.min(skip + take, that.total()));

		            if (data.length) {

		                that._pending = undefined;

		                that._skip = skip > that.skip() ? math.min(size, (that.totalPages() - 1) * that.take()) : pageSkip;

		                that._currentRangeStart = skip;

		                that._take = take;

		                var paging = that.options.serverPaging;
		                var sorting = that.options.serverSorting;
		                var filtering = that.options.serverFiltering;
		                var aggregates = that.options.serverAggregates;
		                try {
		                    that.options.serverPaging = true;
		                    if (!that._isServerGrouped() && !(that.group() && that.group().length)) {
		                        that.options.serverSorting = true;
		                    }
		                    that.options.serverFiltering = true;
		                    that.options.serverPaging = true;
		                    that.options.serverAggregates = true;

		                    if (paging) {
		                        that._detachObservableParents();
		                        that._data = data = that._observe(data);
		                    }
		                    that._process(data);
		                } finally {
		                    that.options.serverPaging = paging;
		                    that.options.serverSorting = sorting;
		                    that.options.serverFiltering = filtering;
		                    that.options.serverAggregates = aggregates;
		                }

		                return;
		            }

		            if (take !== undefined) {
		                if (!that._rangeExists(pageSkip, size)) {
		                    that.prefetch(pageSkip, take, function() {
		                        if (skip > pageSkip && size < that.total() && !that._rangeExists(size, math.min(size + take, that.total()))) {
		                            that.prefetch(size, take, function() {
		                                that.range(skip, take);
		                            });
		                        } else {
		                            that.range(skip, take);
		                        }
		                    });
		                } else if (pageSkip < skip) {
		                    that.prefetch(size, take, function() {
		                        that.range(skip, take);
		                    });
		                }
		            }
		        },

		        _findRange: function(start, end) {
		            var that = this,
		                ranges = that._ranges,
		                range,
		                data = [],
		                skipIdx,
		                takeIdx,
		                startIndex,
		                endIndex,
		                rangeData,
		                rangeEnd,
		                processed,
		                options = that.options,
		                remote = options.serverSorting || options.serverPaging || options.serverFiltering || options.serverGrouping || options.serverAggregates,
		                flatData,
		                count,
		                length;

		            for (skipIdx = 0, length = ranges.length; skipIdx < length; skipIdx++) {
		                range = ranges[skipIdx];
		                if (start >= range.start && start <= range.end) {
		                    count = 0;

		                    for (takeIdx = skipIdx; takeIdx < length; takeIdx++) {
		                        range = ranges[takeIdx];
		                        flatData = that._flatData(range.data, true);

		                        if (flatData.length && start + count >= range.start) {
		                            rangeData = range.data;
		                            rangeEnd = range.end;

		                            if (!remote) {
		                                var sort = normalizeGroup(that.group() || []).concat(normalizeSort(that.sort() || []));
		                                processed = that._queryProcess(range.data, { sort: sort, filter: that.filter() });
		                                flatData = rangeData = processed.data;

		                                if (processed.total !== undefined) {
		                                    rangeEnd = processed.total;
		                                }
		                            }

		                            startIndex = 0;
		                            if (start + count > range.start) {
		                                startIndex = (start + count) - range.start;
		                            }
		                            endIndex = flatData.length;
		                            if (rangeEnd > end) {
		                                endIndex = endIndex - (rangeEnd - end);
		                            }
		                            count += endIndex - startIndex;
		                            data = that._mergeGroups(data, rangeData, startIndex, endIndex);

		                            if (end <= range.end && count == end - start) {
		                                return data;
		                            }
		                        }
		                    }
		                    break;
		                }
		            }
		            return [];
		        },

		        _mergeGroups: function(data, range, skip, take) {
		            if (this._isServerGrouped()) {
		                var temp = range.toJSON(),
		                    prevGroup;

		                if (data.length) {
		                    prevGroup = data[data.length - 1];
		                }

		                mergeGroups(prevGroup, temp, skip, take);

		                return data.concat(temp);
		            }
		            return data.concat(range.slice(skip, take));
		        },

		        skip: function() {
		            var that = this;

		            if (that._skip === undefined) {
		                return (that._page !== undefined ? (that._page  - 1) * (that.take() || 1) : undefined);
		            }
		            return that._skip;
		        },

		        currentRangeStart: function() {
		            return this._currentRangeStart || 0;
		        },

		        take: function() {
		            return this._take || this._pageSize;
		        },

		        _prefetchSuccessHandler: function (skip, size, callback, force) {
		            var that = this;
		            var timestamp = that._timeStamp();

		            return function(data) {
		                var found = false,
		                    range = { start: skip, end: size, data: [], timestamp: that._timeStamp() },
		                    idx,
		                    length,
		                    temp;

		                that._dequeueRequest();

		                that.trigger(REQUESTEND, { response: data, type: "read" });

		                data = that.reader.parse(data);

		                temp = that._readData(data);

		                if (temp.length) {

		                    for (idx = 0, length = that._ranges.length; idx < length; idx++) {
		                        if (that._ranges[idx].start === skip) {
		                            found = true;
		                            range = that._ranges[idx];
		                            break;
		                        }
		                    }
		                    if (!found) {
		                        that._ranges.push(range);
		                    }
		                }

		                range.data = that._observe(temp);
		                range.end = range.start + that._flatData(range.data, true).length;
		                that._ranges.sort( function(x, y) { return x.start - y.start; } );
		                that._total = that.reader.total(data);

		                if (force || (timestamp >= that._currentRequestTimeStamp || !that._skipRequestsInProgress)) {
		                    if (callback && temp.length) {
		                        callback();
		                    } else {
		                        that.trigger(CHANGE, {});
		                    }
		                }
		            };
		        },

		        prefetch: function(skip, take, callback) {
		            var that = this,
		                size = math.min(skip + take, that.total()),
		                options = {
		                    take: take,
		                    skip: skip,
		                    page: skip / take + 1,
		                    pageSize: take,
		                    sort: that._sort,
		                    filter: that._filter,
		                    group: that._group,
		                    aggregate: that._aggregate
		                };

		            if (!that._rangeExists(skip, size)) {
		                clearTimeout(that._timeout);

		                that._timeout = setTimeout(function() {
		                    that._queueRequest(options, function() {
		                        if (!that.trigger(REQUESTSTART, { type: "read" })) {
		                            that.transport.read({
		                                data: that._params(options),
		                                success: that._prefetchSuccessHandler(skip, size, callback),
		                                error: function() {
		                                    var args = slice.call(arguments);
		                                    that.error.apply(that, args);
		                                }
		                            });
		                        } else {
		                            that._dequeueRequest();
		                        }
		                    });
		                }, 100);
		            } else if (callback) {
		                callback();
		            }
		        },

		        _multiplePrefetch: function(skip, take, callback) {
		            var that = this,
		                size = math.min(skip + take, that.total()),
		                options = {
		                    take: take,
		                    skip: skip,
		                    page: skip / take + 1,
		                    pageSize: take,
		                    sort: that._sort,
		                    filter: that._filter,
		                    group: that._group,
		                    aggregate: that._aggregate
		                };

		            if (!that._rangeExists(skip, size)) {
		                if (!that.trigger(REQUESTSTART, { type: "read" })) {
		                    that.transport.read({
		                        data: that._params(options),
		                        success: that._prefetchSuccessHandler(skip, size, callback, true)
		                    });
		                }
		            } else if (callback) {
		                callback();
		            }
		        },

		        _rangeExists: function(start, end) {
		            var that = this,
		                ranges = that._ranges,
		                idx,
		                length;

		            for (idx = 0, length = ranges.length; idx < length; idx++) {
		                if (ranges[idx].start <= start && ranges[idx].end >= end) {
		                    return true;
		                }
		            }
		            return false;
		        },

		        _removeModelFromRanges: function(model) {
		            var result,
		                found,
		                range;

		            for (var idx = 0, length = this._ranges.length; idx < length; idx++) {
		                range = this._ranges[idx];

		                this._eachItem(range.data, function(items) {
		                    result = removeModel(items, model);
		                    if (result) {
		                        found = true;
		                    }
		                });

		                if (found) {
		                    break;
		                }
		            }
		        },

		        _updateRangesLength: function() {
		            var startOffset = 0,
		                range,
		                rangeLength;

		            for (var idx = 0, length = this._ranges.length; idx < length; idx++) {
		                range = this._ranges[idx];
		                range.start = range.start - startOffset;

		                rangeLength = this._flatData(range.data, true).length;
		                startOffset = range.end - rangeLength;
		                range.end = range.start + rangeLength;
		            }
		        }
		    });

		    var Transport = {};

		    Transport.create = function(options, data, dataSource) {
		        var transport,
		            transportOptions = options.transport ? $.extend({}, options.transport) : null;

		        if (transportOptions) {
		            transportOptions.read = typeof transportOptions.read === STRING ? { url: transportOptions.read } : transportOptions.read;

		            if (options.type === "jsdo") {
		                transportOptions.dataSource = dataSource;
		            }

		            if (options.type) {
		                kendo.data.transports = kendo.data.transports || {};
		                kendo.data.schemas = kendo.data.schemas || {};

		                if (!kendo.data.transports[options.type]) {
		                    kendo.logToConsole("Unknown DataSource transport type '" + options.type + "'.\nVerify that registration scripts for this type are included after Kendo UI on the page.", "warn");
		                } else if (!isPlainObject(kendo.data.transports[options.type])) {
		                    transport = new kendo.data.transports[options.type](extend(transportOptions, { data: data }));
		                } else {
		                    transportOptions = extend(true, {}, kendo.data.transports[options.type], transportOptions);
		                }

		                options.schema = extend(true, {}, kendo.data.schemas[options.type], options.schema);
		            }

		            if (!transport) {
		                transport = isFunction(transportOptions.read) ? transportOptions : new RemoteTransport(transportOptions);
		            }
		        } else {
		            transport = new LocalTransport({ data: options.data || [] });
		        }
		        return transport;
		    };

		    DataSource.create = function(options) {
		        if (isArray(options) || options instanceof ObservableArray) {
		           options = { data: options };
		        }

		        var dataSource = options || {},
		            data = dataSource.data,
		            fields = dataSource.fields,
		            table = dataSource.table,
		            select = dataSource.select,
		            idx,
		            length,
		            model = {},
		            field;

		        if (!data && fields && !dataSource.transport) {
		            if (table) {
		                data = inferTable(table, fields);
		            } else if (select) {
		                data = inferSelect(select, fields);

		                if (dataSource.group === undefined && data[0] && data[0].optgroup !== undefined) {
		                    dataSource.group = "optgroup";
		                }
		            }
		        }

		        if (kendo.data.Model && fields && (!dataSource.schema || !dataSource.schema.model)) {
		            for (idx = 0, length = fields.length; idx < length; idx++) {
		                field = fields[idx];
		                if (field.type) {
		                    model[field.field] = field;
		                }
		            }

		            if (!isEmptyObject(model)) {
		                dataSource.schema = extend(true, dataSource.schema, { model:  { fields: model } });
		            }
		        }

		        dataSource.data = data;

		        select = null;
		        dataSource.select = null;
		        table = null;
		        dataSource.table = null;

		        return dataSource instanceof DataSource ? dataSource : new DataSource(dataSource);
		    };

		    function inferSelect(select, fields) {
		        select = $(select)[0];
		        var options = select.options;
		        var firstField = fields[0];
		        var secondField = fields[1];

		        var data = [];
		        var idx, length;
		        var optgroup;
		        var option;
		        var record;
		        var value;

		        for (idx = 0, length = options.length; idx < length; idx++) {
		            record = {};
		            option = options[idx];
		            optgroup = option.parentNode;

		            if (optgroup === select) {
		                optgroup = null;
		            }

		            if (option.disabled || (optgroup && optgroup.disabled)) {
		                continue;
		            }

		            if (optgroup) {
		                record.optgroup = optgroup.label;
		            }

		            record[firstField.field] = option.text;

		            value = option.attributes.value;

		            if (value && value.specified) {
		                value = option.value;
		            } else {
		                value = option.text;
		            }

		            record[secondField.field] = value;

		            data.push(record);
		        }

		        return data;
		    }

		    function inferTable(table, fields) {
		        var tbody = $(table)[0].tBodies[0],
		        rows = tbody ? tbody.rows : [],
		        idx,
		        length,
		        fieldIndex,
		        fieldCount = fields.length,
		        data = [],
		        cells,
		        record,
		        cell,
		        empty;

		        for (idx = 0, length = rows.length; idx < length; idx++) {
		            record = {};
		            empty = true;
		            cells = rows[idx].cells;

		            for (fieldIndex = 0; fieldIndex < fieldCount; fieldIndex++) {
		                cell = cells[fieldIndex];
		                if(cell.nodeName.toLowerCase() !== "th") {
		                    empty = false;
		                    record[fields[fieldIndex].field] = cell.innerHTML;
		                }
		            }
		            if(!empty) {
		                data.push(record);
		            }
		        }

		        return data;
		    }

		    var Node = Model.define({
		        idField: "id",

		        init: function(value) {
		            var that = this,
		                hasChildren = that.hasChildren || value && value.hasChildren,
		                childrenField = "items",
		                childrenOptions = {};

		            kendo.data.Model.fn.init.call(that, value);

		            if (typeof that.children === STRING) {
		                childrenField = that.children;
		            }

		            childrenOptions = {
		                schema: {
		                    data: childrenField,
		                    model: {
		                        hasChildren: hasChildren,
		                        id: that.idField,
		                        fields: that.fields
		                    }
		                }
		            };

		            if (typeof that.children !== STRING) {
		                extend(childrenOptions, that.children);
		            }

		            childrenOptions.data = value;

		            if (!hasChildren) {
		                hasChildren = childrenOptions.schema.data;
		            }

		            if (typeof hasChildren === STRING) {
		                hasChildren = kendo.getter(hasChildren);
		            }

		            if (isFunction(hasChildren)) {
		                that.hasChildren = !!hasChildren.call(that, that);
		            }

		            that._childrenOptions = childrenOptions;

		            if (that.hasChildren) {
		                that._initChildren();
		            }

		            that._loaded = !!(value && value._loaded);
		        },

		        _initChildren: function() {
		            var that = this;
		            var children, transport, parameterMap;

		            if (!(that.children instanceof HierarchicalDataSource)) {
		                children = that.children = new HierarchicalDataSource(that._childrenOptions);

		                transport = children.transport;
		                parameterMap = transport.parameterMap;

		                transport.parameterMap = function(data, type) {
		                    data[that.idField || "id"] = that.id;

		                    if (parameterMap) {
		                        data = parameterMap(data, type);
		                    }

		                    return data;
		                };

		                children.parent = function(){
		                    return that;
		                };

		                children.bind(CHANGE, function(e){
		                    e.node = e.node || that;
		                    that.trigger(CHANGE, e);
		                });

		                children.bind(ERROR, function(e){
		                    var collection = that.parent();

		                    if (collection) {
		                        e.node = e.node || that;
		                        collection.trigger(ERROR, e);
		                    }
		                });

		                that._updateChildrenField();
		            }
		        },

		        append: function(model) {
		            this._initChildren();
		            this.loaded(true);
		            this.children.add(model);
		        },

		        hasChildren: false,

		        level: function() {
		            var parentNode = this.parentNode(),
		                level = 0;

		            while (parentNode && parentNode.parentNode) {
		                level++;
		                parentNode = parentNode.parentNode ? parentNode.parentNode() : null;
		            }

		            return level;
		        },

		        _updateChildrenField: function() {
		            var fieldName = this._childrenOptions.schema.data;

		            this[fieldName || "items"] = this.children.data();
		        },

		        _childrenLoaded: function() {
		            this._loaded = true;

		            this._updateChildrenField();
		        },

		        load: function() {
		            var options = {};
		            var method = "_query";
		            var children, promise;

		            if (this.hasChildren) {
		                this._initChildren();

		                children = this.children;

		                options[this.idField || "id"] = this.id;

		                if (!this._loaded) {
		                    children._data = undefined;
		                    method = "read";
		                }

		                children.one(CHANGE, proxy(this._childrenLoaded, this));

		                promise = children[method](options);
		            } else {
		                this.loaded(true);
		            }

		            return promise || $.Deferred().resolve().promise();
		        },

		        parentNode: function() {
		            var array = this.parent();

		            return array.parent();
		        },

		        loaded: function(value) {
		            if (value !== undefined) {
		                this._loaded = value;
		            } else {
		                return this._loaded;
		            }
		        },

		        shouldSerialize: function(field) {
		            return Model.fn.shouldSerialize.call(this, field) &&
		                    field !== "children" &&
		                    field !== "_loaded" &&
		                    field !== "hasChildren" &&
		                    field !== "_childrenOptions";
		        }
		    });

		    function dataMethod(name) {
		        return function() {
		            var data = this._data,
		                result = DataSource.fn[name].apply(this, slice.call(arguments));

		            if (this._data != data) {
		                this._attachBubbleHandlers();
		            }

		            return result;
		        };
		    }

		    var HierarchicalDataSource = DataSource.extend({
		        init: function(options) {
		            var node = Node.define({
		                children: options
		            });

		            DataSource.fn.init.call(this, extend(true, {}, { schema: { modelBase: node, model: node } }, options));

		            this._attachBubbleHandlers();
		        },

		        _attachBubbleHandlers: function() {
		            var that = this;

		            that._data.bind(ERROR, function(e) {
		                that.trigger(ERROR, e);
		            });
		        },

		        remove: function(node){
		            var parentNode = node.parentNode(),
		                dataSource = this,
		                result;

		            if (parentNode && parentNode._initChildren) {
		                dataSource = parentNode.children;
		            }

		            result = DataSource.fn.remove.call(dataSource, node);

		            if (parentNode && !dataSource.data().length) {
		                parentNode.hasChildren = false;
		            }

		            return result;
		        },

		        success: dataMethod("success"),

		        data: dataMethod("data"),

		        insert: function(index, model) {
		            var parentNode = this.parent();

		            if (parentNode && parentNode._initChildren) {
		                parentNode.hasChildren = true;
		                parentNode._initChildren();
		            }

		            return DataSource.fn.insert.call(this, index, model);
		        },

		        _find: function(method, value) {
		            var idx, length, node, children;
		            var data = this._data;

		            if (!data) {
		                return;
		            }

		            node = DataSource.fn[method].call(this, value);

		            if (node) {
		                return node;
		            }

		            data = this._flatData(this._data);

		            for (idx = 0, length = data.length; idx < length; idx++) {
		                children = data[idx].children;

		                if (!(children instanceof HierarchicalDataSource)) {
		                    continue;
		                }

		                node = children[method](value);

		                if (node) {
		                    return node;
		                }
		            }
		        },

		        get: function(id) {
		            return this._find("get", id);
		        },

		        getByUid: function(uid) {
		            return this._find("getByUid", uid);
		        }
		    });

		    function inferList(list, fields) {
		        var items = $(list).children(),
		            idx,
		            length,
		            data = [],
		            record,
		            textField = fields[0].field,
		            urlField = fields[1] && fields[1].field,
		            spriteCssClassField = fields[2] && fields[2].field,
		            imageUrlField = fields[3] && fields[3].field,
		            item,
		            id,
		            textChild,
		            className,
		            children;

		        function elements(collection, tagName) {
		            return collection.filter(tagName).add(collection.find(tagName));
		        }

		        for (idx = 0, length = items.length; idx < length; idx++) {
		            record = { _loaded: true };
		            item = items.eq(idx);

		            textChild = item[0].firstChild;
		            children = item.children();
		            list = children.filter("ul");
		            children = children.filter(":not(ul)");

		            id = item.attr("data-id");

		            if (id) {
		                record.id = id;
		            }

		            if (textChild) {
		                record[textField] = textChild.nodeType == 3 ? textChild.nodeValue : children.text();
		            }

		            if (urlField) {
		                record[urlField] = elements(children, "a").attr("href");
		            }

		            if (imageUrlField) {
		                record[imageUrlField] = elements(children, "img").attr("src");
		            }

		            if (spriteCssClassField) {
		                className = elements(children, ".k-sprite").prop("className");
		                record[spriteCssClassField] = className && $.trim(className.replace("k-sprite", ""));
		            }

		            if (list.length) {
		                record.items = inferList(list.eq(0), fields);
		            }

		            if (item.attr("data-hasChildren") == "true") {
		                record.hasChildren = true;
		            }

		            data.push(record);
		        }

		        return data;
		    }

		    HierarchicalDataSource.create = function(options) {
		        options = options && options.push ? { data: options } : options;

		        var dataSource = options || {},
		            data = dataSource.data,
		            fields = dataSource.fields,
		            list = dataSource.list;

		        if (data && data._dataSource) {
		            return data._dataSource;
		        }

		        if (!data && fields && !dataSource.transport) {
		            if (list) {
		                data = inferList(list, fields);
		            }
		        }

		        dataSource.data = data;

		        return dataSource instanceof HierarchicalDataSource ? dataSource : new HierarchicalDataSource(dataSource);
		    };

		    var Buffer = kendo.Observable.extend({
		        init: function(dataSource, viewSize, disablePrefetch) {
		            kendo.Observable.fn.init.call(this);

		            this._prefetching = false;
		            this.dataSource = dataSource;
		            this.prefetch = !disablePrefetch;

		            var buffer = this;

		            dataSource.bind("change", function() {
		                buffer._change();
		            });

		            dataSource.bind("reset", function() {
		                buffer._reset();
		            });

		            this._syncWithDataSource();

		            this.setViewSize(viewSize);
		        },

		        setViewSize: function(viewSize) {
		            this.viewSize = viewSize;
		            this._recalculate();
		        },

		        at: function(index)  {
		            var pageSize = this.pageSize,
		                itemPresent = true;

		            if (index >= this.total()) {
		                this.trigger("endreached", {index: index });
		                return null;
		            }

		            if (!this.useRanges) {
		               return this.dataSource.view()[index];
		            }
		            if (this.useRanges) {
		                // out of range request
		                if (index < this.dataOffset || index >= this.skip + pageSize) {
		                    itemPresent = this.range(Math.floor(index / pageSize) * pageSize);
		                }

		                // prefetch
		                if (index === this.prefetchThreshold) {
		                    this._prefetch();
		                }

		                // mid-range jump - prefetchThreshold and nextPageThreshold may be equal, do not change to else if
		                if (index === this.midPageThreshold) {
		                    this.range(this.nextMidRange, true);
		                }
		                // next range jump
		                else if (index === this.nextPageThreshold) {
		                    this.range(this.nextFullRange);
		                }
		                // pull-back
		                else if (index === this.pullBackThreshold) {
		                    if (this.offset === this.skip) { // from full range to mid range
		                        this.range(this.previousMidRange);
		                    } else { // from mid range to full range
		                        this.range(this.previousFullRange);
		                    }
		                }

		                if (itemPresent) {
		                    return this.dataSource.at(index - this.dataOffset);
		                } else {
		                    this.trigger("endreached", { index: index });
		                    return null;
		                }
		            }
		        },

		        indexOf: function(item) {
		            return this.dataSource.data().indexOf(item) + this.dataOffset;
		        },

		        total: function() {
		            return parseInt(this.dataSource.total(), 10);
		        },

		        next: function() {
		            var buffer = this,
		                pageSize = buffer.pageSize,
		                offset = buffer.skip - buffer.viewSize + pageSize,
		                pageSkip = math.max(math.floor(offset / pageSize), 0) * pageSize;

		            this.offset = offset;
		            this.dataSource.prefetch(pageSkip, pageSize, function() {
		                buffer._goToRange(offset, true);
		            });
		        },

		        range: function(offset, nextRange) {
		            if (this.offset === offset) {
		                return true;
		            }

		            var buffer = this,
		                pageSize = this.pageSize,
		                pageSkip = math.max(math.floor(offset / pageSize), 0) * pageSize,
		                dataSource = this.dataSource;

		            if (nextRange) {
		                pageSkip += pageSize;
		            }

		            if (dataSource.inRange(offset, pageSize)) {
		                this.offset = offset;
		                this._recalculate();
		                this._goToRange(offset);
		                return true;
		            } else if (this.prefetch) {
		                dataSource.prefetch(pageSkip, pageSize, function() {
		                    buffer.offset = offset;
		                    buffer._recalculate();
		                    buffer._goToRange(offset, true);
		                });
		                return false;
		            }

		            return true;
		        },

		        syncDataSource: function() {
		            var offset = this.offset;
		            this.offset = null;
		            this.range(offset);
		        },

		        destroy: function() {
		            this.unbind();
		        },

		        _prefetch: function() {
		            var buffer = this,
		                pageSize = this.pageSize,
		                prefetchOffset = this.skip + pageSize,
		                dataSource = this.dataSource;

		            if (!dataSource.inRange(prefetchOffset, pageSize) && !this._prefetching && this.prefetch) {
		                this._prefetching = true;
		                this.trigger("prefetching", { skip: prefetchOffset, take: pageSize });

		                dataSource.prefetch(prefetchOffset, pageSize, function() {
		                    buffer._prefetching = false;
		                    buffer.trigger("prefetched", { skip: prefetchOffset, take: pageSize });
		                });
		            }
		        },

		        _goToRange: function(offset, expanding) {
		            if (this.offset !== offset) {
		                return;
		            }

		            this.dataOffset = offset;
		            this._expanding = expanding;
		            this.dataSource.range(offset, this.pageSize);
		            this.dataSource.enableRequestsInProgress();
		        },

		        _reset: function() {
		            this._syncPending = true;
		        },

		        _change: function() {
		            var dataSource = this.dataSource;

		            this.length = this.useRanges ? dataSource.lastRange().end : dataSource.view().length;

		            if (this._syncPending) {
		                this._syncWithDataSource();
		                this._recalculate();
		                this._syncPending = false;
		                this.trigger("reset", { offset: this.offset });
		            }

		            this.trigger("resize");

		            if (this._expanding) {
		                this.trigger("expand");
		            }

		            delete this._expanding;
		        },

		        _syncWithDataSource: function() {
		            var dataSource = this.dataSource;

		            this._firstItemUid = dataSource.firstItemUid();
		            this.dataOffset = this.offset = dataSource.skip() || 0;
		            this.pageSize = dataSource.pageSize();
		            this.useRanges = dataSource.options.serverPaging;
		        },

		        _recalculate: function() {
		            var pageSize = this.pageSize,
		                offset = this.offset,
		                viewSize = this.viewSize,
		                skip = Math.ceil(offset / pageSize) * pageSize;

		            this.skip = skip;
		            this.midPageThreshold = skip + pageSize - 1;
		            this.nextPageThreshold = skip + viewSize - 1;
		            this.prefetchThreshold = skip + Math.floor(pageSize / 3 * 2);
		            this.pullBackThreshold = this.offset - 1;

		            this.nextMidRange = skip + pageSize - viewSize;
		            this.nextFullRange = skip;
		            this.previousMidRange = offset - viewSize;
		            this.previousFullRange = skip - pageSize;
		        }
		    });

		    var BatchBuffer = kendo.Observable.extend({
		        init: function(dataSource, batchSize) {
		            var batchBuffer = this;

		            kendo.Observable.fn.init.call(batchBuffer);

		            this.dataSource = dataSource;
		            this.batchSize = batchSize;
		            this._total = 0;

		            this.buffer = new Buffer(dataSource, batchSize * 3);

		            this.buffer.bind({
		                "endreached": function (e) {
		                    batchBuffer.trigger("endreached", { index: e.index });
		                },
		                "prefetching": function (e) {
		                    batchBuffer.trigger("prefetching", { skip: e.skip, take: e.take });
		                },
		                "prefetched": function (e) {
		                    batchBuffer.trigger("prefetched", { skip: e.skip, take: e.take });
		                },
		                "reset": function () {
		                    batchBuffer._total = 0;
		                    batchBuffer.trigger("reset");
		                },
		                "resize": function () {
		                    batchBuffer._total = Math.ceil(this.length / batchBuffer.batchSize);
		                    batchBuffer.trigger("resize", { total: batchBuffer.total(), offset: this.offset });
		                }
		            });
		        },

		        syncDataSource: function() {
		            this.buffer.syncDataSource();
		        },

		        at: function(index) {
		            var buffer = this.buffer,
		                skip = index * this.batchSize,
		                take = this.batchSize,
		                view = [],
		                item;

		            if (buffer.offset > skip) {
		                buffer.at(buffer.offset - 1);
		            }

		            for (var i = 0; i < take; i++) {
		                item = buffer.at(skip + i);

		                if (item === null) {
		                    break;
		                }

		                view.push(item);
		            }

		            return view;
		        },

		        total: function() {
		            return this._total;
		        },

		        destroy: function() {
		            this.buffer.destroy();
		            this.unbind();
		        }
		    });

		    extend(true, kendo.data, {
		        readers: {
		            json: DataReader
		        },
		        Query: Query,
		        DataSource: DataSource,
		        HierarchicalDataSource: HierarchicalDataSource,
		        Node: Node,
		        ObservableObject: ObservableObject,
		        ObservableArray: ObservableArray,
		        LazyObservableArray: LazyObservableArray,
		        LocalTransport: LocalTransport,
		        RemoteTransport: RemoteTransport,
		        Cache: Cache,
		        DataReader: DataReader,
		        Model: Model,
		        Buffer: Buffer,
		        BatchBuffer: BatchBuffer
		    });
		})(window.kendo.jQuery);

		return window.kendo;

		}, __webpack_require__(422));


	/***/ },

	/***/ 441:
	/***/ function(module, exports) {

		module.exports = __webpack_require__(7);

	/***/ },

	/***/ 442:
	/***/ function(module, exports) {

		module.exports = __webpack_require__(8);

	/***/ }

	/******/ });

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ({

	/***/ 0:
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(439);


	/***/ },

	/***/ 420:
	/***/ function(module, exports) {

		module.exports = __webpack_require__(2);

	/***/ },

	/***/ 422:
	/***/ function(module, exports) {

		module.exports = function() { throw new Error("define cannot be used indirect"); };


	/***/ },

	/***/ 439:
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(jQuery) {(function(f, define){
		    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(420)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		})(function(){

		var __meta__ = { // jshint ignore:line
		    id: "core",
		    name: "Core",
		    category: "framework",
		    description: "The core of the Kendo framework."
		};

		/*jshint eqnull: true, loopfunc: true, evil: true, boss: true, freeze: false*/
		(function($, window, undefined) {
		    var kendo = window.kendo = window.kendo || { cultures: {} },
		        extend = $.extend,
		        each = $.each,
		        isArray = $.isArray,
		        proxy = $.proxy,
		        noop = $.noop,
		        math = Math,
		        Template,
		        JSON = window.JSON || {},
		        support = {},
		        percentRegExp = /%/,
		        formatRegExp = /\{(\d+)(:[^\}]+)?\}/g,
		        boxShadowRegExp = /(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+)?/i,
		        numberRegExp = /^(\+|-?)\d+(\.?)\d*$/,
		        FUNCTION = "function",
		        STRING = "string",
		        NUMBER = "number",
		        OBJECT = "object",
		        NULL = "null",
		        BOOLEAN = "boolean",
		        UNDEFINED = "undefined",
		        getterCache = {},
		        setterCache = {},
		        slice = [].slice;

		    kendo.version = "$KENDO_VERSION".replace(/^\s+|\s+$/g, '');

		    function Class() {}

		    Class.extend = function(proto) {
		        var base = function() {},
		            member,
		            that = this,
		            subclass = proto && proto.init ? proto.init : function () {
		                that.apply(this, arguments);
		            },
		            fn;

		        base.prototype = that.prototype;
		        fn = subclass.fn = subclass.prototype = new base();

		        for (member in proto) {
		            if (proto[member] != null && proto[member].constructor === Object) {
		                // Merge object members
		                fn[member] = extend(true, {}, base.prototype[member], proto[member]);
		            } else {
		                fn[member] = proto[member];
		            }
		        }

		        fn.constructor = subclass;
		        subclass.extend = that.extend;

		        return subclass;
		    };

		    Class.prototype._initOptions = function(options) {
		        this.options = deepExtend({}, this.options, options);
		    };

		    var isFunction = kendo.isFunction = function(fn) {
		        return typeof fn === "function";
		    };

		    var preventDefault = function() {
		        this._defaultPrevented = true;
		    };

		    var isDefaultPrevented = function() {
		        return this._defaultPrevented === true;
		    };

		    var Observable = Class.extend({
		        init: function() {
		            this._events = {};
		        },

		        bind: function(eventName, handlers, one) {
		            var that = this,
		                idx,
		                eventNames = typeof eventName === STRING ? [eventName] : eventName,
		                length,
		                original,
		                handler,
		                handlersIsFunction = typeof handlers === FUNCTION,
		                events;

		            if (handlers === undefined) {
		                for (idx in eventName) {
		                    that.bind(idx, eventName[idx]);
		                }
		                return that;
		            }

		            for (idx = 0, length = eventNames.length; idx < length; idx++) {
		                eventName = eventNames[idx];

		                handler = handlersIsFunction ? handlers : handlers[eventName];

		                if (handler) {
		                    if (one) {
		                        original = handler;
		                        handler = function() {
		                            that.unbind(eventName, handler);
		                            original.apply(that, arguments);
		                        };
		                        handler.original = original;
		                    }
		                    events = that._events[eventName] = that._events[eventName] || [];
		                    events.push(handler);
		                }
		            }

		            return that;
		        },

		        one: function(eventNames, handlers) {
		            return this.bind(eventNames, handlers, true);
		        },

		        first: function(eventName, handlers) {
		            var that = this,
		                idx,
		                eventNames = typeof eventName === STRING ? [eventName] : eventName,
		                length,
		                handler,
		                handlersIsFunction = typeof handlers === FUNCTION,
		                events;

		            for (idx = 0, length = eventNames.length; idx < length; idx++) {
		                eventName = eventNames[idx];

		                handler = handlersIsFunction ? handlers : handlers[eventName];

		                if (handler) {
		                    events = that._events[eventName] = that._events[eventName] || [];
		                    events.unshift(handler);
		                }
		            }

		            return that;
		        },

		        trigger: function(eventName, e) {
		            var that = this,
		                events = that._events[eventName],
		                idx,
		                length;

		            if (events) {
		                e = e || {};

		                e.sender = that;

		                e._defaultPrevented = false;

		                e.preventDefault = preventDefault;

		                e.isDefaultPrevented = isDefaultPrevented;

		                events = events.slice();

		                for (idx = 0, length = events.length; idx < length; idx++) {
		                    events[idx].call(that, e);
		                }

		                return e._defaultPrevented === true;
		            }

		            return false;
		        },

		        unbind: function(eventName, handler) {
		            var that = this,
		                events = that._events[eventName],
		                idx;

		            if (eventName === undefined) {
		                that._events = {};
		            } else if (events) {
		                if (handler) {
		                    for (idx = events.length - 1; idx >= 0; idx--) {
		                        if (events[idx] === handler || events[idx].original === handler) {
		                            events.splice(idx, 1);
		                        }
		                    }
		                } else {
		                    that._events[eventName] = [];
		                }
		            }

		            return that;
		        }
		    });


		     function compilePart(part, stringPart) {
		         if (stringPart) {
		             return "'" +
		                 part.split("'").join("\\'")
		                     .split('\\"').join('\\\\\\"')
		                     .replace(/\n/g, "\\n")
		                     .replace(/\r/g, "\\r")
		                     .replace(/\t/g, "\\t") + "'";
		         } else {
		             var first = part.charAt(0),
		                 rest = part.substring(1);

		             if (first === "=") {
		                 return "+(" + rest + ")+";
		             } else if (first === ":") {
		                 return "+$kendoHtmlEncode(" + rest + ")+";
		             } else {
		                 return ";" + part + ";$kendoOutput+=";
		             }
		         }
		     }

		    var argumentNameRegExp = /^\w+/,
		        encodeRegExp = /\$\{([^}]*)\}/g,
		        escapedCurlyRegExp = /\\\}/g,
		        curlyRegExp = /__CURLY__/g,
		        escapedSharpRegExp = /\\#/g,
		        sharpRegExp = /__SHARP__/g,
		        zeros = ["", "0", "00", "000", "0000"];

		    Template = {
		        paramName: "data", // name of the parameter of the generated template
		        useWithBlock: true, // whether to wrap the template in a with() block
		        render: function(template, data) {
		            var idx,
		                length,
		                html = "";

		            for (idx = 0, length = data.length; idx < length; idx++) {
		                html += template(data[idx]);
		            }

		            return html;
		        },
		        compile: function(template, options) {
		            var settings = extend({}, this, options),
		                paramName = settings.paramName,
		                argumentName = paramName.match(argumentNameRegExp)[0],
		                useWithBlock = settings.useWithBlock,
		                functionBody = "var $kendoOutput, $kendoHtmlEncode = kendo.htmlEncode;",
		                fn,
		                parts,
		                idx;

		            if (isFunction(template)) {
		                return template;
		            }

		            functionBody += useWithBlock ? "with(" + paramName + "){" : "";

		            functionBody += "$kendoOutput=";

		            parts = template
		                .replace(escapedCurlyRegExp, "__CURLY__")
		                .replace(encodeRegExp, "#=$kendoHtmlEncode($1)#")
		                .replace(curlyRegExp, "}")
		                .replace(escapedSharpRegExp, "__SHARP__")
		                .split("#");

		            for (idx = 0; idx < parts.length; idx ++) {
		                functionBody += compilePart(parts[idx], idx % 2 === 0);
		            }

		            functionBody += useWithBlock ? ";}" : ";";

		            functionBody += "return $kendoOutput;";

		            functionBody = functionBody.replace(sharpRegExp, "#");

		            try {
		                fn = new Function(argumentName, functionBody);
		                fn._slotCount = Math.floor(parts.length / 2);
		                return fn;
		            } catch(e) {
		                throw new Error(kendo.format("Invalid template:'{0}' Generated code:'{1}'", template, functionBody));
		            }
		        }
		    };

		function pad(number, digits, end) {
		    number = number + "";
		    digits = digits || 2;
		    end = digits - number.length;

		    if (end) {
		        return zeros[digits].substring(0, end) + number;
		    }

		    return number;
		}

		    //JSON stringify
		(function() {
		    var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		        gap,
		        indent,
		        meta = {
		            "\b": "\\b",
		            "\t": "\\t",
		            "\n": "\\n",
		            "\f": "\\f",
		            "\r": "\\r",
		            "\"" : '\\"',
		            "\\": "\\\\"
		        },
		        rep,
		        toString = {}.toString;


		    if (typeof Date.prototype.toJSON !== FUNCTION) {

		        Date.prototype.toJSON = function () {
		            var that = this;

		            return isFinite(that.valueOf()) ?
		                pad(that.getUTCFullYear(), 4) + "-" +
		                pad(that.getUTCMonth() + 1)   + "-" +
		                pad(that.getUTCDate())        + "T" +
		                pad(that.getUTCHours())       + ":" +
		                pad(that.getUTCMinutes())     + ":" +
		                pad(that.getUTCSeconds())     + "Z" : null;
		        };

		        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
		            return this.valueOf();
		        };
		    }

		    function quote(string) {
		        escapable.lastIndex = 0;
		        return escapable.test(string) ? "\"" + string.replace(escapable, function (a) {
		            var c = meta[a];
		            return typeof c === STRING ? c :
		                "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
		        }) + "\"" : "\"" + string + "\"";
		    }

		    function str(key, holder) {
		        var i,
		            k,
		            v,
		            length,
		            mind = gap,
		            partial,
		            value = holder[key],
		            type;

		        if (value && typeof value === OBJECT && typeof value.toJSON === FUNCTION) {
		            value = value.toJSON(key);
		        }

		        if (typeof rep === FUNCTION) {
		            value = rep.call(holder, key, value);
		        }

		        type = typeof value;
		        if (type === STRING) {
		            return quote(value);
		        } else if (type === NUMBER) {
		            return isFinite(value) ? String(value) : NULL;
		        } else if (type === BOOLEAN || type === NULL) {
		            return String(value);
		        } else if (type === OBJECT) {
		            if (!value) {
		                return NULL;
		            }
		            gap += indent;
		            partial = [];
		            if (toString.apply(value) === "[object Array]") {
		                length = value.length;
		                for (i = 0; i < length; i++) {
		                    partial[i] = str(i, value) || NULL;
		                }
		                v = partial.length === 0 ? "[]" : gap ?
		                    "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" :
		                    "[" + partial.join(",") + "]";
		                gap = mind;
		                return v;
		            }
		            if (rep && typeof rep === OBJECT) {
		                length = rep.length;
		                for (i = 0; i < length; i++) {
		                    if (typeof rep[i] === STRING) {
		                        k = rep[i];
		                        v = str(k, value);
		                        if (v) {
		                            partial.push(quote(k) + (gap ? ": " : ":") + v);
		                        }
		                    }
		                }
		            } else {
		                for (k in value) {
		                    if (Object.hasOwnProperty.call(value, k)) {
		                        v = str(k, value);
		                        if (v) {
		                            partial.push(quote(k) + (gap ? ": " : ":") + v);
		                        }
		                    }
		                }
		            }

		            v = partial.length === 0 ? "{}" : gap ?
		                "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" :
		                "{" + partial.join(",") + "}";
		            gap = mind;
		            return v;
		        }
		    }

		    if (typeof JSON.stringify !== FUNCTION) {
		        JSON.stringify = function (value, replacer, space) {
		            var i;
		            gap = "";
		            indent = "";

		            if (typeof space === NUMBER) {
		                for (i = 0; i < space; i += 1) {
		                    indent += " ";
		                }

		            } else if (typeof space === STRING) {
		                indent = space;
		            }

		            rep = replacer;
		            if (replacer && typeof replacer !== FUNCTION && (typeof replacer !== OBJECT || typeof replacer.length !== NUMBER)) {
		                throw new Error("JSON.stringify");
		            }

		            return str("", {"": value});
		        };
		    }
		})();

		// Date and Number formatting
		(function() {
		    var dateFormatRegExp = /dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|HH|H|hh|h|mm|m|fff|ff|f|tt|ss|s|zzz|zz|z|"[^"]*"|'[^']*'/g,
		        standardFormatRegExp =  /^(n|c|p|e)(\d*)$/i,
		        literalRegExp = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g,
		        commaRegExp = /\,/g,
		        EMPTY = "",
		        POINT = ".",
		        COMMA = ",",
		        SHARP = "#",
		        ZERO = "0",
		        PLACEHOLDER = "??",
		        EN = "en-US",
		        objectToString = {}.toString;

		    //cultures
		    kendo.cultures["en-US"] = {
		        name: EN,
		        numberFormat: {
		            pattern: ["-n"],
		            decimals: 2,
		            ",": ",",
		            ".": ".",
		            groupSize: [3],
		            percent: {
		                pattern: ["-n %", "n %"],
		                decimals: 2,
		                ",": ",",
		                ".": ".",
		                groupSize: [3],
		                symbol: "%"
		            },
		            currency: {
		                name: "US Dollar",
		                abbr: "USD",
		                pattern: ["($n)", "$n"],
		                decimals: 2,
		                ",": ",",
		                ".": ".",
		                groupSize: [3],
		                symbol: "$"
		            }
		        },
		        calendars: {
		            standard: {
		                days: {
		                    names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		                    namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		                    namesShort: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ]
		                },
		                months: {
		                    names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		                    namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		                },
		                AM: [ "AM", "am", "AM" ],
		                PM: [ "PM", "pm", "PM" ],
		                patterns: {
		                    d: "M/d/yyyy",
		                    D: "dddd, MMMM dd, yyyy",
		                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
		                    g: "M/d/yyyy h:mm tt",
		                    G: "M/d/yyyy h:mm:ss tt",
		                    m: "MMMM dd",
		                    M: "MMMM dd",
		                    s: "yyyy'-'MM'-'ddTHH':'mm':'ss",
		                    t: "h:mm tt",
		                    T: "h:mm:ss tt",
		                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
		                    y: "MMMM, yyyy",
		                    Y: "MMMM, yyyy"
		                },
		                "/": "/",
		                ":": ":",
		                firstDay: 0,
		                twoDigitYearMax: 2029
		            }
		        }
		    };


		     function findCulture(culture) {
		        if (culture) {
		            if (culture.numberFormat) {
		                return culture;
		            }

		            if (typeof culture === STRING) {
		                var cultures = kendo.cultures;
		                return cultures[culture] || cultures[culture.split("-")[0]] || null;
		            }

		            return null;
		        }

		        return null;
		    }

		    function getCulture(culture) {
		        if (culture) {
		            culture = findCulture(culture);
		        }

		        return culture || kendo.cultures.current;
		    }

		    kendo.culture = function(cultureName) {
		        var cultures = kendo.cultures, culture;

		        if (cultureName !== undefined) {
		            culture = findCulture(cultureName) || cultures[EN];
		            culture.calendar = culture.calendars.standard;
		            cultures.current = culture;
		        } else {
		            return cultures.current;
		        }
		    };

		    kendo.findCulture = findCulture;
		    kendo.getCulture = getCulture;

		    //set current culture to en-US.
		    kendo.culture(EN);

		    function formatDate(date, format, culture) {
		        culture = getCulture(culture);

		        var calendar = culture.calendars.standard,
		            days = calendar.days,
		            months = calendar.months;

		        format = calendar.patterns[format] || format;

		        return format.replace(dateFormatRegExp, function (match) {
		            var minutes;
		            var result;
		            var sign;

		            if (match === "d") {
		                result = date.getDate();
		            } else if (match === "dd") {
		                result = pad(date.getDate());
		            } else if (match === "ddd") {
		                result = days.namesAbbr[date.getDay()];
		            } else if (match === "dddd") {
		                result = days.names[date.getDay()];
		            } else if (match === "M") {
		                result = date.getMonth() + 1;
		            } else if (match === "MM") {
		                result = pad(date.getMonth() + 1);
		            } else if (match === "MMM") {
		                result = months.namesAbbr[date.getMonth()];
		            } else if (match === "MMMM") {
		                result = months.names[date.getMonth()];
		            } else if (match === "yy") {
		                result = pad(date.getFullYear() % 100);
		            } else if (match === "yyyy") {
		                result = pad(date.getFullYear(), 4);
		            } else if (match === "h" ) {
		                result = date.getHours() % 12 || 12;
		            } else if (match === "hh") {
		                result = pad(date.getHours() % 12 || 12);
		            } else if (match === "H") {
		                result = date.getHours();
		            } else if (match === "HH") {
		                result = pad(date.getHours());
		            } else if (match === "m") {
		                result = date.getMinutes();
		            } else if (match === "mm") {
		                result = pad(date.getMinutes());
		            } else if (match === "s") {
		                result = date.getSeconds();
		            } else if (match === "ss") {
		                result = pad(date.getSeconds());
		            } else if (match === "f") {
		                result = math.floor(date.getMilliseconds() / 100);
		            } else if (match === "ff") {
		                result = date.getMilliseconds();
		                if (result > 99) {
		                    result = math.floor(result / 10);
		                }
		                result = pad(result);
		            } else if (match === "fff") {
		                result = pad(date.getMilliseconds(), 3);
		            } else if (match === "tt") {
		                result = date.getHours() < 12 ? calendar.AM[0] : calendar.PM[0];
		            } else if (match === "zzz") {
		                minutes = date.getTimezoneOffset();
		                sign = minutes < 0;

		                result = math.abs(minutes / 60).toString().split(".")[0];
		                minutes = math.abs(minutes) - (result * 60);

		                result = (sign ? "+" : "-") + pad(result);
		                result += ":" + pad(minutes);
		            } else if (match === "zz" || match === "z") {
		                result = date.getTimezoneOffset() / 60;
		                sign = result < 0;

		                result = math.abs(result).toString().split(".")[0];
		                result = (sign ? "+" : "-") + (match === "zz" ? pad(result) : result);
		            }

		            return result !== undefined ? result : match.slice(1, match.length - 1);
		        });
		    }

		    //number formatting
		    function formatNumber(number, format, culture) {
		        culture = getCulture(culture);

		        var numberFormat = culture.numberFormat,
		            decimal = numberFormat[POINT],
		            precision = numberFormat.decimals,
		            pattern = numberFormat.pattern[0],
		            literals = [],
		            symbol,
		            isCurrency, isPercent,
		            customPrecision,
		            formatAndPrecision,
		            negative = number < 0,
		            integer,
		            fraction,
		            integerLength,
		            fractionLength,
		            replacement = EMPTY,
		            value = EMPTY,
		            idx,
		            length,
		            ch,
		            hasGroup,
		            hasNegativeFormat,
		            decimalIndex,
		            sharpIndex,
		            zeroIndex,
		            hasZero, hasSharp,
		            percentIndex,
		            currencyIndex,
		            startZeroIndex,
		            start = -1,
		            end;

		        //return empty string if no number
		        if (number === undefined) {
		            return EMPTY;
		        }

		        if (!isFinite(number)) {
		            return number;
		        }

		        //if no format then return number.toString() or number.toLocaleString() if culture.name is not defined
		        if (!format) {
		            return culture.name.length ? number.toLocaleString() : number.toString();
		        }

		        formatAndPrecision = standardFormatRegExp.exec(format);

		        // standard formatting
		        if (formatAndPrecision) {
		            format = formatAndPrecision[1].toLowerCase();

		            isCurrency = format === "c";
		            isPercent = format === "p";

		            if (isCurrency || isPercent) {
		                //get specific number format information if format is currency or percent
		                numberFormat = isCurrency ? numberFormat.currency : numberFormat.percent;
		                decimal = numberFormat[POINT];
		                precision = numberFormat.decimals;
		                symbol = numberFormat.symbol;
		                pattern = numberFormat.pattern[negative ? 0 : 1];
		            }

		            customPrecision = formatAndPrecision[2];

		            if (customPrecision) {
		                precision = +customPrecision;
		            }

		            //return number in exponential format
		            if (format === "e") {
		                return customPrecision ? number.toExponential(precision) : number.toExponential(); // toExponential() and toExponential(undefined) differ in FF #653438.
		            }

		            // multiply if format is percent
		            if (isPercent) {
		                number *= 100;
		            }

		            number = round(number, precision);
		            negative = number < 0;
		            number = number.split(POINT);

		            integer = number[0];
		            fraction = number[1];

		            //exclude "-" if number is negative.
		            if (negative) {
		                integer = integer.substring(1);
		            }

		            value = groupInteger(integer, 0, integer.length, numberFormat);

		            if (fraction) {
		                value += decimal + fraction;
		            }

		            if (format === "n" && !negative) {
		                return value;
		            }

		            number = EMPTY;

		            for (idx = 0, length = pattern.length; idx < length; idx++) {
		                ch = pattern.charAt(idx);

		                if (ch === "n") {
		                    number += value;
		                } else if (ch === "$" || ch === "%") {
		                    number += symbol;
		                } else {
		                    number += ch;
		                }
		            }

		            return number;
		        }

		        //custom formatting
		        //
		        //separate format by sections.

		        //make number positive
		        if (negative) {
		            number = -number;
		        }

		        if (format.indexOf("'") > -1 || format.indexOf("\"") > -1 || format.indexOf("\\") > -1) {
		            format = format.replace(literalRegExp, function (match) {
		                var quoteChar = match.charAt(0).replace("\\", ""),
		                    literal = match.slice(1).replace(quoteChar, "");

		                literals.push(literal);

		                return PLACEHOLDER;
		            });
		        }

		        format = format.split(";");
		        if (negative && format[1]) {
		            //get negative format
		            format = format[1];
		            hasNegativeFormat = true;
		        } else if (number === 0) {
		            //format for zeros
		            format = format[2] || format[0];
		            if (format.indexOf(SHARP) == -1 && format.indexOf(ZERO) == -1) {
		                //return format if it is string constant.
		                return format;
		            }
		        } else {
		            format = format[0];
		        }

		        percentIndex = format.indexOf("%");
		        currencyIndex = format.indexOf("$");

		        isPercent = percentIndex != -1;
		        isCurrency = currencyIndex != -1;

		        //multiply number if the format has percent
		        if (isPercent) {
		            number *= 100;
		        }

		        if (isCurrency && format[currencyIndex - 1] === "\\") {
		            format = format.split("\\").join("");
		            isCurrency = false;
		        }

		        if (isCurrency || isPercent) {
		            //get specific number format information if format is currency or percent
		            numberFormat = isCurrency ? numberFormat.currency : numberFormat.percent;
		            decimal = numberFormat[POINT];
		            precision = numberFormat.decimals;
		            symbol = numberFormat.symbol;
		        }

		        hasGroup = format.indexOf(COMMA) > -1;
		        if (hasGroup) {
		            format = format.replace(commaRegExp, EMPTY);
		        }

		        decimalIndex = format.indexOf(POINT);
		        length = format.length;

		        if (decimalIndex != -1) {
		            fraction = number.toString().split("e");
		            if (fraction[1]) {
		                fraction = round(number, Math.abs(fraction[1]));
		            } else {
		                fraction = fraction[0];
		            }
		            fraction = fraction.split(POINT)[1] || EMPTY;
		            zeroIndex = format.lastIndexOf(ZERO) - decimalIndex;
		            sharpIndex = format.lastIndexOf(SHARP) - decimalIndex;
		            hasZero = zeroIndex > -1;
		            hasSharp = sharpIndex > -1;
		            idx = fraction.length;

		            if (!hasZero && !hasSharp) {
		                format = format.substring(0, decimalIndex) + format.substring(decimalIndex + 1);
		                length = format.length;
		                decimalIndex = -1;
		                idx = 0;
		            } if (hasZero && zeroIndex > sharpIndex) {
		                idx = zeroIndex;
		            } else if (sharpIndex > zeroIndex) {
		                if (hasSharp && idx > sharpIndex) {
		                    idx = sharpIndex;
		                } else if (hasZero && idx < zeroIndex) {
		                    idx = zeroIndex;
		                }
		            }

		            if (idx > -1) {
		                number = round(number, idx);
		            }
		        } else {
		            number = round(number);
		        }

		        sharpIndex = format.indexOf(SHARP);
		        startZeroIndex = zeroIndex = format.indexOf(ZERO);

		        //define the index of the first digit placeholder
		        if (sharpIndex == -1 && zeroIndex != -1) {
		            start = zeroIndex;
		        } else if (sharpIndex != -1 && zeroIndex == -1) {
		            start = sharpIndex;
		        } else {
		            start = sharpIndex > zeroIndex ? zeroIndex : sharpIndex;
		        }

		        sharpIndex = format.lastIndexOf(SHARP);
		        zeroIndex = format.lastIndexOf(ZERO);

		        //define the index of the last digit placeholder
		        if (sharpIndex == -1 && zeroIndex != -1) {
		            end = zeroIndex;
		        } else if (sharpIndex != -1 && zeroIndex == -1) {
		            end = sharpIndex;
		        } else {
		            end = sharpIndex > zeroIndex ? sharpIndex : zeroIndex;
		        }

		        if (start == length) {
		            end = start;
		        }

		        if (start != -1) {
		            value = number.toString().split(POINT);
		            integer = value[0];
		            fraction = value[1] || EMPTY;

		            integerLength = integer.length;
		            fractionLength = fraction.length;

		            if (negative && (number * -1) >= 0) {
		                negative = false;
		            }

		            number = format.substring(0, start);

		            if (negative && !hasNegativeFormat) {
		                number += "-";
		            }

		            for (idx = start; idx < length; idx++) {
		                ch = format.charAt(idx);

		                if (decimalIndex == -1) {
		                    if (end - idx < integerLength) {
		                        number += integer;
		                        break;
		                    }
		                } else {
		                    if (zeroIndex != -1 && zeroIndex < idx) {
		                        replacement = EMPTY;
		                    }

		                    if ((decimalIndex - idx) <= integerLength && decimalIndex - idx > -1) {
		                        number += integer;
		                        idx = decimalIndex;
		                    }

		                    if (decimalIndex === idx) {
		                        number += (fraction ? decimal : EMPTY) + fraction;
		                        idx += end - decimalIndex + 1;
		                        continue;
		                    }
		                }

		                if (ch === ZERO) {
		                    number += ch;
		                    replacement = ch;
		                } else if (ch === SHARP) {
		                    number += replacement;
		                }
		            }

		            if (hasGroup) {
		                number = groupInteger(number, start + (negative ? 1 : 0), Math.max(end, (integerLength + start)), numberFormat);
		            }

		            if (end >= start) {
		                number += format.substring(end + 1);
		            }

		            //replace symbol placeholders
		            if (isCurrency || isPercent) {
		                value = EMPTY;
		                for (idx = 0, length = number.length; idx < length; idx++) {
		                    ch = number.charAt(idx);
		                    value += (ch === "$" || ch === "%") ? symbol : ch;
		                }
		                number = value;
		            }

		            length = literals.length;

		            if (length) {
		                for (idx = 0; idx < length; idx++) {
		                    number = number.replace(PLACEHOLDER, literals[idx]);
		                }
		            }
		        }

		        return number;
		    }

		    var groupInteger = function(number, start, end, numberFormat) {
		        var decimalIndex = number.indexOf(numberFormat[POINT]);
		        var groupSizes = numberFormat.groupSize.slice();
		        var groupSize = groupSizes.shift();
		        var integer, integerLength;
		        var idx, parts, value;
		        var newGroupSize;

		        end = decimalIndex !== -1 ? decimalIndex : end + 1;

		        integer = number.substring(start, end);
		        integerLength = integer.length;

		        if (integerLength >= groupSize) {
		            idx = integerLength;
		            parts = [];

		            while (idx > -1) {
		                value = integer.substring(idx - groupSize, idx);
		                if (value) {
		                    parts.push(value);
		                }
		                idx -= groupSize;
		                newGroupSize = groupSizes.shift();
		                groupSize = newGroupSize !== undefined ? newGroupSize : groupSize;

		                if (groupSize === 0) {
		                    parts.push(integer.substring(0, idx));
		                    break;
		                }
		            }

		            integer = parts.reverse().join(numberFormat[COMMA]);
		            number = number.substring(0, start) + integer + number.substring(end);
		        }

		        return number;
		    };

		    var round = function(value, precision) {
		        precision = precision || 0;

		        value = value.toString().split('e');
		        value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + precision) : precision)));

		        value = value.toString().split('e');
		        value = +(value[0] + 'e' + (value[1] ? (+value[1] - precision) : -precision));

		        return value.toFixed(precision);
		    };

		    var toString = function(value, fmt, culture) {
		        if (fmt) {
		            if (objectToString.call(value) === "[object Date]") {
		                return formatDate(value, fmt, culture);
		            } else if (typeof value === NUMBER) {
		                return formatNumber(value, fmt, culture);
		            }
		        }

		        return value !== undefined ? value : "";
		    };

		    kendo.format = function(fmt) {
		        var values = arguments;

		        return fmt.replace(formatRegExp, function(match, index, placeholderFormat) {
		            var value = values[parseInt(index, 10) + 1];

		            return toString(value, placeholderFormat ? placeholderFormat.substring(1) : "");
		        });
		    };

		    kendo._extractFormat = function (format) {
		        if (format.slice(0,3) === "{0:") {
		            format = format.slice(3, format.length - 1);
		        }

		        return format;
		    };

		    kendo._activeElement = function() {
		        try {
		            return document.activeElement;
		        } catch(e) {
		            return document.documentElement.activeElement;
		        }
		    };

		    kendo._round = round;
		    kendo.toString = toString;
		})();


		(function() {
		    var nonBreakingSpaceRegExp = /\u00A0/g,
		        exponentRegExp = /[eE][\-+]?[0-9]+/,
		        shortTimeZoneRegExp = /[+|\-]\d{1,2}/,
		        longTimeZoneRegExp = /[+|\-]\d{1,2}:?\d{2}/,
		        dateRegExp = /^\/Date\((.*?)\)\/$/,
		        offsetRegExp = /[+-]\d*/,
		        formatsSequence = ["G", "g", "d", "F", "D", "y", "m", "T", "t"],
		        numberRegExp = {
		            2: /^\d{1,2}/,
		            3: /^\d{1,3}/,
		            4: /^\d{4}/
		        },
		        objectToString = {}.toString;

		    function outOfRange(value, start, end) {
		        return !(value >= start && value <= end);
		    }

		    function designatorPredicate(designator) {
		        return designator.charAt(0);
		    }

		    function mapDesignators(designators) {
		        return $.map(designators, designatorPredicate);
		    }

		    //if date's day is different than the typed one - adjust
		    function adjustDST(date, hours) {
		        if (!hours && date.getHours() === 23) {
		            date.setHours(date.getHours() + 2);
		        }
		    }

		    function lowerArray(data) {
		        var idx = 0,
		            length = data.length,
		            array = [];

		        for (; idx < length; idx++) {
		            array[idx] = (data[idx] + "").toLowerCase();
		        }

		        return array;
		    }

		    function lowerLocalInfo(localInfo) {
		        var newLocalInfo = {}, property;

		        for (property in localInfo) {
		            newLocalInfo[property] = lowerArray(localInfo[property]);
		        }

		        return newLocalInfo;
		    }

		    function parseExact(value, format, culture) {
		        if (!value) {
		            return null;
		        }

		        var lookAhead = function (match) {
		                var i = 0;
		                while (format[idx] === match) {
		                    i++;
		                    idx++;
		                }
		                if (i > 0) {
		                    idx -= 1;
		                }
		                return i;
		            },
		            getNumber = function(size) {
		                var rg = numberRegExp[size] || new RegExp('^\\d{1,' + size + '}'),
		                    match = value.substr(valueIdx, size).match(rg);

		                if (match) {
		                    match = match[0];
		                    valueIdx += match.length;
		                    return parseInt(match, 10);
		                }
		                return null;
		            },
		            getIndexByName = function (names, lower) {
		                var i = 0,
		                    length = names.length,
		                    name, nameLength,
		                    matchLength = 0,
		                    matchIdx = 0,
		                    subValue;

		                for (; i < length; i++) {
		                    name = names[i];
		                    nameLength = name.length;
		                    subValue = value.substr(valueIdx, nameLength);

		                    if (lower) {
		                        subValue = subValue.toLowerCase();
		                    }

		                    if (subValue == name && nameLength > matchLength) {
		                        matchLength = nameLength;
		                        matchIdx = i;
		                    }
		                }

		                if (matchLength) {
		                    valueIdx += matchLength;
		                    return matchIdx + 1;
		                }

		                return null;
		            },
		            checkLiteral = function() {
		                var result = false;
		                if (value.charAt(valueIdx) === format[idx]) {
		                    valueIdx++;
		                    result = true;
		                }
		                return result;
		            },
		            calendar = culture.calendars.standard,
		            year = null,
		            month = null,
		            day = null,
		            hours = null,
		            minutes = null,
		            seconds = null,
		            milliseconds = null,
		            idx = 0,
		            valueIdx = 0,
		            literal = false,
		            date = new Date(),
		            twoDigitYearMax = calendar.twoDigitYearMax || 2029,
		            defaultYear = date.getFullYear(),
		            ch, count, length, pattern,
		            pmHour, UTC, matches,
		            amDesignators, pmDesignators,
		            hoursOffset, minutesOffset,
		            hasTime, match;

		        if (!format) {
		            format = "d"; //shord date format
		        }

		        //if format is part of the patterns get real format
		        pattern = calendar.patterns[format];
		        if (pattern) {
		            format = pattern;
		        }

		        format = format.split("");
		        length = format.length;

		        for (; idx < length; idx++) {
		            ch = format[idx];

		            if (literal) {
		                if (ch === "'") {
		                    literal = false;
		                } else {
		                    checkLiteral();
		                }
		            } else {
		                if (ch === "d") {
		                    count = lookAhead("d");
		                    if (!calendar._lowerDays) {
		                        calendar._lowerDays = lowerLocalInfo(calendar.days);
		                    }

		                    if (day !== null && count > 2) {
		                        continue;
		                    }

		                    day = count < 3 ? getNumber(2) : getIndexByName(calendar._lowerDays[count == 3 ? "namesAbbr" : "names"], true);

		                    if (day === null || outOfRange(day, 1, 31)) {
		                        return null;
		                    }
		                } else if (ch === "M") {
		                    count = lookAhead("M");
		                    if (!calendar._lowerMonths) {
		                        calendar._lowerMonths = lowerLocalInfo(calendar.months);
		                    }
		                    month = count < 3 ? getNumber(2) : getIndexByName(calendar._lowerMonths[count == 3 ? 'namesAbbr' : 'names'], true);

		                    if (month === null || outOfRange(month, 1, 12)) {
		                        return null;
		                    }
		                    month -= 1; //because month is zero based
		                } else if (ch === "y") {
		                    count = lookAhead("y");
		                    year = getNumber(count);

		                    if (year === null) {
		                        return null;
		                    }

		                    if (count == 2) {
		                        if (typeof twoDigitYearMax === "string") {
		                            twoDigitYearMax = defaultYear + parseInt(twoDigitYearMax, 10);
		                        }

		                        year = (defaultYear - defaultYear % 100) + year;
		                        if (year > twoDigitYearMax) {
		                            year -= 100;
		                        }
		                    }
		                } else if (ch === "h" ) {
		                    lookAhead("h");
		                    hours = getNumber(2);
		                    if (hours == 12) {
		                        hours = 0;
		                    }
		                    if (hours === null || outOfRange(hours, 0, 11)) {
		                        return null;
		                    }
		                } else if (ch === "H") {
		                    lookAhead("H");
		                    hours = getNumber(2);
		                    if (hours === null || outOfRange(hours, 0, 23)) {
		                        return null;
		                    }
		                } else if (ch === "m") {
		                    lookAhead("m");
		                    minutes = getNumber(2);
		                    if (minutes === null || outOfRange(minutes, 0, 59)) {
		                        return null;
		                    }
		                } else if (ch === "s") {
		                    lookAhead("s");
		                    seconds = getNumber(2);
		                    if (seconds === null || outOfRange(seconds, 0, 59)) {
		                        return null;
		                    }
		                } else if (ch === "f") {
		                    count = lookAhead("f");

		                    match = value.substr(valueIdx, count).match(numberRegExp[3]);
		                    milliseconds = getNumber(count); //move value index position

		                    if (milliseconds !== null) {
		                        milliseconds = parseFloat("0." + match[0], 10);
		                        milliseconds = kendo._round(milliseconds, 3);
		                        milliseconds *= 1000;
		                    }

		                    if (milliseconds === null || outOfRange(milliseconds, 0, 999)) {
		                        return null;
		                    }

		                } else if (ch === "t") {
		                    count = lookAhead("t");
		                    amDesignators = calendar.AM;
		                    pmDesignators = calendar.PM;

		                    if (count === 1) {
		                        amDesignators = mapDesignators(amDesignators);
		                        pmDesignators = mapDesignators(pmDesignators);
		                    }

		                    pmHour = getIndexByName(pmDesignators);
		                    if (!pmHour && !getIndexByName(amDesignators)) {
		                        return null;
		                    }
		                }
		                else if (ch === "z") {
		                    UTC = true;
		                    count = lookAhead("z");

		                    if (value.substr(valueIdx, 1) === "Z") {
		                        checkLiteral();
		                        continue;
		                    }

		                    matches = value.substr(valueIdx, 6)
		                                   .match(count > 2 ? longTimeZoneRegExp : shortTimeZoneRegExp);

		                    if (!matches) {
		                        return null;
		                    }

		                    matches = matches[0].split(":");

		                    hoursOffset = matches[0];
		                    minutesOffset = matches[1];

		                    if (!minutesOffset && hoursOffset.length > 3) { //(+|-)[hh][mm] format is used
		                        valueIdx = hoursOffset.length - 2;
		                        minutesOffset = hoursOffset.substring(valueIdx);
		                        hoursOffset = hoursOffset.substring(0, valueIdx);
		                    }

		                    hoursOffset = parseInt(hoursOffset, 10);
		                    if (outOfRange(hoursOffset, -12, 13)) {
		                        return null;
		                    }

		                    if (count > 2) {
		                        minutesOffset = parseInt(minutesOffset, 10);
		                        if (isNaN(minutesOffset) || outOfRange(minutesOffset, 0, 59)) {
		                            return null;
		                        }
		                    }
		                } else if (ch === "'") {
		                    literal = true;
		                    checkLiteral();
		                } else if (!checkLiteral()) {
		                    return null;
		                }
		            }
		        }

		        hasTime = hours !== null || minutes !== null || seconds || null;

		        if (year === null && month === null && day === null && hasTime) {
		            year = defaultYear;
		            month = date.getMonth();
		            day = date.getDate();
		        } else {
		            if (year === null) {
		                year = defaultYear;
		            }

		            if (day === null) {
		                day = 1;
		            }
		        }

		        if (pmHour && hours < 12) {
		            hours += 12;
		        }

		        if (UTC) {
		            if (hoursOffset) {
		                hours += -hoursOffset;
		            }

		            if (minutesOffset) {
		                minutes += -minutesOffset;
		            }

		            value = new Date(Date.UTC(year, month, day, hours, minutes, seconds, milliseconds));
		        } else {
		            value = new Date(year, month, day, hours, minutes, seconds, milliseconds);
		            adjustDST(value, hours);
		        }

		        if (year < 100) {
		            value.setFullYear(year);
		        }

		        if (value.getDate() !== day && UTC === undefined) {
		            return null;
		        }

		        return value;
		    }

		    function parseMicrosoftFormatOffset(offset) {
		        var sign = offset.substr(0, 1) === "-" ? -1 : 1;

		        offset = offset.substring(1);
		        offset = (parseInt(offset.substr(0, 2), 10) * 60) + parseInt(offset.substring(2), 10);

		        return sign * offset;
		    }

		    kendo.parseDate = function(value, formats, culture) {
		        if (objectToString.call(value) === "[object Date]") {
		            return value;
		        }

		        var idx = 0;
		        var date = null;
		        var length, patterns;
		        var tzoffset;

		        if (value && value.indexOf("/D") === 0) {
		            date = dateRegExp.exec(value);
		            if (date) {
		                date = date[1];
		                tzoffset = offsetRegExp.exec(date.substring(1));

		                date = new Date(parseInt(date, 10));

		                if (tzoffset) {
		                    tzoffset = parseMicrosoftFormatOffset(tzoffset[0]);
		                    date = kendo.timezone.apply(date, 0);
		                    date = kendo.timezone.convert(date, 0, -1 * tzoffset);
		                }

		                return date;
		            }
		        }

		        culture = kendo.getCulture(culture);

		        if (!formats) {
		            formats = [];
		            patterns = culture.calendar.patterns;
		            length = formatsSequence.length;

		            for (; idx < length; idx++) {
		                formats[idx] = patterns[formatsSequence[idx]];
		            }

		            idx = 0;

		            formats = [
		                "yyyy/MM/dd HH:mm:ss",
		                "yyyy/MM/dd HH:mm",
		                "yyyy/MM/dd",
		                "ddd MMM dd yyyy HH:mm:ss",
		                "yyyy-MM-ddTHH:mm:ss.fffffffzzz",
		                "yyyy-MM-ddTHH:mm:ss.fffzzz",
		                "yyyy-MM-ddTHH:mm:sszzz",
		                "yyyy-MM-ddTHH:mm:ss.fffffff",
		                "yyyy-MM-ddTHH:mm:ss.fff",
		                "yyyy-MM-ddTHH:mmzzz",
		                "yyyy-MM-ddTHH:mmzz",
		                "yyyy-MM-ddTHH:mm:ss",
		                "yyyy-MM-ddTHH:mm",
		                "yyyy-MM-dd HH:mm:ss",
		                "yyyy-MM-dd HH:mm",
		                "yyyy-MM-dd",
		                "HH:mm:ss",
		                "HH:mm"
		            ].concat(formats);
		        }

		        formats = isArray(formats) ? formats: [formats];
		        length = formats.length;

		        for (; idx < length; idx++) {
		            date = parseExact(value, formats[idx], culture);
		            if (date) {
		                return date;
		            }
		        }

		        return date;
		    };

		    kendo.parseInt = function(value, culture) {
		        var result = kendo.parseFloat(value, culture);
		        if (result) {
		            result = result | 0;
		        }
		        return result;
		    };

		    kendo.parseFloat = function(value, culture, format) {
		        if (!value && value !== 0) {
		           return null;
		        }

		        if (typeof value === NUMBER) {
		           return value;
		        }

		        value = value.toString();
		        culture = kendo.getCulture(culture);

		        var number = culture.numberFormat,
		            percent = number.percent,
		            currency = number.currency,
		            symbol = currency.symbol,
		            percentSymbol = percent.symbol,
		            negative = value.indexOf("-"),
		            parts, isPercent;

		        //handle exponential number
		        if (exponentRegExp.test(value)) {
		            value = parseFloat(value.replace(number["."], "."));
		            if (isNaN(value)) {
		                value = null;
		            }
		            return value;
		        }

		        if (negative > 0) {
		            return null;
		        } else {
		            negative = negative > -1;
		        }

		        if (value.indexOf(symbol) > -1 || (format && format.toLowerCase().indexOf("c") > -1)) {
		            number = currency;
		            parts = number.pattern[0].replace("$", symbol).split("n");
		            if (value.indexOf(parts[0]) > -1 && value.indexOf(parts[1]) > -1) {
		                value = value.replace(parts[0], "").replace(parts[1], "");
		                negative = true;
		            }
		        } else if (value.indexOf(percentSymbol) > -1) {
		            isPercent = true;
		            number = percent;
		            symbol = percentSymbol;
		        }

		        value = value.replace("-", "")
		                     .replace(symbol, "")
		                     .replace(nonBreakingSpaceRegExp, " ")
		                     .split(number[","].replace(nonBreakingSpaceRegExp, " ")).join("")
		                     .replace(number["."], ".");

		        value = parseFloat(value);

		        if (isNaN(value)) {
		            value = null;
		        } else if (negative) {
		            value *= -1;
		        }

		        if (value && isPercent) {
		            value /= 100;
		        }

		        return value;
		    };
		})();

		    function getShadows(element) {
		        var shadow = element.css(kendo.support.transitions.css + "box-shadow") || element.css("box-shadow"),
		            radius = shadow ? shadow.match(boxShadowRegExp) || [ 0, 0, 0, 0, 0 ] : [ 0, 0, 0, 0, 0 ],
		            blur = math.max((+radius[3]), +(radius[4] || 0));

		        return {
		            left: (-radius[1]) + blur,
		            right: (+radius[1]) + blur,
		            bottom: (+radius[2]) + blur
		        };
		    }

		    function wrap(element, autosize) {
		        var browser = support.browser,
		            percentage,
		            isRtl = element.css("direction") == "rtl";

		        if (!element.parent().hasClass("k-animation-container")) {
		            var shadows = getShadows(element),
		                width = element[0].style.width,
		                height = element[0].style.height,
		                percentWidth = percentRegExp.test(width),
		                percentHeight = percentRegExp.test(height);

		            if (browser.opera) { // Box shadow can't be retrieved in Opera
		                shadows.left = shadows.right = shadows.bottom = 5;
		            }

		            percentage = percentWidth || percentHeight;

		            if (!percentWidth && (!autosize || (autosize && width))) { width = element.outerWidth(); }
		            if (!percentHeight && (!autosize || (autosize && height))) { height = element.outerHeight(); }

		            element.wrap(
		                         $("<div/>")
		                         .addClass("k-animation-container")
		                         .css({
		                             width: width,
		                             height: height,
		                             marginLeft: shadows.left * (isRtl ? 1 : -1),
		                             paddingLeft: shadows.left,
		                             paddingRight: shadows.right,
		                             paddingBottom: shadows.bottom
		                         }));

		            if (percentage) {
		                element.css({
		                    width: "100%",
		                    height: "100%",
		                    boxSizing: "border-box",
		                    mozBoxSizing: "border-box",
		                    webkitBoxSizing: "border-box"
		                });
		            }
		        } else {
		            var wrapper = element.parent(".k-animation-container"),
		                wrapperStyle = wrapper[0].style;

		            if (wrapper.is(":hidden")) {
		                wrapper.show();
		            }

		            percentage = percentRegExp.test(wrapperStyle.width) || percentRegExp.test(wrapperStyle.height);

		            if (!percentage) {
		                wrapper.css({
		                    width: element.outerWidth(),
		                    height: element.outerHeight(),
		                    boxSizing: "content-box",
		                    mozBoxSizing: "content-box",
		                    webkitBoxSizing: "content-box"
		                });
		            }
		        }

		        if (browser.msie && math.floor(browser.version) <= 7) {
		            element.css({ zoom: 1 });
		            element.children(".k-menu").width(element.width());
		        }

		        return element.parent();
		    }

		    function deepExtend(destination) {
		        var i = 1,
		            length = arguments.length;

		        for (i = 1; i < length; i++) {
		            deepExtendOne(destination, arguments[i]);
		        }

		        return destination;
		    }

		    function deepExtendOne(destination, source) {
		        var ObservableArray = kendo.data.ObservableArray,
		            LazyObservableArray = kendo.data.LazyObservableArray,
		            DataSource = kendo.data.DataSource,
		            HierarchicalDataSource = kendo.data.HierarchicalDataSource,
		            property,
		            propValue,
		            propType,
		            propInit,
		            destProp;

		        for (property in source) {
		            propValue = source[property];
		            propType = typeof propValue;

		            if (propType === OBJECT && propValue !== null) {
		                propInit = propValue.constructor;
		            } else {
		                propInit = null;
		            }

		            if (propInit &&
		                propInit !== Array && propInit !== ObservableArray && propInit !== LazyObservableArray &&
		                propInit !== DataSource && propInit !== HierarchicalDataSource) {

		                if (propValue instanceof Date) {
		                    destination[property] = new Date(propValue.getTime());
		                } else if (isFunction(propValue.clone)) {
		                    destination[property] = propValue.clone();
		                } else {
		                    destProp = destination[property];
		                    if (typeof (destProp) === OBJECT) {
		                        destination[property] = destProp || {};
		                    } else {
		                        destination[property] = {};
		                    }
		                    deepExtendOne(destination[property], propValue);
		                }
		            } else if (propType !== UNDEFINED) {
		                destination[property] = propValue;
		            }
		        }

		        return destination;
		    }

		    function testRx(agent, rxs, dflt) {
		        for (var rx in rxs) {
		            if (rxs.hasOwnProperty(rx) && rxs[rx].test(agent)) {
		                return rx;
		            }
		        }
		        return dflt !== undefined ? dflt : agent;
		    }

		    function toHyphens(str) {
		        return str.replace(/([a-z][A-Z])/g, function (g) {
		            return g.charAt(0) + '-' + g.charAt(1).toLowerCase();
		        });
		    }

		    function toCamelCase(str) {
		        return str.replace(/\-(\w)/g, function (strMatch, g1) {
		            return g1.toUpperCase();
		        });
		    }

		    function getComputedStyles(element, properties) {
		        var styles = {}, computedStyle;

		        if (document.defaultView && document.defaultView.getComputedStyle) {
		            computedStyle = document.defaultView.getComputedStyle(element, "");

		            if (properties) {
		                $.each(properties, function(idx, value) {
		                    styles[value] = computedStyle.getPropertyValue(value);
		                });
		            }
		        } else {
		            computedStyle = element.currentStyle;

		            if (properties) {
		                $.each(properties, function(idx, value) {
		                    styles[value] = computedStyle[toCamelCase(value)];
		                });
		            }
		        }

		        if (!kendo.size(styles)) {
		            styles = computedStyle;
		        }

		        return styles;
		    }

		    function isScrollable(element) {
		        if (element && element.className && typeof(element.className) === "string" && element.className.indexOf("k-auto-scrollable") > -1) {
		            return true;
		        }

		        var overflow = getComputedStyles(element, ["overflow"]).overflow;
		        return overflow == "auto" || overflow == "scroll";
		    }

		    function scrollLeft(element, value) {
		        var webkit = support.browser.webkit;
		        var mozila = support.browser.mozilla;
		        var el = element instanceof $ ? element[0] : element;
		        var isRtl;

		        if (!element) {
		            return;
		        }

		        isRtl = support.isRtl(element);

		        if (value !== undefined) {
		            if (isRtl && webkit) {
		                el.scrollLeft = el.scrollWidth - el.clientWidth - value;
		            } else if (isRtl && mozila) {
		                el.scrollLeft = -value;
		            } else {
		                el.scrollLeft = value;
		            }
		        } else {
		            if (isRtl && webkit) {
		                return el.scrollWidth - el.clientWidth - el.scrollLeft;
		            } else {
		                return Math.abs(el.scrollLeft);
		            }
		        }
		    }

		    (function () {
		        support._scrollbar = undefined;

		        support.scrollbar = function (refresh) {
		            if (!isNaN(support._scrollbar) && !refresh) {
		                return support._scrollbar;
		            } else {
		                var div = document.createElement("div"),
		                    result;

		                div.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block";
		                div.innerHTML = "&nbsp;";
		                document.body.appendChild(div);

		                support._scrollbar = result = div.offsetWidth - div.scrollWidth;

		                document.body.removeChild(div);

		                return result;
		            }
		        };

		        support.isRtl = function(element) {
		            return $(element).closest(".k-rtl").length > 0;
		        };

		        var table = document.createElement("table");

		        // Internet Explorer does not support setting the innerHTML of TBODY and TABLE elements
		        try {
		            table.innerHTML = "<tr><td></td></tr>";

		            support.tbodyInnerHtml = true;
		        } catch (e) {
		            support.tbodyInnerHtml = false;
		        }

		        support.touch = "ontouchstart" in window;
		        support.msPointers = window.MSPointerEvent;
		        support.pointers = window.PointerEvent;

		        var transitions = support.transitions = false,
		            transforms = support.transforms = false,
		            elementProto = "HTMLElement" in window ? HTMLElement.prototype : [];

		        support.hasHW3D = ("WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix()) || "MozPerspective" in document.documentElement.style || "msPerspective" in document.documentElement.style;

		        each([ "Moz", "webkit", "O", "ms" ], function () {
		            var prefix = this.toString(),
		                hasTransitions = typeof table.style[prefix + "Transition"] === STRING;

		            if (hasTransitions || typeof table.style[prefix + "Transform"] === STRING) {
		                var lowPrefix = prefix.toLowerCase();

		                transforms = {
		                    css: (lowPrefix != "ms") ? "-" + lowPrefix + "-" : "",
		                    prefix: prefix,
		                    event: (lowPrefix === "o" || lowPrefix === "webkit") ? lowPrefix : ""
		                };

		                if (hasTransitions) {
		                    transitions = transforms;
		                    transitions.event = transitions.event ? transitions.event + "TransitionEnd" : "transitionend";
		                }

		                return false;
		            }
		        });

		        table = null;

		        support.transforms = transforms;
		        support.transitions = transitions;

		        support.devicePixelRatio = window.devicePixelRatio === undefined ? 1 : window.devicePixelRatio;

		        try {
		            support.screenWidth = window.outerWidth || window.screen ? window.screen.availWidth : window.innerWidth;
		            support.screenHeight = window.outerHeight || window.screen ? window.screen.availHeight : window.innerHeight;
		        } catch(e) {
		            //window.outerWidth throws error when in IE showModalDialog.
		            support.screenWidth = window.screen.availWidth;
		            support.screenHeight = window.screen.availHeight;
		        }

		        support.detectOS = function (ua) {
		            var os = false, minorVersion, match = [],
		                notAndroidPhone = !/mobile safari/i.test(ua),
		                agentRxs = {
		                    wp: /(Windows Phone(?: OS)?)\s(\d+)\.(\d+(\.\d+)?)/,
		                    fire: /(Silk)\/(\d+)\.(\d+(\.\d+)?)/,
		                    android: /(Android|Android.*(?:Opera|Firefox).*?\/)\s*(\d+)\.(\d+(\.\d+)?)/,
		                    iphone: /(iPhone|iPod).*OS\s+(\d+)[\._]([\d\._]+)/,
		                    ipad: /(iPad).*OS\s+(\d+)[\._]([\d_]+)/,
		                    meego: /(MeeGo).+NokiaBrowser\/(\d+)\.([\d\._]+)/,
		                    webos: /(webOS)\/(\d+)\.(\d+(\.\d+)?)/,
		                    blackberry: /(BlackBerry|BB10).*?Version\/(\d+)\.(\d+(\.\d+)?)/,
		                    playbook: /(PlayBook).*?Tablet\s*OS\s*(\d+)\.(\d+(\.\d+)?)/,
		                    windows: /(MSIE)\s+(\d+)\.(\d+(\.\d+)?)/,
		                    tizen: /(tizen).*?Version\/(\d+)\.(\d+(\.\d+)?)/i,
		                    sailfish: /(sailfish).*rv:(\d+)\.(\d+(\.\d+)?).*firefox/i,
		                    ffos: /(Mobile).*rv:(\d+)\.(\d+(\.\d+)?).*Firefox/
		                },
		                osRxs = {
		                    ios: /^i(phone|pad|pod)$/i,
		                    android: /^android|fire$/i,
		                    blackberry: /^blackberry|playbook/i,
		                    windows: /windows/,
		                    wp: /wp/,
		                    flat: /sailfish|ffos|tizen/i,
		                    meego: /meego/
		                },
		                formFactorRxs = {
		                    tablet: /playbook|ipad|fire/i
		                },
		                browserRxs = {
		                    omini: /Opera\sMini/i,
		                    omobile: /Opera\sMobi/i,
		                    firefox: /Firefox|Fennec/i,
		                    mobilesafari: /version\/.*safari/i,
		                    ie: /MSIE|Windows\sPhone/i,
		                    chrome: /chrome|crios/i,
		                    webkit: /webkit/i
		                };

		            for (var agent in agentRxs) {
		                if (agentRxs.hasOwnProperty(agent)) {
		                    match = ua.match(agentRxs[agent]);
		                    if (match) {
		                        if (agent == "windows" && "plugins" in navigator) { return false; } // Break if not Metro/Mobile Windows

		                        os = {};
		                        os.device = agent;
		                        os.tablet = testRx(agent, formFactorRxs, false);
		                        os.browser = testRx(ua, browserRxs, "default");
		                        os.name = testRx(agent, osRxs);
		                        os[os.name] = true;
		                        os.majorVersion = match[2];
		                        os.minorVersion = match[3].replace("_", ".");
		                        minorVersion = os.minorVersion.replace(".", "").substr(0, 2);
		                        os.flatVersion = os.majorVersion + minorVersion + (new Array(3 - (minorVersion.length < 3 ? minorVersion.length : 2)).join("0"));
		                        os.cordova = typeof window.PhoneGap !== UNDEFINED || typeof window.cordova !== UNDEFINED; // Use file protocol to detect appModes.
		                        os.appMode = window.navigator.standalone || (/file|local|wmapp/).test(window.location.protocol) || os.cordova; // Use file protocol to detect appModes.

		                        if (os.android && (support.devicePixelRatio < 1.5 && os.flatVersion < 400 || notAndroidPhone) && (support.screenWidth > 800 || support.screenHeight > 800)) {
		                            os.tablet = agent;
		                        }

		                        break;
		                    }
		                }
		            }
		            return os;
		        };

		        var mobileOS = support.mobileOS = support.detectOS(navigator.userAgent);

		        support.wpDevicePixelRatio = mobileOS.wp ? screen.width / 320 : 0;
		        support.kineticScrollNeeded = mobileOS && (support.touch || support.msPointers || support.pointers);

		        support.hasNativeScrolling = false;

		        if (mobileOS.ios || (mobileOS.android && mobileOS.majorVersion > 2) || mobileOS.wp) {
		            support.hasNativeScrolling = mobileOS;
		        }

		        support.delayedClick = function() {

		            // only the mobile devices with touch events do this.
		            if (support.touch) {
		                // All iOS devices so far (by the time I am writing this, iOS 9.0.2 is the latest),
		                // delay their click events.
		                if (mobileOS.ios) {
		                    return true;
		                }

		                if (mobileOS.android) {

		                    if (!support.browser.chrome) { // older webkits and webviews delay the click
		                        return true;
		                    }

		                    // from here on, we deal with Chrome on Android.
		                    if (support.browser.version < 32) {
		                        return false;
		                    }

		                    // Chrome 32+ does conditional fast clicks if the view port is not user scalable.
		                    return !($("meta[name=viewport]").attr("content") || "").match(/user-scalable=no/i);
		                }
		            }

		            return false;
		        };

		        support.mouseAndTouchPresent = support.touch && !(support.mobileOS.ios || support.mobileOS.android);

		        support.detectBrowser = function(ua) {
		            var browser = false, match = [],
		                browserRxs = {
		                    edge: /(edge)[ \/]([\w.]+)/i,
		                    webkit: /(chrome)[ \/]([\w.]+)/i,
		                    safari: /(webkit)[ \/]([\w.]+)/i,
		                    opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
		                    msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
		                    mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/i
		                };

		            for (var agent in browserRxs) {
		                if (browserRxs.hasOwnProperty(agent)) {
		                    match = ua.match(browserRxs[agent]);
		                    if (match) {
		                        browser = {};
		                        browser[agent] = true;
		                        browser[match[1].toLowerCase().split(" ")[0].split("/")[0]] = true;
		                        browser.version = parseInt(document.documentMode || match[2], 10);

		                        break;
		                    }
		                }
		            }

		            return browser;
		        };

		        support.browser = support.detectBrowser(navigator.userAgent);

		        support.detectClipboardAccess = function() {
		            var commands = {
		                copy: document.queryCommandSupported ? document.queryCommandSupported("copy") : false,
		                cut: document.queryCommandSupported ? document.queryCommandSupported("cut") : false,
		                paste : document.queryCommandSupported ? document.queryCommandSupported("paste") : false
		            };

		            if (support.browser.chrome) {
		                //not using queryCommandSupported due to chromium issues 476508 and 542948
		                commands.paste = false;
		                if(support.browser.version >= 43) {
		                    commands.copy = true;
		                    commands.cut = true;
		                }
		            }

		            return commands;
		        };

		        support.clipboard = support.detectClipboardAccess();

		        support.zoomLevel = function() {
		            try {
		                var browser = support.browser;
		                var ie11WidthCorrection = 0;
		                var docEl = document.documentElement;

		                if (browser.msie && browser.version == 11 && docEl.scrollHeight > docEl.clientHeight && !support.touch) {
		                    ie11WidthCorrection = support.scrollbar();
		                }

		                return support.touch ? (docEl.clientWidth / window.innerWidth) :
		                       browser.msie && browser.version >= 10 ? (((top || window).document.documentElement.offsetWidth + ie11WidthCorrection) / (top || window).innerWidth) : 1;
		            } catch(e) {
		                return 1;
		            }
		        };

		        support.cssBorderSpacing = typeof document.documentElement.style.borderSpacing != "undefined" && !(support.browser.msie && support.browser.version < 8);

		        (function(browser) {
		            // add browser-specific CSS class
		            var cssClass = "",
		                docElement = $(document.documentElement),
		                majorVersion = parseInt(browser.version, 10);

		            if (browser.msie) {
		                cssClass = "ie";
		            } else if (browser.mozilla) {
		                cssClass = "ff";
		            } else if (browser.safari) {
		                cssClass = "safari";
		            } else if (browser.webkit) {
		                cssClass = "webkit";
		            } else if (browser.opera) {
		                cssClass = "opera";
		            } else if (browser.edge) {
		                cssClass = "edge";
		            }

		            if (cssClass) {
		                cssClass = "k-" + cssClass + " k-" + cssClass + majorVersion;
		            }
		            if (support.mobileOS) {
		                cssClass += " k-mobile";
		            }

		            docElement.addClass(cssClass);
		        })(support.browser);

		        support.eventCapture = document.documentElement.addEventListener;

		        var input = document.createElement("input");

		        support.placeholder = "placeholder" in input;
		        support.propertyChangeEvent = "onpropertychange" in input;

		        support.input = (function() {
		            var types = ["number", "date", "time", "month", "week", "datetime", "datetime-local"];
		            var length = types.length;
		            var value = "test";
		            var result = {};
		            var idx = 0;
		            var type;

		            for (;idx < length; idx++) {
		                type = types[idx];
		                input.setAttribute("type", type);
		                input.value = value;

		                result[type.replace("-", "")] = input.type !== "text" && input.value !== value;
		            }

		            return result;
		        })();

		        input.style.cssText = "float:left;";

		        support.cssFloat = !!input.style.cssFloat;

		        input = null;

		        support.stableSort = (function() {
		            // Chrome sort is not stable for more than *10* items
		            // IE9+ sort is not stable for than *512* items
		            var threshold = 513;

		            var sorted = [{
		                index: 0,
		                field: "b"
		            }];

		            for (var i = 1; i < threshold; i++) {
		                sorted.push({
		                    index: i,
		                    field: "a"
		                });
		            }

		            sorted.sort(function(a, b) {
		                return a.field > b.field ? 1 : (a.field < b.field ? -1 : 0);
		            });

		            return sorted[0].index === 1;
		        })();

		        support.matchesSelector = elementProto.webkitMatchesSelector || elementProto.mozMatchesSelector ||
		                                  elementProto.msMatchesSelector || elementProto.oMatchesSelector ||
		                                  elementProto.matchesSelector || elementProto.matches ||
		          function( selector ) {
		              var nodeList = document.querySelectorAll ? ( this.parentNode || document ).querySelectorAll( selector ) || [] : $(selector),
		                  i = nodeList.length;

		              while (i--) {
		                  if (nodeList[i] == this) {
		                      return true;
		                  }
		              }

		              return false;
		          };

		        support.pushState = window.history && window.history.pushState;

		        var documentMode = document.documentMode;

		        support.hashChange = ("onhashchange" in window) && !(support.browser.msie && (!documentMode || documentMode <= 8)); // old IE detection

		        support.customElements = ("registerElement" in window.document);
		    })();


		    function size(obj) {
		        var result = 0, key;
		        for (key in obj) {
		            if (obj.hasOwnProperty(key) && key != "toJSON") { // Ignore fake IE7 toJSON.
		                result++;
		            }
		        }

		        return result;
		    }

		    function getOffset(element, type, positioned) {
		        if (!type) {
		            type = "offset";
		        }

		        var result = element[type]();

		        // IE10 touch zoom is living in a separate viewport
		        if (support.browser.msie && (support.pointers || support.msPointers) && !positioned) {
		            result.top -= (window.pageYOffset - document.documentElement.scrollTop);
		            result.left -= (window.pageXOffset - document.documentElement.scrollLeft);
		        }

		        return result;
		    }

		    var directions = {
		        left: { reverse: "right" },
		        right: { reverse: "left" },
		        down: { reverse: "up" },
		        up: { reverse: "down" },
		        top: { reverse: "bottom" },
		        bottom: { reverse: "top" },
		        "in": { reverse: "out" },
		        out: { reverse: "in" }
		    };

		    function parseEffects(input) {
		        var effects = {};

		        each((typeof input === "string" ? input.split(" ") : input), function(idx) {
		            effects[idx] = this;
		        });

		        return effects;
		    }

		    function fx(element) {
		        return new kendo.effects.Element(element);
		    }

		    var effects = {};

		    $.extend(effects, {
		        enabled: true,
		        Element: function(element) {
		            this.element = $(element);
		        },

		        promise: function(element, options) {
		            if (!element.is(":visible")) {
		                element.css({ display: element.data("olddisplay") || "block" }).css("display");
		            }

		            if (options.hide) {
		                element.data("olddisplay", element.css("display")).hide();
		            }

		            if (options.init) {
		                options.init();
		            }

		            if (options.completeCallback) {
		                options.completeCallback(element); // call the external complete callback with the element
		            }

		            element.dequeue();
		        },

		        disable: function() {
		            this.enabled = false;
		            this.promise = this.promiseShim;
		        },

		        enable: function() {
		            this.enabled = true;
		            this.promise = this.animatedPromise;
		        }
		    });

		    effects.promiseShim = effects.promise;

		    function prepareAnimationOptions(options, duration, reverse, complete) {
		        if (typeof options === STRING) {
		            // options is the list of effect names separated by space e.g. animate(element, "fadeIn slideDown")

		            // only callback is provided e.g. animate(element, options, function() {});
		            if (isFunction(duration)) {
		                complete = duration;
		                duration = 400;
		                reverse = false;
		            }

		            if (isFunction(reverse)) {
		                complete = reverse;
		                reverse = false;
		            }

		            if (typeof duration === BOOLEAN){
		                reverse = duration;
		                duration = 400;
		            }

		            options = {
		                effects: options,
		                duration: duration,
		                reverse: reverse,
		                complete: complete
		            };
		        }

		        return extend({
		            //default options
		            effects: {},
		            duration: 400, //jQuery default duration
		            reverse: false,
		            init: noop,
		            teardown: noop,
		            hide: false
		        }, options, { completeCallback: options.complete, complete: noop }); // Move external complete callback, so deferred.resolve can be always executed.

		    }

		    function animate(element, options, duration, reverse, complete) {
		        var idx = 0,
		            length = element.length,
		            instance;

		        for (; idx < length; idx ++) {
		            instance = $(element[idx]);
		            instance.queue(function() {
		                effects.promise(instance, prepareAnimationOptions(options, duration, reverse, complete));
		            });
		        }

		        return element;
		    }

		    function toggleClass(element, classes, options, add) {
		        if (classes) {
		            classes = classes.split(" ");

		            each(classes, function(idx, value) {
		                element.toggleClass(value, add);
		            });
		        }

		        return element;
		    }

		    if (!("kendoAnimate" in $.fn)) {
		        extend($.fn, {
		            kendoStop: function(clearQueue, gotoEnd) {
		                return this.stop(clearQueue, gotoEnd);
		            },

		            kendoAnimate: function(options, duration, reverse, complete) {
		                return animate(this, options, duration, reverse, complete);
		            },

		            kendoAddClass: function(classes, options){
		                return kendo.toggleClass(this, classes, options, true);
		            },

		            kendoRemoveClass: function(classes, options){
		                return kendo.toggleClass(this, classes, options, false);
		            },
		            kendoToggleClass: function(classes, options, toggle){
		                return kendo.toggleClass(this, classes, options, toggle);
		            }
		        });
		    }

		    var ampRegExp = /&/g,
		        ltRegExp = /</g,
		        quoteRegExp = /"/g,
		        aposRegExp = /'/g,
		        gtRegExp = />/g;
		    function htmlEncode(value) {
		        return ("" + value).replace(ampRegExp, "&amp;").replace(ltRegExp, "&lt;").replace(gtRegExp, "&gt;").replace(quoteRegExp, "&quot;").replace(aposRegExp, "&#39;");
		    }

		    var eventTarget = function (e) {
		        return e.target;
		    };

		    if (support.touch) {

		        eventTarget = function(e) {
		            var touches = "originalEvent" in e ? e.originalEvent.changedTouches : "changedTouches" in e ? e.changedTouches : null;

		            return touches ? document.elementFromPoint(touches[0].clientX, touches[0].clientY) : e.target;
		        };

		        each(["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap"], function(m, value) {
		            $.fn[value] = function(callback) {
		                return this.bind(value, callback);
		            };
		        });
		    }

		    if (support.touch) {
		        if (!support.mobileOS) {
		            support.mousedown = "mousedown touchstart";
		            support.mouseup = "mouseup touchend";
		            support.mousemove = "mousemove touchmove";
		            support.mousecancel = "mouseleave touchcancel";
		            support.click = "click";
		            support.resize = "resize";
		        } else {
		            support.mousedown = "touchstart";
		            support.mouseup = "touchend";
		            support.mousemove = "touchmove";
		            support.mousecancel = "touchcancel";
		            support.click = "touchend";
		            support.resize = "orientationchange";
		        }
		    } else if (support.pointers) {
		        support.mousemove = "pointermove";
		        support.mousedown = "pointerdown";
		        support.mouseup = "pointerup";
		        support.mousecancel = "pointercancel";
		        support.click = "pointerup";
		        support.resize = "orientationchange resize";
		    } else if (support.msPointers) {
		        support.mousemove = "MSPointerMove";
		        support.mousedown = "MSPointerDown";
		        support.mouseup = "MSPointerUp";
		        support.mousecancel = "MSPointerCancel";
		        support.click = "MSPointerUp";
		        support.resize = "orientationchange resize";
		    } else {
		        support.mousemove = "mousemove";
		        support.mousedown = "mousedown";
		        support.mouseup = "mouseup";
		        support.mousecancel = "mouseleave";
		        support.click = "click";
		        support.resize = "resize";
		    }

		    var wrapExpression = function(members, paramName) {
		        var result = paramName || "d",
		            index,
		            idx,
		            length,
		            member,
		            count = 1;

		        for (idx = 0, length = members.length; idx < length; idx++) {
		            member = members[idx];
		            if (member !== "") {
		                index = member.indexOf("[");

		                if (index !== 0) {
		                    if (index == -1) {
		                        member = "." + member;
		                    } else {
		                        count++;
		                        member = "." + member.substring(0, index) + " || {})" + member.substring(index);
		                    }
		                }

		                count++;
		                result += member + ((idx < length - 1) ? " || {})" : ")");
		            }
		        }
		        return new Array(count).join("(") + result;
		    },
		    localUrlRe = /^([a-z]+:)?\/\//i;

		    extend(kendo, {
		        widgets: [],
		        _widgetRegisteredCallbacks: [],
		        ui: kendo.ui || {},
		        fx: kendo.fx || fx,
		        effects: kendo.effects || effects,
		        mobile: kendo.mobile || { },
		        data: kendo.data || {},
		        dataviz: kendo.dataviz || {},
		        drawing: kendo.drawing || {},
		        spreadsheet: { messages: {} },
		        keys: {
		            INSERT: 45,
		            DELETE: 46,
		            BACKSPACE: 8,
		            TAB: 9,
		            ENTER: 13,
		            ESC: 27,
		            LEFT: 37,
		            UP: 38,
		            RIGHT: 39,
		            DOWN: 40,
		            END: 35,
		            HOME: 36,
		            SPACEBAR: 32,
		            PAGEUP: 33,
		            PAGEDOWN: 34,
		            F2: 113,
		            F10: 121,
		            F12: 123,
		            NUMPAD_PLUS: 107,
		            NUMPAD_MINUS: 109,
		            NUMPAD_DOT: 110
		        },
		        support: kendo.support || support,
		        animate: kendo.animate || animate,
		        ns: "",
		        attr: function(value) {
		            return "data-" + kendo.ns + value;
		        },
		        getShadows: getShadows,
		        wrap: wrap,
		        deepExtend: deepExtend,
		        getComputedStyles: getComputedStyles,
		        webComponents: kendo.webComponents || [],
		        isScrollable: isScrollable,
		        scrollLeft: scrollLeft,
		        size: size,
		        toCamelCase: toCamelCase,
		        toHyphens: toHyphens,
		        getOffset: kendo.getOffset || getOffset,
		        parseEffects: kendo.parseEffects || parseEffects,
		        toggleClass: kendo.toggleClass || toggleClass,
		        directions: kendo.directions || directions,
		        Observable: Observable,
		        Class: Class,
		        Template: Template,
		        template: proxy(Template.compile, Template),
		        render: proxy(Template.render, Template),
		        stringify: proxy(JSON.stringify, JSON),
		        eventTarget: eventTarget,
		        htmlEncode: htmlEncode,
		        isLocalUrl: function(url) {
		            return url && !localUrlRe.test(url);
		        },

		        expr: function(expression, safe, paramName) {
		            expression = expression || "";

		            if (typeof safe == STRING) {
		                paramName = safe;
		                safe = false;
		            }

		            paramName = paramName || "d";

		            if (expression && expression.charAt(0) !== "[") {
		                expression = "." + expression;
		            }

		            if (safe) {
		                expression = expression.replace(/"([^.]*)\.([^"]*)"/g,'"$1_$DOT$_$2"');
		                expression = expression.replace(/'([^.]*)\.([^']*)'/g,"'$1_$DOT$_$2'");
		                expression = wrapExpression(expression.split("."), paramName);
		                expression = expression.replace(/_\$DOT\$_/g, ".");
		            } else {
		                expression = paramName + expression;
		            }

		            return expression;
		        },

		        getter: function(expression, safe) {
		            var key = expression + safe;
		            return getterCache[key] = getterCache[key] || new Function("d", "return " + kendo.expr(expression, safe));
		        },

		        setter: function(expression) {
		            return setterCache[expression] = setterCache[expression] || new Function("d,value", kendo.expr(expression) + "=value");
		        },

		        accessor: function(expression) {
		            return {
		                get: kendo.getter(expression),
		                set: kendo.setter(expression)
		            };
		        },

		        guid: function() {
		            var id = "", i, random;

		            for (i = 0; i < 32; i++) {
		                random = math.random() * 16 | 0;

		                if (i == 8 || i == 12 || i == 16 || i == 20) {
		                    id += "-";
		                }
		                id += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
		            }

		            return id;
		        },

		        roleSelector: function(role) {
		            return role.replace(/(\S+)/g, "[" + kendo.attr("role") + "=$1],").slice(0, -1);
		        },

		        directiveSelector: function(directives) {
		            var selectors = directives.split(" ");

		            if (selectors) {
		                for (var i = 0; i < selectors.length; i++) {
		                    if (selectors[i] != "view") {
		                        selectors[i] = selectors[i].replace(/(\w*)(view|bar|strip|over)$/, "$1-$2");
		                    }
		                }
		            }

		            return selectors.join(" ").replace(/(\S+)/g, "kendo-mobile-$1,").slice(0, -1);
		        },

		        triggeredByInput: function(e) {
		            return (/^(label|input|textarea|select)$/i).test(e.target.tagName);
		        },

		        onWidgetRegistered: function(callback) {
		            for (var i = 0, len = kendo.widgets.length; i < len; i++) {
		                callback(kendo.widgets[i]);
		            }

		            kendo._widgetRegisteredCallbacks.push(callback);
		        },

		        logToConsole: function(message, type) {
		            var console = window.console;

		            if (!kendo.suppressLog && typeof(console) != "undefined" && console.log) {
		                console[type || "log"](message);
		            }
		        }
		    });

		    var Widget = Observable.extend( {
		        init: function(element, options) {
		            var that = this;

		            that.element = kendo.jQuery(element).handler(that);

		            that.angular("init", options);

		            Observable.fn.init.call(that);

		            var dataSource = options ? options.dataSource : null;

		            if (dataSource) {
		                // avoid deep cloning the data source
		                options = extend({}, options, { dataSource: {} });
		            }

		            options = that.options = extend(true, {}, that.options, options);

		            if (dataSource) {
		                options.dataSource = dataSource;
		            }

		            if (!that.element.attr(kendo.attr("role"))) {
		                that.element.attr(kendo.attr("role"), (options.name || "").toLowerCase());
		            }

		            that.element.data("kendo" + options.prefix + options.name, that);

		            that.bind(that.events, options);
		        },

		        events: [],

		        options: {
		            prefix: ""
		        },

		        _hasBindingTarget: function() {
		            return !!this.element[0].kendoBindingTarget;
		        },

		        _tabindex: function(target) {
		            target = target || this.wrapper;

		            var element = this.element,
		                TABINDEX = "tabindex",
		                tabindex = target.attr(TABINDEX) || element.attr(TABINDEX);

		            element.removeAttr(TABINDEX);

		            target.attr(TABINDEX, !isNaN(tabindex) ? tabindex : 0);
		        },

		        setOptions: function(options) {
		            this._setEvents(options);
		            $.extend(this.options, options);
		        },

		        _setEvents: function(options) {
		            var that = this,
		                idx = 0,
		                length = that.events.length,
		                e;

		            for (; idx < length; idx ++) {
		                e = that.events[idx];
		                if (that.options[e] && options[e]) {
		                    that.unbind(e, that.options[e]);
		                }
		            }

		            that.bind(that.events, options);
		        },

		        resize: function(force) {
		            var size = this.getSize(),
		                currentSize = this._size;

		            if (force || (size.width > 0 || size.height > 0) && (!currentSize || size.width !== currentSize.width || size.height !== currentSize.height)) {
		                this._size = size;
		                this._resize(size, force);
		                this.trigger("resize", size);
		            }
		        },

		        getSize: function() {
		            return kendo.dimensions(this.element);
		        },

		        size: function(size) {
		            if (!size) {
		                return this.getSize();
		            } else {
		                this.setSize(size);
		            }
		        },

		        setSize: $.noop,
		        _resize: $.noop,

		        destroy: function() {
		            var that = this;

		            that.element.removeData("kendo" + that.options.prefix + that.options.name);
		            that.element.removeData("handler");
		            that.unbind();
		        },
		        _destroy: function() {
		            this.destroy();
		        },
		        angular: function(){},

		        _muteAngularRebind: function(callback) {
		            this._muteRebind = true;

		            callback.call(this);

		            this._muteRebind = false;
		        }
		    });

		    var DataBoundWidget = Widget.extend({
		        // Angular consumes these.
		        dataItems: function() {
		            return this.dataSource.flatView();
		        },

		        _angularItems: function(cmd) {
		            var that = this;
		            that.angular(cmd, function(){
		                return {
		                    elements: that.items(),
		                    data: $.map(that.dataItems(), function(dataItem){
		                        return { dataItem: dataItem };
		                    })
		                };
		            });
		        }
		    });

		    kendo.dimensions = function(element, dimensions) {
		        var domElement = element[0];

		        if (dimensions) {
		            element.css(dimensions);
		        }

		        return { width: domElement.offsetWidth, height: domElement.offsetHeight };
		    };

		    kendo.notify = noop;

		    var templateRegExp = /template$/i,
		        jsonRegExp = /^\s*(?:\{(?:.|\r\n|\n)*\}|\[(?:.|\r\n|\n)*\])\s*$/,
		        jsonFormatRegExp = /^\{(\d+)(:[^\}]+)?\}|^\[[A-Za-z_]*\]$/,
		        dashRegExp = /([A-Z])/g;

		    function parseOption(element, option) {
		        var value;

		        if (option.indexOf("data") === 0) {
		            option = option.substring(4);
		            option = option.charAt(0).toLowerCase() + option.substring(1);
		        }

		        option = option.replace(dashRegExp, "-$1");
		        value = element.getAttribute("data-" + kendo.ns + option);

		        if (value === null) {
		            value = undefined;
		        } else if (value === "null") {
		            value = null;
		        } else if (value === "true") {
		            value = true;
		        } else if (value === "false") {
		            value = false;
		        } else if (numberRegExp.test(value)) {
		            value = parseFloat(value);
		        } else if (jsonRegExp.test(value) && !jsonFormatRegExp.test(value)) {
		            value = new Function("return (" + value + ")")();
		        }

		        return value;
		    }

		    function parseOptions(element, options) {
		        var result = {},
		            option,
		            value;

		        for (option in options) {
		            value = parseOption(element, option);

		            if (value !== undefined) {

		                if (templateRegExp.test(option)) {
		                    value = kendo.template($("#" + value).html());
		                }

		                result[option] = value;
		            }
		        }

		        return result;
		    }

		    kendo.initWidget = function(element, options, roles) {
		        var result,
		            option,
		            widget,
		            idx,
		            length,
		            role,
		            value,
		            dataSource,
		            fullPath,
		            widgetKeyRegExp;

		        // Preserve backwards compatibility with (element, options, namespace) signature, where namespace was kendo.ui
		        if (!roles) {
		            roles = kendo.ui.roles;
		        } else if (roles.roles) {
		            roles = roles.roles;
		        }

		        element = element.nodeType ? element : element[0];

		        role = element.getAttribute("data-" + kendo.ns + "role");

		        if (!role) {
		            return;
		        }

		        fullPath = role.indexOf(".") === -1;

		        // look for any widget that may be already instantiated based on this role.
		        // The prefix used is unknown, hence the regexp
		        //

		        if (fullPath) {
		            widget = roles[role];
		        } else { // full namespace path - like kendo.ui.Widget
		            widget = kendo.getter(role)(window);
		        }

		        var data = $(element).data(),
		            widgetKey = widget ? "kendo" + widget.fn.options.prefix + widget.fn.options.name : "";

		        if (fullPath) {
		            widgetKeyRegExp = new RegExp("^kendo.*" + role + "$", "i");
		        } else { // full namespace path - like kendo.ui.Widget
		            widgetKeyRegExp = new RegExp("^" + widgetKey + "$", "i");
		        }

		        for(var key in data) {
		            if (key.match(widgetKeyRegExp)) {
		                // we have detected a widget of the same kind - save its reference, we will set its options
		                if (key === widgetKey) {
		                    result = data[key];
		                } else {
		                    return data[key];
		                }
		            }
		        }

		        if (!widget) {
		            return;
		        }

		        dataSource = parseOption(element, "dataSource");

		        options = $.extend({}, parseOptions(element, widget.fn.options), options);

		        if (dataSource) {
		            if (typeof dataSource === STRING) {
		                options.dataSource = kendo.getter(dataSource)(window);
		            } else {
		                options.dataSource = dataSource;
		            }
		        }

		        for (idx = 0, length = widget.fn.events.length; idx < length; idx++) {
		            option = widget.fn.events[idx];

		            value = parseOption(element, option);

		            if (value !== undefined) {
		                options[option] = kendo.getter(value)(window);
		            }
		        }

		        if (!result) {
		            result = new widget(element, options);
		        } else if (!$.isEmptyObject(options)) {
		            result.setOptions(options);
		        }

		        return result;
		    };

		    kendo.rolesFromNamespaces = function(namespaces) {
		        var roles = [],
		            idx,
		            length;

		        if (!namespaces[0]) {
		            namespaces = [kendo.ui, kendo.dataviz.ui];
		        }

		        for (idx = 0, length = namespaces.length; idx < length; idx ++) {
		            roles[idx] = namespaces[idx].roles;
		        }

		        return extend.apply(null, [{}].concat(roles.reverse()));
		    };

		    kendo.init = function(element) {
		        var roles = kendo.rolesFromNamespaces(slice.call(arguments, 1));

		        $(element).find("[data-" + kendo.ns + "role]").addBack().each(function(){
		            kendo.initWidget(this, {}, roles);
		        });
		    };

		    kendo.destroy = function(element) {
		        $(element).find("[data-" + kendo.ns + "role]").addBack().each(function(){
		            var data = $(this).data();

		            for (var key in data) {
		                if (key.indexOf("kendo") === 0 && typeof data[key].destroy === FUNCTION) {
		                    data[key].destroy();
		                }
		            }
		        });
		    };

		    function containmentComparer(a, b) {
		        return $.contains(a, b) ? -1 : 1;
		    }

		    function resizableWidget() {
		        var widget = $(this);
		        return ($.inArray(widget.attr("data-" + kendo.ns + "role"), ["slider", "rangeslider"]) > -1) || widget.is(":visible");
		    }

		    kendo.resize = function(element, force) {
		        var widgets = $(element).find("[data-" + kendo.ns + "role]").addBack().filter(resizableWidget);

		        if (!widgets.length) {
		            return;
		        }

		        // sort widgets based on their parent-child relation
		        var widgetsArray = $.makeArray(widgets);
		        widgetsArray.sort(containmentComparer);

		        // resize widgets
		        $.each(widgetsArray, function () {
		            var widget = kendo.widgetInstance($(this));
		            if (widget) {
		                widget.resize(force);
		            }
		        });
		    };

		    kendo.parseOptions = parseOptions;

		    extend(kendo.ui, {
		        Widget: Widget,
		        DataBoundWidget: DataBoundWidget,
		        roles: {},
		        progress: function(container, toggle) {
		            var mask = container.find(".k-loading-mask"),
		                support = kendo.support,
		                browser = support.browser,
		                isRtl, leftRight, webkitCorrection, containerScrollLeft;

		            if (toggle) {
		                if (!mask.length) {
		                    isRtl = support.isRtl(container);
		                    leftRight = isRtl ? "right" : "left";
		                    containerScrollLeft = container.scrollLeft();
		                    webkitCorrection = browser.webkit ? (!isRtl ? 0 : container[0].scrollWidth - container.width() - 2 * containerScrollLeft) : 0;

		                    mask = $("<div class='k-loading-mask'><span class='k-loading-text'>Loading...</span><div class='k-loading-image'/><div class='k-loading-color'/></div>")
		                        .width("100%").height("100%")
		                        .css("top", container.scrollTop())
		                        .css(leftRight, Math.abs(containerScrollLeft) + webkitCorrection)
		                        .prependTo(container);
		                }
		            } else if (mask) {
		                mask.remove();
		            }
		        },
		        plugin: function(widget, register, prefix) {
		            var name = widget.fn.options.name,
		                getter;

		            register = register || kendo.ui;
		            prefix = prefix || "";

		            register[name] = widget;

		            register.roles[name.toLowerCase()] = widget;

		            getter = "getKendo" + prefix + name;
		            name = "kendo" + prefix + name;

		            var widgetEntry = { name: name, widget: widget, prefix: prefix || "" };
		            kendo.widgets.push(widgetEntry);

		            for (var i = 0, len = kendo._widgetRegisteredCallbacks.length; i < len; i++) {
		                kendo._widgetRegisteredCallbacks[i](widgetEntry);
		            }

		            $.fn[name] = function(options) {
		                var value = this,
		                    args;

		                if (typeof options === STRING) {
		                    args = slice.call(arguments, 1);

		                    this.each(function(){
		                        var widget = $.data(this, name),
		                            method,
		                            result;

		                        if (!widget) {
		                            throw new Error(kendo.format("Cannot call method '{0}' of {1} before it is initialized", options, name));
		                        }

		                        method = widget[options];

		                        if (typeof method !== FUNCTION) {
		                            throw new Error(kendo.format("Cannot find method '{0}' of {1}", options, name));
		                        }

		                        result = method.apply(widget, args);

		                        if (result !== undefined) {
		                            value = result;
		                            return false;
		                        }
		                    });
		                } else {
		                    this.each(function() {
		                        return new widget(this, options);
		                    });
		                }

		                return value;
		            };

		            $.fn[name].widget = widget;

		            $.fn[getter] = function() {
		                return this.data(name);
		            };
		        }
		    });

		    var ContainerNullObject = { bind: function () { return this; }, nullObject: true, options: {} };

		    var MobileWidget = Widget.extend({
		        init: function(element, options) {
		            Widget.fn.init.call(this, element, options);
		            this.element.autoApplyNS();
		            this.wrapper = this.element;
		            this.element.addClass("km-widget");
		        },

		        destroy: function() {
		            Widget.fn.destroy.call(this);
		            this.element.kendoDestroy();
		        },

		        options: {
		            prefix: "Mobile"
		        },

		        events: [],

		        view: function() {
		            var viewElement = this.element.closest(kendo.roleSelector("view splitview modalview drawer"));
		            return kendo.widgetInstance(viewElement, kendo.mobile.ui) || ContainerNullObject;
		        },

		        viewHasNativeScrolling: function() {
		            var view = this.view();
		            return view && view.options.useNativeScrolling;
		        },

		        container: function() {
		            var element = this.element.closest(kendo.roleSelector("view layout modalview drawer splitview"));
		            return kendo.widgetInstance(element.eq(0), kendo.mobile.ui) || ContainerNullObject;
		        }
		    });

		    extend(kendo.mobile, {
		        init: function(element) {
		            kendo.init(element, kendo.mobile.ui, kendo.ui, kendo.dataviz.ui);
		        },

		        appLevelNativeScrolling: function() {
		            return kendo.mobile.application && kendo.mobile.application.options && kendo.mobile.application.options.useNativeScrolling;
		        },

		        roles: {},

		        ui: {
		            Widget: MobileWidget,
		            DataBoundWidget: DataBoundWidget.extend(MobileWidget.prototype),
		            roles: {},
		            plugin: function(widget) {
		                kendo.ui.plugin(widget, kendo.mobile.ui, "Mobile");
		            }
		        }
		    });

		    deepExtend(kendo.dataviz, {
		        init: function(element) {
		            kendo.init(element, kendo.dataviz.ui);
		        },
		        ui: {
		            roles: {},
		            themes: {},
		            views: [],
		            plugin: function(widget) {
		                kendo.ui.plugin(widget, kendo.dataviz.ui);
		            }
		        },
		        roles: {}
		    });

		    kendo.touchScroller = function(elements, options) {
		        // return the first touch scroller
		        if (!options){ options = {}; }

		        options.useNative = true;

		        return $(elements).map(function(idx, element) {
		            element = $(element);
		            if (support.kineticScrollNeeded && kendo.mobile.ui.Scroller && !element.data("kendoMobileScroller")) {
		                element.kendoMobileScroller(options);
		                return element.data("kendoMobileScroller");
		            } else {
		                return false;
		            }
		        })[0];
		    };

		    kendo.preventDefault = function(e) {
		        e.preventDefault();
		    };

		    kendo.widgetInstance = function(element, suites) {
		        var role = element.data(kendo.ns + "role"),
		            widgets = [], i, length;

		        if (role) {
		            // HACK!!! mobile view scroller widgets are instantiated on data-role="content" elements. We need to discover them when resizing.
		            if (role === "content") {
		                role = "scroller";
		            }

		            if (suites) {
		                if (suites[0]) {
		                    for (i = 0, length = suites.length; i < length; i ++) {
		                        widgets.push(suites[i].roles[role]);
		                    }
		                } else {
		                    widgets.push(suites.roles[role]);
		                }
		            }
		            else {
		                widgets = [ kendo.ui.roles[role], kendo.dataviz.ui.roles[role],  kendo.mobile.ui.roles[role] ];
		            }

		            if (role.indexOf(".") >= 0) {
		                widgets = [ kendo.getter(role)(window) ];
		            }

		            for (i = 0, length = widgets.length; i < length; i ++) {
		                var widget = widgets[i];
		                if (widget) {
		                    var instance = element.data("kendo" + widget.fn.options.prefix + widget.fn.options.name);
		                    if (instance) {
		                        return instance;
		                    }
		                }
		            }
		        }
		    };

		    kendo.onResize = function(callback) {
		        var handler = callback;
		        if (support.mobileOS.android) {
		            handler = function() { setTimeout(callback, 600); };
		        }

		        $(window).on(support.resize, handler);
		        return handler;
		    };

		    kendo.unbindResize = function(callback) {
		        $(window).off(support.resize, callback);
		    };

		    kendo.attrValue = function(element, key) {
		        return element.data(kendo.ns + key);
		    };

		    kendo.days = {
		        Sunday: 0,
		        Monday: 1,
		        Tuesday: 2,
		        Wednesday: 3,
		        Thursday: 4,
		        Friday: 5,
		        Saturday: 6
		    };

		    function focusable(element, isTabIndexNotNaN) {
		        var nodeName = element.nodeName.toLowerCase();

		        return (/input|select|textarea|button|object/.test(nodeName) ?
		                !element.disabled :
		                "a" === nodeName ?
		                element.href || isTabIndexNotNaN :
		                isTabIndexNotNaN
		               ) &&
		            visible(element);
		    }

		    function visible(element) {
		        return $.expr.filters.visible(element) &&
		            !$(element).parents().addBack().filter(function() {
		                return $.css(this,"visibility") === "hidden";
		            }).length;
		    }

		    $.extend($.expr[ ":" ], {
		        kendoFocusable: function(element) {
		            var idx = $.attr(element, "tabindex");
		            return focusable(element, !isNaN(idx) && idx > -1);
		        }
		    });

		    var MOUSE_EVENTS = ["mousedown", "mousemove", "mouseenter", "mouseleave", "mouseover", "mouseout", "mouseup", "click"];
		    var EXCLUDE_BUST_CLICK_SELECTOR = "label, input, [data-rel=external]";

		    var MouseEventNormalizer = {
		        setupMouseMute: function() {
		            var idx = 0,
		                length = MOUSE_EVENTS.length,
		                element = document.documentElement;

		            if (MouseEventNormalizer.mouseTrap || !support.eventCapture) {
		                return;
		            }

		            MouseEventNormalizer.mouseTrap = true;

		            MouseEventNormalizer.bustClick = false;
		            MouseEventNormalizer.captureMouse = false;

		            var handler = function(e) {
		                if (MouseEventNormalizer.captureMouse) {
		                    if (e.type === "click") {
		                        if (MouseEventNormalizer.bustClick && !$(e.target).is(EXCLUDE_BUST_CLICK_SELECTOR)) {
		                            e.preventDefault();
		                            e.stopPropagation();
		                        }
		                    } else {
		                        e.stopPropagation();
		                    }
		                }
		            };

		            for (; idx < length; idx++) {
		                element.addEventListener(MOUSE_EVENTS[idx], handler, true);
		            }
		        },

		        muteMouse: function(e) {
		            MouseEventNormalizer.captureMouse = true;
		            if (e.data.bustClick) {
		                MouseEventNormalizer.bustClick = true;
		            }
		            clearTimeout(MouseEventNormalizer.mouseTrapTimeoutID);
		        },

		        unMuteMouse: function() {
		            clearTimeout(MouseEventNormalizer.mouseTrapTimeoutID);
		            MouseEventNormalizer.mouseTrapTimeoutID = setTimeout(function() {
		                MouseEventNormalizer.captureMouse = false;
		                MouseEventNormalizer.bustClick = false;
		            }, 400);
		        }
		    };

		    var eventMap = {
		        down: "touchstart mousedown",
		        move: "mousemove touchmove",
		        up: "mouseup touchend touchcancel",
		        cancel: "mouseleave touchcancel"
		    };

		    if (support.touch && (support.mobileOS.ios || support.mobileOS.android)) {
		        eventMap = {
		            down: "touchstart",
		            move: "touchmove",
		            up: "touchend touchcancel",
		            cancel: "touchcancel"
		        };
		    } else if (support.pointers) {
		        eventMap = {
		            down: "pointerdown",
		            move: "pointermove",
		            up: "pointerup",
		            cancel: "pointercancel pointerleave"
		        };
		    } else if (support.msPointers) {
		        eventMap = {
		            down: "MSPointerDown",
		            move: "MSPointerMove",
		            up: "MSPointerUp",
		            cancel: "MSPointerCancel MSPointerLeave"
		        };
		    }

		    if (support.msPointers && !("onmspointerenter" in window)) { // IE10
		        // Create MSPointerEnter/MSPointerLeave events using mouseover/out and event-time checks
		        $.each({
		            MSPointerEnter: "MSPointerOver",
		            MSPointerLeave: "MSPointerOut"
		        }, function( orig, fix ) {
		            $.event.special[ orig ] = {
		                delegateType: fix,
		                bindType: fix,

		                handle: function( event ) {
		                    var ret,
		                        target = this,
		                        related = event.relatedTarget,
		                        handleObj = event.handleObj;

		                    // For mousenter/leave call the handler if related is outside the target.
		                    // NB: No relatedTarget if the mouse left/entered the browser window
		                    if ( !related || (related !== target && !$.contains( target, related )) ) {
		                        event.type = handleObj.origType;
		                        ret = handleObj.handler.apply( this, arguments );
		                        event.type = fix;
		                    }
		                    return ret;
		                }
		            };
		        });
		    }


		    var getEventMap = function(e) { return (eventMap[e] || e); },
		        eventRegEx = /([^ ]+)/g;

		    kendo.applyEventMap = function(events, ns) {
		        events = events.replace(eventRegEx, getEventMap);

		        if (ns) {
		            events = events.replace(eventRegEx, "$1." + ns);
		        }

		        return events;
		    };

		    var on = $.fn.on;

		    function kendoJQuery(selector, context) {
		        return new kendoJQuery.fn.init(selector, context);
		    }

		    extend(true, kendoJQuery, $);

		    kendoJQuery.fn = kendoJQuery.prototype = new $();

		    kendoJQuery.fn.constructor = kendoJQuery;

		    kendoJQuery.fn.init = function(selector, context) {
		        if (context && context instanceof $ && !(context instanceof kendoJQuery)) {
		            context = kendoJQuery(context);
		        }

		        return $.fn.init.call(this, selector, context, rootjQuery);
		    };

		    kendoJQuery.fn.init.prototype = kendoJQuery.fn;

		    var rootjQuery = kendoJQuery(document);

		    extend(kendoJQuery.fn, {
		        handler: function(handler) {
		            this.data("handler", handler);
		            return this;
		        },

		        autoApplyNS: function(ns) {
		            this.data("kendoNS", ns || kendo.guid());
		            return this;
		        },

		        on: function() {
		            var that = this,
		                ns = that.data("kendoNS");

		            // support for event map signature
		            if (arguments.length === 1) {
		                return on.call(that, arguments[0]);
		            }

		            var context = that,
		                args = slice.call(arguments);

		            if (typeof args[args.length -1] === UNDEFINED) {
		                args.pop();
		            }

		            var callback =  args[args.length - 1],
		                events = kendo.applyEventMap(args[0], ns);

		            // setup mouse trap
		            if (support.mouseAndTouchPresent && events.search(/mouse|click/) > -1 && this[0] !== document.documentElement) {
		                MouseEventNormalizer.setupMouseMute();

		                var selector = args.length === 2 ? null : args[1],
		                    bustClick = events.indexOf("click") > -1 && events.indexOf("touchend") > -1;

		                on.call(this,
		                    {
		                        touchstart: MouseEventNormalizer.muteMouse,
		                        touchend: MouseEventNormalizer.unMuteMouse
		                    },
		                    selector,
		                    {
		                        bustClick: bustClick
		                    });
		            }

		            if (typeof callback === STRING) {
		                context = that.data("handler");
		                callback = context[callback];

		                args[args.length - 1] = function(e) {
		                    callback.call(context, e);
		                };
		            }

		            args[0] = events;

		            on.apply(that, args);

		            return that;
		        },

		        kendoDestroy: function(ns) {
		            ns = ns || this.data("kendoNS");

		            if (ns) {
		                this.off("." + ns);
		            }

		            return this;
		        }
		    });

		    kendo.jQuery = kendoJQuery;
		    kendo.eventMap = eventMap;

		    kendo.timezone = (function(){
		        var months =  { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
		        var days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

		        function ruleToDate(year, rule) {
		            var date;
		            var targetDay;
		            var ourDay;
		            var month = rule[3];
		            var on = rule[4];
		            var time = rule[5];
		            var cache = rule[8];

		            if (!cache) {
		                rule[8] = cache = {};
		            }

		            if (cache[year]) {
		                return cache[year];
		            }

		            if (!isNaN(on)) {
		                date = new Date(Date.UTC(year, months[month], on, time[0], time[1], time[2], 0));
		            } else if (on.indexOf("last") === 0) {
		                date = new Date(Date.UTC(year, months[month] + 1, 1, time[0] - 24, time[1], time[2], 0));

		                targetDay = days[on.substr(4, 3)];
		                ourDay = date.getUTCDay();

		                date.setUTCDate(date.getUTCDate() + targetDay - ourDay - (targetDay > ourDay ? 7 : 0));
		            } else if (on.indexOf(">=") >= 0) {
		                date = new Date(Date.UTC(year, months[month], on.substr(5), time[0], time[1], time[2], 0));

		                targetDay = days[on.substr(0, 3)];
		                ourDay = date.getUTCDay();

		                date.setUTCDate(date.getUTCDate() + targetDay - ourDay + (targetDay < ourDay ? 7 : 0));
		            }

		            return cache[year] = date;
		        }

		        function findRule(utcTime, rules, zone) {
		            rules = rules[zone];

		            if (!rules) {
		                var time = zone.split(":");
		                var offset = 0;

		                if (time.length > 1) {
		                    offset = time[0] * 60 + Number(time[1]);
		                }

		                return [-1000000, 'max', '-', 'Jan', 1, [0, 0, 0], offset, '-'];
		            }

		            var year = new Date(utcTime).getUTCFullYear();

		            rules = jQuery.grep(rules, function(rule) {
		                var from = rule[0];
		                var to = rule[1];

		                return from <= year && (to >= year || (from == year && to == "only") || to == "max");
		            });

		            rules.push(utcTime);

		            rules.sort(function(a, b) {
		                if (typeof a != "number") {
		                    a = Number(ruleToDate(year, a));
		                }

		                if (typeof b != "number") {
		                    b = Number(ruleToDate(year, b));
		                }

		                return a - b;
		            });

		            var rule = rules[jQuery.inArray(utcTime, rules) - 1] || rules[rules.length - 1];

		            return isNaN(rule) ? rule : null;
		        }

		        function findZone(utcTime, zones, timezone) {
		            var zoneRules = zones[timezone];

		            if (typeof zoneRules === "string") {
		                zoneRules = zones[zoneRules];
		            }

		            if (!zoneRules) {
		                throw new Error('Timezone "' + timezone + '" is either incorrect, or kendo.timezones.min.js is not included.');
		            }

		            for (var idx = zoneRules.length - 1; idx >= 0; idx--) {
		                var until = zoneRules[idx][3];

		                if (until && utcTime > until) {
		                    break;
		                }
		            }

		            var zone = zoneRules[idx + 1];

		            if (!zone) {
		                throw new Error('Timezone "' + timezone + '" not found on ' + utcTime + ".");
		            }

		            return zone;
		        }

		        function zoneAndRule(utcTime, zones, rules, timezone) {
		            if (typeof utcTime != NUMBER) {
		                utcTime = Date.UTC(utcTime.getFullYear(), utcTime.getMonth(),
		                    utcTime.getDate(), utcTime.getHours(), utcTime.getMinutes(),
		                    utcTime.getSeconds(), utcTime.getMilliseconds());
		            }

		            var zone = findZone(utcTime, zones, timezone);

		            return {
		                zone: zone,
		                rule: findRule(utcTime, rules, zone[1])
		            };
		        }

		        function offset(utcTime, timezone) {
		            if (timezone == "Etc/UTC" || timezone == "Etc/GMT") {
		                return 0;
		            }

		            var info = zoneAndRule(utcTime, this.zones, this.rules, timezone);
		            var zone = info.zone;
		            var rule = info.rule;

		            return kendo.parseFloat(rule? zone[0] - rule[6] : zone[0]);
		        }

		        function abbr(utcTime, timezone) {
		            var info = zoneAndRule(utcTime, this.zones, this.rules, timezone);
		            var zone = info.zone;
		            var rule = info.rule;

		            var base = zone[2];

		            if (base.indexOf("/") >= 0) {
		                return base.split("/")[rule && +rule[6] ? 1 : 0];
		            } else if (base.indexOf("%s") >= 0) {
		                return base.replace("%s", (!rule || rule[7] == "-") ? '' : rule[7]);
		            }

		            return base;
		        }

		        function convert(date, fromOffset, toOffset) {
		            if (typeof fromOffset == STRING) {
		                fromOffset = this.offset(date, fromOffset);
		            }

		            if (typeof toOffset == STRING) {
		                toOffset = this.offset(date, toOffset);
		            }

		            var fromLocalOffset = date.getTimezoneOffset();

		            date = new Date(date.getTime() + (fromOffset - toOffset) * 60000);

		            var toLocalOffset = date.getTimezoneOffset();

		            return new Date(date.getTime() + (toLocalOffset - fromLocalOffset) * 60000);
		        }

		        function apply(date, timezone) {
		           return this.convert(date, date.getTimezoneOffset(), timezone);
		        }

		        function remove(date, timezone) {
		           return this.convert(date, timezone, date.getTimezoneOffset());
		        }

		        function toLocalDate(time) {
		            return this.apply(new Date(time), "Etc/UTC");
		        }

		        return {
		           zones: {},
		           rules: {},
		           offset: offset,
		           convert: convert,
		           apply: apply,
		           remove: remove,
		           abbr: abbr,
		           toLocalDate: toLocalDate
		        };
		    })();

		    kendo.date = (function(){
		        var MS_PER_MINUTE = 60000,
		            MS_PER_DAY = 86400000;

		        function adjustDST(date, hours) {
		            if (hours === 0 && date.getHours() === 23) {
		                date.setHours(date.getHours() + 2);
		                return true;
		            }

		            return false;
		        }

		        function setDayOfWeek(date, day, dir) {
		            var hours = date.getHours();

		            dir = dir || 1;
		            day = ((day - date.getDay()) + (7 * dir)) % 7;

		            date.setDate(date.getDate() + day);
		            adjustDST(date, hours);
		        }

		        function dayOfWeek(date, day, dir) {
		            date = new Date(date);
		            setDayOfWeek(date, day, dir);
		            return date;
		        }

		        function firstDayOfMonth(date) {
		            return new Date(
		                date.getFullYear(),
		                date.getMonth(),
		                1
		            );
		        }

		        function lastDayOfMonth(date) {
		            var last = new Date(date.getFullYear(), date.getMonth() + 1, 0),
		                first = firstDayOfMonth(date),
		                timeOffset = Math.abs(last.getTimezoneOffset() - first.getTimezoneOffset());

		            if (timeOffset) {
		                last.setHours(first.getHours() + (timeOffset / 60));
		            }

		            return last;
		        }

		        function getDate(date) {
		            date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
		            adjustDST(date, 0);
		            return date;
		        }

		        function toUtcTime(date) {
		            return Date.UTC(date.getFullYear(), date.getMonth(),
		                        date.getDate(), date.getHours(), date.getMinutes(),
		                        date.getSeconds(), date.getMilliseconds());
		        }

		        function getMilliseconds(date) {
		            return date.getTime() - getDate(date);
		        }

		        function isInTimeRange(value, min, max) {
		            var msMin = getMilliseconds(min),
		                msMax = getMilliseconds(max),
		                msValue;

		            if (!value || msMin == msMax) {
		                return true;
		            }

		            if (min >= max) {
		                max += MS_PER_DAY;
		            }

		            msValue = getMilliseconds(value);

		            if (msMin > msValue) {
		                msValue += MS_PER_DAY;
		            }

		            if (msMax < msMin) {
		                msMax += MS_PER_DAY;
		            }

		            return msValue >= msMin && msValue <= msMax;
		        }

		        function isInDateRange(value, min, max) {
		            var msMin = min.getTime(),
		                msMax = max.getTime(),
		                msValue;

		            if (msMin >= msMax) {
		                msMax += MS_PER_DAY;
		            }

		            msValue = value.getTime();

		            return msValue >= msMin && msValue <= msMax;
		        }

		        function addDays(date, offset) {
		            var hours = date.getHours();
		                date = new Date(date);

		            setTime(date, offset * MS_PER_DAY);
		            adjustDST(date, hours);
		            return date;
		        }

		        function setTime(date, milliseconds, ignoreDST) {
		            var offset = date.getTimezoneOffset();
		            var difference;

		            date.setTime(date.getTime() + milliseconds);

		            if (!ignoreDST) {
		                difference = date.getTimezoneOffset() - offset;
		                date.setTime(date.getTime() + difference * MS_PER_MINUTE);
		            }
		        }

		        function setHours(date, time) {
		            date = new Date(kendo.date.getDate(date).getTime() + kendo.date.getMilliseconds(time));
		            adjustDST(date, time.getHours());
		            return date;
		        }

		        function today() {
		            return getDate(new Date());
		        }

		        function isToday(date) {
		           return getDate(date).getTime() == today().getTime();
		        }

		        function toInvariantTime(date) {
		            var staticDate = new Date(1980, 1, 1, 0, 0, 0);

		            if (date) {
		                staticDate.setHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
		            }

		            return staticDate;
		        }

		        return {
		            adjustDST: adjustDST,
		            dayOfWeek: dayOfWeek,
		            setDayOfWeek: setDayOfWeek,
		            getDate: getDate,
		            isInDateRange: isInDateRange,
		            isInTimeRange: isInTimeRange,
		            isToday: isToday,
		            nextDay: function(date) {
		                return addDays(date, 1);
		            },
		            previousDay: function(date) {
		                return addDays(date, -1);
		            },
		            toUtcTime: toUtcTime,
		            MS_PER_DAY: MS_PER_DAY,
		            MS_PER_HOUR: 60 * MS_PER_MINUTE,
		            MS_PER_MINUTE: MS_PER_MINUTE,
		            setTime: setTime,
		            setHours: setHours,
		            addDays: addDays,
		            today: today,
		            toInvariantTime: toInvariantTime,
		            firstDayOfMonth: firstDayOfMonth,
		            lastDayOfMonth: lastDayOfMonth,
		            getMilliseconds: getMilliseconds
		        };
		    })();


		    kendo.stripWhitespace = function(element) {
		        if (document.createNodeIterator) {
		            var iterator = document.createNodeIterator(element, NodeFilter.SHOW_TEXT, function(node) {
		                    return node.parentNode == element ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
		                }, false);

		            while (iterator.nextNode()) {
		                if (iterator.referenceNode && !iterator.referenceNode.textContent.trim()) {
		                    iterator.referenceNode.parentNode.removeChild(iterator.referenceNode);
		                }
		            }
		        } else { // IE7/8 support
		            for (var i = 0; i < element.childNodes.length; i++) {
		                var child = element.childNodes[i];

		                if (child.nodeType == 3 && !/\S/.test(child.nodeValue)) {
		                    element.removeChild(child);
		                    i--;
		                }

		                if (child.nodeType == 1) {
		                    kendo.stripWhitespace(child);
		                }
		            }
		        }
		    };

		    var animationFrame  = window.requestAnimationFrame       ||
		                          window.webkitRequestAnimationFrame ||
		                          window.mozRequestAnimationFrame    ||
		                          window.oRequestAnimationFrame      ||
		                          window.msRequestAnimationFrame     ||
		                          function(callback){ setTimeout(callback, 1000 / 60); };

		    kendo.animationFrame = function(callback) {
		        animationFrame.call(window, callback);
		    };

		    var animationQueue = [];

		    kendo.queueAnimation = function(callback) {
		        animationQueue[animationQueue.length] = callback;
		        if (animationQueue.length === 1) {
		            kendo.runNextAnimation();
		        }
		    };

		    kendo.runNextAnimation = function() {
		        kendo.animationFrame(function() {
		            if (animationQueue[0]) {
		                animationQueue.shift()();
		                if (animationQueue[0]) {
		                    kendo.runNextAnimation();
		                }
		            }
		        });
		    };

		    kendo.parseQueryStringParams = function(url) {
		        var queryString = url.split('?')[1] || "",
		            params = {},
		            paramParts = queryString.split(/&|=/),
		            length = paramParts.length,
		            idx = 0;

		        for (; idx < length; idx += 2) {
		            if(paramParts[idx] !== "") {
		                params[decodeURIComponent(paramParts[idx])] = decodeURIComponent(paramParts[idx + 1]);
		            }
		        }

		        return params;
		    };

		    kendo.elementUnderCursor = function(e) {
		        if (typeof e.x.client != "undefined") {
		            return document.elementFromPoint(e.x.client, e.y.client);
		        }
		    };

		    kendo.wheelDeltaY = function(jQueryEvent) {
		        var e = jQueryEvent.originalEvent,
		            deltaY = e.wheelDeltaY,
		            delta;

		            if (e.wheelDelta) { // Webkit and IE
		                if (deltaY === undefined || deltaY) { // IE does not have deltaY, thus always scroll (horizontal scrolling is treated as vertical)
		                    delta = e.wheelDelta;
		                }
		            } else if (e.detail && e.axis === e.VERTICAL_AXIS) { // Firefox and Opera
		                delta = (-e.detail) * 10;
		            }

		        return delta;
		    };

		    kendo.throttle = function(fn, delay) {
		        var timeout;
		        var lastExecTime = 0;

		        if (!delay || delay <= 0) {
		            return fn;
		        }

		        var throttled = function() {
		            var that = this;
		            var elapsed = +new Date() - lastExecTime;
		            var args = arguments;

		            function exec() {
		                fn.apply(that, args);
		                lastExecTime = +new Date();
		            }

		            // first execution
		            if (!lastExecTime) {
		                return exec();
		            }

		            if (timeout) {
		                clearTimeout(timeout);
		            }

		            if (elapsed > delay) {
		                exec();
		            } else {
		                timeout = setTimeout(exec, delay - elapsed);
		            }
		        };

		        throttled.cancel = function() {
		            clearTimeout(timeout);
		        };

		        return throttled;
		    };


		    kendo.caret = function (element, start, end) {
		        var rangeElement;
		        var isPosition = start !== undefined;

		        if (end === undefined) {
		            end = start;
		        }

		        if (element[0]) {
		            element = element[0];
		        }

		        if (isPosition && element.disabled) {
		            return;
		        }

		        try {
		            if (element.selectionStart !== undefined) {
		                if (isPosition) {
		                    element.focus();
		                    element.setSelectionRange(start, end);
		                } else {
		                    start = [element.selectionStart, element.selectionEnd];
		                }
		            } else if (document.selection) {
		                if ($(element).is(":visible")) {
		                    element.focus();
		                }

		                rangeElement = element.createTextRange();

		                if (isPosition) {
		                    rangeElement.collapse(true);
		                    rangeElement.moveStart("character", start);
		                    rangeElement.moveEnd("character", end - start);
		                    rangeElement.select();
		                } else {
		                    var rangeDuplicated = rangeElement.duplicate(),
		                        selectionStart, selectionEnd;

		                        rangeElement.moveToBookmark(document.selection.createRange().getBookmark());
		                        rangeDuplicated.setEndPoint('EndToStart', rangeElement);
		                        selectionStart = rangeDuplicated.text.length;
		                        selectionEnd = selectionStart + rangeElement.text.length;

		                    start = [selectionStart, selectionEnd];
		                }
		            }
		        } catch(e) {
		            /* element is not focused or it is not in the DOM */
		            start = [];
		        }

		        return start;
		    };

		    kendo.compileMobileDirective = function(element, scope) {
		        var angular = window.angular;

		        element.attr("data-" + kendo.ns + "role", element[0].tagName.toLowerCase().replace('kendo-mobile-', '').replace('-', ''));

		        angular.element(element).injector().invoke(["$compile", function($compile) {
		            $compile(element)(scope);

		            if (!/^\$(digest|apply)$/.test(scope.$$phase)) {
		                scope.$digest();
		            }
		        }]);

		        return kendo.widgetInstance(element, kendo.mobile.ui);
		    };

		    kendo.antiForgeryTokens = function() {
		        var tokens = { },
		            csrf_token = $("meta[name=csrf-token],meta[name=_csrf]").attr("content"),
		            csrf_param = $("meta[name=csrf-param],meta[name=_csrf_header]").attr("content");

		        $("input[name^='__RequestVerificationToken']").each(function() {
		            tokens[this.name] = this.value;
		        });

		        if (csrf_param !== undefined && csrf_token !== undefined) {
		          tokens[csrf_param] = csrf_token;
		        }

		        return tokens;
		    };

		    kendo.cycleForm = function(form) {
		        var firstElement = form.find("input, .k-widget").first();
		        var lastElement = form.find("button, .k-button").last();

		        function focus(el) {
		            var widget = kendo.widgetInstance(el);

		            if (widget && widget.focus) {
		              widget.focus();
		            } else {
		              el.focus();
		            }
		        }

		        lastElement.on("keydown", function(e) {
		          if (e.keyCode == kendo.keys.TAB && !e.shiftKey) {
		            e.preventDefault();
		            focus(firstElement);
		          }
		        });

		        firstElement.on("keydown", function(e) {
		          if (e.keyCode == kendo.keys.TAB && e.shiftKey) {
		            e.preventDefault();
		            focus(lastElement);
		          }
		        });
		    };

		    // kendo.saveAs -----------------------------------------------
		    (function() {
		        function postToProxy(dataURI, fileName, proxyURL, proxyTarget) {
		            var form = $("<form>").attr({
		                action: proxyURL,
		                method: "POST",
		                target: proxyTarget
		            });

		            var data = kendo.antiForgeryTokens();
		            data.fileName = fileName;

		            var parts = dataURI.split(";base64,");
		            data.contentType = parts[0].replace("data:", "");
		            data.base64 = parts[1];

		            for (var name in data) {
		                if (data.hasOwnProperty(name)) {
		                    $('<input>').attr({
		                        value: data[name],
		                        name: name,
		                        type: "hidden"
		                    }).appendTo(form);
		                }
		            }

		            form.appendTo("body").submit().remove();
		        }

		        var fileSaver = document.createElement("a");
		        var downloadAttribute = "download" in fileSaver && !kendo.support.browser.edge;

		        function saveAsBlob(dataURI, fileName) {
		            var blob = dataURI; // could be a Blob object

		            if (typeof dataURI == "string") {
		                var parts = dataURI.split(";base64,");
		                var contentType = parts[0];
		                var base64 = atob(parts[1]);
		                var array = new Uint8Array(base64.length);

		                for (var idx = 0; idx < base64.length; idx++) {
		                    array[idx] = base64.charCodeAt(idx);
		                }
		                blob = new Blob([array.buffer], { type: contentType });
		            }

		            navigator.msSaveBlob(blob, fileName);
		        }

		        function saveAsDataURI(dataURI, fileName) {
		            if (window.Blob && dataURI instanceof Blob) {
		                dataURI = URL.createObjectURL(dataURI);
		            }

		            fileSaver.download = fileName;
		            fileSaver.href = dataURI;

		            var e = document.createEvent("MouseEvents");
		            e.initMouseEvent("click", true, false, window,
		                0, 0, 0, 0, 0, false, false, false, false, 0, null);

		            fileSaver.dispatchEvent(e);
		            setTimeout(function(){
		                URL.revokeObjectURL(dataURI);
		            });
		        }

		        kendo.saveAs = function(options) {
		            var save = postToProxy;

		            if (!options.forceProxy) {
		                if (downloadAttribute) {
		                    save = saveAsDataURI;
		                } else if (navigator.msSaveBlob) {
		                    save = saveAsBlob;
		                }
		            }

		            save(options.dataURI, options.fileName, options.proxyURL, options.proxyTarget);
		        };
		    })();

		    // kendo proxySetters
		    kendo.proxyModelSetters = function proxyModelSetters(data) {
		        var observable = {};

		        Object.keys(data || {}).forEach(function(property) {
		          Object.defineProperty(observable, property, {
		            get: function() {
		              return data[property];
		            },
		            set: function(value) {
		              data[property] = value;
		              data.dirty = true;
		            }
		          });
		        });

		        return observable;
		    };

		})(jQuery, window);

		return window.kendo;

		}, __webpack_require__(422));

		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(420)))

	/***/ }

	/******/ });

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ({

	/***/ 0:
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(443);


	/***/ },

	/***/ 421:
	/***/ function(module, exports) {

		module.exports = __webpack_require__(6);

	/***/ },

	/***/ 422:
	/***/ function(module, exports) {

		module.exports = function() { throw new Error("define cannot be used indirect"); };


	/***/ },

	/***/ 443:
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
		    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(421) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		})(function(){

		var __meta__ = { // jshint ignore:line
		    id: "data.odata",
		    name: "OData",
		    category: "framework",
		    depends: [ "core" ],
		    hidden: true
		};

		(function($, undefined) {
		    var kendo = window.kendo,
		        extend = $.extend,
		        odataFilters = {
		            eq: "eq",
		            neq: "ne",
		            gt: "gt",
		            gte: "ge",
		            lt: "lt",
		            lte: "le",
		            contains : "substringof",
		            doesnotcontain: "substringof",
		            endswith: "endswith",
		            startswith: "startswith",
		            isnull: "eq",
		            isnotnull: "ne",
		            isempty: "eq",
		            isnotempty: "ne"
		        },
		        odataFiltersVersionFour = extend({}, odataFilters, {
		            contains: "contains"
		        }),
		        mappers = {
		            pageSize: $.noop,
		            page: $.noop,
		            filter: function(params, filter, useVersionFour) {
		                if (filter) {
		                    filter = toOdataFilter(filter, useVersionFour);
		                    if (filter) {
		                        params.$filter = filter;
		                    }
		                }
		            },
		            sort: function(params, orderby) {
		                var expr = $.map(orderby, function(value) {
		                    var order = value.field.replace(/\./g, "/");

		                    if (value.dir === "desc") {
		                        order += " desc";
		                    }

		                    return order;
		                }).join(",");

		                if (expr) {
		                    params.$orderby = expr;
		                }
		            },
		            skip: function(params, skip) {
		                if (skip) {
		                    params.$skip = skip;
		                }
		            },
		            take: function(params, take) {
		                if (take) {
		                    params.$top = take;
		                }
		            }
		        },
		        defaultDataType = {
		            read: {
		                dataType: "jsonp"
		            }
		        };

		    function toOdataFilter(filter, useOdataFour) {
		        var result = [],
		            logic = filter.logic || "and",
		            idx,
		            length,
		            field,
		            type,
		            format,
		            operator,
		            value,
		            ignoreCase,
		            filters = filter.filters;

		        for (idx = 0, length = filters.length; idx < length; idx++) {
		            filter = filters[idx];
		            field = filter.field;
		            value = filter.value;
		            operator = filter.operator;

		            if (filter.filters) {
		                filter = toOdataFilter(filter, useOdataFour);
		            } else {
		                ignoreCase = filter.ignoreCase;
		                field = field.replace(/\./g, "/");
		                filter = odataFilters[operator];
		                if (useOdataFour) {
		                    filter = odataFiltersVersionFour[operator];
		                }

		                if (operator === "isnull" || operator === "isnotnull") {
		                    filter = kendo.format("{0} {1} null", field, filter);
		                } else if (operator === "isempty" || operator === "isnotempty") {
		                    filter = kendo.format("{0} {1} ''", field, filter);
		                } else if (filter && value !== undefined) {
		                    type = $.type(value);
		                    if (type === "string") {
		                        format = "'{1}'";
		                        value = value.replace(/'/g, "''");

		                        if (ignoreCase === true) {
		                            field = "tolower(" + field + ")";
		                        }

		                    } else if (type === "date") {
		                        if (useOdataFour) {
		                            format = "{1:yyyy-MM-ddTHH:mm:ss+00:00}";
		                        } else {
		                            format = "datetime'{1:yyyy-MM-ddTHH:mm:ss}'";
		                        }
		                    } else {
		                        format = "{1}";
		                    }

		                    if (filter.length > 3) {
		                        if (filter !== "substringof") {
		                            format = "{0}({2}," + format + ")";
		                        } else {
		                            format = "{0}(" + format + ",{2})";
		                            if (operator === "doesnotcontain") {
		                                if (useOdataFour) {
		                                    format = "{0}({2},'{1}') eq -1";
		                                    filter = "indexof";
		                                } else {
		                                    format += " eq false";
		                                }
		                            }
		                        }
		                    } else {
		                        format = "{2} {0} " + format;
		                    }

		                    filter = kendo.format(format, filter, value, field);
		                }
		            }

		            result.push(filter);
		        }

		        filter = result.join(" " + logic + " ");

		        if (result.length > 1) {
		            filter = "(" + filter + ")";
		        }

		        return filter;
		    }

		    function stripMetadata(obj) {
		        for (var name in obj) {
		            if(name.indexOf("@odata") === 0) {
		                delete obj[name];
		            }
		        }
		    }

		    extend(true, kendo.data, {
		        schemas: {
		            odata: {
		                type: "json",
		                data: function(data) {
		                    return data.d.results || [data.d];
		                },
		                total: "d.__count"
		            }
		        },
		        transports: {
		            odata: {
		                read: {
		                    cache: true, // to prevent jQuery from adding cache buster
		                    dataType: "jsonp",
		                    jsonp: "$callback"
		                },
		                update: {
		                    cache: true,
		                    dataType: "json",
		                    contentType: "application/json", // to inform the server the the request body is JSON encoded
		                    type: "PUT" // can be PUT or MERGE
		                },
		                create: {
		                    cache: true,
		                    dataType: "json",
		                    contentType: "application/json",
		                    type: "POST" // must be POST to create new entity
		                },
		                destroy: {
		                    cache: true,
		                    dataType: "json",
		                    type: "DELETE"
		                },
		                parameterMap: function(options, type, useVersionFour) {
		                    var params,
		                        value,
		                        option,
		                        dataType;

		                    options = options || {};
		                    type = type || "read";
		                    dataType = (this.options || defaultDataType)[type];
		                    dataType = dataType ? dataType.dataType : "json";

		                    if (type === "read") {
		                        params = {
		                            $inlinecount: "allpages"
		                        };

		                        if (dataType != "json") {
		                            params.$format = "json";
		                        }

		                        for (option in options) {
		                            if (mappers[option]) {
		                                mappers[option](params, options[option], useVersionFour);
		                            } else {
		                                params[option] = options[option];
		                            }
		                        }
		                    } else {
		                        if (dataType !== "json") {
		                            throw new Error("Only json dataType can be used for " + type + " operation.");
		                        }

		                        if (type !== "destroy") {
		                            for (option in options) {
		                                value = options[option];
		                                if (typeof value === "number") {
		                                    options[option] = value + "";
		                                }
		                            }

		                            params = kendo.stringify(options);
		                        }
		                    }

		                    return params;
		                }
		            }
		        }
		    });

		    extend(true, kendo.data, {
		        schemas: {
		            "odata-v4": {
		                type: "json",
		                data: function(data) {
		                    data = $.extend({}, data);
		                    stripMetadata(data);

		                    if (data.value) {
		                        return data.value;
		                    }
		                    return [data];
		                },
		                total: function(data) {
		                    return data["@odata.count"];
		                }
		            }
		        },
		        transports: {
		            "odata-v4": {
		                read: {
		                    cache: true, // to prevent jQuery from adding cache buster
		                    dataType: "json"
		                },
		                update: {
		                    cache: true,
		                    dataType: "json",
		                    contentType: "application/json;IEEE754Compatible=true", // to inform the server the the request body is JSON encoded
		                    type: "PUT" // can be PUT or MERGE
		                },
		                create: {
		                    cache: true,
		                    dataType: "json",
		                    contentType: "application/json;IEEE754Compatible=true",
		                    type: "POST" // must be POST to create new entity
		                },
		                destroy: {
		                    cache: true,
		                    dataType: "json",
		                    type: "DELETE"
		                },
		                parameterMap: function(options, type) {
		                    var result = kendo.data.transports.odata.parameterMap(options, type, true);
		                    if (type == "read") {
		                        result.$count = true;
		                        delete result.$inlinecount;
		                    }

		                    return result;
		                }
		            }
		        }
		    });

		})(window.kendo.jQuery);

		return window.kendo;

		}, __webpack_require__(422));


	/***/ }

	/******/ });

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ({

	/***/ 0:
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(445);


	/***/ },

	/***/ 421:
	/***/ function(module, exports) {

		module.exports = __webpack_require__(6);

	/***/ },

	/***/ 422:
	/***/ function(module, exports) {

		module.exports = function() { throw new Error("define cannot be used indirect"); };


	/***/ },

	/***/ 445:
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
		    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(421) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		})(function(){

		var __meta__ = { // jshint ignore:line
		    id: "data.xml",
		    name: "XML",
		    category: "framework",
		    depends: [ "core" ],
		    hidden: true
		};

		/*jshint  eqnull: true, boss: true */
		(function($, undefined) {
		    var kendo = window.kendo,
		        isArray = $.isArray,
		        isPlainObject = $.isPlainObject,
		        map = $.map,
		        each = $.each,
		        extend = $.extend,
		        getter = kendo.getter,
		        Class = kendo.Class;

		    var XmlDataReader = Class.extend({
		        init: function(options) {
		            var that = this,
		                total = options.total,
		                model = options.model,
		                parse = options.parse,
		                errors = options.errors,
		                serialize = options.serialize,
		                data = options.data;

		            if (model) {
		                if (isPlainObject(model)) {
		                    var base = options.modelBase || kendo.data.Model;

		                    if (model.fields) {
		                        each(model.fields, function(field, value) {
		                            if (isPlainObject(value) && value.field) {
		                                if (!$.isFunction(value.field)) {
		                                    value = extend(value, { field: that.getter(value.field) });
		                                }
		                            } else {
		                                value = { field: that.getter(value) };
		                            }
		                            model.fields[field] = value;
		                        });
		                    }

		                    var id = model.id;
		                    if (id) {
		                        var idField = {};

		                        idField[that.xpathToMember(id, true)] = { field : that.getter(id) };
		                        model.fields = extend(idField, model.fields);
		                        model.id = that.xpathToMember(id);
		                    }
		                    model = base.define(model);
		                }

		                that.model = model;
		            }

		            if (total) {
		                if (typeof total == "string") {
		                    total = that.getter(total);
		                    that.total = function(data) {
		                        return parseInt(total(data), 10);
		                    };
		                } else if (typeof total == "function"){
		                    that.total = total;
		                }
		            }

		            if (errors) {
		                if (typeof errors == "string") {
		                    errors = that.getter(errors);
		                    that.errors = function(data) {
		                        return errors(data) || null;
		                    };
		                } else if (typeof errors == "function"){
		                    that.errors = errors;
		                }
		            }

		            if (data) {
		                if (typeof data == "string") {
		                    data = that.xpathToMember(data);
		                    that.data = function(value) {
		                        var result = that.evaluate(value, data),
		                            modelInstance;

		                        result = isArray(result) ? result : [result];

		                        if (that.model && model.fields) {
		                            modelInstance = new that.model();

		                            return map(result, function(value) {
		                                if (value) {
		                                    var record = {}, field;

		                                    for (field in model.fields) {
		                                        record[field] = modelInstance._parse(field, model.fields[field].field(value));
		                                    }

		                                    return record;
		                                }
		                            });
		                        }

		                        return result;
		                    };
		                } else if (typeof data == "function") {
		                    that.data = data;
		                }
		            }

		            if (typeof parse == "function") {
		                var xmlParse = that.parse;

		                that.parse = function(data) {
		                    var xml = parse.call(that, data);
		                    return xmlParse.call(that, xml);
		                };
		            }

		            if (typeof serialize == "function") {
		                that.serialize = serialize;
		            }
		        },
		        total: function(result) {
		            return this.data(result).length;
		        },
		        errors: function(data) {
		            return data ? data.errors : null;
		        },
		        serialize: function(data) {
		            return data;
		        },
		        parseDOM: function(element) {
		            var result = {},
		                parsedNode,
		                node,
		                nodeType,
		                nodeName,
		                member,
		                attribute,
		                attributes = element.attributes,
		                attributeCount = attributes.length,
		                idx;

		            for (idx = 0; idx < attributeCount; idx++) {
		                attribute = attributes[idx];
		                result["@" + attribute.nodeName] = attribute.nodeValue;
		            }

		            for (node = element.firstChild; node; node = node.nextSibling) {
		                nodeType = node.nodeType;

		                if (nodeType === 3 || nodeType === 4) {
		                    // text nodes or CDATA are stored as #text field
		                    result["#text"] = node.nodeValue;
		                } else if (nodeType === 1) {
		                    // elements are stored as fields
		                    parsedNode = this.parseDOM(node);

		                    nodeName = node.nodeName;

		                    member = result[nodeName];

		                    if (isArray(member)) {
		                        // elements of same nodeName are stored as array
		                        member.push(parsedNode);
		                    } else if (member !== undefined) {
		                        member = [member, parsedNode];
		                    } else {
		                        member = parsedNode;
		                    }

		                    result[nodeName] = member;
		                }
		            }
		            return result;
		        },

		        evaluate: function(value, expression) {
		            var members = expression.split("."),
		                member,
		                result,
		                length,
		                intermediateResult,
		                idx;

		            while (member = members.shift()) {
		                value = value[member];

		                if (isArray(value)) {
		                    result = [];
		                    expression = members.join(".");

		                    for (idx = 0, length = value.length; idx < length; idx++) {
		                        intermediateResult = this.evaluate(value[idx], expression);

		                        intermediateResult = isArray(intermediateResult) ? intermediateResult : [intermediateResult];

		                        result.push.apply(result, intermediateResult);
		                    }

		                    return result;
		                }
		            }

		            return value;
		        },

		        parse: function(xml) {
		            var documentElement,
		                tree,
		                result = {};

		            documentElement = xml.documentElement || $.parseXML(xml).documentElement;

		            tree = this.parseDOM(documentElement);

		            result[documentElement.nodeName] = tree;

		            return result;
		        },

		        xpathToMember: function(member, raw) {
		            if (!member) {
		                return "";
		            }

		            member = member.replace(/^\//, "") // remove the first "/"
		                           .replace(/\//g, "."); // replace all "/" with "."

		            if (member.indexOf("@") >= 0) {
		                // replace @attribute with '["@attribute"]'
		                return member.replace(/\.?(@.*)/, raw? '$1':'["$1"]');
		            }

		            if (member.indexOf("text()") >= 0) {
		                // replace ".text()" with '["#text"]'
		                return member.replace(/(\.?text\(\))/, raw? '#text':'["#text"]');
		            }

		            return member;
		        },
		        getter: function(member) {
		            return getter(this.xpathToMember(member), true);
		        }
		    });

		    $.extend(true, kendo.data, {
		        XmlDataReader: XmlDataReader,
		        readers: {
		            xml: XmlDataReader
		        }
		    });
		})(window.kendo.jQuery);

		return window.kendo;

		}, __webpack_require__(422));


	/***/ }

	/******/ });

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ({

	/***/ 0:
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(498);


	/***/ },

	/***/ 421:
	/***/ function(module, exports) {

		module.exports = __webpack_require__(6);

	/***/ },

	/***/ 422:
	/***/ function(module, exports) {

		module.exports = function() { throw new Error("define cannot be used indirect"); };


	/***/ },

	/***/ 498:
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
		    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(421) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		})(function(){

		var __meta__ = { // jshint ignore:line
		    id: "popup",
		    name: "Pop-up",
		    category: "framework",
		    depends: [ "core" ],
		    advanced: true
		};

		(function($, undefined) {
		    var kendo = window.kendo,
		        ui = kendo.ui,
		        Widget = ui.Widget,
		        support = kendo.support,
		        getOffset = kendo.getOffset,
		        OPEN = "open",
		        CLOSE = "close",
		        DEACTIVATE = "deactivate",
		        ACTIVATE = "activate",
		        CENTER = "center",
		        LEFT = "left",
		        RIGHT = "right",
		        TOP = "top",
		        BOTTOM = "bottom",
		        ABSOLUTE = "absolute",
		        HIDDEN = "hidden",
		        BODY = "body",
		        LOCATION = "location",
		        POSITION = "position",
		        VISIBLE = "visible",
		        EFFECTS = "effects",
		        ACTIVE = "k-state-active",
		        ACTIVEBORDER = "k-state-border",
		        ACTIVEBORDERREGEXP = /k-state-border-(\w+)/,
		        ACTIVECHILDREN = ".k-picker-wrap, .k-dropdown-wrap, .k-link",
		        MOUSEDOWN = "down",
		        DOCUMENT_ELEMENT = $(document.documentElement),
		        WINDOW = $(window),
		        SCROLL = "scroll",
		        cssPrefix = support.transitions.css,
		        TRANSFORM = cssPrefix + "transform",
		        extend = $.extend,
		        NS = ".kendoPopup",
		        styles = ["font-size",
		                  "font-family",
		                  "font-stretch",
		                  "font-style",
		                  "font-weight",
		                  "line-height"];

		    function contains(container, target) {
		        return container === target || $.contains(container, target);
		    }

		    var Popup = Widget.extend({
		        init: function(element, options) {
		            var that = this, parentPopup;

		            options = options || {};

		            if (options.isRtl) {
		                options.origin = options.origin || BOTTOM + " " + RIGHT;
		                options.position = options.position || TOP + " " + RIGHT;
		            }

		            Widget.fn.init.call(that, element, options);

		            element = that.element;
		            options = that.options;

		            that.collisions = options.collision ? options.collision.split(" ") : [];
		            that.downEvent = kendo.applyEventMap(MOUSEDOWN, kendo.guid());

		            if (that.collisions.length === 1) {
		                that.collisions.push(that.collisions[0]);
		            }

		            parentPopup = $(that.options.anchor).closest(".k-popup,.k-group").filter(":not([class^=km-])"); // When popup is in another popup, make it relative.
		            options.appendTo = $($(options.appendTo)[0] || parentPopup[0] || BODY);

		            that.element.hide()
		                .addClass("k-popup k-group k-reset")
		                .toggleClass("k-rtl", !!options.isRtl)
		                .css({ position : ABSOLUTE })
		                .appendTo(options.appendTo)
		                .on("mouseenter" + NS, function() {
		                    that._hovered = true;
		                })
		                .on("mouseleave" + NS, function() {
		                    that._hovered = false;
		                });

		            that.wrapper = $();

		            if (options.animation === false) {
		                options.animation = { open: { effects: {} }, close: { hide: true, effects: {} } };
		            }

		            extend(options.animation.open, {
		                complete: function() {
		                    that.wrapper.css({ overflow: VISIBLE }); // Forcing refresh causes flickering in mobile.
		                    that._activated = true;
		                    that._trigger(ACTIVATE);
		                }
		            });

		            extend(options.animation.close, {
		                complete: function() {
		                    that._animationClose();
		                }
		            });

		            that._mousedownProxy = function(e) {
		                that._mousedown(e);
		            };

		            if (support.mobileOS.android) {
		                that._resizeProxy = function(e) {
		                    setTimeout(function() {
		                        that._resize(e);
		                    }, 600); //Logic from kendo.onResize
		                };
		            } else {
		                that._resizeProxy = function(e) {
		                    that._resize(e);
		                };
		            }

		            if (options.toggleTarget) {
		                $(options.toggleTarget).on(options.toggleEvent + NS, $.proxy(that.toggle, that));
		            }
		        },

		        events: [
		            OPEN,
		            ACTIVATE,
		            CLOSE,
		            DEACTIVATE
		        ],

		        options: {
		            name: "Popup",
		            toggleEvent: "click",
		            origin: BOTTOM + " " + LEFT,
		            position: TOP + " " + LEFT,
		            anchor: BODY,
		            appendTo: null,
		            collision: "flip fit",
		            viewport: window,
		            copyAnchorStyles: true,
		            autosize: false,
		            modal: false,
		            adjustSize: {
		                width: 0,
		                height: 0
		            },
		            animation: {
		                open: {
		                    effects: "slideIn:down",
		                    transition: true,
		                    duration: 200
		                },
		                close: { // if close animation effects are defined, they will be used instead of open.reverse
		                    duration: 100,
		                    hide: true
		                }
		            }
		        },

		        _animationClose: function() {
		            var that = this;
		            var location = that.wrapper.data(LOCATION);

		            that.wrapper.hide();

		            if (location) {
		                that.wrapper.css(location);
		            }

		            if (that.options.anchor != BODY) {
		                that._hideDirClass();
		            }

		            that._closing = false;
		            that._trigger(DEACTIVATE);
		        },

		        destroy: function() {
		            var that = this,
		                options = that.options,
		                element = that.element.off(NS),
		                parent;

		            Widget.fn.destroy.call(that);

		            if (options.toggleTarget) {
		                $(options.toggleTarget).off(NS);
		            }

		            if (!options.modal) {
		                DOCUMENT_ELEMENT.unbind(that.downEvent, that._mousedownProxy);
		                that._toggleResize(false);
		            }

		            kendo.destroy(that.element.children());
		            element.removeData();

		            if (options.appendTo[0] === document.body) {
		                parent = element.parent(".k-animation-container");

		                if (parent[0]) {
		                    parent.remove();
		                } else {
		                    element.remove();
		                }
		            }
		        },

		        open: function(x, y) {
		            var that = this,
		                fixed = { isFixed: !isNaN(parseInt(y,10)), x: x, y: y },
		                element = that.element,
		                options = that.options,
		                animation, wrapper,
		                anchor = $(options.anchor),
		                mobile = element[0] && element.hasClass("km-widget");

		            if (!that.visible()) {
		                if (options.copyAnchorStyles) {
		                    if (mobile && styles[0] == "font-size") {
		                        styles.shift();
		                    }
		                    element.css(kendo.getComputedStyles(anchor[0], styles));
		                }

		                if (element.data("animating") || that._trigger(OPEN)) {
		                    return;
		                }

		                that._activated = false;

		                if (!options.modal) {
		                    DOCUMENT_ELEMENT.unbind(that.downEvent, that._mousedownProxy)
		                                .bind(that.downEvent, that._mousedownProxy);

		                    // this binding hangs iOS in editor
		                    // all elements in IE7/8 fire resize event, causing mayhem
		                    that._toggleResize(false);
		                    that._toggleResize(true);
		                }

		                that.wrapper = wrapper = kendo.wrap(element, options.autosize)
		                                        .css({
		                                            overflow: HIDDEN,
		                                            display: "block",
		                                            position: ABSOLUTE
		                                        });

		                if (support.mobileOS.android) {
		                    wrapper.css(TRANSFORM, "translatez(0)"); // Android is VERY slow otherwise. Should be tested in other droids as well since it may cause blur.
		                }

		                wrapper.css(POSITION);

		                if ($(options.appendTo)[0] == document.body) {
		                    wrapper.css(TOP, "-10000px");
		                }

		                that.flipped = that._position(fixed);
		                animation = that._openAnimation();

		                if (options.anchor != BODY) {
		                    that._showDirClass(animation);
		                }

		                element.data(EFFECTS, animation.effects)
		                       .kendoStop(true)
		                       .kendoAnimate(animation);
		            }
		        },

		        _openAnimation: function() {
		            var animation = extend(true, {}, this.options.animation.open);
		            animation.effects = kendo.parseEffects(animation.effects, this.flipped);

		            return animation;
		        },

		        _hideDirClass: function() {
		            var anchor = $(this.options.anchor);
		            var direction = ((anchor.attr("class") || "").match(ACTIVEBORDERREGEXP) || ["", "down"])[1];
		            var dirClass = ACTIVEBORDER + "-" + direction;

		            anchor
		                .removeClass(dirClass)
		                .children(ACTIVECHILDREN)
		                .removeClass(ACTIVE)
		                .removeClass(dirClass);

		            this.element.removeClass(ACTIVEBORDER + "-" + kendo.directions[direction].reverse);
		        },

		        _showDirClass: function(animation) {
		            var direction = animation.effects.slideIn ? animation.effects.slideIn.direction : "down";
		            var dirClass = ACTIVEBORDER + "-" + direction;

		            $(this.options.anchor)
		                .addClass(dirClass)
		                .children(ACTIVECHILDREN)
		                .addClass(ACTIVE)
		                .addClass(dirClass);

		            this.element.addClass(ACTIVEBORDER + "-" + kendo.directions[direction].reverse);
		        },

		        position: function() {
		            if (this.visible()) {
		                this.flipped = this._position();
		                //this._hideDirClass();
		                //this._showDirClass(this._openAnimation());
		            }
		        },

		        toggle: function() {
		            var that = this;

		            that[that.visible() ? CLOSE : OPEN]();
		        },

		        visible: function() {
		            return this.element.is(":" + VISIBLE);
		        },

		        close: function(skipEffects) {
		            var that = this,
		                options = that.options, wrap,
		                animation, openEffects, closeEffects;

		            if (that.visible()) {
		                wrap = (that.wrapper[0] ? that.wrapper : kendo.wrap(that.element).hide());

		                that._toggleResize(false);

		                if (that._closing || that._trigger(CLOSE)) {
		                    that._toggleResize(true);
		                    return;
		                }

		                // Close all inclusive popups.
		                that.element.find(".k-popup").each(function () {
		                    var that = $(this),
		                        popup = that.data("kendoPopup");

		                    if (popup) {
		                        popup.close(skipEffects);
		                    }
		                });

		                DOCUMENT_ELEMENT.unbind(that.downEvent, that._mousedownProxy);

		                if (skipEffects) {
		                    animation = { hide: true, effects: {} };
		                } else {
		                    animation = extend(true, {}, options.animation.close);
		                    openEffects = that.element.data(EFFECTS);
		                    closeEffects = animation.effects;

		                    if (!closeEffects && !kendo.size(closeEffects) && openEffects && kendo.size(openEffects)) {
		                        animation.effects = openEffects;
		                        animation.reverse = true;
		                    }

		                    that._closing = true;
		                }

		                that.element.kendoStop(true);
		                wrap.css({ overflow: HIDDEN }); // stop callback will remove hidden overflow
		                that.element.kendoAnimate(animation);
		            }
		        },

		        _trigger: function(ev) {
		            return this.trigger(ev, { type: ev });
		        },

		        _resize: function(e) {
		            var that = this;

		            if (support.resize.indexOf(e.type) !== -1) {
		                clearTimeout(that._resizeTimeout);
		                that._resizeTimeout = setTimeout(function() {
		                    that._position();
		                    that._resizeTimeout = null;
		                }, 50);
		            } else {
		                if (!that._hovered || (that._activated && that.element.hasClass("k-list-container"))) {
		                    that.close();
		                }
		            }
		        },

		        _toggleResize: function(toggle) {
		            var method = toggle ? "on" : "off";
		            var eventNames = support.resize;

		            if (!(support.mobileOS.ios || support.mobileOS.android)) {
		                eventNames += " " + SCROLL;
		            }

		            this._scrollableParents()[method](SCROLL, this._resizeProxy);
		            WINDOW[method](eventNames, this._resizeProxy);
		        },

		        _mousedown: function(e) {
		            var that = this,
		                container = that.element[0],
		                options = that.options,
		                anchor = $(options.anchor)[0],
		                toggleTarget = options.toggleTarget,
		                target = kendo.eventTarget(e),
		                popup = $(target).closest(".k-popup"),
		                mobile = popup.parent().parent(".km-shim").length;

		            popup = popup[0];
		            if (!mobile && popup && popup !== that.element[0]){
		                return;
		            }

		            // This MAY result in popup not closing in certain cases.
		            if ($(e.target).closest("a").data("rel") === "popover") {
		                return;
		            }

		            if (!contains(container, target) && !contains(anchor, target) && !(toggleTarget && contains($(toggleTarget)[0], target))) {
		                that.close();
		            }
		        },

		        _fit: function(position, size, viewPortSize) {
		            var output = 0;

		            if (position + size > viewPortSize) {
		                output = viewPortSize - (position + size);
		            }

		            if (position < 0) {
		                output = -position;
		            }

		            return output;
		        },

		        _flip: function(offset, size, anchorSize, viewPortSize, origin, position, boxSize) {
		            var output = 0;
		                boxSize = boxSize || size;

		            if (position !== origin && position !== CENTER && origin !== CENTER) {
		                if (offset + boxSize > viewPortSize) {
		                    output += -(anchorSize + size);
		                }

		                if (offset + output < 0) {
		                    output += anchorSize + size;
		                }
		            }
		            return output;
		        },

		        _scrollableParents: function() {
		            return $(this.options.anchor)
		                       .parentsUntil("body")
		                       .filter(function(index, element) {
		                           return kendo.isScrollable(element);
		                       });
		        },

		        _position: function(fixed) {
		            var that = this,
		                //element = that.element.css(POSITION, ""), /* fixes telerik/kendo-ui-core#790, comes from telerik/kendo#615 */
		                element = that.element,
		                wrapper = that.wrapper,
		                options = that.options,
		                viewport = $(options.viewport),
		                viewportOffset = viewport.offset(),
		                anchor = $(options.anchor),
		                origins = options.origin.toLowerCase().split(" "),
		                positions = options.position.toLowerCase().split(" "),
		                collisions = that.collisions,
		                zoomLevel = support.zoomLevel(),
		                siblingContainer, parents,
		                parentZIndex, zIndex = 10002,
		                isWindow = !!((viewport[0] == window) && window.innerWidth && (zoomLevel <= 1.02)),
		                idx = 0,
		                docEl = document.documentElement,
		                length, viewportWidth, viewportHeight;

		            // $(window).height() uses documentElement to get the height
		            viewportWidth = isWindow ? window.innerWidth : viewport.width();
		            viewportHeight = isWindow ? window.innerHeight : viewport.height();

		            if (isWindow && docEl.scrollHeight - docEl.clientHeight > 0) {
		                viewportWidth -= kendo.support.scrollbar();
		            }

		            siblingContainer = anchor.parents().filter(wrapper.siblings());

		            if (siblingContainer[0]) {
		                parentZIndex = Math.max(Number(siblingContainer.css("zIndex")), 0);

		                // set z-index to be more than that of the container/sibling
		                // compensate with more units for window z-stack
		                if (parentZIndex) {
		                    zIndex = parentZIndex + 10;
		                } else {
		                    parents = anchor.parentsUntil(siblingContainer);
		                    for (length = parents.length; idx < length; idx++) {
		                        parentZIndex = Number($(parents[idx]).css("zIndex"));
		                        if (parentZIndex && zIndex < parentZIndex) {
		                            zIndex = parentZIndex + 10;
		                        }
		                    }
		                }
		            }

		            wrapper.css("zIndex", zIndex);

		            if (fixed && fixed.isFixed) {
		                wrapper.css({ left: fixed.x, top: fixed.y });
		            } else {
		                wrapper.css(that._align(origins, positions));
		            }

		            var pos = getOffset(wrapper, POSITION, anchor[0] === wrapper.offsetParent()[0]),
		                offset = getOffset(wrapper),
		                anchorParent = anchor.offsetParent().parent(".k-animation-container,.k-popup,.k-group"); // If the parent is positioned, get the current positions

		            if (anchorParent.length) {
		                pos = getOffset(wrapper, POSITION, true);
		                offset = getOffset(wrapper);
		            }

		            if (viewport[0] === window) {
		                offset.top -= (window.pageYOffset || document.documentElement.scrollTop || 0);
		                offset.left -= (window.pageXOffset || document.documentElement.scrollLeft || 0);
		            }
		            else {
		                offset.top -= viewportOffset.top;
		                offset.left -= viewportOffset.left;
		            }

		            if (!that.wrapper.data(LOCATION)) { // Needed to reset the popup location after every closure - fixes the resize bugs.
		                wrapper.data(LOCATION, extend({}, pos));
		            }

		            var offsets = extend({}, offset),
		                location = extend({}, pos),
		                adjustSize = options.adjustSize;

		            if (collisions[0] === "fit") {
		                location.top += that._fit(offsets.top, wrapper.outerHeight() + adjustSize.height, viewportHeight / zoomLevel);
		            }

		            if (collisions[1] === "fit") {
		                location.left += that._fit(offsets.left, wrapper.outerWidth() + adjustSize.width, viewportWidth / zoomLevel);
		            }

		            var flipPos = extend({}, location);
		            var elementHeight = element.outerHeight();
		            var wrapperHeight =  wrapper.outerHeight();

		            if (!wrapper.height() && elementHeight) {
		                wrapperHeight = wrapperHeight + elementHeight;
		            }

		            if (collisions[0] === "flip") {
		                location.top += that._flip(offsets.top, elementHeight, anchor.outerHeight(), viewportHeight / zoomLevel, origins[0], positions[0], wrapperHeight);
		            }

		            if (collisions[1] === "flip") {
		                location.left += that._flip(offsets.left, element.outerWidth(), anchor.outerWidth(), viewportWidth / zoomLevel, origins[1], positions[1], wrapper.outerWidth());
		            }

		            element.css(POSITION, ABSOLUTE);
		            wrapper.css(location);

		            return (location.left != flipPos.left || location.top != flipPos.top);
		        },

		        _align: function(origin, position) {
		            var that = this,
		                element = that.wrapper,
		                anchor = $(that.options.anchor),
		                verticalOrigin = origin[0],
		                horizontalOrigin = origin[1],
		                verticalPosition = position[0],
		                horizontalPosition = position[1],
		                anchorOffset = getOffset(anchor),
		                appendTo = $(that.options.appendTo),
		                appendToOffset,
		                width = element.outerWidth(),
		                height = element.outerHeight(),
		                anchorWidth = anchor.outerWidth(),
		                anchorHeight = anchor.outerHeight(),
		                top = anchorOffset.top,
		                left = anchorOffset.left,
		                round = Math.round;

		            if (appendTo[0] != document.body) {
		                appendToOffset = getOffset(appendTo);
		                top -= appendToOffset.top;
		                left -= appendToOffset.left;
		            }


		            if (verticalOrigin === BOTTOM) {
		                top += anchorHeight;
		            }

		            if (verticalOrigin === CENTER) {
		                top += round(anchorHeight / 2);
		            }

		            if (verticalPosition === BOTTOM) {
		                top -= height;
		            }

		            if (verticalPosition === CENTER) {
		                top -= round(height / 2);
		            }

		            if (horizontalOrigin === RIGHT) {
		                left += anchorWidth;
		            }

		            if (horizontalOrigin === CENTER) {
		                left += round(anchorWidth / 2);
		            }

		            if (horizontalPosition === RIGHT) {
		                left -= width;
		            }

		            if (horizontalPosition === CENTER) {
		                left -= round(width / 2);
		            }

		            return {
		                top: top,
		                left: left
		            };
		        }
		    });

		    ui.plugin(Popup);
		})(window.kendo.jQuery);

		return window.kendo;

		}, __webpack_require__(422));


	/***/ }

	/******/ });

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ({

	/***/ 0:
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(483);


	/***/ },

	/***/ 422:
	/***/ function(module, exports) {

		module.exports = function() { throw new Error("define cannot be used indirect"); };


	/***/ },

	/***/ 483:
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
		    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(484), __webpack_require__(485) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		})(function(){

		var __meta__ = { // jshint ignore:line
		    id: "mobile.scroller",
		    name: "Scroller",
		    category: "mobile",
		    description: "The Kendo Mobile Scroller widget enables touch friendly kinetic scrolling for the contents of a given DOM element.",
		    depends: [ "fx", "draganddrop" ]
		};

		(function($, undefined) {
		    var kendo = window.kendo,
		        mobile = kendo.mobile,
		        fx = kendo.effects,
		        ui = mobile.ui,
		        proxy = $.proxy,
		        extend = $.extend,
		        Widget = ui.Widget,
		        Class = kendo.Class,
		        Movable = kendo.ui.Movable,
		        Pane = kendo.ui.Pane,
		        PaneDimensions = kendo.ui.PaneDimensions,
		        Transition = fx.Transition,
		        Animation = fx.Animation,
		        abs = Math.abs,
		        SNAPBACK_DURATION = 500,
		        SCROLLBAR_OPACITY = 0.7,
		        FRICTION = 0.96,
		        VELOCITY_MULTIPLIER = 10,
		        MAX_VELOCITY = 55,
		        OUT_OF_BOUNDS_FRICTION = 0.5,
		        ANIMATED_SCROLLER_PRECISION = 5,
		        RELEASECLASS = "km-scroller-release",
		        REFRESHCLASS = "km-scroller-refresh",
		        PULL = "pull",
		        CHANGE = "change",
		        RESIZE = "resize",
		        SCROLL = "scroll",
		        MOUSE_WHEEL_ID = 2;

		    var ZoomSnapBack = Animation.extend({
		        init: function(options) {
		            var that = this;
		            Animation.fn.init.call(that);
		            extend(that, options);

		            that.userEvents.bind("gestureend", proxy(that.start, that));
		            that.tapCapture.bind("press", proxy(that.cancel, that));
		        },

		        enabled: function() {
		          return this.movable.scale < this.dimensions.minScale;
		        },

		        done: function() {
		            return this.dimensions.minScale - this.movable.scale < 0.01;
		        },

		        tick: function() {
		            var movable = this.movable;
		            movable.scaleWith(1.1);
		            this.dimensions.rescale(movable.scale);
		        },

		        onEnd: function() {
		            var movable = this.movable;
		            movable.scaleTo(this.dimensions.minScale);
		            this.dimensions.rescale(movable.scale);
		        }
		    });

		    var DragInertia = Animation.extend({
		        init: function(options) {
		            var that = this;

		            Animation.fn.init.call(that);

		            extend(that, options, {
		                transition: new Transition({
		                    axis: options.axis,
		                    movable: options.movable,
		                    onEnd: function() { that._end(); }
		                })
		            });

		            that.tapCapture.bind("press", function() { that.cancel(); });
		            that.userEvents.bind("end", proxy(that.start, that));
		            that.userEvents.bind("gestureend", proxy(that.start, that));
		            that.userEvents.bind("tap", proxy(that.onEnd, that));
		        },

		        onCancel: function() {
		            this.transition.cancel();
		        },

		        freeze: function(location) {
		            var that = this;
		            that.cancel();
		            that._moveTo(location);
		        },

		        onEnd: function() {
		            var that = this;
		            if (that.paneAxis.outOfBounds()) {
		                that._snapBack();
		            } else {
		                that._end();
		            }
		        },

		        done: function() {
		            return abs(this.velocity) < 1;
		        },

		        start: function(e) {
		            var that = this,
		                velocity;

		            if (!that.dimension.enabled) { return; }


		            if (that.paneAxis.outOfBounds()) {
		                that._snapBack();
		            } else {
		                velocity = e.touch.id === MOUSE_WHEEL_ID ? 0 : e.touch[that.axis].velocity;
		                that.velocity = Math.max(Math.min(velocity * that.velocityMultiplier, MAX_VELOCITY), -MAX_VELOCITY);

		                that.tapCapture.captureNext();
		                Animation.fn.start.call(that);
		            }
		        },

		        tick: function() {
		            var that = this,
		                dimension = that.dimension,
		                friction = that.paneAxis.outOfBounds() ? OUT_OF_BOUNDS_FRICTION : that.friction,
		                delta = (that.velocity *= friction),
		                location = that.movable[that.axis] + delta;

		                if (!that.elastic && dimension.outOfBounds(location)) {
		                    location = Math.max(Math.min(location, dimension.max), dimension.min);
		                    that.velocity = 0;
		                }

		            that.movable.moveAxis(that.axis, location);
		        },

		        _end: function() {
		            this.tapCapture.cancelCapture();
		            this.end();
		        },

		        _snapBack: function() {
		            var that = this,
		                dimension = that.dimension,
		                snapBack = that.movable[that.axis] > dimension.max ? dimension.max : dimension.min;
		            that._moveTo(snapBack);
		        },

		        _moveTo: function(location) {
		            this.transition.moveTo({ location: location, duration: SNAPBACK_DURATION, ease: Transition.easeOutExpo });
		        }
		    });

		    var AnimatedScroller = Animation.extend({
		        init: function(options) {
		            var that = this;

		            kendo.effects.Animation.fn.init.call(this);

		            extend(that, options, {
		                origin: {},
		                destination: {},
		                offset: {}
		            });
		        },

		        tick: function() {
		            this._updateCoordinates();
		            this.moveTo(this.origin);
		        },

		        done: function() {
		            return abs(this.offset.y) < ANIMATED_SCROLLER_PRECISION && abs(this.offset.x) < ANIMATED_SCROLLER_PRECISION;
		        },

		        onEnd: function() {
		            this.moveTo(this.destination);
		            if (this.callback) {
		                this.callback.call();
		            }
		        },

		        setCoordinates: function(from, to) {
		            this.offset = {};
		            this.origin = from;
		            this.destination = to;
		        },

		        setCallback: function(callback) {
		            if (callback && kendo.isFunction(callback)) {
		                this.callback = callback;
		            } else {
		                callback = undefined;
		            }
		        },

		        _updateCoordinates: function() {
		            this.offset = {
		                x: (this.destination.x - this.origin.x) / 4,
		                y: (this.destination.y - this.origin.y) / 4
		            };

		            this.origin = {
		                y: this.origin.y + this.offset.y,
		                x: this.origin.x + this.offset.x
		            };
		        }
		    });

		    var ScrollBar = Class.extend({
		        init: function(options) {
		            var that = this,
		                horizontal = options.axis === "x",
		                element = $('<div class="km-touch-scrollbar km-' + (horizontal ? "horizontal" : "vertical") + '-scrollbar" />');

		            extend(that, options, {
		                element: element,
		                elementSize: 0,
		                movable: new Movable(element),
		                scrollMovable: options.movable,
		                alwaysVisible: options.alwaysVisible,
		                size: horizontal ? "width" : "height"
		            });

		            that.scrollMovable.bind(CHANGE, proxy(that.refresh, that));
		            that.container.append(element);
		            if (options.alwaysVisible) {
		                that.show();
		            }
		        },

		        refresh: function() {
		            var that = this,
		                axis = that.axis,
		                dimension = that.dimension,
		                paneSize = dimension.size,
		                scrollMovable = that.scrollMovable,
		                sizeRatio = paneSize / dimension.total,
		                position = Math.round(-scrollMovable[axis] * sizeRatio),
		                size = Math.round(paneSize * sizeRatio);

		                if (sizeRatio >= 1) {
		                    this.element.css("display", "none");
		                } else {
		                    this.element.css("display", "");
		                }

		                if (position + size > paneSize) {
		                    size = paneSize - position;
		                } else if (position < 0) {
		                    size += position;
		                    position = 0;
		                }

		            if (that.elementSize != size) {
		                that.element.css(that.size, size + "px");
		                that.elementSize = size;
		            }

		            that.movable.moveAxis(axis, position);
		        },

		        show: function() {
		            this.element.css({opacity: SCROLLBAR_OPACITY, visibility: "visible"});
		        },

		        hide: function() {
		            if (!this.alwaysVisible) {
		                this.element.css({opacity: 0});
		            }
		        }
		    });

		    var Scroller = Widget.extend({
		        init: function(element, options) {
		            var that = this;
		            Widget.fn.init.call(that, element, options);

		            element = that.element;

		            that._native = that.options.useNative && kendo.support.hasNativeScrolling;
		            if (that._native) {
		                element.addClass("km-native-scroller")
		                    .prepend('<div class="km-scroll-header"/>');

		                extend(that, {
		                    scrollElement: element,
		                    fixedContainer: element.children().first()
		                });

		                return;
		            }

		            element
		                .css("overflow", "hidden")
		                .addClass("km-scroll-wrapper")
		                .wrapInner('<div class="km-scroll-container"/>')
		                .prepend('<div class="km-scroll-header"/>');

		            var inner = element.children().eq(1),

		                tapCapture = new kendo.TapCapture(element),

		                movable = new Movable(inner),

		                dimensions = new PaneDimensions({
		                    element: inner,
		                    container: element,
		                    forcedEnabled: that.options.zoom
		                }),

		                avoidScrolling = this.options.avoidScrolling,

		                userEvents = new kendo.UserEvents(element, {
		                    fastTap: true,
		                    allowSelection: true,
		                    preventDragEvent: true,
		                    captureUpIfMoved: true,
		                    multiTouch: that.options.zoom,
		                    start: function(e) {
		                        dimensions.refresh();

		                        var velocityX = abs(e.x.velocity),
		                            velocityY = abs(e.y.velocity),
		                            horizontalSwipe  = velocityX * 2 >= velocityY,
		                            originatedFromFixedContainer = $.contains(that.fixedContainer[0], e.event.target),
		                            verticalSwipe = velocityY * 2 >= velocityX;


		                        if (!originatedFromFixedContainer && !avoidScrolling(e) && that.enabled && (dimensions.x.enabled && horizontalSwipe || dimensions.y.enabled && verticalSwipe)) {
		                            userEvents.capture();
		                        } else {
		                            userEvents.cancel();
		                        }
		                    }
		                }),

		                pane = new Pane({
		                    movable: movable,
		                    dimensions: dimensions,
		                    userEvents: userEvents,
		                    elastic: that.options.elastic
		                }),

		                zoomSnapBack = new ZoomSnapBack({
		                    movable: movable,
		                    dimensions: dimensions,
		                    userEvents: userEvents,
		                    tapCapture: tapCapture
		                }),

		                animatedScroller = new AnimatedScroller({
		                    moveTo: function(coordinates) {
		                        that.scrollTo(coordinates.x, coordinates.y);
		                    }
		                });

		            movable.bind(CHANGE, function() {
		                that.scrollTop = - movable.y;
		                that.scrollLeft = - movable.x;

		                that.trigger(SCROLL, {
		                    scrollTop: that.scrollTop,
		                    scrollLeft: that.scrollLeft
		                });
		            });

		            if (that.options.mousewheelScrolling) {
		                element.on("DOMMouseScroll mousewheel",  proxy(this, "_wheelScroll"));
		            }

		            extend(that, {
		                movable: movable,
		                dimensions: dimensions,
		                zoomSnapBack: zoomSnapBack,
		                animatedScroller: animatedScroller,
		                userEvents: userEvents,
		                pane: pane,
		                tapCapture: tapCapture,
		                pulled: false,
		                enabled: true,
		                scrollElement: inner,
		                scrollTop: 0,
		                scrollLeft: 0,
		                fixedContainer: element.children().first()
		            });

		            that._initAxis("x");
		            that._initAxis("y");

		            // build closure
		            that._wheelEnd = function() {
		                that._wheel = false;
		                that.userEvents.end(0, that._wheelY);
		            };

		            dimensions.refresh();

		            if (that.options.pullToRefresh) {
		                that._initPullToRefresh();
		            }
		        },

		        _wheelScroll: function(e) {
		            if (!this._wheel) {
		                this._wheel = true;
		                this._wheelY = 0;
		                this.userEvents.press(0, this._wheelY);
		            }

		            clearTimeout(this._wheelTimeout);
		            this._wheelTimeout = setTimeout(this._wheelEnd, 50);

		            var delta = kendo.wheelDeltaY(e);

		            if (delta) {
		                this._wheelY += delta;
		                this.userEvents.move(0, this._wheelY);
		            }

		            e.preventDefault();
		        },

		        makeVirtual: function() {
		            this.dimensions.y.makeVirtual();
		        },

		        virtualSize: function(min, max) {
		            this.dimensions.y.virtualSize(min, max);
		        },

		        height: function() {
		            return this.dimensions.y.size;
		        },

		        scrollHeight: function() {
		            return this.scrollElement[0].scrollHeight;
		        },

		        scrollWidth: function() {
		            return this.scrollElement[0].scrollWidth;
		        },

		        options: {
		            name: "Scroller",
		            zoom: false,
		            pullOffset: 140,
		            visibleScrollHints: false,
		            elastic: true,
		            useNative: false,
		            mousewheelScrolling: true,
		            avoidScrolling: function() { return false; },
		            pullToRefresh: false,
		            messages: {
		                pullTemplate: "Pull to refresh",
		                releaseTemplate: "Release to refresh",
		                refreshTemplate: "Refreshing"
		            }
		        },

		        events: [
		            PULL,
		            SCROLL,
		            RESIZE
		        ],

		        _resize: function() {
		            if (!this._native) {
		                this.contentResized();
		            }
		        },

		        setOptions: function(options) {
		            var that = this;
		            Widget.fn.setOptions.call(that, options);
		            if (options.pullToRefresh) {
		                that._initPullToRefresh();
		            }
		        },

		        reset: function() {
		            if (this._native) {
		                this.scrollElement.scrollTop(0);
		            } else {
		                this.movable.moveTo({x: 0, y: 0});
		                this._scale(1);
		            }
		        },

		        contentResized: function() {
		            this.dimensions.refresh();
		            if (this.pane.x.outOfBounds()) {
		                this.movable.moveAxis("x", this.dimensions.x.min);
		            }

		            if (this.pane.y.outOfBounds()) {
		                this.movable.moveAxis("y", this.dimensions.y.min);
		            }
		        },

		        zoomOut: function() {
		            var dimensions = this.dimensions;
		            dimensions.refresh();
		            this._scale(dimensions.fitScale);
		            this.movable.moveTo(dimensions.centerCoordinates());
		        },

		        enable: function() {
		            this.enabled = true;
		        },

		        disable: function() {
		            this.enabled = false;
		        },

		        scrollTo: function(x, y) {
		            if (this._native) {
		                this.scrollElement.scrollLeft(abs(x));
		                this.scrollElement.scrollTop(abs(y));
		            } else {
		                this.dimensions.refresh();
		                this.movable.moveTo({x: x, y: y});
		            }
		        },

		        animatedScrollTo: function(x, y, callback) {
		            var from,
		                to;

		            if(this._native) {
		                this.scrollTo(x, y);
		            } else {
		                from = { x: this.movable.x, y: this.movable.y };
		                to = { x: x, y: y };

		                this.animatedScroller.setCoordinates(from, to);
		                this.animatedScroller.setCallback(callback);
		                this.animatedScroller.start();
		            }
		        },

		        pullHandled: function() {
		            var that = this;
		            that.refreshHint.removeClass(REFRESHCLASS);
		            that.hintContainer.html(that.pullTemplate({}));
		            that.yinertia.onEnd();
		            that.xinertia.onEnd();
		            that.userEvents.cancel();
		        },

		        destroy: function() {
		            Widget.fn.destroy.call(this);
		            if (this.userEvents) {
		                this.userEvents.destroy();
		            }
		        },

		        _scale: function(scale) {
		            this.dimensions.rescale(scale);
		            this.movable.scaleTo(scale);
		        },

		        _initPullToRefresh: function() {
		            var that = this;

		            that.dimensions.y.forceEnabled();
		            that.pullTemplate = kendo.template(that.options.messages.pullTemplate);
		            that.releaseTemplate = kendo.template(that.options.messages.releaseTemplate);
		            that.refreshTemplate = kendo.template(that.options.messages.refreshTemplate);

		            that.scrollElement.prepend('<span class="km-scroller-pull"><span class="km-icon"></span><span class="km-loading-left"></span><span class="km-loading-right"></span><span class="km-template">' + that.pullTemplate({}) + '</span></span>');
		            that.refreshHint = that.scrollElement.children().first();
		            that.hintContainer = that.refreshHint.children(".km-template");

		            that.pane.y.bind("change", proxy(that._paneChange, that));
		            that.userEvents.bind("end", proxy(that._dragEnd, that));
		        },

		        _dragEnd: function() {
		            var that = this;

		            if(!that.pulled) {
		                return;
		            }

		            that.pulled = false;
		            that.refreshHint.removeClass(RELEASECLASS).addClass(REFRESHCLASS);
		            that.hintContainer.html(that.refreshTemplate({}));
		            that.yinertia.freeze(that.options.pullOffset / 2);
		            that.trigger("pull");
		        },

		        _paneChange: function() {
		            var that = this;

		            if (that.movable.y / OUT_OF_BOUNDS_FRICTION > that.options.pullOffset) {
		                if (!that.pulled) {
		                    that.pulled = true;
		                    that.refreshHint.removeClass(REFRESHCLASS).addClass(RELEASECLASS);
		                    that.hintContainer.html(that.releaseTemplate({}));
		                }
		            } else if (that.pulled) {
		                that.pulled = false;
		                that.refreshHint.removeClass(RELEASECLASS);
		                that.hintContainer.html(that.pullTemplate({}));
		            }
		        },

		        _initAxis: function(axis) {
		            var that = this,
		                movable = that.movable,
		                dimension = that.dimensions[axis],
		                tapCapture = that.tapCapture,
		                paneAxis = that.pane[axis],
		                scrollBar = new ScrollBar({
		                    axis: axis,
		                    movable: movable,
		                    dimension: dimension,
		                    container: that.element,
		                    alwaysVisible: that.options.visibleScrollHints
		                });

		            dimension.bind(CHANGE, function() {
		                scrollBar.refresh();
		            });

		            paneAxis.bind(CHANGE, function() {
		                scrollBar.show();
		            });

		            that[axis + "inertia"] = new DragInertia({
		                axis: axis,
		                paneAxis: paneAxis,
		                movable: movable,
		                tapCapture: tapCapture,
		                userEvents: that.userEvents,
		                dimension: dimension,
		                elastic: that.options.elastic,
		                friction: that.options.friction || FRICTION,
		                velocityMultiplier: that.options.velocityMultiplier || VELOCITY_MULTIPLIER,
		                end: function() {
		                    scrollBar.hide();
		                    that.trigger("scrollEnd", {
		                        axis: axis,
		                        scrollTop: that.scrollTop,
		                        scrollLeft: that.scrollLeft
		                    });
		                }
		            });
		        }
		    });

		    ui.plugin(Scroller);
		})(window.kendo.jQuery);

		return window.kendo;

		}, __webpack_require__(422));


	/***/ },

	/***/ 484:
	/***/ function(module, exports) {

		module.exports = __webpack_require__(11);

	/***/ },

	/***/ 485:
	/***/ function(module, exports) {

		module.exports = __webpack_require__(12);

	/***/ }

	/******/ });

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ({

	/***/ 0:
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(457);


	/***/ },

	/***/ 421:
	/***/ function(module, exports) {

		module.exports = __webpack_require__(6);

	/***/ },

	/***/ 422:
	/***/ function(module, exports) {

		module.exports = function() { throw new Error("define cannot be used indirect"); };


	/***/ },

	/***/ 457:
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
		    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(421) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		})(function(){

		var __meta__ = { // jshint ignore:line
		    id: "fx",
		    name: "Effects",
		    category: "framework",
		    description: "Required for animation effects in all Kendo UI widgets.",
		    depends: [ "core" ]
		};

		(function($, undefined) {
		    var kendo = window.kendo,
		        fx = kendo.effects,
		        each = $.each,
		        extend = $.extend,
		        proxy = $.proxy,
		        support = kendo.support,
		        browser = support.browser,
		        transforms = support.transforms,
		        transitions = support.transitions,
		        scaleProperties = { scale: 0, scalex: 0, scaley: 0, scale3d: 0 },
		        translateProperties = { translate: 0, translatex: 0, translatey: 0, translate3d: 0 },
		        hasZoom = (typeof document.documentElement.style.zoom !== "undefined") && !transforms,
		        matrix3dRegExp = /matrix3?d?\s*\(.*,\s*([\d\.\-]+)\w*?,\s*([\d\.\-]+)\w*?,\s*([\d\.\-]+)\w*?,\s*([\d\.\-]+)\w*?/i,
		        cssParamsRegExp = /^(-?[\d\.\-]+)?[\w\s]*,?\s*(-?[\d\.\-]+)?[\w\s]*/i,
		        translateXRegExp = /translatex?$/i,
		        oldEffectsRegExp = /(zoom|fade|expand)(\w+)/,
		        singleEffectRegExp = /(zoom|fade|expand)/,
		        unitRegExp = /[xy]$/i,
		        transformProps = ["perspective", "rotate", "rotatex", "rotatey", "rotatez", "rotate3d", "scale", "scalex", "scaley", "scalez", "scale3d", "skew", "skewx", "skewy", "translate", "translatex", "translatey", "translatez", "translate3d", "matrix", "matrix3d"],
		        transform2d = ["rotate", "scale", "scalex", "scaley", "skew", "skewx", "skewy", "translate", "translatex", "translatey", "matrix"],
		        transform2units = { "rotate": "deg", scale: "", skew: "px", translate: "px" },
		        cssPrefix = transforms.css,
		        round = Math.round,
		        BLANK = "",
		        PX = "px",
		        NONE = "none",
		        AUTO = "auto",
		        WIDTH = "width",
		        HEIGHT = "height",
		        HIDDEN = "hidden",
		        ORIGIN = "origin",
		        ABORT_ID = "abortId",
		        OVERFLOW = "overflow",
		        TRANSLATE = "translate",
		        POSITION = "position",
		        COMPLETE_CALLBACK = "completeCallback",
		        TRANSITION = cssPrefix + "transition",
		        TRANSFORM = cssPrefix + "transform",
		        BACKFACE = cssPrefix + "backface-visibility",
		        PERSPECTIVE = cssPrefix + "perspective",
		        DEFAULT_PERSPECTIVE = "1500px",
		        TRANSFORM_PERSPECTIVE = "perspective(" + DEFAULT_PERSPECTIVE + ")",
		        directions = {
		            left: {
		                reverse: "right",
		                property: "left",
		                transition: "translatex",
		                vertical: false,
		                modifier: -1
		            },
		            right: {
		                reverse: "left",
		                property: "left",
		                transition: "translatex",
		                vertical: false,
		                modifier: 1
		            },
		            down: {
		                reverse: "up",
		                property: "top",
		                transition: "translatey",
		                vertical: true,
		                modifier: 1
		            },
		            up: {
		                reverse: "down",
		                property: "top",
		                transition: "translatey",
		                vertical: true,
		                modifier: -1
		            },
		            top: {
		                reverse: "bottom"
		            },
		            bottom: {
		                reverse: "top"
		            },
		            "in": {
		                reverse: "out",
		                modifier: -1
		            },
		            out: {
		                reverse: "in",
		                modifier: 1
		            },

		            vertical: {
		                reverse: "vertical"
		            },

		            horizontal: {
		                reverse: "horizontal"
		            }
		        };

		    kendo.directions = directions;

		    extend($.fn, {
		        kendoStop: function(clearQueue, gotoEnd) {
		            if (transitions) {
		                return fx.stopQueue(this, clearQueue || false, gotoEnd || false);
		            } else {
		                return this.stop(clearQueue, gotoEnd);
		            }
		        }
		    });

		    /* jQuery support for all transform animations (FF 3.5/3.6, Opera 10.x, IE9 */

		    if (transforms && !transitions) {
		        each(transform2d, function(idx, value) {
		            $.fn[value] = function(val) {
		                if (typeof val == "undefined") {
		                    return animationProperty(this, value);
		                } else {
		                    var that = $(this)[0],
		                        transformValue = value + "(" + val + transform2units[value.replace(unitRegExp, "")] + ")";

		                    if (that.style.cssText.indexOf(TRANSFORM) == -1) {
		                        $(this).css(TRANSFORM, transformValue);
		                    } else {
		                        that.style.cssText = that.style.cssText.replace(new RegExp(value + "\\(.*?\\)", "i"), transformValue);
		                    }
		                }
		                return this;
		            };

		            $.fx.step[value] = function (fx) {
		                $(fx.elem)[value](fx.now);
		            };
		        });

		        var curProxy = $.fx.prototype.cur;
		        $.fx.prototype.cur = function () {
		            if (transform2d.indexOf(this.prop) != -1) {
		                return parseFloat($(this.elem)[this.prop]());
		            }

		            return curProxy.apply(this, arguments);
		        };
		    }

		    kendo.toggleClass = function(element, classes, options, add) {
		        if (classes) {
		            classes = classes.split(" ");

		            if (transitions) {
		                options = extend({
		                    exclusive: "all",
		                    duration: 400,
		                    ease: "ease-out"
		                }, options);

		                element.css(TRANSITION, options.exclusive + " " + options.duration + "ms " + options.ease);
		                setTimeout(function() {
		                    element.css(TRANSITION, "").css(HEIGHT);
		                }, options.duration); // TODO: this should fire a kendoAnimate session instead.
		            }

		            each(classes, function(idx, value) {
		                element.toggleClass(value, add);
		            });
		        }

		        return element;
		    };

		    kendo.parseEffects = function(input, mirror) {
		        var effects = {};

		        if (typeof input === "string") {
		            each(input.split(" "), function(idx, value) {
		                var redirectedEffect = !singleEffectRegExp.test(value),
		                    resolved = value.replace(oldEffectsRegExp, function(match, $1, $2) {
		                        return $1 + ":" + $2.toLowerCase();
		                    }), // Support for old zoomIn/fadeOut style, now deprecated.
		                    effect = resolved.split(":"),
		                    direction = effect[1],
		                    effectBody = {};

		                if (effect.length > 1) {
		                    effectBody.direction = (mirror && redirectedEffect ? directions[direction].reverse : direction);
		                }

		                effects[effect[0]] = effectBody;
		            });
		        } else {
		            each(input, function(idx) {
		                var direction = this.direction;

		                if (direction && mirror && !singleEffectRegExp.test(idx)) {
		                    this.direction = directions[direction].reverse;
		                }

		                effects[idx] = this;
		            });
		        }

		        return effects;
		    };

		    function parseInteger(value) {
		        return parseInt(value, 10);
		    }

		    function parseCSS(element, property) {
		        return parseInteger(element.css(property));
		    }

		    function keys(obj) {
		        var acc = [];
		        for (var propertyName in obj) {
		            acc.push(propertyName);
		        }
		        return acc;
		    }

		    function strip3DTransforms(properties) {
		        for (var key in properties) {
		            if (transformProps.indexOf(key) != -1 && transform2d.indexOf(key) == -1) {
		                delete properties[key];
		            }
		        }

		        return properties;
		    }

		    function normalizeCSS(element, properties) {
		        var transformation = [], cssValues = {}, lowerKey, key, value, isTransformed;

		        for (key in properties) {
		            lowerKey = key.toLowerCase();
		            isTransformed = transforms && transformProps.indexOf(lowerKey) != -1;

		            if (!support.hasHW3D && isTransformed && transform2d.indexOf(lowerKey) == -1) {
		                delete properties[key];
		            } else {
		                value = properties[key];

		                if (isTransformed) {
		                    transformation.push(key + "(" + value + ")");
		                } else {
		                    cssValues[key] = value;
		                }
		            }
		        }

		        if (transformation.length) {
		            cssValues[TRANSFORM] = transformation.join(" ");
		        }

		        return cssValues;
		    }

		    if (transitions) {
		        extend(fx, {
		            transition: function(element, properties, options) {
		                var css,
		                    delay = 0,
		                    oldKeys = element.data("keys") || [],
		                    timeoutID;

		                options = extend({
		                        duration: 200,
		                        ease: "ease-out",
		                        complete: null,
		                        exclusive: "all"
		                    },
		                    options
		                );

		                var stopTransitionCalled = false;

		                var stopTransition = function() {
		                    if (!stopTransitionCalled) {
		                        stopTransitionCalled = true;

		                        if (timeoutID) {
		                            clearTimeout(timeoutID);
		                            timeoutID = null;
		                        }

		                        element
		                        .removeData(ABORT_ID)
		                        .dequeue()
		                        .css(TRANSITION, "")
		                        .css(TRANSITION);

		                        options.complete.call(element);
		                    }
		                };

		                options.duration = $.fx ? $.fx.speeds[options.duration] || options.duration : options.duration;

		                css = normalizeCSS(element, properties);

		                $.merge(oldKeys, keys(css));
		                element
		                    .data("keys", $.unique(oldKeys))
		                    .height();

		                element.css(TRANSITION, options.exclusive + " " + options.duration + "ms " + options.ease).css(TRANSITION);
		                element.css(css).css(TRANSFORM);

		                /**
		                 * Use transitionEnd event for browsers who support it - but duplicate it with setTimeout, as the transitionEnd event will not be triggered if no CSS properties change.
		                 * This should be cleaned up at some point (widget by widget), and refactored to widgets not relying on the complete callback if no transition occurs.
		                 *
		                 * For IE9 and below, resort to setTimeout.
		                 */
		                if (transitions.event) {
		                    element.one(transitions.event, stopTransition);
		                    if (options.duration !== 0) {
		                        delay = 500;
		                    }
		                }

		                timeoutID = setTimeout(stopTransition, options.duration + delay);
		                element.data(ABORT_ID, timeoutID);
		                element.data(COMPLETE_CALLBACK, stopTransition);
		            },

		            stopQueue: function(element, clearQueue, gotoEnd) {
		                var cssValues,
		                    taskKeys = element.data("keys"),
		                    retainPosition = (!gotoEnd && taskKeys),
		                    completeCallback = element.data(COMPLETE_CALLBACK);

		                if (retainPosition) {
		                    cssValues = kendo.getComputedStyles(element[0], taskKeys);
		                }

		                if (completeCallback) {
		                    completeCallback();
		                }

		                if (retainPosition) {
		                    element.css(cssValues);
		                }

		                return element
		                        .removeData("keys")
		                        .stop(clearQueue);
		            }
		        });
		    }

		    function animationProperty(element, property) {
		        if (transforms) {
		            var transform = element.css(TRANSFORM);
		            if (transform == NONE) {
		                return property == "scale" ? 1 : 0;
		            }

		            var match = transform.match(new RegExp(property + "\\s*\\(([\\d\\w\\.]+)")),
		                computed = 0;

		            if (match) {
		                computed = parseInteger(match[1]);
		            } else {
		                match = transform.match(matrix3dRegExp) || [0, 0, 0, 0, 0];
		                property = property.toLowerCase();

		                if (translateXRegExp.test(property)) {
		                    computed = parseFloat(match[3] / match[2]);
		                } else if (property == "translatey") {
		                    computed = parseFloat(match[4] / match[2]);
		                } else if (property == "scale") {
		                    computed = parseFloat(match[2]);
		                } else if (property == "rotate") {
		                    computed = parseFloat(Math.atan2(match[2], match[1]));
		                }
		            }

		            return computed;
		        } else {
		            return parseFloat(element.css(property));
		        }
		    }

		    var EffectSet = kendo.Class.extend({
		        init: function(element, options) {
		            var that = this;

		            that.element = element;
		            that.effects = [];
		            that.options = options;
		            that.restore = [];
		        },

		        run: function(effects) {
		            var that = this,
		                effect,
		                idx, jdx,
		                length = effects.length,
		                element = that.element,
		                options = that.options,
		                deferred = $.Deferred(),
		                start = {},
		                end = {},
		                target,
		                children,
		                childrenLength;

		            that.effects = effects;

		            deferred.then($.proxy(that, "complete"));

		            element.data("animating", true);

		            for (idx = 0; idx < length; idx ++) {
		                effect = effects[idx];

		                effect.setReverse(options.reverse);
		                effect.setOptions(options);

		                that.addRestoreProperties(effect.restore);

		                effect.prepare(start, end);

		                children = effect.children();

		                for (jdx = 0, childrenLength = children.length; jdx < childrenLength; jdx ++) {
		                    children[jdx].duration(options.duration).run();
		                }
		            }

		            // legacy support for options.properties
		            for (var effectName in options.effects) {
		                extend(end, options.effects[effectName].properties);
		            }

		            // Show the element initially
		            if (!element.is(":visible")) {
		                extend(start, { display: element.data("olddisplay") || "block" });
		            }

		            if (transforms && !options.reset) {
		                target = element.data("targetTransform");

		                if (target) {
		                    start = extend(target, start);
		                }
		            }

		            start = normalizeCSS(element, start);

		            if (transforms && !transitions) {
		                start = strip3DTransforms(start);
		            }

		            element.css(start)
		                   .css(TRANSFORM); // Nudge

		            for (idx = 0; idx < length; idx ++) {
		                effects[idx].setup();
		            }

		            if (options.init) {
		                options.init();
		            }

		            element.data("targetTransform", end);
		            fx.animate(element, end, extend({}, options, { complete: deferred.resolve }));

		            return deferred.promise();
		        },

		        stop: function() {
		            $(this.element).kendoStop(true, true);
		        },

		        addRestoreProperties: function(restore) {
		            var element = this.element,
		                value,
		                i = 0,
		                length = restore.length;

		            for (; i < length; i ++) {
		                value = restore[i];

		                this.restore.push(value);

		                if (!element.data(value)) {
		                    element.data(value, element.css(value));
		                }
		            }
		        },

		        restoreCallback: function() {
		            var element = this.element;

		            for (var i = 0, length = this.restore.length; i < length; i ++) {
		                var value = this.restore[i];
		                element.css(value, element.data(value));
		            }
		        },

		        complete: function() {
		            var that = this,
		                idx = 0,
		                element = that.element,
		                options = that.options,
		                effects = that.effects,
		                length = effects.length;

		            element
		                .removeData("animating")
		                .dequeue(); // call next animation from the queue

		            if (options.hide) {
		                element.data("olddisplay", element.css("display")).hide();
		            }

		            this.restoreCallback();

		            if (hasZoom && !transforms) {
		                setTimeout($.proxy(this, "restoreCallback"), 0); // Again jQuery callback in IE8-
		            }

		            for (; idx < length; idx ++) {
		                effects[idx].teardown();
		            }

		            if (options.completeCallback) {
		                options.completeCallback(element);
		            }
		        }
		    });

		    fx.promise = function(element, options) {
		        var effects = [],
		            effectClass,
		            effectSet = new EffectSet(element, options),
		            parsedEffects = kendo.parseEffects(options.effects),
		            effect;

		        options.effects = parsedEffects;

		        for (var effectName in parsedEffects) {
		            effectClass = fx[capitalize(effectName)];

		            if (effectClass) {
		                effect = new effectClass(element, parsedEffects[effectName].direction);
		                effects.push(effect);
		           }
		        }

		        if (effects[0]) {
		            effectSet.run(effects);
		        } else { // Not sure how would an fx promise reach this state - means that you call kendoAnimate with no valid effects? Why?
		            if (!element.is(":visible")) {
		                element.css({ display: element.data("olddisplay") || "block" }).css("display");
		            }

		            if (options.init) {
		                options.init();
		            }

		            element.dequeue();
		            effectSet.complete();
		        }
		    };

		    extend(fx, {
		        animate: function(elements, properties, options) {
		            var useTransition = options.transition !== false;
		            delete options.transition;

		            if (transitions && "transition" in fx && useTransition) {
		                fx.transition(elements, properties, options);
		            } else {
		                if (transforms) {
		                    elements.animate(strip3DTransforms(properties), { queue: false, show: false, hide: false, duration: options.duration, complete: options.complete }); // Stop animate from showing/hiding the element to be able to hide it later on.
		                } else {
		                    elements.each(function() {
		                        var element = $(this),
		                            multiple = {};

		                        each(transformProps, function(idx, value) { // remove transforms to avoid IE and older browsers confusion
		                            var params,
		                                currentValue = properties ? properties[value]+ " " : null; // We need to match

		                            if (currentValue) {
		                                var single = properties;

		                                if (value in scaleProperties && properties[value] !== undefined) {
		                                    params = currentValue.match(cssParamsRegExp);
		                                    if (transforms) {
		                                        extend(single, { scale: +params[0] });
		                                    }
		                                } else {
		                                    if (value in translateProperties && properties[value] !== undefined) {
		                                        var position = element.css(POSITION),
		                                            isFixed = (position == "absolute" || position == "fixed");

		                                        if (!element.data(TRANSLATE)) {
		                                            if (isFixed) {
		                                                element.data(TRANSLATE, {
		                                                    top: parseCSS(element, "top") || 0,
		                                                    left: parseCSS(element, "left") || 0,
		                                                    bottom: parseCSS(element, "bottom"),
		                                                    right: parseCSS(element, "right")
		                                                });
		                                            } else {
		                                                element.data(TRANSLATE, {
		                                                    top: parseCSS(element, "marginTop") || 0,
		                                                    left: parseCSS(element, "marginLeft") || 0
		                                                });
		                                            }
		                                        }

		                                        var originalPosition = element.data(TRANSLATE);

		                                        params = currentValue.match(cssParamsRegExp);
		                                        if (params) {

		                                            var dX = value == TRANSLATE + "y" ? +null : +params[1],
		                                                dY = value == TRANSLATE + "y" ? +params[1] : +params[2];

		                                            if (isFixed) {
		                                                if (!isNaN(originalPosition.right)) {
		                                                    if (!isNaN(dX)) { extend(single, { right: originalPosition.right - dX }); }
		                                                } else {
		                                                    if (!isNaN(dX)) { extend(single, { left: originalPosition.left + dX }); }
		                                                }

		                                                if (!isNaN(originalPosition.bottom)) {
		                                                    if (!isNaN(dY)) { extend(single, { bottom: originalPosition.bottom - dY }); }
		                                                } else {
		                                                    if (!isNaN(dY)) { extend(single, { top: originalPosition.top + dY }); }
		                                                }
		                                            } else {
		                                                if (!isNaN(dX)) { extend(single, { marginLeft: originalPosition.left + dX }); }
		                                                if (!isNaN(dY)) { extend(single, { marginTop: originalPosition.top + dY }); }
		                                            }
		                                        }
		                                    }
		                                }

		                                if (!transforms && value != "scale" && value in single) {
		                                    delete single[value];
		                                }

		                                if (single) {
		                                    extend(multiple, single);
		                                }
		                            }
		                        });

		                        if (browser.msie) {
		                            delete multiple.scale;
		                        }

		                        element.animate(multiple, { queue: false, show: false, hide: false, duration: options.duration, complete: options.complete }); // Stop animate from showing/hiding the element to be able to hide it later on.
		                    });
		                }
		            }
		        }
		    });

		    fx.animatedPromise = fx.promise;

		    var Effect = kendo.Class.extend({
		        init: function(element, direction) {
		            var that = this;
		            that.element = element;
		            that._direction = direction;
		            that.options = {};
		            that._additionalEffects = [];

		            if (!that.restore) {
		                that.restore = [];
		            }
		        },

		// Public API
		        reverse: function() {
		            this._reverse = true;
		            return this.run();
		        },

		        play: function() {
		            this._reverse = false;
		            return this.run();
		        },

		        add: function(additional) {
		            this._additionalEffects.push(additional);
		            return this;
		        },

		        direction: function(value) {
		            this._direction = value;
		            return this;
		        },

		        duration: function(duration) {
		            this._duration = duration;
		            return this;
		        },

		        compositeRun: function() {
		            var that = this,
		                effectSet = new EffectSet(that.element, { reverse: that._reverse, duration: that._duration }),
		                effects = that._additionalEffects.concat([ that ]);

		            return effectSet.run(effects);
		        },

		        run: function() {
		            if (this._additionalEffects && this._additionalEffects[0]) {
		                return this.compositeRun();
		            }

		            var that = this,
		                element = that.element,
		                idx = 0,
		                restore = that.restore,
		                length = restore.length,
		                value,
		                deferred = $.Deferred(),
		                start = {},
		                end = {},
		                target,
		                children = that.children(),
		                childrenLength = children.length;

		            deferred.then($.proxy(that, "_complete"));

		            element.data("animating", true);

		            for (idx = 0; idx < length; idx ++) {
		                value = restore[idx];

		                if (!element.data(value)) {
		                    element.data(value, element.css(value));
		                }
		            }

		            for (idx = 0; idx < childrenLength; idx ++) {
		                children[idx].duration(that._duration).run();
		            }

		            that.prepare(start, end);

		            if (!element.is(":visible")) {
		                extend(start, { display: element.data("olddisplay") || "block" });
		            }

		            if (transforms) {
		                target = element.data("targetTransform");

		                if (target) {
		                    start = extend(target, start);
		                }
		            }

		            start = normalizeCSS(element, start);

		            if (transforms && !transitions) {
		                start = strip3DTransforms(start);
		            }

		            element.css(start).css(TRANSFORM); // Trick webkit into re-rendering

		            that.setup();

		            element.data("targetTransform", end);
		            fx.animate(element, end, { duration: that._duration, complete: deferred.resolve });

		            return deferred.promise();
		        },

		        stop: function() {
		            var idx = 0,
		                children = this.children(),
		                childrenLength = children.length;

		            for (idx = 0; idx < childrenLength; idx ++) {
		                children[idx].stop();
		            }

		            $(this.element).kendoStop(true, true);
		            return this;
		        },

		        restoreCallback: function() {
		            var element = this.element;

		            for (var i = 0, length = this.restore.length; i < length; i ++) {
		                var value = this.restore[i];
		                element.css(value, element.data(value));
		            }
		        },

		        _complete: function() {
		            var that = this,
		                element = that.element;

		            element
		                .removeData("animating")
		                .dequeue(); // call next animation from the queue

		            that.restoreCallback();

		            if (that.shouldHide()) {
		                element.data("olddisplay", element.css("display")).hide();
		            }

		            if (hasZoom && !transforms) {
		                setTimeout($.proxy(that, "restoreCallback"), 0); // Again jQuery callback in IE8-
		            }

		            that.teardown();
		        },

		        /////////////////////////// Support for kendo.animate;
		        setOptions: function(options) {
		            extend(true, this.options, options);
		        },

		        children: function() {
		            return [];
		        },

		        shouldHide: $.noop,

		        setup: $.noop,
		        prepare: $.noop,
		        teardown: $.noop,
		        directions: [],

		        setReverse: function(reverse) {
		            this._reverse = reverse;
		            return this;
		        }
		    });

		    function capitalize(word) {
		        return word.charAt(0).toUpperCase() + word.substring(1);
		    }

		    function createEffect(name, definition) {
		        var effectClass = Effect.extend(definition),
		            directions = effectClass.prototype.directions;

		        fx[capitalize(name)] = effectClass;

		        fx.Element.prototype[name] = function(direction, opt1, opt2, opt3) {
		            return new effectClass(this.element, direction, opt1, opt2, opt3);
		        };

		        each(directions, function(idx, theDirection) {
		            fx.Element.prototype[name + capitalize(theDirection)] = function(opt1, opt2, opt3) {
		                return new effectClass(this.element, theDirection, opt1, opt2, opt3);
		            };
		        });
		    }

		    var FOUR_DIRECTIONS = ["left", "right", "up", "down"],
		        IN_OUT = ["in", "out"];

		    createEffect("slideIn", {
		        directions: FOUR_DIRECTIONS,

		        divisor: function(value) {
		            this.options.divisor = value;
		            return this;
		        },

		        prepare: function(start, end) {
		            var that = this,
		                tmp,
		                element = that.element,
		                direction = directions[that._direction],
		                offset = -direction.modifier * (direction.vertical ? element.outerHeight() : element.outerWidth()),
		                startValue = offset / (that.options && that.options.divisor || 1) + PX,
		                endValue = "0px";

		            if (that._reverse) {
		                tmp = start;
		                start = end;
		                end = tmp;
		            }

		            if (transforms) {
		                start[direction.transition] = startValue;
		                end[direction.transition] = endValue;
		            } else {
		                start[direction.property] = startValue;
		                end[direction.property] = endValue;
		            }
		        }
		    });

		    createEffect("tile", {
		        directions: FOUR_DIRECTIONS,

		        init: function(element, direction, previous) {
		            Effect.prototype.init.call(this, element, direction);
		            this.options = { previous: previous };
		        },

		        previousDivisor: function(value) {
		            this.options.previousDivisor = value;
		            return this;
		        },

		        children: function() {
		            var that = this,
		                reverse = that._reverse,
		                previous = that.options.previous,
		                divisor = that.options.previousDivisor || 1,
		                dir = that._direction;

		            var children = [ kendo.fx(that.element).slideIn(dir).setReverse(reverse) ];

		            if (previous) {
		                children.push( kendo.fx(previous).slideIn(directions[dir].reverse).divisor(divisor).setReverse(!reverse) );
		            }

		            return children;
		        }
		    });

		    function createToggleEffect(name, property, defaultStart, defaultEnd) {
		        createEffect(name, {
		            directions: IN_OUT,

		            startValue: function(value) {
		                this._startValue = value;
		                return this;
		            },

		            endValue: function(value) {
		                this._endValue = value;
		                return this;
		            },

		            shouldHide: function() {
		               return this._shouldHide;
		            },

		            prepare: function(start, end) {
		                var that = this,
		                    startValue,
		                    endValue,
		                    out = this._direction === "out",
		                    startDataValue = that.element.data(property),
		                    startDataValueIsSet = !(isNaN(startDataValue) || startDataValue == defaultStart);

		                if (startDataValueIsSet) {
		                    startValue = startDataValue;
		                } else if (typeof this._startValue !== "undefined") {
		                    startValue = this._startValue;
		                } else {
		                    startValue = out ? defaultStart : defaultEnd;
		                }

		                if (typeof this._endValue !== "undefined") {
		                    endValue = this._endValue;
		                } else {
		                    endValue = out ? defaultEnd : defaultStart;
		                }

		                if (this._reverse) {
		                    start[property] = endValue;
		                    end[property] = startValue;
		                } else {
		                    start[property] = startValue;
		                    end[property] = endValue;
		                }

		                that._shouldHide = end[property] === defaultEnd;
		            }
		        });
		    }

		    createToggleEffect("fade", "opacity", 1, 0);
		    createToggleEffect("zoom", "scale", 1, 0.01);

		    createEffect("slideMargin", {
		        prepare: function(start, end) {
		            var that = this,
		                element = that.element,
		                options = that.options,
		                origin = element.data(ORIGIN),
		                offset = options.offset,
		                margin,
		                reverse = that._reverse;

		            if (!reverse && origin === null) {
		                element.data(ORIGIN, parseFloat(element.css("margin-" + options.axis)));
		            }

		            margin = (element.data(ORIGIN) || 0);
		            end["margin-" + options.axis] = !reverse ? margin + offset : margin;
		        }
		    });

		    createEffect("slideTo", {
		        prepare: function(start, end) {
		            var that = this,
		                element = that.element,
		                options = that.options,
		                offset = options.offset.split(","),
		                reverse = that._reverse;

		            if (transforms) {
		                end.translatex = !reverse ? offset[0] : 0;
		                end.translatey = !reverse ? offset[1] : 0;
		            } else {
		                end.left = !reverse ? offset[0] : 0;
		                end.top = !reverse ? offset[1] : 0;
		            }
		            element.css("left");
		        }
		    });

		    createEffect("expand", {
		        directions: ["horizontal", "vertical"],

		        restore: [ OVERFLOW ],

		        prepare: function(start, end) {
		            var that = this,
		                element = that.element,
		                options = that.options,
		                reverse = that._reverse,
		                property = that._direction === "vertical" ? HEIGHT : WIDTH,
		                setLength = element[0].style[property],
		                oldLength = element.data(property),
		                length = parseFloat(oldLength || setLength),
		                realLength = round(element.css(property, AUTO)[property]());

		            start.overflow = HIDDEN;

		            length = (options && options.reset) ? realLength || length : length || realLength;

		            end[property] = (reverse ? 0 : length) + PX;
		            start[property] = (reverse ? length : 0) + PX;

		            if (oldLength === undefined) {
		                element.data(property, setLength);
		            }
		        },

		        shouldHide: function() {
		           return this._reverse;
		        },

		        teardown: function() {
		            var that = this,
		                element = that.element,
		                property = that._direction === "vertical" ? HEIGHT : WIDTH,
		                length = element.data(property);

		            if (length == AUTO || length === BLANK) {
		                setTimeout(function() { element.css(property, AUTO).css(property); }, 0); // jQuery animate complete callback in IE is called before the last animation step!
		            }
		        }
		    });

		    var TRANSFER_START_STATE = { position: "absolute", marginLeft: 0, marginTop: 0, scale: 1 };
		    /**
		     * Intersection point formulas are taken from here - http://zonalandeducation.com/mmts/intersections/intersectionOfTwoLines1/intersectionOfTwoLines1.html
		     * Formula for a linear function from two points from here - http://demo.activemath.org/ActiveMath2/search/show.cmd?id=mbase://AC_UK_calculus/functions/ex_linear_equation_two_points
		     * The transform origin point is the intersection point of the two lines from the top left corners/top right corners of the element and target.
		     * The math and variables below MAY BE SIMPLIFIED (zeroes removed), but this would make the formula too cryptic.
		     */
		    createEffect("transfer", {
		        init: function(element, target) {
		            this.element = element;
		            this.options = { target: target };
		            this.restore = [];
		        },

		        setup: function() {
		            this.element.appendTo(document.body);
		        },

		        prepare: function(start, end) {
		            var that = this,
		                element = that.element,
		                outerBox = fx.box(element),
		                innerBox = fx.box(that.options.target),
		                currentScale = animationProperty(element, "scale"),
		                scale = fx.fillScale(innerBox, outerBox),
		                transformOrigin = fx.transformOrigin(innerBox, outerBox);

		            extend(start, TRANSFER_START_STATE);
		            end.scale = 1;

		            element.css(TRANSFORM, "scale(1)").css(TRANSFORM);
		            element.css(TRANSFORM, "scale(" + currentScale + ")");

		            start.top = outerBox.top;
		            start.left = outerBox.left;
		            start.transformOrigin = transformOrigin.x + PX + " " + transformOrigin.y + PX;

		            if (that._reverse) {
		                start.scale = scale;
		            } else {
		                end.scale = scale;
		            }
		        }
		    });


		    var CLIPS = {
		        top: "rect(auto auto $size auto)",
		        bottom: "rect($size auto auto auto)",
		        left: "rect(auto $size auto auto)",
		        right: "rect(auto auto auto $size)"
		    };

		    var ROTATIONS = {
		        top:    { start: "rotatex(0deg)", end: "rotatex(180deg)" },
		        bottom: { start: "rotatex(-180deg)", end: "rotatex(0deg)" },
		        left:   { start: "rotatey(0deg)", end: "rotatey(-180deg)" },
		        right:  { start: "rotatey(180deg)", end: "rotatey(0deg)" }
		    };

		    function clipInHalf(container, direction) {
		        var vertical = kendo.directions[direction].vertical,
		            size = (container[vertical ? HEIGHT : WIDTH]() / 2) + "px";

		        return CLIPS[direction].replace("$size", size);
		    }

		    createEffect("turningPage", {
		        directions: FOUR_DIRECTIONS,

		        init: function(element, direction, container) {
		            Effect.prototype.init.call(this, element, direction);
		            this._container = container;
		        },

		        prepare: function(start, end) {
		            var that = this,
		                reverse = that._reverse,
		                direction = reverse ? directions[that._direction].reverse : that._direction,
		                rotation = ROTATIONS[direction];

		            start.zIndex = 1;

		            if (that._clipInHalf) {
		               start.clip = clipInHalf(that._container, kendo.directions[direction].reverse);
		            }

		            start[BACKFACE] = HIDDEN;

		            end[TRANSFORM] = TRANSFORM_PERSPECTIVE + (reverse ? rotation.start : rotation.end);
		            start[TRANSFORM] = TRANSFORM_PERSPECTIVE + (reverse ? rotation.end : rotation.start);
		        },

		        setup: function() {
		            this._container.append(this.element);
		        },

		        face: function(value) {
		            this._face = value;
		            return this;
		        },

		        shouldHide: function() {
		            var that = this,
		                reverse = that._reverse,
		                face = that._face;

		            return (reverse && !face) || (!reverse && face);
		        },

		        clipInHalf: function(value) {
		            this._clipInHalf = value;
		            return this;
		        },

		        temporary: function() {
		            this.element.addClass('temp-page');
		            return this;
		        }
		    });

		    createEffect("staticPage", {
		        directions: FOUR_DIRECTIONS,

		        init: function(element, direction, container) {
		            Effect.prototype.init.call(this, element, direction);
		            this._container = container;
		        },

		        restore: ["clip"],

		        prepare: function(start, end) {
		            var that = this,
		                direction = that._reverse ? directions[that._direction].reverse : that._direction;

		            start.clip = clipInHalf(that._container, direction);
		            start.opacity = 0.999;
		            end.opacity = 1;
		        },

		        shouldHide: function() {
		            var that = this,
		                reverse = that._reverse,
		                face = that._face;

		            return (reverse && !face) || (!reverse && face);
		        },

		        face: function(value) {
		            this._face = value;
		            return this;
		        }
		    });

		    createEffect("pageturn", {
		        directions: ["horizontal", "vertical"],

		        init: function(element, direction, face, back) {
		            Effect.prototype.init.call(this, element, direction);
		            this.options = {};
		            this.options.face = face;
		            this.options.back = back;
		        },

		        children: function() {
		            var that = this,
		                options = that.options,
		                direction = that._direction === "horizontal" ? "left" : "top",
		                reverseDirection = kendo.directions[direction].reverse,
		                reverse = that._reverse,
		                temp,
		                faceClone = options.face.clone(true).removeAttr("id"),
		                backClone = options.back.clone(true).removeAttr("id"),
		                element = that.element;

		            if (reverse) {
		                temp = direction;
		                direction = reverseDirection;
		                reverseDirection = temp;
		            }

		            return [
		                kendo.fx(options.face).staticPage(direction, element).face(true).setReverse(reverse),
		                kendo.fx(options.back).staticPage(reverseDirection, element).setReverse(reverse),
		                kendo.fx(faceClone).turningPage(direction, element).face(true).clipInHalf(true).temporary().setReverse(reverse),
		                kendo.fx(backClone).turningPage(reverseDirection, element).clipInHalf(true).temporary().setReverse(reverse)
		            ];
		        },

		        prepare: function(start, end) {
		            start[PERSPECTIVE] = DEFAULT_PERSPECTIVE;
		            start.transformStyle = "preserve-3d";
		            // hack to trigger transition end.
		            start.opacity = 0.999;
		            end.opacity = 1;
		        },

		        teardown: function() {
		            this.element.find(".temp-page").remove();
		        }
		    });

		    createEffect("flip", {
		        directions: ["horizontal", "vertical"],

		        init: function(element, direction, face, back) {
		            Effect.prototype.init.call(this, element, direction);
		            this.options = {};
		            this.options.face = face;
		            this.options.back = back;
		        },

		        children: function() {
		            var that = this,
		                options = that.options,
		                direction = that._direction === "horizontal" ? "left" : "top",
		                reverseDirection = kendo.directions[direction].reverse,
		                reverse = that._reverse,
		                temp,
		                element = that.element;

		            if (reverse) {
		                temp = direction;
		                direction = reverseDirection;
		                reverseDirection = temp;
		            }

		            return [
		                kendo.fx(options.face).turningPage(direction, element).face(true).setReverse(reverse),
		                kendo.fx(options.back).turningPage(reverseDirection, element).setReverse(reverse)
		            ];
		        },

		        prepare: function(start) {
		            start[PERSPECTIVE] = DEFAULT_PERSPECTIVE;
		            start.transformStyle = "preserve-3d";
		        }
		    });

		    var RESTORE_OVERFLOW = !support.mobileOS.android;
		    var IGNORE_TRANSITION_EVENT_SELECTOR = ".km-touch-scrollbar, .km-actionsheet-wrapper";

		    createEffect("replace", {
		        _before: $.noop,
		        _after: $.noop,
		        init: function(element, previous, transitionClass) {
		            Effect.prototype.init.call(this, element);
		            this._previous = $(previous);
		            this._transitionClass = transitionClass;
		        },

		        duration: function() {
		            throw new Error("The replace effect does not support duration setting; the effect duration may be customized through the transition class rule");
		        },

		        beforeTransition: function(callback) {
		            this._before = callback;
		            return this;
		        },

		        afterTransition: function(callback) {
		            this._after = callback;
		            return this;
		        },

		        _both: function() {
		            return $().add(this._element).add(this._previous);
		        },

		        _containerClass: function() {
		            var direction = this._direction,
		                containerClass = "k-fx k-fx-start k-fx-" + this._transitionClass;

		            if (direction) {
		                containerClass += " k-fx-" + direction;
		            }

		            if (this._reverse) {
		                containerClass += " k-fx-reverse";
		            }

		            return containerClass;
		        },

		        complete: function(e) {
		            if (!this.deferred || (e && $(e.target).is(IGNORE_TRANSITION_EVENT_SELECTOR))) {
		                return;
		            }

		            var container = this.container;

		            container
		                .removeClass("k-fx-end")
		                .removeClass(this._containerClass())
		                .off(transitions.event, this.completeProxy);

		            this._previous.hide().removeClass("k-fx-current");
		            this.element.removeClass("k-fx-next");

		            if (RESTORE_OVERFLOW) {
		                container.css(OVERFLOW, "");
		            }

		            if (!this.isAbsolute) {
		                this._both().css(POSITION, "");
		            }

		            this.deferred.resolve();
		            delete this.deferred;
		        },

		        run: function() {
		            if (this._additionalEffects && this._additionalEffects[0]) {
		                return this.compositeRun();
		            }

		            var that = this,
		                element = that.element,
		                previous = that._previous,
		                container = element.parents().filter(previous.parents()).first(),
		                both = that._both(),
		                deferred = $.Deferred(),
		                originalPosition = element.css(POSITION),
		                originalOverflow;

		            // edge case for grid/scheduler, where the previous is already destroyed.
		            if (!container.length) {
		                container = element.parent();
		            }

		            this.container = container;
		            this.deferred = deferred;
		            this.isAbsolute = originalPosition  == "absolute";

		            if (!this.isAbsolute) {
		                both.css(POSITION, "absolute");
		            }

		            if (RESTORE_OVERFLOW) {
		                originalOverflow = container.css(OVERFLOW);
		                container.css(OVERFLOW, "hidden");
		            }

		            if (!transitions) {
		                this.complete();
		            } else {
		                element.addClass("k-fx-hidden");

		                container.addClass(this._containerClass());

		                this.completeProxy = $.proxy(this, "complete");
		                container.on(transitions.event, this.completeProxy);

		                kendo.animationFrame(function() {
		                    element.removeClass("k-fx-hidden").addClass("k-fx-next");
		                    previous.css("display", "").addClass("k-fx-current");
		                    that._before(previous, element);
		                    kendo.animationFrame(function() {
		                        container.removeClass("k-fx-start").addClass("k-fx-end");
		                        that._after(previous, element);
		                    });
		                });
		            }

		            return deferred.promise();
		        },

		        stop: function() {
		            this.complete();
		        }
		    });

		    var Animation = kendo.Class.extend({
		        init: function() {
		            var that = this;
		            that._tickProxy = proxy(that._tick, that);
		            that._started = false;
		        },

		        tick: $.noop,
		        done: $.noop,
		        onEnd: $.noop,
		        onCancel: $.noop,

		        start: function() {
		            if (!this.enabled()) {
		                return;
		            }

		            if (!this.done()) {
		                this._started = true;
		                kendo.animationFrame(this._tickProxy);
		            } else {
		                this.onEnd();
		            }
		        },

		        enabled: function() {
		            return true;
		        },

		        cancel: function() {
		            this._started = false;
		            this.onCancel();
		        },

		        _tick: function() {
		            var that = this;
		            if (!that._started) { return; }

		            that.tick();

		            if (!that.done()) {
		                kendo.animationFrame(that._tickProxy);
		            } else {
		                that._started = false;
		                that.onEnd();
		            }
		        }
		    });

		    var Transition = Animation.extend({
		        init: function(options) {
		            var that = this;
		            extend(that, options);
		            Animation.fn.init.call(that);
		        },

		        done: function() {
		            return this.timePassed() >= this.duration;
		        },

		        timePassed: function() {
		            return Math.min(this.duration, (new Date()) - this.startDate);
		        },

		        moveTo: function(options) {
		            var that = this,
		                movable = that.movable;

		            that.initial = movable[that.axis];
		            that.delta = options.location - that.initial;

		            that.duration = typeof options.duration == "number" ? options.duration : 300;

		            that.tick = that._easeProxy(options.ease);

		            that.startDate = new Date();
		            that.start();
		        },

		        _easeProxy: function(ease) {
		            var that = this;

		            return function() {
		                that.movable.moveAxis(that.axis, ease(that.timePassed(), that.initial, that.delta, that.duration));
		            };
		        }
		    });

		    extend(Transition, {
		        easeOutExpo: function (t, b, c, d) {
		            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
		        },

		        easeOutBack: function (t, b, c, d, s) {
		            s = 1.70158;
		            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		        }
		    });

		    fx.Animation = Animation;
		    fx.Transition = Transition;
		    fx.createEffect = createEffect;

		    fx.box = function(element) {
		        element = $(element);
		        var result = element.offset();
		        result.width = element.outerWidth();
		        result.height = element.outerHeight();
		        return result;
		    };

		    fx.transformOrigin = function(inner, outer) {
		        var x = (inner.left - outer.left) * outer.width / (outer.width - inner.width),
		            y = (inner.top - outer.top) * outer.height / (outer.height - inner.height);

		        return {
		            x: isNaN(x) ? 0 : x,
		            y: isNaN(y) ? 0 : y
		        };
		    };

		    fx.fillScale = function(inner, outer) {
		        return Math.min(inner.width / outer.width, inner.height / outer.height);
		    };

		    fx.fitScale = function(inner, outer) {
		        return Math.max(inner.width / outer.width, inner.height / outer.height);
		    };
		})(window.kendo.jQuery);

		return window.kendo;

		}, __webpack_require__(422));


	/***/ }

	/******/ });

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ({

	/***/ 0:
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(451);


	/***/ },

	/***/ 421:
	/***/ function(module, exports) {

		module.exports = __webpack_require__(6);

	/***/ },

	/***/ 422:
	/***/ function(module, exports) {

		module.exports = function() { throw new Error("define cannot be used indirect"); };


	/***/ },

	/***/ 437:
	/***/ function(module, exports) {

		module.exports = __webpack_require__(13);

	/***/ },

	/***/ 451:
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
		    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(421), __webpack_require__(437) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		})(function(){

		var __meta__ = { // jshint ignore:line
		    id: "draganddrop",
		    name: "Drag & drop",
		    category: "framework",
		    description: "Drag & drop functionality for any DOM element.",
		    depends: [ "core", "userevents" ]
		};

		(function ($, undefined) {
		    var kendo = window.kendo,
		        support = kendo.support,
		        document = window.document,
		        $window = $(window),
		        Class = kendo.Class,
		        Widget = kendo.ui.Widget,
		        Observable = kendo.Observable,
		        UserEvents = kendo.UserEvents,
		        proxy = $.proxy,
		        extend = $.extend,
		        getOffset = kendo.getOffset,
		        draggables = {},
		        dropTargets = {},
		        dropAreas = {},
		        lastDropTarget,
		        elementUnderCursor = kendo.elementUnderCursor,
		        KEYUP = "keyup",
		        CHANGE = "change",

		        // Draggable events
		        DRAGSTART = "dragstart",
		        HOLD = "hold",
		        DRAG = "drag",
		        DRAGEND = "dragend",
		        DRAGCANCEL = "dragcancel",
		        HINTDESTROYED = "hintDestroyed",

		        // DropTarget events
		        DRAGENTER = "dragenter",
		        DRAGLEAVE = "dragleave",
		        DROP = "drop";

		    function contains(parent, child) {
		        try {
		            return $.contains(parent, child) || parent == child;
		        } catch (e) {
		            return false;
		        }
		    }

		    function numericCssPropery(element, property) {
		        return parseInt(element.css(property), 10) || 0;
		    }

		    function within(value, range) {
		        return Math.min(Math.max(value, range.min), range.max);
		    }

		    function containerBoundaries(container, element) {
		        var offset = getOffset(container),
		            minX = offset.left + numericCssPropery(container, "borderLeftWidth") + numericCssPropery(container, "paddingLeft"),
		            minY = offset.top + numericCssPropery(container, "borderTopWidth") + numericCssPropery(container, "paddingTop"),
		            maxX = minX + container.width() - element.outerWidth(true),
		            maxY = minY + container.height() - element.outerHeight(true);

		        return {
		            x: { min: minX, max: maxX },
		            y: { min: minY, max: maxY }
		        };
		    }

		    function checkTarget(target, targets, areas) {
		        var theTarget, theFilter, i = 0,
		            targetLen = targets && targets.length,
		            areaLen = areas && areas.length;

		        while (target && target.parentNode) {
		            for (i = 0; i < targetLen; i ++) {
		                theTarget = targets[i];
		                if (theTarget.element[0] === target) {
		                    return { target: theTarget, targetElement: target };
		                }
		            }

		            for (i = 0; i < areaLen; i ++) {
		                theFilter = areas[i];
		                if ($.contains(theFilter.element[0], target) && support.matchesSelector.call(target, theFilter.options.filter)) {
		                    return { target: theFilter, targetElement: target };
		                }
		            }

		            target = target.parentNode;
		        }

		        return undefined;
		    }

		    var TapCapture = Observable.extend({
		        init: function(element, options) {
		            var that = this,
		                domElement = element[0];

		            that.capture = false;

		            if (domElement.addEventListener) {
		                $.each(kendo.eventMap.down.split(" "), function() {
		                    domElement.addEventListener(this, proxy(that._press, that), true);
		                });
		                $.each(kendo.eventMap.up.split(" "), function() {
		                    domElement.addEventListener(this, proxy(that._release, that), true);
		                });
		            } else {
		                $.each(kendo.eventMap.down.split(" "), function() {
		                    domElement.attachEvent(this, proxy(that._press, that));
		                });
		                $.each(kendo.eventMap.up.split(" "), function() {
		                    domElement.attachEvent(this, proxy(that._release, that));
		                });
		            }

		            Observable.fn.init.call(that);

		            that.bind(["press", "release"], options || {});
		        },

		        captureNext: function() {
		            this.capture = true;
		        },

		        cancelCapture: function() {
		            this.capture = false;
		        },

		        _press: function(e) {
		            var that = this;
		            that.trigger("press");
		            if (that.capture) {
		                e.preventDefault();
		            }
		        },

		        _release: function(e) {
		            var that = this;
		            that.trigger("release");

		            if (that.capture) {
		                e.preventDefault();
		                that.cancelCapture();
		            }
		        }
		    });

		    var PaneDimension = Observable.extend({
		        init: function(options) {
		            var that = this;
		            Observable.fn.init.call(that);

		            that.forcedEnabled = false;

		            $.extend(that, options);

		            that.scale = 1;

		            if (that.horizontal) {
		                that.measure = "offsetWidth";
		                that.scrollSize = "scrollWidth";
		                that.axis = "x";
		            } else {
		                that.measure = "offsetHeight";
		                that.scrollSize = "scrollHeight";
		                that.axis = "y";
		            }
		        },

		        makeVirtual: function() {
		            $.extend(this, {
		                virtual: true,
		                forcedEnabled: true,
		                _virtualMin: 0,
		                _virtualMax: 0
		            });
		        },

		        virtualSize: function(min, max) {
		            if (this._virtualMin !== min || this._virtualMax !== max) {
		                this._virtualMin = min;
		                this._virtualMax = max;
		                this.update();
		            }
		        },

		        outOfBounds: function(offset) {
		            return offset > this.max || offset < this.min;
		        },

		        forceEnabled: function() {
		            this.forcedEnabled = true;
		        },

		        getSize: function() {
		            return this.container[0][this.measure];
		        },

		        getTotal: function() {
		            return this.element[0][this.scrollSize];
		        },

		        rescale: function(scale) {
		            this.scale = scale;
		        },

		        update: function(silent) {
		            var that = this,
		                total = that.virtual ? that._virtualMax : that.getTotal(),
		                scaledTotal = total * that.scale,
		                size = that.getSize();

		            if (total === 0 && !that.forcedEnabled) {
		                return; // we are not visible.
		            }

		            that.max = that.virtual ? -that._virtualMin : 0;
		            that.size = size;
		            that.total = scaledTotal;
		            that.min = Math.min(that.max, size - scaledTotal);
		            that.minScale = size / total;
		            that.centerOffset = (scaledTotal - size) / 2;

		            that.enabled = that.forcedEnabled || (scaledTotal > size);

		            if (!silent) {
		                that.trigger(CHANGE, that);
		            }
		        }
		    });

		    var PaneDimensions = Observable.extend({
		        init: function(options) {
		            var that = this;

		            Observable.fn.init.call(that);

		            that.x = new PaneDimension(extend({horizontal: true}, options));
		            that.y = new PaneDimension(extend({horizontal: false}, options));
		            that.container = options.container;
		            that.forcedMinScale = options.minScale;
		            that.maxScale = options.maxScale || 100;

		            that.bind(CHANGE, options);
		        },

		        rescale: function(newScale) {
		            this.x.rescale(newScale);
		            this.y.rescale(newScale);
		            this.refresh();
		        },

		        centerCoordinates: function() {
		            return { x: Math.min(0, -this.x.centerOffset), y: Math.min(0, -this.y.centerOffset) };
		        },

		        refresh: function() {
		            var that = this;
		            that.x.update();
		            that.y.update();
		            that.enabled = that.x.enabled || that.y.enabled;
		            that.minScale = that.forcedMinScale || Math.min(that.x.minScale, that.y.minScale);
		            that.fitScale = Math.max(that.x.minScale, that.y.minScale);
		            that.trigger(CHANGE);
		        }
		    });

		    var PaneAxis = Observable.extend({
		        init: function(options) {
		            var that = this;
		            extend(that, options);
		            Observable.fn.init.call(that);
		        },

		        outOfBounds: function() {
		            return this.dimension.outOfBounds(this.movable[this.axis]);
		        },

		        dragMove: function(delta) {
		            var that = this,
		                dimension = that.dimension,
		                axis = that.axis,
		                movable = that.movable,
		                position = movable[axis] + delta;

		            if (!dimension.enabled) {
		                return;
		            }

		            if ((position < dimension.min && delta < 0) || (position > dimension.max && delta > 0)) {
		                delta *= that.resistance;
		            }

		            movable.translateAxis(axis, delta);
		            that.trigger(CHANGE, that);
		        }
		    });

		    var Pane = Class.extend({

		        init: function(options) {
		            var that = this,
		                x,
		                y,
		                resistance,
		                movable;

		            extend(that, {elastic: true}, options);

		            resistance = that.elastic ? 0.5 : 0;
		            movable = that.movable;

		            that.x = x = new PaneAxis({
		                axis: "x",
		                dimension: that.dimensions.x,
		                resistance: resistance,
		                movable: movable
		            });

		            that.y = y = new PaneAxis({
		                axis: "y",
		                dimension: that.dimensions.y,
		                resistance: resistance,
		                movable: movable
		            });

		            that.userEvents.bind(["press", "move", "end", "gesturestart", "gesturechange"], {
		                gesturestart: function(e) {
		                    that.gesture = e;
		                    that.offset = that.dimensions.container.offset();
		                },

		                press: function(e) {
		                    if ($(e.event.target).closest("a").is("[data-navigate-on-press=true]")) {
		                        e.sender.cancel();
		                    }
		                },

		                gesturechange: function(e) {
		                    var previousGesture = that.gesture,
		                        previousCenter = previousGesture.center,

		                        center = e.center,

		                        scaleDelta = e.distance / previousGesture.distance,

		                        minScale = that.dimensions.minScale,
		                        maxScale = that.dimensions.maxScale,
		                        coordinates;

		                    if (movable.scale <= minScale && scaleDelta < 1) {
		                        // Resist shrinking. Instead of shrinking from 1 to 0.5, it will shrink to 0.5 + (1 /* minScale */ - 0.5) * 0.8 = 0.9;
		                        scaleDelta += (1 - scaleDelta) * 0.8;
		                    }

		                    if (movable.scale * scaleDelta >= maxScale) {
		                        scaleDelta = maxScale / movable.scale;
		                    }

		                    var offsetX = movable.x + that.offset.left,
		                        offsetY = movable.y + that.offset.top;

		                    coordinates = {
		                        x: (offsetX - previousCenter.x) * scaleDelta + center.x - offsetX,
		                        y: (offsetY - previousCenter.y) * scaleDelta + center.y - offsetY
		                    };

		                    movable.scaleWith(scaleDelta);

		                    x.dragMove(coordinates.x);
		                    y.dragMove(coordinates.y);

		                    that.dimensions.rescale(movable.scale);
		                    that.gesture = e;
		                    e.preventDefault();
		                },

		                move: function(e) {
		                    if (e.event.target.tagName.match(/textarea|input/i)) {
		                        return;
		                    }

		                    if (x.dimension.enabled || y.dimension.enabled) {
		                        x.dragMove(e.x.delta);
		                        y.dragMove(e.y.delta);
		                        e.preventDefault();
		                    } else {
		                        e.touch.skip();
		                    }
		                },

		                end: function(e) {
		                    e.preventDefault();
		                }
		            });
		        }
		    });

		    var TRANSFORM_STYLE = support.transitions.prefix + "Transform",
		        translate;


		    if (support.hasHW3D) {
		        translate = function(x, y, scale) {
		            return "translate3d(" + x + "px," + y +"px,0) scale(" + scale + ")";
		        };
		    } else {
		        translate = function(x, y, scale) {
		            return "translate(" + x + "px," + y +"px) scale(" + scale + ")";
		        };
		    }

		    var Movable = Observable.extend({
		        init: function(element) {
		            var that = this;

		            Observable.fn.init.call(that);

		            that.element = $(element);
		            that.element[0].style.webkitTransformOrigin = "left top";
		            that.x = 0;
		            that.y = 0;
		            that.scale = 1;
		            that._saveCoordinates(translate(that.x, that.y, that.scale));
		        },

		        translateAxis: function(axis, by) {
		            this[axis] += by;
		            this.refresh();
		        },

		        scaleTo: function(scale) {
		            this.scale = scale;
		            this.refresh();
		        },

		        scaleWith: function(scaleDelta) {
		            this.scale *= scaleDelta;
		            this.refresh();
		        },

		        translate: function(coordinates) {
		            this.x += coordinates.x;
		            this.y += coordinates.y;
		            this.refresh();
		        },

		        moveAxis: function(axis, value) {
		            this[axis] = value;
		            this.refresh();
		        },

		        moveTo: function(coordinates) {
		            extend(this, coordinates);
		            this.refresh();
		        },

		        refresh: function() {
		            var that = this,
		                x = that.x,
		                y = that.y,
		                newCoordinates;

		            if (that.round) {
		                x = Math.round(x);
		                y = Math.round(y);
		            }

		            newCoordinates = translate(x, y, that.scale);

		            if (newCoordinates != that.coordinates) {
		                if (kendo.support.browser.msie && kendo.support.browser.version < 10) {
		                    that.element[0].style.position = "absolute";
		                    that.element[0].style.left = that.x + "px";
		                    that.element[0].style.top = that.y + "px";

		                } else {
		                    that.element[0].style[TRANSFORM_STYLE] = newCoordinates;
		                }
		                that._saveCoordinates(newCoordinates);
		                that.trigger(CHANGE);
		            }
		        },

		        _saveCoordinates: function(coordinates) {
		            this.coordinates = coordinates;
		        }
		    });

		    function destroyDroppable(collection, widget) {
		        var groupName = widget.options.group,
		        droppables = collection[groupName],
		        i;

		        Widget.fn.destroy.call(widget);

		        if (droppables.length > 1) {
		            for (i = 0; i < droppables.length; i++) {
		                if (droppables[i] == widget) {
		                    droppables.splice(i, 1);
		                    break;
		                }
		            }
		        } else {
		            droppables.length = 0; // WTF, porting this from the previous destroyGroup
		            delete collection[groupName];
		        }
		    }

		    var DropTarget = Widget.extend({
		        init: function(element, options) {
		            var that = this;

		            Widget.fn.init.call(that, element, options);

		            var group = that.options.group;

		            if (!(group in dropTargets)) {
		                dropTargets[group] = [ that ];
		            } else {
		                dropTargets[group].push( that );
		            }
		        },

		        events: [
		            DRAGENTER,
		            DRAGLEAVE,
		            DROP
		        ],

		        options: {
		            name: "DropTarget",
		            group: "default"
		        },

		        destroy: function() {
		            destroyDroppable(dropTargets, this);
		        },

		        _trigger: function(eventName, e) {
		            var that = this,
		                draggable = draggables[that.options.group];

		            if (draggable) {
		                return that.trigger(eventName, extend({}, e.event, {
		                           draggable: draggable,
		                           dropTarget: e.dropTarget
		                       }));
		            }
		        },

		        _over: function(e) {
		            this._trigger(DRAGENTER, e);
		        },

		        _out: function(e) {
		            this._trigger(DRAGLEAVE, e);
		        },

		        _drop: function(e) {
		            var that = this,
		                draggable = draggables[that.options.group];

		            if (draggable) {
		                draggable.dropped = !that._trigger(DROP, e);
		            }
		        }
		    });

		    DropTarget.destroyGroup = function(groupName) {
		        var group = dropTargets[groupName] || dropAreas[groupName],
		            i;

		        if (group) {
		            for (i = 0; i < group.length; i++) {
		                Widget.fn.destroy.call(group[i]);
		            }

		            group.length = 0;
		            delete dropTargets[groupName];
		            delete dropAreas[groupName];
		        }
		    };

		    DropTarget._cache = dropTargets;

		    var DropTargetArea = DropTarget.extend({
		        init: function(element, options) {
		            var that = this;

		            Widget.fn.init.call(that, element, options);

		            var group = that.options.group;

		            if (!(group in dropAreas)) {
		                dropAreas[group] = [ that ];
		            } else {
		                dropAreas[group].push( that );
		            }
		        },

		        destroy: function() {
		            destroyDroppable(dropAreas, this);
		        },

		        options: {
		            name: "DropTargetArea",
		            group: "default",
		            filter: null
		        }
		    });

		    var Draggable = Widget.extend({
		        init: function (element, options) {
		            var that = this;

		            Widget.fn.init.call(that, element, options);

		            that._activated = false;

		            that.userEvents = new UserEvents(that.element, {
		                global: true,
		                allowSelection: true,
		                filter: that.options.filter,
		                threshold: that.options.distance,
		                start: proxy(that._start, that),
		                hold: proxy(that._hold, that),
		                move: proxy(that._drag, that),
		                end: proxy(that._end, that),
		                cancel: proxy(that._cancel, that),
		                select: proxy(that._select, that)
		            });

		            that._afterEndHandler = proxy(that._afterEnd, that);
		            that._captureEscape = proxy(that._captureEscape, that);
		        },

		        events: [
		            HOLD,
		            DRAGSTART,
		            DRAG,
		            DRAGEND,
		            DRAGCANCEL,
		            HINTDESTROYED
		        ],

		        options: {
		            name: "Draggable",
		            distance: ( kendo.support.touch ? 0 : 5),
		            group: "default",
		            cursorOffset: null,
		            axis: null,
		            container: null,
		            filter: null,
		            ignore: null,
		            holdToDrag: false,
		            autoScroll: false,
		            dropped: false
		        },

		        cancelHold: function() {
		            this._activated = false;
		        },

		        _captureEscape: function(e) {
		            var that = this;

		            if (e.keyCode === kendo.keys.ESC) {
		                that._trigger(DRAGCANCEL, { event: e });
		                that.userEvents.cancel();
		            }
		        },

		        _updateHint: function(e) {
		            var that = this,
		                coordinates,
		                options = that.options,
		                boundaries = that.boundaries,
		                axis = options.axis,
		                cursorOffset = that.options.cursorOffset;

		            if (cursorOffset) {
		               coordinates = { left: e.x.location + cursorOffset.left, top: e.y.location + cursorOffset.top };
		            } else {
		               that.hintOffset.left += e.x.delta;
		               that.hintOffset.top += e.y.delta;
		               coordinates = $.extend({}, that.hintOffset);
		            }

		            if (boundaries) {
		                coordinates.top = within(coordinates.top, boundaries.y);
		                coordinates.left = within(coordinates.left, boundaries.x);
		            }

		            if (axis === "x") {
		                delete coordinates.top;
		            } else if (axis === "y") {
		                delete coordinates.left;
		            }

		            that.hint.css(coordinates);
		        },

		        _shouldIgnoreTarget: function(target) {
		            var ignoreSelector = this.options.ignore;
		            return ignoreSelector && $(target).is(ignoreSelector);
		        },

		        _select: function(e) {
		            if (!this._shouldIgnoreTarget(e.event.target)) {
		                e.preventDefault();
		            }
		        },

		        _start: function(e) {
		            var that = this,
		                options = that.options,
		                container = options.container,
		                hint = options.hint;

		            if (this._shouldIgnoreTarget(e.touch.initialTouch) || (options.holdToDrag && !that._activated)) {
		                that.userEvents.cancel();
		                return;
		            }

		            that.currentTarget = e.target;
		            that.currentTargetOffset = getOffset(that.currentTarget);

		            if (hint) {
		                if (that.hint) {
		                    that.hint.stop(true, true).remove();
		                }

		                that.hint = kendo.isFunction(hint) ? $(hint.call(that, that.currentTarget)) : hint;

		                var offset = getOffset(that.currentTarget);
		                that.hintOffset = offset;

		                that.hint.css( {
		                    position: "absolute",
		                    zIndex: 20000, // the Window's z-index is 10000 and can be raised because of z-stacking
		                    left: offset.left,
		                    top: offset.top
		                })
		                .appendTo(document.body);

		                that.angular("compile", function(){
		                    that.hint.removeAttr("ng-repeat");
		                    var scopeTarget = $(e.target);

		                    while (!scopeTarget.data("$$kendoScope") && scopeTarget.length) {
		                        scopeTarget = scopeTarget.parent();
		                    }

		                    return {
		                        elements: that.hint.get(),
		                        scopeFrom: scopeTarget.data("$$kendoScope")
		                    };
		                });
		            }

		            draggables[options.group] = that;

		            that.dropped = false;

		            if (container) {
		                that.boundaries = containerBoundaries(container, that.hint);
		            }

		            $(document).on(KEYUP, that._captureEscape);

		            if (that._trigger(DRAGSTART, e)) {
		                that.userEvents.cancel();
		                that._afterEnd();
		            }

		            that.userEvents.capture();
		        },

		        _hold: function(e) {
		            this.currentTarget = e.target;

		            if (this._trigger(HOLD, e)) {
		                this.userEvents.cancel();
		            } else {
		                this._activated = true;
		            }
		        },

		        _drag: function(e) {
		            e.preventDefault();

		            var cursorElement = this._elementUnderCursor(e);
		            this._lastEvent = e;
		            this._processMovement(e, cursorElement);

		            if (this.options.autoScroll) {
		                if (this._cursorElement !== cursorElement) {
		                    this._scrollableParent = findScrollableParent(cursorElement);
		                    this._cursorElement = cursorElement;
		                }

		                // chrome seems to trigger mousemove when mouse is moved outside of the window (over the Chrome), too.
		                if (this._scrollableParent[0]) {
		                    var velocity = autoScrollVelocity(e.x.location, e.y.location, scrollableViewPort(this._scrollableParent));


		                    this._scrollCompenstation = $.extend({}, this.hintOffset);
		                    this._scrollVelocity = velocity;

		                    if (velocity.y === 0 && velocity.x === 0) {
		                        clearInterval(this._scrollInterval);
		                        this._scrollInterval = null;
		                    } else if(!this._scrollInterval) {
		                        this._scrollInterval = setInterval($.proxy(this, "_autoScroll"), 50);
		                    }
		                }
		            }

		            if (this.hint) {
		                this._updateHint(e);
		            }
		        },

		        _processMovement: function(e, cursorElement) {
		            this._withDropTarget(cursorElement, function(target, targetElement) {
		                if (!target) {
		                    if (lastDropTarget) {
		                        lastDropTarget._trigger(DRAGLEAVE, extend(e, { dropTarget: $(lastDropTarget.targetElement) }));
		                        lastDropTarget = null;
		                    }
		                    return;
		                }

		                if (lastDropTarget) {
		                    if (targetElement === lastDropTarget.targetElement) {
		                        return;
		                    }

		                    lastDropTarget._trigger(DRAGLEAVE, extend(e, { dropTarget: $(lastDropTarget.targetElement) }));
		                }

		                target._trigger(DRAGENTER, extend(e, { dropTarget: $(targetElement) }));
		                lastDropTarget = extend(target, { targetElement: targetElement });
		            });

		            this._trigger(DRAG, extend(e, { dropTarget: lastDropTarget, elementUnderCursor: cursorElement }));
		        },

		        _autoScroll: function() {
		            var parent = this._scrollableParent[0],
		                velocity = this._scrollVelocity,
		                compensation = this._scrollCompenstation;

		            if (!parent) {
		                return;
		            }

		            var cursorElement = this._elementUnderCursor(this._lastEvent);
		            this._processMovement(this._lastEvent, cursorElement);

		            var yIsScrollable, xIsScrollable;

		            var isRootNode = parent === scrollableRoot()[0];

		            if (isRootNode) {
		                yIsScrollable = document.body.scrollHeight > $window.height();
		                xIsScrollable = document.body.scrollWidth > $window.width();
		            } else {
		                yIsScrollable = parent.offsetHeight <= parent.scrollHeight;
		                xIsScrollable = parent.offsetWidth <= parent.scrollWidth;
		            }

		            var yDelta = parent.scrollTop + velocity.y;
		            var yInBounds = yIsScrollable && yDelta > 0 && yDelta < parent.scrollHeight;

		            var xDelta = parent.scrollLeft + velocity.x;
		            var xInBounds = xIsScrollable && xDelta > 0 && xDelta < parent.scrollWidth;

		            if (yInBounds) {
		                parent.scrollTop += velocity.y;
		            }

		            if (xInBounds) {
		                parent.scrollLeft += velocity.x;
		            }

		            if (isRootNode && (xInBounds || yInBounds)) {
		                if (yInBounds) {
		                    compensation.top += velocity.y;
		                }

		                if (xInBounds) {
		                    compensation.left += velocity.x;
		                }

		                this.hint.css(compensation);
		            }
		        },

		        _end: function(e) {
		            this._withDropTarget(this._elementUnderCursor(e), function(target, targetElement) {
		                if (target) {
		                    target._drop(extend({}, e, { dropTarget: $(targetElement) }));
		                    lastDropTarget = null;
		                }
		            });

		            this._cancel(this._trigger(DRAGEND, e));
		        },

		        _cancel: function(isDefaultPrevented) {
		            var that = this;

		            that._scrollableParent = null;
		            this._cursorElement = null;
		            clearInterval(this._scrollInterval);
		            that._activated = false;

		            if (that.hint && !that.dropped) {
		                setTimeout(function() {
		                    that.hint.stop(true, true);

		                    if (isDefaultPrevented) {
		                        that._afterEndHandler();
		                    } else {
		                        that.hint.animate(that.currentTargetOffset, "fast", that._afterEndHandler);
		                    }
		                }, 0);

		            } else {
		                that._afterEnd();
		            }
		        },

		        _trigger: function(eventName, e) {
		            var that = this;

		            return that.trigger(
		                eventName, extend(
		                {},
		                e.event,
		                {
		                    x: e.x,
		                    y: e.y,
		                    currentTarget: that.currentTarget,
		                    initialTarget: e.touch ? e.touch.initialTouch : null,
		                    dropTarget: e.dropTarget,
		                    elementUnderCursor: e.elementUnderCursor
		                }
		            ));
		        },

		        _elementUnderCursor: function(e) {
		            var target = elementUnderCursor(e),
		                hint = this.hint;

		            if (hint && contains(hint[0], target)) {
		                hint.hide();
		                target = elementUnderCursor(e);
		                // IE8 does not return the element in iframe from first attempt
		                if (!target) {
		                    target = elementUnderCursor(e);
		                }
		                hint.show();
		            }

		            return target;
		        },

		        _withDropTarget: function(element, callback) {
		            var result,
		                group = this.options.group,
		                targets = dropTargets[group],
		                areas = dropAreas[group];

		            if (targets && targets.length || areas && areas.length) {
		                result = checkTarget(element, targets, areas);

		                if (result) {
		                    callback(result.target, result.targetElement);
		                } else {
		                    callback();
		                }
		            }
		        },

		        destroy: function() {
		            var that = this;

		            Widget.fn.destroy.call(that);

		            that._afterEnd();

		            that.userEvents.destroy();

		            this._scrollableParent = null;
		            this._cursorElement = null;
		            clearInterval(this._scrollInterval);

		            that.currentTarget = null;
		        },

		        _afterEnd: function() {
		            var that = this;

		            if (that.hint) {
		                that.hint.remove();
		            }

		            delete draggables[that.options.group];

		            that.trigger("destroy");
		            that.trigger(HINTDESTROYED);
		            $(document).off(KEYUP, that._captureEscape);
		        }
		    });

		    kendo.ui.plugin(DropTarget);
		    kendo.ui.plugin(DropTargetArea);
		    kendo.ui.plugin(Draggable);
		    kendo.TapCapture = TapCapture;
		    kendo.containerBoundaries = containerBoundaries;

		    extend(kendo.ui, {
		        Pane: Pane,
		        PaneDimensions: PaneDimensions,
		        Movable: Movable
		    });

		    function scrollableViewPort(element) {
		        var root = scrollableRoot()[0],
		            offset,
		            top,
		            left;

		        if (element[0] === root) {
		            top = root.scrollTop;
		            left = root.scrollLeft;

		            return {
		                top: top,
		                left: left,
		                bottom: top + $window.height(),
		                right: left + $window.width()
		            };
		        } else {
		            offset = element.offset();
		            offset.bottom = offset.top + element.height();
		            offset.right =  offset.left + element.width();
		            return offset;
		        }
		    }

		    function scrollableRoot() {
		        return $(kendo.support.browser.chrome ? document.body : document.documentElement);
		    }

		    function findScrollableParent(element) {
		        var root = scrollableRoot();

		        if (!element || element === document.body || element === document.documentElement) {
		            return root;
		        }

		        var parent = $(element)[0];

		        while (parent && !kendo.isScrollable(parent) && parent !== document.body) {
		            parent = parent.parentNode;
		        }

		        if (parent === document.body) {
		            return root;
		        }

		        return $(parent);
		    }

		    function autoScrollVelocity(mouseX, mouseY, rect) {
		        var velocity = { x: 0, y: 0 };

		        var AUTO_SCROLL_AREA = 50;

		        if (mouseX - rect.left < AUTO_SCROLL_AREA) {
		            velocity.x = -(AUTO_SCROLL_AREA - (mouseX - rect.left));
		        } else if (rect.right - mouseX < AUTO_SCROLL_AREA) {
		            velocity.x = AUTO_SCROLL_AREA - (rect.right - mouseX);
		        }

		        if (mouseY - rect.top < AUTO_SCROLL_AREA) {
		            velocity.y = -(AUTO_SCROLL_AREA - (mouseY - rect.top));
		        } else if (rect.bottom - mouseY < AUTO_SCROLL_AREA) {
		            velocity.y = AUTO_SCROLL_AREA - (rect.bottom - mouseY);
		        }

		        return velocity;
		    }

		    // export for testing
		    kendo.ui.Draggable.utils = {
		        autoScrollVelocity: autoScrollVelocity,
		        scrollableViewPort: scrollableViewPort,
		        findScrollableParent: findScrollableParent
		    };

		 })(window.kendo.jQuery);

		return window.kendo;

		}, __webpack_require__(422));


	/***/ }

	/******/ });

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ({

	/***/ 0:
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(552);


	/***/ },

	/***/ 421:
	/***/ function(module, exports) {

		module.exports = __webpack_require__(6);

	/***/ },

	/***/ 422:
	/***/ function(module, exports) {

		module.exports = function() { throw new Error("define cannot be used indirect"); };


	/***/ },

	/***/ 552:
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
		    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(421) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		})(function(){

		var __meta__ = { // jshint ignore:line
		    id: "userevents",
		    name: "User Events",
		    category: "framework",
		    depends: [ "core" ],
		    hidden: true
		};

		(function ($, undefined) {
		    var kendo = window.kendo,
		        support = kendo.support,
		        document = window.document,
		        Class = kendo.Class,
		        Observable = kendo.Observable,
		        now = $.now,
		        extend = $.extend,
		        OS = support.mobileOS,
		        invalidZeroEvents = OS && OS.android,
		        DEFAULT_MIN_HOLD = 800,
		        DEFAULT_THRESHOLD = support.browser.msie ? 5 : 0, // WP8 and W8 are very sensitive and always report move.

		        // UserEvents events
		        PRESS = "press",
		        HOLD = "hold",
		        SELECT = "select",
		        START = "start",
		        MOVE = "move",
		        END = "end",
		        CANCEL = "cancel",
		        TAP = "tap",
		        RELEASE = "release",
		        GESTURESTART = "gesturestart",
		        GESTURECHANGE = "gesturechange",
		        GESTUREEND = "gestureend",
		        GESTURETAP = "gesturetap";

		    var THRESHOLD = {
		        "api": 0,
		        "touch": 0,
		        "mouse": 9,
		        "pointer": 9
		    };

		    var ENABLE_GLOBAL_SURFACE = (!support.touch || support.mouseAndTouchPresent);

		    function touchDelta(touch1, touch2) {
		        var x1 = touch1.x.location,
		            y1 = touch1.y.location,
		            x2 = touch2.x.location,
		            y2 = touch2.y.location,
		            dx = x1 - x2,
		            dy = y1 - y2;

		        return {
		            center: {
		               x: (x1 + x2) / 2,
		               y: (y1 + y2) / 2
		            },

		            distance: Math.sqrt(dx*dx + dy*dy)
		        };
		    }

		    function getTouches(e) {
		        var touches = [],
		            originalEvent = e.originalEvent,
		            currentTarget = e.currentTarget,
		            idx = 0, length,
		            changedTouches,
		            touch;

		        if (e.api) {
		            touches.push({
		                id: 2,  // hardcoded ID for API call;
		                event: e,
		                target: e.target,
		                currentTarget: e.target,
		                location: e,
		                type: "api"
		            });
		        }
		        else if (e.type.match(/touch/)) {
		            changedTouches = originalEvent ? originalEvent.changedTouches : [];
		            for (length = changedTouches.length; idx < length; idx ++) {
		                touch = changedTouches[idx];
		                touches.push({
		                    location: touch,
		                    event: e,
		                    target: touch.target,
		                    currentTarget: currentTarget,
		                    id: touch.identifier,
		                    type: "touch"
		                });
		            }
		        }
		        else if (support.pointers || support.msPointers) {
		            touches.push({
		                location: originalEvent,
		                event: e,
		                target: e.target,
		                currentTarget: currentTarget,
		                id: originalEvent.pointerId,
		                type: "pointer"
		            });
		        } else {
		            touches.push({
		                id: 1, // hardcoded ID for mouse event;
		                event: e,
		                target: e.target,
		                currentTarget: currentTarget,
		                location: e,
		                type: "mouse"
		            });
		        }

		        return touches;
		    }

		    var TouchAxis = Class.extend({
		        init: function(axis, location) {
		            var that = this;

		            that.axis = axis;

		            that._updateLocationData(location);

		            that.startLocation = that.location;
		            that.velocity = that.delta = 0;
		            that.timeStamp = now();
		        },

		        move: function(location) {
		            var that = this,
		                offset = location["page" + that.axis],
		                timeStamp = now(),
		                timeDelta = (timeStamp - that.timeStamp) || 1; // Firing manually events in tests can make this 0;

		            if (!offset && invalidZeroEvents) {
		                return;
		            }

		            that.delta = offset - that.location;

		            that._updateLocationData(location);

		            that.initialDelta = offset - that.startLocation;
		            that.velocity = that.delta / timeDelta;
		            that.timeStamp = timeStamp;
		        },

		        _updateLocationData: function(location) {
		            var that = this, axis = that.axis;

		            that.location = location["page" + axis];
		            that.client = location["client" + axis];
		            that.screen = location["screen" + axis];
		        }
		    });

		    var Touch = Class.extend({
		        init: function(userEvents, target, touchInfo) {
		            extend(this, {
		                x: new TouchAxis("X", touchInfo.location),
		                y: new TouchAxis("Y", touchInfo.location),
		                type: touchInfo.type,
		                useClickAsTap: userEvents.useClickAsTap,
		                threshold: userEvents.threshold || THRESHOLD[touchInfo.type],
		                userEvents: userEvents,
		                target: target,
		                currentTarget: touchInfo.currentTarget,
		                initialTouch: touchInfo.target,
		                id: touchInfo.id,
		                pressEvent: touchInfo,
		                _moved: false,
		                _finished: false
		            });
		        },

		        press: function() {
		            this._holdTimeout = setTimeout($.proxy(this, "_hold"), this.userEvents.minHold);
		            this._trigger(PRESS, this.pressEvent);
		        },

		        _hold: function() {
		            this._trigger(HOLD, this.pressEvent);
		        },

		        move: function(touchInfo) {
		            var that = this;

		            if (that._finished) { return; }

		            that.x.move(touchInfo.location);
		            that.y.move(touchInfo.location);

		            if (!that._moved) {
		                if (that._withinIgnoreThreshold()) {
		                    return;
		                }

		                if (!UserEvents.current || UserEvents.current === that.userEvents) {
		                    that._start(touchInfo);
		                } else {
		                    return that.dispose();
		                }
		            }

		            // Event handlers may cancel the drag in the START event handler, hence the double check for pressed.
		            if (!that._finished) {
		                that._trigger(MOVE, touchInfo);
		            }
		        },

		        end: function(touchInfo) {
		            this.endTime = now();

		            if (this._finished) { return; }

		            // Mark the object as finished if there are blocking operations in the event handlers (alert/confirm)
		            this._finished = true;

		            this._trigger(RELEASE, touchInfo); // Release should be fired before TAP (as click is after mouseup/touchend)

		            if (this._moved) {
		                this._trigger(END, touchInfo);
		            } else {
		                if (!this.useClickAsTap) {
		                    this._trigger(TAP, touchInfo);
		                }
		            }

		            clearTimeout(this._holdTimeout);

		            this.dispose();
		        },

		        dispose: function() {
		            var userEvents = this.userEvents,
		                activeTouches = userEvents.touches;

		            this._finished = true;
		            this.pressEvent = null;
		            clearTimeout(this._holdTimeout);

		            activeTouches.splice($.inArray(this, activeTouches), 1);
		        },

		        skip: function() {
		            this.dispose();
		        },

		        cancel: function() {
		            this.dispose();
		        },

		        isMoved: function() {
		            return this._moved;
		        },

		        _start: function(touchInfo) {
		            clearTimeout(this._holdTimeout);

		            this.startTime = now();
		            this._moved = true;
		            this._trigger(START, touchInfo);
		        },

		        _trigger: function(name, touchInfo) {
		            var that = this,
		                jQueryEvent = touchInfo.event,
		                data = {
		                    touch: that,
		                    x: that.x,
		                    y: that.y,
		                    target: that.target,
		                    event: jQueryEvent
		                };

		            if(that.userEvents.notify(name, data)) {
		                jQueryEvent.preventDefault();
		            }
		        },

		        _withinIgnoreThreshold: function() {
		            var xDelta = this.x.initialDelta,
		                yDelta = this.y.initialDelta;

		            return Math.sqrt(xDelta * xDelta + yDelta * yDelta) <= this.threshold;
		        }
		    });

		    function withEachUpEvent(callback) {
		        var downEvents = kendo.eventMap.up.split(" "),
		            idx = 0,
		            length = downEvents.length;

		        for(; idx < length; idx ++) {
		            callback(downEvents[idx]);
		        }
		    }

		    var UserEvents = Observable.extend({
		        init: function(element, options) {
		            var that = this,
		                filter,
		                ns = kendo.guid();

		            options = options || {};
		            filter = that.filter = options.filter;
		            that.threshold = options.threshold || DEFAULT_THRESHOLD;
		            that.minHold = options.minHold || DEFAULT_MIN_HOLD;
		            that.touches = [];
		            that._maxTouches = options.multiTouch ? 2 : 1;
		            that.allowSelection = options.allowSelection;
		            that.captureUpIfMoved = options.captureUpIfMoved;
		            that.useClickAsTap = !options.fastTap && !support.delayedClick();
		            that.eventNS = ns;

		            element = $(element).handler(that);
		            Observable.fn.init.call(that);

		            extend(that, {
		                element: element,
		                // the touch events lock to the element anyway, so no need for the global setting
		                surface: options.global && ENABLE_GLOBAL_SURFACE ? $(document.documentElement) : $(options.surface || element),
		                stopPropagation: options.stopPropagation,
		                pressed: false
		            });

		            that.surface.handler(that)
		                .on(kendo.applyEventMap("move", ns), "_move")
		                .on(kendo.applyEventMap("up cancel", ns), "_end");

		            element.on(kendo.applyEventMap("down", ns), filter, "_start");

		            if (that.useClickAsTap) {
		                element.on(kendo.applyEventMap("click", ns), filter, "_click");
		            }

		            if (support.pointers || support.msPointers) {
		                if (support.browser.version < 11) {
		                    element.css("-ms-touch-action", "pinch-zoom double-tap-zoom");
		                } else {
		                    element.css("touch-action", "pan-y");
		                }
		            }

		            if (options.preventDragEvent) {
		                element.on(kendo.applyEventMap("dragstart", ns), kendo.preventDefault);
		            }

		            element.on(kendo.applyEventMap("mousedown", ns), filter, { root: element }, "_select");

		            if (that.captureUpIfMoved && support.eventCapture) {
		                var surfaceElement = that.surface[0],
		                    preventIfMovingProxy = $.proxy(that.preventIfMoving, that);

		                withEachUpEvent(function(eventName) {
		                    surfaceElement.addEventListener(eventName, preventIfMovingProxy, true);
		                });
		            }

		            that.bind([
		            PRESS,
		            HOLD,
		            TAP,
		            START,
		            MOVE,
		            END,
		            RELEASE,
		            CANCEL,
		            GESTURESTART,
		            GESTURECHANGE,
		            GESTUREEND,
		            GESTURETAP,
		            SELECT
		            ], options);
		        },

		        preventIfMoving: function(e) {
		            if (this._isMoved()) {
		                e.preventDefault();
		            }
		        },

		        destroy: function() {
		            var that = this;

		            if (that._destroyed) {
		                return;
		            }

		            that._destroyed = true;

		            if (that.captureUpIfMoved && support.eventCapture) {
		                var surfaceElement = that.surface[0];
		                withEachUpEvent(function(eventName) {
		                    surfaceElement.removeEventListener(eventName, that.preventIfMoving);
		                });
		            }

		            that.element.kendoDestroy(that.eventNS);
		            that.surface.kendoDestroy(that.eventNS);
		            that.element.removeData("handler");
		            that.surface.removeData("handler");
		            that._disposeAll();

		            that.unbind();
		            delete that.surface;
		            delete that.element;
		            delete that.currentTarget;
		        },

		        capture: function() {
		            UserEvents.current = this;
		        },

		        cancel: function() {
		            this._disposeAll();
		            this.trigger(CANCEL);
		        },

		        notify: function(eventName, data) {
		            var that = this,
		                touches = that.touches;

		            if (this._isMultiTouch()) {
		                switch(eventName) {
		                    case MOVE:
		                        eventName = GESTURECHANGE;
		                        break;
		                    case END:
		                        eventName = GESTUREEND;
		                        break;
		                    case TAP:
		                        eventName = GESTURETAP;
		                        break;
		                }

		                extend(data, {touches: touches}, touchDelta(touches[0], touches[1]));
		            }

		            return this.trigger(eventName, extend(data, {type: eventName}));
		        },

		        // API
		        press: function(x, y, target) {
		            this._apiCall("_start", x, y, target);
		        },

		        move: function(x, y) {
		            this._apiCall("_move", x, y);
		        },

		        end: function(x, y) {
		            this._apiCall("_end", x, y);
		        },

		        _isMultiTouch: function() {
		            return this.touches.length > 1;
		        },

		        _maxTouchesReached: function() {
		            return this.touches.length >= this._maxTouches;
		        },

		        _disposeAll: function() {
		            var touches = this.touches;
		            while (touches.length > 0) {
		                touches.pop().dispose();
		            }
		        },

		        _isMoved: function() {
		            return $.grep(this.touches, function(touch) {
		                return touch.isMoved();
		            }).length;
		        },

		        _select: function(e) {
		           if (!this.allowSelection || this.trigger(SELECT, { event: e })) {
		               e.preventDefault();
		           }
		        },

		        _start: function(e) {
		            var that = this,
		                idx = 0,
		                filter = that.filter,
		                target,
		                touches = getTouches(e),
		                length = touches.length,
		                touch,
		                which = e.which;

		            if ((which && which > 1) || (that._maxTouchesReached())){
		                return;
		            }

		            UserEvents.current = null;

		            that.currentTarget = e.currentTarget;

		            if (that.stopPropagation) {
		                e.stopPropagation();
		            }

		            for (; idx < length; idx ++) {
		                if (that._maxTouchesReached()) {
		                    break;
		                }

		                touch = touches[idx];

		                if (filter) {
		                    target = $(touch.currentTarget); // target.is(filter) ? target : target.closest(filter, that.element);
		                } else {
		                    target = that.element;
		                }

		                if (!target.length) {
		                    continue;
		                }

		                touch = new Touch(that, target, touch);
		                that.touches.push(touch);
		                touch.press();

		                if (that._isMultiTouch()) {
		                    that.notify("gesturestart", {});
		                }
		            }
		        },

		        _move: function(e) {
		            this._eachTouch("move", e);
		        },

		        _end: function(e) {
		            this._eachTouch("end", e);
		        },

		        _click: function(e) {
		            var data = {
		                touch: {
		                    initialTouch: e.target,
		                    target: $(e.currentTarget),
		                    endTime: now(),
		                    x: {
		                        location: e.pageX,
		                        client: e.clientX
		                    },
		                    y: {
		                        location: e.pageY,
		                        client: e.clientY
		                    }
		                },
		                x: e.pageX,
		                y: e.pageY,
		                target: $(e.currentTarget),
		                event: e,
		                type: "tap"
		            };

		            if (this.trigger("tap", data)) {
		                e.preventDefault();
		            }
		        },

		        _eachTouch: function(methodName, e) {
		            var that = this,
		                dict = {},
		                touches = getTouches(e),
		                activeTouches = that.touches,
		                idx,
		                touch,
		                touchInfo,
		                matchingTouch;

		            for (idx = 0; idx < activeTouches.length; idx ++) {
		                touch = activeTouches[idx];
		                dict[touch.id] = touch;
		            }

		            for (idx = 0; idx < touches.length; idx ++) {
		                touchInfo = touches[idx];
		                matchingTouch = dict[touchInfo.id];

		                if (matchingTouch) {
		                    matchingTouch[methodName](touchInfo);
		                }
		            }
		        },

		        _apiCall: function(type, x, y, target) {
		            this[type]({
		                api: true,
		                pageX: x,
		                pageY: y,
		                clientX: x,
		                clientY: y,
		                target: $(target || this.element)[0],
		                stopPropagation: $.noop,
		                preventDefault: $.noop
		            });
		        }
		    });

		    UserEvents.defaultThreshold = function(value) {
		        DEFAULT_THRESHOLD = value;
		    };

		    UserEvents.minHold = function(value) {
		        DEFAULT_MIN_HOLD = value;
		    };

		    kendo.getTouches = getTouches;
		    kendo.touchDelta = touchDelta;
		    kendo.UserEvents = UserEvents;
		 })(window.kendo.jQuery);

		return window.kendo;

		}, __webpack_require__(422));


	/***/ }

	/******/ });

/***/ },
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "ContactName: #:data.ContactName#, CustomerID: #:data.CustomerID#\n"

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = [
		{
			"CustomerID": "ALFKI",
			"ContactName": "Maria Anders",
			"CompanyName": "Alfreds Futterkiste"
		},
		{
			"CustomerID": "ANATR",
			"ContactName": "Ana Trujillo",
			"CompanyName": "Ana Trujillo Emparedados y helados"
		},
		{
			"CustomerID": "ANTON",
			"ContactName": "Antonio Moreno",
			"CompanyName": "Antonio Moreno Taquería"
		},
		{
			"CustomerID": "AROUT",
			"ContactName": "Thomas Hardy",
			"CompanyName": "Around the Horn"
		},
		{
			"CustomerID": "BERGS",
			"ContactName": "Christina Berglund",
			"CompanyName": "Berglunds snabbköp"
		},
		{
			"CustomerID": "BLAUS",
			"ContactName": "Hanna Moos",
			"CompanyName": "Blauer See Delikatessen"
		},
		{
			"CustomerID": "BLONP",
			"ContactName": "Frédérique Citeaux",
			"CompanyName": "Blondel père et fils"
		},
		{
			"CustomerID": "BOLID",
			"ContactName": "Martín Sommer",
			"CompanyName": "Bólido Comidas preparadas"
		},
		{
			"CustomerID": "BONAP",
			"ContactName": "Laurence Lebihan",
			"CompanyName": "Bon app'"
		},
		{
			"CustomerID": "BOTTM",
			"ContactName": "Elizabeth Lincoln",
			"CompanyName": "Bottom-Dollar Markets"
		},
		{
			"CustomerID": "BSBEV",
			"ContactName": "Victoria Ashworth",
			"CompanyName": "B's Beverages"
		},
		{
			"CustomerID": "CACTU",
			"ContactName": "Patricio Simpson",
			"CompanyName": "Cactus Comidas para llevar"
		},
		{
			"CustomerID": "CENTC",
			"ContactName": "Francisco Chang",
			"CompanyName": "Centro comercial Moctezuma"
		},
		{
			"CustomerID": "CHOPS",
			"ContactName": "Yang Wang",
			"CompanyName": "Chop-suey Chinese"
		},
		{
			"CustomerID": "COMMI",
			"ContactName": "Pedro Afonso",
			"CompanyName": "Comércio Mineiro"
		},
		{
			"CustomerID": "CONSH",
			"ContactName": "Elizabeth Brown",
			"CompanyName": "Consolidated Holdings"
		},
		{
			"CustomerID": "DRACD",
			"ContactName": "Sven Ottlieb",
			"CompanyName": "Drachenblut Delikatessen"
		},
		{
			"CustomerID": "DUMON",
			"ContactName": "Janine Labrune",
			"CompanyName": "Du monde entier"
		},
		{
			"CustomerID": "EASTC",
			"ContactName": "Ann Devon",
			"CompanyName": "Eastern Connection"
		},
		{
			"CustomerID": "ERNSH",
			"ContactName": "Roland Mendel",
			"CompanyName": "Ernst Handel"
		},
		{
			"CustomerID": "FAMIA",
			"ContactName": "Aria Cruz",
			"CompanyName": "Familia Arquibaldo"
		},
		{
			"CustomerID": "FISSA",
			"ContactName": "Diego Roel",
			"CompanyName": "FISSA Fabrica Inter. Salchichas S.A."
		},
		{
			"CustomerID": "FOLIG",
			"ContactName": "Martine Rancé",
			"CompanyName": "Folies gourmandes"
		},
		{
			"CustomerID": "FOLKO",
			"ContactName": "Maria Larsson",
			"CompanyName": "Folk och fä HB"
		},
		{
			"CustomerID": "FRANK",
			"ContactName": "Peter Franken",
			"CompanyName": "Frankenversand"
		},
		{
			"CustomerID": "FRANR",
			"ContactName": "Carine Schmitt",
			"CompanyName": "France restauration"
		},
		{
			"CustomerID": "FRANS",
			"ContactName": "Paolo Accorti",
			"CompanyName": "Franchi S.p.A."
		},
		{
			"CustomerID": "FURIB",
			"ContactName": "Lino Rodriguez",
			"CompanyName": "Furia Bacalhau e Frutos do Mar"
		},
		{
			"CustomerID": "GALED",
			"ContactName": "Eduardo Saavedra",
			"CompanyName": "Galería del gastrónomo"
		},
		{
			"CustomerID": "GODOS",
			"ContactName": "José Pedro Freyre",
			"CompanyName": "Godos Cocina Típica"
		},
		{
			"CustomerID": "GOURL",
			"ContactName": "André Fonseca",
			"CompanyName": "Gourmet Lanchonetes"
		},
		{
			"CustomerID": "GREAL",
			"ContactName": "Howard Snyder",
			"CompanyName": "Great Lakes Food Market"
		},
		{
			"CustomerID": "GROSR",
			"ContactName": "Manuel Pereira",
			"CompanyName": "GROSELLA-Restaurante"
		},
		{
			"CustomerID": "HANAR",
			"ContactName": "Mario Pontes",
			"CompanyName": "Hanari Carnes"
		},
		{
			"CustomerID": "HILAA",
			"ContactName": "Carlos Hernández",
			"CompanyName": "HILARION-Abastos"
		},
		{
			"CustomerID": "HUNGC",
			"ContactName": "Yoshi Latimer",
			"CompanyName": "Hungry Coyote Import Store"
		},
		{
			"CustomerID": "HUNGO",
			"ContactName": "Patricia McKenna",
			"CompanyName": "Hungry Owl All-Night Grocers"
		},
		{
			"CustomerID": "ISLAT",
			"ContactName": "Helen Bennett",
			"CompanyName": "Island Trading"
		},
		{
			"CustomerID": "KOENE",
			"ContactName": "Philip Cramer",
			"CompanyName": "Königlich Essen"
		},
		{
			"CustomerID": "LACOR",
			"ContactName": "Daniel Tonini",
			"CompanyName": "La corne d'abondance"
		},
		{
			"CustomerID": "LAMAI",
			"ContactName": "Annette Roulet",
			"CompanyName": "La maison d'Asie"
		},
		{
			"CustomerID": "LAUGB",
			"ContactName": "Yoshi Tannamuri",
			"CompanyName": "Laughing Bacchus Wine Cellars"
		},
		{
			"CustomerID": "LAZYK",
			"ContactName": "John Steel",
			"CompanyName": "Lazy K Kountry Store"
		},
		{
			"CustomerID": "LEHMS",
			"ContactName": "Renate Messner",
			"CompanyName": "Lehmanns Marktstand"
		},
		{
			"CustomerID": "LETSS",
			"ContactName": "Jaime Yorres",
			"CompanyName": "Let's Stop N Shop"
		},
		{
			"CustomerID": "LILAS",
			"ContactName": "Carlos González",
			"CompanyName": "LILA-Supermercado"
		},
		{
			"CustomerID": "LINOD",
			"ContactName": "Felipe Izquierdo",
			"CompanyName": "LINO-Delicateses"
		},
		{
			"CustomerID": "LONEP",
			"ContactName": "Fran Wilson",
			"CompanyName": "Lonesome Pine Restaurant"
		},
		{
			"CustomerID": "MAGAA",
			"ContactName": "Giovanni Rovelli",
			"CompanyName": "Magazzini Alimentari Riuniti"
		},
		{
			"CustomerID": "MAISD",
			"ContactName": "Catherine Dewey",
			"CompanyName": "Maison Dewey"
		},
		{
			"CustomerID": "MEREP",
			"ContactName": "Jean Fresnière",
			"CompanyName": "Mère Paillarde"
		},
		{
			"CustomerID": "MORGK",
			"ContactName": "Alexander Feuer",
			"CompanyName": "Morgenstern Gesundkost"
		},
		{
			"CustomerID": "NORTS",
			"ContactName": "Simon Crowther",
			"CompanyName": "North/South"
		},
		{
			"CustomerID": "OCEAN",
			"ContactName": "Yvonne Moncada",
			"CompanyName": "Océano Atlántico Ltda."
		},
		{
			"CustomerID": "OLDWO",
			"ContactName": "Rene Phillips",
			"CompanyName": "Old World Delicatessen"
		},
		{
			"CustomerID": "OTTIK",
			"ContactName": "Henriette Pfalzheim",
			"CompanyName": "Ottilies Käseladen"
		},
		{
			"CustomerID": "PARIS",
			"ContactName": "Marie Bertrand",
			"CompanyName": "Paris spécialités"
		},
		{
			"CustomerID": "PERIC",
			"ContactName": "Guillermo Fernández",
			"CompanyName": "Pericles Comidas clásicas"
		},
		{
			"CustomerID": "PICCO",
			"ContactName": "Georg Pipps",
			"CompanyName": "Piccolo und mehr"
		},
		{
			"CustomerID": "PRINI",
			"ContactName": "Isabel de Castro",
			"CompanyName": "Princesa Isabel Vinhos"
		},
		{
			"CustomerID": "QUEDE",
			"ContactName": "Bernardo Batista",
			"CompanyName": "Que Delícia"
		},
		{
			"CustomerID": "QUEEN",
			"ContactName": "Lúcia Carvalho",
			"CompanyName": "Queen Cozinha"
		},
		{
			"CustomerID": "QUICK",
			"ContactName": "Horst Kloss",
			"CompanyName": "QUICK-Stop"
		},
		{
			"CustomerID": "RANCH",
			"ContactName": "Sergio Gutiérrez",
			"CompanyName": "Rancho grande"
		},
		{
			"CustomerID": "RATTC",
			"ContactName": "Paula Wilson",
			"CompanyName": "Rattlesnake Canyon Grocery"
		},
		{
			"CustomerID": "REGGC",
			"ContactName": "Maurizio Moroni",
			"CompanyName": "Reggiani Caseifici"
		},
		{
			"CustomerID": "RICAR",
			"ContactName": "Janete Limeira",
			"CompanyName": "Ricardo Adocicados"
		},
		{
			"CustomerID": "RICSU",
			"ContactName": "Michael Holz",
			"CompanyName": "Richter Supermarkt"
		},
		{
			"CustomerID": "ROMEY",
			"ContactName": "Alejandra Camino",
			"CompanyName": "Romero y tomillo"
		},
		{
			"CustomerID": "SANTG",
			"ContactName": "Jonas Bergulfsen",
			"CompanyName": "Santé Gourmet"
		},
		{
			"CustomerID": "SAVEA",
			"ContactName": "Jose Pavarotti",
			"CompanyName": "Save-a-lot Markets"
		},
		{
			"CustomerID": "SEVES",
			"ContactName": "Hari Kumar",
			"CompanyName": "Seven Seas Imports"
		},
		{
			"CustomerID": "SIMOB",
			"ContactName": "Jytte Petersen",
			"CompanyName": "Simons bistro"
		},
		{
			"CustomerID": "SPECD",
			"ContactName": "Dominique Perrier",
			"CompanyName": "Spécialités du monde"
		},
		{
			"CustomerID": "SPLIR",
			"ContactName": "Art Braunschweiger",
			"CompanyName": "Split Rail Beer & Ale"
		},
		{
			"CustomerID": "SUPRD",
			"ContactName": "Pascale Cartrain",
			"CompanyName": "Suprêmes délices"
		},
		{
			"CustomerID": "THEBI",
			"ContactName": "Liz Nixon",
			"CompanyName": "The Big Cheese"
		},
		{
			"CustomerID": "THECR",
			"ContactName": "Liu Wong",
			"CompanyName": "The Cracker Box"
		},
		{
			"CustomerID": "TOMSP",
			"ContactName": "Karin Josephs",
			"CompanyName": "Toms Spezialitäten"
		},
		{
			"CustomerID": "TORTU",
			"ContactName": "Miguel Angel Paolino",
			"CompanyName": "Tortuga Restaurante"
		},
		{
			"CustomerID": "TRADH",
			"ContactName": "Anabela Domingues",
			"CompanyName": "Tradição Hipermercados"
		},
		{
			"CustomerID": "TRAIH",
			"ContactName": "Helvetius Nagy",
			"CompanyName": "Trail's Head Gourmet Provisioners"
		},
		{
			"CustomerID": "VAFFE",
			"ContactName": "Palle Ibsen",
			"CompanyName": "Vaffeljernet"
		},
		{
			"CustomerID": "VICTE",
			"ContactName": "Mary Saveley",
			"CompanyName": "Victuailles en stock"
		},
		{
			"CustomerID": "VINET",
			"ContactName": "Paul Henriot",
			"CompanyName": "Vins et alcools Chevalier"
		},
		{
			"CustomerID": "WANDK",
			"ContactName": "Rita Müller",
			"CompanyName": "Die Wandernde Kuh"
		},
		{
			"CustomerID": "WARTH",
			"ContactName": "Pirkko Koskitalo",
			"CompanyName": "Wartian Herkku"
		},
		{
			"CustomerID": "WELLI",
			"ContactName": "Paula Parente",
			"CompanyName": "Wellington Importadora"
		},
		{
			"CustomerID": "WHITC",
			"ContactName": "Karl Jablonski",
			"CompanyName": "White Clover Markets"
		},
		{
			"CustomerID": "WILMK",
			"ContactName": "Matti Karttunen",
			"CompanyName": "Wilman Kala"
		},
		{
			"CustomerID": "WOLZA",
			"ContactName": "Zbyszek Piestrzeniewicz",
			"CompanyName": "Wolski  Zajazd"
		}
	];

/***/ },
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.dropdown = undefined;

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _kendoDropdownlist = __webpack_require__(3);

	var _kendoDropdownlist2 = _interopRequireDefault(_kendoDropdownlist);

	__webpack_require__(14);

	__webpack_require__(15);

	var _dropdownTemplate = __webpack_require__(16);

	var _dropdownTemplate2 = _interopRequireDefault(_dropdownTemplate);

	var _dropdownData = __webpack_require__(17);

	var _dropdownData2 = _interopRequireDefault(_dropdownData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//dropdown code

	//Template


	//CSS
	var view = (0, _jquery2.default)('<select></select>').appendTo('body');

	//data


	//import allofKendoUICore from 'kendo-ui-core';
	//or just what you want to use:

	var dropdown = new kendo.ui.DropDownList(view, {
	    template: kendo.template(_dropdownTemplate2.default),
	    dataTextField: 'ContactName',
	    dataValueField: 'CustomerID',
	    dataSource: _dropdownData2.default
	});

	exports.dropdown = dropdown;

/***/ }
/******/ ]);