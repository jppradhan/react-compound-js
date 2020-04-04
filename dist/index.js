(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/polyfills.js":
/*!*****************************!*\
  !*** ./config/polyfills.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  __webpack_require__(/*! promise/lib/rejection-tracking */ "./node_modules/promise/lib/rejection-tracking.js").enable();
  window.Promise = __webpack_require__(/*! promise/lib/es6-extensions.js */ "./node_modules/promise/lib/es6-extensions.js");
}

// fetch() polyfill for making API calls.
__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (false) {}


/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/asap/browser-raw.js":
/*!******************************************!*\
  !*** ./node_modules/asap/browser-raw.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/is-what/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/is-what/dist/index.esm.js ***!
  \************************************************/
/*! exports provided: getType, isUndefined, isNull, isPlainObject, isObject, isAnyObject, isObjectLike, isFunction, isArray, isString, isFullString, isEmptyString, isNumber, isBoolean, isRegExp, isDate, isSymbol, isPrimitive, isType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnyObject", function() { return isAnyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectLike", function() { return isObjectLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFullString", function() { return isFullString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyString", function() { return isEmptyString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return isSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return isType; });
/**
 * Returns the object type of the given payload
 *
 * @param {*} payload
 * @returns {string}
 */
function getType(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
}
/**
 * Returns whether the payload is undefined
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
function isUndefined(payload) {
    return getType(payload) === 'Undefined';
}
/**
 * Returns whether the payload is null
 *
 * @param {*} payload
 * @returns {payload is null}
 */
function isNull(payload) {
    return getType(payload) === 'Null';
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
function isPlainObject(payload) {
    if (getType(payload) !== 'Object')
        return false;
    return (payload.constructor === Object && Object.getPrototypeOf(payload) === Object.prototype);
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
function isObject(payload) {
    return isPlainObject(payload);
}
/**
 * Returns whether the payload is an any kind of object (including special classes or objects with different prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
function isAnyObject(payload) {
    return getType(payload) === 'Object';
}
/**
 * Returns whether the payload is an object like a type passed in < >
 *
 * Usage: isObjectLike<{id: any}>(payload) // will make sure it's an object and has an `id` prop.
 *
 * @template T this must be passed in < >
 * @param {*} payload
 * @returns {payload is T}
 */
function isObjectLike(payload) {
    return isAnyObject(payload);
}
/**
 * Returns whether the payload is a function
 *
 * @param {*} payload
 * @returns {payload is Function}
 */
function isFunction(payload) {
    return getType(payload) === 'Function';
}
/**
 * Returns whether the payload is an array
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
function isArray(payload) {
    return getType(payload) === 'Array';
}
/**
 * Returns whether the payload is a string
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isString(payload) {
    return getType(payload) === 'String';
}
/**
 * Returns whether the payload is a string, BUT returns false for ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isFullString(payload) {
    return isString(payload) && payload !== '';
}
/**
 * Returns whether the payload is ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isEmptyString(payload) {
    return payload === '';
}
/**
 * Returns whether the payload is a number
 *
 * This will return false for NaN
 *
 * @param {*} payload
 * @returns {payload is number}
 */
function isNumber(payload) {
    return (getType(payload) === 'Number' && !isNaN(payload));
}
/**
 * Returns whether the payload is a boolean
 *
 * @param {*} payload
 * @returns {payload is boolean}
 */
function isBoolean(payload) {
    return getType(payload) === 'Boolean';
}
/**
 * Returns whether the payload is a regular expression
 *
 * @param {*} payload
 * @returns {payload is RegExp}
 */
function isRegExp(payload) {
    return getType(payload) === 'RegExp';
}
/**
 * Returns whether the payload is a date, and that the date is Valid
 *
 * @param {*} payload
 * @returns {payload is Date}
 */
function isDate(payload) {
    return (getType(payload) === 'Date' && !isNaN(payload));
}
/**
 * Returns whether the payload is a Symbol
 *
 * @param {*} payload
 * @returns {payload is symbol}
 */
function isSymbol(payload) {
    return (getType(payload) === 'Symbol');
}
/**
 * Returns whether the payload is a primitive type (eg. Boolean | Null | Undefined | Number | String | Symbol)
 *
 * @param {*} payload
 * @returns {(payload is boolean | null | undefined | number | string | symbol)}
 */
function isPrimitive(payload) {
    return (isBoolean(payload) ||
        isNull(payload) ||
        isUndefined(payload) ||
        isNumber(payload) ||
        isString(payload) ||
        isSymbol(payload));
}
/**
 * Does a generic check to check that the given payload is of a given type.
 * In cases like Number, it will return true for NaN as NaN is a Number (thanks javascript!);
 * It will, however, differentiate between object and null
 *
 * @template T
 * @param {*} payload
 * @param {T} type
 * @throws {TypeError} Will throw type error if type is an invalid type
 * @returns {payload is T}
 */
function isType(payload, type) {
    if (!(type instanceof Function)) {
        throw new TypeError('Type must be a function');
    }
    if (!type.hasOwnProperty('prototype')) {
        throw new TypeError('Type is not a class');
    }
    // Classes usually have names (as functions usually have names)
    var name = type.name;
    return (getType(payload) === name) || Boolean(payload && (payload.constructor === type));
}




/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "./node_modules/merge-anything/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/merge-anything/dist/index.esm.js ***!
  \*******************************************************/
/*! exports provided: default, merge, concatArrays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatArrays", function() { return concatArrays; });
/* harmony import */ var is_what__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-what */ "./node_modules/is-what/dist/index.esm.js");


function assignProp(carry, key, newVal, originalObject) {
    var propType = originalObject.propertyIsEnumerable(key)
        ? 'enumerable'
        : 'nonenumerable';
    if (propType === 'enumerable')
        carry[key] = newVal;
    if (propType === 'nonenumerable') {
        Object.defineProperty(carry, key, {
            value: newVal,
            enumerable: false,
            writable: true,
            configurable: true
        });
    }
}
function mergeRecursively(origin, newComer, extensions) {
    // work directly on newComer if its not an object
    if (!Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(newComer)) {
        // extend merge rules
        if (extensions && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(extensions)) {
            extensions.forEach(function (extend) {
                newComer = extend(origin, newComer);
            });
        }
        return newComer;
    }
    // define newObject to merge all values upon
    var newObject = {};
    if (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin)) {
        var props_1 = Object.getOwnPropertyNames(origin);
        var symbols_1 = Object.getOwnPropertySymbols(origin);
        newObject = props_1.concat(symbols_1).reduce(function (carry, key) {
            // @ts-ignore
            var targetVal = origin[key];
            if ((!Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(key) && !Object.getOwnPropertyNames(newComer).includes(key)) ||
                (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(key) && !Object.getOwnPropertySymbols(newComer).includes(key))) {
                assignProp(carry, key, targetVal, origin);
            }
            return carry;
        }, {});
    }
    var props = Object.getOwnPropertyNames(newComer);
    var symbols = Object.getOwnPropertySymbols(newComer);
    var result = props.concat(symbols).reduce(function (carry, key) {
        // re-define the origin and newComer as targetVal and newVal
        var newVal = newComer[key];
        var targetVal = (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin))
            // @ts-ignore
            ? origin[key]
            : undefined;
        // extend merge rules
        if (extensions && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(extensions)) {
            extensions.forEach(function (extend) {
                newVal = extend(targetVal, newVal);
            });
        }
        // When newVal is an object do the merge recursively
        if (targetVal !== undefined && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(newVal)) {
            newVal = mergeRecursively(targetVal, newVal, extensions);
        }
        assignProp(carry, key, newVal, newComer);
        return carry;
    }, newObject);
    return result;
}
/**
 * Merge anything recursively.
 * Objects get merged, special objects (classes etc.) are re-assigned "as is".
 * Basic types overwrite objects or other basic types.
 *
 * @param {(IConfig | any)} origin
 * @param {...any[]} newComers
 * @returns the result
 */
function merge(origin) {
    var newComers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        newComers[_i - 1] = arguments[_i];
    }
    var extensions = null;
    var base = origin;
    if (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin) && origin.extensions && Object.keys(origin).length === 1) {
        base = {};
        extensions = origin.extensions;
    }
    return newComers.reduce(function (result, newComer) {
        return mergeRecursively(result, newComer, extensions);
    }, base);
}

function concatArrays(originVal, newVal) {
    if (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(originVal) && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(newVal)) {
        // concat logic
        return originVal.concat(newVal);
    }
    return newVal; // always return newVal as fallback!!
}

/* harmony default export */ __webpack_exports__["default"] = (merge);



/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/promise/lib/core.js":
/*!******************************************!*\
  !*** ./node_modules/promise/lib/core.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asap = __webpack_require__(/*! asap/raw */ "./node_modules/asap/browser-raw.js");

function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('Promise constructor\'s argument is not a function');
  }
  this._75 = 0;
  this._83 = 0;
  this._18 = null;
  this._38 = null;
  if (fn === noop) return;
  doResolve(fn, this);
}
Promise._47 = null;
Promise._71 = null;
Promise._44 = noop;

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
}
function handle(self, deferred) {
  while (self._83 === 3) {
    self = self._18;
  }
  if (Promise._47) {
    Promise._47(self);
  }
  if (self._83 === 0) {
    if (self._75 === 0) {
      self._75 = 1;
      self._38 = deferred;
      return;
    }
    if (self._75 === 1) {
      self._75 = 2;
      self._38 = [self._38, deferred];
      return;
    }
    self._38.push(deferred);
    return;
  }
  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function() {
    var cb = self._83 === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._83 === 1) {
        resolve(deferred.promise, self._18);
      } else {
        reject(deferred.promise, self._18);
      }
      return;
    }
    var ret = tryCallOne(cb, self._18);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise
    ) {
      self._83 = 3;
      self._18 = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._83 = 1;
  self._18 = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._83 = 2;
  self._18 = newValue;
  if (Promise._71) {
    Promise._71(self, newValue);
  }
  finale(self);
}
function finale(self) {
  if (self._75 === 1) {
    handle(self, self._38);
    self._38 = null;
  }
  if (self._75 === 2) {
    for (var i = 0; i < self._38.length; i++) {
      handle(self, self._38[i]);
    }
    self._38 = null;
  }
}

function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  });
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}


/***/ }),

/***/ "./node_modules/promise/lib/es6-extensions.js":
/*!****************************************************!*\
  !*** ./node_modules/promise/lib/es6-extensions.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = __webpack_require__(/*! ./core.js */ "./node_modules/promise/lib/core.js");

module.exports = Promise;

/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new Promise(Promise._44);
  p._83 = 1;
  p._18 = value;
  return p;
}
Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  return valuePromise(value);
};

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr);

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          while (val._83 === 3) {
            val = val._18;
          }
          if (val._83 === 1) return res(i, val._18);
          if (val._83 === 2) reject(val._18);
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;
          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach(function(value){
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

/* Prototype Methods */

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};


/***/ }),

/***/ "./node_modules/promise/lib/rejection-tracking.js":
/*!********************************************************!*\
  !*** ./node_modules/promise/lib/rejection-tracking.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(/*! ./core */ "./node_modules/promise/lib/core.js");

var DEFAULT_WHITELIST = [
  ReferenceError,
  TypeError,
  RangeError
];

var enabled = false;
exports.disable = disable;
function disable() {
  enabled = false;
  Promise._47 = null;
  Promise._71 = null;
}

exports.enable = enable;
function enable(options) {
  options = options || {};
  if (enabled) disable();
  enabled = true;
  var id = 0;
  var displayId = 0;
  var rejections = {};
  Promise._47 = function (promise) {
    if (
      promise._83 === 2 && // IS REJECTED
      rejections[promise._56]
    ) {
      if (rejections[promise._56].logged) {
        onHandled(promise._56);
      } else {
        clearTimeout(rejections[promise._56].timeout);
      }
      delete rejections[promise._56];
    }
  };
  Promise._71 = function (promise, err) {
    if (promise._75 === 0) { // not yet handled
      promise._56 = id++;
      rejections[promise._56] = {
        displayId: null,
        error: err,
        timeout: setTimeout(
          onUnhandled.bind(null, promise._56),
          // For reference errors and type errors, this almost always
          // means the programmer made a mistake, so log them after just
          // 100ms
          // otherwise, wait 2 seconds to see if they get handled
          matchWhitelist(err, DEFAULT_WHITELIST)
            ? 100
            : 2000
        ),
        logged: false
      };
    }
  };
  function onUnhandled(id) {
    if (
      options.allRejections ||
      matchWhitelist(
        rejections[id].error,
        options.whitelist || DEFAULT_WHITELIST
      )
    ) {
      rejections[id].displayId = displayId++;
      if (options.onUnhandled) {
        rejections[id].logged = true;
        options.onUnhandled(
          rejections[id].displayId,
          rejections[id].error
        );
      } else {
        rejections[id].logged = true;
        logError(
          rejections[id].displayId,
          rejections[id].error
        );
      }
    }
  }
  function onHandled(id) {
    if (rejections[id].logged) {
      if (options.onHandled) {
        options.onHandled(rejections[id].displayId, rejections[id].error);
      } else if (!rejections[id].onUnhandled) {
        console.warn(
          'Promise Rejection Handled (id: ' + rejections[id].displayId + '):'
        );
        console.warn(
          '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
          rejections[id].displayId + '.'
        );
      }
    }
  }
}

function logError(id, error) {
  console.warn('Possible Unhandled Promise Rejection (id: ' + id + '):');
  var errStr = (error && (error.stack || error)) + '';
  errStr.split('\n').forEach(function (line) {
    console.warn('  ' + line);
  });
}

function matchWhitelist(error, list) {
  return list.some(function (cls) {
    return error instanceof cls;
  });
}

/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.production.min.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.production.min.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.11.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case t:case r:case d:return u}}}function z(a){return y(a)===m}
exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react-is.production.min.js */ "./node_modules/react-is/cjs/react-is.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/react/cjs/react.production.min.js":
/*!********************************************************!*\
  !*** ./node_modules/react/cjs/react.production.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var l=__webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js"),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}var I=H.prototype=new G;I.constructor=H;l(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a))}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b)}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:l};exports.Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
exports.Component=F;exports.Fragment=r;exports.Profiler=u;exports.PureComponent=H;exports.StrictMode=t;exports.Suspense=y;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=l({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:x,render:a}};exports.isValidElement=O;
exports.lazy=function(a){return{$$typeof:A,_ctor:a,_status:-1,_result:null}};exports.memo=function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return Z().useCallback(a,b)};exports.useContext=function(a,b){return Z().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return Z().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return Z().useMemo(a,b)};exports.useReducer=function(a,b,c){return Z().useReducer(a,b,c)};exports.useRef=function(a){return Z().useRef(a)};exports.useState=function(a){return Z().useState(a)};exports.version="16.13.1";


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react.production.min.js */ "./node_modules/react/cjs/react.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, createGlobalStyle, css, isStyledComponent, keyframes, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, withTheme, __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return isStyledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return StyleSheetConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return StyleSheetContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return ThemeConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS", function() { return __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS; });
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stylis/stylis.min */ "./node_modules/stylis/stylis.min.js");
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis-rule-sheet */ "./node_modules/stylis-rule-sheet/index.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var merge_anything__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! merge-anything */ "./node_modules/merge-anything/dist/index.esm.js");










// 

var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// 
var isPlainObject = (function (x) {
  return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.constructor === Object;
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 

function getComponentName(target) {
  return ( false) || target.displayName || target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 

var SC_ATTR = typeof process !== 'undefined' && (Object({"NODE_ENV":"production","PUBLIC_URL":"/react-compound-js"}).REACT_APP_SC_ATTR || Object({"NODE_ENV":"production","PUBLIC_URL":"/react-compound-js"}).SC_ATTR) || 'data-styled';

var SC_VERSION_ATTR = 'data-styled-version';

var SC_STREAM_ATTR = 'data-styled-streamed';

var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (Object({"NODE_ENV":"production","PUBLIC_URL":"/react-compound-js"}).REACT_APP_SC_DISABLE_SPEEDY || Object({"NODE_ENV":"production","PUBLIC_URL":"/react-compound-js"}).SC_DISABLE_SPEEDY) || "production" !== 'production';

// Shared empty execution context when generating static styles
var STATIC_EXECUTION_CONTEXT = {};

// 


/**
 * Parse errors.md and turn it into a simple hash of code: message
 */
var ERRORS =  false ? undefined : {};

/**
 * super basic version of sprintf
 */
function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });

  return a;
}

/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */

var StyledComponentsError = function (_Error) {
  inherits(StyledComponentsError, _Error);

  function StyledComponentsError(code) {
    classCallCheck(this, StyledComponentsError);

    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    if (true) {
      var _this = possibleConstructorReturn(this, _Error.call(this, 'An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#' + code + ' for more information.' + (interpolations.length > 0 ? ' Additional arguments: ' + interpolations.join(', ') : '')));
    } else { var _this; }
    return possibleConstructorReturn(_this);
  }

  return StyledComponentsError;
}(Error);

// 
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

var extractComps = (function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
});

// 

var COMMENT_REGEX = /^\s*\/\/.*$/gm;

// NOTE: This stylis instance is only used to split rules from SSR'd style tags
var stylisSplitter = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});

var stylis = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false // NOTE: This means "autocomplete missing semicolons"
});

// Wrap `insertRulePlugin to build a list of rules,
// and then make our own plugin to return the rules. This
// makes it easier to hook into the existing SSR architecture

var parsingRules = [];

// eslint-disable-next-line consistent-return
var returnRulesPlugin = function returnRulesPlugin(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};

var parseRulesPlugin = stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default()(function (rule) {
  parsingRules.push(rule);
});

var _componentId = void 0;
var _selector = void 0;
var _selectorRegexp = void 0;

var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
  if (
  // the first self-ref is always untouched
  offset > 0 &&
  // there should be at least two self-refs to do a replacement (.b > .b)
  string.slice(0, offset).indexOf(_selector) !== -1 &&
  // no consecutive self refs (.b.b); that is a precedence boost and treated differently
  string.slice(offset - _selector.length, offset) !== _selector) {
    return '.' + _componentId;
  }

  return match;
};

/**
 * When writing a style like
 *
 * & + & {
 *   color: red;
 * }
 *
 * The second ampersand should be a reference to the static component class. stylis
 * has no knowledge of static class so we have to intelligently replace the base selector.
 */
var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
  if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
    // eslint-disable-next-line no-param-reassign
    selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
  }
};

stylis.use([selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

var splitByRules = function splitByRules(css) {
  return stylisSplitter('', css);
};

function stringifyRules(rules, selector, prefix) {
  var componentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '&';

  var flatCSS = rules.join('').replace(COMMENT_REGEX, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  // stylis has no concept of state to be passed to plugins
  // but since JS is single=threaded, we can rely on that to ensure
  // these properties stay in sync with the current stylis run
  _componentId = componentId;
  _selector = selector;
  _selectorRegexp = new RegExp('\\' + _selector + '\\b', 'g');

  return stylis(prefix || !selector ? '' : selector, cssStr);
}

// 
/* eslint-disable camelcase, no-undef */

var getNonce = (function () {
  return  true ? __webpack_require__.nc : undefined;
});

// 
/* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

/* adds a new ID:name pairing to a names dictionary */
var addNameForId = function addNameForId(names, id, name) {
  if (name) {
    // eslint-disable-next-line no-param-reassign
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};

/* resets an ID entirely by overwriting it in the dictionary */
var resetIdNames = function resetIdNames(names, id) {
  // eslint-disable-next-line no-param-reassign
  names[id] = Object.create(null);
};

/* factory for a names dictionary checking the existance of an ID:name pairing */
var hasNameForId = function hasNameForId(names) {
  return function (id, name) {
    return names[id] !== undefined && names[id][name];
  };
};

/* stringifies names for the html/element output */
var stringifyNames = function stringifyNames(names) {
  var str = '';
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    str += Object.keys(names[id]).join(' ') + ' ';
  }
  return str.trim();
};

/* clones the nested names dictionary */
var cloneNames = function cloneNames(names) {
  var clone = Object.create(null);
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    clone[id] = _extends({}, names[id]);
  }
  return clone;
};

// 

/* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

/* retrieve a sheet for a given style tag */
var sheetForTag = function sheetForTag(tag) {
  // $FlowFixMe
  if (tag.sheet) return tag.sheet;

  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
  var size = tag.ownerDocument.styleSheets.length;
  for (var i = 0; i < size; i += 1) {
    var sheet = tag.ownerDocument.styleSheets[i];
    // $FlowFixMe
    if (sheet.ownerNode === tag) return sheet;
  }

  /* we should always be able to find a tag */
  throw new StyledComponentsError(10);
};

/* insert a rule safely and return whether it was actually injected */
var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
  /* abort early if cssRule string is falsy */
  if (!cssRule) return false;

  var maxIndex = sheet.cssRules.length;

  try {
    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
  } catch (err) {
    /* any error indicates an invalid rule */
    return false;
  }

  return true;
};

/* deletes `size` rules starting from `removalIndex` */
var deleteRules = function deleteRules(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;
  for (var i = removalIndex; i > lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
};

// 

/* this marker separates component styles and is important for rehydration */
var makeTextMarker = function makeTextMarker(id) {
  return '\n/* sc-component-id: ' + id + ' */\n';
};

/* add up all numbers in array up until and including the index */
var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
  var totalUpToIndex = 0;
  for (var i = 0; i <= index; i += 1) {
    totalUpToIndex += sizes[i];
  }

  return totalUpToIndex;
};

/* create a new style tag after lastEl */
var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
  var targetDocument = document;
  if (target) targetDocument = target.ownerDocument;else if (tagEl) targetDocument = tagEl.ownerDocument;

  var el = targetDocument.createElement('style');
  el.setAttribute(SC_ATTR, '');
  el.setAttribute(SC_VERSION_ATTR, "4.4.1");

  var nonce = getNonce();
  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  /* Work around insertRule quirk in EdgeHTML */
  el.appendChild(targetDocument.createTextNode(''));

  if (target && !tagEl) {
    /* Append to target when no previous element was passed */
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new StyledComponentsError(6);
    }

    /* Insert new style tag after the previous one */
    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }

  return el;
};

/* takes a css factory function and outputs an html styled tag factory */
var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
  return function (additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', SC_VERSION_ATTR + '="' + "4.4.1" + '"', additionalAttrs];

    var htmlAttr = attrs.filter(Boolean).join(' ');
    return '<style ' + htmlAttr + '>' + css() + '</style>';
  };
};

/* takes a css factory function and outputs an element factory */
var wrapAsElement = function wrapAsElement(css, names) {
  return function () {
    var _props;

    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props[SC_VERSION_ATTR] = "4.4.1", _props);

    var nonce = getNonce();
    if (nonce) {
      // $FlowFixMe
      props.nonce = nonce;
    }

    // eslint-disable-next-line react/no-danger
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('style', _extends({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
  };
};

var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
  return function () {
    return Object.keys(markers);
  };
};

/* speedy tags utilise insertRule */
var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];

  var extractImport = getImportRuleTag !== undefined;
  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);

    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }

    sizes[marker] += injectedRules; /* add up no of injected rules */
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    // $FlowFixMe
    if (el.isConnected === false) return;

    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker) - 1;
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var _sheetForTag = sheetForTag(el),
        cssRules = _sheetForTag.cssRules;

    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];
      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];
        if (rule !== undefined) {
          str += rule.cssText;
        }
      }
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeTextNode = function makeTextNode(targetDocument, id) {
  return targetDocument.createTextNode(makeTextMarker(id));
};

var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);

  var extractImport = getImportRuleTag !== undefined;

  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = makeTextNode(el.ownerDocument, id);
    el.appendChild(markers[id]);
    names[id] = Object.create(null);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;
      if (mayHaveImport && rule.indexOf('@import') !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? '' : ' ';
        marker.appendData('' + rule + separator);
      }
    }

    addNameForId(names, id, name);

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    /* create new empty text node and replace the current one */
    var newMarker = makeTextNode(el.ownerDocument, id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += markers[id].data;
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeServerTag = function makeServerTag(namesArg, markersArg) {
  var names = namesArg === undefined ? Object.create(null) : namesArg;
  var markers = markersArg === undefined ? Object.create(null) : markersArg;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    return markers[id] = [''];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(' ');
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    marker[0] = '';
    resetIdNames(names, id);
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      var cssForId = markers[id][0];
      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }
    return str;
  };

  var clone = function clone() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null);

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }

    return makeServerTag(namesClone, markersClone);
  };

  var tag = {
    clone: clone,
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: null,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };

  return tag;
};

var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);

    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }

  return makeServerTag();
};

var rehydrate = function rehydrate(tag, els, extracted) {
  /* add all extracted components to the new tag */
  for (var i = 0, len = extracted.length; i < len; i += 1) {
    var _extracted$i = extracted[i],
        componentId = _extracted$i.componentId,
        cssFromDOM = _extracted$i.cssFromDOM;

    var cssRules = splitByRules(cssFromDOM);
    tag.insertRules(componentId, cssRules);
  }

  /* remove old HTMLStyleElements, since they have been rehydrated */
  for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
    var el = els[_i];
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }
};

// 

var SPLIT_REGEX = /\s+/;

/* determine the maximum number of components before tags are sharded */
var MAX_SIZE = void 0;
if (IS_BROWSER) {
  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
} else {
  /* for servers we do not need to shard at all */
  MAX_SIZE = -1;
}

var sheetRunningId = 0;
var master = void 0;

var StyleSheet = function () {

  /* a map from ids to tags */

  /* deferred rules for a given id */

  /* this is used for not reinjecting rules via hasNameForId() */

  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */

  /* a list of tags belonging to this StyleSheet */

  /* a tag for import rules */

  /* current capacity until a new tag must be created */

  /* children (aka clones) of this StyleSheet inheriting all and future injections */

  function StyleSheet() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, StyleSheet);

    this.getImportRuleTag = function () {
      var importRuleTag = _this.importRuleTag;

      if (importRuleTag !== undefined) {
        return importRuleTag;
      }

      var firstTag = _this.tags[0];
      var insertBefore = true;

      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };

    sheetRunningId += 1;
    this.id = sheetRunningId;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }

  /* rehydrate all SSR'd style tags */


  StyleSheet.prototype.rehydrate = function rehydrate$$1() {
    if (!IS_BROWSER || this.forceServer) return this;

    var els = [];
    var extracted = [];
    var isStreamed = false;

    /* retrieve all of our SSR style elements from the DOM */
    var nodes = document.querySelectorAll('style[' + SC_ATTR + '][' + SC_VERSION_ATTR + '="' + "4.4.1" + '"]');

    var nodesSize = nodes.length;

    /* abort rehydration if no previous style tags were found */
    if (!nodesSize) return this;

    for (var i = 0; i < nodesSize; i += 1) {
      var el = nodes[i];

      /* check if style tag is a streamed tag */
      if (!isStreamed) isStreamed = !!el.getAttribute(SC_STREAM_ATTR);

      /* retrieve all component names */
      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(SPLIT_REGEX);
      var elNamesSize = elNames.length;
      for (var j = 0, name; j < elNamesSize; j += 1) {
        name = elNames[j];
        /* add rehydrated name to sheet to avoid re-adding styles */
        this.rehydratedNames[name] = true;
      }

      /* extract all components and their CSS */
      extracted.push.apply(extracted, extractComps(el.textContent));

      /* store original HTMLStyleElement */
      els.push(el);
    }

    /* abort rehydration if nothing was extracted */
    var extractedSize = extracted.length;
    if (!extractedSize) return this;

    /* create a tag to be used for rehydration */
    var tag = this.makeTag(null);

    rehydrate(tag, els, extracted);

    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(tag);

    /* retrieve all component ids */
    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = tag;
    }

    return this;
  };

  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by createGlobalStyle, keyframes, and components outside of any
    * StyleSheetManager's context */


  /* reset the internal "master" instance */
  StyleSheet.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    master = new StyleSheet(undefined, forceServer).rehydrate();
  };

  /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */


  StyleSheet.prototype.clone = function clone() {
    var sheet = new StyleSheet(this.target, this.forceServer);

    /* add to clone array */
    this.clones.push(sheet);

    /* clone all tags */
    sheet.tags = this.tags.map(function (tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();

      /* reconstruct tagMap */
      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }

      return newTag;
    });

    /* clone other maps */
    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
    sheet.deferred = _extends({}, this.deferred);

    return sheet;
  };

  /* force StyleSheet to create a new tag on the next injection */


  StyleSheet.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;

    this.tags.forEach(function (tag) {
      // eslint-disable-next-line no-param-reassign
      tag.sealed = true;
    });
  };

  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;

    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };

  /* get a tag for a given componentId, assign the componentId to one, or shard */
  StyleSheet.prototype.getTagForId = function getTagForId(id) {
    /* simply return a tag, when the componentId was already assigned one */
    var prev = this.tagMap[id];
    if (prev !== undefined && !prev.sealed) {
      return prev;
    }

    var tag = this.tags[this.tags.length - 1];

    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
    this.capacity -= 1;

    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }

    return this.tagMap[id] = tag;
  };

  /* mainly for createGlobalStyle to check for its id */


  StyleSheet.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== undefined;
  };

  /* caching layer checking id+name to already have a corresponding tag and injected rules */


  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
    /* exception for rehydrated names which are checked separately */
    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
      return true;
    }

    var tag = this.tagMap[id];
    return tag !== undefined && tag.hasNameForId(id, name);
  };

  /* registers a componentId and registers it on its tag */


  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
    /* don't inject when the id is already registered */
    if (this.tagMap[id] !== undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }

    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };

  /* injects rules for a given id with a name that will need to be cached */


  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;


    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }

    var tag = this.getTagForId(id);

    /* add deferred rules for component */
    if (this.deferred[id] !== undefined) {
      // Combine passed cssRules with previously deferred CSS rules
      // NOTE: We cannot mutate the deferred array itself as all clones
      // do the same (see clones[i].inject)
      var rules = this.deferred[id].concat(cssRules);
      tag.insertRules(id, rules, name);

      this.deferred[id] = undefined;
    } else {
      tag.insertRules(id, cssRules, name);
    }
  };

  /* removes all rules for a given id, which doesn't remove its marker but resets it */


  StyleSheet.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }

    /* remove all rules from the tag */
    tag.removeRules(id);

    /* ignore possible rehydrated names */
    this.ignoreRehydratedNames[id] = true;

    /* delete possible deferred rules */
    this.deferred[id] = undefined;
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    var id = this.id;


    return this.tags.map(function (tag, i) {
      var key = 'sc-' + id + '-' + i;
      return Object(react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(tag.toElement(), { key: key });
    });
  };

  createClass(StyleSheet, null, [{
    key: 'master',
    get: function get$$1() {
      return master || (master = new StyleSheet().rehydrate());
    }

    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

  }, {
    key: 'instance',
    get: function get$$1() {
      return StyleSheet.master;
    }
  }]);
  return StyleSheet;
}();

// 

var Keyframes = function () {
  function Keyframes(name, rules) {
    var _this = this;

    classCallCheck(this, Keyframes);

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.inject(_this.id, _this.rules, _this.name);
      }
    };

    this.toString = function () {
      throw new StyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.rules = rules;

    this.id = 'sc-keyframes-' + name;
  }

  Keyframes.prototype.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

// Taken from https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/shared/dangerousStyleValue.js
function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__["default"])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 

/**
 * It's falsish not falsy because 0 is allowed.
 */
var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);

  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));

        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ':', obj[key], ';');

        return rules;
      }
      rules.push(hyphenateStyleName(key) + ': ' + addUnitIfNeeded(key, obj[key]) + ';');
    }
    return rules;
  });

  return prevKey ? [prevKey + ' {'].concat(rules, ['}']) : rules;
};

function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);

      if (result === null) continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return null;
  }

  /* Handle other components */
  if (isStyledComponent(chunk)) {
    return '.' + chunk.styledComponentId;
  }

  /* Either execute or defer the function */
  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if (false) {}

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }

  /* Handle objects */
  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 

function css(styles) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  // $FlowFixMe
  return flatten(interleave(styles, interpolations));
}

// 

function constructWithOptions(componentConstructor, tag) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isValidElementType"])(tag)) {
    throw new StyledComponentsError(1, String(tag));
  }

  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments
  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(undefined, arguments));
  };

  /* If config methods are called, wrap up a new template function and merge options */
  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
  };

  /* Modify/inject new props at runtime */
  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

// 
// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash(c) {
  for (var e = c.length | 0, a = e | 0, d = 0, b; e >= 4;) {
    b = c.charCodeAt(d) & 255 | (c.charCodeAt(++d) & 255) << 8 | (c.charCodeAt(++d) & 255) << 16 | (c.charCodeAt(++d) & 255) << 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), b ^= b >>> 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16) ^ b, e -= 4, ++d;
  }
  switch (e) {
    case 3:
      a ^= (c.charCodeAt(d + 2) & 255) << 16;
    case 2:
      a ^= (c.charCodeAt(d + 1) & 255) << 8;
    case 1:
      a ^= c.charCodeAt(d) & 255, a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  }
  a ^= a >>> 13;
  a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  return (a ^ a >>> 15) >>> 0;
}

// 
/* eslint-disable no-bitwise */

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */
var charsLength = 52;

/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};

/* input a number, usually a hash and convert it to base-52 */
function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  /* get a char and divide by alphabet-length */
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
}

// 

function hasFunctionObjectKey(obj) {
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (var key in obj) {
    if (isFunction(obj[key])) {
      return true;
    }
  }

  return false;
}

function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule, attrs)) {
      return false;
    } else if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  if (attrs.some(function (x) {
    return isFunction(x) || hasFunctionObjectKey(x);
  })) return false;

  return true;
}

// 

/* combines hashStr (murmurhash) and nameGenerator for convenience */
var hasher = function hasher(str) {
  return generateAlphabeticName(murmurhash(str));
};

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = function () {
  function ComponentStyle(rules, attrs, componentId) {
    classCallCheck(this, ComponentStyle);

    this.rules = rules;
    this.isStatic =  true && isStaticRules(rules, attrs);
    this.componentId = componentId;

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
    var isStatic = this.isStatic,
        componentId = this.componentId,
        lastClassName = this.lastClassName;

    if (IS_BROWSER && isStatic && typeof lastClassName === 'string' && styleSheet.hasNameForId(componentId, lastClassName)) {
      return lastClassName;
    }

    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var name = hasher(this.componentId + flatCSS.join(''));
    if (!styleSheet.hasNameForId(componentId, name)) {
      styleSheet.inject(this.componentId, stringifyRules(flatCSS, '.' + name, undefined, componentId), name);
    }

    this.lastClassName = name;
    return name;
  };

  ComponentStyle.generateName = function generateName(str) {
    return hasher(str);
  };

  return ComponentStyle;
}();

// 

var LIMIT = 200;

var createWarnTooManyClasses = (function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 

var determineTheme = (function (props, fallbackTheme) {
  var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types, flowtype-errors/show-errors */
  var isDefaultTheme = defaultProps ? props.theme === defaultProps.theme : false;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme || defaultProps.theme;
  /* eslint-enable */

  return theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 

function isTag(target) {
  return typeof target === 'string' && ( false ? undefined : true);
}

// 

function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
}

var _TYPE_STATICS;

var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDerivedStateFromProps: true,
  propTypes: true,
  type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var TYPE_STATICS = (_TYPE_STATICS = {}, _TYPE_STATICS[react_is__WEBPACK_IMPORTED_MODULE_4__["ForwardRef"]] = {
  $$typeof: true,
  render: true
}, _TYPE_STATICS);

var defineProperty$1 = Object.defineProperty,
    getOwnPropertyNames = Object.getOwnPropertyNames,
    _Object$getOwnPropert = Object.getOwnPropertySymbols,
    getOwnPropertySymbols = _Object$getOwnPropert === undefined ? function () {
  return [];
} : _Object$getOwnPropert,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
    getPrototypeOf = Object.getPrototypeOf,
    objectPrototype = Object.prototype;
var arrayPrototype = Array.prototype;


function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components

    var inheritedComponent = getPrototypeOf(sourceComponent);

    if (inheritedComponent && inheritedComponent !== objectPrototype) {
      hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
    }

    var keys = arrayPrototype.concat(getOwnPropertyNames(sourceComponent),
    // $FlowFixMe
    getOwnPropertySymbols(sourceComponent));

    var targetStatics = TYPE_STATICS[targetComponent.$$typeof] || REACT_STATICS;

    var sourceStatics = TYPE_STATICS[sourceComponent.$$typeof] || REACT_STATICS;

    var i = keys.length;
    var descriptor = void 0;
    var key = void 0;

    // eslint-disable-next-line no-plusplus
    while (i--) {
      key = keys[i];

      if (
      // $FlowFixMe
      !KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) &&
      // $FlowFixMe
      !(targetStatics && targetStatics[key])) {
        descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        if (descriptor) {
          try {
            // Avoid failures from read-only properties
            defineProperty$1(targetComponent, key, descriptor);
          } catch (e) {
            /* fail silently */
          }
        }
      }
    }

    return targetComponent;
  }

  return targetComponent;
}

// 
function isDerivedReactComponent(fn) {
  return !!(fn && fn.prototype && fn.prototype.isReactComponent);
}

// 
// Helper to call a given function, only once
var once = (function (cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb.apply(undefined, arguments);
    }
  };
});

// 

var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();

var ThemeConsumer = ThemeContext.Consumer;

/**
 * Provide a theme to an entire react component tree via context
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider(props) {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.getContext.bind(_this));
    _this.renderInner = _this.renderInner.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) return null;

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeContext.Consumer,
      null,
      this.renderInner
    );
  };

  ThemeProvider.prototype.renderInner = function renderInner(outerTheme) {
    var context = this.getContext(this.props.theme, outerTheme);

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeContext.Provider,
      { value: context },
      this.props.children
    );
  };

  /**
   * Get the theme from the props, supporting both (outerTheme) => {}
   * as well as object notation
   */


  ThemeProvider.prototype.getTheme = function getTheme(theme, outerTheme) {
    if (isFunction(theme)) {
      var mergedTheme = theme(outerTheme);

      if (false) {}

      return mergedTheme;
    }

    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
      throw new StyledComponentsError(8);
    }

    return _extends({}, outerTheme, theme);
  };

  ThemeProvider.prototype.getContext = function getContext(theme, outerTheme) {
    return this.getTheme(theme, outerTheme);
  };

  return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

// 

var CLOSING_TAG_R = /^\s*<\/[a-z]/i;

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    /* The master sheet might be reset, so keep a reference here */
    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.sealed = false;
  }

  /**
   * Mark the ServerStyleSheet as being fully emitted and manually GC it from the
   * StyleSheet singleton.
   */


  ServerStyleSheet.prototype.seal = function seal() {
    if (!this.sealed) {
      /* Remove sealed StyleSheets from the master sheet */
      var index = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index, 1);
      this.sealed = true;
    }
  };

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      throw new StyledComponentsError(2);
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetManager,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    this.seal();
    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    this.seal();
    return this.instance.toReactElements();
  };

  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;

    {
      throw new StyledComponentsError(3);
    }

    /* the tag index keeps track of which tags have already been emitted */
    var instance = this.instance;

    var instanceTagIndex = 0;

    var streamAttr = SC_STREAM_ATTR + '="true"';

    var transformer = new stream.Transform({
      transform: function appendStyleChunks(chunk, /* encoding */_, callback) {
        var tags = instance.tags;

        var html = '';

        /* retrieve html for each new style tag */
        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
          var tag = tags[instanceTagIndex];
          html += tag.toHTML(streamAttr);
        }

        /* force our StyleSheets to emit entirely new tags */
        instance.sealAllTags();

        var renderedHtml = chunk.toString();

        /* prepend style html to chunk, unless the start of the chunk is a closing tag in which case append right after that */
        if (CLOSING_TAG_R.test(renderedHtml)) {
          var endOfClosingTag = renderedHtml.indexOf('>');

          this.push(renderedHtml.slice(0, endOfClosingTag + 1) + html + renderedHtml.slice(endOfClosingTag + 1));
        } else this.push(html + renderedHtml);

        callback();
      }
    });

    readableStream.on('end', function () {
      return _this.seal();
    });

    readableStream.on('error', function (err) {
      _this.seal();

      // forward the error to the transform stream
      transformer.emit('error', err);
    });

    return readableStream.pipe(transformer);
  };

  return ServerStyleSheet;
}();

// 

var StyleSheetContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();
var StyleSheetConsumer = StyleSheetContext.Consumer;

var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager(props) {
    classCallCheck(this, StyleSheetManager);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.getContext);
    return _this;
  }

  StyleSheetManager.prototype.getContext = function getContext(sheet, target) {
    if (sheet) {
      return sheet;
    } else if (target) {
      return new StyleSheet(target);
    } else {
      throw new StyledComponentsError(4);
    }
  };

  StyleSheetManager.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        sheet = _props.sheet,
        target = _props.target;


    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetContext.Provider,
      { value: this.getContext(sheet, target) },
       false ? undefined : children
    );
  };

  return StyleSheetManager;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);
 false ? undefined : void 0;

// 

var identifiers = {};

/* We depend on components having unique IDs */
function generateId(_ComponentStyle, _displayName, parentComponentId) {
  var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

  /**
   * This ensures uniqueness if two components happen to share
   * the same displayName.
   */
  var nr = (identifiers[displayName] || 0) + 1;
  identifiers[displayName] = nr;

  var componentId = displayName + '-' + _ComponentStyle.generateName(displayName + nr);

  return parentComponentId ? parentComponentId + '-' + componentId : componentId;
}

// $FlowFixMe

var StyledComponent = function (_Component) {
  inherits(StyledComponent, _Component);

  function StyledComponent() {
    classCallCheck(this, StyledComponent);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.attrs = {};

    _this.renderOuter = _this.renderOuter.bind(_this);
    _this.renderInner = _this.renderInner.bind(_this);

    if (false) {}
    return _this;
  }

  StyledComponent.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetConsumer,
      null,
      this.renderOuter
    );
  };

  StyledComponent.prototype.renderOuter = function renderOuter() {
    var styleSheet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : StyleSheet.master;

    this.styleSheet = styleSheet;

    // No need to subscribe a static component to theme changes, it won't change anything
    if (this.props.forwardedComponent.componentStyle.isStatic) return this.renderInner();

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeConsumer,
      null,
      this.renderInner
    );
  };

  StyledComponent.prototype.renderInner = function renderInner(theme) {
    var _props$forwardedCompo = this.props.forwardedComponent,
        componentStyle = _props$forwardedCompo.componentStyle,
        defaultProps = _props$forwardedCompo.defaultProps,
        displayName = _props$forwardedCompo.displayName,
        foldedComponentIds = _props$forwardedCompo.foldedComponentIds,
        styledComponentId = _props$forwardedCompo.styledComponentId,
        target = _props$forwardedCompo.target;


    var generatedClassName = void 0;
    if (componentStyle.isStatic) {
      generatedClassName = this.generateAndInjectStyles(EMPTY_OBJECT, this.props);
    } else {
      generatedClassName = this.generateAndInjectStyles(determineTheme(this.props, theme, defaultProps) || EMPTY_OBJECT, this.props);
    }

    var elementToBeCreated = this.props.as || this.attrs.as || target;
    var isTargetTag = isTag(elementToBeCreated);

    var propsForElement = {};
    var computedProps = _extends({}, this.props, this.attrs);

    var key = void 0;
    // eslint-disable-next-line guard-for-in
    for (key in computedProps) {
      if (false) {}

      if (key === 'forwardedComponent' || key === 'as') {
        continue;
      } else if (key === 'forwardedRef') propsForElement.ref = computedProps[key];else if (key === 'forwardedAs') propsForElement.as = computedProps[key];else if (!isTargetTag || Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_7__["default"])(key)) {
        // Don't pass through non HTML tags through to HTML elements
        propsForElement[key] = computedProps[key];
      }
    }

    if (this.props.style && this.attrs.style) {
      propsForElement.style = _extends({}, this.attrs.style, this.props.style);
    }

    propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, this.props.className, this.attrs.className).filter(Boolean).join(' ');

    return Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(elementToBeCreated, propsForElement);
  };

  StyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props, attrs) {
    var _this2 = this;

    var context = _extends({}, props, { theme: theme });

    if (!attrs.length) return context;

    this.attrs = {};

    attrs.forEach(function (attrDef) {
      var resolvedAttrDef = attrDef;
      var attrDefWasFn = false;
      var attr = void 0;
      var key = void 0;

      if (isFunction(resolvedAttrDef)) {
        // $FlowFixMe
        resolvedAttrDef = resolvedAttrDef(context);
        attrDefWasFn = true;
      }

      /* eslint-disable guard-for-in */
      // $FlowFixMe
      for (key in resolvedAttrDef) {
        attr = resolvedAttrDef[key];

        if (!attrDefWasFn) {
          if (isFunction(attr) && !isDerivedReactComponent(attr) && !isStyledComponent(attr)) {
            if (false) {}

            attr = attr(context);

            if (false) {}
          }
        }

        _this2.attrs[key] = attr;
        context[key] = attr;
      }
      /* eslint-enable */
    });

    return context;
  };

  StyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
    var _props$forwardedCompo2 = props.forwardedComponent,
        attrs = _props$forwardedCompo2.attrs,
        componentStyle = _props$forwardedCompo2.componentStyle,
        warnTooManyClasses = _props$forwardedCompo2.warnTooManyClasses;

    // statically styled-components don't need to build an execution context object,
    // and shouldn't be increasing the number of class names

    if (componentStyle.isStatic && !attrs.length) {
      return componentStyle.generateAndInjectStyles(EMPTY_OBJECT, this.styleSheet);
    }

    var className = componentStyle.generateAndInjectStyles(this.buildExecutionContext(theme, props, attrs), this.styleSheet);

    if (false) {}

    return className;
  };

  return StyledComponent;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isClass = !isTag(target);

  var _options$displayName = options.displayName,
      displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === undefined ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId,
      _options$ParentCompon = options.ParentComponent,
      ParentComponent = _options$ParentCompon === undefined ? StyledComponent : _options$ParentCompon,
      _options$attrs = options.attrs,
      attrs = _options$attrs === undefined ? EMPTY_ARRAY : _options$attrs;


  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : options.componentId || componentId;

  // fold the underlying StyledComponent attrs up (implicit extend)
  var finalAttrs =
  // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs;

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, finalAttrs, styledComponentId);

  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */
  var WrappedStyledComponent = void 0;
  var forwardRef = function forwardRef(props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ParentComponent, _extends({}, props, { forwardedComponent: WrappedStyledComponent, forwardedRef: ref }));
  };
  forwardRef.displayName = displayName;
  WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(forwardRef);
  WrappedStyledComponent.displayName = displayName;

  // $FlowFixMe
  WrappedStyledComponent.attrs = finalAttrs;
  // $FlowFixMe
  WrappedStyledComponent.componentStyle = componentStyle;

  // $FlowFixMe
  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;

  // $FlowFixMe
  WrappedStyledComponent.styledComponentId = styledComponentId;

  // fold the underlying StyledComponent target up since we folded the styles
  // $FlowFixMe
  WrappedStyledComponent.target = isTargetStyledComp ? target.target : target;

  // $FlowFixMe
  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = objectWithoutProperties(options, ['componentId']);


    var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId,
      ParentComponent: ParentComponent
    });

    return createStyledComponent(tag, newOptions, rules);
  };

  // $FlowFixMe
  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get$$1() {
      return this._foldedDefaultProps;
    },
    set: function set$$1(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? Object(merge_anything__WEBPACK_IMPORTED_MODULE_8__["default"])(target.defaultProps, obj) : obj;
    }
  });

  if (false) {}

  // $FlowFixMe
  WrappedStyledComponent.toString = function () {
    return '.' + WrappedStyledComponent.styledComponentId;
  };

  if (isClass) {
    hoistNonReactStatics(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
};

// Shorthands for all valid HTML Elements
domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = function () {
  function GlobalStyle(rules, componentId) {
    classCallCheck(this, GlobalStyle);

    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules, EMPTY_ARRAY);

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  GlobalStyle.prototype.createStyles = function createStyles(executionContext, styleSheet) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stringifyRules(flatCSS, '');

    styleSheet.inject(this.componentId, css);
  };

  GlobalStyle.prototype.removeStyles = function removeStyles(styleSheet) {
    var componentId = this.componentId;

    if (styleSheet.hasId(componentId)) {
      styleSheet.remove(componentId);
    }
  };

  // TODO: overwrite in-place instead of remove+create?


  GlobalStyle.prototype.renderStyles = function renderStyles(executionContext, styleSheet) {
    this.removeStyles(styleSheet);
    this.createStyles(executionContext, styleSheet);
  };

  return GlobalStyle;
}();

// 

// place our cache into shared context so it'll persist between HMRs
if (IS_BROWSER) {
  window.scCGSHMRCache = {};
}

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));
  var id = 'sc-global-' + murmurhash(JSON.stringify(rules));
  var style = new GlobalStyle(rules, id);

  var GlobalStyleComponent = function (_React$Component) {
    inherits(GlobalStyleComponent, _React$Component);

    function GlobalStyleComponent(props) {
      classCallCheck(this, GlobalStyleComponent);

      var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

      var _this$constructor = _this.constructor,
          globalStyle = _this$constructor.globalStyle,
          styledComponentId = _this$constructor.styledComponentId;


      if (IS_BROWSER) {
        window.scCGSHMRCache[styledComponentId] = (window.scCGSHMRCache[styledComponentId] || 0) + 1;
      }

      /**
       * This fixes HMR compatibility. Don't ask me why, but this combination of
       * caching the closure variables via statics and then persisting the statics in
       * state works across HMR where no other combination did. ¯\_(ツ)_/¯
       */
      _this.state = {
        globalStyle: globalStyle,
        styledComponentId: styledComponentId
      };
      return _this;
    }

    GlobalStyleComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      if (window.scCGSHMRCache[this.state.styledComponentId]) {
        window.scCGSHMRCache[this.state.styledComponentId] -= 1;
      }
      /**
       * Depending on the order "render" is called this can cause the styles to be lost
       * until the next render pass of the remaining instance, which may
       * not be immediate.
       */
      if (window.scCGSHMRCache[this.state.styledComponentId] === 0) {
        this.state.globalStyle.removeStyles(this.styleSheet);
      }
    };

    GlobalStyleComponent.prototype.render = function render() {
      var _this2 = this;

      if (false) {}

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
        StyleSheetConsumer,
        null,
        function (styleSheet) {
          _this2.styleSheet = styleSheet || StyleSheet.master;

          var globalStyle = _this2.state.globalStyle;


          if (globalStyle.isStatic) {
            globalStyle.renderStyles(STATIC_EXECUTION_CONTEXT, _this2.styleSheet);

            return null;
          } else {
            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              ThemeConsumer,
              null,
              function (theme) {
                // $FlowFixMe
                var defaultProps = _this2.constructor.defaultProps;


                var context = _extends({}, _this2.props);

                if (typeof theme !== 'undefined') {
                  context.theme = determineTheme(_this2.props, theme, defaultProps);
                }

                globalStyle.renderStyles(context, _this2.styleSheet);

                return null;
              }
            );
          }
        }
      );
    };

    return GlobalStyleComponent;
  }(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

  GlobalStyleComponent.globalStyle = style;
  GlobalStyleComponent.styledComponentId = id;


  return GlobalStyleComponent;
}

// 

var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if (false) {}

  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));

  var name = generateAlphabeticName(murmurhash(replaceWhitespace(JSON.stringify(rules))));

  return new Keyframes(name, stringifyRules(rules, name, '@keyframes'));
}

// 

var withTheme = (function (Component$$1) {
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeConsumer,
      null,
      function (theme) {
        // $FlowFixMe
        var defaultProps = Component$$1.defaultProps;

        var themeProp = determineTheme(props, theme, defaultProps);

        if (false) {}

        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component$$1, _extends({}, props, { theme: themeProp, ref: ref }));
      }
    );
  });

  hoistNonReactStatics(WithTheme, Component$$1);

  WithTheme.displayName = 'WithTheme(' + getComponentName(Component$$1) + ')';

  return WithTheme;
});

// 

/* eslint-disable */
var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
  StyleSheet: StyleSheet
};

// 

/* Warning if you've imported this file on React Native */
if (false) {}

/* Warning if there are several instances of styled-components */
if (false) {}

//

/* harmony default export */ __webpack_exports__["default"] = (styled);

//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/stylis-rule-sheet/index.js":
/*!*************************************************!*\
  !*** ./node_modules/stylis-rule-sheet/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		undefined
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),

/***/ "./node_modules/stylis/stylis.min.js":
/*!*******************************************!*\
  !*** ./node_modules/stylis/stylis.min.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e){ true?module.exports=e(null):undefined}(function e(a){"use strict";var r=/^\0+/g,c=/[\0\r\f]/g,s=/: */g,t=/zoo|gra/,i=/([,: ])(transform)/g,f=/,+\s*(?![^(]*[)])/g,n=/ +\s*(?![^(]*[)])/g,l=/ *[\0] */g,o=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,u=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,d=/\W+/g,b=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,k=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,A=/([[}=:>])\s+/g,C=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,v=/([^\(])(:+) */g,m=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,y=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,N="-webkit-",S="-moz-",F="-ms-",W=59,q=125,B=123,D=40,E=41,G=91,H=93,I=10,J=13,K=9,L=64,M=32,P=38,Q=45,R=95,T=42,U=44,V=58,X=39,Y=34,Z=47,_=62,ee=43,ae=126,re=0,ce=12,se=11,te=107,ie=109,fe=115,ne=112,le=111,oe=105,he=99,ue=100,de=112,be=1,pe=1,ke=0,ge=1,Ae=1,Ce=1,we=0,ve=0,me=0,xe=[],$e=[],ye=0,Oe=null,je=-2,ze=-1,Ne=0,Se=1,Fe=2,We=3,qe=0,Be=1,De="",Ee="",Ge="";function He(e,a,s,t,i){for(var f,n,o=0,h=0,u=0,d=0,g=0,A=0,C=0,w=0,m=0,$=0,y=0,O=0,j=0,z=0,R=0,we=0,$e=0,Oe=0,je=0,ze=s.length,Je=ze-1,Re="",Te="",Ue="",Ve="",Xe="",Ye="";R<ze;){if(C=s.charCodeAt(R),R===Je)if(h+d+u+o!==0){if(0!==h)C=h===Z?I:Z;d=u=o=0,ze++,Je++}if(h+d+u+o===0){if(R===Je){if(we>0)Te=Te.replace(c,"");if(Te.trim().length>0){switch(C){case M:case K:case W:case J:case I:break;default:Te+=s.charAt(R)}C=W}}if(1===$e)switch(C){case B:case q:case W:case Y:case X:case D:case E:case U:$e=0;case K:case J:case I:case M:break;default:for($e=0,je=R,g=C,R--,C=W;je<ze;)switch(s.charCodeAt(je++)){case I:case J:case W:++R,C=g,je=ze;break;case V:if(we>0)++R,C=g;case B:je=ze}}switch(C){case B:for(g=(Te=Te.trim()).charCodeAt(0),y=1,je=++R;R<ze;){switch(C=s.charCodeAt(R)){case B:y++;break;case q:y--;break;case Z:switch(A=s.charCodeAt(R+1)){case T:case Z:R=Qe(A,R,Je,s)}break;case G:C++;case D:C++;case Y:case X:for(;R++<Je&&s.charCodeAt(R)!==C;);}if(0===y)break;R++}if(Ue=s.substring(je,R),g===re)g=(Te=Te.replace(r,"").trim()).charCodeAt(0);switch(g){case L:if(we>0)Te=Te.replace(c,"");switch(A=Te.charCodeAt(1)){case ue:case ie:case fe:case Q:f=a;break;default:f=xe}if(je=(Ue=He(a,f,Ue,A,i+1)).length,me>0&&0===je)je=Te.length;if(ye>0)if(f=Ie(xe,Te,Oe),n=Pe(We,Ue,f,a,pe,be,je,A,i,t),Te=f.join(""),void 0!==n)if(0===(je=(Ue=n.trim()).length))A=0,Ue="";if(je>0)switch(A){case fe:Te=Te.replace(x,Me);case ue:case ie:case Q:Ue=Te+"{"+Ue+"}";break;case te:if(Ue=(Te=Te.replace(b,"$1 $2"+(Be>0?De:"")))+"{"+Ue+"}",1===Ae||2===Ae&&Le("@"+Ue,3))Ue="@"+N+Ue+"@"+Ue;else Ue="@"+Ue;break;default:if(Ue=Te+Ue,t===de)Ve+=Ue,Ue=""}else Ue="";break;default:Ue=He(a,Ie(a,Te,Oe),Ue,t,i+1)}Xe+=Ue,O=0,$e=0,z=0,we=0,Oe=0,j=0,Te="",Ue="",C=s.charCodeAt(++R);break;case q:case W:if((je=(Te=(we>0?Te.replace(c,""):Te).trim()).length)>1){if(0===z)if((g=Te.charCodeAt(0))===Q||g>96&&g<123)je=(Te=Te.replace(" ",":")).length;if(ye>0)if(void 0!==(n=Pe(Se,Te,a,e,pe,be,Ve.length,t,i,t)))if(0===(je=(Te=n.trim()).length))Te="\0\0";switch(g=Te.charCodeAt(0),A=Te.charCodeAt(1),g){case re:break;case L:if(A===oe||A===he){Ye+=Te+s.charAt(R);break}default:if(Te.charCodeAt(je-1)===V)break;Ve+=Ke(Te,g,A,Te.charCodeAt(2))}}O=0,$e=0,z=0,we=0,Oe=0,Te="",C=s.charCodeAt(++R)}}switch(C){case J:case I:if(h+d+u+o+ve===0)switch($){case E:case X:case Y:case L:case ae:case _:case T:case ee:case Z:case Q:case V:case U:case W:case B:case q:break;default:if(z>0)$e=1}if(h===Z)h=0;else if(ge+O===0&&t!==te&&Te.length>0)we=1,Te+="\0";if(ye*qe>0)Pe(Ne,Te,a,e,pe,be,Ve.length,t,i,t);be=1,pe++;break;case W:case q:if(h+d+u+o===0){be++;break}default:switch(be++,Re=s.charAt(R),C){case K:case M:if(d+o+h===0)switch(w){case U:case V:case K:case M:Re="";break;default:if(C!==M)Re=" "}break;case re:Re="\\0";break;case ce:Re="\\f";break;case se:Re="\\v";break;case P:if(d+h+o===0&&ge>0)Oe=1,we=1,Re="\f"+Re;break;case 108:if(d+h+o+ke===0&&z>0)switch(R-z){case 2:if(w===ne&&s.charCodeAt(R-3)===V)ke=w;case 8:if(m===le)ke=m}break;case V:if(d+h+o===0)z=R;break;case U:if(h+u+d+o===0)we=1,Re+="\r";break;case Y:case X:if(0===h)d=d===C?0:0===d?C:d;break;case G:if(d+h+u===0)o++;break;case H:if(d+h+u===0)o--;break;case E:if(d+h+o===0)u--;break;case D:if(d+h+o===0){if(0===O)switch(2*w+3*m){case 533:break;default:y=0,O=1}u++}break;case L:if(h+u+d+o+z+j===0)j=1;break;case T:case Z:if(d+o+u>0)break;switch(h){case 0:switch(2*C+3*s.charCodeAt(R+1)){case 235:h=Z;break;case 220:je=R,h=T}break;case T:if(C===Z&&w===T&&je+2!==R){if(33===s.charCodeAt(je+2))Ve+=s.substring(je,R+1);Re="",h=0}}}if(0===h){if(ge+d+o+j===0&&t!==te&&C!==W)switch(C){case U:case ae:case _:case ee:case E:case D:if(0===O){switch(w){case K:case M:case I:case J:Re+="\0";break;default:Re="\0"+Re+(C===U?"":"\0")}we=1}else switch(C){case D:if(z+7===R&&108===w)z=0;O=++y;break;case E:if(0==(O=--y))we=1,Re+="\0"}break;case K:case M:switch(w){case re:case B:case q:case W:case U:case ce:case K:case M:case I:case J:break;default:if(0===O)we=1,Re+="\0"}}if(Te+=Re,C!==M&&C!==K)$=C}}m=w,w=C,R++}if(je=Ve.length,me>0)if(0===je&&0===Xe.length&&0===a[0].length==false)if(t!==ie||1===a.length&&(ge>0?Ee:Ge)===a[0])je=a.join(",").length+2;if(je>0){if(f=0===ge&&t!==te?function(e){for(var a,r,s=0,t=e.length,i=Array(t);s<t;++s){for(var f=e[s].split(l),n="",o=0,h=0,u=0,d=0,b=f.length;o<b;++o){if(0===(h=(r=f[o]).length)&&b>1)continue;if(u=n.charCodeAt(n.length-1),d=r.charCodeAt(0),a="",0!==o)switch(u){case T:case ae:case _:case ee:case M:case D:break;default:a=" "}switch(d){case P:r=a+Ee;case ae:case _:case ee:case M:case E:case D:break;case G:r=a+r+Ee;break;case V:switch(2*r.charCodeAt(1)+3*r.charCodeAt(2)){case 530:if(Ce>0){r=a+r.substring(8,h-1);break}default:if(o<1||f[o-1].length<1)r=a+Ee+r}break;case U:a="";default:if(h>1&&r.indexOf(":")>0)r=a+r.replace(v,"$1"+Ee+"$2");else r=a+r+Ee}n+=r}i[s]=n.replace(c,"").trim()}return i}(a):a,ye>0)if(void 0!==(n=Pe(Fe,Ve,f,e,pe,be,je,t,i,t))&&0===(Ve=n).length)return Ye+Ve+Xe;if(Ve=f.join(",")+"{"+Ve+"}",Ae*ke!=0){if(2===Ae&&!Le(Ve,2))ke=0;switch(ke){case le:Ve=Ve.replace(k,":"+S+"$1")+Ve;break;case ne:Ve=Ve.replace(p,"::"+N+"input-$1")+Ve.replace(p,"::"+S+"$1")+Ve.replace(p,":"+F+"input-$1")+Ve}ke=0}}return Ye+Ve+Xe}function Ie(e,a,r){var c=a.trim().split(o),s=c,t=c.length,i=e.length;switch(i){case 0:case 1:for(var f=0,n=0===i?"":e[0]+" ";f<t;++f)s[f]=Je(n,s[f],r,i).trim();break;default:f=0;var l=0;for(s=[];f<t;++f)for(var h=0;h<i;++h)s[l++]=Je(e[h]+" ",c[f],r,i).trim()}return s}function Je(e,a,r,c){var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);switch(t){case P:switch(ge+c){case 0:case 1:if(0===e.trim().length)break;default:return s.replace(h,"$1"+e.trim())}break;case V:switch(s.charCodeAt(1)){case 103:if(Ce>0&&ge>0)return s.replace(u,"$1").replace(h,"$1"+Ge);break;default:return e.trim()+s.replace(h,"$1"+e.trim())}default:if(r*ge>0&&s.indexOf("\f")>0)return s.replace(h,(e.charCodeAt(0)===V?"":"$1")+e.trim())}return e+s}function Ke(e,a,r,c){var l,o=0,h=e+";",u=2*a+3*r+4*c;if(944===u)return function(e){var a=e.length,r=e.indexOf(":",9)+1,c=e.substring(0,r).trim(),s=e.substring(r,a-1).trim();switch(e.charCodeAt(9)*Be){case 0:break;case Q:if(110!==e.charCodeAt(10))break;default:for(var t=s.split((s="",f)),i=0,r=0,a=t.length;i<a;r=0,++i){for(var l=t[i],o=l.split(n);l=o[r];){var h=l.charCodeAt(0);if(1===Be&&(h>L&&h<90||h>96&&h<123||h===R||h===Q&&l.charCodeAt(1)!==Q))switch(isNaN(parseFloat(l))+(-1!==l.indexOf("("))){case 1:switch(l){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:l+=De}}o[r++]=l}s+=(0===i?"":",")+o.join(" ")}}if(s=c+s+";",1===Ae||2===Ae&&Le(s,1))return N+s+s;return s}(h);else if(0===Ae||2===Ae&&!Le(h,1))return h;switch(u){case 1015:return 97===h.charCodeAt(10)?N+h+h:h;case 951:return 116===h.charCodeAt(3)?N+h+h:h;case 963:return 110===h.charCodeAt(5)?N+h+h:h;case 1009:if(100!==h.charCodeAt(4))break;case 969:case 942:return N+h+h;case 978:return N+h+S+h+h;case 1019:case 983:return N+h+S+h+F+h+h;case 883:if(h.charCodeAt(8)===Q)return N+h+h;if(h.indexOf("image-set(",11)>0)return h.replace(z,"$1"+N+"$2")+h;return h;case 932:if(h.charCodeAt(4)===Q)switch(h.charCodeAt(5)){case 103:return N+"box-"+h.replace("-grow","")+N+h+F+h.replace("grow","positive")+h;case 115:return N+h+F+h.replace("shrink","negative")+h;case 98:return N+h+F+h.replace("basis","preferred-size")+h}return N+h+F+h+h;case 964:return N+h+F+"flex-"+h+h;case 1023:if(99!==h.charCodeAt(8))break;return l=h.substring(h.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),N+"box-pack"+l+N+h+F+"flex-pack"+l+h;case 1005:return t.test(h)?h.replace(s,":"+N)+h.replace(s,":"+S)+h:h;case 1e3:switch(o=(l=h.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(o)){case 226:l=h.replace(m,"tb");break;case 232:l=h.replace(m,"tb-rl");break;case 220:l=h.replace(m,"lr");break;default:return h}return N+h+F+l+h;case 1017:if(-1===h.indexOf("sticky",9))return h;case 975:switch(o=(h=e).length-10,u=(l=(33===h.charCodeAt(o)?h.substring(0,o):h).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(l.charCodeAt(8)<111)break;case 115:h=h.replace(l,N+l)+";"+h;break;case 207:case 102:h=h.replace(l,N+(u>102?"inline-":"")+"box")+";"+h.replace(l,N+l)+";"+h.replace(l,F+l+"box")+";"+h}return h+";";case 938:if(h.charCodeAt(5)===Q)switch(h.charCodeAt(6)){case 105:return l=h.replace("-items",""),N+h+N+"box-"+l+F+"flex-"+l+h;case 115:return N+h+F+"flex-item-"+h.replace(y,"")+h;default:return N+h+F+"flex-line-pack"+h.replace("align-content","").replace(y,"")+h}break;case 973:case 989:if(h.charCodeAt(3)!==Q||122===h.charCodeAt(4))break;case 931:case 953:if(true===j.test(e))if(115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0))return Ke(e.replace("stretch","fill-available"),a,r,c).replace(":fill-available",":stretch");else return h.replace(l,N+l)+h.replace(l,S+l.replace("fill-",""))+h;break;case 962:if(h=N+h+(102===h.charCodeAt(5)?F+h:"")+h,r+c===211&&105===h.charCodeAt(13)&&h.indexOf("transform",10)>0)return h.substring(0,h.indexOf(";",27)+1).replace(i,"$1"+N+"$2")+h}return h}function Le(e,a){var r=e.indexOf(1===a?":":"{"),c=e.substring(0,3!==a?r:10),s=e.substring(r+1,e.length-1);return Oe(2!==a?c:c.replace(O,"$1"),s,a)}function Me(e,a){var r=Ke(a,a.charCodeAt(0),a.charCodeAt(1),a.charCodeAt(2));return r!==a+";"?r.replace($," or ($1)").substring(4):"("+a+")"}function Pe(e,a,r,c,s,t,i,f,n,l){for(var o,h=0,u=a;h<ye;++h)switch(o=$e[h].call(Te,e,u,r,c,s,t,i,f,n,l)){case void 0:case false:case true:case null:break;default:u=o}if(u!==a)return u}function Qe(e,a,r,c){for(var s=a+1;s<r;++s)switch(c.charCodeAt(s)){case Z:if(e===T)if(c.charCodeAt(s-1)===T&&a+2!==s)return s+1;break;case I:if(e===Z)return s+1}return s}function Re(e){for(var a in e){var r=e[a];switch(a){case"keyframe":Be=0|r;break;case"global":Ce=0|r;break;case"cascade":ge=0|r;break;case"compress":we=0|r;break;case"semicolon":ve=0|r;break;case"preserve":me=0|r;break;case"prefix":if(Oe=null,!r)Ae=0;else if("function"!=typeof r)Ae=1;else Ae=2,Oe=r}}return Re}function Te(a,r){if(void 0!==this&&this.constructor===Te)return e(a);var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);if(Be>0)De=s.replace(d,t===G?"":"-");if(t=1,1===ge)Ge=s;else Ee=s;var i,f=[Ge];if(ye>0)if(void 0!==(i=Pe(ze,r,f,f,pe,be,0,0,0,0))&&"string"==typeof i)r=i;var n=He(xe,f,r,0,0);if(ye>0)if(void 0!==(i=Pe(je,n,f,f,pe,be,n.length,0,0,0))&&"string"!=typeof(n=i))t=0;return De="",Ge="",Ee="",ke=0,pe=1,be=1,we*t==0?n:n.replace(c,"").replace(g,"").replace(A,"$1").replace(C,"$1").replace(w," ")}if(Te.use=function e(a){switch(a){case void 0:case null:ye=$e.length=0;break;default:if("function"==typeof a)$e[ye++]=a;else if("object"==typeof a)for(var r=0,c=a.length;r<c;++r)e(a[r]);else qe=0|!!a}return e},Te.set=Re,void 0!==a)Re(a);return Te});
//# sourceMappingURL=stylis.min.js.map

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),

/***/ "./src/common/styles/colors.ts":
/*!*************************************!*\
  !*** ./src/common/styles/colors.ts ***!
  \*************************************/
/*! exports provided: black, white, primary, primaryDark, success, darkGrey, lightRed, red, lightGrey, greyText, text, focus_color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "black", function() { return black; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "white", function() { return white; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primary", function() { return primary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryDark", function() { return primaryDark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "success", function() { return success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkGrey", function() { return darkGrey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightRed", function() { return lightRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red", function() { return red; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightGrey", function() { return lightGrey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greyText", function() { return greyText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focus_color", function() { return focus_color; });
var black = "#131313";
var white = "#FFFFFF";
var primary = "#00ADEF";
var primaryDark = "#0586b7";
var success = "#4ec437";
var darkGrey = "#b3bfc8";
var lightRed = "#FF4D4D";
var red = "#D93636";
var lightGrey = "#EEF1F2";
var greyText = "#607680";
var text = "#17272E";
var focus_color = "rgba(12,150,242,1)";


/***/ }),

/***/ "./src/common/styles/mixins.ts":
/*!*************************************!*\
  !*** ./src/common/styles/mixins.ts ***!
  \*************************************/
/*! exports provided: focusStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusStyle", function() { return focusStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var focusStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-shadow: 0px 0px 0px 2px rgba(12, 150, 242, 1);\n"], ["\n  box-shadow: 0px 0px 0px 2px rgba(12, 150, 242, 1);\n"])));
var templateObject_1;


/***/ }),

/***/ "./src/components/AutoComplete/AutoComplete.tsx":
/*!******************************************************!*\
  !*** ./src/components/AutoComplete/AutoComplete.tsx ***!
  \******************************************************/
/*! exports provided: AutoComplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoComplete", function() { return AutoComplete; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled/colors */ "./src/common/styles/colors.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



var KEYDOWN = "KEYDOWN";
var ONCLICK = "ONCLICK";
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 102%;\n  left: 0;\n  max-height: 300px;\n  width: 100%;\n  max-width: 480px;\n  padding: 0;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 4px;\n  overflow: auto;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);\n"], ["\n  position: absolute;\n  top: 102%;\n  left: 0;\n  max-height: 300px;\n  width: 100%;\n  max-width: 480px;\n  padding: 0;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 4px;\n  overflow: auto;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_2__["white"], styled_colors__WEBPACK_IMPORTED_MODULE_2__["lightGrey"]);
var List = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  list-style: none;\n  padding: 12px;\n  border-bottom: 1px solid ", ";\n  cursor: pointer;\n  ", "\n"], ["\n  list-style: none;\n  padding: 12px;\n  border-bottom: 1px solid ", ";\n  cursor: pointer;\n  ",
    "\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_2__["lightGrey"], function (props) {
    return props.active && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      background-color: ", ";\n    "], ["\n      background-color: ", ";\n    "])), styled_colors__WEBPACK_IMPORTED_MODULE_2__["lightGrey"]);
});
var initialState = {
    selected: 0
};
var reducer = function (state, action) {
    switch (action.type) {
        case ONCLICK:
        case KEYDOWN:
            return __assign({}, state, { selected: action.value });
        default:
            return state;
    }
};
var AutoComplete = function (props) {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState), 2), state = _a[0], dispatch = _a[1];
    var listElem = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var handleOnclick = function (index) {
        dispatch({
            type: ONCLICK,
            value: index
        });
        props.onEnter(props.values[index]);
    };
    var handleScroll = function (elemIndex) {
        if (!listElem.current ||
            elemIndex < 0 ||
            elemIndex > props.values.length - 1) {
            return;
        }
        //@ts-ignore
        var itemHeight = listElem.current.childNodes[0].offsetHeight;
        listElem.current.scroll({
            top: itemHeight * elemIndex,
            behavior: "smooth"
        });
    };
    var handleKeyDown = function (e) {
        if (e.keyCode === 40) {
            dispatch({
                type: KEYDOWN,
                value: props.values.length - 2 >= state.selected
                    ? state.selected + 1
                    : state.selected
            });
            handleScroll(state.selected + 1);
        }
        if (e.keyCode === 38) {
            dispatch({
                type: KEYDOWN,
                value: state.selected > 0 ? state.selected - 1 : state.selected
            });
            handleScroll(state.selected - 1);
        }
        if (e.keyCode === 13) {
            props.onEnter(props.values[state.selected]);
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, { onKeyDown: function (e) { return handleKeyDown(e); } },
        props.children,
        props.open && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListContainer, { ref: function (e) { return (listElem.current = e); } }, props.values.map(function (value, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, { key: value.id, active: state.selected === index, onClick: handleOnclick.bind(null, index) }, value.name)); })))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/components/Button/Button.tsx":
/*!******************************************!*\
  !*** ./src/components/Button/Button.tsx ***!
  \******************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled/colors */ "./src/common/styles/colors.ts");
/* harmony import */ var styled_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled/mixins */ "./src/common/styles/mixins.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};




var default_border_color = "#e5e7e8";
var default_hover_bg = "#e6e6e6";
var success_hover_bg = "#3dab27";
var primary_hover_bg = "#0095ce";
var danger_hover_bg = "#c72121";
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: ", ";\n  padding: 0;\n  padding-left: 15px;\n  padding-right: 15px;\n  height: 35px;\n  line-height: 1;\n  border: 1px solid ", ";\n  font-weight: 500;\n  font-size: 14px;\n  border-radius: 4px;\n  display: inline-flex;\n  justify-content: center;\n  margin-left: 5px;\n  margin-right: 5px;\n  outline: none;\n  &:hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n  &:focus {\n    ", ";\n  }\n  ", "\n  ", "\n\n  ", "\n  ", "  \n"], ["\n  background-color: ", ";\n  padding: 0;\n  padding-left: 15px;\n  padding-right: 15px;\n  height: 35px;\n  line-height: 1;\n  border: 1px solid ", ";\n  font-weight: 500;\n  font-size: 14px;\n  border-radius: 4px;\n  display: inline-flex;\n  justify-content: center;\n  margin-left: 5px;\n  margin-right: 5px;\n  outline: none;\n  &:hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n  &:focus {\n    ", ";\n  }\n  ",
    "\n  ",
    "\n\n  ",
    "\n  ",
    "  \n"])), styled_colors__WEBPACK_IMPORTED_MODULE_2__["lightGrey"], default_border_color, default_hover_bg, styled_mixins__WEBPACK_IMPORTED_MODULE_3__["focusStyle"], function (props) {
    return props.disabled && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      opacity: 0.6;\n      pointer-events: none !important;\n      cursor: not-allowed;\n    "], ["\n      opacity: 0.6;\n      pointer-events: none !important;\n      cursor: not-allowed;\n    "])));
}, function (props) {
    return props.format === "primary" && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background-color: ", ";\n      border: 1px solid ", ";\n      color: ", ";\n      &:hover {\n        border: 1px solid ", ";\n        background-color: ", ";\n      }\n    "], ["\n      background-color: ", ";\n      border: 1px solid ", ";\n      color: ", ";\n      &:hover {\n        border: 1px solid ", ";\n        background-color: ", ";\n      }\n    "])), styled_colors__WEBPACK_IMPORTED_MODULE_2__["primary"], styled_colors__WEBPACK_IMPORTED_MODULE_2__["primary"], styled_colors__WEBPACK_IMPORTED_MODULE_2__["white"], primary_hover_bg, primary_hover_bg);
}, function (props) {
    return props.format === "success" && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      background-color: ", ";\n      border: 1px solid ", ";\n      color: ", ";\n      &:hover {\n        border: 1px solid ", ";\n        background-color: ", ";\n      }\n    "], ["\n      background-color: ", ";\n      border: 1px solid ", ";\n      color: ", ";\n      &:hover {\n        border: 1px solid ", ";\n        background-color: ", ";\n      }\n    "])), styled_colors__WEBPACK_IMPORTED_MODULE_2__["success"], styled_colors__WEBPACK_IMPORTED_MODULE_2__["success"], styled_colors__WEBPACK_IMPORTED_MODULE_2__["white"], success_hover_bg, success_hover_bg);
}, function (props) {
    return props.format === "danger" && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      background-color: ", ";\n      border: 1px solid ", ";\n      color: ", ";\n      &:hover {\n        border: 1px solid ", ";\n        background-color: ", ";\n      }\n    "], ["\n      background-color: ", ";\n      border: 1px solid ", ";\n      color: ", ";\n      &:hover {\n        border: 1px solid ", ";\n        background-color: ", ";\n      }\n    "])), styled_colors__WEBPACK_IMPORTED_MODULE_2__["red"], styled_colors__WEBPACK_IMPORTED_MODULE_2__["red"], styled_colors__WEBPACK_IMPORTED_MODULE_2__["white"], danger_hover_bg, danger_hover_bg);
});
var Button = function (_a) {
    var children = _a.children, _b = _a.format, format = _b === void 0 ? "default" : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, rest = __rest(_a, ["children", "format", "disabled"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StyledButton, __assign({}, __assign({ format: format, disabled: disabled }, rest)), children));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/components/Carousel/Carousel.tsx":
/*!**********************************************!*\
  !*** ./src/components/Carousel/Carousel.tsx ***!
  \**********************************************/
/*! exports provided: Carousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return Carousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_right_arrow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/right-arrow.svg */ "./src/icons/right-arrow.svg");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/Carousel/styles.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var ICON_DIMENSIONS = 20;
var Carousel = /** @class */ (function (_super) {
    __extends(Carousel, _super);
    function Carousel(props) {
        var _this = _super.call(this, props) || this;
        _this.wrapperRef = null;
        _this.wrapperWidth = 0;
        _this.itemWidth = 0;
        _this.viewPortRef = null;
        _this.viewPortWidth = 0;
        _this.maxTranslate = 0;
        _this.minTranslate = 0;
        _this.offsetItem = 0;
        _this.dragStartPoint = 0;
        _this.dragEndPoint = 0;
        _this.onClickPrev = function () {
            _this.setTranslate(_this.itemWidth, "prev");
        };
        _this.onClickNext = function () {
            _this.setTranslate(_this.itemWidth, "next");
        };
        _this.getTransform = function () {
            return {
                transform: "translateX(" + _this.state.translateY + "px)",
                transition: "transform 0.3s linear",
                WebkitTransform: "translateX(" + _this.state.translateY + "px)",
                //@ts-ignore
                MozTransform: "translateX(" + _this.state.translateY + "px)",
                WebkitTransition: "transform 0.3s linear",
                MozTransition: "transform 0.3s linear"
                //@ts-check
            };
        };
        _this.setTranslate = function (distance, direction) {
            if (_this.props.loop) {
                _this.setState(function (prevState) { return (__assign({}, prevState, { children: _this.shiftChildren(prevState, direction) })); });
            }
            else {
                var previousTranslate_1 = direction === "prev"
                    ? _this.state.translateY + distance
                    : _this.state.translateY - distance;
                if (previousTranslate_1 < _this.maxTranslate ||
                    previousTranslate_1 > _this.minTranslate) {
                    return;
                }
                _this.setState(function (prevState) { return (__assign({}, prevState, { translateY: previousTranslate_1 })); });
            }
        };
        _this.shiftChildren = function (prevState, direction) {
            var children = react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(prevState.children);
            if (direction === "next") {
                var firstChild = children.shift();
                // @ts-ignore
                children.push(firstChild);
            }
            if (direction === "prev") {
                var lastChild = children.pop();
                // @ts-ignore
                children.unshift(lastChild);
            }
            return children;
        };
        _this.onDragStart = function (e) {
            e.persist();
            _this.dragStartPoint = e.clientX;
        };
        _this.onDragEnd = function (e) {
            e.persist();
            _this.dragEndPoint = e.clientX;
            _this.onSlide();
        };
        _this.onTouchStart = function (e) {
            e.persist();
            _this.dragStartPoint = e.targetTouches[0].clientX;
        };
        _this.onTouchEnd = function (e) {
            e.persist();
            _this.dragEndPoint = e.changedTouches[0].clientX;
            _this.onSlide();
        };
        _this.onSlide = function () {
            if (_this.dragEndPoint < _this.dragStartPoint) {
                _this.setTranslate(_this.itemWidth, "next");
            }
            if (_this.dragEndPoint > _this.dragStartPoint) {
                _this.setTranslate(_this.itemWidth, "prev");
            }
        };
        var _a = _this.props, loop = _a.loop, children = _a.children;
        _this.state = {
            translateY: 0,
            children: loop ? children : null
        };
        return _this;
    }
    Carousel.prototype.componentDidMount = function () {
        if (this.wrapperRef) {
            this.wrapperWidth = this.wrapperRef.offsetWidth;
            var count = react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(this.props.children);
            this.itemWidth = count > 0 ? this.wrapperWidth / count : 0;
        }
        if (this.viewPortRef) {
            this.viewPortWidth = this.viewPortRef.offsetWidth;
            this.offsetItem =
                this.itemWidth > 0
                    ? Math.floor(this.viewPortWidth / this.itemWidth)
                    : 0;
            this.maxTranslate = this.itemWidth * this.offsetItem - this.wrapperWidth;
        }
    };
    Carousel.prototype.render = function () {
        var _this = this;
        var _a = this.props, loop = _a.loop, children = _a.children, iconDimension = _a.iconDimension;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_2__["CarouselWrapper"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_2__["Viewport"], { ref: function (e) { return (_this.viewPortRef = e); } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], { ref: function (e) { return (_this.wrapperRef = e); }, style: this.getTransform(), onDragStart: this.onDragStart, onDragEnd: this.onDragEnd, onTouchStart: this.onTouchStart, onTouchEnd: this.onTouchEnd, draggable: true }, loop ? this.state.children : children)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_2__["Btn"], { onClick: this.onClickPrev, prevBtn: true },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_right_arrow_svg__WEBPACK_IMPORTED_MODULE_1__["default"], { width: iconDimension || ICON_DIMENSIONS, height: iconDimension || ICON_DIMENSIONS })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_2__["Btn"], { onClick: this.onClickNext, nextBtn: true },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_right_arrow_svg__WEBPACK_IMPORTED_MODULE_1__["default"], { width: iconDimension || ICON_DIMENSIONS, height: iconDimension || ICON_DIMENSIONS })))));
    };
    return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/Carousel/styles.tsx":
/*!********************************************!*\
  !*** ./src/components/Carousel/styles.tsx ***!
  \********************************************/
/*! exports provided: CarouselWrapper, Viewport, Wrapper, Btn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselWrapper", function() { return CarouselWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Viewport", function() { return Viewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Btn", function() { return Btn; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var CarouselWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var Viewport = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  overflow: hidden;\n"], ["\n  display: flex;\n  width: 100%;\n  overflow: hidden;\n"])));
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex-wrap: nowrap;\n  display: flex;\n"], ["\n  flex-wrap: nowrap;\n  display: flex;\n"])));
var Btn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 5;\n  border: none;\n  outline: none;\n  width: 40px;\n  height: 40px;\n  border-radius: 40px;\n  background-color: rgba(255, 255, 255, 0.5);\n  margin: 0;\n  top: calc(50% - 20px);\n  padding: 5px;\n  cursor: pointer;\n  ", "\n\n  ", "\n"], ["\n  position: absolute;\n  z-index: 5;\n  border: none;\n  outline: none;\n  width: 40px;\n  height: 40px;\n  border-radius: 40px;\n  background-color: rgba(255, 255, 255, 0.5);\n  margin: 0;\n  top: calc(50% - 20px);\n  padding: 5px;\n  cursor: pointer;\n  ",
    "\n\n  ",
    "\n"])), function (props) {
    return props.prevBtn && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      left: 30px;\n      svg {\n        transform: rotate(180deg);\n      }\n    "], ["\n      left: 30px;\n      svg {\n        transform: rotate(180deg);\n      }\n    "])));
}, function (props) {
    return props.nextBtn && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      right: 30px;\n    "], ["\n      right: 30px;\n    "])));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/components/ColorPicker/ColorPicker.tsx":
/*!****************************************************!*\
  !*** ./src/components/ColorPicker/ColorPicker.tsx ***!
  \****************************************************/
/*! exports provided: ColorPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPicker", function() { return ColorPicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Picker */ "./src/components/ColorPicker/Picker.ts");


var ColorPicker = function (_a) {
    var onSelect = _a.onSelect;
    var picker = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (picker.current) {
            new _Picker__WEBPACK_IMPORTED_MODULE_1__["default"]({
                element: picker.current,
                onSelect: function (color) {
                    if (typeof onSelect === "function") {
                        onSelect(color);
                    }
                }
            });
        }
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: function (e) { return (picker.current = e); } });
};


/***/ }),

/***/ "./src/components/ColorPicker/Picker.ts":
/*!**********************************************!*\
  !*** ./src/components/ColorPicker/Picker.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CANVAS_HEIGHT = 155;
var CANVAS_WIDTH = 284;
var Picker = /** @class */ (function () {
    function Picker(options) {
        this.element = options.element;
        this.options = options;
        if (!this.element) {
            throw Error("Element not found");
        }
        this.canvas = this.createCanvas();
        if (!this.canvas)
            return;
        this.buildColorPalette();
        this.bindEvent();
    }
    Picker.prototype.createCanvas = function () {
        if (!this.element)
            return;
        var canvas = document.createElement("canvas");
        canvas.height = CANVAS_HEIGHT;
        canvas.width = CANVAS_WIDTH;
        this.element.appendChild(canvas);
        return canvas;
    };
    Picker.prototype.buildColorPalette = function () {
        if (!this.element || !this.canvas)
            return;
        var ctx = this.canvas.getContext("2d");
        if (!ctx)
            return;
        var gradient = ctx.createLinearGradient(0, 0, this.canvas.offsetWidth, 0);
        gradient.addColorStop(0, "rgb(255,0,0)");
        gradient.addColorStop(0.15, "rgb(255,0,255)");
        gradient.addColorStop(0.33, "rgb(0,0,255)");
        gradient.addColorStop(0.49, "rgb(0,255,255)");
        gradient.addColorStop(0.67, "rgb(0,255,0)");
        gradient.addColorStop(0.84, "rgb(255,255,0)");
        gradient.addColorStop(1, "rgb(255,0,0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        gradient = ctx.createLinearGradient(0, 0, 0, this.canvas.offsetHeight);
        gradient.addColorStop(0, "rgba(255,255,255,1)");
        gradient.addColorStop(0.5, "rgba(255,255,255,0)");
        gradient.addColorStop(0.5, "rgba(0,0,0,0)");
        gradient.addColorStop(1, "rgba(0,0,0,1)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.ctx = ctx;
    };
    Picker.prototype.componentToHex = function (c) {
        //@ts-ignore
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    };
    Picker.prototype.rgbToHex = function (r, g, b) {
        return ("#" +
            this.componentToHex(r) +
            this.componentToHex(g) +
            this.componentToHex(b));
    };
    Picker.prototype.getColor = function (event) {
        //@ts-ignore
        var x = event.layerX;
        //@ts-ignore
        var y = event.layerY;
        var pixel = this.ctx.getImageData(x, y, 1, 1);
        var data = pixel.data;
        var color = this.rgbToHex(data[0], data[1], data[2]);
        this.options.onSelect(color);
        return color;
    };
    Picker.prototype.bindEvent = function () {
        if (!this.canvas)
            return;
        //@ts-ignore
        this.canvas.addEventListener("mousedown", this.getColor.bind(this));
    };
    return Picker;
}());
/* harmony default export */ __webpack_exports__["default"] = (Picker);


/***/ }),

/***/ "./src/components/DatePicker/DatePicker.tsx":
/*!**************************************************!*\
  !*** ./src/components/DatePicker/DatePicker.tsx ***!
  \**************************************************/
/*! exports provided: DatePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return DatePicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_right_arrow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/right-arrow.svg */ "./src/icons/right-arrow.svg");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/components/DatePicker/utils.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/DatePicker/styles.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

//@ts-ignore



var DatePicker = /** @class */ (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.generateDays = function (day, month, year) {
            var days = [];
            var daysInMonth = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getDaysInMonth"])(month + 1, year);
            var _loop_1 = function (i) {
                days.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_3__["StyledDays"], __assign({ key: "DAYS_" + i, onClick: function () { return _this.onSelectDate(i, month, year); } }, DatePicker.dayStyles({
                    today: _this.state.today,
                    selected: i === day,
                    disabled: i >= daysInMonth,
                })), i + 1));
            };
            for (var i = 0; i < 31; i += 1) {
                _loop_1(i);
            }
            return days;
        };
        _this.generateMonths = function (year) {
            var months = [];
            var _loop_2 = function (i) {
                months.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_3__["StyledMonth"], { key: "MONTH_" + i, onClick: function () {
                        _this.onSelectDate(0, i, year);
                        _this.hideMonthView();
                    } }, _utils__WEBPACK_IMPORTED_MODULE_2__["MONTHS"][i].substring(0, 3)));
            };
            for (var i = 0; i < _utils__WEBPACK_IMPORTED_MODULE_2__["MONTHS"].length; i += 1) {
                _loop_2(i);
            }
            return months;
        };
        _this.generateYears = function () {
            var years = [];
            var _loop_3 = function (i) {
                years.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_3__["StyledYear"], { key: "YEAR_" + i, onClick: function () {
                        _this.onSelectDate(0, 0, i);
                        _this.hideYearView();
                    } }, i));
            };
            for (var i = _utils__WEBPACK_IMPORTED_MODULE_2__["YEAR_START"]; i < _utils__WEBPACK_IMPORTED_MODULE_2__["YEAR_END"]; i += 1) {
                _loop_3(i);
            }
            return years;
        };
        _this.goToMonth = function (month) {
            if (month < 0 || month >= _utils__WEBPACK_IMPORTED_MODULE_2__["MONTHS"].length) {
                return;
            }
            _this.setState({
                currentMonth: month,
            });
        };
        _this.onSelectDate = function (day, month, year) {
            _this.setState({
                currentDay: day,
                currentMonth: month,
                currentYear: year,
                selectedDate: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(_this.props.format, day + 1, month + 1, year),
            }, function () {
                if (!_this.state.showMonth && !_this.state.showMonth) {
                    _this.props.onSelectDate(_this.state.selectedDate);
                }
            });
        };
        _this.showMonthView = function () {
            _this.setState({
                showMonth: true,
            });
        };
        _this.hideMonthView = function () {
            _this.setState({
                showMonth: false,
            });
        };
        _this.showYearView = function () {
            _this.setState({
                showYear: true,
                showMonth: false,
            });
        };
        _this.hideYearView = function () {
            _this.setState({
                showYear: false,
                showMonth: true,
            });
        };
        _this.isToday = function (day, month, year) {
            var today = new Date();
            return (day === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear());
        };
        var strToDate = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["stringToDate"])("dd-mm-yyyy", _this.props.currentDate);
        var curDate = new Date(Date.parse(strToDate));
        _this.state = {
            currentMonth: curDate.getMonth(),
            currentYear: curDate.getFullYear(),
            currentDay: curDate.getDate(),
            selectedDate: strToDate,
            today: _this.isToday(curDate.getDate(), curDate.getMonth(), curDate.getFullYear()),
            showMonth: false,
            showYear: false,
        };
        return _this;
    }
    DatePicker.prototype.render = function () {
        var _this = this;
        var _a = this.state, currentDay = _a.currentDay, currentMonth = _a.currentMonth, currentYear = _a.currentYear;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_3__["Root"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_3__["Header"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_3__["Arrow"], { onClick: function () { return _this.goToMonth(currentMonth - 1); }, leftArrow: true },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_right_arrow_svg__WEBPACK_IMPORTED_MODULE_1__["default"], { width: 15, height: 15 })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_3__["MonthYear"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { onClick: this.showMonthView }, _utils__WEBPACK_IMPORTED_MODULE_2__["MONTHS"][currentMonth]),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { onClick: this.showYearView }, currentYear)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_3__["Arrow"], { onClick: function () { return _this.goToMonth(currentMonth + 1); }, rightArrow: true },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_right_arrow_svg__WEBPACK_IMPORTED_MODULE_1__["default"], { width: 15, height: 15 }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_3__["StyledDate"], null, this.generateDays(currentDay, currentMonth, currentYear)),
            this.state.showMonth ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_3__["StyledMonthView"], null, this.generateMonths(currentYear))) : null,
            this.state.showYear ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_3__["StyledYearView"], null, this.generateYears())) : null));
    };
    DatePicker.dayStyles = function (options) { return ({
        today: options.today,
        selected: options.selected,
        disabled: options.disabled,
    }); };
    return DatePicker;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/DatePicker/styles.tsx":
/*!**********************************************!*\
  !*** ./src/components/DatePicker/styles.tsx ***!
  \**********************************************/
/*! exports provided: Root, Header, Arrow, MonthYear, StyledDate, StyledDays, StyledMonthView, StyledMonth, StyledYearView, StyledYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Root", function() { return Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arrow", function() { return Arrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthYear", function() { return MonthYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledDate", function() { return StyledDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledDays", function() { return StyledDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledMonthView", function() { return StyledMonthView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledMonth", function() { return StyledMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledYearView", function() { return StyledYearView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledYear", function() { return StyledYear; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled/colors */ "./src/common/styles/colors.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var Root = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-width: 306px;\n  min-height: 291px;\n  border-radius: 4px;\n  border: 1px solid ", ";\n  position: relative;\n  background-color: ", ";\n  display: inline-block;\n"], ["\n  max-width: 306px;\n  min-height: 291px;\n  border-radius: 4px;\n  border: 1px solid ", ";\n  position: relative;\n  background-color: ", ";\n  display: inline-block;\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["darkGrey"], styled_colors__WEBPACK_IMPORTED_MODULE_1__["white"]);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-bottom: 1px solid ", ";\n  height: 35px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"], ["\n  border-bottom: 1px solid ", ";\n  height: 35px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["darkGrey"]);
var Arrow = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 35px;\n  height: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  svg {\n    path {\n      fill: ", ";\n    }\n  }\n  ", "\n  ", "\n"], ["\n  width: 35px;\n  height: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  svg {\n    path {\n      fill: ", ";\n    }\n  }\n  ",
    "\n  ",
    "\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["black"], function (props) {
    return props.leftArrow && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      transform: rotate(180deg);\n    "], ["\n      transform: rotate(180deg);\n    "])));
}, function (props) {
    return props.rightArrow && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      transform: rotate(0);\n    "], ["\n      transform: rotate(0);\n    "])));
});
var MonthYear = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: 14px;\n  cursor: pointer;\n  span {\n    display: inline-block;\n  }\n  span:first-child {\n    margin-right: 10px;\n  }\n"], ["\n  font-size: 14px;\n  cursor: pointer;\n  span {\n    display: inline-block;\n  }\n  span:first-child {\n    margin-right: 10px;\n  }\n"])));
var StyledDate = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  padding: 5px;\n"], ["\n  padding: 5px;\n"])));
var StyledDays = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  min-width: 49px;\n  height: 49px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: background-color 0.2s ease-in, color 0.2s ease-in;\n  &:hover {\n    border-radius: 3px;\n    background-color: ", ";\n    color: ", ";\n  }\n  ", "\n  ", "\n  ", "\n"], ["\n  min-width: 49px;\n  height: 49px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: background-color 0.2s ease-in, color 0.2s ease-in;\n  &:hover {\n    border-radius: 3px;\n    background-color: ", ";\n    color: ", ";\n  }\n  ",
    "\n  ",
    "\n  ",
    "\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["success"], styled_colors__WEBPACK_IMPORTED_MODULE_1__["white"], function (props) {
    return props.today && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      background-color: rgba(", ", 0.6);\n      border-radius: 3px;\n      &:hover {\n        background-color: ", ";\n      }\n    "], ["\n      background-color: rgba(", ", 0.6);\n      border-radius: 3px;\n      &:hover {\n        background-color: ", ";\n      }\n    "])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["success"], styled_colors__WEBPACK_IMPORTED_MODULE_1__["success"]);
}, function (props) {
    return props.selected && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      border-radius: 3px;\n      background-color: ", ";\n      color: ", ";\n    "], ["\n      border-radius: 3px;\n      background-color: ", ";\n      color: ", ";\n    "])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["success"], styled_colors__WEBPACK_IMPORTED_MODULE_1__["white"]);
}, function (props) {
    return props.disabled && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      opacity: 0.3;\n      pointer-events: none;\n      user-select: none;\n    "], ["\n      opacity: 0.3;\n      pointer-events: none;\n      user-select: none;\n    "])));
});
var StyledMonthView = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  top: 35px;\n  background-color: ", ";\n  width: 100%;\n  height: 100%;\n  max-height: 300px;\n  padding: 5px;\n  z-index: 1;\n  padding-top: 25px;\n  padding-bottom: 20px;\n"], ["\n  position: absolute;\n  left: 0;\n  top: 35px;\n  background-color: ", ";\n  width: 100%;\n  height: 100%;\n  max-height: 300px;\n  padding: 5px;\n  z-index: 1;\n  padding-top: 25px;\n  padding-bottom: 20px;\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["white"]);
var StyledMonth = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  width: 73px;\n  height: 70px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 15px;\n  font-size: 12px;\n  transition: background-color 0.2s ease-in, color 0.2s ease-in;\n  cursor: pointer;\n  &:hover {\n    border-radius: 3px;\n    background-color: ", ";\n    color: ", ";\n  }\n"], ["\n  width: 73px;\n  height: 70px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 15px;\n  font-size: 12px;\n  transition: background-color 0.2s ease-in, color 0.2s ease-in;\n  cursor: pointer;\n  &:hover {\n    border-radius: 3px;\n    background-color: ", ";\n    color: ", ";\n  }\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["success"], styled_colors__WEBPACK_IMPORTED_MODULE_1__["white"]);
var StyledYearView = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  position: absolute;\n  top: 35px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-height: 300px;\n  padding: 5px;\n  overflow: auto;\n  background-color: ", ";\n  z-index: 1;\n"], ["\n  position: absolute;\n  top: 35px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-height: 300px;\n  padding: 5px;\n  overflow: auto;\n  background-color: ", ";\n  z-index: 1;\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["white"]);
var StyledYear = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  width: 49px;\n  height: 40px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 15px;\n  font-size: 12px;\n  transition: background-color 0.2s ease-in, color 0.2s ease-in;\n  cursor: pointer;\n  &:hover {\n    border-radius: 3px;\n    background-color: ", ";\n    color: ", ";\n  }\n"], ["\n  width: 49px;\n  height: 40px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 15px;\n  font-size: 12px;\n  transition: background-color 0.2s ease-in, color 0.2s ease-in;\n  cursor: pointer;\n  &:hover {\n    border-radius: 3px;\n    background-color: ", ";\n    color: ", ";\n  }\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["success"], styled_colors__WEBPACK_IMPORTED_MODULE_1__["white"]);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;


/***/ }),

/***/ "./src/components/DatePicker/utils.ts":
/*!********************************************!*\
  !*** ./src/components/DatePicker/utils.ts ***!
  \********************************************/
/*! exports provided: MONTHS, getDaysInMonth, YEAR_START, YEAR_END, formatDate, stringToDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTHS", function() { return MONTHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDaysInMonth", function() { return getDaysInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEAR_START", function() { return YEAR_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEAR_END", function() { return YEAR_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToDate", function() { return stringToDate; });
var MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
var getDaysInMonth = function (month, year) {
    return new Date(year, month, 0).getDate();
};
var YEAR_START = 1970;
var YEAR_END = 2037;
var formatDate = function (format, day, month, year) {
    return format
        .replace(/(dd|DD)/, day < 10 ? "0" + day : day.toString())
        .replace(/(mm|MM)/, month < 10 ? "0" + month : month.toString())
        .replace(/(yyyy|YYYY)/, year.toString());
};
var stringToDate = function (format, dateStr) {
    var formatArr = format.split(/[-\/]/);
    var dateStrArr = dateStr.split(/[-\/]/);
    var day = 0;
    var month = 0;
    var year = 0;
    for (var i = 0; i < formatArr.length; i++) {
        if (formatArr[i].match(/(dd|DD)/)) {
            day = parseInt(dateStrArr[i]);
        }
        if (formatArr[i].match(/(mm|MM)/)) {
            month = parseInt(dateStrArr[i]);
        }
        if (formatArr[i].match(/(yy|YYYY)/)) {
            year = parseInt(dateStrArr[i]);
        }
    }
    return formatDate("mm-dd-yyyy", day, month, year);
};


/***/ }),

/***/ "./src/components/Form/Form.tsx":
/*!**************************************!*\
  !*** ./src/components/Form/Form.tsx ***!
  \**************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        var _this = _super.call(this, props) || this;
        _this.formElem = null;
        _this.onSubmit = function (e) {
            e.preventDefault();
            var newValues = {};
            var fields = _this.state.fields;
            for (var key in fields) {
                newValues[fields[key].name] = fields[key].value;
            }
            _this.props.onSubmit(newValues);
        };
        _this.onReset = function (e) {
            e.preventDefault();
            _this.setState({
                fields: _this.setFormFields(),
                isChanged: false,
                isValid: _this.getFormValidity()
            });
            _this.props.onReset();
        };
        _this.bindEvents = function () {
            if (_this.formElem) {
                _this.formElem.addEventListener("submit", _this.onSubmit);
                _this.formElem.addEventListener("reset", _this.onReset);
            }
        };
        _this.unBindEvents = function () {
            if (_this.formElem) {
                _this.formElem.removeEventListener("submit", _this.onSubmit);
                _this.formElem.removeEventListener("reset", _this.onReset);
            }
        };
        _this.setFormFields = function () {
            var _a = _this.props, formValues = _a.formValues, validate = _a.validate;
            var newFormState = {};
            var _loop_1 = function (key) {
                newFormState[key] = {
                    name: key,
                    value: formValues[key],
                    onChange: function (e) {
                        _this.onFieldChange(key, e.target.value);
                    },
                    format: validate && _this.isValidField(validate[key], formValues[key])
                        ? "default"
                        : "error",
                    isValid: validate
                        ? _this.isValidField(validate[key], formValues[key])
                        : true
                };
            };
            for (var key in formValues) {
                _loop_1(key);
            }
            return newFormState;
        };
        _this.onFieldChange = function (key, newValue) {
            var validate = _this.props.validate;
            _this.setState(function (prevState) {
                var _a;
                return (__assign({}, prevState, { fields: __assign({}, prevState.fields, (_a = {}, _a[key] = __assign({}, prevState.fields[key], { value: newValue, format: validate && _this.isValidField(validate[key], newValue)
                            ? "success"
                            : "error", isValid: validate
                            ? _this.isValidField(validate[key], newValue)
                            : true }), _a)), isChanged: true }));
            }, function () {
                _this.setState({
                    isValid: _this.getFormValidity()
                });
            });
        };
        _this.isValidField = function (rule, newValue) {
            return new RegExp(rule).test(newValue);
        };
        _this.getFormValidity = function () {
            var valid = true;
            for (var key in _this.state.fields) {
                if (!_this.state.fields[key].isValid) {
                    valid = false;
                    break;
                }
            }
            return valid;
        };
        _this.state = {
            fields: _this.setFormFields(),
            isChanged: false,
            isValid: false
        };
        return _this;
    }
    Form.prototype.componentDidMount = function () {
        this.bindEvents();
    };
    Form.prototype.componentWillUnmount = function () {
        this.unBindEvents();
    };
    Form.prototype.render = function () {
        var _this = this;
        var children = this.props.children;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { ref: function (e) { return (_this.formElem = e); } }, children(this.state));
    };
    return Form;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/Form/InputCheckbox.tsx":
/*!***********************************************!*\
  !*** ./src/components/Form/InputCheckbox.tsx ***!
  \***********************************************/
/*! exports provided: InputCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputCheckbox", function() { return InputCheckbox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Form/styles.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};


var InputCheckbox = function (_a) {
    var label = _a.label, id = _a.id, rest = __rest(_a, ["label", "id"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["FormCheckbox"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", __assign({ type: "checkbox" }, rest, { id: id })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["CheckboxLabel"], { htmlFor: id }, label)));
};


/***/ }),

/***/ "./src/components/Form/InputColor.tsx":
/*!********************************************!*\
  !*** ./src/components/Form/InputColor.tsx ***!
  \********************************************/
/*! exports provided: InputColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputColor", function() { return InputColor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_ColorPicker_ColorPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ColorPicker/ColorPicker */ "./src/components/ColorPicker/ColorPicker.tsx");
/* harmony import */ var hooks_useOutsideClick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks/useOutsideClick */ "./src/hooks/useOutsideClick.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/Form/styles.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};




var DEFAULT_COLOR = "#000000";
var InputColor = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "text" : _b, _c = _a.format, format = _c === void 0 ? "default" : _c, label = _a.label, errorMessage = _a.errorMessage, isValid = _a.isValid, rest = __rest(_a, ["type", "format", "label", "errorMessage", "isValid"]);
    var _d = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(rest.value || DEFAULT_COLOR), 2), color = _d[0], setColor = _d[1];
    var _e = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), 2), showPicker = _e[0], setShowPicker = _e[1];
    var colorElem = Object(hooks_useOutsideClick__WEBPACK_IMPORTED_MODULE_2__["useOutsideClick"])(function () {
        setShowPicker(false);
    });
    var handleInputClick = function () {
        setShowPicker(true);
    };
    return (
    //@ts-ignore
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["ColorInput"], { ref: function (e) { return (colorElem.current = e); } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["FormElems"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["InputLabel"], null, label),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["FormInput"], __assign({}, rest, { type: 'text', format: format, value: color, onClick: handleInputClick })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["ColorPreview"], { style: { backgroundColor: color }, onClick: handleInputClick }),
            showPicker && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["ColorPickerWrapper"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ColorPicker_ColorPicker__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], { onSelect: setColor }))),
            format === "error" && errorMessage ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["InputErrorMessage"], null, errorMessage)) : null)));
};


/***/ }),

/***/ "./src/components/Form/InputDate.tsx":
/*!*******************************************!*\
  !*** ./src/components/Form/InputDate.tsx ***!
  \*******************************************/
/*! exports provided: InputDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDate", function() { return InputDate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_DatePicker_DatePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/DatePicker/DatePicker */ "./src/components/DatePicker/DatePicker.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/Form/styles.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



var InputDate = function (props) {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.value), 2), selectedValue = _a[0], setSelectedValue = _a[1];
    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), 2), showDatePicker = _b[0], setShowDatePicker = _b[1];
    var openDatePicker = function () {
        setShowDatePicker(true);
    };
    var setDateValue = function (val) {
        setShowDatePicker(false);
        setSelectedValue(val);
    };
    var value = props.value, label = props.label, dateFormat = props.dateFormat, _c = props.format, format = _c === void 0 ? "default" : _c, rest = __rest(props, ["value", "label", "dateFormat", "format"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["FormDate"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["InputLabel"], null, label),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["FormInput"], __assign({}, rest, { onFocus: openDatePicker, type: "text", value: selectedValue, format: format })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["PickerWrapper"], null, showDatePicker ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_DatePicker_DatePicker__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], { format: dateFormat, currentDate: value, onSelectDate: function (val) { return setDateValue(val); } })) : null)));
};


/***/ }),

/***/ "./src/components/Form/InputRadio.tsx":
/*!********************************************!*\
  !*** ./src/components/Form/InputRadio.tsx ***!
  \********************************************/
/*! exports provided: InputRadio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputRadio", function() { return InputRadio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Form/styles.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};


var InputRadio = function (_a) {
    var label = _a.label, id = _a.id, rest = __rest(_a, ["label", "id"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["FormRadio"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", __assign({ type: "radio" }, rest, { id: id })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["RadioLabel"], { htmlFor: id }, label)));
};


/***/ }),

/***/ "./src/components/Form/InputRange.tsx":
/*!********************************************!*\
  !*** ./src/components/Form/InputRange.tsx ***!
  \********************************************/
/*! exports provided: InputRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputRange", function() { return InputRange; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Form/styles.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var InputRange = /** @class */ (function (_super) {
    __extends(InputRange, _super);
    function InputRange(props) {
        var _this = _super.call(this, props) || this;
        _this.rangeElem = null;
        _this.startMouseDown = false;
        _this.endMouseDown = false;
        _this.onKeyDownStart = function (e) {
            if (e.keyCode !== 13) {
                return;
            }
            //@ts-ignore
            var val = parseInt(e.target.value);
            if (val < 0 || val > _this.state.end) {
                return;
            }
            _this.setState({
                start: val
            });
        };
        _this.onKeyDownEnd = function (e) {
            if (e.keyCode !== 13) {
                return;
            }
            //@ts-ignore
            var val = parseInt(e.target.value);
            if (val < 0 || val < _this.state.start) {
                return;
            }
            _this.setState({
                end: val
            });
        };
        _this.onChangeStart = function (e) {
            //@ts-ignore
            var val = e.target.value;
            _this.setState({
                inputStart: val
            });
        };
        _this.onChangeEnd = function (e) {
            //@ts-ignore
            var val = e.target.value;
            _this.setState({
                inputEnd: val
            });
        };
        _this.onDragButton = function (e, buttonType) {
            if (_this.rangeElem) {
                var rangeWrapperWidth = _this.rangeElem.offsetWidth;
                //@ts-ignore
                var wrapper = _this.rangeElem.getBoundingClientRect();
                //@ts-ignore
                var leftPos = e.clientX - wrapper.left;
                if (leftPos < 0) {
                    return;
                }
                var leftPercentage = Math.round((leftPos / rangeWrapperWidth) * 100);
                if (buttonType === "start" &&
                    leftPercentage < _this.state.end &&
                    leftPercentage >= 0) {
                    _this.setState({
                        start: leftPercentage,
                        inputStart: leftPercentage
                    });
                }
                if (buttonType === "end" &&
                    leftPercentage > _this.state.start &&
                    leftPercentage <= _this.props.max) {
                    _this.setState({
                        end: leftPercentage,
                        inputEnd: leftPercentage
                    });
                }
            }
        };
        _this.onMouseDown = function (e) {
            // @ts-ignore
            if (e.target.getAttribute("id") === "start-button") {
                _this.startMouseDown = true;
            }
            // @ts-ignore
            if (e.target.getAttribute("id") === "end-button") {
                _this.endMouseDown = true;
            }
        };
        _this.onMouseUp = function (e) {
            _this.startMouseDown = false;
            _this.endMouseDown = false;
        };
        _this.onMouseMove = function (e) {
            if (_this.startMouseDown) {
                // @ts-ignore
                _this.onDragButton(e, "start");
            }
            if (_this.endMouseDown) {
                // @ts-ignore
                _this.onDragButton(e, "end");
            }
        };
        _this.state = {
            start: _this.props.start,
            end: _this.props.end,
            inputStart: _this.props.start,
            inputEnd: _this.props.end
        };
        return _this;
    }
    InputRange.prototype.componentDidMount = function () {
        document.addEventListener("mousedown", this.onMouseDown);
        document.addEventListener("mouseup", this.onMouseUp);
        document.addEventListener("mousemove", this.onMouseMove);
    };
    InputRange.prototype.componentWillUnmount = function () {
        document.removeEventListener("mousedown", this.onMouseDown);
        document.removeEventListener("mouseup", this.onMouseUp);
        document.removeEventListener("mousemove", this.onMouseMove);
    };
    InputRange.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, _b = _a.startInputName, startInputName = _b === void 0 ? "start" : _b, _c = _a.endInputName, endInputName = _c === void 0 ? "end" : _c;
        var _d = this.state, start = _d.start, end = _d.end;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["FormRange"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["InputLabel"], null, label),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["RangeWrapper"], { ref: function (e) { return (_this.rangeElem = e); } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["Range"], { start: start, end: end },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["RangeButton"], { id: "start-button", role: "slider" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["RangeButton"], { role: "slider", id: "end-button", right: true }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["RangeInputs"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["FormInput"], { type: "text", name: startInputName, value: this.state.inputStart, onChange: this.onChangeStart, onKeyDown: this.onKeyDownStart }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["FormInput"], { type: "text", name: endInputName, value: this.state.inputEnd, onChange: this.onChangeEnd, onKeyDown: this.onKeyDownEnd }))));
    };
    return InputRange;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/Form/InputText.tsx":
/*!*******************************************!*\
  !*** ./src/components/Form/InputText.tsx ***!
  \*******************************************/
/*! exports provided: InputText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputText", function() { return InputText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Form/styles.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};


var InputText = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "text" : _b, _c = _a.format, format = _c === void 0 ? "default" : _c, label = _a.label, errorMessage = _a.errorMessage, isValid = _a.isValid, rest = __rest(_a, ["type", "format", "label", "errorMessage", "isValid"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["FormElems"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["InputLabel"], null, label),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["FormInput"], __assign({ type: type, format: format }, rest)),
        format === "error" && errorMessage ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["InputErrorMessage"], null, errorMessage)) : null));
};


/***/ }),

/***/ "./src/components/Form/styles.tsx":
/*!****************************************!*\
  !*** ./src/components/Form/styles.tsx ***!
  \****************************************/
/*! exports provided: FormElems, CheckboxLabel, FormCheckbox, RadioLabel, FormRadio, InputLabel, FormInput, InputErrorMessage, PickerWrapper, FormDate, FormRange, Range, RangeWrapper, RangeButton, RangeInputs, ColorInput, ColorPickerWrapper, ColorPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElems", function() { return FormElems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxLabel", function() { return CheckboxLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCheckbox", function() { return FormCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioLabel", function() { return RadioLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRadio", function() { return FormRadio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputLabel", function() { return InputLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInput", function() { return FormInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputErrorMessage", function() { return InputErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerWrapper", function() { return PickerWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDate", function() { return FormDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRange", function() { return FormRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeWrapper", function() { return RangeWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeButton", function() { return RangeButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeInputs", function() { return RangeInputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorInput", function() { return ColorInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerWrapper", function() { return ColorPickerWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPreview", function() { return ColorPreview; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled/colors */ "./src/common/styles/colors.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var FormElems = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  margin-bottom: 15px;\n"], ["\n  width: 100%;\n  margin-bottom: 15px;\n"])));
var CheckboxLabel = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  font-weight: 500;\n  font-size: 16px;\n  color: ", ";\n  padding-left: 30px;\n  position: relative;\n  line-height: 20px;\n  cursor: pointer;\n  &:after {\n    content: \"\";\n    position: absolute;\n    display: inline-block;\n    height: 20px;\n    width: 20px;\n    border-radius: 3px;\n    border: 1px solid ", ";\n    left: 0;\n    top: 0;\n  }\n"], ["\n  display: inline-block;\n  font-weight: 500;\n  font-size: 16px;\n  color: ", ";\n  padding-left: 30px;\n  position: relative;\n  line-height: 20px;\n  cursor: pointer;\n  &:after {\n    content: \"\";\n    position: absolute;\n    display: inline-block;\n    height: 20px;\n    width: 20px;\n    border-radius: 3px;\n    border: 1px solid ", ";\n    left: 0;\n    top: 0;\n  }\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["text"], styled_colors__WEBPACK_IMPORTED_MODULE_1__["primary"]);
var FormCheckbox = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(FormElems)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  input {\n    display: none;\n  }\n  input:checked + ", " {\n    &:after {\n      color: ", ";\n      background-color: ", ";\n    }\n    &:before {\n      content: \"\";\n      position: absolute;\n      top: 2px;\n      left: 1px;\n      width: 5px;\n      height: 10px;\n      border-top: 2px solid transparent;\n      border-left: 2px solid transparent;\n      border-right: 2px solid ", ";\n      border-bottom: 2px solid ", ";\n      z-index: 1;\n      transform: rotateZ(37deg);\n      transform-origin: 100% 100%;\n    }\n  }\n"], ["\n  display: flex;\n  input {\n    display: none;\n  }\n  input:checked + ", " {\n    &:after {\n      color: ", ";\n      background-color: ", ";\n    }\n    &:before {\n      content: \"\";\n      position: absolute;\n      top: 2px;\n      left: 1px;\n      width: 5px;\n      height: 10px;\n      border-top: 2px solid transparent;\n      border-left: 2px solid transparent;\n      border-right: 2px solid ", ";\n      border-bottom: 2px solid ", ";\n      z-index: 1;\n      transform: rotateZ(37deg);\n      transform-origin: 100% 100%;\n    }\n  }\n"])), CheckboxLabel, styled_colors__WEBPACK_IMPORTED_MODULE_1__["primary"], styled_colors__WEBPACK_IMPORTED_MODULE_1__["primary"], styled_colors__WEBPACK_IMPORTED_MODULE_1__["white"], styled_colors__WEBPACK_IMPORTED_MODULE_1__["white"]);
var RadioLabel = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].label(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: inline-block;\n  font-weight: 500;\n  font-size: 16px;\n  color: ", ";\n  padding-left: 30px;\n  position: relative;\n  line-height: 20px;\n  cursor: pointer;\n  &:after {\n    content: \"\";\n    position: absolute;\n    display: inline-block;\n    height: 20px;\n    width: 20px;\n    border-radius: 50%;\n    border: 2px solid ", ";\n    left: 0;\n    top: 0;\n  }\n"], ["\n  display: inline-block;\n  font-weight: 500;\n  font-size: 16px;\n  color: ", ";\n  padding-left: 30px;\n  position: relative;\n  line-height: 20px;\n  cursor: pointer;\n  &:after {\n    content: \"\";\n    position: absolute;\n    display: inline-block;\n    height: 20px;\n    width: 20px;\n    border-radius: 50%;\n    border: 2px solid ", ";\n    left: 0;\n    top: 0;\n  }\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["text"], styled_colors__WEBPACK_IMPORTED_MODULE_1__["primary"]);
var FormRadio = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(FormElems)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  input {\n    display: none;\n  }\n  input:checked + ", " {\n    &:before {\n      content: \"\";\n      position: absolute;\n      width: 12px;\n      height: 12px;\n      z-index: 1;\n      border-radius: 50%;\n      background-color: ", ";\n      left: 6px;\n      top: 6px;\n    }\n  }\n"], ["\n  display: flex;\n  input {\n    display: none;\n  }\n  input:checked + ", " {\n    &:before {\n      content: \"\";\n      position: absolute;\n      width: 12px;\n      height: 12px;\n      z-index: 1;\n      border-radius: 50%;\n      background-color: ", ";\n      left: 6px;\n      top: 6px;\n    }\n  }\n"])), RadioLabel, styled_colors__WEBPACK_IMPORTED_MODULE_1__["primary"]);
var InputLabel = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].label(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-bottom: 10px;\n  display: inline-block;\n  font-weight: 500;\n  font-size: 16px;\n  color: ", ";\n"], ["\n  margin-bottom: 10px;\n  display: inline-block;\n  font-weight: 500;\n  font-size: 16px;\n  color: ", ";\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["text"]);
var FormInput = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  padding: 0 10px;\n  border-radius: 5px;\n  border: 1px solid ", ";\n  color: ", ";\n  width: 100%;\n  font-size: 14px;\n  outline: none;\n  height: 42px;\n  line-height: 42px;\n  &:focus {\n    border: 2px solid ", ";\n  }\n  ", "\n  ", "\n"], ["\n  padding: 0 10px;\n  border-radius: 5px;\n  border: 1px solid ", ";\n  color: ", ";\n  width: 100%;\n  font-size: 14px;\n  outline: none;\n  height: 42px;\n  line-height: 42px;\n  &:focus {\n    border: 2px solid ", ";\n  }\n  ",
    "\n  ",
    "\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["darkGrey"], styled_colors__WEBPACK_IMPORTED_MODULE_1__["text"], styled_colors__WEBPACK_IMPORTED_MODULE_1__["primary"], function (props) {
    return props.format === "error" && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      border: 1px solid ", ";\n      &:focus {\n        border: 2px solid ", ";\n      }\n    "], ["\n      border: 1px solid ", ";\n      &:focus {\n        border: 2px solid ", ";\n      }\n    "])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["red"], styled_colors__WEBPACK_IMPORTED_MODULE_1__["red"]);
}, function (props) {
    return props.format === "success" && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      border: 1px solid ", ";\n      &:focus {\n        border: 2px solid ", ";\n      }\n    "], ["\n      border: 1px solid ", ";\n      &:focus {\n        border: 2px solid ", ";\n      }\n    "])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["success"], styled_colors__WEBPACK_IMPORTED_MODULE_1__["success"]);
});
var InputErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 12px;\n  line-height: 25px;\n"], ["\n  color: ", ";\n  font-size: 12px;\n  line-height: 25px;\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["red"]);
var PickerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  position: absolute;\n  top: 70px;\n  left: 0;\n  z-index: 4;\n  box-shadow: 1px 0px 11px 0px rgba(0, 0, 0, 0.54);\n  border-radius: 4px;\n"], ["\n  position: absolute;\n  top: 70px;\n  left: 0;\n  z-index: 4;\n  box-shadow: 1px 0px 11px 0px rgba(0, 0, 0, 0.54);\n  border-radius: 4px;\n"])));
var FormDate = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(FormElems)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var FormRange = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(FormElems)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var Range = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 8px;\n  width: 0;\n  position: relative;\n  transition: width 0.05s linear, margin-left 0.05s linear;\n  ", "\n"], ["\n  background-color: ", ";\n  height: 8px;\n  width: 0;\n  position: relative;\n  transition: width 0.05s linear, margin-left 0.05s linear;\n  ",
    "\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["primary"], function (props) {
    var width = props.end - props.start + "%";
    var marginLeft = props.start + "%";
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n      width: ", ";\n      margin-left: ", ";\n    "], ["\n      width: ", ";\n      margin-left: ", ";\n    "])), width, marginLeft);
});
var RangeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  height: 8px;\n  background-color: ", ";\n  margin-top: 10px;\n  border-radius: 2px;\n"], ["\n  position: relative;\n  width: 100%;\n  height: 8px;\n  background-color: ", ";\n  margin-top: 10px;\n  border-radius: 2px;\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["darkGrey"]);
var RangeButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  display: inline-block;\n  position: absolute;\n  top: -9px;\n  left: 0;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background-color: #fff;\n  box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.75);\n  user-select: none;\n  cursor: pointer;\n  ", "\n"], ["\n  display: inline-block;\n  position: absolute;\n  top: -9px;\n  left: 0;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background-color: #fff;\n  box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.75);\n  user-select: none;\n  cursor: pointer;\n  ",
    "\n"])), function (props) {
    return props.right && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n      right: 0;\n      left: initial;\n    "], ["\n      right: 0;\n      left: initial;\n    "])));
});
var RangeInputs = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n  display: flex;\n  margin-top: 20px;\n  justify-content: space-between;\n  input {\n    width: 40px;\n    height: 30px;\n  }\n"], ["\n  display: flex;\n  margin-top: 20px;\n  justify-content: space-between;\n  input {\n    width: 40px;\n    height: 30px;\n  }\n"])));
var ColorInput = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n  max-width: 120px;\n  position: relative;\n"], ["\n  max-width: 120px;\n  position: relative;\n"])));
var ColorPickerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 50px;\n  left: 0;\n  z-index: 10;\n  border-radius: 5px;\n  border: 2px solid ", ";\n  overflow: hidden;\n"], ["\n  position: absolute;\n  bottom: 50px;\n  left: 0;\n  z-index: 10;\n  border-radius: 5px;\n  border: 2px solid ", ";\n  overflow: hidden;\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["black"]);
var ColorPreview = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.attrs(function (props) { return ({
    style: props.style
}); })(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n  position: absolute;\n  right: 7px;\n  bottom: 6px;\n  height: 30px;\n  width: 30px;\n  border-radius: 3px;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  right: 7px;\n  bottom: 6px;\n  height: 30px;\n  width: 30px;\n  border-radius: 3px;\n  cursor: pointer;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22;


/***/ }),

/***/ "./src/components/Image/Image.tsx":
/*!****************************************!*\
  !*** ./src/components/Image/Image.tsx ***!
  \****************************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Image/styles.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    // private img: any = null;
    function Image(props) {
        var _this = _super.call(this, props) || this;
        _this.loadImage = function (e) {
            _this.setState({
                isLoading: false
            });
        };
        _this.state = {
            isLoading: true
        };
        return _this;
    }
    Image.prototype.render = function () {
        var _a = this.props, src = _a.src, loadingIcon = _a.loadingIcon;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["ImageWrapper"], null,
            this.state.isLoading && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["LoadingWrapper"], null, loadingIcon),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["StyledImage"], { src: src, onLoad: this.loadImage, show: !this.state.isLoading })));
    };
    return Image;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/Image/styles.tsx":
/*!*****************************************!*\
  !*** ./src/components/Image/styles.tsx ***!
  \*****************************************/
/*! exports provided: ImageWrapper, StyledImage, LoadingWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledImage", function() { return StyledImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingWrapper", function() { return LoadingWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n"], ["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n"])));
var StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  opacity: 0;\n  ", "\n"], ["\n  width: 100%;\n  opacity: 0;\n  ",
    "\n"])), function (props) {
    return props.show && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      opacity: 1;\n    "], ["\n      opacity: 1;\n    "])));
});
var LoadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/components/Modal/Modal.tsx":
/*!****************************************!*\
  !*** ./src/components/Modal/Modal.tsx ***!
  \****************************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Modal/styles.tsx");
/* harmony import */ var _icons_cross_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/cross.svg */ "./src/icons/cross.svg");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


//@ts-ignore

var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.modalElem = null;
        _this.onCloseModal = function () {
            _this.setState({
                innerClass: "close"
            });
            setTimeout(function () {
                _this.setState({
                    isShowing: false
                }, function () {
                    _this.props.onDismiss();
                });
            }, 300);
        };
        _this.onClickOutSide = function (e) {
            //@ts-ignore
            if (e.target.classList.contains("modal-overlay")) {
                return _this.onCloseModal();
            }
            return false;
        };
        _this.onKeyPress = function (e) {
            //@ts-ignore
            if (e.keyCode === 27) {
                return _this.onCloseModal();
            }
            return false;
        };
        _this.state = {
            isShowing: _this.props.isShowing,
            innerClass: _this.props.isShowing ? "open" : "close"
        };
        return _this;
    }
    Modal.prototype.componentDidUpdate = function () {
        if (this.modalElem) {
            this.modalElem.focus();
        }
    };
    Modal.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.isShowing !== this.props.isShowing) {
            this.setState({
                isShowing: nextProps.isShowing,
                innerClass: nextProps.isShowing ? "open" : "close"
            });
        }
    };
    Modal.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, children = _a.children;
        if (this.state.isShowing) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["StyledModal"], { onClick: this.onClickOutSide, onKeyUp: this.onKeyPress, tabIndex: 0, ref: function (e) { return (_this.modalElem = e); }, className: "modal-overlay" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["ModalInner"], { innerClass: this.state.innerClass },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["ModalTitle"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, title),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["CloseDialog"], { onClick: this.onCloseModal },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_cross_svg__WEBPACK_IMPORTED_MODULE_2__["default"], null))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], null, children))));
        }
        return null;
    };
    return Modal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/Modal/styles.tsx":
/*!*****************************************!*\
  !*** ./src/components/Modal/styles.tsx ***!
  \*****************************************/
/*! exports provided: StyledModal, ModalInner, ModalTitle, CloseDialog, ModalBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledModal", function() { return StyledModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalInner", function() { return ModalInner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTitle", function() { return ModalTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseDialog", function() { return CloseDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBody", function() { return ModalBody; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled/colors */ "./src/common/styles/colors.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var FadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var FadeOut = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"])));
var StyledModal = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 20;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n"], ["\n  position: fixed;\n  z-index: 20;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n"])));
var ModalInner = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  min-height: 400px;\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 5px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  min-width: 350px;\n  opacity: 0;\n  animation: ", " 0.2s linear forwards;\n  ", "\n  ", "\n"], ["\n  min-height: 400px;\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 5px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  min-width: 350px;\n  opacity: 0;\n  animation: ", " 0.2s linear forwards;\n  ",
    "\n  ",
    "\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["white"], styled_colors__WEBPACK_IMPORTED_MODULE_1__["darkGrey"], FadeOut, function (props) {
    return props.innerClass === "open" && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      animation: ", " 0.2s linear forwards;\n    "], ["\n      animation: ", " 0.2s linear forwards;\n    "])), FadeIn);
}, function (props) {
    return props.innerClass === "close" && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      animation: ", " 0.2s linear forwards;\n    "], ["\n      animation: ", " 0.2s linear forwards;\n    "])), FadeOut);
});
var ModalTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  padding: 20px;\n  font-size: 28px;\n  border-bottom: 1px solid ", ";\n  position: relative;\n"], ["\n  padding: 20px;\n  font-size: 28px;\n  border-bottom: 1px solid ", ";\n  position: relative;\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["darkGrey"]);
var CloseDialog = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: absolute;\n  color: ", ";\n  font-size: 14px;\n  display: inline-flex;\n  width: 16px;\n  height: 16px;\n  top: 15px;\n  right: 15px;\n  justify-content: center;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  color: ", ";\n  font-size: 14px;\n  display: inline-flex;\n  width: 16px;\n  height: 16px;\n  top: 15px;\n  right: 15px;\n  justify-content: center;\n  cursor: pointer;\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["black"]);
var ModalBody = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  padding: 10px;\n"], ["\n  padding: 10px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;


/***/ }),

/***/ "./src/components/Pagination/Pagination.tsx":
/*!**************************************************!*\
  !*** ./src/components/Pagination/Pagination.tsx ***!
  \**************************************************/
/*! exports provided: Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_right_arrow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/right-arrow.svg */ "./src/icons/right-arrow.svg");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/Pagination/styles.tsx");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

//@ts-ignore


var Pagination = function (props) {
    var total = props.total;
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.page), 2), currentPage = _a[0], setCurrentPage = _a[1];
    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.page), 2), pageInput = _b[0], setPageInput = _b[1];
    var setActivePage = function (page) {
        if (page < 0 || page > total) {
            return;
        }
        setCurrentPage(page);
        setPageInput(page);
        props.onGoToPage(page);
    };
    var onChangeInput = function (e) {
        var val = e.target.value;
        if (val < 0 || val > props.total) {
            return;
        }
        setPageInput(val);
    };
    var onKeyPressInput = function (e) {
        if (e.key === "Enter") {
            setActivePage(pageInput);
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["StyledButton"], { onClick: function () { return setActivePage(currentPage - 1); }, disabled: currentPage <= 0 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_right_arrow_svg__WEBPACK_IMPORTED_MODULE_1__["default"], null)),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["StyledInput"], { type: "number", value: pageInput, onChange: onChangeInput, onKeyPress: onKeyPressInput }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["StyledButton"], { onClick: function () { return setActivePage(currentPage + 1); }, disabled: currentPage >= total },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_right_arrow_svg__WEBPACK_IMPORTED_MODULE_1__["default"], null)),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Remain"], null,
            " of ",
            total)));
};


/***/ }),

/***/ "./src/components/Pagination/styles.tsx":
/*!**********************************************!*\
  !*** ./src/components/Pagination/styles.tsx ***!
  \**********************************************/
/*! exports provided: Wrapper, StyledButton, StyledInput, Remain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledInput", function() { return StyledInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Remain", function() { return Remain; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled/colors */ "./src/common/styles/colors.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: ", ";\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: ", ";\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["text"]);
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 4px;\n  height: 40px;\n  width: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  outline: 0;\n  &:first-child {\n    transform: rotate(-180deg);\n  }\n  &:focus {\n    box-shadow: 0px 0px 0px 2px #0c96f2;\n  }\n  ", "\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 4px;\n  height: 40px;\n  width: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  outline: 0;\n  &:first-child {\n    transform: rotate(-180deg);\n  }\n  &:focus {\n    box-shadow: 0px 0px 0px 2px #0c96f2;\n  }\n  ",
    "\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["darkGrey"], styled_colors__WEBPACK_IMPORTED_MODULE_1__["greyText"], function (props) {
    return props.disabled && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      pointer-events: none;\n      opacity: 0.5;\n    "], ["\n      pointer-events: none;\n      opacity: 0.5;\n    "])));
});
var StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 40px;\n  width: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: ", ";\n  text-align: center;\n  border-radius: 4px;\n  margin: 0 10px;\n  border: 1px solid ", ";\n  font-size: 14px;\n  outline: 0;\n  &:focus {\n    box-shadow: 0px 0px 0px 2px #0c96f2;\n  }\n"], ["\n  height: 40px;\n  width: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: ", ";\n  text-align: center;\n  border-radius: 4px;\n  margin: 0 10px;\n  border: 1px solid ", ";\n  font-size: 14px;\n  outline: 0;\n  &:focus {\n    box-shadow: 0px 0px 0px 2px #0c96f2;\n  }\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["text"], styled_colors__WEBPACK_IMPORTED_MODULE_1__["greyText"]);
var Remain = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-left: 10px;\n"], ["\n  margin-left: 10px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/components/Pills/Pills.tsx":
/*!****************************************!*\
  !*** ./src/components/Pills/Pills.tsx ***!
  \****************************************/
/*! exports provided: Pills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pills", function() { return Pills; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled/colors */ "./src/common/styles/colors.ts");
/* harmony import */ var _icons_cross_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/cross.svg */ "./src/icons/cross.svg");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};



//@ts-ignore

var Pill = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  padding: 10px 15px;\n  background-color: ", ";\n  color: ", ";\n  font-size: 14px;\n  position: relative;\n  border-radius: 4px;\n  padding-right: 30px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n"], ["\n  display: inline-block;\n  padding: 10px 15px;\n  background-color: ", ";\n  color: ", ";\n  font-size: 14px;\n  position: relative;\n  border-radius: 4px;\n  padding-right: 30px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_2__["lightGrey"], styled_colors__WEBPACK_IMPORTED_MODULE_2__["text"]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-right: 5px;\n"], ["\n  margin-right: 5px;\n"])));
var RemoveIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  right: 7px;\n  top: 9px;\n  cursor: pointer;\n"], ["\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  right: 7px;\n  top: 9px;\n  cursor: pointer;\n"])));
var Pills = function (props) {
    var label = props.label, onRemove = props.onRemove;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Pill, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, null, label),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RemoveIcon, { onClick: onRemove },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_cross_svg__WEBPACK_IMPORTED_MODULE_3__["default"], { width: 16, height: 16 }))));
};
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/components/PopOver/PopOver.tsx":
/*!********************************************!*\
  !*** ./src/components/PopOver/PopOver.tsx ***!
  \********************************************/
/*! exports provided: PopOver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopOver", function() { return PopOver; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/PopOver/styles.tsx");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};


var dispatchClosePopup = function () {
    var event = new Event("closePopup");
    document.dispatchEvent(event);
};
var PopOver = function (props) {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), 2), isShowing = _a[0], setIsShowing = _a[1];
    var openPopup = function (e) {
        dispatchClosePopup();
        setIsShowing(true);
    };
    var addEvents = function () {
        document.addEventListener("click", onClickOutside);
        document.addEventListener("closePopup", closePopup);
    };
    var removeEvents = function () {
        document.removeEventListener("click", onClickOutside);
        document.removeEventListener("closePopup", closePopup);
    };
    var closePopup = function () {
        setIsShowing(false);
    };
    var onClickOutside = function (e) {
        //@ts-ignore
        var paths = e.path;
        for (var i = 0; i < paths.length; i += 1) {
            if (paths[i].classList &&
                paths[i].classList.contains("popover-container")) {
                return;
            }
        }
        closePopup();
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (isShowing) {
            addEvents();
        }
        else {
            removeEvents();
        }
        return function () {
            removeEvents();
        };
    }, [isShowing]);
    var children = props.children, content = props.content, _b = props.position, position = _b === void 0 ? "bottom" : _b, _c = props.size, size = _c === void 0 ? "md" : _c;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["PopoverContainer"], { onClick: openPopup },
        children,
        isShowing && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["PopoverWrapper"], { position: position, size: size }, content))));
};


/***/ }),

/***/ "./src/components/PopOver/styles.tsx":
/*!*******************************************!*\
  !*** ./src/components/PopOver/styles.tsx ***!
  \*******************************************/
/*! exports provided: OpenPopover, PopoverWrapper, PopoverContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenPopover", function() { return OpenPopover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverWrapper", function() { return PopoverWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverContainer", function() { return PopoverContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled/colors */ "./src/common/styles/colors.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var OpenPopover = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var PopoverWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  position: absolute;\n  background: ", ";\n  z-index: 10;\n  border-radius: 5px;\n  box-shadow: 0px 0px 30px 2px rgba(0,0,0,0.75);\n  opacity: 0;\n  animation: ", " 0.4s ease-out forwards;\n  padding: 10px;\n  &:after {\n    content: '';\n    position: absolute;\n    color: inherit;\n    background-color: transparent;\n    width: 0; \n    height: 0; \n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 10px solid ", ";\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  position: absolute;\n  background: ", ";\n  z-index: 10;\n  border-radius: 5px;\n  box-shadow: 0px 0px 30px 2px rgba(0,0,0,0.75);\n  opacity: 0;\n  animation: ", " 0.4s ease-out forwards;\n  padding: 10px;\n  &:after {\n    content: '';\n    position: absolute;\n    color: inherit;\n    background-color: transparent;\n    width: 0; \n    height: 0; \n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 10px solid ", ";\n  }\n  ",
    "\n  ",
    "\n  ",
    "\n  ",
    "\n  ",
    "\n  ",
    "\n  ",
    "\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["white"], OpenPopover, styled_colors__WEBPACK_IMPORTED_MODULE_1__["white"], function (props) {
    return props.position === "bottom" && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      top: 100%;\n      left: 50%;\n      transform: translate(-50%, 15px);\n      &:after {\n        top: -10px;\n        left: 50%;\n        transform: translateX(-10px);\n      }\n    "], ["\n      top: 100%;\n      left: 50%;\n      transform: translate(-50%, 15px);\n      &:after {\n        top: -10px;\n        left: 50%;\n        transform: translateX(-10px);\n      }\n    "])));
}, function (props) {
    return props.position === "left" && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      top: 50%;\n      right: 100%;\n      transform: translate(-15px, -50%);\n      &:after {\n        border-top: 10px solid transparent;\n        border-bottom: 10px solid transparent;\n        border-right: 10px solid transparent;\n        border-left: 10px solid ", ";\n        top: 50%;\n        right: -10px;\n        transform: translate(10px, -10px);\n      }\n    "], ["\n      top: 50%;\n      right: 100%;\n      transform: translate(-15px, -50%);\n      &:after {\n        border-top: 10px solid transparent;\n        border-bottom: 10px solid transparent;\n        border-right: 10px solid transparent;\n        border-left: 10px solid ", ";\n        top: 50%;\n        right: -10px;\n        transform: translate(10px, -10px);\n      }\n    "])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["white"]);
}, function (props) {
    return props.position === "right" && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      top: 50%;\n      left: 100%;\n      transform: translate(15px, -50%);\n      &:after {\n        border-top: 10px solid transparent;\n        border-bottom: 10px solid transparent;\n        border-left: 10px solid transparent;\n        border-right: 10px solid ", ";\n        top: 50%;\n        left: -10px;\n        transform: translate(-10px, -10px);\n      }\n    "], ["\n      top: 50%;\n      left: 100%;\n      transform: translate(15px, -50%);\n      &:after {\n        border-top: 10px solid transparent;\n        border-bottom: 10px solid transparent;\n        border-left: 10px solid transparent;\n        border-right: 10px solid ", ";\n        top: 50%;\n        left: -10px;\n        transform: translate(-10px, -10px);\n      }\n    "])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["white"]);
}, function (props) {
    return props.position === "top" && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      bottom: 100%;\n      left: 50%;\n      transform: translate(-50%, -15px);\n      &:after {\n        border-left: 10px solid transparent;\n        border-right: 10px solid transparent;\n        border-bottom: 10px solid transparent;\n        border-top: 10px solid ", ";\n        left: 50%;\n        transform: translateX(-10px);\n        top: 100%;\n      }\n    "], ["\n      bottom: 100%;\n      left: 50%;\n      transform: translate(-50%, -15px);\n      &:after {\n        border-left: 10px solid transparent;\n        border-right: 10px solid transparent;\n        border-bottom: 10px solid transparent;\n        border-top: 10px solid ", ";\n        left: 50%;\n        transform: translateX(-10px);\n        top: 100%;\n      }\n    "])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["white"]);
}, function (props) {
    return props.size === "md" && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      width: 400px;\n    "], ["\n      width: 400px;\n    "])));
}, function (props) {
    return props.size === "lg" && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      width: 600px;\n    "], ["\n      width: 600px;\n    "])));
}, function (props) {
    return props.size === "sm" && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      width: 280px;\n    "], ["\n      width: 280px;\n    "])));
});
var PopoverContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.attrs({
    class: "popover-container"
})(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n"], ["\n  position: relative;\n  display: inline-block;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;


/***/ }),

/***/ "./src/components/Ratings/Ratings.tsx":
/*!********************************************!*\
  !*** ./src/components/Ratings/Ratings.tsx ***!
  \********************************************/
/*! exports provided: Ratings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ratings", function() { return Ratings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Ratings/styles.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var COUNT = 5;
var MARGIN = 5;
var Ratings = /** @class */ (function (_super) {
    __extends(Ratings, _super);
    function Ratings(props) {
        var _this = _super.call(this, props) || this;
        _this.containerWidth = 0;
        _this.getRatingStyle = function () {
            var rate = _this.state.rate;
            return {
                width: (100 / COUNT) * rate + "%"
            };
        };
        _this.getIconStyle = function () {
            var _a = _this.props, width = _a.width, height = _a.height;
            return {
                width: width + "px",
                height: height + "px"
            };
        };
        _this.getContainerStyle = function () {
            var _a = _this.props, width = _a.width, height = _a.height, margin = _a.margin;
            _this.containerWidth = (width + (margin || MARGIN)) * COUNT;
            return {
                width: _this.containerWidth + "px",
                height: height + "px"
            };
        };
        _this.setRatings = function (e) {
            if (_this.props.readonly) {
                return;
            }
            //@ts-ignore
            var diffWidth = e.clientX - e.currentTarget.offsetLeft;
            var rate = parseFloat(((diffWidth / _this.containerWidth) * 5).toFixed(1));
            _this.setState({
                rate: rate
            }, function () {
                if (_this.props.onSetRating) {
                    _this.props.onSetRating(rate);
                }
            });
        };
        _this.state = {
            rate: _this.props.rate
        };
        return _this;
    }
    Ratings.prototype.render = function () {
        var _this = this;
        var blankStar = [];
        for (var i = 0; i < COUNT; i += 1) {
            blankStar.push(i);
        }
        var _a = this.props, icon = _a.icon, topColor = _a.topColor, bottomColor = _a.bottomColor;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["StyledRatings"], { style: this.getContainerStyle(), onClick: this.setRatings },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["TopLayer"], { style: this.getRatingStyle(), color: topColor }, blankStar.map(function (b, i) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["RatingsIcon"], { key: "RATINGS_ICON_" + i, style: _this.getIconStyle() }, icon)); })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["BottomLayer"], { color: bottomColor }, blankStar.map(function (b, i) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["RatingsIcon"], { key: "RATINGS_ICON_" + i, style: _this.getIconStyle() }, icon)); }))));
    };
    return Ratings;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/Ratings/styles.tsx":
/*!*******************************************!*\
  !*** ./src/components/Ratings/styles.tsx ***!
  \*******************************************/
/*! exports provided: StyledRatings, RatingsIcon, TopLayer, BottomLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledRatings", function() { return StyledRatings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingsIcon", function() { return RatingsIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopLayer", function() { return TopLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomLayer", function() { return BottomLayer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled/colors */ "./src/common/styles/colors.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var StyledRatings = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  svg {\n    path {\n      fill: ", ";\n    }\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  svg {\n    path {\n      fill: ", ";\n    }\n  }\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["darkGrey"]);
var RatingsIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  margin-right: 5px;\n"], ["\n  display: inline-block;\n  margin-right: 5px;\n"])));
var TopLayer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  background-color: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  svg {\n    *,\n    path {\n      fill: ", ";\n    }\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  background-color: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  svg {\n    *,\n    path {\n      fill: ", ";\n    }\n  }\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["white"], function (props) { return props.color; });
var BottomLayer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  svg {\n    *,\n    path {\n      fill: ", ";\n    }\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  svg {\n    *,\n    path {\n      fill: ", ";\n    }\n  }\n"])), function (props) { return props.color; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/components/Restful/Get.tsx":
/*!****************************************!*\
  !*** ./src/components/Restful/Get.tsx ***!
  \****************************************/
/*! exports provided: Get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Get", function() { return Get; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Get = /** @class */ (function (_super) {
    __extends(Get, _super);
    function Get(props) {
        var _this = _super.call(this, props) || this;
        _this.fetch = function () {
            var options = _this.props.options;
            var DEFAULT_HEADERS = {
                "content-type": "application/json; charset=utf-8"
            };
            var promises = options.map(function (o) {
                return fetch(o.url, {
                    method: "GET",
                    headers: o.headers || DEFAULT_HEADERS
                }).then(function (res) { return res.json(); });
            });
            return Promise.all(promises)
                .then(function (res) {
                _this.setState({
                    error: null,
                    loading: false,
                    data: res
                });
            })
                .catch(function (err) {
                _this.setState({
                    error: err,
                    loading: false,
                    data: null
                });
            });
        };
        _this.state = {
            error: null,
            data: null,
            loading: true
        };
        return _this;
    }
    Get.prototype.componentDidMount = function () {
        this.fetch();
    };
    Get.prototype.render = function () {
        return this.props.children(this.state);
    };
    return Get;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/Restful/Post.tsx":
/*!*****************************************!*\
  !*** ./src/components/Restful/Post.tsx ***!
  \*****************************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Post = /** @class */ (function (_super) {
    __extends(Post, _super);
    function Post(props) {
        var _this = _super.call(this, props) || this;
        _this.post = function (options) {
            var DEFAULT_HEADERS = {
                "content-type": "application/json; charset=utf-8"
            };
            var promises = options.map(function (o) {
                return fetch(o.url, {
                    method: _this.props.method || "POST",
                    headers: o.headers || DEFAULT_HEADERS,
                    body: o.body || ""
                }).then(function (res) { return res.json(); });
            });
            _this.setState({
                loading: true
            });
            return Promise.all(promises)
                .then(function (res) {
                _this.setState({
                    error: null,
                    loading: false,
                    data: res
                });
            })
                .catch(function (err) {
                _this.setState({
                    error: err,
                    loading: false,
                    data: null
                });
            });
        };
        _this.state = {
            error: null,
            loading: false,
            data: null
        };
        return _this;
    }
    Post.prototype.render = function () {
        return this.props.children({
            post: this.post,
            loading: this.state.loading,
            error: this.state.error,
            data: this.state.data
        });
    };
    return Post;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/Tabs/Tabs.tsx":
/*!**************************************!*\
  !*** ./src/components/Tabs/Tabs.tsx ***!
  \**************************************/
/*! exports provided: Tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Tabs/styles.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs(props) {
        var _this = _super.call(this, props) || this;
        _this.previousTabIndex = 0;
        _this.goToTab = function (index) {
            _this.setState({
                activeTab: index,
                activeTabContent: _this.props.tabContent[index].content
            }, function () {
                _this.previousTabIndex = _this.state.activeTab;
            });
        };
        var _a = _this.props, activeTab = _a.activeTab, tabContent = _a.tabContent;
        _this.state = {
            activeTab: activeTab | 0,
            activeTabContent: tabContent[activeTab | 0].content
        };
        return _this;
    }
    Tabs.prototype.render = function () {
        var _this = this;
        var tabContent = this.props.tabContent;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["StyledTabs"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["Headers"], null, tabContent.map(function (tab, i) {
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["StyledTab"], __assign({ key: "TAB_" + i, onClick: function () { return _this.goToTab(i); } }, Tabs.tabstyles(_this.state.activeTab, _this.previousTabIndex, i)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null, tab.label)));
            })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["Content"], null, this.state.activeTabContent)));
    };
    Tabs.tabstyles = function (activeTab, prevTabIndex, index) { return ({
        active: activeTab === index,
        right: prevTabIndex < activeTab,
        left: prevTabIndex >= activeTab
    }); };
    return Tabs;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/Tabs/styles.tsx":
/*!****************************************!*\
  !*** ./src/components/Tabs/styles.tsx ***!
  \****************************************/
/*! exports provided: StyledTabs, Headers, StyledTab, Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledTabs", function() { return StyledTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledTab", function() { return StyledTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled/colors */ "./src/common/styles/colors.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var tab_headers_border = "#ececec";
var tab_active_bg = "#f7f7f7";
var rightSlide = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    transform: translateX(-100%)\n  }\n  100% {\n    transform: translateX(0)\n  }\n"], ["\n  0% {\n    transform: translateX(-100%)\n  }\n  100% {\n    transform: translateX(0)\n  }\n"])));
var leftSlide = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0% {\n    transform: translateX(100%)\n  }\n  100% {\n    transform: translateX(0)\n  }\n"], ["\n  0% {\n    transform: translateX(100%)\n  }\n  100% {\n    transform: translateX(0)\n  }\n"])));
var fadeInContent = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  0% {\n    opacity: 0\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var StyledTabs = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: 0;\n  position: relative;\n"], ["\n  margin: 0;\n  position: relative;\n"])));
var Headers = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n  border-bottom: 1px solid ", ";\n"], ["\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n  border-bottom: 1px solid ", ";\n"])), tab_headers_border);
var StyledTab = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  width: 100%;\n  height: 45px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  ", "\n"], ["\n  width: 100%;\n  height: 45px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  ",
    "\n"])), function (props) {
    return props.active && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      background-color: ", ";\n      border-top-left-radius: 4px;\n      border-top-right-radius: 4px;\n      &:after {\n        content: \"\";\n        position: absolute;\n        display: inline-block;\n        width: 100%;\n        border-bottom: 2px solid ", ";\n        bottom: 0;\n      }\n      ", "\n      ", "\n    "], ["\n      background-color: ", ";\n      border-top-left-radius: 4px;\n      border-top-right-radius: 4px;\n      &:after {\n        content: \"\";\n        position: absolute;\n        display: inline-block;\n        width: 100%;\n        border-bottom: 2px solid ", ";\n        bottom: 0;\n      }\n      ",
        "\n      ",
        "\n    "])), tab_active_bg, styled_colors__WEBPACK_IMPORTED_MODULE_1__["primary"], function (props) {
        //@ts-ignore
        return props.left && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n          &:after {\n            animation: ", " 0.3s ease-out;\n          }\n        "], ["\n          &:after {\n            animation: ", " 0.3s ease-out;\n          }\n        "])), leftSlide);
    }, function (props) {
        //@ts-ignore
        return props.right && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n          &:after {\n            animation: ", " 0.3s ease-out;\n          }\n        "], ["\n          &:after {\n            animation: ", " 0.3s ease-out;\n          }\n        "])), rightSlide);
    });
});
var Content = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  padding: 15px;\n  animation: ", " 0.3s ease-out;\n"], ["\n  padding: 15px;\n  animation: ", " 0.3s ease-out;\n"])), fadeInContent);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;


/***/ }),

/***/ "./src/components/TagSelect/TagSelect.tsx":
/*!************************************************!*\
  !*** ./src/components/TagSelect/TagSelect.tsx ***!
  \************************************************/
/*! exports provided: TagSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagSelect", function() { return TagSelect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Pills_Pills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Pills/Pills */ "./src/components/Pills/Pills.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/TagSelect/styles.tsx");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};



var addTags = function (event, tags, props) {
    //@ts-ignore
    var value = event.target.value.trim();
    event.preventDefault();
    if (!value)
        return;
    var newTags = props.separator
        ? __spread(tags, value
            .split(new RegExp(props.separator, "g"))
            .filter(function (str) { return !!str.trim(); })
            .map(function (str) { return ({ label: str }); })) : __spread(tags, [{ label: value }]);
    props.onUpdate(newTags);
    //@ts-ignore
    event.target.value = "";
};
var handleKeydown = function (event, tags, props) {
    //@ts-ignore
    var isBackspace = event.keyCode === 8 && !event.target.value;
    //@ts-ignore
    var isEnter = event.keyCode === 13;
    if (isBackspace) {
        var tag = tags.pop();
        if (tag) {
            return props.onRemove(tag);
        }
    }
    if (isEnter) {
        addTags(event, tags, props);
    }
};
var handleKeyUp = function (event, tags, props) {
    //@ts-ignore
    var value = event.target.value.trim();
    var isSepatatorTypes = value.includes(props.separator);
    if (isSepatatorTypes) {
        addTags(event, tags, props);
    }
};
var handleBlur = function (event, tags, props) {
    addTags(event, tags, props);
};
var onRemove = function (tags, tagIndex, props) {
    var newTags = tags.filter(function (tag, index) { return tagIndex !== index; });
    props.onUpdate(newTags);
    props.onRemove(tags[tagIndex]);
};
var TagSelect = function (props) {
    var placeholder = props.placeholder, tags = props.tags;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["SelectContainer"], { className: props.className },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["SelectArea"], null,
            tags.map(function (tag, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Pills_Pills__WEBPACK_IMPORTED_MODULE_1__["Pills"], { key: "TAG_" + index, label: tag.label, onRemove: onRemove.bind(null, tags, index, props) })); }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["TagInput"], { type: "text", onKeyDown: function (e) { return handleKeydown(e, tags, props); }, onKeyUp: function (e) { return handleKeyUp(e, tags, props); }, onBlur: function (e) { return handleBlur(e, tags, props); }, placeholder: placeholder }))));
};


/***/ }),

/***/ "./src/components/TagSelect/styles.tsx":
/*!*********************************************!*\
  !*** ./src/components/TagSelect/styles.tsx ***!
  \*********************************************/
/*! exports provided: SelectContainer, SelectArea, TagInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectContainer", function() { return SelectContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectArea", function() { return SelectArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInput", function() { return TagInput; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled/colors */ "./src/common/styles/colors.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var SelectContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  \u00A0\u00A0display: flex;\n  \u00A0\u00A0justify-content: center;\n  \u00A0\u00A0align-items: center;\n  \u00A0\u00A0margin: 5px\u00A00;\n  \u00A0\u00A0width: 100%;\n  padding: 10px;\n  border: 1px solid ", ";\n  border-radius: 4px;\n  &:hover {\n    border: 1px solid ", ";\n  }\n"], ["\n  \u00A0\u00A0display: flex;\n  \u00A0\u00A0justify-content: center;\n  \u00A0\u00A0align-items: center;\n  \u00A0\u00A0margin: 5px\u00A00;\n  \u00A0\u00A0width: 100%;\n  padding: 10px;\n  border: 1px solid ", ";\n  border-radius: 4px;\n  &:hover {\n    border: 1px solid ", ";\n  }\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["primary"], styled_colors__WEBPACK_IMPORTED_MODULE_1__["primaryDark"]);
var SelectArea = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-height: 12px;\n  border: 1px\u00A0solid\u00A0 ", ";\n  border-radius: 3px;\n  padding: 10px\u00A05px;\n  color: ", ";\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  &:hover\u00A0 {\n    border-color: ", ";\n  }\n"], ["\n  min-height: 12px;\n  border: 1px\u00A0solid\u00A0 ", ";\n  border-radius: 3px;\n  padding: 10px\u00A05px;\n  color: ", ";\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  &:hover\u00A0 {\n    border-color: ", ";\n  }\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["darkGrey"], styled_colors__WEBPACK_IMPORTED_MODULE_1__["text"], styled_colors__WEBPACK_IMPORTED_MODULE_1__["text"]);
var TagInput = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  \u00A0\u00A0border: none;\n  \u00A0\u00A0outline: none;\n  \u00A0\u00A0color: ", ";\n  \u00A0\u00A0height: 30px;\n  \u00A0\u00A0font-size: 14px;\n  \u00A0\u00A0font-weight: 500;\n  \u00A0\u00A0letter-spacing: 1px;\n  \u00A0\u00A0display: inline-block;\n  \u00A0\u00A0padding-left: 5px;\n  \u00A0\u00A0width: auto;\n  \u00A0\u00A0min-width: 60px;\n  \u00A0\u00A0flex: 1;\n"], ["\n  \u00A0\u00A0border: none;\n  \u00A0\u00A0outline: none;\n  \u00A0\u00A0color: ", ";\n  \u00A0\u00A0height: 30px;\n  \u00A0\u00A0font-size: 14px;\n  \u00A0\u00A0font-weight: 500;\n  \u00A0\u00A0letter-spacing: 1px;\n  \u00A0\u00A0display: inline-block;\n  \u00A0\u00A0padding-left: 5px;\n  \u00A0\u00A0width: auto;\n  \u00A0\u00A0min-width: 60px;\n  \u00A0\u00A0flex: 1;\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["text"]);
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/components/VideoPlayer/VideoPlayer.tsx":
/*!****************************************************!*\
  !*** ./src/components/VideoPlayer/VideoPlayer.tsx ***!
  \****************************************************/
/*! exports provided: VideoPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayer", function() { return VideoPlayer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/VideoPlayer/styles.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var VideoPlayer = /** @class */ (function (_super) {
    __extends(VideoPlayer, _super);
    function VideoPlayer(props) {
        var _this = _super.call(this, props) || this;
        _this.wrapper = null;
        _this.getListHeight = function () {
            if (_this.wrapper) {
                return _this.wrapper.offsetHeight - 20 + "px";
            }
            return "0px";
        };
        _this.onSelectVideo = function (video, index) {
            _this.setState({
                selectedVideo: video,
                selectedVideoIndex: index
            });
        };
        _this.state = {
            selectedVideo: _this.props.videos[0],
            listHeight: "0px",
            selectedVideoIndex: 0
        };
        return _this;
    }
    VideoPlayer.prototype.componentDidMount = function () {
        this.setState({
            listHeight: this.getListHeight()
        });
    };
    VideoPlayer.prototype.render = function () {
        var _this = this;
        var _a = this.props, videos = _a.videos, children = _a.children;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["VideoWrapper"], { ref: function (e) { return (_this.wrapper = e); } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["VideoList"], { style: { height: this.state.listHeight } }, videos.map(function (video, v) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["PreviewItem"], { onClick: function () { return _this.onSelectVideo(video, v); }, key: "PREVIEW__" + v, selected: _this.state.selectedVideoIndex === v },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["PreviewThumb"], { src: video.thumb }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["Title"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null, video.title)))); })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["VideoContainer"], null, children(this.state.selectedVideo))));
    };
    return VideoPlayer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/VideoPlayer/styles.tsx":
/*!***********************************************!*\
  !*** ./src/components/VideoPlayer/styles.tsx ***!
  \***********************************************/
/*! exports provided: VideoContainer, VideoList, PreviewItem, Title, PreviewThumb, VideoWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoContainer", function() { return VideoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoList", function() { return VideoList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewItem", function() { return PreviewItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewThumb", function() { return PreviewThumb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoWrapper", function() { return VideoWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled/colors */ "./src/common/styles/colors.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var VideoContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  video {\n    width: 100%;\n    height: 100%;\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  video {\n    width: 100%;\n    height: 100%;\n  }\n"])));
var VideoList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 150px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 90%;\n  overflow-y: auto;\n  z-index: 10;\n  padding-top: 15px;\n  padding-right: 15px;\n  opacity: 0;\n  transition: opacity 0.2s linear;\n"], ["\n  width: 150px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 90%;\n  overflow-y: auto;\n  z-index: 10;\n  padding-top: 15px;\n  padding-right: 15px;\n  opacity: 0;\n  transition: opacity 0.2s linear;\n"])));
var PreviewItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 80px;\n  width: 100%;\n  margin-bottom: 10px;\n  position: relative;\n  border-radius: 4px;\n  border: 1px solid ", ";\n  overflow: hidden;\n  cursor: pointer;\n  background-color: #131313;\n  color: ", "\n    ", ";\n"], ["\n  height: 80px;\n  width: 100%;\n  margin-bottom: 10px;\n  position: relative;\n  border-radius: 4px;\n  border: 1px solid ", ";\n  overflow: hidden;\n  cursor: pointer;\n  background-color: #131313;\n  color: ", "\n    ",
    ";\n"])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["greyText"], styled_colors__WEBPACK_IMPORTED_MODULE_1__["white"], function (props) {
    return props.selected && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        border: 2px solid ", ";\n      "], ["\n        border: 2px solid ", ";\n      "])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["red"]);
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  color: $lightGrey;\n  padding: 0 15px;\n  font-size: 12px;\n  background-color: rgba(0, 0, 0, 0.3);\n"], ["\n  display: flex;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  color: $lightGrey;\n  padding: 0 15px;\n  font-size: 12px;\n  background-color: rgba(0, 0, 0, 0.3);\n"])));
var PreviewThumb = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n"], ["\n  width: 100%;\n  height: 100%;\n"])));
var VideoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n  &:hover {\n    ", " {\n      opacity: 1;\n    }\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n  &:hover {\n    ", " {\n      opacity: 1;\n    }\n  }\n"])), VideoList);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


/***/ }),

/***/ "./src/components/sortable/sortable.tsx":
/*!**********************************************!*\
  !*** ./src/components/sortable/sortable.tsx ***!
  \**********************************************/
/*! exports provided: Sortable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sortable", function() { return Sortable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/sortable/styles.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};


var Sortable = /** @class */ (function (_super) {
    __extends(Sortable, _super);
    function Sortable(props) {
        var _this = _super.call(this, props) || this;
        _this.dragElementIndex = 0;
        _this.onDrop = function (e) {
            //@ts-ignore
            var idStr = e.target.getAttribute("id");
            if (!idStr) {
                e.preventDefault();
                return;
            }
            var ids = idStr.split("_");
            var dropElementIndex = parseInt(ids[ids.length - 1], 10);
            _this.moveElement(_this.dragElementIndex, dropElementIndex);
        };
        _this.onDragStart = function (e, index) {
            _this.dragElementIndex = index;
            _this.setState({
                dragClassIndex: index
            });
        };
        _this.moveElement = function (startIndex, endIndex) {
            var children = __spread(_this.state.children);
            var dragElem = children[startIndex];
            children.splice(startIndex, 1);
            children.splice(endIndex, 0, dragElem);
            _this.setState({
                children: children
            });
        };
        _this.onDragOver = function (e) {
            e.preventDefault();
        };
        _this.onDragEnd = function (e) {
            _this.setState({
                dragClassIndex: null
            });
        };
        _this.state = {
            children: react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(_this.props.children),
            dragClassIndex: null
        };
        return _this;
    }
    Sortable.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["StyledSortable"], { onDrop: this.onDrop, onDragOver: this.onDragOver }, this.state.children.map(function (child, i) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles__WEBPACK_IMPORTED_MODULE_1__["Draggable"], { draggable: true, onDragStart: function (e) { return _this.onDragStart(e, i); }, onDragEnd: _this.onDragEnd, key: "DRAGGABLE__" + i, id: "draggable_" + i, dragging: _this.state.dragClassIndex === i }, react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](child, { id: "draggable_inner_" + i }))); })));
    };
    return Sortable;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/sortable/styles.tsx":
/*!********************************************!*\
  !*** ./src/components/sortable/styles.tsx ***!
  \********************************************/
/*! exports provided: StyledSortable, Draggable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledSortable", function() { return StyledSortable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return Draggable; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled/colors */ "./src/common/styles/colors.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var StyledSortable = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var Draggable = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (props) {
    return props.dragging && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      opacity: 0.3;\n      background: ", ";\n      cursor: pointer;\n    "], ["\n      opacity: 0.3;\n      background: ", ";\n      cursor: pointer;\n    "])), styled_colors__WEBPACK_IMPORTED_MODULE_1__["white"]);
});
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/hooks/useOnDOMChange.ts":
/*!*************************************!*\
  !*** ./src/hooks/useOnDOMChange.ts ***!
  \*************************************/
/*! exports provided: useOnDOMChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOnDOMChange", function() { return useOnDOMChange; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var config = { attributes: true, childList: true, subtree: true };
var useOnDOMChange = function (node, callback) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var observer = new MutationObserver(callback);
        observer.observe(node, config);
        return function () {
            observer.disconnect();
        };
    }, []);
};


/***/ }),

/***/ "./src/hooks/useOutsideClick.ts":
/*!**************************************!*\
  !*** ./src/hooks/useOutsideClick.ts ***!
  \**************************************/
/*! exports provided: useOutsideClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOutsideClick", function() { return useOutsideClick; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useOutsideClick = function (callback) {
    var elemRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var handleOutsideClick = function (event) {
        if (!(elemRef.current && elemRef.current.contains(event.target))) {
            if (callback) {
                callback();
            }
        }
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        //@ts-ignore
        document.addEventListener("click", handleOutsideClick);
        //@ts-ignore
        return function () { return document.removeEventListener("click", handleOutsideClick); };
    });
    return elemRef;
};


/***/ }),

/***/ "./src/hooks/useStateCallback.ts":
/*!***************************************!*\
  !*** ./src/hooks/useStateCallback.ts ***!
  \***************************************/
/*! exports provided: useStateCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStateCallback", function() { return useStateCallback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

var useStateCallback = function (args, callback) {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(args), 2), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (callback)
            return callback();
    }, [args]);
    return [state, setState];
};


/***/ }),

/***/ "./src/hooks/useWillReceiveProps.ts":
/*!******************************************!*\
  !*** ./src/hooks/useWillReceiveProps.ts ***!
  \******************************************/
/*! exports provided: useWillReceiveProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWillReceiveProps", function() { return useWillReceiveProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var equals = function (prev, next) {
    var status = true;
    var keys = Object.keys(prev);
    for (var i = 0; i < keys.length; i += 1) {
        var key = keys[i];
        if (typeof prev[key] === "object") {
            return equals(prev[key], next[key]);
        }
        if (prev[key] != next[key]) {
            status = false;
            break;
        }
    }
    return status;
};
var useWillReceiveProps = function (props, callback) {
    var prevState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(props);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!equals(props, prevState.current)) {
            callback(prevState.current);
            prevState.current = props;
        }
    }, [props]);
    return prevState.current;
};


/***/ }),

/***/ "./src/icons/cross.svg":
/*!*****************************!*\
  !*** ./src/icons/cross.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z",
  fill: "#121313",
  id: "Close"
});

var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null);

var _ref3 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null);

var _ref4 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null);

var _ref5 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null);

var _ref6 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null);

var _ref7 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null);

var SvgCross = function SvgCross(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    enableBackground: "new 0 0 32 32",
    height: "32px",
    id: "\\u0421\\u043B\\u043E\\u0439_1",
    viewBox: "0 0 32 32",
    width: "32px",
    xmlSpace: "preserve"
  }, props), _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgCross);

/***/ }),

/***/ "./src/icons/right-arrow.svg":
/*!***********************************!*\
  !*** ./src/icons/right-arrow.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  clipRule: "evenodd",
  d: "M21.698,15.286l-9.002-8.999  c-0.395-0.394-1.035-0.394-1.431,0c-0.395,0.394-0.395,1.034,0,1.428L19.553,16l-8.287,8.285c-0.395,0.394-0.395,1.034,0,1.429  c0.395,0.394,1.036,0.394,1.431,0l9.002-8.999C22.088,16.325,22.088,15.675,21.698,15.286z",
  fill: "#121313",
  fillRule: "evenodd",
  id: "Chevron_Right"
});

var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null);

var _ref3 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null);

var _ref4 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null);

var _ref5 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null);

var _ref6 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null);

var _ref7 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null);

var SvgRightArrow = function SvgRightArrow(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    enableBackground: "new 0 0 32 32",
    height: "32px",
    id: "\\u0421\\u043B\\u043E\\u0439_1",
    viewBox: "0 0 32 32",
    width: "32px",
    xmlSpace: "preserve"
  }, props), _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgRightArrow);

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! exports provided: AutoComplete, Button, Carousel, DatePicker, Form, InputText, InputCheckbox, InputRadio, InputDate, InputRange, InputColor, Image, Modal, Ratings, Get, Post, Sortable, Tabs, VideoPlayer, Pagination, PopOver, useOutsideClick, useOnDOMChange, useStateCallback, useWillReceiveProps, TagSelect, Pills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AutoComplete_AutoComplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AutoComplete/AutoComplete */ "./src/components/AutoComplete/AutoComplete.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoComplete", function() { return _components_AutoComplete_AutoComplete__WEBPACK_IMPORTED_MODULE_0__["AutoComplete"]; });

/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Button/Button */ "./src/components/Button/Button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _components_Button_Button__WEBPACK_IMPORTED_MODULE_1__["Button"]; });

/* harmony import */ var _components_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Carousel/Carousel */ "./src/components/Carousel/Carousel.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return _components_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"]; });

/* harmony import */ var _components_DatePicker_DatePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DatePicker/DatePicker */ "./src/components/DatePicker/DatePicker.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return _components_DatePicker_DatePicker__WEBPACK_IMPORTED_MODULE_3__["DatePicker"]; });

/* harmony import */ var _components_Form_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Form/Form */ "./src/components/Form/Form.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _components_Form_Form__WEBPACK_IMPORTED_MODULE_4__["Form"]; });

/* harmony import */ var _components_Form_InputText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Form/InputText */ "./src/components/Form/InputText.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputText", function() { return _components_Form_InputText__WEBPACK_IMPORTED_MODULE_5__["InputText"]; });

/* harmony import */ var _components_Form_InputCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Form/InputCheckbox */ "./src/components/Form/InputCheckbox.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputCheckbox", function() { return _components_Form_InputCheckbox__WEBPACK_IMPORTED_MODULE_6__["InputCheckbox"]; });

/* harmony import */ var _components_Form_InputRadio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Form/InputRadio */ "./src/components/Form/InputRadio.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputRadio", function() { return _components_Form_InputRadio__WEBPACK_IMPORTED_MODULE_7__["InputRadio"]; });

/* harmony import */ var _components_Form_InputDate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Form/InputDate */ "./src/components/Form/InputDate.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputDate", function() { return _components_Form_InputDate__WEBPACK_IMPORTED_MODULE_8__["InputDate"]; });

/* harmony import */ var _components_Form_InputRange__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Form/InputRange */ "./src/components/Form/InputRange.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputRange", function() { return _components_Form_InputRange__WEBPACK_IMPORTED_MODULE_9__["InputRange"]; });

/* harmony import */ var _components_Form_InputColor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Form/InputColor */ "./src/components/Form/InputColor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputColor", function() { return _components_Form_InputColor__WEBPACK_IMPORTED_MODULE_10__["InputColor"]; });

/* harmony import */ var _components_Image_Image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Image/Image */ "./src/components/Image/Image.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _components_Image_Image__WEBPACK_IMPORTED_MODULE_11__["Image"]; });

/* harmony import */ var _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Modal/Modal */ "./src/components/Modal/Modal.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_12__["Modal"]; });

/* harmony import */ var _components_Ratings_Ratings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Ratings/Ratings */ "./src/components/Ratings/Ratings.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ratings", function() { return _components_Ratings_Ratings__WEBPACK_IMPORTED_MODULE_13__["Ratings"]; });

/* harmony import */ var _components_Restful_Get__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/Restful/Get */ "./src/components/Restful/Get.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Get", function() { return _components_Restful_Get__WEBPACK_IMPORTED_MODULE_14__["Get"]; });

/* harmony import */ var _components_Restful_Post__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/Restful/Post */ "./src/components/Restful/Post.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return _components_Restful_Post__WEBPACK_IMPORTED_MODULE_15__["Post"]; });

/* harmony import */ var _components_sortable_sortable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/sortable/sortable */ "./src/components/sortable/sortable.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sortable", function() { return _components_sortable_sortable__WEBPACK_IMPORTED_MODULE_16__["Sortable"]; });

/* harmony import */ var _components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/Tabs/Tabs */ "./src/components/Tabs/Tabs.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return _components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_17__["Tabs"]; });

/* harmony import */ var _components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/VideoPlayer/VideoPlayer */ "./src/components/VideoPlayer/VideoPlayer.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoPlayer", function() { return _components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_18__["VideoPlayer"]; });

/* harmony import */ var _components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/Pagination/Pagination */ "./src/components/Pagination/Pagination.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return _components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_19__["Pagination"]; });

/* harmony import */ var _components_PopOver_PopOver__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/PopOver/PopOver */ "./src/components/PopOver/PopOver.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopOver", function() { return _components_PopOver_PopOver__WEBPACK_IMPORTED_MODULE_20__["PopOver"]; });

/* harmony import */ var _components_Pills_Pills__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/Pills/Pills */ "./src/components/Pills/Pills.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pills", function() { return _components_Pills_Pills__WEBPACK_IMPORTED_MODULE_21__["Pills"]; });

/* harmony import */ var _components_TagSelect_TagSelect__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/TagSelect/TagSelect */ "./src/components/TagSelect/TagSelect.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagSelect", function() { return _components_TagSelect_TagSelect__WEBPACK_IMPORTED_MODULE_22__["TagSelect"]; });

/* harmony import */ var _hooks_useOnDOMChange__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./hooks/useOnDOMChange */ "./src/hooks/useOnDOMChange.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOnDOMChange", function() { return _hooks_useOnDOMChange__WEBPACK_IMPORTED_MODULE_23__["useOnDOMChange"]; });

/* harmony import */ var _hooks_useOutsideClick__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./hooks/useOutsideClick */ "./src/hooks/useOutsideClick.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOutsideClick", function() { return _hooks_useOutsideClick__WEBPACK_IMPORTED_MODULE_24__["useOutsideClick"]; });

/* harmony import */ var _hooks_useStateCallback__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./hooks/useStateCallback */ "./src/hooks/useStateCallback.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStateCallback", function() { return _hooks_useStateCallback__WEBPACK_IMPORTED_MODULE_25__["useStateCallback"]; });

/* harmony import */ var _hooks_useWillReceiveProps__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./hooks/useWillReceiveProps */ "./src/hooks/useWillReceiveProps.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWillReceiveProps", function() { return _hooks_useWillReceiveProps__WEBPACK_IMPORTED_MODULE_26__["useWillReceiveProps"]; });































/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./config/polyfills.js ./src/index.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/jp/workspace/react-compound-js/config/polyfills.js */"./config/polyfills.js");
module.exports = __webpack_require__(/*! /Users/jp/workspace/react-compound-js/src/index.tsx */"./src/index.tsx");


/***/ })

/******/ });
});