(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,90392,i=>{"use strict";var o=i.i(80685),e=i.i(94479);let t=e.default.div.withConfig({displayName:"loading__LoadingContainer",componentId:"sc-ac58753b-0"})`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #000;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
`,n=e.default.div.withConfig({displayName:"loading__Spinner",componentId:"sc-ac58753b-1"})`
    width: 60px;
    height: 60px;
    border: 5px solid rgba(42, 168, 137, 0.3);
    border-top: 5px solid #2aa889;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 20px;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`,a=e.default.p.withConfig({displayName:"loading__LoadingText",componentId:"sc-ac58753b-2"})`
    font-size: 1.3rem;
    font-weight: 500;
    color: #2aa889;
    margin: 0;
`;function d(){return(0,o.jsxs)(t,{children:[(0,o.jsx)(n,{}),(0,o.jsx)(a,{children:"Loading..."})]})}i.s(["default",()=>d],90392)}]);