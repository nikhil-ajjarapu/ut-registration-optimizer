(this["webpackJsonput-registration-optimizer"]=this["webpackJsonput-registration-optimizer"]||[]).push([[0],{190:function(e,t,a){},191:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);a(185);var s=a(0),r=a.n(s),n=a(24),i=a.n(n),o=(a(190),a(191),a(65)),c=a(66),l=a(39),u=a(67),h=a(71),d=a(27),g=a(43),b=a(63),p=a(79),j=a(11),C=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={classnames:""},s.handleChange=s.handleChange.bind(Object(l.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(l.a)(s)),s}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState({classnames:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.state.classnames.includes("\n")||this.setState({classnames:[this.state.classnames]});var t=function(e){for(var t=[],a=0;a<e.length;a++){var s=e[a].split(" "),r=Object(p.a)(s,2),n=r[0],i=r[1];"CS"===n&&(n="C+S"),t.push("https://utdirect.utexas.edu/apps/registrar/course_schedule/20219/results/?ccyys=20219&search_type_main=COURSE&fos_cn="+n+"&course_number="+i+"&x=58&y=26")}return t}(this.state.classnames.split("\n"));this.props.history.push({pathname:"/ut-registration-optimizer/uploadHTML/",state:{urls:t,classnames:this.state.classnames.split("\n")}})}},{key:"render",value:function(){return Object(j.jsx)("div",{class:"m-3",children:Object(j.jsxs)(g.a,{onSubmit:this.handleSubmit,children:[Object(j.jsxs)(g.a.Group,{controlId:"schoolSchedule.classNames",children:[Object(j.jsx)(g.a.Label,{class:"font-weight-bold",children:"Enter all your classes below on separate lines (e.g CS 314, CH 320M, etc.). Invalid classes will be ignored when generating schedule. "}),Object(j.jsx)(g.a.Control,{as:"textarea",rows:5,onChange:this.handleChange.bind(this)})]}),Object(j.jsx)(b.a,{variant:"primary",type:"Submit",value:"Submit",children:"Submit"})]})})}}]),a}(r.a.Component),m=Object(d.f)(C),f=a(42),O=a.n(f),v=a(77),A=function(){var e=Object(v.a)(O.a.mark((function e(t){var a,s,r,n,i,o,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for((a=document.createElement("html")).innerHTML=t,s=a.getElementsByTagName("tr"),r=[],n=0;n<s.length;n++)if(null!=(i=s[n].getElementsByTagName("td"))[0]&&"Unique"===i[0].getAttribute("data-th")){for(o=new Map,c=0;c<i.length;c++)["Unique","Days","Hour","Instructor","Status"].includes(i[c].getAttribute("data-th"))&&o.set(i[c].getAttribute("data-th"),i[c].innerText);o.get("Status").includes("open")&&r.push(o)}return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e,t){for(var a=Array.from(e.keys()),s=[],r=function(){var r=a[n],c=e.get(r),l=[];for(i=0;i<c.length;i++)c[i].set("Course Name",r),c[i].set("instructorTrimmed",c[i].get("Instructor").split("  ").map((function(e){return e.trim()}))),Array.prototype.push.apply(l,c[i].get("instructorTrimmed"));var u=t.filter((function(e){return("C S"===e.dept?"CS":e.dept)+" "+e.course_nbr===r&&l.includes(e.prof)})),h=new Map;for(o=0;o<u.length;o++){var d=u[o],g=parseInt(d.a2)+parseInt(d.a3)+parseInt(d.b1)+parseInt(d.b2),b=g+parseInt(d.b3)+parseInt(d.c1)+parseInt(d.c2)+parseInt(d.c3)+parseInt(d.d1)+parseInt(d.d2)+parseInt(d.d3)+parseInt(d.f);d.gradeRatio=(parseFloat(g)/parseFloat(b)).toFixed(3).toString(),h.set(d.prof,d.gradeRatio)}for(i=0;i<c.length;i++){var p=c[i].get("instructorTrimmed")[0];h.has(p)&&c[i].set("gradeRatio",parseFloat(h.get(p)).toFixed(3).toString())}if(console.log(c),0===(u=u.sort((function(e,t){return e.gradeRatio<t.gradeRatio?-1:e.gradeRatio>t.gradeRatio?1:0})).reverse()).length)window.alert("Grades not available for "+r+"! Using all class listings..."),Array.prototype.push.apply(s,c);else{var j=c.filter((function(e){return e.get("instructorTrimmed")[0]===u[0].prof}));Array.prototype.push.apply(s,j);var C=c.filter((function(e){return!j.includes(e)}));Array.prototype.push.apply(s,C)}},n=0;n<a.length;n++){var i,o;r()}return s},F=a(151),D=a.p+"static/media/agg.0fa9fb9c.csv",y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var s;Object(o.a)(this,a),(s=t.call(this,e)).handleChange=s.handleChange.bind(Object(l.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(l.a)(s));for(var n=[],i=[],c=0;c<s.props.location.state.urls.length;c++)n.push(r.a.createRef()),i.push("Select file: ");return s.state={urls:s.props.location.state.urls,fileRefs:n,fileLabels:i},s}return Object(c.a)(a,[{key:"handleChange",value:function(e,t){var a=this.state.fileLabels;a[e]=this.state.fileRefs[e].current.files[0].name,this.setState({fileLabels:a})}},{key:"handleSubmit",value:function(){var e=Object(v.a)(O.a.mark((function e(t){var a,s,r,n=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t.preventDefault(),a=[],s=function(){var e=n.props.location.state.classnames[r],t=n.state.fileRefs[r],s=new Promise((function(a){var s=new FileReader;s.onload=function(){var t=Object(v.a)(O.a.mark((function t(s){var r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(s.target.result);case 2:r=t.sent,a([e,r]);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s.readAsText(t.current.files[0])}));a.push(s)},r=0;r<this.state.fileRefs.length;r++)s();Promise.all(a).then((function(e){for(var t=new Map,a=0;a<e.length;a++)t.set(e[a][0],e[a][1]);n.setState({finalCourseMap:t});var s=n.props.history;F.a(D).then((function(e){s.push({pathname:"/ut-registration-optimizer/generateSchedule/",state:{possibleClasses:x(t,e)}})}))}));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{class:"m-3",children:Object(j.jsxs)(g.a,{onSubmit:this.handleSubmit,children:[Object(j.jsxs)(g.a.Group,{controlId:"schoolSchedule.courseListings",children:[Object(j.jsx)(g.a.Label,{class:"font-weight-bold",children:"Please visit the following URLs, download the HTML (by pressing Command/Ctrl + S), and upload the primary HTML file (you can ignore the other files/folders) to the respective fields below. Incorrectly formatted files will be ignored:"}),this.state.urls.map((function(t,a){return Object(j.jsxs)("div",{class:"p-2",children:[Object(j.jsxs)(g.a.Label,{id:a,class:"font-weight",children:[Object(j.jsx)("strong",{children:"URL to download:"})," ",Object(j.jsx)("a",{href:t,children:t})]}),Object(j.jsx)(g.a.File,{id:a,label:e.state.fileLabels[a],onChange:e.handleChange.bind(e,a),ref:e.state.fileRefs[a],custom:!0}),Object(j.jsx)("br",{})]})}))]}),Object(j.jsx)(b.a,{variant:"primary",type:"Submit",value:"Submit",children:"Submit"})]})})}}]),a}(r.a.Component),B=a(122),E=a(57),w=a(247),S=a(80),N=a(28),T=a(248),U=a(261),I=a(260),k=a(150),q=a(149),M=a(72),R=a(257),L=a(142),H=a(259),_=a(249),z=a(250),P=a(251),G=a(252),J=a(253),W=a(254),K=a(255),Q=a(256),V=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var s;Object(o.a)(this,a),(s=t.call(this,e)).handleUpdate=s.handleUpdate.bind(Object(l.a)(s)),s.generateCalendarEvents=s.generateCalendarEvents.bind(Object(l.a)(s)),s.getActiveUnique=s.getActiveUnique.bind(Object(l.a)(s));for(var r=new Map,n=new Map,i=[{fieldName:"color",title:"Color",instances:[]}],c=new Map,u=[["#C99C9C","#D19494","#D98C8C","#E08585","#E87D7D","#F07575","#F76E6E","#FF6666","#A38F8F","#AD8585","#B87A7A","#C27070","#CC6666","#D65C5C","#E05252","#EB4747","#F53D3D","#FF3333","#8C7373","#996666","#A65959","#B24D4D","#BF4040","#CC3333","#D92626","#E61919","#F20D0D","#FF0000","#705C5C","#7A5252","#854747","#8F3D3D","#993333","#A32929","#AD1F1F","#B81414","#C20A0A","#CC0000","#544545","#5C3D3D","#633636","#6B2E2E","#732626","#7A1F1F","#821717","#8A0F0F","#910808","#990000","#382E2E","#3D2929","#422424","#471F1F","#4D1919","#521414","#570F0F","#5C0A0A","#610505","#660000"],["#9CABC9","#94A8D1","#8CA6D9","#85A3E0","#7DA1E8","#759EF0","#6E9CF7","#6699FF","#8F96A3","#8592AD","#7A8FB8","#708BC2","#6688CC","#5C85D6","#5281E0","#477EEB","#3D7AF5","#3377FF","#737B8C","#667799","#5973A6","#4D6EB2","#406ABF","#3366CC","#2662D9","#195DE6","#0D59F2","#0055FF","#5C6370","#525F7A","#475C85","#3D588F","#335599","#2952A3","#1F4EAD","#144BB8","#0A47C2","#0044CC","#454A54","#3D475C","#364563","#2E426B","#264073","#1F3D7A","#173B82","#0F388A","#083691","#003399","#2E3138","#29303D","#242E42","#1F2C47","#192A4D","#142952","#0F2757","#0A255C","#052461","#002266"],["#BA9CC9","#BD94D1","#BF8CD9","#C285E0","#C47DE8","#C775F0","#C96EF7","#CC66FF","#9C8FA3","#A085AD","#A37AB8","#A770C2","#AA66CC","#AD5CD6","#B152E0","#B447EB","#B83DF5","#BB33FF","#84738C","#886699","#8C59A6","#914DB2","#9540BF","#9933CC","#9D26D9","#A219E6","#A60DF2","#AA00FF","#695C70","#6D527A","#704785","#743D8F","#773399","#7A29A3","#7E1FAD","#8114B8","#850AC2","#8800CC","#4F4554","#523D5C","#543663","#572E6B","#592673","#5C1F7A","#5E1782","#610F8A","#630891","#660099","#352E38","#36293D","#382442","#3A1F47","#3C194D","#3D1452","#3F0F57","#410A5C","#420561","#440066"],["#C9B29C","#D1B294","#D9B28C","#E0B285","#E8B27D","#F0B275","#F7B26E","#FFB266","#A3998F","#AD9985","#B8997A","#C29970","#CC9966","#D6995C","#E09952","#EB9947","#F5993D","#FF9933","#8C8073","#998066","#A68059","#B2804D","#BF8040","#CC8033","#D98026","#E68019","#F2800D","#FF8000","#70665C","#7A6652","#856647","#8F663D","#996633","#A36629","#AD661F","#B86614","#C2660A","#CC6600","#544C45","#5C4C3D","#634C36","#6B4C2E","#734C26","#7A4C1F","#824C17","#8A4C0F","#914C08","#994C00","#38332E","#3D3329","#423324","#47331F","#4D3319","#523314","#57330F","#5C330A","#613305","#663300"]],h=0;h<s.props.location.state.possibleClasses.length;h++){var d=s.props.location.state.possibleClasses[h];if(""!==d.get("Hour")){var g=d.get("gradeRatio");void 0===g||isNaN(g)?(d.set("gradeRatioDescription","<strong> Snap! </strong> No grades available. "),d.set("gradeColor","#000000"),d.set("shadowColor","10px 10px 50px 50px rgba(168,168,168,1)")):g>.7?(d.set("gradeRatioDescription","<strong>Great! "+100*g+"% </strong> of people got a <strong> B, B+, A-, or A </strong> in this class."),d.set("gradeColor","#90ee90"),d.set("shadowColor","10px 10px 64px 39px rgba(144,238,144,1)")):g>.4?(d.set("gradeRatioDescription","Not bad! <strong>"+100*g+"% </strong> of people got a <strong> B, B+, A-, or A </strong> in this class."),d.set("gradeColor","#fde52f"),d.set("shadowColor","10px 10px 64px 39px rgba(255,234,71,1)")):(d.set("gradeRatioDescription","Uh oh! Only <strong>"+100*g+"% </strong> of people got a <strong> B, B+, A-, or A </strong> in this class."),d.set("gradeColor","#FF5454"),d.set("shadowColor","10px 10px 64px 39px rgba(255,84,84,1)")),c.has(d.get("Course Name"))||c.set(d.get("Course Name"),[c.size,0]);var b=c.get(d.get("Course Name")),j=u[b[0]][b[1]%u[b[0]].length];d.set("bgColor",j),c.set(d.get("Course Name"),[b[0],b[1]+1]),i[0].instances.push({text:d.get("Unique"),id:d.get("Unique"),color:d.get("bgColor")});var C=d.get("Hour"),m=Object(T.a)(Object(U.a)(),{weekStartsOn:0}),f=C.split("-"),O=f[0].replace(/[.]+/g,"").trim(),v=f[1].replace(/[.]+/g,"").trim(),A=Object(H.a)(O,"h:mm aa",new Date(0,0,0)),x=Object(H.a)(v,"h:mm aa",new Date(0,0,0)),F=new Date(Object(_.a)(m),Object(z.a)(m)+1,Object(P.a)(m)-1,Object(G.a)(A),Object(J.a)(A),Object(W.a)(A)),D=new Date(Object(_.a)(m),Object(z.a)(m)+1,Object(P.a)(m)-1,Object(G.a)(x),Object(J.a)(x),Object(W.a)(x));d.set("startTime",F),d.set("endTime",D),r.has(d.get("Course Name"))?r.get(d.get("Course Name")).push(d):r.set(d.get("Course Name"),[d])}else s.props.location.state.possibleClasses.splice(h,1)}var y,w=Object(E.a)(r);try{for(w.s();!(y=w.n()).done;){var S=Object(p.a)(y.value,2),N=S[0],I=S[1];I.sort((function(e,t){return Object(K.a)(e.get("startTime"))-Object(K.a)(t.get("startTime"))})),n.set(N,I.length/2>>0)}}catch(k){w.e(k)}finally{w.f()}return s.state={courseToUniques:r,courseNametoActiveInd:n,colorMap:i,currentDate:Object(U.a)(),getActiveUnique:s.getActiveUnique},s.state=Object(B.a)(Object(B.a)({},s.state),{},{schedulerData:s.generateCalendarEvents()}),s}return Object(c.a)(a,[{key:"generateCalendarEvents",value:function(){var e,t=[],a=Object(E.a)(this.state.courseNametoActiveInd);try{for(a.s();!(e=a.n()).done;)for(var s=Object(p.a)(e.value,2),r=s[0],n=s[1],i=this.state.courseToUniques.get(r)[n],o=i.get("Days"),c=["M","T","W","TH","F"],l=0;l<c.length;l++)if(o.includes(c[l])&&(1===l&&"H"!==o[o.indexOf("T")+1]||1!==l)){var u={startDate:Object(Q.a)(i.get("startTime"),l+1),endDate:Object(Q.a)(i.get("endTime"),l+1),title:i.get("Course Name"),color:i.get("Unique")};t.push(u)}}catch(h){a.e(h)}finally{a.f()}return t}},{key:"handleUpdate",value:function(e){var t=e.target.id.split("_")[0],a=this.state.courseNametoActiveInd;e.target.id.includes("later")?a.set(t,Math.min(this.state.courseNametoActiveInd.get(t)+1,this.state.courseToUniques.get(t).length-1)):a.set(t,Math.max(this.state.courseNametoActiveInd.get(t)-1,0)),this.setState({courseNametoActiveInd:a,schedulerData:this.generateCalendarEvents()})}},{key:"getActiveUnique",value:function(e){return this.state.courseToUniques.get(e)[this.state.courseNametoActiveInd.get(e)]}},{key:"render",value:function(){var e=this;return Object(j.jsxs)(q.a,{className:"px-xl-5",style:{backgroundColor:"#F9F6F2"},fluid:!0,children:[Object(j.jsx)(R.a,{children:Object(j.jsx)(L.a,{children:Object(j.jsx)("p",{})})}),Object(j.jsx)(R.a,{children:Object(j.jsxs)(L.a,{children:[Object(j.jsx)("h1",{className:"text-center font-weight-bold",children:"Course Schedule Builder"}),Object(j.jsx)("br",{})]})}),Object(j.jsx)(R.a,{children:Object(j.jsxs)(L.a,{children:[Object(j.jsx)("h3",{className:"text-center font-weight-light",children:"Not seeing a class here? It might not have hours assigned yet in the course schedule - check back when it does!"}),Object(j.jsx)("br",{})]})}),Object(j.jsx)(R.a,{children:Array.from(this.state.courseToUniques.keys()).map((function(t,a){return Object(j.jsx)(L.a,{xl:"4",children:Object(j.jsx)(S.a,{className:"text-center my-xl-5 mx-auto rounded",style:{width:"23rem",height:"22rem",boxShadow:e.state.getActiveUnique(t).get("shadowColor"),backgroundColor:e.state.getActiveUnique(t).get("bgColor"),color:"white"},children:Object(j.jsxs)(S.a.Body,{className:"position-relative",children:[Object(j.jsx)(S.a.Title,{className:"mt-lg-3 font-weight-bold",children:t}),Object(j.jsxs)(S.a.Text,{className:"",children:[Object(j.jsx)("strong",{children:"Instructor(s): "}),e.state.getActiveUnique(t).get("instructorTrimmed").join("; "),Object(j.jsx)("br",{}),Object(j.jsx)("strong",{children:"Unique Number: "})," ",e.state.getActiveUnique(t).get("Unique"),Object(j.jsx)("br",{}),Object(j.jsx)("div",{style:{color:e.state.getActiveUnique(t).get("gradeColor")},dangerouslySetInnerHTML:{__html:e.state.getActiveUnique(t).get("gradeRatioDescription")}})]}),Object(j.jsx)(b.a,{variant:"outline-light",id:t+"_earlier",className:"my-2 position-relative",onClick:e.handleUpdate,children:" Move Course Earlier "}),Object(j.jsx)(b.a,{variant:"outline-light",id:t+"_later",className:"my-2 position-relative",onClick:e.handleUpdate,children:" Move Course Later "})]})})})}))}),Object(j.jsx)(R.a,{children:Object(j.jsx)(k.a,{children:Object(j.jsx)(w.a,{children:Object(j.jsxs)(M.d,{height:"auto",data:this.state.schedulerData,children:[Object(j.jsx)(N.q,{currentDate:Object(I.a)(this.state.currentDate,"yyyy-MM-dd")}),Object(j.jsx)(M.e,{startDayHour:7.5,endDayHour:22,excludedDays:[0,6]}),Object(j.jsx)(M.b,{readOnly:!0}),Object(j.jsx)(M.a,{readOnly:!0}),Object(j.jsx)(M.c,{data:this.state.colorMap,mainResourceName:"color"})]})})})})]})}}]),a}(r.a.Component),X=a(117);var Y=function(){return Object(j.jsx)(X.a,{children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{exact:!0,path:"/ut-registration-optimizer/",component:m}),Object(j.jsx)(d.a,{path:"/ut-registration-optimizer/uploadHTML/",component:y}),Object(j.jsx)(d.a,{path:"/ut-registration-optimizer/generateSchedule/",component:V})]})})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,263)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),r(e),n(e),i(e)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[201,1,2]]]);
//# sourceMappingURL=main.7ae2170d.chunk.js.map