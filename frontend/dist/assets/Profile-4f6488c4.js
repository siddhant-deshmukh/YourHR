import{r as S,A as ye,b as ge,j as u,u as He}from"./index-51ebfd81.js";import{B as C,F as ze,M as G}from"./Toast-06b61f37.js";import{X as F,L as qe}from"./svgs-c2513cb0.js";const Je=()=>{const{authState:e,setAuthState:t}=S.useContext(ye),[n,r]=S.useState((e==null?void 0:e.name)||""),[s,o]=S.useState((e==null?void 0:e.about)||""),[i,l]=S.useState((e==null?void 0:e.skills)||[]),[f,c]=S.useState(""),[d,h]=ge(),[b,w]=S.useState("");function p(){h({})}return e?u.jsx("div",{className:"fixed top-0 left-0  z-10 items-center  w-screen h-screen px-2 bg-black bg-opacity-25 overflow-y-auto",children:u.jsxs("div",{className:"relative text-center my-10 w-full max-w-3xl bg-white mx-auto rounded-xl p-3 flex flex-col  space-y-3",children:[u.jsx("h3",{className:"mt-1 pb-8 text-xl font-bold  dark:text-gray-400",children:"Edit User Info"}),u.jsx("button",{className:"absolute top-0 right-2  hover:bg-gray-200 rounded-xl p-2",onClick:m=>{m.preventDefault(),p()},children:u.jsx(F,{})}),b.length>0&&u.jsxs("div",{className:"flex p-4 justify-between mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",children:[u.jsx("span",{children:b}),u.jsx("button",{onClick:m=>{m.preventDefault(),w("")},children:u.jsx(F,{})})]}),u.jsxs("div",{className:"",children:[u.jsx("div",{className:" font-bold mr-auto w-fit",children:"Name   :"}),u.jsx("input",{className:"outline-none border text-md w-full p-3 rounded-lg",maxLength:20,minLength:1,value:n,onChange:m=>{r(m.target.value)}})]}),u.jsxs("div",{className:"",children:[u.jsx("div",{className:" font-bold mr-auto w-fit",children:"About :"}),u.jsx("textarea",{className:"outline-none border min-h-[60px] max-h-[100px] text-md w-full p-3 rounded-lg",value:s,maxLength:200,onChange:m=>{o(m.target.value)}})]}),u.jsxs("div",{className:"w-full",children:[u.jsx("div",{className:"font-bold pt-3 w-fit mr-auto",children:"Skills    :"}),u.jsx("div",{className:"w-full max-w-full border border-gray-200 p-3 rounded-xl min-h-[50px]",children:u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-1",children:[i.map((m,y)=>u.jsxs("span",{className:"rounded-xl flex items-center justify-between w-full min-w-fit px-2.5 py-1.5 border",children:[m,u.jsx("button",{className:"hover:bg-gray-200 rounded-xl p-2",onClick:E=>{E.preventDefault(),l(O=>O.slice(0,y).concat(O.slice(y+1)))},children:u.jsx(F,{})})]})),u.jsxs("span",{className:"rounded-xl flex items-center justify-between w-full min-w-fit px-2.5 py-1.5 border border-blue-400",children:[u.jsx("input",{maxLength:20,minLength:1,placeholder:"new skill",className:"outline-none ",value:f,onChange:m=>{c(m.target.value)}}),u.jsx("button",{className:"hover:bg-gray-200 text-xl rounded-xl p-2",onClick:m=>{m.preventDefault(),!(f.length<1)&&l(y=>{let E=y.slice().concat([f]);return c(""),E})},children:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 text-blue-600",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})})]})]})})]}),u.jsxs("div",{className:"flex space-x-5 place-content-center",children:[u.jsx(C,{color:"blue",onClick:m=>{if(m.preventDefault(),n.length<1){w("Plese enter name");return}fetch("http://localhost:5000/u/",{method:"PUT",credentials:"include",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,about:s,skills:i})}).then(y=>{if(y.status===500){w("Server error");return}else if(y.status===400){w("Check inputs");return}return y.json()}).then(y=>{console.log("edit info",y),y&&y.msg?(t(E=>E?{...E,name:n,about:s,skills:i}:null),p()):w("Something goes wrong")})},children:"Save Changes"}),u.jsx(C,{color:"red",onClick:m=>{m.preventDefault(),p()},children:"Cancel"})]})]})}):u.jsx("div",{children:"Login first"})};function Ee(e,t){return function(){return e.apply(t,arguments)}}const{toString:$e}=Object.prototype,{getPrototypeOf:se}=Object,q=(e=>t=>{const n=$e.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),j=e=>(e=e.toLowerCase(),t=>q(t)===e),J=e=>t=>typeof t===e,{isArray:k}=Array,B=J("undefined");function Ve(e){return e!==null&&!B(e)&&e.constructor!==null&&!B(e.constructor)&&N(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Se=j("ArrayBuffer");function We(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Se(e.buffer),t}const Ke=J("string"),N=J("function"),Ne=J("number"),$=e=>e!==null&&typeof e=="object",Ge=e=>e===!0||e===!1,v=e=>{if(q(e)!=="object")return!1;const t=se(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Xe=j("Date"),Qe=j("File"),Ye=j("Blob"),Ze=j("FileList"),et=e=>$(e)&&N(e.pipe),tt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||N(e.append)&&((t=q(e))==="formdata"||t==="object"&&N(e.toString)&&e.toString()==="[object FormData]"))},nt=j("URLSearchParams"),rt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),k(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function Re(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const je=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Oe=e=>!B(e)&&e!==je;function ee(){const{caseless:e}=Oe(this)&&this||{},t={},n=(r,s)=>{const o=e&&Re(t,s)||s;v(t[o])&&v(r)?t[o]=ee(t[o],r):v(r)?t[o]=ee({},r):k(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&_(arguments[r],n);return t}const st=(e,t,n,{allOwnKeys:r}={})=>(_(t,(s,o)=>{n&&N(s)?e[o]=Ee(s,n):e[o]=s},{allOwnKeys:r}),e),ot=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),it=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},at=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&se(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},lt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},ct=e=>{if(!e)return null;if(k(e))return e;let t=e.length;if(!Ne(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ut=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&se(Uint8Array)),dt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},ft=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ht=j("HTMLFormElement"),pt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ce=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),mt=j("RegExp"),Ae=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};_(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},xt=e=>{Ae(e,(t,n)=>{if(N(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(N(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},wt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return k(e)?r(e):r(String(e).split(t)),n},bt=()=>{},yt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),X="abcdefghijklmnopqrstuvwxyz",ue="0123456789",Te={DIGIT:ue,ALPHA:X,ALPHA_DIGIT:X+X.toUpperCase()+ue},gt=(e=16,t=Te.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Et(e){return!!(e&&N(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const St=e=>{const t=new Array(10),n=(r,s)=>{if($(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=k(r)?[]:{};return _(r,(i,l)=>{const f=n(i,s+1);!B(f)&&(o[l]=f)}),t[s]=void 0,o}}return r};return n(e,0)},Nt=j("AsyncFunction"),Rt=e=>e&&($(e)||N(e))&&N(e.then)&&N(e.catch),a={isArray:k,isArrayBuffer:Se,isBuffer:Ve,isFormData:tt,isArrayBufferView:We,isString:Ke,isNumber:Ne,isBoolean:Ge,isObject:$,isPlainObject:v,isUndefined:B,isDate:Xe,isFile:Qe,isBlob:Ye,isRegExp:mt,isFunction:N,isStream:et,isURLSearchParams:nt,isTypedArray:ut,isFileList:Ze,forEach:_,merge:ee,extend:st,trim:rt,stripBOM:ot,inherits:it,toFlatObject:at,kindOf:q,kindOfTest:j,endsWith:lt,toArray:ct,forEachEntry:dt,matchAll:ft,isHTMLForm:ht,hasOwnProperty:ce,hasOwnProp:ce,reduceDescriptors:Ae,freezeMethods:xt,toObjectSet:wt,toCamelCase:pt,noop:bt,toFiniteNumber:yt,findKey:Re,global:je,isContextDefined:Oe,ALPHABET:Te,generateString:gt,isSpecCompliantForm:Et,toJSONObject:St,isAsyncFn:Nt,isThenable:Rt};function x(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(x,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ce=x.prototype,Pe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Pe[e]={value:e}});Object.defineProperties(x,Pe);Object.defineProperty(Ce,"isAxiosError",{value:!0});x.from=(e,t,n,r,s,o)=>{const i=Object.create(Ce);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},l=>l!=="isAxiosError"),x.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const jt=null;function te(e){return a.isPlainObject(e)||a.isArray(e)}function ke(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function de(e,t,n){return e?e.concat(t).map(function(s,o){return s=ke(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Ot(e){return a.isArray(e)&&!e.some(te)}const At=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function V(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,y){return!a.isUndefined(y[m])});const r=n.metaTokens,s=n.visitor||d,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!f&&a.isBlob(p))throw new x("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?f&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function d(p,m,y){let E=p;if(p&&!y&&typeof p=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&Ot(p)||(a.isFileList(p)||a.endsWith(m,"[]"))&&(E=a.toArray(p)))return m=ke(m),E.forEach(function(D,Ie){!(a.isUndefined(D)||D===null)&&t.append(i===!0?de([m],Ie,o):i===null?m:m+"[]",c(D))}),!1}return te(p)?!0:(t.append(de(y,m,o),c(p)),!1)}const h=[],b=Object.assign(At,{defaultVisitor:d,convertValue:c,isVisitable:te});function w(p,m){if(!a.isUndefined(p)){if(h.indexOf(p)!==-1)throw Error("Circular reference detected in "+m.join("."));h.push(p),a.forEach(p,function(E,O){(!(a.isUndefined(E)||E===null)&&s.call(t,E,a.isString(O)?O.trim():O,m,b))===!0&&w(E,m?m.concat(O):[O])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return w(e),t}function fe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function oe(e,t){this._pairs=[],e&&V(e,this,t)}const De=oe.prototype;De.append=function(t,n){this._pairs.push([t,n])};De.toString=function(t){const n=t?function(r){return t.call(this,r,fe)}:fe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Tt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Le(e,t,n){if(!t)return e;const r=n&&n.encode||Tt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new oe(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Ct{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const he=Ct,Fe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Pt=typeof URLSearchParams<"u"?URLSearchParams:oe,kt=typeof FormData<"u"?FormData:null,Dt=typeof Blob<"u"?Blob:null,Lt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Ft=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),R={isBrowser:!0,classes:{URLSearchParams:Pt,FormData:kt,Blob:Dt},isStandardBrowserEnv:Lt,isStandardBrowserWebWorkerEnv:Ft,protocols:["http","https","file","blob","url","data"]};function Bt(e,t){return V(e,new R.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return R.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function _t(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Ut(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Be(e){function t(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Ut(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(_t(r),s,n,0)}),n}return null}const vt={"Content-Type":void 0};function Mt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const W={transitional:Fe,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Be(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Bt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return V(l?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Mt(t)):t}],transformResponse:[function(t){const n=this.transitional||W.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?x.from(l,x.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){W.headers[t]={}});a.forEach(["post","put","patch"],function(t){W.headers[t]=a.merge(vt)});const ie=W,It=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ht=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&It[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},pe=Symbol("internals");function L(e){return e&&String(e).trim().toLowerCase()}function M(e){return e===!1||e==null?e:a.isArray(e)?e.map(M):String(e)}function zt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const qt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Q(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Jt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function $t(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class K{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,f,c){const d=L(f);if(!d)throw new Error("header name must be a non-empty string");const h=a.findKey(s,d);(!h||s[h]===void 0||c===!0||c===void 0&&s[h]!==!1)&&(s[h||f]=M(l))}const i=(l,f)=>a.forEach(l,(c,d)=>o(c,d,f));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!qt(t)?i(Ht(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=L(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return zt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=L(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Q(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=L(i),i){const l=a.findKey(r,i);l&&(!n||Q(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Q(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=M(s),delete n[o];return}const l=t?Jt(o):String(o).trim();l!==o&&delete n[o],n[l]=M(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[pe]=this[pe]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=L(i);r[l]||($t(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}K.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(K.prototype);a.freezeMethods(K);const A=K;function Y(e,t){const n=this||ie,r=t||n,s=A.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function _e(e){return!!(e&&e.__CANCEL__)}function U(e,t,n){x.call(this,e??"canceled",x.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(U,x,{__CANCEL__:!0});function Vt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new x("Request failed with status code "+n.status,[x.ERR_BAD_REQUEST,x.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Wt=R.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const f=[];f.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),a.isString(o)&&f.push("path="+o),a.isString(i)&&f.push("domain="+i),l===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Kt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Gt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ue(e,t){return e&&!Kt(t)?Gt(e,t):t}const Xt=R.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function Qt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Yt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const c=Date.now(),d=r[o];i||(i=c),n[s]=f,r[s]=c;let h=o,b=0;for(;h!==s;)b+=n[h++],h=h%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const w=d&&c-d;return w?Math.round(b*1e3/w):void 0}}function me(e,t){let n=0;const r=Yt(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,f=r(l),c=o<=i;n=o;const d={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:f||void 0,estimated:f&&i&&c?(i-o)/f:void 0,event:s};d[t?"download":"upload"]=!0,e(d)}}const Zt=typeof XMLHttpRequest<"u",en=Zt&&function(e){return new Promise(function(n,r){let s=e.data;const o=A.from(e.headers).normalize(),i=e.responseType;let l;function f(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(s)&&(R.isStandardBrowserEnv||R.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",p=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(w+":"+p))}const d=Ue(e.baseURL,e.url);c.open(e.method.toUpperCase(),Le(d,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function h(){if(!c)return;const w=A.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),m={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:w,config:e,request:c};Vt(function(E){n(E),f()},function(E){r(E),f()},m),c=null}if("onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(h)},c.onabort=function(){c&&(r(new x("Request aborted",x.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new x("Network Error",x.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let p=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const m=e.transitional||Fe;e.timeoutErrorMessage&&(p=e.timeoutErrorMessage),r(new x(p,m.clarifyTimeoutError?x.ETIMEDOUT:x.ECONNABORTED,e,c)),c=null},R.isStandardBrowserEnv){const w=(e.withCredentials||Xt(d))&&e.xsrfCookieName&&Wt.read(e.xsrfCookieName);w&&o.set(e.xsrfHeaderName,w)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(p,m){c.setRequestHeader(m,p)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",me(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",me(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=w=>{c&&(r(!w||w.type?new U(null,e,c):w),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const b=Qt(d);if(b&&R.protocols.indexOf(b)===-1){r(new x("Unsupported protocol "+b+":",x.ERR_BAD_REQUEST,e));return}c.send(s||null)})},I={http:jt,xhr:en};a.forEach(I,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const tn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?I[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new x(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(I,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:I};function Z(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new U(null,e)}function xe(e){return Z(e),e.headers=A.from(e.headers),e.data=Y.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),tn.getAdapter(e.adapter||ie.adapter)(e).then(function(r){return Z(e),r.data=Y.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return _e(r)||(Z(e),r&&r.response&&(r.response.data=Y.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const we=e=>e instanceof A?e.toJSON():e;function P(e,t){t=t||{};const n={};function r(c,d,h){return a.isPlainObject(c)&&a.isPlainObject(d)?a.merge.call({caseless:h},c,d):a.isPlainObject(d)?a.merge({},d):a.isArray(d)?d.slice():d}function s(c,d,h){if(a.isUndefined(d)){if(!a.isUndefined(c))return r(void 0,c,h)}else return r(c,d,h)}function o(c,d){if(!a.isUndefined(d))return r(void 0,d)}function i(c,d){if(a.isUndefined(d)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function l(c,d,h){if(h in t)return r(c,d);if(h in e)return r(void 0,c)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(c,d)=>s(we(c),we(d),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(d){const h=f[d]||s,b=h(e[d],t[d],d);a.isUndefined(b)&&h!==l||(n[d]=b)}),n}const ve="1.4.0",ae={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ae[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const be={};ae.transitional=function(t,n,r){function s(o,i){return"[Axios v"+ve+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new x(s(i," has been removed"+(n?" in "+n:"")),x.ERR_DEPRECATED);return n&&!be[i]&&(be[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function nn(e,t,n){if(typeof e!="object")throw new x("options must be an object",x.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],f=l===void 0||i(l,o,e);if(f!==!0)throw new x("option "+o+" must be "+f,x.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new x("Unknown option "+o,x.ERR_BAD_OPTION)}}const ne={assertOptions:nn,validators:ae},T=ne.validators;class z{constructor(t){this.defaults=t,this.interceptors={request:new he,response:new he}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=P(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ne.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ne.assertOptions(s,{encode:T.function,serialize:T.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=A.concat(i,o);const l=[];let f=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(f=f&&m.synchronous,l.unshift(m.fulfilled,m.rejected))});const c=[];this.interceptors.response.forEach(function(m){c.push(m.fulfilled,m.rejected)});let d,h=0,b;if(!f){const p=[xe.bind(this),void 0];for(p.unshift.apply(p,l),p.push.apply(p,c),b=p.length,d=Promise.resolve(n);h<b;)d=d.then(p[h++],p[h++]);return d}b=l.length;let w=n;for(h=0;h<b;){const p=l[h++],m=l[h++];try{w=p(w)}catch(y){m.call(this,y);break}}try{d=xe.call(this,w)}catch(p){return Promise.reject(p)}for(h=0,b=c.length;h<b;)d=d.then(c[h++],c[h++]);return d}getUri(t){t=P(this.defaults,t);const n=Ue(t.baseURL,t.url);return Le(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){z.prototype[t]=function(n,r){return this.request(P(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(P(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}z.prototype[t]=n(),z.prototype[t+"Form"]=n(!0)});const H=z;class le{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new U(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new le(function(s){t=s}),cancel:t}}}const rn=le;function sn(e){return function(n){return e.apply(null,n)}}function on(e){return a.isObject(e)&&e.isAxiosError===!0}const re={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(re).forEach(([e,t])=>{re[t]=e});const an=re;function Me(e){const t=new H(e),n=Ee(H.prototype.request,t);return a.extend(n,H.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Me(P(e,s))},n}const g=Me(ie);g.Axios=H;g.CanceledError=U;g.CancelToken=rn;g.isCancel=_e;g.VERSION=ve;g.toFormData=V;g.AxiosError=x;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=sn;g.isAxiosError=on;g.mergeConfig=P;g.AxiosHeaders=A;g.formToJSON=e=>Be(a.isHTMLForm(e)?new FormData(e):e);g.HttpStatusCode=an;g.default=g;const ln=g,cn=()=>{const[e,t]=S.useState(""),[n,r]=S.useState(null);return u.jsxs("div",{className:"",children:[u.jsx("h1",{className:"w-full text-center text-xl",children:" Upload Resume "}),e.length>0&&u.jsxs("div",{className:"flex p-4 justify-between mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",children:[u.jsx("span",{children:e}),u.jsx("button",{onClick:s=>{s.preventDefault(),t("")},children:u.jsx(F,{})})]}),u.jsxs("div",{id:"fileUpload",className:"my-10",children:[u.jsx("div",{className:"mb-2 block",children:u.jsx(qe,{htmlFor:"file",value:"Upload file"})}),u.jsx(ze,{id:"file",maxLength:1024*1024,minLength:1024,accept:"application/pdf",helperText:"maxsize 1 MB, allowed format .pdf",onChange:s=>{if(s.target.files){if(s.target.files[0].size>1024*1024){t("Maximum size 1MB ");return}r(s.target.files[0])}}})]}),u.jsx(C,{onClick:s=>{if(s.preventDefault(),!n){t("Select file");return}fetch("http://localhost:5000/u/resume",{method:"POST",credentials:"include",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({Content_Length:n.size,Content_Type:n.type})}).then(o=>{if(o.status===500){t("Server error");return}else if(o.status===400){t("Check inputs");return}return o.json()}).then(o=>{console.log("post resume",o);let i=new FormData;Object.entries(o.fields).forEach(([f,c])=>{i.append(f,c),console.log(f,c)});const l=o.url;i.append("file",n),ln({method:"post",headers:{"Content-Type":"multipart/form-data"},url:l,data:i}).then(function(f){console.log(f,"uploaded"),console.log(f.data,"uploaded"),f.data}).catch(function(f){console.log("error uploading image",f.response.data)})})},children:"Upload Resume"})]})},hn=()=>{const{authState:e,setAuthState:t}=S.useContext(ye),[n,r]=ge(),[s,o]=S.useState(null),[i,l]=S.useState(""),f=S.useRef(null),c=He();return e?u.jsxs("div",{className:"mx-auto max-w-3xl pt-10 px-4 flex flex-col space-y-5",children:[i.length!==0&&u.jsxs("div",{className:"flex p-4 justify-between mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",children:[u.jsx("span",{children:i}),u.jsx("button",{onClick:d=>{d.preventDefault(),l("")},children:u.jsx(F,{})})]}),u.jsxs("div",{className:"flex space-x-5 w-full",children:[u.jsx("div",{className:"text-xl font-bold min-w-fit",children:"Name   :"}),u.jsx("div",{className:"text-xl w-full max-w-full  border-b",children:e.name})]}),u.jsxs("div",{className:"flex space-x-5 w-full",children:[u.jsx("div",{className:"text-xl font-bold min-w-fit pt-3",children:"About :"}),u.jsx("div",{className:"w-full max-w-full border border-gray-200 p-3 rounded-xl",children:e.about})]}),u.jsxs("div",{className:"flex space-x-5 w-full",children:[u.jsx("div",{className:"text-xl font-bold min-w-fit pt-3",children:"Skills    :"}),u.jsx("div",{className:"w-full max-w-full border border-gray-200 p-3 rounded-xl min-h-[50px]",children:u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-1",children:e.skills.map((d,h)=>u.jsx("span",{className:"rounded-xl  w-full min-w-fit px-2.5 py-1.5 border",children:d},h))})})]}),u.jsxs("div",{className:"flex space-x-5 w-full",children:[u.jsx("div",{className:"text-xl font-bold min-w-fit pt-3",children:"Resume  :"}),u.jsx("div",{className:"flex overflow-hidden items-center border rounded-xl",children:u.jsxs("button",{className:"flex items-center p-2 space-x-2",onClick:d=>{d.preventDefault(),fetch(`http://localhost:5000/u/resume/${e==null?void 0:e._id}`,{method:"GET",credentials:"include",mode:"cors",headers:{"Content-Type":"application/pdf"}}).then(h=>{if(console.log("response",h,h.status,h.status===404,typeof h.status),h.status==404){l("No resume uploaded!");return}else if(h.status===400){l("Some error occured with user");return}else if(h.status===403){l("Can not get resume link more than 20 times");return}else if(h.status===500){l("Server error occured");return}return h.json()}).then(h=>{var b;h&&h.url&&((b=f.current)==null||b.click(),alert("Downloading file!"))}).catch(h=>{console.log(h)})},children:[u.jsx("div",{className:"p-3",children:"Download Resume"}),u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"})})]})})]}),u.jsxs("div",{className:"flex w-full place-content-center space-x-2",children:[u.jsx(C,{onClick:d=>{d.preventDefault(),r({edit:"info"})},children:"Edit Info"}),u.jsx(C,{onClick:d=>{d.preventDefault(),r({edit:"resume"})},children:"Upload Resume"})]}),n.get("edit")==="info"&&u.jsx(Je,{}),u.jsxs(G,{show:n.get("edit")==="resume",size:"md",popup:!0,onClose:()=>{r({})},children:[u.jsx(G.Header,{}),u.jsx(G.Body,{children:u.jsx(cn,{})})]}),u.jsx("a",{href:typeof s=="string"?s:"",download:"resume.pdf",className:"hidden",ref:f})]}):u.jsxs("div",{className:" w-full",children:[u.jsx("div",{className:"text-xl text-center font-bold my-10",children:"Please login first!"}),u.jsx("div",{className:"mx-auto w-fit",children:u.jsx(C,{onClick:d=>{d.preventDefault(),c("/auth")},children:"Login / Register"})})]})};export{hn as default};