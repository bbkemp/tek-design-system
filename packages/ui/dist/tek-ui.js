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
const t$2=globalThis,e$3=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$5=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$3&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$5.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),i$4=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$3)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$3?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$3,defineProperty:e$2,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$3,getOwnPropertySymbols:o$4,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$2=c$1?c$1.emptyScript:"",p$2=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$2:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$3(t,s),b$1={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$2(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$3(t),...o$4(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$2?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,i$2=t=>t,s$1=t$1.trustedTypes,e$1=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$3=`lit$${Math.random().toFixed(9).slice(2)}$`,n$1="?"+o$3,r$2=`<${n$1}>`,l$1=document,c=()=>l$1.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m$1=/>/g,p$1=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l$1.createTreeWalker(l$1,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$1?e$1.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m$1:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p$1):void 0!==u[3]&&(c=p$1):c===p$1?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p$1:'"'===u[3]?$:g):c===$||c===g?c=p$1:c===_||c===m$1?c=v:(c=p$1,n=void 0);const x=c===p$1&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r$2:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$3+x):s+o$3+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$3),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$3)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$3),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n$1)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$3,t+1));)d.push({type:7,index:l}),t+=o$3.length-1;}l++;}}static createElement(t,i){const s=l$1.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l$1).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l$1,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l$1.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$2(t).nextSibling;i$2(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t$1.litHtmlPolyfillSupport;B?.(S,k),(t$1.litHtmlVersions??=[]).push("3.3.3");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;let i$1 = class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}};i$1._$litElement$=true,i$1["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i$1});const o$2=s.litElementPolyfillSupport;o$2?.({LitElement:i$1});(s.litElementVersions??=[]).push("4.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$1={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1},r$1=(t=o$1,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=true),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t,true,r);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t,true,r);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r$1(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

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

export { TekBaseSelector, TekButton, TekCharacterCount, TekCheckbox, TekFooter, TekInput, TekLabel, TekModal, TekRadio, TekSelector, TekSelectorLabel, TekTextLink, TekToggle };
//# sourceMappingURL=tek-ui.js.map
