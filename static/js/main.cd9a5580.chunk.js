(this["webpackJsonppokemon-app"]=this["webpackJsonppokemon-app"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(16),i=c.n(s),o=(c(23),c(3)),l=(c(24),c(8)),r=c(2),j=(c(25),c(0)),d=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(j.jsxs)("header",{children:[Object(j.jsxs)(l.b,{to:"/pokemon-app/",children:[Object(j.jsx)(r.a,{exact:!0,path:["/pokemon-app/"],children:Object(j.jsx)("h3",{className:"appName",children:"Pokemon"})}),Object(j.jsx)(r.a,{path:["/pokemon-app/detail/:pokemon","/pokemon-app/mypokemon"],children:Object(j.jsx)("div",{className:"backButton",children:Object(j.jsx)("h3",{children:"<"})})})]}),Object(j.jsxs)("div",{className:c?"container change":"container",onClick:function(){n(!c)},children:[Object(j.jsx)("div",{className:"bar1"}),Object(j.jsx)("div",{className:"bar2"}),Object(j.jsx)("div",{className:"bar3"})]}),Object(j.jsxs)("nav",{className:c?"":"active",children:[Object(j.jsx)("div",{className:"nav-list",children:Object(j.jsx)(l.b,{to:"/pokemon-app/",children:"Pokedex"})}),Object(j.jsx)("div",{className:"nav-list",children:Object(j.jsx)(l.b,{to:"/pokemon-app/mypokemon",children:"My Pokemon"})})]})]})},b=(c(32),c(33),function(e){return Object(j.jsxs)("div",{className:"table-column",children:[Object(j.jsx)("div",{className:"table-row title",children:e.data.header}),Object(j.jsx)("div",{className:"table-row content",children:e.data.content})]})}),m=function(e){return Object(j.jsx)("div",{className:"table",children:e.data.map((function(e,t){return Object(j.jsx)(b,{data:e},t)}))})},h=(c(34),function(e){return Object(j.jsx)("div",{className:"type-label ".concat(e.type),children:e.type.toUpperCase()})}),O=(c(35),function(e){var t=e.baseStat.data/255*100,c="";return c=t<=33?"#ff2b2b":t<=66?"#ffde4a":"#28fa28",Object(j.jsxs)("div",{className:"chart-bar",children:[Object(j.jsx)("div",{className:"chart-bar-row title",children:e.baseStat.header}),Object(j.jsx)("div",{className:"chart-bar-row content",children:Object(j.jsx)("div",{className:"line-bar",style:{width:"".concat(t,"%"),background:c}})})]})}),p=c(18),u=function e(){Object(p.a)(this,e)};u.checkingLocalStorage=function(){return"undefined"!==typeof Storage||(alert("Your Browser Not Supported"),!1)},u.addToLocalStorage=function(e){for(var t=u.fetchLocalStorage(),c=0;c<t.length;c++)if(t[c].nickname==e.nickname)return!0;return t.push(e),localStorage.setItem("LOCAL_POKEMON_LIST",JSON.stringify(t)),!1},u.fetchLocalStorage=function(){if(u.checkingLocalStorage())return null!==localStorage.getItem("LOCAL_POKEMON_LIST")?JSON.parse(localStorage.getItem("LOCAL_POKEMON_LIST")):[]},u.deleteFromLocalStorage=function(e){var t=u.fetchLocalStorage().filter((function(t){return t.nickname!==e}));localStorage.setItem("LOCAL_POKEMON_LIST",JSON.stringify(t))},u.getPokemonCount=function(){return u.fetchLocalStorage().length};var x=u,v=function(e){e.props;var t=Object(r.f)().pokemon,c="https://pokeapi.co/api/v2/pokemon/"+t,n=Object(a.useState)([]),s=Object(o.a)(n,2),i=s[0],l=s[1],d=Object(a.useState)([]),b=Object(o.a)(d,2),p=b[0],u=b[1],v=Object(a.useState)(""),f=Object(o.a)(v,2),k=f[0],g=f[1],N=Object(a.useState)([]),S=Object(o.a)(N,2),y=S[0],C=S[1],L=Object(a.useState)([]),I=Object(o.a)(L,2),P=I[0],_=I[1],w=Object(a.useState)(!1),A=Object(o.a)(w,2),M=A[0],E=A[1],T=Object(a.useState)(!1),F=Object(o.a)(T,2),B=F[0],J=F[1],D=Object(a.useState)(""),K=Object(o.a)(D,2),H=K[0],U=K[1],Y=Object(a.useState)(!1),R=Object(o.a)(Y,2),G=R[0],W=R[1],q=Object(a.useState)(!1),z=Object(o.a)(q,2),Q=z[0],V=z[1];return Object(a.useEffect)((function(){fetch(c).then((function(e){return e.json()})).then((function(e){g(e.sprites.front_default);for(var t=[],c=["HP","Attack","Defense","Sp. Att","Sp. Def","Speed"],a=0;a<c.length;a++)t.push({header:c[a],data:e.stats[a].base_stat});u(t);var n="";if(0===e.held_items.length)n="No held items";else for(var s=0;s<e.held_items.length;s++)0!=s&&(n+=", "),n+=e.held_items[s].item.name.replace(/-/g," ");var i="";if(0===e.abilities.length)i="No ability found";else for(var o=0;o<e.abilities.length;o++)0!=o&&(i+=", "),i+=e.abilities[o].ability.name.replace(/-/g," ");var r=[];if(0===e.moves.length)i="No ability found";else for(var j=0;j<e.moves.length;j++)r.push(e.moves[j].move.name.replace(/-/g," "));_(r);var d=[{header:"Height",content:"".concat(e.height/10,"m")},{header:"Weight",content:"".concat(e.weight/10,"kg")},{header:"Held Items",content:n},{header:"Ability",content:i}];l(d);for(var b=[],m=0;m<e.types.length;m++)b.push(e.types[m].type.name);C(b)}))}),[]),Object(j.jsxs)("div",{className:"detail-box",children:[M&&Q&&Object(j.jsxs)("div",{className:"alert",children:[Object(j.jsx)("p",{children:"Name must be less than 9 character"}),Object(j.jsx)("div",{className:"btn btn-resubmit",onClick:function(){V(!1)},children:"Close"})]}),B&&Object(j.jsxs)("div",{className:"alert",children:[Object(j.jsx)("p",{children:"Pokemon has gone"}),Object(j.jsx)("div",{className:"btn btn-resubmit",onClick:function(){J(!1)},children:"Close"})]}),M&&G&&Object(j.jsxs)("div",{className:"alert alert-used",children:[Object(j.jsx)("p",{children:"Name has been used."}),Object(j.jsx)("div",{className:"btn btn-resubmit",onClick:function(){W(!1)},children:"Close"})]}),M&&!G&&!Q&&Object(j.jsxs)("div",{className:"alert form-nickname-input",children:[Object(j.jsx)("h4",{children:"Pokemon Catched"}),Object(j.jsxs)("form",{action:"",onSubmit:function(e){if(e.preventDefault(),H.length>=8)V(!0);else{var c={nickname:H,pokemon:t,urlImage:k};x.addToLocalStorage(c)?W(!0):E(!1)}},children:[Object(j.jsx)("input",{type:"text",name:"nickname",id:"nickname",placeholder:"Give nickname",onChange:function(e){U(e.target.value)}}),Object(j.jsxs)("div",{className:"button-group",children:[Object(j.jsx)("div",{className:"btn btn-release",onClick:function(){E(!1)},children:"Release"}),Object(j.jsx)("button",{type:"submit",id:"submit",className:"btn",children:"Submit"})]})]})]}),Object(j.jsxs)("div",{className:"detail-header",children:[Object(j.jsx)("h2",{className:"pokemon-name",children:t}),Object(j.jsx)("div",{className:"type-box",children:y.map((function(e,t){return Object(j.jsx)(h,{type:e},t)}))})]}),Object(j.jsx)("div",{className:"detail-img",children:Object(j.jsx)("img",{src:k,alt:t})}),Object(j.jsx)("div",{className:"btn-catch",onClick:function(){Math.floor(100*Math.random())%2==0?E(!0):J(!0)},children:"Catch Now"}),Object(j.jsxs)("div",{className:"detail-content-box",children:[Object(j.jsx)("div",{className:"detail-pokeball",style:{backgroundImage:"url(".concat("/pokemon-app/pokeball.png",")"),opacity:"0.1"}}),Object(j.jsx)("div",{className:"detail-pokeball",style:{backgroundImage:"url(".concat("/pokemon-app/pokeball.png",")"),opacity:"0.2"}}),Object(j.jsx)("div",{className:"divider"}),Object(j.jsxs)("div",{className:"detail-info-box",children:[Object(j.jsxs)("div",{className:"detail-content",children:[Object(j.jsx)("h2",{children:"Overview"}),Object(j.jsx)(m,{data:i})]}),Object(j.jsxs)("div",{className:"detail-content",children:[Object(j.jsx)("h2",{children:"Base Stat"}),p.map((function(e,t){return Object(j.jsx)(O,{baseStat:e},t)}))]})]}),Object(j.jsxs)("div",{className:"move-content-box",children:[Object(j.jsx)("h2",{children:"Move Set"}),Object(j.jsx)("div",{className:"move-content",children:P.map((function(e,t){return Object(j.jsx)("div",{className:"move-box",children:Object(j.jsx)("small",{children:e})},t)}))})]})]})]})},f=(c(36),function(){var e=Object(a.useState)("https://pokeapi.co/api/v2/pokemon?limit=20"),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(),i=Object(o.a)(s,2),r=i[0],d=i[1],b=Object(a.useState)(),m=Object(o.a)(b,2),h=m[0],O=m[1],p=Object(a.useState)([]),u=Object(o.a)(p,2),v=u[0],f=u[1],k=Object(a.useState)(0),g=Object(o.a)(k,2),N=g[0],S=g[1];function y(e){var t=e.slice(0,-1),c=t.slice(t.lastIndexOf("/")+1);return"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(c,".png")}function C(e){e.target.dataset.url?n(e.target.dataset.url):alert("You can go anymore")}return Object(a.useEffect)((function(){fetch(c).then((function(e){return e.json()})).then((function(e){f(e.results),d(e.next),O(e.previous)})),S(x.getPokemonCount())}),[c]),Object(j.jsx)("div",{className:"pokedex-box",children:Object(j.jsxs)("div",{className:"pokedex-box-content",children:[Object(j.jsx)("h2",{children:"Pokemon List"}),Object(j.jsx)("div",{className:"info-inventory",children:Object(j.jsx)(l.b,{to:"/pokemon-app/mypokemon",children:Object(j.jsx)("p",{children:Object(j.jsxs)("small",{children:["Your pokemon: ",N]})})})}),Object(j.jsx)("div",{className:"mypokedex-content",children:v.map((function(e){return Object(j.jsxs)("div",{className:"mypokedex-card-box",children:[Object(j.jsx)("div",{className:"pokeball",style:{backgroundImage:"url(".concat("/pokemon-app/pokeball.png",")"),opacity:"0.15"}}),Object(j.jsx)(l.b,{to:"/pokemon-app/detail/".concat(e.name),children:Object(j.jsxs)("div",{className:"mypokedex-card",children:[Object(j.jsx)("div",{className:"mypokedex-img",children:Object(j.jsx)("img",{src:y(e.url)})}),Object(j.jsx)("div",{className:"pokedex-info",children:Object(j.jsx)("h3",{children:(t=e.name,t.charAt(0).toUpperCase()+t.slice(1))})}),Object(j.jsx)("div",{className:"btn go",children:">"})]})})]},e.name);var t}))}),Object(j.jsxs)("div",{className:"btn-group",children:[Object(j.jsx)("div",{className:"btn btn-pagination",onClick:C,"data-url":h,children:"<"}),Object(j.jsx)("div",{className:"btn btn-pagination",onClick:C,"data-url":r,children:">"})]})]})})}),k=(c(37),function(){var e=Object(a.useState)(x.fetchLocalStorage()),t=Object(o.a)(e,2),c=t[0],n=t[1],s=function(){n(x.fetchLocalStorage())};function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}Object(a.useEffect)((function(){s()}),[]);var l=function(e){var t=e.target.dataset.id;x.deleteFromLocalStorage(t),s()};return Object(j.jsx)("div",{className:"detail-box",children:Object(j.jsxs)("div",{className:"mypokedex-box",children:[Object(j.jsx)("h2",{children:"My Pokemon"}),Object(j.jsx)("div",{className:"mypokedex-content",children:c.map((function(e){return Object(j.jsx)("div",{className:"mypokedex-card-box",children:Object(j.jsxs)("div",{className:"mypokedex-card",children:[Object(j.jsx)("div",{className:"mypokedex-img",children:Object(j.jsx)("img",{src:e.urlImage})}),Object(j.jsxs)("div",{className:"mypokedex-info",children:[Object(j.jsx)("h3",{children:i(e.pokemon)}),Object(j.jsx)("small",{children:i(e.nickname)})]}),Object(j.jsx)("div",{className:"btn btn-release",onClick:l,"data-id":e.nickname,children:"Release"})]})},e.nickname)}))})]})})});var g=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1],s=function(){n(!c)};return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(d,{}),Object(j.jsx)("main",{children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/pokemon-app",children:Object(j.jsx)(f,{loading:s})}),Object(j.jsx)(r.a,{path:"/pokemon-app/detail/:pokemon",children:Object(j.jsx)(v,{loading:s})}),Object(j.jsx)(r.a,{path:"/pokemon-app/mypokemon",children:Object(j.jsx)(k,{loading:s})})]})})]})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),N()}},[[38,1,2]]]);
//# sourceMappingURL=main.cd9a5580.chunk.js.map