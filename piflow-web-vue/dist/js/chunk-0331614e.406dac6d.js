(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0331614e"],{8418:function(t,e,a){"use strict";var n=a("c04e"),s=a("9bf2"),o=a("5c6c");t.exports=function(t,e,a){var i=n(e);i in t?s.f(t,i,o(0,a)):t[i]=a}},"99af":function(t,e,a){"use strict";var n=a("23e7"),s=a("d039"),o=a("e8b5"),i=a("861d"),c=a("7b0b"),l=a("50c4"),r=a("8418"),d=a("65f0"),u=a("1dde"),p=a("b622"),h=a("2d00"),m=p("isConcatSpreadable"),f=9007199254740991,$="Maximum allowed index exceeded",b=h>=51||!s((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),g=u("concat"),_=function(t){if(!i(t))return!1;var e=t[m];return void 0!==e?!!e:o(t)},v=!b||!g;n({target:"Array",proto:!0,forced:v},{concat:function(t){var e,a,n,s,o,i=c(this),u=d(i,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?i:arguments[e],_(o)){if(s=l(o.length),p+s>f)throw TypeError($);for(a=0;a<s;a++,p++)a in o&&r(u,p,o[a])}else{if(p>=f)throw TypeError($);r(u,p++,o)}return u.length=p,u}})},a28a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"navbar"},[a("div",{staticClass:"left"},[a("span",[t._v(t._s(t.$t("sidebar.admin_schedule")))])]),a("div",{staticClass:"right"},[a("span",{staticClass:"button-warp",on:{click:t.handleModalSwitch}},[a("Icon",{attrs:{type:"md-add"}})],1)])]),a("div",{staticClass:"input"},[a("Input",{staticStyle:{width:"300px"},attrs:{suffix:"ios-search",placeholder:t.$t("modal.placeholder")},model:{value:t.param,callback:function(e){t.param=e},expression:"param"}})],1),a("Table",{attrs:{border:"",columns:t.columns,data:t.tableData},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.row;return["RUNNING"===n.state?a("Tooltip",{attrs:{content:"Stop",placement:"top-start"}},[a("span",{staticClass:"button-warp",on:{click:function(e){return t.handleButtonSelect(n,1)}}},[a("Icon",{attrs:{type:"ios-square",size:"12"}})],1)]):a("Tooltip",{attrs:{content:"Run",placement:"top-start"}},[a("span",{staticClass:"button-warp",on:{click:function(e){return t.handleButtonSelect(n,1)}}},[a("Icon",{attrs:{type:"ios-play"}})],1)]),a("Tooltip",{attrs:{content:"Edit",placement:"top-start"}},[a("span",{staticClass:"button-warp",on:{click:function(e){return t.handleButtonSelect(n,2)}}},[a("Icon",{attrs:{type:"ios-create-outline"}})],1)]),a("Tooltip",{attrs:{content:"Delete",placement:"top-start"}},[a("span",{staticClass:"button-warp",on:{click:function(e){return t.handleButtonSelect(n,3)}}},[a("Icon",{attrs:{type:"ios-trash"}})],1)])]}}])}),a("div",{staticClass:"page"},[a("Page",{attrs:{"prev-text":t.$t("page.prev_text"),"next-text":t.$t("page.next_text"),"show-elevator":"","show-total":!0,total:t.total,"show-sizer":""},on:{"on-change":t.onPageChange,"on-page-size-change":t.onPageSizeChange}})],1),a("Modal",{attrs:{title:t.id?t.$t("admin_columns.update_title"):t.$t("admin_columns.create_title"),"ok-text":t.$t("modal.ok_text"),"cancel-text":t.$t("modal.cancel_text")},on:{"on-ok":t.handleSaveUpdateData},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[a("div",{staticClass:"modal-warp"},[a("div",{staticClass:"item"},[a("label",[t._v(t._s(t.$t("admin_columns.jobName"))+"：")]),a("Input",{staticStyle:{width:"350px"},attrs:{"show-word-limit":"",maxlength:"100",placeholder:t.$t("modal.placeholder")},model:{value:t.jobName,callback:function(e){t.jobName=e},expression:"jobName"}})],1),a("div",{staticClass:"item"},[a("label",[t._v(t._s(t.$t("admin_columns.jobClass"))+"：")]),a("Input",{staticStyle:{width:"350px"},attrs:{"show-word-limit":"",maxlength:"100",placeholder:t.$t("modal.placeholder")},model:{value:t.jobClass,callback:function(e){t.jobClass=e},expression:"jobClass"}})],1),a("div",{staticClass:"item"},[a("label",[t._v(t._s(t.$t("admin_columns.cronExpression"))+"：")]),a("Input",{staticStyle:{width:"350px"},attrs:{"show-word-limit":"",maxlength:"100",placeholder:t.$t("modal.placeholder")},model:{value:t.cronExpression,callback:function(e){t.cronExpression=e},expression:"cronExpression"}})],1)])])],1)},s=[],o=(a("99af"),a("d81d"),a("b0c0"),{name:"admin",components:{},data:function(){return{isOpen:!1,page:1,limit:10,total:0,tableData:[],param:"",row:null,id:"",jobName:"",jobClass:"",cronExpression:""}},watch:{isOpen:function(t){t||this.handleReset()},param:function(t){this.page=1,this.limit=10,this.getTableData()}},computed:{columns:function(){return[{title:this.$t("admin_columns.name"),key:"jobName",sortable:!0},{title:this.$t("admin_columns.class"),key:"jobClass"},{title:this.$t("admin_columns.cron"),key:"cronExpression"},{title:this.$t("admin_columns.status"),key:"state"},{title:this.$t("admin_columns.createTime"),key:"crtDttm"},{title:this.$t("admin_columns.action"),slot:"action",width:200,align:"center"}]}},created:function(){this.getTableData()},methods:{handleReset:function(){this.page=1,this.limit=10,this.id="",this.jobName="",this.jobClass="",this.cronExpression=""},handleButtonSelect:function(t,e){switch(e){case 1:this.handleStop(t);break;case 2:this.getRowData(t);break;case 3:this.handleDeleteRow(t);break;default:break}},handleSaveUpdateData:function(){var t=this,e={jobName:this.jobName,jobClass:this.jobClass,cronExpression:this.cronExpression};this.id?(e.id=this.id,this.$axios.get("/sysSchedule/updateTask",{params:e}).then((function(e){200===e.data.code?(t.$Modal.success({title:t.$t("tip.title"),content:"".concat(t.name," ")+t.$t("tip.update_success_content")}),t.isOpen=!1,t.handleReset(),t.getTableData()):t.$Message.error({content:"".concat(t.name," ")+t.$t("tip.update_fail_content"),duration:3})})).catch((function(e){t.$Message.error({content:t.$t("tip.fault_content"),duration:3})}))):this.$axios.get("/sysSchedule/createTask",{params:e}).then((function(e){200===e.data.code?(t.$Modal.success({title:t.$t("tip.title"),content:"".concat(t.name," ")+t.$t("tip.add_success_content")}),t.isOpen=!1,t.handleReset(),t.getTableData()):t.$Message.error({content:"".concat(t.name," ")+t.$t("tip.add_fail_content"),duration:3})})).catch((function(e){t.$Message.error({content:t.$t("tip.fault_content"),duration:3})}))},handleStop:function(t){var e=this,a={sysScheduleId:t.id},n="/sysSchedule/stopTask";"STOP"===t.state&&(a.processType="TASK"===t.processType?"PROCESS":"PROCESS_GROUP",n="/sysSchedule/startTask"),this.$event.emit("loading",!0),this.$axios.post(n,this.$qs.stringify(a)).then((function(a){200===a.data.code?(e.$event.emit("loading",!1),e.$Modal.success({title:e.$t("tip.title"),content:"".concat(t.jobName," ")+e.$t("tip.stop_success_content")}),e.getTableData()):(e.$event.emit("loading",!1),e.$Modal.success({title:e.$t("tip.title"),content:"".concat(t.jobName," ")+e.$t("tip.stop_fail_content")}))})).catch((function(t){e.$event.emit("loading",!1),e.$Message.error({content:e.$t("tip.fault_content"),duration:3})}))},getRowData:function(t){var e=this;this.$event.emit("loading",!0),this.$axios.get("/sysSchedule/getScheduleById",{params:{scheduleId:t.id}}).then((function(t){if(e.$event.emit("loading",!1),200===t.data.code){var a=t.data.sysScheduleVo;e.id=a.id,e.jobName=a.jobName,e.jobClass=a.jobClass,e.cronExpression=a.cronExpression,e.$event.emit("loading",!1),e.isOpen=!0}else e.$Message.error({content:e.$t("tip.get_fail_content"),duration:3})})).catch((function(t){e.$event.emit("loading",!1),e.$Message.error({content:e.$t("tip.fault_content"),duration:3})}))},handleDeleteRow:function(t){var e=this;this.$Modal.confirm({title:this.$t("tip.title"),okText:this.$t("modal.confirm"),cancelText:this.$t("modal.cancel_text"),content:"".concat(this.$t("modal.delete_content")," ").concat(t.jobName,"?"),onOk:function(){var a={sysScheduleId:t.id};e.$axios.get("/sysSchedule/deleteTask",{params:a}).then((function(a){200===a.data.code?(e.$Modal.success({title:e.$t("tip.title"),content:"".concat(t.jobName," ")+e.$t("tip.delete_success_content")}),e.handleReset(),e.getTableData()):e.$Message.error({content:e.$t("tip.delete_fail_content"),duration:3})})).catch((function(t){e.$Message.error({content:e.$t("tip.fault_content"),duration:3})}))}})},getTableData:function(){var t=this,e={page:this.page,limit:this.limit};this.param&&(e.param=this.param),this.$axios.get("/sysSchedule/getScheduleListPage",{params:e}).then((function(e){if(200===e.data.code){var a=e.data.data;t.tableData=a.map((function(t){return t.state=t.status.text,t})),t.total=e.data.count}else t.$Message.error({content:t.$t("tip.request_fail_content"),duration:3})})).catch((function(e){t.$Message.error({content:t.$t("tip.fault_content"),duration:3})}))},onPageChange:function(t){this.page=t,this.getTableData()},onPageSizeChange:function(t){this.limit=t,this.getTableData()},handleModalSwitch:function(){this.isOpen=!this.isOpen}}}),i=o,c=(a("e430"),a("2877")),l=Object(c["a"])(i,n,s,!1,null,"0dec2360",null);e["default"]=l.exports},a472:function(t,e,a){},b0c0:function(t,e,a){var n=a("83ab"),s=a("9bf2").f,o=Function.prototype,i=o.toString,c=/^\s*function ([^ (]*)/,l="name";n&&!(l in o)&&s(o,l,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},e430:function(t,e,a){"use strict";var n=a("a472"),s=a.n(n);s.a}}]);