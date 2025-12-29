(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,29306,e=>{"use strict";var t=e.i(5664),n=e.i(9898),i=e.i(67043),o=e.i(60515),a=e.i(17001),r=e.i(59234),f=e.i(59640),s=e.i(55343);function d(e){return(0,s.GenIcon)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M383.72 70.188c-1.145-.01-2.293 0-3.44.03-16.662.428-33.436 4.925-48.81 13.907-148.594 86.803-101.707 58.72-253.533 146.375l-4.656 2.688v.312c-45.61 29.694-60.683 90.445-33.155 138.125 28.464 49.3 91.974 66.493 141.188 37.78 151.39-88.32 104.363-60.41 253.5-146.374 49.327-28.43 66.307-91.824 37.843-141.124-18.957-32.834-53.47-51.442-88.937-51.72zm1.342 16.468c25.255.406 49.682 13.512 63.094 36.844 1.82 3.164 2.786 6.918 4.094 10.22-22.875-25.86-61.86-33.04-92.97-15-64.527 37.42-83.64 48.864-105.686 61.874 22.46 19.385 44.32 52.128 54.25 82.03-56.72 32.796-51.65 30.67-148.844 87.032-31.11 18.04-70.094 10.858-92.97-15 1.31 3.3 2.277 7.055 4.095 10.22 20.438 35.552 66.447 47.306 102 26.687 93.043-53.956 91.828-53.805 141.188-82.313.507 9.606-1.02 18.18-5.094 24.938-28.792 16.492-53.304 30.647-136.345 79.093-40.39 23.566-92.154 9.545-115.563-31-23.408-40.542-9.574-92.186 30.97-115.592l4.687-2.72c73.185-42.234 98.623-56.668 125.81-72.25 37.072-21.5 44.154-26.065 128.376-74.905 12.222-7.088 25.678-10.37 38.906-10.157z"},child:[]}]})(e)}var l=e.i(84723),p=e.i(38968);let h=p.default.div.withConfig({displayName:"not-found-styled__Container",componentId:"sc-762a65ff-0"})`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
    background: ${({$isDarkMode:e})=>e?"#000000":"linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"};
    text-align: center;
    position: relative;
    overflow: hidden;
`,m=p.default.canvas.withConfig({displayName:"not-found-styled__MatrixCanvas",componentId:"sc-762a65ff-1"})`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0.8;
`,c=p.default.div.withConfig({displayName:"not-found-styled__AnimatedBackground",componentId:"sc-762a65ff-2"})`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: 0.1;

    &::before {
        content: '404';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 25rem;
        font-weight: 900;
        color: ${({$isDarkMode:e})=>e?"#00ff41":"#000000"};
        opacity: 0.05;
        user-select: none;
        pointer-events: none;

        @media (max-width: 768px) {
            font-size: 12rem;
        }
    }
`,x=p.default.div.withConfig({displayName:"not-found-styled__Content",componentId:"sc-762a65ff-3"})`
    position: relative;
    z-index: 1;
    max-width: 600px;
`,u=p.default.h1.withConfig({displayName:"not-found-styled__ErrorCode",componentId:"sc-762a65ff-4"})`
    font-size: 8rem;
    font-weight: 900;
    margin: 0;
    font-family: 'Courier New', monospace;
    color: ${({$isDarkMode:e})=>e?"#00ff41":"#f5576c"};
    text-shadow: ${({$isDarkMode:e})=>e?"0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41, 0 0 40px #00ff41":"0 4px 8px rgba(0,0,0,0.3)"};
    animation: glitch 2s ease-in-out infinite, pulse 2s ease-in-out infinite;

    @keyframes glitch {
        0%, 100% {
            transform: translate(0);
        }
        20% {
            transform: translate(-2px, 2px);
        }
        40% {
            transform: translate(-2px, -2px);
        }
        60% {
            transform: translate(2px, 2px);
        }
        80% {
            transform: translate(2px, -2px);
        }
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.7;
        }
    }

    @media (max-width: 768px) {
        font-size: 5rem;
    }
`,g=p.default.h2.withConfig({displayName:"not-found-styled__Title",componentId:"sc-762a65ff-5"})`
    font-size: 2.5rem;
    font-weight: 700;
    margin: 1rem 0;
    font-family: 'Courier New', monospace;
    color: ${({$isDarkMode:e})=>e?"#00ff41":"#2d3748"};
    text-shadow: ${({$isDarkMode:e})=>e?"0 0 5px #00ff41, 0 0 10px #00ff41":"none"};

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
`,w=p.default.p.withConfig({displayName:"not-found-styled__Description",componentId:"sc-762a65ff-6"})`
    font-size: 1.2rem;
    margin: 1.5rem 0 3rem;
    font-family: 'Courier New', monospace;
    color: ${({$isDarkMode:e})=>e?"#00ff41":"#4a5568"};
    line-height: 1.6;
    text-shadow: ${({$isDarkMode:e})=>e?"0 0 3px #00ff41":"none"};

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`,y=p.default.div.withConfig({displayName:"not-found-styled__ButtonGroup",componentId:"sc-762a65ff-7"})`
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
`,b=p.default.button.withConfig({displayName:"not-found-styled__Button",componentId:"sc-762a65ff-8"})`
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    font-family: 'Courier New', monospace;
    border-radius: 5px;
    border: ${({$isDarkMode:e})=>e?"2px solid #00ff41":"2px solid #f5576c"};
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    background: ${({$isDarkMode:e,$isPrimary:t})=>t?e?"rgba(0, 255, 65, 0.1)":"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)":e?"rgba(0, 0, 0, 0.5)":"#e2e8f0"};
    color: ${({$isDarkMode:e,$isPrimary:t})=>t?e?"#00ff41":"#ffffff":e?"#00ff41":"#2d3748"};
    box-shadow: ${({$isDarkMode:e,$isPrimary:t})=>t&&e?"0 0 10px #00ff41, 0 0 20px #00ff41":t?"0 4px 15px rgba(0, 0, 0, 0.2)":"none"};
    text-shadow: ${({$isDarkMode:e})=>e?"0 0 5px #00ff41":"none"};

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: ${({$isDarkMode:e})=>e?"rgba(0, 255, 65, 0.3)":"rgba(255, 255, 255, 0.3)"};
        transform: translate(-50%, -50%);
        transition: width 0.6s, height 0.6s;
    }

    &:hover::before {
        width: 300px;
        height: 300px;
    }

    &:hover {
        transform: translateY(-3px);
        box-shadow: ${({$isDarkMode:e,$isPrimary:t})=>t&&e?"0 0 20px #00ff41, 0 0 30px #00ff41, 0 0 40px #00ff41":t?"0 8px 25px rgba(0, 0, 0, 0.3)":"0 4px 15px rgba(0, 0, 0, 0.1)"};
        background: ${({$isDarkMode:e,$isPrimary:t})=>t&&e?"rgba(0, 255, 65, 0.2)":void 0};
    }

    &:active {
        transform: translateY(-1px);
    }

    span {
        position: relative;
        z-index: 1;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
    }

    span svg {
        font-size: 1.2em;
    }

    @media (max-width: 768px) {
        padding: 0.8rem 2rem;
        font-size: 1rem;
    }
`,v=p.default.div.withConfig({displayName:"not-found-styled__Emoji",componentId:"sc-762a65ff-9"})`
    font-size: 5rem;
    margin-bottom: 1rem;
    animation: float 3s ease-in-out infinite;

    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-20px);
        }
    }

    @media (max-width: 768px) {
        font-size: 3rem;
    }
`;function C(){let e=(0,n.useRouter)(),{isDarkMode:s}=(0,i.useTheme)(),{selectedLanguage:p}=(0,r.useLanguage)(),[C,$]=(0,o.useState)(!1),j=(0,o.useRef)(null),k=f.LocaleLang[p],z={...k?.notFound??{},dark:{...k?.notFound?.dark??{}},light:{...k?.notFound?.light??{}}},_=s?z.dark:z.light,N=_.primaryButton,I=_.secondaryButton;return((0,o.useEffect)(()=>{$(!0)},[]),(0,o.useEffect)(()=>{if(!C||!s)return;let e=j.current;if(!e)return;let t=e.getContext("2d");if(!t)return;e.width=window.innerWidth,e.height=window.innerHeight;let n="アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",i=e.width/16,o=[];for(let e=0;e<i;e++)o[e]=-100*Math.random();let a=setInterval(()=>{t.fillStyle="rgba(0, 0, 0, 0.05)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#00ff41",t.font="16px monospace";for(let i=0;i<o.length;i++){let a=n.charAt(Math.floor(Math.random()*n.length));t.fillText(a,16*i,16*o[i]),16*o[i]>e.height&&Math.random()>.975&&(o[i]=0),o[i]++}},30),r=()=>{e.width=window.innerWidth,e.height=window.innerHeight};return window.addEventListener("resize",r),()=>{clearInterval(a),window.removeEventListener("resize",r)}},[C,s]),C)?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.SeoHeaderWithLanguage,{metaKey:"notFound"}),(0,t.jsxs)(h,{$isDarkMode:s,children:[s&&(0,t.jsx)(m,{ref:j}),(0,t.jsx)(c,{$isDarkMode:s}),(0,t.jsxs)(x,{children:[(0,t.jsx)(v,{"aria-hidden":"true",children:s?(0,t.jsx)(d,{}):(0,t.jsx)(l.FiSearch,{})}),(0,t.jsx)(u,{$isDarkMode:s,children:"404"}),(0,t.jsx)(g,{$isDarkMode:s,children:z.title}),(0,t.jsx)(w,{$isDarkMode:s,children:_.description}),(0,t.jsxs)(y,{children:[(0,t.jsx)(b,{$isDarkMode:s,$isPrimary:!0,onClick:()=>{e.push("/")},children:(0,t.jsxs)("span",{children:[(0,t.jsx)(l.FiHome,{"aria-hidden":"true"}),N]})}),(0,t.jsx)(b,{$isDarkMode:s,onClick:()=>{e.back()},children:(0,t.jsxs)("span",{children:[(0,t.jsx)(l.FiArrowLeft,{"aria-hidden":"true"}),I]})})]})]})]})]}):null}e.s(["default",()=>C],29306)}]);