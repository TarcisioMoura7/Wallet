(this["webpackJsonpsd-0x-project-trybewallet"]=this["webpackJsonpsd-0x-project-trybewallet"]||[]).push([[0],{30:function(e,t,a){e.exports=a(43)},39:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),i=a(16),o=a(12),u=(a(39),a(3)),s=a(4),m=a(6),p=a(5),d=a(2),h=a(7),b=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",buttonOn:!1},n.submitStore=n.submitStore.bind(Object(h.a)(n)),n.getInputValue=n.getInputValue.bind(Object(h.a)(n)),n.form=n.form.bind(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"getInputValue",value:function(e){switch(e.target.name){case"email":this.setState({email:e.target.value,buttonOn:!1});break;case"password":this.setState({password:e.target.value})}var t=this.state,a=t.password,n=t.email,r=/[a-zA-Z]+[@][a-z]+[.]+[a-z]/.test(n);a.length>=5&&r&&this.setState({buttonOn:!0})}},{key:"submitStore",value:function(){(0,this.props.submit)({email:this.state.email})}},{key:"form",value:function(e){e.preventDefault(),this.setState({email:"",password:""})}},{key:"render",value:function(){var e=this.state,t=e.buttonOn,a=e.email,n=e.password;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.form},r.a.createElement("h1",null,"Trybe"),r.a.createElement("input",{type:"email",name:"email",value:a,"data-testid":"email-input",placeholder:"Digite seu Email",onChange:this.getInputValue,required:!0}),r.a.createElement("input",{type:"password",name:"password",value:n,"data-testid":"password-input",onChange:this.getInputValue,required:!0}),r.a.createElement(i.b,{to:"/carteira"},r.a.createElement("button",{type:"submit",disabled:!t,onClick:this.submitStore},"Entrar"))))}}]),a}(r.a.Component),E=Object(o.b)(null,(function(e){return{submit:function(t){return e(function(e){return{type:"USER",state:e}}(t))}}}))(b),f=a(11),v=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.htmlFor,a=e.nome,n=e.array,l=e.id,c=e.onChange;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:t},a,r.a.createElement("select",{name:a,id:l,onChange:c},Object.keys(n).map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))))}}]),a}(n.Component),O=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.htmlFor,a=e.array,n=e.nome,l=e.target;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:t},n,r.a.createElement("select",{name:n,id:n,onChange:l},a.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))))}}]),a}(n.Component),j=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.htmlFor,a=e.type,n=e.id,l=e.onChange;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:t},n,r.a.createElement("input",{type:a,name:n,id:n,onChange:l})))}}]),a}(n.Component),g=(a(41),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={id:0,value:"",description:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o"},n.getCrurrencies=n.getCrurrencies.bind(Object(h.a)(n)),n.inputValue=n.inputValue.bind(Object(h.a)(n)),n.submitStore=n.submitStore.bind(Object(h.a)(n)),n.qualquer=n.qualquer.bind(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"getCrurrencies",value:function(){var e=this;fetch("https://economia.awesomeapi.com.br/json/all").then((function(e){return e.json()})).then((function(t){return e.qualquer(t)}))}},{key:"qualquer",value:function(e){var t=Object(f.a)({},e);this.submitStore(t)}},{key:"inputValue",value:function(e){switch(e.target.name){case"Valor":this.setState({value:e.target.value});break;case"M\xe9todo de pagamento":this.setState({method:e.target.value});break;case"Moeda":this.setState({currency:e.target.value});break;case"Tag":this.setState({tag:e.target.value});break;case"Descri\xe7\xe3o":this.setState({description:e.target.value})}}},{key:"submitStore",value:function(e){var t=this.state,a=t.id,n=t.value,r=t.description,l=t.currency,c=t.method,i=t.tag,o=this.props,u=o.submit,s=o.gastos;u({id:a,value:n,currency:l,method:c,tag:i,description:r,exchangeRates:e}),s(),this.setState({id:a+1})}},{key:"render",value:function(){var e=this.props.currencies,t=Object(f.a)({},e);delete t.USDT;return r.a.createElement("form",{className:"form"},r.a.createElement(j,{htmlFor:"Valor",type:"text",nome:"Valor",id:"Valor",onChange:this.inputValue}),r.a.createElement(v,{htmlFor:"Moeda",id:"Moeda",nome:"Moeda",array:t,onChange:this.inputValue}),r.a.createElement(O,{htmlFor:"M\xe9todo de pagamento",nome:"M\xe9todo de pagamento",array:["Dinheiro","Cart\xe3o de cr\xe9dito","Cart\xe3o de d\xe9bito"],target:this.inputValue}),r.a.createElement(O,{htmlFor:"Tag",nome:"Tag",array:["Alimenta\xe7\xe3o","Lazer","Trabalho","Transporte","Sa\xfade"],target:this.inputValue}),r.a.createElement(j,{htmlFor:"Descri\xe7\xe3o",type:"text",id:"Descri\xe7\xe3o",onChange:this.inputValue}),r.a.createElement("button",{type:"button",onClick:this.getCrurrencies},"adicionar despesa"))}}]),a}(n.Component)),y=Object(o.b)((function(e){return{currencies:e.wallet.currencies}}),(function(e){return{submit:function(t){return e(function(e){return{type:"FORM",state:e}}(t))}}}))(g),k=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.email,a=e.totalExpenses;return r.a.createElement("header",null,r.a.createElement("span",{"data-testid":"email-field"},"Email:",t),r.a.createElement("p",null,"Despesa Total:",r.a.createElement("span",{"data-testid":"total-field"},a.toFixed(2))),r.a.createElement("span",{"data-testid":"header-currency-field"},"BRL"))}}]),a}(n.Component),w=(a(42),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).table=n.table.bind(Object(h.a)(n)),n.dispathc=n.dispathc.bind(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"dispathc",value:function(){var e=this.props.wallet.expenses,t=this.props,a=t.submit,n=t.gastos;a(e[0]),n()}},{key:"table",value:function(){var e=this.props.wallet.expenses;if(e.length>1){var t=e[1].exchangeRates,a=Object.entries(t).filter((function(t){return t[0]===e[1].currency})),n=a[0][1].ask;return r.a.createElement("tr",null,r.a.createElement("td",null,e[1].description),r.a.createElement("td",null,e[1].tag),r.a.createElement("td",null,e[1].method),r.a.createElement("td",null,e[1].value),r.a.createElement("td",null,a[0][1].name),r.a.createElement("td",null,(+n).toFixed(2)),r.a.createElement("td",null,(e[1].value*a[0][1].ask).toFixed(2)),r.a.createElement("td",null,r.a.createElement("p",null,"Real")),r.a.createElement("td",null,r.a.createElement("button",{type:"button","data-testid":"delete-btn",onClick:this.dispathc},"Delet")))}}},{key:"render",value:function(){var e=this.props,t=e.wallet.expenses,a=e.counter,n=t[0].exchangeRates,l=Object.entries(n).filter((function(e){return e[0]===t[0].currency})),c=l[a][1].ask;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",null,t[a].description),r.a.createElement("td",null,t[a].tag),r.a.createElement("td",null,t[a].method),r.a.createElement("td",null,t[a].value),r.a.createElement("td",null,l[a][1].name),r.a.createElement("td",null,(+c).toFixed(2)),r.a.createElement("td",null,(t[a].value*l[a][1].ask).toFixed(2)),r.a.createElement("td",null,r.a.createElement("p",null,"Real")),r.a.createElement("td",null,r.a.createElement("button",{type:"button","data-testid":"delete-btn",onClick:this.dispathc},"Delet"))),this.table())}}]),a}(n.Component)),C=Object(o.b)((function(e){return{wallet:e.wallet}}),(function(e){return{submit:function(t){return e(function(e){return{type:"DELETE_ITEM",state:e}}(t))}}}))(w),x=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={hearder:["Descri\xe7\xe3o","Tag","M\xe9todo de pagamento","Valor","Moeda","C\xe2mbio utilizado","Valor convertido","Moeda de convers\xe3o","Editar/Excluir"]},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.hearder,t=this.props,a=t.wallet.expenses,n=t.gastos;return a.length>0?r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,e.map((function(e,t){return r.a.createElement("th",{key:t},e)})))),r.a.createElement("tbody",null,r.a.createElement(C,{counter:0,gastos:n}))):null}}]),a}(n.Component),S=Object(o.b)((function(e){return{wallet:e.wallet}}))(x),T=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={totalExpenses:0},n.gastos=n.gastos.bind(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.submitCurrencies)()}},{key:"gastos",value:function(){var e=this.props.wallet.expenses;if(e.length>0&&e.length<2){var t=e[0].exchangeRates,a=Object.entries(t).filter((function(t){return t[0]===e[0].currency}));this.setState({totalExpenses:+e[0].value*+a[0][1].ask})}if(e.length>1){var n=this.state.totalExpenses,r=e[1].exchangeRates,l=Object.entries(r).filter((function(t){return t[0]===e[1].currency})),c=+e[1].value*+l[0][1].ask;this.setState({totalExpenses:n+c})}}},{key:"render",value:function(){var e=this.state.totalExpenses,t=this.props.user;return r.a.createElement("div",null,r.a.createElement(k,{email:t.email,totalExpenses:e}),r.a.createElement(y,{gastos:this.gastos}),r.a.createElement(S,{gastos:this.gastos}))}}]),a}(r.a.Component),F=Object(o.b)((function(e){return{user:e.user,wallet:e.wallet}}),(function(e){return{submitCurrencies:function(){return e((function(e){e({type:"WALLET"}),fetch("https://economia.awesomeapi.com.br/json/all").then((function(e){return e.json()})).then((function(t){return e({type:"WALLET_SUCESS",state:t})})).catch((function(t){return e({type:"WALLET_ERROR",state:t})}))}))}}}))(T),R=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/carteira",component:F}),r.a.createElement(d.a,{path:"/",component:E}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=a(14),D=a(27),L=a(28),M={email:""},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER":return{email:t.state.email};default:return e}},A=a(29),W={currencies:{},expenses:[],erro:null},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"WALLET":return Object(f.a)({},e);case"WALLET_SUCESS":return Object(f.a)(Object(f.a)({},e),{},{currencies:t.state});case"WALLET_ERROR":return Object(f.a)(Object(f.a)({},e),{},{error:t.error});case"FORM":return Object(f.a)(Object(f.a)({},e),{},{expenses:[].concat(Object(A.a)(e.expenses),[t.state])});case"DELETE_ITEM":return Object(f.a)(Object(f.a)({},e),{},{expenses:e.expenses.filter((function(e){return t.state!==e}))});default:return e}},U=Object(V.combineReducers)({user:q,wallet:I}),_=Object(V.createStore)(U,Object(D.composeWithDevTools)(Object(V.applyMiddleware)(L.a)));c.a.render(r.a.createElement(o.a,{store:_},r.a.createElement(i.a,null,r.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.dd68c6c6.chunk.js.map