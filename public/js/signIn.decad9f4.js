(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["signIn"],{"0a13":function(t,e,s){},"4bd4":function(t,e,s){"use strict";s("4de4"),s("7db0"),s("4160"),s("caad"),s("07ac"),s("2532"),s("159b");var r=s("f3f3"),i=s("58df"),a=s("7e2b"),n=s("3206");e["a"]=Object(i["a"])(a["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,s=function(t){return t.$watch("hasError",(function(s){e.$set(e.errorBag,t._uid,s)}),{immediate:!0})},r={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(r.valid=s(t)))})):r.valid=s(t),r},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var s=this.watchers.find((function(t){return t._uid===e._uid}));s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(r["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"54e2":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("login-form",{attrs:{"form-props":t.formProps}})},i=[],a=s("61b1"),n={name:"SignIn",components:{LoginForm:a["a"]},data:function(){return{formProps:{title:"Sign In",icon:"login",redirectText:"Don't have account yet?",redirectLink:{name:"signUp"},redirectLinkText:"Sign Up"}}}},o=n,d=s("2877"),c=Object(d["a"])(o,r,i,!1,null,null,null);e["default"]=c.exports},"61b1":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"login-form mt-12"},[s("v-card",{staticClass:"auth-card",attrs:{raised:"",outlined:"",dark:""}},[s("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("div",{staticClass:"d-flex align-items-center"},[s("v-icon",{staticClass:"mr-3"},[t._v(t._s("mdi-"+t.formProps.icon))]),s("h3",{staticClass:"app-headline"},[t._v(t._s(t.formProps.title))])],1),s("v-card-text",[s("div",{attrs:{id:"firebaseui-auth-container"}}),s("div",{staticClass:"text-center",attrs:{id:"loader"}},[s("v-progress-circular",{attrs:{size:"30",indeterminate:"",color:"secondary"}})],1),s("div",{staticClass:"d-md-flex d-none or-wrapper"},[s("span",{staticClass:"or"},[t._v("OR")])]),s("v-text-field",{attrs:{clearable:"",label:"Email",type:"email","prepend-icon":"mdi-email",rules:t.EmailRules},model:{value:t.email,callback:function(e){t.email="string"===typeof e?e.trim():e},expression:"email"}}),t.formProps.signUp?s("v-text-field",{attrs:{clearable:"",label:"Username",type:"text","prepend-icon":"mdi-account"},model:{value:t.username,callback:function(e){t.username="string"===typeof e?e.trim():e},expression:"username"}}):t._e(),s("v-text-field",{attrs:{type:t.showPassword?"text":"password",label:"Password","prepend-icon":"mdi-lock","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",rules:t.passwordRules},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password="string"===typeof e?e.trim():e},expression:"password"}}),t.formProps.signUp?s("v-text-field",{attrs:{type:t.showPassword?"text":"password",label:"Confirm password","prepend-icon":"mdi-lock","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",rules:t.comparePasswords},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword="string"===typeof e?e.trim():e},expression:"confirmPassword"}}):t._e()],1),s("v-divider"),s("v-card-actions",[s("v-btn",{staticClass:"submit-btn",attrs:{ripple:"",type:"submit",disabled:!t.valid}},[t._v("Submit")])],1)],1),s("div",{staticClass:"text-center mb-3"},[t.formProps.signUp?t._e():s("router-link",{staticClass:"link",attrs:{to:{name:"resetPass"}}},[t._v("Forgot password?")])],1),s("div",{staticClass:"text-center mb-3"},[s("span",{staticClass:"mr-3"},[t._v(t._s(t.formProps.redirectText))]),s("router-link",{staticClass:"link",attrs:{to:t.formProps.redirectLink}},[t._v(t._s(t.formProps.redirectLinkText))])],1)],1)],1)},i=[],a=(s("99af"),s("f3f3")),n=s("d0ff"),o=s("2f62"),d=s("17e1"),c=s("5f37"),l={name:"LoginForm",props:{formProps:{type:Object,required:!0}},data:function(){return{valid:!1,showPassword:!1,password:"",confirmPassword:"",email:"",EmailRules:[c["c"],c["a"]],username:"",passwordRules:[].concat(Object(n["a"])(c["e"]),[c["d"]])}},computed:{comparePasswords:function(){return[this.password===this.confirmPassword||"Passwords don't match"]},loginMethod:function(){return this.formProps.signUp?this.signUpUser:this.signInUser}},mounted:function(){Object(d["a"])()},methods:Object(a["a"])(Object(a["a"])({},Object(o["b"])("user",["signUpUser","signInUser"])),{},{onSubmit:function(){var t={email:this.email,username:this.username,password:this.password};this.loginMethod(t).catch((function(){}))}})},u=l,f=(s("9590"),s("2877")),p=s("6544"),m=s.n(p),h=s("8336"),v=s("b0af"),w=s("99d9"),b=s("ce7e"),g=s("4bd4"),P=s("132d"),_=s("490a"),x=s("8654"),y=Object(f["a"])(u,r,i,!1,null,"1dc3f71c",null);e["a"]=y.exports;m()(y,{VBtn:h["a"],VCard:v["a"],VCardActions:w["a"],VCardText:w["b"],VDivider:b["a"],VForm:g["a"],VIcon:P["a"],VProgressCircular:_["a"],VTextField:x["a"]})},9590:function(t,e,s){"use strict";var r=s("0a13"),i=s.n(r);i.a}}]);
//# sourceMappingURL=signIn.decad9f4.js.map