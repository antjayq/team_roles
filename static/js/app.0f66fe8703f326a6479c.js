webpackJsonp([0],{"0OK6":function(e,t){},"2Skq":function(e,t){},"69Y0":function(e,t){},"BmL+":function(e,t,n){e.exports=n.p+"static/img/RoleImage - Resource-Investigator.b629a99.jpg"},Cjfw:function(e,t,n){e.exports=n.p+"static/img/RoleImage - Shaper.60ddd86.jpg"},LwoH:function(e,t,n){e.exports=n.p+"static/img/RoleImage - Implementer.dd2e83f.jpg"},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW");window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("return-to-top").style.display="block":document.getElementById("return-to-top").style.display="none"};var a={name:"App",methods:{topFunction:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),e._v(" "),n("a",{attrs:{id:"return-to-top"},on:{click:e.topFunction}},[n("i",[e._v("⇧")])])],1)},staticRenderFns:[]};var s=n("VU/8")(a,r,!1,function(e){n("2Skq")},null,null).exports,i=n("/ocq"),l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return 0!=e.teamRoles.filter(function(e){return 0==e.backstage}).length?n("div",{attrs:{id:"belbin-matrix"}},e._l(e.teamRoles,function(e){return n("img",{key:"icon_"+e.id,staticClass:"role_icon",class:{backstage:e.backstage},attrs:{alt:e.name,src:e.src}})})):n("div",{attrs:{id:"belbin-matrix"}},e._l(e.teamRoles,function(e){return n("img",{key:"icon_"+e.id,staticClass:"role_icon",attrs:{alt:e.name,src:e.src}})}))},staticRenderFns:[]};var c={name:"TeamRoles",components:{matrix:n("VU/8")({name:"BelbinMatrix",props:["teamRoles"]},l,!1,function(e){n("yG6d")},"data-v-771044ab",null).exports},methods:{next:function(e){e.shown=!0,this.question_counter+=1},swipeleft:function(e){e.checked=!0,this.next(e)},swiperight:function(e){e.checked=!1,this.next(e)},num_questions:function(e){return this.role_questions.filter(function(t){return t.role===e}).length},tally:function(e){return this.role_questions.filter(function(t){return t.role===e&&t.checked}).length},show:function(e,t){var n=this.team_roles.find(function(t){return t.id===e});n.tally=t,n.backstage=t<this.num_questions(e)/2},shuffle:function(e){for(var t,n,o=e.length;0!==o;)n=Math.floor(Math.random()*o),t=e[o-=1],e[o]=e[n],e[n]=t;return e}},computed:{all_shown:function(){return 0===this.role_questions.filter(function(e){return!1===e.shown}).length},suggestions:function(){var e=i18next.t("result.suggestion.opening"),t=this.team_roles.filter(function(e){return!0===e.backstage});if(0===t.length)return i18next.t("suggestion.godlike");for(var n=0;n<t.length;n++)e+="\n\n - "+t[n].suggest;return e},shuffled_role_questions:function(){return this.shuffle(this.role_questions)},tally_innovator:function(){return this.tally("innovator")},tally_explorer:function(){return this.tally("explorer")},tally_analyst:function(){return this.tally("analyst")},tally_coordinator:function(){return this.tally("coordinator")},tally_implementer:function(){return this.tally("implementer")},tally_expert:function(){return this.tally("expert")},tally_driver:function(){return this.tally("driver")},tally_teammate:function(){return this.tally("teammate")},tally_proofreader:function(){return this.tally("closer")}},watch:{tally_innovator:function(e){this.show("innovator",e)},tally_explorer:function(e){this.show("explorer",e)},tally_analyst:function(e){this.show("analyst",e)},tally_coordinator:function(e){this.show("coordinator",e)},tally_implementer:function(e){this.show("implementer",e)},tally_expert:function(e){this.show("expert",e)},tally_driver:function(e){this.show("driver",e)},tally_teammate:function(e){this.show("teammate",e)},tally_proofreader:function(e){this.show("closer",e)}},data:function(){return{localized:{title:i18next.t("hero-content.page-title"),yes:i18next.t("general.yes"),no:i18next.t("general.no"),yourEmail:i18next.t("support.your-email")},question_counter:1,team_roles:[{id:"innovator",name:i18next.t("team-roles.innovator.name"),tally:0,backstage:!0,src:n("V/Lb"),comment:i18next.t("team-roles.innovator.comment"),suggest:i18next.t("team-roles.innovator.suggest")},{id:"explorer",name:i18next.t("team-roles.explorer.name"),tally:0,backstage:!0,src:n("BmL+"),comment:i18next.t("team-roles.explorer.comment"),suggest:i18next.t("team-roles.explorer.suggest")},{id:"analyst",name:i18next.t("team-roles.analyst.name"),tally:0,backstage:!0,src:n("ioF0"),comment:i18next.t("team-roles.analyst.comment"),suggest:i18next.t("team-roles.analyst.suggest")},{id:"implementer",name:i18next.t("team-roles.implementer.name"),tally:0,backstage:!0,src:n("LwoH"),comment:i18next.t("team-roles.implementer.comment"),suggest:i18next.t("team-roles.implementer.suggest")},{id:"coordinator",name:i18next.t("team-roles.coordinator.name"),tally:0,backstage:!0,src:n("wu0A"),comment:i18next.t("team-roles.coordinator.comment"),suggest:i18next.t("team-roles.coordinator.suggest")},{id:"expert",name:i18next.t("team-roles.expert.name"),tally:0,backstage:!0,src:n("NgQa"),comment:i18next.t("team-roles.expert.comment"),suggest:i18next.t("team-roles.expert.suggest")},{id:"driver",name:i18next.t("team-roles.driver.name"),tally:0,backstage:!0,src:n("Cjfw"),comment:i18next.t("team-roles.driver.comment"),suggest:i18next.t("team-roles.driver.suggest")},{id:"teammate",name:i18next.t("team-roles.teammate.name"),tally:0,backstage:!0,src:n("g2PF"),comment:i18next.t("team-roles.teammate.comment"),suggest:i18next.t("team-roles.teammate.suggest")},{id:"closer",name:i18next.t("team-roles.closer.name"),tally:0,backstage:!0,src:n("ToK4"),comment:i18next.t("team-roles.closer.comment"),suggest:i18next.t("team-roles.closer.suggest")}],role_questions:[{shown:!1,checked:!1,role:"innovator",text:"I am creative, imaginative, free-thinking."},{shown:!1,checked:!1,role:"innovator",text:"I am a wellspring of original ideas."},{shown:!1,checked:!1,role:"innovator",text:"I am good at solving difficult problems in unconventional ways."},{shown:!1,checked:!1,role:"innovator",text:"I prefer to work apart from the team."},{shown:!1,checked:!1,role:"innovator",text:"I tend to ignore less important things."},{shown:!1,checked:!1,role:"explorer",text:"I am outgoing, enthusiastic, communicative."},{shown:!1,checked:!1,role:"explorer",text:"I can be a salesperson who is the source of vitality."},{shown:!1,checked:!1,role:"explorer",text:"I use my curiosity and inquisitive nature to discover ideas and bring back to the team."},{shown:!1,checked:!1,role:"explorer",text:"I explore opportunities and develops contacts."},{shown:!1,checked:!1,role:"explorer",text:"I have a tendency to be optimistic."},{shown:!1,checked:!1,role:"explorer",text:"I am easily diverted."},{shown:!1,checked:!1,role:"explorer",text:"Others are often receptive to me and my thoughts."},{shown:!1,checked:!1,role:"analyst",text:"I am sober, strategic, discerning"},{shown:!1,checked:!1,role:"analyst",text:"I seek all options and judge accurately."},{shown:!1,checked:!1,role:"analyst",text:"I provide a logical eye, making impartial judgments where required and weighs up the team's options in a dispassionate way."},{shown:!1,checked:!1,role:"analyst",text:"I provide critique with the expectation of improving performance."},{shown:!1,checked:!1,role:"analyst",text:"I have a tendency to make decisions slowly."},{shown:!1,checked:!1,role:"coordinator",text:"I am a mature, confident, excellent chairperson."},{shown:!1,checked:!1,role:"coordinator",text:"I am the decision maker and delegator."},{shown:!1,checked:!1,role:"coordinator",text:"I take on the traditional team-leader role."},{shown:!1,checked:!1,role:"coordinator",text:"I can identify talent and clarify goals."},{shown:!1,checked:!1,role:"coordinator",text:"I focus on the team's objectives and draw out team members and delegate work appropriately."},{shown:!1,checked:!1,role:"implementer",text:"I am disciplined, reliable, conservative and efficient."},{shown:!1,checked:!1,role:"implementer",text:"I turn ideas into practical actions and organizes work that needs to be done."},{shown:!1,checked:!1,role:"implementer",text:"I have a tendency to plan a workable strategy and carry it out as efficiently as possible."},{shown:!1,checked:!1,role:"implementer",text:"I tend to resist unproven ideas."},{shown:!1,checked:!1,role:"implementer",text:"I am inflexible and slow to respond to new possibilities."},{shown:!1,checked:!1,role:"implementer",text:"I work systematically and efficiently."},{shown:!1,checked:!1,role:"implementer",text:"I am very well organized."},{shown:!1,checked:!1,role:"expert",text:"I am focused, self-starting and dedicated."},{shown:!1,checked:!1,role:"expert",text:"I provide knowledge & skills in rare supply."},{shown:!1,checked:!1,role:"expert",text:"I bring in-depth knowledge of a key area to the team."},{shown:!1,checked:!1,role:"expert",text:"I have a tendency to overload people with information."},{shown:!1,checked:!1,role:"expert",text:'I tend to overlook or ignore the "big picture".'},{shown:!1,checked:!1,role:"expert",text:"I contribute on a narrow front and dwell on the technicalities."},{shown:!1,checked:!1,role:"driver",text:"I am challenging, dynamic, and thrive on pressure."},{shown:!1,checked:!1,role:"driver",text:"I am the courage to overcome obstacles."},{shown:!1,checked:!1,role:"driver",text:"I bring the competitive drive to ensure that the team keeps moving and does not lose focus or momentum."},{shown:!1,checked:!1,role:"driver",text:"I am prone to provocation, impatience, and sometimes offend peoples’ feelings."},{shown:!1,checked:!1,role:"driver",text:"I could be seen as abrasive."},{shown:!1,checked:!1,role:"driver",text:"I can be aggressive and bad humored in my attempts to get things done."},{shown:!1,checked:!1,role:"teammate",text:"I am co-operative, mild, perceptive and diplomatic."},{shown:!1,checked:!1,role:"teammate",text:"I help the team to gel."},{shown:!1,checked:!1,role:"teammate",text:"I have the versatility to identify the work required and complete it on behalf of the team."},{shown:!1,checked:!1,role:"teammate",text:"I am indecisive in crunch situations and tends to avoid confrontation."},{shown:!1,checked:!1,role:"teammate",text:"I am hesitant to make unpopular decisions."},{shown:!1,checked:!1,role:"closer",text:"I am painstakingly conscientious, anxious."},{shown:!1,checked:!1,role:"closer",text:"I can capture errors and omissions."},{shown:!1,checked:!1,role:"closer",text:"I always meet deadlines and work to highest standards."},{shown:!1,checked:!1,role:"closer",text:"I am very concerned with deadlines."},{shown:!1,checked:!1,role:"closer",text:"I will push the team to make sure the job is completed on time."},{shown:!1,checked:!1,role:"closer",text:"I am a perfectionist."}]}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"homepage"},[e._m(0),e._v(" "),n("div",{staticClass:"content"},[n("matrix",{attrs:{teamRoles:e.team_roles}}),e._v(" "),n("div",{attrs:{id:"role_questions"}},[e._l(e.shuffled_role_questions.filter(function(e){return 0==e.shown}),function(t,o){return n("div",{directives:[{name:"show",rawName:"v-show",value:0==o,expression:"index == 0"}],key:o,staticClass:"role_question"},[n("fieldset",{staticClass:"ui-grid-a"},[n("div",{staticClass:"ui-block-a"},[n("input",{attrs:{type:"button",value:e.localized.yes},on:{click:function(n){e.swipeleft(t)}}})]),e._v(" "),n("div",{staticClass:"ui-block-b"},[n("input",{attrs:{type:"button",value:e.localized.no,"data-theme":"b"},on:{click:function(n){e.swiperight(t)}}})])]),e._v(" "),n("div",{staticClass:"role_question_text"},[e._v(e._s(t.text))]),e._v(" "),n("div",{attrs:{id:"progress-bar"}},[n("div",{style:{width:100*e.question_counter/e.role_questions.length+"%"},attrs:{id:"progress-status"}}),e._v(" "),n("div",{attrs:{id:"progress-stat"}},[e._v("\n            "+e._s(e.question_counter+"/"+e.role_questions.length)+"\n          ")])])])}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.all_shown,expression:"all_shown"}],attrs:{id:"test-result"}},[n("form",{attrs:{action:"https://formspree.io/jq@angelabor.com",method:"POST"}},[n("h3",{attrs:{"data-i18n":"result.title"}}),e._v(" "),n("div",{staticClass:"test-result-text"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.suggestions,expression:"suggestions"}],attrs:{name:"Teammate Suggestions",readonly:"readonly","data-role":"none",rows:"12"},domProps:{value:e.suggestions},on:{input:function(t){t.target.composing||(e.suggestions=t.target.value)}}}),e._v(" "),e._l(e.team_roles,function(t){return t.backstage?e._e():n("div",{key:"comment_"+t.id},[n("img",{staticClass:"role_icon result",attrs:{src:t.src}}),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"team_role.comment"}],attrs:{name:"Team Role: "+t.name,readonly:"readonly","data-role":"none",rows:"5"},domProps:{value:t.comment},on:{input:function(n){n.target.composing||e.$set(t,"comment",n.target.value)}}})])}),e._v(" "),e._l(e.team_roles,function(t){return n("div",{key:"result_"+t.id},[n("input",{attrs:{type:"hidden",name:t.name},domProps:{value:(t.backstage?"Miss":"Pass")+", Score: "+t.tally+"/"+e.num_questions(t.id)}})])})],2),e._v(" "),n("div",{staticClass:"email-data"},[n("input",{attrs:{type:"hidden",name:"_subject","data-i18n":"[value]head.title"}}),e._v(" "),n("input",{attrs:{type:"text",name:"_cc",placeholder:e.localized.yourEmail}}),e._v(" "),n("input",{staticClass:"button",attrs:{type:"submit","data-i18n":"[value]general.send","data-theme":"b"}})])])])],2)],1),e._v(" "),n("br"),e._v(" "),n("p",{attrs:{"data-i18n":"quotes.better"}})])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hero-content"},[n("div",{staticClass:"title"},[n("h1",{attrs:{"data-i18n":"hero-content.page-title"}})]),e._v(" "),n("div",{staticClass:"head-line"},[n("p",{attrs:{"data-i18n":"quotes.diversity"}}),e._v(" "),n("p",{attrs:{"data-i18n":"hero-content.head-line-2"}}),e._v(" "),n("p",{attrs:{"data-i18n":"hero-content.head-line-3"}})])])}]};var d=n("VU/8")(c,m,!1,function(e){n("0OK6")},"data-v-5d0d80da",null).exports,u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"404"},[n("h1",[e._v(e._s(e.msg))])])},staticRenderFns:[]};var h=n("VU/8")({name:"NotFound",data:function(){return{msg:"404 - Page not found"}}},u,!1,function(e){n("69Y0")},"data-v-915bb0ba",null).exports;o.a.use(i.a);var p=new i.a({routes:[{path:"/",name:"TeamRoles",component:d},{path:"/404",name:"NotFound",component:h}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:p,components:{App:s},template:"<App/>"})},NgQa:function(e,t,n){e.exports=n.p+"static/img/RoleImage - Specialist.111b28d.jpg"},ToK4:function(e,t,n){e.exports=n.p+"static/img/RoleImage - Complete-Finisher.cc55849.jpg"},"V/Lb":function(e,t,n){e.exports=n.p+"static/img/RoleImage - Plant.2505f57.jpg"},g2PF:function(e,t,n){e.exports=n.p+"static/img/RoleImage - Teamworker.2eb92ed.jpg"},ioF0:function(e,t,n){e.exports=n.p+"static/img/RoleImage - Monitor-Evaluator.5d59e24.jpg"},wu0A:function(e,t,n){e.exports=n.p+"static/img/RoleImage - Co-ordinator.ad953a2.jpg"},yG6d:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.0f66fe8703f326a6479c.js.map