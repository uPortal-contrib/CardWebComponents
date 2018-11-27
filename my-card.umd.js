"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}(function(t,n){"object"===("undefined"==typeof exports?"undefined":e(exports))&&"undefined"!=typeof module?n():"function"==typeof define&&define.amd?define(n):n()})(void 0,function(){"use strict";function t(n){return t="function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)},t(n)}function n(e,t,n,a,r,s,l){try{var i=e[s](l),o=i.value}catch(e){return void n(e)}i.done?t(o):Promise.resolve(o).then(a,r)}function a(e){return function(){var t=this,a=arguments;return new Promise(function(r,s){function l(e){n(o,r,s,l,i,"next",e)}function i(e){n(o,r,s,l,i,"throw",e)}var o=e.apply(t,a);l(void 0)})}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n,a=0;a<t.length;a++)n=t[a],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function l(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function u(){return u=p()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=Function.bind.apply(e,r),s=new a;return n&&c(s,n.prototype),s},u.apply(null,arguments)}function h(e){return-1!==Function.toString.call(e).indexOf("[native code]")}function f(e){var t="function"==typeof Map?new Map:void 0;return f=function(e){function n(){return u(e,arguments,d(this).constructor)}if(null===e||!h(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof t){if(t.has(e))return t.get(e);t.set(e,n)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),c(n,e)},f(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(t,n){return n&&("object"===e(n)||"function"==typeof n)?n:g(t)}function b(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}// able to create Custom Elements like components
// including the ability to listen to connect/disconnect
// events via onconnect/ondisconnect attributes
// Components can be created imperatively or declaratively.
// The main difference is that declared components
// will not automatically render on setState(...)
// to simplify state handling on render.
function v(){return this;// this is needed in Edge !!!
}// Component is lazily setup because it needs
// wire mechanism as lazy content
function y(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1],this._=null}// when a wire is inserted, all its nodes will follow
// a basic dictionary used to filter already cached attributes
// while looking for special hyperHTML values.
function k(){}function _(){// when hyper.Component related DOM nodes
// are appended or removed from the live tree
// these might listen to connected/disconnected events
// This utility is in charge of finding all components
// involved in the DOM update/change and dispatch
// related information to them
var e=function(e,n){for(var a,r=new $(n),s=e.length,l=0;l<s;l++)a=e[l],1===a.nodeType&&t(a,r)},t=function e(t,n){Je.has(t)&&t.dispatchEvent(n);for(var a=t.children||ke(t),r=a.length,s=0;s<r;s++)e(a[s],n)};// the way it's done is via the components weak set
// and recursively looking for nested components too
// The MutationObserver is the best way to implement that
// but there is a fallback to deprecated DOMNodeInserted/Removed
// so that even older browsers/engines can help components life-cycle
try{new MutationObserver(function(t){for(var n,a=t.length,r=0;r<a;r++)n=t[r],e(n.removedNodes,"disconnected"),e(n.addedNodes,"connected")}).observe(document,{subtree:!0,childList:!0})}catch(t){document.addEventListener("DOMNodeRemoved",function(t){e([t.target],"disconnected")},!1),document.addEventListener("DOMNodeInserted",function(t){e([t.target],"connected")},!1)}}// are already known to hyperHTML
// better known as hyper.bind(node), the render is
// the main tag function in charge of fully upgrading
// or simply updating, contexts used as hyperHTML targets.
// The `this` context is either a regular DOM node or a fragment.
function N(e){var t=ft.get(this);return t&&t.template===xe(e)?C.apply(t.updates,arguments):x.apply(this,arguments),this}// an upgrade is in charge of collecting template info,
// parse it once, if unknown, to map all interpolations
// as single DOM callbacks, relate such template
// to the current context, and render it after cleaning the context up
function x(e){e=xe(e);var t=gt.get(e)||M.call(this,e),n=_e(this.ownerDocument,t.fragment),a=ut.create(n,t.paths);ft.set(this,{template:e,updates:a}),C.apply(a,arguments),this.textContent="",this.appendChild(n)}// an update simply loops over all mapped DOM operations
function C(){for(var e=arguments.length,t=1;t<e;t++)this[t-1](arguments[t])}// a template can be used to create a document fragment
// aware of all interpolations and with a list
// of paths used to find once those nodes that need updates,
// no matter if these are attributes, text nodes, or regular one
function M(e){var t=[],n=e.join(z).replace(mt,bt),a=ve(this,n);ut.find(a,t,e.slice());var r={fragment:a,paths:t};return gt.set(e,r),r}// some node could be special though, like a custom element
// with a self closing tag, which should work through these changes.
// everything is exported directly or through the
function w(){var e=b(["\n<link rel=\"preload\" href=\"https://use.fontawesome.com/releases/v5.4.2/css/all.css\" as=\"style\" crossorigin=\"anonymous\">\n<link rel=\"preload\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" as=\"style\" crossorigin=\"anonymous\">\n<style lang=\"css\" media=\"all\">\n@import 'https://use.fontawesome.com/releases/v5.4.2/css/all.css';\n@import 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css';\n</style>\n\n\n\n  <div data-magic=\"","\" class=\"card-wrapper\">\n    <div class=\"card radius shadowDepth1\">\n      <div class=\"card__image border-tlr-radius\">\n        <!--<img src=\"csm_hellink_268d15ec81 - Copie.jpg\" alt=\"image\" class=\"border-tlr-radius\" />-->\n        <img src=\"","\" alt=\"\" class=\"border-tlr-radius\" />\n      </div>\n      <div class=\"card__content card__padding\">\n        <div id=\"what-is-uportal-i18n-list\" class=\"card__share\" tabindex=\"-1\" role=\"menu\">\n          <div class=\"card__social card__fix--width\">\n            <a role=\"menuitem\" id=\"","\" tabindex=\"0\" class=\"","\" href=\"","\" title=\"","\" aria-label=\"","\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"","\"></span></a>\n            <a role=\"menuitem\" id=\"","\" tabindex=\"0\" class=\"","\" href=\"","\" title=\"","\" aria-label=\"","\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"","\"></span></a>\n            <a role=\"menuitem\" id=\"","\" tabindex=\"0\" class=\"","\" href=\"","\" title=\"","\" aria-label=\"","\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"","\"></span></a>\n          </div>\n          <a class=\"share-toggle share-icon\"  onclick=\"","\" href=\"javascript:void(0);\" aria-controls=\"what-is-uportal-i18n-list\" aria-expanded=\"false\" aria-haspopup=\"true\" aria-label=\"Menu\"><i class=\"fa fa-ellipsis-v\"></i></a>\n\n\n        </div>\n        <div class=\"card__meta\">\n          <i class=\"fa fa-tags\" aria-label=\"Tag\" lang=\"en\"></i>&nbsp;:\n          <span>","</span>&nbsp;\n          <time>","</time>\n        </div>\n        <div class=\"card__article\">\n          <h2>","</h2>\n          <div>","</div>\n        </div>\n      </div>\n      <div class=\"card__action\">\n        <a href=\"","\" class=\"","\" title=\"","\" rel=\"noopener noreferrer\">","&nbsp;<span class=\"","\" aria-hidden=\"true\"></span></a>&nbsp;\n        <a href=\"","\" class=\"","\" title=\"","\" rel=\"noopener noreferrer\">","&nbsp;<span class=\"","\" aria-hidden=\"true\"></span></a>\n      </div>\n    </div>\n  </div>\n\n"]);return w=function(){return e},e}/**
  /* Define Class of the webcomponent myCard
  */var E=document.defaultView,o=1,S=8,A=11,j=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,L="ownerSVGElement",T="http://www.w3.org/2000/svg",O="connected",P=/^(?:style|textarea)$/i,D="_hyper: "+(0|Math.random()*new Date)+";",z="<!--"+D+"-->",$=E.Event;// Node.CONSTANTS
// 'cause some engine has no global Node defined
// (i.e. Node, NativeScript, basicHTML ... )
try{new $("Event")}catch(e){$=function(t){var n=document.createEvent("Event");return n.initEvent(t,!1,!1),n}}/* istanbul ignore next */var H=E.Map||function(){var e=[],t=[];return{get:function(n){return t[e.indexOf(n)]},set:function(n,a){t[e.push(n)-1]=a}}},I=0,F=E.WeakMap||function(){var e=D+I++;return{get:function(t){return t[e]},set:function(t,n){Object.defineProperty(t,e,{configurable:!0,value:n})}}},B=E.WeakSet||function(){var e=new F;return{add:function(t){e.set(t,!0)},has:function(t){return!0===e.get(t)}}},R=Array.isArray||function(e){return function(t){return"[object Array]"===e.call(t)}}({}.toString),q=D.trim||function(){return this.replace(/^\s+|\s+$/g,"")},W=function(e,t){var n="_"+e+"$";return{get:function(){return this[n]||U(this,n,t.call(this,e))},set:function(e){U(this,n,e)}}},U=function(e,t,n){return Object.defineProperty(e,t,{configurable:!0,value:"function"==typeof n?function(){return e._wire$=n.apply(this,arguments)}:n})[t]},V={},Z={},G=[],X=Z.hasOwnProperty,Y=0,Q={// used to invoke right away hyper:attributes
attributes:V,// hyperHTML.define('intent', (object, update) => {...})
// can be used to define a third parts update mechanism
// when every other known mechanism failed.
// hyper.define('user', info => info.name);
// hyper(node)`<p>${{user}}</p>`;
define:function(e,t){0>e.indexOf("-")?(!(e in Z)&&(Y=G.push(e)),Z[e]=t):V[e]=t},// this method is used internally as last resort
// to retrieve a value out of an object
invoke:function(e,t){for(var n,a=0;a<Y;a++)if(n=G[a],X.call(e,n))return Z[n](e[n],t)}},K=function(e,t){return J(e).createElement(t)},J=function(e){return e.ownerDocument||e},ee=function(e){return J(e).createDocumentFragment()},te=function(e,t){return J(e).createTextNode(t)},ne=" \\f\\n\\r\\t",ae="[^ "+ne+"\\/>\"'=]+",re="[ "+ne+"]+"+ae,se="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",le="(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+ae+"))?)",ie=new RegExp(se+re+le+"+)([ "+ne+"]*/?>)","g"),oe=new RegExp(se+re+le+"*)([ "+ne+"]*/>)","g"),de=ee(document),ce="append"in de,pe="content"in K(document,"template");// used to store wired content
de.appendChild(te(de,"g")),de.appendChild(te(de,""));var ue=1===de.cloneNode(!0).childNodes.length,he="importNode"in document,fe=ce?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=t.length,a=0;a<n;a++)e.appendChild(t[a])},ge=new RegExp("("+re+"=)(['\"]?)"+z+"\\2","gi"),me=function(e,t,n,a){return"<"+t+n.replace(ge,be)+a},be=function(e,t,n){return t+(n||"\"")+D+(n||"\"")},ve=function(e,t){return(L in e?we:Me)(e,t.replace(ie,me))},ye=ue?function(e){for(var t=e.cloneNode(),n=e.childNodes||// this is an excess of caution
// but some node, in IE, might not
// have childNodes property.
// The following fallback ensure working code
// in older IE without compromising performance
// or any other browser/engine involved.
/* istanbul ignore next */[],a=n.length,r=0;r<a;r++)t.appendChild(ye(n[r]));return t}:// the following ignore is due code-coverage
// combination of not having document.importNode
// but having a working node.cloneNode.
// This shenario is common on older Android/WebKit browsers
// but basicHTML here tests just two major cases:
// with document.importNode or with broken cloneNode.
/* istanbul ignore next */function(e){return e.cloneNode(!0)},ke=function(e){for(var t=[],n=e.childNodes,a=n.length,r=0;r<a;r++)n[r].nodeType===o&&t.push(n[r]);return t},_e=he?function(e,t){return e.importNode(t,!0)}:function(e,t){return ye(t)},Ne=[].slice,xe=function(e){return Ce(e)},Ce=function(e){if(// TypeScript template literals are not standard
e.propertyIsEnumerable("raw")||!Object.isFrozen(e.raw)||// Firefox < 55 has not standard implementation neither
/Firefox\/(\d+)/.test((E.navigator||{}).userAgent)&&55>parseFloat(RegExp.$1)){var n={};Ce=function(e){var t="^"+e.join("^");return n[t]||(n[t]=e)}}else// make TL an identity like function
Ce=function(e){return e};return Ce(e)},Me=pe?function(e,t){var n=K(e,"template");return n.innerHTML=t,n.content}:function(e,t){var n=K(e,"template"),a=ee(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var r=RegExp.$1;n.innerHTML="<table>"+t+"</table>",fe(a,Ne.call(n.querySelectorAll(r)))}else n.innerHTML=t,fe(a,Ne.call(n.childNodes));return a},we=pe?function(e,t){var n=ee(e),a=J(e).createElementNS(T,"svg");return a.innerHTML=t,fe(n,Ne.call(a.childNodes)),n}:function(e,t){var n=ee(e),a=K(e,"div");return a.innerHTML="<svg xmlns=\""+T+"\">"+t+"</svg>",fe(n,Ne.call(a.firstChild.childNodes)),n};// old browsers need to fallback to cloneNode
// Custom Elements V0 and V1 will work polyfilled
// but native implementations need importNode instead
// (specially Chromium and its old V0 implementation)
y.prototype.valueOf=function(e){var t=null==this._;return t&&(this._=ee(this.first)),(t||e)&&fe(this._,this.childNodes),this._},y.prototype.remove=function(){this._=null;var e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{var n=J(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e};// a precise target in the DOM the template is representing.
// `<p id=${'attribute'}>some ${'content'}</p>`
// hyperHTML finds only once per template literal,
// hence once per entire application life-cycle,
// all nodes that are related to interpolations.
// These nodes are stored as indexes used to retrieve,
// once per upgrade, nodes that will change on each future update.
// A path example is [2, 0, 1] representing the operation:
// node.childNodes[2].childNodes[0].childNodes[1]
// Attributes are addressed via their owner node and their name.
var Ee=function(e){var t,n=[];switch(e.nodeType){case o:case A:t=e;break;case S:t=e.parentNode,Se(n,t,e);break;default:t=e.ownerElement;}for(e=t;t=t.parentNode;e=t)Se(n,t,e);return n},Se=function(e,t,n){e.unshift(e.indexOf.call(t.childNodes,n))},Ae={create:function(e,t,n){return{type:e,name:n,node:t,path:Ee(t)}},find:function(e,t){for(var n=t.length,a=0;a<n;a++)e=e.childNodes[t[a]];return e}},je=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,Le=function(e,t,n){if(n){var a=t.cloneNode(!0);return a.value="",e.setAttributeNode(a),Te(a,n)}return Te(e.style,n)},Te=function(e,n){var a,r;return function(s){switch(t(s)){case"object":if(s){if(!("object"===a))n?e.value="":e.cssText="";else if(!n&&r!==s)for(var l in r)l in s||(e[l]="");var i=n?{}:e;for(var o in s){var d=s[o],c="number"!=typeof d||je.test(o)?d:d+"px";/^--/.test(o)?i.setProperty(o,c):i[o]=c}a="object",n?e.value=De(r=i):r=s;break}default:r!=s&&(a="string",r=s,n?e.value=s||"":e.cssText=s||"");}}},Oe=/([^A-Z])([A-Z]+)/g,Pe=function(e,t,n){return t+"-"+n.toLowerCase()},De=function(e){var t=[];for(var n in e)t.push(n.replace(Oe,Pe),":",e[n],";");return t.join("")},ze=function(e,t,n,a,r,s){if(2>r-a)t.insertBefore(e(n[a],1),s);else{for(var l=t.ownerDocument.createDocumentFragment();a<r;)l.appendChild(e(n[a++],1));t.insertBefore(l,s)}},$e=function(e,t){return e==t},He=function(e){return e},Ie=function(e,t,n,a,r,s,i){var o=s-r;/* istanbul ignore if */if(1>o)return-1;for(;n-t>=o;){for(var d=t,c=r;d<n&&c<s&&i(e[d],a[c]);)d++,c++;if(c===s)return t;t=d+1}return-1},Fe=function(e,t,n,a,r,s){for(;a<r&&s(n[a],e[t-1]);)a++,t--;return 0===t},Be=function(e,t,n,a,r){return n<a?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:r},Re=function(e,t,n,a,r){if(2>r-a)t.removeChild(e(n[a],-1));else{var s=t.ownerDocument.createRange();s.setStartBefore(e(n[a],-1)),s.setEndAfter(e(n[r-1],-1)),s.deleteContents()}},qe=-1,We=1,Ue=0,Ve="undefined"==typeof Map?function(){var e=[],t=[];return{has:function(t){return-1<e.indexOf(t)},get:function(n){return t[e.indexOf(n)]},set:function(n){var a=e.indexOf(n);t[0>a?e.push(n)-1:a]=n}}}:Map,Ze=function(e,t,n,a,r,s,l,o){var d=0,c=a<o?a:o,p=Array(c++),u=Array(c);/* istanbul ignore next */u[0]=-1;for(var h=1;h<c;h++)u[h]=l;for(var f=new Ve,g=s;g<l;g++)f.set(r[g],g);for(var m,b=t;b<n;b++)m=f.get(e[b]),null!=m&&(d=Ye(u,c,m),-1<d&&(u[d]=m,p[d]={newi:b,oldi:m,prev:p[d-1]}));for(d=--c,--l;u[d]>l;)--d;c=o+a-d;var v=Array(c),y=p[d];for(--n;y;){for(var _=y,N=_.newi,x=_.oldi;n>N;)v[--c]=We,--n;for(;l>x;)v[--c]=qe,--l;v[--c]=Ue,--n,--l,y=y.prev}for(;n>=t;)v[--c]=We,--n;for(;l>=s;)v[--c]=qe,--l;return v},Ge=function(e,t,n,a,s,l,i){var o,p,u,h,f,g,m,b=n+l,y=[];outer:for(o=0;o<=b;o++){/* istanbul ignore if */if(o>50)return null;for(m=o-1,f=o?y[o-1]:[0,0],g=y[o]=[],p=-o;p<=o;p+=2){for(h=p===-o||p!==o&&f[m+p-1]<f[m+p+1]?f[m+p+1]:f[m+p-1]+1,u=h-p;h<l&&u<n&&i(a[s+h],e[t+u]);)h++,u++;if(h===l&&u===n)break outer;g[o+p]=h}}var v=Array(o/2+b/2),_=v.length-1;for(o=y.length-1;0<=o;o--){for(;0<h&&0<u&&i(a[s+h-1],e[t+u-1]);)// diagonal edge = equality
v[_--]=Ue,h--,u--;if(!o)break;/* istanbul ignore next */m=o-1,f=o?y[o-1]:[0,0],p=h-u,p===-o||p!==o&&f[m+p-1]<f[m+p+1]?(u--,v[_--]=We):(h--,v[_--]=qe)}return v},Xe=function(e,t,n,a,r,s,l,o,d){for(var c=new Ve,p=e.length,u=l,h=0;h<p;)switch(e[h++]){case Ue:r++,u++;break;case We:c.set(a[r],1),ze(t,n,a,r++,r,u<o?t(s[u],1):d);break;case qe:u++;}for(h=0;h<p;)switch(e[h++]){case Ue:l++;break;case qe:c.has(s[l])?l++:Re(t,n,s,l++,l);}},Ye=function(e,t,n){for(var a=1,r=t;a<r;){var s=(a+r)/2>>>0;n<e[s]?r=s:a=s+1}return a},Qe=function(e,t,n,a,r,s,l,i,o,d,c,p,u){Xe(Ge(n,a,s,l,i,d,p)||Ze(n,a,r,s,l,i,o,d),e,t,n,a,l,i,c,u)},Ke=function(e,// where changes happen
t,// Array of current items/nodes
n,// Array of future items/nodes
a// optional object with one of the following properties
//  before: domNode
//  compare(generic, generic) => true if same generic
//  node(generic) => Node
){a||(a={});// common prefix
for(var r=a.compare||$e,s=a.node||He,l=null==a.before?null:s(a.before,0),o=t.length,d=o,c=0,p=n.length,u=0;c<d&&u<p&&r(t[c],n[u]);)c++,u++;// common suffix
for(;c<d&&u<p&&r(t[d-1],n[p-1]);)d--,p--;var h=c===d,f=u===p;// same list
if(h&&f)return n;// only stuff to add
if(h&&u<p)return ze(s,e,n,u,p,Be(s,t,c,o,l)),n;// only stuff to remove
if(f&&c<d)return Re(s,e,t,c,d),n;var g=d-c,m=p-u,b=-1;// 2 simple indels: the shortest sequence is a subsequence of the longest
if(g<m){// inner diff
if(b=Ie(n,u,p,t,c,d,r),-1<b)return ze(s,e,n,u,b,s(t[c],0)),ze(s,e,n,b+g,p,Be(s,t,d,o,l)),n;/* istanbul ignore else */}else if(m<g&&(b=Ie(t,c,d,n,u,p,r),-1<b))// outer diff
return Re(s,e,t,c,b),Re(s,e,t,b+m,d),n;// common case with one replacement for many nodes
// or many nodes replaced for a single one
/* istanbul ignore else */return 2>g||2>m?(ze(s,e,n,u,p,s(t[c],0)),Re(s,e,t,c,d),n):g===m&&Fe(n,p,t,c,d,r)?(ze(s,e,n,u,p,Be(s,t,d,o,l)),n):(Qe(s,e,n,u,p,m,t,c,d,g,o,r,l),n);// the half match diff part has been skipped in petit-dom
// https://github.com/yelouafi/petit-dom/blob/bd6f5c919b5ae5297be01612c524c40be45f14a7/src/vdom.js#L391-L397
// accordingly, I think it's safe to skip in here too
// if one day it'll come out like the speediest thing ever to do
// then I might add it in here too
// Extra: before going too fancy, what about reversed lists ?
//        This should bail out pretty quickly if that's not the case.
// last resort through a smart diff
},Je=new B;k.prototype=Object.create(null);// returns an intent to explicitly inject content as html
var et=function(e){return{html:e}},tt=function e(t,n){return"ELEMENT_NODE"in t?t:t.constructor===y?// in the Wire case, the content can be
// removed, post-pended, inserted, or pre-pended and
// all these cases are handled by domdiff already
/* istanbul ignore next */0>1/n?n?t.remove():t.last:n?t.valueOf(!0):t.first:e(t.render(),n)},nt=function(e){return"ELEMENT_NODE"in e||e instanceof y||e instanceof v},at=function(e,t){for(var n=[],a=t.length,r=0;r<a;r++){var s=t[r],l=Ae.find(e,s.path);switch(s.type){case"any":n.push(dt(l,[]));break;case"attr":n.push(ct(l,s.name,s.node));break;case"text":n.push(pt(l)),l.textContent="";}}return n},rt=function e(t,n,a){for(var r,s=t.childNodes,l=s.length,d=0;d<l;d++)switch(r=s[d],r.nodeType){case o:st(r,n,a),e(r,n,a);break;case S:r.textContent===D&&(a.shift(),n.push(// basicHTML or other non standard engines
// might end up having comments in nodes
// where they shouldn't, hence this check.
P.test(t.nodeName)?Ae.create("text",t):Ae.create("any",r)));break;case 3:P.test(t.nodeName)&&q.call(r.textContent)===z&&(a.shift(),n.push(Ae.create("text",t)));}},st=function(e,t,n){for(var a,r=new k,s=e.attributes,l=Ne.call(s),o=[],d=l.length,c=0;c<d;c++)if(a=l[c],a.value===D){var p=a.name;// the following ignore is covered by IE
// and the IE9 double viewBox test
/* istanbul ignore else */if(!(p in r)){var u=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");r[p]=s[u]||// the following ignore is covered by browsers
// while basicHTML is already case-sensitive
/* istanbul ignore next */s[u.toLowerCase()],t.push(Ae.create("attr",r[p],u))}o.push(a)}for(var h,f=o.length,g=0;g<f;g++)// Edge HTML bug #16878726
h=o[g],/^id$/i.test(h.name)?e.removeAttribute(h.name):// standard browsers would work just fine here
e.removeAttributeNode(o[g]);// This is a very specific Firefox/Safari issue
// but since it should be a not so common pattern,
// it's probably worth patching regardless.
// Basically, scripts created through strings are death.
// You need to create fresh new scripts instead.
// TODO: is there any other node that needs such nonsense?
var m=e.nodeName;if(/^script$/i.test(m)){// this used to be like that
// const script = createElement(node, nodeName);
// then Edge arrived and decided that scripts created
// through template documents aren't worth executing
// so it became this ... hopefully it won't hurt in the wild
for(var b=document.createElement(m),v=0;v<s.length;v++)b.setAttributeNode(s[v].cloneNode(!0));b.textContent=e.textContent,e.parentNode.replaceChild(b,e)}},lt=function(e,t){t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(et).then(t):Promise.resolve(Q.invoke(e,t)).then(t)},it=function(e){return null!=e&&"then"in e},ot=/^(?:form|list)$/i,dt=function(e,n){var a,r={node:tt,before:e},s=!1,l=function l(i){switch(t(i)){case"string":case"number":case"boolean":s?a!==i&&(a=i,n[0].textContent=i):(s=!0,a=i,n=Ke(e.parentNode,n,[te(e,i)],r));break;case"function":l(i(e));break;case"object":case"undefined":if(null==i){s=!1,n=Ke(e.parentNode,n,[],r);break}default:if(s=!1,a=i,!R(i))nt(i)?n=Ke(e.parentNode,n,i.nodeType===A?Ne.call(i.childNodes):[i],r):it(i)?i.then(l):"placeholder"in i?lt(i,l):"text"in i?l(i.text+""):"any"in i?l(i.any):"html"in i?n=Ke(e.parentNode,n,Ne.call(ve(e,[].concat(i.html).join("")).childNodes),r):"length"in i?l(Ne.call(i)):l(Q.invoke(i,l));else if(0===i.length)n.length&&(n=Ke(e.parentNode,n,[],r));else switch(t(i[0])){case"string":case"number":case"boolean":l({html:i});break;case"object":if(R(i[0])&&(i=i.concat.apply([],i)),it(i[0])){Promise.all(i).then(l);break}default:n=Ke(e.parentNode,n,i,r);}}};return l},ct=function(e,t,n){var a,r=L in e;// if the attribute is the style one
// handle it differently from others
if("style"===t)return Le(e,n,r);// the name is an event one,
// add/remove event listeners accordingly
if(/^on/.test(t)){var s=t.slice(2);return s===O||s==="dis"+O?(ht&&(ht=!1,_()),Je.add(e)):t.toLowerCase()in e&&(s=s.toLowerCase()),function(t){a!==t&&(a&&e.removeEventListener(s,a,!1),a=t,t&&e.addEventListener(s,t,!1))}}// the attribute is special ('value' in input)
// and it's not SVG *or* the name is exactly data,
// in this case assign the value directly
if("data"===t||!r&&t in e&&!ot.test(t))return function(n){a!==n&&(a=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};if(t in Q.attributes)return function(n){a=Q.attributes[t](e,n),e.setAttribute(t,null==a?"":a)};// in every other case, use the attribute node as it is
// update only the value, set it as node only when/if needed
var l=!1,i=n.cloneNode(!0);return function(t){a!==t&&(a=t,i.value!==t&&(null==t?(l&&(l=!1,e.removeAttributeNode(i)),i.value=t):(i.value=t,!l&&(l=!0,e.setAttributeNode(i)))))}},pt=function(e){var n,a=function a(r){if(n!==r){n=r;var s=t(r);"object"===s&&r?it(r)?r.then(a):"placeholder"in r?lt(r,a):"text"in r?a(r.text+""):"any"in r?a(r.any):"html"in r?a([].concat(r.html).join("")):"length"in r?a(Ne.call(r).join("")):a(Q.invoke(r,a)):"function"===s?a(r(e)):e.textContent=null==r?"":r}};return a},ut={create:at,find:rt},ht=!0,ft=new F,gt=function(){try{var e=new F,t=Object.freeze([]);if(e.set(t,!0),!e.get(t))throw t;return e}catch(e){// inevitable legacy code leaks due
// https://github.com/tc39/ecma262/pull/890
return new H}}(),mt=oe,bt=function(e,t,n){return j.test(t)?e:"<"+t+n+"></"+t+">"},vt=new F,yt=function(e){for(var t,n=e.childNodes,a=n.length,r=[],s=0;s<a;s++)t=n[s],(t.nodeType===o||0!==q.call(t.textContent).length)&&r.push(t);return 1===r.length?r[0]:new y(r)},kt=function(e){return N.bind(e)};// returns nodes from wires and components
(function(e){// there are various weakly referenced variables in here
// and mostly are to use Component.for(...) static method.
var n=new F,a=Object.create,r=function(e,t,n){return e.set(t,n),n},s=function(e,n,s,i){var o=n.get(e)||l(e,n);switch(t(i)){case"object":case"function":var d=o.w||(o.w=new F);return d.get(i)||r(d,i,new e(s));default:var c=o.p||(o.p=a(null));return c[i]||(c[i]=new e(s));}},l=function(e,t){var n={w:null,p:null};return t.set(e,n),n},i=function(e){var t=new H;return n.set(e,t),t};// The Component Class
Object.defineProperties(v,{// Component.for(context[, id]) is a convenient way
// to automatically relate data/context to children components
// If not created yet, the new Component(context) is weakly stored
// and after that same instance would always be returned.
for:{configurable:!0,value:function(e,t){return s(this,n.get(e)||i(e),e,null==t?"default":t)}}}),Object.defineProperties(v.prototype,{// all events are handled with the component as context
handleEvent:{value:function(t){var e=t.currentTarget;this["getAttribute"in e&&e.getAttribute("data-call")||"on"+t.type](t)}},// components will lazily define html or svg properties
// as soon as these are invoked within the .render() method
// Such render() method is not provided by the base class
// but it must be available through the Component extend.
// Declared components could implement a
// render(props) method too and use props as needed.
html:W("html",e),svg:W("svg",e),// the state is a very basic/simple mechanism inspired by Preact
state:W("state",function(){return this.defaultState}),// it is possible to define a default state that'd be always an object otherwise
defaultState:{get:function(){return{}}},// dispatch a bubbling, cancelable, custom event
// through the first known/available node
dispatch:{value:function(e,t){var n=this._wire$;if(n){var a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});return a.component=this,(n.dispatchEvent?n:n.childNodes[0]).dispatchEvent(a)}return!1}},// setting some property state through a new object
// or a callback, triggers also automatically a render
// unless explicitly specified to not do so (render === false)
setState:{value:function(e,t){var n=this.state,a="function"==typeof e?e.call(this,n):e;for(var r in a)n[r]=a[r];return!1!==t&&this.render(),this}}})}// instead of a secret key I could've used a WeakMap
// However, attaching a property directly will result
// into better performance with thousands of components
// hanging around, and less memory pressure caused by the WeakMap
)(function e(t){var n,a,e,r,s;return function(l){l=xe(l);var i=r!==l;return i&&(r=l,e=ee(document),a="svg"===t?document.createElementNS(T,"svg"):e,s=N.bind(a)),s.apply(null,arguments),i&&("svg"===t&&fe(e,Ne.call(a.childNodes)),n=yt(e)),n}});var _t=/*#__PURE__*/function(e){function t(){var e,n;r(this,t);for(var a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];var i=n=m(this,(e=d(t)).call.apply(e,[this].concat(s)));i.render=i.render.bind(i),i.onclick=i.onclick.bind(i),i.getMessages=i.getMessages.bind(i);var o=i.getAttribute("messagesPath"),c=document.documentElement.lang;return i.baseId=i.getAttribute("id"),i.base=i.urlMessages(o,c),i.baseCss=i.getAttribute("cssPath"),n}return i(t,e),l(t,null,[{key:"observedAttributes",// Retrieve id of the webcomponent
// and the path of the messages displayed in the webcomponent
// and the path of the css imported into the webcomponent
get:function(){return["cssPath","id","messagesPath"]}}]),l(t,[{key:"attributeChangedCallback",value:function(e,t,n){// skip if values have not changed
if(t!==n){// update internal value with attribute value
switch(e){case"cssPath":{this.baseCss=n;break}case"id":{this.baseId=n;break}case"messagePath":{var a=document.documentElement.lang;this.base=this.urlMessage(n,a),this.getMessages();break}}// re-render view with new values
this.render()}}},{key:"connectedCallback",value:function(){this.SD=this.attachShadow({mode:"open"}),this.root=kt(this.SD),this.getMessages()}/**
       * Build the url of the messages according to host page language
       * Supported language: en-US, fr-FR, es-ES, nl-NL (Can be extended...)
       * if host language is unknowed default to en-US messages
       */},{key:"urlMessages",value:function(e,t){return"fr-FR"===t||"es-ES"===t||"en-US"===t||"nl-NL"===t?e+"i18n/"+t:e+"i18n/en-US"}/**
       * function onclick. use to open the toggle menu in the ShadowDOM
       * keyboard and touch accessible (WCAG 2.1) exterimental CSS :focus-visible enabled in Chrome
       * focus is managed
       */},{key:"onclick",value:function(e){e.preventDefault();var t=this.SD,n=t.querySelector(".card__social"),a=t.querySelector(".card__share");n.classList.toggle("card__social--active"),a.classList.toggle("share-expanded"),"true"===a.getAttribute("aria-expanded")?a.setAttribute("aria-expanded","false"):(a.setAttribute("aria-expanded","true"),a.focus())}/**
       * function getMessages. fetch the messages.json
       */},{key:"getMessages",value:function(){var e=a(/*#__PURE__*/regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(this.base,"/messages.json"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.data=n,this.render(),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.error(e.t0);case 14:case"end":return e.stop();}},e,this,[[0,11]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.baseCss,t=this.data,n=this.onclick,a=this.root;// exit early if no data is present
if(t){/**
         * build the import style tag into the Shadow DOM and append it to the ShadowDOM
         */var r=document.createElement("link"),s="".concat(e)+"/my-card.css";r.href=s.toString(),r.rel="preload",r.as="style",r.toString();var l=document.createElement("style");l.lang="css",l.innerHTML="@import '"+"".concat(e)+"/my-card.css';",l.toString(),a(w(),t.magic,t.imgsrc,t.linkMenu1.id,t.linkMenu1.cssClass,t.linkMenu1.link,t.linkMenu1.label,t.linkMenu1.label,t.linkMenu1.glyphicon,t.linkMenu2.id,t.linkMenu2.cssClass,t.linkMenu2.link,t.linkMenu2.label,t.linkMenu2.label,t.linkMenu2.glyphicon,t.linkMenu3.id,t.linkMenu3.cssClass,t.linkMenu3.link,t.linkMenu3.label,t.linkMenu3.label,t.linkMenu3.glyphicon,n,t.List.map(function(e){return" <a href=\"javascript:void(0);\">".concat(e.tag,"</a> -")}),t.time,t.title,t.paragraphs.map(function(e){return"<p>".concat(e.para,"</p>")}),t.button1.link,t.button1.cssClass,t.button1.label,t.button1.name,t.button1.glyphicon,t.button2.link,t.button2.cssClass,t.button2.label,t.button2.name,t.button2.glyphicon).appendChild(r).appendChild(l)}}}]),t}(f(HTMLElement));/**
   * Register the new item my-card
   * (customizable)
   */customElements.define("my-card",_t)});
