!function(t,e){for(var n in e)t[n]=e[n]}(window,webpackJsonp([29,27,28,30],{"./common/static/xmodule/modules/js/001-3ed86006526f75d6c844739193a84c11.js":function(t,e,n){(function(t){(function(){(function(){this.HTMLModule=function(){function e(e){this.element=e,this.el=t(this.element),JavascriptLoader.executeModuleScripts(this.el),Collapsible.setCollapsibles(this.el),"undefined"!=typeof MathJax&&null!==MathJax&&MathJax.Hub.Queue(["Typeset",MathJax.Hub,this.el[0]]),"undefined"!=typeof setupFullScreenModal&&null!==setupFullScreenModal&&setupFullScreenModal()}return e.prototype.$=function(e){return t(e,this.el)},e}()}).call(this)}).call(window)}).call(e,n(0))},"./common/static/xmodule/modules/js/002-3918b2d4f383c04fed8227cc9f523d6e.js":function(t,e,n){(function(t){(function(){(function(){"use strict";this.JavascriptLoader=function(){function e(){}return e.executeModuleScripts=function(e,n){var i,o,r,s,a;return n||(n=null),a=e.find(".script_placeholder"),0===a.length?(null!==n&&n(),[]):(o=function(){var t,e,n;for(n=[],t=1,e=a.length;e>=1?t<=e:t>=e;e>=1?++t:--t)n.push(!1);return n}(),i=!1,r=function(t){return function(){var e,r,s;for(e=!0,o[t]=!0,r=0,s=o.length;r<s;r++)if(!o[r]){e=!1;break}if(e&&!i&&(i=!0,null!==n))return n()}},s={},a.each(function(e,n){var i,o;return o=t(n).attr("data-src"),o in s?r(e)():(s[o]=!0,i=document.createElement("script"),i.setAttribute("src",o),i.setAttribute("type","text/javascript"),i.onload=r(e),t("head")[0].appendChild(i)),t(n).remove()}))},e}()}).call(this)}).call(window)}).call(e,n(0))},"./common/static/xmodule/modules/js/003-b3206f2283964743c4772b9d72c67d64.js":function(t,e,n){(function(t,e){(function(){(function(n){"use strict";function i(n){var i,o,r;o='<a href="#" class="full full-top">See full output</a>',i='<a href="#" class="full full-bottom">See full output</a>',n.find(".longform").hide(),n.find(".shortform").append(o,i),r=n.find(".shortform-custom"),r.each(function(n,i){var o,r;r=t(i).data("open-text"),o=t(i).data("close-text"),e.append(t(i),e.joinHtml(e.HTML("<a href='#' class='full-custom'>"),gettext(r),e.HTML("</a>"))),t(i).find(".full-custom").click(function(t){Collapsible.toggleFull(t,r,o)})}),n.find(".collapsible header + section").hide(),n.find(".full").click(function(t){Collapsible.toggleFull(t,"See full output","Hide output")}),n.find(".collapsible header a").click(Collapsible.toggleHint)}function o(e,n,i){var o,r,s;e.preventDefault(),s=t(e.target).parent(),s.siblings().slideToggle(),s.parent().toggleClass("open"),r=t(e.target).text()===n?i:n,o=t(e.target).hasClass("full")?s.find(".full"):t(e.target),o.text(r)}function r(e){e.preventDefault(),t(e.target).parent().siblings().slideToggle(),t(e.target).parent().parent().toggleClass("open")}this.Collapsible={setCollapsibles:i,toggleFull:o,toggleHint:r}}).call(this)}).call(window)}).call(e,n(0),n("./node_modules/edx-ui-toolkit/src/js/utils/html-utils.js"))},"./common/static/xmodule/modules/js/004-866df6ea65aa331217cdf46290ead28e.js":function(t,e,n){(function(t,e){(function(){}).call(window)}).call(e,n(0),n(1))},"./common/static/xmodule/modules/js/005-26caba6f71877f63a7dd4f6796109bf6.js":function(t,e,n){var i,o,r,s,a,u,o,c,o,i,p,l,d,f,o,h,o,v,o,g,o,r,m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};(function(){/*!
   * Draggabilly PACKAGED v1.2.4
   * Make that shiz draggable
   * http://draggabilly.desandro.com
   * MIT license
   */
!function(s){function a(){}function u(t){function e(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function n(e,n){t.fn[e]=function(o){if("string"==typeof o){for(var r=c.call(arguments,1),s=0,a=this.length;s<a;s++){var u=this[s],p=t.data(u,e);if(p)if(t.isFunction(p[o])&&"_"!==o.charAt(0)){var l=p[o].apply(p,r);if(void 0!==l)return l}else i("no such method '"+o+"' for "+e+" instance");else i("cannot call methods on "+e+" prior to initialization; attempted to call '"+o+"'")}return this}return this.each(function(){var i=t.data(this,e);i?(i.option(o),i._init()):(i=new n(this,o),t.data(this,e,i))})}}if(t){var i="undefined"==typeof console?a:function(t){console.error(t)};return t.bridget=function(t,i){e(i),n(t,i)},t.bridget}}var c=Array.prototype.slice;o=[n(0)],i=u,void 0!==(r="function"==typeof i?i.apply(e,o):i)&&(t.exports=r)}(window),/*!
   * classie v1.0.1
   * class helper functions
   * from bonzo https://github.com/ded/bonzo
   * MIT license
   * 
   * classie.has( elem, 'my-class' ) -> true/false
   * classie.add( elem, 'my-new-class' )
   * classie.remove( elem, 'my-unwanted-class' )
   * classie.toggle( elem, 'my-class' )
   */
function(t){function e(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}function i(t,e){(o(t,e)?c:r)(t,e)}var o,r,c;"classList"in document.documentElement?(o=function(t,e){return t.classList.contains(e)},r=function(t,e){t.classList.add(e)},c=function(t,e){t.classList.remove(e)}):(o=function(t,n){return e(n).test(t.className)},r=function(t,e){o(t,e)||(t.className=t.className+" "+e)},c=function(t,n){t.className=t.className.replace(e(n)," ")});var p={hasClass:o,addClass:r,removeClass:c,toggleClass:i,has:o,add:r,remove:c,toggle:i};a=p,u={id:"classie/classie",exports:{},loaded:!1},s="function"==typeof a?a.call(u.exports,n,u.exports,u):a,u.loaded=!0,void 0===s&&(s=u.exports)}(window),/*!
   * getStyleProperty v1.0.4
   * original by kangax
   * http://perfectionkills.com/feature-testing-css-properties/
   * MIT license
   */
function(t){function n(t){if(t){if("string"==typeof r[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,n=0,o=i.length;n<o;n++)if(e=i[n]+t,"string"==typeof r[e])return e}}var i="Webkit Moz ms Ms O".split(" "),r=document.documentElement.style;o=[],c=function(){return n}.apply(e,o)}(window),/*!
   * getSize v1.2.2
   * measure size of elements
   * MIT license
   */
function(t,n){function r(t){var e=parseFloat(t);return-1===t.indexOf("%")&&!isNaN(e)&&e}function s(){}function a(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,n=d.length;e<n;e++){t[d[e]]=0}return t}function u(e){function n(){if(!p){p=!0;var n=t.getComputedStyle;if(s=function(){var t=n?function(t){return n(t,null)}:function(t){return t.currentStyle};return function(e){var n=t(e);return n||l("Style returned "+n+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),n}}(),u=e("boxSizing")){var i=document.createElement("div");i.style.width="200px",i.style.padding="1px 2px 3px 4px",i.style.borderStyle="solid",i.style.borderWidth="1px 2px 3px 4px",i.style[u]="border-box";var o=document.body||document.documentElement;o.appendChild(i);var a=s(i);c=200===r(a.width),o.removeChild(i)}}}function i(t){if(n(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"===(void 0===t?"undefined":m(t))&&t.nodeType){var e=s(t);if("none"===e.display)return a();var i={};i.width=t.offsetWidth,i.height=t.offsetHeight;for(var p=i.isBorderBox=!(!u||!e[u]||"border-box"!==e[u]),l=0,f=d.length;l<f;l++){var h=d[l],v=e[h];v=o(t,v);var g=parseFloat(v);i[h]=isNaN(g)?0:g}var y=i.paddingLeft+i.paddingRight,b=i.paddingTop+i.paddingBottom,E=i.marginLeft+i.marginRight,x=i.marginTop+i.marginBottom,w=i.borderLeftWidth+i.borderRightWidth,P=i.borderTopWidth+i.borderBottomWidth,_=p&&c,S=r(e.width);!1!==S&&(i.width=S+(_?0:y+w));var M=r(e.height);return!1!==M&&(i.height=M+(_?0:b+P)),i.innerWidth=i.width-(y+w),i.innerHeight=i.height-(b+P),i.outerWidth=i.width+E,i.outerHeight=i.height+x,i}}function o(e,n){if(t.getComputedStyle||-1===n.indexOf("%"))return n;var i=e.style,o=i.left,r=e.runtimeStyle,s=r&&r.left;return s&&(r.left=e.currentStyle.left),i.left=n,n=i.pixelLeft,i.left=o,s&&(r.left=s),n}var s,u,c,p=!1;return i}var l="undefined"==typeof console?s:function(t){console.error(t)},d=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];o=[c],i=u,p="function"==typeof i?i.apply(e,o):i}(window),/*!
   * eventie v1.0.6
   * event binding helper
   *   eventie.bind( elem, 'click', myFn )
   *   eventie.unbind( elem, 'click', myFn )
   * MIT license
   */
function(t){function e(e){var n=t.event;return n.target=n.target||n.srcElement||e,n}var i=document.documentElement,o=function(){};i.addEventListener?o=function(t,e,n){t.addEventListener(e,n,!1)}:i.attachEvent&&(o=function(t,n,i){t[n+i]=i.handleEvent?function(){var n=e(t);i.handleEvent.call(i,n)}:function(){var n=e(t);i.call(t,n)},t.attachEvent("on"+n,t[n+i])});var r=function(){};i.removeEventListener?r=function(t,e,n){t.removeEventListener(e,n,!1)}:i.detachEvent&&(r=function(t,e,n){t.detachEvent("on"+e,t[e+n]);try{delete t[e+n]}catch(i){t[e+n]=void 0}});var s={bind:o,unbind:r};d=s,f={id:"eventie/eventie",exports:{},loaded:!1},l="function"==typeof d?d.call(f.exports,n,f.exports,f):d,f.loaded=!0,void 0===l&&(l=f.exports)}(window),function(){function t(){}function e(t,e){for(var n=t.length;n--;)if(t[n].listener===e)return n;return-1}function n(t){return function(){return this[t].apply(this,arguments)}}var i=t.prototype,r=this,s=r.EventEmitter;i.getListeners=function(t){var e,n,i=this._getEvents();if(t instanceof RegExp){e={};for(n in i)i.hasOwnProperty(n)&&t.test(n)&&(e[n]=i[n])}else e=i[t]||(i[t]=[]);return e},i.flattenListeners=function(t){var e,n=[];for(e=0;e<t.length;e+=1)n.push(t[e].listener);return n},i.getListenersAsObject=function(t){var e,n=this.getListeners(t);return n instanceof Array&&(e={},e[t]=n),e||n},i.addListener=function(t,n){var i,o=this.getListenersAsObject(t),r="object"===(void 0===n?"undefined":m(n));for(i in o)o.hasOwnProperty(i)&&-1===e(o[i],n)&&o[i].push(r?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(t){return this.getListeners(t),this},i.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},i.removeListener=function(t,n){var i,o,r=this.getListenersAsObject(t);for(o in r)r.hasOwnProperty(o)&&-1!==(i=e(r[o],n))&&r[o].splice(i,1);return this},i.off=n("removeListener"),i.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},i.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},i.manipulateListeners=function(t,e,n){var i,o,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!==(void 0===e?"undefined":m(e))||e instanceof RegExp)for(i=n.length;i--;)r.call(this,e,n[i]);else for(i in e)e.hasOwnProperty(i)&&(o=e[i])&&("function"==typeof o?r.call(this,i,o):s.call(this,i,o));return this},i.removeEvent=function(t){var e,n=void 0===t?"undefined":m(t),i=this._getEvents();if("string"===n)delete i[t];else if(t instanceof RegExp)for(e in i)i.hasOwnProperty(e)&&t.test(e)&&delete i[e];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(t,e){var n,i,o,r=this.getListenersAsObject(t);for(o in r)if(r.hasOwnProperty(o))for(i=r[o].length;i--;)n=r[o][i],!0===n.once&&this.removeListener(t,n.listener),n.listener.apply(this,e||[])===this._getOnceReturnValue()&&this.removeListener(t,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},i.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},i._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},i._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return r.EventEmitter=s,t},o=[],h=function(){return t}.apply(r,o)}.call(this),/*!
   * Unipointer v1.1.0
   * base class for doing one thing with pointer event
   * MIT license
   */
function(t,n){o=[h,l],v=function(e,i){return n(t,e,i)}.apply(e,o)}(window,function(t,e,n){function i(){}function o(){}o.prototype=new e,o.prototype.bindStartEvent=function(t){this._bindStartEvent(t,!0)},o.prototype.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},o.prototype._bindStartEvent=function(e,i){i=void 0===i||!!i;var o=i?"bind":"unbind";t.navigator.pointerEnabled?n[o](e,"pointerdown",this):t.navigator.msPointerEnabled?n[o](e,"MSPointerDown",this):(n[o](e,"mousedown",this),n[o](e,"touchstart",this))},o.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},o.prototype.getTouch=function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e];if(i.identifier==this.pointerIdentifier)return i}},o.prototype.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},o.prototype.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},o.prototype.onMSPointerDown=o.prototype.onpointerdown=function(t){this._pointerDown(t,t)},o.prototype._pointerDown=function(t,e){this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},o.prototype.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var r={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"],MSPointerDown:["MSPointerMove","MSPointerUp","MSPointerCancel"]};return o.prototype._bindPostStartEvents=function(e){if(e){for(var i=r[e.type],o=e.preventDefault?t:document,s=0,a=i.length;s<a;s++){var u=i[s];n.bind(o,u,this)}this._boundPointerEvents={events:i,node:o}}},o.prototype._unbindPostStartEvents=function(){var t=this._boundPointerEvents;if(t&&t.events){for(var e=0,i=t.events.length;e<i;e++){var o=t.events[e];n.unbind(t.node,o,this)}delete this._boundPointerEvents}},o.prototype.onmousemove=function(t){this._pointerMove(t,t)},o.prototype.onMSPointerMove=o.prototype.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},o.prototype.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},o.prototype._pointerMove=function(t,e){this.pointerMove(t,e)},o.prototype.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},o.prototype.onmouseup=function(t){this._pointerUp(t,t)},o.prototype.onMSPointerUp=o.prototype.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},o.prototype.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},o.prototype._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},o.prototype.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},o.prototype._pointerDone=function(){this.isPointerDown=!1,delete this.pointerIdentifier,this._unbindPostStartEvents(),this.pointerDone()},o.prototype.pointerDone=i,o.prototype.onMSPointerCancel=o.prototype.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},o.prototype.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},o.prototype._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},o.prototype.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},o.getPointerPoint=function(t){return{x:void 0!==t.pageX?t.pageX:t.clientX,y:void 0!==t.pageY?t.pageY:t.clientY}},o}),/*!
   * Unidragger v1.1.0
   * Draggable base class
   * MIT license
   */
function(t,n){o=[l,v],g=function(e,i){return n(t,e,i)}.apply(e,o)}(window,function(t,e,n){function i(){}function o(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function r(t){for(;t!=document.body;)if(t=t.parentNode,"A"==t.nodeName)return t}function s(){}function a(){return!1}s.prototype=new n,s.prototype.bindHandles=function(){this._bindHandles(!0)},s.prototype.unbindHandles=function(){this._bindHandles(!1)};var u=t.navigator;s.prototype._bindHandles=function(t){t=void 0===t||!!t;var n;n=u.pointerEnabled?function(e){e.style.touchAction=t?"none":""}:u.msPointerEnabled?function(e){e.style.msTouchAction=t?"none":""}:function(){t&&p(s)};for(var i=t?"bind":"unbind",o=0,r=this.handles.length;o<r;o++){var s=this.handles[o];this._bindStartEvent(s,t),n(s),e[i](s,"click",this)}};var c="attachEvent"in document.documentElement,p=c?function(t){"IMG"==t.nodeName&&(t.ondragstart=a);for(var e=t.querySelectorAll("img"),n=0,i=e.length;n<i;n++){e[n].ondragstart=a}}:i,l=s.allowTouchstartNodes={INPUT:!0,A:!0,BUTTON:!0,SELECT:!0};return s.prototype.pointerDown=function(t,e){this._dragPointerDown(t,e);var n=document.activeElement;n&&n.blur&&n.blur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])},s.prototype._dragPointerDown=function(t,e){this.pointerDownPoint=n.getPointerPoint(e);var i=t.target.nodeName;"touchstart"==t.type&&(l[i]||r(t.target))||"SELECT"==i||o(t)},s.prototype.pointerMove=function(t,e){var n=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,n]),this._dragMove(t,e,n)},s.prototype._dragPointerMove=function(t,e){var i=n.getPointerPoint(e),o={x:i.x-this.pointerDownPoint.x,y:i.y-this.pointerDownPoint.y};return!this.isDragging&&this.hasDragStarted(o)&&this._dragStart(t,e),o},s.prototype.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3},s.prototype.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},s.prototype._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},s.prototype._dragStart=function(t,e){this.isDragging=!0,this.dragStartPoint=s.getPointerPoint(e),this.isPreventingClicks=!0,this.dragStart(t,e)},s.prototype.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},s.prototype._dragMove=function(t,e,n){this.isDragging&&this.dragMove(t,e,n)},s.prototype.dragMove=function(t,e,n){this.emitEvent("dragMove",[t,e,n])},s.prototype._dragEnd=function(t,e){this.isDragging=!1;var n=this;setTimeout(function(){delete n.isPreventingClicks}),this.dragEnd(t,e)},s.prototype.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},s.prototype.onclick=function(t){this.isPreventingClicks&&o(t)},s.prototype._staticClick=function(t,e){"INPUT"==t.target.nodeName&&"text"==t.target.type&&t.target.focus(),this.staticClick(t,e)},s.prototype.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},s.getPointerPoint=function(t){return{x:void 0!==t.pageX?t.pageX:t.clientX,y:void 0!==t.pageY?t.pageY:t.clientY}},s.getPointerPoint=n.getPointerPoint,s}),/*!
   * Draggabilly v1.2.4
   * Make that shiz draggable
   * http://draggabilly.desandro.com
   * MIT license
   */
function(n,i){o=[s,c,p,g],void 0!==(r=function(t,e,o,r){return i(n,t,e,o,r)}.apply(e,o))&&(t.exports=r)}(window,function(t,e,n,i,o){function r(){}function s(t,e){for(var n in e)t[n]=e[n];return t}function a(t,e){this.element="string"==typeof t?p.querySelector(t):t,w&&(this.$element=w(this.element)),this.options=s({},this.constructor.defaults),this.option(e),this._create()}function u(t,e,n){return n=n||"round",e?Math[n](t/e)*e:t}for(var c,p=t.document,l=p.defaultView,d=l&&l.getComputedStyle?function(t){return l.getComputedStyle(t,null)}:function(t){return t.currentStyle},f="object"==("undefined"==typeof HTMLElement?"undefined":m(HTMLElement))?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==(void 0===t?"undefined":m(t))&&1==t.nodeType&&"string"==typeof t.nodeName},h=0,v="webkit moz ms o".split(" "),g=t.requestAnimationFrame,y=t.cancelAnimationFrame,b=0;b<v.length&&(!g||!y);b++)c=v[b],g=g||t[c+"RequestAnimationFrame"],y=y||t[c+"CancelAnimationFrame"]||t[c+"CancelRequestAnimationFrame"];g&&y||(g=function(e){var n=(new Date).getTime(),i=Math.max(0,16-(n-h)),o=t.setTimeout(function(){e(n+i)},i);return h=n+i,o},y=function(e){t.clearTimeout(e)});var E=n("transform"),x=!!n("perspective"),w=t.jQuery;s(a.prototype,o.prototype),a.defaults={},a.prototype.option=function(t){s(this.options,t)},a.prototype._create=function(){this.position={},this._getPosition(),this.startPoint={x:0,y:0},this.dragPoint={x:0,y:0},this.startPosition=s({},this.position);var t=d(this.element);"relative"!=t.position&&"absolute"!=t.position&&(this.element.style.position="relative"),this.enable(),this.setHandles()},a.prototype.setHandles=function(){this.handles=this.options.handle?this.element.querySelectorAll(this.options.handle):[this.element],this.bindHandles()},a.prototype.dispatchEvent=function(e,n,i){var o=[n].concat(i);this.emitEvent(e,o);var r=t.jQuery;if(r&&this.$element)if(n){var s=r.Event(n);s.type=e,this.$element.trigger(s,i)}else this.$element.trigger(e,i)},a.prototype._getPosition=function(){var t=d(this.element),e=parseInt(t.left,10),n=parseInt(t.top,10);this.position.x=isNaN(e)?0:e,this.position.y=isNaN(n)?0:n,this._addTransformPosition(t)},a.prototype._addTransformPosition=function(t){if(E){var e=t[E];if(0===e.indexOf("matrix")){var n=e.split(","),i=0===e.indexOf("matrix3d")?12:4,o=parseInt(n[i],10),r=parseInt(n[i+1],10);this.position.x+=o,this.position.y+=r}}},a.prototype.pointerDown=function(t,n){this._dragPointerDown(t,n);var i=p.activeElement;i&&i.blur&&i.blur(),this._bindPostStartEvents(t),e.add(this.element,"is-pointer-down"),this.dispatchEvent("pointerDown",t,[n])},a.prototype.pointerMove=function(t,e){var n=this._dragPointerMove(t,e);this.dispatchEvent("pointerMove",t,[e,n]),this._dragMove(t,e,n)},a.prototype.dragStart=function(t,n){this.isEnabled&&(this._getPosition(),this.measureContainment(),this.startPosition.x=this.position.x,this.startPosition.y=this.position.y,this.setLeftTop(),this.dragPoint.x=0,this.dragPoint.y=0,this.isDragging=!0,e.add(this.element,"is-dragging"),this.dispatchEvent("dragStart",t,[n]),this.animate())},a.prototype.measureContainment=function(){var t=this.options.containment;if(t){this.size=i(this.element);var e=this.element.getBoundingClientRect(),n=f(t)?t:"string"==typeof t?p.querySelector(t):this.element.parentNode;this.containerSize=i(n);var o=n.getBoundingClientRect();this.relativeStartPosition={x:e.left-o.left,y:e.top-o.top}}},a.prototype.dragMove=function(t,e,n){if(this.isEnabled){var i=n.x,o=n.y,r=this.options.grid,s=r&&r[0],a=r&&r[1];i=u(i,s),o=u(o,a),i=this.containDrag("x",i,s),o=this.containDrag("y",o,a),i="y"==this.options.axis?0:i,o="x"==this.options.axis?0:o,this.position.x=this.startPosition.x+i,this.position.y=this.startPosition.y+o,this.dragPoint.x=i,this.dragPoint.y=o,this.dispatchEvent("dragMove",t,[e,n])}},a.prototype.containDrag=function(t,e,n){if(!this.options.containment)return e;var i="x"==t?"width":"height",o=this.relativeStartPosition[t],r=u(-o,n,"ceil"),s=this.containerSize[i]-o-this.size[i];return s=u(s,n,"floor"),Math.min(s,Math.max(r,e))},a.prototype.pointerUp=function(t,n){e.remove(this.element,"is-pointer-down"),this.dispatchEvent("pointerUp",t,[n]),this._dragPointerUp(t,n)},a.prototype.dragEnd=function(t,n){this.isEnabled&&(this.isDragging=!1,E&&(this.element.style[E]="",this.setLeftTop()),e.remove(this.element,"is-dragging"),this.dispatchEvent("dragEnd",t,[n]))},a.prototype.animate=function(){if(this.isDragging){this.positionDrag();var t=this;g(function(){t.animate()})}};var P=x?function(t,e){return"translate3d( "+t+"px, "+e+"px, 0)"}:function(t,e){return"translate( "+t+"px, "+e+"px)"};return a.prototype.setLeftTop=function(){this.element.style.left=this.position.x+"px",this.element.style.top=this.position.y+"px"},a.prototype.positionDrag=E?function(){this.element.style[E]=P(this.dragPoint.x,this.dragPoint.y)}:a.prototype.setLeftTop,a.prototype.staticClick=function(t,e){this.dispatchEvent("staticClick",t,[e])},a.prototype.enable=function(){this.isEnabled=!0},a.prototype.disable=function(){this.isEnabled=!1,this.isDragging&&this.dragEnd()},a.prototype.destroy=function(){this.disable(),E&&(this.element.style[E]=""),this.element.style.left="",this.element.style.top="",this.element.style.position="",this.unbindHandles(),this.$element&&this.$element.removeData("draggabilly")},a.prototype._init=r,w&&w.bridget&&w.bridget("draggabilly",a),a})}).call(window)},5:function(t,e,n){n("./common/static/xmodule/modules/js/000-58032517f54c5c1a704a908d850cbe64.js"),n("./common/static/xmodule/modules/js/001-3ed86006526f75d6c844739193a84c11.js"),n("./common/static/xmodule/modules/js/002-3918b2d4f383c04fed8227cc9f523d6e.js"),n("./common/static/xmodule/modules/js/003-b3206f2283964743c4772b9d72c67d64.js"),n("./common/static/xmodule/modules/js/004-866df6ea65aa331217cdf46290ead28e.js"),t.exports=n("./common/static/xmodule/modules/js/005-26caba6f71877f63a7dd4f6796109bf6.js")}},[5]));