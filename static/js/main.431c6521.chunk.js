(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},23:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(12),r=a.n(o),s=(a(23),a(3)),l=a(4),c=a(7),d=a(5),m=a(6),u=a(2),p=(a(28),a(1)),h=a(8),g=(a(29),a(30),function(e){var t=e.title,a=e.navigator,n=e.icon,o=e.backButton;return i.a.createElement(u.Toolbar,{className:"NavBar"},i.a.createElement("div",{className:"left NavBar-left"},o?i.a.createElement(u.BackButton,{onClick:function(){return a.popPage()}}):null),i.a.createElement("div",{className:"center NavBar-center"},n," ",t))}),b=a(10),f=a(16),v=a.n(f),y=(a(35),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={selectedAnswer:null},a.renderPhotoTask=a.renderPhotoTask.bind(Object(p.a)(Object(p.a)(a))),a.renderQuestionTask=a.renderQuestionTask.bind(Object(p.a)(Object(p.a)(a))),a.renderRadioRow=a.renderRadioRow.bind(Object(p.a)(Object(p.a)(a))),a.handleOptionChange=a.handleOptionChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillUnmount",value:function(){this.props.setDone(this.props.id)}},{key:"renderPhotoTask",value:function(){var e=this.props.activities[this.props.id];return i.a.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100%"}},e.isDone&&i.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexBasis:"15%",color:"#FFF",backgroundColor:"#21CC41",fontSize:28,fontWeight:300}},i.a.createElement(u.Icon,{icon:"check",size:28,style:{color:"#FFF"}}),"\xa0\xa0Completed!"),i.a.createElement("div",{style:{flexBasis:"50%",margin:"2rem 0",textAlign:"center"}},i.a.createElement("span",{style:{display:"inline-block",padding:"0.4rem 0.6rem",color:"#FFF",backgroundColor:"#FABC39",borderRadius:"10%",width:"40%"}},e.activityName),i.a.createElement("p",{style:{fontSize:20}},e.activityDescription)),!e.isDone&&i.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexBasis:"50%",backgroundColor:"#EEE",textAlign:"center"}},i.a.createElement("label",null,i.a.createElement(u.Icon,{icon:"camera",size:72,style:{color:"#FABC39"}}),i.a.createElement("input",{style:{display:"none"},type:"file",accept:"image/*;capture=camera"}))))}},{key:"handleOptionChange",value:function(e){this.setState({selectedAnswer:e})}},{key:"renderRadioRow",value:function(e,t){var a=this;return i.a.createElement(u.ListItem,{key:t,tappable:!0},i.a.createElement("label",{className:"left"},i.a.createElement(u.Radio,{inputId:"radio-".concat(e.text),checked:e.text===this.state.selectedAnswer,onChange:function(){return a.handleOptionChange(e.text)}})),i.a.createElement("label",{htmlFor:"radio-".concat(e.text),className:"center",style:{fontSize:22}},e.text))}},{key:"renderQuestionTask",value:function(){var e=this.props.activities[this.props.id];return i.a.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100%"}},e.isDone&&i.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexBasis:"15%",color:"#FFF",backgroundColor:"#21CC41",fontSize:28,fontWeight:300}},i.a.createElement(u.Icon,{icon:"check",size:28,style:{color:"#FFF"}}),"\xa0\xa0Completed!"),i.a.createElement("div",{style:{flexBasis:"30%",margin:"2rem 0",textAlign:"center"}},i.a.createElement("span",{style:{display:"inline-block",padding:"0.4rem 0.6rem",color:"#FFF",backgroundColor:"#AB19DB",borderRadius:"10%",width:"40%"}},e.activityName),i.a.createElement("p",{style:{fontSize:20,paddingTop:30}},e.activityDescription)),i.a.createElement(u.List,{dataSource:e.options,renderRow:this.renderRadioRow}))}},{key:"render",value:function(){var e=this,t=this.props.activities[this.props.id];return i.a.createElement(u.Page,{renderToolbar:function(){return i.a.createElement(g,{title:"Task",navigator:e.props.navigator,icon:i.a.createElement(u.Icon,{icon:"thumbtack"}),backButton:!0})}},"photo"===t.type?this.renderPhotoTask():this.renderQuestionTask())}}]),t}(n.Component)),E=(a(36),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={activities:[{activityName:"Take a selfie",type:"photo",activityDescription:"You need to take a selfie to prove you have been here",isDone:!1,activityID:0},{activityName:"Answer a question",type:"question",activityDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",isDone:!1,activityID:1,options:[{text:"Option 1",correct:!1},{text:"Option 2",correct:!0},{text:"Option 3",correct:!1},{text:"Option 4",correct:!1}]}]},a.renderRow=a.renderRow.bind(Object(p.a)(Object(p.a)(a))),a.setDone=a.setDone.bind(Object(p.a)(Object(p.a)(a))),a.renderThumbnail=a.renderThumbnail.bind(Object(p.a)(Object(p.a)(a))),a.pushPage=a.pushPage.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillUnmount",value:function(){this.props.resetState()}},{key:"renderThumbnail",value:function(e){return"photo"===e?i.a.createElement(u.Icon,{icon:"camera",size:32,className:"list-item__thumbnail",style:{color:"#FABC39",height:"auto",width:10}}):"question"===e?i.a.createElement(u.Icon,{icon:"question-circle",size:32,className:"list-item__thumbnail",style:{color:"#AB19DB",height:"auto",width:10}}):void 0}},{key:"setDone",value:function(e){var t=this.state.activities.map(function(t){return t.activityID===e&&(t.isDone=!0),t});console.log(t),this.setState({activities:t})}},{key:"pushPage",value:function(e){this.props.navigator.pushPage({component:y,props:{activities:this.state.activities,id:e,setDone:this.setDone,result:this.props.result}})}},{key:"renderRow",value:function(e,t){var a=this;return i.a.createElement(u.ListItem,{key:e.activityID,modifier:t===this.state.activities.length-1?"longdivider":null,onClick:function(){a.pushPage(e.activityID)},tappable:!0},i.a.createElement("div",{className:"left ActivityListPage-thumbnail",style:{minWidth:60}},this.renderThumbnail(e.type),e.isDone&&i.a.createElement(u.Icon,{icon:"check-circle",size:24,className:"ActivityListPage-checkmark"})),i.a.createElement("div",{className:"center ActivityListPage-task_title"},e.activityName),i.a.createElement("div",{className:"right"},i.a.createElement(u.Icon,{icon:"fa-chevron-right",style:{color:"#CCC"}})))}},{key:"render",value:function(){var e=this;return i.a.createElement(u.Page,{renderToolbar:function(){return i.a.createElement(g,{title:"Activities",navigator:e.props.navigator,icon:i.a.createElement(u.Icon,{icon:"tasks"}),backButton:!0})}},i.a.createElement(u.List,{dataSource:this.state.activities,renderRow:this.renderRow,renderHeader:function(){return i.a.createElement(u.ListHeader,{style:{textAlign:"center"}},e.props.location)}}))}}]),t}(n.Component)),O=(a(37),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleScan=function(e){var t=a.props.locations[a.props.id];e&&(console.log(e),e===t.title?(a.setState({result:e}),a.pushPage(a.props.navigator)):(a.setState({displayCamera:!1}),h.notification.alert("Sorry, looks like you are not in ".concat(t.title))))},a.handleError=function(e){console.error(e)},console.log(a.props),a.state={result:null,displayCamera:!1},a.getMap=a.getMap.bind(Object(p.a)(Object(p.a)(a))),a.handleScan=a.handleScan.bind(Object(p.a)(Object(p.a)(a))),a.handleError=a.handleError.bind(Object(p.a)(Object(p.a)(a))),a.displayCamera=a.displayCamera.bind(Object(p.a)(Object(p.a)(a))),a.hideCamera=a.hideCamera.bind(Object(p.a)(Object(p.a)(a))),a.pushPage=a.pushPage.bind(Object(p.a)(Object(p.a)(a))),a.resetState=a.resetState.bind(Object(p.a)(Object(p.a)(a))),a.renderDescription=a.renderDescription.bind(Object(p.a)(Object(p.a)(a))),a.renderCamera=a.renderCamera.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"displayCamera",value:function(){this.setState({displayCamera:!0})}},{key:"hideCamera",value:function(){this.setState({displayCamera:!1})}},{key:"getMap",value:function(e){window.open("https://maps.google.com/?q=".concat(e.replace(" ","+")))}},{key:"resetState",value:function(){this.setState({result:null,displayCamera:!1})}},{key:"pushPage",value:function(e){e.pushPage({component:E,props:{result:this.state.result,resetState:this.resetState,location:this.props.locations[this.props.id].title}})}},{key:"renderDescription",value:function(){var e=this;console.log(this.props);var t=this.props.locations[this.props.id];return console.log("Location: "+t),i.a.createElement("div",null,i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("img",{src:t.image,alt:t.title,style:{width:"100%"}})),i.a.createElement("div",{className:"title center",style:{textAlign:"center",fontFamily:"Roboto",fontWeight:700,fontSize:22,color:"#777",textTransform:"uppercase",marginTop:15}},t.title),i.a.createElement("div",{className:"content",style:Object(b.a)({fontSize:17,fontFamily:"Open Sans",padding:14,color:"#777",lineHeight:1.2,textAlign:"left"},"padding","0 6%")},i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},i.a.createElement("div",null,i.a.createElement("p",{style:{marginBottom:0,color:"#42bdff",fontFamily:"Roboto",fontWeight:500}},"Address"),i.a.createElement("p",{style:{marginTop:2,fontSize:14,fontFamily:"Roboto"}},t.address)),i.a.createElement("div",{style:{textAlign:"right"}},i.a.createElement("p",{style:{marginBottom:0,color:"#42bdff",fontFamily:"Roboto",fontWeight:500}},"Hours"),i.a.createElement("p",{style:{marginTop:2,fontSize:14,fontFamily:"Roboto"}},t.hours))),i.a.createElement("p",{style:{marginBottom:0,marginTop:0,color:"#42bdff",fontFamily:"Roboto",fontWeight:500}},"Description"),t.description),i.a.createElement("section",{style:{margin:"16px"}},i.a.createElement("div",{style:{margin:"6px"}},i.a.createElement(u.Button,{onClick:this.displayCamera,modifier:"large"},"I am here")),i.a.createElement("div",{style:{margin:"6px"}},i.a.createElement(u.Button,{onClick:function(){return e.getMap(t.title)},modifier:"large outline"},"Get directions"))))}},{key:"renderCamera",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"LocationPage-QR_description"},i.a.createElement("p",null,i.a.createElement(u.Icon,{icon:"qrcode",size:68})),i.a.createElement("p",null,"Find QR code and scan it")),i.a.createElement(v.a,{delay:1e3,onError:this.handleError,onScan:this.handleScan,style:{width:"100%"}}),i.a.createElement(u.Button,{onClick:this.hideCamera,modifier:"large",className:"LocationPage-QR_cancel_btn"},"Cancel"))}},{key:"render",value:function(){var e=this;return i.a.createElement(u.Page,{renderToolbar:function(){return i.a.createElement(g,{title:e.props.locations[e.props.id].title,navigator:e.props.navigator,backButton:!0})}},this.state.displayCamera?this.renderCamera():this.renderDescription())}}]),t}(n.Component)),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleLocationSelection=a.handleLocationSelection.bind(Object(p.a)(Object(p.a)(a))),a.renderRow=a.renderRow.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleLocationSelection",value:function(e){console.log("id"+e),this.props.navigator.pushPage({component:O,key:"LOCATION_PAGE",props:{locations:this.props.locations,id:e}})}},{key:"renderRow",value:function(e,t){var a=this;return i.a.createElement(u.ListItem,{key:e.objectID,modifier:t===this.props.locations.length-1?"longdivider":null,onClick:function(){a.handleLocationSelection(e.objectID)},tappable:!0},i.a.createElement("div",{className:"left",style:{minWidth:60}},i.a.createElement("img",{src:e.image,className:"list-item__thumbnail LocationsPage-thumbnail"}),e.completed&&i.a.createElement(u.Icon,{icon:"check-circle",size:24,className:"LocationsPage-checkmark"})),i.a.createElement("div",{className:"center"},i.a.createElement("div",{className:"list-item__title"},e.title),i.a.createElement("div",{className:"list-item__subtitle"},e.subtitle)),i.a.createElement("div",{className:"right"},i.a.createElement(u.Icon,{icon:"fa-chevron-right",style:{color:"#CCC"}})))}},{key:"render",value:function(){var e=this;return i.a.createElement(u.Page,{renderToolbar:function(){return i.a.createElement(g,{title:"Locations",navigator:e.props.navigator,icon:i.a.createElement(u.Icon,{icon:"map-marker-alt"})})}},i.a.createElement(u.List,{dataSource:this.props.locations,renderRow:this.renderRow}))}}]),t}(n.Component),j=(a(38),a(39),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={username:"",email:"",password1:"",password2:""},a.handleUsernameChange=a.handleUsernameChange.bind(Object(p.a)(Object(p.a)(a))),a.handleEmailChange=a.handleEmailChange.bind(Object(p.a)(Object(p.a)(a))),a.handlePassword1Change=a.handlePassword1Change.bind(Object(p.a)(Object(p.a)(a))),a.handlePassword2Change=a.handlePassword2Change.bind(Object(p.a)(Object(p.a)(a))),a.handleRegistration=a.handleRegistration.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleUsernameChange",value:function(e){this.setState({username:e.target.value})}},{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handlePassword1Change",value:function(e){this.setState({password1:e.target.value})}},{key:"handlePassword2Change",value:function(e){this.setState({password2:e.target.value})}},{key:"handleRegistration",value:function(){h.notification.alert({message:"Not implemented yet",title:"Ooooops!"})}},{key:"openSignUpPage",value:function(){this.props.navigator.pushPage({component:t,props:{locations:this.props.locations}})}},{key:"render",value:function(){var e=this;return i.a.createElement(u.Page,null,i.a.createElement("div",{className:"LoginPage"},i.a.createElement("img",{src:"logo-white.png",width:"200"}),i.a.createElement("section",{className:"LoginPage-form"},i.a.createElement("p",{className:"LoginPage-title"},"Sign Up"),i.a.createElement(u.Input,{value:this.state.username,onChange:this.handleUsernameChange,type:"text","disable-auto-styling":!0,placeholder:"Name",className:"LoginPage-input"}),i.a.createElement(u.Input,{value:this.state.email,onChange:this.handleEmailChange,type:"email","disable-auto-styling":!0,placeholder:"Email",className:"LoginPage-input"}),i.a.createElement(u.Input,{value:this.state.password1,onChange:this.handlePassword1Change,type:"password","disable-auto-styling":!0,placeholder:"Password",className:"LoginPage-input"}),i.a.createElement(u.Input,{value:this.state.password2,onChange:this.handlePassword2Change,type:"password","disable-auto-styling":!0,placeholder:"Repeat password",className:"LoginPage-input"}),i.a.createElement(u.Button,{modifier:"large",className:"SignUpPage-register_btn",onClick:this.handleRegistration},"CREATE ACCOUNT"),i.a.createElement(u.Button,{modifier:"large--quiet",className:"LoginPage-signup_btn",onClick:function(){return e.props.navigator.popPage()}},"I've got an account")),i.a.createElement("img",{src:"team-logo-white.png",width:"100"})))}}]),t}(n.Component)),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={email:"",password:""},a.handleEmailChange=a.handleEmailChange.bind(Object(p.a)(Object(p.a)(a))),a.handlePasswordChange=a.handlePasswordChange.bind(Object(p.a)(Object(p.a)(a))),a.handleLogin=a.handleLogin.bind(Object(p.a)(Object(p.a)(a))),a.openSignUpPage=a.openSignUpPage.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleLogin",value:function(){"1"===this.state.email&&"2"===this.state.password?this.props.navigator.pushPage({component:C,key:"LOCATIONS_PAGE",props:{locations:this.props.locations}}):h.notification.alert({message:"Username or password is incorrect",title:"Ooooops!"})}},{key:"openSignUpPage",value:function(){this.props.navigator.pushPage({component:j,props:{locations:this.props.locations}})}},{key:"render",value:function(){return i.a.createElement(u.Page,null,i.a.createElement("div",{className:"LoginPage"},i.a.createElement("img",{src:"logo-white.png",width:"200"}),i.a.createElement("section",{className:"LoginPage-form"},i.a.createElement("p",{className:"LoginPage-title"},"Scavenger Hunt"),i.a.createElement(u.Input,{value:this.state.email,onChange:this.handleEmailChange,type:"email","disable-auto-styling":!0,placeholder:"Email",className:"LoginPage-input"}),i.a.createElement(u.Input,{value:this.state.password,onChange:this.handlePasswordChange,type:"password","disable-auto-styling":!0,placeholder:"Password",className:"LoginPage-input"}),i.a.createElement(u.Button,{modifier:"large",className:"LoginPage-login_btn",onClick:this.handleLogin},"SIGN IN"),i.a.createElement(u.Button,{modifier:"large--quiet",className:"LoginPage-signup_btn",onClick:this.openSignUpPage},"or create new account")),i.a.createElement("img",{src:"team-logo-white.png",width:"100"})))}}]),t}(n.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderPage",value:function(e,t){var a=e.props||{};return a.navigator=t,i.a.createElement(e.component,a)}},{key:"render",value:function(){return i.a.createElement(u.Navigator,{initialRoute:{component:k,props:{locations:[{title:"Tunnels of Moose Jaw",subtitle:"Guided tour",description:"Head beneath the streets of downtown Moose Jaw and undergo two guided theatrical tours. Relive Al Capone\u2019s bootlegging days in the Chicago Connection tour and experience first-hand the hardships of early Chinese immigrants in the Passage to Fortune tour. We are a family friendly attraction that offers an experience like no other.",image:"https://www.tourismsaskatchewan.com/large/Tunnels_Z3.jpg",address:"18 Main St N",hours:"Mon-Sat, 10-19",objectID:0},{title:"Mac the Moose",subtitle:"A steel and concrete sculpture of a moose",description:"Mac the Moose is a steel and concrete sculpture of a moose in Moose Jaw, Saskatchewan. Formerly the World's Largest Moose, it is claimed to be North America's largest moose as well as the World's Second Largest Moose at 32 feet (9.8 m) feet tall and a weight of approximately 10 long tons (10,000 kg)",image:"https://i.pinimg.com/originals/7a/cb/94/7acb940429f3fe4efecb50ad26ff31f3.jpg",completed:!0,address:"450 Diefenbaker Dr",hours:"Mon-Sun, 24/7",objectID:1},{title:"The Casino Moose Jaw",subtitle:"First-class gaming",description:"Enjoy first-class gaming, relaxed dining and world-class entertainment at one of Western Canada's premier tourist destinations.",image:"https://casinoregina.com/pub/f.Poker-room.1.jpg",address:"21 Fairford St E",hours:"Mon-Sun, 24/7",objectID:2}],key:"LOGIN_PAGE"}},renderPage:this.renderPage})}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.431c6521.chunk.js.map