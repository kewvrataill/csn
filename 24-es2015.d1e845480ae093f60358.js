(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{vJPN:function(e,t,r){"use strict";r.r(t),r.d(t,"RecoveryModule",(function(){return te}));var n=r("ofXK"),s=r("9jGm"),o=r("l7P3");const a="[Recovery by email action]",c={remindPassword:Object(o.n)(a+" sending recovery request for user",Object(o.s)()),remindPasswordSuccess:Object(o.n)(a+" sending recovery request for user SUCCESS"),remindPasswordFailure:Object(o.n)(a+" sending recovery request for user FAILURE")};var i=r("eIep"),d=r("lJxs"),p=r("JIr8"),l=r("vkgz"),b=r("ds5d"),m=r("LRne"),h=r("lvx5"),f=r("fXoL"),u=r("u+qz");let g=(()=>{class e{constructor(e,t,r){this.navigate=e,this.actions$=t,this.userService=r,this.remindPassword$=Object(s.c)(()=>this.actions$.pipe(Object(s.d)(c.remindPassword),Object(i.a)(({credentials:e})=>this.userService.remind(e).pipe(Object(d.a)(()=>c.remindPasswordSuccess()),Object(p.a)(()=>Object(m.a)(c.remindPasswordFailure())))))),this.remindPasswordSuccess=Object(s.c)(()=>this.actions$.pipe(Object(s.d)(c.remindPasswordSuccess),Object(l.a)(()=>this.navigate(["auth","password-reminder","sent"]))),{dispatch:!1}),this.remindPasswordFailure=Object(s.c)(()=>this.actions$.pipe(Object(s.d)(c.remindPasswordFailure),Object(d.a)(()=>h.a.error({message:"INTERNAL_ERROR"}))))}}return e.\u0275fac=function(t){return new(t||e)(f.Wb(b.k),f.Wb(s.a),f.Wb(u.a))},e.\u0275prov=f.Ib({token:e,factory:e.\u0275fac}),e})();var _=r("tyNb");let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=f.Gb({type:e,selectors:[["ng-component"]],decls:1,vars:0,template:function(e,t){1&e&&f.Nb(0,"router-outlet")},directives:[_.j],styles:[".password-reminder__wrapper{width:280px;height:auto;margin:0 auto}.password-reminder__wrapper.change_password .password-reminder__field{margin-bottom:30px;display:block}.password-reminder__wrapper.change_password .password-reminder__call-to-action{margin-top:30px}.password-reminder__title{font-weight:400;font-family:var(--main-fonts-bold);text-align:center;margin-bottom:30px;white-space:nowrap}.password-reminder__field-title{font-weight:400;font-family:var(--main-fonts);text-align:center;margin-bottom:30px}.password-reminder__re-captcha{display:block;transform:scale(.92);margin:25px 0 0 -10px}.password-reminder__call-to-action{display:flex;justify-content:center;align-items:normal;margin-top:15px}.password-reminder__call-to-action .button.button.button{box-shadow:var(--primary-button-box-shadow)}.password-reminder__image{display:block;margin:0 auto 15px}.password-reminder__password-sent-text{color:var(--secondary-text-color);font-weight:400;font-family:var(--main-fonts);font-size:var(--main-font-size);line-height:1.4;margin:0 auto;text-align:center}@media (min-width:768px){.password-reminder{margin:0 auto 20px}.password-reminder__title{font-size:var(--h4-size);text-transform:uppercase;margin-bottom:40px}.password-reminder__field-title{margin-bottom:30px}.password-reminder__call-to-action{margin-top:30px}.password-reminder__password-sent-text{color:var(--secondary-text-color);font-weight:400;font-family:var(--main-fonts);font-size:var(--h4-size);line-height:1.3;text-align:center}}@media (min-width:992px){.password-reminder__image{margin-top:70px}}.password-reminder .tabs{display:block;width:280px}.password-reminder .tabs .tab{font-size:var(--text-size--xs)}"],encapsulation:2,changeDetection:0}),e})();var v=r("3Pt+");const R={phone:["",[v.r.required,v.r.minLength(5),v.r.pattern("^(\\s*)?(\\+)?([- _():=+]?\\d[- _():=+]?){5,12}(\\s*)?$")]],recaptchaToken:[""]},S={code:["",[v.r.required]],recaptchaToken:[""]};var O=r("aG/c"),C=r("2Vo4"),E=function(e){return e.EmailForm="email_form",e.PhoneForm="phone_form",e.PasswordForm="password_form",e.EmailSent="email_sent",e.CodeSent="code_sent",e.CodeResent="code_resent",e}({}),y=r("ZoBR"),A=function(e){return e.ByPhone="password-reminder/by-phone",e.ByEmail="password-reminder",e}({});const P=[{label:"AUTH.REGISTRATION.BY_PHONE",value:A.ByPhone},{label:"AUTH.REGISTRATION.BY_EMAIL",value:A.ByEmail}],k={sendRemindCode:Object(o.n)("[Recovery by phone action] sending recovery code",Object(o.s)()),validateCode:Object(o.n)("[Recovery by phone action] validating code",Object(o.s)()),validateCodeSuccess:Object(o.n)("[Recovery by phone action] validating code SUCCESS"),validateCodeFailure:Object(o.n)("[Recovery by phone action] validating code FAILURE",Object(o.s)()),redirectOnValid:Object(o.n)("[Recovery by phone action] redirecting on valid code",Object(o.s)())};var j=r("GTwa"),M=r("Kceu"),x=r("jCJ1"),I=r("sYmb");const N=["recaptchaRef"];function F(e,t){if(1&e&&f.Nb(0,"re-captcha",16,17),2&e){const e=f.ec().ngIf;f.kc("siteKey",e.key)}}function T(e,t){if(1&e&&(f.Qb(0),f.Cc(1,F,2,1,"re-captcha",15),f.Pb()),2&e){const e=t.ngIf;f.Ab(1),f.kc("ngIf",e.enabled)}}function D(e,t){if(1&e){const e=f.Tb();f.Sb(0,"p",18),f.Ec(1,"\u041d\u0435 \u043f\u0440\u0438\u0448\u043b\u043e SMS? "),f.Sb(2,"span",19),f.ac("click",(function(){return f.vc(e),f.ec().resendCode()})),f.Ec(3,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435 \u0440\u0430\u0437"),f.Rb(),f.Rb()}}function W(e,t){if(1&e&&(f.Sb(0,"p",20),f.Ec(1," SMS \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e! "),f.Sb(2,"span",21),f.Ec(3,"\u041d\u043e\u0432\u043e\u0435 SMS \u043c\u043e\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 "),f.Sb(4,"b"),f.Ec(5),f.fc(6,"async"),f.Rb(),f.Rb(),f.Rb()),2&e){const e=f.ec();f.Ab(5),f.Gc("",f.gc(6,1,e.timer)," \u0441\u0435\u043a.")}}let $=(()=>{class e{constructor(e,t,r,n){this.navigate=e,this.fb=t,this.store=r,this.errorManager=n,this.RemindPasswordState=E,this.tabs=P,this.phoneForm=this.fb.group(R),this.codeForm=this.fb.group(S),this.remindButton={size:O.d.Large,theme:O.e.Green},this.captcha$=this.store.select(y.a.captcha),this.screen$=new C.a(E.PhoneForm),this.isCodeSent$=this.screen$.pipe(Object(d.a)(e=>e===E.CodeSent||e===E.CodeResent)),this.isCodeResent$=this.screen$.pipe(Object(d.a)(e=>e===E.CodeResent)),this.timer=j.a,this.phoneErrors=this.errorManager.setUp(this.phoneForm),this.codeErrors=this.errorManager.setUp(this.codeForm,k.validateCodeFailure,!0)}changeSection(e){this.navigate(["auth",...e.split("/")])}saveCode(e){this.phoneForm.get("phone").setValue(e)}editPhone(){this.screen$.next(E.PhoneForm),this.recaptchaRef.reset()}remind(){this.phoneForm.valid&&(this.store.dispatch(k.sendRemindCode({credentials:this.phoneForm.value})),this.screen$.next(E.CodeSent),this.codeForm.markAsUntouched(),this.codeForm.reset({code:""}))}validate(){if(!this.codeForm.valid)return;const e=this.phoneForm.get("phone").value;this.store.dispatch(k.validateCode({credentials:Object.assign(Object.assign({},this.codeForm.value),{phone:e})}))}resendCode(){this.store.dispatch(k.sendRemindCode({credentials:this.phoneForm.value})),this.screen$.next(E.CodeResent)}}return e.\u0275fac=function(t){return new(t||e)(f.Mb(b.k),f.Mb(v.c),f.Mb(o.h),f.Mb(M.a))},e.\u0275cmp=f.Gb({type:e,selectors:[["ng-component"]],viewQuery:function(e,t){var r;1&e&&f.Kc(N,!0),2&e&&f.tc(r=f.bc())&&(t.recaptchaRef=r.first)},features:[f.zb([M.a])],decls:40,vars:57,consts:[[1,"password-reminder"],[1,"password-reminder__title"],[1,"password-reminder__tabs",3,"active","tabs","tabChanged"],[1,"password-reminder__wrapper",3,"formGroup","keyup.enter"],[1,"password-reminder__field-title"],["formControlName","phone",1,"input-login",3,"additionalClass","placeholder","errors","phoneCode"],[4,"ngIf"],[1,"password-reminder__call-to-action",3,"fullWidth","settings","buttonClicked"],[1,"password-reminder__code-sent-block"],[1,"phone-info__text"],[1,"phone-info__text--bold"],["alt","","src","./assets/images/auth/edit-phone.svg",1,"phone-info__edit",3,"click"],["formControlName","code","autocomplete","off",1,"phone__input",3,"placeholder","errors"],["class","password-reminder__resend-code",4,"ngIf"],["class","password-reminder__code-resent",4,"ngIf"],["class","password-reminder__re-captcha","formControlName","recaptchaToken",3,"siteKey",4,"ngIf"],["formControlName","recaptchaToken",1,"password-reminder__re-captcha",3,"siteKey"],["recaptchaRef",""],[1,"password-reminder__resend-code"],[1,"phone-info__text--resend",3,"click"],[1,"password-reminder__code-resent"],[1,"phone-info__text--resend"]],template:function(e,t){1&e&&(f.Sb(0,"div",0),f.Sb(1,"h3",1),f.Ec(2),f.fc(3,"translate"),f.Rb(),f.Sb(4,"pd-button-group",2),f.ac("tabChanged",(function(e){return t.changeSection(e)})),f.Rb(),f.Sb(5,"form",3),f.ac("keyup.enter",(function(){return t.remind()})),f.fc(6,"async"),f.Sb(7,"div",4),f.Ec(8),f.fc(9,"translate"),f.Rb(),f.Sb(10,"pd-input-phone",5),f.ac("phoneCode",(function(e){return t.saveCode(e)})),f.fc(11,"translate"),f.fc(12,"async"),f.Rb(),f.Cc(13,T,2,1,"ng-container",6),f.fc(14,"async"),f.Sb(15,"pd-button",7),f.ac("buttonClicked",(function(){return t.remind()})),f.Ec(16),f.fc(17,"translate"),f.Rb(),f.Rb(),f.Sb(18,"form",3),f.ac("keyup.enter",(function(){return t.validate()})),f.fc(19,"async"),f.Sb(20,"div",4),f.Ec(21),f.fc(22,"translate"),f.Rb(),f.Sb(23,"div",8),f.Sb(24,"p",9),f.Ec(25),f.fc(26,"translate"),f.Sb(27,"span",10),f.Ec(28),f.Rb(),f.Rb(),f.Sb(29,"img",11),f.ac("click",(function(){return t.editPhone()})),f.Rb(),f.Rb(),f.Nb(30,"pd-input",12),f.fc(31,"translate"),f.fc(32,"async"),f.Sb(33,"pd-button",7),f.ac("buttonClicked",(function(){return t.validate()})),f.Ec(34),f.fc(35,"translate"),f.Rb(),f.Cc(36,D,4,0,"p",13),f.fc(37,"async"),f.Cc(38,W,7,3,"p",14),f.fc(39,"async"),f.Rb(),f.Rb()),2&e&&(f.Ab(2),f.Fc(f.gc(3,27,"AUTH.PASSWORD_REMINDER.TITLE")),f.Ab(2),f.kc("active","password-reminder/by-phone")("tabs",t.tabs),f.Ab(1),f.Eb("hidden",f.gc(6,29,t.screen$)!==t.RemindPasswordState.PhoneForm),f.kc("formGroup",t.phoneForm),f.Ab(3),f.Fc(f.gc(9,31,"AUTH.PASSWORD_REMINDER.TYPE_PHONE")),f.Ab(2),f.lc("placeholder",f.gc(11,33,"AUTH.REGISTRATION.PHONE")),f.kc("additionalClass",!0)("errors",f.gc(12,35,t.phoneErrors.get("phone"))),f.Ab(3),f.kc("ngIf",f.gc(14,37,t.captcha$)),f.Ab(2),f.kc("fullWidth",!0)("settings",t.remindButton),f.Ab(1),f.Fc(f.gc(17,39,"AUTH.PASSWORD_REMINDER.SEND_CODE")),f.Ab(2),f.Eb("hidden",!1===f.gc(19,41,t.isCodeSent$)),f.kc("formGroup",t.codeForm),f.Ab(3),f.Fc(f.gc(22,43,"AUTH.PASSWORD_REMINDER.TYPE_CODE")),f.Ab(4),f.Gc("",f.gc(26,45,"AUTH.REGISTRATION.CODE_SENT")," "),f.Ab(3),f.Fc(t.phoneForm.get("phone").value),f.Ab(2),f.lc("placeholder",f.gc(31,47,"AUTH.REGISTRATION.CODE")),f.kc("errors",f.gc(32,49,t.codeErrors.get("code"))),f.Ab(3),f.kc("fullWidth",!0)("settings",t.remindButton),f.Ab(1),f.Fc(f.gc(35,51,"AUTH.PASSWORD_REMINDER.VALIDATE_CODE")),f.Ab(2),f.kc("ngIf",!1===f.gc(37,53,t.isCodeResent$)),f.Ab(2),f.kc("ngIf",f.gc(39,55,t.isCodeResent$)))},directives:[O.c,v.t,v.m,v.h,O.n,v.l,v.f,n.m,O.b,O.i,x.a,x.d],pipes:[I.c,n.b],styles:[".password-reminder__title[_ngcontent-%COMP%]{text-transform:uppercase}.password-reminder__tabs[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{display:block}.password-reminder[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%]{display:none}.password-reminder__code-sent-block[_ngcontent-%COMP%]{color:var(--secondary-text-color);font-weight:400;font-family:var(--main-fonts);font-size:var(--text-size--sm);line-height:1.4;border-radius:5px;background-color:rgba(255,223,153,.25);padding:8px 10px;display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.password-reminder__code-sent-block[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400;font-family:var(--main-fonts-bold);font-size:var(--text-size--sm);line-height:1.4}.password-reminder__code-sent-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer}.password-reminder__resend-code[_ngcontent-%COMP%]{color:var(--secondary-text-color);font-weight:400;font-family:var(--main-fonts);font-size:var(--text-size--xs);line-height:1.4;text-align:center;margin-top:30px}.password-reminder__resend-code[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer}.password-reminder__code-resent[_ngcontent-%COMP%], .password-reminder__resend-code[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--primary-text-color);font-weight:400;font-family:var(--main-fonts);font-size:var(--text-size--xs);line-height:1.4}.password-reminder__code-resent[_ngcontent-%COMP%]{text-align:center;margin-top:30px}.password-reminder__code-resent[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--tertiary-color);font-weight:400;font-family:var(--main-fonts);font-size:var(--text-size--xs);line-height:1.4}.password-reminder__code-resent[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:var(--secondary-color)}"],changeDetection:0}),e})();const U={email:["",[v.r.email,v.r.required]],recaptchaToken:[""]};function G(e,t){1&e&&(f.Sb(0,"h3",4),f.Ec(1),f.fc(2,"translate"),f.Rb()),2&e&&(f.Ab(1),f.Fc(f.gc(2,1,"AUTH.PASSWORD_REMINDER.TITLE")))}function z(e,t){if(1&e&&f.Nb(0,"re-captcha",11),2&e){const e=f.ec().ngIf;f.kc("siteKey",e.key)}}function H(e,t){if(1&e&&(f.Qb(0),f.Cc(1,z,1,1,"re-captcha",10),f.Pb()),2&e){const e=t.ngIf;f.Ab(1),f.kc("ngIf",e.enabled)}}function L(e,t){if(1&e){const e=f.Tb();f.Sb(0,"div",5),f.Sb(1,"div",6),f.Ec(2),f.fc(3,"translate"),f.Rb(),f.Nb(4,"pd-input-email",7),f.fc(5,"async"),f.Cc(6,H,2,1,"ng-container",8),f.fc(7,"async"),f.Sb(8,"pd-button",9),f.ac("buttonClicked",(function(){return f.vc(e),f.ec().remind()})),f.Ec(9),f.fc(10,"translate"),f.Rb(),f.Rb()}if(2&e){const e=f.ec();f.Ab(2),f.Fc(f.gc(3,6,"AUTH.PASSWORD_REMINDER.TYPE_EMAIL")),f.Ab(2),f.kc("errors",f.gc(5,8,e.errors.get("email"))),f.Ab(2),f.kc("ngIf",f.gc(7,10,e.captcha$)),f.Ab(2),f.kc("fullWidth",!0)("settings",e.remindButton),f.Ab(1),f.Fc(f.gc(10,12,"AUTH.PASSWORD_REMINDER.RECOVER_PASSWORD"))}}Object.keys(U).reduce((e,t)=>Object.assign(Object.assign({},e),{[t]:null}),{});let B=(()=>{class e{constructor(e,t,r,n){this.navigate=e,this.fb=t,this.store=r,this.errorManager=n,this.form=this.fb.group(U),this.remindButton={size:O.d.Large,theme:O.e.Green},this.captcha$=this.store.select(y.a.captcha),this.pageState=E.EmailForm,this.RemindPasswordState=E,this.tabs=P,this.errors=this.errorManager.setUp(this.form)}changeSection(e){this.navigate(["auth",...e.split("/")])}remind(){this.form.valid&&this.store.dispatch(c.remindPassword({credentials:this.form.value}))}}return e.\u0275fac=function(t){return new(t||e)(f.Mb(b.k),f.Mb(v.c),f.Mb(o.h),f.Mb(M.a))},e.\u0275cmp=f.Gb({type:e,selectors:[["ng-component"]],features:[f.zb([M.a])],decls:4,vars:5,consts:[[1,"password-reminder",3,"formGroup","keyup.enter"],["class","password-reminder__title",4,"ngIf"],[1,"login-by-phone__tabs",3,"active","tabs","tabChanged"],["class","password-reminder__wrapper",4,"ngIf"],[1,"password-reminder__title"],[1,"password-reminder__wrapper"],[1,"password-reminder__field-title"],["formControlName","email","placeholder","E-mail",1,"input-email",3,"errors"],[4,"ngIf"],[1,"password-reminder__call-to-action",3,"fullWidth","settings","buttonClicked"],["class","password-reminder__re-captcha","formControlName","recaptchaToken",3,"siteKey",4,"ngIf"],["formControlName","recaptchaToken",1,"password-reminder__re-captcha",3,"siteKey"]],template:function(e,t){1&e&&(f.Sb(0,"form",0),f.ac("keyup.enter",(function(){return t.remind()})),f.Cc(1,G,3,3,"h3",1),f.Sb(2,"pd-button-group",2),f.ac("tabChanged",(function(e){return t.changeSection(e)})),f.Rb(),f.Cc(3,L,11,14,"div",3),f.Rb()),2&e&&(f.kc("formGroup",t.form),f.Ab(1),f.kc("ngIf",t.pageState!==t.RemindPasswordState.EmailSent),f.Ab(1),f.kc("active","password-reminder")("tabs",t.tabs),f.Ab(1),f.kc("ngIf",t.pageState===t.RemindPasswordState.EmailForm))},directives:[v.t,v.m,v.h,n.m,O.c,O.j,v.l,v.f,O.b,x.a,x.d],pipes:[I.c,n.b],encapsulation:2,changeDetection:0}),e})(),K=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=f.Gb({type:e,selectors:[["ng-component"]],decls:9,vars:9,consts:[[1,"password-reminder__image",3,"src"],[1,"password-reminder__password-sent-text"]],template:function(e,t){1&e&&(f.Sb(0,"div"),f.Nb(1,"img",0),f.fc(2,"themeable"),f.Sb(3,"div",1),f.Ec(4),f.fc(5,"translate"),f.Rb(),f.Sb(6,"div",1),f.Ec(7),f.fc(8,"translate"),f.Rb(),f.Rb()),2&e&&(f.Ab(1),f.kc("src",f.gc(2,3,"images/auth/email_sent.svg"),f.yc),f.Ab(3),f.Fc(f.gc(5,5,"AUTH.PASSWORD_REMINDER.EMAIL_SENT")),f.Ab(3),f.Fc(f.gc(8,7,"AUTH.PASSWORD_REMINDER.YOU_CAN_CHANGE_PASSWORD")))},pipes:[b.r,I.c],encapsulation:2,changeDetection:0}),e})();var q=r("m0cK");const J={recoverPassword:Object(o.n)("[Recover password action] Trying to send recover request",Object(o.s)()),recoverPasswordSuccess:Object(o.n)("[Recover password action] Recover password sent successfully"),recoverPasswordFailure:Object(o.n)("[Recover password action] Recover password request failure",Object(o.s)())};var Y=r("jgZD");const V=[{path:"",component:w,children:[{path:"",component:B},{path:"by-phone",component:$},{path:"sent",component:K},{path:":token",component:(()=>{class e{constructor(e,t,r,n){this.fb=e,this.activatedRoute=t,this.store=r,this.errorManager=n,this.token=this.activatedRoute.snapshot.params.token,this.form=this.fb.group(q.a,{validators:Y.a.matchFields("password_new","password_confirm")}),this.recoverButton={size:O.d.Large,theme:O.e.Green},this.errors=this.errorManager.setUp(this.form)}recover(){this.form.valid&&this.store.dispatch(J.recoverPassword({credentials:{newPassword:this.form.get("password_new").value,code:this.token}}))}}return e.\u0275fac=function(t){return new(t||e)(f.Mb(v.c),f.Mb(_.a),f.Mb(o.h),f.Mb(M.a))},e.\u0275cmp=f.Gb({type:e,selectors:[["ng-component"]],features:[f.zb([M.a])],decls:20,vars:27,consts:[[1,"password-reminder",3,"formGroup","keyup.enter"],[1,"password-reminder__title"],[1,"password-reminder__wrapper","change_password"],[1,"password-reminder__field-title"],["formControlName","password_new",1,"password-reminder__field",3,"placeholder","errors"],["formControlName","password_confirm",1,"password-reminder__field",3,"placeholder","errors"],[1,"password-reminder__call-to-action",3,"fullWidth","settings","buttonClicked"]],template:function(e,t){1&e&&(f.Sb(0,"form",0),f.ac("keyup.enter",(function(){return t.recover()})),f.Sb(1,"h3",1),f.Ec(2),f.fc(3,"translate"),f.Rb(),f.Sb(4,"div",2),f.Sb(5,"div",3),f.Ec(6),f.fc(7,"translate"),f.Rb(),f.Nb(8,"pd-input-password",4),f.fc(9,"translate"),f.fc(10,"async"),f.Sb(11,"div",3),f.Ec(12),f.fc(13,"translate"),f.Rb(),f.Nb(14,"pd-input-password",5),f.fc(15,"translate"),f.fc(16,"async"),f.Sb(17,"pd-button",6),f.ac("buttonClicked",(function(){return t.recover()})),f.Ec(18),f.fc(19,"translate"),f.Rb(),f.Rb(),f.Rb()),2&e&&(f.kc("formGroup",t.form),f.Ab(2),f.Fc(f.gc(3,11,"AUTH.PASSWORD_REMINDER.TITLE")),f.Ab(4),f.Fc(f.gc(7,13,"AUTH.PASSWORD_REMINDER.NEW_PASSWORD")),f.Ab(2),f.lc("placeholder",f.gc(9,15,"COMMON.PASSWORD")),f.kc("errors",f.gc(10,17,t.errors.get("password_new"))),f.Ab(4),f.Fc(f.gc(13,19,"AUTH.PASSWORD_REMINDER.CONFIRM_PASSWORD")),f.Ab(2),f.lc("placeholder",f.gc(15,21,"COMMON.PASSWORD")),f.kc("errors",f.gc(16,23,t.errors.get("password_confirm"))),f.Ab(3),f.kc("fullWidth",!0)("settings",t.recoverButton),f.Ab(1),f.Fc(f.gc(19,25,"AUTH.PASSWORD_REMINDER.CHANGE_PASSWORD")))},directives:[v.t,v.m,v.h,O.m,v.l,v.f,O.b],pipes:[I.c,n.b],encapsulation:2,changeDetection:0}),e})()}]}];let Q=(()=>{class e{}return e.\u0275mod=f.Kb({type:e}),e.\u0275inj=f.Jb({factory:function(t){return new(t||e)},imports:[[_.i.forChild(V)],_.i]}),e})(),X=(()=>{class e{constructor(e,t,r){this.navigate=e,this.actions$=t,this.userService=r,this.recoverPassword$=Object(s.c)(()=>this.actions$.pipe(Object(s.d)(J.recoverPassword),Object(i.a)(({credentials:e})=>this.userService.recover(e).pipe(Object(d.a)(()=>J.recoverPasswordSuccess()),Object(p.a)(e=>Object(m.a)(J.recoverPasswordFailure({error:e}))))))),this.recoverPasswordRedirect$=Object(s.c)(()=>this.actions$.pipe(Object(s.d)(J.recoverPasswordSuccess),Object(l.a)(()=>this.navigate(["auth","login"])),Object(d.a)(()=>h.a.success({message:"PASSWORD_CHANGED"}))))}}return e.\u0275fac=function(t){return new(t||e)(f.Wb(b.k),f.Wb(s.a),f.Wb(u.a))},e.\u0275prov=f.Ib({token:e,factory:e.\u0275fac}),e})();var Z=r("cwPg");let ee=(()=>{class e{constructor(e,t,r){this.navigate=e,this.actions$=t,this.userService=r,this.sendRemindCode$=Object(s.c)(()=>this.actions$.pipe(Object(s.d)(k.sendRemindCode),Object(i.a)(({credentials:e})=>this.userService.sendRemindCode(e))),{dispatch:!1}),this.validateCode$=Object(s.c)(()=>this.actions$.pipe(Object(s.d)(k.validateCode),Object(i.a)(({credentials:e})=>this.userService.getRemindUrl(e).pipe(Object(d.a)(e=>k.validateCodeSuccess()),Object(p.a)(e=>Object(m.a)(k.validateCodeFailure({error:Z.a.error(e)}))))))),this.validateCodeSuccess$=Object(s.c)(()=>this.actions$.pipe(Object(s.d)(k.validateCodeSuccess),Object(l.a)(()=>this.navigate(["auth","login"]))),{dispatch:!1})}}return e.\u0275fac=function(t){return new(t||e)(f.Wb(b.k),f.Wb(s.a),f.Wb(u.a))},e.\u0275prov=f.Ib({token:e,factory:e.\u0275fac}),e})(),te=(()=>{class e{}return e.\u0275mod=f.Kb({type:e}),e.\u0275inj=f.Jb({factory:function(t){return new(t||e)},imports:[[n.c,Q,b.n,O.t,v.p,x.b,x.c,s.b.forFeature([g,ee,X])]]}),e})()}}]);