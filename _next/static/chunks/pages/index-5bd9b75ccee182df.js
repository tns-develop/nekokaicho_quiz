(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(3124)}])},9749:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(6495).Z,a=i(2648).Z,n=i(1598).Z,o=i(7273).Z,s=n(i(7294)),l=a(i(3121)),u=i(2675),d=i(139),c=i(8730);i(7238);var f=a(i(9824));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,i,a,n,o,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===i&&o(!0),null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;a.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}})}let b=s.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:a,widthInt:n,qualityInt:l,className:u,imgStyle:d,blurStyle:c,isLazy:f,fill:g,placeholder:h,loading:m,srcString:b,config:v,unoptimized:x,loader:w,onLoadRef:y,onLoadingCompleteRef:A,setBlurComplete:S,setShowAltText:E,onLoad:C,onError:j}=e,Z=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=f?"lazy":m,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},Z,i,{width:n,height:a,decoding:"async","data-nimg":g?"fill":"1",className:u,loading:m,style:r({},d,c),ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(j&&(e.src=e.src),e.complete&&p(e,b,h,y,A,S,x))},[b,h,y,A,S,j,x,t]),onLoad:e=>{let t=e.currentTarget;p(t,b,h,y,A,S,x)},onError:e=>{E(!0),"blur"===h&&S(!0),j&&j(e)}})))}),v=s.forwardRef((e,t)=>{let i,a;var n,{src:p,sizes:v,unoptimized:x=!1,priority:w=!1,loading:y,className:A,quality:S,width:E,height:C,fill:j,style:Z,onLoad:k,onLoadingComplete:_,placeholder:R="empty",blurDataURL:z,layout:W,objectFit:I,objectPosition:N,lazyBoundary:O,lazyRoot:P}=e,M=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let G=s.useContext(c.ImageConfigContext),D=s.useMemo(()=>{let e=g||G||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:i})},[G]),L=M,T=L.loader||f.default;delete L.loader;let B="__next_img_default"in T;if(B){if("custom"===D.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=T;T=t=>{let{config:i}=t,r=o(t,["config"]);return e(r)}}if(W){"fill"===W&&(j=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[W];e&&(Z=r({},Z,e));let t={responsive:"100vw",fill:"100vw"}[W];t&&!v&&(v=t)}let U="",q=m(E),$=m(C);if("object"==typeof(n=p)&&(h(n)||void 0!==n.src)){let e=h(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(i=e.blurWidth,a=e.blurHeight,z=z||e.blurDataURL,U=e.src,!j){if(q||$){if(q&&!$){let t=q/e.width;$=Math.round(e.height*t)}else if(!q&&$){let t=$/e.height;q=Math.round(e.width*t)}}else q=e.width,$=e.height}}let F=!w&&("lazy"===y||void 0===y);((p="string"==typeof p?p:U).startsWith("data:")||p.startsWith("blob:"))&&(x=!0,F=!1),D.unoptimized&&(x=!0),B&&p.endsWith(".svg")&&!D.dangerouslyAllowSVG&&(x=!0);let[V,J]=s.useState(!1),[Q,X]=s.useState(!1),H=m(S),K=Object.assign(j?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:N}:{},Q?{}:{color:"transparent"},Z),Y="blur"===R&&z&&!V?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(u.getImageBlurSvg({widthInt:q,heightInt:$,blurWidth:i,blurHeight:a,blurDataURL:z}),'")')}:{},ee=function(e){let{config:t,src:i,unoptimized:r,width:a,quality:n,sizes:o,loader:s}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(e,t,i){let{deviceSizes:r,allSizes:a}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let n=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:n,kind:"x"}}(t,a,o),d=l.length-1;return{sizes:o||"w"!==u?o:"100vw",srcSet:l.map((e,r)=>"".concat(s({config:t,src:i,quality:n,width:e})," ").concat("w"===u?e:r+1).concat(u)).join(", "),src:s({config:t,src:i,quality:n,width:l[d]})}}({config:D,src:p,unoptimized:x,width:q,quality:H,sizes:v,loader:T}),et=p,ei={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:L.crossOrigin},er=s.useRef(k);s.useEffect(()=>{er.current=k},[k]);let ea=s.useRef(_);s.useEffect(()=>{ea.current=_},[_]);let en=r({isLazy:F,imgAttributes:ee,heightInt:$,widthInt:q,qualityInt:H,className:A,imgStyle:K,blurStyle:Y,loading:y,config:D,fill:j,unoptimized:x,placeholder:R,loader:T,srcString:et,onLoadRef:er,onLoadingCompleteRef:ea,setBlurComplete:J,setShowAltText:X},L);return s.default.createElement(s.default.Fragment,null,s.default.createElement(b,Object.assign({},en,{ref:t})),w?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},ei))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:a,blurDataURL:n}=e,o=r||t,s=a||i,l=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&a?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(n,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:a}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(r,"&q=").concat(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},3092:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return o}});var r=i(5893);i(7294);var a=i(5861),n=i(6078);function o(){return(0,r.jsxs)(a.Z,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",(0,r.jsx)(n.Z,{color:"inherit",href:"https://mui.com/",children:"nekokaicho-quiz.com"})," ",new Date().getFullYear(),"."]})}},3124:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return D}});var r=i(5893),a=i(7294),n=i(3366),o=i(7462),s=i(6010),l=i(8320),u=i(4867),d=i(4780),c=i(9214),f=i(182);let g=(0,f.ZP)();var h=i(6500);let m=["className","component","disableGutters","fixed","maxWidth","classes"],p=(0,h.Z)(),b=g("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t[`maxWidth${(0,l.Z)(String(i.maxWidth))}`],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}}),v=e=>(0,c.Z)({props:e,name:"MuiContainer",defaultTheme:p}),x=(e,t)=>{let i=e=>(0,u.Z)(t,e),{classes:r,fixed:a,disableGutters:n,maxWidth:o}=e,s={root:["root",o&&`maxWidth${(0,l.Z)(String(o))}`,a&&"fixed",n&&"disableGutters"]};return(0,d.Z)(s,i,r)};var w=i(8216),y=i(948),A=i(1657);let S=function(e={}){let{createStyledComponent:t=b,useThemeProps:i=v,componentName:l="MuiContainer"}=e,u=t(({theme:e,ownerState:t})=>(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,i)=>{let r=e.breakpoints.values[i];return 0!==r&&(t[e.breakpoints.up(i)]={maxWidth:`${r}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>(0,o.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})),d=a.forwardRef(function(e,t){let a=i(e),{className:d,component:c="div",disableGutters:f=!1,fixed:g=!1,maxWidth:h="lg"}=a,p=(0,n.Z)(a,m),b=(0,o.Z)({},a,{component:c,disableGutters:f,fixed:g,maxWidth:h}),v=x(b,l);return(0,r.jsx)(u,(0,o.Z)({as:c,ownerState:b,className:(0,s.Z)(v.root,d),ref:t},p))});return d}({createStyledComponent:(0,y.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t[`maxWidth${(0,w.Z)(String(i.maxWidth))}`],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,A.Z)({props:e,name:"MuiContainer"})});var E=i(5861),C=i(9731),j=i(6523),Z=i(9707),k=i(9718);let _=["className","component"];var R=i(7078),z=i(4551);let W=(0,z.Z)(),I=function(e={}){let{defaultTheme:t,defaultClassName:i="MuiBox-root",generateClassName:l}=e,u=(0,C.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(j.Z),d=a.forwardRef(function(e,a){let d=(0,k.Z)(t),c=(0,Z.Z)(e),{className:f,component:g="div"}=c,h=(0,n.Z)(c,_);return(0,r.jsx)(u,(0,o.Z)({as:g,ref:a,className:(0,s.Z)(f,l?l(i):i),theme:d},h))});return d}({defaultTheme:W,defaultClassName:"MuiBox-root",generateClassName:R.Z.generate});var N=i(6078),O=i(3092),P=i(5675),M=i.n(P),G={src:"/_next/static/media/titleImage.5ad29fbb.png",height:951,width:2880,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAUklEQVR42gUAOwqAINT7X6aWGqJbRIMaOaiQWlp+El9f0JrSVor83lGKQQr13MZaDQVZ50IIA5u7qu6bduI8xuhTQjuAzZkaTTEmmDClzgsWf/yS0UEYySj0kwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3};function D(){return(0,r.jsx)(S,{maxWidth:"lg",children:(0,r.jsxs)(I,{sx:{my:4,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"},children:[(0,r.jsx)(M(),{src:G,alt:"titleImage",width:1250,height:500,unoptimized:!1}),(0,r.jsx)(E.Z,{variant:"h4",component:"h1",gutterBottom:!0,children:"ねこかいちょークイズ！"}),(0,r.jsx)(N.Z,{href:"/linkSample",color:"secondary",children:"Go to the about page"}),(0,r.jsx)(O.default,{})]})})}},5675:function(e,t,i){e.exports=i(9749)}},function(e){e.O(0,[78,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);