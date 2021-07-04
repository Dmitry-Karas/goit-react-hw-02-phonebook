(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{28:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n.n(a),o=n(17),i=n.n(o),c=(n(28),n(23)),s=n(6),l=n(7),d=n(9),p=n(8),u=n(13),m=n.n(u),b=n(5),h=n(3);var g=Object(h.a)("section",{target:"elnxbgc1"})({name:"i1tn3z",styles:"padding:40px 0"}),x=Object(h.a)("h2",{target:"elnxbgc0"})({name:"1exvbqk",styles:"display:flex;justify-content:center;align-items:center;margin-bottom:50px;margin-left:auto;margin-right:auto;text-transform:uppercase;font-size:32px;text-align:center"}),j=n(1),f=function(t){var e=t.title,n=t.children;return Object(j.jsxs)(g,{children:[e&&Object(j.jsx)(x,{children:e}),n]})};var v=Object(h.a)("div",{target:"e2wrlfg0"})({name:"1r2jtax",styles:"width:500px;margin:0 auto;padding:30px;border-radius:5px;box-shadow:rgba(0, 0, 0, 0.5) 0 0 10px 5px;background-color:var(--color-bg);& h1,h2{display:flex;justify-content:center;align-items:center;color:var(--color-dark);& svg{margin-right:10px;}}& h1{font-size:40px;margin-bottom:40px;}& h2{font-size:28px;margin-bottom:60px;}"}),O=function(t){var e=t.children;return Object(j.jsx)(v,{children:e})},y=n(19),C=n(4),w=n.n(C);var z=Object(h.a)("form",{target:"eh9hzte4"})({name:"11wjbcn",styles:"width:250px;margin-left:auto;margin-right:auto;margin-bottom:40px"}),k=Object(h.a)("div",{target:"eh9hzte3"})({name:"1cyqgoz",styles:"position:relative;width:100%;margin-bottom:40px"}),I=Object(h.a)("input",{target:"eh9hzte2"})({name:"1u5wyt5",styles:"display:block;width:100%;height:40px;padding-left:30px;border:none;border-bottom:1px solid tan;font-size:16px;color:var(--color-accent);background-color:transparent;&::placeholder{opacity:0;color:var(--color-accent);transition:opacity 250ms ease;}&:focus{outline:none;border-color:var(--color-accent);&::placeholder{opacity:0.7;transition-delay:250ms;}}&:focus+label,&:not(:placeholder-shown)+label{transform:translate(-32px, -24px);font-size:10px;text-transform:uppercase;font-weight:600;& svg{transform:translate(32px, 24px);}}"}),S=Object(h.a)("label",{target:"eh9hzte1"})({name:"l612fh",styles:"display:flex;align-items:center;margin-bottom:5px;color:var(--color-light);position:absolute;cursor:text;transition:transform 250ms ease-in-out;left:0;bottom:5px;& svg{margin-right:10px;transition:transform 250ms ease-in-out;}"}),F=Object(h.a)("button",{target:"eh9hzte0"})({name:"1sfglxc",styles:"display:flex;align-items:center;margin-left:auto;margin-right:auto;padding:5px 10px;cursor:pointer;border:2px solid tan;border-radius:4px;font-size:20px;text-transform:uppercase;color:var(--color-light);background-color:transparent;transition:all 250ms ease-in-out;&:hover{border-color:var(--color-accent);color:var(--color-accent);}& svg{margin-right:10px;}"}),q=n(10),A=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],name:"",number:""},t.nameInputId=Object(b.a)(),t.telInputId=Object(b.a)(),t.contactId=Object(b.a)(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(y.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)(z,{onSubmit:this.handleSubmit,children:[Object(j.jsxs)(k,{children:[Object(j.jsx)(I,{id:this.nameInputId,type:"text",name:"name",value:e,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",autoComplete:"off",placeholder:"Dmitry Karas",maxLength:"40",required:!0}),Object(j.jsxs)(S,{htmlFor:this.nameInputId,children:[Object(j.jsx)(q.b,{size:"20"}),"Name"]})]}),Object(j.jsxs)(k,{children:[Object(j.jsx)(I,{id:this.telInputId,type:"tel",name:"number",value:n,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",autoComplete:"off",placeholder:"444-55-66",maxLength:"17",required:!0}),Object(j.jsxs)(S,{htmlFor:this.telInputId,children:[Object(j.jsx)(q.a,{size:"20"}),"Number"]})]}),Object(j.jsxs)(F,{type:"submit",children:[Object(j.jsx)(q.c,{size:"30"}),"add"]})]})}}]),n}(a.Component);I.propTypes={id:w.a.string.isRequired,value:w.a.string.isRequired,onChange:w.a.func.isRequired};var R=n(21),D=n(20);var L=Object(h.a)("ul",{target:"e1f359252"})({name:"1un96hd",styles:"border-radius:4px;overflow:hidden"}),T=Object(h.a)("li",{target:"e1f359251"})({name:"2tghe2",styles:"display:flex;align-items:center;width:100%;margin:0 auto;padding:10px 5px;border-bottom:1px solid rosybrown;& span{display:inline-flex;align-items:center;font-weight:600;color:var(--color-dark);&:first-of-type{color:var(--color-accent);margin-right:10px;}& svg{margin-right:10px;color:var(--color-accent);}}& svg{color:var(--color-title);}"}),B=Object(h.a)("button",{target:"e1f359250"})({name:"ov240o",styles:"display:block;margin-left:auto;padding:10px;border:none;cursor:pointer;background-color:transparent;transition:all 250ms ease-in-out;&:hover{color:var(--color-accent);transform:scale(1.3);}"}),J=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)(L,{children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(j.jsxs)(T,{children:[Object(j.jsxs)("span",{children:[Object(j.jsx)(D.a,{size:"20"}),a,":"]}),Object(j.jsx)("span",{children:r}),Object(j.jsx)(B,{onClick:function(){n(e)},children:Object(j.jsx)(R.a,{size:"20"})})]},e)}))})};B.propTypes={onClick:w.a.func.isRequired};var K=n(22);var Z=Object(h.a)("div",{target:"e1yx8mpy2"})({name:"1cyqgoz",styles:"position:relative;width:100%;margin-bottom:40px"}),E=Object(h.a)("input",{target:"e1yx8mpy1"})({name:"9tqwlt",styles:"display:block;width:100%;height:40px;margin-bottom:40px;padding-left:40px;border:none;border-bottom:1px solid tan;font-size:20px;color:darkred;background-color:transparent;transition:all 250ms ease-in-out;&::placeholder{opacity:0;color:darkred;transition:opacity 250ms ease;}&:focus{outline:none;border-bottom:1px solid var(--color-accent);&::placeholder{opacity:0.5;transition-delay:250ms;}}&:focus+label,&:not(:placeholder-shown)+label{transform:translate(-36px, -26px);font-size:12px;text-transform:uppercase;font-weight:600;& svg{transform:translate(36px, 26px);}}"}),M=Object(h.a)("label",{target:"e1yx8mpy0"})({name:"zewe1t",styles:"position:absolute;left:0;bottom:5px;display:flex;align-items:center;margin-bottom:5px;cursor:text;font-size:20px;color:tan;transition:transform 250ms ease-in-out;& svg{margin-right:10px;transition:transform 250ms ease-in-out;}"}),N=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={value:""},t.filterInputId=Object(b.a)(),t.handleChange=function(e){var n=e.target.value;t.setState({value:n}),t.props.onChange(n)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.value;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(Z,{children:[Object(j.jsx)(E,{id:this.filterInputId,type:"text",value:t,onChange:this.handleChange,placeholder:"Dmitry"}),Object(j.jsxs)(M,{htmlFor:this.filterInputId,children:[Object(j.jsx)(K.a,{size:"30"}),"Find contacts by name"]})]})})}}]),n}(a.Component);E.propTypes={value:w.a.string.isRequired,onChange:w.a.func.isRequired};var U=n(14),H=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"},{id:"id-5",name:"Dmitry Karas",number:"511-56-96"}],filter:""},t.checkContact=function(e,n){var a=t.state.contacts,r=a.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})),o=a.find((function(t){return t.number.replace(/[^0-9]/g,"")===n.replace(/[^0-9]/g,"")}));return r?m.a.fire({position:"center",icon:"error",title:"".concat(e.toUpperCase(),"\nis already in contacts!"),confirmButtonColor:"indianred"}):o?m.a.fire({position:"center",icon:"error",title:"This number is already in contacts as\n".concat(o.name.toUpperCase()),confirmButtonColor:"indianred"}):void 0},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFormSubmit=function(e){var n=e.name,a=e.number;if(!t.checkContact(n,a)){var r=Object(b.a)();t.setState((function(t){return{contacts:[].concat(Object(c.a)(t.contacts),[{id:r,name:n,number:a}])}}))}},t.handleFilterInputChange=function(e){t.setState({filter:e.toLowerCase()})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=e.filter((function(t){return t.name.toLowerCase().includes(n)||t.number.includes(n)}));return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(f,{children:Object(j.jsxs)(O,{children:[Object(j.jsxs)("h1",{children:[Object(j.jsx)(U.a,{}),"Phonebook"]}),Object(j.jsx)(A,{onSubmit:this.handleFormSubmit}),e.length>0&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h2",{children:[Object(j.jsx)(U.b,{}),"Contacts"]}),Object(j.jsx)(N,{onChange:this.handleFilterInputChange}),Object(j.jsx)(J,{contacts:a,onDeleteContact:this.deleteContact})]})]})})})}}]),n}(a.Component);i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(H,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.25a036a1.chunk.js.map