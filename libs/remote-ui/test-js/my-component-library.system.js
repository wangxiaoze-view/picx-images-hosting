System.register("MyComponentLibrary",[],function(t,c){"use strict";return{execute:function(){const u={class:"mb-4"},n=t("MyComponent",Vue.defineComponent({name:"ComponentA",__name:"index",props:{msg:{default:"ComponentA组件"}},setup(o){return(V,d)=>{const e=Vue.resolveComponent("el-button");return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.createElementVNode("p",null,Vue.toDisplayString(V.msg),1),Vue.createElementVNode("div",u,[Vue.createVNode(e,null,{default:Vue.withCtx(()=>[Vue.createTextVNode("Default")]),_:1}),Vue.createVNode(e,{type:"primary"},{default:Vue.withCtx(()=>[Vue.createTextVNode("Primary")]),_:1}),Vue.createVNode(e,{type:"success"},{default:Vue.withCtx(()=>[Vue.createTextVNode("Success")]),_:1}),Vue.createVNode(e,{type:"info"},{default:Vue.withCtx(()=>[Vue.createTextVNode("Info")]),_:1}),Vue.createVNode(e,{type:"warning"},{default:Vue.withCtx(()=>[Vue.createTextVNode("Warning")]),_:1}),Vue.createVNode(e,{type:"danger"},{default:Vue.withCtx(()=>[Vue.createTextVNode("Danger")]),_:1})])])}}})),a=t("install",o=>{o.component(n.name||"ComponentA",n)}),r=t("default",{install:a})}}});
