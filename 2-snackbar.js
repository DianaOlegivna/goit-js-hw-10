import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as o}from"./assets/vendor-Dov3POoy.js";document.querySelector(".form").addEventListener("submit",t=>{t.preventDefault();const i=t.target,s=Number(t.target.delay.value),r=i.state.value;new Promise((e,m)=>{setTimeout(()=>{r==="fulfilled"?e(s):m(s)},s)}).then(e=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight",timeout:3e3})}).catch(e=>{o.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,position:"topRight",timeout:3e3})}).finally(()=>{i.reset()})});
//# sourceMappingURL=2-snackbar.js.map
