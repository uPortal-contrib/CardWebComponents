"use strict";function a(b){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},a(b)}function b(c){return b="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(b){return a(b)}:function(b){return b&&"function"==typeof Symbol&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":a(b)},b(c)}function c(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function d(a){return function(){var b=this,d=arguments;return new Promise(function(e,f){function g(a){c(i,e,f,g,h,"next",a)}function h(a){c(i,e,f,g,h,"throw",a)}var i=a.apply(b,d);g(void 0)})}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function g(a,b,c){return b&&f(a.prototype,b),c&&f(a,c),a}function h(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&j(a,b)}function i(a){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},i(a)}function j(a,b){return j=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},j(a,b)}function k(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function l(){return l=k()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&j(f,d.prototype),f},l.apply(null,arguments)}function m(a){return-1!==Function.toString.call(a).indexOf("[native code]")}function n(a){var b="function"==typeof Map?new Map:void 0;return n=function(a){function c(){return l(a,arguments,i(this).constructor)}if(null===a||!m(a))return a;if("function"!=typeof a)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),j(c,a)},n(a)}function o(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function p(b,c){return c&&("object"===a(c)||"function"==typeof c)?c:o(b)}function q(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}var r=document.defaultView,s=1,t=3,u=8,v=11,w=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,x="ownerSVGElement",y="http://www.w3.org/2000/svg",z="connected",A="dis"+z,B="_hyper: ",C=/^(?:style|textarea)$/i,D=B+(0|Math.random()*new Date)+";",E="<!--"+D+"-->",F=r.Event;// Node.CONSTANTS
// 'cause some engine has no global Node defined
// (i.e. Node, NativeScript, basicHTML ... )
try{new F("Event")}catch(a){F=function(a){var b=document.createEvent("Event");return b.initEvent(a,!1,!1),b}}/* istanbul ignore next */var G=r.Map||function(){var a=[],b=[];return{get:function(c){return b[a.indexOf(c)]},set:function(c,d){b[a.push(c)-1]=d}}},H=0,I=r.WeakMap||function(){var a=D+H++;return{get:function(b){return b[a]},set:function(b,c){Object.defineProperty(b,a,{configurable:!0,value:c})}}},J=r.WeakSet||function(){var a=new I;return{add:function(b){a.set(b,!0)},has:function(b){return!0===a.get(b)}}},K=Array.isArray||function(a){return function(b){return"[object Array]"===a.call(b)}}({}.toString),L=D.trim||function(){return this.replace(/^\s+|\s+$/g,"")};// used to store wired content
// able to create Custom Elements like components
// including the ability to listen to connect/disconnect
// events via onconnect/ondisconnect attributes
// Components can be created imperatively or declaratively.
// The main difference is that declared components
// will not automatically render on setState(...)
// to simplify state handling on render.
function M(){return this;// this is needed in Edge !!!
}// Component is lazily setup because it needs
// wire mechanism as lazy content
function N(a){// there are various weakly referenced variables in here
// and mostly are to use Component.for(...) static method.
var c=new I,d=Object.create,e=function(a,b,c){return a.set(b,c),c},f=function(a,c,f,h){var i=c.get(a)||g(a,c);switch(b(h)){case"object":case"function":var j=i.w||(i.w=new I);return j.get(h)||e(j,h,new a(f));default:var k=i.p||(i.p=d(null));return k[h]||(k[h]=new a(f));}},g=function(a,b){var c={w:null,p:null};return b.set(a,c),c},h=function(a){var b=new G;return c.set(a,b),b};// The Component Class
Object.defineProperties(M,{// Component.for(context[, id]) is a convenient way
// to automatically relate data/context to children components
// If not created yet, the new Component(context) is weakly stored
// and after that same instance would always be returned.
for:{configurable:!0,value:function(a,b){return f(this,c.get(a)||h(a),a,null==b?"default":b)}}}),Object.defineProperties(M.prototype,{// all events are handled with the component as context
handleEvent:{value:function(a){var b=a.currentTarget;this["getAttribute"in b&&b.getAttribute("data-call")||"on"+a.type](a)}},// components will lazily define html or svg properties
// as soon as these are invoked within the .render() method
// Such render() method is not provided by the base class
// but it must be available through the Component extend.
// Declared components could implement a
// render(props) method too and use props as needed.
html:O("html",a),svg:O("svg",a),// the state is a very basic/simple mechanism inspired by Preact
state:O("state",function(){return this.defaultState}),// it is possible to define a default state that'd be always an object otherwise
defaultState:{get:function(){return{}}},// dispatch a bubbling, cancelable, custom event
// through the first known/available node
dispatch:{value:function(a,b){var c=this._wire$;if(c){var d=new CustomEvent(a,{bubbles:!0,cancelable:!0,detail:b});return d.component=this,(c.dispatchEvent?c:c.childNodes[0]).dispatchEvent(d)}return!1}},// setting some property state through a new object
// or a callback, triggers also automatically a render
// unless explicitly specified to not do so (render === false)
setState:{value:function(a,b){var c=this.state,d="function"==typeof a?a.call(this,c):a;for(var e in d)c[e]=d[e];return!1!==b&&this.render(),this}}})}// instead of a secret key I could've used a WeakMap
// However, attaching a property directly will result
// into better performance with thousands of components
// hanging around, and less memory pressure caused by the WeakMap
var O=function(a,b){var c="_"+a+"$";return{get:function(){return this[c]||P(this,c,b.call(this,a))},set:function(a){P(this,c,a)}}},P=function(a,b,c){return Object.defineProperty(a,b,{configurable:!0,value:"function"==typeof c?function(){return a._wire$=c.apply(this,arguments)}:c})[b]},Q={},R={},S=[],T=R.hasOwnProperty,U=0,V={// used to invoke right away hyper:attributes
attributes:Q,// hyperHTML.define('intent', (object, update) => {...})
// can be used to define a third parts update mechanism
// when every other known mechanism failed.
// hyper.define('user', info => info.name);
// hyper(node)`<p>${{user}}</p>`;
define:function(a,b){0>a.indexOf("-")?(!(a in R)&&(U=S.push(a)),R[a]=b):Q[a]=b},// this method is used internally as last resort
// to retrieve a value out of an object
invoke:function(a,b){for(var c,d=0;d<U;d++)if(c=S[d],T.call(a,c))return R[c](a[c],b)}},W=function(a,b){return X(a).createElement(b)},X=function(a){return a.ownerDocument||a},Y=function(a){return X(a).createDocumentFragment()},Z=function(a,b){return X(a).createTextNode(b)},$=" \\f\\n\\r\\t",_="[^ "+$+"\\/>\"'=]+",aa="[ "+$+"]+"+_,ba="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",ca="(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+_+"))?)",da=new RegExp(ba+aa+ca+"+)([ "+$+"]*/?>)","g"),ea=new RegExp(ba+aa+ca+"*)([ "+$+"]*/>)","g"),fa=Y(document),ga="append"in fa,ha="content"in W(document,"template");// shortcut to set value on get or set(value)
fa.appendChild(Z(fa,"g")),fa.appendChild(Z(fa,""));var ia=1===fa.cloneNode(!0).childNodes.length,ja="importNode"in document,ka=ga?function(a,b){a.append.apply(a,b)}:function(a,b){for(var c=b.length,d=0;d<c;d++)a.appendChild(b[d])},la=new RegExp("("+aa+"=)(['\"]?)"+E+"\\2","gi"),ma=function(a,b,c,d){return"<"+b+c.replace(la,na)+d},na=function(a,b,c){return b+(c||"\"")+D+(c||"\"")},oa=function(a,b){return(x in a?xa:wa)(a,b.replace(da,ma))},pa=ia?function(a){for(var b=a.cloneNode(),c=a.childNodes||// this is an excess of caution
// but some node, in IE, might not
// have childNodes property.
// The following fallback ensure working code
// in older IE without compromising performance
// or any other browser/engine involved.
/* istanbul ignore next */[],d=c.length,e=0;e<d;e++)b.appendChild(pa(c[e]));return b}:// the following ignore is due code-coverage
// combination of not having document.importNode
// but having a working node.cloneNode.
// This shenario is common on older Android/WebKit browsers
// but basicHTML here tests just two major cases:
// with document.importNode or with broken cloneNode.
/* istanbul ignore next */function(a){return a.cloneNode(!0)},qa=function(a){for(var b=[],c=a.childNodes,d=c.length,e=0;e<d;e++)c[e].nodeType===s&&b.push(c[e]);return b},ra=ja?function(a,b){return a.importNode(b,!0)}:function(a,b){return pa(b)},sa=[].slice,ta=function(a){return ua(a)},ua=function(a){if(// TypeScript template literals are not standard
a.propertyIsEnumerable("raw")||!Object.isFrozen(a.raw)||// Firefox < 55 has not standard implementation neither
/Firefox\/(\d+)/.test((r.navigator||{}).userAgent)&&55>parseFloat(RegExp.$1)){var b={};ua=function(a){var c="^"+a.join("^");return b[c]||(b[c]=a)}}else// make TL an identity like function
ua=function(a){return a};return ua(a)},va=function(){try{var a=new I,b=Object.freeze([]);if(a.set(b,!0),!a.get(b))throw b;return a}catch(a){// inevitable legacy code leaks due
// https://github.com/tc39/ecma262/pull/890
return new G}},wa=ha?function(a,b){var c=W(a,"template");return c.innerHTML=b,c.content}:function(a,b){var c=W(a,"template"),d=Y(a);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(b)){var e=RegExp.$1;c.innerHTML="<table>"+b+"</table>",ka(d,sa.call(c.querySelectorAll(e)))}else c.innerHTML=b,ka(d,sa.call(c.childNodes));return d},xa=ha?function(a,b){var c=Y(a),d=X(a).createElementNS(y,"svg");return d.innerHTML=b,ka(c,sa.call(d.childNodes)),c}:function(a,b){var c=Y(a),d=W(a,"div");return d.innerHTML="<svg xmlns=\""+y+"\">"+b+"</svg>",ka(c,sa.call(d.firstChild.childNodes)),c};// old browsers need to fallback to cloneNode
// Custom Elements V0 and V1 will work polyfilled
// but native implementations need importNode instead
// (specially Chromium and its old V0 implementation)
function ya(a){this.childNodes=a,this.length=a.length,this.first=a[0],this.last=a[this.length-1],this._=null}// when a wire is inserted, all its nodes will follow
ya.prototype.valueOf=function(a){var b=null==this._;return b&&(this._=Y(this.first)),(b||a)&&ka(this._,this.childNodes),this._},ya.prototype.remove=function(){this._=null;var a=this.first,b=this.last;if(2===this.length)b.parentNode.removeChild(b);else{var c=X(a).createRange();c.setStartBefore(this.childNodes[1]),c.setEndAfter(b),c.deleteContents()}return a};// a precise target in the DOM the template is representing.
// `<p id=${'attribute'}>some ${'content'}</p>`
// hyperHTML finds only once per template literal,
// hence once per entire application life-cycle,
// all nodes that are related to interpolations.
// These nodes are stored as indexes used to retrieve,
// once per upgrade, nodes that will change on each future update.
// A path example is [2, 0, 1] representing the operation:
// node.childNodes[2].childNodes[0].childNodes[1]
// Attributes are addressed via their owner node and their name.
var za=function(a){var b,c=[];switch(a.nodeType){case s:case v:b=a;break;case u:b=a.parentNode,Aa(c,b,a);break;default:b=a.ownerElement;}for(a=b;b=b.parentNode;a=b)Aa(c,b,a);return c},Aa=function(a,b,c){a.unshift(a.indexOf.call(b.childNodes,c))},Ba={create:function(a,b,c){return{type:a,name:c,node:b,path:za(b)}},find:function(a,b){for(var c=b.length,d=0;d<c;d++)a=a.childNodes[b[d]];return a}},Ca=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,Da=function(a,b,c){if(c){var d=b.cloneNode(!0);return d.value="",a.setAttributeNode(d),Ea(d,c)}return Ea(a.style,c)},Ea=function(a,c){var d,e;return function(f){switch(b(f)){case"object":if(f){if(!("object"===d))c?a.value="":a.cssText="";else if(!c&&e!==f)for(var g in e)g in f||(a[g]="");var h=c?{}:a;for(var i in f){var j=f[i],k="number"!=typeof j||Ca.test(i)?j:j+"px";/^--/.test(i)?h.setProperty(i,k):h[i]=k}d="object",c?a.value=Ha(e=h):e=f;break}default:e!=f&&(d="string",e=f,c?a.value=f||"":a.cssText=f||"");}}},Fa=/([^A-Z])([A-Z]+)/g,Ga=function(a,b,c){return b+"-"+c.toLowerCase()},Ha=function(a){var b=[];for(var c in a)b.push(c.replace(Fa,Ga),":",a[c],";");return b.join("")},Ia=function(a,b,c,d,e,f){if(2>e-d)b.insertBefore(a(c[d],1),f);else{for(var g=b.ownerDocument.createDocumentFragment();d<e;)g.appendChild(a(c[d++],1));b.insertBefore(g,f)}},Ja=function(c,a){return c==a},Ka=function(a){return a},La=function(a,b,c,d,e,f,g){var h=f-e;/* istanbul ignore if */if(1>h)return-1;for(;c-b>=h;){for(var i=b,j=e;i<c&&j<f&&g(a[i],d[j]);)i++,j++;if(j===f)return b;b=i+1}return-1},Ma=function(a,b,c,d,e,f){for(;d<e&&f(c[d],a[b-1]);)d++,b--;return 0===b},Na=function(a,b,c,d,e){return c<d?a(b[c],0):0<c?a(b[c-1],-0).nextSibling:e},Oa=function(a,b,c,d,e){if(2>e-d)b.removeChild(a(c[d],-1));else{var f=b.ownerDocument.createRange();f.setStartBefore(a(c[d],-1)),f.setEndAfter(a(c[e-1],-1)),f.deleteContents()}},Pa=-1,Qa=1,Ra=0,Sa=50,Ta="undefined"==typeof Map?function(){var a=[],b=[];return{has:function(b){return-1<a.indexOf(b)},get:function(c){return b[a.indexOf(c)]},set:function(c){var d=a.indexOf(c);b[0>d?a.push(c)-1:d]=c}}}:Map,Ua=function(a,b,c,d,e,f,g,h){var j=0,l=d<h?d:h,m=Array(l++),n=Array(l);/* istanbul ignore next */n[0]=-1;for(var o=1;o<l;o++)n[o]=g;for(var p=new Ta,q=f;q<g;q++)p.set(e[q],q);for(var r,s=b;s<c;s++)r=p.get(a[s]),null!=r&&(j=Xa(n,l,r),-1<j&&(n[j]=r,m[j]={newi:s,oldi:r,prev:m[j-1]}));for(j=--l,--g;n[j]>g;)--j;l=h+d-j;var t=Array(l),u=m[j];for(--c;u;){for(var v=u,w=v.newi,x=v.oldi;c>w;)t[--l]=Qa,--c;for(;g>x;)t[--l]=Pa,--g;t[--l]=Ra,--c,--g,u=u.prev}for(;c>=b;)t[--l]=Qa,--c;for(;g>=f;)t[--l]=Pa,--g;return t},Va=function(a,b,e,f,g,h,i){var j,l,m,n,o,p,q,s=e+h,t=[];outer:for(j=0;j<=s;j++){/* istanbul ignore if */if(j>Sa)return null;for(q=j-1,o=j?t[j-1]:[0,0],p=t[j]=[],l=-j;l<=j;l+=2){for(n=l===-j||l!==j&&o[q+l-1]<o[q+l+1]?o[q+l+1]:o[q+l-1]+1,m=n-l;n<h&&m<e&&i(f[g+n],a[b+m]);)n++,m++;if(n===h&&m===e)break outer;p[j+l]=n}}var u=Array(j/2+s/2),v=u.length-1;for(j=t.length-1;0<=j;j--){for(;0<n&&0<m&&i(f[g+n-1],a[b+m-1]);)// diagonal edge = equality
u[v--]=Ra,n--,m--;if(!j)break;/* istanbul ignore next */q=j-1,o=j?t[j-1]:[0,0],l=n-m,l===-j||l!==j&&o[q+l-1]<o[q+l+1]?(m--,u[v--]=Qa):(n--,u[v--]=Pa)}return u},Wa=function(a,b,c,d,e,f,g,h,j){for(var k=new Ta,l=a.length,m=g,n=0;n<l;)switch(a[n++]){case Ra:e++,m++;break;case Qa:k.set(d[e],1),Ia(b,c,d,e++,e,m<h?b(f[m],1):j);break;case Pa:m++;}for(n=0;n<l;)switch(a[n++]){case Ra:g++;break;case Pa:k.has(f[g])?g++:Oa(b,c,f,g++,g);}},Xa=function(a,b,c){for(var d=1,e=b;d<e;){var f=(d+e)/2>>>0;c<a[f]?e=f:d=f+1}return d},Ya=function(a,b,c,d,e,f,g,h,i,j,k,l,m){Wa(Va(c,d,f,g,h,j,l)||Ua(c,d,e,f,g,h,i,j),a,b,c,d,g,h,k,m)},Za=function(a,// where changes happen
b,// Array of current items/nodes
c,// Array of future items/nodes
d// optional object with one of the following properties
//  before: domNode
//  compare(generic, generic) => true if same generic
//  node(generic) => Node
){d||(d={});// common prefix
for(var e=d.compare||Ja,f=d.node||Ka,g=null==d.before?null:f(d.before,0),h=b.length,j=h,k=0,l=c.length,m=0;k<j&&m<l&&e(b[k],c[m]);)k++,m++;// common suffix
for(;k<j&&m<l&&e(b[j-1],c[l-1]);)j--,l--;var n=k===j,o=m===l;// same list
if(n&&o)return c;// only stuff to add
if(n&&m<l)return Ia(f,a,c,m,l,Na(f,b,k,h,g)),c;// only stuff to remove
if(o&&k<j)return Oa(f,a,b,k,j),c;var p=j-k,q=l-m,r=-1;// 2 simple indels: the shortest sequence is a subsequence of the longest
if(p<q){// inner diff
if(r=La(c,m,l,b,k,j,e),-1<r)return Ia(f,a,c,m,r,f(b[k],0)),Ia(f,a,c,r+p,l,Na(f,b,j,h,g)),c;/* istanbul ignore else */}else if(q<p&&(r=La(b,k,j,c,m,l,e),-1<r))// outer diff
return Oa(f,a,b,k,r),Oa(f,a,b,r+q,j),c;// common case with one replacement for many nodes
// or many nodes replaced for a single one
/* istanbul ignore else */return 2>p||2>q?(Ia(f,a,c,m,l,f(b[k],0)),Oa(f,a,b,k,j),c):p===q&&Ma(c,l,b,k,j,e)?(Ia(f,a,c,m,l,Na(f,b,j,h,g)),c):(Ya(f,a,c,m,l,q,b,k,j,p,h,e,g),c);// the half match diff part has been skipped in petit-dom
// https://github.com/yelouafi/petit-dom/blob/bd6f5c919b5ae5297be01612c524c40be45f14a7/src/vdom.js#L391-L397
// accordingly, I think it's safe to skip in here too
// if one day it'll come out like the speediest thing ever to do
// then I might add it in here too
// Extra: before going too fancy, what about reversed lists ?
//        This should bail out pretty quickly if that's not the case.
// last resort through a smart diff
},$a=new J;// a basic dictionary used to filter already cached attributes
// while looking for special hyperHTML values.
function _a(){}_a.prototype=Object.create(null);// returns an intent to explicitly inject content as html
var ab=function(a){return{html:a}},bb=function a(b,c){return"ELEMENT_NODE"in b?b:b.constructor===ya?// in the Wire case, the content can be
// removed, post-pended, inserted, or pre-pended and
// all these cases are handled by domdiff already
/* istanbul ignore next */0>1/c?c?b.remove():b.last:c?b.valueOf(!0):b.first:a(b.render(),c)},cb=function(a){return"ELEMENT_NODE"in a||a instanceof ya||a instanceof M},db=function(a,b){for(var c=[],d=b.length,e=0;e<d;e++){var f=b[e],g=Ba.find(a,f.path);switch(f.type){case"any":c.push(jb(g,[]));break;case"attr":c.push(kb(g,f.name,f.node));break;case"text":c.push(lb(g)),g.textContent="";}}return c},eb=function a(b,c,d){for(var e,f=b.childNodes,g=f.length,h=0;h<g;h++)switch(e=f[h],e.nodeType){case s:fb(e,c,d),a(e,c,d);break;case u:e.textContent===D&&(d.shift(),c.push(// basicHTML or other non standard engines
// might end up having comments in nodes
// where they shouldn't, hence this check.
C.test(b.nodeName)?Ba.create("text",b):Ba.create("any",e)));break;case t:C.test(b.nodeName)&&L.call(e.textContent)===E&&(d.shift(),c.push(Ba.create("text",b)));}},fb=function(a,b,c){for(var d,e=new _a,f=a.attributes,g=sa.call(f),h=[],j=g.length,k=0;k<j;k++)if(d=g[k],d.value===D){var l=d.name;// the following ignore is covered by IE
// and the IE9 double viewBox test
/* istanbul ignore else */if(!(l in e)){var m=c.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");e[l]=f[m]||// the following ignore is covered by browsers
// while basicHTML is already case-sensitive
/* istanbul ignore next */f[m.toLowerCase()],b.push(Ba.create("attr",e[l],m))}h.push(d)}for(var n,o=h.length,p=0;p<o;p++)// Edge HTML bug #16878726
n=h[p],/^id$/i.test(n.name)?a.removeAttribute(n.name):// standard browsers would work just fine here
a.removeAttributeNode(h[p]);// This is a very specific Firefox/Safari issue
// but since it should be a not so common pattern,
// it's probably worth patching regardless.
// Basically, scripts created through strings are death.
// You need to create fresh new scripts instead.
// TODO: is there any other node that needs such nonsense?
var q=a.nodeName;if(/^script$/i.test(q)){// this used to be like that
// const script = createElement(node, nodeName);
// then Edge arrived and decided that scripts created
// through template documents aren't worth executing
// so it became this ... hopefully it won't hurt in the wild
for(var r=document.createElement(q),s=0;s<f.length;s++)r.setAttributeNode(f[s].cloneNode(!0));r.textContent=a.textContent,a.parentNode.replaceChild(r,a)}},gb=function(a,b){b(a.placeholder),"text"in a?Promise.resolve(a.text).then(String).then(b):"any"in a?Promise.resolve(a.any).then(b):"html"in a?Promise.resolve(a.html).then(ab).then(b):Promise.resolve(V.invoke(a,b)).then(b)},hb=function(a){return null!=a&&"then"in a},ib=/^(?:form|list)$/i,jb=function(a,c){var d,e={node:bb,before:a},f=!1,g=function g(h){switch(b(h)){case"string":case"number":case"boolean":f?d!==h&&(d=h,c[0].textContent=h):(f=!0,d=h,c=Za(a.parentNode,c,[Z(a,h)],e));break;case"function":g(h(a));break;case"object":case"undefined":if(null==h){f=!1,c=Za(a.parentNode,c,[],e);break}default:if(f=!1,d=h,!K(h))cb(h)?c=Za(a.parentNode,c,h.nodeType===v?sa.call(h.childNodes):[h],e):hb(h)?h.then(g):"placeholder"in h?gb(h,g):"text"in h?g(h.text+""):"any"in h?g(h.any):"html"in h?c=Za(a.parentNode,c,sa.call(oa(a,[].concat(h.html).join("")).childNodes),e):"length"in h?g(sa.call(h)):g(V.invoke(h,g));else if(0===h.length)c.length&&(c=Za(a.parentNode,c,[],e));else switch(b(h[0])){case"string":case"number":case"boolean":g({html:h});break;case"object":if(K(h[0])&&(h=h.concat.apply([],h)),hb(h[0])){Promise.all(h).then(g);break}default:c=Za(a.parentNode,c,h,e);}}};return g},kb=function(a,b,c){var d,e=x in a;// if the attribute is the style one
// handle it differently from others
if("style"===b)return Da(a,c,e);// the name is an event one,
// add/remove event listeners accordingly
if(/^on/.test(b)){var f=b.slice(2);return f===z||f===A?(nb&&(nb=!1,ob()),$a.add(a)):b.toLowerCase()in a&&(f=f.toLowerCase()),function(b){d!==b&&(d&&a.removeEventListener(f,d,!1),d=b,b&&a.addEventListener(f,b,!1))}}// the attribute is special ('value' in input)
// and it's not SVG *or* the name is exactly data,
// in this case assign the value directly
if("data"===b||!e&&b in a&&!ib.test(b))return function(c){d!==c&&(d=c,a[b]!==c&&(a[b]=c,null==c&&a.removeAttribute(b)))};if(b in V.attributes)return function(c){d=V.attributes[b](a,c),a.setAttribute(b,null==d?"":d)};// in every other case, use the attribute node as it is
// update only the value, set it as node only when/if needed
var g=!1,h=c.cloneNode(!0);return function(b){d!==b&&(d=b,h.value!==b&&(null==b?(g&&(g=!1,a.removeAttributeNode(h)),h.value=b):(h.value=b,!g&&(g=!0,a.setAttributeNode(h)))))}},lb=function(a){var c,d=function d(e){if(c!==e){c=e;var f=b(e);"object"===f&&e?hb(e)?e.then(d):"placeholder"in e?gb(e,d):"text"in e?d(e.text+""):"any"in e?d(e.any):"html"in e?d([].concat(e.html).join("")):"length"in e?d(sa.call(e).join("")):d(V.invoke(e,d)):"function"===f?d(e(a)):a.textContent=null==e?"":e}};return d},mb={create:db,find:eb},nb=!0;// returns nodes from wires and components
function ob(){// when hyper.Component related DOM nodes
// are appended or removed from the live tree
// these might listen to connected/disconnected events
// This utility is in charge of finding all components
// involved in the DOM update/change and dispatch
// related information to them
var a=function(a,c){for(var d,e=new F(c),f=a.length,g=0;g<f;g++)d=a[g],d.nodeType===s&&b(d,e)},b=function a(b,c){$a.has(b)&&b.dispatchEvent(c);for(var d=b.children||qa(b),e=d.length,f=0;f<e;f++)a(d[f],c)};// the way it's done is via the components weak set
// and recursively looking for nested components too
// The MutationObserver is the best way to implement that
// but there is a fallback to deprecated DOMNodeInserted/Removed
// so that even older browsers/engines can help components life-cycle
try{new MutationObserver(function(b){for(var c,d=b.length,e=0;e<d;e++)c=b[e],a(c.removedNodes,A),a(c.addedNodes,z)}).observe(document,{subtree:!0,childList:!0})}catch(b){document.addEventListener("DOMNodeRemoved",function(b){a([b.target],A)},!1),document.addEventListener("DOMNodeInserted",function(b){a([b.target],z)},!1)}}// are already known to hyperHTML
var pb=new I,qb=va();// all unique template literals
// better known as hyper.bind(node), the render is
// the main tag function in charge of fully upgrading
// or simply updating, contexts used as hyperHTML targets.
// The `this` context is either a regular DOM node or a fragment.
function rb(a){var b=pb.get(this);return b&&b.template===ta(a)?tb.apply(b.updates,arguments):sb.apply(this,arguments),this}// an upgrade is in charge of collecting template info,
// parse it once, if unknown, to map all interpolations
// as single DOM callbacks, relate such template
// to the current context, and render it after cleaning the context up
function sb(a){a=ta(a);var b=qb.get(a)||ub.call(this,a),c=ra(this.ownerDocument,b.fragment),d=mb.create(c,b.paths);pb.set(this,{template:a,updates:d}),tb.apply(d,arguments),this.textContent="",this.appendChild(c)}// an update simply loops over all mapped DOM operations
function tb(){for(var a=arguments.length,b=1;b<a;b++)this[b-1](arguments[b])}// a template can be used to create a document fragment
// aware of all interpolations and with a list
// of paths used to find once those nodes that need updates,
// no matter if these are attributes, text nodes, or regular one
function ub(a){var b=[],c=a.join(E).replace(vb,wb),d=oa(this,c);mb.find(d,b,a.slice());var e={fragment:d,paths:b};return qb.set(a,e),e}// some node could be special though, like a custom element
// with a self closing tag, which should work through these changes.
var vb=ea,wb=function(a,b,c){return w.test(b)?a:"<"+b+c+"></"+b+">"},xb=new I,yb=function a(b){var c,d,a,e,f;return function(g){g=ta(g);var h=e!==g;return h&&(e=g,a=Y(document),d="svg"===b?document.createElementNS(y,"svg"):a,f=rb.bind(d)),f.apply(null,arguments),h&&("svg"===b&&ka(a,sa.call(d.childNodes)),c=zb(a)),c}},zb=function(a){for(var b,c=a.childNodes,d=c.length,e=[],f=0;f<d;f++)b=c[f],(b.nodeType===s||0!==L.call(b.textContent).length)&&e.push(b);return 1===e.length?e[0]:new ya(e)},Ab=function(a){return rb.bind(a)};N(yb);// everything is exported directly or through the
function Bb(){var a=q(["\n<link rel=\"preload\" href=\"https://use.fontawesome.com/releases/v5.4.2/css/all.css\" as=\"style\" crossorigin=\"anonymous\">\n<link rel=\"preload\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" as=\"style\" crossorigin=\"anonymous\">\n<style lang=\"css\" media=\"all\">\n@import 'https://use.fontawesome.com/releases/v5.4.2/css/all.css';\n@import 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css';\n</style>\n\n\n\n  <div data-magic=\"","\" class=\"card-wrapper\">\n    <div class=\"card radius shadowDepth1\">\n      <div class=\"card__image border-tlr-radius\">\n        <!--<img src=\"csm_hellink_268d15ec81 - Copie.jpg\" alt=\"image\" class=\"border-tlr-radius\" />-->\n        <img src=\"","\" alt=\"\" class=\"border-tlr-radius\" />\n      </div>\n      <div class=\"card__content card__padding\">\n        <div id=\"what-is-uportal-i18n-list\" class=\"card__share\" tabindex=\"-1\" role=\"menu\">\n          <div class=\"card__social card__fix--width\">\n            <a role=\"menuitem\" id=\"","\" tabindex=\"0\" class=\"","\" href=\"","\" title=\"","\" aria-label=\"","\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"","\"></span></a>\n            <a role=\"menuitem\" id=\"","\" tabindex=\"0\" class=\"","\" href=\"","\" title=\"","\" aria-label=\"","\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"","\"></span></a>\n            <a role=\"menuitem\" id=\"","\" tabindex=\"0\" class=\"","\" href=\"","\" title=\"","\" aria-label=\"","\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"","\"></span></a>\n          </div>\n          <a class=\"share-toggle share-icon\"  onclick=\"","\" href=\"javascript:void(0);\" aria-controls=\"what-is-uportal-i18n-list\" aria-expanded=\"false\" aria-haspopup=\"true\" aria-label=\"Menu\"><i class=\"fa fa-ellipsis-v\"></i></a>\n\n\n        </div>\n        <div class=\"card__meta\">\n          <i class=\"fa fa-tags\" aria-label=\"Tag\" lang=\"en\"></i>&nbsp;:\n          <span>","</span>&nbsp;\n          <time>","</time>\n        </div>\n        <div class=\"card__article\">\n          <h2>","</h2>\n          <div>","</div>\n        </div>\n      </div>\n      <div class=\"card__action\">\n        <a href=\"","\" class=\"","\" title=\"","\" rel=\"noopener noreferrer\">","&nbsp;<span class=\"","\" aria-hidden=\"true\"></span></a>&nbsp;\n        <a href=\"","\" class=\"","\" title=\"","\" rel=\"noopener noreferrer\">","&nbsp;<span class=\"","\" aria-hidden=\"true\"></span></a>\n      </div>\n    </div>\n  </div>\n\n"]);return Bb=function(){return a},a}/**
/* Define Class of the webcomponent myCard
*/var Cb=/*#__PURE__*/function(a){function b(){var a,c;e(this,b);for(var d=arguments.length,f=Array(d),g=0;g<d;g++)f[g]=arguments[g];var h=c=p(this,(a=i(b)).call.apply(a,[this].concat(f)));h.render=h.render.bind(h),h.onclick=h.onclick.bind(h),h.getMessages=h.getMessages.bind(h);var j=h.getAttribute("messagesPath"),k=document.documentElement.lang;return h.baseId=h.getAttribute("id"),h.base=h.urlMessages(j,k),h.baseCss=h.getAttribute("cssPath"),c}return h(b,a),g(b,null,[{key:"observedAttributes",// Retrieve id of the webcomponent
// and the path of the messages displayed in the webcomponent
// and the path of the css imported into the webcomponent
get:function(){return["cssPath","id","messagesPath"]}}]),g(b,[{key:"attributeChangedCallback",value:function(a,b,c){// skip if values have not changed
if(b!==c){// update internal value with attribute value
switch(a){case"cssPath":{this.baseCss=c;break}case"id":{this.baseId=c;break}case"messagePath":{var d=document.documentElement.lang;this.base=this.urlMessage(c,d),this.getMessages();break}}// re-render view with new values
this.render()}}},{key:"connectedCallback",value:function(){this.SD=this.attachShadow({mode:"open"}),this.root=Ab(this.SD),this.getMessages()}/**
     * Build the url of the messages according to host page language
     * Supported language: en-US, fr-FR, es-ES, nl-NL (Can be extended...)
     * if host language is unknowed default to en-US messages
     */},{key:"urlMessages",value:function(a,b){return"fr-FR"===b||"es-ES"===b||"en-US"===b||"nl-NL"===b?a+"i18n/"+b:a+"i18n/en-US"}/**
     * function onclick. use to open the toggle menu in the ShadowDOM
     * keyboard and touch accessible (WCAG 2.1) exterimental CSS :focus-visible enabled in Chrome
     * focus is managed
     */},{key:"onclick",value:function(a){a.preventDefault();var b=this.SD,c=b.querySelector(".card__social"),d=b.querySelector(".card__share");c.classList.toggle("card__social--active"),d.classList.toggle("share-expanded"),"true"===d.getAttribute("aria-expanded")?d.setAttribute("aria-expanded","false"):(d.setAttribute("aria-expanded","true"),d.focus())}/**
     * function getMessages. fetch the messages.json
     */},{key:"getMessages",value:function(){var a=d(/*#__PURE__*/regeneratorRuntime.mark(function a(){var b,c;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("".concat(this.base,"/messages.json"));case 3:return b=a.sent,a.next=6,b.json();case 6:c=a.sent,this.data=c,this.render(),a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](0),console.error(a.t0);case 14:case"end":return a.stop();}},a,this,[[0,11]])}));return function(){return a.apply(this,arguments)}}()},{key:"render",value:function(){var a=this.baseCss,b=this.data,c=this.onclick,d=this.root;// exit early if no data is present
if(b){/**
       * build the import style tag into the Shadow DOM and append it to the ShadowDOM
       */var e=document.createElement("link"),f="".concat(a)+"/my-card.css";e.href=f.toString(),e.rel="preload",e.as="style",e.toString();var g=document.createElement("style");g.lang="css",g.innerHTML="@import '"+"".concat(a)+"/my-card.css';",g.toString(),d(Bb(),b.magic,b.imgsrc,b.linkMenu1.id,b.linkMenu1.cssClass,b.linkMenu1.link,b.linkMenu1.label,b.linkMenu1.label,b.linkMenu1.glyphicon,b.linkMenu2.id,b.linkMenu2.cssClass,b.linkMenu2.link,b.linkMenu2.label,b.linkMenu2.label,b.linkMenu2.glyphicon,b.linkMenu3.id,b.linkMenu3.cssClass,b.linkMenu3.link,b.linkMenu3.label,b.linkMenu3.label,b.linkMenu3.glyphicon,c,b.List.map(function(a){return" <a href=\"javascript:void(0);\">".concat(a.tag,"</a> -")}),b.time,b.title,b.paragraphs.map(function(a){return"<p>".concat(a.para,"</p>")}),b.button1.link,b.button1.cssClass,b.button1.label,b.button1.name,b.button1.glyphicon,b.button2.link,b.button2.cssClass,b.button2.label,b.button2.name,b.button2.glyphicon).appendChild(e).appendChild(g)}}}]),b}(n(HTMLElement));/**
 * Register the new item my-card
 * (customizable)
 */customElements.define("my-card",Cb);
