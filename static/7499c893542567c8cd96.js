"use strict";(self.webpackChunkcloud_onchain_trade_sdk=self.webpackChunkcloud_onchain_trade_sdk||[]).push([[5310],{75310:(e,t,i)=>{i.r(t),i.d(t,{default:()=>lt});var s=i(97458),n=i(78659),l=i(78922),r=i(52983),a=i(89019),o=i(105),c=i(86282),u=i(27872),m=i(87608),d=i.n(m),h=i(85466),p=i.n(h),x=i(45563),y=i.n(x),f=i(14633),P=i.n(f),b=i(96056),v=i(73867);const C={fontSize:0,textAlign:"center",padding:"8px 6px",color:"t.third"},E=(0,r.memo)((({children:e,...t})=>r.createElement(c.Z,{sx:C,className:"emptyLine",...t},e)));var g=i(63730),N=i(73246);const S={position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",textAlign:"center"},$=(0,r.memo)((function({show:e=!0,fullScreen:t=!1,inner:i,children:s,zIndex:n}){if(!e)return s||null;const l=r.createElement(N.Z,{sx:{zIndex:n||"100",...S}});return t?r.createElement(r.Fragment,null,s,r.createElement("div",{style:{position:i?"absolute":"fixed",top:0,left:0,width:"100%",height:"100%",background:"radial-gradient(rgba(0, 0, 0, 0.05) 30%, transparent)",zIndex:2e3}},l)):r.createElement(r.Fragment,null,s,l)}));let L;$.show=({fullScreen:e=!1}={})=>{L||(L=document.createElement("div"),document.body.appendChild(L)),g.render(r.createElement($,{fullScreen:e}),L)},$.hide=()=>{L&&g.render(r.createElement($,{show:!1}),L)};const k=$,w=(Object.freeze({en:"en-us",cn:"zh-cn",tw:"zh-tw",kr:"ko",ru:"ru",vn:"vi",it:"it",es:"es",de:"de",fr:"fr",ja:"ja"}),{a:{a:{o:{"-":!0}},b:{h:{"-":!0},v:{"-":!0}},c:{m:{"-":!0},q:{"-":!0},w:{"-":!0},x:{"-":!0},y:{"-":!0}},d:{f:{"-":!0},s:{"-":!0}},e:{b:{"-":!0},c:{"-":!0}},f:{b:{"-":!0}},j:{p:{"-":!0}},p:{c:{"-":!0},d:{"-":!0}},r:{"-":!0,b:{"-":!0},q:{"-":!0},s:{"-":!0},y:{"-":!0},z:{"-":!0}},u:{z:{"-":!0}},v:{l:{"-":!0}},y:{h:{"-":!0},l:{"-":!0},n:{"-":!0},p:{"-":!0}}},b:{b:{z:{"-":!0}}},d:{v:{"-":!0}},f:{a:{"-":!0}},h:{b:{o:{"-":!0}},e:{"-":!0}},i:{w:{"-":!0}},j:{i:{"-":!0},p:{r:{"-":!0}}},m:{e:{n:{"-":!0}}},p:{b:{t:{"-":!0},u:{"-":!0}},e:{o:{"-":!0},s:{"-":!0}},g:{a:{"-":!0}},r:{d:{"-":!0},p:{"-":!0},s:{"-":!0}},s:{"-":!0,t:{"-":!0}}},s:{a:{m:{"-":!0}},h:{u:{"-":!0}},q:{r:{"-":!0}},s:{h:{"-":!0}}},u:{g:{"-":!0},r:{"-":!0}},x:{a:{a:{"-":!0}},m:{n:{"-":!0}}},y:{d:{d:{"-":!0},s:{"-":!0}},h:{d:{"-":!0}},i:{"-":!0,h:{"-":!0}},u:{d:{"-":!0}}}});var M=i(46631),D=i(2237);const I=()=>{const e=(()=>{const{i18n:e}=(0,D.$)();return e.language||"undefined"!=typeof window&&window.localStorage.i18nextLng||"en"})();return(0,M.yV)(e)};v.t7.displayName="FixedSizeList",(0,r.memo)((({className:e,children:t,...i})=>{const s=d()("list-item-entity",e);return r.createElement(r.Fragment,null,r.createElement("div",{className:s,...i},t),r.createElement(u.xB,{styles:{".list-item-entity":{display:"flex",alignItems:"center",justifyContent:" space-between",flex:1}}}))}));const O=()=>{},[T,A]=[38,40];class z extends r.Component{constructor(e){super(e),this.state={isScrolling:!1,isHover:!1,activeId:0,scrollOffset:0},this.renderItem=({index:e,style:t})=>{const{dataSource:i,itemElement:s,openShotCut:n}=this.props,{activeId:l}=this.state,a=!!n&&l===e;return r.createElement(r.Fragment,null,r.createElement("div",{style:t,className:"list-item-container"},r.createElement(s,{...i[e],activeId:l,active:a})),r.createElement(u.xB,{styles:{".list-item-container":{display:"flex",alignItems:"center",overflowX:"hidden"}}}))},this.renderChild=()=>{const{dataSource:e=[],itemKey:t,itemHeight:i,loading:s=!1,loadWithContent:n=!1,direction:l,listSx:a={},emptyText:o,emptyChildren:c}=this.props,{isScrolling:u}=this.state,m=!s&&0===e.length;this.ListStyle={direction:l,...a};const d=r.createElement(b.ZP,{className:"list-auto-sizer"},(({width:s,height:n})=>r.createElement(v.t7,{style:{direction:l,...a},className:"fixed-size-list",width:s,height:n,itemCount:e.length,itemSize:i,itemData:e,itemKey:t,overscanCount:u?10:1,outerRef:this.outerListRef,innerRef:this.innerListRef,useIsScrolling:!0},this.renderItem)));return s?n?r.createElement(r.Fragment,null,r.createElement(k,{fullScreen:!0,inner:!0}),d):r.createElement(k,{fullScreen:!0,inner:!0}):m?r.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexGrow:1}},c||(o?r.createElement(E,null,o):null)):d},this.handleScroll=P()(this.handleScroll.bind(this),200),this.handleMouseEnter=this.handleMouseEnter.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.keyScroll=this.keyScroll.bind(this),this.outerListRef=r.createRef(null),this.innerListRef=r.createRef(null),this.maxHeight=e.itemHeight,this.minHeight=.1,this.eventAttached=!1,this.keys={[T]:0,[A]:0}}componentDidMount(){this.props.openShotCut&&(this.eventAttached=!0,document.addEventListener("keydown",this.handleKeyDown),this.keyScroll())}componentDidUpdate(){this.props.openShotCut&&(this.eventAttached||document.addEventListener("keydown",this.handleKeyDown),this.keyScroll())}componentWillUnmount(){this.eventAttached&&(this.eventAttached=!1,document.removeEventListener("keydown",this.handleKeyDown)),this.clearTimer()}shouldComponentUpdate(e,t){return p()(e.dataSource,this.props.dataSource)?e.loading!==this.props.loading||e.itemHeight!==this.props.itemHeight||e.listSx!==this.props.listSx||e.emptyChildren!==this.props.emptyChildren:!(t.isScrolling&&this.state.isScrolling||t.isHover!==this.state.isHover)}handleMouseEnter(){this.setState({isHover:!0})}handleMouseLeave(){this.setState({isHover:!1})}handleScroll(){this.state.isHover&&(this.setState({isScrolling:!0}),this.clearTimer(),this.timer=setTimeout((()=>{this.setState({isScrolling:!1})}),1e3))}clearTimer(){this.timer&&(clearTimeout(this.timer),this.timer=null)}handleKeyDown(e){const{keyCode:t,metaKey:i,ctrlKey:s}=e,{itemHeight:n,dataSource:l,openShotCut:r,onKeyDownCallback:a,tradeType:o}=this.props,{activeId:c}=this.state;if(r&&(13===t||t===T||t===A)&&(e&&e.preventDefault(),e.stopPropagation(),this.keys={[T]:Math.max(this.minHeight,this.state.scrollOffset-n),[A]:Math.min(this.state.scrollOffset+n,this.maxHeight)},this.keys[t]&&this.scrollItem(this.keys[t]),13===t)){const e=l.filter(((e,t)=>t===c)),t=e.length?e[0]:{};y()(a)&&a({data:t,metaKey:i,ctrlKey:s,tradeType:o})}}keyScroll(){this.innerListRef.current&&(this.maxHeight=this.innerListRef.current.style.height.replace("px","")||this.props.itemHeight),this.outerListRef.current&&this.outerListRef.current.scrollTo({left:0,top:this.state.scrollOffset,behavior:"auto"})}scrollItem(e){this.setState({activeId:Math.floor(e/this.props.itemHeight),scrollOffset:e})}render(){const{variant:e,sx:t,tx:i,scrollPerf:s=!0}=this.props;return r.createElement(c.Z,{onScroll:s?this.handleScroll:O,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,__css:{position:"relative",display:"flex",flexDirection:"column",flexGrow:1},className:"list-container",variant:e,sx:t,tx:i},this.renderChild())}}const _=(e=>{const t=t=>{const i=(e=>{if("string"!=typeof e)return"ltr";e+="-";let t=w;for(let i=0;i<e.length&&(t=t[e.charAt(i)],!0!==t&&void 0!==t);i++);return!0===t?"rtl":"ltr"})(I());return r.createElement(e,{...t,direction:i})};return t.displayName=`WithDirection(${e.displayName||e.name||"Component"})`,t})(z);var H=i(72262),Z=i(50855),V=i(37672);const R={symbol:100,leverage:60,initialCollateral:100,size:84,entryPrice:84,markPrice:84,liquidPrice:84,pnl:100,tpsl:120,action:75,direction:100,entryTime:100,expiration:100,initialAmount:100,dumbEntryPrice:100,currentPrice:100,dumbPnl:100},F=["symbol","leverage","initialCollateral","size","entryPrice","markPrice","liquidPrice","pnl","tpsl","action"].reduce(((e,t)=>e+R[t]),0),q=["symbol","direction","entryTime","expiration","initialAmount","dumbEntryPrice","currentPrice","dumbPnl"].reduce(((e,t)=>e+R[t]),0),B="flex text-t-secondary items-center text-captionSub",K="justify-end",W={default:`${B}`,symbol:`${B}`,leverage:`${B}`,initialCollateral:`${B} ${K}`,size:`${B} ${K}`,entryPrice:`${B} ${K}`,markPrice:`${B} ${K}`,liquidPrice:`${B} ${K}`,pnl:`${B} ${K}`,tpsl:`${B} ${K}`,action:`${B} ${K}`,direction:`${B}`,entryTime:`${B}`,expiration:`${B}`,initialAmount:`${B}`,dumbEntryPrice:`${B}`,currentPrice:`${B}`,dumbPnl:`${B}`},j="flex text-t-secondary items-center text-captionSub ",U="justify-end",G={symbol:`${j}`,leverage:`${j}`,initialCollateral:`${j} ${U}`,size:`${j} ${U}`,entryPrice:`${j} ${U}`,markPrice:`${j} ${U}`,liquidPrice:`${j} ${U}`,pnl:`${j} ${U}`,tpsl:`${j} ${U}`,action:`${j} ${U}`,direction:`${j}`,entryTime:`${j}`,expiration:`${j}`,initialAmount:`${j}`,dumbEntryPrice:`${j}`,currentPrice:`${j}`,dumbPnl:`${j}`};var J=i(8429),X=i(84593),Q=i(83130),Y=i(5837),ee=i(30826),te=i(64617),ie=i(20696),se=i(49382);const ne=({hash:e})=>{const{switchMode:t}=(0,n.C)(),{locale:i,Link:s="a",useColumnSymbol:l}=(0,r.useContext)(Z.Z),{symbol:a,isLong:o,symbolName:c,symbolType:u}=l(e),m=(0,r.useCallback)((()=>{t((0,J.L)(u).isDegenMode?"degen":"classic")}),[t,u]);return(0,r.useMemo)((()=>r.createElement("div",{className:`symbol ${W.symbol}`,style:{width:`${R.symbol}px`,flex:`1 1 ${R.symbol}px`}},r.createElement("button",{className:"flex items-center",onClick:m},r.createElement(s,{className:"flex items-center",href:`/${i}/futures/v2/${a}`,onClick:m},r.createElement("div",{className:"text-t-white text-subtitle2 w-4 h-4 rounded flex justify-center items-center mr-2",style:{backgroundColor:o?"var(--colors-t-buy)":"var(--colors-t-sell)"}},o?"L":"S"),r.createElement("div",{className:"text-t-secondary text-captionSub"},c||a),r.createElement(X.u,{width:"16px",height:"16px",fontSize:"16px",className:"text-t-secondary"}))))),[s,o,i,m,a,c])},le=({hash:e})=>{const{useColumnLeverage:t,useColumnPNL:i,staticHost:s,useColumnSymbol:n}=(0,r.useContext)(Z.Z),l=t(e),{isPNLNegative:a,isPNLPositive:o}=i(e),{symbolType:c}=n(e);return(0,r.useMemo)((()=>r.createElement("div",{className:`leverage gap-[2px] ${W.leverage}`,style:{width:`${R.leverage}px`,flex:`1 1 ${R.leverage}px`}},l,r.createElement(se.b,{symbolType:c,isPNLNegative:a,isPNLPositive:o,staticHost:s}))),[a,o,l,s,c])},re=({hash:e})=>{const{useColumnCollateral:t,useColumnSymbol:i}=(0,r.useContext)(Z.Z),s=t(e),{symbolType:n}=i(e),l=(0,r.useCallback)((()=>V.ee.emit("MODAL_ADD_MARGIN_OPEN",{hash:e})),[e]);return(0,r.useMemo)((()=>r.createElement("div",{className:`initialCollateral ${W.initialCollateral}`,style:{width:`${R.initialCollateral}px`,flex:`1 1 ${R.initialCollateral}px`}},r.createElement("div",{className:"text-t-secondary text-captionSub"},s),(0,J.L)(n).isClassicMode?r.createElement(Q.o,{className:"cursor-pointer text-t-third ml-1",width:"16px",height:"16px",fontSize:"16px",onClick:l}):null)),[s,l,n])},ae=({hash:e})=>{const{useColumnSize:t}=(0,r.useContext)(Z.Z),i=t(e);return(0,r.useMemo)((()=>r.createElement("div",{className:`size ${W.size}`,style:{width:`${R.size}px`,flex:`1 1 ${R.size}px`}},i)),[i])},oe=({hash:e})=>{const{useColumnEntryPrice:t}=(0,r.useContext)(Z.Z),i=t(e);return(0,r.useMemo)((()=>r.createElement("div",{className:`entryPrice ${W.entryPrice}`,style:{width:`${R.entryPrice}px`,flex:`1 1 ${R.entryPrice}px`}},i)),[i])},ce=({hash:e})=>{const{useColumnMarkPrice:t}=(0,r.useContext)(Z.Z),i=t(e);return(0,r.useMemo)((()=>r.createElement("div",{className:`markPrice ${W.markPrice}`,style:{width:`${R.markPrice}px`,flex:`1 1 ${R.markPrice}px`}},i)),[i])},ue=({hash:e})=>{const{useColumnLiquidPrice:t}=(0,r.useContext)(Z.Z),i=t(e);return(0,r.useMemo)((()=>r.createElement("div",{className:`liquidPrice ${W.liquidPrice}`,style:{width:`${R.liquidPrice}px`,flex:`1 1 ${R.liquidPrice}px`}},i)),[i])},me=({hash:e})=>{const{useColumnPNL:t,enableShare:i}=(0,r.useContext)(Z.Z),{PNL:s,ROI:n,isPNLNegative:l,isROINegative:a}=t(e),o=(0,r.useCallback)((()=>V.ee.emit("MODAL_POSITION_SHARE_OPEN",{hash:e,overlay:!0})),[e]);return(0,r.useMemo)((()=>r.createElement("div",{className:`pnl flex-row ${W.pnl}`,style:{width:`${R.pnl}px`,flex:`1 1 ${R.pnl}px`}},r.createElement(ie.X,{PNL:s,ROI:n,isPNLNegative:l,isROINegative:a}),i&&r.createElement(Y.f,{className:"relative ml-0.5 cursor-pointer text-t-third",width:"16px",height:"16px",fontSize:"16px",onClick:o}))),[s,n,i,l,a,o])},de=({hash:e})=>{const{useColumnTPSL:t}=(0,r.useContext)(Z.Z),{takeProfit:i,stopLoss:s}=t(e),n=(0,r.useCallback)((()=>V.ee.emit("MODAL_EDIT_TP_SL_OPEN",{hash:e})),[e]);return(0,r.useMemo)((()=>r.createElement("div",{className:`liquidPrice flex-row ${W.tpsl}`,style:{width:`${R.tpsl}px`,flex:`1 1 ${R.tpsl}px`}},r.createElement("div",{className:"flex text-t-secondary text-captionSub mr-[2px] text-right"},i," / ",s," ",r.createElement(ee.s,{className:"relative ml-0.5 cursor-pointer text-t-third",width:"16px",height:"16px",fontSize:"16px",onClick:n})))),[n,s,i])},he=({hash:e})=>{const{getI18n:t,useColumnSymbol:i,useIsMarketClose:s}=(0,r.useContext)(Z.Z),{symbol:n}=i(e),l=s(n),a=(0,r.useCallback)((()=>V.ee.emit("MODAL_CLOSE_POSITION",{hash:e})),[e]),o=(0,r.useCallback)((()=>V.ee.emit("MODAL_POSITION_DETAIL_OPEN",{hash:e})),[e]);return(0,r.useMemo)((()=>r.createElement("div",{className:`action gap-[10px] ${W.action}`,style:{width:`${R.action}px`,flex:`1 1 ${R.action}px`}},!l&&r.createElement(r.Fragment,null,r.createElement("div",{className:"cursor-pointer text-captionSub text-t-link",onClick:a},t("userinfo-positions-close-position-V2",{defaultValue:"Close"}))),l&&r.createElement("div",{className:"text-captionSub text-t-disabled"},t("orderForm-button-marketClosed","Market Closed")),r.createElement(te.J,{className:"text-t-third cursor-pointer mx-1",width:"16px",height:"16px",fontSize:"16px",onClick:o}))),[l,a,t,o])},pe=({hash:e})=>(0,r.useMemo)((()=>r.createElement("div",{className:"positions-column flex flex-row w-full h-10 items-center box-border border-b-border-lineStrong border-b border-solid","data-column-hash":e,style:{minWidth:`${F}px`}},r.createElement(ne,{hash:e}),r.createElement(le,{hash:e}),r.createElement(re,{hash:e}),r.createElement(ae,{hash:e}),r.createElement(oe,{hash:e}),r.createElement(ce,{hash:e}),r.createElement(ue,{hash:e}),r.createElement(me,{hash:e}),r.createElement(de,{hash:e}),r.createElement(he,{hash:e}))),[e]);var xe=function(e,t,i,s){return new(i||(i=Promise))((function(n,l){function r(e){try{o(s.next(e))}catch(e){l(e)}}function a(e){try{o(s.throw(e))}catch(e){l(e)}}function o(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}o((s=s.apply(e,t||[])).next())}))};const ye=({hash:e})=>(0,r.useMemo)((()=>r.createElement(pe,{hash:e})),[e]),fe=(e,t)=>t[e].hash,Pe=()=>{const{usePositions:e,useContractCloseAllPosition:t,useContractClosePosition:i,usePositionsInitialed:s,getI18n:n,useTheme:l}=(0,r.useContext)(Z.Z),{isLight:a}=l(),o=t(),c=i(),u=e(),m=s();return(0,r.useEffect)((()=>V.ee.on("POSITION_CLOSE",(e=>xe(void 0,void 0,void 0,(function*(){yield c(e.hash),V.ee.emit("MODAL_CLOSE_POSITION_CLOSE",void 0)}))))),[c]),(0,r.useEffect)((()=>V.ee.on("POSITION_ALL_CLOSE",(()=>xe(void 0,void 0,void 0,(function*(){yield o(),V.ee.emit("MODAL_CLOSE_ALL_POSITION_CLOSE",void 0)}))))),[o]),(0,r.useMemo)((()=>r.createElement(_,{sx:{height:"100%"},style:{minWidth:`${F}px`},listSx:{minWidth:`${F}px`},dataSource:u.map((e=>({hash:e}))),loading:!m,loadWithContent:!0,itemElement:ye,itemKey:fe,itemHeight:40,emptyChildren:r.createElement(H.$,{isLight:a,title:n("userinfo-positions-no-data",{defaultValue:"No Positions"})})})),[n,u,m,a])};var be=i(26583),ve=i(99297),Ce=i(89663),Ee=i(95386);const ge=({hash:e})=>{const{isDumbMode:t,switchMode:i}=(0,n.C)(),{locale:s,Link:l="a",useDumbPrediction:a}=(0,r.useContext)(Z.Z),{usePredictionDataByFiled:o}=a(),c=o(e,"symbol"),u=o(e,"isLong"),m=(0,r.useCallback)((()=>{t||i("dumb")}),[t,i]);return(0,r.useMemo)((()=>r.createElement("div",{className:`cursor-pointer ${W.symbol}`,style:{width:`${R.symbol}px`,flex:`1 1 ${R.symbol}px`}},r.createElement("button",{className:"flex items-center",onClick:m},r.createElement(l,{className:"flex items-center",href:`/${s}/futures/v2/${c}`},r.createElement("div",{className:"text-t-white text-subtitle2 w-4 h-4 rounded flex justify-center items-center mr-2",style:{backgroundColor:u?"var(--colors-t-buy)":"var(--colors-t-sell)"}},u?"L":"S"),r.createElement("div",{className:"text-t-secondary text-captionSub"},c),r.createElement(X.u,{width:"16px",height:"16px",fontSize:"16px",className:"text-t-secondary"}))))),[l,u,s,m,c])},Ne=({hash:e})=>{const{getI18n:t,useDumbPrediction:i}=(0,r.useContext)(Z.Z),{usePredictionDataByFiled:s}=i(),n=s(e,"isLong");return(0,r.useMemo)((()=>r.createElement("div",{className:W.direction,style:{width:`${R.direction}px`,flex:`1 1 ${R.direction}px`}},n?t("userinfo-positions-direction-long","Long"):t("userinfo-positions-direction-short","Short"))),[t,n])},Se=({hash:e})=>{const{useDumbPrediction:t}=(0,r.useContext)(Z.Z),{usePredictionDataByFiled:i}=t(),s=i(e,"startTime");return(0,r.useMemo)((()=>r.createElement("div",{className:W.entryTime,style:{width:`${R.entryTime}px`,flex:`1 1 ${R.entryTime}px`}},(0,ve.v)(new Date(1e3*s),"MM-dd hh:mm:ss"))),[s])},$e=e=>{const t=Math.floor((new Date).getTime()/1e3);return Math.max(e-t,-1)},Le=({hash:e})=>{const{getI18n:t,useDumbPrediction:i}=(0,r.useContext)(Z.Z),{usePredictionDataByFiled:s}=i(),n=s(e,"startTime"),l=s(e,"executionTime"),a=l-n,o=(0,r.useRef)(null),[c,u]=(0,r.useState)($e(l)),m=window.getComputedStyle(document.documentElement),d=m.getPropertyValue("--colors-border-line"),h=m.getPropertyValue("--colors-highLight");return(0,r.useEffect)((()=>{o.current&&clearInterval(o.current),u($e(l));const e=()=>{o.current&&(clearInterval(o.current),o.current=null)};return o.current=setInterval((()=>u((t=>{const i=t-1;if(i>-1)return i;const s=$e(l);return s>-1?s:(e(),-1)}))),1e3),e}),[l]),(0,r.useMemo)((()=>r.createElement("div",{className:W.expiration,style:{width:`${R.expiration}px`,flex:`1 1 ${R.expiration}px`}},c>-1?r.createElement(r.Fragment,null,r.createElement("div",{className:"text-highLight mr-1.5"},c,"s"),r.createElement(be.m,{id:`canvas-${e}`,percent:c>a?100:(a-c)/a*100,size:16,width:1.6,color:h,bgColor:d})):r.createElement("div",{className:"text-t-emphasize text-captionSub"},t("userinfo-history-column-status-in-progress","Statement in progress")))),[c,e,a,h,d,t])},ke=({hash:e})=>{const{useDumbPrediction:t}=(0,r.useContext)(Z.Z),{usePredictionDataByFiled:i}=t(),s=i(e,"principal"),n=i(e,"tokenIn");return(0,r.useMemo)((()=>r.createElement("div",{className:W.initialAmount,style:{width:`${R.initialAmount}px`,flex:`1 1 ${R.initialAmount}px`}},`${s} ${n}`)),[s,n])},we=({hash:e})=>{const{useDumbPrediction:t}=(0,r.useContext)(Z.Z),{usePredictionDataByFiled:i,usePricePrecision:s}=t(),n=i(e,"symbol"),l=i(e,"entryPrice"),a=s(n);return(0,r.useMemo)((()=>r.createElement("div",{className:W.dumbEntryPrice,style:{width:`${R.dumbEntryPrice}px`,flex:`1 1 ${R.dumbEntryPrice}px`}},(0,Ce.uf)(l,a))),[l,a])},Me=({hash:e})=>{const{useDumbPrediction:t}=(0,r.useContext)(Z.Z),{useCurrentPrice:i}=t(),s=i(e);return(0,r.useMemo)((()=>r.createElement("div",{className:W.currentPrice,style:{width:`${R.currentPrice}px`,flex:`1 1 ${R.currentPrice}px`}},s)),[e,s])},De=({hash:e})=>{const{useDumbPrediction:t}=(0,r.useContext)(Z.Z),{usePredictionDataByFiled:i,useAssetPrecision:s,useCurrentPrice:n,predictionPairs:l}=t(),a=i(e,"tokenIn"),o=i(e,"symbol"),c=n(e),u=s(a),m=i(e,"entryPrice")||0,d=i(e,"principal")||0,h=i(e,"isLong"),p=i(e,"openFee")||0,x=i(e,"executionTime")||0,y=i(e,"startTime")||0,f=Number(x)-Number(y),P=Ee.Z1.get(f),b=(0,r.useMemo)((()=>{var e;return null===(e=null==l?void 0:l.find((e=>{var t;return o===(null===(t=e.name)||void 0===t?void 0:t.replace("/",""))})))||void 0===e?void 0:e.predictionPeriods.find((e=>e.period===P))}),[P,l,o]),v=Number(d)-Number(p),C=b&&void 0!==b.winRatio&&void 0!==b.winCloseFeeP?(b.winRatio-b.winCloseFeeP)/10**Ee.cB.percent:0,E=h?Number(c.replace(/,/g,""))>Number(m):Number(c.replace(/,/g,""))<Number(m),g=E?C:-1,N=E?v*g:Number(d)*g,S=`${(0,Ce.uf)(100*g,2)}%`,$=(0,Ce.uf)(N,u);return(0,r.useMemo)((()=>r.createElement("div",{className:W.dumbPnl,style:{width:`${R.dumbPnl}px`,flex:`1 1 ${R.dumbPnl}px`}},r.createElement("span",{style:{color:N>0?"var(--colors-t-buy)":"var(--colors-t-sell)"}},`${N>0?`+${$}`:$}`),r.createElement("span",{style:{color:N>0?"var(--colors-t-buy)":"var(--colors-t-sell)"}}," ",a),r.createElement("span",{style:{color:g>0?"var(--colors-t-buy)":"var(--colors-t-sell)"}}," (",S,")"))),[N,$,g,S,a])},Ie=({hash:e})=>(0,r.useMemo)((()=>r.createElement("div",{className:"positions-column flex flex-row w-full h-10 items-center box-border border-b-[var(--colors-border-line)] border-b border-solid","data-column-hash":e,style:{minWidth:`${q}px`}},r.createElement(ge,{hash:e}),r.createElement(Ne,{hash:e}),r.createElement(Se,{hash:e}),r.createElement(Le,{hash:e}),r.createElement(ke,{hash:e}),r.createElement(we,{hash:e}),r.createElement(Me,{hash:e}),r.createElement(De,{hash:e}))),[e]),Oe=({hash:e})=>(0,r.useMemo)((()=>r.createElement(Ie,{hash:e})),[e]),Te=(e,t)=>t[e].hash,Ae=()=>{const{useDumbPrediction:e,getI18n:t,useTheme:i}=(0,r.useContext)(Z.Z),{isLight:s}=i(),{usePredictionInitialed:n,usePredictions:l}=e(),a=n(),o=l();return(0,r.useMemo)((()=>r.createElement(_,{sx:{height:"100%"},style:{minWidth:`${q}px`},listSx:{minWidth:`${q}px`},dataSource:o.map((e=>({hash:e}))),loading:!a,loadWithContent:!0,itemElement:Oe,itemKey:Te,itemHeight:40,emptyChildren:r.createElement(H.$,{isLight:s,title:t("userinfo-positions-no-data",{defaultValue:"No Positions"})})})),[t,o,a,s])};var ze=i(32142),_e=i(17461),He=i(44478);const Ze=({tip:e,children:t})=>(0,r.useMemo)((()=>r.createElement(r.Fragment,null,e?r.createElement(ze.e,{tip:e},t):t)),[t,e]),Ve=({value:e})=>{const{getI18n:t}=(0,r.useContext)(Z.Z),i=(e=>{const{getI18n:t}=(0,r.useContext)(Z.Z);return(0,r.useMemo)((()=>e===_e.O.Dumb?[{key:"symbol",className:"symbol",title:t("userinfo-positions-column-symbol",{defaultValue:"Symbol"})},{key:"direction",className:"direction",title:t("userinfo-positions-column-direction",{defaultValue:"Direction"})},{key:"entryTime",className:"entryTime",title:t("userinfo-positions-column-entryTime",{defaultValue:"Entry Time"})},{key:"expiration",className:"expiration",title:t("userinfo-positions-column-expiration",{defaultValue:"Expiration"})},{key:"initialAmount",className:"initialAmount",title:t("userinfo-positions-column-initialAmount",{defaultValue:"Initial Amount"})},{key:"entryPrice",className:"dumbEntryPrice",title:t("userinfo-positions-column-entryPrice",{defaultValue:"Entry Price"})},{key:"currentPrice",className:"currentPrice",title:t("userinfo-positions-column-currentPrice",{defaultValue:"Current Price"})},{key:"pnl",className:"dumbPnl",title:t("dex-trading-competition-PNL-ROI-v3",{defaultValue:"PNL (ROI%)"})}]:[{key:"symbol",className:"symbol",title:t("userinfo-positions-column-symbol",{defaultValue:"Symbol"})},{key:"leverage",className:"leverage",title:t("userinfo-positions-column-leverage",{defaultValue:"Leverage"}),tip:t("userinfo-column-leverage-tip",{defaultValue:"Leverage will follow the actual transaction, which may be slightly different from the leverage set when opening the position."})},{key:"initialCollateral",className:"initialCollateral",title:t("userinfo-positions-column-initialMargin",{defaultValue:"Initial Margin"})},{key:"size",className:"size",title:t("userinfo-column-size",{defaultValue:"Size ({{symbol}})",symbol:He.e.USD})},{key:"entryPrice",className:"entryPrice",title:t("userinfo-positions-column-entryPrice",{defaultValue:"Entry Price"})},{key:"markPrice",className:"markPrice",title:t("userinfo-positions-column-markPrice",{defaultValue:"Mark Price"})},{key:"liquidPrice",className:"liquidPrice",title:t("userinfo-positions-column-liquidPrice",{defaultValue:"Liquid Price"}),tip:t("userinfo-column-liquidPrice-tip",{defaultValue:"The position will be liquidated when the initial margin (after deducting the fee) reaches the corressponding lost rate."})},{key:"pnl",className:"pnl",title:t("userinfo-positions-column-PNL-ROI",{defaultValue:"PNL (ROI%)"})},{key:"tpsl",className:"tpsl",title:t("userinfo-positions-column-tpsl",{defaultValue:"TP/SL"})},{key:"action",className:"action",title:""}]),[t,e])})(e),s=(0,r.useCallback)((()=>V.ee.emit("MODAL_CLOSE_ALL_POSITION",void 0)),[]);return(0,r.useMemo)((()=>r.createElement("div",{className:"positions-header w-full h-8 flex flex-row items-center box-border border-b-border-line border-b border-solid",style:{minWidth:`${e===_e.O.Classic?F:q}px`}},i.map((e=>r.createElement("div",{key:e.key,className:`${e.className} ${G[e.className]}`,style:{width:`${R[e.className]}px`,flex:`1 1 ${R[e.className]}px`}},"action"!==e.key&&r.createElement(Ze,{tip:e.tip},r.createElement("div",{className:"flex item-center text-t-third text-caption",style:{cursor:e.tip?"pointer":"default"}},e.title)),"action"===e.key&&r.createElement("div",{className:"flex item-center text-t-link text-caption cursor-pointer text-right px-1",onClick:s},t("userinfo-positions-column-close-all",{defaultValue:"Close All Positions"}))))))),[t,s,i,e])};var Re=i(49858),Fe=i(80291),qe=i(51796),Be=i(26997),Ke=i(66099),We=i(26130);const je="h-[24px] py-0 px-2 mr-2 rounded-sm bg-interactive-interactiveBg text-t-third data-[state=active]:bg-interactive-interactive01 data-[state=active]:text-t-primary",Ue=()=>{const{isDumbMode:e}=(0,n.C)(),{enableDumb:t,useDumbPrediction:i,getI18n:s}=(0,r.useContext)(Z.Z),[a,o]=(0,r.useState)(e?_e.O.Dumb:_e.O.Classic),{refetchPredictions:c,usePredictionInitialed:u}=i(),m=u(),d=e=>{o(e)};return(0,r.useEffect)((()=>{o(e?_e.O.Dumb:_e.O.Classic)}),[e]),(0,r.useEffect)((()=>{t&&a===_e.O.Dumb&&!m&&c()}),[t,m,c,a]),(0,r.useMemo)((()=>r.createElement(l.mQ,{className:"w-full h-full",value:a,onValueChange:d},r.createElement("div",{className:"positions-container flex flex-col w-full h-full flex-[1_0] overflow-x-auto overflow-y-hidden"},r.createElement("div",{className:"flex flex-col items-start w-full h-full overflow-hidden"},t&&r.createElement(l.dr,{className:"rounded-sm p-0 bg-transparent h-[28px] mt-0.5"},r.createElement(l.SP,{className:je,value:_e.O.Classic},s("userinfo-positions-tab-classic","Classic & Degen")),r.createElement(l.SP,{className:je,value:_e.O.Dumb},s("userinfo-positions-tab-dumb","Dumb"))),r.createElement(l.nU,{className:"hidden flex-col w-full h-full data-[state=active]:flex overflow-x-auto",value:_e.O.Classic},r.createElement(Ve,{value:_e.O.Classic}),r.createElement("div",{className:"flex-1 [&>div:first-child]:h-full"},r.createElement(Pe,null))),r.createElement(l.nU,{className:"hidden flex-col w-full h-full data-[state=active]:flex overflow-x-auto",value:_e.O.Dumb},r.createElement(Ve,{value:_e.O.Dumb}),r.createElement("div",{className:"flex-1 [&>div:first-child]:h-full"},r.createElement(Ae,null))))))),[a,t,s])},Ge=e=>(0,r.useMemo)((()=>r.createElement(Z.Z.Provider,{value:{locale:e.locale,staticHost:e.staticHost,siteHost:e.staticHost,enableShare:e.enableShare,enableShareLink:e.enableShareLink,enableDumb:e.enableDumb,Link:e.Link,getI18n:e.getI18n,useTheme:e.useTheme,useIsMarketClose:e.useIsMarketClose,useChangeSymbol:e.useChangeSymbol,usePositions:e.usePositions,useContractCloseAllPosition:e.useContractCloseAllPosition,useContractClosePosition:e.useContractClosePosition,usePositionTPSL:e.usePositionTPSL,usePositionAddMargin:e.usePositionAddMargin,usePositionsInitialed:e.usePositionsInitialed,useColumnLeverage:e.useColumnLeverage,useColumnCollateral:e.useColumnCollateral,useColumnPNL:e.useColumnPNL,useColumnSymbol:e.useColumnSymbol,useColumnLiquidPrice:e.useColumnLiquidPrice,useColumnEntryPrice:e.useColumnEntryPrice,useColumnMarkPrice:e.useColumnMarkPrice,useColumnTPSL:e.useColumnTPSL,useMarkPrice:e.useMarkPrice,useColumnSize:e.useColumnSize,onChainPerpContractAddress:e.onChainPerpContractAddress,usePositionDetail:e.usePositionDetail,useActionBtnDisabled:e.useActionBtnDisabled,useLeverage:e.useLeverage,useDumbPrediction:e.useDumbPrediction?e.useDumbPrediction:()=>({refetchPredictions:()=>{},usePredictionDataByFiled:()=>{},usePredictionInitialed:()=>!1,usePredictions:()=>[],usePricePrecision:()=>2,useAssetPrecision:()=>2,useCurrentPrice:()=>"-",predictionPairs:[]})}},r.createElement(Ue,null),r.createElement(Re.t,null),r.createElement(Fe.n,null),r.createElement(qe.D,null),r.createElement(a.l.Provider,{value:{getI18n:e.getI18n,useTPSL:e.usePositionTPSL,useMarkPrice:e.useMarkPrice,useActionBtnDisabled:e.useActionBtnDisabled,ee:V.ee,useColumnSymbol:e.useColumnSymbol,useLeverage:e.useLeverage}},r.createElement(o.y,null)),r.createElement(Be.C.Provider,{value:{locale:e.locale,staticHost:e.staticHost,siteHost:e.siteHost,enableShare:e.enableShare,enableShareLink:e.enableShareLink,getI18n:e.getI18n,useTheme:e.useTheme,useMarkPrice:e.useMarkPrice,usePositionDetail:e.usePositionDetail,ee:V.ee}},r.createElement(Ke.F,null),r.createElement(We.m,null)))),[e]);var Je=i(2547),Xe=i(33687),Qe=i(67387),Ye=i(25254),et=i(98277),tt=i(96988),it=i(52590),st=i(96240),nt=i(43693);const lt=()=>{(0,st.Jo)(),(0,st.eO)();const{getI18n:e,i18n:{language:t}}=(0,tt.V6)(),i=(0,Qe.E4)(),{dumb:n}=(0,Je.B)();return(0,r.useMemo)((()=>(0,s.jsx)(Ge,{locale:t,getI18n:e,siteHost:Xe.brokerConfig.staticBaseUrl,staticHost:Xe.brokerConfig.apxStaticBaseUrl,useTheme:it.F,Link:nt.G,useMarkPrice:st.CE,useIsMarketClose:Ye.Z,useChangeSymbol:st.d0,usePositions:st.$J,usePositionTPSL:st.mO,usePositionAddMargin:st.zS,usePositionsInitialed:st.Zm,useContractCloseAllPosition:st.h2,useContractClosePosition:st.Im,useColumnSymbol:st.iA,useColumnLeverage:st.ch,useColumnCollateral:st.SD,useColumnEntryPrice:st.A4,useColumnMarkPrice:st.PH,useColumnLiquidPrice:st.lW,useColumnPNL:st.RM,useColumnTPSL:st.a1,useColumnSize:st.v_,usePositionDetail:st.KB,onChainPerpContractAddress:i.address,useActionBtnDisabled:et.a9,useLeverage:st.rf,useDumbPrediction:st.D,enableShare:!0,enableDumb:n})),[i.address,e])}}}]);