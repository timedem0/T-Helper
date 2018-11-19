(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{255:function(e,t,a){e.exports=a(525)},260:function(e,t,a){},522:function(e,t,a){},525:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),s=a.n(o),i=(a(260),a(22)),l=a(23),c=a(25),m=a(24),u=a(26),d=a(539),h=a(544),p=a(543),g=a(537),f=a(526),E=a(527),b=a(541),v=a(531),y=a(175),C=a(528),w=a(16),T=a(243),k=a(533),j=(a(47),a(263)),O=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).loadCustomers=function(){fetch("https://customerrest.herokuapp.com/api/customers").then(function(e){return e.json()}).then(function(e){var t=Math.round(100*e.content.length/a.state.target*100)/100;a.setState({fetchInProgress:!1,customersNo:e.content.length,percent:t})})},a.handleTargetChange=function(e){var t=Math.round(100*a.state.customersNo/e*100)/100;a.setState({target:e,percent:t})},a.addCustomer=function(){function e(e){return e.charAt(0).toUpperCase()+e.slice(1)}var t={firstname:e(j()),lastname:e(j()),streetaddress:e(j())+" "+Math.floor(99*Math.random()+10),postcode:Math.floor(99999*Math.random()+1e4),city:e(j()),email:j()+"@"+j()+".com",phone:Math.floor(9999999999*Math.random()+1e9)};fetch("https://customerrest.herokuapp.com/api/customers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){a.loadCustomers(),g.a.success({message:"Task Complete!",description:"A new customer was added to our database."})})},a.getRandomCustomer=function(){fetch("https://customerrest.herokuapp.com/api/customers").then(function(e){return e.json()}).then(function(e){for(var t=[e.content],n=[],r=0;r<t[0].length;r++){var o=t[0][r].links[0].href,s=o.substr(o.lastIndexOf("/")+1);n[r]=s}var i=n[Math.floor(Math.random()*n.length)];a.deleteCustomer(i)})},a.deleteCustomer=function(e){fetch("https://customerrest.herokuapp.com/api/customers/".concat(e),{method:"DELETE"}).then(function(e){a.loadCustomers(),g.a.success({message:"Task Complete!",description:"A random customer was kicked out."})})};return a.state={fetchInProgress:!0,customersNo:"",target:30,percent:0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadCustomers()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{marginTop:40,marginLeft:"auto",marginRight:"auto",height:"80vh",maxWidth:"80vw"}},r.a.createElement("h1",null,"Hello! I am T-Helper."),r.a.createElement("br",null),r.a.createElement("h3",null,"Because even the best personal trainers (such as yourself) need someone to rely on, I shall be your own personal little assistant."),r.a.createElement("h3",null,"If you need more features or if I am not working properly, please contact my Creator and he will make me better in no time!"),r.a.createElement("br",null),r.a.createElement("br",null),this.state.fetchInProgress?r.a.createElement("div",null,r.a.createElement(f.a,{size:"large"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.a,{message:"Loading... please wait.",description:"Please allow up to 30 seconds for the Heroku dyno to wake up. The Customer-O-Meter\u2122 will appear here shortly.",type:"info"})):r.a.createElement("div",{style:{marginBottom:40}},r.a.createElement("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.6)",padding:10,marginLeft:"auto",marginRight:"auto",maxWidth:500}},r.a.createElement("div",null,r.a.createElement("b",null,"Current")," number of customers in the database = ",r.a.createElement(b.a,{count:this.state.customersNo,style:{backgroundColor:"#1890ff",boxShadow:"0 0 0 0"}})),r.a.createElement("div",null,r.a.createElement("b",null,"Target")," number of customers (adjust the slider below) = ",r.a.createElement(b.a,{count:this.state.target,style:{backgroundColor:"#52c41a",boxShadow:"0 0 0 0"}}))),r.a.createElement("br",null),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:400}},r.a.createElement(v.a,{min:1,max:50,defaultValue:30,onChange:this.handleTargetChange})),r.a.createElement("br",null),r.a.createElement(y.a,{title:"Instantly add a random customer",placement:"left"},r.a.createElement(C.a,{title:"Are you sure you want to create a new customer?",placement:"bottomRight",okText:"Yes - Insert random customer!",onConfirm:function(){return e.addCustomer()},icon:r.a.createElement(w.a,{type:"question-circle-o",style:{color:"green"}})},r.a.createElement(T.a,{type:"primary",shape:"circle",size:"large",icon:"plus",style:{marginRight:20}}))),r.a.createElement(k.a,{type:"circle",strokeWidth:9,percent:this.state.percent}),r.a.createElement(y.a,{title:"Instantly delete a random customer",placement:"right"},r.a.createElement(C.a,{title:"Are you sure you want to remove a customer?",placement:"bottomLeft",okText:"Yes - Delete random customer!",okType:"danger",onConfirm:function(){return e.getRandomCustomer()},icon:r.a.createElement(w.a,{type:"question-circle-o",style:{color:"red"}})},r.a.createElement(T.a,{type:"danger",shape:"circle",size:"large",icon:"minus",style:{marginLeft:20}}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,"Customer-O-Meter\u2122")))}}]),t}(n.Component),S=a(127),D=a(89),x=a(12),H=a.n(x),L=a(536),M=(a(195),a(118)),I=a(542),R=a(534),A=a(540),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(M.a)({},e.target.name,e.target.value))},a.saveCustomer=function(){var e={firstname:a.state.firstname,lastname:a.state.lastname,streetaddress:a.state.streetaddress,postcode:a.state.postcode,city:a.state.city,email:a.state.email,phone:a.state.phone};a.props.saveCustomer(e),a.setState({visible:!1,firstname:"",lastname:"",streetaddress:"",postcode:"",city:"",email:"",phone:""})},a.showDrawer=function(){a.setState({visible:!0})},a.closeDrawer=function(){a.setState({visible:!1})},a.state={visible:!1,firstname:"",lastname:"",streetaddress:"",postcode:"",city:"",email:"",phone:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T.a,{size:"small",type:"primary",onClick:this.showDrawer},"Add New Customer"),r.a.createElement(L.a,{title:"New Customer",width:360,placement:"right",onClose:this.closeDrawer,maskClosable:!1,visible:this.state.visible,style:{height:"calc(100% - 55px)",overflow:"auto",paddingBottom:53}},r.a.createElement(I.a,null,r.a.createElement(R.a.Group,null,r.a.createElement(A.a,{span:12},r.a.createElement(R.a,{placeholder:"First Name",name:"firstname",onChange:this.handleChange,value:this.state.firstname,prefix:r.a.createElement(w.a,{type:"user",style:{color:"rgba(0,0,0,.25)"},required:!0})})),r.a.createElement(A.a,{span:12},r.a.createElement(R.a,{placeholder:"Last Name",name:"lastname",onChange:this.handleChange,value:this.state.lastname,prefix:r.a.createElement(w.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}})})))),r.a.createElement("br",null),r.a.createElement(I.a,null,r.a.createElement(R.a.TextArea,{rows:4,placeholder:"Address",name:"streetaddress",onChange:this.handleChange,value:this.state.streetaddress})),r.a.createElement("br",null),r.a.createElement(I.a,null,r.a.createElement(R.a.Group,null,r.a.createElement(A.a,{span:12},r.a.createElement(R.a,{placeholder:"Postcode",name:"postcode",onChange:this.handleChange,value:this.state.postcode})),r.a.createElement(A.a,{span:12},r.a.createElement(R.a,{placeholder:"City",name:"city",onChange:this.handleChange,value:this.state.city})))),r.a.createElement("br",null),r.a.createElement(I.a,null,r.a.createElement(R.a,{placeholder:"Email",name:"email",onChange:this.handleChange,value:this.state.email})),r.a.createElement("br",null),r.a.createElement(I.a,null,r.a.createElement(R.a,{placeholder:"Phone",name:"phone",addonBefore:"+358",onChange:this.handleChange,value:this.state.phone})),r.a.createElement("br",null),r.a.createElement(I.a,{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},r.a.createElement(T.a,{style:{marginRight:8},onClick:this.closeDrawer},"Cancel"),r.a.createElement(T.a,{type:"primary",onClick:this.saveCustomer},"Save"))))}}]),t}(n.Component);g.a.config({placement:"bottomRight",bottom:50,duration:4});var N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).listCustomers=function(){fetch("https://customerrest.herokuapp.com/api/customers").then(function(e){return e.json()}).then(function(e){a.setState({customers:e.content})})},a.saveCustomer=function(e){fetch("https://customerrest.herokuapp.com/api/customers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){a.listCustomers(),g.a.success({message:"Task Complete!",description:"The customer was added to our database."})})},a.renderEditable=function(e){return r.a.createElement("div",{style:{backgroundColor:"#fafafa"},contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(t){var n=Object(S.a)(a.state.customers);n[e.index][e.column.id]=t.target.innerHTML,a.setState({customers:n})},dangerouslySetInnerHTML:{__html:a.state.customers[e.index][e.column.id]}})},a.updateCustomer=function(e,t){fetch(t,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){a.listCustomers(),g.a.success({message:"Task Complete!",description:"The customer was updated successfully."})})},a.deleteCustomer=function(e){fetch(e,{method:"DELETE"}).then(function(e){a.listCustomers(),g.a.success({message:"Task Complete!",description:"The customer was deleted successfully."})})},a.showTrainings=function(e){fetch(e+"/trainings",{method:"GET"}).then(function(e){return e.json()}).then(function(e){a.setState({visible:!0,trainings:e.content})})},a.showDrawer=function(){a.setState({visible:!0})},a.closeDrawer=function(){a.setState({visible:!1})},a.filterMethod=function(e,t){var a=e.id;return void 0===t[a]||String(t[a].toLowerCase()).startsWith(e.value.toLowerCase())},a.state={visible:!1,customers:[],trainings:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.listCustomers()}},{key:"render",value:function(){var e=this,t=[{columns:[{Header:"Activity",accessor:"activity"},{Header:"Duration",accessor:"duration"},{Header:"Date",accessor:"date",filterable:!1,Cell:function(e){return r.a.createElement("div",null,H()(e.original.date).format("D MMM, H:mm"))}}]}],a=[{Header:r.a.createElement(P,{saveCustomer:this.saveCustomer}),columns:[{Header:"First Name",accessor:"firstname",Cell:this.renderEditable},{Header:"Last Name",accessor:"lastname",Cell:this.renderEditable},{Header:"Trainings",accessor:"links.0.href",filterable:!1,sortable:!1,Cell:function(t){var a=t.value;return r.a.createElement("div",null,r.a.createElement(y.a,{title:"Customer Training Quick View"},r.a.createElement(T.a,{shape:"circle",icon:"user",size:"small",onClick:function(){return e.showTrainings(a)}})))}}]},{Header:"Location",columns:[{Header:"Street",accessor:"streetaddress",Cell:this.renderEditable},{Header:"Post Code",accessor:"postcode",Cell:this.renderEditable},{Header:"City",accessor:"city",Cell:this.renderEditable}]},{Header:"Contact",columns:[{Header:"Email",accessor:"email",Cell:this.renderEditable},{Header:"Phone",accessor:"phone",Cell:this.renderEditable}]},{Header:"Control",maxWidth:110,columns:[{Header:"Edit / Delete",accessor:"links.0.href",filterable:!1,sortable:!1,maxWidth:110,Cell:function(t){var a=t.row,n=t.value;return r.a.createElement("div",null,r.a.createElement(T.a.Group,null,r.a.createElement(C.a,{title:"Are you sure you want to Update this Customer?",placement:"left",okText:"Yes - Save changes",onConfirm:function(){return e.updateCustomer(a,n)}},r.a.createElement(T.a,{type:"primary",icon:"save",size:"small"})),r.a.createElement(C.a,{title:"Are you sure you want to Delete this Customer?",placement:"topRight",okText:"Yes - Delete customer",okType:"danger",onConfirm:function(){return e.deleteCustomer(n)},icon:r.a.createElement(w.a,{type:"question-circle-o",style:{color:"red"}})},r.a.createElement(T.a,{type:"primary",icon:"delete",size:"small"}))))}}]}];return r.a.createElement("div",{style:{marginTop:40,marginBottom:100,marginLeft:"auto",marginRight:"auto",height:"80vh",maxWidth:"90vw"}},r.a.createElement("h1",null,"Customer List"),r.a.createElement(L.a,{title:"Trainings",width:360,placement:"left",onClose:this.closeDrawer,maskClosable:!1,visible:this.state.visible,style:{height:"calc(100% - 55px)",overflow:"auto",textAlign:"center",paddingBottom:53}},r.a.createElement(D.a,{data:this.state.trainings,columns:t,sortable:!0,defaultPageSize:15,showPagination:!1,showPageJump:!1})),r.a.createElement(D.a,{data:this.state.customers,columns:a,sortable:!0,filterable:!0,defaultFilterMethod:this.filterMethod,defaultPageSize:10}))}}]),t}(n.Component),W=a(532),z=a(530),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(M.a)({},e.target.name,e.target.value))},a.handleSelectChange=function(e){a.setState({customer:e})},a.handleSliderChange=function(e){a.setState({duration:e})},a.handleDateChange=function(e){a.setState({date:e})},a.saveTraining=function(){var e={activity:a.state.activity,duration:a.state.duration,date:a.state.date,customer:a.state.customer};a.props.saveTraining(e),a.setState({visible:!1,activity:"",duration:"",date:"",customer:""})},a.importCustomers=function(){fetch("https://customerrest.herokuapp.com/api/customers").then(function(e){return e.json()}).then(function(e){for(var t=0;t<e.content.length;t++){var n={customer:"".concat(e.content[t].lastname," ").concat(e.content[t].firstname),link:e.content[t].links[0].href};a.setState({customers:Object(S.a)(a.state.customers).concat([n])})}a.setState({customer:a.state.customers[0].link,duration:30})})},a.showDrawer=function(){a.setState({visible:!0})},a.closeDrawer=function(){a.setState({visible:!1})},a.state={visible:!1,customers:[],activity:"",duration:"",date:"",customer:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.importCustomers()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T.a,{size:"small",type:"primary",onClick:this.showDrawer},"Add New Training"),r.a.createElement(L.a,{title:"New Training",width:360,placement:"right",onClose:this.closeDrawer,maskClosable:!1,visible:this.state.visible,style:{height:"calc(100% - 55px)",overflow:"auto",paddingBottom:53}},r.a.createElement(I.a,null,r.a.createElement("h3",null,"Customer:"),r.a.createElement(W.a,{onChange:this.handleSelectChange,style:{width:"100%"},defaultValue:this.state.customer},this.state.customers.map(function(e,t){return r.a.createElement(W.a.Option,{value:e.link,key:t},e.customer)}))),r.a.createElement("br",null),r.a.createElement(I.a,null,r.a.createElement("h4",null,"Activity Name"),r.a.createElement(R.a,{placeholder:"Activity",name:"activity",onChange:this.handleChange,value:this.state.activity})),r.a.createElement("br",null),r.a.createElement(I.a,null,r.a.createElement("h4",null,"Duration (minutes)"),r.a.createElement(v.a,{min:1,max:90,defaultValue:30,onChange:this.handleSliderChange})),r.a.createElement("br",null),r.a.createElement(I.a,null,r.a.createElement("h4",null,"Select Date and Time"),r.a.createElement(z.a,{showTime:!0,placeholder:"",onChange:this.handleDateChange,onOk:this.handleDateChange,style:{width:"100%"}})),r.a.createElement("br",null),r.a.createElement(I.a,{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},r.a.createElement(T.a,{style:{marginRight:8},onClick:this.closeDrawer},"Cancel"),r.a.createElement(T.a,{type:"primary",onClick:this.saveTraining},"Save"))))}}]),t}(n.Component);g.a.config({placement:"bottomRight",bottom:50,duration:4});var J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).listTrainings=function(){fetch("https://customerrest.herokuapp.com/gettrainings").then(function(e){return e.json()}).then(function(e){a.setState({trainings:e}),a.makeProperList()})},a.makeProperList=function(){for(var e=[],t=0;t<a.state.trainings.length;t++)null!==a.state.trainings[t].customer&&(e[t]={id:a.state.trainings[t].id,activity:"".concat(a.state.trainings[t].activity),date:new Date(a.state.trainings[t].date),duration:"".concat(a.state.trainings[t].duration),customer:"".concat(a.state.trainings[t].customer.firstname," ").concat(a.state.trainings[t].customer.lastname),location:"".concat(a.state.trainings[t].customer.streetaddress," ").concat(a.state.trainings[t].customer.city)});a.setState({properTrainingList:e.concat()})},a.saveTraining=function(e){fetch("https://customerrest.herokuapp.com/api/trainings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){a.listTrainings(),g.a.success({message:"Task Complete!",description:"The training was added to the customer."})})},a.deleteTraining=function(e){fetch("https://customerrest.herokuapp.com/api/trainings/".concat(e),{method:"DELETE"}).then(function(e){a.listTrainings(),g.a.success({message:"Task Complete!",description:"The training was deleted successfully."})})},a.showDrawer=function(){a.setState({visible:!0})},a.closeDrawer=function(){a.setState({visible:!1})},a.filterMethod=function(e,t){var a=e.id;return void 0===t[a]||String(t[a].toLowerCase()).startsWith(e.value.toLowerCase())},a.state={visible:!1,trainings:[],properTrainingList:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.listTrainings()}},{key:"render",value:function(){var e=this,t=[{Header:r.a.createElement(B,{saveTraining:this.saveTraining}),columns:[{Header:"Training",accessor:"activity"},{Header:"Duration",accessor:"duration"},{Header:"Date",accessor:"date",filterable:!1,Cell:function(e){return r.a.createElement("div",null,H()(e.date).format("D MMM, H:mm"))}}]},{Header:"Customer",columns:[{Header:"Name",accessor:"customer"},{Header:"Location",accessor:"location"}]},{Header:"Control",maxWidth:110,columns:[{Header:"Delete",accessor:"id",maxWidth:110,filterable:!1,sortable:!1,Cell:function(t){var a=t.value;return r.a.createElement("div",null,r.a.createElement(C.a,{title:"Are you sure you want to Delete this Training?",placement:"topRight",okText:"Yes - Delete training",okType:"danger",onConfirm:function(){return e.deleteTraining(a)},icon:r.a.createElement(w.a,{type:"question-circle-o",style:{color:"red"}})},r.a.createElement(T.a,{type:"primary",icon:"delete",size:"small"})))}}]}];return r.a.createElement("div",{style:{marginTop:40,marginBottom:100,marginLeft:"auto",marginRight:"auto",height:"80vh",maxWidth:"90vw"}},r.a.createElement("h1",null,"Trainings List"),r.a.createElement(D.a,{data:this.state.properTrainingList,columns:t,sortable:!0,filterable:!0,defaultFilterMethod:this.filterMethod,defaultPageSize:10}))}}]),t}(n.Component),q=a(178),Y=a.n(q),F=(a(520),Y.a.momentLocalizer(H.a)),G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).loadTrainings=function(){fetch("https://customerrest.herokuapp.com/gettrainings").then(function(e){return e.json()}).then(function(e){a.setState({trainings:e}),a.createEventList()})},a.createEventList=function(){for(var e=[],t=0;t<a.state.trainings.length;t++)null!==a.state.trainings[t].customer&&(e[t]={title:"".concat(a.state.trainings[t].activity," with ").concat(a.state.trainings[t].customer.firstname," ").concat(a.state.trainings[t].customer.lastname),start:new Date(a.state.trainings[t].date),end:new Date(a.state.trainings[t].date+6e4*a.state.trainings[t].duration),allDay:!1});a.setState({events:e.concat()})},a.state={trainings:[],events:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadTrainings()}},{key:"render",value:function(){return r.a.createElement("div",{style:{marginTop:40,marginBottom:100,marginLeft:"auto",marginRight:"auto",height:"80vh",maxWidth:"80vw"}},r.a.createElement("h1",null,"Trainings Calendar"),r.a.createElement(Y.a,{localizer:F,events:this.state.events,defaultDate:new Date,views:["month","day","week"],startAccessor:"start",endAccessor:"end"}))}}]),t}(n.Component),V=a(538),U=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{marginTop:40,marginLeft:"auto",marginRight:"auto",height:"80vh",maxWidth:"80vw"}},r.a.createElement("h1",null,"T-Helper"),r.a.createElement("div",{style:{backgroundColor:"white",padding:30,marginLeft:"auto",marginRight:"auto",maxWidth:700}},r.a.createElement("p",null,"ReactJS School Project"),r.a.createElement("br",null),r.a.createElement(V.a,{pending:"Waiting on teacher feed-back",mode:"alternate"},r.a.createElement(V.a.Item,{dot:r.a.createElement(w.a,{type:"poweroff",style:{fontSize:"20px",color:"green"}})},"Project starts based on ",r.a.createElement("b",null,"REST API")," and back-end documentation provided"),r.a.createElement(V.a.Item,{color:"blue"},r.a.createElement("b",null,"React App")," and general project plan"),r.a.createElement(V.a.Item,{color:"blue"},"Component: ",r.a.createElement("b",null,"React-Router"),", navigation"),r.a.createElement(V.a.Item,{color:"blue"},"Component: ",r.a.createElement("b",null,"React-Table"),", data display"),r.a.createElement(V.a.Item,{color:"blue"},"Component: ",r.a.createElement("b",null,"Big-Calendar"),", timed events"),r.a.createElement(V.a.Item,{color:"blue"},"Component: ",r.a.createElement("b",null,"Moment"),", data formating"),r.a.createElement(V.a.Item,{dot:r.a.createElement(w.a,{type:"ant-design",style:{fontSize:"20px",color:"red"}})},"Library: ",r.a.createElement("b",null,"Ant Design"),", front end design"),r.a.createElement(V.a.Item,{color:"blue"},"Component: ",r.a.createElement("b",null,"Random-Words"),", new test customer"),r.a.createElement(V.a.Item,{dot:r.a.createElement(w.a,{type:"setting",style:{fontSize:"20px",color:"orange"}})},"Technical testing and deployment")),r.a.createElement(w.a,{type:"mail",theme:"twoTone"})," tudor.",r.a.createElement("span",{style:{display:"none"}},"foo"),"nica@myy.haaga-helia.fi"))}}]),t}(n.Component),_=a(529),Q=a(535),$=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(Q.a,{mode:"horizontal"},r.a.createElement(Q.a.Item,{key:"home"},r.a.createElement(_.a,{to:"/"},r.a.createElement(w.a,{type:"home",theme:"twoTone",twoToneColor:"#eb2f96"}),"Home")),r.a.createElement(Q.a.Item,{key:"customers"},r.a.createElement(_.a,{to:"/customers"},r.a.createElement(w.a,{type:"idcard",theme:"twoTone",twoToneColor:"#e2ba14"}),"Customers")),r.a.createElement(Q.a.Item,{key:"trainings"},r.a.createElement(_.a,{to:"/trainings"},r.a.createElement(w.a,{type:"folder-open",theme:"twoTone",twoToneColor:"#e2ba14"}),"Trainings")),r.a.createElement(Q.a.Item,{key:"calendar"},r.a.createElement(_.a,{to:"/calendar"},r.a.createElement(w.a,{type:"schedule",theme:"twoTone",twoToneColor:"#52c41a"}),"Calendar")),r.a.createElement(Q.a.Item,{key:"about"},r.a.createElement(_.a,{to:"/about"},r.a.createElement(w.a,{type:"profile",theme:"twoTone"}),"About")))}}]),t}(n.Component),K=(a(522),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.title="T-Helper"}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,{basename:"~a1703081/frontend/trainer/"},r.a.createElement("div",null,r.a.createElement($,null),r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:O}),r.a.createElement(p.a,{path:"/customers",component:N}),r.a.createElement(p.a,{path:"/trainings",component:J}),r.a.createElement(p.a,{path:"/calendar",component:G}),r.a.createElement(p.a,{path:"/about",component:U}),r.a.createElement(p.a,{render:function(){return r.a.createElement("h1",null,"Page not found")}})))),r.a.createElement("footer",null,"\xa9 2018 - Tudor Nica"))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[255,2,1]]]);
//# sourceMappingURL=main.b782daf8.chunk.js.map