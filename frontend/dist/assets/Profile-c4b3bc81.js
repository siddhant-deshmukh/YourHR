import{r as E,b as Ee,A as Se,j as u,u as qe}from"./index-e17296ec.js";import{B as P,S as Ne,F as Je,M as X}from"./Toast-3f62f61b.js";import{X as k,L as $e}from"./svgs-91355a29.js";const Ve=()=>{const[e,t]=E.useState(""),[n,r]=E.useState(""),[s,o]=E.useState(!1),[i,c]=Ee(),{authState:f,setAuthState:l}=E.useContext(Se),[d,m]=E.useState((f==null?void 0:f.name)||""),[y,h]=E.useState((f==null?void 0:f.about)||""),[p,x]=E.useState((f==null?void 0:f.skills)||[]);function S(){c({})}const N=E.useCallback(()=>{o(!0),fetch("https://your-hr-sz1o.onrender.com/u/",{method:"PUT",credentials:"include",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d,about:y,skills:p})}).then(w=>{if(w.status===500){t("Server error");return}else if(w.status===400){t("Check inputs");return}return w.json()}).then(w=>{console.log("edit info",w),w&&w.msg?(l(j=>j?{...j,name:d,about:y,skills:p}:null),S()):t("Something goes wrong")}).catch(w=>{console.error(w),t("Something goes wrong")}).finally(()=>{o(!1)})},[d,y,p]);return f?u.jsx("div",{className:"fixed top-0 left-0  z-10 items-center  w-screen h-screen px-2 bg-black bg-opacity-25 overflow-y-auto",children:u.jsxs("div",{className:"relative text-center my-10 w-full max-w-3xl bg-white mx-auto rounded-xl p-3 flex flex-col  space-y-3",children:[u.jsx("h3",{className:"mt-1 pb-8 text-xl font-bold  dark:text-gray-400",children:"Edit User Info"}),u.jsx("button",{className:"absolute top-0 right-2  hover:bg-gray-200 rounded-xl p-2",onClick:w=>{w.preventDefault(),S()},children:u.jsx(k,{})}),e.length>0&&u.jsxs("div",{className:"flex p-4 justify-between mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",children:[u.jsx("span",{children:e}),u.jsx("button",{onClick:w=>{w.preventDefault(),t("")},children:u.jsx(k,{})})]}),u.jsxs("div",{className:"",children:[u.jsx("div",{className:" font-bold mr-auto w-fit",children:"Name   :"}),u.jsx("input",{className:"outline-none border text-md w-full p-3 rounded-lg",maxLength:20,minLength:1,value:d,onChange:w=>{m(w.target.value)}})]}),u.jsxs("div",{className:"",children:[u.jsx("div",{className:" font-bold mr-auto w-fit",children:"About :"}),u.jsx("textarea",{className:"outline-none border min-h-[60px] max-h-[100px] text-md w-full p-3 rounded-lg",value:y,maxLength:200,onChange:w=>{h(w.target.value)}})]}),u.jsxs("div",{className:"w-full",children:[u.jsx("div",{className:"font-bold pt-3 w-fit mr-auto",children:"Skills    :"}),u.jsx("div",{className:"w-full max-w-full border border-gray-200 p-3 rounded-xl min-h-[50px]",children:u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-1",children:[p.map((w,j)=>u.jsxs("span",{className:"rounded-xl flex items-center justify-between w-full min-w-fit px-2.5 py-1.5 border",children:[w,u.jsx("button",{className:"hover:bg-gray-200 rounded-xl p-2",onClick:F=>{F.preventDefault(),x(ue=>ue.slice(0,j).concat(ue.slice(j+1)))},children:u.jsx(k,{})})]})),u.jsxs("span",{className:"rounded-xl flex items-center justify-between w-full min-w-fit px-2.5 py-1.5 border border-blue-400",children:[u.jsx("input",{maxLength:20,minLength:1,placeholder:"new skill",className:"outline-none ",value:n,onChange:w=>{r(w.target.value)}}),u.jsx("button",{className:"hover:bg-gray-200 text-xl rounded-xl p-2",onClick:w=>{w.preventDefault(),!(n.length<1)&&x(j=>{let F=j.slice().concat([n]);return r(""),F})},children:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 text-blue-600",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})})]})]})})]}),u.jsxs("div",{className:"flex space-x-5 place-content-center",children:[u.jsx(P,{color:"blue",disabled:s,onClick:w=>{if(w.preventDefault(),d.length<1){t("Plese enter name");return}N()},children:u.jsxs("div",{className:"flex space-x-2 items-center",children:[s&&u.jsx(Ne,{}),u.jsx("div",{children:"Save Changes"})]})}),u.jsx(P,{color:"red",onClick:w=>{w.preventDefault(),S()},children:"Cancel"})]})]})}):u.jsx("div",{children:"Login first"})};function je(e,t){return function(){return e.apply(t,arguments)}}const{toString:We}=Object.prototype,{getPrototypeOf:oe}=Object,J=(e=>t=>{const n=We.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>J(t)===e),$=e=>t=>typeof t===e,{isArray:L}=Array,B=$("undefined");function Ke(e){return e!==null&&!B(e)&&e.constructor!==null&&!B(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Re=A("ArrayBuffer");function Ge(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Re(e.buffer),t}const Xe=$("string"),R=$("function"),Oe=$("number"),V=e=>e!==null&&typeof e=="object",Qe=e=>e===!0||e===!1,M=e=>{if(J(e)!=="object")return!1;const t=oe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ye=A("Date"),Ze=A("File"),et=A("Blob"),tt=A("FileList"),nt=e=>V(e)&&R(e.pipe),rt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=J(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},st=A("URLSearchParams"),ot=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),L(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Ae(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Ce=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Te=e=>!B(e)&&e!==Ce;function te(){const{caseless:e}=Te(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ae(t,s)||s;M(t[o])&&M(r)?t[o]=te(t[o],r):M(r)?t[o]=te({},r):L(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&_(arguments[r],n);return t}const it=(e,t,n,{allOwnKeys:r}={})=>(_(t,(s,o)=>{n&&R(s)?e[o]=je(s,n):e[o]=s},{allOwnKeys:r}),e),at=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),lt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ct=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&oe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ut=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},dt=e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!Oe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ft=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&oe(Uint8Array)),ht=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},pt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},mt=A("HTMLFormElement"),xt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),de=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),wt=A("RegExp"),Pe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};_(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},bt=e=>{Pe(e,(t,n)=>{if(R(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(R(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},yt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return L(e)?r(e):r(String(e).split(t)),n},gt=()=>{},Et=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Q="abcdefghijklmnopqrstuvwxyz",fe="0123456789",ke={DIGIT:fe,ALPHA:Q,ALPHA_DIGIT:Q+Q.toUpperCase()+fe},St=(e=16,t=ke.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Nt(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const jt=e=>{const t=new Array(10),n=(r,s)=>{if(V(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=L(r)?[]:{};return _(r,(i,c)=>{const f=n(i,s+1);!B(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},Rt=A("AsyncFunction"),Ot=e=>e&&(V(e)||R(e))&&R(e.then)&&R(e.catch),a={isArray:L,isArrayBuffer:Re,isBuffer:Ke,isFormData:rt,isArrayBufferView:Ge,isString:Xe,isNumber:Oe,isBoolean:Qe,isObject:V,isPlainObject:M,isUndefined:B,isDate:Ye,isFile:Ze,isBlob:et,isRegExp:wt,isFunction:R,isStream:nt,isURLSearchParams:st,isTypedArray:ft,isFileList:tt,forEach:_,merge:te,extend:it,trim:ot,stripBOM:at,inherits:lt,toFlatObject:ct,kindOf:J,kindOfTest:A,endsWith:ut,toArray:dt,forEachEntry:ht,matchAll:pt,isHTMLForm:mt,hasOwnProperty:de,hasOwnProp:de,reduceDescriptors:Pe,freezeMethods:bt,toObjectSet:yt,toCamelCase:xt,noop:gt,toFiniteNumber:Et,findKey:Ae,global:Ce,isContextDefined:Te,ALPHABET:ke,generateString:St,isSpecCompliantForm:Nt,toJSONObject:jt,isAsyncFn:Rt,isThenable:Ot};function b(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(b,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const De=b.prototype,Le={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Le[e]={value:e}});Object.defineProperties(b,Le);Object.defineProperty(De,"isAxiosError",{value:!0});b.from=(e,t,n,r,s,o)=>{const i=Object.create(De);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),b.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const At=null;function ne(e){return a.isPlainObject(e)||a.isArray(e)}function Fe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function he(e,t,n){return e?e.concat(t).map(function(s,o){return s=Fe(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Ct(e){return a.isArray(e)&&!e.some(ne)}const Tt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function W(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,S){return!a.isUndefined(S[x])});const r=n.metaTokens,s=n.visitor||d,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!f&&a.isBlob(p))throw new b("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?f&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function d(p,x,S){let N=p;if(p&&!S&&typeof p=="object"){if(a.endsWith(x,"{}"))x=r?x:x.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&Ct(p)||(a.isFileList(p)||a.endsWith(x,"[]"))&&(N=a.toArray(p)))return x=Fe(x),N.forEach(function(j,F){!(a.isUndefined(j)||j===null)&&t.append(i===!0?he([x],F,o):i===null?x:x+"[]",l(j))}),!1}return ne(p)?!0:(t.append(he(S,x,o),l(p)),!1)}const m=[],y=Object.assign(Tt,{defaultVisitor:d,convertValue:l,isVisitable:ne});function h(p,x){if(!a.isUndefined(p)){if(m.indexOf(p)!==-1)throw Error("Circular reference detected in "+x.join("."));m.push(p),a.forEach(p,function(N,w){(!(a.isUndefined(N)||N===null)&&s.call(t,N,a.isString(w)?w.trim():w,x,y))===!0&&h(N,x?x.concat(w):[w])}),m.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return h(e),t}function pe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ie(e,t){this._pairs=[],e&&W(e,this,t)}const ve=ie.prototype;ve.append=function(t,n){this._pairs.push([t,n])};ve.toString=function(t){const n=t?function(r){return t.call(this,r,pe)}:pe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Pt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Be(e,t,n){if(!t)return e;const r=n&&n.encode||Pt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ie(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class kt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const me=kt,_e={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Dt=typeof URLSearchParams<"u"?URLSearchParams:ie,Lt=typeof FormData<"u"?FormData:null,Ft=typeof Blob<"u"?Blob:null,vt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Bt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),O={isBrowser:!0,classes:{URLSearchParams:Dt,FormData:Lt,Blob:Ft},isStandardBrowserEnv:vt,isStandardBrowserWebWorkerEnv:Bt,protocols:["http","https","file","blob","url","data"]};function _t(e,t){return W(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Ut(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Mt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ue(e){function t(n,r,s,o){let i=n[o++];const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Mt(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Ut(r),s,n,0)}),n}return null}const It={"Content-Type":void 0};function Ht(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const K={transitional:_e,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Ue(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return _t(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return W(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Ht(t)):t}],transformResponse:[function(t){const n=this.transitional||K.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?b.from(c,b.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){K.headers[t]={}});a.forEach(["post","put","patch"],function(t){K.headers[t]=a.merge(It)});const ae=K,zt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),qt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&zt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},xe=Symbol("internals");function v(e){return e&&String(e).trim().toLowerCase()}function I(e){return e===!1||e==null?e:a.isArray(e)?e.map(I):String(e)}function Jt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const $t=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Y(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Vt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Wt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class G{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,l){const d=v(f);if(!d)throw new Error("header name must be a non-empty string");const m=a.findKey(s,d);(!m||s[m]===void 0||l===!0||l===void 0&&s[m]!==!1)&&(s[m||f]=I(c))}const i=(c,f)=>a.forEach(c,(l,d)=>o(l,d,f));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!$t(t)?i(qt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=v(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Jt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=v(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Y(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=v(i),i){const c=a.findKey(r,i);c&&(!n||Y(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Y(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=I(s),delete n[o];return}const c=t?Vt(o):String(o).trim();c!==o&&delete n[o],n[c]=I(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[xe]=this[xe]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=v(i);r[c]||(Wt(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}G.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(G.prototype);a.freezeMethods(G);const C=G;function Z(e,t){const n=this||ae,r=t||n,s=C.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Me(e){return!!(e&&e.__CANCEL__)}function U(e,t,n){b.call(this,e??"canceled",b.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(U,b,{__CANCEL__:!0});function Kt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new b("Request failed with status code "+n.status,[b.ERR_BAD_REQUEST,b.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Gt=O.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,c){const f=[];f.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),a.isString(o)&&f.push("path="+o),a.isString(i)&&f.push("domain="+i),c===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Xt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Qt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ie(e,t){return e&&!Xt(t)?Qt(e,t):t}const Yt=O.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function Zt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function en(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const l=Date.now(),d=r[o];i||(i=l),n[s]=f,r[s]=l;let m=o,y=0;for(;m!==s;)y+=n[m++],m=m%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const h=d&&l-d;return h?Math.round(y*1e3/h):void 0}}function we(e,t){let n=0;const r=en(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,f=r(c),l=o<=i;n=o;const d={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:f||void 0,estimated:f&&i&&l?(i-o)/f:void 0,event:s};d[t?"download":"upload"]=!0,e(d)}}const tn=typeof XMLHttpRequest<"u",nn=tn&&function(e){return new Promise(function(n,r){let s=e.data;const o=C.from(e.headers).normalize(),i=e.responseType;let c;function f(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(s)&&(O.isStandardBrowserEnv||O.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;if(e.auth){const h=e.auth.username||"",p=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(h+":"+p))}const d=Ie(e.baseURL,e.url);l.open(e.method.toUpperCase(),Be(d,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function m(){if(!l)return;const h=C.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),x={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:h,config:e,request:l};Kt(function(N){n(N),f()},function(N){r(N),f()},x),l=null}if("onloadend"in l?l.onloadend=m:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(m)},l.onabort=function(){l&&(r(new b("Request aborted",b.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new b("Network Error",b.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let p=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const x=e.transitional||_e;e.timeoutErrorMessage&&(p=e.timeoutErrorMessage),r(new b(p,x.clarifyTimeoutError?b.ETIMEDOUT:b.ECONNABORTED,e,l)),l=null},O.isStandardBrowserEnv){const h=(e.withCredentials||Yt(d))&&e.xsrfCookieName&&Gt.read(e.xsrfCookieName);h&&o.set(e.xsrfHeaderName,h)}s===void 0&&o.setContentType(null),"setRequestHeader"in l&&a.forEach(o.toJSON(),function(p,x){l.setRequestHeader(x,p)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",we(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",we(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=h=>{l&&(r(!h||h.type?new U(null,e,l):h),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const y=Zt(d);if(y&&O.protocols.indexOf(y)===-1){r(new b("Unsupported protocol "+y+":",b.ERR_BAD_REQUEST,e));return}l.send(s||null)})},H={http:At,xhr:nn};a.forEach(H,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const rn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?H[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new b(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(H,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:H};function ee(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new U(null,e)}function be(e){return ee(e),e.headers=C.from(e.headers),e.data=Z.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),rn.getAdapter(e.adapter||ae.adapter)(e).then(function(r){return ee(e),r.data=Z.call(e,e.transformResponse,r),r.headers=C.from(r.headers),r},function(r){return Me(r)||(ee(e),r&&r.response&&(r.response.data=Z.call(e,e.transformResponse,r.response),r.response.headers=C.from(r.response.headers))),Promise.reject(r)})}const ye=e=>e instanceof C?e.toJSON():e;function D(e,t){t=t||{};const n={};function r(l,d,m){return a.isPlainObject(l)&&a.isPlainObject(d)?a.merge.call({caseless:m},l,d):a.isPlainObject(d)?a.merge({},d):a.isArray(d)?d.slice():d}function s(l,d,m){if(a.isUndefined(d)){if(!a.isUndefined(l))return r(void 0,l,m)}else return r(l,d,m)}function o(l,d){if(!a.isUndefined(d))return r(void 0,d)}function i(l,d){if(a.isUndefined(d)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,d)}function c(l,d,m){if(m in t)return r(l,d);if(m in e)return r(void 0,l)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,d)=>s(ye(l),ye(d),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(d){const m=f[d]||s,y=m(e[d],t[d],d);a.isUndefined(y)&&m!==c||(n[d]=y)}),n}const He="1.4.0",le={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{le[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ge={};le.transitional=function(t,n,r){function s(o,i){return"[Axios v"+He+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new b(s(i," has been removed"+(n?" in "+n:"")),b.ERR_DEPRECATED);return n&&!ge[i]&&(ge[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function sn(e,t,n){if(typeof e!="object")throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new b("option "+o+" must be "+f,b.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new b("Unknown option "+o,b.ERR_BAD_OPTION)}}const re={assertOptions:sn,validators:le},T=re.validators;class q{constructor(t){this.defaults=t,this.interceptors={request:new me,response:new me}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=D(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&re.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:re.assertOptions(s,{encode:T.function,serialize:T.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=C.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(n)===!1||(f=f&&x.synchronous,c.unshift(x.fulfilled,x.rejected))});const l=[];this.interceptors.response.forEach(function(x){l.push(x.fulfilled,x.rejected)});let d,m=0,y;if(!f){const p=[be.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,l),y=p.length,d=Promise.resolve(n);m<y;)d=d.then(p[m++],p[m++]);return d}y=c.length;let h=n;for(m=0;m<y;){const p=c[m++],x=c[m++];try{h=p(h)}catch(S){x.call(this,S);break}}try{d=be.call(this,h)}catch(p){return Promise.reject(p)}for(m=0,y=l.length;m<y;)d=d.then(l[m++],l[m++]);return d}getUri(t){t=D(this.defaults,t);const n=Ie(t.baseURL,t.url);return Be(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){q.prototype[t]=function(n,r){return this.request(D(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(D(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}q.prototype[t]=n(),q.prototype[t+"Form"]=n(!0)});const z=q;class ce{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new U(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ce(function(s){t=s}),cancel:t}}}const on=ce;function an(e){return function(n){return e.apply(null,n)}}function ln(e){return a.isObject(e)&&e.isAxiosError===!0}const se={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(se).forEach(([e,t])=>{se[t]=e});const cn=se;function ze(e){const t=new z(e),n=je(z.prototype.request,t);return a.extend(n,z.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ze(D(e,s))},n}const g=ze(ae);g.Axios=z;g.CanceledError=U;g.CancelToken=on;g.isCancel=Me;g.VERSION=He;g.toFormData=W;g.AxiosError=b;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=an;g.isAxiosError=ln;g.mergeConfig=D;g.AxiosHeaders=C;g.formToJSON=e=>Ue(a.isHTMLForm(e)?new FormData(e):e);g.HttpStatusCode=cn;g.default=g;const un=g,dn=()=>{const[e,t]=E.useState(""),[n,r]=E.useState(null),[s,o]=E.useState(!1),[i,c]=E.useState("");function f(l){o(!0),fetch("https://your-hr-sz1o.onrender.com/u/resume",{method:"POST",credentials:"include",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({Content_Length:l.size,Content_Type:l.type})}).then(d=>{if(d.status===500){t("Server error");return}else if(d.status===400){t("Check inputs");return}return d.json()}).then(d=>{console.log("post resume",d);let m=new FormData;Object.entries(d.fields).forEach(([h,p])=>{m.append(h,p),console.log(h,p)});const y=d.url;m.append("file",l),o(!0),un({method:"post",headers:{"Content-Type":"multipart/form-data"},url:y,data:m}).then(function(h){console.log(h,"uploaded"),console.log(h.data,"uploaded"),h.data,c("Successfully Uploaded!")}).catch(function(h){t("Some error occured"),console.log("error uploading image",h.response.data)}).finally(()=>{o(!1)})})}return u.jsxs("div",{className:"",children:[u.jsx("h1",{className:"w-full text-center text-xl",children:" Upload Resume "}),e.length>0&&u.jsxs("div",{className:"flex p-4 justify-between mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",children:[u.jsx("span",{children:e}),u.jsx("button",{onClick:l=>{l.preventDefault(),t("")},children:u.jsx(k,{})})]}),i.length>0&&u.jsxs("div",{className:"flex p-4 justify-between mb-4 text-sm text-green-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-green-400",children:[u.jsx("span",{children:i}),u.jsx("button",{onClick:l=>{l.preventDefault(),c("")},children:u.jsx(k,{})})]}),u.jsxs("div",{id:"fileUpload",className:"my-10",children:[u.jsx("div",{className:"mb-2 block",children:u.jsx($e,{htmlFor:"file",value:"Upload file"})}),u.jsx(Je,{id:"file",maxLength:1024*1024,minLength:1024,accept:"application/pdf",helperText:"maxsize 1 MB, allowed format .pdf",onChange:l=>{if(l.target.files){if(l.target.files[0].size>1024*1024){t("Maximum size 1MB ");return}r(l.target.files[0])}}})]}),u.jsx(P,{disabled:s,onClick:l=>{if(l.preventDefault(),!n){t("Select file");return}f(n)},children:"Upload Resume"})]})},xn=()=>{const e=qe(),t=E.useRef(null),[n,r]=E.useState(""),[s,o]=E.useState(!1),[i,c]=Ee(),{authState:f,setAuthState:l}=E.useContext(Se),[d,m]=E.useState(null);function y(){o(!0),fetch(`https://your-hr-sz1o.onrender.com/u/resume/${f==null?void 0:f._id}`,{method:"GET",credentials:"include",mode:"cors",headers:{"Content-Type":"application/pdf"}}).then(h=>{if(console.log("response",h,h.status,h.status===404,typeof h.status),h.status==404){r("No resume uploaded!");return}else if(h.status===400){r("Some error occured with user");return}else if(h.status===403){r("Can not get resume link more than 20 times");return}else if(h.status===500){r("Server error occured");return}else if(h.status>400){r("Server error occured");return}return h.json()}).then(h=>{var p;h&&h.url&&((p=t.current)==null||p.click(),alert("Downloading file!"))}).catch(h=>{console.log(h),r("Some error occured")}).finally(()=>{o(!1)})}return f?u.jsxs("div",{className:"mx-auto max-w-3xl pt-10 px-4 flex flex-col space-y-5",children:[n.length!==0&&u.jsxs("div",{className:"flex p-4 justify-between mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",children:[u.jsx("span",{children:n}),u.jsx("button",{onClick:h=>{h.preventDefault(),r("")},children:u.jsx(k,{})})]}),u.jsxs("div",{className:"flex space-x-5 w-full",children:[u.jsx("div",{className:"text-xl font-bold min-w-fit",children:"Name   :"}),u.jsx("div",{className:"text-xl w-full max-w-full  border-b",children:f.name})]}),u.jsxs("div",{className:"flex space-x-5 w-full",children:[u.jsx("div",{className:"text-xl font-bold min-w-fit pt-3",children:"About :"}),u.jsx("div",{className:"w-full max-w-full border border-gray-200 p-3 rounded-xl",children:f.about})]}),u.jsxs("div",{className:"flex space-x-5 w-full",children:[u.jsx("div",{className:"text-xl font-bold min-w-fit pt-3",children:"Skills    :"}),u.jsx("div",{className:"w-full max-w-full border border-gray-200 p-3 rounded-xl min-h-[50px]",children:u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-1",children:f.skills.map((h,p)=>u.jsx("span",{className:"rounded-xl  w-full min-w-fit px-2.5 py-1.5 border",children:h},p))})})]}),u.jsxs("div",{className:"flex space-x-5 w-full",children:[u.jsx("div",{className:"text-xl font-bold min-w-fit pt-3",children:"Resume  :"}),u.jsx("div",{className:"flex overflow-hidden items-center border rounded-xl",children:u.jsxs("button",{disabled:s,className:"flex items-center p-2 space-x-2",onClick:h=>{h.preventDefault(),y()},children:[s&&u.jsx(Ne,{}),u.jsx("div",{className:"p-3",children:"Download Resume"}),u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"})})]})})]}),u.jsxs("div",{className:"flex w-full place-content-center space-x-2",children:[u.jsx(P,{onClick:h=>{h.preventDefault(),c({edit:"info"})},children:"Edit Info"}),u.jsx(P,{onClick:h=>{h.preventDefault(),c({edit:"resume"})},children:"Upload Resume"})]}),i.get("edit")==="info"&&u.jsx(Ve,{}),u.jsxs(X,{show:i.get("edit")==="resume",size:"md",popup:!0,onClose:()=>{c({})},children:[u.jsx(X.Header,{}),u.jsx(X.Body,{children:u.jsx(dn,{})})]}),u.jsx("a",{href:typeof d=="string"?d:"",download:"resume.pdf",className:"hidden",ref:t})]}):u.jsxs("div",{className:" w-full",children:[u.jsx("div",{className:"text-xl text-center font-bold my-10",children:"Please login first!"}),u.jsx("div",{className:"mx-auto w-fit",children:u.jsx(P,{onClick:h=>{h.preventDefault(),e("/auth")},children:"Login / Register"})})]})};export{xn as default};
