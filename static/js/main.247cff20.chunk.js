(this["webpackJsonpdisney-plus-clone"]=this["webpackJsonpdisney-plus-clone"]||[]).push([[0],{49:function(n,e,i){},50:function(n,e,i){},77:function(n,e,i){"use strict";i.r(e);var t,a,r,c,o,s,d=i(3),p=i.n(d),l=i(28),x=i.n(l),b=(i(49),i(14)),j=i(10),g=(i(50),i(5)),h=i(33),m=i.n(h),u=i(39),O=i(6),f=i(11),v=i(25),w=v.a.initializeApp({apiKey:"AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",authDomain:"disneyplus-clone-a33d5.firebaseapp.com",projectId:"disneyplus-clone-a33d5",storageBucket:"disneyplus-clone-a33d5.appspot.com",messagingSenderId:"37918794208",appId:"1:37918794208:web:dbe9842dfe1dda522a4b85",measurementId:"G-DRVLJKWRWG"}).firestore(),y=v.a.auth(),k=new v.a.auth.GoogleAuthProvider,z=(v.a.storage(),w),I=i(22),S=Object(I.b)({name:"user",initialState:{name:"",email:"",photo:""},reducers:{setUserLoginDetails:function(n,e){n.name=e.payload.name,n.email=e.payload.email,n.photo=e.payload.photo},setSignOutState:function(n){n.name=null,n.email=null,n.photo=null}}}),D=S.actions,A=D.setUserLoginDetails,E=D.setSignOutState,L=function(n){return n.user.name},R=function(n){return n.user.photo},T=S.reducer,P=i(2);var G,W,B,C,M=function(){var n=Object(f.b)(),e=Object(f.c)(L),i=Object(f.c)(R),t=Object(j.f)();return Object(d.useEffect)((function(){y.onAuthStateChanged(function(){var e=Object(u.a)(m.a.mark((function e(i){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i&&(n(A({name:i.displayName,email:i.email,photo:i.photoURL})),t.push("/home"));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[]),Object(P.jsxs)(N,{children:[Object(P.jsx)(U,{children:Object(P.jsx)("img",{src:"/images/logo.svg",alt:"Disney+"})}),e?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(F,{children:[Object(P.jsxs)("a",{children:[Object(P.jsx)("img",{src:"/images/home-icon.svg",alt:""}),Object(P.jsx)("span",{children:"HOME"})]}),Object(P.jsxs)("a",{children:[Object(P.jsx)("img",{src:"/images/search-icon.svg",alt:""}),Object(P.jsx)("span",{children:"Search"})]}),Object(P.jsxs)("a",{children:[Object(P.jsx)("img",{src:"images/watchlist-icon.svg",alt:""}),Object(P.jsx)("span",{children:"WATCHLIST"})]}),Object(P.jsxs)("a",{children:[Object(P.jsx)("img",{src:"/images/original-icon.svg",alt:""}),Object(P.jsx)("span",{children:"ORIGINALS"})]}),Object(P.jsxs)("a",{children:[Object(P.jsx)("img",{src:"/images/series-icon.svg",alt:""}),Object(P.jsx)("span",{children:"SERIES"})]})]}),Object(P.jsx)(H,{onClick:function(){y.signOut().then((function(){n(E()),t.push("/")}))},src:i,alt:""})]}):Object(P.jsx)(X,{children:Object(P.jsx)(J,{onClick:function(){y.signInWithPopup(k).then((function(e){var i=e.user;n(A({name:i.displayName,email:i.email,photo:i.photoURL})),t.push("/home")}))},children:"Login"})})]})},N=O.a.nav(t||(t=Object(g.a)(["\n  height: 70px;\n  background: #090b13;\n  display: flex;\n  align-items: center;\n  padding: 0 36px;\n  overflow-x: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),U=O.a.a(a||(a=Object(g.a)(["\n  padding: 0;\n  width: 80px;\n  margin-top: 4px;\n  max-height: 70px;\n  font-size: 0;\n  display: inline-block;\n\n  img {\n    display: block;\n    width: 100%;\n  }\n  @media (max-width: 768px) {\n    padding: 0;\n    width: 80px;\n    margin-top: 4px;\n    max-height: 70px;\n    font-size: 0;\n    display: inline-block;\n    img {\n      display: block;\n      width: 100%;\n    }\n  }\n"]))),J=O.a.div(r||(r=Object(g.a)(["\n  border: 1px solid #f9f9f9;\n  padding: 10px 18px;\n  border-radius: 5px;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n\n  background-color: rgba(0, 0, 0, 0.8);\n  cursor: pointer;\n  transition: all 0.5s ease 0s;\n  &:hover {\n    background-color: #f9f9f9;\n    color: #000;\n    border-color: transparent;\n    transform: scale(1.025) translateY(-10px);\n  }\n"]))),X=O.a.div(c||(c=Object(g.a)(["\n  display: flex;\n  justify-content: flex-end;\n  flex: 1;\n"]))),F=O.a.div(o||(o=Object(g.a)(['\n  display: flex;\n  flex: 1;\n  margin-left: 20px;\n  align-items: center;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 0 12px;\n    cursor: pointer;\n\n    img {\n      height: 20px;\n    }\n    span {\n      font-size: 13px;\n      letter-spacing: 1.42px;\n      position: relative;\n      &:after {\n        content: "";\n        height: 2px;\n        background: white;\n        position: absolute;\n        right: 0;\n        left: 0;\n        bottom: -5px;\n        opacity: 0;\n        transform: scaleX(0);\n        transform-origin: center;\n        transition: all 0.5s cubic-bezier(0.25, 0.45, 0.46, 0.94) 0s;\n      }\n    }\n    &:hover {\n      span:after {\n        transform: scaleX(1);\n        opacity: 1;\n      }\n    }\n    @media (max-width: 768px) {\n      float: none;\n      width: 100%;\n    }\n  }\n']))),H=O.a.img(s||(s=Object(g.a)(["\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  cursor: pointer;\n  @media (max-width: 768px) {\n    width: 50px;\n    height: 50px;\n  }\n"]))),Y=i(18),K=i(26),V=(i(60),i(61),i(43)),$=i.n(V),Q=Object(O.a)($.a)(G||(G=Object(g.a)(["\n  margin-top: 20px;\n\n  & > button {\n    opacity: 0;\n    height: 100%;\n    width: 5vw;\n    z-index: 1;\n\n    &:hover {\n      opacity: 1;\n      transition: opacity 0.2s ease 0s;\n    }\n  }\n\n  ul li button {\n    &:before {\n      font-size: 10px;\n      color: rgb(150, 158, 171);\n    }\n  }\n\n  li.slick-active button:before {\n    color: white;\n  }\n\n  .slick-list {\n    overflow: initial;\n  }\n\n  .slick-prev {\n    left: -75px;\n  }\n\n  .slick-next {\n    right: -75px;\n  }\n"]))),q=O.a.div(W||(W=Object(g.a)(["\n  border-radius: 4px;\n  cursor: pointer;\n  position: relative;\n\n  a {\n    border-radius: 4px;\n    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n      rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    cursor: pointer;\n    display: block;\n    position: relative;\n    padding: 4px;\n\n    img {\n      width: 100%;\n      height: 100%;\n    }\n\n    &:hover {\n      padding: 0;\n      border: 4px solid rgba(249, 249, 249, 0.8);\n      transition-duration: 300ms;\n    }\n  }\n"]))),Z=function(n){return Object(P.jsxs)(Q,Object(Y.a)(Object(Y.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0}),{},{children:[Object(P.jsx)(q,{children:Object(P.jsx)("a",{children:Object(P.jsx)("img",{src:"/"})})}),Object(P.jsx)(q,{children:Object(P.jsx)("img",{src:"/images/slider-scales.jpg",alt:""})}),Object(P.jsx)(q,{children:Object(P.jsx)("a",{children:Object(P.jsx)("img",{src:"/images/slider-badag.jpg",alt:""})})}),Object(P.jsx)(q,{children:Object(P.jsx)("a",{children:Object(P.jsx)("img",{src:"/images/slider-scales.jpg",alt:""})})})]}))};var _,nn,en,tn,an,rn,cn,on,sn,dn,pn,ln,xn,bn=function(){return Object(P.jsxs)(jn,{children:[Object(P.jsxs)(gn,{children:[Object(P.jsx)("img",{src:"/images/viewers-disney.png",alt:""}),Object(P.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(P.jsx)("source",{src:"/videos/1564674844-disney.mp4",type:"video/mp4"})})]}),Object(P.jsxs)(gn,{children:[Object(P.jsx)("img",{src:"/images/viewers-pixar.png",alt:""}),Object(P.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(P.jsx)("source",{src:"/videos/1564676714-pixar.mp4",type:"video/mp4"})})]}),Object(P.jsxs)(gn,{children:[Object(P.jsx)("img",{src:"/images/viewers-marvel.png",alt:""}),Object(P.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(P.jsx)("source",{src:"/videos/1564676115-marvel.mp4",type:"video/mp4"})})]}),Object(P.jsxs)(gn,{children:[Object(P.jsx)("img",{src:"/images/viewers-starwars.png",alt:""}),Object(P.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(P.jsx)("source",{src:"/videos/1608229455-star-wars.mp4",type:"video/mp4"})})]}),Object(P.jsxs)(gn,{children:[Object(P.jsx)("img",{src:"/images/viewers-national.png",alt:""})," ",Object(P.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(P.jsx)("source",{src:"/videos/1564676296-national-geographic.mp4",type:"video/mp4"})})]})]})},jn=O.a.div(B||(B=Object(g.a)(["\n  margin-top: 30px;\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  grid-gap: 25px;\n  padding: 30px 0px 26px;\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n"]))),gn=O.a.div(C||(C=Object(g.a)(["\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 72%) 0px 16px 10px -10px;\n  padding-top: 56.25%;\n  cursor: pointer;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0, 46, 0.45, 0.94);\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    position: absolute;\n    top: 0px;\n    transition: opacity 500ms ease-in-out 0s;\n    z-index: 1;\n  }\n  video {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0px;\n    opacity: 0;\n    z-index: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 /72%) 0px 40px 56px -16px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.7);\n\n    video {\n      opacity: 1;\n    }\n  }\n"]))),hn=Object(I.b)({name:"movie",initialState:{recommend:null,newDisney:null,original:null,trending:null},reducers:{setMovies:function(n,e){n.recommend=e.payload.recommend,n.newDisney=e.payload.newDisney,n.original=e.payload.original,n.trending=e.payload.trending}}}),mn=hn.actions.setMovies,un=function(n){return n.movie.recommend},On=function(n){return n.movie.newDisney},fn=function(n){return n.movie.original},vn=function(n){return n.movie.trending},wn=hn.reducer,yn=function(n){var e=Object(f.c)(un);return console.log(e,":\ud83d\udee2\ufe0f"),Object(P.jsxs)(kn,{children:[Object(P.jsx)("h4",{children:"Recommended for You"}),Object(P.jsx)(zn,{children:e&&e.map((function(n,e){return Object(P.jsx)(In,{children:Object(P.jsx)(b.b,{to:"/detail/"+n.id,children:Object(P.jsx)("img",{src:n.cardImg,alt:n.title})})},e)}))})]})},kn=O.a.div(_||(_=Object(g.a)([""]))),zn=O.a.div(nn||(nn=Object(g.a)(["\n  display: grid;\n  grid-gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),In=O.a.div(en||(en=Object(g.a)(["\n  overflow: hidden;\n  border-radius: 10px;\n  overflow: hidden;\n  border: 4px solid rgba(249, 249, 249, 0.1);\n  cursor: pointer;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 72%) 0px 16px 10px -10px;\n  transition: all 250ms cubic-bezier(0.25, 0, 46, 0.45, 0.94);\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transition: all 0.5s;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 /72%) 0px 40px 56px -16px;\n    transform: scale(1.02);\n    border-color: rgba(249, 249, 249, 0.7);\n  }\n"]))),Sn=O.a.div(tn||(tn=Object(g.a)(["\n  padding: 0 0 26px;\n"]))),Dn=O.a.div(an||(an=Object(g.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),An=O.a.div(rn||(rn=Object(g.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),En=function(n){var e=Object(f.c)(On);return Object(P.jsxs)(Sn,{children:[Object(P.jsx)("h4",{children:"New to Disney+"}),Object(P.jsx)(Dn,{children:e&&e.map((function(n,e){return Object(P.jsxs)(An,{children:[n.id,Object(P.jsx)(b.b,{to:"/detail/"+n.id,children:Object(P.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},Ln=function(n){var e=Object(f.c)(fn);return console.log(e,":\ud83d\udee2\ufe0f"),Object(P.jsxs)(Rn,{children:[Object(P.jsx)("h4",{children:"Originals"}),Object(P.jsx)(Tn,{children:e&&e.map((function(n,e){return Object(P.jsx)(Pn,{children:Object(P.jsx)(b.b,{to:"/detail/"+n.id,children:Object(P.jsx)("img",{src:n.cardImg,alt:n.title})})},e)}))})]})},Rn=O.a.div(cn||(cn=Object(g.a)([""]))),Tn=O.a.div(on||(on=Object(g.a)(["\n  display: grid;\n  grid-gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),Pn=O.a.div(sn||(sn=Object(g.a)(["\n  overflow: hidden;\n  border-radius: 10px;\n  overflow: hidden;\n  border: 4px solid rgba(249, 249, 249, 0.1);\n  cursor: pointer;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 72%) 0px 16px 10px -10px;\n  transition: all 250ms cubic-bezier(0.25, 0, 46, 0.45, 0.94);\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transition: all 0.5s;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 /72%) 0px 40px 56px -16px;\n    transform: scale(1.02);\n    border-color: rgba(249, 249, 249, 0.7);\n  }\n"]))),Gn=function(n){var e=Object(f.c)(vn);return console.log(e,":\ud83d\udd25"),Object(P.jsxs)(Wn,{children:[Object(P.jsx)("h4",{children:"Trending"}),Object(P.jsx)(Bn,{children:e&&e.map((function(n,e){return Object(P.jsx)(Cn,{children:Object(P.jsx)(b.b,{to:"/detail/"+n.id,children:Object(P.jsx)("img",{src:n.cardImg,alt:n.title})})},e)}))})]})},Wn=O.a.div(dn||(dn=Object(g.a)([""]))),Bn=O.a.div(pn||(pn=Object(g.a)(["\n  display: grid;\n  grid-gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),Cn=O.a.div(ln||(ln=Object(g.a)(["\n  overflow: hidden;\n  border-radius: 10px;\n  overflow: hidden;\n  border: 4px solid rgba(249, 249, 249, 0.1);\n  cursor: pointer;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 72%) 0px 16px 10px -10px;\n  transition: all 250ms cubic-bezier(0.25, 0, 46, 0.45, 0.94);\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transition: all 0.5s;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 /72%) 0px 40px 56px -16px;\n    transform: scale(1.02);\n    border-color: rgba(249, 249, 249, 0.7);\n  }\n"])));var Mn,Nn,Un,Jn,Xn,Fn,Hn,Yn,Kn,Vn,$n,Qn,qn,Zn,_n,ne,ee=function(){var n=Object(f.b)(),e=Object(f.b)(L),i=[],t=[],a=[],r=[];return Object(d.useEffect)((function(){console.log("hello"),z.collection("movies").onSnapshot((function(e){e.docs.map((function(n){switch(console.log(i),n.data().type){case"recommend":i=[].concat(Object(K.a)(i),[Object(Y.a)({id:n.id},n.data())]);break;case"new":t=[].concat(Object(K.a)(t),[Object(Y.a)({id:n.id},n.data())]);break;case"original":a=[].concat(Object(K.a)(a),[Object(Y.a)({id:n.id},n.data())]);break;case"trending":r=[].concat(Object(K.a)(r),[Object(Y.a)({id:n.id},n.data())])}})),n(mn({recommend:i,newDisney:t,original:a,trending:r}))}))}),[e]),Object(P.jsxs)(ie,{children:[Object(P.jsx)(Z,{}),Object(P.jsx)(bn,{}),Object(P.jsx)(yn,{}),Object(P.jsx)(En,{}),Object(P.jsx)(Ln,{}),Object(P.jsx)(Gn,{})]})},ie=O.a.main(xn||(xn=Object(g.a)(['\n  min-height: calc(100vh - 70px);\n  padding: 0 calc(3.5vw + 5px);\n  position: relative;\n  &::before {\n    content: "";\n    background: url("/images/home-background.png") center center / cover\n      no-repeat fixed;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n  }\n']))),te=i(44),ae=function(){var n=Object(j.g)().id,e=Object(d.useState)(),i=Object(te.a)(e,2),t=i[0],a=i[1];return Object(d.useEffect)((function(){z.collection("movies").doc(n).get().then((function(n){n.exists?a(n.data()):console.log("no such document in firebase \ud83d\udd25")}))}),[n]),Object(P.jsx)(re,{children:t&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(ce,{children:Object(P.jsx)("img",{src:t.backgroundImg,alt:""})}),Object(P.jsx)(oe,{children:Object(P.jsx)("img",{src:t.titleImg,alt:""})}),Object(P.jsxs)(se,{children:[Object(P.jsxs)(de,{children:[Object(P.jsx)("img",{src:"/images/play-icon-black.png",alt:""}),Object(P.jsx)("span",{children:"Play"})]}),Object(P.jsxs)(pe,{children:[Object(P.jsx)("img",{src:"/images/play-icon-white.png",alt:""}),Object(P.jsx)("span",{children:"Trailer"})]}),Object(P.jsx)(le,{children:Object(P.jsx)("span",{children:"+"})}),Object(P.jsx)(xe,{children:Object(P.jsx)("img",{src:"/images/group-icon.png",alt:""})})]}),Object(P.jsx)(je,{children:t.subTitle}),Object(P.jsx)(be,{children:t.description})]})})},re=O.a.div(Mn||(Mn=Object(g.a)(["\n  min-height: calc(100vh - 70px);\n  padding: 0 calc(3.5vh + 5px);\n  position: relative;\n"]))),ce=O.a.div(Nn||(Nn=Object(g.a)(["\n  left: 0px;\n  opacity: 0.8;\n  position: fixed;\n  right: 0px;\n  top: 0px;\n  z-index: -1;\n\n  img {\n    width: 100vw;\n    height: 100vh;\n\n    @media (max-width: 768px) {\n      width: 100vw;\n      height: 100vh;\n      object-position: cover;\n    }\n  }\n"]))),oe=O.a.div(Un||(Un=Object(g.a)(["\n  height: 30vh;\n  width: 35vw;\n  min-height: 170px;\n  min-width: 200px;\n  img {\n    height: 100%;\n    width: 100%;\n    object-fit: contain;\n  }\n"]))),se=O.a.div(Jn||(Jn=Object(g.a)(["\n  display: flex;\n  align-items: center;\n"]))),de=O.a.button(Xn||(Xn=Object(g.a)(["\n  font-size: 15px;\n  margin: 0px 22px 0px 0px;\n  padding: 0px 24px;\n  height: 56px;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  letter-spacing: 1.8px;\n  text-align: center;\n  text-transform: uppercase;\n  background: rgb (249, 249, 249, 0.1);\n  border: none;\n  color: rgb(0, 0, 0);\n  img {\n    width: 32px;\n  }\n  &:hover {\n    background: rgb(198, 198, 198);\n  }\n  @media (max-width: 768px) {\n    height: 45px;\n    padding: 0px 12px;\n    font-size: 12px;\n    margin: 0px 10px 0px 0px;\n\n    img {\n      width: 25px;\n    }\n  }\n"]))),pe=Object(O.a)(de)(Fn||(Fn=Object(g.a)(["\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgb(249, 249, 249);\n  color: rgb(249, 249, 249);\n  cursor: pointer;\n  &:hover {\n    color: black;\n  }\n"]))),le=O.a.button(Hn||(Hn=Object(g.a)(["\n  margin-right: 18px;\n  width: 44px;\n  height: 44px;\n  display: flex;\n  border-radius: 50%;\n  align-items: center;\n  justify-content: center;\n  border: 2px double white;\n  background: rgba(0, 0, 0, 0.6);\n  cursor: pointer;\n  span {\n    font-size: 30px;\n    color: white;\n  }\n"]))),xe=Object(O.a)(le)(Yn||(Yn=Object(g.a)(["\n  background: rgba(0, 0, 0);\n"]))),be=O.a.div(Kn||(Kn=Object(g.a)(["\n  margin-top: 20px;\n  font-size: 20px;\n  font-weight: 500;\n  color: rgb(249, 249, 249);\n  padding: 16px 0px;\n  line-height: 1.4;\n  @media (max-width: 768px) {\n    font-size: 14px;\n  }\n"]))),je=O.a.div(Vn||(Vn=Object(g.a)(["\n  margin-top: 20px;\n  color: rgb(249, 249, 249);\n  font-size: 15px;\n  min-height: 20px;\n  @media (max-width: 768px) {\n    font-size: 12px;\n  }\n"])));var ge=function(){return Object(P.jsx)(he,{children:Object(P.jsxs)(me,{children:[Object(P.jsx)(ue,{src:"/images/cta-logo-one.svg",alt:""}),Object(P.jsx)(Oe,{children:"GET ALL THERE"}),Object(P.jsx)(fe,{children:"Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1."}),Object(P.jsx)(ve,{src:"/images/cta-logo-two.png"})]})})},he=O.a.div($n||($n=Object(g.a)(['\n  position: relative;\n  min-height: calc(100vh - 70px);\n  padding: 0 calc(3.5vh + 5px);\n  overflow: hidden;\n  display: flex;\n  align-items: top;\n  justify-content: center;\n\n  &:before {\n    content: "";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-image: url("/images/login-background.jpg");\n    background-position: top;\n    background-size: cover;\n    background-repeat: no-repeat;\n    z-index: -1;\n    opacity: 0.6;\n  }\n']))),me=O.a.div(Qn||(Qn=Object(g.a)(["\n  max-width: 700px;\n  padding: 80px 40px;\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 100px;\n  align-items: center;\n"]))),ue=O.a.img(qn||(qn=Object(g.a)([""]))),Oe=O.a.a(Zn||(Zn=Object(g.a)(["\n  cursor: pointer;\n  background-color: #0403ee;\n  width: 100%;\n  padding: 18px 0;\n  text-align: center;\n  font-weight: bold;\n  border-radius: 100px;\n  font-size: 18px;\n  transition: all 0.5s;\n  letter-spacing: 1.4px;\n  margin-top: 12px;\n  margin-bottom: 10px;\n  &:hover {\n    background-color: #0063e5;\n  }\n"]))),fe=O.a.div(_n||(_n=Object(g.a)(["\n  margin-top: 10px;\n  font-size: 11px;\n  letter-spacing: 1.3px;\n  line-height: 1.5;\n  text-align: center;\n"]))),ve=O.a.img(ne||(ne=Object(g.a)(["\n  margin-top: 20px;\n  width: 90%;\n"])));var we=function(){return Object(P.jsx)("div",{className:"App",children:Object(P.jsxs)(b.a,{children:[Object(P.jsx)(M,{}),Object(P.jsxs)(j.c,{children:[Object(P.jsx)(j.a,{exact:!0,path:"/",children:Object(P.jsx)(ge,{})}),Object(P.jsx)(j.a,{path:"/detail/:id",children:Object(P.jsx)(ae,{})}),Object(P.jsx)(j.a,{path:"/home",children:Object(P.jsx)(ee,{})})]})]})})},ye=Object(I.a)({reducer:{movie:wn,user:T}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));x.a.render(Object(P.jsx)(p.a.StrictMode,{children:Object(P.jsx)(f.a,{store:ye,children:Object(P.jsx)(we,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[77,1,2]]]);
//# sourceMappingURL=main.247cff20.chunk.js.map