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
const t$2=globalThis,e$5=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$5=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$5&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$5.set(s,t));}return t}toString(){return this.cssText}};const r$5=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),i$4=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$5)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$5?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$5(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$3,defineProperty:e$4,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$4,getOwnPropertySymbols:o$4,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$2=c$1?c$1.emptyScript:"",p$2=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$2:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$3(t,s),b$1={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$4(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$4(t),...o$4(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$2?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,i$2=t=>t,s$1=t$1.trustedTypes,e$3=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$3=`lit$${Math.random().toFixed(9).slice(2)}$`,n$1="?"+o$3,r$3=`<${n$1}>`,l$1=document,c=()=>l$1.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m$1=/>/g,p$1=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l$1.createTreeWalker(l$1,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$3?e$3.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m$1:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p$1):void 0!==u[3]&&(c=p$1):c===p$1?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p$1:'"'===u[3]?$:g):c===$||c===g?c=p$1:c===_||c===m$1?c=v:(c=p$1,n=void 0);const x=c===p$1&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r$3:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$3+x):s+o$3+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$3),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$3)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$3),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n$1)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$3,t+1));)d.push({type:7,index:l}),t+=o$3.length-1;}l++;}}static createElement(t,i){const s=l$1.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l$1).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l$1,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l$1.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$2(t).nextSibling;i$2(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t$1.litHtmlPolyfillSupport;B?.(S,k),(t$1.litHtmlVersions??=[]).push("3.3.3");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;let i$1 = class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}};i$1._$litElement$=true,i$1["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i$1});const o$2=s.litElementPolyfillSupport;o$2?.({LitElement:i$1});(s.litElementVersions??=[]).push("4.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$1={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1},r$2=(t=o$1,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=true),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t,true,r);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t,true,r);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r$2(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

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
const e$2=(e,t,c)=>(c.configurable=true,c.enumerable=true,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,c),c);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$1(e,r){return (n,s,i)=>{const o=t=>t.renderRoot?.querySelector(e)??null;return e$2(n,s,{get(){return o(this)}})}}

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
        return b `<slot></slot>`;
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
        return b `<slot></slot>`;
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
        return b `<slot></slot>`;
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
 * tek-page
 *
 * Figma: DS-v2 → v2.02 → Page (node 8378:350)
 * ADR-0002: layout primitives — always start with layout.
 *
 * Page frame primitive. Encodes the responsive `.wrap` contract from the
 * sign-in reference pages as container queries — the code analog of the
 * Figma Breakpoint variants (Mobile / SM / XL):
 *
 *   Mobile          padding s17 / s13 / s11 (top / sides / bottom), top-aligned
 *   ≥ 640px  (c04)  side padding s19
 *   ≥ 1280px (c07)  padding s19 all round, content vertically centered
 *   All             section rhythm gap s17
 *
 * Layout-only: the canvas background stays on the page/body theme layer
 * (the Figma component shows color/canvas/background/default as context;
 * code keeps the host transparent so page-level backdrops show through).
 *
 * Tokens:
 *   --tek-spacing-s11, --tek-spacing-s13, --tek-spacing-s17, --tek-spacing-s19
 *
 * Usage:
 *   <tek-page>
 *     <header>…</header>
 *     <tek-modal>…</tek-modal>
 *   </tek-page>
 */
class TekPage extends i$1 {
    render() {
        return b `<div class="wrap" part="wrap"><slot></slot></div><slot name="footer"></slot>`;
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

class TekOption extends i$1 {
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
        return b `<slot></slot>`;
    }
}
TekOption.styles = i$4 `
    :host {
      display: flex;
      align-items: center;
      gap: var(--tek-spacing-s03, 4px);
      padding: var(--tek-spacing-s04, 6px) var(--tek-spacing-s06, 10px);
      border-radius: var(--tek-borders-radius-none, 0);
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-md, 13px);
      line-height: var(--tek-fonts-text-line-height-md, 16px);
      color: var(--tek-color-menu-text-default, #cccccc);
      cursor: pointer;
      user-select: none;
      box-sizing: border-box;
    }

    :host(:hover:not([disabled])),
    :host([current]:not([disabled])) {
      background: var(--tek-color-menu-background-hover, #333333);
    }

    :host([selected]) {
      background: var(--tek-color-menu-background-selected, #454545);
      color: var(--tek-color-menu-text-selected, #ffffff);
    }

    :host([disabled]) {
      color: var(--tek-color-menu-text-disabled, #454545);
      cursor: not-allowed;
    }
  `;
__decorate([
    n()
], TekOption.prototype, "value", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TekOption.prototype, "disabled", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TekOption.prototype, "selected", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TekOption.prototype, "current", void 0);
customElements.define('tek-option', TekOption);

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
  if (isNode(node)) {
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
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
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

class TekSelect extends i$1 {
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
        return Array.from(this.querySelectorAll('tek-option'));
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
        const option = e.target.closest?.('tek-option');
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
        return b `
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
      ${this.name ? b `<input type="hidden" name=${this.name} .value=${this.value}>` : A}
    `;
    }
}
TekSelect.styles = i$4 `
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
      background: var(--tek-color-select-background-default, #252525);
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-select-border-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-03, 5px);
      cursor: pointer;
      outline: none;
    }

    .trough:focus-visible,
    :host([open]) .trough {
      border-color: var(--tek-color-select-border-focus, #ffffff);
    }

    :host([error]) .trough {
      border-color: var(--tek-color-select-border-error, #e74848);
    }

    :host([disabled]) .trough {
      border-color: var(--tek-color-select-border-disabled, #454545);
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
      color: var(--tek-color-select-text-default, #979797);
    }

    :host([data-filled]) .display { color: var(--tek-color-select-text-filled, #cccccc); }
    :host([error]) .display { color: var(--tek-color-select-text-error, #ffffff); }
    :host([disabled]) .display { color: var(--tek-color-select-text-disabled, #454545); }

    .caret {
      flex-shrink: 0;
      display: flex;
      color: var(--tek-color-icons-default, #ffffff);
      transition: transform 120ms ease;
    }
    :host([open]) .caret { transform: rotate(180deg); }
    :host([disabled]) .caret { color: var(--tek-color-select-text-disabled, #454545); }

    .menu {
      position: absolute;
      z-index: 10;
      display: none;
      flex-direction: column;
      gap: 0;
      padding: var(--tek-spacing-s02, 2px);
      box-sizing: border-box;
      background: var(--tek-color-menu-background-default, #252525);
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-menu-border-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-03, 5px);
      box-shadow: 0 4px 12px var(--tek-color-menu-shadow-default, rgba(0, 0, 0, 0.2));
      overflow-y: auto;
    }
    :host([open]) .menu { display: flex; }
  `;
__decorate([
    n()
], TekSelect.prototype, "value", void 0);
__decorate([
    n()
], TekSelect.prototype, "placeholder", void 0);
__decorate([
    n()
], TekSelect.prototype, "name", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TekSelect.prototype, "disabled", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TekSelect.prototype, "error", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], TekSelect.prototype, "open", void 0);
__decorate([
    r$1()
], TekSelect.prototype, "displayLabel", void 0);
__decorate([
    e$1('.trough')
], TekSelect.prototype, "trough", void 0);
__decorate([
    e$1('.menu')
], TekSelect.prototype, "menu", void 0);
customElements.define('tek-select', TekSelect);

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
        return b `<slot></slot>`;
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
      font-size: var(--tek-fonts-text-size-lg, 14px);
      line-height: var(--tek-fonts-text-line-height-lg, 20px);
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
        return b `<slot @slotchange=${this.syncTabs}></slot>`;
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
        return b `<div class="box" part="box">${this.checked
            ? b `<svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1 4L4 7.5L10 1" stroke="var(--tek-color-icons-default,#ffffff)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>`
            : A}</div>`;
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
        return b `<div class="dot" part="dot"></div>`;
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
        return b `<div class="thumb" part="thumb"></div>`;
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

class TekSelectorLabel extends i$1 {
    constructor() {
        super(...arguments);
        this.checked = false;
        this.error = false;
        this.disabled = false;
    }
    render() {
        return b `<div class="text" part="text"><slot></slot></div>`;
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
 */const o=o=>o??A;

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
        const name = o(this.name ?? undefined);
        switch (this.type) {
            case 'radio':
                return b `<tek-radio ?checked=${this.checked} ?error=${this.error} ?disabled=${this.disabled} name=${name}></tek-radio>`;
            case 'toggle':
                return b `<tek-toggle ?checked=${this.checked} ?error=${this.error} ?disabled=${this.disabled} name=${name}></tek-toggle>`;
            default:
                return b `<tek-checkbox ?checked=${this.checked} ?error=${this.error} ?disabled=${this.disabled} name=${name}></tek-checkbox>`;
        }
    }
    render() {
        if (this.label !== null) {
            // Self-contained: render the control + label entirely in shadow DOM
            return b `<div class="inner" part="inner">
        ${this._controlTpl()}<tek-selector-label ?checked=${this.checked} ?error=${this.error} ?disabled=${this.disabled}>${this.label}</tek-selector-label>
      </div>`;
        }
        // Slot mode: consumer slots in tek-checkbox/radio/toggle + tek-selector-label
        return b `<div class="inner" part="inner"><slot></slot></div>`;
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
const t={ATTRIBUTE:1,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},e=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r=o=>void 0===o.strings,m={},p=(o,t=m)=>o._$AH=t;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=e(class extends i{constructor(r$1){if(super(r$1),r$1.type!==t.PROPERTY&&r$1.type!==t.ATTRIBUTE&&r$1.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!r(r$1))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(i,[t$1]){if(t$1===E||t$1===A)return t$1;const o=i.element,l=i.name;if(i.type===t.PROPERTY){if(t$1===o[l])return E}else if(i.type===t.BOOLEAN_ATTRIBUTE){if(!!t$1===o.hasAttribute(l))return E}else if(i.type===t.ATTRIBUTE&&o.getAttribute(l)===t$1+"")return E;return p(i),t$1}});

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
            ? b `<textarea rows=${rows} placeholder=${this.placeholder} ?disabled=${isDisabled}
               .value=${l(this.value)}
               @focus=${this._onFocus} @blur=${this._onBlur} @input=${this._onInput}></textarea>`
            : b `<input type=${this.type} placeholder=${this.placeholder} ?disabled=${isDisabled}
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
        return b `<span class="label" part="label"><slot></slot></span>`;
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
        return b `
      <div class="text-row">
        <div class="label-text" part="text"><slot></slot></div>
        ${this.optional ? b `<span class="optional">(optional)</span>` : A}
        ${this.charCount ? b `<span class="char-count">${this.charCount}</span>` : A}
      </div>
      ${this.helperText ? b `<div class="helper${this.helperState === 'error' ? ' helper--error' : ''}" part="helper">${this.helperText}</div>` : A}
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

class TekTextLink extends i$1 {
    constructor() {
        super(...arguments);
        this.href = '#';
        this.target = '_self';
    }
    render() {
        return b `<a href=${this.href} target=${this.target} part="link"><slot></slot></a>`;
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

class TekCharacterCount extends i$1 {
    constructor() {
        super(...arguments);
        this.current = 0;
        this.max = 0;
        this.state = 'default';
    }
    render() {
        const text = this.max > 0 ? `${this.current}/${this.max}` : `${this.current}`;
        return b `<span class="count" part="count" aria-live="polite">${text}</span>`;
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
 * tek-modal
 * Figma: DS-v2 → Modal (node 7003:2158)
 * Dimensions: max-width 360px, padding 32px, gap 14px, radius 11px, border 0.25px
 * Shadow: 0px 2px 6px 0px rgba(0,0,0,0.2)
 *
 * Tokens:
 *   --tek-color-modal-background-default
 *   --tek-color-modal-border-default
 *   --tek-color-modal-text-default
 *
 * Slots:
 *   (default) header  — modal title
 *   input-blocks      — form fields
 *   action-blocks     — buttons
 *
 * Usage:
 *   <tek-modal>
 *     <span slot="header">Sign In</span>
 *     <div slot="input-blocks">...</div>
 *     <div slot="action-blocks">
 *       <tek-button>Sign In</tek-button>
 *     </div>
 *   </tek-modal>
 */
class TekModal extends i$1 {
    render() {
        return b `
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
 * tek-footer
 * Figma: DS-v2 → Footer (node 7003:2168)
 * Dimensions: h 36px, px 16px, py 12px
 * Font: Geist Regular — var(--tek-fonts-family-geist)
 *
 * Tokens:
 *   --tek-color-footer-background-default
 *   --tek-color-footer-text-default
 *
 * Slots:
 *   left      — left-aligned content (e.g. theme toggle)
 *   (default) — right-aligned content (e.g. copyright)
 *
 * Usage:
 *   <tek-footer>©2026 Tektronix. All Rights Reserved.</tek-footer>
 *   <tek-footer>
 *     <div slot="left"><tek-toggle id="theme-toggle"></tek-toggle></div>
 *     ©2026 Tektronix. All Rights Reserved.
 *   </tek-footer>
 */
class TekFooter extends i$1 {
    render() {
        return b `
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

export { TekBaseSelector, TekButton, TekCharacterCount, TekCheckbox, TekFooter, TekGrid, TekInput, TekLabel, TekModal, TekOption, TekPage, TekRadio, TekRow, TekSelect, TekSelector, TekSelectorLabel, TekStack, TekTab, TekTabs, TekTextLink, TekToggle };
//# sourceMappingURL=tek-ui.js.map
