(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(30)},26:function(e,a,t){},28:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),o=t(16),c=t.n(o),r=(t(26),t(3)),i=(t(28),t(8));function s(e){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.Mode," bg-").concat(e.Mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link active","aria-current":"page",to:"/Dlmode"},"Feature")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Contact")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/"},"Link")),l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"/",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Dropdown"),l.a.createElement("ul",{className:"dropdown-menu"},l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown-item",href:"/"},"Action")),l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown-item",href:"/"},"Another action")),l.a.createElement("li",null,l.a.createElement("hr",{className:"dropdown-divider"})),l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown-item",href:"/"},"Something else here")))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link disabled",href:"/"},"Disabled"))),l.a.createElement("div",{class:"form-check form-switch"},l.a.createElement("input",{class:"form-check-input",type:"checkbox",role:"switch","aria-checked":"true",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),l.a.createElement("label",{class:"form-check-label",for:"flexSwitchCheckDefault"})),l.a.createElement("button",{className:"btn btn-success",onClick:function(){document.body.style.backgroundColor="green",e.koibhi("Green Theme Applied")}}),l.a.createElement("button",{className:"btn btn-warning",onClick:function(){document.body.style.backgroundColor="yellow",e.koibhi("Yellow Theme Applied")}}),l.a.createElement("button",{className:"btn btn-danger",onClick:function(){document.body.style.backgroundColor="red",e.koibhi("Red Theme Applied")}}),l.a.createElement("button",{className:"btn btn-secondary",onClick:function(){document.body.style.backgroundColor="grey",e.koibhi("Grey Theme Applied")}}),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){document.body.style.backgroundColor="blue",e.koibhi("Blue Theme Applied")}}),l.a.createElement("form",{className:"d-flex",role:"search"},l.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search"))))))}function d(e){var a=Object(n.useState)("Enter Your Text Here"),t=Object(r.a)(a,2),o=t[0],c=t[1];return l.a.createElement("div",{className:"container",style:{color:"dark"===e.Mode?"white":"black"}},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:o,onChange:function(e){c(e.target.value)},id:"exampleFormControlTextarea1",rows:"3"}),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){var a=o.toUpperCase();c(a),e.koibhi("converted to uppercase")}},"Bada"),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){var a=o.toLowerCase();c(a),e.koibhi("converted to lowercase")}},"Chota"),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){var a=o.slice(o.length);c(a),e.koibhi("Text Dissapper succesfully")}},"Saaf"),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){var a=o.split(/[ ]+/);c(a.join(" ")),e.koibhi("Spaces Removed")}},"Remove Spaces"),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){var a=document.getElementById("exampleFormControlTextarea1");a.select(),navigator.clipboard.writeText(a.value),e.koibhi("Text Copied")}},"Copy"),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){var a=document.body.text.style.fontWeight="bold";document.body.text.selection.style.fontWeight.bold=!0,document.editor.toggleBold(),c(a),e.koibhi("converted to Bold Text")}},"Bold"),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){var e=o.charAt(0).toUpperCase()+o.slice(1).toLowerCase();c(e)}},"Capital")),l.a.createElement("h1",null,"word Aur Letters hiii Gin Lo Abbb"),l.a.createElement("p",null,""===o?0:o.split(" ").length," Words & ",o.length," Character"),l.a.createElement("p",null,.008*o.length),l.a.createElement("h1",null,"uprr Likhaa huaaa yha Bhii DekhLo Tumhara Man hoto"),l.a.createElement("p",null,o),l.a.createElement("h1",null,"Piche ka colour Bhii BadaL Lo Abb"),l.a.createElement("button",{className:"btn btn-success",onClick:function(){document.body.style.backgroundColor="green"}},"Green"),l.a.createElement("button",{className:"btn btn-danger",onClick:function(){document.body.style.backgroundColor="red"}},"Red"),l.a.createElement("button",{className:"btn btn-dark",onClick:function(){document.body.style.backgroundColor="black"}},"Black"),l.a.createElement("button",{className:"btn btn-success",onClick:function(){document.body.style.backgroundColor="lime"}},"Lime"),l.a.createElement("button",{className:"btn btn-warning",onClick:function(){document.body.style.backgroundColor="yellow"}},"Yellow"))}function m(e){return e.alert&&l.a.createElement("div",null,l.a.createElement("div",{className:"alert-container"},l.a.createElement("div",{class:"alert alert-success alert-dismissible fade show",role:"alert"},l.a.createElement("strong",null,e.alert.msg),l.a.createElement("strong",null,"     ",e.alert.type))))}function u(e){var a=Object(n.useState)({color:"white",backgroundColor:"black"}),t=Object(r.a)(a,2),o=t[0],c=t[1],i=Object(n.useState)("Enable Dark Mode"),s=Object(r.a)(i,2),d=s[0],m=s[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{class:"accordion",id:"accordionExample",style:o},l.a.createElement("div",{class:"accordion-item"},l.a.createElement("h2",{class:"accordion-header",id:"headingOne"},l.a.createElement("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Accordion Item #1")),l.a.createElement("div",{id:"collapseOne",class:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},l.a.createElement("div",{class:"accordion-body",style:o},l.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),l.a.createElement("div",{class:"accordion-item"},l.a.createElement("h2",{class:"accordion-header",id:"headingTwo"},l.a.createElement("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Accordion Item #2")),l.a.createElement("div",{id:"collapseTwo",class:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},l.a.createElement("div",{class:"accordion-body",style:o},l.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),l.a.createElement("div",{class:"accordion-item"},l.a.createElement("h2",{class:"accordion-header",id:"headingThree"},l.a.createElement("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Accordion Item #3")),l.a.createElement("div",{id:"collapseThree",class:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},l.a.createElement("div",{class:"accordion-body",style:o},l.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))))),l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement("button",{onClick:function(){"white"===o.color?(c({color:"black",backgroundColor:"white"}),m("Enable Light Mode")):(c({color:"white",backgroundColor:"black"}),m("Enable Dark Mode"))}},d)))}var b=t(0);var h=function(){var e=Object(n.useState)(null),a=Object(r.a)(e,2),t=a[0],o=a[1],c=function(e,a){o({msg:e,type:a}),setTimeout(function(){o(null)},2e3),setInterval(function(){document.title="Andhera kayam rahe"})},h=Object(n.useState)("light"),p=Object(r.a)(h,2),g=p[0],E=p[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement(s,{title:"Hello",Mode:g,toggleMode:function(){"light"===g?(E("dark"),document.body.style.backgroundColor="grey",document.getElementById("exampleFormControlTextarea1").style.backgroundColor="grey",document.getElementById("exampleFormControlTextarea1").style.color="white",c("success","dark mode")):(E("light"),document.body.style.backgroundColor="white",document.getElementById("exampleFormControlTextarea1").style.backgroundColor="white",document.getElementById("exampleFormControlTextarea1").style.color="black",c("success","light mode"))},koibhi:c}),l.a.createElement(m,{alert:t}),l.a.createElement(b.c,null,l.a.createElement(b.a,{path:"/",element:l.a.createElement(d,{heading:"aur kya hal hai bhaii/behenn",koibhi:c})}),l.a.createElement(b.a,{path:"/Dlmode",element:l.a.createElement(u,null)}))))},p=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,31)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null))),p()}},[[17,3,2]]]);
//# sourceMappingURL=main.a48aceec.chunk.js.map