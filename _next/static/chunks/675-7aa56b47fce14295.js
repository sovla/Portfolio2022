(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{9938:function(e,t,i){"use strict";var n=i(930),r=i(5696),o=i(7980);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,i=e.src,a=e.sizes,l=e.unoptimized,g=void 0!==l&&l,p=e.priority,w=void 0!==p&&p,A=e.loading,x=e.lazyRoot,E=void 0===x?null:x,I=e.lazyBoundary,R=void 0===I?"200px":I,L=e.className,P=e.quality,C=e.width,_=e.height,q=e.style,M=e.objectFit,N=e.objectPosition,D=e.onLoadingComplete,W=e.placeholder,B=void 0===W?"empty":W,U=e.blurDataURL,F=h(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),H=c.useContext(f.ImageConfigContext),V=c.useMemo((function(){var e=b||H||u.imageConfigDefault,t=[].concat(o(e.deviceSizes),o(e.imageSizes)).sort((function(e,t){return e-t})),i=e.deviceSizes.sort((function(e,t){return e-t}));return m({},e,{allSizes:t,deviceSizes:i})}),[H]),T=F,G=a?"responsive":"intrinsic";"layout"in T&&(T.layout&&(G=T.layout),delete T.layout);var J=O;if("loader"in T){if(T.loader){var Q=T.loader;J=function(e){e.config;var t=h(e,["config"]);return Q(t)}}delete T.loader}var K="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(i)){var X=S(i)?i.default:i;if(!X.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(U=U||X.blurDataURL,K=X.src,(!G||"fill"!==G)&&(_=_||X.height,C=C||X.width,!X.height||!X.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)))}i="string"===typeof i?i:K;var Y=j(C),Z=j(_),$=j(P),ee=!w&&("lazy"===A||"undefined"===typeof A);(i.startsWith("data:")||i.startsWith("blob:"))&&(g=!0,ee=!1);y.has(i)&&(ee=!1);var te,ie=c.useState(!1),ne=r(ie,2),re=ne[0],oe=ne[1],ae=d.useIntersection({rootRef:E,rootMargin:R,disabled:!ee}),le=r(ae,3),ce=le[0],se=le[1],ue=le[2],de=!ee||se,fe={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ge={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},pe=!1,me={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:N};0;0;var he=Object.assign({},q,"raw"===G?{}:me),be="blur"!==B||re?{}:{filter:"blur(20px)",backgroundSize:M||"cover",backgroundImage:'url("'.concat(U,'")'),backgroundPosition:N||"0% 0%"};if("fill"===G)fe.display="block",fe.position="absolute",fe.top=0,fe.left=0,fe.bottom=0,fe.right=0;else if("undefined"!==typeof Y&&"undefined"!==typeof Z){var ye=Z/Y,ve=isNaN(ye)?"100%":"".concat(100*ye,"%");"responsive"===G?(fe.display="block",fe.position="relative",pe=!0,ge.paddingTop=ve):"intrinsic"===G?(fe.display="inline-block",fe.position="relative",fe.maxWidth="100%",pe=!0,ge.maxWidth="100%",te="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Y,"%27%20height=%27").concat(Z,"%27/%3e")):"fixed"===G&&(fe.display="inline-block",fe.position="relative",fe.width=Y,fe.height=Z)}else 0;var we={src:v,srcSet:void 0,sizes:void 0};de&&(we=z({config:V,src:i,unoptimized:g,layout:G,width:Y,quality:$,sizes:a,loader:J}));var Se=i;0;var ze="imagesrcset",je="imagesizes";ze="imageSrcSet",je="imageSizes";var Oe=(n(t={},ze,we.srcSet),n(t,je,we.sizes),t),Ae=c.default.useLayoutEffect,ke=c.useRef(D),xe=c.useRef(i);c.useEffect((function(){ke.current=D}),[D]),Ae((function(){xe.current!==i&&(ue(),xe.current=i)}),[ue,i]);var Ee=m({isLazy:ee,imgAttributes:we,heightInt:Z,widthInt:Y,qualityInt:$,layout:G,className:L,imgStyle:he,blurStyle:be,loading:A,config:V,unoptimized:g,placeholder:B,loader:J,srcString:Se,onLoadingCompleteRef:ke,setBlurComplete:oe,setIntersection:ce,isVisible:de},T);return c.default.createElement(c.default.Fragment,null,"raw"===G?c.default.createElement(k,Object.assign({},Ee)):c.default.createElement("span",{style:fe},pe?c.default.createElement("span",{style:ge},te?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:te}):null):null,c.default.createElement(k,Object.assign({},Ee))),w?c.default.createElement(s.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+we.src+we.srcSet+we.sizes,rel:"preload",as:"image",href:we.srcSet?void 0:we.src},Oe))):null)};var a,l,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,i):{};n.get||n.set?Object.defineProperty(t,i,n):t[i]=e[i]}return t.default=e,t}(i(7294)),s=(a=i(6505))&&a.__esModule?a:{default:a},u=i(5980),d=i(7215),f=i(1059),g=(i(7206),i(4979));function p(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function m(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){p(e,t,i[t])}))}return e}function h(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}l={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://sovla.github.io/portfolio2022/",loader:"akamai",experimentalLayoutRaw:!1};var b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://sovla.github.io/portfolio2022/",loader:"akamai",experimentalLayoutRaw:!1},y=new Set,v=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality;0;if(i.endsWith(".svg")&&!t.dangerouslyAllowSVG)return i;return"".concat(g.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality,o=new URL("".concat(t.path).concat(x(i))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality,o=["f_auto","c_limit","w_"+n,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(x(i))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(x(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function z(e){var t=e.config,i=e.src,n=e.unoptimized,r=e.layout,a=e.width,l=e.quality,c=e.sizes,s=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var u=function(e,t,i,n){var r=e.deviceSizes,a=e.allSizes;if(n&&("fill"===i||"responsive"===i||"raw"===i)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,s=[];l=c.exec(n);l)s.push(parseInt(l[2]));if(s.length){var u=.01*Math.min.apply(Math,s);return{widths:a.filter((function(e){return e>=r[0]*u})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===i||"responsive"===i?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,r,c),d=u.widths,f=u.kind,g=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map((function(e,n){return"".concat(s({config:t,src:i,quality:l,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:s({config:t,src:i,quality:l,width:d[g]})}}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function O(e){var t,i=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",n=w.get(i);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(i))}function A(e,t,i,n,r,o){e&&e.src!==v&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(y.add(t),"blur"===n&&o(!0),null===r||void 0===r?void 0:r.current)){var i=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:i,naturalHeight:a})}})))}var k=function(e){var t=e.imgAttributes,i=e.heightInt,n=e.widthInt,r=e.qualityInt,o=e.layout,a=e.className,l=e.imgStyle,s=e.blurStyle,u=e.isLazy,d=e.placeholder,f=e.loading,g=e.srcString,p=e.config,b=e.unoptimized,y=e.loader,v=e.onLoadingCompleteRef,w=e.setBlurComplete,S=e.setIntersection,j=e.onLoad,O=e.onError,k=(e.isVisible,h(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return c.default.createElement(c.default.Fragment,null,c.default.createElement("img",Object.assign({},k,t,"raw"===o?{height:i,width:n}:{},{decoding:"async","data-nimg":o,className:a,style:m({},l,s),ref:c.useCallback((function(e){S(e),(null===e||void 0===e?void 0:e.complete)&&A(e,g,0,d,v,w)}),[S,g,o,d,v,w]),onLoad:function(e){A(e.currentTarget,g,0,d,v,w),j&&j(e)},onError:function(e){"blur"===d&&w(!0),O&&O(e)}})),(u||"blur"===d)&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},k,z({config:p,src:g,unoptimized:b,layout:o,width:n,quality:r,sizes:t.sizes,loader:y}),"raw"===o?{height:i,width:n}:{},{decoding:"async","data-nimg":o,style:l,className:a,loading:f||"lazy"}))))};function x(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},7215:function(e,t,i){"use strict";var n=i(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,i=e.rootMargin,s=e.disabled||!a,u=r.useRef(),d=r.useState(!1),f=n(d,2),g=f[0],p=f[1],m=r.useState(t?t.current:null),h=n(m,2),b=h[0],y=h[1],v=r.useCallback((function(e){u.current&&(u.current(),u.current=void 0),s||g||e&&e.tagName&&(u.current=function(e,t,i){var n=function(e){var t,i={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===i.root&&e.margin===i.margin}));n?t=l.get(n):(t=l.get(i),c.push(i));if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)}))}),e);return l.set(i,t={id:i,observer:o,elements:r}),t}(i),r=n.id,o=n.observer,a=n.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(r);var t=c.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:b,rootMargin:i}))}),[s,b,i,g]),w=r.useCallback((function(){p(!1)}),[]);return r.useEffect((function(){if(!a&&!g){var e=o.requestIdleCallback((function(){return p(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[g]),r.useEffect((function(){t&&y(t.current)}),[t]),[v,g,w]};var r=i(7294),o=i(8065),a="undefined"!==typeof IntersectionObserver;var l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},5675:function(e,t,i){e.exports=i(9938)}}]);