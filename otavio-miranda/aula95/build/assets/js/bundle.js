(()=>{"use strict";class t{constructor(t){Object.defineProperty(this,"cpfLimpo",{writable:!1,enumerable:!0,configurable:!1,value:t.replace(/\D+/g,"")})}éSequência(){return this.cpfLimpo.charAt(0).repeat(11)===this.cpfLimpo}geraNovoCpf(){const i=this.cpfLimpo.slice(0,-2),e=t.geraDigito(i),o=t.geraDigito(i+e);this.novoCPF=i+e+o}static geraDigito(t){let i=0,e=t.length+1;for(let o of t)i+=e*Number(o),e--;const o=11-i%11;return o<=9?String(o):"0"}valida(){return!!this.cpfLimpo&&("string"==typeof this.cpfLimpo&&(11===this.cpfLimpo.length&&(!this.éSequência()&&(this.geraNovoCpf(),this.novoCPF===this.cpfLimpo))))}}class i{rand(t=1e8,i=999999999){return String(Math.floor(Math.random()*(i-t)+t))}formatado(t){return t.slice(0,3)+"."+t.slice(3,6)+"."+t.slice(6,9)+"-"+t.slice(9,11)}geraNovoCpf(){this.rand();const i=t.geraDigito(cpfSemDigito),e=t.geraDigito(cpfSemDigito+i),o=cpfSemDigito+i+e;return this.formatado(o)}}!function(){const t=new i;document.querySelector(".cpf-gerado").innerHTML=t.geraNovoCpf()}()})();
//# sourceMappingURL=bundle.js.map