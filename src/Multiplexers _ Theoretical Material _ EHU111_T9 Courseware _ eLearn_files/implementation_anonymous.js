!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=29)}({0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){var e=this;this._scrollBarWidth=0,this.createEvent=function(t,e,n,o,i){var r=null;n=n||!1,o=o||!1,i=i||void 0;try{r=new CustomEvent(e,{bubbles:n,cancelable:o,detail:i})}catch(t){(r=document.createEvent("Event")).initEvent(e,n,o),r.detail=i}t.dispatchEvent(r)},this.hasClassName=function(t,n){if(Array.isArray(n)){for(var o=!1,i=0;!o&&i<n.length;i++)o=e.hasClassName(t,n[i]);return o}return t.classList&&"object"!=typeof t.classList?t.classList.contains(n):String(t.className).split(" ").indexOf(n)>-1},this.getCookie=function(t){var e=document.cookie.match(new RegExp("(?:^|; )"+t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return e?decodeURIComponent(e[1]):void 0},this.setCookie=function(t,e,n){var o=(n=n||{}).expires;if("number"==typeof o&&o){var i=new Date;i.setTime(i.getTime()+1e3*o),o=n.expires=i}o&&o.toUTCString&&(n.expires=o.toUTCString());var r=t+"="+(e=encodeURIComponent(e));for(var s in n){r+="; "+s;var u=n[s];!0!==u&&(r+="="+u)}document.cookie=r},this.deleteCookie=function(t){e.setCookie(t,"",{expires:-1})},this.windowHasScrollbar=function(){if((window.scrollY||document.documentElement.scrollTop)>0)return!0;if("number"==typeof window.innerWidth)return window.innerWidth>document.documentElement.clientWidth;var t,e,n=document.documentElement||document.body;void 0!==n.currentStyle&&(t=n.currentStyle.overflow),t=t||window.getComputedStyle(n,"").overflow,void 0!==n.currentStyle&&(e=n.currentStyle.overflowY),e=e||window.getComputedStyle(n,"").overflowY;var o=n.scrollHeight>n.clientHeight,i=/^(visible|auto)$/.test(t)||/^(visible|auto)$/.test(e);return o&&i||("scroll"===t||"scroll"===e)},this.getScrollBarWidth=function(){if(e._scrollBarWidth>0)return e._scrollBarWidth;var t=document.createElement("div");t.style.width="100px",t.style.height="100px",t.style.overflow="hidden",t.style.visibility="hidden",t.innerHTML="&nbsp;",document.body.appendChild(t);var n=t.offsetWidth;t.style.overflow="scroll";var o=t.offsetWidth;return n==o&&(o=t.clientWidth),document.body.removeChild(t),e._scrollBarWidth=n-o,e._scrollBarWidth},this.itIsInternetExplorer=function(){var t=window.navigator.userAgent;return!!(t.indexOf("MSIE ")>0||t.match(/Trident.*rv\:11\./)||t.match(/Edge\/\d./))},this.ajaxPost=function(e){var n=e.url,o=e.data,i=e.success,r=e.fail,s=e.always,u=new("onload"in new XMLHttpRequest?XMLHttpRequest:XDomainRequest);u.open("POST",n,!0),u.withCredentials=!0,u.setRequestHeader("Content-Type","application/x-www-form-urlencoded");var a=function(t){"function"==typeof r&&r(t,u.status)};u.onload=function(){if(200==this.status){var t=JSON.parse(this.response);!0===t.hasError?a(t.error):(e=t.result,"function"==typeof i&&i(e,u.status))}else a(this.response);var e},u.onerror=function(){a(this.response)},u.onloadend=function(){"function"==typeof s&&s(u.status)};var l=t.objectToPostString(o);return u.send(l),u},this.ajaxGet=function(e){var n=e.url,o=e.data,i=e.success,r=e.fail,s=e.always;n+="?"+t.objectToPostString(o);var u=new("onload"in new XMLHttpRequest?XMLHttpRequest:XDomainRequest);u.open("GET",n,!0),u.withCredentials=!0,u.setRequestHeader("Content-Type","application/json");var a=function(t){"function"==typeof r&&r(t,u.status)};return u.onload=function(){if(200==this.status){var t=JSON.parse(this.response);!0===t.hasError?a(t.error):(e=t.result,"function"==typeof i&&i(e,u.status))}else a(this.response);var e},u.onerror=function(){a(this.response)},u.onloadend=function(){"function"==typeof s&&s(u.status)},u.send(),u},this.ajaxGetHtml=function(e){var n=e.url,o=e.data,i=e.success,r=e.fail,s=e.always;n+="?"+t.objectToPostString(o);var u=new("onload"in new XMLHttpRequest?XMLHttpRequest:XDomainRequest);u.open("GET",n,!0),u.withCredentials=!0,u.setRequestHeader("Content-Type","text/html");var a=function(t){"function"==typeof r&&r(t,u.status)};return u.onload=function(){var t;this.status>=200&&this.status<300?(t=this.response,"function"==typeof i&&i(t,u.status)):a(this.response)},u.onerror=function(){a(this.response)},u.onloadend=function(){"function"==typeof s&&s(u.status)},u.send(),u},this.getHtmlAttribute=function(t,e,n){var o=t.attributes[e];return o?o.value:n||null},this.mapping=function(t,e){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&Object.prototype.hasOwnProperty.call(e,n)&&(e[n]=t[n])},this.mappingForce=function(t,e){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},this.getProtocolHostPort=function(){var t=window.location.href.split("/",3);return t[0]+"//"+t[2]},this.getWindowSize=function(){var t=window,e="inner";return"innerWidth"in window||(e="client",t=document.documentElement||document.body),{width:t[e+"Width"],height:t[e+"Height"]}},this.getRandomInt=function(t,e){return Math.floor(Math.random()*(e-t))+t},this.htmlDecode=function(t){var e=document.createElement("textarea");return e.innerHTML=t,e.innerText},this.createElements=function(e){var n=document.createElement("div");return n.innerHTML=t.prototype.htmlDecode(e),n.children},this.getGetFormValue=function(e,n){var o=e.querySelectorAll("input[name="+n+"]"),i=function(e){return"radio"==e.type||"checkbox"==e.type?e.checked?t.prototype.getHtmlAttribute(e,"value",null):null:t.prototype.getHtmlAttribute(e,"value",null)};if(0==o.length)return null;if(1==o.length)return i(o[0]);for(var r=[],s=0;s<o.length;s++){var u=i(o[s]);null!=u&&r.push(u)}return r},this.getTransitionEventName=function(t){var e,n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(void 0!==t.style[e])return n[e];return null}}return t.objectToPostString=function(t){var e="",n=function(t,n){e+=t+"="+n+"&"};for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=t[o];if(Array.isArray(i))for(var r=0;r<i.length;r++)n(o,i[r]);else n(o,i)}return e.length>1&&(e=e.substring(0,e.length-1)),e},t}();e.default=o},13:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=function(){function t(){var t,e,n,i=this;this.globalMenuObject=null===(t=window.EpamServices)||void 0===t?void 0:t.globalMenu,this.menuSettings=null===(e=window.EpamServices)||void 0===e?void 0:e._internal.globalMenuSettings,this.authUtil=null===(n=window.EpamServices)||void 0===n?void 0:n._internal.auth,this.baseUrl=this.globalMenuObject._getBaseUrl(),this.frame=null,this.utils=new o.default,this.menuButtons=[],this.menuUrlQuery="/home/publicmenu",this.createFrameOfMenu=function(){if(null==i.frame){var t=i.utils.getProtocolHostPort(),e=encodeURIComponent(t);i.frame=i.globalMenuObject._showFrame(i.menuUrlQuery+"?referrer="+e,i.closeFrameCallback)}},this.closeFrameCallback=function(){i.frame=null},this.show=function(){i.globalMenuObject._showWrapper(),i.menuSettings.noAuth?i.createFrameOfMenu():i.utils.ajaxGet({url:i.baseUrl+"/api/users/me",data:null,success:function(){return i.createFrameOfMenu()},fail:function(t,e){401!==e?console.log(t):i.globalMenuObject.showNeedAuthMessage()}})},this.hide=function(){i.frame&&i.globalMenuObject._hideFrame(i.closeFrameCallback)},this.isOpen=function(){return null!=i.frame},this.getMenuButtonIndexByElement=function(t){for(var e=-1,n=i.menuButtons,o=0;o<n.length&&-1==e;o++){n[o].btnElement==t&&(e=o)}return e},this.addMenuButtons=function(t){null!=t&&-1==i.getMenuButtonIndexByElement(t)&&i.menuButtons.push({btnElement:t,counter:null})},this.setMenuButtonAdditionStyle=function(t){var e=getComputedStyle(t),n=e.position;-1==["absolute","fixed","relative"].indexOf(n)&&(t.style.position="relative");["inline"].indexOf(e.display)>=0&&(t.style.display="inline-block")},this.setAllMenuButtonsAdditionStyle=function(){for(var t=0;t<i.menuButtons.length;t++){var e=i.menuButtons[t].btnElement;i.setMenuButtonAdditionStyle(e)}},this.initMenuButtons=function(){var t=document.getElementById("global_menu_toggle");null!=t&&(i.addMenuButtons(t),i.setMenuButtonAdditionStyle(t));for(var e=document.getElementsByClassName("epam-global-menu"),n=0;n<e.length;n++){var o=e[n];i.addMenuButtons(o),i.setMenuButtonAdditionStyle(o)}},this.getLocation=function(t){var e=document.createElement("a");return e.href=t,e},this.initUI=function(){i.initMenuButtons()},this.listenerWindowMessages=function(t){t.origin==i.baseUrl&&i.applyWindowMessage(t.data)},this.globalMenuObject.show=this.show.bind(this),this.globalMenuObject.hide=this.hide.bind(this),this.globalMenuObject.isOpen=this.isOpen.bind(this)}return t.prototype.applyWindowMessage=function(t){return"close"===t.command?(this.globalMenuObject.hide(),!0):"redirect"===t.command&&(t.args&&t.args.href&&(window.location=t.args.href),!0)},t.prototype.init=function(){"complete"==document.readyState||"loaded"==document.readyState?this.initUI():document.addEventListener("DOMContentLoaded",this.initUI),window.addEventListener("message",this.listenerWindowMessages)},t}();e.default=i},14:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2);e.default=function(){var t;(null===(t=window.EpamServices)||void 0===t?void 0:t._internal.inAppHelp.isEnabled)&&o.default("bundle_global_ask_button.js")}},2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t){var e,n=null===(e=window.EpamServices)||void 0===e?void 0:e._internal.globalMenuSettings.baseUrl,o=document.createElement("script");o.setAttribute("type","text/javascript"),o.setAttribute("async","async"),o.setAttribute("src",n+"/scripts/"+t+"?v=1674587866600"),document.body.appendChild(o)}},29:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(13),i=n(14);(new o.default).init(),i.default()}});
