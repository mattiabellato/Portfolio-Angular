import './polyfills.server.mjs';
import{a as F,b as I,c as P,f as D,l as x}from"./chunk-RQLIZTA5.mjs";import{Ca as R,G as d,H as p,La as b,M as h,P as m,Pa as w,R as c,da as u,ja as g,ka as f,la as y,na as v,oa as C,ta as A}from"./chunk-5NVAAL6A.mjs";var M=(()=>{let e=class e{constructor(){this.title="portfolio"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[A],decls:0,vars:0,template:function(o,n){}});let i=e;return i})();var N=[];var k="@",j=(()=>{let e=class e{constructor(r,o,n,s,a){this.doc=r,this.delegate=o,this.zone=n,this.animationType=s,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=h(f,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-JMMBY5UG.mjs").then(o=>o)).catch(o=>{throw new d(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:n})=>{this._engine=o(this.animationType,this.doc);let s=new n(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(r,o){let n=this.delegate.createRenderer(r,o);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new l(n);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let T=a.createRenderer(r,o);s.use(T),this.scheduler?.notify(9)}).catch(a=>{s.use(n)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(o){g()},e.\u0275prov=p({token:e,factory:e.\u0275fac});let i=e;return i})(),l=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,o){this.delegate.insertBefore(e,t,r,o)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,o){this.delegate.setAttribute(e,t,r,o)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,o){this.delegate.setStyle(e,t,r,o)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(o=>o.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(o=>o.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(k)}};function S(i="animations"){return v("NgAsyncAnimations"),c([{provide:y,useFactory:(e,t,r)=>new j(e,t,r,i),deps:[w,F,C]},{provide:u,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var E={providers:[R({eventCoalescing:!0}),x(N),P(),S()]};var B={providers:[D()]},O=b(E,B);var V=()=>I(M,O),se=V;export{se as a};