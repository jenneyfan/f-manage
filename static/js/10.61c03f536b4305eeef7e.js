webpackJsonp([10],{GF4k:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=s("mtWM"),a=s.n(t),o={components:{},name:"HelloWorld",data:function(){return{ruleForm:{username:"admin",password:"123123"},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){var s=r;if(!e)return!1;a.a.get("https://easy-mock.com/mock/5b92369add287013d019e24f/example/user").then(function(e){var t=e.data.result;if(200==e.status){var a=t.find(function(e){return e.username==s.ruleForm.username});a?a.password==s.ruleForm.password?(localStorage.setItem("username",r.ruleForm.username),r.$router.push("/")):r.$message.error("密码错误，请重新输入"):r.$message.error("请检查用户名是否正确")}else r.$message.error("服务器错误")})})}}},n={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"login-wrap"},[s("div",{staticClass:"ms-title"},[e._v("后台管理系统")]),e._v(" "),s("div",{staticClass:"ms-login"},[s("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"0"},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.submitForm("ruleForm")}}},[s("el-form-item",{attrs:{prop:"username"}},[s("el-input",{attrs:{placeholder:"username"},model:{value:e.ruleForm.username,callback:function(r){e.$set(e.ruleForm,"username",r)},expression:"ruleForm.username"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{attrs:{type:"password",placeholder:"password"},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}})],1),e._v(" "),s("div",{staticClass:"login-btn"},[s("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("登录")])],1),e._v(" "),s("p",{staticStyle:{"font-size":"12px","line-height":"30px",color:"#999"}},[e._v("Tips : 用户名和密码随便填。")])],1)],1)])},staticRenderFns:[]};var l=s("VU/8")(o,n,!1,function(e){s("OaUr")},"data-v-5d0976c9",null);r.default=l.exports},OaUr:function(e,r){}});
//# sourceMappingURL=10.61c03f536b4305eeef7e.js.map