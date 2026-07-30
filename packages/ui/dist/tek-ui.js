/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,e$6=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$6=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$6&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$6.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$6.set(s,t));}return t}toString(){return this.cssText}};const r$5=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),i$4=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$6)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$6?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$5(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$3,defineProperty:e$5,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$4,getOwnPropertySymbols:o$5,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$2=c$1?c$1.emptyScript:"",p$2=a$1.reactiveElementPolyfillSupport,d$2=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$2:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$3(t,s),b$2={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$2 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$2){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$5(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$2}static _$Ei(){if(this.hasOwnProperty(d$2("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$2("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$2("properties"))){const t=this.properties,s=[...r$4(t),...o$5(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$2.elementStyles=[],y$2.shadowRootOptions={mode:"open"},y$2[d$2("elementProperties")]=new Map,y$2[d$2("finalized")]=new Map,p$2?.({ReactiveElement:y$2}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,i$2=t=>t,s$1=t$1.trustedTypes,e$4=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$4=`lit$${Math.random().toFixed(9).slice(2)}$`,n$1="?"+o$4,r$3=`<${n$1}>`,l$1=document,c=()=>l$1.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d$1=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_$1=/-->/g,m$2=/>/g,p$1=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g$1=/'/g,$$1=/"/g,y$1=/^(?:script|style|textarea|title)$/i,x$1=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b$1=x$1(1),E$1=Symbol.for("lit-noChange"),A$1=Symbol.for("lit-nothing"),C$1=new WeakMap,P$1=l$1.createTreeWalker(l$1,129);function V$1(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$4?e$4.createHTML(i):i}const N$1=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v$1;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v$1?"!--"===u[1]?c=_$1:void 0!==u[1]?c=m$2:void 0!==u[2]?(y$1.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p$1):void 0!==u[3]&&(c=p$1):c===p$1?">"===u[0]?(c=n??v$1,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p$1:'"'===u[3]?$$1:g$1):c===$$1||c===g$1?c=p$1:c===_$1||c===m$2?c=v$1:(c=p$1,n=void 0);const x=c===p$1&&t[i+1].startsWith("/>")?" ":"";l+=c===v$1?s+r$3:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$4+x):s+o$4+(-2===d?i:x);}return [V$1(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N$1(t,i);if(this.el=S.createElement(f,e),P$1.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P$1.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$4),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L$1:"@"===e[1]?z$1:H$1}),r.removeAttribute(t);}else t.startsWith(o$4)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y$1.test(r.tagName)){const t=r.textContent.split(o$4),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P$1.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n$1)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$4,t+1));)d.push({type:7,index:l}),t+=o$4.length-1;}l++;}}static createElement(t,i){const s=l$1.createElement("template");return s.innerHTML=t,s}}function M$1(t,i,s=t,e){if(i===E$1)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M$1(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l$1).importNode(i,true);P$1.currentNode=e;let h=P$1.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z$1(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P$1.nextNode(),o++);}return P$1.currentNode=l$1,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A$1,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M$1(this,t,i),a(t)?t===A$1||null==t||""===t?(this._$AH!==A$1&&this._$AR(),this._$AH=A$1):t!==this._$AH&&t!==E$1&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d$1(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A$1&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l$1.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V$1(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C$1.get(t.strings);return void 0===i&&C$1.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$2(t).nextSibling;i$2(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}let H$1 = class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A$1,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A$1;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M$1(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E$1,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M$1(this,e[s+n],i,n),r===E$1&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A$1?t=A$1:t!==A$1&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A$1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}};class I extends H$1{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A$1?void 0:t;}}let L$1 = class L extends H$1{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A$1);}};let z$1 = class z extends H$1{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M$1(this,t,i,0)??A$1)===E$1)return;const s=this._$AH,e=t===A$1&&s!==A$1||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A$1&&(s===A$1||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}};let Z$1 = class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M$1(this,t);}};const B$1=t$1.litHtmlPolyfillSupport;B$1?.(S,k),(t$1.litHtmlVersions??=[]).push("3.3.3");const D$1=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;let i$1 = class i extends y$2{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D$1(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E$1}};i$1._$litElement$=true,i$1["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i$1});const o$3=s.litElementPolyfillSupport;o$3?.({LitElement:i$1});(s.litElementVersions??=[]).push("4.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$2={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1},r$2=(t=o$2,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=true),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t,true,r);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t,true,r);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r$2(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r$1(r){return n({...r,state:true,attribute:false})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$3=(e,t,c)=>(c.configurable=true,c.enumerable=true,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,c),c);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$2(e,r){return (n,s,i)=>{const o=t=>t.renderRoot?.querySelector(e)??null;return e$3(n,s,{get(){return o(this)}})}}

/**
 * Shared base for the selector-family controls (tek-checkbox, tek-radio,
 * tek-toggle): checked/error/disabled reactive properties, click-to-toggle,
 * and the `tek-change` dispatch. Not a custom element itself — subclasses
 * document their own API for the manifest.
 */
class TekBaseSelector extends i$1 {
    constructor() {
        super(...arguments);
        this.checked = false;
        this.error = false;
        this.disabled = false;
        this._click = () => {
            if (this.disabled || this.error)
                return;
            this.checked = !this.checked;
            this.dispatchEvent(new CustomEvent('tek-change', {
                bubbles: true, composed: true, detail: { checked: this.checked }
            }));
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('click', this._click);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('click', this._click);
    }
}
__decorate([
    n({ type: Boolean, reflect: true })
], TekBaseSelector.prototype, "checked", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TekBaseSelector.prototype, "error", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TekBaseSelector.prototype, "disabled", void 0);

const STACK_GAP_STEPS = ['s02', 's03', 's04', 's05', 's06', 's07', 's08', 's09', 's11'];
/**
 * Vertical layout primitive (ADR-0002: layout primitives — always start with
 * layout). `gap` accepts spacing token steps ONLY (never raw px) — the same
 * steps as the Figma Gap variant axis; an unknown step warns and falls back
 * to s05.
 *
 * Figma: DS-v2 → v2.02 → Stack (node 8376:373).
 *
 * Usage:
 * ```html
 * <tek-stack gap="s04">
 *   <tek-label>Email</tek-label>
 *   <tek-input></tek-input>
 * </tek-stack>
 * ```
 *
 * @summary Vertical layout primitive with token-step gap.
 *
 * @attr {'s02'|'s03'|'s04'|'s05'|'s06'|'s07'|'s08'|'s09'|'s11'} gap - Spacing token step between children (default s05).
 * @attr {'start'|'center'|'end'|'stretch'} align - Cross-axis alignment (default stretch).
 *
 * @slot - Stacked children.
 *
 * @cssprop --tek-spacing-s02 - Through --tek-spacing-s09, plus --tek-spacing-s11: gap value for the matching `gap` step.
 */
class TekStack extends i$1 {
    constructor() {
        super(...arguments);
        this.gap = 's05';
        this.align = 'stretch';
    }
    willUpdate() {
        if (this.gap && !STACK_GAP_STEPS.includes(this.gap)) {
            console.warn(`<tek-stack> gap="${this.gap}" is not a spacing token step (${STACK_GAP_STEPS.join(', ')}); falling back to s05.`);
            this.gap = 's05';
        }
    }
    render() {
        return b$1 `<slot></slot>`;
    }
}
TekStack.styles = i$4 `
    :host {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      box-sizing: border-box;
      gap: var(--tek-spacing-s05, 8px);
    }

    :host([gap='s02']) { gap: var(--tek-spacing-s02, 2px); }
    :host([gap='s03']) { gap: var(--tek-spacing-s03, 4px); }
    :host([gap='s04']) { gap: var(--tek-spacing-s04, 6px); }
    :host([gap='s05']) { gap: var(--tek-spacing-s05, 8px); }
    :host([gap='s06']) { gap: var(--tek-spacing-s06, 10px); }
    :host([gap='s07']) { gap: var(--tek-spacing-s07, 12px); }
    :host([gap='s08']) { gap: var(--tek-spacing-s08, 14px); }
    :host([gap='s09']) { gap: var(--tek-spacing-s09, 16px); }
    :host([gap='s11']) { gap: var(--tek-spacing-s11, 24px); }

    :host([align='start'])   { align-items: flex-start; }
    :host([align='center'])  { align-items: center; }
    :host([align='end'])     { align-items: flex-end; }
    :host([align='stretch']) { align-items: stretch; }
  `;
__decorate([
    n({ reflect: true })
], TekStack.prototype, "gap", void 0);
__decorate([
    n({ reflect: true })
], TekStack.prototype, "align", void 0);
customElements.define('tek-stack', TekStack);

const ROW_GAP_STEPS = ['s02', 's03', 's04', 's05', 's06', 's07', 's08', 's09', 's11'];
/**
 * Horizontal layout primitive (ADR-0002: layout primitives — always start
 * with layout). `gap` accepts spacing token steps ONLY (never raw px) — the
 * same steps as the Figma Gap variant axis; an unknown step warns and falls
 * back to s05.
 *
 * Figma: DS-v2 → v2.02 → Row (node 8377:373).
 *
 * Usage:
 * ```html
 * <tek-row gap="s05" justify="between" align="center">
 *   <tek-stack gap="s04">…</tek-stack>
 *   <tek-stack gap="s04">…</tek-stack>
 * </tek-row>
 * ```
 *
 * @summary Horizontal layout primitive with token-step gap and alignment.
 *
 * @attr {'s02'|'s03'|'s04'|'s05'|'s06'|'s07'|'s08'|'s09'|'s11'} gap - Spacing token step between children (default s05).
 * @attr {'start'|'center'|'end'|'stretch'} align - Cross-axis alignment (default stretch).
 * @attr {'start'|'center'|'end'|'between'} justify - Main-axis distribution (default start).
 *
 * @slot - Row children.
 *
 * @cssprop --tek-spacing-s02 - Through --tek-spacing-s09, plus --tek-spacing-s11: gap value for the matching `gap` step.
 */
class TekRow extends i$1 {
    constructor() {
        super(...arguments);
        this.gap = 's05';
        this.align = 'stretch';
        this.justify = 'start';
    }
    willUpdate() {
        if (this.gap && !ROW_GAP_STEPS.includes(this.gap)) {
            console.warn(`<tek-row> gap="${this.gap}" is not a spacing token step (${ROW_GAP_STEPS.join(', ')}); falling back to s05.`);
            this.gap = 's05';
        }
    }
    render() {
        return b$1 `<slot></slot>`;
    }
}
TekRow.styles = i$4 `
    :host {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      box-sizing: border-box;
      gap: var(--tek-spacing-s05, 8px);
    }

    :host([gap='s02']) { gap: var(--tek-spacing-s02, 2px); }
    :host([gap='s03']) { gap: var(--tek-spacing-s03, 4px); }
    :host([gap='s04']) { gap: var(--tek-spacing-s04, 6px); }
    :host([gap='s05']) { gap: var(--tek-spacing-s05, 8px); }
    :host([gap='s06']) { gap: var(--tek-spacing-s06, 10px); }
    :host([gap='s07']) { gap: var(--tek-spacing-s07, 12px); }
    :host([gap='s08']) { gap: var(--tek-spacing-s08, 14px); }
    :host([gap='s09']) { gap: var(--tek-spacing-s09, 16px); }
    :host([gap='s11']) { gap: var(--tek-spacing-s11, 24px); }

    :host([align='start'])   { align-items: flex-start; }
    :host([align='center'])  { align-items: center; }
    :host([align='end'])     { align-items: flex-end; }
    :host([align='stretch']) { align-items: stretch; }

    :host([justify='start'])   { justify-content: flex-start; }
    :host([justify='center'])  { justify-content: center; }
    :host([justify='end'])     { justify-content: flex-end; }
    :host([justify='between']) { justify-content: space-between; }
  `;
__decorate([
    n({ reflect: true })
], TekRow.prototype, "gap", void 0);
__decorate([
    n({ reflect: true })
], TekRow.prototype, "align", void 0);
__decorate([
    n({ reflect: true })
], TekRow.prototype, "justify", void 0);
customElements.define('tek-row', TekRow);

const GRID_GAP_STEPS = ['s05', 's09', 's11'];
const GRID_COLUMNS = ['2', '3', '4'];
/**
 * Column-grid layout primitive (ADR-0002: layout primitives — always start
 * with layout). Equal-width columns; `columns` and `gap` mirror the Figma
 * variant axes, and `gap` accepts spacing token steps ONLY (never raw px) —
 * unknown values warn and fall back to the defaults.
 *
 * Figma: DS-v2 → v2.02 → Grid (node 8377:446).
 *
 * Usage:
 * ```html
 * <tek-grid columns="3" gap="s09">
 *   <div>…</div><div>…</div><div>…</div>
 * </tek-grid>
 * ```
 *
 * @summary Column-grid layout primitive with token-step gap.
 *
 * @attr {'s05'|'s09'|'s11'} gap - Spacing token step between cells (default s09).
 * @attr {'2'|'3'|'4'} columns - Number of equal-width columns (default 3).
 *
 * @slot - Grid cells.
 *
 * @cssprop --tek-spacing-s05 - Gap for gap="s05"; --tek-spacing-s09 and --tek-spacing-s11 likewise.
 */
class TekGrid extends i$1 {
    constructor() {
        super(...arguments);
        this.gap = 's09';
        this.columns = '3';
    }
    willUpdate() {
        if (this.gap && !GRID_GAP_STEPS.includes(this.gap)) {
            console.warn(`<tek-grid> gap="${this.gap}" is not a spacing token step (${GRID_GAP_STEPS.join(', ')}); falling back to s09.`);
            this.gap = 's09';
        }
        if (this.columns && !GRID_COLUMNS.includes(this.columns)) {
            console.warn(`<tek-grid> columns="${this.columns}" must be one of ${GRID_COLUMNS.join(', ')}; falling back to 3.`);
            this.columns = '3';
        }
    }
    render() {
        return b$1 `<slot></slot>`;
    }
}
TekGrid.styles = i$4 `
    :host {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      box-sizing: border-box;
      gap: var(--tek-spacing-s09, 16px);
    }

    :host([gap='s05']) { gap: var(--tek-spacing-s05, 8px); }
    :host([gap='s09']) { gap: var(--tek-spacing-s09, 16px); }
    :host([gap='s11']) { gap: var(--tek-spacing-s11, 24px); }

    :host([columns='2']) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    :host([columns='3']) { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    :host([columns='4']) { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  `;
__decorate([
    n({ reflect: true })
], TekGrid.prototype, "gap", void 0);
__decorate([
    n({ reflect: true })
], TekGrid.prototype, "columns", void 0);
customElements.define('tek-grid', TekGrid);

/**
 * Page frame primitive (ADR-0002: layout primitives — always start with
 * layout). Encodes the responsive `.wrap` contract from the sign-in reference
 * pages as container queries — the code analog of the Figma Breakpoint
 * variants (Mobile / SM / XL): mobile pads s17 / s13 / s11 (top / sides /
 * bottom) top-aligned, ≥ 640px widens side padding to s19, ≥ 1280px pads s19
 * all round and vertically centers content; section rhythm gap is s17
 * throughout. Layout-only: the canvas background stays on the page/body theme
 * layer — the host is kept transparent so page-level backdrops show through.
 *
 * Figma: DS-v2 → v2.02 → Page (node 8378:350).
 *
 * Usage:
 * ```html
 * <tek-page>
 *   <header>…</header>
 *   <tek-modal>…</tek-modal>
 * </tek-page>
 * ```
 *
 * @summary Responsive page frame primitive with breakpoint-driven padding and rhythm.
 *
 * @slot - Page content, laid out inside the responsive wrap.
 * @slot footer - Rendered after the wrap (e.g. tek-footer).
 *
 * @csspart wrap - The responsive content container.
 *
 * @cssprop --tek-spacing-s11 - Mobile/SM bottom padding.
 * @cssprop --tek-spacing-s13 - Mobile side padding.
 * @cssprop --tek-spacing-s17 - Section rhythm gap and top padding.
 * @cssprop --tek-spacing-s19 - Side padding ≥ 640px; all-round padding ≥ 1280px.
 */
class TekPage extends i$1 {
    render() {
        return b$1 `<div class="wrap" part="wrap"><slot></slot></div><slot name="footer"></slot>`;
    }
}
TekPage.styles = i$4 `
    :host {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      width: 100%;
      box-sizing: border-box;
      container-type: inline-size;
      container-name: page;
    }

    .wrap {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--tek-spacing-s17, 48px);
      padding: var(--tek-spacing-s17, 48px) var(--tek-spacing-s13, 32px) var(--tek-spacing-s11, 24px);
      width: 100%;
      min-height: 1px;
      box-sizing: border-box;
    }

    @container page (min-width: 640px) {
      .wrap {
        padding: var(--tek-spacing-s17, 48px) var(--tek-spacing-s19, 64px) var(--tek-spacing-s11, 24px);
      }
    }

    @container page (min-width: 1280px) {
      .wrap {
        position: relative;
        justify-content: center;
        padding: var(--tek-spacing-s19, 64px);
      }
    }
  `;
customElements.define('tek-page', TekPage);

/**
 * One entry in a `tek-dropdown` menu. `selected` and `current` reflect so the
 * Figma states (Default / Hover / Selected / Disabled) map to attributes;
 * `current` marks the keyboard-highlighted option (Shoelace "current" pattern —
 * focus stays on the trough). Blueprint: Shoelace sl-option anatomy/API,
 * tek-native implementation.
 *
 * Figma: DS-v2 → DropdownItem (node 8386:346).
 *
 * Usage:
 * ```html
 * <tek-dropdown-item value="ch1">Channel 1</tek-dropdown-item>
 * ```
 *
 * @summary Option row inside a tek-dropdown menu.
 *
 * @attr {string} value - Value reported by the parent dropdown when this option is selected.
 * @attr {boolean} disabled - Blocks selection and dims the row.
 * @attr {boolean} selected - Whether this is the selected option. Managed by the parent dropdown.
 * @attr {boolean} current - Keyboard-highlighted option. Managed by the parent dropdown.
 *
 * @slot - Option label text.
 *
 * @cssprop --tek-color-dropdown-menu-text-default - Label color.
 * @cssprop --tek-color-dropdown-menu-text-selected - Label color when selected.
 * @cssprop --tek-color-dropdown-menu-text-disabled - Label color when disabled.
 * @cssprop --tek-color-dropdown-menu-background-hover - Background on hover / when current.
 * @cssprop --tek-color-dropdown-menu-background-selected - Background when selected.
 * @cssprop --tek-borders-radius-none - Row corner radius.
 * @cssprop --tek-spacing-s03 - Row content gap.
 * @cssprop --tek-spacing-s04 - Vertical padding.
 * @cssprop --tek-spacing-s06 - Horizontal padding.
 * @cssprop --tek-fonts-family-geist - Label font family.
 * @cssprop --tek-fonts-text-size-md - Label font size.
 * @cssprop --tek-fonts-text-line-height-md - Label line height.
 */
class TekDropdownItem extends i$1 {
    constructor() {
        super(...arguments);
        this.value = '';
        this.disabled = false;
        this.selected = false;
        /** Keyboard-highlighted option (Shoelace "current" pattern — focus stays on the trough). */
        this.current = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'option');
    }
    willUpdate() {
        this.setAttribute('aria-selected', String(this.selected));
        if (this.disabled)
            this.setAttribute('aria-disabled', 'true');
        else
            this.removeAttribute('aria-disabled');
    }
    /** Text used for typeahead matching and the trough display label. */
    getTextLabel() {
        return (this.textContent ?? '').trim();
    }
    render() {
        return b$1 `<slot></slot>`;
    }
}
TekDropdownItem.styles = i$4 `
    :host {
      display: flex;
      align-items: center;
      gap: var(--tek-spacing-s03, 4px);
      padding: var(--tek-spacing-s04, 6px) var(--tek-spacing-s06, 10px);
      border-radius: var(--tek-borders-radius-none, 0);
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-md, 13px);
      line-height: var(--tek-fonts-text-line-height-md, 16px);
      color: var(--tek-color-dropdown-menu-text-default, #cccccc);
      cursor: pointer;
      user-select: none;
      box-sizing: border-box;
    }

    :host(:hover:not([disabled])),
    :host([current]:not([disabled])) {
      background: var(--tek-color-dropdown-menu-background-hover, #333333);
    }

    :host([selected]) {
      background: var(--tek-color-dropdown-menu-background-selected, #454545);
      color: var(--tek-color-dropdown-menu-text-selected, #ffffff);
    }

    :host([disabled]) {
      color: var(--tek-color-dropdown-menu-text-disabled, #454545);
      cursor: not-allowed;
    }
  `;
__decorate([
    n()
], TekDropdownItem.prototype, "value", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TekDropdownItem.prototype, "disabled", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TekDropdownItem.prototype, "selected", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TekDropdownItem.prototype, "current", void 0);
customElements.define('tek-dropdown-item', TekDropdownItem);

/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */

const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = v => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
function getSideAxis(placement) {
  const firstChar = placement[0];
  return firstChar === 't' || firstChar === 'b' ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.includes('start') ? placement.replace('start', 'end') : placement.replace('end', 'start');
}
const lrPlacement = ['left', 'right'];
const rlPlacement = ['right', 'left'];
const tbPlacement = ['top', 'bottom'];
const btPlacement = ['bottom', 'top'];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case 'left':
    case 'right':
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  const side = getSide(placement);
  return oppositeSideMap[side] + placement.slice(side.length);
}
function expandPaddingObject(padding) {
  var _padding$top, _padding$right, _padding$bottom, _padding$left;
  return {
    top: (_padding$top = padding.top) != null ? _padding$top : 0,
    right: (_padding$right = padding.right) != null ? _padding$right : 0,
    bottom: (_padding$bottom = padding.bottom) != null ? _padding$bottom : 0,
    left: (_padding$left = padding.left) != null ? _padding$left : 0
  };
}
function getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  const alignment = getAlignment(placement);
  if (alignment) {
    coords[alignmentAxis] += commonAlign * (alignment === 'end' ? 1 : -1) * (rtl && isVertical ? -1 : 1);
  }
  return coords;
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) && (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

// Maximum number of resets that can occur before bailing to avoid infinite reset loops.
const MAX_RESET_COUNT = 50;

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const platformWithDetectOverflow = platform.detectOverflow ? platform : {
    ...platform,
    detectOverflow
  };
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let resetCount = 0;
  const middlewareData = {};
  for (let i = 0; i < middleware.length; i++) {
    const currentMiddleware = middleware[i];
    if (!currentMiddleware) {
      continue;
    }
    const {
      name,
      fn
    } = currentMiddleware;
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platformWithDetectOverflow,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData[name] = {
      ...middlewareData[name],
      ...data
    };
    if (reset && resetCount < MAX_RESET_COUNT) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);

      // If a reset by the arrow was caused due to an alignment offset being
      // added, we should skip any logic now since `flip()` has already done its
      // work.
      // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await platform.detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === 'alignment' ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow ||
          // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every(d => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
            // Try next placement and re-run the lifecycle.
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$filter2;
                const placement = (_overflowsData$filter2 = overflowsData.filter(d => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = getSideAxis(d.placement);
                    return currentSideAxis === initialSideAxis ||
                    // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === 'y';
                  }
                  return true;
                }).map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

const originSides = /*#__PURE__*/new Set(['left', 'top']);

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.

async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === 'y';
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset$1 = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);

      // If the placement is the same and the arrow caused an alignment offset
      // then we don't need to change the positioning coordinates.
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement,
        platform
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await platform.detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const clampCoord = (axis, coord) => clamp(coord + overflow[axis === 'y' ? 'top' : 'left'], coord, coord - overflow[axis === 'y' ? 'bottom' : 'right']);
      if (checkMainAxis) {
        mainAxisCoord = clampCoord(mainAxis, mainAxisCoord);
      }
      if (checkCrossAxis) {
        crossAxisCoord = clampCoord(crossAxis, crossAxisCoord);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};

// Method syntax keeps callback parameters bivariant, but expressing the
// explicit `| undefined` required by `exactOptionalPropertyTypes` needs
// property syntax, which is contravariant under `strictFunctionTypes`.
// Extracting the function from a method position restores that bivariance so
// consumers can still assign callbacks with narrower parameter types.

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await platform.detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === 'y';
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const shiftData = state.middlewareData.shift;
      const noShift = !shiftData;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (shiftData != null && shiftData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if (shiftData != null && shiftData.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        if (isYAxis) {
          availableWidth = width - 2 * max(overflow.left, overflow.right);
        } else {
          availableHeight = height - 2 * max(overflow.top, overflow.bottom);
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

function hasWindow() {
  return typeof window !== 'undefined';
}
function getNodeName(node) {
  if (isNode$1(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode$1(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode$1(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== 'inline' && display !== 'contents';
}
function isTableElement(element) {
  return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
  try {
    if (element.matches(':popover-open')) {
      return true;
    }
  } catch (_e) {
    // no-op
  }
  try {
    return element.matches(':modal');
  } catch (_e) {
    return false;
  }
}
const willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
const containRe = /paint|layout|strict|content/;
const isNotNone = value => !!value && value !== 'none';
let isWebKitValue;
function isContainingBlock(elementOrCss) {
  const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  // https://drafts.csswg.org/css-transforms-2/#individual-transforms
  return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || '') || containRe.test(css.contain || '');
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (isWebKitValue == null) {
    isWebKitValue = typeof CSS !== 'undefined' && CSS.supports && CSS.supports('-webkit-backdrop-filter', 'none');
  }
  return isWebKitValue;
}
function isLastTraversableNode(node) {
  return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return (node.ownerDocument || node).body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  } else {
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  return !!floatingOffsetParent && isFixed && floatingOffsetParent === getWindow(element);
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement && offsetParent) {
    const win = getWindow(domElement);
    const offsetWin = isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}

function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === 'fixed';
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}

function getClientRects(element) {
  return element.getClientRects ? Array.from(element.getClientRects()) : [];
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(html) {
  const scroll = getNodeScroll(html);
  const body = html.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(html);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Safety check: ensure the scrollbar space is reasonable in case this
// calculation is affected by unusual styles.
// Most scrollbars leave 15-18px of space.
const SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy, rootBoundary) {
  if (rootBoundary === void 0) {
    rootBoundary = 'viewport';
  }
  const isLayoutViewport = rootBoundary === 'layoutViewport';
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    // Client coordinates are relative to the layout viewport, except in
    // WebKit with an `absolute` strategy, where they are relative to the
    // visual viewport.
    const layoutRelativeClientCoords = !isWebKit() || strategy === 'fixed';
    if (isLayoutViewport) {
      if (!layoutRelativeClientCoords) {
        x = -visualViewport.offsetLeft;
        y = -visualViewport.offsetTop;
      }
    } else {
      width = visualViewport.width;
      height = visualViewport.height;
      if (layoutRelativeClientCoords) {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  // `scrollbar-gutter: stable` on the <html> reserves gutter space that shrinks
  // the visual width but isn't reflected in `html.clientWidth`, so subtract it.
  // Only the inline-end (right) gutter can hold the scrollbar; `both-edges` also
  // reserves an empty inline-start gutter that clips nothing, so exclude just
  // the one scrollbar-side gutter — halve the measured (two-gutter) total. A
  // left-side scrollbar (`windowScrollbarX > 0`) is already handled by
  // `getHTMLOffset`/`visualViewport.width`; skip it here.
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === 'CSS1Compat' ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const reservedWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    const gutter = getComputedStyle(html).scrollbarGutter === 'stable both-edges' ? reservedWidth / 2 : reservedWidth;
    if (gutter <= SCROLLBAR_MAX) {
      width -= gutter;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = getScale(element);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport' || clippingAncestor === 'layoutViewport') {
    rect = getViewportRect(element, strategy, clippingAncestor);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let lastKeptComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    // Position of the containing block chain below the current node. A fixed
    // element whose containing block hasn't been found yet is a fixed chain.
    const lastPosition = lastKeptComputedStyle ? lastKeptComputedStyle.position : elementIsFixed ? 'fixed' : '';

    // A non-containing ancestor does not clip the element when the chain
    // below it escapes it: a fixed chain escapes all ancestors up to the
    // next containing block, an absolute chain escapes static ancestors.
    const shouldDropCurrentNode = !currentNodeIsContaining && (lastPosition === 'fixed' || lastPosition === 'absolute' && computedStyle.position === 'static');
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // The kept node carries the chain position for the next iteration.
      lastKeptComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
  let top = firstRect.top;
  let right = firstRect.right;
  let bottom = firstRect.bottom;
  let left = firstRect.left;
  for (let i = 1; i < clippingAncestors.length; i++) {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i], strategy);
    top = max(rect.top, top);
    right = min(rect.right, right);
    bottom = min(rect.bottom, bottom);
    left = max(rect.left, left);
  }
  return {
    width: right - left,
    height: bottom - top,
    x: left,
    y: top
  };
}

function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }

  // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
  // Firefox with layout.scrollbar.side = 3 in about:config to test this.
  if (!isOffsetParentAnElement && documentElement) {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}

function isStaticPositioned(element) {
  return getComputedStyle$1(element).position === 'static';
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;

  // Firefox returns the <html> element as the offsetParent if it's non-static,
  // while Chrome and Safari return the <body> element. The <body> element must
  // be used to perform the correct calculations even if the <html> element is
  // non-static.
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}

const getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};

function isRTL(element) {
  return getComputedStyle$1(element).direction === 'rtl';
}

const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};

function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove, ancestorResize) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;

      // The entry is a snapshot, so the reference may have moved since the
      // intersection was computed (under performance constraints, or between
      // consecutive frames of a multi-frame layout shift). The reported ratio
      // and the observed area are stale in that case and cannot be trusted to
      // detect subsequent movement, so refresh regardless of the ratio.
      if (!rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        return refresh();
      }
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          // If the reference is clipped in place, the ratio is 0. Throttle
          // the refresh to prevent an infinite loop of updates.
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1000);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  const win = getWindow(element);
  // The window is a resize ancestor, so when `ancestorResize` is enabled its
  // listener already runs the update on resize. Here we only need to rebuild
  // the `IntersectionObserver` for the new root size, skipping a redundant
  // update. When `ancestorResize` is disabled, this becomes the sole update.
  const handleResize = () => refresh(ancestorResize);
  win.addEventListener('resize', handleResize);
  refresh(true);
  return () => {
    win.removeEventListener('resize', handleResize);
    cleanup();
  };
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === 'function',
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...(floating ? getOverflowAncestors(floating) : [])] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update);
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update, ancestorResize) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    if (floating) {
      resizeObserver.observe(floating);
    }
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = offset$1;

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = shift$1;

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = flip$1;

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = size$1;

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = options != null ? options : {};
  const platformWithCache = {
    ...platform,
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

/**
 * Select-style dropdown: focus stays on the trough and the keyboard-highlighted
 * option is marked `current`, since aria-activedescendant cannot cross shadow
 * boundaries to light-DOM options. Supports Arrow/Home/End/Escape and typeahead;
 * the menu is positioned with Floating UI (flip + width-sync + max-height), the
 * first overlay under the ADR-0001 framework budget. Blueprint: Shoelace
 * sl-select API + Lion listbox semantics, reimplemented tek-native.
 *
 * Figma: DS-v2 → Dropdown (node 8387:386), DropdownMenu (node 8386:347).
 *
 * Usage:
 * ```html
 * <tek-dropdown placeholder="Select a channel">
 *   <tek-dropdown-item value="ch1">Channel 1</tek-dropdown-item>
 *   <tek-dropdown-item value="ch2">Channel 2</tek-dropdown-item>
 * </tek-dropdown>
 * ```
 *
 * @summary Select-style dropdown with keyboard navigation, typeahead, and a Floating UI menu.
 *
 * @attr {string} value - Value of the selected item.
 * @attr {string} [placeholder="Select an option"] - Trough text when nothing is selected.
 * @attr {string} name - When set, renders a hidden input with this name for form submission.
 * @attr {boolean} disabled - Blocks interaction and dims the control.
 * @attr {boolean} error - Error state; red border, white display text.
 * @attr {boolean} open - Whether the menu is open. Reflected; managed by the component.
 *
 * @fires {CustomEvent} tek-change - Fired when the selection changes, with `detail.value`. Bubbles, composed.
 * @fires {CustomEvent} tek-open - Fired when the menu opens. Bubbles, composed.
 * @fires {CustomEvent} tek-close - Fired when the menu closes. Bubbles, composed.
 *
 * @slot - The `tek-dropdown-item` options.
 *
 * @csspart trough - The closed-control container.
 * @csspart display - The selected-value / placeholder span.
 * @csspart caret - The caret icon span.
 * @csspart menu - The floating menu container.
 *
 * @cssprop --tek-color-dropdown-background-default - Trough background.
 * @cssprop --tek-color-dropdown-border-default - Trough border per state; also `-focus`, `-error`, `-disabled`.
 * @cssprop --tek-color-dropdown-text-default - Display text per state; also `-filled`, `-error`, `-disabled`.
 * @cssprop --tek-color-dropdown-menu-background-default - Menu background.
 * @cssprop --tek-color-dropdown-menu-border-default - Menu border.
 * @cssprop --tek-color-dropdown-menu-shadow-default - Menu drop shadow.
 * @cssprop --tek-color-icons-default - Caret color.
 * @cssprop --tek-borders-radius-03 - Trough and menu corner radius.
 * @cssprop --tek-borders-width-01 - Trough and menu border width.
 * @cssprop --tek-spacing-s02 - Menu padding; also the trough-to-menu gap.
 * @cssprop --tek-spacing-s03 - Trough content gap and right padding.
 * @cssprop --tek-spacing-s05 - Trough vertical padding.
 * @cssprop --tek-spacing-s06 - Trough left padding.
 * @cssprop --tek-fonts-family-geist - Text font family.
 * @cssprop --tek-fonts-text-size-md - Display text font size.
 * @cssprop --tek-fonts-text-line-height-md - Display text line height.
 */
class TekDropdown extends i$1 {
    constructor() {
        super(...arguments);
        this.value = '';
        this.placeholder = 'Select an option';
        this.name = '';
        this.disabled = false;
        this.error = false;
        this.open = false;
        this.displayLabel = '';
        this.typeBuffer = '';
        this.onDocumentMouseDown = (e) => {
            if (this.open && !e.composedPath().includes(this))
                this.hide(false);
        };
    }
    get options() {
        return Array.from(this.querySelectorAll('tek-dropdown-item'));
    }
    get enabledOptions() {
        return this.options.filter(o => !o.disabled);
    }
    get currentOption() {
        return this.options.find(o => o.current);
    }
    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('mousedown', this.onDocumentMouseDown);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('mousedown', this.onDocumentMouseDown);
        this.stopFloating();
    }
    willUpdate() {
        const selected = this.options.find(o => o.value === this.value && this.value !== '');
        this.displayLabel = selected ? selected.getTextLabel() : '';
        if (selected)
            this.setAttribute('data-filled', '');
        else
            this.removeAttribute('data-filled');
    }
    updated(changed) {
        if (changed.has('open')) {
            if (this.open)
                this.startFloating();
            else
                this.stopFloating();
        }
    }
    syncSelection() {
        for (const o of this.options)
            o.selected = o.value === this.value && this.value !== '';
    }
    setCurrent(option) {
        for (const o of this.options)
            o.current = o === option;
        option?.scrollIntoView({ block: 'nearest' });
    }
    show() {
        if (this.disabled || this.open)
            return;
        this.open = true;
        this.syncSelection();
        this.setCurrent(this.options.find(o => o.selected) ?? this.enabledOptions[0]);
        this.dispatchEvent(new CustomEvent('tek-open', { bubbles: true, composed: true }));
    }
    hide(returnFocus = true) {
        if (!this.open)
            return;
        this.open = false;
        this.setCurrent(undefined);
        this.dispatchEvent(new CustomEvent('tek-close', { bubbles: true, composed: true }));
        if (returnFocus)
            this.trough?.focus({ preventScroll: true });
    }
    select(option) {
        if (option.disabled)
            return;
        const changed = this.value !== option.value;
        this.value = option.value;
        this.syncSelection();
        this.hide();
        if (changed) {
            this.dispatchEvent(new CustomEvent('tek-change', {
                detail: { value: this.value }, bubbles: true, composed: true
            }));
        }
    }
    startFloating() {
        // gap below the trough = s02, read from the token so the value stays tokenized
        const gap = parseFloat(getComputedStyle(this).getPropertyValue('--tek-spacing-s02')) || 2;
        this.cleanupFloating = autoUpdate(this.trough, this.menu, () => {
            computePosition(this.trough, this.menu, {
                placement: 'bottom-start',
                middleware: [
                    offset(gap),
                    flip(),
                    size({
                        apply: ({ rects, availableHeight }) => {
                            Object.assign(this.menu.style, {
                                width: `${rects.reference.width}px`,
                                maxHeight: `${Math.max(96, Math.min(availableHeight - 8, 320))}px`
                            });
                        }
                    })
                ]
            }).then(({ x, y }) => {
                Object.assign(this.menu.style, { left: `${x}px`, top: `${y}px` });
            });
        });
    }
    stopFloating() {
        this.cleanupFloating?.();
        this.cleanupFloating = undefined;
    }
    onTroughClick() {
        if (this.disabled)
            return;
        this.open ? this.hide() : this.show();
    }
    onMenuClick(e) {
        const option = e.target.closest?.('tek-dropdown-item');
        if (option && this.options.includes(option))
            this.select(option);
    }
    moveCurrent(delta) {
        const opts = this.enabledOptions;
        if (!opts.length)
            return;
        const cur = this.currentOption;
        let idx = cur ? opts.indexOf(cur) + delta : delta > 0 ? 0 : opts.length - 1;
        idx = (idx + opts.length) % opts.length;
        this.setCurrent(opts[idx]);
    }
    typeahead(key) {
        clearTimeout(this.typeTimer);
        this.typeBuffer += key.toLowerCase();
        this.typeTimer = setTimeout(() => { this.typeBuffer = ''; }, 1000);
        const match = this.enabledOptions.find(o => o.getTextLabel().toLowerCase().startsWith(this.typeBuffer));
        if (match) {
            if (this.open)
                this.setCurrent(match);
            else
                this.select(match);
        }
    }
    onKeyDown(e) {
        if (this.disabled)
            return;
        const { key } = e;
        if (key === 'Escape') {
            if (this.open) {
                e.preventDefault();
                this.hide();
            }
            return;
        }
        if (key === 'Enter' || (key === ' ' && this.typeBuffer === '')) {
            e.preventDefault();
            if (!this.open)
                this.show();
            else if (this.currentOption)
                this.select(this.currentOption);
            return;
        }
        if (key === 'ArrowDown' || key === 'ArrowUp') {
            e.preventDefault();
            if (!this.open) {
                this.show();
                return;
            }
            this.moveCurrent(key === 'ArrowDown' ? 1 : -1);
            return;
        }
        if (key === 'Home' || key === 'End') {
            if (this.open) {
                e.preventDefault();
                const opts = this.enabledOptions;
                this.setCurrent(key === 'Home' ? opts[0] : opts[opts.length - 1]);
            }
            return;
        }
        if (key === 'Tab') {
            if (this.open)
                this.hide(false);
            return;
        }
        if (key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
            e.preventDefault();
            this.typeahead(key);
        }
    }
    render() {
        return b$1 `
      <div
        class="trough"
        part="trough"
        role="combobox"
        tabindex=${this.disabled ? '-1' : '0'}
        aria-expanded=${this.open ? 'true' : 'false'}
        aria-haspopup="listbox"
        aria-disabled=${this.disabled ? 'true' : 'false'}
        @click=${this.onTroughClick}
        @keydown=${this.onKeyDown}
      >
        <span class="display" part="display">${this.displayLabel || this.placeholder}</span>
        <span class="caret" part="caret" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>
      <div class="menu" part="menu" role="listbox" @click=${this.onMenuClick}>
        <slot @slotchange=${this.syncSelection}></slot>
      </div>
      ${this.name ? b$1 `<input type="hidden" name=${this.name} .value=${this.value}>` : A$1}
    `;
    }
}
TekDropdown.styles = i$4 `
    :host {
      display: block;
      position: relative;
      width: 100%;
      box-sizing: border-box;
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
    }

    .trough {
      display: flex;
      align-items: center;
      gap: var(--tek-spacing-s03, 4px);
      width: 100%;
      height: 36px;
      padding: var(--tek-spacing-s05, 8px) var(--tek-spacing-s03, 4px)
               var(--tek-spacing-s05, 8px) var(--tek-spacing-s06, 10px);
      box-sizing: border-box;
      background: var(--tek-color-dropdown-background-default, #252525);
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-dropdown-border-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-03, 5px);
      cursor: pointer;
      outline: none;
    }

    .trough:focus-visible,
    :host([open]) .trough {
      border-color: var(--tek-color-dropdown-border-focus, #ffffff);
    }

    :host([error]) .trough {
      border-color: var(--tek-color-dropdown-border-error, #e74848);
    }

    :host([disabled]) .trough {
      border-color: var(--tek-color-dropdown-border-disabled, #454545);
      cursor: not-allowed;
    }

    .display {
      flex: 1 1 0;
      min-width: 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: var(--tek-fonts-text-size-md, 13px);
      line-height: var(--tek-fonts-text-line-height-md, 16px);
      color: var(--tek-color-dropdown-text-default, #979797);
    }

    :host([data-filled]) .display { color: var(--tek-color-dropdown-text-filled, #cccccc); }
    :host([error]) .display { color: var(--tek-color-dropdown-text-error, #ffffff); }
    :host([disabled]) .display { color: var(--tek-color-dropdown-text-disabled, #454545); }

    .caret {
      flex-shrink: 0;
      display: flex;
      color: var(--tek-color-icons-default, #ffffff);
      transition: transform 120ms ease;
    }
    :host([open]) .caret { transform: rotate(180deg); }
    :host([disabled]) .caret { color: var(--tek-color-dropdown-text-disabled, #454545); }

    .menu {
      position: absolute;
      z-index: 10;
      display: none;
      flex-direction: column;
      gap: 0;
      padding: var(--tek-spacing-s02, 2px);
      box-sizing: border-box;
      background: var(--tek-color-dropdown-menu-background-default, #252525);
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-dropdown-menu-border-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-03, 5px);
      box-shadow: 0 4px 12px var(--tek-color-dropdown-menu-shadow-default, rgba(0, 0, 0, 0.2));
      overflow-y: auto;
    }
    :host([open]) .menu { display: flex; }
  `;
__decorate([
    n()
], TekDropdown.prototype, "value", void 0);
__decorate([
    n()
], TekDropdown.prototype, "placeholder", void 0);
__decorate([
    n()
], TekDropdown.prototype, "name", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TekDropdown.prototype, "disabled", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TekDropdown.prototype, "error", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TekDropdown.prototype, "open", void 0);
__decorate([
    r$1()
], TekDropdown.prototype, "displayLabel", void 0);
__decorate([
    e$2('.trough')
], TekDropdown.prototype, "trough", void 0);
__decorate([
    e$2('.menu')
], TekDropdown.prototype, "menu", void 0);
customElements.define('tek-dropdown', TekDropdown);

/**
 * One tab item of a `<tek-tabs>` group. Its visual style (pill | nav) is
 * assigned by the parent tek-tabs via the `data-style` attribute — never set
 * it by hand. Type follows the Geist styles only: pill = text/regular/sm,
 * nav = text/regular/md.
 *
 * Figma: DS-v2 → v2.02 → Tab (node 8393:377).
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §3.
 *
 * Usage:
 * ```html
 * <tek-tab value="config" active>Configuration</tek-tab>
 * ```
 *
 * @summary Single tab item, styled as pill or nav by its parent tek-tabs.
 *
 * @attr {string} value - Value reported by tek-tabs when this tab is selected.
 * @attr {boolean} active - Whether this tab is the selected one.
 * @attr {boolean} disabled - Blocks interaction and dims the tab.
 *
 * @slot - Tab label.
 *
 * @cssprop --tek-color-tabs-tab-* - Pill colors: text-inactive/-active, background-hover/-active.
 * @cssprop --tek-color-tabs-nav-* - Nav colors: text-inactive/-active, background-hover/-active, accent-default (active left bar).
 * @cssprop --tek-colors-brand-tek-blue - Focus-visible outline color.
 * @cssprop --tek-spacing-s05 - Pill vertical padding (s06 for nav; s07 horizontal for both).
 * @cssprop --tek-borders-radius-full - Pill corner radius.
 * @cssprop --tek-borders-width-05 - Nav left accent bar width.
 * @cssprop --tek-fonts-family-geist - Label font family.
 * @cssprop --tek-fonts-text-size-sm - Pill type size (md for nav, with matching line-height tokens).
 */
class TekTab extends i$1 {
    constructor() {
        super(...arguments);
        this.value = '';
        this.active = false;
        this.disabled = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'tab');
    }
    willUpdate() {
        this.setAttribute('aria-selected', String(this.active));
        if (this.disabled)
            this.setAttribute('aria-disabled', 'true');
        else
            this.removeAttribute('aria-disabled');
    }
    render() {
        return b$1 `<slot></slot>`;
    }
}
TekTab.styles = i$4 `
    :host {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      box-sizing: border-box;
      white-space: nowrap;
      outline: none;
    }

    :host(:focus-visible) {
      outline: 2px solid var(--tek-colors-brand-tek-blue, #33baea);
      outline-offset: 1px;
    }

    :host([disabled]) {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    }

    /* ---- pill (horizontal sub-tabs) ---- */
    :host([data-style='pill']) {
      padding: var(--tek-spacing-s05, 8px) var(--tek-spacing-s07, 12px);
      border-radius: var(--tek-borders-radius-full, 9999px);
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-sm, 12px);
      line-height: var(--tek-fonts-text-line-height-sm, 12px);
      color: var(--tek-color-tabs-tab-text-inactive, #979797);
    }
    :host([data-style='pill']:hover:not([active])) {
      background: var(--tek-color-tabs-tab-background-hover, rgba(51, 186, 234, 0.08));
    }
    :host([data-style='pill'][active]) {
      background: var(--tek-color-tabs-tab-background-active, #33baea);
      color: var(--tek-color-tabs-tab-text-active, #1e1e1e);
    }

    /* ---- nav (vertical app navigation) ----
       Figma Tab Style=Nav: Archivo SemiBold 14/22, +1% tracking; the active
       accent is a flush, full-height bar on the tab's left edge (Bryan's
       2026-07-22 call — the inset text-height bar was rejected). */
    :host([data-style='nav']) {
      padding: var(--tek-spacing-s06, 10px) var(--tek-spacing-s07, 12px);
      border-left: var(--tek-borders-width-05, 3px) solid transparent;
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-md, 13px);
      line-height: var(--tek-fonts-text-line-height-md, 16px);
      color: var(--tek-color-tabs-nav-text-inactive, #979797);
    }
    :host([data-style='nav']:hover:not([active])) {
      background: var(--tek-color-tabs-nav-background-hover, rgba(30, 30, 30, 0.5));
    }
    :host([data-style='nav'][active]) {
      border-left-color: var(--tek-color-tabs-nav-accent-default, #33baea);
      background: var(--tek-color-tabs-nav-background-active, rgba(51, 186, 234, 0.12));
      color: var(--tek-color-tabs-nav-text-active, #ffffff);
    }
  `;
__decorate([
    n()
], TekTab.prototype, "value", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TekTab.prototype, "active", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TekTab.prototype, "disabled", void 0);
customElements.define('tek-tab', TekTab);

/**
 * Tab group with two shipped structures (underline deferred per spec):
 * horizontal — a sub-tab pill group whose container mirrors the input trough —
 * and vertical — app-nav with a left accent bar. Keyboard: arrows move focus
 * among tabs (roving tabindex), Home/End jump, Enter/Space activates the
 * focused tab (manual activation).
 *
 * Figma: DS-v2 → v2.02 → Tabs (node 8393:395), Tab (8393:377).
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §3.
 *
 * Usage:
 * ```html
 * <tek-tabs orientation="horizontal" aria-label="Report views">
 *   <tek-tab value="config" active>Configuration</tek-tab>
 *   <tek-tab value="view">View Settings</tek-tab>
 * </tek-tabs>
 * ```
 *
 * @summary Tab group: horizontal pill sub-tabs or vertical accent-bar app-nav.
 *
 * @attr {'horizontal'|'vertical'} orientation - horizontal renders tabs as pills; vertical renders the nav style.
 * @attr {'pill'|'underline'|'accent'|''} variant - Optional override; "underline" is deferred and falls back (with a console warning) to the orientation default.
 *
 * @slot - The `<tek-tab>` children.
 *
 * @fires {CustomEvent} tek-change - Fired on selection with `detail.value` and `detail.previousValue` (the spec's `tab-change` renamed to the tek-* event convention). Bubbles, composed.
 *
 * @cssprop --tek-color-tabs-container-background-default - Horizontal pill-container background.
 * @cssprop --tek-color-tabs-container-border-default - Horizontal pill-container border color.
 * @cssprop --tek-spacing-s02 - Horizontal gap and container padding.
 * @cssprop --tek-spacing-s03 - Vertical gap between nav tabs.
 * @cssprop --tek-borders-radius-full - Horizontal container corner radius.
 * @cssprop --tek-borders-width-01 - Horizontal container border width.
 */
class TekTabs extends i$1 {
    constructor() {
        super(...arguments);
        this.orientation = 'horizontal';
        this.variant = '';
        this.syncTabs = () => {
            const active = this.tabs.find(t => t.active) ?? this.enabledTabs[0];
            for (const t of this.tabs) {
                t.setAttribute('data-style', this.resolvedStyle);
                t.tabIndex = t === active && !t.disabled ? 0 : -1;
            }
        };
        this.onClick = (e) => {
            const tab = e.target.closest?.('tek-tab');
            if (tab && this.tabs.includes(tab))
                this.select(tab);
        };
        this.onKeyDown = (e) => {
            const tab = e.target.closest?.('tek-tab');
            if (!tab)
                return;
            const tabs = this.enabledTabs;
            const idx = tabs.indexOf(tab);
            const { key } = e;
            if (key === 'Enter' || key === ' ') {
                e.preventDefault();
                this.select(tab);
                return;
            }
            let next;
            if (key === 'ArrowRight' || key === 'ArrowDown')
                next = tabs[(idx + 1) % tabs.length];
            else if (key === 'ArrowLeft' || key === 'ArrowUp')
                next = tabs[(idx - 1 + tabs.length) % tabs.length];
            else if (key === 'Home')
                next = tabs[0];
            else if (key === 'End')
                next = tabs[tabs.length - 1];
            if (next) {
                e.preventDefault();
                for (const t of this.tabs)
                    t.tabIndex = t === next ? 0 : -1;
                next.focus();
            }
        };
    }
    get tabs() {
        return Array.from(this.querySelectorAll('tek-tab'));
    }
    get enabledTabs() {
        return this.tabs.filter(t => !t.disabled);
    }
    get value() {
        return this.tabs.find(t => t.active)?.value ?? '';
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'tablist');
        this.addEventListener('click', this.onClick);
        this.addEventListener('keydown', this.onKeyDown);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('click', this.onClick);
        this.removeEventListener('keydown', this.onKeyDown);
    }
    willUpdate() {
        this.setAttribute('aria-orientation', this.orientation);
        if (this.variant === 'underline') {
            console.warn('<tek-tabs> variant="underline" is deferred (rr-audit §3); falling back to the orientation default.');
            this.variant = '';
        }
    }
    get resolvedStyle() {
        return this.orientation === 'vertical' ? 'nav' : 'pill';
    }
    updated() {
        this.syncTabs();
    }
    select(tab) {
        if (tab.disabled || tab.active)
            return;
        const previousValue = this.value;
        for (const t of this.tabs)
            t.active = t === tab;
        this.syncTabs();
        this.dispatchEvent(new CustomEvent('tek-change', {
            detail: { value: tab.value, previousValue }, bubbles: true, composed: true
        }));
    }
    render() {
        return b$1 `<slot @slotchange=${this.syncTabs}></slot>`;
    }
}
TekTabs.styles = i$4 `
    :host {
      display: inline-flex;
      box-sizing: border-box;
    }

    :host([orientation='horizontal']) {
      flex-direction: row;
      gap: var(--tek-spacing-s02, 2px);
      padding: var(--tek-spacing-s02, 2px);
      background: var(--tek-color-tabs-container-background-default, #252525);
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-tabs-container-border-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-full, 9999px);
    }

    :host([orientation='vertical']) {
      flex-direction: column;
      gap: var(--tek-spacing-s03, 4px);
    }
  `;
__decorate([
    n({ reflect: true })
], TekTabs.prototype, "orientation", void 0);
__decorate([
    n()
], TekTabs.prototype, "variant", void 0);
customElements.define('tek-tabs', TekTabs);

const BADGE_TYPES = ['neutral', 'blue', 'success', 'warning', 'error'];
/**
 * Small pill-shaped status label. The `type` attribute picks one of five
 * background/text color pairs; unknown values fall back to neutral with a
 * console warning.
 *
 * Figma: DS-v2 → Badge (node 8400:377). Geist Regular 10px.
 *
 * Usage:
 * ```html
 * <tek-badge type="success">Passing</tek-badge>
 * ```
 *
 * @summary Pill-shaped status badge — neutral/blue/success/warning/error types.
 *
 * @attr {("neutral"|"blue"|"success"|"warning"|"error")} [type="neutral"] - Color pair. Unknown values fall back to neutral.
 *
 * @slot - Badge text.
 *
 * @cssprop --tek-color-badge-neutral-background - Background, neutral type. Same pattern per type: `--tek-color-badge-<type>-background` for blue, success, warning, error.
 * @cssprop --tek-color-badge-neutral-text - Text color, neutral type. Same pattern per type: `--tek-color-badge-<type>-text`.
 * @cssprop --tek-borders-radius-full - Corner radius (pill).
 * @cssprop --tek-spacing-s02 - Vertical padding.
 * @cssprop --tek-spacing-s05 - Horizontal padding.
 * @cssprop --tek-fonts-family-geist - Text font family.
 * @cssprop --tek-fonts-text-size-xs - Font size.
 * @cssprop --tek-fonts-text-line-height-xs - Line height.
 */
class TekBadge extends i$1 {
    constructor() {
        super(...arguments);
        this.type = 'neutral';
    }
    willUpdate() {
        if (this.type && !BADGE_TYPES.includes(this.type)) {
            console.warn(`<tek-badge> type="${this.type}" is not one of ${BADGE_TYPES.join(', ')}; falling back to neutral.`);
            this.type = 'neutral';
        }
    }
    render() {
        return b$1 `<slot></slot>`;
    }
}
TekBadge.styles = i$4 `
    :host {
      display: inline-flex;
      align-items: center;
      padding: var(--tek-spacing-s02, 2px) var(--tek-spacing-s05, 8px);
      border-radius: var(--tek-borders-radius-full, 9999px);
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-xs, 10px);
      line-height: var(--tek-fonts-text-line-height-xs, 12px);
      white-space: nowrap;
      background: var(--tek-color-badge-neutral-background, #333333);
      color: var(--tek-color-badge-neutral-text, #cccccc);
    }
    :host([type='blue'])    { background: var(--tek-color-badge-blue-background, #33baea);    color: var(--tek-color-badge-blue-text, #1e1e1e); }
    :host([type='success']) { background: var(--tek-color-badge-success-background, #42b54c); color: var(--tek-color-badge-success-text, #1e1e1e); }
    :host([type='warning']) { background: var(--tek-color-badge-warning-background, #e0b732); color: var(--tek-color-badge-warning-text, #1e1e1e); }
    :host([type='error'])   { background: var(--tek-color-badge-error-background, #e74848);   color: var(--tek-color-badge-error-text, #ffffff); }
  `;
__decorate([
    n({ reflect: true })
], TekBadge.prototype, "type", void 0);
customElements.define('tek-badge', TekBadge);

/**
 * 32px bottom application bar with three regions: a pre-release build-flag
 * slot, flexible status text, and right-aligned actions. `variant` tints the
 * whole bar (error/loading) by layering the tint token over the default
 * background — the same compositing as the Figma variants; `status` colors
 * the status text.
 *
 * Figma: DS-v2 → v2.02 → StatusBar (node 8406:409).
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §4.
 *
 * Usage:
 * ```html
 * <tek-status-bar status="running">Acquiring waveform…</tek-status-bar>
 * ```
 *
 * @summary Bottom application status bar with build flag, status text, and actions.
 *
 * @attr {'default'|'error'|'loading'} variant - Tints the whole bar over the default background.
 * @attr {'ready'|'running'|'success'|'warning'|'error'} status - Colors the status text.
 *
 * @slot - Status text (text/mono/xs; color follows `status`).
 * @slot build-flag - Pre-release pill (tek-badge); production simply omits it — never baked into the component.
 * @slot actions - Right-aligned controls.
 *
 * @csspart build-flag - The build-flag container.
 * @csspart status-text - The status text container (role=status).
 * @csspart actions - The actions container.
 *
 * @cssprop --tek-color-statusbar-background-default - Bar background.
 * @cssprop --tek-color-statusbar-background-error - Error variant tint layer.
 * @cssprop --tek-color-statusbar-background-loading - Loading variant tint layer.
 * @cssprop --tek-color-statusbar-border-default - Top border color.
 * @cssprop --tek-color-statusbar-text-default - Status text color; -running/-success/-warning/-error take over per `status`.
 * @cssprop --tek-spacing-s03 - Gap inside the build-flag and actions regions.
 * @cssprop --tek-spacing-s05 - Region gap and vertical padding.
 * @cssprop --tek-spacing-s07 - Horizontal padding.
 * @cssprop --tek-borders-width-01 - Top border width.
 * @cssprop --tek-fonts-family-mono - Text font family.
 * @cssprop --tek-fonts-text-size-xs - Text size (with the matching line-height token).
 */
class TekStatusBar extends i$1 {
    constructor() {
        super(...arguments);
        this.variant = 'default';
        this.status = 'ready';
    }
    render() {
        return b$1 `
      <div class="flag" part="build-flag"><slot name="build-flag"></slot></div>
      <div class="text" part="status-text" role="status"><slot></slot></div>
      <div class="actions" part="actions"><slot name="actions"></slot></div>
    `;
    }
}
TekStatusBar.styles = i$4 `
    :host {
      display: flex;
      align-items: center;
      gap: var(--tek-spacing-s05, 8px);
      height: 32px;
      padding: var(--tek-spacing-s05, 8px) var(--tek-spacing-s07, 12px);
      box-sizing: border-box;
      width: 100%;
      background-color: var(--tek-color-statusbar-background-default, #252525);
      border-top: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-statusbar-border-default, #7b7b7b);
      font-family: var(--tek-fonts-family-mono, monospace);
      font-size: var(--tek-fonts-text-size-xs, 10px);
      line-height: var(--tek-fonts-text-line-height-xs, 12px);
    }

    /* variant tint layers over the default background, like the Figma fills */
    :host([variant='error']) {
      background-image: linear-gradient(
        var(--tek-color-statusbar-background-error, rgba(231, 72, 72, 0.1)),
        var(--tek-color-statusbar-background-error, rgba(231, 72, 72, 0.1)));
    }
    :host([variant='loading']) {
      background-image: linear-gradient(
        var(--tek-color-statusbar-background-loading, rgba(51, 186, 234, 0.1)),
        var(--tek-color-statusbar-background-loading, rgba(51, 186, 234, 0.1)));
    }

    .text {
      flex: 1 1 0;
      min-width: 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: var(--tek-color-statusbar-text-default, #979797);
    }
    :host([status='running']) .text { color: var(--tek-color-statusbar-text-running, #33baea); }
    :host([status='success']) .text { color: var(--tek-color-statusbar-text-success, #42b54c); }
    :host([status='warning']) .text { color: var(--tek-color-statusbar-text-warning, #e0b732); }
    :host([status='error'])   .text { color: var(--tek-color-statusbar-text-error,   #e74848); }

    .flag, .actions {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      gap: var(--tek-spacing-s03, 4px);
    }
  `;
__decorate([
    n({ reflect: true })
], TekStatusBar.prototype, "variant", void 0);
__decorate([
    n({ reflect: true })
], TekStatusBar.prototype, "status", void 0);
customElements.define('tek-status-bar', TekStatusBar);

/**
 * Titled bordered container for grouping form controls. The title sits
 * IN-FLOW inside the box as the first row (Bryan, 2026-07-22 — matches the
 * Tek Express reference; the border-straddling fieldset legend was rejected).
 * Always titled, per spec; title type is the Archivo heading-xs style.
 * Background aliases color/canvas/background/raised.
 *
 * Figma: DS-v2 → GroupBox (node 8408:456).
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §1.
 *
 * Usage:
 * ```html
 * <tek-group-box label="Execution Options">
 *   <tek-selector type="checkbox" label="Enable Logging"></tek-selector>
 * </tek-group-box>
 * ```
 *
 * @summary Titled bordered container for grouping form controls.
 *
 * @attr {string} label - Legend text — always shown; the spec forbids untitled group boxes.
 * @attr {("default"|"error")} [variant="default"] - Error turns the border and legend red.
 * @attr {boolean} disabled - Dims the box, blocks pointer events, sets `aria-disabled`.
 *
 * @slot - Grouped content (form controls).
 *
 * @csspart box - The bordered container.
 * @csspart legend - The title row.
 *
 * @cssprop --tek-spacing-s06 - Gap between legend and content.
 * @cssprop --tek-spacing-s09 - Box padding.
 * @cssprop --tek-color-groupbox-background-default - Box background.
 * @cssprop --tek-color-groupbox-border-default - Box border color.
 * @cssprop --tek-color-groupbox-border-error - Border and legend color in error state.
 * @cssprop --tek-color-groupbox-legend-default - Legend text color.
 * @cssprop --tek-borders-width-01 - Border width.
 * @cssprop --tek-borders-radius-05 - Corner radius.
 * @cssprop --tek-fonts-family-archivo - Legend font family.
 * @cssprop --tek-fonts-heading-size-xs - Legend type size (with matching line-height token).
 */
class TekGroupBox extends i$1 {
    constructor() {
        super(...arguments);
        /** Legend text — always shown; the spec forbids untitled group boxes. */
        this.label = '';
        this.variant = 'default';
        this.disabled = false;
    }
    willUpdate() {
        if (this.disabled)
            this.setAttribute('aria-disabled', 'true');
        else
            this.removeAttribute('aria-disabled');
    }
    render() {
        return b$1 `
      <div class="box" part="box" role="group" aria-label=${this.label}>
        <div class="legend" part="legend">${this.label}</div>
        <slot></slot>
      </div>
    `;
    }
}
TekGroupBox.styles = i$4 `
    :host { display: block; }

    .box {
      display: flex;
      flex-direction: column;
      gap: var(--tek-spacing-s06, 10px);
      min-width: 0;
      padding: var(--tek-spacing-s09, 16px);
      background: var(--tek-color-groupbox-background-default, #252525);
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-groupbox-border-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-05, 11px);
      box-sizing: border-box;
    }

    .legend {
      font-family: var(--tek-fonts-family-archivo, system-ui, sans-serif);
      font-weight: 600;
      font-size: var(--tek-fonts-heading-size-xs, 16px);
      line-height: var(--tek-fonts-heading-line-height-xs, 24px);
      letter-spacing: -0.02em;
      color: var(--tek-color-groupbox-legend-default, #ffffff);
    }

    :host([variant='error']) .box { border-color: var(--tek-color-groupbox-border-error, #e74848); }
    :host([variant='error']) .legend { color: var(--tek-color-groupbox-border-error, #e74848); }

    :host([disabled]) { opacity: 0.5; pointer-events: none; }
  `;
__decorate([
    n()
], TekGroupBox.prototype, "label", void 0);
__decorate([
    n({ reflect: true })
], TekGroupBox.prototype, "variant", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TekGroupBox.prototype, "disabled", void 0);
customElements.define('tek-group-box', TekGroupBox);

/**
 * App sidebar CHROME only — a composition of three slot regions: `brand`,
 * `nav` (a `tek-tabs orientation="vertical"`), and `foot`, pushed to the
 * bottom with a top divider and hidden when empty. Tab behavior lives in the
 * slotted tek-tabs; this panel owns no routing and no tab logic, per the
 * spec's composition rule. Widths per variant: full 184 / text-only 96 /
 * icon-only 56 — no spacing tokens exist at these values (PROPOSED in the
 * wave-2 audit). Variant switching at breakpoints is the app-shell's job
 * (container queries), per spec.
 *
 * Figma: DS-v2 → NavigationPanel (node 8411:503).
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §6.
 *
 * Usage:
 * ```html
 * <tek-navigation-panel>
 *   <span slot="brand">Tek Bench</span>
 *   <tek-tabs slot="nav" orientation="vertical">…</tek-tabs>
 *   <tek-selector slot="foot" type="toggle" label="Dark mode"></tek-selector>
 * </tek-navigation-panel>
 * ```
 *
 * @summary App sidebar chrome with brand, nav, and foot slot regions.
 *
 * @attr {("full"|"text-only"|"icon-only")} [variant="full"] - Width preset: 184 / 96 / 56px.
 *
 * @slot brand - Brand row at the top (Archivo heading-2xs type).
 * @slot nav - Navigation content, typically a vertical `tek-tabs`.
 * @slot foot - Bottom-pinned content behind a top divider; hidden when empty.
 *
 * @csspart brand - The brand row container.
 * @csspart nav - The nav container.
 * @csspart foot - The foot container.
 *
 * @cssprop --tek-navigation-panel-width - Overrides the per-variant width.
 * @cssprop --tek-color-navigation-background-default - Panel background (aliases the raised surface).
 * @cssprop --tek-color-navigation-border-default - Right border color.
 * @cssprop --tek-color-navigation-divider-default - Foot top divider color.
 * @cssprop --tek-color-navigation-text-default - Brand text color.
 * @cssprop --tek-spacing-s03 - Brand row gap.
 * @cssprop --tek-spacing-s05 - Host vertical padding.
 * @cssprop --tek-spacing-s06 - Foot gap.
 * @cssprop --tek-spacing-s07 - Brand and foot padding.
 * @cssprop --tek-borders-width-01 - Border and divider width.
 * @cssprop --tek-fonts-family-archivo - Brand font family.
 * @cssprop --tek-fonts-heading-size-2xs - Brand type size (with matching line-height token).
 */
class TekNavigationPanel extends i$1 {
    constructor() {
        super(...arguments);
        this.variant = 'full';
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'navigation');
    }
    onFootSlotChange(e) {
        const slot = e.target;
        slot.parentElement?.classList.toggle('has-content', slot.assignedNodes().length > 0);
    }
    render() {
        return b$1 `
      <div class="brand" part="brand"><slot name="brand"></slot></div>
      <div class="nav" part="nav"><slot name="nav"></slot></div>
      <div class="foot" part="foot"><slot name="foot" @slotchange=${this.onFootSlotChange}></slot></div>
    `;
    }
}
TekNavigationPanel.styles = i$4 `
    :host {
      display: flex;
      flex-direction: column;
      width: var(--tek-navigation-panel-width, 184px);
      height: 100%;
      box-sizing: border-box;
      padding: var(--tek-spacing-s05, 8px) 0;
      background: var(--tek-color-navigation-background-default, #252525);
      border-right: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-navigation-border-default, #7b7b7b);
    }
    :host([variant='text-only']) { width: var(--tek-navigation-panel-width, 96px); }
    :host([variant='icon-only']) { width: var(--tek-navigation-panel-width, 56px); }

    .brand {
      display: flex;
      align-items: center;
      gap: var(--tek-spacing-s03, 4px);
      padding: var(--tek-spacing-s07, 12px);
      font-family: var(--tek-fonts-family-archivo, system-ui, sans-serif);
      font-weight: 600;
      font-size: var(--tek-fonts-heading-size-2xs, 14px);
      line-height: var(--tek-fonts-heading-line-height-2xs, 22px);
      color: var(--tek-color-navigation-text-default, #ffffff);
    }
    :host([variant='icon-only']) .brand { justify-content: center; }

    .nav { display: block; }

    .foot {
      margin-top: auto;
      display: flex;
      flex-direction: column;
      gap: var(--tek-spacing-s06, 10px);
      padding: var(--tek-spacing-s07, 12px);
      border-top: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-navigation-divider-default, #7b7b7b);
    }
    .foot:not(.has-content) { display: none; }
  `;
__decorate([
    n({ reflect: true })
], TekNavigationPanel.prototype, "variant", void 0);
customElements.define('tek-navigation-panel', TekNavigationPanel);

/**
 * Determinate / indeterminate progress bar with label + meta slots. The
 * indeterminate stripe is CSS-keyframes only (no JS animation) and freezes
 * under prefers-reduced-motion, both per spec; `paused` freezes the stripe
 * too. Emits `tek-complete` when value reaches max (spec's
 * `progress-complete`, renamed to the DS event convention — see audit).
 *
 * Figma: DS-v2 → Progress (node 8413:560).
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §5.
 *
 * Usage:
 * ```html
 * <tek-progress value="40" max="100" tone="success">
 *   <span slot="label">Uploading firmware</span>
 *   <span slot="meta">00:12 remaining</span>
 * </tek-progress>
 * ```
 *
 * @summary Determinate/indeterminate progress bar with label and meta slots.
 *
 * @attr {("determinate"|"indeterminate")} [variant="determinate"] - Bar mode.
 * @attr {number} [value=0] - Current value (determinate mode).
 * @attr {number} [max=100] - Maximum value.
 * @attr {("sm"|"md"|"lg")} [size="md"] - Track height: 4 / 8 / 12px.
 * @attr {("default"|"success"|"warning"|"error")} [tone="default"] - Fill color tone.
 * @attr {boolean} paused - Pauses the indeterminate stripe animation.
 *
 * @fires {CustomEvent} tek-complete - Fired when a determinate `value` reaches `max`, with `detail.value`. Bubbles, composed.
 *
 * @slot label - Text above the track (Geist sm).
 * @slot meta - Right side of the meta row below the track (mono xs); the left side shows the percentage.
 *
 * @csspart label - The label row.
 * @csspart track - The bar track.
 * @csspart fill - The bar fill.
 * @csspart meta - The meta row.
 *
 * @cssprop --tek-spacing-s03 - Gap between rows and within the meta row.
 * @cssprop --tek-color-progress-track-background - Track background.
 * @cssprop --tek-color-progress-track-border - Track border color.
 * @cssprop --tek-color-progress-fill-default - Fill color (success/warning/error variants per tone).
 * @cssprop --tek-color-progress-label-default - Label text color.
 * @cssprop --tek-color-progress-meta-default - Meta row text color.
 * @cssprop --tek-borders-width-01 - Track border width.
 * @cssprop --tek-borders-radius-02 - Track corner radius.
 * @cssprop --tek-fonts-family-geist - Label font family.
 * @cssprop --tek-fonts-family-mono - Meta row font family.
 * @cssprop --tek-fonts-text-size-sm - Label type size (with matching line-height token).
 * @cssprop --tek-fonts-text-size-xs - Meta row type size (with matching line-height token).
 */
class TekProgress extends i$1 {
    constructor() {
        super(...arguments);
        this.variant = 'determinate';
        this.value = 0;
        this.max = 100;
        this.size = 'md';
        this.tone = 'default';
        this.paused = false;
    }
    get pct() {
        return Math.min(100, Math.max(0, (this.value / (this.max || 100)) * 100));
    }
    willUpdate() {
        this.setAttribute('role', 'progressbar');
        if (this.variant === 'indeterminate') {
            this.removeAttribute('aria-valuenow');
            this.setAttribute('aria-busy', 'true');
        }
        else {
            this.setAttribute('aria-valuemin', '0');
            this.setAttribute('aria-valuemax', String(this.max));
            this.setAttribute('aria-valuenow', String(this.value));
            this.removeAttribute('aria-busy');
        }
    }
    updated(changed) {
        if (changed.has('value') && this.variant === 'determinate' && this.value >= this.max) {
            this.dispatchEvent(new CustomEvent('tek-complete', {
                detail: { value: this.value }, bubbles: true, composed: true
            }));
        }
    }
    render() {
        const indet = this.variant === 'indeterminate';
        return b$1 `
      <div class="label" part="label"><slot name="label"></slot></div>
      <div class="track" part="track">
        <div class="fill" part="fill" style=${indet ? A$1 : `width:${this.pct}%`}></div>
      </div>
      <div class="meta-row" part="meta">
        <span>${indet ? '' : `${Math.round(this.pct)}%`}</span>
        <span><slot name="meta"></slot></span>
      </div>
    `;
    }
}
TekProgress.styles = i$4 `
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--tek-spacing-s03, 4px);
      width: 100%;
    }

    .label {
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-sm, 12px);
      line-height: var(--tek-fonts-text-line-height-sm, 12px);
      color: var(--tek-color-progress-label-default, #ffffff);
    }

    .track {
      position: relative;
      height: 8px;
      background: var(--tek-color-progress-track-background, #252525);
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-progress-track-border, #7b7b7b);
      border-radius: var(--tek-borders-radius-02, 3px);
      overflow: hidden;
      box-sizing: border-box;
    }
    :host([size='sm']) .track { height: 4px; }
    :host([size='lg']) .track { height: 12px; }

    .fill {
      height: 100%;
      background: var(--tek-color-progress-fill-default, #33baea);
      transition: width 200ms ease;
    }
    :host([tone='success']) .fill { background: var(--tek-color-progress-fill-success, #42b54c); }
    :host([tone='warning']) .fill { background: var(--tek-color-progress-fill-warning, #e0b732); }
    :host([tone='error'])   .fill { background: var(--tek-color-progress-fill-error,   #e74848); }

    :host([variant='indeterminate']) .fill {
      position: absolute;
      width: 40%;
      animation: slide 1.4s ease-in-out infinite;
    }
    :host([paused]) .fill { animation-play-state: paused; }
    @media (prefers-reduced-motion: reduce) {
      :host([variant='indeterminate']) .fill { animation: none; left: 30%; }
    }
    @keyframes slide {
      from { left: -40%; }
      to   { left: 100%; }
    }

    .meta-row {
      display: flex;
      justify-content: space-between;
      gap: var(--tek-spacing-s03, 4px);
      font-family: var(--tek-fonts-family-mono, monospace);
      font-size: var(--tek-fonts-text-size-xs, 10px);
      line-height: var(--tek-fonts-text-line-height-xs, 12px);
      color: var(--tek-color-progress-meta-default, #979797);
    }
  `;
__decorate([
    n({ reflect: true })
], TekProgress.prototype, "variant", void 0);
__decorate([
    n({ type: Number })
], TekProgress.prototype, "value", void 0);
__decorate([
    n({ type: Number })
], TekProgress.prototype, "max", void 0);
__decorate([
    n({ reflect: true })
], TekProgress.prototype, "size", void 0);
__decorate([
    n({ reflect: true })
], TekProgress.prototype, "tone", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TekProgress.prototype, "paused", void 0);
customElements.define('tek-progress', TekProgress);

/**
 * Data table container: bordered, rounded shell that slots
 * `<tek-data-table-head>` and `<tek-data-table-body>`. v1 ships READONLY only,
 * per the spec's own scoping note — `selectable` / `editable` are v2 (the attr
 * warns and falls back). Unvirtualized per the §11 decision (Tek Express worst
 * case ~30 rows). tek-status-pill is tek-badge — cells slot badges; no
 * separate pill component. Fixed columns are the contract (users scan by
 * position — corpus 17:30): set `--tek-table-columns` on the table (a single
 * columns prop rather than the spec's per-column --col-N sketch — one prop,
 * same idea, flagged).
 *
 * Figma: DS-v2 → DataTable (node 8415:513).
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §2.
 *
 * Usage:
 * ```html
 * <tek-data-table style="--tek-table-columns: 2fr 1fr 1.5fr 0.6fr">
 *   <tek-data-table-head>
 *     <tek-data-table-row>
 *       <tek-data-table-cell>Name</tek-data-table-cell>
 *     </tek-data-table-row>
 *   </tek-data-table-head>
 *   <tek-data-table-body>
 *     <tek-data-table-row>
 *       <tek-data-table-cell>PSU-2231A</tek-data-table-cell>
 *     </tek-data-table-row>
 *   </tek-data-table-body>
 * </tek-data-table>
 * ```
 *
 * @summary Read-only data table container composed of head/body/row/cell sub-elements.
 *
 * @attr {("readonly"|"selectable"|"editable")} [variant="readonly"] - Table mode. Only `readonly` ships in v1; other values warn and fall back.
 *
 * @slot - `tek-data-table-head` and `tek-data-table-body` sections.
 *
 * @cssprop --tek-table-columns - Grid template columns, consumed by slotted rows (e.g. "2fr 1fr 1.5fr 0.6fr").
 * @cssprop --tek-borders-width-01 - Outer border width.
 * @cssprop --tek-color-table-divider-default - Outer border color.
 * @cssprop --tek-borders-radius-05 - Corner radius.
 */
class TekDataTable extends i$1 {
    constructor() {
        super(...arguments);
        this.variant = 'readonly';
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'table');
    }
    willUpdate() {
        if (this.variant !== 'readonly') {
            console.warn(`<tek-data-table> variant="${this.variant}" is v2 (rr-audit §2 ships readonly first); falling back.`);
            this.variant = 'readonly';
        }
    }
    render() {
        return b$1 `<slot></slot>`;
    }
}
TekDataTable.styles = i$4 `
    :host {
      display: block;
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-table-divider-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-05, 11px);
      overflow: hidden;
    }
  `;
__decorate([
    n({ reflect: true })
], TekDataTable.prototype, "variant", void 0);
/**
 * Header section of `<tek-data-table>` — a `rowgroup` wrapping header rows.
 * Rows inside it detect the head context and render with header background,
 * padding, and XS type.
 *
 * @summary Header rowgroup of the data table.
 *
 * @slot - Header `tek-data-table-row` elements.
 */
class TekDataTableHead extends i$1 {
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'rowgroup');
    }
    render() { return b$1 `<slot></slot>`; }
}
TekDataTableHead.styles = i$4 `:host { display: block; }`;
/**
 * Body section of `<tek-data-table>` — a `rowgroup` wrapping data rows.
 * Rows inside it detect the body context and gain hover/state tints.
 *
 * @summary Body rowgroup of the data table.
 *
 * @slot - Body `tek-data-table-row` elements.
 */
class TekDataTableBody extends i$1 {
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'rowgroup');
    }
    render() { return b$1 `<slot></slot>`; }
}
TekDataTableBody.styles = i$4 `:host { display: block; }`;
/**
 * Single table row — a CSS grid whose columns come from `--tek-table-columns`
 * set on the table. Detects head/body context on connect (`data-context`);
 * body rows layer hover/selected/error/success tints over the default
 * background, matching the Figma fills.
 *
 * Figma: DS-v2 → TableRow (node 8415:512).
 *
 * @summary Grid row of the data table with selection and state tints.
 *
 * @attr {boolean} selected - Selected tint plus a left accent bar.
 * @attr {("default"|"disabled"|"error"|"success")} [state="default"] - Row state; `disabled` mutes text and blocks pointer events.
 *
 * @slot - `tek-data-table-cell` elements.
 *
 * @cssprop --tek-table-columns - Grid template columns (set on the table).
 * @cssprop --tek-color-table-* - Row/header backgrounds, hover/selected/error/success tints, divider, selected accent, and text colors.
 * @cssprop --tek-spacing-s06 - Column gap; also header row vertical padding.
 * @cssprop --tek-spacing-s07 - Row padding.
 * @cssprop --tek-borders-width-01 - Row divider width.
 * @cssprop --tek-borders-width-05 - Selected accent bar width.
 * @cssprop --tek-fonts-family-geist - Row font family.
 * @cssprop --tek-fonts-text-size-md - Body row type size (xs in header rows).
 */
class TekDataTableRow extends i$1 {
    constructor() {
        super(...arguments);
        this.selected = false;
        this.state = 'default';
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'row');
        const ctx = this.closest('tek-data-table-head') ? 'head' : 'body';
        this.setAttribute('data-context', ctx);
    }
    render() { return b$1 `<slot></slot>`; }
}
TekDataTableRow.styles = i$4 `
    :host {
      position: relative;
      display: grid;
      grid-template-columns: var(--tek-table-columns, repeat(4, 1fr));
      align-items: center;
      column-gap: var(--tek-spacing-s06, 10px);
      padding: var(--tek-spacing-s07, 12px);
      background-color: var(--tek-color-table-row-background-default, #252525);
      border-bottom: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-table-divider-default, #7b7b7b);
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-md, 13px);
      line-height: var(--tek-fonts-text-line-height-md, 16px);
      color: var(--tek-color-table-text-default, #ffffff);
      box-sizing: border-box;
    }
    :host(:last-child) { border-bottom: none; }

    /* header rows */
    :host([data-context='head']) {
      padding-top: var(--tek-spacing-s06, 10px);
      padding-bottom: var(--tek-spacing-s06, 10px);
      background-color: var(--tek-color-table-header-background, #252525);
      color: var(--tek-color-table-header-text, #ffffff);
      font-size: var(--tek-fonts-text-size-xs, 10px);
      line-height: var(--tek-fonts-text-line-height-xs, 12px);
    }

    /* body row states — tints layer over the default bg, like the Figma fills */
    :host([data-context='body']:hover) {
      background-image: linear-gradient(var(--tek-color-table-row-background-hover, rgba(255,255,255,0.06)),
                                        var(--tek-color-table-row-background-hover, rgba(255,255,255,0.06)));
    }
    :host([state='error']) {
      background-image: linear-gradient(var(--tek-color-table-row-background-error, rgba(231,72,72,0.1)),
                                        var(--tek-color-table-row-background-error, rgba(231,72,72,0.1)));
    }
    :host([state='success']) {
      background-image: linear-gradient(var(--tek-color-table-row-background-success, rgba(66,181,76,0.1)),
                                        var(--tek-color-table-row-background-success, rgba(66,181,76,0.1)));
    }
    :host([selected]) {
      background-image: linear-gradient(var(--tek-color-table-row-background-selected, rgba(51,186,234,0.12)),
                                        var(--tek-color-table-row-background-selected, rgba(51,186,234,0.12)));
    }
    :host([selected])::before {
      content: '';
      position: absolute;
      left: 0; top: 0; bottom: 0;
      width: var(--tek-borders-width-05, 3px);
      background: var(--tek-color-table-row-border-selected, #33baea);
    }
    :host([state='disabled']) {
      color: var(--tek-color-table-text-muted, #979797);
      opacity: 0.5;
      pointer-events: none;
    }
  `;
__decorate([
    n({ type: Boolean, reflect: true })
], TekDataTableRow.prototype, "selected", void 0);
__decorate([
    n({ reflect: true })
], TekDataTableRow.prototype, "state", void 0);
/**
 * Single cell — one grid column of its row. Truncates overflow with an
 * ellipsis. Renders as `columnheader` inside the head, `cell` in the body.
 *
 * @summary Data table cell with alignment and ellipsis truncation.
 *
 * @attr {("start"|"center"|"end")} [align="start"] - Text alignment.
 *
 * @slot - Cell content (text, or slotted components such as `tek-badge`).
 */
class TekDataTableCell extends i$1 {
    constructor() {
        super(...arguments);
        this.align = 'start';
    }
    connectedCallback() {
        super.connectedCallback();
        const inHead = this.closest('tek-data-table-head');
        this.setAttribute('role', inHead ? 'columnheader' : 'cell');
    }
    render() { return b$1 `<slot></slot>`; }
}
TekDataTableCell.styles = i$4 `
    :host {
      display: block;
      min-width: 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    :host([align='center']) { text-align: center; }
    :host([align='end']) { text-align: end; }
  `;
__decorate([
    n({ reflect: true })
], TekDataTableCell.prototype, "align", void 0);
customElements.define('tek-data-table', TekDataTable);
customElements.define('tek-data-table-head', TekDataTableHead);
customElements.define('tek-data-table-body', TekDataTableBody);
customElements.define('tek-data-table-row', TekDataTableRow);
customElements.define('tek-data-table-cell', TekDataTableCell);

/**
 * Wraps its target (default slot) and shows a text panel on hover or focus
 * after a short delay, positioned with Floating UI (offset + flip + shift);
 * no arrow by design. Blueprint: Shoelace sl-tooltip's hover/focus model,
 * tek-native. A11y: the panel has role=tooltip, linked from the wrapper via
 * aria-describedby; Escape hides, symmetrically for pointer and keyboard.
 *
 * Figma: DS-v2 → v2.02 → Tooltip (node 8400:378).
 *
 * Usage:
 * ```html
 * <tek-tooltip content="Saves the current setup">
 *   <tek-button>Save</tek-button>
 * </tek-tooltip>
 * ```
 *
 * @summary Hover/focus tooltip panel around a slotted target.
 *
 * @attr {string} content - Tooltip text; with empty content the panel never shows.
 * @attr {'top'|'bottom'|'left'|'right'} placement - Preferred panel side; flips when it doesn't fit.
 * @attr {number} delay - Show delay in milliseconds (default 300).
 * @attr {boolean} open - Whether the panel is visible; managed by the component.
 * @attr {boolean} disabled - Prevents the panel from showing.
 *
 * @slot - The target element the tooltip describes.
 *
 * @csspart panel - The tooltip panel.
 *
 * @cssprop --tek-color-tooltip-background-default - Panel background (color/tooltip/* alias the same primitives as the dropdown panel).
 * @cssprop --tek-color-tooltip-border-default - Panel border color.
 * @cssprop --tek-color-tooltip-shadow-default - Panel drop-shadow color.
 * @cssprop --tek-color-tooltip-text-default - Panel text color.
 * @cssprop --tek-spacing-s03 - Vertical padding; also the target-to-panel gap.
 * @cssprop --tek-spacing-s05 - Horizontal padding.
 * @cssprop --tek-borders-width-01 - Panel border width.
 * @cssprop --tek-borders-radius-03 - Panel corner radius.
 * @cssprop --tek-fonts-family-geist - Panel font family.
 * @cssprop --tek-fonts-text-size-sm - Panel type size (with the matching line-height token).
 */
class TekTooltip extends i$1 {
    constructor() {
        super(...arguments);
        this.content = '';
        this.placement = 'top';
        this.delay = 300;
        this.open = false;
        this.disabled = false;
        this.panelId = `tek-tooltip-${++TekTooltip.idCounter}`;
        this.scheduleShow = () => {
            if (this.disabled || !this.content)
                return;
            clearTimeout(this.showTimer);
            this.showTimer = setTimeout(() => this.show(), this.delay);
        };
        this.hide = () => {
            clearTimeout(this.showTimer);
            if (!this.open)
                return;
            this.open = false;
            this.removeAttribute('aria-describedby');
            document.removeEventListener('keydown', this.onKeyDown);
            this.cleanupFloating?.();
            this.cleanupFloating = undefined;
        };
        this.onKeyDown = (e) => {
            if (e.key === 'Escape' && this.open)
                this.hide();
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('mouseenter', this.scheduleShow);
        this.addEventListener('mouseleave', this.hide);
        this.addEventListener('focusin', this.scheduleShow);
        this.addEventListener('focusout', this.hide);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.hide();
        this.removeEventListener('mouseenter', this.scheduleShow);
        this.removeEventListener('mouseleave', this.hide);
        this.removeEventListener('focusin', this.scheduleShow);
        this.removeEventListener('focusout', this.hide);
    }
    show() {
        if (this.open)
            return;
        this.open = true;
        this.setAttribute('aria-describedby', this.panelId);
        // Escape must dismiss even when focus is elsewhere (hover-open case)
        document.addEventListener('keydown', this.onKeyDown);
        const gap = parseFloat(getComputedStyle(this).getPropertyValue('--tek-spacing-s03')) || 4;
        this.updateComplete.then(() => {
            this.cleanupFloating = autoUpdate(this, this.panel, () => {
                computePosition(this, this.panel, {
                    placement: this.placement,
                    middleware: [offset(gap), flip(), shift({ padding: 4 })]
                }).then(({ x, y }) => {
                    Object.assign(this.panel.style, { left: `${x}px`, top: `${y}px` });
                });
            });
        });
    }
    render() {
        return b$1 `
      <slot></slot>
      <div class="panel" part="panel" id=${this.panelId} role="tooltip">${this.content}</div>
    `;
    }
}
TekTooltip.styles = i$4 `
    :host {
      display: inline-block;
      position: relative;
    }

    .panel {
      position: absolute;
      z-index: 20;
      display: none;
      width: max-content;
      max-width: 280px;
      padding: var(--tek-spacing-s03, 4px) var(--tek-spacing-s05, 8px);
      box-sizing: border-box;
      background: var(--tek-color-tooltip-background-default, #252525);
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-tooltip-border-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-03, 5px);
      box-shadow: 0 4px 12px var(--tek-color-tooltip-shadow-default, rgba(0, 0, 0, 0.2));
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-sm, 12px);
      line-height: var(--tek-fonts-text-line-height-sm, 12px);
      color: var(--tek-color-tooltip-text-default, #cccccc);
      pointer-events: none;
    }
    :host([open]) .panel { display: block; }
  `;
TekTooltip.idCounter = 0;
__decorate([
    n()
], TekTooltip.prototype, "content", void 0);
__decorate([
    n()
], TekTooltip.prototype, "placement", void 0);
__decorate([
    n({ type: Number })
], TekTooltip.prototype, "delay", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TekTooltip.prototype, "open", void 0);
__decorate([
    n({ type: Boolean })
], TekTooltip.prototype, "disabled", void 0);
__decorate([
    e$2('.panel')
], TekTooltip.prototype, "panel", void 0);
customElements.define('tek-tooltip', TekTooltip);

/**
 * Loading spinner: a 270-degree arc rotating 360deg/1.2s. Frozen when
 * `paused` or when the user sets prefers-reduced-motion (spec requirement).
 * Announces as `role="status"` with a default "Loading" aria-label.
 *
 * Figma: DS-v2 → Spinner (node 8401:391).
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §7.
 *
 * Usage:
 * ```html
 * <tek-spinner size="lg" tone="success"></tek-spinner>
 * ```
 *
 * @summary Rotating 270-degree arc loading spinner.
 *
 * @attr {("sm"|"md"|"lg")} [size="md"] - Diameter: 16 / 24 / 40px (spacing tokens s09/s11/s15).
 * @attr {("default"|"success"|"warning"|"error")} [tone="default"] - Arc color tone (color/spinner/*).
 * @attr {boolean} paused - Pauses the rotation.
 *
 * @cssprop --tek-spacing-s09 - sm diameter.
 * @cssprop --tek-spacing-s11 - md diameter.
 * @cssprop --tek-spacing-s15 - lg diameter.
 * @cssprop --tek-color-spinner-default - Arc color (success/warning/error variants per tone).
 * @cssprop --tek-borders-width-04 - Stroke width for sm/md (spec's 2.5px md snapped to the 2px token).
 * @cssprop --tek-borders-width-05 - Stroke width for lg.
 */
class TekSpinner extends i$1 {
    constructor() {
        super(...arguments);
        this.size = 'md';
        this.tone = 'default';
        this.paused = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'status');
        if (!this.hasAttribute('aria-label'))
            this.setAttribute('aria-label', 'Loading');
    }
    render() {
        return b$1 `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" transform="rotate(-90 12 12)"></circle>
      </svg>
    `;
    }
}
TekSpinner.styles = i$4 `
    :host {
      display: inline-block;
      width: var(--tek-spacing-s11, 24px);
      height: var(--tek-spacing-s11, 24px);
      color: var(--tek-color-spinner-default, #33baea);
    }
    :host([size='sm']) { width: var(--tek-spacing-s09, 16px); height: var(--tek-spacing-s09, 16px); }
    :host([size='lg']) { width: var(--tek-spacing-s15, 40px); height: var(--tek-spacing-s15, 40px); }
    :host([tone='success']) { color: var(--tek-color-spinner-success, #42b54c); }
    :host([tone='warning']) { color: var(--tek-color-spinner-warning, #e0b732); }
    :host([tone='error'])   { color: var(--tek-color-spinner-error, #e74848); }

    svg {
      width: 100%;
      height: 100%;
      display: block;
      animation: spin 1.2s linear infinite;
    }
    :host([paused]) svg { animation-play-state: paused; }
    @media (prefers-reduced-motion: reduce) {
      svg { animation: none; }
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    circle {
      fill: none;
      stroke: currentColor;
      stroke-width: var(--tek-borders-width-04, 2px);
      stroke-linecap: butt;
      /* 270deg arc: 3/4 of circumference (2*pi*10 = 62.83) */
      stroke-dasharray: 47.12 62.83;
    }
    :host([size='lg']) circle { stroke-width: var(--tek-borders-width-05, 3px); }
  `;
__decorate([
    n({ reflect: true })
], TekSpinner.prototype, "size", void 0);
__decorate([
    n({ reflect: true })
], TekSpinner.prototype, "tone", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TekSpinner.prototype, "paused", void 0);
customElements.define('tek-spinner', TekSpinner);

/**
 * 16×16 checkbox control. Toggles on click or Space/Enter; typically composed
 * inside `<tek-selector>` alongside `<tek-selector-label>`.
 *
 * Figma: DS-v2 → Selector (node 7002:378), checkbox control.
 *
 * Usage:
 * ```html
 * <tek-checkbox checked></tek-checkbox>
 * ```
 *
 * @summary Checkbox control of the selector family.
 *
 * @attr {boolean} checked - Whether the box is checked.
 * @attr {boolean} error - Error state; red border, click ignored.
 * @attr {boolean} disabled - Blocks interaction and dims the control.
 *
 * @fires {CustomEvent} tek-change - Fired when toggled, with `detail.checked`. Bubbles, composed.
 *
 * @csspart box - The box div.
 *
 * @cssprop --tek-borders-radius-02 - Box corner radius.
 * @cssprop --tek-color-selector-background-default - Box background.
 * @cssprop --tek-color-selector-border-unchecked - Border when unchecked.
 * @cssprop --tek-color-selector-border-checked - Border when checked. Also the focus-ring color.
 * @cssprop --tek-color-selector-border-error - Border in error state.
 * @cssprop --tek-color-icons-default - Checkmark stroke color.
 */
class TekCheckbox extends TekBaseSelector {
    constructor() {
        super(...arguments);
        this._onKeydown = (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                this._click();
            }
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'checkbox');
        this.addEventListener('keydown', this._onKeydown);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('keydown', this._onKeydown);
    }
    updated() {
        this.setAttribute('tabindex', this.disabled ? '-1' : '0');
        this.setAttribute('aria-checked', String(this.checked));
    }
    render() {
        return b$1 `<div class="box" part="box">${this.checked
            ? b$1 `<svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1 4L4 7.5L10 1" stroke="var(--tek-color-icons-default,#ffffff)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>`
            : A$1}</div>`;
    }
}
TekCheckbox.styles = i$4 `
    :host { display:inline-flex; align-items:center; justify-content:center; width:16px; height:16px; flex-shrink:0; cursor:pointer; outline:none; }
    :host([disabled]) { cursor:not-allowed; opacity:0.4; }
    .box { width:16px; height:16px; border-radius:var(--tek-borders-radius-02,3px); background:var(--tek-color-selector-background-default,#252525); border:0.5px solid var(--tek-color-selector-border-unchecked,#7b7b7b); display:flex; align-items:center; justify-content:center; transition:border-color 0.1s; }
    :host([checked]) .box { border-color:var(--tek-color-selector-border-checked,#979797); }
    :host([error])   .box { border-color:var(--tek-color-selector-border-error,#e74848); }
    :host(:focus-visible) .box { box-shadow:0 0 0 2px var(--tek-color-selector-border-checked,#979797); }
  `;
customElements.define('tek-checkbox', TekCheckbox);

/**
 * 16×16 radio control. Checking one radio unchecks every other `tek-radio`
 * sharing the same `name`. Typically composed inside `<tek-selector>`.
 *
 * Figma: DS-v2 → Selector (node 7002:378), radio control.
 *
 * Usage:
 * ```html
 * <tek-radio name="group" checked></tek-radio>
 * <tek-radio name="group"></tek-radio>
 * ```
 *
 * @summary Radio control of the selector family; groups by `name`.
 *
 * @attr {boolean} checked - Whether the radio is selected.
 * @attr {boolean} error - Error state; red border, click ignored.
 * @attr {boolean} disabled - Blocks interaction and dims the control.
 * @attr {string} name - Radio-group name; checking this radio unchecks others with the same name.
 *
 * @fires {CustomEvent} tek-change - Fired when selected, with `detail.checked`. Bubbles, composed.
 *
 * @csspart dot - The inner dot div.
 *
 * @cssprop --tek-color-selector-background-default - Control background.
 * @cssprop --tek-color-selector-background-checked - Dot color when checked.
 * @cssprop --tek-color-selector-border-unchecked - Border when unchecked.
 * @cssprop --tek-color-selector-border-checked - Border when checked. Also the focus-ring color.
 * @cssprop --tek-color-selector-border-error - Border in error state.
 * @cssprop --tek-borders-radius-full - Corner radius (circle).
 */
class TekRadio extends TekBaseSelector {
    constructor() {
        super(...arguments);
        this._onKeydown = (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                this._click();
            }
        };
        this._click = () => {
            if (this.disabled || this.error)
                return;
            const name = this.getAttribute('name');
            if (name) {
                document.querySelectorAll(`tek-radio[name="${name}"]`).forEach(r => {
                    if (r !== this)
                        r.checked = false;
                });
            }
            this.checked = true;
            this.dispatchEvent(new CustomEvent('tek-change', {
                bubbles: true, composed: true, detail: { checked: true }
            }));
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'radio');
        this.addEventListener('keydown', this._onKeydown);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('keydown', this._onKeydown);
    }
    updated() {
        this.setAttribute('tabindex', this.disabled ? '-1' : '0');
        this.setAttribute('aria-checked', String(this.checked));
    }
    render() {
        return b$1 `<div class="dot" part="dot"></div>`;
    }
}
TekRadio.styles = i$4 `
    :host { background:var(--tek-color-selector-background-default,#252525); border:0.5px solid var(--tek-color-selector-border-unchecked,#7b7b7b); border-radius:var(--tek-borders-radius-full,9999px); width:16px; height:16px; display:inline-flex; align-items:center; justify-content:center; flex-shrink:0; cursor:pointer; outline:none; box-sizing:border-box; transition:border-color 0.1s; }
    :host([checked])  { border-color:var(--tek-color-selector-border-checked,#979797); }
    :host([error])    { border-color:var(--tek-color-selector-border-error,#e74848); }
    :host([disabled]) { cursor:not-allowed; opacity:0.4; }
    .dot { background:var(--tek-color-selector-background-checked,#cccccc); border-radius:var(--tek-borders-radius-full,9999px); flex-shrink:0; width:10px; height:10px; display:none; }
    :host([checked]) .dot { display:block; }
    :host(:focus-visible) { box-shadow:0 0 0 2px var(--tek-color-selector-border-checked,#979797); }
  `;
customElements.define('tek-radio', TekRadio);

/**
 * 28×14 toggle switch (role="switch"). Toggles on click or Space/Enter;
 * typically composed inside `<tek-selector>`.
 *
 * Figma: DS-v2 → Selector (node 7002:378), toggle control.
 *
 * Usage:
 * ```html
 * <tek-toggle checked></tek-toggle>
 * ```
 *
 * @summary Toggle-switch control of the selector family.
 *
 * @attr {boolean} checked - Whether the switch is on (thumb slides right).
 * @attr {boolean} error - Error state; red border, click ignored.
 * @attr {boolean} disabled - Blocks interaction and dims the control.
 *
 * @fires {CustomEvent} tek-change - Fired when toggled, with `detail.checked`. Bubbles, composed.
 *
 * @csspart thumb - The sliding thumb div.
 *
 * @cssprop --tek-color-selector-background-default - Track background.
 * @cssprop --tek-color-selector-background-unchecked - Thumb color when off.
 * @cssprop --tek-color-selector-background-checked - Thumb color when on.
 * @cssprop --tek-color-selector-border-unchecked - Track/thumb border when off.
 * @cssprop --tek-color-selector-border-checked - Track border when on. Also the focus-ring color.
 * @cssprop --tek-color-selector-border-error - Track/thumb border in error state.
 * @cssprop --tek-borders-radius-full - Track and thumb radius (pill/circle).
 */
class TekToggle extends TekBaseSelector {
    constructor() {
        super(...arguments);
        this._onKeydown = (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                this._click();
            }
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'switch');
        this.addEventListener('keydown', this._onKeydown);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('keydown', this._onKeydown);
    }
    updated() {
        this.setAttribute('tabindex', this.disabled ? '-1' : '0');
        this.setAttribute('aria-checked', String(this.checked));
    }
    render() {
        return b$1 `<div class="thumb" part="thumb"></div>`;
    }
}
TekToggle.styles = i$4 `
    :host { background:var(--tek-color-selector-background-default,#252525); border:0.5px solid var(--tek-color-selector-border-unchecked,#7b7b7b); display:inline-flex; align-items:center; justify-content:flex-start; height:14px; width:28px; border-radius:var(--tek-borders-radius-full,9999px); padding:0; flex-shrink:0; cursor:pointer; outline:none; box-sizing:border-box; transition:border-color 0.1s; }
    :host([checked])  { border-color:var(--tek-color-selector-border-checked,#979797); justify-content:flex-end; }
    :host([error])    { border-color:var(--tek-color-selector-border-error,#e74848); }
    :host([disabled]) { cursor:not-allowed; opacity:0.4; }
    .thumb { border-radius:var(--tek-borders-radius-full,9999px); flex-shrink:0; width:14px; height:14px; background:var(--tek-color-selector-background-unchecked,#454545); border:0.5px solid var(--tek-color-selector-border-unchecked,#7b7b7b); box-sizing:border-box; }
    :host([checked]) .thumb { background:var(--tek-color-selector-background-checked,#cccccc); border:none; }
    :host([error])   .thumb { background:var(--tek-color-selector-background-unchecked,#454545); border:0.5px solid var(--tek-color-selector-border-error,#e74848); }
    :host(:focus-visible) { box-shadow:0 0 0 2px var(--tek-color-selector-border-checked,#979797); }
  `;
customElements.define('tek-toggle', TekToggle);

/**
 * Text label for a selector control, color-synced to the control's
 * checked/error/disabled state. `<tek-selector>` keeps these attributes in
 * sync automatically when used inside it.
 *
 * Figma: DS-v2 → Selector (node 7002:378), label. Geist Regular 12px.
 *
 * Usage:
 * ```html
 * <tek-selector-label checked>Enable feature</tek-selector-label>
 * ```
 *
 * @summary State-aware text label for checkbox/radio/toggle controls.
 *
 * @attr {boolean} checked - Mirrors the paired control; brightens the text.
 * @attr {boolean} error - Mirrors the paired control; error text color.
 * @attr {boolean} disabled - Mirrors the paired control; dims the label.
 *
 * @slot - Label text.
 *
 * @csspart text - The text container div.
 *
 * @cssprop --tek-fonts-family-geist - Label font family.
 * @cssprop --tek-color-selector-label-unchecked - Text color when unchecked.
 * @cssprop --tek-color-selector-label-checked - Text color when checked.
 * @cssprop --tek-color-selector-label-error - Text color in error state.
 */
class TekSelectorLabel extends i$1 {
    constructor() {
        super(...arguments);
        this.checked = false;
        this.error = false;
        this.disabled = false;
    }
    render() {
        return b$1 `<div class="text" part="text"><slot></slot></div>`;
    }
}
TekSelectorLabel.styles = i$4 `
    :host { display:inline-flex; gap:0; align-items:center; padding:0; cursor:pointer; }
    :host([disabled]) { cursor:not-allowed; opacity:0.4; }
    .text { display:flex; flex:1 0 0; flex-direction:column; font-family:var(--tek-fonts-family-geist,system-ui,sans-serif); font-size:12px; font-weight:400; font-style:normal; justify-content:center; line-height:12px; min-height:1px; min-width:1px; color:var(--tek-color-selector-label-unchecked,#cccccc); }
    :host([checked]) .text { color:var(--tek-color-selector-label-checked,#ffffff); }
    :host([error])   .text { color:var(--tek-color-selector-label-error,#ffffff); }
  `;
__decorate([
    n({ type: Boolean, reflect: true })
], TekSelectorLabel.prototype, "checked", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TekSelectorLabel.prototype, "error", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TekSelectorLabel.prototype, "disabled", void 0);
customElements.define('tek-selector-label', TekSelectorLabel);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$1=o=>o??A$1;

/**
 * Composite selector row: a checkbox/radio/toggle control plus a state-synced
 * label. Two modes — self-contained (set `label`, the control is rendered in
 * shadow DOM) or slot-based (slot in your own control + `<tek-selector-label>`).
 * Styling comes from the composed child components.
 *
 * Figma: DS-v2 → Selector (node 7002:378).
 *
 * Usage — self-contained:
 * ```html
 * <tek-selector type="checkbox" label="Enable feature"></tek-selector>
 * <tek-selector type="radio" name="group" label="Option A"></tek-selector>
 * <tek-selector type="toggle" label="Live mode"></tek-selector>
 * ```
 *
 * Usage — slot-based:
 * ```html
 * <tek-selector>
 *   <tek-checkbox></tek-checkbox>
 *   <tek-selector-label>Enable feature</tek-selector-label>
 * </tek-selector>
 * ```
 *
 * @summary Checkbox/radio/toggle control paired with a state-synced label.
 *
 * @attr {boolean} checked - Checked state; forwarded to the inner control and label.
 * @attr {boolean} error - Error state; forwarded to the inner control and label.
 * @attr {boolean} disabled - Disabled state; forwarded to the inner control and label.
 * @attr {string} label - Self-contained mode: label text. When absent, the default slot is used instead.
 * @attr {("checkbox"|"radio"|"toggle")} [type="checkbox"] - Which control to render in self-contained mode.
 * @attr {string} name - Group name, passed through to the inner control (used by `tek-radio` for grouping).
 *
 * @fires {CustomEvent} tek-change - Bubbles up from the inner control when toggled, with `detail.checked`.
 *
 * @slot - Slot-based mode: a selector control (`tek-checkbox`/`tek-radio`/`tek-toggle`) plus a `tek-selector-label`.
 *
 * @csspart inner - The row container div.
 *
 * @cssprop --tek-spacing-s05 - Gap between control and label.
 */
class TekSelector extends i$1 {
    constructor() {
        super(...arguments);
        this.checked = false;
        this.error = false;
        this.disabled = false;
        this.label = null;
        this.type = 'checkbox';
        this.name = null;
        this._onTekChange = (e) => {
            const { checked } = e.detail;
            this._sync(checked);
        };
        this._onClick = (e) => {
            const ctrl = this._getCtrl();
            if (!ctrl || ctrl.disabled || ctrl.error)
                return;
            // If click originated inside the control element, let the control handle it
            if (e.composedPath().some((el) => el === ctrl))
                return;
            ctrl.checked = !ctrl.checked;
            this._sync(ctrl.checked);
            ctrl.dispatchEvent(new CustomEvent('tek-change', {
                bubbles: true, composed: true, detail: { checked: ctrl.checked }
            }));
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'group');
        // tek-change from children (composed:true) bubbles up to here — sync host state
        this.addEventListener('tek-change', this._onTekChange);
        this.addEventListener('click', this._onClick);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('tek-change', this._onTekChange);
        this.removeEventListener('click', this._onClick);
    }
    _getCtrl() {
        // Check shadow DOM first (self-contained mode), then light DOM (slot mode)
        return (this.renderRoot.querySelector('tek-checkbox,tek-radio,tek-toggle') ||
            this.querySelector('tek-checkbox,tek-radio,tek-toggle'));
    }
    _getLbl() {
        return (this.renderRoot.querySelector('tek-selector-label') ||
            this.querySelector('tek-selector-label'));
    }
    _sync(checked) {
        this.checked = checked;
        const lbl = this._getLbl();
        if (lbl) {
            checked ? lbl.setAttribute('checked', '') : lbl.removeAttribute('checked');
        }
    }
    updated(changed) {
        if (changed.has('checked'))
            this.setAttribute('aria-checked', String(this.checked));
        // Slot mode: propagate host state to light-DOM children (self-contained
        // mode is handled by template bindings)
        if (this.label === null) {
            const ctrl = this.querySelector('tek-checkbox,tek-radio,tek-toggle');
            const lbl = this.querySelector('tek-selector-label');
            ['checked', 'error', 'disabled'].forEach(attr => {
                if (!changed.has(attr))
                    return;
                const has = this[attr];
                [ctrl, lbl].forEach(el => {
                    if (!el)
                        return;
                    has ? el.setAttribute(attr, '') : el.removeAttribute(attr);
                });
            });
        }
    }
    firstUpdated() {
        this.setAttribute('aria-checked', String(this.checked));
        if (this.label === null) {
            // Auto-detect toggle for correct top padding
            requestAnimationFrame(() => {
                if (this.querySelector('tek-toggle'))
                    this.setAttribute('type', 'toggle');
            });
        }
    }
    _controlTpl() {
        const name = o$1(this.name ?? undefined);
        switch (this.type) {
            case 'radio':
                return b$1 `<tek-radio ?checked=${this.checked} ?error=${this.error} ?disabled=${this.disabled} name=${name}></tek-radio>`;
            case 'toggle':
                return b$1 `<tek-toggle ?checked=${this.checked} ?error=${this.error} ?disabled=${this.disabled} name=${name}></tek-toggle>`;
            default:
                return b$1 `<tek-checkbox ?checked=${this.checked} ?error=${this.error} ?disabled=${this.disabled} name=${name}></tek-checkbox>`;
        }
    }
    render() {
        if (this.label !== null) {
            // Self-contained: render the control + label entirely in shadow DOM
            return b$1 `<div class="inner" part="inner">
        ${this._controlTpl()}<tek-selector-label ?checked=${this.checked} ?error=${this.error} ?disabled=${this.disabled}>${this.label}</tek-selector-label>
      </div>`;
        }
        // Slot mode: consumer slots in tek-checkbox/radio/toggle + tek-selector-label
        return b$1 `<div class="inner" part="inner"><slot></slot></div>`;
    }
}
TekSelector.styles = i$4 `
    :host { display:inline-flex; gap:0; align-items:center; padding:0; cursor:pointer; user-select:none; }
    :host([type="toggle"]) { padding-top:1px; padding-bottom:1px; }
    .inner { display:flex; gap:var(--tek-spacing-s05,8px); align-items:center; min-height:1px; min-width:1px; padding:0; }
  `;
__decorate([
    n({ type: Boolean, reflect: true })
], TekSelector.prototype, "checked", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TekSelector.prototype, "error", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TekSelector.prototype, "disabled", void 0);
__decorate([
    n()
], TekSelector.prototype, "label", void 0);
__decorate([
    n()
], TekSelector.prototype, "type", void 0);
__decorate([
    n()
], TekSelector.prototype, "name", void 0);
customElements.define('tek-selector', TekSelector);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},e$1=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r=o=>void 0===o.strings,m$1={},p=(o,t=m$1)=>o._$AH=t;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=e$1(class extends i{constructor(r$1){if(super(r$1),r$1.type!==t.PROPERTY&&r$1.type!==t.ATTRIBUTE&&r$1.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!r(r$1))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(i,[t$1]){if(t$1===E$1||t$1===A$1)return t$1;const o=i.element,l=i.name;if(i.type===t.PROPERTY){if(t$1===o[l])return E$1}else if(i.type===t.BOOLEAN_ATTRIBUTE){if(!!t$1===o.hasAttribute(l))return E$1}else if(i.type===t.ATTRIBUTE&&o.getAttribute(l)===t$1+"")return E$1;return p(i),t$1}});

/**
 * Text input field. Single height renders an `<input>`; double/triple render a
 * `<textarea>` (48px / 64px). The `state` attribute is auto-managed on
 * focus/blur (default → focus → filled) but can be set explicitly.
 *
 * Figma: DS-v2 → Input (node 7003:495). Geist 14px / lh 20px.
 *
 * Usage:
 * ```html
 * <tek-input placeholder="Email"></tek-input>
 * <tek-input type="password" placeholder="Password"></tek-input>
 * <tek-input height="triple" placeholder="Message"></tek-input>
 * <tek-input state="error" value="not-an-email"></tek-input>
 * ```
 *
 * @summary Text input with default/focus/filled/disabled/error states and three heights.
 *
 * @attr {("default"|"focus"|"filled"|"disabled"|"error")} [state="default"] - Visual state. Auto-managed on focus/blur; set explicitly for disabled/error.
 * @attr {("single"|"double"|"triple")} [height="single"] - Field height. Double and triple render a textarea.
 * @attr {string} placeholder - Placeholder text.
 * @attr {string} value - Field value. Also settable via the `value` property.
 * @attr {string} [type="text"] - Native input type (text, password, email, …). Single height only.
 *
 * @fires {CustomEvent} tek-input - Fired on every keystroke, with `detail.value`. Bubbles, composed.
 *
 * @cssprop --tek-color-input-background-default - Field background.
 * @cssprop --tek-color-input-border-default - Border, default state.
 * @cssprop --tek-color-input-border-focus - Border, focus state.
 * @cssprop --tek-color-input-border-filled - Border, filled state.
 * @cssprop --tek-color-input-border-disabled - Border, disabled state.
 * @cssprop --tek-color-input-border-error - Border, error state.
 * @cssprop --tek-color-input-text-default - Text/placeholder color, default state.
 * @cssprop --tek-color-input-text-focus - Text color, focus state.
 * @cssprop --tek-color-input-text-filled - Text color, filled state.
 * @cssprop --tek-color-input-text-disabled - Text color, disabled state.
 * @cssprop --tek-color-input-text-error - Text color, error state.
 * @cssprop --tek-borders-radius-03 - Corner radius.
 * @cssprop --tek-spacing-s02 - Right padding.
 * @cssprop --tek-spacing-s05 - Vertical padding.
 * @cssprop --tek-spacing-s06 - Left padding.
 * @cssprop --tek-fonts-family-geist - Field font family.
 * @cssprop --tek-fonts-text-size-lg - Field font size.
 * @cssprop --tek-fonts-text-line-height-lg - Field line height.
 */
class TekInput extends i$1 {
    constructor() {
        super(...arguments);
        this.state = 'default';
        this.height = 'single';
        this.placeholder = '';
        this.value = '';
        this.type = 'text';
        this._onFocus = () => {
            if (this.state === 'default')
                this.state = 'focus';
        };
        this._onBlur = () => {
            const el = this._field;
            if (el && el.value)
                this.state = 'filled';
            else
                this.state = 'default';
        };
        this._onInput = () => {
            const el = this._field;
            if (!el)
                return;
            this.value = el.value;
            this.dispatchEvent(new CustomEvent('tek-input', {
                bubbles: true, composed: true, detail: { value: el.value }
            }));
        };
    }
    get _field() {
        return this.renderRoot.querySelector('input, textarea');
    }
    updated(changed) {
        if (changed.has('state')) {
            if (this.state === 'disabled')
                this.setAttribute('aria-disabled', 'true');
            else
                this.removeAttribute('aria-disabled');
        }
    }
    render() {
        const isMulti = this.height === 'double' || this.height === 'triple';
        const rows = this.height === 'double' ? 2 : 3;
        const isDisabled = this.state === 'disabled';
        return isMulti
            ? b$1 `<textarea rows=${rows} placeholder=${this.placeholder} ?disabled=${isDisabled}
               .value=${l(this.value)}
               @focus=${this._onFocus} @blur=${this._onBlur} @input=${this._onInput}></textarea>`
            : b$1 `<input type=${this.type} placeholder=${this.placeholder} ?disabled=${isDisabled}
               .value=${l(this.value)}
               @focus=${this._onFocus} @blur=${this._onBlur} @input=${this._onInput}>`;
    }
}
TekInput.styles = i$4 `
    :host {
      display: block;
      background: var(--tek-color-input-background-default, #252525);
      border: 0.5px solid var(--tek-color-input-border-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-03, 5px);
      padding: var(--tek-spacing-s05, 8px) var(--tek-spacing-s02, 4px) var(--tek-spacing-s05, 8px) var(--tek-spacing-s06, 10px);
      width: 100%;
      box-sizing: border-box;
      transition: border-color 0.1s;
    }
    :host([state="focus"])    { border-color: var(--tek-color-input-border-focus,   #ffffff); }
    :host([state="filled"])   { border-color: var(--tek-color-input-border-filled,  #afafaf); }
    :host([state="disabled"]) { border-color: var(--tek-color-input-border-disabled,#454545); }
    :host([state="error"])    { border-color: var(--tek-color-input-border-error,   #e74848); }
    :host([height="double"])  { min-height: 48px; }
    :host([height="triple"])  { min-height: 64px; }

    input, textarea {
      width: 100%;
      background: transparent;
      border: none;
      outline: none;
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-lg, 14px);
      line-height: var(--tek-fonts-text-line-height-lg, 20px);
      color: var(--tek-color-input-text-default, #979797);
      resize: none;
      padding: 0;
    }
    :host([state="focus"])    input, :host([state="focus"])    textarea { color: var(--tek-color-input-text-focus,   #ffffff); }
    :host([state="filled"])   input, :host([state="filled"])   textarea { color: var(--tek-color-input-text-filled,  #cccccc); }
    :host([state="disabled"]) input, :host([state="disabled"]) textarea { color: var(--tek-color-input-text-disabled,#454545); }
    :host([state="error"])    input, :host([state="error"])    textarea  { color: var(--tek-color-input-text-error,   #ffffff); }

    input::placeholder, textarea::placeholder { color: inherit; }
    :host([state="disabled"]) { pointer-events: none; }
  `;
__decorate([
    n({ reflect: true })
], TekInput.prototype, "state", void 0);
__decorate([
    n()
], TekInput.prototype, "height", void 0);
__decorate([
    n()
], TekInput.prototype, "placeholder", void 0);
__decorate([
    n()
], TekInput.prototype, "value", void 0);
__decorate([
    n()
], TekInput.prototype, "type", void 0);
customElements.define('tek-input', TekInput);

/**
 * Pill-shaped action button.
 *
 * Figma: DS-v2 → Button (node 202:2605).
 * Primary: px-24 py-12, Archivo SemiBold 600 16px / lh 24px. Secondary: px-14 py-6, Archivo 13px / lh 16px.
 * Fills its container (`width: 100%`) — size it via a wrapper.
 *
 * Usage:
 * ```html
 * <tek-button>Sign In</tek-button>
 * <tek-button variant="secondary">Cancel</tek-button>
 * <tek-button inactive>Sign In</tek-button>
 * ```
 *
 * @summary Pill-shaped action button — primary/secondary variants, default/hover/inactive states.
 *
 * @attr {("primary"|"secondary")} [variant="primary"] - Visual variant: primary (large, 16px label) or secondary (compact, 13px label).
 * @attr {boolean} inactive - Greys the button out and blocks activation. Styled identically to disabled.
 * @attr {boolean} disabled - Greys the button out and blocks activation.
 *
 * @fires {CustomEvent} tek-click - Fired on click or Space/Enter, unless inactive/disabled. Bubbles, composed.
 *
 * @slot - Button label.
 *
 * @csspart label - The label span.
 *
 * @cssprop --tek-color-button-background-default - Background, default state.
 * @cssprop --tek-color-button-background-hover - Background on hover.
 * @cssprop --tek-color-button-background-inactive - Background when inactive/disabled.
 * @cssprop --tek-color-button-border-default - Border, default state.
 * @cssprop --tek-color-button-border-hover - Border on hover. Also the focus-ring color.
 * @cssprop --tek-color-button-border-inactive - Border when inactive/disabled.
 * @cssprop --tek-color-button-text-default - Label color, default state.
 * @cssprop --tek-color-button-text-hover - Label color on hover.
 * @cssprop --tek-color-button-text-inactive - Label color when inactive/disabled.
 * @cssprop --tek-borders-radius-full - Corner radius (pill).
 * @cssprop --tek-spacing-s07 - Primary vertical padding.
 * @cssprop --tek-spacing-s11 - Primary horizontal padding.
 * @cssprop --tek-spacing-s04 - Secondary vertical padding.
 * @cssprop --tek-spacing-s08 - Secondary horizontal padding.
 * @cssprop --tek-fonts-family-archivo - Label font family.
 * @cssprop --tek-fonts-heading-size-xs - Primary label font size.
 * @cssprop --tek-fonts-heading-line-height-xs - Primary label line height.
 * @cssprop --tek-fonts-text-size-md - Secondary label font size.
 * @cssprop --tek-fonts-text-line-height-md - Secondary label line height.
 */
class TekButton extends i$1 {
    constructor() {
        super(...arguments);
        this.variant = 'primary';
        this.inactive = false;
        this.disabled = false;
        this._onKeydown = (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                this._emit();
            }
        };
        this._onClick = () => { this._emit(); };
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'button');
        this.addEventListener('keydown', this._onKeydown);
        this.addEventListener('click', this._onClick);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('keydown', this._onKeydown);
        this.removeEventListener('click', this._onClick);
    }
    _emit() {
        if (!this.inactive && !this.disabled) {
            this.dispatchEvent(new CustomEvent('tek-click', { bubbles: true, composed: true }));
        }
    }
    updated() {
        const isDisabled = this.inactive || this.disabled;
        this.setAttribute('tabindex', isDisabled ? '-1' : '0');
        if (isDisabled) {
            this.setAttribute('aria-disabled', 'true');
        }
        else {
            this.removeAttribute('aria-disabled');
        }
    }
    render() {
        return b$1 `<span class="label" part="label"><slot></slot></span>`;
    }
}
TekButton.styles = i$4 `
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      border-radius: var(--tek-borders-radius-full, 9999px);
      border: 1px solid var(--tek-color-button-border-default, #33baea);
      background: var(--tek-color-button-background-default, #1e1e1e);
      padding: var(--tek-spacing-s07, 12px) var(--tek-spacing-s11, 24px);
      cursor: pointer;
      outline: none;
      transition: background 0.15s, border-color 0.15s, color 0.15s;
      box-sizing: border-box;
      width: 100%;
    }

    :host([variant="secondary"]) {
      padding: var(--tek-spacing-s04, 6px) var(--tek-spacing-s08, 14px);
    }

    .label {
      display: block;
      width: 100%;
      font-family: var(--tek-fonts-family-archivo, sans-serif);
      font-size: var(--tek-fonts-heading-size-xs, 16px);
      font-weight: 600;
      font-style: normal;
      font-variation-settings: 'wdth' 106;
      line-height: var(--tek-fonts-heading-line-height-xs, 24px);
      letter-spacing: 0.32px;
      color: var(--tek-color-button-text-default, #cccccc);
      text-align: center;
      white-space: nowrap;
      transition: color 0.15s;
    }

    :host([variant="secondary"]) .label {
      font-size: var(--tek-fonts-text-size-md, 13px);
      font-weight: 534;
      line-height: var(--tek-fonts-text-line-height-md, 16px);
      letter-spacing: 0.13px;
    }

    :host(:hover:not([inactive]):not([disabled])) {
      background: var(--tek-color-button-background-hover, #000000);
      border-color: var(--tek-color-button-border-hover, #33baea);
    }
    :host(:hover:not([inactive]):not([disabled])) .label {
      color: var(--tek-color-button-text-hover, #ffffff);
    }

    :host([inactive]),
    :host([disabled]) {
      background: var(--tek-color-button-background-inactive, #181818);
      border-color: var(--tek-color-button-border-inactive, #454545);
      cursor: not-allowed;
      pointer-events: none;
    }
    :host([inactive]) .label,
    :host([disabled]) .label {
      color: var(--tek-color-button-text-inactive, #454545);
    }

    :host(:focus-visible) {
      box-shadow: 0 0 0 2px var(--tek-color-button-border-default, #33baea);
    }
  `;
__decorate([
    n()
], TekButton.prototype, "variant", void 0);
__decorate([
    n({ type: Boolean })
], TekButton.prototype, "inactive", void 0);
__decorate([
    n({ type: Boolean })
], TekButton.prototype, "disabled", void 0);
customElements.define('tek-button', TekButton);

/**
 * Form-field label with optional marker, helper text, and inline character
 * count. Sits above a `tek-input`.
 *
 * Figma: DS-v2 → Label (node 780:10209). Geist Regular 13px / lh 16px.
 *
 * Usage:
 * ```html
 * <tek-label>Email</tek-label>
 * <tek-label optional>Email</tek-label>
 * <tek-label helper-text="Must be 8+ characters">Password</tek-label>
 * <tek-label helper-text="Too short" helper-state="error">Password</tek-label>
 * <tek-label char-count="10/52">Message</tek-label>
 * ```
 *
 * @summary Form-field label with optional/helper-text/char-count variants.
 *
 * @attr {boolean} optional - Appends an italic "(optional)" marker.
 * @attr {string} helper-text - Helper line rendered below the label.
 * @attr {string} char-count - Character count rendered right-aligned, e.g. "10/52".
 * @attr {("error")} helper-state - Set to "error" to color the helper text red.
 * @attr {string} link - Reserved for the Figma Link variant; not rendered yet.
 *
 * @slot - Label text.
 *
 * @csspart text - The label text container.
 * @csspart helper - The helper-text div (when helper-text is set).
 *
 * @cssprop --tek-spacing-s02 - Gap between label row and helper text.
 * @cssprop --tek-fonts-family-geist - Font family for all text.
 * @cssprop --tek-fonts-text-size-md - Label font size.
 * @cssprop --tek-fonts-text-line-height-md - Label line height.
 * @cssprop --tek-fonts-text-size-sm - "(optional)" marker font size.
 * @cssprop --tek-fonts-text-size-xs - Helper and char-count font size.
 * @cssprop --tek-fonts-text-line-height-xs - Helper and char-count line height.
 * @cssprop --tek-color-input-label-default - Label text color.
 * @cssprop --tek-color-input-helper-default - Helper and "(optional)" color.
 * @cssprop --tek-color-input-character-count-default - Char-count color.
 * @cssprop --tek-color-input-text-error - Helper color when helper-state="error".
 */
class TekLabel extends i$1 {
    constructor() {
        super(...arguments);
        this.optional = false;
        this.helperText = null;
        this.charCount = null;
        this.link = null;
        this.helperState = null;
    }
    render() {
        return b$1 `
      <div class="text-row">
        <div class="label-text" part="text"><slot></slot></div>
        ${this.optional ? b$1 `<span class="optional">(optional)</span>` : A$1}
        ${this.charCount ? b$1 `<span class="char-count">${this.charCount}</span>` : A$1}
      </div>
      ${this.helperText ? b$1 `<div class="helper${this.helperState === 'error' ? ' helper--error' : ''}" part="helper">${this.helperText}</div>` : A$1}
    `;
    }
}
TekLabel.styles = i$4 `
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--tek-spacing-s02, 2px);
      align-items: flex-start;
      padding: 0;
      width: 100%;
      box-sizing: border-box;
    }

    .text-row {
      display: flex;
      gap: 4px;
      align-items: center;
      padding: 0;
      width: 100%;
      flex-shrink: 0;
    }

    .label-text {
      display: flex;
      flex: 1 0 0;
      flex-direction: column;
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-md, 13px);
      font-style: normal;
      font-weight: 400;
      justify-content: center;
      line-height: var(--tek-fonts-text-line-height-md, 16px);
      min-height: 1px;
      min-width: 1px;
      color: var(--tek-color-input-label-default, #cccccc);
    }

    .optional {
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-sm, 12px);
      font-weight: 400;
      color: var(--tek-color-input-helper-default, #7b7b7b);
      font-style: italic;
    }

    .char-count {
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-xs, 10px);
      font-weight: 400;
      line-height: var(--tek-fonts-text-line-height-xs, 12px);
      color: var(--tek-color-input-character-count-default, #cccccc);
      margin-left: auto;
    }

    .helper {
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-xs, 10px);
      font-weight: 400;
      line-height: var(--tek-fonts-text-line-height-xs, 12px);
      color: var(--tek-color-input-helper-default, #7b7b7b);
      flex-shrink: 0;
      width: 100%;
    }

    .helper--error {
      color: var(--tek-color-input-text-error, #e74848);
    }
  `;
__decorate([
    n({ type: Boolean })
], TekLabel.prototype, "optional", void 0);
__decorate([
    n({ attribute: 'helper-text' })
], TekLabel.prototype, "helperText", void 0);
__decorate([
    n({ attribute: 'char-count' })
], TekLabel.prototype, "charCount", void 0);
__decorate([
    n()
], TekLabel.prototype, "link", void 0);
__decorate([
    n({ attribute: 'helper-state' })
], TekLabel.prototype, "helperState", void 0);
customElements.define('tek-label', TekLabel);

/**
 * Small inline text link in Tek blue; underlines on hover.
 *
 * Figma: DS-v2 → TextLink (node 7011:150). Geist Regular 10px / lh 12px.
 *
 * Usage:
 * ```html
 * <tek-text-link href="/forgot">Forgot password?</tek-text-link>
 * ```
 *
 * @summary Small inline text link with default and hover states.
 *
 * @attr {string} [href="#"] - Link destination.
 * @attr {string} [target="_self"] - Native anchor target (e.g. "_blank").
 *
 * @slot - Link text.
 *
 * @csspart link - The anchor element.
 *
 * @cssprop --tek-color-text-link-default - Link color (also hover underline and focus outline).
 * @cssprop --tek-fonts-family-geist - Link font family.
 * @cssprop --tek-fonts-text-line-height-xs - Link line height.
 */
class TekTextLink extends i$1 {
    constructor() {
        super(...arguments);
        this.href = '#';
        this.target = '_self';
    }
    render() {
        return b$1 `<a href=${this.href} target=${this.target} part="link"><slot></slot></a>`;
    }
}
TekTextLink.styles = i$4 `
    :host {
      display: inline;
    }
    a {
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: 10px;
      font-weight: 400;
      font-style: normal;
      line-height: var(--tek-fonts-text-line-height-xs, 12px);
      color: var(--tek-color-text-link-default, #33baea);
      text-decoration: none;
      cursor: pointer;
      transition: opacity 0.1s;
    }
    a:hover {
      opacity: 0.8;
      text-decoration: underline;
      text-underline-offset: 2px;
      text-decoration-thickness: 0.5px;
      text-decoration-color: var(--tek-color-text-link-default, #33baea);
    }
    a:focus-visible {
      outline: 1px solid var(--tek-color-text-link-default, #33baea);
      outline-offset: 2px;
      border-radius: 2px;
    }
  `;
__decorate([
    n()
], TekTextLink.prototype, "href", void 0);
__decorate([
    n()
], TekTextLink.prototype, "target", void 0);
customElements.define('tek-text-link', TekTextLink);

/**
 * Character counter for text fields, rendered as `current/max` (or just `current` when no max).
 *
 * Figma: DS-v2 → CharacterCount (node 7011:143). Geist Regular 10px.
 *
 * Usage:
 * ```html
 * <tek-character-count current="10" max="52"></tek-character-count>
 * <tek-character-count current="50" max="52" state="warning"></tek-character-count>
 * <tek-character-count current="53" max="52" state="error"></tek-character-count>
 * ```
 *
 * @summary Character counter (current/max) with default/focus/filled/error/warning states.
 *
 * @attr {number} [current=0] - Characters typed so far.
 * @attr {number} [max=0] - Character limit. When 0 or absent, only `current` is shown.
 * @attr {("default"|"focus"|"filled"|"error"|"warning")} [state="default"] - Visual state; colors the count.
 *
 * @csspart count - The count span.
 *
 * @cssprop --tek-fonts-family-geist - Count font family.
 * @cssprop --tek-fonts-text-size-xs - Count font size.
 * @cssprop --tek-fonts-text-line-height-xs - Count line height.
 * @cssprop --tek-color-input-character-count-default - Count color, default state.
 * @cssprop --tek-color-input-character-count-focus - Count color, focus state.
 * @cssprop --tek-color-input-character-count-filled - Count color, filled state.
 * @cssprop --tek-color-input-character-count-error - Count color, error state.
 * @cssprop --tek-color-input-character-count-warning - Count color, warning state.
 */
class TekCharacterCount extends i$1 {
    constructor() {
        super(...arguments);
        this.current = 0;
        this.max = 0;
        this.state = 'default';
    }
    render() {
        const text = this.max > 0 ? `${this.current}/${this.max}` : `${this.current}`;
        return b$1 `<span class="count" part="count" aria-live="polite">${text}</span>`;
    }
}
TekCharacterCount.styles = i$4 `
    :host {
      display: inline-block;
    }
    .count {
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-xs, 10px);
      font-weight: 400;
      font-style: normal;
      line-height: var(--tek-fonts-text-line-height-xs, 12px);
      color: var(--tek-color-input-character-count-default, #cccccc);
      white-space: nowrap;
    }
    :host([state="focus"])   .count { color: var(--tek-color-input-character-count-focus,   #ffffff); }
    :host([state="filled"])  .count { color: var(--tek-color-input-character-count-filled,  #afafaf); }
    :host([state="error"])   .count { color: var(--tek-color-input-character-count-error,   #e74848); }
    :host([state="warning"]) .count { color: var(--tek-color-input-character-count-warning, #e0b732); }
  `;
__decorate([
    n({ type: Number })
], TekCharacterCount.prototype, "current", void 0);
__decorate([
    n({ type: Number })
], TekCharacterCount.prototype, "max", void 0);
__decorate([
    n()
], TekCharacterCount.prototype, "state", void 0);
customElements.define('tek-character-count', TekCharacterCount);

/**
 * Modal card: header, form fields, and action buttons stacked in a bordered,
 * shadowed container. Max-width 360px, 32px padding, 11px radius. Composition
 * happens entirely through the three named slots.
 *
 * Figma: DS-v2 → Modal (node 7003:2158).
 *
 * Usage:
 * ```html
 * <tek-modal>
 *   <span slot="header">Sign In</span>
 *   <div slot="input-blocks">...</div>
 *   <div slot="action-blocks">
 *     <tek-button>Sign In</tek-button>
 *   </div>
 * </tek-modal>
 * ```
 *
 * @summary Modal card with header, input-blocks, and action-blocks slots.
 *
 * @slot header - Modal title (Archivo SemiBold 24px).
 * @slot input-blocks - Form fields, stacked with a 10px gap.
 * @slot action-blocks - Buttons, stacked full-width.
 *
 * @csspart header - The header container.
 * @csspart input-blocks - The form-fields container.
 * @csspart action-blocks - The buttons container.
 *
 * @cssprop --tek-color-modal-background-default - Card background.
 * @cssprop --tek-color-modal-border-default - Card border color.
 * @cssprop --tek-color-modal-text-default - Header text color.
 * @cssprop --tek-color-modal-shadow-default - Drop-shadow color.
 * @cssprop --tek-modal-padding - Card padding override (defaults to --tek-spacing-s13).
 * @cssprop --tek-modal-heading-size - Header font-size override (defaults to --tek-fonts-heading-size-md).
 * @cssprop --tek-modal-heading-line-height - Header line-height override (defaults to --tek-fonts-heading-line-height-md).
 * @cssprop --tek-spacing-s08 - Gap between the three sections.
 * @cssprop --tek-spacing-s06 - Gap between fields inside input-blocks.
 * @cssprop --tek-spacing-s13 - Default card padding.
 * @cssprop --tek-borders-radius-05 - Corner radius.
 * @cssprop --tek-fonts-family-archivo - Header font family.
 * @cssprop --tek-fonts-heading-size-md - Default header font size.
 * @cssprop --tek-fonts-heading-line-height-md - Default header line height.
 */
class TekModal extends i$1 {
    render() {
        return b$1 `
      <div class="header" part="header">
        <slot name="header"></slot>
      </div>
      <div class="input-blocks" part="input-blocks">
        <slot name="input-blocks"></slot>
      </div>
      <div class="action-blocks" part="action-blocks">
        <slot name="action-blocks"></slot>
      </div>
    `;
    }
}
TekModal.styles = i$4 `
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--tek-spacing-s08, 14px);
      background: var(--tek-color-modal-background-default, #181818);
      border: 0.25px solid var(--tek-color-modal-border-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-05, 11px);
      padding: var(--tek-modal-padding, var(--tek-spacing-s13, 32px));
      width: 100%;
      max-width: 360px;
      box-sizing: border-box;
      overflow: clip;
      box-shadow: 0px 2px 6px 0px var(--tek-color-modal-shadow-default, rgba(0,0,0,0.2));
    }

    .header {
      font-family: var(--tek-fonts-family-archivo, sans-serif);
      font-size: var(--tek-modal-heading-size, var(--tek-fonts-heading-size-md, 24px));
      font-weight: 600;
      font-variation-settings: 'wdth' 106;
      line-height: var(--tek-modal-heading-line-height, var(--tek-fonts-heading-line-height-md, 32px));
      letter-spacing: 0;
      color: var(--tek-color-modal-text-default, #ffffff);
    }

    .input-blocks {
      display: flex;
      flex-direction: column;
      gap: var(--tek-spacing-s06, 10px);
      width: 100%;
    }

    .action-blocks {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  `;
customElements.define('tek-modal', TekModal);

/**
 * Page footer bar: left-aligned utility slot (e.g. theme toggle) and
 * right-aligned text. 36px tall, full width.
 *
 * Figma: DS-v2 → Footer (node 7003:2168). Geist Regular 12px.
 *
 * Usage:
 * ```html
 * <tek-footer>©2026 Tektronix. All Rights Reserved.</tek-footer>
 * <tek-footer>
 *   <div slot="left"><tek-toggle id="theme-toggle"></tek-toggle></div>
 *   ©2026 Tektronix. All Rights Reserved.
 * </tek-footer>
 * ```
 *
 * @summary Page footer bar with a left utility slot and right-aligned text.
 *
 * @slot - Right-aligned content (e.g. copyright).
 * @slot left - Left-aligned content (e.g. theme toggle).
 *
 * @csspart left - The left container.
 * @csspart right - The right container.
 *
 * @cssprop --tek-color-footer-background-default - Bar background.
 * @cssprop --tek-color-footer-text-default - Right-side text color.
 * @cssprop --tek-fonts-family-geist - Text font family.
 */
class TekFooter extends i$1 {
    render() {
        return b$1 `
      <div class="left" part="left"><slot name="left"></slot></div>
      <div class="right" part="right"><slot></slot></div>
    `;
    }
}
TekFooter.styles = i$4 `
    :host {
      display: flex;
      align-items: center;
      width: 100%;
      height: 36px;
      padding: 12px 16px;
      box-sizing: border-box;
      background: var(--tek-color-footer-background-default, #252525);
    }

    .left {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
    }

    .right {
      flex: 1 0 0;
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: 12px;
      font-weight: 400;
      font-style: normal;
      line-height: 12px;
      color: var(--tek-color-footer-text-default, #cccccc);
      text-align: right;
      min-height: 1px;
      min-width: 1px;
    }
  `;
customElements.define('tek-footer', TekFooter);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends i{constructor(i){if(super(i),this.it=A$1,i.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===A$1||null==r)return this._t=void 0,this.it=r;if(r===E$1)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=e$1(e);

/**
 * marked v18.0.7 - a markdown parser
 * Copyright (c) 2018-2026, MarkedJS. (MIT License)
 * Copyright (c) 2011-2018, Christopher Jeffrey. (MIT License)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */

function z(){return {async:false,breaks:false,extensions:null,gfm:true,hooks:null,pedantic:false,renderer:null,silent:false,tokenizer:null,walkTokens:null}}var T=z();function N(l){T=l;}var _={exec:()=>null};function E(l){let e=[];return t=>{let n=Math.max(0,Math.min(3,t-1)),s=e[n];return s||(s=l(n),e[n]=s),s}}function d(l,e=""){let t=typeof l=="string"?l:l.source,n={replace:(s,r)=>{let i=typeof r=="string"?r:r.source;return i=i.replace(m.caret,"$1"),t=t.replace(s,i),n},getRegex:()=>new RegExp(t,e)};return n}var Te=((l="")=>{try{return !!new RegExp("(?<=1)(?<!1)"+l)}catch{return  false}})(),m={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:l=>new RegExp(`^( {0,3}${l})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:E(l=>new RegExp(`^ {0,${l}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:E(l=>new RegExp(`^ {0,${l}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:E(l=>new RegExp(`^ {0,${l}}(?:\`\`\`|~~~)`)),headingBeginRegex:E(l=>new RegExp(`^ {0,${l}}#`)),htmlBeginRegex:E(l=>new RegExp(`^ {0,${l}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:E(l=>new RegExp(`^ {0,${l}}>`))},Oe=/^(?:[ \t]*(?:\n|$))+/,we=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ye=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,B=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Pe=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,j=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,oe=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ae=d(oe).replace(/bull/g,j).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Se=d(oe).replace(/bull/g,j).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),F=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,$e=/^[^\n]+/,U=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Le=d(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",U).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),_e=d(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,j).getRegex(),H="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",K=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Me=d("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",K).replace("tag",H).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),le=l=>d(F).replace("hr",B).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list",l).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H).getRegex(),ze=le(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),Ee=le(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),Ce=d(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ee).getRegex(),W={blockquote:Ce,code:we,def:Le,fences:ye,heading:Pe,hr:B,html:Me,lheading:ae,list:_e,newline:Oe,paragraph:ze,table:_,text:$e},se=d("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",B).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H).getRegex(),Ae={...W,lheading:Se,table:se,paragraph:d(F).replace("hr",B).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",se).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H).getRegex()},Ie={...W,html:d(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",K).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:_,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:d(F).replace("hr",B).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ae).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Be=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,qe=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ue=/^( {2,}|\\)\n(?!\s*$)/,De=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,C=/[\p{P}\p{S}]/u,Z=/[\s\p{P}\p{S}]/u,X=/[^\s\p{P}\p{S}]/u,ve=d(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Z).getRegex(),pe=/(?!~)[\p{P}\p{S}]/u,He=/(?!~)[\s\p{P}\p{S}]/u,Ze=/(?:[^\s\p{P}\p{S}]|~)/u,Ge=d(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Te?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),ce=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Ne=d(ce,"u").replace(/punct/g,C).getRegex(),Qe=d(ce,"u").replace(/punct/g,pe).getRegex(),he="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",je=d(he,"gu").replace(/notPunctSpace/g,X).replace(/punctSpace/g,Z).replace(/punct/g,C).getRegex(),Fe=d(he,"gu").replace(/notPunctSpace/g,Ze).replace(/punctSpace/g,He).replace(/punct/g,pe).getRegex(),Ue=d("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,X).replace(/punctSpace/g,Z).replace(/punct/g,C).getRegex(),Ke=d(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,C).getRegex(),We="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Xe=d(We,"gu").replace(/notPunctSpace/g,X).replace(/punctSpace/g,Z).replace(/punct/g,C).getRegex(),Je=d(/\\(punct)/,"gu").replace(/punct/g,C).getRegex(),Ve=d(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ye=d(K).replace("(?:-->|$)","-->").getRegex(),et=d("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Ye).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),v=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,tt=d(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",v).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ke=d(/^!?\[(label)\]\[(ref)\]/).replace("label",v).replace("ref",U).getRegex(),de=d(/^!?\[(ref)\](?:\[\])?/).replace("ref",U).getRegex(),nt=d("reflink|nolink(?!\\()","g").replace("reflink",ke).replace("nolink",de).getRegex(),ie=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,J={_backpedal:_,anyPunctuation:Je,autolink:Ve,blockSkip:Ge,br:ue,code:qe,del:_,delLDelim:_,delRDelim:_,emStrongLDelim:Ne,emStrongRDelimAst:je,emStrongRDelimUnd:Ue,escape:Be,link:tt,nolink:de,punctuation:ve,reflink:ke,reflinkSearch:nt,tag:et,text:De,url:_},rt={...J,link:d(/^!?\[(label)\]\((.*?)\)/).replace("label",v).getRegex(),reflink:d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",v).getRegex()},Q={...J,emStrongRDelimAst:Fe,emStrongLDelim:Qe,delLDelim:Ke,delRDelim:Xe,url:d(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",ie).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:d(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",ie).getRegex()},st={...Q,br:d(ue).replace("{2,}","*").getRegex(),text:d(Q.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},q={normal:W,gfm:Ae,pedantic:Ie},A={normal:J,gfm:Q,breaks:st,pedantic:rt};var it={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ge=l=>it[l];function O(l,e){if(e){if(m.escapeTest.test(l))return l.replace(m.escapeReplace,ge)}else if(m.escapeTestNoEncode.test(l))return l.replace(m.escapeReplaceNoEncode,ge);return l}function V(l){try{l=encodeURI(l).replace(m.percentDecode,"%");}catch{return null}return l}function Y(l,e){let t=l.replace(m.findPipe,(r,i,o)=>{let u=false,a=i;for(;--a>=0&&o[a]==="\\";)u=!u;return u?"|":" |"}),n=t.split(m.splitPipe),s=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(m.slashPipe,"|");return n}function $(l,e,t){let n=l.length;if(n===0)return "";let s=0;for(;s<n;){let r=l.charAt(n-s-1);if(r===e&&true)s++;else break}return l.slice(0,n-s)}function ee(l){let e=l.split(`
`),t=e.length-1;for(;t>=0&&m.blankLine.test(e[t]);)t--;return e.length-t<=2?l:e.slice(0,t+1).join(`
`)}function fe(l,e){if(l.indexOf(e[1])===-1)return  -1;let t=0;for(let n=0;n<l.length;n++)if(l[n]==="\\")n++;else if(l[n]===e[0])t++;else if(l[n]===e[1]&&(t--,t<0))return n;return t>0?-2:-1}function me(l,e=0){let t=e,n="";for(let s of l)if(s==="	"){let r=4-t%4;n+=" ".repeat(r),t+=r;}else n+=s,t++;return n}function xe(l,e,t,n,s){let r=e.href,i=e.title||null,o=l[1].replace(s.other.outputLinkReplace,"$1");n.state.inLink=true;let u={type:l[0].charAt(0)==="!"?"image":"link",raw:t,href:r,title:i,text:o,tokens:n.inlineTokens(o)};return n.state.inLink=false,u}function ot(l,e,t){let n=l.match(t.other.indentCodeCompensation);if(n===null)return e;let s=n[1];return e.split(`
`).map(r=>{let i=r.match(t.other.beginningSpace);if(i===null)return r;let[o]=i;return o.length>=s.length?r.slice(s.length):r}).join(`
`)}var w=class{options;rules;lexer;constructor(e){this.options=e||T;}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return {type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=this.options.pedantic?t[0]:ee(t[0]),s=n.replace(this.rules.other.codeRemoveIndent,"");return {type:"code",raw:n,codeBlockStyle:"indented",text:s}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],s=ot(n,t[3]||"",this.rules);return {type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){let s=$(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim());}return {type:"heading",raw:$(t[0],`
`),depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return {type:"hr",raw:$(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=$(t[0],`
`).split(`
`),s="",r="",i=[];for(;n.length>0;){let o=false,u=[],a;for(a=0;a<n.length;a++)if(this.rules.other.blockquoteStart.test(n[a]))u.push(n[a]),o=true;else if(!o)u.push(n[a]);else break;n=n.slice(a);let p=u.join(`
`),c=p.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${p}`:p,r=r?`${r}
${c}`:c;let h=this.lexer.state.top;if(this.lexer.state.top=true,this.lexer.blockTokens(c,i,true),this.lexer.state.top=h,n.length===0)break;let k=i.at(-1);if(k?.type==="code")break;if(k?.type==="blockquote"){let R=k,f=R.raw+`
`+n.join(`
`),S=this.blockquote(f);i[i.length-1]=S,s=s.substring(0,s.length-R.raw.length)+S.raw,r=r.substring(0,r.length-R.text.length)+S.text;break}else if(k?.type==="list"){let R=k,f=R.raw+`
`+n.join(`
`),S=this.list(f);i[i.length-1]=S,s=s.substring(0,s.length-k.raw.length)+S.raw,r=r.substring(0,r.length-R.raw.length)+S.raw,n=f.substring(i.at(-1).raw.length).split(`
`);continue}}return {type:"blockquote",raw:s,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),s=n.length>1,r={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:false,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");let i=this.rules.other.listItemRegex(n),o=false;for(;e;){let a=false,p="",c="";if(!(t=i.exec(e))||this.rules.block.hr.test(e))break;p=t[0],e=e.substring(p.length);let h=me(t[2].split(`
`,1)[0],t[1].length),k=e.split(`
`,1)[0],R=!h.trim(),f=0;if(this.options.pedantic?(f=2,c=h.trimStart()):R?f=t[1].length+1:(f=h.search(this.rules.other.nonSpaceChar),f=f>4?1:f,c=h.slice(f),f+=t[1].length),R&&this.rules.other.blankLine.test(k)&&(p+=k+`
`,e=e.substring(k.length+1),a=true),!a){let S=this.rules.other.nextBulletRegex(f),te=this.rules.other.hrRegex(f),ne=this.rules.other.fencesBeginRegex(f),re=this.rules.other.headingBeginRegex(f),be=this.rules.other.htmlBeginRegex(f),Re=this.rules.other.blockquoteBeginRegex(f);for(;e;){let G=e.split(`
`,1)[0],I;if(k=G,this.options.pedantic?(k=k.replace(this.rules.other.listReplaceNesting,"  "),I=k):I=k.replace(this.rules.other.tabCharGlobal,"    "),ne.test(k)||re.test(k)||be.test(k)||Re.test(k)||S.test(k)||te.test(k))break;if(I.search(this.rules.other.nonSpaceChar)>=f||!k.trim())c+=`
`+I.slice(f);else {if(R||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||ne.test(h)||re.test(h)||te.test(h))break;c+=`
`+k;}R=!k.trim(),p+=G+`
`,e=e.substring(G.length+1),h=I.slice(f);}}r.loose||(o?r.loose=true:this.rules.other.doubleBlankLine.test(p)&&(o=true)),r.items.push({type:"list_item",raw:p,task:!!this.options.gfm&&this.rules.other.listIsTask.test(c),loose:false,text:c,tokens:[]}),r.raw+=p;}let u=r.items.at(-1);if(u)u.raw=u.raw.trimEnd(),u.text=u.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let a of r.items){this.lexer.state.top=false,a.tokens=this.lexer.blockTokens(a.text,[]);let p=a.tokens[0];if(a.task&&(p?.type==="text"||p?.type==="paragraph")){a.text=a.text.replace(this.rules.other.listReplaceTask,""),p.raw=p.raw.replace(this.rules.other.listReplaceTask,""),p.text=p.text.replace(this.rules.other.listReplaceTask,"");for(let h=this.lexer.inlineQueue.length-1;h>=0;h--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[h].src)){this.lexer.inlineQueue[h].src=this.lexer.inlineQueue[h].src.replace(this.rules.other.listReplaceTask,"");break}let c=this.rules.other.listTaskCheckbox.exec(a.raw);if(c){let h={type:"checkbox",raw:c[0]+" ",checked:c[0]!=="[ ]"};a.checked=h.checked,r.loose?a.tokens[0]&&["paragraph","text"].includes(a.tokens[0].type)&&"tokens"in a.tokens[0]&&a.tokens[0].tokens?(a.tokens[0].raw=h.raw+a.tokens[0].raw,a.tokens[0].text=h.raw+a.tokens[0].text,a.tokens[0].tokens.unshift(h)):a.tokens.unshift({type:"paragraph",raw:h.raw,text:h.raw,tokens:[h]}):a.tokens.unshift(h);}}else a.task&&(a.task=false);if(!r.loose){let c=a.tokens.filter(k=>k.type==="space"),h=c.length>0&&c.some(k=>this.rules.other.anyLine.test(k.raw));r.loose=h;}}if(r.loose)for(let a of r.items){a.loose=true;for(let p of a.tokens)p.type==="text"&&(p.type="paragraph");}return r}}html(e){let t=this.rules.block.html.exec(e);if(t){let n=ee(t[0]);return {type:"html",block:true,raw:n,pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:n}}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return {type:"def",tag:n,raw:$(t[0],`
`),href:s,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Y(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:$(t[0],`
`),header:[],align:[],rows:[]};if(n.length===s.length){for(let o of s)this.rules.other.tableAlignRight.test(o)?i.align.push("right"):this.rules.other.tableAlignCenter.test(o)?i.align.push("center"):this.rules.other.tableAlignLeft.test(o)?i.align.push("left"):i.align.push(null);for(let o=0;o<n.length;o++)i.header.push({text:n[o],tokens:this.lexer.inline(n[o]),header:true,align:i.align[o]});for(let o of r)i.rows.push(Y(o,i.header.length).map((u,a)=>({text:u,tokens:this.lexer.inline(u),header:false,align:i.align[a]})));return i}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let n=t[1].trim();return {type:"heading",raw:$(t[0],`
`),depth:t[2].charAt(0)==="="?1:2,text:n,tokens:this.lexer.inline(n)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return {type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return {type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return {type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return !this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=true:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=false),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=true:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=false),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:false,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let i=$(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else {let i=fe(t[2],"()");if(i===-2)return;if(i>-1){let u=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,u).trim(),t[3]="";}}let s=t[2],r="";if(this.options.pedantic){let i=this.rules.other.pedanticHrefTitle.exec(s);i&&(s=i[1],r=i[3]);}else r=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),xe(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=t[s.toLowerCase()];if(!r){let i=n[0].charAt(0);return {type:"text",raw:i,text:i}}return xe(n,r,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||!s[1]&&!s[2]&&!s[3]&&!s[4]||s[4]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(s[1]||s[3]||"")||!n||this.rules.inline.punctuation.exec(n)){let i=[...s[0]].length-1,o,u,a=i,p=0,c=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+i);(s=c.exec(t))!==null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(u=[...o].length,s[3]||s[4]){a+=u;continue}else if((s[5]||s[6])&&i%3&&!((i+u)%3)){p+=u;continue}if(a-=u,a>0)continue;u=Math.min(u,u+a+p);let h=[...s[0]][0].length,k=e.slice(0,i+s.index+h+u);if(Math.min(i,u)%2){let f=k.slice(1,-1);return {type:"em",raw:k,text:f,tokens:this.lexer.inlineTokens(f)}}let R=k.slice(2,-2);return {type:"strong",raw:k,text:R,tokens:this.lexer.inlineTokens(R)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(n),r=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&r&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return {type:"br",raw:t[0]}}del(e,t,n=""){let s=this.rules.inline.delLDelim.exec(e);if(!s)return;if(!(s[1]||"")||!n||this.rules.inline.punctuation.exec(n)){let i=[...s[0]].length-1,o,u,a=i,p=this.rules.inline.delRDelim;for(p.lastIndex=0,t=t.slice(-1*e.length+i);(s=p.exec(t))!==null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o||(u=[...o].length,u!==i))continue;if(s[3]||s[4]){a+=u;continue}if(a-=u,a>0)continue;u=Math.min(u,u+a);let c=[...s[0]][0].length,h=e.slice(0,i+s.index+c+u),k=h.slice(i,-i);return {type:"del",raw:h,text:k,tokens:this.lexer.inlineTokens(k)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,s;if(t[2]==="@")n=t[0],s="mailto:"+n;else {let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(r!==t[0]);n=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0];}return {type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n=this.lexer.state.inRawBlock;return {type:"text",raw:t[0],text:t[0],escaped:n}}}};var x=class l{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||T,this.options.tokenizer=this.options.tokenizer||new w,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:false,inRawBlock:false,top:true};let t={other:m,block:q.normal,inline:A.normal};this.options.pedantic?(t.block=q.pedantic,t.inline=A.pedantic):this.options.gfm&&(t.block=q.gfm,this.options.breaks?t.inline=A.breaks:t.inline=A.gfm),this.tokenizer.rules=t;}static get rules(){return {block:q,inline:A}}static lex(e,t){return new l(t).lex(e)}static lexInline(e,t){return new l(t).inlineTokens(e)}lex(e){e=e.replace(m.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens);}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=false){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(m.tabCharGlobal,"    ").replace(m.spaceLine,""));let s=1/0;for(;e;){if(e.length<s)s=e.length;else {this.infiniteLoopError(e.charCodeAt(0));break}let r;if(this.options.extensions?.block?.some(o=>(r=o.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),true):false))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let o=t.at(-1);r.raw.length===1&&o!==void 0?o.raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let o=t.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+r.raw,o.text+=`
`+r.text,this.inlineQueue.at(-1).src=o.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let o=t.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+r.raw,o.text+=`
`+r.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},t.push(r));continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startBlock){let o=1/0,u=e.slice(1),a;this.options.extensions.startBlock.forEach(p=>{a=p.call({lexer:this},u),typeof a=="number"&&a>=0&&(o=Math.min(o,a));}),o<1/0&&o>=0&&(i=e.substring(0,o+1));}if(this.state.top&&(r=this.tokenizer.paragraph(i))){let o=t.at(-1);n&&o?.type==="paragraph"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+r.raw,o.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(r),n=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let o=t.at(-1);o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+r.raw,o.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(r);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=true,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e;if(this.tokens.links){let o=Object.keys(this.tokens.links);o.length>0&&(n=n.replace(this.tokenizer.rules.inline.reflinkSearch,u=>o.includes(u.slice(u.lastIndexOf("[")+1,-1))?"["+"a".repeat(u.length-2)+"]":u));}n=n.replace(this.tokenizer.rules.inline.anyPunctuation,"++"),n=n.replace(this.tokenizer.rules.inline.blockSkip,(o,u,a)=>{let p=a?a.length:0;return o.slice(0,p)+"["+"a".repeat(o.length-p-2)+"]"}),n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let s=false,r="",i=1/0;for(;e;){if(e.length<i)i=e.length;else {this.infiniteLoopError(e.charCodeAt(0));break}s||(r=""),s=false;let o;if(this.options.extensions?.inline?.some(a=>(o=a.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),true):false))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let a=t.at(-1);o.type==="text"&&a?.type==="text"?(a.raw+=o.raw,a.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(e,n,r)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(e,n,r)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let u=e;if(this.options.extensions?.startInline){let a=1/0,p=e.slice(1),c;this.options.extensions.startInline.forEach(h=>{c=h.call({lexer:this},p),typeof c=="number"&&c>=0&&(a=Math.min(a,c));}),a<1/0&&a>=0&&(u=e.substring(0,a+1));}if(o=this.tokenizer.inlineText(u)){e=e.substring(o.raw.length),o.raw.slice(-1)!=="_"&&(r=o.raw.slice(-1)),s=true;let a=t.at(-1);a?.type==="text"?(a.raw+=o.raw,a.text+=o.text):t.push(o);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t="Infinite loop on byte: "+e;if(this.options.silent)console.error(t);else throw new Error(t)}};var y=class{options;parser;constructor(e){this.options=e||T;}space(e){return ""}code({text:e,lang:t,escaped:n}){let s=(t||"").match(m.notSpaceStart)?.[0],r=e.replace(m.endingNewline,"")+`
`;return s?'<pre><code class="language-'+O(s)+'">'+(n?r:O(r,true))+`</code></pre>
`:"<pre><code>"+(n?r:O(r,true))+`</code></pre>
`}blockquote({tokens:e}){return `<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return ""}heading({tokens:e,depth:t}){return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return `<hr>
`}list(e){let t=e.ordered,n=e.start,s="";for(let o=0;o<e.items.length;o++){let u=e.items[o];s+=this.listitem(u);}let r=t?"ol":"ul",i=t&&n!==1?' start="'+n+'"':"";return "<"+r+i+`>
`+s+"</"+r+`>
`}listitem(e){return `<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return "<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return `<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let r=0;r<e.header.length;r++)n+=this.tablecell(e.header[r]);t+=this.tablerow({text:n});let s="";for(let r=0;r<e.rows.length;r++){let i=e.rows[r];n="";for(let o=0;o<i.length;o++)n+=this.tablecell(i[o]);s+=this.tablerow({text:n});}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return `<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return (e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return `<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return `<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return `<code>${O(e,true)}</code>`}br(e){return "<br>"}del({tokens:e}){return `<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let s=this.parser.parseInline(n),r=V(e);if(r===null)return s;e=r;let i='<a href="'+e+'"';return t&&(i+=' title="'+O(t)+'"'),i+=">"+s+"</a>",i}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));let r=V(e);if(r===null)return O(n);e=r;let i=`<img src="${e}" alt="${O(n)}"`;return t&&(i+=` title="${O(t)}"`),i+=">",i}text(e){return "tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:O(e.text)}};var L=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return ""+e}image({text:e}){return ""+e}br(){return ""}checkbox({raw:e}){return e}};var b=class l{options;renderer;textRenderer;constructor(e){this.options=e||T,this.options.renderer=this.options.renderer||new y,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new L;}static parse(e,t){return new l(t).parse(e)}static parseInline(e,t){return new l(t).parseInline(e)}parse(e){this.renderer.parser=this;let t="";for(let n=0;n<e.length;n++){let s=e[n];if(this.options.extensions?.renderers?.[s.type]){let i=s,o=this.options.extensions.renderers[i.type].call({parser:this},i);if(o!==false||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(i.type)){t+=o||"";continue}}let r=s;switch(r.type){case "space":{t+=this.renderer.space(r);break}case "hr":{t+=this.renderer.hr(r);break}case "heading":{t+=this.renderer.heading(r);break}case "code":{t+=this.renderer.code(r);break}case "table":{t+=this.renderer.table(r);break}case "blockquote":{t+=this.renderer.blockquote(r);break}case "list":{t+=this.renderer.list(r);break}case "checkbox":{t+=this.renderer.checkbox(r);break}case "html":{t+=this.renderer.html(r);break}case "def":{t+=this.renderer.def(r);break}case "paragraph":{t+=this.renderer.paragraph(r);break}case "text":{t+=this.renderer.text(r);break}default:{let i='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(i),"";throw new Error(i)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n="";for(let s=0;s<e.length;s++){let r=e[s];if(this.options.extensions?.renderers?.[r.type]){let o=this.options.extensions.renderers[r.type].call({parser:this},r);if(o!==false||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){n+=o||"";continue}}let i=r;switch(i.type){case "escape":{n+=t.text(i);break}case "html":{n+=t.html(i);break}case "link":{n+=t.link(i);break}case "image":{n+=t.image(i);break}case "checkbox":{n+=t.checkbox(i);break}case "strong":{n+=t.strong(i);break}case "em":{n+=t.em(i);break}case "codespan":{n+=t.codespan(i);break}case "br":{n+=t.br(i);break}case "del":{n+=t.del(i);break}case "text":{n+=t.text(i);break}default:{let o='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}};var P=class{options;block;constructor(e){this.options=e||T;}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?x.lex:x.lexInline}provideParser(e=this.block){return e?b.parse:b.parseInline}};var D=class{defaults=z();options=this.setOptions;parse=this.parseMarkdown(true);parseInline=this.parseMarkdown(false);Parser=b;Renderer=y;TextRenderer=L;Lexer=x;Tokenizer=w;Hooks=P;constructor(...e){this.use(...e);}walkTokens(e,t){let n=[];for(let s of e)switch(n=n.concat(t.call(this,s)),s.type){case "table":{let r=s;for(let i of r.header)n=n.concat(this.walkTokens(i.tokens,t));for(let i of r.rows)for(let o of i)n=n.concat(this.walkTokens(o.tokens,t));break}case "list":{let r=s;n=n.concat(this.walkTokens(r.items,t));break}default:{let r=s;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(i=>{let o=r[i].flat(1/0);n=n.concat(this.walkTokens(o,t));}):r.tokens&&(n=n.concat(this.walkTokens(r.tokens,t)));}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let s={...n};if(s.async=this.defaults.async||s.async||false,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let i=t.renderers[r.name];i?t.renderers[r.name]=function(...o){let u=r.renderer.apply(this,o);return u===false&&(u=i.apply(this,o)),u}:t.renderers[r.name]=r.renderer;}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=t[r.level];i?i.unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]));}"childTokens"in r&&r.childTokens&&(t.childTokens[r.name]=r.childTokens);}),s.extensions=t),n.renderer){let r=this.defaults.renderer||new y(this.defaults);for(let i in n.renderer){if(!(i in r))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let o=i,u=n.renderer[o],a=r[o];r[o]=(...p)=>{let c=u.apply(r,p);return c===false&&(c=a.apply(r,p)),c||""};}s.renderer=r;}if(n.tokenizer){let r=this.defaults.tokenizer||new w(this.defaults);for(let i in n.tokenizer){if(!(i in r))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let o=i,u=n.tokenizer[o],a=r[o];r[o]=(...p)=>{let c=u.apply(r,p);return c===false&&(c=a.apply(r,p)),c};}s.tokenizer=r;}if(n.hooks){let r=this.defaults.hooks||new P;for(let i in n.hooks){if(!(i in r))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let o=i,u=n.hooks[o],a=r[o];P.passThroughHooks.has(i)?r[o]=p=>{if(this.defaults.async&&P.passThroughHooksRespectAsync.has(i))return (async()=>{let h=await u.call(r,p);return a.call(r,h)})();let c=u.call(r,p);return a.call(r,c)}:r[o]=(...p)=>{if(this.defaults.async)return (async()=>{let h=await u.apply(r,p);return h===false&&(h=await a.apply(r,p)),h})();let c=u.apply(r,p);return c===false&&(c=a.apply(r,p)),c};}s.hooks=r;}if(n.walkTokens){let r=this.defaults.walkTokens,i=n.walkTokens;s.walkTokens=function(o){let u=[];return u.push(i.call(this,o)),r&&(u=u.concat(r.call(this,o))),u};}this.defaults={...this.defaults,...s};}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return x.lex(e,t??this.defaults)}parser(e,t){return b.parse(e,t??this.defaults)}parseMarkdown(e){return (n,s)=>{let r={...s},i={...this.defaults,...r},o=this.onError(!!i.silent,!!i.async);if(this.defaults.async===true&&r.async===false)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return (async()=>{let u=i.hooks?await i.hooks.preprocess(n):n,p=await(i.hooks?await i.hooks.provideLexer(e):e?x.lex:x.lexInline)(u,i),c=i.hooks?await i.hooks.processAllTokens(p):p;i.walkTokens&&await Promise.all(this.walkTokens(c,i.walkTokens));let k=await(i.hooks?await i.hooks.provideParser(e):e?b.parse:b.parseInline)(c,i);return i.hooks?await i.hooks.postprocess(k):k})().catch(o);try{i.hooks&&(n=i.hooks.preprocess(n));let a=(i.hooks?i.hooks.provideLexer(e):e?x.lex:x.lexInline)(n,i);i.hooks&&(a=i.hooks.processAllTokens(a)),i.walkTokens&&this.walkTokens(a,i.walkTokens);let c=(i.hooks?i.hooks.provideParser(e):e?b.parse:b.parseInline)(a,i);return i.hooks&&(c=i.hooks.postprocess(c)),c}catch(u){return o(u)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let s="<p>An error occurred:</p><pre>"+O(n.message+"",true)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}};var M=new D;function g(l,e){return M.parse(l,e)}g.options=g.setOptions=function(l){return M.setOptions(l),g.defaults=M.defaults,N(g.defaults),g};g.getDefaults=z;g.defaults=T;g.use=function(...l){return M.use(...l),g.defaults=M.defaults,N(g.defaults),g};g.walkTokens=function(l,e){return M.walkTokens(l,e)};g.parseInline=M.parseInline;g.Parser=b;g.parser=b.parse;g.Renderer=y;g.TextRenderer=L;g.Lexer=x;g.lexer=x.lex;g.Tokenizer=w;g.Hooks=P;g.parse=g;g.options;g.setOptions;g.use;g.walkTokens;g.parseInline;b.parse;x.lex;

const ALIAS = Symbol.for('yaml.alias');
const DOC = Symbol.for('yaml.document');
const MAP = Symbol.for('yaml.map');
const PAIR = Symbol.for('yaml.pair');
const SCALAR$1 = Symbol.for('yaml.scalar');
const SEQ = Symbol.for('yaml.seq');
const NODE_TYPE = Symbol.for('yaml.node.type');
const isAlias = (node) => !!node && typeof node === 'object' && node[NODE_TYPE] === ALIAS;
const isDocument = (node) => !!node && typeof node === 'object' && node[NODE_TYPE] === DOC;
const isMap = (node) => !!node && typeof node === 'object' && node[NODE_TYPE] === MAP;
const isPair = (node) => !!node && typeof node === 'object' && node[NODE_TYPE] === PAIR;
const isScalar$1 = (node) => !!node && typeof node === 'object' && node[NODE_TYPE] === SCALAR$1;
const isSeq = (node) => !!node && typeof node === 'object' && node[NODE_TYPE] === SEQ;
function isCollection(node) {
    if (node && typeof node === 'object')
        switch (node[NODE_TYPE]) {
            case MAP:
            case SEQ:
                return true;
        }
    return false;
}
function isNode(node) {
    if (node && typeof node === 'object')
        switch (node[NODE_TYPE]) {
            case ALIAS:
            case MAP:
            case SCALAR$1:
            case SEQ:
                return true;
        }
    return false;
}
const hasAnchor = (node) => (isScalar$1(node) || isCollection(node)) && !!node.anchor;

const BREAK = Symbol('break visit');
const SKIP = Symbol('skip children');
const REMOVE = Symbol('remove node');
/**
 * Apply a visitor to an AST node or document.
 *
 * Walks through the tree (depth-first) starting from `node`, calling a
 * `visitor` function with three arguments:
 *   - `key`: For sequence values and map `Pair`, the node's index in the
 *     collection. Within a `Pair`, `'key'` or `'value'`, correspondingly.
 *     `null` for the root node.
 *   - `node`: The current node.
 *   - `path`: The ancestry of the current node.
 *
 * The return value of the visitor may be used to control the traversal:
 *   - `undefined` (default): Do nothing and continue
 *   - `visit.SKIP`: Do not visit the children of this node, continue with next
 *     sibling
 *   - `visit.BREAK`: Terminate traversal completely
 *   - `visit.REMOVE`: Remove the current node, then continue with the next one
 *   - `Node`: Replace the current node, then continue by visiting it
 *   - `number`: While iterating the items of a sequence or map, set the index
 *     of the next step. This is useful especially if the index of the current
 *     node has changed.
 *
 * If `visitor` is a single function, it will be called with all values
 * encountered in the tree, including e.g. `null` values. Alternatively,
 * separate visitor functions may be defined for each `Map`, `Pair`, `Seq`,
 * `Alias` and `Scalar` node. To define the same visitor function for more than
 * one node type, use the `Collection` (map and seq), `Value` (map, seq & scalar)
 * and `Node` (alias, map, seq & scalar) targets. Of all these, only the most
 * specific defined one will be used for each node.
 */
function visit(node, visitor) {
    const visitor_ = initVisitor(visitor);
    if (isDocument(node)) {
        const cd = visit_(null, node.contents, visitor_, Object.freeze([node]));
        if (cd === REMOVE)
            node.contents = null;
    }
    else
        visit_(null, node, visitor_, Object.freeze([]));
}
// Without the `as symbol` casts, TS declares these in the `visit`
// namespace using `var`, but then complains about that because
// `unique symbol` must be `const`.
/** Terminate visit traversal completely */
visit.BREAK = BREAK;
/** Do not visit the children of the current node */
visit.SKIP = SKIP;
/** Remove the current node */
visit.REMOVE = REMOVE;
function visit_(key, node, visitor, path) {
    const ctrl = callVisitor(key, node, visitor, path);
    if (isNode(ctrl) || isPair(ctrl)) {
        replaceNode(key, path, ctrl);
        return visit_(key, ctrl, visitor, path);
    }
    if (typeof ctrl !== 'symbol') {
        if (isCollection(node)) {
            path = Object.freeze(path.concat(node));
            for (let i = 0; i < node.items.length; ++i) {
                const ci = visit_(i, node.items[i], visitor, path);
                if (typeof ci === 'number')
                    i = ci - 1;
                else if (ci === BREAK)
                    return BREAK;
                else if (ci === REMOVE) {
                    node.items.splice(i, 1);
                    i -= 1;
                }
            }
        }
        else if (isPair(node)) {
            path = Object.freeze(path.concat(node));
            const ck = visit_('key', node.key, visitor, path);
            if (ck === BREAK)
                return BREAK;
            else if (ck === REMOVE)
                node.key = null;
            const cv = visit_('value', node.value, visitor, path);
            if (cv === BREAK)
                return BREAK;
            else if (cv === REMOVE)
                node.value = null;
        }
    }
    return ctrl;
}
function initVisitor(visitor) {
    if (typeof visitor === 'object' &&
        (visitor.Collection || visitor.Node || visitor.Value)) {
        return Object.assign({
            Alias: visitor.Node,
            Map: visitor.Node,
            Scalar: visitor.Node,
            Seq: visitor.Node
        }, visitor.Value && {
            Map: visitor.Value,
            Scalar: visitor.Value,
            Seq: visitor.Value
        }, visitor.Collection && {
            Map: visitor.Collection,
            Seq: visitor.Collection
        }, visitor);
    }
    return visitor;
}
function callVisitor(key, node, visitor, path) {
    if (typeof visitor === 'function')
        return visitor(key, node, path);
    if (isMap(node))
        return visitor.Map?.(key, node, path);
    if (isSeq(node))
        return visitor.Seq?.(key, node, path);
    if (isPair(node))
        return visitor.Pair?.(key, node, path);
    if (isScalar$1(node))
        return visitor.Scalar?.(key, node, path);
    if (isAlias(node))
        return visitor.Alias?.(key, node, path);
    return undefined;
}
function replaceNode(key, path, node) {
    const parent = path[path.length - 1];
    if (isCollection(parent)) {
        parent.items[key] = node;
    }
    else if (isPair(parent)) {
        if (key === 'key')
            parent.key = node;
        else
            parent.value = node;
    }
    else if (isDocument(parent)) {
        parent.contents = node;
    }
    else {
        const pt = isAlias(parent) ? 'alias' : 'scalar';
        throw new Error(`Cannot replace node with ${pt} parent`);
    }
}

const escapeChars = {
    '!': '%21',
    ',': '%2C',
    '[': '%5B',
    ']': '%5D',
    '{': '%7B',
    '}': '%7D'
};
const escapeTagName = (tn) => tn.replace(/[!,[\]{}]/g, ch => escapeChars[ch]);
class Directives {
    constructor(yaml, tags) {
        /**
         * The directives-end/doc-start marker `---`. If `null`, a marker may still be
         * included in the document's stringified representation.
         */
        this.docStart = null;
        /** The doc-end marker `...`.  */
        this.docEnd = false;
        this.yaml = Object.assign({}, Directives.defaultYaml, yaml);
        this.tags = Object.assign({}, Directives.defaultTags, tags);
    }
    clone() {
        const copy = new Directives(this.yaml, this.tags);
        copy.docStart = this.docStart;
        return copy;
    }
    /**
     * During parsing, get a Directives instance for the current document and
     * update the stream state according to the current version's spec.
     */
    atDocument() {
        const res = new Directives(this.yaml, this.tags);
        switch (this.yaml.version) {
            case '1.1':
                this.atNextDocument = true;
                break;
            case '1.2':
                this.atNextDocument = false;
                this.yaml = {
                    explicit: Directives.defaultYaml.explicit,
                    version: '1.2'
                };
                this.tags = Object.assign({}, Directives.defaultTags);
                break;
        }
        return res;
    }
    /**
     * @param onError - May be called even if the action was successful
     * @returns `true` on success
     */
    add(line, onError) {
        if (this.atNextDocument) {
            this.yaml = { explicit: Directives.defaultYaml.explicit, version: '1.1' };
            this.tags = Object.assign({}, Directives.defaultTags);
            this.atNextDocument = false;
        }
        const parts = line.trim().split(/[ \t]+/);
        const name = parts.shift();
        switch (name) {
            case '%TAG': {
                if (parts.length !== 2) {
                    onError(0, '%TAG directive should contain exactly two parts');
                    if (parts.length < 2)
                        return false;
                }
                const [handle, prefix] = parts;
                this.tags[handle] = prefix;
                return true;
            }
            case '%YAML': {
                this.yaml.explicit = true;
                if (parts.length !== 1) {
                    onError(0, '%YAML directive should contain exactly one part');
                    return false;
                }
                const [version] = parts;
                if (version === '1.1' || version === '1.2') {
                    this.yaml.version = version;
                    return true;
                }
                else {
                    const isValid = /^\d+\.\d+$/.test(version);
                    onError(6, `Unsupported YAML version ${version}`, isValid);
                    return false;
                }
            }
            default:
                onError(0, `Unknown directive ${name}`, true);
                return false;
        }
    }
    /**
     * Resolves a tag, matching handles to those defined in %TAG directives.
     *
     * @returns Resolved tag, which may also be the non-specific tag `'!'` or a
     *   `'!local'` tag, or `null` if unresolvable.
     */
    tagName(source, onError) {
        if (source === '!')
            return '!'; // non-specific tag
        if (source[0] !== '!') {
            onError(`Not a valid tag: ${source}`);
            return null;
        }
        if (source[1] === '<') {
            const verbatim = source.slice(2, -1);
            if (verbatim === '!' || verbatim === '!!') {
                onError(`Verbatim tags aren't resolved, so ${source} is invalid.`);
                return null;
            }
            if (source[source.length - 1] !== '>')
                onError('Verbatim tags must end with a >');
            return verbatim;
        }
        const [, handle, suffix] = source.match(/^(.*!)([^!]*)$/s);
        if (!suffix)
            onError(`The ${source} tag has no suffix`);
        const prefix = this.tags[handle];
        if (prefix) {
            try {
                return prefix + decodeURIComponent(suffix);
            }
            catch (error) {
                onError(String(error));
                return null;
            }
        }
        if (handle === '!')
            return source; // local tag
        onError(`Could not resolve tag: ${source}`);
        return null;
    }
    /**
     * Given a fully resolved tag, returns its printable string form,
     * taking into account current tag prefixes and defaults.
     */
    tagString(tag) {
        for (const [handle, prefix] of Object.entries(this.tags)) {
            if (tag.startsWith(prefix))
                return handle + escapeTagName(tag.substring(prefix.length));
        }
        return tag[0] === '!' ? tag : `!<${tag}>`;
    }
    toString(doc) {
        const lines = this.yaml.explicit
            ? [`%YAML ${this.yaml.version || '1.2'}`]
            : [];
        const tagEntries = Object.entries(this.tags);
        let tagNames;
        if (doc && tagEntries.length > 0 && isNode(doc.contents)) {
            const tags = {};
            visit(doc.contents, (_key, node) => {
                if (isNode(node) && node.tag)
                    tags[node.tag] = true;
            });
            tagNames = Object.keys(tags);
        }
        else
            tagNames = [];
        for (const [handle, prefix] of tagEntries) {
            if (handle === '!!' && prefix === 'tag:yaml.org,2002:')
                continue;
            if (!doc || tagNames.some(tn => tn.startsWith(prefix)))
                lines.push(`%TAG ${handle} ${prefix}`);
        }
        return lines.join('\n');
    }
}
Directives.defaultYaml = { explicit: false, version: '1.2' };
Directives.defaultTags = { '!!': 'tag:yaml.org,2002:' };

/**
 * Verify that the input string is a valid anchor.
 *
 * Will throw on errors.
 */
function anchorIsValid(anchor) {
    if (/[\x00-\x19\s,[\]{}]/.test(anchor)) {
        const sa = JSON.stringify(anchor);
        const msg = `Anchor must not contain whitespace or control characters: ${sa}`;
        throw new Error(msg);
    }
    return true;
}
function anchorNames(root) {
    const anchors = new Set();
    visit(root, {
        Value(_key, node) {
            if (node.anchor)
                anchors.add(node.anchor);
        }
    });
    return anchors;
}
/** Find a new anchor name with the given `prefix` and a one-indexed suffix. */
function findNewAnchor(prefix, exclude) {
    for (let i = 1; true; ++i) {
        const name = `${prefix}${i}`;
        if (!exclude.has(name))
            return name;
    }
}
function createNodeAnchors(doc, prefix) {
    const aliasObjects = [];
    const sourceObjects = new Map();
    let prevAnchors = null;
    return {
        onAnchor: (source) => {
            aliasObjects.push(source);
            prevAnchors ?? (prevAnchors = anchorNames(doc));
            const anchor = findNewAnchor(prefix, prevAnchors);
            prevAnchors.add(anchor);
            return anchor;
        },
        /**
         * With circular references, the source node is only resolved after all
         * of its child nodes are. This is why anchors are set only after all of
         * the nodes have been created.
         */
        setAnchors: () => {
            for (const source of aliasObjects) {
                const ref = sourceObjects.get(source);
                if (typeof ref === 'object' &&
                    ref.anchor &&
                    (isScalar$1(ref.node) || isCollection(ref.node))) {
                    ref.node.anchor = ref.anchor;
                }
                else {
                    const error = new Error('Failed to resolve repeated object (this should not happen)');
                    error.source = source;
                    throw error;
                }
            }
        },
        sourceObjects
    };
}

/**
 * Applies the JSON.parse reviver algorithm as defined in the ECMA-262 spec,
 * in section 24.5.1.1 "Runtime Semantics: InternalizeJSONProperty" of the
 * 2021 edition: https://tc39.es/ecma262/#sec-json.parse
 *
 * Includes extensions for handling Map and Set objects.
 */
function applyReviver(reviver, obj, key, val) {
    if (val && typeof val === 'object') {
        if (Array.isArray(val)) {
            for (let i = 0, len = val.length; i < len; ++i) {
                const v0 = val[i];
                const v1 = applyReviver(reviver, val, String(i), v0);
                // eslint-disable-next-line @typescript-eslint/no-array-delete
                if (v1 === undefined)
                    delete val[i];
                else if (v1 !== v0)
                    val[i] = v1;
            }
        }
        else if (val instanceof Map) {
            for (const k of Array.from(val.keys())) {
                const v0 = val.get(k);
                const v1 = applyReviver(reviver, val, k, v0);
                if (v1 === undefined)
                    val.delete(k);
                else if (v1 !== v0)
                    val.set(k, v1);
            }
        }
        else if (val instanceof Set) {
            for (const v0 of Array.from(val)) {
                const v1 = applyReviver(reviver, val, v0, v0);
                if (v1 === undefined)
                    val.delete(v0);
                else if (v1 !== v0) {
                    val.delete(v0);
                    val.add(v1);
                }
            }
        }
        else {
            for (const [k, v0] of Object.entries(val)) {
                const v1 = applyReviver(reviver, val, k, v0);
                if (v1 === undefined)
                    delete val[k];
                else if (v1 !== v0)
                    val[k] = v1;
            }
        }
    }
    return reviver.call(obj, key, val);
}

/**
 * Recursively convert any node or its contents to native JavaScript
 *
 * @param value - The input value
 * @param arg - If `value` defines a `toJSON()` method, use this
 *   as its first argument
 * @param ctx - Conversion context, originally set in Document#toJS(). If
 *   `{ keep: true }` is not set, output should be suitable for JSON
 *   stringification.
 */
function toJS(value, arg, ctx) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    if (Array.isArray(value))
        return value.map((v, i) => toJS(v, String(i), ctx));
    if (value && typeof value.toJSON === 'function') {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        if (!ctx || !hasAnchor(value))
            return value.toJSON(arg, ctx);
        const data = { aliasCount: 0, count: 1, res: undefined };
        ctx.anchors.set(value, data);
        ctx.onCreate = res => {
            data.res = res;
            delete ctx.onCreate;
        };
        const res = value.toJSON(arg, ctx);
        if (ctx.onCreate)
            ctx.onCreate(res);
        return res;
    }
    if (typeof value === 'bigint' && !ctx?.keep)
        return Number(value);
    return value;
}

class NodeBase {
    constructor(type) {
        Object.defineProperty(this, NODE_TYPE, { value: type });
    }
    /** Create a copy of this node.  */
    clone() {
        const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
        if (this.range)
            copy.range = this.range.slice();
        return copy;
    }
    /** A plain JavaScript representation of this node. */
    toJS(doc, { mapAsMap, maxAliasCount, onAnchor, reviver } = {}) {
        if (!isDocument(doc))
            throw new TypeError('A document argument is required');
        const ctx = {
            anchors: new Map(),
            doc,
            keep: true,
            mapAsMap: mapAsMap === true,
            mapKeyWarned: false,
            maxAliasCount: typeof maxAliasCount === 'number' ? maxAliasCount : 100
        };
        const res = toJS(this, '', ctx);
        if (typeof onAnchor === 'function')
            for (const { count, res } of ctx.anchors.values())
                onAnchor(res, count);
        return typeof reviver === 'function'
            ? applyReviver(reviver, { '': res }, '', res)
            : res;
    }
}

class Alias extends NodeBase {
    constructor(source) {
        super(ALIAS);
        this.source = source;
        Object.defineProperty(this, 'tag', {
            set() {
                throw new Error('Alias nodes cannot have tags');
            }
        });
    }
    /**
     * Resolve the value of this alias within `doc`, finding the last
     * instance of the `source` anchor before this node.
     */
    resolve(doc, ctx) {
        if (ctx?.maxAliasCount === 0)
            throw new ReferenceError('Alias resolution is disabled');
        let nodes;
        if (ctx?.aliasResolveCache) {
            nodes = ctx.aliasResolveCache;
        }
        else {
            nodes = [];
            visit(doc, {
                Node: (_key, node) => {
                    if (isAlias(node) || hasAnchor(node))
                        nodes.push(node);
                }
            });
            if (ctx)
                ctx.aliasResolveCache = nodes;
        }
        let found = undefined;
        for (const node of nodes) {
            if (node === this)
                break;
            if (node.anchor === this.source)
                found = node;
        }
        return found;
    }
    toJSON(_arg, ctx) {
        if (!ctx)
            return { source: this.source };
        const { anchors, doc, maxAliasCount } = ctx;
        const source = this.resolve(doc, ctx);
        if (!source) {
            const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
            throw new ReferenceError(msg);
        }
        let data = anchors.get(source);
        if (!data) {
            // Resolve anchors for Node.prototype.toJS()
            toJS(source, null, ctx);
            data = anchors.get(source);
        }
        /* istanbul ignore if */
        if (data?.res === undefined) {
            const msg = 'This should not happen: Alias anchor was not resolved?';
            throw new ReferenceError(msg);
        }
        if (maxAliasCount >= 0) {
            data.count += 1;
            if (data.aliasCount === 0)
                data.aliasCount = getAliasCount(doc, source, anchors);
            if (data.count * data.aliasCount > maxAliasCount) {
                const msg = 'Excessive alias count indicates a resource exhaustion attack';
                throw new ReferenceError(msg);
            }
        }
        return data.res;
    }
    toString(ctx, _onComment, _onChompKeep) {
        const src = `*${this.source}`;
        if (ctx) {
            anchorIsValid(this.source);
            if (ctx.options.verifyAliasOrder && !ctx.anchors.has(this.source)) {
                const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
                throw new Error(msg);
            }
            if (ctx.implicitKey)
                return `${src} `;
        }
        return src;
    }
}
function getAliasCount(doc, node, anchors) {
    if (isAlias(node)) {
        const source = node.resolve(doc);
        const anchor = anchors && source && anchors.get(source);
        return anchor ? anchor.count * anchor.aliasCount : 0;
    }
    else if (isCollection(node)) {
        let count = 0;
        for (const item of node.items) {
            const c = getAliasCount(doc, item, anchors);
            if (c > count)
                count = c;
        }
        return count;
    }
    else if (isPair(node)) {
        const kc = getAliasCount(doc, node.key, anchors);
        const vc = getAliasCount(doc, node.value, anchors);
        return Math.max(kc, vc);
    }
    return 1;
}

const isScalarValue = (value) => !value || (typeof value !== 'function' && typeof value !== 'object');
class Scalar extends NodeBase {
    constructor(value) {
        super(SCALAR$1);
        this.value = value;
    }
    toJSON(arg, ctx) {
        return ctx?.keep ? this.value : toJS(this.value, arg, ctx);
    }
    toString() {
        return String(this.value);
    }
}
Scalar.BLOCK_FOLDED = 'BLOCK_FOLDED';
Scalar.BLOCK_LITERAL = 'BLOCK_LITERAL';
Scalar.PLAIN = 'PLAIN';
Scalar.QUOTE_DOUBLE = 'QUOTE_DOUBLE';
Scalar.QUOTE_SINGLE = 'QUOTE_SINGLE';

const defaultTagPrefix = 'tag:yaml.org,2002:';
function findTagObject(value, tagName, tags) {
    if (tagName) {
        const match = tags.filter(t => t.tag === tagName);
        const tagObj = match.find(t => !t.format) ?? match[0];
        if (!tagObj)
            throw new Error(`Tag ${tagName} not found`);
        return tagObj;
    }
    return tags.find(t => t.identify?.(value) && !t.format);
}
function createNode(value, tagName, ctx) {
    if (isDocument(value))
        value = value.contents;
    if (isNode(value))
        return value;
    if (isPair(value)) {
        const map = ctx.schema[MAP].createNode?.(ctx.schema, null, ctx);
        map.items.push(value);
        return map;
    }
    if (value instanceof String ||
        value instanceof Number ||
        value instanceof Boolean ||
        (typeof BigInt !== 'undefined' && value instanceof BigInt) // not supported everywhere
    ) {
        // https://tc39.es/ecma262/#sec-serializejsonproperty
        value = value.valueOf();
    }
    const { aliasDuplicateObjects, onAnchor, onTagObj, schema, sourceObjects } = ctx;
    // Detect duplicate references to the same object & use Alias nodes for all
    // after first. The `ref` wrapper allows for circular references to resolve.
    let ref = undefined;
    if (aliasDuplicateObjects && value && typeof value === 'object') {
        ref = sourceObjects.get(value);
        if (ref) {
            ref.anchor ?? (ref.anchor = onAnchor(value));
            return new Alias(ref.anchor);
        }
        else {
            ref = { anchor: null, node: null };
            sourceObjects.set(value, ref);
        }
    }
    if (tagName?.startsWith('!!'))
        tagName = defaultTagPrefix + tagName.slice(2);
    let tagObj = findTagObject(value, tagName, schema.tags);
    if (!tagObj) {
        if (value && typeof value.toJSON === 'function') {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            value = value.toJSON();
        }
        if (!value || typeof value !== 'object') {
            const node = new Scalar(value);
            if (ref)
                ref.node = node;
            return node;
        }
        tagObj =
            value instanceof Map
                ? schema[MAP]
                : Symbol.iterator in Object(value)
                    ? schema[SEQ]
                    : schema[MAP];
    }
    if (onTagObj) {
        onTagObj(tagObj);
        delete ctx.onTagObj;
    }
    const node = tagObj?.createNode
        ? tagObj.createNode(ctx.schema, value, ctx)
        : typeof tagObj?.nodeClass?.from === 'function'
            ? tagObj.nodeClass.from(ctx.schema, value, ctx)
            : new Scalar(value);
    if (tagName)
        node.tag = tagName;
    else if (!tagObj.default)
        node.tag = tagObj.tag;
    if (ref)
        ref.node = node;
    return node;
}

function collectionFromPath(schema, path, value) {
    let v = value;
    for (let i = path.length - 1; i >= 0; --i) {
        const k = path[i];
        if (typeof k === 'number' && Number.isInteger(k) && k >= 0) {
            const a = [];
            a[k] = v;
            v = a;
        }
        else {
            v = new Map([[k, v]]);
        }
    }
    return createNode(v, undefined, {
        aliasDuplicateObjects: false,
        keepUndefined: false,
        onAnchor: () => {
            throw new Error('This should not happen, please report a bug.');
        },
        schema,
        sourceObjects: new Map()
    });
}
// Type guard is intentionally a little wrong so as to be more useful,
// as it does not cover untypable empty non-string iterables (e.g. []).
const isEmptyPath = (path) => path == null ||
    (typeof path === 'object' && !!path[Symbol.iterator]().next().done);
class Collection extends NodeBase {
    constructor(type, schema) {
        super(type);
        Object.defineProperty(this, 'schema', {
            value: schema,
            configurable: true,
            enumerable: false,
            writable: true
        });
    }
    /**
     * Create a copy of this collection.
     *
     * @param schema - If defined, overwrites the original's schema
     */
    clone(schema) {
        const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
        if (schema)
            copy.schema = schema;
        copy.items = copy.items.map(it => isNode(it) || isPair(it) ? it.clone(schema) : it);
        if (this.range)
            copy.range = this.range.slice();
        return copy;
    }
    /**
     * Adds a value to the collection. For `!!map` and `!!omap` the value must
     * be a Pair instance or a `{ key, value }` object, which may not have a key
     * that already exists in the map.
     */
    addIn(path, value) {
        if (isEmptyPath(path))
            this.add(value);
        else {
            const [key, ...rest] = path;
            const node = this.get(key, true);
            if (isCollection(node))
                node.addIn(rest, value);
            else if (node === undefined && this.schema)
                this.set(key, collectionFromPath(this.schema, rest, value));
            else
                throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
        }
    }
    /**
     * Removes a value from the collection.
     * @returns `true` if the item was found and removed.
     */
    deleteIn(path) {
        const [key, ...rest] = path;
        if (rest.length === 0)
            return this.delete(key);
        const node = this.get(key, true);
        if (isCollection(node))
            return node.deleteIn(rest);
        else
            throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
    }
    /**
     * Returns item at `key`, or `undefined` if not found. By default unwraps
     * scalar values from their surrounding node; to disable set `keepScalar` to
     * `true` (collections are always returned intact).
     */
    getIn(path, keepScalar) {
        const [key, ...rest] = path;
        const node = this.get(key, true);
        if (rest.length === 0)
            return !keepScalar && isScalar$1(node) ? node.value : node;
        else
            return isCollection(node) ? node.getIn(rest, keepScalar) : undefined;
    }
    hasAllNullValues(allowScalar) {
        return this.items.every(node => {
            if (!isPair(node))
                return false;
            const n = node.value;
            return (n == null ||
                (allowScalar &&
                    isScalar$1(n) &&
                    n.value == null &&
                    !n.commentBefore &&
                    !n.comment &&
                    !n.tag));
        });
    }
    /**
     * Checks if the collection includes a value with the key `key`.
     */
    hasIn(path) {
        const [key, ...rest] = path;
        if (rest.length === 0)
            return this.has(key);
        const node = this.get(key, true);
        return isCollection(node) ? node.hasIn(rest) : false;
    }
    /**
     * Sets a value in this collection. For `!!set`, `value` needs to be a
     * boolean to add/remove the item from the set.
     */
    setIn(path, value) {
        const [key, ...rest] = path;
        if (rest.length === 0) {
            this.set(key, value);
        }
        else {
            const node = this.get(key, true);
            if (isCollection(node))
                node.setIn(rest, value);
            else if (node === undefined && this.schema)
                this.set(key, collectionFromPath(this.schema, rest, value));
            else
                throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
        }
    }
}

/**
 * Stringifies a comment.
 *
 * Empty comment lines are left empty,
 * lines consisting of a single space are replaced by `#`,
 * and all other lines are prefixed with a `#`.
 */
const stringifyComment = (str) => str.replace(/^(?!$)(?: $)?/gm, '#');
function indentComment(comment, indent) {
    if (/^\n+$/.test(comment))
        return comment.substring(1);
    return indent ? comment.replace(/^(?! *$)/gm, indent) : comment;
}
const lineComment = (str, indent, comment) => str.endsWith('\n')
    ? indentComment(comment, indent)
    : comment.includes('\n')
        ? '\n' + indentComment(comment, indent)
        : (str.endsWith(' ') ? '' : ' ') + comment;

const FOLD_FLOW = 'flow';
const FOLD_BLOCK = 'block';
const FOLD_QUOTED = 'quoted';
/**
 * Tries to keep input at up to `lineWidth` characters, splitting only on spaces
 * not followed by newlines or spaces unless `mode` is `'quoted'`. Lines are
 * terminated with `\n` and started with `indent`.
 */
function foldFlowLines(text, indent, mode = 'flow', { indentAtStart, lineWidth = 80, minContentWidth = 20, onFold, onOverflow } = {}) {
    if (!lineWidth || lineWidth < 0)
        return text;
    if (lineWidth < minContentWidth)
        minContentWidth = 0;
    const endStep = Math.max(1 + minContentWidth, 1 + lineWidth - indent.length);
    if (text.length <= endStep)
        return text;
    const folds = [];
    const escapedFolds = {};
    let end = lineWidth - indent.length;
    if (typeof indentAtStart === 'number') {
        if (indentAtStart > lineWidth - Math.max(2, minContentWidth))
            folds.push(0);
        else
            end = lineWidth - indentAtStart;
    }
    let split = undefined;
    let prev = undefined;
    let overflow = false;
    let i = -1;
    let escStart = -1;
    let escEnd = -1;
    if (mode === FOLD_BLOCK) {
        i = consumeMoreIndentedLines(text, i, indent.length);
        if (i !== -1)
            end = i + endStep;
    }
    for (let ch; (ch = text[(i += 1)]);) {
        if (mode === FOLD_QUOTED && ch === '\\') {
            escStart = i;
            switch (text[i + 1]) {
                case 'x':
                    i += 3;
                    break;
                case 'u':
                    i += 5;
                    break;
                case 'U':
                    i += 9;
                    break;
                default:
                    i += 1;
            }
            escEnd = i;
        }
        if (ch === '\n') {
            if (mode === FOLD_BLOCK)
                i = consumeMoreIndentedLines(text, i, indent.length);
            end = i + indent.length + endStep;
            split = undefined;
        }
        else {
            if (ch === ' ' &&
                prev &&
                prev !== ' ' &&
                prev !== '\n' &&
                prev !== '\t') {
                // space surrounded by non-space can be replaced with newline + indent
                const next = text[i + 1];
                if (next && next !== ' ' && next !== '\n' && next !== '\t')
                    split = i;
            }
            if (i >= end) {
                if (split) {
                    folds.push(split);
                    end = split + endStep;
                    split = undefined;
                }
                else if (mode === FOLD_QUOTED) {
                    // white-space collected at end may stretch past lineWidth
                    while (prev === ' ' || prev === '\t') {
                        prev = ch;
                        ch = text[(i += 1)];
                        overflow = true;
                    }
                    // Account for newline escape, but don't break preceding escape
                    const j = i > escEnd + 1 ? i - 2 : escStart - 1;
                    // Bail out if lineWidth & minContentWidth are shorter than an escape string
                    if (escapedFolds[j])
                        return text;
                    folds.push(j);
                    escapedFolds[j] = true;
                    end = j + endStep;
                    split = undefined;
                }
                else {
                    overflow = true;
                }
            }
        }
        prev = ch;
    }
    if (overflow && onOverflow)
        onOverflow();
    if (folds.length === 0)
        return text;
    if (onFold)
        onFold();
    let res = text.slice(0, folds[0]);
    for (let i = 0; i < folds.length; ++i) {
        const fold = folds[i];
        const end = folds[i + 1] || text.length;
        if (fold === 0)
            res = `\n${indent}${text.slice(0, end)}`;
        else {
            if (mode === FOLD_QUOTED && escapedFolds[fold])
                res += `${text[fold]}\\`;
            res += `\n${indent}${text.slice(fold + 1, end)}`;
        }
    }
    return res;
}
/**
 * Presumes `i + 1` is at the start of a line
 * @returns index of last newline in more-indented block
 */
function consumeMoreIndentedLines(text, i, indent) {
    let end = i;
    let start = i + 1;
    let ch = text[start];
    while (ch === ' ' || ch === '\t') {
        if (i < start + indent) {
            ch = text[++i];
        }
        else {
            do {
                ch = text[++i];
            } while (ch && ch !== '\n');
            end = i;
            start = i + 1;
            ch = text[start];
        }
    }
    return end;
}

const getFoldOptions = (ctx, isBlock) => ({
    indentAtStart: isBlock ? ctx.indent.length : ctx.indentAtStart,
    lineWidth: ctx.options.lineWidth,
    minContentWidth: ctx.options.minContentWidth
});
// Also checks for lines starting with %, as parsing the output as YAML 1.1 will
// presume that's starting a new document.
const containsDocumentMarker = (str) => /^(%|---|\.\.\.)/m.test(str);
function lineLengthOverLimit(str, lineWidth, indentLength) {
    if (!lineWidth || lineWidth < 0)
        return false;
    const limit = lineWidth - indentLength;
    const strLen = str.length;
    if (strLen <= limit)
        return false;
    for (let i = 0, start = 0; i < strLen; ++i) {
        if (str[i] === '\n') {
            if (i - start > limit)
                return true;
            start = i + 1;
            if (strLen - start <= limit)
                return false;
        }
    }
    return true;
}
function doubleQuotedString(value, ctx) {
    const json = JSON.stringify(value);
    if (ctx.options.doubleQuotedAsJSON)
        return json;
    const { implicitKey } = ctx;
    const minMultiLineLength = ctx.options.doubleQuotedMinMultiLineLength;
    const indent = ctx.indent || (containsDocumentMarker(value) ? '  ' : '');
    let str = '';
    let start = 0;
    for (let i = 0, ch = json[i]; ch; ch = json[++i]) {
        if (ch === ' ' && json[i + 1] === '\\' && json[i + 2] === 'n') {
            // space before newline needs to be escaped to not be folded
            str += json.slice(start, i) + '\\ ';
            i += 1;
            start = i;
            ch = '\\';
        }
        if (ch === '\\')
            switch (json[i + 1]) {
                case 'u':
                    {
                        str += json.slice(start, i);
                        const code = json.substr(i + 2, 4);
                        switch (code) {
                            case '0000':
                                str += '\\0';
                                break;
                            case '0007':
                                str += '\\a';
                                break;
                            case '000b':
                                str += '\\v';
                                break;
                            case '001b':
                                str += '\\e';
                                break;
                            case '0085':
                                str += '\\N';
                                break;
                            case '00a0':
                                str += '\\_';
                                break;
                            case '2028':
                                str += '\\L';
                                break;
                            case '2029':
                                str += '\\P';
                                break;
                            default:
                                if (code.substr(0, 2) === '00')
                                    str += '\\x' + code.substr(2);
                                else
                                    str += json.substr(i, 6);
                        }
                        i += 5;
                        start = i + 1;
                    }
                    break;
                case 'n':
                    if (implicitKey ||
                        json[i + 2] === '"' ||
                        json.length < minMultiLineLength) {
                        i += 1;
                    }
                    else {
                        // folding will eat first newline
                        str += json.slice(start, i) + '\n\n';
                        while (json[i + 2] === '\\' &&
                            json[i + 3] === 'n' &&
                            json[i + 4] !== '"') {
                            str += '\n';
                            i += 2;
                        }
                        str += indent;
                        // space after newline needs to be escaped to not be folded
                        if (json[i + 2] === ' ')
                            str += '\\';
                        i += 1;
                        start = i + 1;
                    }
                    break;
                default:
                    i += 1;
            }
    }
    str = start ? str + json.slice(start) : json;
    return implicitKey
        ? str
        : foldFlowLines(str, indent, FOLD_QUOTED, getFoldOptions(ctx, false));
}
function singleQuotedString(value, ctx) {
    if (ctx.options.singleQuote === false ||
        (ctx.implicitKey && value.includes('\n')) ||
        /[ \t]\n|\n[ \t]/.test(value) // single quoted string can't have leading or trailing whitespace around newline
    )
        return doubleQuotedString(value, ctx);
    const indent = ctx.indent || (containsDocumentMarker(value) ? '  ' : '');
    const res = "'" + value.replace(/'/g, "''").replace(/\n+/g, `$&\n${indent}`) + "'";
    return ctx.implicitKey
        ? res
        : foldFlowLines(res, indent, FOLD_FLOW, getFoldOptions(ctx, false));
}
function quotedString(value, ctx) {
    const { singleQuote } = ctx.options;
    let qs;
    if (singleQuote === false)
        qs = doubleQuotedString;
    else {
        const hasDouble = value.includes('"');
        const hasSingle = value.includes("'");
        if (hasDouble && !hasSingle)
            qs = singleQuotedString;
        else if (hasSingle && !hasDouble)
            qs = doubleQuotedString;
        else
            qs = singleQuote ? singleQuotedString : doubleQuotedString;
    }
    return qs(value, ctx);
}
// The negative lookbehind avoids a polynomial search,
// but isn't supported yet on Safari: https://caniuse.com/js-regexp-lookbehind
let blockEndNewlines;
try {
    blockEndNewlines = new RegExp('(^|(?<!\n))\n+(?!\n|$)', 'g');
}
catch {
    blockEndNewlines = /\n+(?!\n|$)/g;
}
function blockString({ comment, type, value }, ctx, onComment, onChompKeep) {
    const { blockQuote, commentString, lineWidth } = ctx.options;
    // 1. Block can't end in whitespace unless the last line is non-empty.
    // 2. Strings consisting of only whitespace are best rendered explicitly.
    if (!blockQuote || /\n[\t ]+$/.test(value)) {
        return quotedString(value, ctx);
    }
    const indent = ctx.indent ||
        (ctx.forceBlockIndent || containsDocumentMarker(value) ? '  ' : '');
    const literal = blockQuote === 'literal'
        ? true
        : blockQuote === 'folded' || type === Scalar.BLOCK_FOLDED
            ? false
            : type === Scalar.BLOCK_LITERAL
                ? true
                : !lineLengthOverLimit(value, lineWidth, indent.length);
    if (!value)
        return literal ? '|\n' : '>\n';
    // determine chomping from whitespace at value end
    let chomp;
    let endStart;
    for (endStart = value.length; endStart > 0; --endStart) {
        const ch = value[endStart - 1];
        if (ch !== '\n' && ch !== '\t' && ch !== ' ')
            break;
    }
    let end = value.substring(endStart);
    const endNlPos = end.indexOf('\n');
    if (endNlPos === -1) {
        chomp = '-'; // strip
    }
    else if (value === end || endNlPos !== end.length - 1) {
        chomp = '+'; // keep
        if (onChompKeep)
            onChompKeep();
    }
    else {
        chomp = ''; // clip
    }
    if (end) {
        value = value.slice(0, -end.length);
        if (end[end.length - 1] === '\n')
            end = end.slice(0, -1);
        end = end.replace(blockEndNewlines, `$&${indent}`);
    }
    // determine indent indicator from whitespace at value start
    let startWithSpace = false;
    let startEnd;
    let startNlPos = -1;
    for (startEnd = 0; startEnd < value.length; ++startEnd) {
        const ch = value[startEnd];
        if (ch === ' ')
            startWithSpace = true;
        else if (ch === '\n')
            startNlPos = startEnd;
        else
            break;
    }
    let start = value.substring(0, startNlPos < startEnd ? startNlPos + 1 : startEnd);
    if (start) {
        value = value.substring(start.length);
        start = start.replace(/\n+/g, `$&${indent}`);
    }
    const indentSize = indent ? '2' : '1'; // root is at -1
    // Leading | or > is added later
    let header = (startWithSpace ? indentSize : '') + chomp;
    if (comment) {
        header += ' ' + commentString(comment.replace(/ ?[\r\n]+/g, ' '));
        if (onComment)
            onComment();
    }
    if (!literal) {
        const foldedValue = value
            .replace(/\n+/g, '\n$&')
            .replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, '$1$2') // more-indented lines aren't folded
            //                ^ more-ind. ^ empty     ^ capture next empty lines only at end of indent
            .replace(/\n+/g, `$&${indent}`);
        let literalFallback = false;
        const foldOptions = getFoldOptions(ctx, true);
        if (blockQuote !== 'folded' && type !== Scalar.BLOCK_FOLDED) {
            foldOptions.onOverflow = () => {
                literalFallback = true;
            };
        }
        const body = foldFlowLines(`${start}${foldedValue}${end}`, indent, FOLD_BLOCK, foldOptions);
        if (!literalFallback)
            return `>${header}\n${indent}${body}`;
    }
    value = value.replace(/\n+/g, `$&${indent}`);
    return `|${header}\n${indent}${start}${value}${end}`;
}
function plainString(item, ctx, onComment, onChompKeep) {
    const { type, value } = item;
    const { actualString, implicitKey, indent, indentStep, inFlow } = ctx;
    if ((implicitKey && value.includes('\n')) ||
        (inFlow && /[[\]{},]/.test(value))) {
        return quotedString(value, ctx);
    }
    if (/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(value)) {
        // not allowed:
        // - '-' or '?'
        // - start with an indicator character (except [?:-]) or /[?-] /
        // - '\n ', ': ' or ' \n' anywhere
        // - '#' not preceded by a non-space char
        // - end with ' ' or ':'
        return implicitKey || inFlow || !value.includes('\n')
            ? quotedString(value, ctx)
            : blockString(item, ctx, onComment, onChompKeep);
    }
    if (!implicitKey &&
        !inFlow &&
        type !== Scalar.PLAIN &&
        value.includes('\n')) {
        // Where allowed & type not set explicitly, prefer block style for multiline strings
        return blockString(item, ctx, onComment, onChompKeep);
    }
    if (containsDocumentMarker(value)) {
        if (indent === '') {
            ctx.forceBlockIndent = true;
            return blockString(item, ctx, onComment, onChompKeep);
        }
        else if (implicitKey && indent === indentStep) {
            return quotedString(value, ctx);
        }
    }
    const str = value.replace(/\n+/g, `$&\n${indent}`);
    // Verify that output will be parsed as a string, as e.g. plain numbers and
    // booleans get parsed with those types in v1.2 (e.g. '42', 'true' & '0.9e-3'),
    // and others in v1.1.
    if (actualString) {
        const test = (tag) => tag.default && tag.tag !== 'tag:yaml.org,2002:str' && tag.test?.test(str);
        const { compat, tags } = ctx.doc.schema;
        if (tags.some(test) || compat?.some(test))
            return quotedString(value, ctx);
    }
    return implicitKey
        ? str
        : foldFlowLines(str, indent, FOLD_FLOW, getFoldOptions(ctx, false));
}
function stringifyString(item, ctx, onComment, onChompKeep) {
    const { implicitKey, inFlow } = ctx;
    const ss = typeof item.value === 'string'
        ? item
        : Object.assign({}, item, { value: String(item.value) });
    let { type } = item;
    if (type !== Scalar.QUOTE_DOUBLE) {
        // force double quotes on control characters & unpaired surrogates
        if (/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(ss.value))
            type = Scalar.QUOTE_DOUBLE;
    }
    const _stringify = (_type) => {
        switch (_type) {
            case Scalar.BLOCK_FOLDED:
            case Scalar.BLOCK_LITERAL:
                return implicitKey || inFlow
                    ? quotedString(ss.value, ctx) // blocks are not valid inside flow containers
                    : blockString(ss, ctx, onComment, onChompKeep);
            case Scalar.QUOTE_DOUBLE:
                return doubleQuotedString(ss.value, ctx);
            case Scalar.QUOTE_SINGLE:
                return singleQuotedString(ss.value, ctx);
            case Scalar.PLAIN:
                return plainString(ss, ctx, onComment, onChompKeep);
            default:
                return null;
        }
    };
    let res = _stringify(type);
    if (res === null) {
        const { defaultKeyType, defaultStringType } = ctx.options;
        const t = (implicitKey && defaultKeyType) || defaultStringType;
        res = _stringify(t);
        if (res === null)
            throw new Error(`Unsupported default string type ${t}`);
    }
    return res;
}

function createStringifyContext(doc, options) {
    const opt = Object.assign({
        blockQuote: true,
        commentString: stringifyComment,
        defaultKeyType: null,
        defaultStringType: 'PLAIN',
        directives: null,
        doubleQuotedAsJSON: false,
        doubleQuotedMinMultiLineLength: 40,
        falseStr: 'false',
        flowCollectionPadding: true,
        indentSeq: true,
        lineWidth: 80,
        minContentWidth: 20,
        nullStr: 'null',
        simpleKeys: false,
        singleQuote: null,
        trailingComma: false,
        trueStr: 'true',
        verifyAliasOrder: true
    }, doc.schema.toStringOptions, options);
    let inFlow;
    switch (opt.collectionStyle) {
        case 'block':
            inFlow = false;
            break;
        case 'flow':
            inFlow = true;
            break;
        default:
            inFlow = null;
    }
    return {
        anchors: new Set(),
        doc,
        flowCollectionPadding: opt.flowCollectionPadding ? ' ' : '',
        indent: '',
        indentStep: typeof opt.indent === 'number' ? ' '.repeat(opt.indent) : '  ',
        inFlow,
        options: opt
    };
}
function getTagObject(tags, item) {
    if (item.tag) {
        const match = tags.filter(t => t.tag === item.tag);
        if (match.length > 0)
            return match.find(t => t.format === item.format) ?? match[0];
    }
    let tagObj = undefined;
    let obj;
    if (isScalar$1(item)) {
        obj = item.value;
        let match = tags.filter(t => t.identify?.(obj));
        if (match.length > 1) {
            const testMatch = match.filter(t => t.test);
            if (testMatch.length > 0)
                match = testMatch;
        }
        tagObj =
            match.find(t => t.format === item.format) ?? match.find(t => !t.format);
    }
    else {
        obj = item;
        tagObj = tags.find(t => t.nodeClass && obj instanceof t.nodeClass);
    }
    if (!tagObj) {
        const name = obj?.constructor?.name ?? (obj === null ? 'null' : typeof obj);
        throw new Error(`Tag not resolved for ${name} value`);
    }
    return tagObj;
}
// needs to be called before value stringifier to allow for circular anchor refs
function stringifyProps(node, tagObj, { anchors, doc }) {
    if (!doc.directives)
        return '';
    const props = [];
    const anchor = (isScalar$1(node) || isCollection(node)) && node.anchor;
    if (anchor && anchorIsValid(anchor)) {
        anchors.add(anchor);
        props.push(`&${anchor}`);
    }
    const tag = node.tag ?? (tagObj.default ? null : tagObj.tag);
    if (tag)
        props.push(doc.directives.tagString(tag));
    return props.join(' ');
}
function stringify(item, ctx, onComment, onChompKeep) {
    if (isPair(item))
        return item.toString(ctx, onComment, onChompKeep);
    if (isAlias(item)) {
        if (ctx.doc.directives)
            return item.toString(ctx);
        if (ctx.resolvedAliases?.has(item)) {
            throw new TypeError(`Cannot stringify circular structure without alias nodes`);
        }
        else {
            if (ctx.resolvedAliases)
                ctx.resolvedAliases.add(item);
            else
                ctx.resolvedAliases = new Set([item]);
            item = item.resolve(ctx.doc);
        }
    }
    let tagObj = undefined;
    const node = isNode(item)
        ? item
        : ctx.doc.createNode(item, { onTagObj: o => (tagObj = o) });
    tagObj ?? (tagObj = getTagObject(ctx.doc.schema.tags, node));
    const props = stringifyProps(node, tagObj, ctx);
    if (props.length > 0)
        ctx.indentAtStart = (ctx.indentAtStart ?? 0) + props.length + 1;
    const str = typeof tagObj.stringify === 'function'
        ? tagObj.stringify(node, ctx, onComment, onChompKeep)
        : isScalar$1(node)
            ? stringifyString(node, ctx, onComment, onChompKeep)
            : node.toString(ctx, onComment, onChompKeep);
    if (!props)
        return str;
    return isScalar$1(node) || str[0] === '{' || str[0] === '['
        ? `${props} ${str}`
        : `${props}\n${ctx.indent}${str}`;
}

function stringifyPair({ key, value }, ctx, onComment, onChompKeep) {
    const { allNullValues, doc, indent, indentStep, options: { commentString, indentSeq, simpleKeys } } = ctx;
    let keyComment = (isNode(key) && key.comment) || null;
    if (simpleKeys) {
        if (keyComment) {
            throw new Error('With simple keys, key nodes cannot have comments');
        }
        if (isCollection(key) || (!isNode(key) && typeof key === 'object')) {
            const msg = 'With simple keys, collection cannot be used as a key value';
            throw new Error(msg);
        }
    }
    let explicitKey = !simpleKeys &&
        (!key ||
            (keyComment && value == null && !ctx.inFlow) ||
            isCollection(key) ||
            (isScalar$1(key)
                ? key.type === Scalar.BLOCK_FOLDED || key.type === Scalar.BLOCK_LITERAL
                : typeof key === 'object'));
    ctx = Object.assign({}, ctx, {
        allNullValues: false,
        implicitKey: !explicitKey && (simpleKeys || !allNullValues),
        indent: indent + indentStep
    });
    let keyCommentDone = false;
    let chompKeep = false;
    let str = stringify(key, ctx, () => (keyCommentDone = true), () => (chompKeep = true));
    if (!explicitKey && !ctx.inFlow && str.length > 1024) {
        if (simpleKeys)
            throw new Error('With simple keys, single line scalar must not span more than 1024 characters');
        explicitKey = true;
    }
    if (ctx.inFlow) {
        if (allNullValues || value == null) {
            if (keyCommentDone && onComment)
                onComment();
            return str === '' ? '?' : explicitKey ? `? ${str}` : str;
        }
    }
    else if ((allNullValues && !simpleKeys) || (value == null && explicitKey)) {
        str = `? ${str}`;
        if (keyComment && !keyCommentDone) {
            str += lineComment(str, ctx.indent, commentString(keyComment));
        }
        else if (chompKeep && onChompKeep)
            onChompKeep();
        return str;
    }
    if (keyCommentDone)
        keyComment = null;
    if (explicitKey) {
        if (keyComment)
            str += lineComment(str, ctx.indent, commentString(keyComment));
        str = `? ${str}\n${indent}:`;
    }
    else {
        str = `${str}:`;
        if (keyComment)
            str += lineComment(str, ctx.indent, commentString(keyComment));
    }
    let vsb, vcb, valueComment;
    if (isNode(value)) {
        vsb = !!value.spaceBefore;
        vcb = value.commentBefore;
        valueComment = value.comment;
    }
    else {
        vsb = false;
        vcb = null;
        valueComment = null;
        if (value && typeof value === 'object')
            value = doc.createNode(value);
    }
    ctx.implicitKey = false;
    if (!explicitKey && !keyComment && isScalar$1(value))
        ctx.indentAtStart = str.length + 1;
    chompKeep = false;
    if (!indentSeq &&
        indentStep.length >= 2 &&
        !ctx.inFlow &&
        !explicitKey &&
        isSeq(value) &&
        !value.flow &&
        !value.tag &&
        !value.anchor) {
        // If indentSeq === false, consider '- ' as part of indentation where possible
        ctx.indent = ctx.indent.substring(2);
    }
    let valueCommentDone = false;
    const valueStr = stringify(value, ctx, () => (valueCommentDone = true), () => (chompKeep = true));
    let ws = ' ';
    if (keyComment || vsb || vcb) {
        ws = vsb ? '\n' : '';
        if (vcb) {
            const cs = commentString(vcb);
            ws += `\n${indentComment(cs, ctx.indent)}`;
        }
        if (valueStr === '' && !ctx.inFlow) {
            if (ws === '\n' && valueComment)
                ws = '\n\n';
        }
        else {
            ws += `\n${ctx.indent}`;
        }
    }
    else if (!explicitKey && isCollection(value)) {
        const vs0 = valueStr[0];
        const nl0 = valueStr.indexOf('\n');
        const hasNewline = nl0 !== -1;
        const flow = ctx.inFlow ?? value.flow ?? value.items.length === 0;
        if (hasNewline || !flow) {
            let hasPropsLine = false;
            if (hasNewline && (vs0 === '&' || vs0 === '!')) {
                let sp0 = valueStr.indexOf(' ');
                if (vs0 === '&' &&
                    sp0 !== -1 &&
                    sp0 < nl0 &&
                    valueStr[sp0 + 1] === '!') {
                    sp0 = valueStr.indexOf(' ', sp0 + 1);
                }
                if (sp0 === -1 || nl0 < sp0)
                    hasPropsLine = true;
            }
            if (!hasPropsLine)
                ws = `\n${ctx.indent}`;
        }
    }
    else if (valueStr === '' || valueStr[0] === '\n') {
        ws = '';
    }
    str += ws + valueStr;
    if (ctx.inFlow) {
        if (valueCommentDone && onComment)
            onComment();
    }
    else if (valueComment && !valueCommentDone) {
        str += lineComment(str, ctx.indent, commentString(valueComment));
    }
    else if (chompKeep && onChompKeep) {
        onChompKeep();
    }
    return str;
}

function warn(logLevel, warning) {
    if (logLevel === 'debug' || logLevel === 'warn') {
        console.warn(warning);
    }
}

// If the value associated with a merge key is a single mapping node, each of
// its key/value pairs is inserted into the current mapping, unless the key
// already exists in it. If the value associated with the merge key is a
// sequence, then this sequence is expected to contain mapping nodes and each
// of these nodes is merged in turn according to its order in the sequence.
// Keys in mapping nodes earlier in the sequence override keys specified in
// later mapping nodes. -- http://yaml.org/type/merge.html
const MERGE_KEY = '<<';
const merge = {
    identify: value => value === MERGE_KEY ||
        (typeof value === 'symbol' && value.description === MERGE_KEY),
    default: 'key',
    tag: 'tag:yaml.org,2002:merge',
    test: /^<<$/,
    resolve: () => Object.assign(new Scalar(Symbol(MERGE_KEY)), {
        addToJSMap: addMergeToJSMap
    }),
    stringify: () => MERGE_KEY
};
const isMergeKey = (ctx, key) => (merge.identify(key) ||
    (isScalar$1(key) &&
        (!key.type || key.type === Scalar.PLAIN) &&
        merge.identify(key.value))) &&
    ctx?.doc.schema.tags.some(tag => tag.tag === merge.tag && tag.default);
function addMergeToJSMap(ctx, map, value) {
    const source = resolveAliasValue(ctx, value);
    if (isSeq(source))
        for (const it of source.items)
            mergeValue(ctx, map, it);
    else if (Array.isArray(source))
        for (const it of source)
            mergeValue(ctx, map, it);
    else
        mergeValue(ctx, map, source);
}
function mergeValue(ctx, map, value) {
    const source = resolveAliasValue(ctx, value);
    if (!isMap(source))
        throw new Error('Merge sources must be maps or map aliases');
    const srcMap = source.toJSON(null, ctx, Map);
    for (const [key, value] of srcMap) {
        if (map instanceof Map) {
            if (!map.has(key))
                map.set(key, value);
        }
        else if (map instanceof Set) {
            map.add(key);
        }
        else if (!Object.prototype.hasOwnProperty.call(map, key)) {
            Object.defineProperty(map, key, {
                value,
                writable: true,
                enumerable: true,
                configurable: true
            });
        }
    }
    return map;
}
function resolveAliasValue(ctx, value) {
    return ctx && isAlias(value) ? value.resolve(ctx.doc, ctx) : value;
}

function addPairToJSMap(ctx, map, { key, value }) {
    if (isNode(key) && key.addToJSMap)
        key.addToJSMap(ctx, map, value);
    // TODO: Should drop this special case for bare << handling
    else if (isMergeKey(ctx, key))
        addMergeToJSMap(ctx, map, value);
    else {
        const jsKey = toJS(key, '', ctx);
        if (map instanceof Map) {
            map.set(jsKey, toJS(value, jsKey, ctx));
        }
        else if (map instanceof Set) {
            map.add(jsKey);
        }
        else {
            const stringKey = stringifyKey(key, jsKey, ctx);
            const jsValue = toJS(value, stringKey, ctx);
            if (stringKey in map)
                Object.defineProperty(map, stringKey, {
                    value: jsValue,
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
            else
                map[stringKey] = jsValue;
        }
    }
    return map;
}
function stringifyKey(key, jsKey, ctx) {
    if (jsKey === null)
        return '';
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (typeof jsKey !== 'object')
        return String(jsKey);
    if (isNode(key) && ctx?.doc) {
        const strCtx = createStringifyContext(ctx.doc, {});
        strCtx.anchors = new Set();
        for (const node of ctx.anchors.keys())
            strCtx.anchors.add(node.anchor);
        strCtx.inFlow = true;
        strCtx.inStringifyKey = true;
        const strKey = key.toString(strCtx);
        if (!ctx.mapKeyWarned) {
            let jsonStr = JSON.stringify(strKey);
            if (jsonStr.length > 40)
                jsonStr = jsonStr.substring(0, 36) + '..."';
            warn(ctx.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${jsonStr}. Set mapAsMap: true to use object keys.`);
            ctx.mapKeyWarned = true;
        }
        return strKey;
    }
    return JSON.stringify(jsKey);
}

function createPair(key, value, ctx) {
    const k = createNode(key, undefined, ctx);
    const v = createNode(value, undefined, ctx);
    return new Pair(k, v);
}
class Pair {
    constructor(key, value = null) {
        Object.defineProperty(this, NODE_TYPE, { value: PAIR });
        this.key = key;
        this.value = value;
    }
    clone(schema) {
        let { key, value } = this;
        if (isNode(key))
            key = key.clone(schema);
        if (isNode(value))
            value = value.clone(schema);
        return new Pair(key, value);
    }
    toJSON(_, ctx) {
        const pair = ctx?.mapAsMap ? new Map() : {};
        return addPairToJSMap(ctx, pair, this);
    }
    toString(ctx, onComment, onChompKeep) {
        return ctx?.doc
            ? stringifyPair(this, ctx, onComment, onChompKeep)
            : JSON.stringify(this);
    }
}

function stringifyCollection(collection, ctx, options) {
    const flow = ctx.inFlow ?? collection.flow;
    const stringify = flow ? stringifyFlowCollection : stringifyBlockCollection;
    return stringify(collection, ctx, options);
}
function stringifyBlockCollection({ comment, items }, ctx, { blockItemPrefix, flowChars, itemIndent, onChompKeep, onComment }) {
    const { indent, options: { commentString } } = ctx;
    const itemCtx = Object.assign({}, ctx, { indent: itemIndent, type: null });
    let chompKeep = false; // flag for the preceding node's status
    const lines = [];
    for (let i = 0; i < items.length; ++i) {
        const item = items[i];
        let comment = null;
        if (isNode(item)) {
            if (!chompKeep && item.spaceBefore)
                lines.push('');
            addCommentBefore(ctx, lines, item.commentBefore, chompKeep);
            if (item.comment)
                comment = item.comment;
        }
        else if (isPair(item)) {
            const ik = isNode(item.key) ? item.key : null;
            if (ik) {
                if (!chompKeep && ik.spaceBefore)
                    lines.push('');
                addCommentBefore(ctx, lines, ik.commentBefore, chompKeep);
            }
        }
        chompKeep = false;
        let str = stringify(item, itemCtx, () => (comment = null), () => (chompKeep = true));
        if (comment)
            str += lineComment(str, itemIndent, commentString(comment));
        if (chompKeep && comment)
            chompKeep = false;
        lines.push(blockItemPrefix + str);
    }
    let str;
    if (lines.length === 0) {
        str = flowChars.start + flowChars.end;
    }
    else {
        str = lines[0];
        for (let i = 1; i < lines.length; ++i) {
            const line = lines[i];
            str += line ? `\n${indent}${line}` : '\n';
        }
    }
    if (comment) {
        str += '\n' + indentComment(commentString(comment), indent);
        if (onComment)
            onComment();
    }
    else if (chompKeep && onChompKeep)
        onChompKeep();
    return str;
}
function stringifyFlowCollection({ items }, ctx, { flowChars, itemIndent }) {
    const { indent, indentStep, flowCollectionPadding: fcPadding, options: { commentString } } = ctx;
    itemIndent += indentStep;
    const itemCtx = Object.assign({}, ctx, {
        indent: itemIndent,
        inFlow: true,
        type: null
    });
    let reqNewline = false;
    let linesAtValue = 0;
    const lines = [];
    for (let i = 0; i < items.length; ++i) {
        const item = items[i];
        let comment = null;
        if (isNode(item)) {
            if (item.spaceBefore)
                lines.push('');
            addCommentBefore(ctx, lines, item.commentBefore, false);
            if (item.comment)
                comment = item.comment;
        }
        else if (isPair(item)) {
            const ik = isNode(item.key) ? item.key : null;
            if (ik) {
                if (ik.spaceBefore)
                    lines.push('');
                addCommentBefore(ctx, lines, ik.commentBefore, false);
                if (ik.comment)
                    reqNewline = true;
            }
            const iv = isNode(item.value) ? item.value : null;
            if (iv) {
                if (iv.comment)
                    comment = iv.comment;
                if (iv.commentBefore)
                    reqNewline = true;
            }
            else if (item.value == null && ik?.comment) {
                comment = ik.comment;
            }
        }
        if (comment)
            reqNewline = true;
        let str = stringify(item, itemCtx, () => (comment = null));
        reqNewline || (reqNewline = lines.length > linesAtValue || str.includes('\n'));
        if (i < items.length - 1) {
            str += ',';
        }
        else if (ctx.options.trailingComma) {
            if (ctx.options.lineWidth > 0) {
                reqNewline || (reqNewline = lines.reduce((sum, line) => sum + line.length + 2, 2) +
                    (str.length + 2) >
                    ctx.options.lineWidth);
            }
            if (reqNewline) {
                str += ',';
            }
        }
        if (comment)
            str += lineComment(str, itemIndent, commentString(comment));
        lines.push(str);
        linesAtValue = lines.length;
    }
    const { start, end } = flowChars;
    if (lines.length === 0) {
        return start + end;
    }
    else {
        if (!reqNewline) {
            const len = lines.reduce((sum, line) => sum + line.length + 2, 2);
            reqNewline = ctx.options.lineWidth > 0 && len > ctx.options.lineWidth;
        }
        if (reqNewline) {
            let str = start;
            for (const line of lines)
                str += line ? `\n${indentStep}${indent}${line}` : '\n';
            return `${str}\n${indent}${end}`;
        }
        else {
            return `${start}${fcPadding}${lines.join(' ')}${fcPadding}${end}`;
        }
    }
}
function addCommentBefore({ indent, options: { commentString } }, lines, comment, chompKeep) {
    if (comment && chompKeep)
        comment = comment.replace(/^\n+/, '');
    if (comment) {
        const ic = indentComment(commentString(comment), indent);
        lines.push(ic.trimStart()); // Avoid double indent on first line
    }
}

function findPair(items, key) {
    const k = isScalar$1(key) ? key.value : key;
    for (const it of items) {
        if (isPair(it)) {
            if (it.key === key || it.key === k)
                return it;
            if (isScalar$1(it.key) && it.key.value === k)
                return it;
        }
    }
    return undefined;
}
class YAMLMap extends Collection {
    static get tagName() {
        return 'tag:yaml.org,2002:map';
    }
    constructor(schema) {
        super(MAP, schema);
        this.items = [];
    }
    /**
     * A generic collection parsing method that can be extended
     * to other node classes that inherit from YAMLMap
     */
    static from(schema, obj, ctx) {
        const { keepUndefined, replacer } = ctx;
        const map = new this(schema);
        const add = (key, value) => {
            if (typeof replacer === 'function')
                value = replacer.call(obj, key, value);
            else if (Array.isArray(replacer) && !replacer.includes(key))
                return;
            if (value !== undefined || keepUndefined)
                map.items.push(createPair(key, value, ctx));
        };
        if (obj instanceof Map) {
            for (const [key, value] of obj)
                add(key, value);
        }
        else if (obj && typeof obj === 'object') {
            for (const key of Object.keys(obj))
                add(key, obj[key]);
        }
        if (typeof schema.sortMapEntries === 'function') {
            map.items.sort(schema.sortMapEntries);
        }
        return map;
    }
    /**
     * Adds a value to the collection.
     *
     * @param overwrite - If not set `true`, using a key that is already in the
     *   collection will throw. Otherwise, overwrites the previous value.
     */
    add(pair, overwrite) {
        let _pair;
        if (isPair(pair))
            _pair = pair;
        else if (!pair || typeof pair !== 'object' || !('key' in pair)) {
            // In TypeScript, this never happens.
            _pair = new Pair(pair, pair?.value);
        }
        else
            _pair = new Pair(pair.key, pair.value);
        const prev = findPair(this.items, _pair.key);
        const sortEntries = this.schema?.sortMapEntries;
        if (prev) {
            if (!overwrite)
                throw new Error(`Key ${_pair.key} already set`);
            // For scalars, keep the old node & its comments and anchors
            if (isScalar$1(prev.value) && isScalarValue(_pair.value))
                prev.value.value = _pair.value;
            else
                prev.value = _pair.value;
        }
        else if (sortEntries) {
            const i = this.items.findIndex(item => sortEntries(_pair, item) < 0);
            if (i === -1)
                this.items.push(_pair);
            else
                this.items.splice(i, 0, _pair);
        }
        else {
            this.items.push(_pair);
        }
    }
    delete(key) {
        const it = findPair(this.items, key);
        if (!it)
            return false;
        const del = this.items.splice(this.items.indexOf(it), 1);
        return del.length > 0;
    }
    get(key, keepScalar) {
        const it = findPair(this.items, key);
        const node = it?.value;
        return (!keepScalar && isScalar$1(node) ? node.value : node) ?? undefined;
    }
    has(key) {
        return !!findPair(this.items, key);
    }
    set(key, value) {
        this.add(new Pair(key, value), true);
    }
    /**
     * @param ctx - Conversion context, originally set in Document#toJS()
     * @param {Class} Type - If set, forces the returned collection type
     * @returns Instance of Type, Map, or Object
     */
    toJSON(_, ctx, Type) {
        const map = Type ? new Type() : ctx?.mapAsMap ? new Map() : {};
        if (ctx?.onCreate)
            ctx.onCreate(map);
        for (const item of this.items)
            addPairToJSMap(ctx, map, item);
        return map;
    }
    toString(ctx, onComment, onChompKeep) {
        if (!ctx)
            return JSON.stringify(this);
        for (const item of this.items) {
            if (!isPair(item))
                throw new Error(`Map items must all be pairs; found ${JSON.stringify(item)} instead`);
        }
        if (!ctx.allNullValues && this.hasAllNullValues(false))
            ctx = Object.assign({}, ctx, { allNullValues: true });
        return stringifyCollection(this, ctx, {
            blockItemPrefix: '',
            flowChars: { start: '{', end: '}' },
            itemIndent: ctx.indent || '',
            onChompKeep,
            onComment
        });
    }
}

const map = {
    collection: 'map',
    default: true,
    nodeClass: YAMLMap,
    tag: 'tag:yaml.org,2002:map',
    resolve(map, onError) {
        if (!isMap(map))
            onError('Expected a mapping for this tag');
        return map;
    },
    createNode: (schema, obj, ctx) => YAMLMap.from(schema, obj, ctx)
};

class YAMLSeq extends Collection {
    static get tagName() {
        return 'tag:yaml.org,2002:seq';
    }
    constructor(schema) {
        super(SEQ, schema);
        this.items = [];
    }
    add(value) {
        this.items.push(value);
    }
    /**
     * Removes a value from the collection.
     *
     * `key` must contain a representation of an integer for this to succeed.
     * It may be wrapped in a `Scalar`.
     *
     * @returns `true` if the item was found and removed.
     */
    delete(key) {
        const idx = asItemIndex(key);
        if (typeof idx !== 'number')
            return false;
        const del = this.items.splice(idx, 1);
        return del.length > 0;
    }
    get(key, keepScalar) {
        const idx = asItemIndex(key);
        if (typeof idx !== 'number')
            return undefined;
        const it = this.items[idx];
        return !keepScalar && isScalar$1(it) ? it.value : it;
    }
    /**
     * Checks if the collection includes a value with the key `key`.
     *
     * `key` must contain a representation of an integer for this to succeed.
     * It may be wrapped in a `Scalar`.
     */
    has(key) {
        const idx = asItemIndex(key);
        return typeof idx === 'number' && idx < this.items.length;
    }
    /**
     * Sets a value in this collection. For `!!set`, `value` needs to be a
     * boolean to add/remove the item from the set.
     *
     * If `key` does not contain a representation of an integer, this will throw.
     * It may be wrapped in a `Scalar`.
     */
    set(key, value) {
        const idx = asItemIndex(key);
        if (typeof idx !== 'number')
            throw new Error(`Expected a valid index, not ${key}.`);
        const prev = this.items[idx];
        if (isScalar$1(prev) && isScalarValue(value))
            prev.value = value;
        else
            this.items[idx] = value;
    }
    toJSON(_, ctx) {
        const seq = [];
        if (ctx?.onCreate)
            ctx.onCreate(seq);
        let i = 0;
        for (const item of this.items)
            seq.push(toJS(item, String(i++), ctx));
        return seq;
    }
    toString(ctx, onComment, onChompKeep) {
        if (!ctx)
            return JSON.stringify(this);
        return stringifyCollection(this, ctx, {
            blockItemPrefix: '- ',
            flowChars: { start: '[', end: ']' },
            itemIndent: (ctx.indent || '') + '  ',
            onChompKeep,
            onComment
        });
    }
    static from(schema, obj, ctx) {
        const { replacer } = ctx;
        const seq = new this(schema);
        if (obj && Symbol.iterator in Object(obj)) {
            let i = 0;
            for (let it of obj) {
                if (typeof replacer === 'function') {
                    const key = obj instanceof Set ? it : String(i++);
                    it = replacer.call(obj, key, it);
                }
                seq.items.push(createNode(it, undefined, ctx));
            }
        }
        return seq;
    }
}
function asItemIndex(key) {
    let idx = isScalar$1(key) ? key.value : key;
    if (idx && typeof idx === 'string')
        idx = Number(idx);
    return typeof idx === 'number' && Number.isInteger(idx) && idx >= 0
        ? idx
        : null;
}

const seq = {
    collection: 'seq',
    default: true,
    nodeClass: YAMLSeq,
    tag: 'tag:yaml.org,2002:seq',
    resolve(seq, onError) {
        if (!isSeq(seq))
            onError('Expected a sequence for this tag');
        return seq;
    },
    createNode: (schema, obj, ctx) => YAMLSeq.from(schema, obj, ctx)
};

const string = {
    identify: value => typeof value === 'string',
    default: true,
    tag: 'tag:yaml.org,2002:str',
    resolve: str => str,
    stringify(item, ctx, onComment, onChompKeep) {
        ctx = Object.assign({ actualString: true }, ctx);
        return stringifyString(item, ctx, onComment, onChompKeep);
    }
};

const nullTag = {
    identify: value => value == null,
    createNode: () => new Scalar(null),
    default: true,
    tag: 'tag:yaml.org,2002:null',
    test: /^(?:~|[Nn]ull|NULL)?$/,
    resolve: () => new Scalar(null),
    stringify: ({ source }, ctx) => typeof source === 'string' && nullTag.test.test(source)
        ? source
        : ctx.options.nullStr
};

const boolTag = {
    identify: value => typeof value === 'boolean',
    default: true,
    tag: 'tag:yaml.org,2002:bool',
    test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
    resolve: str => new Scalar(str[0] === 't' || str[0] === 'T'),
    stringify({ source, value }, ctx) {
        if (source && boolTag.test.test(source)) {
            const sv = source[0] === 't' || source[0] === 'T';
            if (value === sv)
                return source;
        }
        return value ? ctx.options.trueStr : ctx.options.falseStr;
    }
};

function stringifyNumber({ format, minFractionDigits, tag, value }) {
    if (typeof value === 'bigint')
        return String(value);
    const num = typeof value === 'number' ? value : Number(value);
    if (!isFinite(num))
        return isNaN(num) ? '.nan' : num < 0 ? '-.inf' : '.inf';
    let n = Object.is(value, -0) ? '-0' : JSON.stringify(value);
    if (!format &&
        minFractionDigits &&
        (!tag || tag === 'tag:yaml.org,2002:float') &&
        /^-?\d/.test(n) &&
        !n.includes('e')) {
        let i = n.indexOf('.');
        if (i < 0) {
            i = n.length;
            n += '.';
        }
        let d = minFractionDigits - (n.length - i - 1);
        while (d-- > 0)
            n += '0';
    }
    return n;
}

const floatNaN$1 = {
    identify: value => typeof value === 'number',
    default: true,
    tag: 'tag:yaml.org,2002:float',
    test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
    resolve: str => str.slice(-3).toLowerCase() === 'nan'
        ? NaN
        : str[0] === '-'
            ? Number.NEGATIVE_INFINITY
            : Number.POSITIVE_INFINITY,
    stringify: stringifyNumber
};
const floatExp$1 = {
    identify: value => typeof value === 'number',
    default: true,
    tag: 'tag:yaml.org,2002:float',
    format: 'EXP',
    test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
    resolve: str => parseFloat(str),
    stringify(node) {
        const num = Number(node.value);
        return isFinite(num) ? num.toExponential() : stringifyNumber(node);
    }
};
const float$1 = {
    identify: value => typeof value === 'number',
    default: true,
    tag: 'tag:yaml.org,2002:float',
    test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
    resolve(str) {
        const node = new Scalar(parseFloat(str));
        const dot = str.indexOf('.');
        if (dot !== -1 && str[str.length - 1] === '0')
            node.minFractionDigits = str.length - dot - 1;
        return node;
    },
    stringify: stringifyNumber
};

const intIdentify$2 = (value) => typeof value === 'bigint' || Number.isInteger(value);
const intResolve$1 = (str, offset, radix, { intAsBigInt }) => (intAsBigInt ? BigInt(str) : parseInt(str.substring(offset), radix));
function intStringify$1(node, radix, prefix) {
    const { value } = node;
    if (intIdentify$2(value) && value >= 0)
        return prefix + value.toString(radix);
    return stringifyNumber(node);
}
const intOct$1 = {
    identify: value => intIdentify$2(value) && value >= 0,
    default: true,
    tag: 'tag:yaml.org,2002:int',
    format: 'OCT',
    test: /^0o[0-7]+$/,
    resolve: (str, _onError, opt) => intResolve$1(str, 2, 8, opt),
    stringify: node => intStringify$1(node, 8, '0o')
};
const int$1 = {
    identify: intIdentify$2,
    default: true,
    tag: 'tag:yaml.org,2002:int',
    test: /^[-+]?[0-9]+$/,
    resolve: (str, _onError, opt) => intResolve$1(str, 0, 10, opt),
    stringify: stringifyNumber
};
const intHex$1 = {
    identify: value => intIdentify$2(value) && value >= 0,
    default: true,
    tag: 'tag:yaml.org,2002:int',
    format: 'HEX',
    test: /^0x[0-9a-fA-F]+$/,
    resolve: (str, _onError, opt) => intResolve$1(str, 2, 16, opt),
    stringify: node => intStringify$1(node, 16, '0x')
};

const schema$2 = [
    map,
    seq,
    string,
    nullTag,
    boolTag,
    intOct$1,
    int$1,
    intHex$1,
    floatNaN$1,
    floatExp$1,
    float$1
];

function intIdentify$1(value) {
    return typeof value === 'bigint' || Number.isInteger(value);
}
const stringifyJSON = ({ value }) => JSON.stringify(value);
const jsonScalars = [
    {
        identify: value => typeof value === 'string',
        default: true,
        tag: 'tag:yaml.org,2002:str',
        resolve: str => str,
        stringify: stringifyJSON
    },
    {
        identify: value => value == null,
        createNode: () => new Scalar(null),
        default: true,
        tag: 'tag:yaml.org,2002:null',
        test: /^null$/,
        resolve: () => null,
        stringify: stringifyJSON
    },
    {
        identify: value => typeof value === 'boolean',
        default: true,
        tag: 'tag:yaml.org,2002:bool',
        test: /^true$|^false$/,
        resolve: str => str === 'true',
        stringify: stringifyJSON
    },
    {
        identify: intIdentify$1,
        default: true,
        tag: 'tag:yaml.org,2002:int',
        test: /^-?(?:0|[1-9][0-9]*)$/,
        resolve: (str, _onError, { intAsBigInt }) => intAsBigInt ? BigInt(str) : parseInt(str, 10),
        stringify: ({ value }) => intIdentify$1(value) ? value.toString() : JSON.stringify(value)
    },
    {
        identify: value => typeof value === 'number',
        default: true,
        tag: 'tag:yaml.org,2002:float',
        test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
        resolve: str => parseFloat(str),
        stringify: stringifyJSON
    }
];
const jsonError = {
    default: true,
    tag: '',
    test: /^/,
    resolve(str, onError) {
        onError(`Unresolved plain scalar ${JSON.stringify(str)}`);
        return str;
    }
};
const schema$1 = [map, seq].concat(jsonScalars, jsonError);

const binary = {
    identify: value => value instanceof Uint8Array, // Buffer inherits from Uint8Array
    default: false,
    tag: 'tag:yaml.org,2002:binary',
    /**
     * Returns a Buffer in node and an Uint8Array in browsers
     *
     * To use the resulting buffer as an image, you'll want to do something like:
     *
     *   const blob = new Blob([buffer], { type: 'image/jpeg' })
     *   document.querySelector('#photo').src = URL.createObjectURL(blob)
     */
    resolve(src, onError) {
        if (typeof atob === 'function') {
            // On IE 11, atob() can't handle newlines
            const str = atob(src.replace(/[\n\r]/g, ''));
            const buffer = new Uint8Array(str.length);
            for (let i = 0; i < str.length; ++i)
                buffer[i] = str.charCodeAt(i);
            return buffer;
        }
        else {
            onError('This environment does not support reading binary tags; either Buffer or atob is required');
            return src;
        }
    },
    stringify({ comment, type, value }, ctx, onComment, onChompKeep) {
        if (!value)
            return '';
        const buf = value; // checked earlier by binary.identify()
        let str;
        if (typeof btoa === 'function') {
            let s = '';
            for (let i = 0; i < buf.length; ++i)
                s += String.fromCharCode(buf[i]);
            str = btoa(s);
        }
        else {
            throw new Error('This environment does not support writing binary tags; either Buffer or btoa is required');
        }
        type ?? (type = Scalar.BLOCK_LITERAL);
        if (type !== Scalar.QUOTE_DOUBLE) {
            const lineWidth = Math.max(ctx.options.lineWidth - ctx.indent.length, ctx.options.minContentWidth);
            const n = Math.ceil(str.length / lineWidth);
            const lines = new Array(n);
            for (let i = 0, o = 0; i < n; ++i, o += lineWidth) {
                lines[i] = str.substr(o, lineWidth);
            }
            str = lines.join(type === Scalar.BLOCK_LITERAL ? '\n' : ' ');
        }
        return stringifyString({ comment, type, value: str }, ctx, onComment, onChompKeep);
    }
};

function resolvePairs(seq, onError) {
    if (isSeq(seq)) {
        for (let i = 0; i < seq.items.length; ++i) {
            let item = seq.items[i];
            if (isPair(item))
                continue;
            else if (isMap(item)) {
                if (item.items.length > 1)
                    onError('Each pair must have its own sequence indicator');
                const pair = item.items[0] || new Pair(new Scalar(null));
                if (item.commentBefore)
                    pair.key.commentBefore = pair.key.commentBefore
                        ? `${item.commentBefore}\n${pair.key.commentBefore}`
                        : item.commentBefore;
                if (item.comment) {
                    const cn = pair.value ?? pair.key;
                    cn.comment = cn.comment
                        ? `${item.comment}\n${cn.comment}`
                        : item.comment;
                }
                item = pair;
            }
            seq.items[i] = isPair(item) ? item : new Pair(item);
        }
    }
    else
        onError('Expected a sequence for this tag');
    return seq;
}
function createPairs(schema, iterable, ctx) {
    const { replacer } = ctx;
    const pairs = new YAMLSeq(schema);
    pairs.tag = 'tag:yaml.org,2002:pairs';
    let i = 0;
    if (iterable && Symbol.iterator in Object(iterable))
        for (let it of iterable) {
            if (typeof replacer === 'function')
                it = replacer.call(iterable, String(i++), it);
            let key, value;
            if (Array.isArray(it)) {
                if (it.length === 2) {
                    key = it[0];
                    value = it[1];
                }
                else
                    throw new TypeError(`Expected [key, value] tuple: ${it}`);
            }
            else if (it && it instanceof Object) {
                const keys = Object.keys(it);
                if (keys.length === 1) {
                    key = keys[0];
                    value = it[key];
                }
                else {
                    throw new TypeError(`Expected tuple with one key, not ${keys.length} keys`);
                }
            }
            else {
                key = it;
            }
            pairs.items.push(createPair(key, value, ctx));
        }
    return pairs;
}
const pairs = {
    collection: 'seq',
    default: false,
    tag: 'tag:yaml.org,2002:pairs',
    resolve: resolvePairs,
    createNode: createPairs
};

class YAMLOMap extends YAMLSeq {
    constructor() {
        super();
        this.add = YAMLMap.prototype.add.bind(this);
        this.delete = YAMLMap.prototype.delete.bind(this);
        this.get = YAMLMap.prototype.get.bind(this);
        this.has = YAMLMap.prototype.has.bind(this);
        this.set = YAMLMap.prototype.set.bind(this);
        this.tag = YAMLOMap.tag;
    }
    /**
     * If `ctx` is given, the return type is actually `Map<unknown, unknown>`,
     * but TypeScript won't allow widening the signature of a child method.
     */
    toJSON(_, ctx) {
        if (!ctx)
            return super.toJSON(_);
        const map = new Map();
        if (ctx?.onCreate)
            ctx.onCreate(map);
        for (const pair of this.items) {
            let key, value;
            if (isPair(pair)) {
                key = toJS(pair.key, '', ctx);
                value = toJS(pair.value, key, ctx);
            }
            else {
                key = toJS(pair, '', ctx);
            }
            if (map.has(key))
                throw new Error('Ordered maps must not include duplicate keys');
            map.set(key, value);
        }
        return map;
    }
    static from(schema, iterable, ctx) {
        const pairs = createPairs(schema, iterable, ctx);
        const omap = new this();
        omap.items = pairs.items;
        return omap;
    }
}
YAMLOMap.tag = 'tag:yaml.org,2002:omap';
const omap = {
    collection: 'seq',
    identify: value => value instanceof Map,
    nodeClass: YAMLOMap,
    default: false,
    tag: 'tag:yaml.org,2002:omap',
    resolve(seq, onError) {
        const pairs = resolvePairs(seq, onError);
        const seenKeys = [];
        for (const { key } of pairs.items) {
            if (isScalar$1(key)) {
                if (seenKeys.includes(key.value)) {
                    onError(`Ordered maps must not include duplicate keys: ${key.value}`);
                }
                else {
                    seenKeys.push(key.value);
                }
            }
        }
        return Object.assign(new YAMLOMap(), pairs);
    },
    createNode: (schema, iterable, ctx) => YAMLOMap.from(schema, iterable, ctx)
};

function boolStringify({ value, source }, ctx) {
    const boolObj = value ? trueTag : falseTag;
    if (source && boolObj.test.test(source))
        return source;
    return value ? ctx.options.trueStr : ctx.options.falseStr;
}
const trueTag = {
    identify: value => value === true,
    default: true,
    tag: 'tag:yaml.org,2002:bool',
    test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
    resolve: () => new Scalar(true),
    stringify: boolStringify
};
const falseTag = {
    identify: value => value === false,
    default: true,
    tag: 'tag:yaml.org,2002:bool',
    test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
    resolve: () => new Scalar(false),
    stringify: boolStringify
};

const floatNaN = {
    identify: value => typeof value === 'number',
    default: true,
    tag: 'tag:yaml.org,2002:float',
    test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
    resolve: (str) => str.slice(-3).toLowerCase() === 'nan'
        ? NaN
        : str[0] === '-'
            ? Number.NEGATIVE_INFINITY
            : Number.POSITIVE_INFINITY,
    stringify: stringifyNumber
};
const floatExp = {
    identify: value => typeof value === 'number',
    default: true,
    tag: 'tag:yaml.org,2002:float',
    format: 'EXP',
    test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
    resolve: (str) => parseFloat(str.replace(/_/g, '')),
    stringify(node) {
        const num = Number(node.value);
        return isFinite(num) ? num.toExponential() : stringifyNumber(node);
    }
};
const float = {
    identify: value => typeof value === 'number',
    default: true,
    tag: 'tag:yaml.org,2002:float',
    test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
    resolve(str) {
        const node = new Scalar(parseFloat(str.replace(/_/g, '')));
        const dot = str.indexOf('.');
        if (dot !== -1) {
            const f = str.substring(dot + 1).replace(/_/g, '');
            if (f[f.length - 1] === '0')
                node.minFractionDigits = f.length;
        }
        return node;
    },
    stringify: stringifyNumber
};

const intIdentify = (value) => typeof value === 'bigint' || Number.isInteger(value);
function intResolve(str, offset, radix, { intAsBigInt }) {
    const sign = str[0];
    if (sign === '-' || sign === '+')
        offset += 1;
    str = str.substring(offset).replace(/_/g, '');
    if (intAsBigInt) {
        switch (radix) {
            case 2:
                str = `0b${str}`;
                break;
            case 8:
                str = `0o${str}`;
                break;
            case 16:
                str = `0x${str}`;
                break;
        }
        const n = BigInt(str);
        return sign === '-' ? BigInt(-1) * n : n;
    }
    const n = parseInt(str, radix);
    return sign === '-' ? -1 * n : n;
}
function intStringify(node, radix, prefix) {
    const { value } = node;
    if (intIdentify(value)) {
        const str = value.toString(radix);
        return value < 0 ? '-' + prefix + str.substr(1) : prefix + str;
    }
    return stringifyNumber(node);
}
const intBin = {
    identify: intIdentify,
    default: true,
    tag: 'tag:yaml.org,2002:int',
    format: 'BIN',
    test: /^[-+]?0b[0-1_]+$/,
    resolve: (str, _onError, opt) => intResolve(str, 2, 2, opt),
    stringify: node => intStringify(node, 2, '0b')
};
const intOct = {
    identify: intIdentify,
    default: true,
    tag: 'tag:yaml.org,2002:int',
    format: 'OCT',
    test: /^[-+]?0[0-7_]+$/,
    resolve: (str, _onError, opt) => intResolve(str, 1, 8, opt),
    stringify: node => intStringify(node, 8, '0')
};
const int = {
    identify: intIdentify,
    default: true,
    tag: 'tag:yaml.org,2002:int',
    test: /^[-+]?[0-9][0-9_]*$/,
    resolve: (str, _onError, opt) => intResolve(str, 0, 10, opt),
    stringify: stringifyNumber
};
const intHex = {
    identify: intIdentify,
    default: true,
    tag: 'tag:yaml.org,2002:int',
    format: 'HEX',
    test: /^[-+]?0x[0-9a-fA-F_]+$/,
    resolve: (str, _onError, opt) => intResolve(str, 2, 16, opt),
    stringify: node => intStringify(node, 16, '0x')
};

class YAMLSet extends YAMLMap {
    constructor(schema) {
        super(schema);
        this.tag = YAMLSet.tag;
    }
    add(key) {
        let pair;
        if (isPair(key))
            pair = key;
        else if (key &&
            typeof key === 'object' &&
            'key' in key &&
            'value' in key &&
            key.value === null)
            pair = new Pair(key.key, null);
        else
            pair = new Pair(key, null);
        const prev = findPair(this.items, pair.key);
        if (!prev)
            this.items.push(pair);
    }
    /**
     * If `keepPair` is `true`, returns the Pair matching `key`.
     * Otherwise, returns the value of that Pair's key.
     */
    get(key, keepPair) {
        const pair = findPair(this.items, key);
        return !keepPair && isPair(pair)
            ? isScalar$1(pair.key)
                ? pair.key.value
                : pair.key
            : pair;
    }
    set(key, value) {
        if (typeof value !== 'boolean')
            throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof value}`);
        const prev = findPair(this.items, key);
        if (prev && !value) {
            this.items.splice(this.items.indexOf(prev), 1);
        }
        else if (!prev && value) {
            this.items.push(new Pair(key));
        }
    }
    toJSON(_, ctx) {
        return super.toJSON(_, ctx, Set);
    }
    toString(ctx, onComment, onChompKeep) {
        if (!ctx)
            return JSON.stringify(this);
        if (this.hasAllNullValues(true))
            return super.toString(Object.assign({}, ctx, { allNullValues: true }), onComment, onChompKeep);
        else
            throw new Error('Set items must all have null values');
    }
    static from(schema, iterable, ctx) {
        const { replacer } = ctx;
        const set = new this(schema);
        if (iterable && Symbol.iterator in Object(iterable))
            for (let value of iterable) {
                if (typeof replacer === 'function')
                    value = replacer.call(iterable, value, value);
                set.items.push(createPair(value, null, ctx));
            }
        return set;
    }
}
YAMLSet.tag = 'tag:yaml.org,2002:set';
const set = {
    collection: 'map',
    identify: value => value instanceof Set,
    nodeClass: YAMLSet,
    default: false,
    tag: 'tag:yaml.org,2002:set',
    createNode: (schema, iterable, ctx) => YAMLSet.from(schema, iterable, ctx),
    resolve(map, onError) {
        if (isMap(map)) {
            if (map.hasAllNullValues(true))
                return Object.assign(new YAMLSet(), map);
            else
                onError('Set items must all have null values');
        }
        else
            onError('Expected a mapping for this tag');
        return map;
    }
};

/** Internal types handle bigint as number, because TS can't figure it out. */
function parseSexagesimal(str, asBigInt) {
    const sign = str[0];
    const parts = sign === '-' || sign === '+' ? str.substring(1) : str;
    const num = (n) => asBigInt ? BigInt(n) : Number(n);
    const res = parts
        .replace(/_/g, '')
        .split(':')
        .reduce((res, p) => res * num(60) + num(p), num(0));
    return (sign === '-' ? num(-1) * res : res);
}
/**
 * hhhh:mm:ss.sss
 *
 * Internal types handle bigint as number, because TS can't figure it out.
 */
function stringifySexagesimal(node) {
    let { value } = node;
    let num = (n) => n;
    if (typeof value === 'bigint')
        num = n => BigInt(n);
    else if (isNaN(value) || !isFinite(value))
        return stringifyNumber(node);
    let sign = '';
    if (value < 0) {
        sign = '-';
        value *= num(-1);
    }
    const _60 = num(60);
    const parts = [value % _60]; // seconds, including ms
    if (value < 60) {
        parts.unshift(0); // at least one : is required
    }
    else {
        value = (value - parts[0]) / _60;
        parts.unshift(value % _60); // minutes
        if (value >= 60) {
            value = (value - parts[0]) / _60;
            parts.unshift(value); // hours
        }
    }
    return (sign +
        parts
            .map(n => String(n).padStart(2, '0'))
            .join(':')
            .replace(/000000\d*$/, '') // % 60 may introduce error
    );
}
const intTime = {
    identify: value => typeof value === 'bigint' || Number.isInteger(value),
    default: true,
    tag: 'tag:yaml.org,2002:int',
    format: 'TIME',
    test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
    resolve: (str, _onError, { intAsBigInt }) => parseSexagesimal(str, intAsBigInt),
    stringify: stringifySexagesimal
};
const floatTime = {
    identify: value => typeof value === 'number',
    default: true,
    tag: 'tag:yaml.org,2002:float',
    format: 'TIME',
    test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
    resolve: str => parseSexagesimal(str, false),
    stringify: stringifySexagesimal
};
const timestamp = {
    identify: value => value instanceof Date,
    default: true,
    tag: 'tag:yaml.org,2002:timestamp',
    // If the time zone is omitted, the timestamp is assumed to be specified in UTC. The time part
    // may be omitted altogether, resulting in a date format. In such a case, the time part is
    // assumed to be 00:00:00Z (start of day, UTC).
    test: RegExp('^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})' + // YYYY-Mm-Dd
        '(?:' + // time is optional
        '(?:t|T|[ \\t]+)' + // t | T | whitespace
        '([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)' + // Hh:Mm:Ss(.ss)?
        '(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?' + // Z | +5 | -03:30
        ')?$'),
    resolve(str) {
        const match = str.match(timestamp.test);
        if (!match)
            throw new Error('!!timestamp expects a date, starting with yyyy-mm-dd');
        const [, year, month, day, hour, minute, second] = match.map(Number);
        const millisec = match[7] ? Number((match[7] + '00').substr(1, 3)) : 0;
        let date = Date.UTC(year, month - 1, day, hour || 0, minute || 0, second || 0, millisec);
        const tz = match[8];
        if (tz && tz !== 'Z') {
            let d = parseSexagesimal(tz, false);
            if (Math.abs(d) < 30)
                d *= 60;
            date -= 60000 * d;
        }
        return new Date(date);
    },
    stringify: ({ value }) => value?.toISOString().replace(/(T00:00:00)?\.000Z$/, '') ?? ''
};

const schema = [
    map,
    seq,
    string,
    nullTag,
    trueTag,
    falseTag,
    intBin,
    intOct,
    int,
    intHex,
    floatNaN,
    floatExp,
    float,
    binary,
    merge,
    omap,
    pairs,
    set,
    intTime,
    floatTime,
    timestamp
];

const schemas = new Map([
    ['core', schema$2],
    ['failsafe', [map, seq, string]],
    ['json', schema$1],
    ['yaml11', schema],
    ['yaml-1.1', schema]
]);
const tagsByName = {
    binary,
    bool: boolTag,
    float: float$1,
    floatExp: floatExp$1,
    floatNaN: floatNaN$1,
    floatTime,
    int: int$1,
    intHex: intHex$1,
    intOct: intOct$1,
    intTime,
    map,
    merge,
    null: nullTag,
    omap,
    pairs,
    seq,
    set,
    timestamp
};
const coreKnownTags = {
    'tag:yaml.org,2002:binary': binary,
    'tag:yaml.org,2002:merge': merge,
    'tag:yaml.org,2002:omap': omap,
    'tag:yaml.org,2002:pairs': pairs,
    'tag:yaml.org,2002:set': set,
    'tag:yaml.org,2002:timestamp': timestamp
};
function getTags(customTags, schemaName, addMergeTag) {
    const schemaTags = schemas.get(schemaName);
    if (schemaTags && !customTags) {
        return addMergeTag && !schemaTags.includes(merge)
            ? schemaTags.concat(merge)
            : schemaTags.slice();
    }
    let tags = schemaTags;
    if (!tags) {
        if (Array.isArray(customTags))
            tags = [];
        else {
            const keys = Array.from(schemas.keys())
                .filter(key => key !== 'yaml11')
                .map(key => JSON.stringify(key))
                .join(', ');
            throw new Error(`Unknown schema "${schemaName}"; use one of ${keys} or define customTags array`);
        }
    }
    if (Array.isArray(customTags)) {
        for (const tag of customTags)
            tags = tags.concat(tag);
    }
    else if (typeof customTags === 'function') {
        tags = customTags(tags.slice());
    }
    if (addMergeTag)
        tags = tags.concat(merge);
    return tags.reduce((tags, tag) => {
        const tagObj = typeof tag === 'string' ? tagsByName[tag] : tag;
        if (!tagObj) {
            const tagName = JSON.stringify(tag);
            const keys = Object.keys(tagsByName)
                .map(key => JSON.stringify(key))
                .join(', ');
            throw new Error(`Unknown custom tag ${tagName}; use one of ${keys}`);
        }
        if (!tags.includes(tagObj))
            tags.push(tagObj);
        return tags;
    }, []);
}

const sortMapEntriesByKey = (a, b) => a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
class Schema {
    constructor({ compat, customTags, merge, resolveKnownTags, schema, sortMapEntries, toStringDefaults }) {
        this.compat = Array.isArray(compat)
            ? getTags(compat, 'compat')
            : compat
                ? getTags(null, compat)
                : null;
        this.name = (typeof schema === 'string' && schema) || 'core';
        this.knownTags = resolveKnownTags ? coreKnownTags : {};
        this.tags = getTags(customTags, this.name, merge);
        this.toStringOptions = toStringDefaults ?? null;
        Object.defineProperty(this, MAP, { value: map });
        Object.defineProperty(this, SCALAR$1, { value: string });
        Object.defineProperty(this, SEQ, { value: seq });
        // Used by createMap()
        this.sortMapEntries =
            typeof sortMapEntries === 'function'
                ? sortMapEntries
                : sortMapEntries === true
                    ? sortMapEntriesByKey
                    : null;
    }
    clone() {
        const copy = Object.create(Schema.prototype, Object.getOwnPropertyDescriptors(this));
        copy.tags = this.tags.slice();
        return copy;
    }
}

function stringifyDocument(doc, options) {
    const lines = [];
    let hasDirectives = options.directives === true;
    if (options.directives !== false && doc.directives) {
        const dir = doc.directives.toString(doc);
        if (dir) {
            lines.push(dir);
            hasDirectives = true;
        }
        else if (doc.directives.docStart)
            hasDirectives = true;
    }
    if (hasDirectives)
        lines.push('---');
    const ctx = createStringifyContext(doc, options);
    const { commentString } = ctx.options;
    if (doc.commentBefore) {
        if (lines.length !== 1)
            lines.unshift('');
        const cs = commentString(doc.commentBefore);
        lines.unshift(indentComment(cs, ''));
    }
    let chompKeep = false;
    let contentComment = null;
    if (doc.contents) {
        if (isNode(doc.contents)) {
            if (doc.contents.spaceBefore && hasDirectives)
                lines.push('');
            if (doc.contents.commentBefore) {
                const cs = commentString(doc.contents.commentBefore);
                lines.push(indentComment(cs, ''));
            }
            // top-level block scalars need to be indented if followed by a comment
            ctx.forceBlockIndent = !!doc.comment;
            contentComment = doc.contents.comment;
        }
        const onChompKeep = contentComment ? undefined : () => (chompKeep = true);
        let body = stringify(doc.contents, ctx, () => (contentComment = null), onChompKeep);
        if (contentComment)
            body += lineComment(body, '', commentString(contentComment));
        if ((body[0] === '|' || body[0] === '>') &&
            lines[lines.length - 1] === '---') {
            // Top-level block scalars with a preceding doc marker ought to use the
            // same line for their header.
            lines[lines.length - 1] = `--- ${body}`;
        }
        else
            lines.push(body);
    }
    else {
        lines.push(stringify(doc.contents, ctx));
    }
    if (doc.directives?.docEnd) {
        if (doc.comment) {
            const cs = commentString(doc.comment);
            if (cs.includes('\n')) {
                lines.push('...');
                lines.push(indentComment(cs, ''));
            }
            else {
                lines.push(`... ${cs}`);
            }
        }
        else {
            lines.push('...');
        }
    }
    else {
        let dc = doc.comment;
        if (dc && chompKeep)
            dc = dc.replace(/^\n+/, '');
        if (dc) {
            if ((!chompKeep || contentComment) && lines[lines.length - 1] !== '')
                lines.push('');
            lines.push(indentComment(commentString(dc), ''));
        }
    }
    return lines.join('\n') + '\n';
}

let Document$1 = class Document {
    constructor(value, replacer, options) {
        /** A comment before this Document */
        this.commentBefore = null;
        /** A comment immediately after this Document */
        this.comment = null;
        /** Errors encountered during parsing. */
        this.errors = [];
        /** Warnings encountered during parsing. */
        this.warnings = [];
        Object.defineProperty(this, NODE_TYPE, { value: DOC });
        let _replacer = null;
        if (typeof replacer === 'function' || Array.isArray(replacer)) {
            _replacer = replacer;
        }
        else if (options === undefined && replacer) {
            options = replacer;
            replacer = undefined;
        }
        const opt = Object.assign({
            intAsBigInt: false,
            keepSourceTokens: false,
            logLevel: 'warn',
            prettyErrors: true,
            strict: true,
            stringKeys: false,
            uniqueKeys: true,
            version: '1.2'
        }, options);
        this.options = opt;
        let { version } = opt;
        if (options?._directives) {
            this.directives = options._directives.atDocument();
            if (this.directives.yaml.explicit)
                version = this.directives.yaml.version;
        }
        else
            this.directives = new Directives({ version });
        this.setSchema(version, options);
        // @ts-expect-error We can't really know that this matches Contents.
        this.contents =
            value === undefined ? null : this.createNode(value, _replacer, options);
    }
    /**
     * Create a deep copy of this Document and its contents.
     *
     * Custom Node values that inherit from `Object` still refer to their original instances.
     */
    clone() {
        const copy = Object.create(Document.prototype, {
            [NODE_TYPE]: { value: DOC }
        });
        copy.commentBefore = this.commentBefore;
        copy.comment = this.comment;
        copy.errors = this.errors.slice();
        copy.warnings = this.warnings.slice();
        copy.options = Object.assign({}, this.options);
        if (this.directives)
            copy.directives = this.directives.clone();
        copy.schema = this.schema.clone();
        // @ts-expect-error We can't really know that this matches Contents.
        copy.contents = isNode(this.contents)
            ? this.contents.clone(copy.schema)
            : this.contents;
        if (this.range)
            copy.range = this.range.slice();
        return copy;
    }
    /** Adds a value to the document. */
    add(value) {
        if (assertCollection(this.contents))
            this.contents.add(value);
    }
    /** Adds a value to the document. */
    addIn(path, value) {
        if (assertCollection(this.contents))
            this.contents.addIn(path, value);
    }
    /**
     * Create a new `Alias` node, ensuring that the target `node` has the required anchor.
     *
     * If `node` already has an anchor, `name` is ignored.
     * Otherwise, the `node.anchor` value will be set to `name`,
     * or if an anchor with that name is already present in the document,
     * `name` will be used as a prefix for a new unique anchor.
     * If `name` is undefined, the generated anchor will use 'a' as a prefix.
     */
    createAlias(node, name) {
        if (!node.anchor) {
            const prev = anchorNames(this);
            node.anchor =
                // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
                !name || prev.has(name) ? findNewAnchor(name || 'a', prev) : name;
        }
        return new Alias(node.anchor);
    }
    createNode(value, replacer, options) {
        let _replacer = undefined;
        if (typeof replacer === 'function') {
            value = replacer.call({ '': value }, '', value);
            _replacer = replacer;
        }
        else if (Array.isArray(replacer)) {
            const keyToStr = (v) => typeof v === 'number' || v instanceof String || v instanceof Number;
            const asStr = replacer.filter(keyToStr).map(String);
            if (asStr.length > 0)
                replacer = replacer.concat(asStr);
            _replacer = replacer;
        }
        else if (options === undefined && replacer) {
            options = replacer;
            replacer = undefined;
        }
        const { aliasDuplicateObjects, anchorPrefix, flow, keepUndefined, onTagObj, tag } = options ?? {};
        const { onAnchor, setAnchors, sourceObjects } = createNodeAnchors(this, 
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        anchorPrefix || 'a');
        const ctx = {
            aliasDuplicateObjects: aliasDuplicateObjects ?? true,
            keepUndefined: keepUndefined ?? false,
            onAnchor,
            onTagObj,
            replacer: _replacer,
            schema: this.schema,
            sourceObjects
        };
        const node = createNode(value, tag, ctx);
        if (flow && isCollection(node))
            node.flow = true;
        setAnchors();
        return node;
    }
    /**
     * Convert a key and a value into a `Pair` using the current schema,
     * recursively wrapping all values as `Scalar` or `Collection` nodes.
     */
    createPair(key, value, options = {}) {
        const k = this.createNode(key, null, options);
        const v = this.createNode(value, null, options);
        return new Pair(k, v);
    }
    /**
     * Removes a value from the document.
     * @returns `true` if the item was found and removed.
     */
    delete(key) {
        return assertCollection(this.contents) ? this.contents.delete(key) : false;
    }
    /**
     * Removes a value from the document.
     * @returns `true` if the item was found and removed.
     */
    deleteIn(path) {
        if (isEmptyPath(path)) {
            if (this.contents == null)
                return false;
            // @ts-expect-error Presumed impossible if Strict extends false
            this.contents = null;
            return true;
        }
        return assertCollection(this.contents)
            ? this.contents.deleteIn(path)
            : false;
    }
    /**
     * Returns item at `key`, or `undefined` if not found. By default unwraps
     * scalar values from their surrounding node; to disable set `keepScalar` to
     * `true` (collections are always returned intact).
     */
    get(key, keepScalar) {
        return isCollection(this.contents)
            ? this.contents.get(key, keepScalar)
            : undefined;
    }
    /**
     * Returns item at `path`, or `undefined` if not found. By default unwraps
     * scalar values from their surrounding node; to disable set `keepScalar` to
     * `true` (collections are always returned intact).
     */
    getIn(path, keepScalar) {
        if (isEmptyPath(path))
            return !keepScalar && isScalar$1(this.contents)
                ? this.contents.value
                : this.contents;
        return isCollection(this.contents)
            ? this.contents.getIn(path, keepScalar)
            : undefined;
    }
    /**
     * Checks if the document includes a value with the key `key`.
     */
    has(key) {
        return isCollection(this.contents) ? this.contents.has(key) : false;
    }
    /**
     * Checks if the document includes a value at `path`.
     */
    hasIn(path) {
        if (isEmptyPath(path))
            return this.contents !== undefined;
        return isCollection(this.contents) ? this.contents.hasIn(path) : false;
    }
    /**
     * Sets a value in this document. For `!!set`, `value` needs to be a
     * boolean to add/remove the item from the set.
     */
    set(key, value) {
        if (this.contents == null) {
            // @ts-expect-error We can't really know that this matches Contents.
            this.contents = collectionFromPath(this.schema, [key], value);
        }
        else if (assertCollection(this.contents)) {
            this.contents.set(key, value);
        }
    }
    /**
     * Sets a value in this document. For `!!set`, `value` needs to be a
     * boolean to add/remove the item from the set.
     */
    setIn(path, value) {
        if (isEmptyPath(path)) {
            // @ts-expect-error We can't really know that this matches Contents.
            this.contents = value;
        }
        else if (this.contents == null) {
            // @ts-expect-error We can't really know that this matches Contents.
            this.contents = collectionFromPath(this.schema, Array.from(path), value);
        }
        else if (assertCollection(this.contents)) {
            this.contents.setIn(path, value);
        }
    }
    /**
     * Change the YAML version and schema used by the document.
     * A `null` version disables support for directives, explicit tags, anchors, and aliases.
     * It also requires the `schema` option to be given as a `Schema` instance value.
     *
     * Overrides all previously set schema options.
     */
    setSchema(version, options = {}) {
        if (typeof version === 'number')
            version = String(version);
        let opt;
        switch (version) {
            case '1.1':
                if (this.directives)
                    this.directives.yaml.version = '1.1';
                else
                    this.directives = new Directives({ version: '1.1' });
                opt = { resolveKnownTags: false, schema: 'yaml-1.1' };
                break;
            case '1.2':
            case 'next':
                if (this.directives)
                    this.directives.yaml.version = version;
                else
                    this.directives = new Directives({ version });
                opt = { resolveKnownTags: true, schema: 'core' };
                break;
            case null:
                if (this.directives)
                    delete this.directives;
                opt = null;
                break;
            default: {
                const sv = JSON.stringify(version);
                throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${sv}`);
            }
        }
        // Not using `instanceof Schema` to allow for duck typing
        if (options.schema instanceof Object)
            this.schema = options.schema;
        else if (opt)
            this.schema = new Schema(Object.assign(opt, options));
        else
            throw new Error(`With a null YAML version, the { schema: Schema } option is required`);
    }
    // json & jsonArg are only used from toJSON()
    toJS({ json, jsonArg, mapAsMap, maxAliasCount, onAnchor, reviver } = {}) {
        const ctx = {
            anchors: new Map(),
            doc: this,
            keep: !json,
            mapAsMap: mapAsMap === true,
            mapKeyWarned: false,
            maxAliasCount: typeof maxAliasCount === 'number' ? maxAliasCount : 100
        };
        const res = toJS(this.contents, jsonArg ?? '', ctx);
        if (typeof onAnchor === 'function')
            for (const { count, res } of ctx.anchors.values())
                onAnchor(res, count);
        return typeof reviver === 'function'
            ? applyReviver(reviver, { '': res }, '', res)
            : res;
    }
    /**
     * A JSON representation of the document `contents`.
     *
     * @param jsonArg Used by `JSON.stringify` to indicate the array index or
     *   property name.
     */
    toJSON(jsonArg, onAnchor) {
        return this.toJS({ json: true, jsonArg, mapAsMap: false, onAnchor });
    }
    /** A YAML representation of the document. */
    toString(options = {}) {
        if (this.errors.length > 0)
            throw new Error('Document with errors cannot be stringified');
        if ('indent' in options &&
            (!Number.isInteger(options.indent) || Number(options.indent) <= 0)) {
            const s = JSON.stringify(options.indent);
            throw new Error(`"indent" option must be a positive integer, not ${s}`);
        }
        return stringifyDocument(this, options);
    }
};
function assertCollection(contents) {
    if (isCollection(contents))
        return true;
    throw new Error('Expected a YAML collection as document contents');
}

class YAMLError extends Error {
    constructor(name, pos, code, message) {
        super();
        this.name = name;
        this.code = code;
        this.message = message;
        this.pos = pos;
    }
}
class YAMLParseError extends YAMLError {
    constructor(pos, code, message) {
        super('YAMLParseError', pos, code, message);
    }
}
class YAMLWarning extends YAMLError {
    constructor(pos, code, message) {
        super('YAMLWarning', pos, code, message);
    }
}
const prettifyError = (src, lc) => (error) => {
    if (error.pos[0] === -1)
        return;
    error.linePos = error.pos.map(pos => lc.linePos(pos));
    const { line, col } = error.linePos[0];
    error.message += ` at line ${line}, column ${col}`;
    let ci = col - 1;
    let lineStr = src
        .substring(lc.lineStarts[line - 1], lc.lineStarts[line])
        .replace(/[\n\r]+$/, '');
    // Trim to max 80 chars, keeping col position near the middle
    if (ci >= 60 && lineStr.length > 80) {
        const trimStart = Math.min(ci - 39, lineStr.length - 79);
        lineStr = '…' + lineStr.substring(trimStart);
        ci -= trimStart - 1;
    }
    if (lineStr.length > 80)
        lineStr = lineStr.substring(0, 79) + '…';
    // Include previous line in context if pointing at line start
    if (line > 1 && /^ *$/.test(lineStr.substring(0, ci))) {
        // Regexp won't match if start is trimmed
        let prev = src.substring(lc.lineStarts[line - 2], lc.lineStarts[line - 1]);
        if (prev.length > 80)
            prev = prev.substring(0, 79) + '…\n';
        lineStr = prev + lineStr;
    }
    if (/[^ ]/.test(lineStr)) {
        let count = 1;
        const end = error.linePos[1];
        if (end?.line === line && end.col > col) {
            count = Math.max(1, Math.min(end.col - col, 80 - ci));
        }
        const pointer = ' '.repeat(ci) + '^'.repeat(count);
        error.message += `:\n\n${lineStr}\n${pointer}\n`;
    }
};

function resolveProps(tokens, { flow, indicator, next, offset, onError, parentIndent, startOnNewline }) {
    let spaceBefore = false;
    let atNewline = startOnNewline;
    let hasSpace = startOnNewline;
    let comment = '';
    let commentSep = '';
    let hasNewline = false;
    let reqSpace = false;
    let tab = null;
    let anchor = null;
    let tag = null;
    let newlineAfterProp = null;
    let comma = null;
    let found = null;
    let start = null;
    for (const token of tokens) {
        if (reqSpace) {
            if (token.type !== 'space' &&
                token.type !== 'newline' &&
                token.type !== 'comma')
                onError(token.offset, 'MISSING_CHAR', 'Tags and anchors must be separated from the next token by white space');
            reqSpace = false;
        }
        if (tab) {
            if (atNewline && token.type !== 'comment' && token.type !== 'newline') {
                onError(tab, 'TAB_AS_INDENT', 'Tabs are not allowed as indentation');
            }
            tab = null;
        }
        switch (token.type) {
            case 'space':
                // At the doc level, tabs at line start may be parsed
                // as leading white space rather than indentation.
                // In a flow collection, only the parser handles indent.
                if (!flow &&
                    (indicator !== 'doc-start' || next?.type !== 'flow-collection') &&
                    token.source.includes('\t')) {
                    tab = token;
                }
                hasSpace = true;
                break;
            case 'comment': {
                if (!hasSpace)
                    onError(token, 'MISSING_CHAR', 'Comments must be separated from other tokens by white space characters');
                const cb = token.source.substring(1) || ' ';
                if (!comment)
                    comment = cb;
                else
                    comment += commentSep + cb;
                commentSep = '';
                atNewline = false;
                break;
            }
            case 'newline':
                if (atNewline) {
                    if (comment)
                        comment += token.source;
                    else if (!found || indicator !== 'seq-item-ind')
                        spaceBefore = true;
                }
                else
                    commentSep += token.source;
                atNewline = true;
                hasNewline = true;
                if (anchor || tag)
                    newlineAfterProp = token;
                hasSpace = true;
                break;
            case 'anchor':
                if (anchor)
                    onError(token, 'MULTIPLE_ANCHORS', 'A node can have at most one anchor');
                if (token.source.endsWith(':'))
                    onError(token.offset + token.source.length - 1, 'BAD_ALIAS', 'Anchor ending in : is ambiguous', true);
                anchor = token;
                start ?? (start = token.offset);
                atNewline = false;
                hasSpace = false;
                reqSpace = true;
                break;
            case 'tag': {
                if (tag)
                    onError(token, 'MULTIPLE_TAGS', 'A node can have at most one tag');
                tag = token;
                start ?? (start = token.offset);
                atNewline = false;
                hasSpace = false;
                reqSpace = true;
                break;
            }
            case indicator:
                // Could here handle preceding comments differently
                if (anchor || tag)
                    onError(token, 'BAD_PROP_ORDER', `Anchors and tags must be after the ${token.source} indicator`);
                if (found)
                    onError(token, 'UNEXPECTED_TOKEN', `Unexpected ${token.source} in ${flow ?? 'collection'}`);
                found = token;
                atNewline =
                    indicator === 'seq-item-ind' || indicator === 'explicit-key-ind';
                hasSpace = false;
                break;
            case 'comma':
                if (flow) {
                    if (comma)
                        onError(token, 'UNEXPECTED_TOKEN', `Unexpected , in ${flow}`);
                    comma = token;
                    atNewline = false;
                    hasSpace = false;
                    break;
                }
            // else fallthrough
            default:
                onError(token, 'UNEXPECTED_TOKEN', `Unexpected ${token.type} token`);
                atNewline = false;
                hasSpace = false;
        }
    }
    const last = tokens[tokens.length - 1];
    const end = last ? last.offset + last.source.length : offset;
    if (reqSpace &&
        next &&
        next.type !== 'space' &&
        next.type !== 'newline' &&
        next.type !== 'comma' &&
        (next.type !== 'scalar' || next.source !== '')) {
        onError(next.offset, 'MISSING_CHAR', 'Tags and anchors must be separated from the next token by white space');
    }
    if (tab &&
        ((atNewline && tab.indent <= parentIndent) ||
            next?.type === 'block-map' ||
            next?.type === 'block-seq'))
        onError(tab, 'TAB_AS_INDENT', 'Tabs are not allowed as indentation');
    return {
        comma,
        found,
        spaceBefore,
        comment,
        hasNewline,
        anchor,
        tag,
        newlineAfterProp,
        end,
        start: start ?? end
    };
}

function containsNewline(key) {
    if (!key)
        return null;
    switch (key.type) {
        case 'alias':
        case 'scalar':
        case 'double-quoted-scalar':
        case 'single-quoted-scalar':
            if (key.source.includes('\n'))
                return true;
            if (key.end)
                for (const st of key.end)
                    if (st.type === 'newline')
                        return true;
            return false;
        case 'flow-collection':
            for (const it of key.items) {
                for (const st of it.start)
                    if (st.type === 'newline')
                        return true;
                if (it.sep)
                    for (const st of it.sep)
                        if (st.type === 'newline')
                            return true;
                if (containsNewline(it.key) || containsNewline(it.value))
                    return true;
            }
            return false;
        default:
            return true;
    }
}

function flowIndentCheck(indent, fc, onError) {
    if (fc?.type === 'flow-collection') {
        const end = fc.end[0];
        if (end.indent === indent &&
            (end.source === ']' || end.source === '}') &&
            containsNewline(fc)) {
            const msg = 'Flow end indicator should be more indented than parent';
            onError(end, 'BAD_INDENT', msg, true);
        }
    }
}

function mapIncludes(ctx, items, search) {
    const { uniqueKeys } = ctx.options;
    if (uniqueKeys === false)
        return false;
    const isEqual = typeof uniqueKeys === 'function'
        ? uniqueKeys
        : (a, b) => a === b || (isScalar$1(a) && isScalar$1(b) && a.value === b.value);
    return items.some(pair => isEqual(pair.key, search));
}

const startColMsg = 'All mapping items must start at the same column';
function resolveBlockMap({ composeNode, composeEmptyNode }, ctx, bm, onError, tag) {
    const NodeClass = tag?.nodeClass ?? YAMLMap;
    const map = new NodeClass(ctx.schema);
    if (ctx.atRoot)
        ctx.atRoot = false;
    let offset = bm.offset;
    let commentEnd = null;
    for (const collItem of bm.items) {
        const { start, key, sep, value } = collItem;
        // key properties
        const keyProps = resolveProps(start, {
            indicator: 'explicit-key-ind',
            next: key ?? sep?.[0],
            offset,
            onError,
            parentIndent: bm.indent,
            startOnNewline: true
        });
        const implicitKey = !keyProps.found;
        if (implicitKey) {
            if (key) {
                if (key.type === 'block-seq')
                    onError(offset, 'BLOCK_AS_IMPLICIT_KEY', 'A block sequence may not be used as an implicit map key');
                else if ('indent' in key && key.indent !== bm.indent)
                    onError(offset, 'BAD_INDENT', startColMsg);
            }
            if (!keyProps.anchor && !keyProps.tag && !sep) {
                commentEnd = keyProps.end;
                if (keyProps.comment) {
                    if (map.comment)
                        map.comment += '\n' + keyProps.comment;
                    else
                        map.comment = keyProps.comment;
                }
                continue;
            }
            if (keyProps.newlineAfterProp || containsNewline(key)) {
                onError(key ?? start[start.length - 1], 'MULTILINE_IMPLICIT_KEY', 'Implicit keys need to be on a single line');
            }
        }
        else if (keyProps.found?.indent !== bm.indent) {
            onError(offset, 'BAD_INDENT', startColMsg);
        }
        // key value
        ctx.atKey = true;
        const keyStart = keyProps.end;
        const keyNode = key
            ? composeNode(ctx, key, keyProps, onError)
            : composeEmptyNode(ctx, keyStart, start, null, keyProps, onError);
        if (ctx.schema.compat)
            flowIndentCheck(bm.indent, key, onError);
        ctx.atKey = false;
        if (mapIncludes(ctx, map.items, keyNode))
            onError(keyStart, 'DUPLICATE_KEY', 'Map keys must be unique');
        // value properties
        const valueProps = resolveProps(sep ?? [], {
            indicator: 'map-value-ind',
            next: value,
            offset: keyNode.range[2],
            onError,
            parentIndent: bm.indent,
            startOnNewline: !key || key.type === 'block-scalar'
        });
        offset = valueProps.end;
        if (valueProps.found) {
            if (implicitKey) {
                if (value?.type === 'block-map' && !valueProps.hasNewline)
                    onError(offset, 'BLOCK_AS_IMPLICIT_KEY', 'Nested mappings are not allowed in compact mappings');
                if (ctx.options.strict &&
                    keyProps.start < valueProps.found.offset - 1024)
                    onError(keyNode.range, 'KEY_OVER_1024_CHARS', 'The : indicator must be at most 1024 chars after the start of an implicit block mapping key');
            }
            // value value
            const valueNode = value
                ? composeNode(ctx, value, valueProps, onError)
                : composeEmptyNode(ctx, offset, sep, null, valueProps, onError);
            if (ctx.schema.compat)
                flowIndentCheck(bm.indent, value, onError);
            offset = valueNode.range[2];
            const pair = new Pair(keyNode, valueNode);
            if (ctx.options.keepSourceTokens)
                pair.srcToken = collItem;
            map.items.push(pair);
        }
        else {
            // key with no value
            if (implicitKey)
                onError(keyNode.range, 'MISSING_CHAR', 'Implicit map keys need to be followed by map values');
            if (valueProps.comment) {
                if (keyNode.comment)
                    keyNode.comment += '\n' + valueProps.comment;
                else
                    keyNode.comment = valueProps.comment;
            }
            const pair = new Pair(keyNode);
            if (ctx.options.keepSourceTokens)
                pair.srcToken = collItem;
            map.items.push(pair);
        }
    }
    if (commentEnd && commentEnd < offset)
        onError(commentEnd, 'IMPOSSIBLE', 'Map comment with trailing content');
    map.range = [bm.offset, offset, commentEnd ?? offset];
    return map;
}

function resolveBlockSeq({ composeNode, composeEmptyNode }, ctx, bs, onError, tag) {
    const NodeClass = tag?.nodeClass ?? YAMLSeq;
    const seq = new NodeClass(ctx.schema);
    if (ctx.atRoot)
        ctx.atRoot = false;
    if (ctx.atKey)
        ctx.atKey = false;
    let offset = bs.offset;
    let commentEnd = null;
    for (const { start, value } of bs.items) {
        const props = resolveProps(start, {
            indicator: 'seq-item-ind',
            next: value,
            offset,
            onError,
            parentIndent: bs.indent,
            startOnNewline: true
        });
        if (!props.found) {
            if (props.anchor || props.tag || value) {
                if (value?.type === 'block-seq')
                    onError(props.end, 'BAD_INDENT', 'All sequence items must start at the same column');
                else
                    onError(offset, 'MISSING_CHAR', 'Sequence item without - indicator');
            }
            else {
                commentEnd = props.end;
                if (props.comment)
                    seq.comment = props.comment;
                continue;
            }
        }
        const node = value
            ? composeNode(ctx, value, props, onError)
            : composeEmptyNode(ctx, props.end, start, null, props, onError);
        if (ctx.schema.compat)
            flowIndentCheck(bs.indent, value, onError);
        offset = node.range[2];
        seq.items.push(node);
    }
    seq.range = [bs.offset, offset, commentEnd ?? offset];
    return seq;
}

function resolveEnd(end, offset, reqSpace, onError) {
    let comment = '';
    if (end) {
        let hasSpace = false;
        let sep = '';
        for (const token of end) {
            const { source, type } = token;
            switch (type) {
                case 'space':
                    hasSpace = true;
                    break;
                case 'comment': {
                    if (reqSpace && !hasSpace)
                        onError(token, 'MISSING_CHAR', 'Comments must be separated from other tokens by white space characters');
                    const cb = source.substring(1) || ' ';
                    if (!comment)
                        comment = cb;
                    else
                        comment += sep + cb;
                    sep = '';
                    break;
                }
                case 'newline':
                    if (comment)
                        sep += source;
                    hasSpace = true;
                    break;
                default:
                    onError(token, 'UNEXPECTED_TOKEN', `Unexpected ${type} at node end`);
            }
            offset += source.length;
        }
    }
    return { comment, offset };
}

const blockMsg = 'Block collections are not allowed within flow collections';
const isBlock = (token) => token && (token.type === 'block-map' || token.type === 'block-seq');
function resolveFlowCollection({ composeNode, composeEmptyNode }, ctx, fc, onError, tag) {
    const isMap = fc.start.source === '{';
    const fcName = isMap ? 'flow map' : 'flow sequence';
    const NodeClass = (tag?.nodeClass ?? (isMap ? YAMLMap : YAMLSeq));
    const coll = new NodeClass(ctx.schema);
    coll.flow = true;
    const atRoot = ctx.atRoot;
    if (atRoot)
        ctx.atRoot = false;
    if (ctx.atKey)
        ctx.atKey = false;
    let offset = fc.offset + fc.start.source.length;
    for (let i = 0; i < fc.items.length; ++i) {
        const collItem = fc.items[i];
        const { start, key, sep, value } = collItem;
        const props = resolveProps(start, {
            flow: fcName,
            indicator: 'explicit-key-ind',
            next: key ?? sep?.[0],
            offset,
            onError,
            parentIndent: fc.indent,
            startOnNewline: false
        });
        if (!props.found) {
            if (!props.anchor && !props.tag && !sep && !value) {
                if (i === 0 && props.comma)
                    onError(props.comma, 'UNEXPECTED_TOKEN', `Unexpected , in ${fcName}`);
                else if (i < fc.items.length - 1)
                    onError(props.start, 'UNEXPECTED_TOKEN', `Unexpected empty item in ${fcName}`);
                if (props.comment) {
                    if (coll.comment)
                        coll.comment += '\n' + props.comment;
                    else
                        coll.comment = props.comment;
                }
                offset = props.end;
                continue;
            }
            if (!isMap && ctx.options.strict && containsNewline(key))
                onError(key, // checked by containsNewline()
                'MULTILINE_IMPLICIT_KEY', 'Implicit keys of flow sequence pairs need to be on a single line');
        }
        if (i === 0) {
            if (props.comma)
                onError(props.comma, 'UNEXPECTED_TOKEN', `Unexpected , in ${fcName}`);
        }
        else {
            if (!props.comma)
                onError(props.start, 'MISSING_CHAR', `Missing , between ${fcName} items`);
            if (props.comment) {
                let prevItemComment = '';
                loop: for (const st of start) {
                    switch (st.type) {
                        case 'comma':
                        case 'space':
                            break;
                        case 'comment':
                            prevItemComment = st.source.substring(1);
                            break loop;
                        default:
                            break loop;
                    }
                }
                if (prevItemComment) {
                    let prev = coll.items[coll.items.length - 1];
                    if (isPair(prev))
                        prev = prev.value ?? prev.key;
                    if (prev.comment)
                        prev.comment += '\n' + prevItemComment;
                    else
                        prev.comment = prevItemComment;
                    props.comment = props.comment.substring(prevItemComment.length + 1);
                }
            }
        }
        if (!isMap && !sep && !props.found) {
            // item is a value in a seq
            // → key & sep are empty, start does not include ? or :
            const valueNode = value
                ? composeNode(ctx, value, props, onError)
                : composeEmptyNode(ctx, props.end, sep, null, props, onError);
            coll.items.push(valueNode);
            offset = valueNode.range[2];
            if (isBlock(value))
                onError(valueNode.range, 'BLOCK_IN_FLOW', blockMsg);
        }
        else {
            // item is a key+value pair
            // key value
            ctx.atKey = true;
            const keyStart = props.end;
            const keyNode = key
                ? composeNode(ctx, key, props, onError)
                : composeEmptyNode(ctx, keyStart, start, null, props, onError);
            if (isBlock(key))
                onError(keyNode.range, 'BLOCK_IN_FLOW', blockMsg);
            ctx.atKey = false;
            // value properties
            const valueProps = resolveProps(sep ?? [], {
                flow: fcName,
                indicator: 'map-value-ind',
                next: value,
                offset: keyNode.range[2],
                onError,
                parentIndent: fc.indent,
                startOnNewline: false
            });
            if (valueProps.found) {
                if (!isMap && !props.found && ctx.options.strict) {
                    if (sep)
                        for (const st of sep) {
                            if (st === valueProps.found)
                                break;
                            if (st.type === 'newline') {
                                onError(st, 'MULTILINE_IMPLICIT_KEY', 'Implicit keys of flow sequence pairs need to be on a single line');
                                break;
                            }
                        }
                    if (props.start < valueProps.found.offset - 1024)
                        onError(valueProps.found, 'KEY_OVER_1024_CHARS', 'The : indicator must be at most 1024 chars after the start of an implicit flow sequence key');
                }
            }
            else if (value) {
                if ('source' in value && value.source?.[0] === ':')
                    onError(value, 'MISSING_CHAR', `Missing space after : in ${fcName}`);
                else
                    onError(valueProps.start, 'MISSING_CHAR', `Missing , or : between ${fcName} items`);
            }
            // value value
            const valueNode = value
                ? composeNode(ctx, value, valueProps, onError)
                : valueProps.found
                    ? composeEmptyNode(ctx, valueProps.end, sep, null, valueProps, onError)
                    : null;
            if (valueNode) {
                if (isBlock(value))
                    onError(valueNode.range, 'BLOCK_IN_FLOW', blockMsg);
            }
            else if (valueProps.comment) {
                if (keyNode.comment)
                    keyNode.comment += '\n' + valueProps.comment;
                else
                    keyNode.comment = valueProps.comment;
            }
            const pair = new Pair(keyNode, valueNode);
            if (ctx.options.keepSourceTokens)
                pair.srcToken = collItem;
            if (isMap) {
                const map = coll;
                if (mapIncludes(ctx, map.items, keyNode))
                    onError(keyStart, 'DUPLICATE_KEY', 'Map keys must be unique');
                map.items.push(pair);
            }
            else {
                const map = new YAMLMap(ctx.schema);
                map.flow = true;
                map.items.push(pair);
                const endRange = (valueNode ?? keyNode).range;
                map.range = [keyNode.range[0], endRange[1], endRange[2]];
                coll.items.push(map);
            }
            offset = valueNode ? valueNode.range[2] : valueProps.end;
        }
    }
    const expectedEnd = isMap ? '}' : ']';
    const [ce, ...ee] = fc.end;
    let cePos = offset;
    if (ce?.source === expectedEnd)
        cePos = ce.offset + ce.source.length;
    else {
        const name = fcName[0].toUpperCase() + fcName.substring(1);
        const msg = atRoot
            ? `${name} must end with a ${expectedEnd}`
            : `${name} in block collection must be sufficiently indented and end with a ${expectedEnd}`;
        onError(offset, atRoot ? 'MISSING_CHAR' : 'BAD_INDENT', msg);
        if (ce && ce.source.length !== 1)
            ee.unshift(ce);
    }
    if (ee.length > 0) {
        const end = resolveEnd(ee, cePos, ctx.options.strict, onError);
        if (end.comment) {
            if (coll.comment)
                coll.comment += '\n' + end.comment;
            else
                coll.comment = end.comment;
        }
        coll.range = [fc.offset, cePos, end.offset];
    }
    else {
        coll.range = [fc.offset, cePos, cePos];
    }
    return coll;
}

function resolveCollection(CN, ctx, token, onError, tagName, tag) {
    const coll = token.type === 'block-map'
        ? resolveBlockMap(CN, ctx, token, onError, tag)
        : token.type === 'block-seq'
            ? resolveBlockSeq(CN, ctx, token, onError, tag)
            : resolveFlowCollection(CN, ctx, token, onError, tag);
    const Coll = coll.constructor;
    // If we got a tagName matching the class, or the tag name is '!',
    // then use the tagName from the node class used to create it.
    if (tagName === '!' || tagName === Coll.tagName) {
        coll.tag = Coll.tagName;
        return coll;
    }
    if (tagName)
        coll.tag = tagName;
    return coll;
}
function composeCollection(CN, ctx, token, props, onError) {
    const tagToken = props.tag;
    const tagName = !tagToken
        ? null
        : ctx.directives.tagName(tagToken.source, msg => onError(tagToken, 'TAG_RESOLVE_FAILED', msg));
    if (token.type === 'block-seq') {
        const { anchor, newlineAfterProp: nl } = props;
        const lastProp = anchor && tagToken
            ? anchor.offset > tagToken.offset
                ? anchor
                : tagToken
            : (anchor ?? tagToken);
        if (lastProp && (!nl || nl.offset < lastProp.offset)) {
            const message = 'Missing newline after block sequence props';
            onError(lastProp, 'MISSING_CHAR', message);
        }
    }
    const expType = token.type === 'block-map'
        ? 'map'
        : token.type === 'block-seq'
            ? 'seq'
            : token.start.source === '{'
                ? 'map'
                : 'seq';
    // shortcut: check if it's a generic YAMLMap or YAMLSeq
    // before jumping into the custom tag logic.
    if (!tagToken ||
        !tagName ||
        tagName === '!' ||
        (tagName === YAMLMap.tagName && expType === 'map') ||
        (tagName === YAMLSeq.tagName && expType === 'seq')) {
        return resolveCollection(CN, ctx, token, onError, tagName);
    }
    let tag = ctx.schema.tags.find(t => t.tag === tagName && t.collection === expType);
    if (!tag) {
        const kt = ctx.schema.knownTags[tagName];
        if (kt?.collection === expType) {
            ctx.schema.tags.push(Object.assign({}, kt, { default: false }));
            tag = kt;
        }
        else {
            if (kt) {
                onError(tagToken, 'BAD_COLLECTION_TYPE', `${kt.tag} used for ${expType} collection, but expects ${kt.collection ?? 'scalar'}`, true);
            }
            else {
                onError(tagToken, 'TAG_RESOLVE_FAILED', `Unresolved tag: ${tagName}`, true);
            }
            return resolveCollection(CN, ctx, token, onError, tagName);
        }
    }
    const coll = resolveCollection(CN, ctx, token, onError, tagName, tag);
    const res = tag.resolve?.(coll, msg => onError(tagToken, 'TAG_RESOLVE_FAILED', msg), ctx.options) ?? coll;
    const node = isNode(res)
        ? res
        : new Scalar(res);
    node.range = coll.range;
    node.tag = tagName;
    if (tag?.format)
        node.format = tag.format;
    return node;
}

function resolveBlockScalar(ctx, scalar, onError) {
    const start = scalar.offset;
    const header = parseBlockScalarHeader(scalar, ctx.options.strict, onError);
    if (!header)
        return { value: '', type: null, comment: '', range: [start, start, start] };
    const type = header.mode === '>' ? Scalar.BLOCK_FOLDED : Scalar.BLOCK_LITERAL;
    const lines = scalar.source ? splitLines(scalar.source) : [];
    // determine the end of content & start of chomping
    let chompStart = lines.length;
    for (let i = lines.length - 1; i >= 0; --i) {
        const content = lines[i][1];
        if (content === '' || content === '\r')
            chompStart = i;
        else
            break;
    }
    // shortcut for empty contents
    if (chompStart === 0) {
        const value = header.chomp === '+' && lines.length > 0
            ? '\n'.repeat(Math.max(1, lines.length - 1))
            : '';
        let end = start + header.length;
        if (scalar.source)
            end += scalar.source.length;
        return { value, type, comment: header.comment, range: [start, end, end] };
    }
    // find the indentation level to trim from start
    let trimIndent = scalar.indent + header.indent;
    let offset = scalar.offset + header.length;
    let contentStart = 0;
    for (let i = 0; i < chompStart; ++i) {
        const [indent, content] = lines[i];
        if (content === '' || content === '\r') {
            if (header.indent === 0 && indent.length > trimIndent)
                trimIndent = indent.length;
        }
        else {
            if (indent.length < trimIndent) {
                const message = 'Block scalars with more-indented leading empty lines must use an explicit indentation indicator';
                onError(offset + indent.length, 'MISSING_CHAR', message);
            }
            if (header.indent === 0)
                trimIndent = indent.length;
            contentStart = i;
            if (trimIndent === 0 && !ctx.atRoot) {
                const message = 'Block scalar values in collections must be indented';
                onError(offset, 'BAD_INDENT', message);
            }
            break;
        }
        offset += indent.length + content.length + 1;
    }
    // include trailing more-indented empty lines in content
    for (let i = lines.length - 1; i >= chompStart; --i) {
        if (lines[i][0].length > trimIndent)
            chompStart = i + 1;
    }
    let value = '';
    let sep = '';
    let prevMoreIndented = false;
    // leading whitespace is kept intact
    for (let i = 0; i < contentStart; ++i)
        value += lines[i][0].slice(trimIndent) + '\n';
    for (let i = contentStart; i < chompStart; ++i) {
        let [indent, content] = lines[i];
        offset += indent.length + content.length + 1;
        const crlf = content[content.length - 1] === '\r';
        if (crlf)
            content = content.slice(0, -1);
        /* istanbul ignore if already caught in lexer */
        if (content && indent.length < trimIndent) {
            const src = header.indent
                ? 'explicit indentation indicator'
                : 'first line';
            const message = `Block scalar lines must not be less indented than their ${src}`;
            onError(offset - content.length - (crlf ? 2 : 1), 'BAD_INDENT', message);
            indent = '';
        }
        if (type === Scalar.BLOCK_LITERAL) {
            value += sep + indent.slice(trimIndent) + content;
            sep = '\n';
        }
        else if (indent.length > trimIndent || content[0] === '\t') {
            // more-indented content within a folded block
            if (sep === ' ')
                sep = '\n';
            else if (!prevMoreIndented && sep === '\n')
                sep = '\n\n';
            value += sep + indent.slice(trimIndent) + content;
            sep = '\n';
            prevMoreIndented = true;
        }
        else if (content === '') {
            // empty line
            if (sep === '\n')
                value += '\n';
            else
                sep = '\n';
        }
        else {
            value += sep + content;
            sep = ' ';
            prevMoreIndented = false;
        }
    }
    switch (header.chomp) {
        case '-':
            break;
        case '+':
            for (let i = chompStart; i < lines.length; ++i)
                value += '\n' + lines[i][0].slice(trimIndent);
            if (value[value.length - 1] !== '\n')
                value += '\n';
            break;
        default:
            value += '\n';
    }
    const end = start + header.length + scalar.source.length;
    return { value, type, comment: header.comment, range: [start, end, end] };
}
function parseBlockScalarHeader({ offset, props }, strict, onError) {
    /* istanbul ignore if should not happen */
    if (props[0].type !== 'block-scalar-header') {
        onError(props[0], 'IMPOSSIBLE', 'Block scalar header not found');
        return null;
    }
    const { source } = props[0];
    const mode = source[0];
    let indent = 0;
    let chomp = '';
    let error = -1;
    for (let i = 1; i < source.length; ++i) {
        const ch = source[i];
        if (!chomp && (ch === '-' || ch === '+'))
            chomp = ch;
        else {
            const n = Number(ch);
            if (!indent && n)
                indent = n;
            else if (error === -1)
                error = offset + i;
        }
    }
    if (error !== -1)
        onError(error, 'UNEXPECTED_TOKEN', `Block scalar header includes extra characters: ${source}`);
    let hasSpace = false;
    let comment = '';
    let length = source.length;
    for (let i = 1; i < props.length; ++i) {
        const token = props[i];
        switch (token.type) {
            case 'space':
                hasSpace = true;
            // fallthrough
            case 'newline':
                length += token.source.length;
                break;
            case 'comment':
                if (strict && !hasSpace) {
                    const message = 'Comments must be separated from other tokens by white space characters';
                    onError(token, 'MISSING_CHAR', message);
                }
                length += token.source.length;
                comment = token.source.substring(1);
                break;
            case 'error':
                onError(token, 'UNEXPECTED_TOKEN', token.message);
                length += token.source.length;
                break;
            /* istanbul ignore next should not happen */
            default: {
                const message = `Unexpected token in block scalar header: ${token.type}`;
                onError(token, 'UNEXPECTED_TOKEN', message);
                const ts = token.source;
                if (ts && typeof ts === 'string')
                    length += ts.length;
            }
        }
    }
    return { mode, indent, chomp, comment, length };
}
/** @returns Array of lines split up as `[indent, content]` */
function splitLines(source) {
    const split = source.split(/\n( *)/);
    const first = split[0];
    const m = first.match(/^( *)/);
    const line0 = m?.[1]
        ? [m[1], first.slice(m[1].length)]
        : ['', first];
    const lines = [line0];
    for (let i = 1; i < split.length; i += 2)
        lines.push([split[i], split[i + 1]]);
    return lines;
}

function resolveFlowScalar(scalar, strict, onError) {
    const { offset, type, source, end } = scalar;
    let _type;
    let value;
    const _onError = (rel, code, msg) => onError(offset + rel, code, msg);
    switch (type) {
        case 'scalar':
            _type = Scalar.PLAIN;
            value = plainValue(source, _onError);
            break;
        case 'single-quoted-scalar':
            _type = Scalar.QUOTE_SINGLE;
            value = singleQuotedValue(source, _onError);
            break;
        case 'double-quoted-scalar':
            _type = Scalar.QUOTE_DOUBLE;
            value = doubleQuotedValue(source, _onError);
            break;
        /* istanbul ignore next should not happen */
        default:
            onError(scalar, 'UNEXPECTED_TOKEN', `Expected a flow scalar value, but found: ${type}`);
            return {
                value: '',
                type: null,
                comment: '',
                range: [offset, offset + source.length, offset + source.length]
            };
    }
    const valueEnd = offset + source.length;
    const re = resolveEnd(end, valueEnd, strict, onError);
    return {
        value,
        type: _type,
        comment: re.comment,
        range: [offset, valueEnd, re.offset]
    };
}
function plainValue(source, onError) {
    let badChar = '';
    switch (source[0]) {
        /* istanbul ignore next should not happen */
        case '\t':
            badChar = 'a tab character';
            break;
        case ',':
            badChar = 'flow indicator character ,';
            break;
        case '%':
            badChar = 'directive indicator character %';
            break;
        case '|':
        case '>': {
            badChar = `block scalar indicator ${source[0]}`;
            break;
        }
        case '@':
        case '`': {
            badChar = `reserved character ${source[0]}`;
            break;
        }
    }
    if (badChar)
        onError(0, 'BAD_SCALAR_START', `Plain value cannot start with ${badChar}`);
    return foldLines(source);
}
function singleQuotedValue(source, onError) {
    if (source[source.length - 1] !== "'" || source.length === 1)
        onError(source.length, 'MISSING_CHAR', "Missing closing 'quote");
    return foldLines(source.slice(1, -1)).replace(/''/g, "'");
}
function foldLines(source) {
    /**
     * The negative lookbehind here and in the `re` RegExp is to
     * prevent causing a polynomial search time in certain cases.
     *
     * The try-catch is for Safari, which doesn't support this yet:
     * https://caniuse.com/js-regexp-lookbehind
     */
    let first, line;
    try {
        first = new RegExp('(.*?)(?<![ \t])[ \t]*\r?\n', 'sy');
        line = new RegExp('[ \t]*(.*?)(?:(?<![ \t])[ \t]*)?\r?\n', 'sy');
    }
    catch {
        first = /(.*?)[ \t]*\r?\n/sy;
        line = /[ \t]*(.*?)[ \t]*\r?\n/sy;
    }
    let match = first.exec(source);
    if (!match)
        return source;
    let res = match[1];
    let sep = ' ';
    let pos = first.lastIndex;
    line.lastIndex = pos;
    while ((match = line.exec(source))) {
        if (match[1] === '') {
            if (sep === '\n')
                res += sep;
            else
                sep = '\n';
        }
        else {
            res += sep + match[1];
            sep = ' ';
        }
        pos = line.lastIndex;
    }
    const last = /[ \t]*(.*)/sy;
    last.lastIndex = pos;
    match = last.exec(source);
    return res + sep + (match?.[1] ?? '');
}
function doubleQuotedValue(source, onError) {
    let res = '';
    for (let i = 1; i < source.length - 1; ++i) {
        const ch = source[i];
        if (ch === '\r' && source[i + 1] === '\n')
            continue;
        if (ch === '\n') {
            const { fold, offset } = foldNewline(source, i);
            res += fold;
            i = offset;
        }
        else if (ch === '\\') {
            let next = source[++i];
            const cc = escapeCodes[next];
            if (cc)
                res += cc;
            else if (next === '\n') {
                // skip escaped newlines, but still trim the following line
                next = source[i + 1];
                while (next === ' ' || next === '\t')
                    next = source[++i + 1];
            }
            else if (next === '\r' && source[i + 1] === '\n') {
                // skip escaped CRLF newlines, but still trim the following line
                next = source[++i + 1];
                while (next === ' ' || next === '\t')
                    next = source[++i + 1];
            }
            else if (next === 'x' || next === 'u' || next === 'U') {
                const length = next === 'x' ? 2 : next === 'u' ? 4 : 8;
                res += parseCharCode(source, i + 1, length, onError);
                i += length;
            }
            else {
                const raw = source.substr(i - 1, 2);
                onError(i - 1, 'BAD_DQ_ESCAPE', `Invalid escape sequence ${raw}`);
                res += raw;
            }
        }
        else if (ch === ' ' || ch === '\t') {
            // trim trailing whitespace
            const wsStart = i;
            let next = source[i + 1];
            while (next === ' ' || next === '\t')
                next = source[++i + 1];
            if (next !== '\n' && !(next === '\r' && source[i + 2] === '\n'))
                res += i > wsStart ? source.slice(wsStart, i + 1) : ch;
        }
        else {
            res += ch;
        }
    }
    if (source[source.length - 1] !== '"' || source.length === 1)
        onError(source.length, 'MISSING_CHAR', 'Missing closing "quote');
    return res;
}
/**
 * Fold a single newline into a space, multiple newlines to N - 1 newlines.
 * Presumes `source[offset] === '\n'`
 */
function foldNewline(source, offset) {
    let fold = '';
    let ch = source[offset + 1];
    while (ch === ' ' || ch === '\t' || ch === '\n' || ch === '\r') {
        if (ch === '\r' && source[offset + 2] !== '\n')
            break;
        if (ch === '\n')
            fold += '\n';
        offset += 1;
        ch = source[offset + 1];
    }
    if (!fold)
        fold = ' ';
    return { fold, offset };
}
const escapeCodes = {
    '0': '\0', // null character
    a: '\x07', // bell character
    b: '\b', // backspace
    e: '\x1b', // escape character
    f: '\f', // form feed
    n: '\n', // line feed
    r: '\r', // carriage return
    t: '\t', // horizontal tab
    v: '\v', // vertical tab
    N: '\u0085', // Unicode next line
    _: '\u00a0', // Unicode non-breaking space
    L: '\u2028', // Unicode line separator
    P: '\u2029', // Unicode paragraph separator
    ' ': ' ',
    '"': '"',
    '/': '/',
    '\\': '\\',
    '\t': '\t'
};
function parseCharCode(source, offset, length, onError) {
    const cc = source.substr(offset, length);
    const ok = cc.length === length && /^[0-9a-fA-F]+$/.test(cc);
    const code = ok ? parseInt(cc, 16) : NaN;
    try {
        return String.fromCodePoint(code);
    }
    catch {
        const raw = source.substr(offset - 2, length + 2);
        onError(offset - 2, 'BAD_DQ_ESCAPE', `Invalid escape sequence ${raw}`);
        return raw;
    }
}

function composeScalar(ctx, token, tagToken, onError) {
    const { value, type, comment, range } = token.type === 'block-scalar'
        ? resolveBlockScalar(ctx, token, onError)
        : resolveFlowScalar(token, ctx.options.strict, onError);
    const tagName = tagToken
        ? ctx.directives.tagName(tagToken.source, msg => onError(tagToken, 'TAG_RESOLVE_FAILED', msg))
        : null;
    let tag;
    if (ctx.options.stringKeys && ctx.atKey) {
        tag = ctx.schema[SCALAR$1];
    }
    else if (tagName)
        tag = findScalarTagByName(ctx.schema, value, tagName, tagToken, onError);
    else if (token.type === 'scalar')
        tag = findScalarTagByTest(ctx, value, token, onError);
    else
        tag = ctx.schema[SCALAR$1];
    let scalar;
    try {
        const res = tag.resolve(value, msg => onError(tagToken ?? token, 'TAG_RESOLVE_FAILED', msg), ctx.options);
        scalar = isScalar$1(res) ? res : new Scalar(res);
    }
    catch (error) {
        const msg = error instanceof Error ? error.message : String(error);
        onError(tagToken ?? token, 'TAG_RESOLVE_FAILED', msg);
        scalar = new Scalar(value);
    }
    scalar.range = range;
    scalar.source = value;
    if (type)
        scalar.type = type;
    if (tagName)
        scalar.tag = tagName;
    if (tag.format)
        scalar.format = tag.format;
    if (comment)
        scalar.comment = comment;
    return scalar;
}
function findScalarTagByName(schema, value, tagName, tagToken, onError) {
    if (tagName === '!')
        return schema[SCALAR$1]; // non-specific tag
    const matchWithTest = [];
    for (const tag of schema.tags) {
        if (!tag.collection && tag.tag === tagName) {
            if (tag.default && tag.test)
                matchWithTest.push(tag);
            else
                return tag;
        }
    }
    for (const tag of matchWithTest)
        if (tag.test?.test(value))
            return tag;
    const kt = schema.knownTags[tagName];
    if (kt && !kt.collection) {
        // Ensure that the known tag is available for stringifying,
        // but does not get used by default.
        schema.tags.push(Object.assign({}, kt, { default: false, test: undefined }));
        return kt;
    }
    onError(tagToken, 'TAG_RESOLVE_FAILED', `Unresolved tag: ${tagName}`, tagName !== 'tag:yaml.org,2002:str');
    return schema[SCALAR$1];
}
function findScalarTagByTest({ atKey, directives, schema }, value, token, onError) {
    const tag = schema.tags.find(tag => (tag.default === true || (atKey && tag.default === 'key')) &&
        tag.test?.test(value)) || schema[SCALAR$1];
    if (schema.compat) {
        const compat = schema.compat.find(tag => tag.default && tag.test?.test(value)) ??
            schema[SCALAR$1];
        if (tag.tag !== compat.tag) {
            const ts = directives.tagString(tag.tag);
            const cs = directives.tagString(compat.tag);
            const msg = `Value may be parsed as either ${ts} or ${cs}`;
            onError(token, 'TAG_RESOLVE_FAILED', msg, true);
        }
    }
    return tag;
}

function emptyScalarPosition(offset, before, pos) {
    if (before) {
        pos ?? (pos = before.length);
        for (let i = pos - 1; i >= 0; --i) {
            let st = before[i];
            switch (st.type) {
                case 'space':
                case 'comment':
                case 'newline':
                    offset -= st.source.length;
                    continue;
            }
            // Technically, an empty scalar is immediately after the last non-empty
            // node, but it's more useful to place it after any whitespace.
            st = before[++i];
            while (st?.type === 'space') {
                offset += st.source.length;
                st = before[++i];
            }
            break;
        }
    }
    return offset;
}

const CN = { composeNode, composeEmptyNode };
function composeNode(ctx, token, props, onError) {
    const atKey = ctx.atKey;
    const { spaceBefore, comment, anchor, tag } = props;
    let node;
    let isSrcToken = true;
    switch (token.type) {
        case 'alias':
            node = composeAlias(ctx, token, onError);
            if (anchor || tag)
                onError(token, 'ALIAS_PROPS', 'An alias node must not specify any properties');
            break;
        case 'scalar':
        case 'single-quoted-scalar':
        case 'double-quoted-scalar':
        case 'block-scalar':
            node = composeScalar(ctx, token, tag, onError);
            if (anchor)
                node.anchor = anchor.source.substring(1);
            break;
        case 'block-map':
        case 'block-seq':
        case 'flow-collection':
            try {
                node = composeCollection(CN, ctx, token, props, onError);
                if (anchor)
                    node.anchor = anchor.source.substring(1);
            }
            catch (error) {
                // Almost certainly here due to a stack overflow
                const message = error instanceof Error ? error.message : String(error);
                onError(token, 'RESOURCE_EXHAUSTION', message);
            }
            break;
        default: {
            const message = token.type === 'error'
                ? token.message
                : `Unsupported token (type: ${token.type})`;
            onError(token, 'UNEXPECTED_TOKEN', message);
            isSrcToken = false;
        }
    }
    node ?? (node = composeEmptyNode(ctx, token.offset, undefined, null, props, onError));
    if (anchor && node.anchor === '')
        onError(anchor, 'BAD_ALIAS', 'Anchor cannot be an empty string');
    if (atKey &&
        ctx.options.stringKeys &&
        (!isScalar$1(node) ||
            typeof node.value !== 'string' ||
            (node.tag && node.tag !== 'tag:yaml.org,2002:str'))) {
        const msg = 'With stringKeys, all keys must be strings';
        onError(tag ?? token, 'NON_STRING_KEY', msg);
    }
    if (spaceBefore)
        node.spaceBefore = true;
    if (comment) {
        if (token.type === 'scalar' && token.source === '')
            node.comment = comment;
        else
            node.commentBefore = comment;
    }
    // @ts-expect-error Type checking misses meaning of isSrcToken
    if (ctx.options.keepSourceTokens && isSrcToken)
        node.srcToken = token;
    return node;
}
function composeEmptyNode(ctx, offset, before, pos, { spaceBefore, comment, anchor, tag, end }, onError) {
    const token = {
        type: 'scalar',
        offset: emptyScalarPosition(offset, before, pos),
        indent: -1,
        source: ''
    };
    const node = composeScalar(ctx, token, tag, onError);
    if (anchor) {
        node.anchor = anchor.source.substring(1);
        if (node.anchor === '')
            onError(anchor, 'BAD_ALIAS', 'Anchor cannot be an empty string');
    }
    if (spaceBefore)
        node.spaceBefore = true;
    if (comment) {
        node.comment = comment;
        node.range[2] = end;
    }
    return node;
}
function composeAlias({ options }, { offset, source, end }, onError) {
    const alias = new Alias(source.substring(1));
    if (alias.source === '')
        onError(offset, 'BAD_ALIAS', 'Alias cannot be an empty string');
    if (alias.source.endsWith(':'))
        onError(offset + source.length - 1, 'BAD_ALIAS', 'Alias ending in : is ambiguous', true);
    const valueEnd = offset + source.length;
    const re = resolveEnd(end, valueEnd, options.strict, onError);
    alias.range = [offset, valueEnd, re.offset];
    if (re.comment)
        alias.comment = re.comment;
    return alias;
}

function composeDoc(options, directives, { offset, start, value, end }, onError) {
    const opts = Object.assign({ _directives: directives }, options);
    const doc = new Document$1(undefined, opts);
    const ctx = {
        atKey: false,
        atRoot: true,
        directives: doc.directives,
        options: doc.options,
        schema: doc.schema
    };
    const props = resolveProps(start, {
        indicator: 'doc-start',
        next: value ?? end?.[0],
        offset,
        onError,
        parentIndent: 0,
        startOnNewline: true
    });
    if (props.found) {
        doc.directives.docStart = true;
        if (value &&
            (value.type === 'block-map' || value.type === 'block-seq') &&
            !props.hasNewline)
            onError(props.end, 'MISSING_CHAR', 'Block collection cannot start on same line with directives-end marker');
    }
    // @ts-expect-error If Contents is set, let's trust the user
    doc.contents = value
        ? composeNode(ctx, value, props, onError)
        : composeEmptyNode(ctx, props.end, start, null, props, onError);
    const contentEnd = doc.contents.range[2];
    const re = resolveEnd(end, contentEnd, false, onError);
    if (re.comment)
        doc.comment = re.comment;
    doc.range = [offset, contentEnd, re.offset];
    return doc;
}

function getErrorPos(src) {
    if (typeof src === 'number')
        return [src, src + 1];
    if (Array.isArray(src))
        return src.length === 2 ? src : [src[0], src[1]];
    const { offset, source } = src;
    return [offset, offset + (typeof source === 'string' ? source.length : 1)];
}
function parsePrelude(prelude) {
    let comment = '';
    let atComment = false;
    let afterEmptyLine = false;
    for (let i = 0; i < prelude.length; ++i) {
        const source = prelude[i];
        switch (source[0]) {
            case '#':
                comment +=
                    (comment === '' ? '' : afterEmptyLine ? '\n\n' : '\n') +
                        (source.substring(1) || ' ');
                atComment = true;
                afterEmptyLine = false;
                break;
            case '%':
                if (prelude[i + 1]?.[0] !== '#')
                    i += 1;
                atComment = false;
                break;
            default:
                // This may be wrong after doc-end, but in that case it doesn't matter
                if (!atComment)
                    afterEmptyLine = true;
                atComment = false;
        }
    }
    return { comment, afterEmptyLine };
}
/**
 * Compose a stream of CST nodes into a stream of YAML Documents.
 *
 * ```ts
 * import { Composer, Parser } from 'yaml'
 *
 * const src: string = ...
 * const tokens = new Parser().parse(src)
 * const docs = new Composer().compose(tokens)
 * ```
 */
class Composer {
    constructor(options = {}) {
        this.doc = null;
        this.atDirectives = false;
        this.prelude = [];
        this.errors = [];
        this.warnings = [];
        this.onError = (source, code, message, warning) => {
            const pos = getErrorPos(source);
            if (warning)
                this.warnings.push(new YAMLWarning(pos, code, message));
            else
                this.errors.push(new YAMLParseError(pos, code, message));
        };
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        this.directives = new Directives({ version: options.version || '1.2' });
        this.options = options;
    }
    decorate(doc, afterDoc) {
        const { comment, afterEmptyLine } = parsePrelude(this.prelude);
        //console.log({ dc: doc.comment, prelude, comment })
        if (comment) {
            const dc = doc.contents;
            if (afterDoc) {
                doc.comment = doc.comment ? `${doc.comment}\n${comment}` : comment;
            }
            else if (afterEmptyLine || doc.directives.docStart || !dc) {
                doc.commentBefore = comment;
            }
            else if (isCollection(dc) && !dc.flow && dc.items.length > 0) {
                let it = dc.items[0];
                if (isPair(it))
                    it = it.key;
                const cb = it.commentBefore;
                it.commentBefore = cb ? `${comment}\n${cb}` : comment;
            }
            else {
                const cb = dc.commentBefore;
                dc.commentBefore = cb ? `${comment}\n${cb}` : comment;
            }
        }
        if (afterDoc) {
            for (let i = 0; i < this.errors.length; ++i)
                doc.errors.push(this.errors[i]);
            for (let i = 0; i < this.warnings.length; ++i)
                doc.warnings.push(this.warnings[i]);
        }
        else {
            doc.errors = this.errors;
            doc.warnings = this.warnings;
        }
        this.prelude = [];
        this.errors = [];
        this.warnings = [];
    }
    /**
     * Current stream status information.
     *
     * Mostly useful at the end of input for an empty stream.
     */
    streamInfo() {
        return {
            comment: parsePrelude(this.prelude).comment,
            directives: this.directives,
            errors: this.errors,
            warnings: this.warnings
        };
    }
    /**
     * Compose tokens into documents.
     *
     * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
     * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
     */
    *compose(tokens, forceDoc = false, endOffset = -1) {
        for (const token of tokens)
            yield* this.next(token);
        yield* this.end(forceDoc, endOffset);
    }
    /** Advance the composer by one CST token. */
    *next(token) {
        switch (token.type) {
            case 'directive':
                this.directives.add(token.source, (offset, message, warning) => {
                    const pos = getErrorPos(token);
                    pos[0] += offset;
                    this.onError(pos, 'BAD_DIRECTIVE', message, warning);
                });
                this.prelude.push(token.source);
                this.atDirectives = true;
                break;
            case 'document': {
                const doc = composeDoc(this.options, this.directives, token, this.onError);
                if (this.atDirectives && !doc.directives.docStart)
                    this.onError(token, 'MISSING_CHAR', 'Missing directives-end/doc-start indicator line');
                this.decorate(doc, false);
                if (this.doc)
                    yield this.doc;
                this.doc = doc;
                this.atDirectives = false;
                break;
            }
            case 'byte-order-mark':
            case 'space':
                break;
            case 'comment':
            case 'newline':
                this.prelude.push(token.source);
                break;
            case 'error': {
                const msg = token.source
                    ? `${token.message}: ${JSON.stringify(token.source)}`
                    : token.message;
                const error = new YAMLParseError(getErrorPos(token), 'UNEXPECTED_TOKEN', msg);
                if (this.atDirectives || !this.doc)
                    this.errors.push(error);
                else
                    this.doc.errors.push(error);
                break;
            }
            case 'doc-end': {
                if (!this.doc) {
                    const msg = 'Unexpected doc-end without preceding document';
                    this.errors.push(new YAMLParseError(getErrorPos(token), 'UNEXPECTED_TOKEN', msg));
                    break;
                }
                this.doc.directives.docEnd = true;
                const end = resolveEnd(token.end, token.offset + token.source.length, this.doc.options.strict, this.onError);
                this.decorate(this.doc, true);
                if (end.comment) {
                    const dc = this.doc.comment;
                    this.doc.comment = dc ? `${dc}\n${end.comment}` : end.comment;
                }
                this.doc.range[2] = end.offset;
                break;
            }
            default:
                this.errors.push(new YAMLParseError(getErrorPos(token), 'UNEXPECTED_TOKEN', `Unsupported token ${token.type}`));
        }
    }
    /**
     * Call at end of input to yield any remaining document.
     *
     * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
     * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
     */
    *end(forceDoc = false, endOffset = -1) {
        if (this.doc) {
            this.decorate(this.doc, true);
            yield this.doc;
            this.doc = null;
        }
        else if (forceDoc) {
            const opts = Object.assign({ _directives: this.directives }, this.options);
            const doc = new Document$1(undefined, opts);
            if (this.atDirectives)
                this.onError(endOffset, 'MISSING_CHAR', 'Missing directives-end indicator line');
            doc.range = [0, endOffset, endOffset];
            this.decorate(doc, false);
            yield doc;
        }
    }
}

/** The byte order mark */
const BOM = '\u{FEFF}';
/** Start of doc-mode */
const DOCUMENT = '\x02'; // C0: Start of Text
/** Unexpected end of flow-mode */
const FLOW_END = '\x18'; // C0: Cancel
/** Next token is a scalar value */
const SCALAR = '\x1f'; // C0: Unit Separator
/** Identify the type of a lexer token. May return `null` for unknown tokens. */
function tokenType(source) {
    switch (source) {
        case BOM:
            return 'byte-order-mark';
        case DOCUMENT:
            return 'doc-mode';
        case FLOW_END:
            return 'flow-error-end';
        case SCALAR:
            return 'scalar';
        case '---':
            return 'doc-start';
        case '...':
            return 'doc-end';
        case '':
        case '\n':
        case '\r\n':
            return 'newline';
        case '-':
            return 'seq-item-ind';
        case '?':
            return 'explicit-key-ind';
        case ':':
            return 'map-value-ind';
        case '{':
            return 'flow-map-start';
        case '}':
            return 'flow-map-end';
        case '[':
            return 'flow-seq-start';
        case ']':
            return 'flow-seq-end';
        case ',':
            return 'comma';
    }
    switch (source[0]) {
        case ' ':
        case '\t':
            return 'space';
        case '#':
            return 'comment';
        case '%':
            return 'directive-line';
        case '*':
            return 'alias';
        case '&':
            return 'anchor';
        case '!':
            return 'tag';
        case "'":
            return 'single-quoted-scalar';
        case '"':
            return 'double-quoted-scalar';
        case '|':
        case '>':
            return 'block-scalar-header';
    }
    return null;
}

/*
START -> stream

stream
  directive -> line-end -> stream
  indent + line-end -> stream
  [else] -> line-start

line-end
  comment -> line-end
  newline -> .
  input-end -> END

line-start
  doc-start -> doc
  doc-end -> stream
  [else] -> indent -> block-start

block-start
  seq-item-start -> block-start
  explicit-key-start -> block-start
  map-value-start -> block-start
  [else] -> doc

doc
  line-end -> line-start
  spaces -> doc
  anchor -> doc
  tag -> doc
  flow-start -> flow -> doc
  flow-end -> error -> doc
  seq-item-start -> error -> doc
  explicit-key-start -> error -> doc
  map-value-start -> doc
  alias -> doc
  quote-start -> quoted-scalar -> doc
  block-scalar-header -> line-end -> block-scalar(min) -> line-start
  [else] -> plain-scalar(false, min) -> doc

flow
  line-end -> flow
  spaces -> flow
  anchor -> flow
  tag -> flow
  flow-start -> flow -> flow
  flow-end -> .
  seq-item-start -> error -> flow
  explicit-key-start -> flow
  map-value-start -> flow
  alias -> flow
  quote-start -> quoted-scalar -> flow
  comma -> flow
  [else] -> plain-scalar(true, 0) -> flow

quoted-scalar
  quote-end -> .
  [else] -> quoted-scalar

block-scalar(min)
  newline + peek(indent < min) -> .
  [else] -> block-scalar(min)

plain-scalar(is-flow, min)
  scalar-end(is-flow) -> .
  peek(newline + (indent < min)) -> .
  [else] -> plain-scalar(min)
*/
function isEmpty(ch) {
    switch (ch) {
        case undefined:
        case ' ':
        case '\n':
        case '\r':
        case '\t':
            return true;
        default:
            return false;
    }
}
const hexDigits = new Set('0123456789ABCDEFabcdef');
const tagChars = new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()");
const flowIndicatorChars = new Set(',[]{}');
const invalidAnchorChars = new Set(' ,[]{}\n\r\t');
const isNotAnchorChar = (ch) => !ch || invalidAnchorChars.has(ch);
/**
 * Splits an input string into lexical tokens, i.e. smaller strings that are
 * easily identifiable by `tokens.tokenType()`.
 *
 * Lexing starts always in a "stream" context. Incomplete input may be buffered
 * until a complete token can be emitted.
 *
 * In addition to slices of the original input, the following control characters
 * may also be emitted:
 *
 * - `\x02` (Start of Text): A document starts with the next token
 * - `\x18` (Cancel): Unexpected end of flow-mode (indicates an error)
 * - `\x1f` (Unit Separator): Next token is a scalar value
 * - `\u{FEFF}` (Byte order mark): Emitted separately outside documents
 */
class Lexer {
    constructor() {
        /**
         * Flag indicating whether the end of the current buffer marks the end of
         * all input
         */
        this.atEnd = false;
        /**
         * Explicit indent set in block scalar header, as an offset from the current
         * minimum indent, so e.g. set to 1 from a header `|2+`. Set to -1 if not
         * explicitly set.
         */
        this.blockScalarIndent = -1;
        /**
         * Block scalars that include a + (keep) chomping indicator in their header
         * include trailing empty lines, which are otherwise excluded from the
         * scalar's contents.
         */
        this.blockScalarKeep = false;
        /** Current input */
        this.buffer = '';
        /**
         * Flag noting whether the map value indicator : can immediately follow this
         * node within a flow context.
         */
        this.flowKey = false;
        /** Count of surrounding flow collection levels. */
        this.flowLevel = 0;
        /**
         * Minimum level of indentation required for next lines to be parsed as a
         * part of the current scalar value.
         */
        this.indentNext = 0;
        /** Indentation level of the current line. */
        this.indentValue = 0;
        /** Position of the next \n character. */
        this.lineEndPos = null;
        /** Stores the state of the lexer if reaching the end of incpomplete input */
        this.next = null;
        /** A pointer to `buffer`; the current position of the lexer. */
        this.pos = 0;
    }
    /**
     * Generate YAML tokens from the `source` string. If `incomplete`,
     * a part of the last line may be left as a buffer for the next call.
     *
     * @returns A generator of lexical tokens
     */
    *lex(source, incomplete = false) {
        if (source) {
            if (typeof source !== 'string')
                throw TypeError('source is not a string');
            this.buffer = this.buffer ? this.buffer + source : source;
            this.lineEndPos = null;
        }
        this.atEnd = !incomplete;
        let next = this.next ?? 'stream';
        while (next && (incomplete || this.hasChars(1)))
            next = yield* this.parseNext(next);
    }
    atLineEnd() {
        let i = this.pos;
        let ch = this.buffer[i];
        while (ch === ' ' || ch === '\t')
            ch = this.buffer[++i];
        if (!ch || ch === '#' || ch === '\n')
            return true;
        if (ch === '\r')
            return this.buffer[i + 1] === '\n';
        return false;
    }
    charAt(n) {
        return this.buffer[this.pos + n];
    }
    continueScalar(offset) {
        let ch = this.buffer[offset];
        if (this.indentNext > 0) {
            let indent = 0;
            while (ch === ' ')
                ch = this.buffer[++indent + offset];
            if (ch === '\r') {
                const next = this.buffer[indent + offset + 1];
                if (next === '\n' || (!next && !this.atEnd))
                    return offset + indent + 1;
            }
            return ch === '\n' || indent >= this.indentNext || (!ch && !this.atEnd)
                ? offset + indent
                : -1;
        }
        if (ch === '-' || ch === '.') {
            const dt = this.buffer.substr(offset, 3);
            if ((dt === '---' || dt === '...') && isEmpty(this.buffer[offset + 3]))
                return -1;
        }
        return offset;
    }
    getLine() {
        let end = this.lineEndPos;
        if (typeof end !== 'number' || (end !== -1 && end < this.pos)) {
            end = this.buffer.indexOf('\n', this.pos);
            this.lineEndPos = end;
        }
        if (end === -1)
            return this.atEnd ? this.buffer.substring(this.pos) : null;
        if (this.buffer[end - 1] === '\r')
            end -= 1;
        return this.buffer.substring(this.pos, end);
    }
    hasChars(n) {
        return this.pos + n <= this.buffer.length;
    }
    setNext(state) {
        this.buffer = this.buffer.substring(this.pos);
        this.pos = 0;
        this.lineEndPos = null;
        this.next = state;
        return null;
    }
    peek(n) {
        return this.buffer.substr(this.pos, n);
    }
    *parseNext(next) {
        switch (next) {
            case 'stream':
                return yield* this.parseStream();
            case 'line-start':
                return yield* this.parseLineStart();
            case 'block-start':
                return yield* this.parseBlockStart();
            case 'doc':
                return yield* this.parseDocument();
            case 'flow':
                return yield* this.parseFlowCollection();
            case 'quoted-scalar':
                return yield* this.parseQuotedScalar();
            case 'block-scalar':
                return yield* this.parseBlockScalar();
            case 'plain-scalar':
                return yield* this.parsePlainScalar();
        }
    }
    *parseStream() {
        let line = this.getLine();
        if (line === null)
            return this.setNext('stream');
        if (line[0] === BOM) {
            yield* this.pushCount(1);
            line = line.substring(1);
        }
        if (line[0] === '%') {
            let dirEnd = line.length;
            let cs = line.indexOf('#');
            while (cs !== -1) {
                const ch = line[cs - 1];
                if (ch === ' ' || ch === '\t') {
                    dirEnd = cs - 1;
                    break;
                }
                else {
                    cs = line.indexOf('#', cs + 1);
                }
            }
            while (true) {
                const ch = line[dirEnd - 1];
                if (ch === ' ' || ch === '\t')
                    dirEnd -= 1;
                else
                    break;
            }
            const n = (yield* this.pushCount(dirEnd)) + (yield* this.pushSpaces(true));
            yield* this.pushCount(line.length - n); // possible comment
            this.pushNewline();
            return 'stream';
        }
        if (this.atLineEnd()) {
            const sp = yield* this.pushSpaces(true);
            yield* this.pushCount(line.length - sp);
            yield* this.pushNewline();
            return 'stream';
        }
        yield DOCUMENT;
        return yield* this.parseLineStart();
    }
    *parseLineStart() {
        const ch = this.charAt(0);
        if (!ch && !this.atEnd)
            return this.setNext('line-start');
        if (ch === '-' || ch === '.') {
            if (!this.atEnd && !this.hasChars(4))
                return this.setNext('line-start');
            const s = this.peek(3);
            if ((s === '---' || s === '...') && isEmpty(this.charAt(3))) {
                yield* this.pushCount(3);
                this.indentValue = 0;
                this.indentNext = 0;
                return s === '---' ? 'doc' : 'stream';
            }
        }
        this.indentValue = yield* this.pushSpaces(false);
        if (this.indentNext > this.indentValue && !isEmpty(this.charAt(1)))
            this.indentNext = this.indentValue;
        return yield* this.parseBlockStart();
    }
    *parseBlockStart() {
        const [ch0, ch1] = this.peek(2);
        if (!ch1 && !this.atEnd)
            return this.setNext('block-start');
        if ((ch0 === '-' || ch0 === '?' || ch0 === ':') && isEmpty(ch1)) {
            const n = (yield* this.pushCount(1)) + (yield* this.pushSpaces(true));
            this.indentNext = this.indentValue + 1;
            this.indentValue += n;
            return 'block-start';
        }
        return 'doc';
    }
    *parseDocument() {
        yield* this.pushSpaces(true);
        const line = this.getLine();
        if (line === null)
            return this.setNext('doc');
        let n = yield* this.pushIndicators();
        switch (line[n]) {
            case '#':
                yield* this.pushCount(line.length - n);
            // fallthrough
            case undefined:
                yield* this.pushNewline();
                return yield* this.parseLineStart();
            case '{':
            case '[':
                yield* this.pushCount(1);
                this.flowKey = false;
                this.flowLevel = 1;
                return 'flow';
            case '}':
            case ']':
                // this is an error
                yield* this.pushCount(1);
                return 'doc';
            case '*':
                yield* this.pushUntil(isNotAnchorChar);
                return 'doc';
            case '"':
            case "'":
                return yield* this.parseQuotedScalar();
            case '|':
            case '>':
                n += yield* this.parseBlockScalarHeader();
                n += yield* this.pushSpaces(true);
                yield* this.pushCount(line.length - n);
                yield* this.pushNewline();
                return yield* this.parseBlockScalar();
            default:
                return yield* this.parsePlainScalar();
        }
    }
    *parseFlowCollection() {
        let nl, sp;
        let indent = -1;
        do {
            nl = yield* this.pushNewline();
            if (nl > 0) {
                sp = yield* this.pushSpaces(false);
                this.indentValue = indent = sp;
            }
            else {
                sp = 0;
            }
            sp += yield* this.pushSpaces(true);
        } while (nl + sp > 0);
        const line = this.getLine();
        if (line === null)
            return this.setNext('flow');
        if ((indent !== -1 && indent < this.indentNext && line[0] !== '#') ||
            (indent === 0 &&
                (line.startsWith('---') || line.startsWith('...')) &&
                isEmpty(line[3]))) {
            // Allowing for the terminal ] or } at the same (rather than greater)
            // indent level as the initial [ or { is technically invalid, but
            // failing here would be surprising to users.
            const atFlowEndMarker = indent === this.indentNext - 1 &&
                this.flowLevel === 1 &&
                (line[0] === ']' || line[0] === '}');
            if (!atFlowEndMarker) {
                // this is an error
                this.flowLevel = 0;
                yield FLOW_END;
                return yield* this.parseLineStart();
            }
        }
        let n = 0;
        while (line[n] === ',') {
            n += yield* this.pushCount(1);
            n += yield* this.pushSpaces(true);
            this.flowKey = false;
        }
        n += yield* this.pushIndicators();
        switch (line[n]) {
            case undefined:
                return 'flow';
            case '#':
                yield* this.pushCount(line.length - n);
                return 'flow';
            case '{':
            case '[':
                yield* this.pushCount(1);
                this.flowKey = false;
                this.flowLevel += 1;
                return 'flow';
            case '}':
            case ']':
                yield* this.pushCount(1);
                this.flowKey = true;
                this.flowLevel -= 1;
                return this.flowLevel ? 'flow' : 'doc';
            case '*':
                yield* this.pushUntil(isNotAnchorChar);
                return 'flow';
            case '"':
            case "'":
                this.flowKey = true;
                return yield* this.parseQuotedScalar();
            case ':': {
                const next = this.charAt(1);
                if (this.flowKey || isEmpty(next) || next === ',') {
                    this.flowKey = false;
                    yield* this.pushCount(1);
                    yield* this.pushSpaces(true);
                    return 'flow';
                }
            }
            // fallthrough
            default:
                this.flowKey = false;
                return yield* this.parsePlainScalar();
        }
    }
    *parseQuotedScalar() {
        const quote = this.charAt(0);
        let end = this.buffer.indexOf(quote, this.pos + 1);
        if (quote === "'") {
            while (end !== -1 && this.buffer[end + 1] === "'")
                end = this.buffer.indexOf("'", end + 2);
        }
        else {
            // double-quote
            while (end !== -1) {
                let n = 0;
                while (this.buffer[end - 1 - n] === '\\')
                    n += 1;
                if (n % 2 === 0)
                    break;
                end = this.buffer.indexOf('"', end + 1);
            }
        }
        // Only looking for newlines within the quotes
        const qb = this.buffer.substring(0, end);
        let nl = qb.indexOf('\n', this.pos);
        if (nl !== -1) {
            while (nl !== -1) {
                const cs = this.continueScalar(nl + 1);
                if (cs === -1)
                    break;
                nl = qb.indexOf('\n', cs);
            }
            if (nl !== -1) {
                // this is an error caused by an unexpected unindent
                end = nl - (qb[nl - 1] === '\r' ? 2 : 1);
            }
        }
        if (end === -1) {
            if (!this.atEnd)
                return this.setNext('quoted-scalar');
            end = this.buffer.length;
        }
        yield* this.pushToIndex(end + 1, false);
        return this.flowLevel ? 'flow' : 'doc';
    }
    *parseBlockScalarHeader() {
        this.blockScalarIndent = -1;
        this.blockScalarKeep = false;
        let i = this.pos;
        while (true) {
            const ch = this.buffer[++i];
            if (ch === '+')
                this.blockScalarKeep = true;
            else if (ch > '0' && ch <= '9')
                this.blockScalarIndent = Number(ch) - 1;
            else if (ch !== '-')
                break;
        }
        return yield* this.pushUntil(ch => isEmpty(ch) || ch === '#');
    }
    *parseBlockScalar() {
        let nl = this.pos - 1; // may be -1 if this.pos === 0
        let indent = 0;
        let ch;
        loop: for (let i = this.pos; (ch = this.buffer[i]); ++i) {
            switch (ch) {
                case ' ':
                    indent += 1;
                    break;
                case '\n':
                    nl = i;
                    indent = 0;
                    break;
                case '\r': {
                    const next = this.buffer[i + 1];
                    if (!next && !this.atEnd)
                        return this.setNext('block-scalar');
                    if (next === '\n')
                        break;
                } // fallthrough
                default:
                    break loop;
            }
        }
        if (!ch && !this.atEnd)
            return this.setNext('block-scalar');
        if (indent >= this.indentNext) {
            if (this.blockScalarIndent === -1)
                this.indentNext = indent;
            else {
                this.indentNext =
                    this.blockScalarIndent + (this.indentNext === 0 ? 1 : this.indentNext);
            }
            do {
                const cs = this.continueScalar(nl + 1);
                if (cs === -1)
                    break;
                nl = this.buffer.indexOf('\n', cs);
            } while (nl !== -1);
            if (nl === -1) {
                if (!this.atEnd)
                    return this.setNext('block-scalar');
                nl = this.buffer.length;
            }
        }
        // Trailing insufficiently indented tabs are invalid.
        // To catch that during parsing, we include them in the block scalar value.
        let i = nl + 1;
        ch = this.buffer[i];
        while (ch === ' ')
            ch = this.buffer[++i];
        if (ch === '\t') {
            while (ch === '\t' || ch === ' ' || ch === '\r' || ch === '\n')
                ch = this.buffer[++i];
            nl = i - 1;
        }
        else if (!this.blockScalarKeep) {
            do {
                let i = nl - 1;
                let ch = this.buffer[i];
                if (ch === '\r')
                    ch = this.buffer[--i];
                const lastChar = i; // Drop the line if last char not more indented
                while (ch === ' ')
                    ch = this.buffer[--i];
                if (ch === '\n' && i >= this.pos && i + 1 + indent > lastChar)
                    nl = i;
                else
                    break;
            } while (true);
        }
        yield SCALAR;
        yield* this.pushToIndex(nl + 1, true);
        return yield* this.parseLineStart();
    }
    *parsePlainScalar() {
        const inFlow = this.flowLevel > 0;
        let end = this.pos - 1;
        let i = this.pos - 1;
        let ch;
        while ((ch = this.buffer[++i])) {
            if (ch === ':') {
                const next = this.buffer[i + 1];
                if (isEmpty(next) || (inFlow && flowIndicatorChars.has(next)))
                    break;
                end = i;
            }
            else if (isEmpty(ch)) {
                let next = this.buffer[i + 1];
                if (ch === '\r') {
                    if (next === '\n') {
                        i += 1;
                        ch = '\n';
                        next = this.buffer[i + 1];
                    }
                    else
                        end = i;
                }
                if (next === '#' || (inFlow && flowIndicatorChars.has(next)))
                    break;
                if (ch === '\n') {
                    const cs = this.continueScalar(i + 1);
                    if (cs === -1)
                        break;
                    i = Math.max(i, cs - 2); // to advance, but still account for ' #'
                }
            }
            else {
                if (inFlow && flowIndicatorChars.has(ch))
                    break;
                end = i;
            }
        }
        if (!ch && !this.atEnd)
            return this.setNext('plain-scalar');
        yield SCALAR;
        yield* this.pushToIndex(end + 1, true);
        return inFlow ? 'flow' : 'doc';
    }
    *pushCount(n) {
        if (n > 0) {
            yield this.buffer.substr(this.pos, n);
            this.pos += n;
            return n;
        }
        return 0;
    }
    *pushToIndex(i, allowEmpty) {
        const s = this.buffer.slice(this.pos, i);
        if (s) {
            yield s;
            this.pos += s.length;
            return s.length;
        }
        else if (allowEmpty)
            yield '';
        return 0;
    }
    *pushIndicators() {
        let n = 0;
        loop: while (true) {
            switch (this.charAt(0)) {
                case '!':
                    n += yield* this.pushTag();
                    n += yield* this.pushSpaces(true);
                    continue loop;
                case '&':
                    n += yield* this.pushUntil(isNotAnchorChar);
                    n += yield* this.pushSpaces(true);
                    continue loop;
                case '-': // this is an error
                case '?': // this is an error outside flow collections
                case ':': {
                    const inFlow = this.flowLevel > 0;
                    const ch1 = this.charAt(1);
                    if (isEmpty(ch1) || (inFlow && flowIndicatorChars.has(ch1))) {
                        if (!inFlow)
                            this.indentNext = this.indentValue + 1;
                        else if (this.flowKey)
                            this.flowKey = false;
                        n += yield* this.pushCount(1);
                        n += yield* this.pushSpaces(true);
                        continue loop;
                    }
                }
            }
            break loop;
        }
        return n;
    }
    *pushTag() {
        if (this.charAt(1) === '<') {
            let i = this.pos + 2;
            let ch = this.buffer[i];
            while (!isEmpty(ch) && ch !== '>')
                ch = this.buffer[++i];
            return yield* this.pushToIndex(ch === '>' ? i + 1 : i, false);
        }
        else {
            let i = this.pos + 1;
            let ch = this.buffer[i];
            while (ch) {
                if (tagChars.has(ch))
                    ch = this.buffer[++i];
                else if (ch === '%' &&
                    hexDigits.has(this.buffer[i + 1]) &&
                    hexDigits.has(this.buffer[i + 2])) {
                    ch = this.buffer[(i += 3)];
                }
                else
                    break;
            }
            return yield* this.pushToIndex(i, false);
        }
    }
    *pushNewline() {
        const ch = this.buffer[this.pos];
        if (ch === '\n')
            return yield* this.pushCount(1);
        else if (ch === '\r' && this.charAt(1) === '\n')
            return yield* this.pushCount(2);
        else
            return 0;
    }
    *pushSpaces(allowTabs) {
        let i = this.pos - 1;
        let ch;
        do {
            ch = this.buffer[++i];
        } while (ch === ' ' || (allowTabs && ch === '\t'));
        const n = i - this.pos;
        if (n > 0) {
            yield this.buffer.substr(this.pos, n);
            this.pos = i;
        }
        return n;
    }
    *pushUntil(test) {
        let i = this.pos;
        let ch = this.buffer[i];
        while (!test(ch))
            ch = this.buffer[++i];
        return yield* this.pushToIndex(i, false);
    }
}

/**
 * Tracks newlines during parsing in order to provide an efficient API for
 * determining the one-indexed `{ line, col }` position for any offset
 * within the input.
 */
class LineCounter {
    constructor() {
        this.lineStarts = [];
        /**
         * Should be called in ascending order. Otherwise, call
         * `lineCounter.lineStarts.sort()` before calling `linePos()`.
         */
        this.addNewLine = (offset) => this.lineStarts.push(offset);
        /**
         * Performs a binary search and returns the 1-indexed { line, col }
         * position of `offset`. If `line === 0`, `addNewLine` has never been
         * called or `offset` is before the first known newline.
         */
        this.linePos = (offset) => {
            let low = 0;
            let high = this.lineStarts.length;
            while (low < high) {
                const mid = (low + high) >> 1; // Math.floor((low + high) / 2)
                if (this.lineStarts[mid] < offset)
                    low = mid + 1;
                else
                    high = mid;
            }
            if (this.lineStarts[low] === offset)
                return { line: low + 1, col: 1 };
            if (low === 0)
                return { line: 0, col: offset };
            const start = this.lineStarts[low - 1];
            return { line: low, col: offset - start + 1 };
        };
    }
}

function includesToken(list, type) {
    for (let i = 0; i < list.length; ++i)
        if (list[i].type === type)
            return true;
    return false;
}
function findNonEmptyIndex(list) {
    for (let i = 0; i < list.length; ++i) {
        switch (list[i].type) {
            case 'space':
            case 'comment':
            case 'newline':
                break;
            default:
                return i;
        }
    }
    return -1;
}
function isFlowToken(token) {
    switch (token?.type) {
        case 'alias':
        case 'scalar':
        case 'single-quoted-scalar':
        case 'double-quoted-scalar':
        case 'flow-collection':
            return true;
        default:
            return false;
    }
}
function getPrevProps(parent) {
    switch (parent.type) {
        case 'document':
            return parent.start;
        case 'block-map': {
            const it = parent.items[parent.items.length - 1];
            return it.sep ?? it.start;
        }
        case 'block-seq':
            return parent.items[parent.items.length - 1].start;
        /* istanbul ignore next should not happen */
        default:
            return [];
    }
}
/** Note: May modify input array */
function getFirstKeyStartProps(prev) {
    if (prev.length === 0)
        return [];
    let i = prev.length;
    loop: while (--i >= 0) {
        switch (prev[i].type) {
            case 'doc-start':
            case 'explicit-key-ind':
            case 'map-value-ind':
            case 'seq-item-ind':
            case 'newline':
                break loop;
        }
    }
    while (prev[++i]?.type === 'space') {
        /* loop */
    }
    return prev.splice(i, prev.length);
}
function arrayPushArray(target, source) {
    // May exhaust call stack with large `source` array
    if (source.length < 1e5)
        Array.prototype.push.apply(target, source);
    else
        for (let i = 0; i < source.length; ++i)
            target.push(source[i]);
}
function fixFlowSeqItems(fc) {
    if (fc.start.type === 'flow-seq-start') {
        for (const it of fc.items) {
            if (it.sep &&
                !it.value &&
                !includesToken(it.start, 'explicit-key-ind') &&
                !includesToken(it.sep, 'map-value-ind')) {
                if (it.key)
                    it.value = it.key;
                delete it.key;
                if (isFlowToken(it.value)) {
                    if (it.value.end)
                        arrayPushArray(it.value.end, it.sep);
                    else
                        it.value.end = it.sep;
                }
                else
                    arrayPushArray(it.start, it.sep);
                delete it.sep;
            }
        }
    }
}
/**
 * A YAML concrete syntax tree (CST) parser
 *
 * ```ts
 * const src: string = ...
 * for (const token of new Parser().parse(src)) {
 *   // token: Token
 * }
 * ```
 *
 * To use the parser with a user-provided lexer:
 *
 * ```ts
 * function* parse(source: string, lexer: Lexer) {
 *   const parser = new Parser()
 *   for (const lexeme of lexer.lex(source))
 *     yield* parser.next(lexeme)
 *   yield* parser.end()
 * }
 *
 * const src: string = ...
 * const lexer = new Lexer()
 * for (const token of parse(src, lexer)) {
 *   // token: Token
 * }
 * ```
 */
class Parser {
    /**
     * @param onNewLine - If defined, called separately with the start position of
     *   each new line (in `parse()`, including the start of input).
     */
    constructor(onNewLine) {
        /** If true, space and sequence indicators count as indentation */
        this.atNewLine = true;
        /** If true, next token is a scalar value */
        this.atScalar = false;
        /** Current indentation level */
        this.indent = 0;
        /** Current offset since the start of parsing */
        this.offset = 0;
        /** On the same line with a block map key */
        this.onKeyLine = false;
        /** Top indicates the node that's currently being built */
        this.stack = [];
        /** The source of the current token, set in parse() */
        this.source = '';
        /** The type of the current token, set in parse() */
        this.type = '';
        // Must be defined after `next()`
        this.lexer = new Lexer();
        this.onNewLine = onNewLine;
    }
    /**
     * Parse `source` as a YAML stream.
     * If `incomplete`, a part of the last line may be left as a buffer for the next call.
     *
     * Errors are not thrown, but yielded as `{ type: 'error', message }` tokens.
     *
     * @returns A generator of tokens representing each directive, document, and other structure.
     */
    *parse(source, incomplete = false) {
        if (this.onNewLine && this.offset === 0)
            this.onNewLine(0);
        for (const lexeme of this.lexer.lex(source, incomplete))
            yield* this.next(lexeme);
        if (!incomplete)
            yield* this.end();
    }
    /**
     * Advance the parser by the `source` of one lexical token.
     */
    *next(source) {
        this.source = source;
        if (this.atScalar) {
            this.atScalar = false;
            yield* this.step();
            this.offset += source.length;
            return;
        }
        const type = tokenType(source);
        if (!type) {
            const message = `Not a YAML token: ${source}`;
            yield* this.pop({ type: 'error', offset: this.offset, message, source });
            this.offset += source.length;
        }
        else if (type === 'scalar') {
            this.atNewLine = false;
            this.atScalar = true;
            this.type = 'scalar';
        }
        else {
            this.type = type;
            yield* this.step();
            switch (type) {
                case 'newline':
                    this.atNewLine = true;
                    this.indent = 0;
                    if (this.onNewLine)
                        this.onNewLine(this.offset + source.length);
                    break;
                case 'space':
                    if (this.atNewLine && source[0] === ' ')
                        this.indent += source.length;
                    break;
                case 'explicit-key-ind':
                case 'map-value-ind':
                case 'seq-item-ind':
                    if (this.atNewLine)
                        this.indent += source.length;
                    break;
                case 'doc-mode':
                case 'flow-error-end':
                    return;
                default:
                    this.atNewLine = false;
            }
            this.offset += source.length;
        }
    }
    /** Call at end of input to push out any remaining constructions */
    *end() {
        while (this.stack.length > 0)
            yield* this.pop();
    }
    get sourceToken() {
        const st = {
            type: this.type,
            offset: this.offset,
            indent: this.indent,
            source: this.source
        };
        return st;
    }
    *step() {
        const top = this.peek(1);
        if (this.type === 'doc-end' && top?.type !== 'doc-end') {
            while (this.stack.length > 0)
                yield* this.pop();
            this.stack.push({
                type: 'doc-end',
                offset: this.offset,
                source: this.source
            });
            return;
        }
        if (!top)
            return yield* this.stream();
        switch (top.type) {
            case 'document':
                return yield* this.document(top);
            case 'alias':
            case 'scalar':
            case 'single-quoted-scalar':
            case 'double-quoted-scalar':
                return yield* this.scalar(top);
            case 'block-scalar':
                return yield* this.blockScalar(top);
            case 'block-map':
                return yield* this.blockMap(top);
            case 'block-seq':
                return yield* this.blockSequence(top);
            case 'flow-collection':
                return yield* this.flowCollection(top);
            case 'doc-end':
                return yield* this.documentEnd(top);
        }
        /* istanbul ignore next should not happen */
        yield* this.pop();
    }
    peek(n) {
        return this.stack[this.stack.length - n];
    }
    *pop(error) {
        const token = error ?? this.stack.pop();
        /* istanbul ignore if should not happen */
        if (!token) {
            const message = 'Tried to pop an empty stack';
            yield { type: 'error', offset: this.offset, source: '', message };
        }
        else if (this.stack.length === 0) {
            yield token;
        }
        else {
            const top = this.peek(1);
            if (token.type === 'block-scalar') {
                // Block scalars use their parent rather than header indent
                token.indent = 'indent' in top ? top.indent : 0;
            }
            else if (token.type === 'flow-collection' && top.type === 'document') {
                // Ignore all indent for top-level flow collections
                token.indent = 0;
            }
            if (token.type === 'flow-collection')
                fixFlowSeqItems(token);
            switch (top.type) {
                case 'document':
                    top.value = token;
                    break;
                case 'block-scalar':
                    top.props.push(token); // error
                    break;
                case 'block-map': {
                    const it = top.items[top.items.length - 1];
                    if (it.value) {
                        top.items.push({ start: [], key: token, sep: [] });
                        this.onKeyLine = true;
                        return;
                    }
                    else if (it.sep) {
                        it.value = token;
                    }
                    else {
                        Object.assign(it, { key: token, sep: [] });
                        this.onKeyLine = !it.explicitKey;
                        return;
                    }
                    break;
                }
                case 'block-seq': {
                    const it = top.items[top.items.length - 1];
                    if (it.value)
                        top.items.push({ start: [], value: token });
                    else
                        it.value = token;
                    break;
                }
                case 'flow-collection': {
                    const it = top.items[top.items.length - 1];
                    if (!it || it.value)
                        top.items.push({ start: [], key: token, sep: [] });
                    else if (it.sep)
                        it.value = token;
                    else
                        Object.assign(it, { key: token, sep: [] });
                    return;
                }
                /* istanbul ignore next should not happen */
                default:
                    yield* this.pop();
                    yield* this.pop(token);
            }
            if ((top.type === 'document' ||
                top.type === 'block-map' ||
                top.type === 'block-seq') &&
                (token.type === 'block-map' || token.type === 'block-seq')) {
                const last = token.items[token.items.length - 1];
                if (last &&
                    !last.sep &&
                    !last.value &&
                    last.start.length > 0 &&
                    findNonEmptyIndex(last.start) === -1 &&
                    (token.indent === 0 ||
                        last.start.every(st => st.type !== 'comment' || st.indent < token.indent))) {
                    if (top.type === 'document')
                        top.end = last.start;
                    else
                        top.items.push({ start: last.start });
                    token.items.splice(-1, 1);
                }
            }
        }
    }
    *stream() {
        switch (this.type) {
            case 'directive-line':
                yield { type: 'directive', offset: this.offset, source: this.source };
                return;
            case 'byte-order-mark':
            case 'space':
            case 'comment':
            case 'newline':
                yield this.sourceToken;
                return;
            case 'doc-mode':
            case 'doc-start': {
                const doc = {
                    type: 'document',
                    offset: this.offset,
                    start: []
                };
                if (this.type === 'doc-start')
                    doc.start.push(this.sourceToken);
                this.stack.push(doc);
                return;
            }
        }
        yield {
            type: 'error',
            offset: this.offset,
            message: `Unexpected ${this.type} token in YAML stream`,
            source: this.source
        };
    }
    *document(doc) {
        if (doc.value)
            return yield* this.lineEnd(doc);
        switch (this.type) {
            case 'doc-start': {
                if (findNonEmptyIndex(doc.start) !== -1) {
                    yield* this.pop();
                    yield* this.step();
                }
                else
                    doc.start.push(this.sourceToken);
                return;
            }
            case 'anchor':
            case 'tag':
            case 'space':
            case 'comment':
            case 'newline':
                doc.start.push(this.sourceToken);
                return;
        }
        const bv = this.startBlockValue(doc);
        if (bv)
            this.stack.push(bv);
        else {
            yield {
                type: 'error',
                offset: this.offset,
                message: `Unexpected ${this.type} token in YAML document`,
                source: this.source
            };
        }
    }
    *scalar(scalar) {
        if (this.type === 'map-value-ind') {
            const prev = getPrevProps(this.peek(2));
            const start = getFirstKeyStartProps(prev);
            let sep;
            if (scalar.end) {
                sep = scalar.end;
                sep.push(this.sourceToken);
                delete scalar.end;
            }
            else
                sep = [this.sourceToken];
            const map = {
                type: 'block-map',
                offset: scalar.offset,
                indent: scalar.indent,
                items: [{ start, key: scalar, sep }]
            };
            this.onKeyLine = true;
            this.stack[this.stack.length - 1] = map;
        }
        else
            yield* this.lineEnd(scalar);
    }
    *blockScalar(scalar) {
        switch (this.type) {
            case 'space':
            case 'comment':
            case 'newline':
                scalar.props.push(this.sourceToken);
                return;
            case 'scalar':
                scalar.source = this.source;
                // block-scalar source includes trailing newline
                this.atNewLine = true;
                this.indent = 0;
                if (this.onNewLine) {
                    let nl = this.source.indexOf('\n') + 1;
                    while (nl !== 0) {
                        this.onNewLine(this.offset + nl);
                        nl = this.source.indexOf('\n', nl) + 1;
                    }
                }
                yield* this.pop();
                break;
            /* istanbul ignore next should not happen */
            default:
                yield* this.pop();
                yield* this.step();
        }
    }
    *blockMap(map) {
        const it = map.items[map.items.length - 1];
        // it.sep is true-ish if pair already has key or : separator
        switch (this.type) {
            case 'newline':
                this.onKeyLine = false;
                if (it.value) {
                    const end = 'end' in it.value ? it.value.end : undefined;
                    const last = Array.isArray(end) ? end[end.length - 1] : undefined;
                    if (last?.type === 'comment')
                        end?.push(this.sourceToken);
                    else
                        map.items.push({ start: [this.sourceToken] });
                }
                else if (it.sep) {
                    it.sep.push(this.sourceToken);
                }
                else {
                    it.start.push(this.sourceToken);
                }
                return;
            case 'space':
            case 'comment':
                if (it.value) {
                    map.items.push({ start: [this.sourceToken] });
                }
                else if (it.sep) {
                    it.sep.push(this.sourceToken);
                }
                else {
                    if (this.atIndentedComment(it.start, map.indent)) {
                        const prev = map.items[map.items.length - 2];
                        const end = prev?.value?.end;
                        if (Array.isArray(end)) {
                            arrayPushArray(end, it.start);
                            end.push(this.sourceToken);
                            map.items.pop();
                            return;
                        }
                    }
                    it.start.push(this.sourceToken);
                }
                return;
        }
        if (this.indent >= map.indent) {
            const atMapIndent = !this.onKeyLine && this.indent === map.indent;
            const atNextItem = atMapIndent &&
                (it.sep || it.explicitKey) &&
                this.type !== 'seq-item-ind';
            // For empty nodes, assign newline-separated not indented empty tokens to following node
            let start = [];
            if (atNextItem && it.sep && !it.value) {
                const nl = [];
                for (let i = 0; i < it.sep.length; ++i) {
                    const st = it.sep[i];
                    switch (st.type) {
                        case 'newline':
                            nl.push(i);
                            break;
                        case 'space':
                            break;
                        case 'comment':
                            if (st.indent > map.indent)
                                nl.length = 0;
                            break;
                        default:
                            nl.length = 0;
                    }
                }
                if (nl.length >= 2)
                    start = it.sep.splice(nl[1]);
            }
            switch (this.type) {
                case 'anchor':
                case 'tag':
                    if (atNextItem || it.value) {
                        start.push(this.sourceToken);
                        map.items.push({ start });
                        this.onKeyLine = true;
                    }
                    else if (it.sep) {
                        it.sep.push(this.sourceToken);
                    }
                    else {
                        it.start.push(this.sourceToken);
                    }
                    return;
                case 'explicit-key-ind':
                    if (!it.sep && !it.explicitKey) {
                        it.start.push(this.sourceToken);
                        it.explicitKey = true;
                    }
                    else if (atNextItem || it.value) {
                        start.push(this.sourceToken);
                        map.items.push({ start, explicitKey: true });
                    }
                    else {
                        this.stack.push({
                            type: 'block-map',
                            offset: this.offset,
                            indent: this.indent,
                            items: [{ start: [this.sourceToken], explicitKey: true }]
                        });
                    }
                    this.onKeyLine = true;
                    return;
                case 'map-value-ind':
                    if (it.explicitKey) {
                        if (!it.sep) {
                            if (includesToken(it.start, 'newline')) {
                                Object.assign(it, { key: null, sep: [this.sourceToken] });
                            }
                            else {
                                const start = getFirstKeyStartProps(it.start);
                                this.stack.push({
                                    type: 'block-map',
                                    offset: this.offset,
                                    indent: this.indent,
                                    items: [{ start, key: null, sep: [this.sourceToken] }]
                                });
                            }
                        }
                        else if (it.value) {
                            map.items.push({ start: [], key: null, sep: [this.sourceToken] });
                        }
                        else if (includesToken(it.sep, 'map-value-ind')) {
                            this.stack.push({
                                type: 'block-map',
                                offset: this.offset,
                                indent: this.indent,
                                items: [{ start, key: null, sep: [this.sourceToken] }]
                            });
                        }
                        else if (isFlowToken(it.key) &&
                            !includesToken(it.sep, 'newline')) {
                            const start = getFirstKeyStartProps(it.start);
                            const key = it.key;
                            const sep = it.sep;
                            sep.push(this.sourceToken);
                            // @ts-expect-error type guard is wrong here
                            delete it.key;
                            // @ts-expect-error type guard is wrong here
                            delete it.sep;
                            this.stack.push({
                                type: 'block-map',
                                offset: this.offset,
                                indent: this.indent,
                                items: [{ start, key, sep }]
                            });
                        }
                        else if (start.length > 0) {
                            // Not actually at next item
                            it.sep = it.sep.concat(start, this.sourceToken);
                        }
                        else {
                            it.sep.push(this.sourceToken);
                        }
                    }
                    else {
                        if (!it.sep) {
                            Object.assign(it, { key: null, sep: [this.sourceToken] });
                        }
                        else if (it.value || atNextItem) {
                            map.items.push({ start, key: null, sep: [this.sourceToken] });
                        }
                        else if (includesToken(it.sep, 'map-value-ind')) {
                            this.stack.push({
                                type: 'block-map',
                                offset: this.offset,
                                indent: this.indent,
                                items: [{ start: [], key: null, sep: [this.sourceToken] }]
                            });
                        }
                        else {
                            it.sep.push(this.sourceToken);
                        }
                    }
                    this.onKeyLine = true;
                    return;
                case 'alias':
                case 'scalar':
                case 'single-quoted-scalar':
                case 'double-quoted-scalar': {
                    const fs = this.flowScalar(this.type);
                    if (atNextItem || it.value) {
                        map.items.push({ start, key: fs, sep: [] });
                        this.onKeyLine = true;
                    }
                    else if (it.sep) {
                        this.stack.push(fs);
                    }
                    else {
                        Object.assign(it, { key: fs, sep: [] });
                        this.onKeyLine = true;
                    }
                    return;
                }
                default: {
                    const bv = this.startBlockValue(map);
                    if (bv) {
                        if (bv.type === 'block-seq') {
                            if (!it.explicitKey &&
                                it.sep &&
                                !includesToken(it.sep, 'newline')) {
                                yield* this.pop({
                                    type: 'error',
                                    offset: this.offset,
                                    message: 'Unexpected block-seq-ind on same line with key',
                                    source: this.source
                                });
                                return;
                            }
                        }
                        else if (atMapIndent) {
                            map.items.push({ start });
                        }
                        this.stack.push(bv);
                        return;
                    }
                }
            }
        }
        yield* this.pop();
        yield* this.step();
    }
    *blockSequence(seq) {
        const it = seq.items[seq.items.length - 1];
        switch (this.type) {
            case 'newline':
                if (it.value) {
                    const end = 'end' in it.value ? it.value.end : undefined;
                    const last = Array.isArray(end) ? end[end.length - 1] : undefined;
                    if (last?.type === 'comment')
                        end?.push(this.sourceToken);
                    else
                        seq.items.push({ start: [this.sourceToken] });
                }
                else
                    it.start.push(this.sourceToken);
                return;
            case 'space':
            case 'comment':
                if (it.value)
                    seq.items.push({ start: [this.sourceToken] });
                else {
                    if (this.atIndentedComment(it.start, seq.indent)) {
                        const prev = seq.items[seq.items.length - 2];
                        const end = prev?.value?.end;
                        if (Array.isArray(end)) {
                            arrayPushArray(end, it.start);
                            end.push(this.sourceToken);
                            seq.items.pop();
                            return;
                        }
                    }
                    it.start.push(this.sourceToken);
                }
                return;
            case 'anchor':
            case 'tag':
                if (it.value || this.indent <= seq.indent)
                    break;
                it.start.push(this.sourceToken);
                return;
            case 'seq-item-ind':
                if (this.indent !== seq.indent)
                    break;
                if (it.value || includesToken(it.start, 'seq-item-ind'))
                    seq.items.push({ start: [this.sourceToken] });
                else
                    it.start.push(this.sourceToken);
                return;
        }
        if (this.indent > seq.indent) {
            const bv = this.startBlockValue(seq);
            if (bv) {
                this.stack.push(bv);
                return;
            }
        }
        yield* this.pop();
        yield* this.step();
    }
    *flowCollection(fc) {
        const it = fc.items[fc.items.length - 1];
        if (this.type === 'flow-error-end') {
            let top;
            do {
                yield* this.pop();
                top = this.peek(1);
            } while (top?.type === 'flow-collection');
        }
        else if (fc.end.length === 0) {
            switch (this.type) {
                case 'comma':
                case 'explicit-key-ind':
                    if (!it || it.sep)
                        fc.items.push({ start: [this.sourceToken] });
                    else
                        it.start.push(this.sourceToken);
                    return;
                case 'map-value-ind':
                    if (!it || it.value)
                        fc.items.push({ start: [], key: null, sep: [this.sourceToken] });
                    else if (it.sep)
                        it.sep.push(this.sourceToken);
                    else
                        Object.assign(it, { key: null, sep: [this.sourceToken] });
                    return;
                case 'space':
                case 'comment':
                case 'newline':
                case 'anchor':
                case 'tag':
                    if (!it || it.value)
                        fc.items.push({ start: [this.sourceToken] });
                    else if (it.sep)
                        it.sep.push(this.sourceToken);
                    else
                        it.start.push(this.sourceToken);
                    return;
                case 'alias':
                case 'scalar':
                case 'single-quoted-scalar':
                case 'double-quoted-scalar': {
                    const fs = this.flowScalar(this.type);
                    if (!it || it.value)
                        fc.items.push({ start: [], key: fs, sep: [] });
                    else if (it.sep)
                        this.stack.push(fs);
                    else
                        Object.assign(it, { key: fs, sep: [] });
                    return;
                }
                case 'flow-map-end':
                case 'flow-seq-end':
                    fc.end.push(this.sourceToken);
                    return;
            }
            const bv = this.startBlockValue(fc);
            /* istanbul ignore else should not happen */
            if (bv)
                this.stack.push(bv);
            else {
                yield* this.pop();
                yield* this.step();
            }
        }
        else {
            const parent = this.peek(2);
            if (parent.type === 'block-map' &&
                ((this.type === 'map-value-ind' && parent.indent === fc.indent) ||
                    (this.type === 'newline' &&
                        !parent.items[parent.items.length - 1].sep))) {
                yield* this.pop();
                yield* this.step();
            }
            else if (this.type === 'map-value-ind' &&
                parent.type !== 'flow-collection') {
                const prev = getPrevProps(parent);
                const start = getFirstKeyStartProps(prev);
                fixFlowSeqItems(fc);
                const sep = fc.end.splice(1, fc.end.length);
                sep.push(this.sourceToken);
                const map = {
                    type: 'block-map',
                    offset: fc.offset,
                    indent: fc.indent,
                    items: [{ start, key: fc, sep }]
                };
                this.onKeyLine = true;
                this.stack[this.stack.length - 1] = map;
            }
            else {
                yield* this.lineEnd(fc);
            }
        }
    }
    flowScalar(type) {
        if (this.onNewLine) {
            let nl = this.source.indexOf('\n') + 1;
            while (nl !== 0) {
                this.onNewLine(this.offset + nl);
                nl = this.source.indexOf('\n', nl) + 1;
            }
        }
        return {
            type,
            offset: this.offset,
            indent: this.indent,
            source: this.source
        };
    }
    startBlockValue(parent) {
        switch (this.type) {
            case 'alias':
            case 'scalar':
            case 'single-quoted-scalar':
            case 'double-quoted-scalar':
                return this.flowScalar(this.type);
            case 'block-scalar-header':
                return {
                    type: 'block-scalar',
                    offset: this.offset,
                    indent: this.indent,
                    props: [this.sourceToken],
                    source: ''
                };
            case 'flow-map-start':
            case 'flow-seq-start':
                return {
                    type: 'flow-collection',
                    offset: this.offset,
                    indent: this.indent,
                    start: this.sourceToken,
                    items: [],
                    end: []
                };
            case 'seq-item-ind':
                return {
                    type: 'block-seq',
                    offset: this.offset,
                    indent: this.indent,
                    items: [{ start: [this.sourceToken] }]
                };
            case 'explicit-key-ind': {
                this.onKeyLine = true;
                const prev = getPrevProps(parent);
                const start = getFirstKeyStartProps(prev);
                start.push(this.sourceToken);
                return {
                    type: 'block-map',
                    offset: this.offset,
                    indent: this.indent,
                    items: [{ start, explicitKey: true }]
                };
            }
            case 'map-value-ind': {
                this.onKeyLine = true;
                const prev = getPrevProps(parent);
                const start = getFirstKeyStartProps(prev);
                return {
                    type: 'block-map',
                    offset: this.offset,
                    indent: this.indent,
                    items: [{ start, key: null, sep: [this.sourceToken] }]
                };
            }
        }
        return null;
    }
    atIndentedComment(start, indent) {
        if (this.type !== 'comment')
            return false;
        if (this.indent <= indent)
            return false;
        return start.every(st => st.type === 'newline' || st.type === 'space');
    }
    *documentEnd(docEnd) {
        if (this.type !== 'doc-mode') {
            if (docEnd.end)
                docEnd.end.push(this.sourceToken);
            else
                docEnd.end = [this.sourceToken];
            if (this.type === 'newline')
                yield* this.pop();
        }
    }
    *lineEnd(token) {
        switch (this.type) {
            case 'comma':
            case 'doc-start':
            case 'doc-end':
            case 'flow-seq-end':
            case 'flow-map-end':
            case 'map-value-ind':
                yield* this.pop();
                yield* this.step();
                break;
            case 'newline':
                this.onKeyLine = false;
            // fallthrough
            case 'space':
            case 'comment':
            default:
                // all other values are errors
                if (token.end)
                    token.end.push(this.sourceToken);
                else
                    token.end = [this.sourceToken];
                if (this.type === 'newline')
                    yield* this.pop();
        }
    }
}

function parseOptions(options) {
    const prettyErrors = options.prettyErrors !== false;
    const lineCounter = options.lineCounter || (prettyErrors && new LineCounter()) || null;
    return { lineCounter, prettyErrors };
}
/** Parse an input string into a single YAML.Document */
function parseDocument(source, options = {}) {
    const { lineCounter, prettyErrors } = parseOptions(options);
    const parser = new Parser(lineCounter?.addNewLine);
    const composer = new Composer(options);
    // `doc` is always set by compose.end(true) at the very latest
    let doc = null;
    for (const _doc of composer.compose(parser.parse(source), true, source.length)) {
        if (!doc)
            doc = _doc;
        else if (doc.options.logLevel !== 'silent') {
            doc.errors.push(new YAMLParseError(_doc.range.slice(0, 2), 'MULTIPLE_DOCS', 'Source contains multiple documents; please use YAML.parseAllDocuments()'));
            break;
        }
    }
    if (prettyErrors && lineCounter) {
        doc.errors.forEach(prettifyError(source, lineCounter));
        doc.warnings.forEach(prettifyError(source, lineCounter));
    }
    return doc;
}
function parse(src, reviver, options) {
    let _reviver = undefined;
    const doc = parseDocument(src, options);
    if (!doc)
        return null;
    doc.warnings.forEach(warning => warn(doc.options.logLevel, warning));
    if (doc.errors.length > 0) {
        if (doc.options.logLevel !== 'silent')
            throw doc.errors[0];
        else
            doc.errors = [];
    }
    return doc.toJS(Object.assign({ reviver: _reviver }, options));
}

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/;
/** Frontmatter keys shown as badges rather than key/value rows. */
const BADGE_KEYS = ['provenance', 'class', 'screen_type', 'software', 'software_version'];
/** Frontmatter keys whose value is the document title. */
const TITLE_KEYS = ['screen_title', 'title', 'name'];
/** Object-table columns that hold prose and get a wider track. */
const WIDE_COLUMNS = new Set(['action', 'description', 'notes', 'summary']);
const isScalar = (v) => typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean';
const isScalarArray = (v) => Array.isArray(v) && v.every(isScalar);
const isRecordArray = (v) => Array.isArray(v) && v.length > 0 && v.every((i) => typeof i === 'object' && i !== null && !Array.isArray(i));
/**
 * Token-driven Markdown viewer — the readable surface for corpus files,
 * docs, and README-style content. Wraps `marked` (GFM) for the body and
 * `yaml` for frontmatter. YAML frontmatter renders as a structured spec
 * card: title, badge row, frontmatter image, key/value grid, and any
 * array-of-objects field (e.g. a corpus `controls:` inventory) as a
 * tek-data-table.
 *
 * Figma: none yet — new component; typography binds to the shipped ramps
 * (Archivo headings, Geist body, Geist Mono code) and colors to existing
 * semantic tokens. A dedicated color/markdown/* token family is flagged
 * for the design-additions audit; until it lands, the nearest existing
 * semantic tokens are used (table/text, table/divider, canvas, text-link).
 *
 * TRUSTED CONTENT ONLY: the markdown body is rendered without a
 * sanitizer. Point this at repo-owned files (corpus/, docs/), never at
 * user-supplied input.
 *
 * Usage:
 * ```html
 * <tek-markdown src="corpus/sources/2450-ec/index.md"></tek-markdown>
 * <tek-markdown content="# Inline markdown"></tek-markdown>
 * ```
 *
 * Relative `.md` links navigate in place (cancelable
 * `tek-markdown-navigate` event, then `tek-markdown-load` once fetched);
 * relative images resolve against `src`; absolute http(s) links open in a
 * new tab. `back()` walks the internal navigation history.
 *
 * @attr {string} [src] - URL of a markdown file to fetch and render.
 * @attr {string} [content] - Raw markdown to render (takes precedence over src).
 * @attr {'card'|'hidden'} [frontmatter="card"] - Render YAML frontmatter as a spec card, or hide it.
 *
 * @fires tek-markdown-navigate - Cancelable. detail: { href, url } — an internal relative link was clicked.
 * @fires tek-markdown-load - detail: { url } — a document fetched via src finished loading.
 *
 * @cssprop --tek-markdown-max-width - Content column width (default spacing/c05, 768px).
 */
class TekMarkdown extends i$1 {
    constructor() {
        super(...arguments);
        this.frontmatter = 'card';
        this._doc = null;
        this._loading = false;
        this._error = '';
        this._history = [];
        this._fetchSeq = 0;
    }
    /** True when back() has somewhere to go. */
    get canGoBack() {
        return this._history.length > 0;
    }
    /** Navigate to the previously viewed document, if any. */
    back() {
        const prev = this._history.pop();
        if (prev === undefined)
            return false;
        this.src = prev;
        return true;
    }
    willUpdate(changed) {
        if (changed.has('content') && this.content != null) {
            this._doc = this._parse(this.content);
            this._error = '';
        }
    }
    updated(changed) {
        if (changed.has('src') && this.src && this.content == null) {
            void this._fetch(this.src);
        }
        this._fixupRendered();
    }
    async _fetch(url) {
        const seq = ++this._fetchSeq;
        this._loading = true;
        try {
            const res = await fetch(url);
            if (!res.ok)
                throw new Error(`${res.status} ${res.statusText}`);
            const text = await res.text();
            if (seq !== this._fetchSeq)
                return;
            this._doc = this._parse(text);
            this._error = '';
            this.dispatchEvent(new CustomEvent('tek-markdown-load', { detail: { url }, bubbles: true, composed: true }));
        }
        catch (err) {
            if (seq !== this._fetchSeq)
                return;
            this._error = err instanceof Error ? err.message : String(err);
        }
        finally {
            if (seq === this._fetchSeq)
                this._loading = false;
        }
    }
    _parse(text) {
        let meta = null;
        let body = text;
        const m = FRONTMATTER_RE.exec(text);
        if (m) {
            try {
                const parsed = parse(m[1]);
                if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
                    meta = parsed;
                    body = text.slice(m[0].length);
                }
            }
            catch {
                // Not valid YAML — treat the whole file as markdown body.
            }
        }
        const bodyHtml = g.parse(body, { gfm: true, async: false });
        return { meta, bodyHtml };
    }
    _isRelative(url) {
        return !/^([a-z][a-z0-9+.-]*:|\/|#)/i.test(url);
    }
    _resolve(rel) {
        return this.src ? new URL(rel, new URL(this.src, document.baseURI)).href : rel;
    }
    /** Resolve relative image srcs against `src`; external links open in a new tab. */
    _fixupRendered() {
        const root = this.renderRoot.querySelector('.body');
        if (!root)
            return;
        root.querySelectorAll('img').forEach((img) => {
            const raw = img.getAttribute('src') ?? '';
            if (this._isRelative(raw))
                img.src = this._resolve(raw);
        });
        root.querySelectorAll('a').forEach((a) => {
            const raw = a.getAttribute('href') ?? '';
            if (/^https?:/i.test(raw)) {
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
            }
        });
    }
    _onBodyClick(e) {
        const anchor = e
            .composedPath()
            .find((el) => el instanceof HTMLAnchorElement);
        if (!anchor)
            return;
        const raw = anchor.getAttribute('href') ?? '';
        if (!this._isRelative(raw))
            return;
        e.preventDefault();
        const url = this._resolve(raw);
        const proceed = this.dispatchEvent(new CustomEvent('tek-markdown-navigate', {
            detail: { href: raw, url },
            bubbles: true,
            composed: true,
            cancelable: true,
        }));
        if (!proceed)
            return;
        if (/\.md$/i.test(new URL(url).pathname) && this.src) {
            this._history.push(this.src);
            this.src = url;
        }
        else {
            window.open(url, '_blank', 'noopener');
        }
    }
    _badgeType(key, value) {
        if (key === 'provenance')
            return value === 'observed' ? 'success' : 'warning';
        if (key === 'class' || key === 'screen_type')
            return 'blue';
        return 'neutral';
    }
    _renderMeta(meta) {
        const titleKey = TITLE_KEYS.find((k) => typeof meta[k] === 'string');
        const title = titleKey ? meta[titleKey] : null;
        const badges = BADGE_KEYS.filter((k) => isScalar(meta[k])).map((k) => ({
            key: k,
            label: String(meta[k]),
        }));
        const image = typeof meta['image'] === 'string' ? this._resolve(meta['image']) : null;
        const used = new Set([...(titleKey ? [titleKey] : []), ...badges.map((b) => b.key), 'image']);
        const rows = Object.entries(meta).filter(([k, v]) => !used.has(k) && (isScalar(v) || isScalarArray(v)));
        const tables = Object.entries(meta).filter((e) => isRecordArray(e[1]));
        return b$1 `
      <header class="meta" part="frontmatter">
        ${title ? b$1 `<h1 class="meta-title">${title}</h1>` : A$1}
        ${badges.length
            ? b$1 `<div class="meta-badges">
              ${badges.map((b) => b$1 `<tek-badge type=${this._badgeType(b.key, b.label)}>${b.label}</tek-badge>`)}
            </div>`
            : A$1}
        ${image ? b$1 `<img class="meta-image" src=${image} alt=${title ?? 'document image'} />` : A$1}
        ${rows.length
            ? b$1 `<dl class="meta-grid">
              ${rows.map(([k, v]) => b$1 `
                  <dt>${k}</dt>
                  <dd>
                    ${isScalarArray(v) && v.length
                ? v.map((item) => b$1 `<tek-badge type="neutral">${String(item)}</tek-badge>`)
                : String(Array.isArray(v) ? '—' : v)}
                  </dd>
                `)}
            </dl>`
            : A$1}
        ${tables.map(([k, records]) => this._renderObjectTable(k, records))}
      </header>
    `;
    }
    _renderObjectTable(key, records) {
        const cols = [];
        records.forEach((r) => {
            Object.keys(r).forEach((k) => {
                if (!cols.includes(k))
                    cols.push(k);
            });
        });
        const columns = cols.map((c) => (WIDE_COLUMNS.has(c) ? '2.5fr' : '1fr')).join(' ');
        const cell = (v) => (v == null ? '' : isScalar(v) ? String(v) : JSON.stringify(v));
        return b$1 `
      <section class="meta-table">
        <h2>${key}</h2>
        <tek-data-table style="--tek-table-columns: ${columns}">
          <tek-data-table-head>
            <tek-data-table-row>
              ${cols.map((c) => b$1 `<tek-data-table-cell>${c}</tek-data-table-cell>`)}
            </tek-data-table-row>
          </tek-data-table-head>
          <tek-data-table-body>
            ${records.map((r) => b$1 `
                <tek-data-table-row>
                  ${cols.map((c) => b$1 `<tek-data-table-cell title=${cell(r[c])}>${cell(r[c])}</tek-data-table-cell>`)}
                </tek-data-table-row>
              `)}
          </tek-data-table-body>
        </tek-data-table>
      </section>
    `;
    }
    render() {
        return b$1 `
      <article part="document">
        ${this._error
            ? b$1 `<div class="error" role="alert">Couldn't load ${this.src}: ${this._error}</div>`
            : A$1}
        ${this._loading && !this._doc
            ? b$1 `<div class="loading"><tek-spinner></tek-spinner></div>`
            : A$1}
        ${this._doc?.meta && this.frontmatter !== 'hidden' ? this._renderMeta(this._doc.meta) : A$1}
        <div class="body" @click=${this._onBodyClick}>${o(this._doc?.bodyHtml ?? '')}</div>
      </article>
    `;
    }
}
TekMarkdown.styles = i$4 `
    :host {
      display: block;
    }
    article {
      max-width: var(--tek-markdown-max-width, var(--tek-spacing-c05, 768px));
      margin: 0 auto;
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-lg, 14px);
      line-height: var(--tek-fonts-text-line-height-lg, 20px);
      font-weight: 400;
      color: var(--tek-color-table-text-default, #ffffff);
    }

    /* ── frontmatter spec card ─────────────────────────────────────── */
    .meta {
      display: flex;
      flex-direction: column;
      gap: var(--tek-spacing-s07, 12px);
      padding: var(--tek-spacing-s11, 24px);
      margin: 0 0 var(--tek-spacing-s13, 32px);
      background: var(--tek-color-canvas-background-raised, #252525);
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-table-divider-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-05, 11px);
    }
    .meta-title {
      margin: 0;
      font-family: var(--tek-fonts-family-archivo, system-ui, sans-serif);
      font-weight: 600;
      font-size: var(--tek-fonts-heading-size-sm, 20px);
      line-height: var(--tek-fonts-heading-line-height-sm, 26px);
    }
    .meta-badges {
      display: flex;
      flex-wrap: wrap;
      gap: var(--tek-spacing-s03, 4px);
    }
    .meta-image {
      max-width: 100%;
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-table-divider-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-03, 5px);
    }
    .meta-grid {
      display: grid;
      grid-template-columns: max-content 1fr;
      gap: var(--tek-spacing-s03, 4px) var(--tek-spacing-s09, 16px);
      margin: 0;
      font-size: var(--tek-fonts-text-size-md, 13px);
      line-height: var(--tek-fonts-text-line-height-md, 16px);
    }
    .meta-grid dt {
      font-family: var(--tek-fonts-family-mono, monospace);
      font-size: var(--tek-fonts-text-size-sm, 12px);
      color: var(--tek-color-table-text-muted, #979797);
    }
    .meta-grid dd {
      display: flex;
      flex-wrap: wrap;
      gap: var(--tek-spacing-s03, 4px);
      margin: 0;
      min-width: 0;
      overflow-wrap: anywhere;
    }
    .meta-table h2 {
      margin: 0 0 var(--tek-spacing-s05, 8px);
      font-family: var(--tek-fonts-family-archivo, system-ui, sans-serif);
      font-weight: 600;
      font-size: var(--tek-fonts-heading-size-2xs, 14px);
      line-height: var(--tek-fonts-heading-line-height-2xs, 22px);
    }

    /* ── status ────────────────────────────────────────────────────── */
    .loading {
      display: flex;
      justify-content: center;
      padding: var(--tek-spacing-s13, 32px);
    }
    .error {
      padding: var(--tek-spacing-s07, 12px);
      margin: 0 0 var(--tek-spacing-s09, 16px);
      color: var(--tek-color-statusbar-text-error, #e74848);
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-statusbar-text-error, #e74848);
      border-radius: var(--tek-borders-radius-03, 5px);
      font-size: var(--tek-fonts-text-size-md, 13px);
      line-height: var(--tek-fonts-text-line-height-md, 16px);
    }

    /* ── markdown body ─────────────────────────────────────────────── */
    .body h1,
    .body h2,
    .body h3,
    .body h4,
    .body h5,
    .body h6 {
      font-family: var(--tek-fonts-family-archivo, system-ui, sans-serif);
      font-weight: 600;
      color: inherit;
    }
    .body h1 {
      margin: 0 0 var(--tek-spacing-s09, 16px);
      font-size: var(--tek-fonts-heading-size-md, 24px);
      line-height: var(--tek-fonts-heading-line-height-md, 32px);
    }
    .body h2 {
      margin: var(--tek-spacing-s13, 32px) 0 var(--tek-spacing-s05, 8px);
      font-size: var(--tek-fonts-heading-size-sm, 20px);
      line-height: var(--tek-fonts-heading-line-height-sm, 26px);
    }
    .body h3 {
      margin: var(--tek-spacing-s11, 24px) 0 var(--tek-spacing-s05, 8px);
      font-size: var(--tek-fonts-heading-size-xs, 16px);
      line-height: var(--tek-fonts-heading-line-height-xs, 24px);
    }
    .body h4,
    .body h5,
    .body h6 {
      margin: var(--tek-spacing-s09, 16px) 0 var(--tek-spacing-s03, 4px);
      font-size: var(--tek-fonts-heading-size-2xs, 14px);
      line-height: var(--tek-fonts-heading-line-height-2xs, 22px);
    }
    .body p {
      margin: 0 0 var(--tek-spacing-s07, 12px);
    }
    .body a {
      color: var(--tek-color-text-link-default, #33baea);
      text-decoration: none;
      transition: opacity 0.1s;
    }
    .body a:hover {
      opacity: 0.8;
      text-decoration: underline;
      text-underline-offset: 2px;
      text-decoration-thickness: 0.5px;
    }
    .body strong {
      font-weight: 600;
    }
    .body ul,
    .body ol {
      margin: 0 0 var(--tek-spacing-s07, 12px);
      padding-left: var(--tek-spacing-s11, 24px);
    }
    .body li {
      margin-bottom: var(--tek-spacing-s02, 2px);
    }
    .body code {
      font-family: var(--tek-fonts-family-mono, monospace);
      font-size: var(--tek-fonts-text-size-sm, 12px);
      background: var(--tek-color-canvas-background-raised, #252525);
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-table-divider-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-02, 3px);
      padding: var(--tek-spacing-s01, 1px) var(--tek-spacing-s03, 4px);
    }
    .body pre {
      margin: 0 0 var(--tek-spacing-s09, 16px);
      padding: var(--tek-spacing-s09, 16px);
      background: var(--tek-color-canvas-background-raised, #252525);
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-table-divider-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-05, 11px);
      overflow-x: auto;
      line-height: var(--tek-fonts-text-line-height-lg, 20px);
    }
    .body pre code {
      background: none;
      border: none;
      padding: 0;
    }
    .body blockquote {
      margin: 0 0 var(--tek-spacing-s09, 16px);
      padding: var(--tek-spacing-s03, 4px) 0 var(--tek-spacing-s03, 4px) var(--tek-spacing-s09, 16px);
      border-left: var(--tek-borders-width-05, 3px) solid var(--tek-color-table-divider-default, #7b7b7b);
      color: var(--tek-color-table-text-muted, #979797);
    }
    .body table {
      width: 100%;
      margin: 0 0 var(--tek-spacing-s09, 16px);
      border-collapse: collapse;
      font-size: var(--tek-fonts-text-size-md, 13px);
      line-height: var(--tek-fonts-text-line-height-md, 16px);
    }
    .body th {
      padding: var(--tek-spacing-s06, 10px) var(--tek-spacing-s07, 12px);
      background: var(--tek-color-table-header-background, #252525);
      color: var(--tek-color-table-header-text, #ffffff);
      font-size: var(--tek-fonts-text-size-xs, 10px);
      line-height: var(--tek-fonts-text-line-height-xs, 12px);
      font-weight: 400;
      text-align: left;
      border-bottom: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-table-divider-default, #7b7b7b);
    }
    .body td {
      padding: var(--tek-spacing-s07, 12px);
      border-bottom: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-table-divider-default, #7b7b7b);
      vertical-align: top;
    }
    .body hr {
      margin: var(--tek-spacing-s13, 32px) 0;
      border: none;
      border-top: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-table-divider-default, #7b7b7b);
    }
    .body img {
      max-width: 100%;
      border-radius: var(--tek-borders-radius-03, 5px);
    }
    .body > :last-child {
      margin-bottom: 0;
    }
  `;
__decorate([
    n()
], TekMarkdown.prototype, "src", void 0);
__decorate([
    n()
], TekMarkdown.prototype, "content", void 0);
__decorate([
    n({ reflect: true })
], TekMarkdown.prototype, "frontmatter", void 0);
__decorate([
    r$1()
], TekMarkdown.prototype, "_doc", void 0);
__decorate([
    r$1()
], TekMarkdown.prototype, "_loading", void 0);
__decorate([
    r$1()
], TekMarkdown.prototype, "_error", void 0);
customElements.define('tek-markdown', TekMarkdown);

export { TekBadge, TekBaseSelector, TekButton, TekCharacterCount, TekCheckbox, TekDataTable, TekDataTableBody, TekDataTableCell, TekDataTableHead, TekDataTableRow, TekDropdown, TekDropdownItem, TekFooter, TekGrid, TekGroupBox, TekInput, TekLabel, TekMarkdown, TekModal, TekNavigationPanel, TekPage, TekProgress, TekRadio, TekRow, TekSelector, TekSelectorLabel, TekSpinner, TekStack, TekStatusBar, TekTab, TekTabs, TekTextLink, TekToggle, TekTooltip };
//# sourceMappingURL=tek-ui.js.map
