(this["webpackJsonpway-of-samurai"]=this["webpackJsonpway-of-samurai"]||[]).push([[0],{19:function(e,t,n){e.exports={container:"Users_container__2au3W",item:"Users_item__fDEtC",img:"Users_img__125zs",description:"Users_description__3nKrj",name:"Users_name__2diVe",button:"Users_button__2PPuZ",unfollowedButton:"Users_unfollowedButton__2fyoG",location_status:"Users_location_status__3dHEX",selectedPage:"Users_selectedPage__1FxV5",unSelectedPage:"Users_unSelectedPage__3tOB_"}},24:function(e,t,n){e.exports={header:"Header_header__2n_01",container:"Header_container__1jQ7q",login:"Header_login__16DP3",activeLink:"Header_activeLink__1MFT-"}},29:function(e,t,n){e.exports={container:"ProfileInfo_container__3w906",avatar:"ProfileInfo_avatar__t3aHd",description:"ProfileInfo_description__eppfX",contacts:"ProfileInfo_contacts__2rd_s"}},33:function(e,t,n){e.exports={myPosts:"MyPosts_myPosts__1xy60",btnAddPost:"MyPosts_btnAddPost__b8cJh"}},38:function(e,t,n){e.exports={container:"Login_container__1sApv",errorMessage:"Login_errorMessage__1ODjk"}},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var a=n(8),s=n(3),r=n(20),c={dialogs:[{id:Object(r.a)(),name:"Dimych",url:"https://ict2go.ru/uploads/media/speakers_lid_image/0001/29/thumb_28624_speakers_lid_image_big.jpeg"},{id:Object(r.a)(),name:"Sheldon",url:"https://www.toledoblade.com/image/2015/01/29/ca939,66,2036,1753/People-Jim-Parsons.jpg"},{id:Object(r.a)(),name:"Penny",url:"https://vsthemes.org/uploads/posts/2018-11/73024b2b44_kaley-cuoco.jpg"},{id:Object(r.a)(),name:"Emy",url:"https://pagesix.com/wp-content/uploads/sites/3/2015/04/spl936619_028_105055833.jpg?quality=90&amp;strip=all&amp;w=680&amp;h=356&amp;crop=1g"},{id:Object(r.a)(),name:"Radj",url:"https://img.buzzfeed.com/buzzfeed-static/static/2017-03/27/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-4277-1490629170-2.jpg"},{id:Object(r.a)(),name:"Howard",url:"https://www.film.ru/sites/default/files/people/1565430-815776.jpg"}],messages:[{id:Object(r.a)(),message:"Hi"},{id:Object(r.a)(),message:"How are you"},{id:Object(r.a)(),message:"What is up?"}]},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var n={id:Object(r.a)(),message:t.message};return Object(s.a)(Object(s.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[n])});default:return e}},o=function(e){return{type:"ADD-MESSAGE",message:e}}},55:function(e,t,n){e.exports={profile:"Profile_profile__2Tnl5"}},56:function(e,t,n){e.exports={post:"Post_post__3OpdJ"}},62:function(e,t,n){},9:function(e,t,n){e.exports={nav:"NavBar_nav__2u9Xi",item:"NavBar_item__2rkTy",activeLink:"NavBar_activeLink__13GNe",friendsItems:"NavBar_friendsItems__3AUXs",friendsItem:"NavBar_friendsItem__1qxWD"}},93:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(30),c=n.n(r),i=(n(62),n(9)),o=n.n(i),u=n(10),l=n(5),d=n(1),j=function(e){var t=Object(l.c)((function(e){return e.profilePage.isMe})),n=e.friendsPage.friends.map((function(e){return Object(d.jsx)("div",{className:o.a.friendsItems,children:Object(d.jsxs)("div",{className:o.a.friendsItem,children:[Object(d.jsx)("img",{src:e.url,alt:"logoFriend"}),Object(d.jsx)("div",{children:e.name})]})},e.id)}));return Object(d.jsxs)("nav",{className:o.a.nav,children:[Object(d.jsx)("div",{className:o.a.item,children:Object(d.jsx)(u.b,{activeClassName:o.a.activeLink,to:"/profile",children:t?"Profile - my page":"Profile"})}),Object(d.jsx)("div",{className:o.a.item,children:Object(d.jsx)(u.b,{activeClassName:o.a.activeLink,to:"/dialogs",children:"Messages"})}),Object(d.jsx)("div",{className:o.a.item,children:Object(d.jsx)(u.b,{activeClassName:o.a.activeLink,to:"/users",children:"Users"})}),Object(d.jsx)("div",{className:o.a.item,children:Object(d.jsx)(u.b,{activeClassName:o.a.activeLink,to:"/news",children:"News"})}),Object(d.jsx)("div",{className:o.a.item,children:Object(d.jsx)(u.b,{activeClassName:o.a.activeLink,to:"/music",children:"Music"})}),Object(d.jsx)("div",{className:o.a.item,children:Object(d.jsx)(u.b,{activeClassName:o.a.activeLink,to:"/settings",children:"Settings"})}),Object(d.jsxs)("div",{className:o.a.item,children:[Object(d.jsx)(u.b,{activeClassName:o.a.activeLink,to:"/friends",children:Object(d.jsx)("div",{children:"Friends"})}),n]})]})},b=function(){return Object(d.jsx)("div",{children:"Friends"})},f=function(){return Object(d.jsx)("div",{children:"Music"})},p=n(7),O=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{children:"News"})})},m=function(){return Object(d.jsx)("div",{children:"Settings"})},h=n(2),g=n.n(h),x=n(6),_=n(8),v=n(3),P=n(51),w=n.n(P).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/"}),S={getProfileAPI:function(e){return w.get("profile/".concat(e))},getStatusAPI:function(e){return w.get("profile/status/".concat(e))},updateStatusAPI:function(e){return w.put("profile/status/",{status:e})}},y={getUsersAPI:function(e,t){return w.get("users?page=".concat(e,"&count=").concat(t))},setUnfollowAPI:function(e){return w.delete("follow/".concat(e))},setFollowAPI:function(e){return w.post("follow/".concat(e))}},N={getAuthMeAPI:function(){return w.get("auth/me")},Login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return w.post("/auth/login",{email:e,password:t,rememberMe:n})},Logout:function(){return w.delete("/auth/login")}},E={users:[],pageSize:5,totalCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},C=function(e){return{type:"FOLLOW",id:e}},I=function(e){return{type:"UNFOLLOW",id:e}},k=function(e){return{type:"SET_CURRENT_PAGE",payload:{currentPage:e}}},T=function(e){return{type:"SET_TOGGLE_FETCHING",payload:{isFetching:e}}},A=function(e,t){return{type:"SET_FOLLOWING_IN_PROGRESS",id:t,isFetching:e}},L=function(){var e=Object(x.a)(g.a.mark((function e(t,n,a,s){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(A(!0,t)),e.next=3,a(t);case 3:0===e.sent.data.resultCode&&n(s),n(A(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,s){return e.apply(this,arguments)}}(),M=function(e,t){return function(){var n=Object(x.a)(g.a.mark((function n(a){var s;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(T(!0)),n.next=3,y.getUsersAPI(e,t);case 3:s=n.sent,a(T(!1)),a({type:"SET_USERS",payload:{users:s.data.items}}),a(k(e)),a({type:"SET_TOTAL_USERS_COUNT",payload:{totalCount:s.data.totalCount}});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},U=n.p+"static/media/no_foto.dcc0fe9d.jpeg",F=n(19),z=n.n(F),D=n(57),R={items_per_page:"/ page",jump_to:"Show",jump_to_confirm:"confirm",page:"",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages"},G=(n(93),s.a.memo((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(D.a,{style:{marginTop:"24px",alignSelf:"flex-start"},className:"ant-pagination",showQuickJumper:!0,defaultCurrent:e.currentPage,pageSize:e.pageSize,total:e.totalCount,locale:R,current:e.currentPage,onChange:e.onPageChanged}),e.users.map((function(t){var n="/profile/".concat(t.id);return Object(d.jsx)("div",{className:z.a.container,children:Object(d.jsxs)("div",{className:z.a.item,children:[Object(d.jsx)("div",{className:z.a.item_img,children:Object(d.jsx)(u.b,{to:n,children:Object(d.jsx)("img",{className:z.a.img,src:null!=t.photos.small?t.photos.small:U,alt:"myPhoto"})})}),Object(d.jsxs)("div",{className:z.a.description,children:[Object(d.jsxs)("div",{className:z.a.name,children:[t.name,t.followed?Object(d.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),className:z.a.unfollowedButton,onClick:function(){e.unFollowCallback(t.id)},children:" unfollow"}):Object(d.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),className:z.a.button,onClick:function(){e.followCallback(t.id)},children:"follow"})]}),Object(d.jsxs)("div",{className:z.a.location_status,children:[Object(d.jsxs)("div",{children:["status: '",t.status,"'"]}),Object(d.jsxs)("div",{children:["country: ","u.location.country"]}),Object(d.jsxs)("div",{children:["city: ","u.location.city"]})]})]})]})},t.id)}))]})}))),B=function(){return Object(d.jsx)("img",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"190px",margin:"0 auto"},src:"https://www.blackview.ru/upload/medialibrary/818/8187a44741ec1bc337686b53ce22cc10.gif",alt:"loader"})},H=function(){var e=Object(l.c)((function(e){return e.usersPage})),t=e.users,n=e.pageSize,s=e.totalCount,r=e.currentPage,c=e.isFetching,i=e.followingInProgress,o=Object(l.b)();Object(a.useEffect)((function(){o(M(r,n))}),[o,r,n]);return Object(d.jsx)(d.Fragment,{children:c?Object(d.jsx)(B,{}):Object(d.jsx)(G,{users:t,pageSize:n,totalCount:s,currentPage:r,followCallback:function(e){var t;o((t=e,function(){var e=Object(x.a)(g.a.mark((function e(n){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=y.setFollowAPI,L(t,n,a,C(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},unFollowCallback:function(e){var t;o((t=e,function(){var e=Object(x.a)(g.a.mark((function e(n){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=y.setUnfollowAPI,L(t,n,a,I(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},onPageChanged:function(e){o(M(e,n))},followingInProgress:i})})},W=n(28),J=n(20),q={posts:[{id:Object(J.a)(),post:"Hello",likeCount:10,url:"https://avatars.mds.yandex.net/get-zen_doc/1686199/pub_5e3e6d88e6e8eb5b95da89cf_5e3e6e6b6ffb5072de613bf5/scale_1200"},{id:Object(J.a)(),post:"My name is Alex",likeCount:20,url:"https://avatars.mds.yandex.net/get-zen_doc/1686199/pub_5e3e6d88e6e8eb5b95da89cf_5e3e6e6b6ffb5072de613bf5/scale_1200"},{id:Object(J.a)(),post:"Where are you from?",likeCount:30,url:"https://avatars.mds.yandex.net/get-zen_doc/1686199/pub_5e3e6d88e6e8eb5b95da89cf_5e3e6e6b6ffb5072de613bf5/scale_1200"}],profile:{},status:"",isMe:!1},X=function(e){return{type:"SET_PROFILE_STATUS",status:e}},Z=function(e){return{type:"SET_IS_ME",isMe:e}},Q=n(48),V={friends:[{id:Object(J.a)(),name:"Johnny",url:"http://almode.ru/uploads/posts/2020-07/1593623044_12-p-dzhonni-galeki-16.jpg"},{id:Object(J.a)(),name:"Melissa",url:"https://i.pinimg.com/originals/c6/9c/f4/c69cf4a6e3f5766cc7acc3946bb1bb4a.jpg"},{id:Object(J.a)(),name:"Wil",url:"https://vistapointe.net/images/wil-wheaton-wallpaper-13.jpg"}]},K={id:null,email:null,login:null,isAuth:!1,message:null},Y=function(e,t,n,a){return{type:"SET_USER_DATA",payload:{id:e,email:t,login:n,isAuth:a}}},$=function(e){return{type:"SET_MESSAGES_LOGIN",payload:{message:e}}},ee=function(){return function(){var e=Object(x.a)(g.a.mark((function e(t){var n,a,s,r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getAuthMeAPI();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,s=a.id,r=a.email,c=a.login,t(Y(s,r,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},te=n(53),ne={initialized:!1},ae=n(54),se=Object(W.combineReducers)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:Object(J.a)(),post:t.data,likeCount:0,url:"https://avatars.mds.yandex.net/get-zen_doc/1686199/pub_5e3e6d88e6e8eb5b95da89cf_5e3e6e6b6ffb5072de613bf5/scale_1200"};return Object(v.a)(Object(v.a)({},e),{},{posts:[].concat(Object(_.a)(e.posts),[n])});case"DELETE-POST":return Object(v.a)(Object(v.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.id}))});case"SET-USER-PROFILE":return Object(v.a)(Object(v.a)({},e),{},{profile:t.profile});case"SET_PROFILE_STATUS":return Object(v.a)(Object(v.a)({},e),{},{status:t.status});case"SET_IS_ME":return Object(v.a)(Object(v.a)({},e),{},{isMe:t.isMe});default:return e}},dialogsPage:Q.a,friendsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(v.a)(Object(v.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(v.a)(Object(v.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(v.a)(Object(v.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(v.a)(Object(v.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":case"SET_CURRENT_PAGE":case"SET_TOTAL_USERS_COUNT":case"SET_TOGGLE_FETCHING":return Object(v.a)(Object(v.a)({},e),t.payload);case"SET_FOLLOWING_IN_PROGRESS":return Object(v.a)(Object(v.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(_.a)(e.followingInProgress),[t.id]):e.followingInProgress.filter((function(e){return e!==t.id}))})}return e},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":case"SET_MESSAGES_LOGIN":return Object(v.a)(Object(v.a)({},e),t.payload);default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED":return Object(v.a)(Object(v.a)({},e),{},{initialized:!0});default:return e}}}),re=Object(W.createStore)(se,Object(ae.composeWithDevTools)(Object(W.applyMiddleware)(te.a))),ce=n(55),ie=n.n(ce),oe=n(29),ue=n.n(oe),le=n(18),de=s.a.memo((function(e){var t=Object(a.useState)(!1),n=Object(le.a)(t,2),s=n[0],r=n[1],c=Object(a.useState)(e.status),i=Object(le.a)(c,2),o=i[0],u=i[1];Object(a.useEffect)((function(){u(e.status)}),[e]);return s?Object(d.jsx)("div",{children:Object(d.jsx)("input",{onBlur:function(){r(!1),e.updateStatusCB(o)},autoFocus:!0,value:o,onChange:function(e){u(e.currentTarget.value)},type:"text"})}):Object(d.jsx)("div",{children:Object(d.jsx)("span",{onDoubleClick:function(){r(!0),u(e.status)},children:e.status?"\ud83d\udd89   ".concat(e.status):"no status"})})})),je=s.a.memo((function(e){return Object(d.jsxs)(d.Fragment,{children:[!Object.keys(e.profile).length&&Object(d.jsxs)("span",{children:[Object(d.jsx)(B,{})," not found"]})," ",Object.keys(e.profile).length&&Object(d.jsxs)("div",{className:ue.a.container,children:[Object(d.jsx)("div",{className:ue.a.avatar,children:Object(d.jsx)("img",{src:null!=e.profile.photos.large?e.profile.photos.large:U,alt:"ava"})}),Object(d.jsxs)("div",{className:ue.a.description,children:[Object(d.jsxs)("div",{children:["Name: ",e.profile.fullName]}),e.isMe?Object(d.jsx)(de,{status:e.status,isMe:e.isMe,updateStatusCB:e.updateStatusCB}):Object(d.jsx)("div",{children:Object(d.jsx)("span",{children:e.status?e.status:"no status"})}),Object(d.jsxs)("div",{className:ue.a.contacts,children:["Contacts:",Object(d.jsx)("div",{children:e.profile.contacts.vk}),Object(d.jsx)("div",{children:e.profile.contacts.facebook}),Object(d.jsx)("div",{children:e.profile.contacts.github}),Object(d.jsx)("div",{children:e.profile.contacts.twitter}),Object(d.jsx)("div",{children:e.profile.contacts.instagram})]}),Object(d.jsx)("div",{})]})]})]})})),be=n(33),fe=n.n(be),pe=n(56),Oe=n.n(pe),me=function(e){return Object(d.jsxs)("div",{className:Oe.a.post,children:[Object(d.jsx)("img",{src:e.url,alt:"ava"}),e.post,Object(d.jsx)("div",{children:Object(d.jsxs)("span",{children:["like ",e.likeCount]})})]})},he=n(31),ge=s.a.memo((function(e){var t=Object(he.a)(),n=t.register,a=t.handleSubmit,s=t.formState.errors,r=e.posts.map((function(e){return Object(d.jsx)(me,{post:e.post,likeCount:e.likeCount,url:e.url,id:e.id},e.id)}));return Object(d.jsxs)("div",{className:fe.a.myPosts,children:[Object(d.jsxs)("form",{className:fe.a.container,onSubmit:a((function(t){return e.addNewPost(t.post)})),children:[Object(d.jsx)("input",Object(v.a)({placeholder:"add your post"},n("post",{required:!0}))),s.post&&Object(d.jsx)("span",{children:"This field is empty"}),Object(d.jsx)("input",{value:"send",className:fe.a.btnAddPost,type:"submit"})]}),r]})})),xe=function(){var e=Object(l.c)((function(e){return e.profilePage})).posts,t=Object(l.b)();return Object(d.jsx)(ge,{posts:e,addNewPost:function(e){t(function(e){return{type:"ADD-POST",data:e}}(e))}})},_e=s.a.memo((function(e){return Object(d.jsxs)("div",{className:ie.a.profile,children:[Object(d.jsx)(je,{profile:e.profile,status:e.status,isMe:e.isMe,updateStatusCB:e.updateStatusCB}),Object(d.jsx)(xe,{})]})})),ve=function(){var e=Object(p.f)().userID,t=Object(l.b)(),n=Object(l.c)((function(e){return e.auth})).isAuth,s=Object(l.c)((function(e){return e.auth.id})),r=Object(l.c)((function(e){return e.profilePage.profile})),c=Object(l.c)((function(e){return e.profilePage.status})),i=Object(l.c)((function(e){return e.profilePage.isMe}));return Object(a.useEffect)((function(){!e&&s?(e=s,t(Z(!0))):s?e&&t(Z(!1)):t(Z(!1)),t(function(e){return function(){var t=Object(x.a)(g.a.mark((function t(n){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.getProfileAPI(e);case 2:a=t.sent,console.log(a),n({type:"SET-USER-PROFILE",profile:a.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e)),t(function(e){return function(){var t=Object(x.a)(g.a.mark((function t(n){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.getStatusAPI(e);case 2:a=t.sent,console.log(a),n(X(a.data));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}),[t,e]),n?Object(d.jsx)(_e,{profile:r,status:c,isMe:i,updateStatusCB:function(e){t(function(e){return function(){var t=Object(x.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.updateStatusAPI(e);case 2:0===t.sent.data.resultCode&&n(X(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}}):Object(d.jsx)(p.a,{to:"/login"})},Pe=n(24),we=n.n(Pe),Se=s.a.memo((function(e){return Object(d.jsx)("header",{className:we.a.header,children:Object(d.jsxs)("div",{className:we.a.container,children:[Object(d.jsx)("img",{src:"https://cdn.icon-icons.com/icons2/832/PNG/512/vk_icon-icons.com_66681.png",alt:"logo"}),Object(d.jsx)("div",{children:e.isAuth?Object(d.jsxs)("div",{className:we.a.login,children:[Object(d.jsx)(u.b,{activeClassName:we.a.activeLink,to:"/login",children:e.login}),Object(d.jsx)("button",{onClick:e.logoutCB,children:"logout"})]}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(u.b,{activeClassName:we.a.activeLink,to:"/login",children:"Login"})})})]})})})),ye=function(e){var t=Object(l.c)((function(e){return e.auth})),n=t.id,a=t.email,s=t.login,r=t.isAuth;return Object(d.jsx)(Se,{id:n,email:a,login:s,isAuth:r,logoutCB:e.logoutCB})},Ne=n(38),Ee=n.n(Ne),Ce=s.a.memo((function(){return Object(l.c)((function(e){return e.auth})).isAuth?Object(d.jsx)(p.a,{to:"/profile"}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"LOGIN"}),Object(d.jsx)(Ie,{})]})})),Ie=s.a.memo((function(){var e=Object(l.c)((function(e){return e.auth})).message,t=Object(l.b)(),n=Object(he.a)({mode:"onChange"}),a=n.register,s=n.handleSubmit,r=n.formState.errors;return Object(d.jsxs)("form",{className:Ee.a.container,onSubmit:s((function(e){return t((n=e.email,a=e.password,s=e.rememberMe,function(){var e=Object(x.a)(g.a.mark((function e(t){var r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.Login(n,a,s);case 2:r=e.sent,c=r.data.messages,0===r.data.resultCode?(t(ee()),t($(null))):1===r.data.resultCode&&t($(c[0]));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var n,a,s})),children:[Object(d.jsx)("input",Object(v.a)({placeholder:"email"},a("email",{required:!0,maxLength:30}))),r.email&&Object(d.jsx)("span",{children:"field is errored"}),Object(d.jsx)("input",Object(v.a)({type:"password",placeholder:"password"},a("password",{required:!0}))),r.password&&Object(d.jsx)("span",{children:"field is errored"}),Object(d.jsx)("input",Object(v.a)({type:"checkbox"},a("rememberMe"))),e&&Object(d.jsx)("div",{className:Ee.a.errorMessage,children:e}),Object(d.jsx)("input",{value:"Sign in",type:"submit"})]})})),ke=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,96)).then((function(e){return{default:e.DialogsContainer}}))})),Te=function(e){Object(l.c)((function(e){return e.app})).initialized;var t=e.store.friendsPage,n=Object(l.b)();return Object(a.useEffect)((function(){n((function(e){var t=e(ee());Promise.all([t]).then((function(){e({type:"SET_INITIALIZED"})}))}))}),[n]),Object(d.jsxs)("div",{className:"app-wrapper",children:[Object(d.jsx)(ye,{logoutCB:function(){n(function(){var e=Object(x.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.Logout();case 2:0===e.sent.data.resultCode&&(t(Y(null,null,null,!1)),t($(null)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}),Object(d.jsx)(j,{friendsPage:t}),Object(d.jsxs)("div",{className:"app-wrapper-content",children:[Object(d.jsx)(p.b,{path:"/profile",render:function(){return Object(d.jsx)(ve,{})}}),Object(d.jsx)(p.b,{path:"/profile/:userID?",render:function(){return Object(d.jsx)(ve,{})}}),Object(d.jsx)(p.b,{path:"/dialogs/",render:function(){return Object(d.jsx)(a.Suspense,{fallback:Object(d.jsx)("div",{children:"...loading"}),children:Object(d.jsx)(ke,{})})}}),Object(d.jsx)(p.b,{path:"/users",render:function(){return Object(d.jsx)(H,{})}}),Object(d.jsx)(p.b,{path:"/news",render:function(){return Object(d.jsx)(O,{})}}),Object(d.jsx)(p.b,{path:"/music",render:function(){return Object(d.jsx)(f,{})}}),Object(d.jsx)(p.b,{path:"/settings",render:function(){return Object(d.jsx)(m,{})}}),Object(d.jsx)(p.b,{path:"/friends",render:function(){return Object(d.jsx)(b,{})}}),Object(d.jsx)(p.b,{path:"/login",render:function(){return Object(d.jsx)(Ce,{})}})]})]})},Ae=function(){return Object(d.jsx)(u.a,{children:Object(d.jsx)(l.a,{store:re,children:Object(d.jsx)(Te,{store:re.getState()})})})};c.a.render(Object(d.jsx)(Ae,{}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.4f78fbcd.chunk.js.map