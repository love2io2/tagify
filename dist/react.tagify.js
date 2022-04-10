/**
 * Tagify (v 4.11.0) - tags input component
 * By Yair Even-Or
 * https://github.com/yairEO/tagify
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 * THE SOFTWARE IS NOT PERMISSIBLE TO BE SOLD.
 */

!function(e,n){"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?module.exports=n():e.React.tagify=n()}(this,(function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.MixedTags=void 0;var e,n=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a(n);if(t&&t.has(e))return t.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var c=r?Object.getOwnPropertyDescriptor(e,u):null;c&&(c.get||c.set)?Object.defineProperty(o,u,c):o[u]=e[u]}o.default=e,t&&t.set(e,o);return o}(require("react")),t=require("react-dom/server"),o=require("prop-types"),r=(e=require("./tagify.js"))&&e.__esModule?e:{default:e};const u=["children"];function a(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(a=function(e){return e?t:n})(e)}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function d(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},u=Object.keys(e);for(o=0;o<u.length;o++)t=u[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)t=u[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const i=e=>e;const l=({name:e,value:o,loading:u=!1,onInput:a=i,onAdd:c=i,onRemove:d=i,onEditInput:l=i,onEditBeforeUpdate:s=i,onEditUpdated:f=i,onEditStart:p=i,onEditKeydown:y=i,onInvalid:g=i,onClick:w=i,onKeydown:h=i,onFocus:O=i,onBlur:b=i,onChange:m=i,onDropdownShow:v=i,onDropdownHide:E=i,onDropdownSelect:j=i,onDropdownScroll:D=i,onDropdownNoMatch:M=i,onDropdownUpdated:x=i,readOnly:S,disabled:k,children:I,settings:R={},InputMode:N="input",autoFocus:P,className:T,whitelist:C,tagifyRef:U,placeholder:F="",defaultValue:_,showDropdown:V})=>{const q=(0,n.useRef)(),B=(0,n.useRef)(),K=(0,n.useRef)(),W=_||o,A=(0,n.useMemo)((()=>({ref:B,name:e,defaultValue:I||"string"==typeof W?W:JSON.stringify(W),className:T,readOnly:S,disabled:k,autoFocus:P,placeholder:F})),[]),H=(0,n.useCallback)((()=>{P&&K.current&&K.current.DOM.input.focus()}),[K]);return(0,n.useEffect)((()=>{!function(e){if(e)for(let o in e){let r=e[o];String(r).includes("jsxRuntime")&&(e[o]=(...e)=>(0,t.renderToStaticMarkup)(n.default.createElement(r,{props:e})))}}(R.templates),"textarea"==N&&(R.mode="mix"),C&&C.length&&(R.whitelist=C);const e=new r.default(B.current,R);return e.on("input",a).on("add",c).on("remove",d).on("invalid",g).on("keydown",h).on("focus",O).on("blur",b).on("click",w).on("change",m).on("edit:input",l).on("edit:beforeUpdate",s).on("edit:updated",f).on("edit:start",p).on("edit:keydown",y).on("dropdown:show",v).on("dropdown:hide",E).on("dropdown:select",j).on("dropdown:scroll",D).on("dropdown:noMatch",M).on("dropdown:updated",x),U&&(U.current=e),K.current=e,H(),()=>{e.destroy()}}),[]),(0,n.useEffect)((()=>{H()}),[P]),(0,n.useEffect)((()=>{q.current&&(K.current.settings.whitelist.length=0,C&&C.length&&K.current.settings.whitelist.push(...C))}),[C]),(0,n.useEffect)((()=>{const e=K.current.getInputValue();q.current&&!((e,n)=>{const t=e=>"string"==typeof e?e:JSON.stringify(e);return t(e)==t(n)})(o,e)&&K.current.loadOriginalValues(o)}),[o]),(0,n.useEffect)((()=>{q.current&&K.current.toggleClass(T)}),[T]),(0,n.useEffect)((()=>{q.current&&K.current.loading(u)}),[u]),(0,n.useEffect)((()=>{q.current&&K.current.setReadonly(S)}),[S]),(0,n.useEffect)((()=>{q.current&&K.current.setDisabled(k)}),[k]),(0,n.useEffect)((()=>{const e=K.current;q.current&&(V?(e.dropdown.show.call(e,V),e.toggleFocusClass(!0)):e.dropdown.hide.call(e))}),[V]),(0,n.useEffect)((()=>{q.current=!0}),[]),n.default.createElement("div",{className:"tags-input"},n.default.createElement(N,A))};l.propTypes={name:o.string,value:(0,o.oneOfType)([o.string,o.array]),loading:o.bool,children:(0,o.oneOfType)([o.string,o.array]),onChange:o.func,readOnly:o.bool,settings:o.object,InputMode:o.string,autoFocus:o.bool,className:o.string,tagifyRef:o.object,whitelist:o.array,placeholder:o.string,defaultValue:(0,o.oneOfType)([o.string,o.array]),showDropdown:(0,o.oneOfType)([o.string,o.bool]),onInput:o.func,onAdd:o.func,onRemove:o.func,onEditInput:o.func,onEditBeforeUpdate:o.func,onEditUpdated:o.func,onEditStart:o.func,onEditKeydown:o.func,onInvalid:o.func,onClick:o.func,onKeydown:o.func,onFocus:o.func,onBlur:o.func,onDropdownShow:o.func,onDropdownHide:o.func,onDropdownSelect:o.func,onDropdownScroll:o.func,onDropdownNoMatch:o.func,onDropdownUpdated:o.func};const s=n.default.memo(l);s.displayName="Tags";exports.MixedTags=e=>{let t=e.children,o=d(e,u);return n.default.createElement(s,c({InputMode:"textarea"},o),t)};var f=s;return exports.default=f,exports}));