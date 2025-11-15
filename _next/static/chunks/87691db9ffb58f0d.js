(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,16816,e=>{"use strict";var t=e.i(5774),i=e.i(98541),n=e.i(94479),a=e.i(77796);let o=(0,a.withBasePath)("/data/font/fam-code.ttf"),r=n.default.div.withConfig({displayName:"PerfilAnimationStyledRight__Div",componentId:"sc-6a359a4b-0"})`
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 10;

    @media screen and (max-width: 1020px) {
        height: 100%;
        width: auto;
        top: 0;
        left: 0;
    }
`,d=n.default.svg.withConfig({displayName:"PerfilAnimationStyledRight__Svg",componentId:"sc-6a359a4b-1"})`
    width: 1000px;
    height: 1000px;
    @media screen and (max-width: 1020px) {
        height: 400px;
    }
`,l=n.createGlobalStyle`
    @font-face {
        font-family: 'fam-code';
        src: url('${o}') format('truetype');
        font-weight: normal;
        font-style: normal;
    }
`,s=n.default.text.withConfig({displayName:"PerfilAnimationStyledRight__TextAnimate",componentId:"sc-6a359a4b-2"})`
    font-weight: 500;
    font-family: 'MatrixFont', 'fam-code', sans-serif;
    font-style: italic;
    opacity: 0.4;
    fill: ${({theme:e})=>e.text_matrix};
`,m=()=>({x:602*Math.random(),y:-50,z:10*Math.random()}),c=[10,20],h=[5,15,8],p=()=>{if(.03>Math.random()){let e=["Vidigal-code","Full-stack","Soft Vidigal","Programming"],t=Math.floor(Math.random()*e.length);return{text:e[t],fontSize:h[Math.floor(Math.random()*h.length)]}}let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+",t=Math.floor(Math.random()*e.length),i=c[Math.floor(Math.random()*c.length)];return{text:e.charAt(t),fontSize:i}},x=()=>{let[e,n]=(0,i.useState)(Array.from({length:100},m)),[a,o]=(0,i.useState)(!1),c=Array.from({length:100},p);return(0,i.useEffect)(()=>{let t=e.map((e,t)=>setInterval(()=>{n(e=>e.map((e,i)=>{var n;let a,o,r;if(i!==t)return e;return n=m(),a=n.x-e.x,r=Math.sqrt(a*a+(o=n.y-e.y)*o),{x:e.x+a/r*5,y:e.y+o/r*5,z:e.z}}))},1e3*Math.random()+500));return()=>{t.forEach(e=>clearInterval(e))}},[e]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l,{}),(0,t.jsx)(r,{onMouseOver:()=>{o(!0),n(e=>(e=>{let t=e.length,i;for(;0!==t;)i=Math.floor(Math.random()*t),t--,[e[t],e[i]]=[e[i],e[t]];return e})([...e]))},onMouseLeave:()=>{o(!1)},children:(0,t.jsx)(d,{children:c.map((i,n)=>(0,t.jsxs)(s,{x:e[n]?e[n].x:0,y:a?602*Math.random():e[n]?.y||0,style:{zIndex:e[n]?.z||0,fontSize:`${i.fontSize}px`,transformOrigin:"center center",transform:a?"rotate(360deg)":"rotate(0deg)"},children:[i.text,(0,t.jsx)("animate",{attributeName:"y",values:`${e[n]?.y||0};602`,dur:"4s",keyTimes:"0;1",begin:`${.1*n}s`,repeatCount:"indefinite"})]},n))})})]})},f=n.default.div.withConfig({displayName:"PerfilStyled__PerfilContainer",componentId:"sc-3973c30a-0"})`
    background: ${({theme:e})=>e.card};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 80px 50px;
    width: 100%;
    min-height: 100vh;
    z-index: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);

    @media (max-width: 960px) {
        padding: 66px 16px;
    }

    @media (max-width: 640px) {
        padding: 32px 16px;
    }

    @media (max-width: 896px) and (max-height: 414px) {
        padding: 40px 20px;
        justify-content: center;
        align-items: center;
    }
`,g=n.default.div.withConfig({displayName:"PerfilStyled__PerfilInnerContainer",componentId:"sc-3973c30a-1"})`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;

    @media (max-width: 960px) {
        flex-direction: column;
    }
`,u=n.default.div.withConfig({displayName:"PerfilStyled__PerflLeftContainer",componentId:"sc-3973c30a-2"})`
    width: 100%;
    order: 1;

    @media (max-width: 960px) {
        order: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 640px) {
        order: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`,y=n.default.div.withConfig({displayName:"PerfilStyled__PerfilRightContainer",componentId:"sc-3973c30a-3"})`
    width: 100%;
    display: flex;
    order: 2;
    justify-content: end;
    gap: 12px;
    @media (max-width: 960px) {
        order: 1;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 640px) {
        margin: 20px;
    }
`,w=n.default.div.withConfig({displayName:"PerfilStyled__PerfilRightContainerImg",componentId:"sc-3973c30a-4"})`
    position: relative;
    max-width: 500px;
    max-height: 500px;
    border-radius: 2%;
    margin-right: 100px;
    transform: translate(-50%, -50%);
    top: 100px;
    left: 60%;
    z-index: 10;

    @media screen and (max-width: 1024px) {
        margin-right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 0;
        top: 0;
        transform: none;
        padding: 5%;
    }
`,b=n.default.img.withConfig({displayName:"PerfilStyled__Img",componentId:"sc-3973c30a-5"})`
    width: 450px;
    height: 400px;
    border-radius: 2%;
    max-width: 100%;
    max-height: 100%;
    z-index: 14;

    @media screen and (max-width: 1024px) {
        width: 280px;
        height: 280px;
        margin-right: 0;
    }

    border: 0.1px solid ${({theme:e})=>e.primary};
    animation: shake-vertical 6s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both,
    heartbeat 5s ease-in-out infinite both;

    @keyframes shake-vertical {
        0%, 100% {
            transform: translateY(0);
        }
        10%, 30%, 50%, 70% {
            transform: translateY(-8px);
        }
        20%, 40%, 60% {
            transform: translateY(8px);
        }
        80% {
            transform: translateY(6px);
        }
        90% {
            transform: translateY(-6.4px);
        }
    }

    @keyframes heartbeat {
        from {
            transform: scale(1);
            transform-origin: center center;
            animation-timing-function: ease-out;
        }
        10% {
            transform: scale(0.91);
            animation-timing-function: ease-in;
        }
        17% {
            transform: scale(0.98);
            animation-timing-function: ease-out;
        }
        33% {
            transform: scale(0.87);
            animation-timing-function: ease-in;
        }
        45% {
            transform: scale(1);
            animation-timing-function: ease-out;
        }
    }
`,_=n.default.div.withConfig({displayName:"PerfilStyled__Title",componentId:"sc-3973c30a-6"})`
    font-weight: 500;
    font-size: 50px;
    color: ${({theme:e})=>e.text_title};
    line-height: 90px;
    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 640px) {
        font-size: 40px;
        line-height: 48px;
        margin: 20px;
    }
`,j=n.default.div.withConfig({displayName:"PerfilStyled__TextLoop",componentId:"sc-3973c30a-7"})`
    font-weight: 200;
    font-size: 32px;
    display: flex;
    gap: 12px;
    color: ${({theme:e})=>e.text_primary};
    @media (max-width: 960px) {
        text-align: center;
    }
    @media (max-width: 640px) {
        font-size: 22px;
        margin-bottom: 16px;
    }
`,v=n.default.span.withConfig({displayName:"PerfilStyled__Span",componentId:"sc-3973c30a-8"})`
    color: ${({theme:e})=>e.primary};
    cursor: pointer;
`,P=n.default.div.withConfig({displayName:"PerfilStyled__SubTitle",componentId:"sc-3973c30a-9"})`
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 40px;
    text-align: left;
    color: ${({theme:e})=>e.sub_text+95};

    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 640px) {
        font-size: 16px;
        line-height: 32px;
    }
`,S=n.default.p.withConfig({displayName:"PerfilStyled__PLocation",componentId:"sc-3973c30a-10"})`
    font-weight: 300;
    font-style: italic;
    font-size: 20px;
    margin-top: -20px;
    color: ${({theme:e})=>e.sub_text+95};
    text-align: left;
    @media (max-width: 960px) {
        text-align: center;
        font-size: 18px;
        font-weight: 300;
    }
`,I=n.default.p.withConfig({displayName:"PerfilStyled__PSubTitle",componentId:"sc-3973c30a-11"})`
    font-weight: 300;
    color: ${({theme:e})=>e.text_title};
    font-size: 17px;
    font-style: italic;
    margin-top: 2px;
    text-align: left;
    @media (max-width: 960px) {
        text-align: center;
        font-size: 18px;
        font-weight: 300;
    }
`,z=n.default.button.withConfig({displayName:"PerfilStyled__SocialMediaIconButton",componentId:"sc-3973c30a-12"})`
    border: none;
    justify-content: center;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 2px;
    background: none;
    color: white;
    text-decoration: none;
    box-shadow: none;
    text-align: center;

    padding: 10px;
    font-weight: 250;
    font-size: 16px;
    transition: all 0.6s ease-in-out;
    z-index: 15;

    &:hover {
        border: 1.8px solid ${({theme:e})=>e.primary};
        color: ${({theme:e})=>e.primary};
    }

    &:active {
        border-bottom: 2px solid ${({theme:e})=>e.primary};
    }

    &:focus {
        outline: none;
    }
`,C=n.default.a.withConfig({displayName:"PerfilStyled__SocialMediaIconA",componentId:"sc-3973c30a-13"})`
    justify-content: center;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 2px;
    background: none;
    color: white;
    text-decoration: none;
    box-shadow: none;
    text-align: center;

    padding: 10px;
    font-weight: 250;
    font-size: 16px;
    transition: all 0.6s ease-in-out;
    z-index: 15;

    &:hover {
        border: 1.8px solid ${({theme:e})=>e.primary};
        color: ${({theme:e})=>e.primary};
    }

    &:active {
        border-bottom: 2px solid ${({theme:e})=>e.primary};
    }
`,k=n.default.div.withConfig({displayName:"PerfilStyled__SocialMediaIcons",componentId:"sc-3973c30a-14"})`
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 2px;
    max-width: max-content;
    height: 65px;
    padding: 15px;
    background: black;
    z-index: 15;

    @media (max-width: 960px) {
        padding: 25px;
        margin-top: 50px;
        margin-bottom: 100px;
    }

    @media (max-width: 640px) {
        padding: 25px;
        margin-top: 50px;
        margin-bottom: 140px;
    }
`,N=n.default.div.withConfig({displayName:"PerfilStyled__DIVText",componentId:"sc-3973c30a-15"})`
    margin-left: 6px;
`;var M=e.i(59640),R=e.i(59234),$=e.i(67043),L=e.i(9319),A=e.i(94118),T=e.i(74992);function D(e){return(0,T.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"},child:[]}]})(e)}let F=(0,e.i(50933).default)(()=>e.A(16009),{loadableGenerated:{modules:[45673]},ssr:!1});e.s(["default",0,()=>{let{selectedLanguage:e}=(0,R.useLanguage)(),i=M.LocaleLang[e],{isDarkMode:n}=(0,$.useTheme)(),o=(0,a.withBasePath)("/data/images/ClientHome.gif"),r=i?.homelinkimg&&i.homelinkimg.trim().length>0?i.homelinkimg:o,d=i?.ResumeLinkPDF.length>0?(e=>{if(!e?.trim())return e;let t=e.trim();if(t.includes("drive.google.com")){let e=t.match(/\/d\/([a-zA-Z0-9_-]+)/)?.[1];return e?`https://drive.google.com/uc?export=download&id=${e}`:t}return t.includes("github.com")&&t.includes("/blob/")?t.replace("/blob/","/raw/"):t})(i.ResumeLinkPDF):"en"===e?(0,a.withBasePath)("/resume/KAUAN VIDIGAL EN.pdf"):(0,a.withBasePath)("/resume/KAUAN VIDIGAL PT.pdf"),l=()=>{fetch(d).then(e=>{if(!e.ok)throw Error(i?.ErrorFile+" "+(i?.ResumeName.length>0?i?.ResumeName:"Resume-pdf")+" PDF");return e.blob()}).then(e=>{let t=window.URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=(i?.ResumeName.length>0?i?.ResumeName:"Resume-pdf")+".pdf",document.body.appendChild(n),n.click(),n.remove(),window.URL.revokeObjectURL(t)}).catch(e=>{console.error(i?.ErrorFile+" "+(i?.ResumeName.length>0?i?.ResumeName:"Resume-pdf")+" PDF: "+e.message)})};return(0,t.jsx)(f,{id:"home",children:(0,t.jsxs)(g,{children:[(0,t.jsxs)(u,{id:"Left",children:[(0,t.jsx)(_,{children:i?.name}),(0,t.jsx)(I,{children:i?.functions}),(0,t.jsx)(j,{children:(0,t.jsx)(v,{style:{minHeight:"68px",height:"auto"},children:(0,t.jsx)(F,{strings:i?.roles,typingSpeed:100,pauseTime:1500})})}),(0,t.jsx)(S,{children:i?.location.countries}),(0,t.jsxs)(P,{children:[" ",(0,t.jsx)("br",{}),i?.description]}),(0,t.jsxs)(k,{children:[(0,t.jsx)(C,{target:"_blank",href:i?.linkedin,$isDarkMode:n,children:(0,t.jsx)(L.FaLinkedin,{style:{cursor:"pointer",width:"20px",height:"20px"}})}),(0,t.jsx)(C,{target:"_blank",href:i?.Email.length>0?i?.Email:"mailto:kauanvidigalcontato@gmail.com",$isDarkMode:n,children:(0,t.jsx)(D,{style:{cursor:"pointer",width:"20px",height:"20px"}})}),(0,t.jsxs)(C,{target:"_blank",href:d,$isDarkMode:n,children:[(0,t.jsx)(A.CgBriefcase,{style:{cursor:"pointer",width:"20px",height:"20px"}}),(0,t.jsx)(N,{children:i?.ResumeTitle.length>0?i?.ResumeTitle:"Curriculum"})]}),(0,t.jsxs)(z,{$isDarkMode:n,onClick:l,onTouchStart:l,children:[(0,t.jsx)(L.FaFileDownload,{style:{cursor:"pointer",width:"20px",height:"20px"}}),(0,t.jsx)(N,{children:i?.ResumeDownload})]})]})]}),(0,t.jsxs)(y,{id:"Right",children:[(0,t.jsx)(x,{}),(0,t.jsx)(w,{children:(0,t.jsx)(b,{src:r,alt:"Vidigal"})})]})]})})}],16816)}]);