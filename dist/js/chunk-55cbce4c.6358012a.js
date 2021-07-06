(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55cbce4c"],{1799:function(t,e,a){"use strict";var c=a("7a23"),o={"aria-label":"Page navigation example"},l={class:"pagination"},n=Object(c["f"])("span",{"aria-hidden":"true"},"«",-1),r=Object(c["f"])("span",{"aria-hidden":"true"},"»",-1);function i(t,e,a,i,d,s){return Object(c["r"])(),Object(c["d"])("nav",o,[Object(c["f"])("ul",l,[Object(c["f"])("li",{class:["page-item",{disabled:!a.page.has_pre}]},[Object(c["f"])("a",{onClick:e[1]||(e[1]=Object(c["I"])((function(e){return t.$emit("page-change",a.page.current_page-1)}),["prevent"])),class:"page-link",href:"#","aria-label":"Previous"},[n])],2),(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(a.page.total_pages,(function(e){return Object(c["r"])(),Object(c["d"])("li",{class:[{active:e===a.page.current_page},"page-item"],key:e},[Object(c["f"])("a",{class:"page-link",href:"#",onClick:Object(c["I"])((function(a){return t.$emit("page-change",e)}),["prevent"])},Object(c["z"])(e),9,["onClick"])],2)})),128)),Object(c["f"])("li",{class:["page-item",{disabled:!a.page.has_next}]},[Object(c["f"])("a",{onClick:e[2]||(e[2]=Object(c["I"])((function(e){return t.$emit("page-change",a.page.current_page+1)}),["prevent"])),class:"page-link",href:"#","aria-label":"Next"},[r])],2)])])}var d={props:["page"]};d.render=i;e["a"]=d},a434:function(t,e,a){"use strict";var c=a("23e7"),o=a("23cb"),l=a("a691"),n=a("50c4"),r=a("7b0b"),i=a("65f0"),d=a("8418"),s=a("1dde"),b=s("splice"),u=Math.max,p=Math.min,f=9007199254740991,j="Maximum allowed length exceeded";c({target:"Array",proto:!0,forced:!b},{splice:function(t,e){var a,c,s,b,m,O,h=r(this),g=n(h.length),v=o(t,g),y=arguments.length;if(0===y?a=c=0:1===y?(a=0,c=g-v):(a=y-2,c=p(u(l(e),0),g-v)),g+a-c>f)throw TypeError(j);for(s=i(h,c),b=0;b<c;b++)m=v+b,m in h&&d(s,b,h[m]);if(s.length=c,a<c){for(b=v;b<g-c;b++)m=b+c,O=b+a,m in h?h[O]=h[m]:delete h[O];for(b=g;b>g-c+a;b--)delete h[b-1]}else if(a>c)for(b=g-c;b>v;b--)m=b+c-1,O=b+a-1,m in h?h[O]=h[m]:delete h[O];for(b=0;b<a;b++)h[b+v]=arguments[b+2];return h.length=g-c+a,s}})},e01a:function(t,e,a){"use strict";var c=a("23e7"),o=a("83ab"),l=a("da84"),n=a("5135"),r=a("861d"),i=a("9bf2").f,d=a("e893"),s=l.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var b={},u=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof u?new s(t):void 0===t?s():s(t);return""===t&&(b[e]=!0),e};d(u,s);var p=u.prototype=s.prototype;p.constructor=u;var f=p.toString,j="Symbol(test)"==String(s("test")),m=/^Symbol\((.*)\)[^)]+$/;i(p,"description",{configurable:!0,get:function(){var t=r(this)?this.valueOf():this,e=f.call(t);if(n(b,t))return"";var a=j?e.slice(7,-1):e.replace(m,"$1");return""===a?void 0:a}}),c({global:!0,forced:!0},{Symbol:u})}},e6dc:function(t,e,a){"use strict";a.r(e);var c=a("7a23"),o=Object(c["f"])("h1",{class:"mt-3 mb-3"},"產品總覽",-1),l={class:"container"},n={class:"d-grid gap-2 d-md-flex justify-content-md-end"},r={class:"table table-hover align-middle mt-4"},i=Object(c["f"])("thead",null,[Object(c["f"])("tr",null,[Object(c["f"])("th",{width:"120"}," 分類 "),Object(c["f"])("th",null,"產品名稱"),Object(c["f"])("th",{width:"120"}," 原價 "),Object(c["f"])("th",{width:"120"}," 售價 "),Object(c["f"])("th",{width:"100"}," 是否啟用 "),Object(c["f"])("th",{width:"100"})])],-1),d={class:"btn-group"},s={class:"d-flex justify-content-center mt-5"};function b(t,e,a,b,u,p){var f=Object(c["w"])("pagination"),j=Object(c["w"])("ProductModal"),m=Object(c["w"])("DeleteModal");return Object(c["r"])(),Object(c["d"])(c["a"],null,[o,Object(c["f"])("div",l,[Object(c["f"])("div",n,[Object(c["f"])("button",{onClick:e[1]||(e[1]=function(e){return p.openModal("add",t.item)}),class:"btn btn-lg btn-primary"},"新增產品")]),Object(c["f"])("table",r,[i,Object(c["f"])("tbody",null,[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(u.productData,(function(t){return Object(c["r"])(),Object(c["d"])("tr",{key:t.id},[Object(c["f"])("td",null,Object(c["z"])(t.category),1),Object(c["f"])("td",null,Object(c["z"])(t.title),1),Object(c["f"])("td",null,Object(c["z"])(t.origin_price),1),Object(c["f"])("td",null,Object(c["z"])(t.price),1),Object(c["f"])("td",null,Object(c["z"])(t.is_enabled?"啟用":"未啟用"),1),Object(c["f"])("td",null,[Object(c["f"])("div",d,[Object(c["f"])("button",{onClick:function(e){return p.openModal("edit",t)},type:"button",class:"btn btn-outline-primary btn-sm"}," 編輯 ",8,["onClick"]),Object(c["f"])("button",{onClick:function(e){return p.openModal("delete",t)},type:"button",class:"btn btn-outline-danger btn-sm"}," 刪除 ",8,["onClick"])])])])})),128))])])]),Object(c["f"])("div",s,[Object(c["f"])(f,{page:u.pagination,onPageChange:p.getData},null,8,["page","onPageChange"])]),Object(c["f"])(j,{onRefresh:p.getData,ref:"modal"},null,8,["onRefresh"]),Object(c["f"])(m,{onDeldata:p.getData,ref:"deleteModal"},null,8,["onDeldata"])],64)}var u=a("5530"),p=(a("99af"),a("1799")),f=(a("a4d3"),a("e01a"),{id:"productModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"}),j={class:"modal-dialog modal-xl"},m={class:"modal-content border-0"},O=Object(c["f"])("div",{class:"modal-header bg-dark text-white"},[Object(c["f"])("h5",{id:"productModalLabel",class:"modal-title"},[Object(c["f"])("span",null,"新增產品")]),Object(c["f"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),h={class:"modal-body"},g={class:"row"},v={class:"col-sm-4"},y={class:"mb-1"},w={class:"form-group"},U=Object(c["f"])("label",{for:"imageUrl"},"輸入圖片網址",-1),k=Object(c["f"])("div",{class:"m-2 d-block text-center"},"或",-1),x={class:"d-block btn btn-primary text-black mb-4"},$=Object(c["f"])("span",{class:"material-icons text-base"}," file_upload ",-1),D=Object(c["f"])("div",{class:"text-center"},"新增主要圖片",-1),M=Object(c["f"])("div",{class:"text-secondary mb-2"},"多圖新增",-1),C={key:0},_={key:1},I={class:"col-sm-8"},P={class:"form-group"},S=Object(c["f"])("label",{for:"title"},"標題",-1),V={class:"row"},H={class:"form-group col-md-6"},z=Object(c["f"])("label",{for:"category"},"分類",-1),L={class:"form-group col-md-6"},J=Object(c["f"])("label",{for:"unit"},"單位",-1),R={class:"row"},A={class:"form-group col-md-6"},E=Object(c["f"])("label",{for:"origin_price"},"原價",-1),F={class:"form-group col-md-6"},N=Object(c["f"])("label",{for:"price"},"售價",-1),T=Object(c["f"])("hr",null,null,-1),q={class:"form-group"},B=Object(c["f"])("label",{for:"description"},"產品描述",-1),G={class:"form-group"},K=Object(c["f"])("label",{for:"content"},"說明內容",-1),Q={class:"form-group"},W={class:"form-check"},X=Object(c["f"])("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Y={class:"modal-footer"},Z=Object(c["f"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function tt(t,e,a,o,l,n){return Object(c["r"])(),Object(c["d"])("div",f,[Object(c["f"])("div",j,[Object(c["f"])("div",m,[O,Object(c["f"])("div",h,[Object(c["f"])("div",g,[Object(c["f"])("div",v,[Object(c["f"])("div",y,[Object(c["f"])("div",w,[U,Object(c["H"])(Object(c["f"])("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[1]||(e[1]=function(t){return l.productObj.imageUrl=t})},null,512),[[c["D"],l.productObj.imageUrl]])]),k,Object(c["f"])("label",x,[Object(c["f"])("input",{style:{display:"none"},onChange:e[2]||(e[2]=function(t){return n.upload("main",t)}),type:"file",class:"form-control",id:"file",placeholder:"新增圖片"},null,32),$,D]),Object(c["f"])("img",{class:"img-fluid",src:l.productObj.imageUrl,alt:""},null,8,["src"])]),M,(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(l.productObj.imagesUrl,(function(t,e){return Object(c["r"])(),Object(c["d"])("div",{key:e},[Object(c["H"])(Object(c["f"])("input",{type:"text",class:"border-0 text-secondary border-bottom border-primary-light\n                  bg-light w-100 p-2 mb-2",placeholder:"請輸入圖片連結","onUpdate:modelValue":function(t){return l.productObj.imagesUrl[e]=t}},null,8,["onUpdate:modelValue"]),[[c["D"],l.productObj.imagesUrl[e]]]),Object(c["f"])("img",{class:"img-fluid mb-2",src:l.productObj.imagesUrl[e]},null,8,["src"])])})),128)),!l.productObj.imagesUrl.length||l.productObj.imagesUrl[l.productObj.imagesUrl.length-1]?(Object(c["r"])(),Object(c["d"])("div",C,[Object(c["f"])("button",{onClick:e[3]||(e[3]=function(){return n.addImage&&n.addImage.apply(n,arguments)}),class:"btn btn-outline-primary btn-sm d-block w-100"}," 新增圖片 ")])):(Object(c["r"])(),Object(c["d"])("div",_,[Object(c["f"])("button",{onClick:e[4]||(e[4]=function(){return n.delImage&&n.delImage.apply(n,arguments)}),class:"btn btn-outline-danger btn-sm d-block w-100"}," 刪除圖片 ")]))]),Object(c["f"])("div",I,[Object(c["f"])("div",P,[S,Object(c["H"])(Object(c["f"])("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[5]||(e[5]=function(t){return l.productObj.title=t})},null,512),[[c["D"],l.productObj.title,void 0,{trim:!0}]])]),Object(c["f"])("div",V,[Object(c["f"])("div",H,[z,Object(c["H"])(Object(c["f"])("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[6]||(e[6]=function(t){return l.productObj.category=t})},null,512),[[c["D"],l.productObj.category,void 0,{trim:!0}]])]),Object(c["f"])("div",L,[J,Object(c["H"])(Object(c["f"])("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[7]||(e[7]=function(t){return l.productObj.unit=t})},null,512),[[c["D"],l.productObj.unit,void 0,{trim:!0}]])])]),Object(c["f"])("div",R,[Object(c["f"])("div",A,[E,Object(c["H"])(Object(c["f"])("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[8]||(e[8]=function(t){return l.productObj.origin_price=t})},null,512),[[c["D"],l.productObj.origin_price,void 0,{number:!0}]])]),Object(c["f"])("div",F,[N,Object(c["H"])(Object(c["f"])("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[9]||(e[9]=function(t){return l.productObj.price=t})},null,512),[[c["D"],l.productObj.price,void 0,{number:!0}]])])]),T,Object(c["f"])("div",q,[B,Object(c["H"])(Object(c["f"])("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[10]||(e[10]=function(t){return l.productObj.description=t})},null,512),[[c["D"],l.productObj.description,void 0,{trim:!0}]])]),Object(c["f"])("div",G,[K,Object(c["H"])(Object(c["f"])("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":e[11]||(e[11]=function(t){return l.productObj.content=t})},null,512),[[c["D"],l.productObj.content,void 0,{trim:!0}]])]),Object(c["f"])("div",Q,[Object(c["f"])("div",W,[Object(c["H"])(Object(c["f"])("input",{id:"is_enabled",class:"form-check-input",type:"checkbox",value:l.productObj.is_enabled,"onUpdate:modelValue":e[12]||(e[12]=function(t){return l.productObj.is_enabled=t})},null,8,["value"]),[[c["C"],l.productObj.is_enabled]]),X])])])])]),Object(c["f"])("div",Y,[Z,Object(c["f"])("button",{onClick:e[13]||(e[13]=function(){return n.updateProduct&&n.updateProduct.apply(n,arguments)}),type:"button",class:"btn btn-primary"}," 確認 ")])])])],512)}a("a434");var et=a("7c2b"),at=a.n(et),ct={data:function(){return{modal:"",productObj:{imagesUrl:[]},buttomStatus:""}},methods:{upload:function(t,e){var a=this,c=e.target.files[0],o=new FormData;o.append("file-to-upload",c),this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/admin/upload"),o).then((function(t){a.productObj.imageUrl=t.data.imageUrl,console.log(t)})).catch((function(t){console.log(t)}))},addImage:function(){""===this.productObj.imagesUrl&&(this.productObj.imagesUrl=[]),""!==this.productObj.imagesUrl[this.productObj.imagesUrl.length-1]&&this.productObj.imagesUrl.push("")},delImage:function(){this.productObj.imagesUrl.splice(this.productObj.imagesUrl.length-1,1)},updateProduct:function(){var t=this;"新增"===this.buttomStatus?this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/admin/product"),{data:this.productObj}).then((function(e){e.data.success?(t.$swal("".concat(e.data.message)),t.$emit("refresh"),t.modal.hide()):t.$swal("".concat(e.data.message))})).catch((function(e){t.$swal("".concat(e.data.message))})):"編輯"===this.buttomStatus&&this.$http.put("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/admin/product/").concat(this.productObj.id),{data:this.productObj}).then((function(e){e.data.success?(t.$swal("".concat(e.data.message)),t.$emit("refresh"),t.modal.hide()):t.$swal("".concat(e.data.message))})).catch((function(e){t.$swal("".concat(e.data.message))}))}},mounted:function(){this.modal=new at.a(this.$refs.modal)}};ct.render=tt;var ot=ct,lt={class:"modal fade",id:"delProductModal","aria-labelledby":"delProductModalLabel","aria-hidden":"true",ref:"deleteModal",tabindex:"-1"},nt={class:"modal-dialog modal-dialog-centered"},rt={class:"modal-content"},it=Object(c["f"])("div",{class:"modal-header bg-danger text-white"},[Object(c["f"])("h5",{class:"modal-title"},"刪除以下商品"),Object(c["f"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),dt={class:"modal-body"},st={class:"modal-footer"},bt=Object(c["f"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ut(t,e,a,o,l,n){return Object(c["r"])(),Object(c["d"])("div",lt,[Object(c["f"])("div",nt,[Object(c["f"])("div",rt,[it,Object(c["f"])("div",dt,[Object(c["f"])("p",null,Object(c["z"])(l.productObj.title),1)]),Object(c["f"])("div",st,[bt,Object(c["f"])("button",{onClick:e[1]||(e[1]=function(){return n.deleteItem&&n.deleteItem.apply(n,arguments)}),type:"button",class:"btn btn-danger"},"確認刪除")])])])],512)}var pt={data:function(){return{modal:"",productObj:{imagesUrl:[]}}},methods:{deleteItem:function(){var t=this;this.$http.delete("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/admin/product/").concat(this.productObj.id)).then((function(e){e.data.success&&(t.$emit("deldata"),t.$swal(e.data.message),t.modal.hide())}))}},mounted:function(){this.modal=new at.a(this.$refs.deleteModal)}};pt.render=ut;var ft=pt,jt={data:function(){return{productData:[],pagination:{}}},methods:{getData:function(t){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/admin/products?page=").concat(t)).then((function(t){e.productData=t.data.products,e.pagination=t.data.pagination})).catch((function(t){e.$swal(t.data.message)}))},openModal:function(t,e){"edit"===t?(this.$refs.modal.modal.show(),this.$refs.modal.productObj=Object(u["a"])({},e),this.$refs.modal.buttomStatus="編輯"):"add"===t?(this.$refs.modal.modal.show(),this.$refs.modal.productObj={imagesUrl:[]},this.$refs.modal.buttomStatus="新增"):"delete"===t&&(this.$refs.deleteModal.modal.show(),this.$refs.deleteModal.productObj=Object(u["a"])({imagesUrl:[]},e))}},components:{Pagination:p["a"],ProductModal:ot,DeleteModal:ft},created:function(){this.getData()}};jt.render=b;e["default"]=jt}}]);
//# sourceMappingURL=chunk-55cbce4c.6358012a.js.map