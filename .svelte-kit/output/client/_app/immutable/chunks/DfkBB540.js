const Zu=()=>{};var _o={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},tl=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],a=n[e++],l=n[e++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Ma={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,l=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,_=o>>2,I=(o&3)<<4|l>>4;let R=(l&15)<<2|d>>6,C=d&63;h||(C=64,a||(R=64)),r.push(e[_],e[I],e[R],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Oa(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):tl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],l=i<n.length?e[n.charAt(i)]:0;++i;const d=i<n.length?e[n.charAt(i)]:64;++i;const I=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||l==null||d==null||I==null)throw new el;const R=o<<2|l>>4;if(r.push(R),d!==64){const C=l<<4&240|d>>2;if(r.push(C),I!==64){const O=d<<6&192|I;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class el extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nl=function(n){const t=Oa(n);return Ma.encodeByteArray(t,!0)},Jn=function(n){return nl(n).replace(/\./g,"")},rl=function(n){try{return Ma.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=()=>sl().__FIREBASE_DEFAULTS__,ol=()=>{if(typeof process>"u"||typeof _o>"u")return;const n=_o.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},al=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&rl(n[1]);return t&&JSON.parse(t)},ks=()=>{try{return Zu()||il()||ol()||al()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},cl=n=>{var t,e;return(e=(t=ks())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},ul=n=>{const t=cl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},xa=()=>{var n;return(n=ks())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hl(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Jn(JSON.stringify(e)),Jn(JSON.stringify(a)),""].join(".")}const cn={};function dl(){const n={prod:[],emulator:[]};for(const t of Object.keys(cn))cn[t]?n.emulator.push(t):n.prod.push(t);return n}function pl(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let yo=!1;function ml(n,t){if(typeof window>"u"||typeof document>"u"||!Os(window.location.host)||cn[n]===t||cn[n]||yo)return;cn[n]=t;function e(R){return`__firebase__banner__${R}`}const r="__firebase__banner",o=dl().prod.length>0;function a(){const R=document.getElementById(r);R&&R.remove()}function l(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function h(R,C){R.setAttribute("width","24"),R.setAttribute("id",C),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function d(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{yo=!0,a()},R}function _(R,C){R.setAttribute("id",C),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function I(){const R=pl(r),C=e("text"),O=document.getElementById(C)||document.createElement("span"),M=e("learnmore"),D=document.getElementById(M)||document.createElement("a"),Y=e("preprendIcon"),z=document.getElementById(Y)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const G=R.element;l(G),_(D,M);const at=d();h(z,Y),G.append(z,O,D,at),document.body.appendChild(G)}o?(O.innerText="Preview backend disconnected.",z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _l(){var t;const n=(t=ks())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function La(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function yl(){return!_l()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ms(){try{return typeof indexedDB=="object"}catch{return!1}}function xs(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}function Fa(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="FirebaseError";class se extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=El,Object.setPrototypeOf(this,se.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ur.prototype.create)}}class ur{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?Tl(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new se(i,l,r)}}function Tl(n,t){return n.replace(Il,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Il=/\{\$([^}]+)}/g;function pn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],a=t[i];if(Eo(o)&&Eo(a)){if(!pn(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Eo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=1e3,vl=2,Al=14400*1e3,Rl=.5;function To(n,t=wl,e=vl){const r=t*Math.pow(e,n),i=Math.round(Rl*r*(Math.random()-.5)*2);return Math.min(Al,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(n){return n&&n._delegate?n._delegate:n}class Mt{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new ll;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(bl(t))try{this.getOrInitializeService({instanceIdentifier:he})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=he){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=he){return this.instances.has(t)}getOptions(t=he){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Cl(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=he){return this.component?this.component.multipleInstances?t:he:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cl(n){return n===he?void 0:n}function bl(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Sl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const Vl={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},Dl=j.INFO,Nl={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},kl=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Nl[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ls{constructor(t){this.name=t,this._logLevel=Dl,this._logHandler=kl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in j))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Vl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...t),this._logHandler(this,j.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...t),this._logHandler(this,j.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,j.INFO,...t),this._logHandler(this,j.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,j.WARN,...t),this._logHandler(this,j.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...t),this._logHandler(this,j.ERROR,...t)}}const Ol=(n,t)=>t.some(e=>n instanceof e);let Io,wo;function Ml(){return Io||(Io=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xl(){return wo||(wo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ua=new WeakMap,cs=new WeakMap,Ba=new WeakMap,Qr=new WeakMap,Fs=new WeakMap;function Ll(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Gt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Ua.set(e,n)}).catch(()=>{}),Fs.set(t,n),t}function Fl(n){if(cs.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});cs.set(n,t)}let us={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return cs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ba.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Gt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Ul(n){us=n(us)}function Bl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Wr(this),t,...e);return Ba.set(r,t.sort?t.sort():[t]),Gt(r)}:xl().includes(n)?function(...t){return n.apply(Wr(this),t),Gt(Ua.get(this))}:function(...t){return Gt(n.apply(Wr(this),t))}}function jl(n){return typeof n=="function"?Bl(n):(n instanceof IDBTransaction&&Fl(n),Ol(n,Ml())?new Proxy(n,us):n)}function Gt(n){if(n instanceof IDBRequest)return Ll(n);if(Qr.has(n))return Qr.get(n);const t=jl(n);return t!==n&&(Qr.set(n,t),Fs.set(t,n)),t}const Wr=n=>Fs.get(n);function ja(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,t),l=Gt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Gt(a.result),h.oldVersion,h.newVersion,Gt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const ql=["get","getKey","getAll","getAllKeys","count"],$l=["put","add","delete","clear"],Yr=new Map;function vo(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Yr.get(t))return Yr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=$l.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ql.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),i&&h.done]))[0]};return Yr.set(t,o),o}Ul(n=>({...n,get:(t,e,r)=>vo(t,e)||n.get(t,e,r),has:(t,e)=>!!vo(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Hl(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Hl(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ls="@firebase/app",Ao="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=new Ls("@firebase/app"),Gl="@firebase/app-compat",Kl="@firebase/analytics-compat",Ql="@firebase/analytics",Wl="@firebase/app-check-compat",Yl="@firebase/app-check",Xl="@firebase/auth",Jl="@firebase/auth-compat",Zl="@firebase/database",th="@firebase/data-connect",eh="@firebase/database-compat",nh="@firebase/functions",rh="@firebase/functions-compat",sh="@firebase/installations",ih="@firebase/installations-compat",oh="@firebase/messaging",ah="@firebase/messaging-compat",ch="@firebase/performance",uh="@firebase/performance-compat",lh="@firebase/remote-config",hh="@firebase/remote-config-compat",fh="@firebase/storage",dh="@firebase/storage-compat",ph="@firebase/firestore",mh="@firebase/ai",gh="@firebase/firestore-compat",_h="firebase",yh="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="[DEFAULT]",Eh={[ls]:"fire-core",[Gl]:"fire-core-compat",[Ql]:"fire-analytics",[Kl]:"fire-analytics-compat",[Yl]:"fire-app-check",[Wl]:"fire-app-check-compat",[Xl]:"fire-auth",[Jl]:"fire-auth-compat",[Zl]:"fire-rtdb",[th]:"fire-data-connect",[eh]:"fire-rtdb-compat",[nh]:"fire-fn",[rh]:"fire-fn-compat",[sh]:"fire-iid",[ih]:"fire-iid-compat",[oh]:"fire-fcm",[ah]:"fire-fcm-compat",[ch]:"fire-perf",[uh]:"fire-perf-compat",[lh]:"fire-rc",[hh]:"fire-rc-compat",[fh]:"fire-gcs",[dh]:"fire-gcs-compat",[ph]:"fire-fst",[gh]:"fire-fst-compat",[mh]:"fire-vertex","fire-js":"fire-js",[_h]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new Map,Th=new Map,fs=new Map;function Ro(n,t){try{n.container.addComponent(t)}catch(e){xt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Xt(n){const t=n.name;if(fs.has(t))return xt.debug(`There were multiple attempts to register component ${t}.`),!1;fs.set(t,n);for(const e of Zn.values())Ro(e,n);for(const e of Th.values())Ro(e,n);return!0}function In(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Ih(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kt=new ur("app","Firebase",wh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=yh;function qa(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:hs,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw Kt.create("bad-app-name",{appName:String(i)});if(e||(e=xa()),!e)throw Kt.create("no-options");const o=Zn.get(i);if(o){if(pn(e,o.options)&&pn(r,o.config))return o;throw Kt.create("duplicate-app",{appName:i})}const a=new Pl(i);for(const h of fs.values())a.addComponent(h);const l=new vh(e,r,a);return Zn.set(i,l),l}function $a(n=hs){const t=Zn.get(n);if(!t&&n===hs&&xa())return qa();if(!t)throw Kt.create("no-app",{appName:n});return t}function Dt(n,t,e){let r=Eh[n]??n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xt.warn(a.join(" "));return}Xt(new Mt(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="firebase-heartbeat-database",Sh=1,mn="firebase-heartbeat-store";let Xr=null;function za(){return Xr||(Xr=ja(Rh,Sh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(mn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Kt.create("idb-open",{originalErrorMessage:n.message})})),Xr}async function Ch(n){try{const e=(await za()).transaction(mn),r=await e.objectStore(mn).get(Ha(n));return await e.done,r}catch(t){if(t instanceof se)xt.warn(t.message);else{const e=Kt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});xt.warn(e.message)}}}async function So(n,t){try{const r=(await za()).transaction(mn,"readwrite");await r.objectStore(mn).put(t,Ha(n)),await r.done}catch(e){if(e instanceof se)xt.warn(e.message);else{const r=Kt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});xt.warn(r.message)}}}function Ha(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=1024,Ph=30;class Vh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Nh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Co();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Ph){const a=kh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Co(),{heartbeatsToSend:r,unsentEntries:i}=Dh(this._heartbeatsCache.heartbeats),o=Jn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return xt.warn(e),""}}}function Co(){return new Date().toISOString().substring(0,10)}function Dh(n,t=bh){const e=[];let r=n.slice();for(const i of n){const o=e.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),bo(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),bo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Nh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ms()?xs().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Ch(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return So(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return So(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function bo(n){return Jn(JSON.stringify({version:2,heartbeats:n})).length}function kh(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(n){Xt(new Mt("platform-logger",t=>new zl(t),"PRIVATE")),Xt(new Mt("heartbeat",t=>new Vh(t),"PRIVATE")),Dt(ls,Ao,n),Dt(ls,Ao,"esm2020"),Dt("fire-js","")}Oh("");var Mh="firebase",xh="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt(Mh,xh,"app");const Ga="@firebase/installations",Us="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=1e4,Qa=`w:${Us}`,Wa="FIS_v2",Lh="https://firebaseinstallations.googleapis.com/v1",Fh=3600*1e3,Uh="installations",Bh="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},_e=new ur(Uh,Bh,jh);function Ya(n){return n instanceof se&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa({projectId:n}){return`${Lh}/projects/${n}/installations`}function Ja(n){return{token:n.token,requestStatus:2,expiresIn:$h(n.expiresIn),creationTime:Date.now()}}async function Za(n,t){const r=(await t.json()).error;return _e.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function tc({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function qh(n,{refreshToken:t}){const e=tc(n);return e.append("Authorization",zh(t)),e}async function ec(n){const t=await n();return t.status>=500&&t.status<600?n():t}function $h(n){return Number(n.replace("s","000"))}function zh(n){return`${Wa} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hh({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=Xa(n),i=tc(n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={fid:e,authVersion:Wa,appId:n.appId,sdkVersion:Qa},l={method:"POST",headers:i,body:JSON.stringify(a)},h=await ec(()=>fetch(r,l));if(h.ok){const d=await h.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:Ja(d.authToken)}}else throw await Za("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(n){return new Promise(t=>{setTimeout(t,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh=/^[cdef][\w-]{21}$/,ds="";function Qh(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=Wh(n);return Kh.test(e)?e:ds}catch{return ds}}function Wh(n){return Gh(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=new Map;function sc(n,t){const e=hr(n);ic(e,t),Yh(e,t)}function ic(n,t){const e=rc.get(n);if(e)for(const r of e)r(t)}function Yh(n,t){const e=Xh();e&&e.postMessage({key:n,fid:t}),Jh()}let fe=null;function Xh(){return!fe&&"BroadcastChannel"in self&&(fe=new BroadcastChannel("[Firebase] FID Change"),fe.onmessage=n=>{ic(n.data.key,n.data.fid)}),fe}function Jh(){rc.size===0&&fe&&(fe.close(),fe=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="firebase-installations-database",tf=1,ye="firebase-installations-store";let Jr=null;function Bs(){return Jr||(Jr=ja(Zh,tf,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(ye)}}})),Jr}async function tr(n,t){const e=hr(n),i=(await Bs()).transaction(ye,"readwrite"),o=i.objectStore(ye),a=await o.get(e);return await o.put(t,e),await i.done,(!a||a.fid!==t.fid)&&sc(n,t.fid),t}async function oc(n){const t=hr(n),r=(await Bs()).transaction(ye,"readwrite");await r.objectStore(ye).delete(t),await r.done}async function fr(n,t){const e=hr(n),i=(await Bs()).transaction(ye,"readwrite"),o=i.objectStore(ye),a=await o.get(e),l=t(a);return l===void 0?await o.delete(e):await o.put(l,e),await i.done,l&&(!a||a.fid!==l.fid)&&sc(n,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(n){let t;const e=await fr(n.appConfig,r=>{const i=ef(r),o=nf(n,i);return t=o.registrationPromise,o.installationEntry});return e.fid===ds?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function ef(n){const t=n||{fid:Qh(),registrationStatus:0};return ac(t)}function nf(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(_e.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=rf(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:sf(n)}:{installationEntry:t}}async function rf(n,t){try{const e=await Hh(n,t);return tr(n.appConfig,e)}catch(e){throw Ya(e)&&e.customData.serverCode===409?await oc(n.appConfig):await tr(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function sf(n){let t=await Po(n.appConfig);for(;t.registrationStatus===1;)await nc(100),t=await Po(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await js(n);return r||e}return t}function Po(n){return fr(n,t=>{if(!t)throw _e.create("installation-not-found");return ac(t)})}function ac(n){return of(n)?{fid:n.fid,registrationStatus:0}:n}function of(n){return n.registrationStatus===1&&n.registrationTime+Ka<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function af({appConfig:n,heartbeatServiceProvider:t},e){const r=cf(n,e),i=qh(n,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={installation:{sdkVersion:Qa,appId:n.appId}},l={method:"POST",headers:i,body:JSON.stringify(a)},h=await ec(()=>fetch(r,l));if(h.ok){const d=await h.json();return Ja(d)}else throw await Za("Generate Auth Token",h)}function cf(n,{fid:t}){return`${Xa(n)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(n,t=!1){let e;const r=await fr(n.appConfig,o=>{if(!cc(o))throw _e.create("not-registered");const a=o.authToken;if(!t&&hf(a))return o;if(a.requestStatus===1)return e=uf(n,t),o;{if(!navigator.onLine)throw _e.create("app-offline");const l=df(o);return e=lf(n,l),l}});return e?await e:r.authToken}async function uf(n,t){let e=await Vo(n.appConfig);for(;e.authToken.requestStatus===1;)await nc(100),e=await Vo(n.appConfig);const r=e.authToken;return r.requestStatus===0?qs(n,t):r}function Vo(n){return fr(n,t=>{if(!cc(t))throw _e.create("not-registered");const e=t.authToken;return pf(e)?{...t,authToken:{requestStatus:0}}:t})}async function lf(n,t){try{const e=await af(n,t),r={...t,authToken:e};return await tr(n.appConfig,r),e}catch(e){if(Ya(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await oc(n.appConfig);else{const r={...t,authToken:{requestStatus:0}};await tr(n.appConfig,r)}throw e}}function cc(n){return n!==void 0&&n.registrationStatus===2}function hf(n){return n.requestStatus===2&&!ff(n)}function ff(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+Fh}function df(n){const t={requestStatus:1,requestTime:Date.now()};return{...n,authToken:t}}function pf(n){return n.requestStatus===1&&n.requestTime+Ka<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mf(n){const t=n,{installationEntry:e,registrationPromise:r}=await js(t);return r?r.catch(console.error):qs(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gf(n,t=!1){const e=n;return await _f(e),(await qs(e,t)).token}async function _f(n){const{registrationPromise:t}=await js(n);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(n){if(!n||!n.options)throw Zr("App Configuration");if(!n.name)throw Zr("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw Zr(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Zr(n){return _e.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="installations",Ef="installations-internal",Tf=n=>{const t=n.getProvider("app").getImmediate(),e=yf(t),r=In(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},If=n=>{const t=n.getProvider("app").getImmediate(),e=In(t,uc).getImmediate();return{getId:()=>mf(e),getToken:i=>gf(e,i)}};function wf(){Xt(new Mt(uc,Tf,"PUBLIC")),Xt(new Mt(Ef,If,"PRIVATE"))}wf();Dt(Ga,Us);Dt(Ga,Us,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er="analytics",vf="firebase_id",Af="origin",Rf=60*1e3,Sf="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$s="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new Ls("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Rt=new ur("analytics","Analytics",Cf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(n){if(!n.startsWith($s)){const t=Rt.create("invalid-gtag-resource",{gtagURL:n});return Tt.warn(t.message),""}return n}function lc(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function Pf(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function Vf(n,t){const e=Pf("firebase-js-sdk-policy",{createScriptURL:bf}),r=document.createElement("script"),i=`${$s}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Df(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function Nf(n,t,e,r,i,o){const a=r[i];try{if(a)await t[a];else{const h=(await lc(e)).find(d=>d.measurementId===i);h&&await t[h.appId]}}catch(l){Tt.error(l)}n("config",i,o)}async function kf(n,t,e,r,i){try{let o=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const l=await lc(e);for(const h of a){const d=l.find(I=>I.measurementId===h),_=d&&t[d.appId];if(_)o.push(_);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,i||{})}catch(o){Tt.error(o)}}function Of(n,t,e,r){async function i(o,...a){try{if(o==="event"){const[l,h]=a;await kf(n,t,e,l,h)}else if(o==="config"){const[l,h]=a;await Nf(n,t,e,r,l,h)}else if(o==="consent"){const[l,h]=a;n("consent",l,h)}else if(o==="get"){const[l,h,d]=a;n("get",l,h,d)}else if(o==="set"){const[l]=a;n("set",l)}else n(o,...a)}catch(l){Tt.error(l)}}return i}function Mf(n,t,e,r,i){let o=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=Of(o,n,t,e),{gtagCore:o,wrappedGtag:window[i]}}function xf(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes($s)&&e.src.includes(n))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=30,Ff=1e3;class Uf{constructor(t={},e=Ff){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const hc=new Uf;function Bf(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function jf(n){var a;const{appId:t,apiKey:e}=n,r={method:"GET",headers:Bf(e)},i=Sf.replace("{app-id}",t),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let l="";try{const h=await o.json();(a=h.error)!=null&&a.message&&(l=h.error.message)}catch{}throw Rt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function qf(n,t=hc,e){const{appId:r,apiKey:i,measurementId:o}=n.options;if(!r)throw Rt.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Rt.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Hf;return setTimeout(async()=>{l.abort()},Rf),fc({appId:r,apiKey:i,measurementId:o},a,l,t)}async function fc(n,{throttleEndTimeMillis:t,backoffCount:e},r,i=hc){var l;const{appId:o,measurementId:a}=n;try{await $f(r,t)}catch(h){if(a)return Tt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:a};throw h}try{const h=await jf(n);return i.deleteThrottleMetadata(o),h}catch(h){const d=h;if(!zf(d)){if(i.deleteThrottleMetadata(o),a)return Tt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:a};throw h}const _=Number((l=d==null?void 0:d.customData)==null?void 0:l.httpStatus)===503?To(e,i.intervalMillis,Lf):To(e,i.intervalMillis),I={throttleEndTimeMillis:Date.now()+_,backoffCount:e+1};return i.setThrottleMetadata(o,I),Tt.debug(`Calling attemptFetch again in ${_} millis`),fc(n,I,r,i)}}function $f(n,t){return new Promise((e,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(e,i);n.addEventListener(()=>{clearTimeout(o),r(Rt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function zf(n){if(!(n instanceof se)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class Hf{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Gf(n,t,e,r,i){if(i&&i.global){n("event",e,r);return}else{const o=await t,a={...r,send_to:o};n("event",e,a)}}async function Kf(n,t,e,r){if(r&&r.global){const i={};for(const o of Object.keys(e))i[`user_properties.${o}`]=e[o];return n("set",i),Promise.resolve()}else{const i=await t;n("config",i,{update:!0,user_properties:e})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qf(){if(Ms())try{await xs()}catch(n){return Tt.warn(Rt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Tt.warn(Rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Wf(n,t,e,r,i,o,a){const l=qf(n);l.then(R=>{e[R.measurementId]=R.appId,n.options.measurementId&&R.measurementId!==n.options.measurementId&&Tt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>Tt.error(R)),t.push(l);const h=Qf().then(R=>{if(R)return r.getId()}),[d,_]=await Promise.all([l,h]);xf(o)||Vf(o,d.measurementId),i("js",new Date);const I=(a==null?void 0:a.config)??{};return I[Af]="firebase",I.update=!0,_!=null&&(I[vf]=_),i("config",d.measurementId,I),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t){this.app=t}_delete(){return delete be[this.app.options.appId],Promise.resolve()}}let be={},Do=[];const No={};let ts="dataLayer",Xf="gtag",ko,zs,Oo=!1;function Jf(){const n=[];if(La()&&n.push("This is a browser extension environment."),Fa()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),e=Rt.create("invalid-analytics-context",{errorInfo:t});Tt.warn(e.message)}}function Zf(n,t,e){Jf();const r=n.options.appId;if(!r)throw Rt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Tt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Rt.create("no-api-key");if(be[r]!=null)throw Rt.create("already-exists",{id:r});if(!Oo){Df(ts);const{wrappedGtag:o,gtagCore:a}=Mf(be,Do,No,ts,Xf);zs=o,ko=a,Oo=!0}return be[r]=Wf(n,Do,No,t,ko,ts,e),new Yf(n)}function td(n=$a()){n=lr(n);const t=In(n,er);return t.isInitialized()?t.getImmediate():ed(n)}function ed(n,t={}){const e=In(n,er);if(e.isInitialized()){const i=e.getImmediate();if(pn(t,e.getOptions()))return i;throw Rt.create("already-initialized")}return e.initialize({options:t})}async function nd(){if(La()||!Fa()||!Ms())return!1;try{return await xs()}catch{return!1}}function rd(n,t,e){n=lr(n),Kf(zs,be[n.app.options.appId],t,e).catch(r=>Tt.error(r))}function sd(n,t,e,r){n=lr(n),Gf(zs,be[n.app.options.appId],t,e,r).catch(i=>Tt.error(i))}const Mo="@firebase/analytics",xo="0.10.19";function id(){Xt(new Mt(er,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Zf(r,i,e)},"PUBLIC")),Xt(new Mt("analytics-internal",n,"PRIVATE")),Dt(Mo,xo),Dt(Mo,xo,"esm2020");function n(t){try{const e=t.getProvider(er).getImmediate();return{logEvent:(r,i,o)=>sd(e,r,i,o),setUserProperties:(r,i)=>rd(e,r,i)}}catch(e){throw Rt.create("interop-component-reg-failed",{reason:e})}}}id();var Lo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qt,dc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,p){function g(){}g.prototype=p.prototype,E.F=p.prototype,E.prototype=new g,E.prototype.constructor=E,E.D=function(T,y,v){for(var m=Array(arguments.length-2),It=2;It<arguments.length;It++)m[It-2]=arguments[It];return p.prototype[y].apply(T,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,p,g){g||(g=0);const T=Array(16);if(typeof p=="string")for(var y=0;y<16;++y)T[y]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(y=0;y<16;++y)T[y]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=E.g[0],g=E.g[1],y=E.g[2];let v=E.g[3],m;m=p+(v^g&(y^v))+T[0]+3614090360&4294967295,p=g+(m<<7&4294967295|m>>>25),m=v+(y^p&(g^y))+T[1]+3905402710&4294967295,v=p+(m<<12&4294967295|m>>>20),m=y+(g^v&(p^g))+T[2]+606105819&4294967295,y=v+(m<<17&4294967295|m>>>15),m=g+(p^y&(v^p))+T[3]+3250441966&4294967295,g=y+(m<<22&4294967295|m>>>10),m=p+(v^g&(y^v))+T[4]+4118548399&4294967295,p=g+(m<<7&4294967295|m>>>25),m=v+(y^p&(g^y))+T[5]+1200080426&4294967295,v=p+(m<<12&4294967295|m>>>20),m=y+(g^v&(p^g))+T[6]+2821735955&4294967295,y=v+(m<<17&4294967295|m>>>15),m=g+(p^y&(v^p))+T[7]+4249261313&4294967295,g=y+(m<<22&4294967295|m>>>10),m=p+(v^g&(y^v))+T[8]+1770035416&4294967295,p=g+(m<<7&4294967295|m>>>25),m=v+(y^p&(g^y))+T[9]+2336552879&4294967295,v=p+(m<<12&4294967295|m>>>20),m=y+(g^v&(p^g))+T[10]+4294925233&4294967295,y=v+(m<<17&4294967295|m>>>15),m=g+(p^y&(v^p))+T[11]+2304563134&4294967295,g=y+(m<<22&4294967295|m>>>10),m=p+(v^g&(y^v))+T[12]+1804603682&4294967295,p=g+(m<<7&4294967295|m>>>25),m=v+(y^p&(g^y))+T[13]+4254626195&4294967295,v=p+(m<<12&4294967295|m>>>20),m=y+(g^v&(p^g))+T[14]+2792965006&4294967295,y=v+(m<<17&4294967295|m>>>15),m=g+(p^y&(v^p))+T[15]+1236535329&4294967295,g=y+(m<<22&4294967295|m>>>10),m=p+(y^v&(g^y))+T[1]+4129170786&4294967295,p=g+(m<<5&4294967295|m>>>27),m=v+(g^y&(p^g))+T[6]+3225465664&4294967295,v=p+(m<<9&4294967295|m>>>23),m=y+(p^g&(v^p))+T[11]+643717713&4294967295,y=v+(m<<14&4294967295|m>>>18),m=g+(v^p&(y^v))+T[0]+3921069994&4294967295,g=y+(m<<20&4294967295|m>>>12),m=p+(y^v&(g^y))+T[5]+3593408605&4294967295,p=g+(m<<5&4294967295|m>>>27),m=v+(g^y&(p^g))+T[10]+38016083&4294967295,v=p+(m<<9&4294967295|m>>>23),m=y+(p^g&(v^p))+T[15]+3634488961&4294967295,y=v+(m<<14&4294967295|m>>>18),m=g+(v^p&(y^v))+T[4]+3889429448&4294967295,g=y+(m<<20&4294967295|m>>>12),m=p+(y^v&(g^y))+T[9]+568446438&4294967295,p=g+(m<<5&4294967295|m>>>27),m=v+(g^y&(p^g))+T[14]+3275163606&4294967295,v=p+(m<<9&4294967295|m>>>23),m=y+(p^g&(v^p))+T[3]+4107603335&4294967295,y=v+(m<<14&4294967295|m>>>18),m=g+(v^p&(y^v))+T[8]+1163531501&4294967295,g=y+(m<<20&4294967295|m>>>12),m=p+(y^v&(g^y))+T[13]+2850285829&4294967295,p=g+(m<<5&4294967295|m>>>27),m=v+(g^y&(p^g))+T[2]+4243563512&4294967295,v=p+(m<<9&4294967295|m>>>23),m=y+(p^g&(v^p))+T[7]+1735328473&4294967295,y=v+(m<<14&4294967295|m>>>18),m=g+(v^p&(y^v))+T[12]+2368359562&4294967295,g=y+(m<<20&4294967295|m>>>12),m=p+(g^y^v)+T[5]+4294588738&4294967295,p=g+(m<<4&4294967295|m>>>28),m=v+(p^g^y)+T[8]+2272392833&4294967295,v=p+(m<<11&4294967295|m>>>21),m=y+(v^p^g)+T[11]+1839030562&4294967295,y=v+(m<<16&4294967295|m>>>16),m=g+(y^v^p)+T[14]+4259657740&4294967295,g=y+(m<<23&4294967295|m>>>9),m=p+(g^y^v)+T[1]+2763975236&4294967295,p=g+(m<<4&4294967295|m>>>28),m=v+(p^g^y)+T[4]+1272893353&4294967295,v=p+(m<<11&4294967295|m>>>21),m=y+(v^p^g)+T[7]+4139469664&4294967295,y=v+(m<<16&4294967295|m>>>16),m=g+(y^v^p)+T[10]+3200236656&4294967295,g=y+(m<<23&4294967295|m>>>9),m=p+(g^y^v)+T[13]+681279174&4294967295,p=g+(m<<4&4294967295|m>>>28),m=v+(p^g^y)+T[0]+3936430074&4294967295,v=p+(m<<11&4294967295|m>>>21),m=y+(v^p^g)+T[3]+3572445317&4294967295,y=v+(m<<16&4294967295|m>>>16),m=g+(y^v^p)+T[6]+76029189&4294967295,g=y+(m<<23&4294967295|m>>>9),m=p+(g^y^v)+T[9]+3654602809&4294967295,p=g+(m<<4&4294967295|m>>>28),m=v+(p^g^y)+T[12]+3873151461&4294967295,v=p+(m<<11&4294967295|m>>>21),m=y+(v^p^g)+T[15]+530742520&4294967295,y=v+(m<<16&4294967295|m>>>16),m=g+(y^v^p)+T[2]+3299628645&4294967295,g=y+(m<<23&4294967295|m>>>9),m=p+(y^(g|~v))+T[0]+4096336452&4294967295,p=g+(m<<6&4294967295|m>>>26),m=v+(g^(p|~y))+T[7]+1126891415&4294967295,v=p+(m<<10&4294967295|m>>>22),m=y+(p^(v|~g))+T[14]+2878612391&4294967295,y=v+(m<<15&4294967295|m>>>17),m=g+(v^(y|~p))+T[5]+4237533241&4294967295,g=y+(m<<21&4294967295|m>>>11),m=p+(y^(g|~v))+T[12]+1700485571&4294967295,p=g+(m<<6&4294967295|m>>>26),m=v+(g^(p|~y))+T[3]+2399980690&4294967295,v=p+(m<<10&4294967295|m>>>22),m=y+(p^(v|~g))+T[10]+4293915773&4294967295,y=v+(m<<15&4294967295|m>>>17),m=g+(v^(y|~p))+T[1]+2240044497&4294967295,g=y+(m<<21&4294967295|m>>>11),m=p+(y^(g|~v))+T[8]+1873313359&4294967295,p=g+(m<<6&4294967295|m>>>26),m=v+(g^(p|~y))+T[15]+4264355552&4294967295,v=p+(m<<10&4294967295|m>>>22),m=y+(p^(v|~g))+T[6]+2734768916&4294967295,y=v+(m<<15&4294967295|m>>>17),m=g+(v^(y|~p))+T[13]+1309151649&4294967295,g=y+(m<<21&4294967295|m>>>11),m=p+(y^(g|~v))+T[4]+4149444226&4294967295,p=g+(m<<6&4294967295|m>>>26),m=v+(g^(p|~y))+T[11]+3174756917&4294967295,v=p+(m<<10&4294967295|m>>>22),m=y+(p^(v|~g))+T[2]+718787259&4294967295,y=v+(m<<15&4294967295|m>>>17),m=g+(v^(y|~p))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(y+(m<<21&4294967295|m>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+v&4294967295}r.prototype.v=function(E,p){p===void 0&&(p=E.length);const g=p-this.blockSize,T=this.C;let y=this.h,v=0;for(;v<p;){if(y==0)for(;v<=g;)i(this,E,v),v+=this.blockSize;if(typeof E=="string"){for(;v<p;)if(T[y++]=E.charCodeAt(v++),y==this.blockSize){i(this,T),y=0;break}}else for(;v<p;)if(T[y++]=E[v++],y==this.blockSize){i(this,T),y=0;break}}this.h=y,this.o+=p},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;p=this.o*8;for(var g=E.length-8;g<E.length;++g)E[g]=p&255,p/=256;for(this.v(E),E=Array(16),p=0,g=0;g<4;++g)for(let T=0;T<32;T+=8)E[p++]=this.g[g]>>>T&255;return E};function o(E,p){var g=l;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=p(E)}function a(E,p){this.h=p;const g=[];let T=!0;for(let y=E.length-1;y>=0;y--){const v=E[y]|0;T&&v==p||(g[y]=v,T=!1)}this.g=g}var l={};function h(E){return-128<=E&&E<128?o(E,function(p){return new a([p|0],p<0?-1:0)}):new a([E|0],E<0?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return I;if(E<0)return D(d(-E));const p=[];let g=1;for(let T=0;E>=g;T++)p[T]=E/g|0,g*=4294967296;return new a(p,0)}function _(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return D(_(E.substring(1),p));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=d(Math.pow(p,8));let T=I;for(let v=0;v<E.length;v+=8){var y=Math.min(8,E.length-v);const m=parseInt(E.substring(v,v+y),p);y<8?(y=d(Math.pow(p,y)),T=T.j(y).add(d(m))):(T=T.j(g),T=T.add(d(m)))}return T}var I=h(0),R=h(1),C=h(16777216);n=a.prototype,n.m=function(){if(M(this))return-D(this).m();let E=0,p=1;for(let g=0;g<this.g.length;g++){const T=this.i(g);E+=(T>=0?T:4294967296+T)*p,p*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(O(this))return"0";if(M(this))return"-"+D(this).toString(E);const p=d(Math.pow(E,6));var g=this;let T="";for(;;){const y=at(g,p).g;g=Y(g,y.j(p));let v=((g.g.length>0?g.g[0]:g.h)>>>0).toString(E);if(g=y,O(g))return v+T;for(;v.length<6;)v="0"+v;T=v+T}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function O(E){if(E.h!=0)return!1;for(let p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function M(E){return E.h==-1}n.l=function(E){return E=Y(this,E),M(E)?-1:O(E)?0:1};function D(E){const p=E.g.length,g=[];for(let T=0;T<p;T++)g[T]=~E.g[T];return new a(g,~E.h).add(R)}n.abs=function(){return M(this)?D(this):this},n.add=function(E){const p=Math.max(this.g.length,E.g.length),g=[];let T=0;for(let y=0;y<=p;y++){let v=T+(this.i(y)&65535)+(E.i(y)&65535),m=(v>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);T=m>>>16,v&=65535,m&=65535,g[y]=m<<16|v}return new a(g,g[g.length-1]&-2147483648?-1:0)};function Y(E,p){return E.add(D(p))}n.j=function(E){if(O(this)||O(E))return I;if(M(this))return M(E)?D(this).j(D(E)):D(D(this).j(E));if(M(E))return D(this.j(D(E)));if(this.l(C)<0&&E.l(C)<0)return d(this.m()*E.m());const p=this.g.length+E.g.length,g=[];for(var T=0;T<2*p;T++)g[T]=0;for(T=0;T<this.g.length;T++)for(let y=0;y<E.g.length;y++){const v=this.i(T)>>>16,m=this.i(T)&65535,It=E.i(y)>>>16,ie=E.i(y)&65535;g[2*T+2*y]+=m*ie,z(g,2*T+2*y),g[2*T+2*y+1]+=v*ie,z(g,2*T+2*y+1),g[2*T+2*y+1]+=m*It,z(g,2*T+2*y+1),g[2*T+2*y+2]+=v*It,z(g,2*T+2*y+2)}for(E=0;E<p;E++)g[E]=g[2*E+1]<<16|g[2*E];for(E=p;E<2*p;E++)g[E]=0;return new a(g,0)};function z(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function G(E,p){this.g=E,this.h=p}function at(E,p){if(O(p))throw Error("division by zero");if(O(E))return new G(I,I);if(M(E))return p=at(D(E),p),new G(D(p.g),D(p.h));if(M(p))return p=at(E,D(p)),new G(D(p.g),p.h);if(E.g.length>30){if(M(E)||M(p))throw Error("slowDivide_ only works with positive integers.");for(var g=R,T=p;T.l(E)<=0;)g=vt(g),T=vt(T);var y=rt(g,1),v=rt(T,1);for(T=rt(T,2),g=rt(g,2);!O(T);){var m=v.add(T);m.l(E)<=0&&(y=y.add(g),v=m),T=rt(T,1),g=rt(g,1)}return p=Y(E,y.j(p)),new G(y,p)}for(y=I;E.l(p)>=0;){for(g=Math.max(1,Math.floor(E.m()/p.m())),T=Math.ceil(Math.log(g)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),v=d(g),m=v.j(p);M(m)||m.l(E)>0;)g-=T,v=d(g),m=v.j(p);O(v)&&(v=R),y=y.add(v),E=Y(E,m)}return new G(y,E)}n.B=function(E){return at(this,E).h},n.and=function(E){const p=Math.max(this.g.length,E.g.length),g=[];for(let T=0;T<p;T++)g[T]=this.i(T)&E.i(T);return new a(g,this.h&E.h)},n.or=function(E){const p=Math.max(this.g.length,E.g.length),g=[];for(let T=0;T<p;T++)g[T]=this.i(T)|E.i(T);return new a(g,this.h|E.h)},n.xor=function(E){const p=Math.max(this.g.length,E.g.length),g=[];for(let T=0;T<p;T++)g[T]=this.i(T)^E.i(T);return new a(g,this.h^E.h)};function vt(E){const p=E.g.length+1,g=[];for(let T=0;T<p;T++)g[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(g,E.h)}function rt(E,p){const g=p>>5;p%=32;const T=E.g.length-g,y=[];for(let v=0;v<T;v++)y[v]=p>0?E.i(v+g)>>>p|E.i(v+g+1)<<32-p:E.i(v+g);return new a(y,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,dc=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=_,Qt=a}).apply(typeof Lo<"u"?Lo:typeof self<"u"?self:typeof window<"u"?window:{});var qn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pc,rn,mc,Kn,ps,gc,_c,yc;(function(){var n,t=Object.defineProperty;function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof qn=="object"&&qn];for(var c=0;c<s.length;++c){var u=s[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function i(s,c){if(c)t:{var u=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var w=s[f];if(!(w in u))break t;u=u[w]}s=s[s.length-1],f=u[s],c=c(f),c!=f&&c!=null&&t(u,s,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(c){var u=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&u.push([f,c[f]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function h(s,c,u){return s.call.apply(s.bind,arguments)}function d(s,c,u){return d=h,d.apply(null,arguments)}function _(s,c){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function I(s,c){function u(){}u.prototype=c.prototype,s.Z=c.prototype,s.prototype=new u,s.prototype.constructor=s,s.Ob=function(f,w,A){for(var P=Array(arguments.length-2),F=2;F<arguments.length;F++)P[F-2]=arguments[F];return c.prototype[w].apply(f,P)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function C(s){const c=s.length;if(c>0){const u=Array(c);for(let f=0;f<c;f++)u[f]=s[f];return u}return[]}function O(s,c){for(let f=1;f<arguments.length;f++){const w=arguments[f];var u=typeof w;if(u=u!="object"?u:w?Array.isArray(w)?"array":u:"null",u=="array"||u=="object"&&typeof w.length=="number"){u=s.length||0;const A=w.length||0;s.length=u+A;for(let P=0;P<A;P++)s[u+P]=w[P]}else s.push(w)}}class M{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function D(s){a.setTimeout(()=>{throw s},0)}function Y(){var s=E;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class z{constructor(){this.h=this.g=null}add(c,u){const f=G.get();f.set(c,u),this.h?this.h.next=f:this.g=f,this.h=f}}var G=new M(()=>new at,s=>s.reset());class at{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let vt,rt=!1,E=new z,p=()=>{const s=Promise.resolve(void 0);vt=()=>{s.then(g)}};function g(){for(var s;s=Y();){try{s.h.call(s.g)}catch(u){D(u)}var c=G;c.j(s),c.h<100&&(c.h++,s.next=c.g,c.g=s)}rt=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var v=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};a.addEventListener("test",u,c),a.removeEventListener("test",u,c)}catch{}return s})();function m(s){return/^[\s\xa0]*$/.test(s)}function It(s,c){y.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,c)}I(It,y),It.prototype.init=function(s,c){const u=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget,c||(u=="mouseover"?c=s.fromElement:u=="mouseout"&&(c=s.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&It.Z.h.call(this)},It.prototype.h=function(){It.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var ie="closure_listenable_"+(Math.random()*1e6|0),Iu=0;function wu(s,c,u,f,w){this.listener=s,this.proxy=null,this.src=c,this.type=u,this.capture=!!f,this.ha=w,this.key=++Iu,this.da=this.fa=!1}function Cn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function bn(s,c,u){for(const f in s)c.call(u,s[f],f,s)}function vu(s,c){for(const u in s)c.call(void 0,s[u],u,s)}function mi(s){const c={};for(const u in s)c[u]=s[u];return c}const gi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _i(s,c){let u,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(u in f)s[u]=f[u];for(let A=0;A<gi.length;A++)u=gi[A],Object.prototype.hasOwnProperty.call(f,u)&&(s[u]=f[u])}}function Pn(s){this.src=s,this.g={},this.h=0}Pn.prototype.add=function(s,c,u,f,w){const A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);const P=Rr(s,c,f,w);return P>-1?(c=s[P],u||(c.fa=!1)):(c=new wu(c,this.src,A,!!f,w),c.fa=u,s.push(c)),c};function Ar(s,c){const u=c.type;if(u in s.g){var f=s.g[u],w=Array.prototype.indexOf.call(f,c,void 0),A;(A=w>=0)&&Array.prototype.splice.call(f,w,1),A&&(Cn(c),s.g[u].length==0&&(delete s.g[u],s.h--))}}function Rr(s,c,u,f){for(let w=0;w<s.length;++w){const A=s[w];if(!A.da&&A.listener==c&&A.capture==!!u&&A.ha==f)return w}return-1}var Sr="closure_lm_"+(Math.random()*1e6|0),Cr={};function yi(s,c,u,f,w){if(Array.isArray(c)){for(let A=0;A<c.length;A++)yi(s,c[A],u,f,w);return null}return u=Ii(u),s&&s[ie]?s.J(c,u,l(f)?!!f.capture:!1,w):Au(s,c,u,!1,f,w)}function Au(s,c,u,f,w,A){if(!c)throw Error("Invalid event type");const P=l(w)?!!w.capture:!!w;let F=Pr(s);if(F||(s[Sr]=F=new Pn(s)),u=F.add(c,u,f,P,A),u.proxy)return u;if(f=Ru(),u.proxy=f,f.src=s,f.listener=u,s.addEventListener)v||(w=P),w===void 0&&(w=!1),s.addEventListener(c.toString(),f,w);else if(s.attachEvent)s.attachEvent(Ti(c.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Ru(){function s(u){return c.call(s.src,s.listener,u)}const c=Su;return s}function Ei(s,c,u,f,w){if(Array.isArray(c))for(var A=0;A<c.length;A++)Ei(s,c[A],u,f,w);else f=l(f)?!!f.capture:!!f,u=Ii(u),s&&s[ie]?(s=s.i,A=String(c).toString(),A in s.g&&(c=s.g[A],u=Rr(c,u,f,w),u>-1&&(Cn(c[u]),Array.prototype.splice.call(c,u,1),c.length==0&&(delete s.g[A],s.h--)))):s&&(s=Pr(s))&&(c=s.g[c.toString()],s=-1,c&&(s=Rr(c,u,f,w)),(u=s>-1?c[s]:null)&&br(u))}function br(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[ie])Ar(c.i,s);else{var u=s.type,f=s.proxy;c.removeEventListener?c.removeEventListener(u,f,s.capture):c.detachEvent?c.detachEvent(Ti(u),f):c.addListener&&c.removeListener&&c.removeListener(f),(u=Pr(c))?(Ar(u,s),u.h==0&&(u.src=null,c[Sr]=null)):Cn(s)}}}function Ti(s){return s in Cr?Cr[s]:Cr[s]="on"+s}function Su(s,c){if(s.da)s=!0;else{c=new It(c,this);const u=s.listener,f=s.ha||s.src;s.fa&&br(s),s=u.call(f,c)}return s}function Pr(s){return s=s[Sr],s instanceof Pn?s:null}var Vr="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ii(s){return typeof s=="function"?s:(s[Vr]||(s[Vr]=function(c){return s.handleEvent(c)}),s[Vr])}function ft(){T.call(this),this.i=new Pn(this),this.M=this,this.G=null}I(ft,T),ft.prototype[ie]=!0,ft.prototype.removeEventListener=function(s,c,u,f){Ei(this,s,c,u,f)};function gt(s,c){var u,f=s.G;if(f)for(u=[];f;f=f.G)u.push(f);if(s=s.M,f=c.type||c,typeof c=="string")c=new y(c,s);else if(c instanceof y)c.target=c.target||s;else{var w=c;c=new y(f,s),_i(c,w)}w=!0;let A,P;if(u)for(P=u.length-1;P>=0;P--)A=c.g=u[P],w=Vn(A,f,!0,c)&&w;if(A=c.g=s,w=Vn(A,f,!0,c)&&w,w=Vn(A,f,!1,c)&&w,u)for(P=0;P<u.length;P++)A=c.g=u[P],w=Vn(A,f,!1,c)&&w}ft.prototype.N=function(){if(ft.Z.N.call(this),this.i){var s=this.i;for(const c in s.g){const u=s.g[c];for(let f=0;f<u.length;f++)Cn(u[f]);delete s.g[c],s.h--}}this.G=null},ft.prototype.J=function(s,c,u,f){return this.i.add(String(s),c,!1,u,f)},ft.prototype.K=function(s,c,u,f){return this.i.add(String(s),c,!0,u,f)};function Vn(s,c,u,f){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();let w=!0;for(let A=0;A<c.length;++A){const P=c[A];if(P&&!P.da&&P.capture==u){const F=P.listener,st=P.ha||P.src;P.fa&&Ar(s.i,P),w=F.call(st,f)!==!1&&w}}return w&&!f.defaultPrevented}function Cu(s,c){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=d(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(s,c||0)}function wi(s){s.g=Cu(()=>{s.g=null,s.i&&(s.i=!1,wi(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class bu extends T{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:wi(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function je(s){T.call(this),this.h=s,this.g={}}I(je,T);var vi=[];function Ai(s){bn(s.g,function(c,u){this.g.hasOwnProperty(u)&&br(c)},s),s.g={}}je.prototype.N=function(){je.Z.N.call(this),Ai(this)},je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Dr=a.JSON.stringify,Pu=a.JSON.parse,Vu=class{stringify(s){return a.JSON.stringify(s,void 0)}parse(s){return a.JSON.parse(s,void 0)}};function Ri(){}function Si(){}var qe={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Nr(){y.call(this,"d")}I(Nr,y);function kr(){y.call(this,"c")}I(kr,y);var oe={},Ci=null;function Dn(){return Ci=Ci||new ft}oe.Ia="serverreachability";function bi(s){y.call(this,oe.Ia,s)}I(bi,y);function $e(s){const c=Dn();gt(c,new bi(c))}oe.STAT_EVENT="statevent";function Pi(s,c){y.call(this,oe.STAT_EVENT,s),this.stat=c}I(Pi,y);function _t(s){const c=Dn();gt(c,new Pi(c,s))}oe.Ja="timingevent";function Vi(s,c){y.call(this,oe.Ja,s),this.size=c}I(Vi,y);function ze(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){s()},c)}function He(){this.g=!0}He.prototype.ua=function(){this.g=!1};function Du(s,c,u,f,w,A){s.info(function(){if(s.g)if(A){var P="",F=A.split("&");for(let H=0;H<F.length;H++){var st=F[H].split("=");if(st.length>1){const ct=st[0];st=st[1];const Ct=ct.split("_");P=Ct.length>=2&&Ct[1]=="type"?P+(ct+"="+st+"&"):P+(ct+"=redacted&")}}}else P=null;else P=A;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+c+`
`+u+`
`+P})}function Nu(s,c,u,f,w,A,P){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+c+`
`+u+`
`+A+" "+P})}function Ie(s,c,u,f){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+Ou(s,u)+(f?" "+f:"")})}function ku(s,c){s.info(function(){return"TIMEOUT: "+c})}He.prototype.info=function(){};function Ou(s,c){if(!s.g)return c;if(!c)return null;try{const A=JSON.parse(c);if(A){for(s=0;s<A.length;s++)if(Array.isArray(A[s])){var u=A[s];if(!(u.length<2)){var f=u[1];if(Array.isArray(f)&&!(f.length<1)){var w=f[0];if(w!="noop"&&w!="stop"&&w!="close")for(let P=1;P<f.length;P++)f[P]=""}}}}return Dr(A)}catch{return c}}var Nn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Di={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ni;function Or(){}I(Or,Ri),Or.prototype.g=function(){return new XMLHttpRequest},Ni=new Or;function Ge(s){return encodeURIComponent(String(s))}function Mu(s){var c=1;s=s.split(":");const u=[];for(;c>0&&s.length;)u.push(s.shift()),c--;return s.length&&u.push(s.join(":")),u}function Ft(s,c,u,f){this.j=s,this.i=c,this.l=u,this.S=f||1,this.V=new je(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ki}function ki(){this.i=null,this.g="",this.h=!1}var Oi={},Mr={};function xr(s,c,u){s.M=1,s.A=On(St(c)),s.u=u,s.R=!0,Mi(s,null)}function Mi(s,c){s.F=Date.now(),kn(s),s.B=St(s.A);var u=s.B,f=s.S;Array.isArray(f)||(f=[String(f)]),Qi(u.i,"t",f),s.C=0,u=s.j.L,s.h=new ki,s.g=fo(s.j,u?c:null,!s.u),s.P>0&&(s.O=new bu(d(s.Y,s,s.g),s.P)),c=s.V,u=s.g,f=s.ba;var w="readystatechange";Array.isArray(w)||(w&&(vi[0]=w.toString()),w=vi);for(let A=0;A<w.length;A++){const P=yi(u,w[A],f||c.handleEvent,!1,c.h||c);if(!P)break;c.g[P.key]=P}c=s.J?mi(s.J):{},s.u?(s.v||(s.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,c)):(s.v="GET",s.g.ea(s.B,s.v,null,c)),$e(),Du(s.i,s.v,s.B,s.l,s.S,s.u)}Ft.prototype.ba=function(s){s=s.target;const c=this.O;c&&jt(s)==3?c.j():this.Y(s)},Ft.prototype.Y=function(s){try{if(s==this.g)t:{const F=jt(this.g),st=this.g.ya(),H=this.g.ca();if(!(F<3)&&(F!=3||this.g&&(this.h.h||this.g.la()||eo(this.g)))){this.K||F!=4||st==7||(st==8||H<=0?$e(3):$e(2)),Lr(this);var c=this.g.ca();this.X=c;var u=xu(this);if(this.o=c==200,Nu(this.i,this.v,this.B,this.l,this.S,F,c),this.o){if(this.U&&!this.L){e:{if(this.g){var f,w=this.g;if((f=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(f)){var A=f;break e}}A=null}if(s=A)Ie(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Fr(this,s);else{this.o=!1,this.m=3,_t(12),ae(this),Ke(this);break t}}if(this.R){s=!0;let ct;for(;!this.K&&this.C<u.length;)if(ct=Lu(this,u),ct==Mr){F==4&&(this.m=4,_t(14),s=!1),Ie(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==Oi){this.m=4,_t(15),Ie(this.i,this.l,u,"[Invalid Chunk]"),s=!1;break}else Ie(this.i,this.l,ct,null),Fr(this,ct);if(xi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),F!=4||u.length!=0||this.h.h||(this.m=1,_t(16),s=!1),this.o=this.o&&s,!s)Ie(this.i,this.l,u,"[Invalid Chunked Response]"),ae(this),Ke(this);else if(u.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),Gr(P),P.P=!0,_t(11))}}else Ie(this.i,this.l,u,null),Fr(this,u);F==4&&ae(this),this.o&&!this.K&&(F==4?co(this.j,this):(this.o=!1,kn(this)))}else Xu(this.g),c==400&&u.indexOf("Unknown SID")>0?(this.m=3,_t(12)):(this.m=0,_t(13)),ae(this),Ke(this)}}}catch{}finally{}};function xu(s){if(!xi(s))return s.g.la();const c=eo(s.g);if(c==="")return"";let u="";const f=c.length,w=jt(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return ae(s),Ke(s),"";s.h.i=new a.TextDecoder}for(let A=0;A<f;A++)s.h.h=!0,u+=s.h.i.decode(c[A],{stream:!(w&&A==f-1)});return c.length=0,s.h.g+=u,s.C=0,s.h.g}function xi(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function Lu(s,c){var u=s.C,f=c.indexOf(`
`,u);return f==-1?Mr:(u=Number(c.substring(u,f)),isNaN(u)?Oi:(f+=1,f+u>c.length?Mr:(c=c.slice(f,f+u),s.C=f+u,c)))}Ft.prototype.cancel=function(){this.K=!0,ae(this)};function kn(s){s.T=Date.now()+s.H,Li(s,s.H)}function Li(s,c){if(s.D!=null)throw Error("WatchDog timer not null");s.D=ze(d(s.aa,s),c)}function Lr(s){s.D&&(a.clearTimeout(s.D),s.D=null)}Ft.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(ku(this.i,this.B),this.M!=2&&($e(),_t(17)),ae(this),this.m=2,Ke(this)):Li(this,this.T-s)};function Ke(s){s.j.I==0||s.K||co(s.j,s)}function ae(s){Lr(s);var c=s.O;c&&typeof c.dispose=="function"&&c.dispose(),s.O=null,Ai(s.V),s.g&&(c=s.g,s.g=null,c.abort(),c.dispose())}function Fr(s,c){try{var u=s.j;if(u.I!=0&&(u.g==s||Ur(u.h,s))){if(!s.L&&Ur(u.h,s)&&u.I==3){try{var f=u.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){t:if(!u.v){if(u.g)if(u.g.F+3e3<s.F)Un(u),Ln(u);else break t;Hr(u),_t(18)}}else u.xa=w[1],0<u.xa-u.K&&w[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=ze(d(u.Va,u),6e3));Bi(u.h)<=1&&u.ta&&(u.ta=void 0)}else ue(u,11)}else if((s.L||u.g==s)&&Un(u),!m(c))for(w=u.Ba.g.parse(c),c=0;c<w.length;c++){let H=w[c];const ct=H[0];if(!(ct<=u.K))if(u.K=ct,H=H[1],u.I==2)if(H[0]=="c"){u.M=H[1],u.ba=H[2];const Ct=H[3];Ct!=null&&(u.ka=Ct,u.j.info("VER="+u.ka));const le=H[4];le!=null&&(u.za=le,u.j.info("SVER="+u.za));const qt=H[5];qt!=null&&typeof qt=="number"&&qt>0&&(f=1.5*qt,u.O=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const $t=s.g;if($t){const jn=$t.g?$t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(jn){var A=f.h;A.g||jn.indexOf("spdy")==-1&&jn.indexOf("quic")==-1&&jn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Br(A,A.h),A.h=null))}if(f.G){const Kr=$t.g?$t.g.getResponseHeader("X-HTTP-Session-Id"):null;Kr&&(f.wa=Kr,K(f.J,f.G,Kr))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-s.F,u.j.info("Handshake RTT: "+u.T+"ms")),f=u;var P=s;if(f.na=ho(f,f.L?f.ba:null,f.W),P.L){ji(f.h,P);var F=P,st=f.O;st&&(F.H=st),F.D&&(Lr(F),kn(F)),f.g=P}else oo(f);u.i.length>0&&Fn(u)}else H[0]!="stop"&&H[0]!="close"||ue(u,7);else u.I==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?ue(u,7):zr(u):H[0]!="noop"&&u.l&&u.l.qa(H),u.A=0)}}$e(4)}catch{}}var Fu=class{constructor(s,c){this.g=s,this.map=c}};function Fi(s){this.l=s||10,a.PerformanceNavigationTiming?(s=a.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ui(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Bi(s){return s.h?1:s.g?s.g.size:0}function Ur(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function Br(s,c){s.g?s.g.add(c):s.h=c}function ji(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Fi.prototype.cancel=function(){if(this.i=qi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function qi(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const u of s.g.values())c=c.concat(u.G);return c}return C(s.i)}var $i=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Uu(s,c){if(s){s=s.split("&");for(let u=0;u<s.length;u++){const f=s[u].indexOf("=");let w,A=null;f>=0?(w=s[u].substring(0,f),A=s[u].substring(f+1)):w=s[u],c(w,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Ut(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;s instanceof Ut?(this.l=s.l,Qe(this,s.j),this.o=s.o,this.g=s.g,We(this,s.u),this.h=s.h,jr(this,Wi(s.i)),this.m=s.m):s&&(c=String(s).match($i))?(this.l=!1,Qe(this,c[1]||"",!0),this.o=Ye(c[2]||""),this.g=Ye(c[3]||"",!0),We(this,c[4]),this.h=Ye(c[5]||"",!0),jr(this,c[6]||"",!0),this.m=Ye(c[7]||"")):(this.l=!1,this.i=new Je(null,this.l))}Ut.prototype.toString=function(){const s=[];var c=this.j;c&&s.push(Xe(c,zi,!0),":");var u=this.g;return(u||c=="file")&&(s.push("//"),(c=this.o)&&s.push(Xe(c,zi,!0),"@"),s.push(Ge(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&s.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(Xe(u,u.charAt(0)=="/"?qu:ju,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",Xe(u,zu)),s.join("")},Ut.prototype.resolve=function(s){const c=St(this);let u=!!s.j;u?Qe(c,s.j):u=!!s.o,u?c.o=s.o:u=!!s.g,u?c.g=s.g:u=s.u!=null;var f=s.h;if(u)We(c,s.u);else if(u=!!s.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var w=c.h.lastIndexOf("/");w!=-1&&(f=c.h.slice(0,w+1)+f)}if(w=f,w==".."||w==".")f="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){f=w.lastIndexOf("/",0)==0,w=w.split("/");const A=[];for(let P=0;P<w.length;){const F=w[P++];F=="."?f&&P==w.length&&A.push(""):F==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),f&&P==w.length&&A.push("")):(A.push(F),f=!0)}f=A.join("/")}else f=w}return u?c.h=f:u=s.i.toString()!=="",u?jr(c,Wi(s.i)):u=!!s.m,u&&(c.m=s.m),c};function St(s){return new Ut(s)}function Qe(s,c,u){s.j=u?Ye(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function We(s,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);s.u=c}else s.u=null}function jr(s,c,u){c instanceof Je?(s.i=c,Hu(s.i,s.l)):(u||(c=Xe(c,$u)),s.i=new Je(c,s.l))}function K(s,c,u){s.i.set(c,u)}function On(s){return K(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function Ye(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Xe(s,c,u){return typeof s=="string"?(s=encodeURI(s).replace(c,Bu),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Bu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var zi=/[#\/\?@]/g,ju=/[#\?:]/g,qu=/[#\?]/g,$u=/[#\?@]/g,zu=/#/g;function Je(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function ce(s){s.g||(s.g=new Map,s.h=0,s.i&&Uu(s.i,function(c,u){s.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=Je.prototype,n.add=function(s,c){ce(this),this.i=null,s=we(this,s);let u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(c),this.h+=1,this};function Hi(s,c){ce(s),c=we(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function Gi(s,c){return ce(s),c=we(s,c),s.g.has(c)}n.forEach=function(s,c){ce(this),this.g.forEach(function(u,f){u.forEach(function(w){s.call(c,w,f,this)},this)},this)};function Ki(s,c){ce(s);let u=[];if(typeof c=="string")Gi(s,c)&&(u=u.concat(s.g.get(we(s,c))));else for(s=Array.from(s.g.values()),c=0;c<s.length;c++)u=u.concat(s[c]);return u}n.set=function(s,c){return ce(this),this.i=null,s=we(this,s),Gi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=Ki(this,s),s.length>0?String(s[0]):c):c};function Qi(s,c,u){Hi(s,c),u.length>0&&(s.i=null,s.g.set(we(s,c),C(u)),s.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var u=c[f];const w=Ge(u);u=Ki(this,u);for(let A=0;A<u.length;A++){let P=w;u[A]!==""&&(P+="="+Ge(u[A])),s.push(P)}}return this.i=s.join("&")};function Wi(s){const c=new Je;return c.i=s.i,s.g&&(c.g=new Map(s.g),c.h=s.h),c}function we(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function Hu(s,c){c&&!s.j&&(ce(s),s.i=null,s.g.forEach(function(u,f){const w=f.toLowerCase();f!=w&&(Hi(this,f),Qi(this,w,u))},s)),s.j=c}function Gu(s,c){const u=new He;if(a.Image){const f=new Image;f.onload=_(Bt,u,"TestLoadImage: loaded",!0,c,f),f.onerror=_(Bt,u,"TestLoadImage: error",!1,c,f),f.onabort=_(Bt,u,"TestLoadImage: abort",!1,c,f),f.ontimeout=_(Bt,u,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else c(!1)}function Ku(s,c){const u=new He,f=new AbortController,w=setTimeout(()=>{f.abort(),Bt(u,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:f.signal}).then(A=>{clearTimeout(w),A.ok?Bt(u,"TestPingServer: ok",!0,c):Bt(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),Bt(u,"TestPingServer: error",!1,c)})}function Bt(s,c,u,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(u)}catch{}}function Qu(){this.g=new Vu}function qr(s){this.i=s.Sb||null,this.h=s.ab||!1}I(qr,Ri),qr.prototype.g=function(){return new Mn(this.i,this.h)};function Mn(s,c){ft.call(this),this.H=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(Mn,ft),n=Mn.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=c,this.readyState=1,tn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(c.body=s),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ze(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,tn(this)),this.g&&(this.readyState=3,tn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Yi(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function Yi(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?Ze(this):tn(this),this.readyState==3&&Yi(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,Ze(this))},n.Na=function(s){this.g&&(this.response=s,Ze(this))},n.ga=function(){this.g&&Ze(this)};function Ze(s){s.readyState=4,s.l=null,s.j=null,s.B=null,tn(s)}n.setRequestHeader=function(s,c){this.A.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=c.next();return s.join(`\r
`)};function tn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Mn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Xi(s){let c="";return bn(s,function(u,f){c+=f,c+=":",c+=u,c+=`\r
`}),c}function $r(s,c,u){t:{for(f in u){var f=!1;break t}f=!0}f||(u=Xi(u),typeof s=="string"?u!=null&&Ge(u):K(s,c,u))}function X(s){ft.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(X,ft);var Wu=/^https?$/i,Yu=["POST","PUT"];n=X.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,c,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ni.g(),this.g.onreadystatechange=R(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(A){Ji(this,A);return}if(s=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)u.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const A of f.keys())u.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(A=>A.toLowerCase()=="content-type"),w=a.FormData&&s instanceof a.FormData,!(Array.prototype.indexOf.call(Yu,c,void 0)>=0)||f||w||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,P]of u)this.g.setRequestHeader(A,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(A){Ji(this,A)}};function Ji(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.o=5,Zi(s),xn(s)}function Zi(s){s.A||(s.A=!0,gt(s,"complete"),gt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,gt(this,"complete"),gt(this,"abort"),xn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xn(this,!0)),X.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?to(this):this.Xa())},n.Xa=function(){to(this)};function to(s){if(s.h&&typeof o<"u"){if(s.v&&jt(s)==4)setTimeout(s.Ca.bind(s),0);else if(gt(s,"readystatechange"),jt(s)==4){s.h=!1;try{const A=s.ca();t:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var u;if(!(u=c)){var f;if(f=A===0){let P=String(s.D).match($i)[1]||null;!P&&a.self&&a.self.location&&(P=a.self.location.protocol.slice(0,-1)),f=!Wu.test(P?P.toLowerCase():"")}u=f}if(u)gt(s,"complete"),gt(s,"success");else{s.o=6;try{var w=jt(s)>2?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.ca()+"]",Zi(s)}}finally{xn(s)}}}}function xn(s,c){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const u=s.g;s.g=null,c||gt(s,"ready");try{u.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function jt(s){return s.g?s.g.readyState:0}n.ca=function(){try{return jt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),Pu(c)}};function eo(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Xu(s){const c={};s=(s.g&&jt(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(m(s[f]))continue;var u=Mu(s[f]);const w=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const A=c[w]||[];c[w]=A,A.push(u)}vu(c,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function en(s,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||c}function no(s){this.za=0,this.i=[],this.j=new He,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=en("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=en("baseRetryDelayMs",5e3,s),this.Za=en("retryDelaySeedMs",1e4,s),this.Ta=en("forwardChannelMaxRetries",2,s),this.va=en("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new Fi(s&&s.concurrentRequestLimit),this.Ba=new Qu,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=no.prototype,n.ka=8,n.I=1,n.connect=function(s,c,u,f){_t(0),this.W=s,this.H=c||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.J=ho(this,null,this.W),Fn(this)};function zr(s){if(ro(s),s.I==3){var c=s.V++,u=St(s.J);if(K(u,"SID",s.M),K(u,"RID",c),K(u,"TYPE","terminate"),nn(s,u),c=new Ft(s,s.j,c),c.M=2,c.A=On(St(u)),u=!1,a.navigator&&a.navigator.sendBeacon)try{u=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!u&&a.Image&&(new Image().src=c.A,u=!0),u||(c.g=fo(c.j,null),c.g.ea(c.A)),c.F=Date.now(),kn(c)}lo(s)}function Ln(s){s.g&&(Gr(s),s.g.cancel(),s.g=null)}function ro(s){Ln(s),s.v&&(a.clearTimeout(s.v),s.v=null),Un(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&a.clearTimeout(s.m),s.m=null)}function Fn(s){if(!Ui(s.h)&&!s.m){s.m=!0;var c=s.Ea;vt||p(),rt||(vt(),rt=!0),E.add(c,s),s.D=0}}function Ju(s,c){return Bi(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=c.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=ze(d(s.Ea,s,c),uo(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const w=new Ft(this,this.j,s);let A=this.o;if(this.U&&(A?(A=mi(A),_i(A,this.U)):A=this.U),this.u!==null||this.R||(w.J=A,A=null),this.S)t:{for(var c=0,u=0;u<this.i.length;u++){e:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=u;break t}if(c===4096||u===this.i.length-1){c=u+1;break t}}c=1e3}else c=1e3;c=io(this,w,c),u=St(this.J),K(u,"RID",s),K(u,"CVER",22),this.G&&K(u,"X-HTTP-Session-Id",this.G),nn(this,u),A&&(this.R?c="headers="+Ge(Xi(A))+"&"+c:this.u&&$r(u,this.u,A)),Br(this.h,w),this.Ra&&K(u,"TYPE","init"),this.S?(K(u,"$req",c),K(u,"SID","null"),w.U=!0,xr(w,u,null)):xr(w,u,c),this.I=2}}else this.I==3&&(s?so(this,s):this.i.length==0||Ui(this.h)||so(this))};function so(s,c){var u;c?u=c.l:u=s.V++;const f=St(s.J);K(f,"SID",s.M),K(f,"RID",u),K(f,"AID",s.K),nn(s,f),s.u&&s.o&&$r(f,s.u,s.o),u=new Ft(s,s.j,u,s.D+1),s.u===null&&(u.J=s.o),c&&(s.i=c.G.concat(s.i)),c=io(s,u,1e3),u.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),Br(s.h,u),xr(u,f,c)}function nn(s,c){s.H&&bn(s.H,function(u,f){K(c,f,u)}),s.l&&bn({},function(u,f){K(c,f,u)})}function io(s,c,u){u=Math.min(s.i.length,u);const f=s.l?d(s.l.Ka,s.l,s):null;t:{var w=s.i;let F=-1;for(;;){const st=["count="+u];F==-1?u>0?(F=w[0].g,st.push("ofs="+F)):F=0:st.push("ofs="+F);let H=!0;for(let ct=0;ct<u;ct++){var A=w[ct].g;const Ct=w[ct].map;if(A-=F,A<0)F=Math.max(0,w[ct].g-100),H=!1;else try{A="req"+A+"_"||"";try{var P=Ct instanceof Map?Ct:Object.entries(Ct);for(const[le,qt]of P){let $t=qt;l(qt)&&($t=Dr(qt)),st.push(A+le+"="+encodeURIComponent($t))}}catch(le){throw st.push(A+"type="+encodeURIComponent("_badmap")),le}}catch{f&&f(Ct)}}if(H){P=st.join("&");break t}}P=void 0}return s=s.i.splice(0,u),c.G=s,P}function oo(s){if(!s.g&&!s.v){s.Y=1;var c=s.Da;vt||p(),rt||(vt(),rt=!0),E.add(c,s),s.A=0}}function Hr(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=ze(d(s.Da,s),uo(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,ao(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=ze(d(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,_t(10),Ln(this),ao(this))};function Gr(s){s.B!=null&&(a.clearTimeout(s.B),s.B=null)}function ao(s){s.g=new Ft(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var c=St(s.na);K(c,"RID","rpc"),K(c,"SID",s.M),K(c,"AID",s.K),K(c,"CI",s.F?"0":"1"),!s.F&&s.ia&&K(c,"TO",s.ia),K(c,"TYPE","xmlhttp"),nn(s,c),s.u&&s.o&&$r(c,s.u,s.o),s.O&&(s.g.H=s.O);var u=s.g;s=s.ba,u.M=1,u.A=On(St(c)),u.u=null,u.R=!0,Mi(u,s)}n.Va=function(){this.C!=null&&(this.C=null,Ln(this),Hr(this),_t(19))};function Un(s){s.C!=null&&(a.clearTimeout(s.C),s.C=null)}function co(s,c){var u=null;if(s.g==c){Un(s),Gr(s),s.g=null;var f=2}else if(Ur(s.h,c))u=c.G,ji(s.h,c),f=1;else return;if(s.I!=0){if(c.o)if(f==1){u=c.u?c.u.length:0,c=Date.now()-c.F;var w=s.D;f=Dn(),gt(f,new Vi(f,u)),Fn(s)}else oo(s);else if(w=c.m,w==3||w==0&&c.X>0||!(f==1&&Ju(s,c)||f==2&&Hr(s)))switch(u&&u.length>0&&(c=s.h,c.i=c.i.concat(u)),w){case 1:ue(s,5);break;case 4:ue(s,10);break;case 3:ue(s,6);break;default:ue(s,2)}}}function uo(s,c){let u=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(u*=2),u*c}function ue(s,c){if(s.j.info("Error code "+c),c==2){var u=d(s.bb,s),f=s.Ua;const w=!f;f=new Ut(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Qe(f,"https"),On(f),w?Gu(f.toString(),u):Ku(f.toString(),u)}else _t(2);s.I=0,s.l&&s.l.pa(c),lo(s),ro(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function lo(s){if(s.I=0,s.ja=[],s.l){const c=qi(s.h);(c.length!=0||s.i.length!=0)&&(O(s.ja,c),O(s.ja,s.i),s.h.i.length=0,C(s.i),s.i.length=0),s.l.oa()}}function ho(s,c,u){var f=u instanceof Ut?St(u):new Ut(u);if(f.g!="")c&&(f.g=c+"."+f.g),We(f,f.u);else{var w=a.location;f=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;const A=new Ut(null);f&&Qe(A,f),c&&(A.g=c),w&&We(A,w),u&&(A.h=u),f=A}return u=s.G,c=s.wa,u&&c&&K(f,u,c),K(f,"VER",s.ka),nn(s,f),f}function fo(s,c,u){if(c&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Aa&&!s.ma?new X(new qr({ab:u})):new X(s.ma),c.Fa(s.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function po(){}n=po.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Bn(){}Bn.prototype.g=function(s,c){return new At(s,c)};function At(s,c){ft.call(this),this.g=new no(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(s?s["X-WebChannel-Client-Profile"]=c.sa:s={"X-WebChannel-Client-Profile":c.sa}),this.g.U=s,(s=c&&c.Qb)&&!m(s)&&(this.g.u=s),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!m(c)&&(this.g.G=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new ve(this)}I(At,ft),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){zr(this.g)},At.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.v&&(u={},u.__data__=Dr(s),s=u);c.i.push(new Fu(c.Ya++,s)),c.I==3&&Fn(c)},At.prototype.N=function(){this.g.l=null,delete this.j,zr(this.g),delete this.g,At.Z.N.call(this)};function mo(s){Nr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){t:{for(const u in c){s=u;break t}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}I(mo,Nr);function go(){kr.call(this),this.status=1}I(go,kr);function ve(s){this.g=s}I(ve,po),ve.prototype.ra=function(){gt(this.g,"a")},ve.prototype.qa=function(s){gt(this.g,new mo(s))},ve.prototype.pa=function(s){gt(this.g,new go)},ve.prototype.oa=function(){gt(this.g,"b")},Bn.prototype.createWebChannel=Bn.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,yc=function(){return new Bn},_c=function(){return Dn()},gc=oe,ps={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Nn.NO_ERROR=0,Nn.TIMEOUT=8,Nn.HTTP_ERROR=6,Kn=Nn,Di.COMPLETE="complete",mc=Di,Si.EventType=qe,qe.OPEN="a",qe.CLOSE="b",qe.ERROR="c",qe.MESSAGE="d",ft.prototype.listen=ft.prototype.J,rn=Si,X.prototype.listenOnce=X.prototype.K,X.prototype.getLastError=X.prototype.Ha,X.prototype.getLastErrorCode=X.prototype.ya,X.prototype.getStatus=X.prototype.ca,X.prototype.getResponseJson=X.prototype.La,X.prototype.getResponseText=X.prototype.la,X.prototype.send=X.prototype.ea,X.prototype.setWithCredentials=X.prototype.Fa,pc=X}).apply(typeof qn<"u"?qn:typeof self<"u"?self:typeof window<"u"?window:{});const Fo="@firebase/firestore",Uo="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fe="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=new Ls("@firebase/firestore");function Ae(){return Ee.logLevel}function V(n,...t){if(Ee.logLevel<=j.DEBUG){const e=t.map(Hs);Ee.debug(`Firestore (${Fe}): ${n}`,...e)}}function Lt(n,...t){if(Ee.logLevel<=j.ERROR){const e=t.map(Hs);Ee.error(`Firestore (${Fe}): ${n}`,...e)}}function De(n,...t){if(Ee.logLevel<=j.WARN){const e=t.map(Hs);Ee.warn(`Firestore (${Fe}): ${n}`,...e)}}function Hs(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Ec(n,r,e)}function Ec(n,t,e){let r=`FIRESTORE (${Fe}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Lt(r),new Error(r)}function W(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||Ec(t,i,r)}function q(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends se{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class od{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(pt.UNAUTHENTICATED)))}shutdown(){}}class ad{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class cd{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){W(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new pe;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new pe,t.enqueueRetryable((()=>i(this.currentUser)))};const a=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await i(this.currentUser)}))},l=h=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new pe)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string",31837,{l:r}),new Tc(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return W(t===null||typeof t=="string",2055,{h:t}),new pt(t)}}class ud{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ld{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new ud(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(pt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Bo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hd{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ih(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){W(this.o===void 0,3512);const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const i=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Bo(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(W(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Bo(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=fd(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function U(n,t){return n<t?-1:n>t?1:0}function ms(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const i=n.charAt(r),o=t.charAt(r);if(i!==o)return es(i)===es(o)?U(i,o):es(i)?1:-1}return U(n.length,t.length)}const dd=55296,pd=57343;function es(n){const t=n.charCodeAt(0);return t>=dd&&t<=pd}function Ne(n,t,e){return n.length===t.length&&n.every(((r,i)=>e(r,t[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo="__name__";class bt{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&L(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return bt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof bt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=bt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const r=bt.isNumericId(t),i=bt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?bt.extractNumericId(t).compare(bt.extractNumericId(e)):ms(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Qt.fromString(t.substring(4,t.length-2))}}class Q extends bt{construct(t,e,r){return new Q(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((i=>i.length>0)))}return new Q(e)}static emptyPath(){return new Q([])}}const md=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends bt{construct(t,e,r){return new yt(t,e,r)}static isValidIdentifier(t){return md.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===jo}static keyField(){return new yt([jo])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new N(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new N(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new N(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new yt(e)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.path=t}static fromPath(t){return new k(Q.fromString(t))}static fromName(t){return new k(Q.fromString(t).popFirst(5))}static empty(){return new k(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new k(new Q(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(n,t,e){if(!e)throw new N(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function _d(n,t,e,r){if(t===!0&&r===!0)throw new N(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function qo(n){if(!k.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function yd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ed(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function gs(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ed(n);throw new N(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(n,t){const e={typeString:n};return t&&(e.value=t),e}function wn(n,t){if(!yd(n))throw new N(b.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new N(b.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=-62135596800,zo=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*zo);return new et(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<$o)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zo}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:et._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(wn(t,et._jsonSchema))return new et(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-$o;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}et._jsonSchemaVersion="firestore/timestamp/1.0",et._jsonSchema={type:nt("string",et._jsonSchemaVersion),seconds:nt("number"),nanoseconds:nt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{static fromTimestamp(t){return new x(t)}static min(){return new x(new et(0,0))}static max(){return new x(new et(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=-1;function Td(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=x.fromTimestamp(r===1e9?new et(e+1,0):new et(e,r));return new Jt(i,k.empty(),t)}function Id(n){return new Jt(n.readTime,n.key,gn)}class Jt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Jt(x.min(),k.empty(),gn)}static max(){return new Jt(x.max(),k.empty(),gn)}}function wd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=k.comparator(n.documentKey,t.documentKey),e!==0?e:U(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ad{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==vd)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S(((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):S.reject(e)}static resolve(t){return new S(((e,r)=>{e(t)}))}static reject(t){return new S(((e,r)=>{r(t)}))}static waitFor(t){return new S(((e,r)=>{let i=0,o=0,a=!1;t.forEach((l=>{++i,l.next((()=>{++o,a&&o===i&&e()}),(h=>r(h)))})),a=!0,o===i&&e()}))}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next((i=>i?S.resolve(i):r()));return e}static forEach(t,e){const r=[];return t.forEach(((i,o)=>{r.push(e.call(this,i,o))})),this.waitFor(r)}static mapArray(t,e){return new S(((r,i)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next((_=>{a[d]=_,++l,l===o&&r(a)}),(_=>i(_)))}}))}static doWhile(t,e){return new S(((r,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):r()};o()}))}}function Rd(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ue(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}pr.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd=-1;function mr(n){return n==null}function _s(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="";function Cd(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ho(t)),t=bd(n.get(e),t);return Ho(t)}function bd(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case Ic:e+="";break;default:e+=o}}return e}function Ho(n){return n+Ic+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function vn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Pd(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new Z(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new $n(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new $n(this.root,t,this.comparator,!1)}getReverseIterator(){return new $n(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new $n(this.root,t,this.comparator,!0)}}class $n{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??lt.RED,this.left=i??lt.EMPTY,this.right=o??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new lt(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw L(27949);return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ko(this.data.getIterator())}getIteratorFrom(t){return new Ko(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof ot)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ot(this.comparator);return e.data=t,e}}class Ko{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t){this.fields=t,t.sort(yt.comparator)}static empty(){return new zt([])}unionWith(t){let e=new ot(yt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new zt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ne(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new wc("Invalid base64 string: "+o):o}})(t);return new ht(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o})(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const Vd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zt(n){if(W(!!n,39018),typeof n=="string"){let t=0;const e=Vd.exec(n);if(W(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:J(n.seconds),nanos:J(n.nanos)}}function J(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function te(n){return typeof n=="string"?ht.fromBase64String(n):ht.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc="server_timestamp",Ac="__type__",Rc="__previous_value__",Sc="__local_write_time__";function Ks(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Ac])==null?void 0:r.stringValue)===vc}function gr(n){const t=n.mapValue.fields[Rc];return Ks(t)?gr(t):t}function _n(n){const t=Zt(n.mapValue.fields[Sc].timestampValue);return new et(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(t,e,r,i,o,a,l,h,d,_){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=_}}const nr="(default)";class yn{constructor(t,e){this.projectId=t,this.database=e||nr}static empty(){return new yn("","")}get isDefaultDatabase(){return this.database===nr}isEqual(t){return t instanceof yn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="__type__",kd="__max__",zn={mapValue:{}},Od="__vector__",ys="value";function ee(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ks(n)?4:xd(n)?9007199254740991:Md(n)?10:11:L(28295,{value:n})}function kt(n,t){if(n===t)return!0;const e=ee(n);if(e!==ee(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return _n(n).isEqual(_n(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Zt(i.timestampValue),l=Zt(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(i,o){return te(i.bytesValue).isEqual(te(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(i,o){return J(i.geoPointValue.latitude)===J(o.geoPointValue.latitude)&&J(i.geoPointValue.longitude)===J(o.geoPointValue.longitude)})(n,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return J(i.integerValue)===J(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=J(i.doubleValue),l=J(o.doubleValue);return a===l?_s(a)===_s(l):isNaN(a)&&isNaN(l)}return!1})(n,t);case 9:return Ne(n.arrayValue.values||[],t.arrayValue.values||[],kt);case 10:case 11:return(function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Go(a)!==Go(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!kt(a[h],l[h])))return!1;return!0})(n,t);default:return L(52216,{left:n})}}function En(n,t){return(n.values||[]).find((e=>kt(e,t)))!==void 0}function ke(n,t){if(n===t)return 0;const e=ee(n),r=ee(t);if(e!==r)return U(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(n.booleanValue,t.booleanValue);case 2:return(function(o,a){const l=J(o.integerValue||o.doubleValue),h=J(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(n,t);case 3:return Qo(n.timestampValue,t.timestampValue);case 4:return Qo(_n(n),_n(t));case 5:return ms(n.stringValue,t.stringValue);case 6:return(function(o,a){const l=te(o),h=te(a);return l.compareTo(h)})(n.bytesValue,t.bytesValue);case 7:return(function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const _=U(l[d],h[d]);if(_!==0)return _}return U(l.length,h.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,a){const l=U(J(o.latitude),J(a.latitude));return l!==0?l:U(J(o.longitude),J(a.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return Wo(n.arrayValue,t.arrayValue);case 10:return(function(o,a){var R,C,O,M;const l=o.fields||{},h=a.fields||{},d=(R=l[ys])==null?void 0:R.arrayValue,_=(C=h[ys])==null?void 0:C.arrayValue,I=U(((O=d==null?void 0:d.values)==null?void 0:O.length)||0,((M=_==null?void 0:_.values)==null?void 0:M.length)||0);return I!==0?I:Wo(d,_)})(n.mapValue,t.mapValue);case 11:return(function(o,a){if(o===zn.mapValue&&a===zn.mapValue)return 0;if(o===zn.mapValue)return 1;if(a===zn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},_=Object.keys(d);h.sort(),_.sort();for(let I=0;I<h.length&&I<_.length;++I){const R=ms(h[I],_[I]);if(R!==0)return R;const C=ke(l[h[I]],d[_[I]]);if(C!==0)return C}return U(h.length,_.length)})(n.mapValue,t.mapValue);default:throw L(23264,{he:e})}}function Qo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return U(n,t);const e=Zt(n),r=Zt(t),i=U(e.seconds,r.seconds);return i!==0?i:U(e.nanos,r.nanos)}function Wo(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=ke(e[i],r[i]);if(o)return o}return U(e.length,r.length)}function Oe(n){return Es(n)}function Es(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=Zt(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return te(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return k.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=Es(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Es(e.fields[a])}`;return i+"}"})(n.mapValue):L(61005,{value:n})}function Qn(n){switch(ee(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=gr(n);return t?16+Qn(t):16;case 5:return 2*n.stringValue.length;case 6:return te(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,o)=>i+Qn(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return vn(r.fields,((o,a)=>{i+=o.length+Qn(a)})),i})(n.mapValue);default:throw L(13486,{value:n})}}function Ts(n){return!!n&&"integerValue"in n}function Qs(n){return!!n&&"arrayValue"in n}function Yo(n){return!!n&&"nullValue"in n}function Xo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ns(n){return!!n&&"mapValue"in n}function Md(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Nd])==null?void 0:r.stringValue)===Od}function un(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return vn(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=un(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=un(n.arrayValue.values[e]);return t}return{...n}}function xd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===kd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.value=t}static empty(){return new Pt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ns(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=un(e)}setAll(t){let e=yt.emptyPath(),r={},i=[];t.forEach(((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=l.popLast()}a?r[l.lastSegment()]=un(a):i.push(l.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());ns(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return kt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];ns(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){vn(e,((i,o)=>t[i]=o));for(const i of r)delete t[i]}clone(){return new Pt(un(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t,e,r,i,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new mt(t,0,x.min(),x.min(),x.min(),Pt.empty(),0)}static newFoundDocument(t,e,r,i){return new mt(t,1,e,x.min(),r,i,0)}static newNoDocument(t,e){return new mt(t,2,e,x.min(),x.min(),Pt.empty(),0)}static newUnknownDocument(t,e){return new mt(t,3,e,x.min(),x.min(),Pt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(x.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof mt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t,e){this.position=t,this.inclusive=e}}function Jo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=k.comparator(k.fromName(a.referenceValue),e.key):r=ke(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Zo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!kt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ld(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{}class it extends Cc{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Ud(t,e,r):e==="array-contains"?new qd(t,r):e==="in"?new $d(t,r):e==="not-in"?new zd(t,r):e==="array-contains-any"?new Hd(t,r):new it(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Bd(t,r):new jd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(ke(e,this.value)):e!==null&&ee(this.value)===ee(e)&&this.matchesComparison(ke(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ot extends Cc{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Ot(t,e)}matches(t){return bc(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function bc(n){return n.op==="and"}function Pc(n){return Fd(n)&&bc(n)}function Fd(n){for(const t of n.filters)if(t instanceof Ot)return!1;return!0}function Is(n){if(n instanceof it)return n.field.canonicalString()+n.op.toString()+Oe(n.value);if(Pc(n))return n.filters.map((t=>Is(t))).join(",");{const t=n.filters.map((e=>Is(e))).join(",");return`${n.op}(${t})`}}function Vc(n,t){return n instanceof it?(function(r,i){return i instanceof it&&r.op===i.op&&r.field.isEqual(i.field)&&kt(r.value,i.value)})(n,t):n instanceof Ot?(function(r,i){return i instanceof Ot&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((o,a,l)=>o&&Vc(a,i.filters[l])),!0):!1})(n,t):void L(19439)}function Dc(n){return n instanceof it?(function(e){return`${e.field.canonicalString()} ${e.op} ${Oe(e.value)}`})(n):n instanceof Ot?(function(e){return e.op.toString()+" {"+e.getFilters().map(Dc).join(" ,")+"}"})(n):"Filter"}class Ud extends it{constructor(t,e,r){super(t,e,r),this.key=k.fromName(r.referenceValue)}matches(t){const e=k.comparator(t.key,this.key);return this.matchesComparison(e)}}class Bd extends it{constructor(t,e){super(t,"in",e),this.keys=Nc("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class jd extends it{constructor(t,e){super(t,"not-in",e),this.keys=Nc("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Nc(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map((r=>k.fromName(r.referenceValue)))}class qd extends it{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Qs(e)&&En(e.arrayValue,this.value)}}class $d extends it{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&En(this.value.arrayValue,e)}}class zd extends it{constructor(t,e){super(t,"not-in",e)}matches(t){if(En(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!En(this.value.arrayValue,e)}}class Hd extends it{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Qs(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>En(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t,e=null,r=[],i=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function ta(n,t=null,e=[],r=[],i=null,o=null,a=null){return new Gd(n,t,e,r,i,o,a)}function Ws(n){const t=q(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>Is(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),mr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>Oe(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>Oe(r))).join(",")),t.Te=e}return t.Te}function Ys(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Ld(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Vc(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Zo(n.startAt,t.startAt)&&Zo(n.endAt,t.endAt)}function ws(n){return k.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e=null,r=[],i=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Kd(n,t,e,r,i,o,a,l){return new _r(n,t,e,r,i,o,a,l)}function Xs(n){return new _r(n)}function ea(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Qd(n){return n.collectionGroup!==null}function ln(n){const t=q(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ot(yt.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new sr(o,r))})),e.has(yt.keyField().canonicalString())||t.Ie.push(new sr(yt.keyField(),r))}return t.Ie}function Nt(n){const t=q(n);return t.Ee||(t.Ee=Wd(t,ln(n))),t.Ee}function Wd(n,t){if(n.limitType==="F")return ta(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new sr(i.field,o)}));const e=n.endAt?new rr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new rr(n.startAt.position,n.startAt.inclusive):null;return ta(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function vs(n,t,e){return new _r(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function yr(n,t){return Ys(Nt(n),Nt(t))&&n.limitType===t.limitType}function kc(n){return`${Ws(Nt(n))}|lt:${n.limitType}`}function Re(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((i=>Dc(i))).join(", ")}]`),mr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((i=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(i))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((i=>Oe(i))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((i=>Oe(i))).join(",")),`Target(${r})`})(Nt(n))}; limitType=${n.limitType})`}function Er(n,t){return t.isFoundDocument()&&(function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):k.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,i){for(const o of ln(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0})(n,t)&&(function(r,i){return!(r.startAt&&!(function(a,l,h){const d=Jo(a,l,h);return a.inclusive?d<=0:d<0})(r.startAt,ln(r),i)||r.endAt&&!(function(a,l,h){const d=Jo(a,l,h);return a.inclusive?d>=0:d>0})(r.endAt,ln(r),i))})(n,t)}function Yd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Oc(n){return(t,e)=>{let r=!1;for(const i of ln(n)){const o=Xd(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Xd(n,t,e){const r=n.field.isKeyField()?k.comparator(t.key,e.key):(function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?ke(h,d):L(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){vn(this.inner,((e,r)=>{for(const[i,o]of r)t(i,o)}))}isEmpty(){return Pd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd=new Z(k.comparator);function ne(){return Jd}const Mc=new Z(k.comparator);function sn(...n){let t=Mc;for(const e of n)t=t.insert(e.key,e);return t}function Zd(n){let t=Mc;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function de(){return hn()}function xc(){return hn()}function hn(){return new Te((n=>n.toString()),((n,t)=>n.isEqual(t)))}const tp=new ot(k.comparator);function $(...n){let t=tp;for(const e of n)t=t.add(e);return t}const ep=new ot(U);function np(){return ep}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_s(t)?"-0":t}}function sp(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this._=void 0}}function ip(n,t,e){return n instanceof As?(function(i,o){const a={fields:{[Ac]:{stringValue:vc},[Sc]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Ks(o)&&(o=gr(o)),o&&(a.fields[Rc]=o),{mapValue:a}})(e,t):n instanceof ir?Lc(n,t):n instanceof or?Fc(n,t):(function(i,o){const a=ap(i,o),l=na(a)+na(i.Ae);return Ts(a)&&Ts(i.Ae)?sp(l):rp(i.serializer,l)})(n,t)}function op(n,t,e){return n instanceof ir?Lc(n,t):n instanceof or?Fc(n,t):e}function ap(n,t){return n instanceof Rs?(function(r){return Ts(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class As extends Tr{}class ir extends Tr{constructor(t){super(),this.elements=t}}function Lc(n,t){const e=Uc(t);for(const r of n.elements)e.some((i=>kt(i,r)))||e.push(r);return{arrayValue:{values:e}}}class or extends Tr{constructor(t){super(),this.elements=t}}function Fc(n,t){let e=Uc(t);for(const r of n.elements)e=e.filter((i=>!kt(i,r)));return{arrayValue:{values:e}}}class Rs extends Tr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function na(n){return J(n.integerValue||n.doubleValue)}function Uc(n){return Qs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function cp(n,t){return n.field.isEqual(t.field)&&(function(r,i){return r instanceof ir&&i instanceof ir||r instanceof or&&i instanceof or?Ne(r.elements,i.elements,kt):r instanceof Rs&&i instanceof Rs?kt(r.Ae,i.Ae):r instanceof As&&i instanceof As})(n.transform,t.transform)}class me{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new me}static exists(t){return new me(void 0,t)}static updateTime(t){return new me(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Wn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Js{}function Bc(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new lp(n.key,me.none()):new Zs(n.key,n.data,me.none());{const e=n.data,r=Pt.empty();let i=new ot(yt.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new Ir(n.key,r,new zt(i.toArray()),me.none())}}function up(n,t,e){n instanceof Zs?(function(i,o,a){const l=i.value.clone(),h=sa(i.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,t,e):n instanceof Ir?(function(i,o,a){if(!Wn(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=sa(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(jc(i)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,t,e):(function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function fn(n,t,e,r){return n instanceof Zs?(function(o,a,l,h){if(!Wn(o.precondition,a))return l;const d=o.value.clone(),_=ia(o.fieldTransforms,h,a);return d.setAll(_),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,t,e,r):n instanceof Ir?(function(o,a,l,h){if(!Wn(o.precondition,a))return l;const d=ia(o.fieldTransforms,h,a),_=a.data;return _.setAll(jc(o)),_.setAll(d),a.convertToFoundDocument(a.version,_).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((I=>I.field)))})(n,t,e,r):(function(o,a,l){return Wn(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,t,e)}function ra(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ne(r,i,((o,a)=>cp(o,a)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Zs extends Js{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ir extends Js{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function jc(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function sa(n,t,e){const r=new Map;W(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,l=t.data.field(o.field);r.set(o.field,op(a,l,e[i]))}return r}function ia(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,ip(o,a,t))}return r}class lp extends Js{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&up(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=fn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=fn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=xc();return this.mutations.forEach((i=>{const o=t.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(i.key)?null:l;const h=Bc(a,l);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(x.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),$())}isEqual(t){return this.batchId===t.batchId&&Ne(this.mutations,t.mutations,((e,r)=>ra(e,r)))&&Ne(this.baseMutations,t.baseMutations,((e,r)=>ra(e,r)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,B;function qc(n){if(n===void 0)return Lt("GRPC error has no .code"),b.UNKNOWN;switch(n){case tt.OK:return b.OK;case tt.CANCELLED:return b.CANCELLED;case tt.UNKNOWN:return b.UNKNOWN;case tt.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case tt.INTERNAL:return b.INTERNAL;case tt.UNAVAILABLE:return b.UNAVAILABLE;case tt.UNAUTHENTICATED:return b.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case tt.NOT_FOUND:return b.NOT_FOUND;case tt.ALREADY_EXISTS:return b.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return b.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case tt.ABORTED:return b.ABORTED;case tt.OUT_OF_RANGE:return b.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return b.UNIMPLEMENTED;case tt.DATA_LOSS:return b.DATA_LOSS;default:return L(39323,{code:n})}}(B=tt||(tt={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=new Qt([4294967295,4294967295],0);function oa(n){const t=pp().encode(n),e=new dc;return e.update(t),new Uint8Array(e.digest())}function aa(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Qt([e,r],0),new Qt([i,o],0)]}class ti{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new on(`Invalid padding: ${e}`);if(r<0)throw new on(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new on(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new on(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Qt.fromNumber(this.ge)}ye(t,e,r){let i=t.add(e.multiply(Qt.fromNumber(r)));return i.compare(mp)===1&&(i=new Qt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=oa(t),[r,i]=aa(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,i,o);if(!this.we(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new ti(o,i,e);return r.forEach((l=>a.insert(l))),a}insert(t){if(this.ge===0)return;const e=oa(t),[r,i]=aa(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,i,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class on extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,An.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new wr(x.min(),i,new Z(U),ne(),$())}}class An{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new An(r,e,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t,e,r,i){this.be=t,this.removedTargetIds=e,this.key=r,this.De=i}}class $c{constructor(t,e){this.targetId=t,this.Ce=e}}class zc{constructor(t,e,r=ht.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class ca{constructor(){this.ve=0,this.Fe=ua(),this.Me=ht.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=$(),e=$(),r=$();return this.Fe.forEach(((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:L(38017,{changeType:o})}})),new An(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=ua()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,W(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class gp{constructor(t){this.Ge=t,this.ze=new Map,this.je=ne(),this.Je=Hn(),this.He=Hn(),this.Ye=new Z(U)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:L(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((r,i)=>{this.rt(i)&&e(i)}))}st(t){const e=t.targetId,r=t.Ce.count,i=this.ot(e);if(i){const o=i.target;if(ws(o))if(r===0){const a=new k(o.path);this.et(e,a,mt.newNoDocument(a,x.min()))}else W(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const l=this.ut(t),h=l?this.ct(l,t,a):1;if(h!==0){this.it(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,l;try{a=te(r).toUint8Array()}catch(h){if(h instanceof wc)return De("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new ti(a,i,o)}catch(h){return De(h instanceof on?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let i=0;return r.forEach((o=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.et(e,o,null),i++)})),i}Tt(t){const e=new Map;this.ze.forEach(((o,a)=>{const l=this.ot(a);if(l){if(o.current&&ws(l.target)){const h=new k(l.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,mt.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.qe())}}));let r=$();this.He.forEach(((o,a)=>{let l=!0;a.forEachWhile((h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(t)));const i=new wr(t,e,this.Ye,this.je,r);return this.je=ne(),this.Je=Hn(),this.He=Hn(),this.Ye=new Z(U),i}Xe(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const i=this.nt(t);this.Et(t,e)?i.Qe(e,1):i.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new ca,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new ot(U),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new ot(U),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||V("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new ca),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Hn(){return new Z(k.comparator)}function ua(){return new Z(k.comparator)}const _p={asc:"ASCENDING",desc:"DESCENDING"},yp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ep={and:"AND",or:"OR"};class Tp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ss(n,t){return n.useProto3Json||mr(t)?t:{value:t}}function Ip(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function wp(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Pe(n){return W(!!n,49232),x.fromTimestamp((function(e){const r=Zt(e);return new et(r.seconds,r.nanos)})(n))}function vp(n,t){return Cs(n,t).canonicalString()}function Cs(n,t){const e=(function(i){return new Q(["projects",i.projectId,"databases",i.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Hc(n){const t=Q.fromString(n);return W(Yc(t),10190,{key:t.toString()}),t}function rs(n,t){const e=Hc(t);if(e.get(1)!==n.databaseId.projectId)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new k(Kc(e))}function Gc(n,t){return vp(n.databaseId,t)}function Ap(n){const t=Hc(n);return t.length===4?Q.emptyPath():Kc(t)}function la(n){return new Q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Kc(n){return W(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Rp(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:L(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=(function(d,_){return d.useProto3Json?(W(_===void 0||typeof _=="string",58123),ht.fromBase64String(_||"")):(W(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),ht.fromUint8Array(_||new Uint8Array))})(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&(function(d){const _=d.code===void 0?b.UNKNOWN:qc(d.code);return new N(_,d.message||"")})(a);e=new zc(r,i,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=rs(n,r.document.name),o=Pe(r.document.updateTime),a=r.document.createTime?Pe(r.document.createTime):x.min(),l=new Pt({mapValue:{fields:r.document.fields}}),h=mt.newFoundDocument(i,o,a,l),d=r.targetIds||[],_=r.removedTargetIds||[];e=new Yn(d,_,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=rs(n,r.document),o=r.readTime?Pe(r.readTime):x.min(),a=mt.newNoDocument(i,o),l=r.removedTargetIds||[];e=new Yn([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=rs(n,r.document),o=r.removedTargetIds||[];e=new Yn([],o,i,null)}else{if(!("filter"in t))return L(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new dp(i,o),l=r.targetId;e=new $c(l,a)}}return e}function Sp(n,t){return{documents:[Gc(n,t.path)]}}function Cp(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Gc(n,i);const o=(function(d){if(d.length!==0)return Wc(Ot.create(d,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((_=>(function(R){return{field:Se(R.field),direction:Vp(R.dir)}})(_)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Ss(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{ft:e,parent:i}}function bp(n){let t=Ap(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){W(r===1,65062);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=(function(I){const R=Qc(I);return R instanceof Ot&&Pc(R)?R.getFilters():[R]})(e.where));let a=[];e.orderBy&&(a=(function(I){return I.map((R=>(function(O){return new sr(Ce(O.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(O.direction))})(R)))})(e.orderBy));let l=null;e.limit&&(l=(function(I){let R;return R=typeof I=="object"?I.value:I,mr(R)?null:R})(e.limit));let h=null;e.startAt&&(h=(function(I){const R=!!I.before,C=I.values||[];return new rr(C,R)})(e.startAt));let d=null;return e.endAt&&(d=(function(I){const R=!I.before,C=I.values||[];return new rr(C,R)})(e.endAt)),Kd(t,i,a,o,l,"F",h,d)}function Pp(n,t){const e=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:i})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Qc(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ce(e.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ce(e.unaryFilter.field);return it.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ce(e.unaryFilter.field);return it.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ce(e.unaryFilter.field);return it.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}})(n):n.fieldFilter!==void 0?(function(e){return it.create(Ce(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Ot.create(e.compositeFilter.filters.map((r=>Qc(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L(1026)}})(e.compositeFilter.op))})(n):L(30097,{filter:n})}function Vp(n){return _p[n]}function Dp(n){return yp[n]}function Np(n){return Ep[n]}function Se(n){return{fieldPath:n.canonicalString()}}function Ce(n){return yt.fromServerFormat(n.fieldPath)}function Wc(n){return n instanceof it?(function(e){if(e.op==="=="){if(Xo(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NAN"}};if(Yo(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Xo(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NOT_NAN"}};if(Yo(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Se(e.field),op:Dp(e.op),value:e.value}}})(n):n instanceof Ot?(function(e){const r=e.getFilters().map((i=>Wc(i)));return r.length===1?r[0]:{compositeFilter:{op:Np(e.op),filters:r}}})(n):L(54877,{filter:n})}function Yc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e,r,i,o=x.min(),a=x.min(),l=ht.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new Ht(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(t){this.yt=t}}function Op(n){const t=bp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?vs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(){this.Cn=new xp}addToCollectionParentIndex(t,e){return this.Cn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(Jt.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(Jt.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class xp{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new ot(Q.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ot(Q.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Xc=41943040;class wt{static withCacheSize(t){return new wt(t,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt.DEFAULT_COLLECTION_PERCENTILE=10,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wt.DEFAULT=new wt(Xc,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wt.DISABLED=new wt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Me(0)}static cr(){return new Me(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="LruGarbageCollector",Lp=1048576;function da([n,t],[e,r]){const i=U(n,e);return i===0?U(t,r):i}class Fp{constructor(t){this.Ir=t,this.buffer=new ot(da),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();da(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Up{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){V(fa,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ue(e)?V(fa,"Ignoring IndexedDB error during garbage collection: ",e):await dr(e)}await this.Vr(3e5)}))}}class Bp{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return S.resolve(pr.ce);const r=new Fp(e);return this.mr.forEachTarget(t,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(t,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(ha)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ha):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,i,o,a,l,h,d;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),i=this.params.maximumSequenceNumbersToCollect):i=I,a=Date.now(),this.nthSequenceNumber(t,i)))).next((I=>(r=I,l=Date.now(),this.removeTargets(t,r,e)))).next((I=>(o=I,h=Date.now(),this.removeOrphanedDocuments(t,r)))).next((I=>(d=Date.now(),Ae()<=j.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-_}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${I} documents in `+(d-h)+`ms
Total Duration: ${d-_}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:I}))))}}function jp(n,t){return new Bp(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(){this.changes=new Te((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,mt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(r=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(r!==null&&fn(r.mutation,i,zt.empty(),et.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,$()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=$()){const i=de();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,r).next((o=>{let a=sn();return o.forEach(((l,h)=>{a=a.insert(l,h.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const r=de();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,$())))}populateOverlays(t,e,r){const i=[];return r.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((a,l)=>{e.set(a,l)}))}))}computeViews(t,e,r,i){let o=ne();const a=hn(),l=(function(){return hn()})();return e.forEach(((h,d)=>{const _=r.get(d.key);i.has(d.key)&&(_===void 0||_.mutation instanceof Ir)?o=o.insert(d.key,d):_!==void 0?(a.set(d.key,_.mutation.getFieldMask()),fn(_.mutation,d,_.mutation.getFieldMask(),et.now())):a.set(d.key,zt.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((d,_)=>a.set(d,_))),e.forEach(((d,_)=>l.set(d,new $p(_,a.get(d)??null)))),l)))}recalculateAndSaveOverlays(t,e){const r=hn();let i=new Z(((a,l)=>a-l)),o=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const l of a)l.keys().forEach((h=>{const d=e.get(h);if(d===null)return;let _=r.get(h)||zt.empty();_=l.applyToLocalView(d,_),r.set(h,_);const I=(i.get(l.batchId)||$()).add(h);i=i.insert(l.batchId,I)}))})).next((()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,_=h.value,I=xc();_.forEach((R=>{if(!o.has(R)){const C=Bc(e.get(R),r.get(R));C!==null&&I.set(R,C),o=o.add(R)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,I))}return S.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,i){return(function(a){return k.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Qd(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next((o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):S.resolve(de());let l=gn,h=o;return a.next((d=>S.forEach(d,((_,I)=>(l<I.largestBatchId&&(l=I.largestBatchId),o.get(_)?S.resolve():this.remoteDocumentCache.getEntry(t,_).next((R=>{h=h.insert(_,R)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,h,d,$()))).next((_=>({batchId:l,changes:Zd(_)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new k(e)).next((r=>{let i=sn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=sn();return this.indexManager.getCollectionParents(t,o).next((l=>S.forEach(l,(h=>{const d=(function(I,R){return new _r(R,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next((_=>{_.forEach(((I,R)=>{a=a.insert(I,R)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i)))).next((a=>{o.forEach(((h,d)=>{const _=d.getKey();a.get(_)===null&&(a=a.insert(_,mt.newInvalidDocument(_)))}));let l=sn();return a.forEach(((h,d)=>{const _=o.get(h);_!==void 0&&fn(_.mutation,d,zt.empty(),et.now()),Er(e,d)&&(l=l.insert(h,d))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return S.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:Pe(i.createTime)}})(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(i){return{name:i.name,query:Op(i.bundledQuery),readTime:Pe(i.readTime)}})(e)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(){this.overlays=new Z(k.comparator),this.qr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=de();return S.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&r.set(i,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((i,o)=>{this.St(t,e,o)})),S.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const i=de(),o=e.length+1,a=new k(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return S.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new Z(((d,_)=>d-_));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let _=o.get(d.largestBatchId);_===null&&(_=de(),o=o.insert(d.largestBatchId,_)),_.set(d.getKey(),d)}}const l=de(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,_)=>l.set(d,_))),!(l.size()>=i)););return S.resolve(l)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new fp(e,r));let o=this.qr.get(e);o===void 0&&(o=$(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.Qr=new ot(ut.$r),this.Ur=new ot(ut.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new ut(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new ut(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new k(new Q([])),r=new ut(e,t),i=new ut(e,t+1),o=[];return this.Ur.forEachInRange([r,i],(a=>{this.Gr(a),o.push(a.key)})),o}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new k(new Q([])),r=new ut(e,t),i=new ut(e,t+1);let o=$();return this.Ur.forEachInRange([r,i],(a=>{o=o.add(a.key)})),o}containsKey(t){const e=new ut(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ut{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return k.comparator(t.key,e.key)||U(t.Yr,e.Yr)}static Kr(t,e){return U(t.Yr,e.Yr)||k.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new ot(ut.$r)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new hp(o,e,r,i);this.mutationQueue.push(a);for(const l of i)this.Zr=this.Zr.add(new ut(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return S.resolve(a)}lookupMutationBatch(t,e){return S.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.ei(r),o=i<0?0:i;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?Sd:this.tr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ut(e,0),i=new ut(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,i],(a=>{const l=this.Xr(a.Yr);o.push(l)})),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ot(U);return e.forEach((i=>{const o=new ut(i,0),a=new ut(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],(l=>{r=r.add(l.Yr)}))})),S.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;k.isDocumentKey(o)||(o=o.child(""));const a=new ut(new k(o),0);let l=new ot(U);return this.Zr.forEachWhile((h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(h.Yr)),!0)}),a),S.resolve(this.ti(l))}ti(t){const e=[];return t.forEach((r=>{const i=this.Xr(r);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){W(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return S.forEach(e.mutations,(i=>{const o=new ut(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new ut(e,0),i=this.Zr.firstAfterOrEqual(r);return S.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(t){this.ri=t,this.docs=(function(){return new Z(k.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(e))}getEntries(t,e){let r=ne();return e.forEach((i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():mt.newInvalidDocument(i))})),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=ne();const a=e.path,l=new k(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:_}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||wd(Id(_),r)<=0||(i.has(_.key)||Er(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,i){L(9500)}ii(t,e){return S.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new Yp(this)}getSize(t){return S.resolve(this.size)}}class Yp extends qp{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(r)})),S.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(t){this.persistence=t,this.si=new Te((e=>Ws(e)),Ys),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.oi=0,this._i=new ei,this.targetCount=0,this.ai=Me.ur()}forEachTarget(t,e){return this.si.forEach(((r,i)=>e(i))),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),S.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new Me(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.Pr(e),S.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)})),S.waitFor(o).next((()=>i))}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((a=>{o.push(i.markPotentiallyOrphaned(t,a))})),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t,e){this.ui={},this.overlays={},this.ci=new pr(0),this.li=!1,this.li=!0,this.hi=new Kp,this.referenceDelegate=t(this),this.Pi=new Xp(this),this.indexManager=new Mp,this.remoteDocumentCache=(function(i){return new Wp(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new kp(e),this.Ii=new Hp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Gp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new Qp(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){V("MemoryPersistence","Starting transaction:",t);const i=new Jp(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ai(t,e){return S.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class Jp extends Ad{constructor(t){super(),this.currentSequenceNumber=t}}class ni{constructor(t){this.persistence=t,this.Ri=new ei,this.Vi=null}static mi(t){return new ni(t)}get fi(){if(this.Vi)return this.Vi;throw L(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),S.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.fi,(r=>{const i=k.fromPath(r);return this.gi(t,i).next((o=>{o||e.removeEntry(i,x.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return S.or([()=>S.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class ar{constructor(t,e){this.persistence=t,this.pi=new Te((r=>Cd(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=jp(this,e)}static mi(t,e){return new ar(t,e)}Ei(){}di(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((i=>r+i))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return S.forEach(this.pi,((r,i)=>this.br(t,r,i).next((o=>o?S.resolve():e(i)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(t,(a=>this.br(t,a,e).next((l=>{l||(r++,o.removeEntry(a,x.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Qn(t.data.value)),e}br(t,e,r){return S.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.pi.get(e);return S.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=i}static As(t,e){let r=$(),i=$();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new ri(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return yl()?8:Rd(gl())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ys(t,e).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ws(t,e,i,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new Zp;return this.Ss(t,e,a).next((l=>{if(o.result=l,this.Vs)return this.bs(t,e,a,l.size)}))})).next((()=>o.result))}bs(t,e,r,i){return r.documentReadCount<this.fs?(Ae()<=j.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Re(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),S.resolve()):(Ae()<=j.DEBUG&&V("QueryEngine","Query:",Re(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Ae()<=j.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Re(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Nt(e))):S.resolve())}ys(t,e){if(ea(e))return S.resolve(null);let r=Nt(e);return this.indexManager.getIndexType(t,r).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=vs(e,null,"F"),r=Nt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const a=$(...o);return this.ps.getDocuments(t,a).next((l=>this.indexManager.getMinOffset(t,r).next((h=>{const d=this.Ds(e,l);return this.Cs(e,d,a,h.readTime)?this.ys(t,vs(e,null,"F")):this.vs(t,d,e,h)}))))})))))}ws(t,e,r,i){return ea(e)||i.isEqual(x.min())?S.resolve(null):this.ps.getDocuments(t,r).next((o=>{const a=this.Ds(e,o);return this.Cs(e,a,r,i)?S.resolve(null):(Ae()<=j.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Re(e)),this.vs(t,a,e,Td(i,gn)).next((l=>l)))}))}Ds(t,e){let r=new ot(Oc(t));return e.forEach(((i,o)=>{Er(t,o)&&(r=r.add(o))})),r}Cs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,r){return Ae()<=j.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Re(e)),this.ps.getDocumentsMatchingQuery(t,e,Jt.min(),r)}vs(t,e,r,i){return this.ps.getDocumentsMatchingQuery(t,r,i).next((o=>(e.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="LocalStore",em=3e8;class nm{constructor(t,e,r,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new Z(U),this.xs=new Te((o=>Ws(o)),Ys),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new zp(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function rm(n,t,e,r){return new nm(n,t,e,r)}async function Zc(n,t){const e=q(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next((o=>(i=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],l=[];let h=$();for(const d of i){a.push(d.batchId);for(const _ of d.mutations)h=h.add(_.key)}for(const d of o){l.push(d.batchId);for(const _ of d.mutations)h=h.add(_.key)}return e.localDocuments.getDocuments(r,h).next((d=>({Ls:d,removedBatchIds:a,addedBatchIds:l})))}))}))}function tu(n){const t=q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function sm(n,t){const e=q(n),r=t.snapshotVersion;let i=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});i=e.Ms;const l=[];t.targetChanges.forEach(((_,I)=>{const R=i.get(I);if(!R)return;l.push(e.Pi.removeMatchingKeys(o,_.removedDocuments,I).next((()=>e.Pi.addMatchingKeys(o,_.addedDocuments,I))));let C=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(I)!==null?C=C.withResumeToken(ht.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):_.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(_.resumeToken,r)),i=i.insert(I,C),(function(M,D,Y){return M.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=em?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0})(R,C,_)&&l.push(e.Pi.updateTargetData(o,C))}));let h=ne(),d=$();if(t.documentUpdates.forEach((_=>{t.resolvedLimboDocuments.has(_)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))})),l.push(im(o,a,t.documentUpdates).next((_=>{h=_.ks,d=_.qs}))),!r.isEqual(x.min())){const _=e.Pi.getLastRemoteSnapshotVersion(o).next((I=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,r)));l.push(_)}return S.waitFor(l).next((()=>a.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,d))).next((()=>h))})).then((o=>(e.Ms=i,o)))}function im(n,t,e){let r=$(),i=$();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let a=ne();return e.forEach(((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),h.isNoDocument()&&h.version.isEqual(x.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):V(si,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)})),{ks:a,qs:i}}))}function om(n,t){const e=q(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return e.Pi.getTargetData(r,t).next((o=>o?(i=o,S.resolve(i)):e.Pi.allocateTargetId(r).next((a=>(i=new Ht(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Pi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=e.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(r.targetId,r),e.xs.set(t,r.targetId)),r}))}async function bs(n,t,e){const r=q(n),i=r.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,i)))}catch(a){if(!Ue(a))throw a;V(si,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(i.target)}function pa(n,t,e){const r=q(n);let i=x.min(),o=$();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,d,_){const I=q(h),R=I.xs.get(_);return R!==void 0?S.resolve(I.Ms.get(R)):I.Pi.getTargetData(d,_)})(r,a,Nt(t)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next((h=>{o=h}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,t,e?i:x.min(),e?o:$()))).next((l=>(am(r,Yd(t),l),{documents:l,Qs:o})))))}function am(n,t,e){let r=n.Os.get(t)||x.min();e.forEach(((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.Os.set(t,r)}class ma{constructor(){this.activeTargetIds=np()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class cm{constructor(){this.Mo=new ma,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new ma,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="ConnectivityMonitor";class _a{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){V(ga,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){V(ga,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gn=null;function Ps(){return Gn===null?Gn=(function(){return 268435456+Math.round(2147483648*Math.random())})():Gn++,"0x"+Gn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="RestConnection",lm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class hm{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===nr?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(t,e,r,i,o){const a=Ps(),l=this.zo(t,e.toUriEncodedString());V(ss,`Sending RPC '${t}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,i,o);const{host:d}=new URL(l),_=Os(d);return this.Jo(t,l,h,r,_).then((I=>(V(ss,`Received RPC '${t}' ${a}: `,I),I)),(I=>{throw De(ss,`RPC '${t}' ${a} failed with error: `,I,"url: ",l,"request:",r),I}))}Ho(t,e,r,i,o,a){return this.Go(t,e,r,i,o)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Fe})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,o)=>t[o]=i)),r&&r.headers.forEach(((i,o)=>t[o]=i))}zo(t,e){const r=lm[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class dm extends hm{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,i,o){const a=Ps();return new Promise(((l,h)=>{const d=new pc;d.setWithCredentials(!0),d.listenOnce(mc.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Kn.NO_ERROR:const I=d.getResponseJson();V(dt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(I)),l(I);break;case Kn.TIMEOUT:V(dt,`RPC '${t}' ${a} timed out`),h(new N(b.DEADLINE_EXCEEDED,"Request time out"));break;case Kn.HTTP_ERROR:const R=d.getStatus();if(V(dt,`RPC '${t}' ${a} failed with status:`,R,"response text:",d.getResponseText()),R>0){let C=d.getResponseJson();Array.isArray(C)&&(C=C[0]);const O=C==null?void 0:C.error;if(O&&O.status&&O.message){const M=(function(Y){const z=Y.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(z)>=0?z:b.UNKNOWN})(O.status);h(new N(M,O.message))}else h(new N(b.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new N(b.UNAVAILABLE,"Connection failed."));break;default:L(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{V(dt,`RPC '${t}' ${a} completed.`)}}));const _=JSON.stringify(i);V(dt,`RPC '${t}' ${a} sending request:`,i),d.send(e,"POST",_,r,15)}))}T_(t,e,r){const i=Ps(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=yc(),l=_c(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const _=o.join("");V(dt,`Creating RPC '${t}' stream ${i}: ${_}`,h);const I=a.createWebChannel(_,h);this.I_(I);let R=!1,C=!1;const O=new fm({Yo:D=>{C?V(dt,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(R||(V(dt,`Opening RPC '${t}' stream ${i} transport.`),I.open(),R=!0),V(dt,`RPC '${t}' stream ${i} sending:`,D),I.send(D))},Zo:()=>I.close()}),M=(D,Y,z)=>{D.listen(Y,(G=>{try{z(G)}catch(at){setTimeout((()=>{throw at}),0)}}))};return M(I,rn.EventType.OPEN,(()=>{C||(V(dt,`RPC '${t}' stream ${i} transport opened.`),O.o_())})),M(I,rn.EventType.CLOSE,(()=>{C||(C=!0,V(dt,`RPC '${t}' stream ${i} transport closed`),O.a_(),this.E_(I))})),M(I,rn.EventType.ERROR,(D=>{C||(C=!0,De(dt,`RPC '${t}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),O.a_(new N(b.UNAVAILABLE,"The operation could not be completed")))})),M(I,rn.EventType.MESSAGE,(D=>{var Y;if(!C){const z=D.data[0];W(!!z,16349);const G=z,at=(G==null?void 0:G.error)||((Y=G[0])==null?void 0:Y.error);if(at){V(dt,`RPC '${t}' stream ${i} received error:`,at);const vt=at.status;let rt=(function(g){const T=tt[g];if(T!==void 0)return qc(T)})(vt),E=at.message;rt===void 0&&(rt=b.INTERNAL,E="Unknown error status: "+vt+" with message "+at.message),C=!0,O.a_(new N(rt,E)),I.close()}else V(dt,`RPC '${t}' stream ${i} received:`,z),O.u_(z)}})),M(l,gc.STAT_EVENT,(D=>{D.stat===ps.PROXY?V(dt,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===ps.NOPROXY&&V(dt,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{O.__()}),0),O}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function is(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(n){return new Tp(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="PersistentStream";class pm{constructor(t,e,r,i,o,a,l,h){this.Mi=t,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new nu(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(Lt(e.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===e&&this.G_(r,i)}),(r=>{t((()=>{const i=new N(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return V(ya,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(V(ya,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class mm extends pm{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=Rp(this.serializer,t),r=(function(o){if(!("targetChange"in o))return x.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?x.min():a.readTime?Pe(a.readTime):x.min()})(t);return this.listener.H_(e,r)}Y_(t){const e={};e.database=la(this.serializer),e.addTarget=(function(o,a){let l;const h=a.target;if(l=ws(h)?{documents:Sp(o,h)}:{query:Cp(o,h).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=wp(o,a.resumeToken);const d=Ss(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(x.min())>0){l.readTime=Ip(o,a.snapshotVersion.toTimestamp());const d=Ss(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,t);const r=Pp(this.serializer,t);r&&(e.labels=r),this.q_(e)}Z_(t){const e={};e.database=la(this.serializer),e.removeTarget=t,this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{}class _m extends gm{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Go(t,Cs(e,r),i,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(b.UNKNOWN,o.toString())}))}Ho(t,e,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(t,Cs(e,r),i,a,l,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(b.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class ym{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Lt(e),this.aa=!1):V("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="RemoteStore";class Em{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{Sn(this)&&(V(xe,"Restarting streams for network reachability change."),await(async function(h){const d=q(h);d.Ea.add(4),await Rn(d),d.Ra.set("Unknown"),d.Ea.delete(4),await vr(d)})(this))}))})),this.Ra=new ym(r,i)}}async function vr(n){if(Sn(n))for(const t of n.da)await t(!0)}async function Rn(n){for(const t of n.da)await t(!1)}function ru(n,t){const e=q(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),ci(e)?ai(e):Be(e).O_()&&oi(e,t))}function ii(n,t){const e=q(n),r=Be(e);e.Ia.delete(t),r.O_()&&su(e,t),e.Ia.size===0&&(r.O_()?r.L_():Sn(e)&&e.Ra.set("Unknown"))}function oi(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(x.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Be(n).Y_(t)}function su(n,t){n.Va.Ue(t),Be(n).Z_(t)}function ai(n){n.Va=new gp({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Be(n).start(),n.Ra.ua()}function ci(n){return Sn(n)&&!Be(n).x_()&&n.Ia.size>0}function Sn(n){return q(n).Ea.size===0}function iu(n){n.Va=void 0}async function Tm(n){n.Ra.set("Online")}async function Im(n){n.Ia.forEach(((t,e)=>{oi(n,t)}))}async function wm(n,t){iu(n),ci(n)?(n.Ra.ha(t),ai(n)):n.Ra.set("Unknown")}async function vm(n,t,e){if(n.Ra.set("Online"),t instanceof zc&&t.state===2&&t.cause)try{await(async function(i,o){const a=o.cause;for(const l of o.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.Ia.delete(l),i.Va.removeTarget(l))})(n,t)}catch(r){V(xe,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ea(n,r)}else if(t instanceof Yn?n.Va.Ze(t):t instanceof $c?n.Va.st(t):n.Va.tt(t),!e.isEqual(x.min()))try{const r=await tu(n.localStore);e.compareTo(r)>=0&&await(function(o,a){const l=o.Va.Tt(a);return l.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const _=o.Ia.get(d);_&&o.Ia.set(d,_.withResumeToken(h.resumeToken,a))}})),l.targetMismatches.forEach(((h,d)=>{const _=o.Ia.get(h);if(!_)return;o.Ia.set(h,_.withResumeToken(ht.EMPTY_BYTE_STRING,_.snapshotVersion)),su(o,h);const I=new Ht(_.target,h,d,_.sequenceNumber);oi(o,I)})),o.remoteSyncer.applyRemoteEvent(l)})(n,e)}catch(r){V(xe,"Failed to raise snapshot:",r),await Ea(n,r)}}async function Ea(n,t,e){if(!Ue(t))throw t;n.Ea.add(1),await Rn(n),n.Ra.set("Offline"),e||(e=()=>tu(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{V(xe,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await vr(n)}))}async function Ta(n,t){const e=q(n);e.asyncQueue.verifyOperationInProgress(),V(xe,"RemoteStore received new credentials");const r=Sn(e);e.Ea.add(3),await Rn(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await vr(e)}async function Am(n,t){const e=q(n);t?(e.Ea.delete(2),await vr(e)):t||(e.Ea.add(2),await Rn(e),e.Ra.set("Unknown"))}function Be(n){return n.ma||(n.ma=(function(e,r,i){const o=q(e);return o.sa(),new mm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Xo:Tm.bind(null,n),t_:Im.bind(null,n),r_:wm.bind(null,n),H_:vm.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),ci(n)?ai(n):n.Ra.set("Unknown")):(await n.ma.stop(),iu(n))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new pe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,l=new ui(t,e,a,i,o);return l.start(r),l}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ou(n,t){if(Lt("AsyncQueue",`${t}: ${n}`),Ue(n))return new N(b.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{static emptySet(t){return new Ve(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||k.comparator(e.key,r.key):(e,r)=>k.comparator(e.key,r.key),this.keyedMap=sn(),this.sortedSet=new Z(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ve)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ve;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(){this.ga=new Z(k.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):L(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,r)=>{t.push(r)})),t}}class Le{constructor(t,e,r,i,o,a,l,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach((l=>{a.push({type:0,doc:l})})),new Le(t,e,Ve.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&yr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class Sm{constructor(){this.queries=wa(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const i=q(e),o=i.queries;i.queries=wa(),o.forEach(((a,l)=>{for(const h of l.Sa)h.onError(r)}))})(this,new N(b.ABORTED,"Firestore shutting down"))}}function wa(){return new Te((n=>kc(n)),yr)}async function Cm(n,t){const e=q(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.ba()&&t.Da()&&(r=2):(o=new Rm,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(i,!0);break;case 1:o.wa=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const l=ou(a,`Initialization of query '${Re(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&li(e)}async function bm(n,t){const e=q(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?i=t.Da()?0:1:!o.ba()&&t.Da()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Pm(n,t){const e=q(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const l of a.Sa)l.Fa(i)&&(r=!0);a.wa=i}}r&&li(e)}function Vm(n,t,e){const r=q(n),i=r.queries.get(t);if(i)for(const o of i.Sa)o.onError(e);r.queries.delete(t)}function li(n){n.Ca.forEach((t=>{t.next()}))}var Vs,va;(va=Vs||(Vs={})).Ma="default",va.Cache="cache";class Dm{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Le(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Le.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Vs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(t){this.key=t}}class cu{constructor(t){this.key=t}}class Nm{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=$(),this.mutatedKeys=$(),this.eu=Oc(t),this.tu=new Ve(this.eu)}get nu(){return this.Ya}ru(t,e){const r=e?e.iu:new Ia,i=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,l=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((_,I)=>{const R=i.get(_),C=Er(this.query,I)?I:null,O=!!R&&this.mutatedKeys.has(R.key),M=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let D=!1;R&&C?R.data.isEqual(C.data)?O!==M&&(r.track({type:3,doc:C}),D=!0):this.su(R,C)||(r.track({type:2,doc:C}),D=!0,(h&&this.eu(C,h)>0||d&&this.eu(C,d)<0)&&(l=!0)):!R&&C?(r.track({type:0,doc:C}),D=!0):R&&!C&&(r.track({type:1,doc:R}),D=!0,(h||d)&&(l=!0)),D&&(C?(a=a.add(C),o=M?o.add(_):o.delete(_)):(a=a.delete(_),o=o.delete(_)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const _=this.query.limitType==="F"?a.last():a.first();a=a.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{tu:a,iu:r,Cs:l,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((_,I)=>(function(C,O){const M=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{Rt:D})}};return M(C)-M(O)})(_.type,I.type)||this.eu(_.doc,I.doc))),this.ou(r),i=i??!1;const l=e&&!i?this._u():[],h=this.Xa.size===0&&this.current&&!i?1:0,d=h!==this.Za;return this.Za=h,a.length!==0||d?{snapshot:new Le(this.query,t.tu,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ia,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Ya=this.Ya.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ya=this.Ya.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=$(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const e=[];return t.forEach((r=>{this.Xa.has(r)||e.push(new cu(r))})),this.Xa.forEach((r=>{t.has(r)||e.push(new au(r))})),e}cu(t){this.Ya=t.Qs,this.Xa=$();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Le.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const hi="SyncEngine";class km{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Om{constructor(t){this.key=t,this.hu=!1}}class Mm{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Te((l=>kc(l)),yr),this.Iu=new Map,this.Eu=new Set,this.du=new Z(k.comparator),this.Au=new Map,this.Ru=new ei,this.Vu={},this.mu=new Map,this.fu=Me.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function xm(n,t,e=!0){const r=du(n);let i;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.lu()):i=await uu(r,t,e,!0),i}async function Lm(n,t){const e=du(n);await uu(e,t,!0,!1)}async function uu(n,t,e,r){const i=await om(n.localStore,Nt(t)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await Fm(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&ru(n.remoteStore,i),l}async function Fm(n,t,e,r,i){n.pu=(I,R,C)=>(async function(M,D,Y,z){let G=D.view.ru(Y);G.Cs&&(G=await pa(M.localStore,D.query,!1).then((({documents:E})=>D.view.ru(E,G))));const at=z&&z.targetChanges.get(D.targetId),vt=z&&z.targetMismatches.get(D.targetId)!=null,rt=D.view.applyChanges(G,M.isPrimaryClient,at,vt);return Ra(M,D.targetId,rt.au),rt.snapshot})(n,I,R,C);const o=await pa(n.localStore,t,!0),a=new Nm(t,o.Qs),l=a.ru(o.documents),h=An.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),d=a.applyChanges(l,n.isPrimaryClient,h);Ra(n,e,d.au);const _=new km(t,e,a);return n.Tu.set(t,_),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),d.snapshot}async function Um(n,t,e){const r=q(n),i=r.Tu.get(t),o=r.Iu.get(i.targetId);if(o.length>1)return r.Iu.set(i.targetId,o.filter((a=>!yr(a,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await bs(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),e&&ii(r.remoteStore,i.targetId),Ds(r,i.targetId)})).catch(dr)):(Ds(r,i.targetId),await bs(r.localStore,i.targetId,!0))}async function Bm(n,t){const e=q(n),r=e.Tu.get(t),i=e.Iu.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ii(e.remoteStore,r.targetId))}async function lu(n,t){const e=q(n);try{const r=await sm(e.localStore,t);t.targetChanges.forEach(((i,o)=>{const a=e.Au.get(o);a&&(W(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.hu=!0:i.modifiedDocuments.size>0?W(a.hu,14607):i.removedDocuments.size>0&&(W(a.hu,42227),a.hu=!1))})),await fu(e,r,t)}catch(r){await dr(r)}}function Aa(n,t,e){const r=q(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Tu.forEach(((o,a)=>{const l=a.view.va(t);l.snapshot&&i.push(l.snapshot)})),(function(a,l){const h=q(a);h.onlineState=l;let d=!1;h.queries.forEach(((_,I)=>{for(const R of I.Sa)R.va(l)&&(d=!0)})),d&&li(h)})(r.eventManager,t),i.length&&r.Pu.H_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function jm(n,t,e){const r=q(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Au.get(t),o=i&&i.key;if(o){let a=new Z(k.comparator);a=a.insert(o,mt.newNoDocument(o,x.min()));const l=$().add(o),h=new wr(x.min(),new Map,new Z(U),a,l);await lu(r,h),r.du=r.du.remove(o),r.Au.delete(t),fi(r)}else await bs(r.localStore,t,!1).then((()=>Ds(r,t,e))).catch(dr)}function Ds(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((r=>{n.Ru.containsKey(r)||hu(n,r)}))}function hu(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(ii(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),fi(n))}function Ra(n,t,e){for(const r of e)r instanceof au?(n.Ru.addReference(r.key,t),qm(n,r)):r instanceof cu?(V(hi,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,t),n.Ru.containsKey(r.key)||hu(n,r.key)):L(19791,{wu:r})}function qm(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Eu.has(r)||(V(hi,"New document in limbo: "+e),n.Eu.add(r),fi(n))}function fi(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new k(Q.fromString(t)),r=n.fu.next();n.Au.set(r,new Om(e)),n.du=n.du.insert(e,r),ru(n.remoteStore,new Ht(Nt(Xs(e.path)),r,"TargetPurposeLimboResolution",pr.ce))}}async function fu(n,t,e){const r=q(n),i=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,h)=>{a.push(r.pu(h,t,e).then((d=>{var _;if((d||e)&&r.isPrimaryClient){const I=d?!d.fromCache:(_=e==null?void 0:e.targetChanges.get(h.targetId))==null?void 0:_.current;r.sharedClientState.updateQueryState(h.targetId,I?"current":"not-current")}if(d){i.push(d);const I=ri.As(h.targetId,d);o.push(I)}})))})),await Promise.all(a),r.Pu.H_(i),await(async function(h,d){const _=q(h);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>S.forEach(d,(R=>S.forEach(R.Es,(C=>_.persistence.referenceDelegate.addReference(I,R.targetId,C))).next((()=>S.forEach(R.ds,(C=>_.persistence.referenceDelegate.removeReference(I,R.targetId,C)))))))))}catch(I){if(!Ue(I))throw I;V(si,"Failed to update sequence numbers: "+I)}for(const I of d){const R=I.targetId;if(!I.fromCache){const C=_.Ms.get(R),O=C.snapshotVersion,M=C.withLastLimboFreeSnapshotVersion(O);_.Ms=_.Ms.insert(R,M)}}})(r.localStore,o))}async function $m(n,t){const e=q(n);if(!e.currentUser.isEqual(t)){V(hi,"User change. New user:",t.toKey());const r=await Zc(e.localStore,t);e.currentUser=t,(function(o,a){o.mu.forEach((l=>{l.forEach((h=>{h.reject(new N(b.CANCELLED,a))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await fu(e,r.Ls)}}function zm(n,t){const e=q(n),r=e.Au.get(t);if(r&&r.hu)return $().add(r.key);{let i=$();const o=e.Iu.get(t);if(!o)return i;for(const a of o){const l=e.Tu.get(a);i=i.unionWith(l.view.nu)}return i}}function du(n){const t=q(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=lu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=zm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=jm.bind(null,t),t.Pu.H_=Pm.bind(null,t.eventManager),t.Pu.yu=Vm.bind(null,t.eventManager),t}class cr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=eu(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return rm(this.persistence,new tm,t.initialUser,this.serializer)}Cu(t){return new Jc(ni.mi,this.serializer)}Du(t){return new cm}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}cr.provider={build:()=>new cr};class Hm extends cr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){W(this.persistence.referenceDelegate instanceof ar,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Up(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?wt.withCacheSize(this.cacheSizeBytes):wt.DEFAULT;return new Jc((r=>ar.mi(r,e)),this.serializer)}}class Ns{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Aa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$m.bind(null,this.syncEngine),await Am(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Sm})()}createDatastore(t){const e=eu(t.databaseInfo.databaseId),r=(function(o){return new dm(o)})(t.databaseInfo);return(function(o,a,l,h){return new _m(o,a,l,h)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,i,o,a,l){return new Em(r,i,o,a,l)})(this.localStore,this.datastore,t.asyncQueue,(e=>Aa(this.syncEngine,e,0)),(function(){return _a.v()?new _a:new um})())}createSyncEngine(t,e){return(function(i,o,a,l,h,d,_){const I=new Mm(i,o,a,l,h,d);return _&&(I.gu=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(i){const o=q(i);V(xe,"RemoteStore shutting down."),o.Ea.add(5),await Rn(o),o.Aa.shutdown(),o.Ra.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}Ns.provider={build:()=>new Ns};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Lt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re="FirestoreClient";class Km{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=Gs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{V(re,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(V(re,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new pe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ou(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function os(n,t){n.asyncQueue.verifyOperationInProgress(),V(re,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Zc(t.localStore,i),r=i)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function Sa(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Qm(n);V(re,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>Ta(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>Ta(t.remoteStore,i))),n._onlineComponents=t}async function Qm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(re,"Using user provided OfflineComponentProvider");try{await os(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;De("Error using user provided cache. Falling back to memory cache: "+e),await os(n,new cr)}}else V(re,"Using default OfflineComponentProvider"),await os(n,new Hm(void 0));return n._offlineComponents}async function Wm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(re,"Using user provided OnlineComponentProvider"),await Sa(n,n._uninitializedComponentsProvider._online)):(V(re,"Using default OnlineComponentProvider"),await Sa(n,new Ns))),n._onlineComponents}async function Ym(n){const t=await Wm(n),e=t.eventManager;return e.onListen=xm.bind(null,t.syncEngine),e.onUnlisten=Um.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Lm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Bm.bind(null,t.syncEngine),e}function Xm(n,t,e={}){const r=new pe;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,l,h,d){const _=new Gm({next:R=>{_.Nu(),a.enqueueAndForget((()=>bm(o,I)));const C=R.docs.has(l);!C&&R.fromCache?d.reject(new N(b.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&R.fromCache&&h&&h.source==="server"?d.reject(new N(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(R)},error:R=>d.reject(R)}),I=new Dm(Xs(l.path),_,{includeMetadataChanges:!0,qa:!0});return Cm(o,I)})(await Ym(n),n.asyncQueue,t,e,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu="firestore.googleapis.com",ba=!0;class Pa{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new N(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=mu,this.ssl=ba}else this.host=t.host,this.ssl=t.ssl??ba;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Xc;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Lp)throw new N(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}_d("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pu(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class di{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pa({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pa(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new od;switch(r.type){case"firstParty":return new ld(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=Ca.get(e);r&&(V("ComponentProvider","Removing Datastore"),Ca.delete(e),r.terminate())})(this),Promise.resolve()}}function Jm(n,t,e,r={}){var d;n=gs(n,di);const i=Os(t),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},l=`${t}:${e}`;i&&(hl(`https://${l}`),ml("Firestore",!0)),o.host!==mu&&o.host!==l&&De("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:l,ssl:i,emulatorOptions:r};if(!pn(h,a)&&(n._setSettings(h),r.mockUserToken)){let _,I;if(typeof r.mockUserToken=="string")_=r.mockUserToken,I=pt.MOCK_USER;else{_=fl(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const R=r.mockUserToken.sub||r.mockUserToken.user_id;if(!R)throw new N(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new pt(R)}n._authCredentials=new ad(new Tc(_,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new pi(this.firestore,t,this._query)}}class Et{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Et(this.firestore,t,this._key)}toJSON(){return{type:Et._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(wn(e,Et._jsonSchema))return new Et(t,r||null,new k(Q.fromString(e.referencePath)))}}Et._jsonSchemaVersion="firestore/documentReference/1.0",Et._jsonSchema={type:nt("string",Et._jsonSchemaVersion),referencePath:nt("string")};class Tn extends pi{constructor(t,e,r){super(t,e,Xs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Et(this.firestore,null,new k(t))}withConverter(t){return new Tn(this.firestore,t,this._path)}}function hg(n,t,...e){if(n=lr(n),arguments.length===1&&(t=Gs.newId()),gd("doc","path",t),n instanceof di){const r=Q.fromString(t,...e);return qo(r),new Et(n,null,new k(r))}{if(!(n instanceof Et||n instanceof Tn))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(t,...e));return qo(r),new Et(n.firestore,n instanceof Tn?n.converter:null,new k(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va="AsyncQueue";class Da{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new nu(this,"async_queue_retry"),this._c=()=>{const r=is();r&&V(Va,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=is();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=is();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new pe;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Ue(t))throw t;V(Va,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,Lt("INTERNAL UNHANDLED ERROR: ",Na(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=ui.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(i),i}uc(){this.nc&&L(47125,{Pc:Na(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Na(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class gu extends di{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Da,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Da(t),this._firestoreClient=void 0,await t}}}function Zm(n,t){const e=typeof n=="object"?n:$a(),r=typeof n=="string"?n:nr,i=In(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=ul("firestore");o&&Jm(i,...o)}return i}function tg(n){if(n._terminated)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||eg(n),n._firestoreClient}function eg(n){var r,i,o;const t=n._freezeSettings(),e=(function(l,h,d,_){return new Dd(l,h,d,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,pu(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)})(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,t);n._componentsProvider||(i=t.localCache)!=null&&i._offlineComponentProvider&&((o=t.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new Km(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Vt(ht.fromBase64String(t))}catch(e){throw new N(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Vt(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Vt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(wn(t,Vt._jsonSchema))return Vt.fromBase64String(t.bytes)}}Vt._jsonSchemaVersion="firestore/bytes/1.0",Vt._jsonSchema={type:nt("string",Vt._jsonSchemaVersion),bytes:nt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Wt._jsonSchemaVersion}}static fromJSON(t){if(wn(t,Wt._jsonSchema))return new Wt(t.latitude,t.longitude)}}Wt._jsonSchemaVersion="firestore/geoPoint/1.0",Wt._jsonSchema={type:nt("string",Wt._jsonSchemaVersion),latitude:nt("number"),longitude:nt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Yt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(wn(t,Yt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Yt(t.vectorValues);throw new N(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Yt._jsonSchemaVersion="firestore/vectorValue/1.0",Yt._jsonSchema={type:nt("string",Yt._jsonSchemaVersion),vectorValues:nt("object")};const ng=new RegExp("[~\\*/\\[\\]]");function rg(n,t,e){if(t.search(ng)>=0)throw ka(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new _u(...t.split("."))._internalPath}catch{throw ka(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function ka(n,t,e,r,i){let o=`Function ${t}() called with invalid data`;o+=". ";let a="";return new N(b.INVALID_ARGUMENT,o+n+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new sg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Eu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class sg extends yu{data(){return super.data()}}function Eu(n,t){return typeof t=="string"?rg(n,t):t instanceof _u?t._internalPath:t._delegate._internalPath}class ig{convertValue(t,e="none"){switch(ee(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(te(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return vn(t,((i,o)=>{r[i]=this.convertValue(o,e)})),r}convertVectorValue(t){var r,i,o;const e=(o=(i=(r=t.fields)==null?void 0:r[ys].arrayValue)==null?void 0:i.values)==null?void 0:o.map((a=>J(a.doubleValue)));return new Yt(e)}convertGeoPoint(t){return new Wt(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=gr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(_n(t));default:return null}}convertTimestamp(t){const e=Zt(t);return new et(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Q.fromString(t);W(Yc(r),9688,{name:t});const i=new yn(r.get(1),r.get(3)),o=new k(r.popFirst(5));return i.isEqual(e)||Lt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}class an{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ge extends yu{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Xn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Eu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=ge._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}ge._jsonSchemaVersion="firestore/documentSnapshot/1.0",ge._jsonSchema={type:nt("string",ge._jsonSchemaVersion),bundleSource:nt("string","DocumentSnapshot"),bundleName:nt("string"),bundle:nt("string")};class Xn extends ge{data(t={}){return super.data(t)}}class dn{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new an(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new Xn(this._firestore,this._userDataWriter,r.key,r,new an(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map((l=>{const h=new Xn(i._firestore,i._userDataWriter,l.doc.key,l.doc,new an(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const h=new Xn(i._firestore,i._userDataWriter,l.doc.key,l.doc,new an(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,_=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),_=a.indexOf(l.doc.key)),{type:og(l.type),doc:h,oldIndex:d,newIndex:_}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=dn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Gs.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function og(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(n){n=gs(n,Et);const t=gs(n.firestore,gu);return Xm(tg(t),n._key).then((e=>cg(t,n,e)))}dn._jsonSchemaVersion="firestore/querySnapshot/1.0",dn._jsonSchema={type:nt("string",dn._jsonSchemaVersion),bundleSource:nt("string","QuerySnapshot"),bundleName:nt("string"),bundle:nt("string")};class ag extends ig{constructor(t){super(),this.firestore=t}convertBytes(t){return new Vt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Et(this.firestore,null,e)}}function cg(n,t,e){const r=e.docs.get(t._key),i=new ag(n);return new ge(n,i,t._key,r,new an(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){Fe=i})(Ah),Xt(new Mt("firestore",((r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new gu(new cd(r.getProvider("auth-internal")),new hd(a,r.getProvider("app-check-internal")),(function(d,_){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yn(d.options.projectId,_)})(a,i),a);return o={useFetchStreams:e,...o},l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),Dt(Fo,Uo,t),Dt(Fo,Uo,"esm2020")})();const ug={apiKey:"AIzaSyCZD0C9D-kJzIDqMuFW-cCadP2AwKZwrQU",authDomain:"ruanglaundripekanbaru.firebaseapp.com",projectId:"ruanglaundripekanbaru",storageBucket:"ruanglaundripekanbaru.firebasestorage.app",messagingSenderId:"966790682685",appId:"1:966790682685:web:c7a5901c195e69a82eb254",measurementId:"G-30VSMH8K0X"},Tu=qa(ug),dg=Zm(Tu);let as=null;const pg=async()=>(typeof window<"u"&&!as&&await nd()&&(as=td(Tu)),as);export{dg as a,hg as d,fg as g,pg as i};
