(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(34)},22:function(e,t,a){},27:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),l=(a(22),a(3)),s=a(4),c=a(7),d=a(5),u=a(6),m=a(1),p=a(8),h=a(2),b=(a(27),a(15)),g=a.n(b),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).renderToolbar=a.renderToolbar.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"renderToolbar",value:function(){return r.a.createElement(h.Toolbar,null,r.a.createElement("div",{className:"left"},r.a.createElement(h.BackButton,null)),r.a.createElement("div",{className:"center"},"Tourism Moose Jaw App"),r.a.createElement("div",{className:"right"},r.a.createElement(h.ToolbarButton,null,r.a.createElement(h.Icon,{icon:"ion-navicon, material:md-menu"}))))}},{key:"componentWillUnmount",value:function(){this.props.setDone(this.props.id)}},{key:"render",value:function(){return r.a.createElement(h.Page,{renderToolbar:this.renderToolbar},r.a.createElement(h.Card,{he:!0},r.a.createElement("div",{className:"title center"},"Task Title"),r.a.createElement("div",{className:"content"},"Task detailed description",r.a.createElement("div",{style:{marginTop:"2rem",textAlign:"center"}},r.a.createElement("label",null,r.a.createElement("span",{style:{border:"1px solid grey",padding:"10px"}},"Take a picture"),r.a.createElement("input",{style:{display:"none"},type:"file",accept:"image/*;capture=camera"}))))))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={activities:[{activityName:"Take a selfie",activityDescription:"You need to take a selfie to prove you have been here",isDone:!1,activityID:0}]},a.renderToolbar=a.renderToolbar.bind(Object(m.a)(Object(m.a)(a))),a.renderRow=a.renderRow.bind(Object(m.a)(Object(m.a)(a))),a.setDone=a.setDone.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"renderToolbar",value:function(){return r.a.createElement(h.Toolbar,null,r.a.createElement("div",{className:"left"},r.a.createElement(h.BackButton,null)),r.a.createElement("div",{className:"center"},"Tourism Moose Jaw App"),r.a.createElement("div",{className:"right"},r.a.createElement(h.ToolbarButton,null,r.a.createElement(h.Icon,{icon:"ion-navicon, material:md-menu"}))))}},{key:"componentWillUnmount",value:function(){this.props.resetState()}},{key:"setDone",value:function(e){var t=this.state.activities.map(function(t){return t.activityID===e&&(t.isDone=!0),t});console.log(t),this.setState({activities:t})}},{key:"pushPage",value:function(e,t){e.pushPage({component:v,props:{activity:this.state.activities,id:t,setDone:this.setDone,result:this.props.result}})}},{key:"renderRow",value:function(e,t){var a=this;return r.a.createElement(h.ListItem,{key:t,modifier:"longdivider",onClick:function(){a.pushPage(a.props.navigator,t)},tappable:!0},r.a.createElement("div",{className:"left"},t+1),r.a.createElement("div",{className:"center"},e.activityName),r.a.createElement("div",{className:"right"},e.isDone&&r.a.createElement(h.Icon,{style:{color:"green"},icon:"md-check-circle"})))}},{key:"render",value:function(){var e=this;return r.a.createElement(h.Page,{renderToolbar:this.renderToolbar},r.a.createElement(h.List,{dataSource:this.state.activities,renderRow:this.renderRow,renderHeader:function(){return r.a.createElement(h.ListHeader,null,"Activities - ",e.props.result)}}))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleScan=function(e){if(e){console.log(e);var t=a.props.locations[a.props.id];e===t.title?(a.setState({result:e}),a.pushPage(a.props.navigator)):(a.setState({displayCamera:!1}),p.notification.alert("Sorry, looks like you are not in ".concat(t.title)))}},a.handleError=function(e){console.error(e)},console.log(a.props),a.state={result:null,displayCamera:!1},a.renderToolbar=a.renderToolbar.bind(Object(m.a)(Object(m.a)(a))),a.getMap=a.getMap.bind(Object(m.a)(Object(m.a)(a))),a.handleScan=a.handleScan.bind(Object(m.a)(Object(m.a)(a))),a.handleError=a.handleError.bind(Object(m.a)(Object(m.a)(a))),a.displayCamera=a.displayCamera.bind(Object(m.a)(Object(m.a)(a))),a.pushPage=a.pushPage.bind(Object(m.a)(Object(m.a)(a))),a.resetState=a.resetState.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"renderToolbar",value:function(){return r.a.createElement(h.Toolbar,null,r.a.createElement("div",{className:"left"},r.a.createElement(h.BackButton,null)),r.a.createElement("div",{className:"center"},"Tourism Moose Jaw App"),r.a.createElement("div",{className:"right"},r.a.createElement(h.ToolbarButton,null,r.a.createElement(h.Icon,{icon:"ion-navicon, material:md-menu"}))))}},{key:"displayCamera",value:function(){this.setState({displayCamera:!0})}},{key:"getMap",value:function(e){window.open("https://maps.google.com/?q=".concat(e.replace(" ","+")))}},{key:"resetState",value:function(){this.setState({result:null,displayCamera:!1})}},{key:"pushPage",value:function(e){e.pushPage({component:f,props:{result:this.state.result,resetState:this.resetState}})}},{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props.locations[this.props.id];return r.a.createElement(h.Page,{renderToolbar:this.renderToolbar},r.a.createElement(h.Card,null,r.a.createElement("div",{className:"title right"},t.title),r.a.createElement("img",{src:t.image,alt:t.title,style:{width:"100%"}}),r.a.createElement("div",{className:"content"},t.description),this.state.displayCamera&&!this.state.result&&r.a.createElement(g.a,{delay:1e3,onError:this.handleError,onScan:this.handleScan,style:{width:"100%"}}),r.a.createElement("section",{style:{margin:"16px"}},r.a.createElement("div",{style:{margin:"6px"}},r.a.createElement(h.Button,{onClick:this.displayCamera,modifier:"large"},"I am here")),r.a.createElement("div",{style:{margin:"6px"}},r.a.createElement(h.Button,{onClick:function(){return e.getMap(t.title)},modifier:"large outline"},"Get directions")))))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).renderToolbar=a.renderToolbar.bind(Object(m.a)(Object(m.a)(a))),a.renderRow=a.renderRow.bind(Object(m.a)(Object(m.a)(a))),a.pushPage=a.pushPage.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"pushPage",value:function(e,t){e.pushPage({component:E,props:{locations:this.props.locations,id:t}})}},{key:"renderToolbar",value:function(){return r.a.createElement(h.Toolbar,null,r.a.createElement("div",{className:"left"},r.a.createElement(h.BackButton,null)),r.a.createElement("div",{className:"center"},"Tourism Moose Jaw App"),r.a.createElement("div",{className:"right"},r.a.createElement(h.ToolbarButton,null,r.a.createElement(h.Icon,{icon:"ion-navicon, material:md-menu"}))))}},{key:"renderRow",value:function(e,t){var a=this;return r.a.createElement(h.ListItem,{key:e.objectID,modifier:t===this.props.locations.length-1?"longdivider":null,onClick:function(){a.pushPage(a.props.navigator,e.objectID)},tappable:!0},r.a.createElement("div",{className:"left"},r.a.createElement("img",{src:e.image,className:"list-item__thumbnail"})),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"list-item__title"},e.title),r.a.createElement("div",{className:"list-item__subtitle"},e.subtitle)))}},{key:"render",value:function(){return r.a.createElement(h.Page,{renderToolbar:this.renderToolbar},r.a.createElement(h.List,{dataSource:this.props.locations,renderRow:this.renderRow,renderHeader:function(){return r.a.createElement(h.ListHeader,null,"Locations")}}))}}]),t}(n.Component),y=(a(32),function(e){function t(e){var a;return Object(l.a)(this,t),a=Object(c.a)(this,Object(d.a)(t).call(this,e)),console.log(a.props),a.state={username:"",password:""},a.handleUsernameChange=a.handleUsernameChange.bind(Object(m.a)(Object(m.a)(a))),a.handlePasswordChange=a.handlePasswordChange.bind(Object(m.a)(Object(m.a)(a))),a.handleClick=a.handleClick.bind(Object(m.a)(Object(m.a)(a))),a.renderToolbar=a.renderToolbar.bind(Object(m.a)(Object(m.a)(a))),a.pushPage=a.pushPage.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"pushPage",value:function(e){e.pushPage({component:j,props:{locations:this.props.locations}})}},{key:"handleUsernameChange",value:function(e){this.setState({username:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleClick",value:function(){"1"===this.state.username&&"2"===this.state.password?this.pushPage(this.props.navigator):p.notification.alert("Username or password incorrect!")}},{key:"renderToolbar",value:function(){return r.a.createElement(h.Toolbar,null,r.a.createElement("div",{className:"center"},"Tourism Moose Jaw App"),r.a.createElement("div",{className:"right"},r.a.createElement(h.ToolbarButton,null,r.a.createElement(h.Icon,{icon:"ion-navicon, material:md-menu"}))))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h.Page,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",height:"100vh",backgroundColor:"#42bdff"}},r.a.createElement("div",{style:{paddingBottom:"3rem"}},r.a.createElement("img",{src:"logo-white.png",width:"200"})),r.a.createElement("p",{style:{color:"#FFF",fontSize:"2rem",fontFamily:"Verdana"}},"Scavenger Hunt App"),r.a.createElement("section",{style:{textAlign:"center"}},r.a.createElement("p",null,r.a.createElement(h.Input,{value:this.state.username,onChange:this.handleUsernameChange,type:"email","disable-auto-styling":!0,placeholder:"Email",style:{backgroundColor:"#FFF",padding:"0.2rem 0.5rem",borderRadius:5}})),r.a.createElement("p",null,r.a.createElement(h.Input,{value:this.state.password,onChange:this.handlePasswordChange,type:"password","disable-auto-styling":!0,placeholder:"Password",style:{backgroundColor:"#FFF",padding:"0.2rem 0.5rem",borderRadius:5}})),r.a.createElement("p",null,r.a.createElement(h.Button,{onClick:this.handleClick,style:{backgroundColor:"#FA0F81"}},"Sign in"),r.a.createElement(h.Button,{modifier:"large--quiet",style:{color:"#FFF",textTransform:"none"}},"Don't have an account? Create one"))))))}}]),t}(n.Component)),O=[{title:"Tunnels of Moose Jaw",subtitle:"Guided tour",description:"Head beneath the streets of downtown Moose Jaw and undergo two guided theatrical tours. Relive Al Capone\u2019s bootlegging days in the Chicago Connection tour and experience first-hand the hardships of early Chinese immigrants in the Passage to Fortune tour. We are a family friendly attraction that offers an experience like no other.",image:"https://www.tunnelsofmoosejaw.com/fileadmin/template1/images/chicagoconnectionlogo-large.jpg",objectID:0},{title:"Mac the Moose",subtitle:"A steel and concrete sculpture of a moose",description:"Mac the Moose is a steel and concrete sculpture of a moose in Moose Jaw, Saskatchewan. Formerly the World's Largest Moose, it is claimed to be North America's largest moose as well as the World's Second Largest Moose at 32 feet (9.8 m) feet tall and a weight of approximately 10 long tons (10,000 kg)",image:"https://i.pinimg.com/originals/7a/cb/94/7acb940429f3fe4efecb50ad26ff31f3.jpg",objectID:1},{title:"The Casino Moose Jaw",subtitle:"First-class gaming",description:"Enjoy first-class gaming, relaxed dining and world-class entertainment at one of Western Canada's premier tourist destinations.",image:"https://casinomoosejaw.com/res/img/logoCasinomoosejaw.png",objectID:2}],w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={username:"",password:"",locations:O},a.handleUsernameChange=a.handleUsernameChange.bind(Object(m.a)(Object(m.a)(a))),a.handlePasswordChange=a.handlePasswordChange.bind(Object(m.a)(Object(m.a)(a))),a.handleClick=a.handleClick.bind(Object(m.a)(Object(m.a)(a))),a.renderToolbar=a.renderToolbar.bind(Object(m.a)(Object(m.a)(a))),a.renderPage=a.renderPage.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleUsernameChange",value:function(e){this.setState({username:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleClick",value:function(){"bob"===this.state.username&&"secret"===this.state.password?p.notification.alert("You are now signed in!"):p.notification.alert("Username or password incorrect!")}},{key:"renderToolbar",value:function(){return r.a.createElement(h.Toolbar,null,r.a.createElement("div",{className:"left"},r.a.createElement(h.Icon,null)),r.a.createElement("div",{className:"center"},"Tourism Moose Jaw App"))}},{key:"renderPage",value:function(e,t){return e.props=e.props||{},e.props.navigator=t,r.a.createElement(e.component,e.props)}},{key:"render",value:function(){return r.a.createElement(h.Navigator,{swipeable:!0,renderPage:this.renderPage,initialRoute:{component:y,props:{locations:this.state.locations},hasBackButton:!1}})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.af4fb8fc.chunk.js.map