!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,(function(e){return t[e]}).bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}({0:function(t,e,n){t.exports=n("zUnb")},"0S4P":function(t,e){t.exports=ng.common},"g/Wr":function(t,e){t.exports=ng.elements},jyyq:function(t,e){t.exports=ng.common.http},"vG+p":function(t,e){t.exports=ng.platformBrowser},vOrQ:function(t,e){t.exports=ng.core},zUnb:function(t,e,n){"use strict";n.r(e);var o=n("vOrQ"),r=n("vG+p"),a=n("g/Wr"),l=n("jyyq");const i={headers:new l.HttpHeaders({"Content-Type":"application/json"})};let d=(()=>{class t{constructor(t){this.http=t,this.mockUrl="http://localhost:3000/studentData",this.currentEmployee={firstName:"",lastName:"",address:"",id:null,dob:"",gender:""}}getAllEmployee(){return this.http.get(this.mockUrl,i).subscribe(t=>{this.allEmployee=t,console.table(this.allEmployee)})}deleteEmployee(t){return this.http.delete(this.mockUrl+"/"+t,i)}createEmployee(t){return this.http.post(this.mockUrl,t,i)}updateEmployee(t){return this.http.put(this.mockUrl+"/"+t.id,t,i)}}return t.\u0275fac=function(e){return new(e||t)(o["\u0275\u0275inject"](l.HttpClient))},t.\u0275prov=o["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var s=n("0S4P");function c(t,e){if(1&t){const t=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"tr"),o["\u0275\u0275elementStart"](1,"td"),o["\u0275\u0275text"](2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"td"),o["\u0275\u0275text"](4),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"td"),o["\u0275\u0275text"](6),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"td"),o["\u0275\u0275text"](8),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](9,"td"),o["\u0275\u0275text"](10),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](11,"td"),o["\u0275\u0275text"](12),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](13,"td",5),o["\u0275\u0275elementStart"](14,"button",6),o["\u0275\u0275listener"]("click",(function(n){o["\u0275\u0275restoreView"](t);const r=e.index;return o["\u0275\u0275nextContext"]().editRecord(n,r)})),o["\u0275\u0275text"](15,"EDIT"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](16,"td",5),o["\u0275\u0275elementStart"](17,"button",6),o["\u0275\u0275listener"]("click",(function(n){o["\u0275\u0275restoreView"](t);const r=e.index;return o["\u0275\u0275nextContext"]().viewRecord(n,r)})),o["\u0275\u0275text"](18,"View"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&t){const t=e.$implicit;o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](t.id),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](t.firstname),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](t.lastname),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](t.dob),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](t.gender),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](t.address),o["\u0275\u0275advance"](1),o["\u0275\u0275propertyInterpolate"]("id",t.id),o["\u0275\u0275advance"](3),o["\u0275\u0275propertyInterpolate"]("id",t.id)}}function m(t,e){1&t&&(o["\u0275\u0275elementStart"](0,"div",7),o["\u0275\u0275text"](1," No record found. "),o["\u0275\u0275elementEnd"]())}let p=(()=>{class t{constructor(t,e){this.location=t,this.empService=e,this.title="Angular App",this.studentData=[{id:1,firstname:"Amol",lastname:"Shinde",dob:"27-09-1991",gender:"Male",address:"Pune"},{id:2,firstname:"Majahar",lastname:"Shaikh",dob:"03-02-1990",gender:"Male",address:"Satara"},{id:3,firstname:"Ankush",lastname:"Changole",dob:"25-05-1992",gender:"Male",address:"Amaravati"}],this.selectedStudent=new o.EventEmitter,this.editStudentRecord=new o.EventEmitter,console.log("Inside constructor")}ngOnInit(){console.log("Inside onInit")}ngAfterViewInit(){console.log("After View Init "+this.studentData)}getEmp(){fetch("http://localhost:3000/studentData/").then(t=>t.json()).then(t=>{console.log("result"+t),this.studentData=t},t=>{console.log(t)})}getEmployee(){return this._empService.getAllEmployee()}editRecord(t,e){if(this.studentData.length>0){let t=this.studentData[e];this.editStudentRecord.emit(!0),window.localStorage.setItem("editRecord",JSON.stringify(t))}}viewRecord(t,e){if(this.studentData.length>0){let t=this.studentData[e];this.selectedStudent.emit(JSON.stringify(t)),window.localStorage.setItem("viewRecord",JSON.stringify(t))}}deleteRecord(t,e){if(this.studentData.length>0){let t=this.studentData;t.splice(e,1),this.studentData=t,window.localStorage.setItem("studentData",JSON.stringify(this.studentData))}}}return t.\u0275fac=function(e){return new(e||t)(o["\u0275\u0275directiveInject"](s.Location),o["\u0275\u0275directiveInject"](d))},t.\u0275cmp=o["\u0275\u0275defineComponent"]({type:t,selectors:[["a-card"]],outputs:{selectedStudent:"selectedStudent",editStudentRecord:"editStudentRecord"},features:[o["\u0275\u0275ProvidersFeature"]([d])],decls:28,vars:2,consts:[[1,"tbl-header"],["cellpadding","0","cellspacing","0","border","0"],[1,"tbl-content"],[4,"ngFor","ngForOf"],["style","margin-top: 50px;",4,"ngIf"],[3,"id"],["type","button",1,"button2",2,"margin-right","20px",3,"click"],[2,"margin-top","50px"]],template:function(t,e){1&t&&(o["\u0275\u0275elementStart"](0,"section"),o["\u0275\u0275elementStart"](1,"h1"),o["\u0275\u0275text"](2,"Student Details"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"div",0),o["\u0275\u0275elementStart"](4,"table",1),o["\u0275\u0275elementStart"](5,"thead"),o["\u0275\u0275elementStart"](6,"tr"),o["\u0275\u0275elementStart"](7,"th"),o["\u0275\u0275text"](8,"Id"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](9,"th"),o["\u0275\u0275text"](10,"First Name"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](11,"th"),o["\u0275\u0275text"](12,"Last Name"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](13,"th"),o["\u0275\u0275text"](14,"DOB"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](15,"th"),o["\u0275\u0275text"](16,"Gender"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](17,"th"),o["\u0275\u0275text"](18,"Address"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](19,"th"),o["\u0275\u0275text"](20,"Edit"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](21,"th"),o["\u0275\u0275text"](22,"View"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](23,"div",2),o["\u0275\u0275elementStart"](24,"table",1),o["\u0275\u0275elementStart"](25,"tbody"),o["\u0275\u0275template"](26,c,19,8,"tr",3),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](27,m,2,0,"div",4),o["\u0275\u0275elementEnd"]()),2&t&&(o["\u0275\u0275advance"](26),o["\u0275\u0275property"]("ngForOf",e.studentData),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",e.studentData&&0===e.studentData.length))},directives:[s.NgForOf,s.NgIf],styles:["@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);h1{font-size:30px;color:#fff;text-transform:uppercase;font-weight:300;text-align:center;margin-bottom:15px}table{width:100%;table-layout:fixed}.tbl-header{background-color:hsla(0,0%,100%,.3)}.tbl-content{height:300px;overflow-x:auto;margin-top:0;border:1px solid hsla(0,0%,100%,.3)}th{padding:20px 15px;font-weight:500;font-size:12px;text-transform:uppercase}td,th{text-align:left;color:#fff}td{padding:15px;vertical-align:middle;font-weight:300;font-size:15px;border-bottom:1px solid hsla(0,0%,100%,.1)}body{background:linear-gradient(90deg,#25c481,#25b7c4);font-family:Roboto,sans-serif}section{margin:50px}.made-with-love{margin-top:40px;padding:10px;clear:left;text-align:center;font-size:10px;font-family:arial;color:#fff}.made-with-love i{font-style:normal;color:#f50057;font-size:14px;position:relative;top:2px}.made-with-love a{color:#fff;text-decoration:none}.made-with-love a:hover{text-decoration:underline}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-thumb,::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)}.button{background-color:#4caf50;border:none;color:#fff;padding:15px 32px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px;cursor:pointer}.button2{background-color:#fff}.button3{background-color:#f44336}.button4{background-color:#e7e7e7;color:#000}.button5{background-color:#555}"],encapsulation:3}),t})(),u=(()=>{class t{constructor(t){this.injector=t}ngDoBootstrap(){const t=Object(a.createCustomElement)(p,{injector:this.injector});customElements.define("header-app",t)}}return t.\u0275mod=o["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)(o["\u0275\u0275inject"](o.Injector))},imports:[[r.BrowserModule,l.HttpClientModule]]}),t})();Object(o.enableProdMode)(),r.platformBrowser().bootstrapModule(u,{ngZone:"noop"}).catch(t=>console.error(t))}});