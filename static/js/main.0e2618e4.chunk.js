(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{265:function(e,t,a){e.exports=a(444)},270:function(e,t,a){},444:function(e,t,a){"use strict";a.r(t);var n,r,o=a(0),c=a.n(o),i=a(21),s=(a(270),a(29)),l=a(189),u=a(448),p=a(203),g=a(76),h=a(202),m=a(112),d=a(24),b=a(25),E=a(28),f=a(26),v=a(27),O=a(446),j=a(17),w=a(90),y=a.n(w),P=a(50),C=a.n(P),S=a(33),k=a.n(S),T=a(30),N=a.n(T),D=a(195),B=a.n(D),x=a(193),_=a.n(x),R=a(194),F=a.n(R),L=a(92),A=a.n(L),H=a(71),W=a.n(H),I=a(60),M=a.n(I),U=a(73),V=a.n(U),G=a(74),z=a.n(G),Q=a(91),q=a.n(Q),J={list:"/events/list",new:"/events/new",view:"/events/edit/:id"},Y="/",K=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(E.a)(this,Object(f.a)(t).call(this,e))).toggleDrawer=function(e){return function(){a.setState({isDrawerOpen:e})}},a.state={isDrawerOpen:!1},a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.progressBar,n=c.a.createElement("div",{className:t.list},c.a.createElement(W.a,null,c.a.createElement(O.a,{to:J.new,className:t.sideListItem},c.a.createElement(M.a,{button:!0},c.a.createElement(V.a,null,c.a.createElement(_.a,null)),c.a.createElement(z.a,{primary:"New Event"}))),c.a.createElement(O.a,{to:J.list,className:t.sideListItem},c.a.createElement(M.a,{button:!0},c.a.createElement(V.a,null,c.a.createElement(F.a,null)),c.a.createElement(z.a,{primary:"List Events"})))));return c.a.createElement("div",{className:t.container},c.a.createElement(y.a,{position:"fixed"},c.a.createElement(C.a,{variant:"dense"},c.a.createElement(N.a,{className:t.menuButton,color:"inherit","aria-label":"Menu",onClick:this.toggleDrawer(!0)},c.a.createElement(B.a,null)),c.a.createElement(k.a,{variant:"h6",color:"inherit",className:t.grow},c.a.createElement(O.a,{to:Y,className:t.brand},"Events App")))),a.loading&&c.a.createElement(q.a,{className:t.progress,color:"secondary"}),c.a.createElement(A.a,{open:this.state.isDrawerOpen,onClose:this.toggleDrawer(!1)},c.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer(!1),onKeyDown:this.toggleDrawer(!1)},n)))}}]),t}(o.Component),X=Object(j.withStyles)(function(e){return{brand:{color:"inherit",textDecoration:"none",display:"flex",alignItems:"inherit",justifyContent:"inherit"},sideListItem:{color:"inherit",textDecoration:"none"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},list:{width:250},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:400},fab:{position:"absolute",bottom:2*e.spacing.unit,right:2*e.spacing.unit},container:{marginBottom:48},progress:{position:"relative",top:49},padding:{padding:e.spacing.unit}}},{withTheme:!0})(K),$=Object(s.c)(function(e){return{progressBar:e.progressBar}},function(e){return{}})(X),Z=a(20),ee=a(23),te=a.n(ee),ae=a(99),ne=a.n(ae),re=a(101),oe=a.n(re),ce=a(34),ie=a.n(ce),se=a(102),le=a.n(se),ue=a(103),pe=a.n(ue),ge=a(51),he=a.n(ge),me=a(100),de=a.n(me),be=a(146),Ee=a.n(be),fe=a(148),ve=a.n(fe),Oe=a(147),je=a.n(Oe),we=a(145),ye=a.n(we),Pe=a(110),Ce=a.n(Pe);!function(e){e.json="json"}(n||(n={})),function(e){e[e.Unknown=1]="Unknown",e[e.Yes=2]="Yes",e[e.No=3]="No"}(r||(r={}));var Se=0;Ce.a.defaults.baseURL="https://assessments.bzzhr.net";var ke,Te=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleFirstPageButtonClick=function(e){a.props.onChangePage(e,Se)},a.handleBackButtonClick=function(e){a.props.onChangePage(e,a.props.page-1)},a.handleNextButtonClick=function(e){a.props.onChangePage(e,a.props.page+1)},a.handleLastPageButtonClick=function(e){a.props.onChangePage(e,Math.max(0,Math.ceil(a.props.count/a.props.rowsPerPage)-1))},a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.count,n=e.page,r=e.rowsPerPage,o=e.theme;return c.a.createElement("div",{className:t.root},c.a.createElement(N.a,{onClick:this.handleFirstPageButtonClick,disabled:0===n,"aria-label":"First Page"},"rtl"===o.direction?c.a.createElement(ye.a,null):c.a.createElement(Ee.a,null)),c.a.createElement(N.a,{onClick:this.handleBackButtonClick,disabled:0===n,"aria-label":"Previous Page"},"rtl"===o.direction?c.a.createElement(je.a,null):c.a.createElement(ve.a,null)),c.a.createElement(N.a,{onClick:this.handleNextButtonClick,disabled:n>=Math.ceil(a/r)-1,"aria-label":"Next Page"},"rtl"===o.direction?c.a.createElement(ve.a,null):c.a.createElement(je.a,null)),c.a.createElement(N.a,{onClick:this.handleLastPageButtonClick,disabled:n>=Math.ceil(a/r)-1,"aria-label":"Last Page"},"rtl"===o.direction?c.a.createElement(Ee.a,null):c.a.createElement(ye.a,null)))}}]),t}(c.a.Component),Ne=Object(j.withStyles)(function(e){return{root:{flexShrink:0,color:e.palette.text.secondary,marginLeft:2.5*e.spacing.unit}}},{withTheme:!0})(Te),De=a(77),Be=a(144),xe=a(41),_e=a(8),Re=a.n(_e),Fe=a(196),Le=a(447),Ae=a(191),He=a(445),We=a(190),Ie=a(38),Me=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleWeekChange=function(e){a.props.onChange(Object(De.a)(e))},a.formatWeekSelectLabel=function(e,t){return null===e?"":e?"CW ".concat(Object(Le.a)(e),", ").concat(Object(Ae.a)(e)):t},a.renderWrappedWeekDay=function(e,t,n){var r,o,i=a.props.classes,s=Object(De.a)(t),l=Object(Be.a)(t),u=Object(He.a)(e,{start:s,end:l}),p=Object(We.a)(e,s),g=Object(We.a)(e,l),h=Re()((r={},Object(xe.a)(r,i.highlight,u),Object(xe.a)(r,i.firstHighlight,p),Object(xe.a)(r,i.endHighlight,g),r)),m=Re()(i.day,(o={},Object(xe.a)(o,i.nonCurrentMonthDay,!n),Object(xe.a)(o,i.highlightNonCurrentMonthDay,!n&&u),o));return c.a.createElement("div",{className:h},c.a.createElement(Fe.a,{className:m},c.a.createElement("span",null," ",Object(Ie.a)(e,"d",{awareOfUnicodeTokens:!0})," ")))},a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.label;return c.a.createElement("div",{className:"picker"},c.a.createElement(m.a,{label:a,value:t,onChange:this.handleWeekChange,renderDay:this.renderWrappedWeekDay,labelFunc:this.formatWeekSelectLabel}))}}]),t}(o.PureComponent),Ue=Object(j.withStyles)(function(e){return{dayWrapper:{position:"relative"},day:{width:36,height:36,fontSize:e.typography.caption.fontSize,margin:"0 2px",color:"inherit"},customDayHighlight:{position:"absolute",top:0,bottom:0,left:"2px",right:"2px",border:"1px solid ".concat(e.palette.secondary.main),borderRadius:"50%"},nonCurrentMonthDay:{color:e.palette.text.disabled},highlightNonCurrentMonthDay:{color:"#676767"},highlight:{background:e.palette.primary.main,color:e.palette.common.white},firstHighlight:{extend:"highlight",borderTopLeftRadius:"50%",borderBottomLeftRadius:"50%"},endHighlight:{extend:"highlight",borderTopRightRadius:"50%",borderBottomRightRadius:"50%"}}},{withTheme:!0})(Me),Ve=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleDateChange=function(e){a.props.changeParam({since:Object(De.a)(e),before:Object(Be.a)(e),page:Se})},a.handleChangePage=function(e,t){a.props.changeParam({page:t})},a.handleChangeRowsPerPage=function(e){a.props.changeParam({page:Se,rowsPerPage:parseInt(e.target.value,10)})},a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.classes,n=t.events,r=n.items,o=n.pages,i=n.rowsPerPage,s=n.currentPage,l=n.totalCount,u=o[s]||[];return e=(e=i-Math.min(i,u.length-s*i))>=i?0:e,c.a.createElement("div",{className:a.tableWrapper},c.a.createElement(Ue,{value:n.since,onChange:this.handleDateChange,label:"Current week"}),c.a.createElement(ne.a,{className:a.table},c.a.createElement(de.a,null,c.a.createElement(he.a,null,c.a.createElement(ie.a,null,"Label"),c.a.createElement(ie.a,{align:"right"},"Category"),c.a.createElement(ie.a,{align:"right"},"Start Date"),c.a.createElement(ie.a,{align:"right"},"EndDate"))),c.a.createElement(oe.a,null,u.filter(function(e){return r[e]}).map(function(e){return r[e]}).map(function(e){return c.a.createElement(he.a,{key:e.id},c.a.createElement(ie.a,{component:"th",scope:"row"},e.label),c.a.createElement(ie.a,{align:"center",style:{backgroundColor:e.category}},c.a.createElement("span",{style:{backgroundColor:"white"}},e.category)),c.a.createElement(ie.a,{align:"right"},new Date(e.start).toLocaleString()),c.a.createElement(ie.a,{align:"right"},new Date(e.end).toLocaleString()))}),e>0&&c.a.createElement(he.a,{style:{height:48*e}},c.a.createElement(ie.a,{colSpan:6}))),c.a.createElement(le.a,null,c.a.createElement(he.a,null,c.a.createElement(pe.a,{rowsPerPageOptions:[5,10,25],colSpan:3,count:l,rowsPerPage:i,page:s,SelectProps:{native:!0},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage,ActionsComponent:Ne})))))}}]),t}(c.a.Component),Ge=Object(j.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit},table:{minWidth:500},tableWrapper:{overflowX:"auto"}}},{withTheme:!0})(Ve),ze=function(e){function t(){return Object(d.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.props.events.loaded||this.props.fetchItems()}},{key:"componentWillReceiveProps",value:function(e){this.props.events.currentPage===e.events.currentPage&&this.props.events.rowsPerPage===e.events.rowsPerPage&&this.props.events.since===e.events.since&&this.props.events.before===e.events.before||this.props.fetchItems()}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.events,n=e.progressBar;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:t.root},c.a.createElement(te.a,{className:t.root,elevation:1},c.a.createElement(Ge,{events:a,progressBar:n,changeParam:this.props.changeParam}))))}}]),t}(o.Component),Qe=Object(j.withStyles)(function(e){return{root:Object(Z.a)({flexGrow:1},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit})}},{withTheme:!0})(ze),qe=a(42);!function(e){e.EVENTS_FETCH_REQUEST="EVENTS_FETCH_REQUEST",e.EVENTS_FETCH_SUCCESS="EVENTS_FETCH_SUCCESS",e.EVENTS_FETCH_FALIURE="EVENTS_FETCH_FALIURE",e.EVENTS_FETCH_PARAMS_CHANGE="EVENTS_FETCH_PARAMS_CHANGE"}(ke||(ke={}));var Je=Object(qe.createAsyncAction)(ke.EVENTS_FETCH_REQUEST,ke.EVENTS_FETCH_SUCCESS,ke.EVENTS_FETCH_FALIURE)(),Ye=function(e){return function(t,a){t(Je.request());var o=a().events;return function(e){var t=e.since,a=e.before,o=e.page,c=e.rowsPerPage,i=e.format,s=e.overlaps;return Ce()({method:"get",url:"/calendar/",params:{since:t?t.toISOString():void 0,before:a?a.toISOString():void 0,overlaps:s||r.Unknown,page:(o||Se)+1,paginate_by:c||10,format:i||n.json}})}({page:e&&void 0!==e.page?e.page:o.currentPage,rowsPerPage:e&&e.rowsPerPage?e.rowsPerPage:o.rowsPerPage,since:o.since,before:o.before}).then(function(e){return t(Je.success(e.data))}).catch(function(){return t(Je.failure())})}},Ke=Object(qe.createAction)(ke.EVENTS_FETCH_PARAMS_CHANGE,function(e){return function(t){return e(t)}}),Xe=Object(s.c)(function(e){return{events:e.events,progressBar:e.progressBar}},function(e){return{fetchItems:function(t){return e(Ye(t))},changeParam:function(t){return e(Ke(t))}}})(Qe),$e=function(e){function t(){return Object(d.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.classes;return c.a.createElement("div",{className:e.root},c.a.createElement(te.a,{className:e.root,elevation:1},"Events new page"))}}]),t}(o.Component),Ze=Object(j.withStyles)(function(e){return{root:Object(Z.a)({flexGrow:1},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit})}},{withTheme:!0})($e),et=Object(s.c)(function(e){return{}},function(e){return{}})(Ze),tt=function(e){function t(){return Object(d.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.classes;return c.a.createElement("div",{className:e.root},c.a.createElement(te.a,{className:e.root,elevation:1},"Events view page"))}}]),t}(o.Component),at=Object(j.withStyles)(function(e){return{root:Object(Z.a)({flexGrow:1},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit})}},{withTheme:!0})(tt),nt=Object(s.c)(function(e){return{}},function(e){return{}})(at),rt=function(e){function t(){return Object(d.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.classes;return c.a.createElement("div",{className:e.root},c.a.createElement(te.a,{className:e.root,elevation:1},"404 - Page Not Found"))}}]),t}(o.Component),ot=Object(j.withStyles)(function(e){return{root:Object(Z.a)({flexGrow:1},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit})}},{withTheme:!0})(rt),ct=Object(s.c)(function(e){return{}},function(e){return{}})(ot),it=function(e){var t=e.store,a=e.history;return c.a.createElement(s.a,{store:t.store},c.a.createElement(l.a,{loading:null,persistor:t.persistor},c.a.createElement(m.b,{utils:h.a},c.a.createElement(g.a,{history:a},c.a.createElement("div",null,c.a.createElement($,null),c.a.createElement(u.a,null,c.a.createElement(p.a,{path:J.list,component:Xe}),c.a.createElement(p.a,{path:J.new,component:et}),c.a.createElement(p.a,{path:J.view,component:nt}),c.a.createElement(p.a,{path:Y,component:Xe,exact:!0}),c.a.createElement(p.a,{component:ct})))))))},st=a(198),lt=a.n(st),ut=a(37),pt=a(199),gt=a(200),ht=a(187),mt=a(78),dt=a(201),bt=a.n(dt),Et=new Date,ft={progressBar:{loading:!1,loaded:!1,date:new Date},events:{items:{},pages:[],currentPage:Se,rowsPerPage:10,since:Object(De.a)(Et),before:Object(Be.a)(Et),totalCount:0,loading:!1,loaded:!1}},vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft.progressBar;switch((arguments.length>1?arguments[1]:void 0).type){case Object(qe.getType)(Je.request):return Object(Z.a)({},e,{loading:!0,loaded:!1});case Object(qe.getType)(Je.success):return Object(Z.a)({},e,{loading:!1,loaded:!0});case Object(qe.getType)(Je.failure):return Object(Z.a)({},e,{loading:!1});default:return e}},Ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft.events,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(qe.getType)(Je.success):var a=t.payload.results.reduce(function(e,t){return t.id?Object(Z.a)({},e,Object(xe.a)({},t.id,t)):e},{}),n=e.pages;return n[e.currentPage]=Object.keys(a).filter(function(e){return a[e]}),Object(Z.a)({},e,{items:Object(Z.a)({},e.items,a),pages:n,totalCount:t.payload.count});case Object(qe.getType)(Ke):var r={currentPage:void 0!==t.payload.page?t.payload.page:e.currentPage,rowsPerPage:t.payload.rowsPerPage?t.payload.rowsPerPage:e.rowsPerPage,since:t.payload.since?t.payload.since:e.since,before:t.payload.before?t.payload.before:e.before};return Object(Z.a)({},e,r);case mt.a:var o=new Date;return Object(Z.a)({},e,{since:e.since?new Date(e.since):Object(De.a)(o),before:e.before?new Date(e.before):Object(Be.a)(o)});default:return e}},jt=lt()({basename:"/events-app"}),wt=function(e){var t=e.preloadedState,a=e.history,n={key:"root",storage:bt.a,blacklist:["auth","authClientLoad","authClientInit"]},r=Object(mt.b)(n,function(e){return Object(ut.combineReducers)({progressBar:vt,events:Ot,router:Object(g.b)(e)})}(a)),o=[Object(ht.a)(a),pt.a],c=[ut.applyMiddleware.apply(void 0,o)],i=gt.composeWithDevTools.apply(void 0,c),s=Object(ut.createStore)(r,t,i);return{store:s,persistor:Object(mt.c)(s)}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(i.render)(c.a.createElement(it,{store:wt({preloadedState:{},history:jt}),history:jt}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[265,1,2]]]);
//# sourceMappingURL=main.0e2618e4.chunk.js.map