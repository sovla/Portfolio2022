(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{9054:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return E}});var o=r(9008),n=r.n(o),i=r(7294),a=r(3918),s=r(5472),c=r(9499),p=r(6835),l=r(7357),d=r(6945),h=r(8462),f=r(7212),x=r(8619),u=r(796),m=r(8181),g=r(8032),b=r(6130),j=r(8066),w=r(5573),y=r(4492),v=r(6470),k=r(1163),Z=r(5893);function C(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?C(Object(r),!0).forEach((function(e){(0,c.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var P=a.ZP.div.withConfig({displayName:"Menu__MenuContainer",componentId:"sc-12vhc8-0"})(["position:fixed;right:10%;top:10%;"]),O=function(){var t=i.useState({top:!1,left:!1,bottom:!1,right:!1}),e=(0,p.Z)(t,2),r=e[0],o=e[1],n=(0,k.useRouter)(),a=function(t,e){return function(n){("keydown"!==n.type||null!=t||"Tab"!==n.key&&"Shift"!==n.key)&&o(_(_({},r),{},(0,c.Z)({},t,e)))}},s=(0,i.useCallback)((function(t){switch(t){case 0:n.push("./");break;case 1:n.push("./aboutme");break;case 2:n.push("./project");break;case 3:n.push("./contact")}}),[]),C=(0,i.useCallback)((function(t){return(0,Z.jsx)(l.Z,{sx:{width:"top"===t||"bottom"===t?"auto":250},role:"presentation",onClick:a(t,!1),onKeyDown:a(t,!1),children:(0,Z.jsx)(h.Z,{children:["Intro","About-Me","Project","Contact"].map((function(t,e){return(0,Z.jsx)(f.ZP,{disablePadding:!0,children:(0,Z.jsxs)(x.Z,{onClick:function(){return s(e)},children:[(0,Z.jsxs)(u.Z,{children:[0===e&&(0,Z.jsx)(j.Z,{}),1===e&&(0,Z.jsx)(w.Z,{}),2===e&&(0,Z.jsx)(y.Z,{}),3===e&&(0,Z.jsx)(v.Z,{})]}),(0,Z.jsx)(m.Z,{primary:t})]})},t)}))})})}),[]);return(0,Z.jsxs)(P,{children:[(0,Z.jsx)(g.Z,{variant:"extended",onClick:a("top",!0),children:(0,Z.jsx)(b.Z,{})}),(0,Z.jsx)(d.ZP,{anchor:"top",open:r.top,onClose:a("top",!1),children:C("top")})]})},N=a.ZP.div.withConfig({displayName:"contact__Container",componentId:"sc-4xldlf-0"})(["width:100vw;height:100vh;background-color:#414242;display:flex;justify-content:center;align-items:center;flex-direction:column;.header{margin-bottom:50px;h1{font-size:36px;}}"]),z=a.ZP.div.withConfig({displayName:"contact__BoxDiv",componentId:"sc-4xldlf-1"})(["display:flex;border-radius:6px;border:2px solid white;padding:25px;& > form{display:flex;flex-direction:column;margin-right:50px;& > input,& > textarea{padding:10px 3px;background-color:#414242;margin-bottom:40px;border:none;border-bottom:2px solid #999;color:#fff;font-size:20px;&::placeholder{color:#999;}}& > textarea{width:400px;height:200px;}& > button{border-radius:16px;background-color:#000;padding:10px;color:#fff;}}& > div{width:400px;h3{font-size:28px;}p{margin-bottom:30px;font-size:16px;}}"]),E=function(){return(0,Z.jsxs)(N,{children:[(0,Z.jsxs)(n(),{children:[(0,Z.jsx)("title",{children:"Gavri-Portfolio"}),(0,Z.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,Z.jsx)("link",{rel:"icon",href:"/favicon.png"})]}),(0,Z.jsx)(O,{}),(0,Z.jsx)("div",{className:"header",children:(0,Z.jsx)("h1",{children:"Contact ME"})}),(0,Z.jsxs)(z,{children:[(0,Z.jsxs)("form",{children:[(0,Z.jsx)("input",{placeholder:"\uc131\ud568"}),(0,Z.jsx)("input",{placeholder:"\uc5f0\ub77d\ucc98/\uc774\uba54\uc77c"}),(0,Z.jsx)("textarea",{placeholder:"\ub0b4\uc6a9"}),(0,Z.jsx)("button",{type:"submit",children:"SEND"})]}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)("h3",{children:"Contact"}),(0,Z.jsx)("p",{children:"jg348434@gmail.com"}),(0,Z.jsx)("h3",{children:"Address"}),(0,Z.jsx)("p",{children:"\ubd80\uc0b0 \uad11\uc5ed\uc2dc \ubd80\uc0b0\uc9c4\uad6c \uc591\uc815"})]})]}),(0,Z.jsx)(s.Z,{menu:"project"})]})}},5472:function(t,e,r){"use strict";r.d(e,{U:function(){return c}});var o=r(1163),n=(r(7294),r(3918)),i=r(5893),a=n.ZP.div.withConfig({displayName:"Arrow__LeftArrowContainer",componentId:"sc-gqh20q-0"})(['position:fixed;left:0;top:0;display:flex;justify-content:center;align-items:center;height:100vh;.arrow{width:10vw;height:10vh;cursor:pointer;& > em{display:block;position:absolute;height:36px;width:36px;top:calc(50% - 18.5px);left:calc(50% - 18px);transition:transform 0.2s ease-out 0.2s;&::before,&::after{content:" ";position:absolute;right:0;height:100%;width:2px;background-color:#7a7a7a;transform-origin:50% 100% 0;transition:transform 0.16s ease-out;}&::before{top:-50%;-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-webkit-transform:rotate(45deg);transform:rotate(45deg);}&::after{top:-50%;transform:rotate(135deg);}}&:hover{& > em::before{transform:rotate(25deg);}& > em::after{transform:rotate(145deg);}span{opacity:1;transform:translate3d(40px,-8px,0);}}span{left:calc(50% + 5px);transform:translate3d(-30px,-8px,0);display:inline-block;color:#8a8a8a;position:absolute;white-space:nowrap;top:calc(50% - 15.5px);text-transform:capitalize;height:30px;line-height:30px;padding:0 10px;opacity:0;font-size:24px;line-height:1.7em;transition:opacity 0.1s ease 0.125s,transform 0.3s cubic-bezier(0,0,0,1) 0.125s;}}']),s=n.ZP.div.withConfig({displayName:"Arrow__RightArrowContainer",componentId:"sc-gqh20q-1"})(['position:fixed;right:0;top:0;display:flex;justify-content:center;align-items:center;height:100vh;.arrow{width:10vw;height:10vh;cursor:pointer;& > em{display:block;position:absolute;height:36px;width:36px;top:calc(50% - 18.5px);left:calc(50% - 18px);transition:transform 0.2s ease-out 0.2s;&::before,&::after{content:" ";position:absolute;right:0;height:100%;width:2px;background-color:#7a7a7a;transform-origin:50% 100% 0;transition:transform 0.16s ease-out;}&::before{top:-50%;transform:rotate(315deg);}&::after{top:-50%;transform:rotate(225deg);}}&:hover{& > em::before{transform:rotate(325deg);}& > em::after{transform:rotate(205deg);}span{opacity:1;transform:translate3d(-10px,-8px,0);}}span{right:calc(50% + 5px);transform:translate3d(0px,-8px,0);display:inline-block;color:#8a8a8a;position:absolute;white-space:nowrap;top:calc(50% - 15.5px);height:30px;line-height:30px;padding:0 10px;opacity:0;text-transform:capitalize;font-size:24px;line-height:1.7em;transition:opacity 0.1s ease 0.125s,transform 0.3s cubic-bezier(0,0,0,1) 0.125s;}}']),c=function(t){var e=t.menu,r=(0,o.useRouter)();return(0,i.jsx)(s,{children:(0,i.jsxs)("div",{className:"arrow",onClick:function(){return r.push("/".concat(e))},children:[(0,i.jsx)("span",{children:e}),(0,i.jsx)("em",{})]})})};e.Z=function(t){var e=t.menu,r=(0,o.useRouter)();return(0,i.jsx)(a,{children:(0,i.jsxs)("div",{className:"arrow",onClick:function(){return r.push("/".concat(e))},children:[(0,i.jsx)("span",{children:e}),(0,i.jsx)("em",{})]})})}},1382:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return r(9054)}])}},function(t){t.O(0,[289,852,774,888,179],(function(){return e=1382,t(t.s=e);var e}));var e=t.O();_N_E=e}]);