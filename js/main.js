!function(e,t,n){function a(e){e=e||new Date;var t=("0"+e.getHours()).slice(-2),n=("0"+e.getMinutes()).slice(-2),a=("0"+e.getSeconds()).slice(-2);s.innerText=t+":"+n+":"+a,"00"===t&&o()}function o(e){e=e||new Date;var t=e.getFullYear(),n=("0"+(e.getMonth()+1)).slice(-2),a=("0"+e.getDate()).slice(-2),o=e.getDay();d.innerText=t+"."+n+"."+a+" "+u[o]}function r(){for(var e=document.createDocumentFragment(),t=0;12>t;t++){var n=document.createElement("span");n.classList.add("num"),n.innerText=t+1,e.appendChild(n)}for(var t=0;3>t;t++){var a=document.createElement("span");a.classList.add(g[t]),m.push(a),e.appendChild(a)}i.appendChild(e)}function c(e){e=e||new Date;var t=e.getHours(),n=e.getMinutes(),a=e.getSeconds();m[0].style.transform="rotate("+t/12*360+"deg)",m[1].style.transform="rotate("+n/60*360+"deg)",m[2].style.transform="rotate("+a/60*360+"deg)"}var s,i,d,l=500,u=["SUN","MON","TUE","WED","THU","FRI","SAT"],g=["hand-hour","hand-min","hand-sec"],m=[];window.onload=function(){s=document.querySelector(".clock"),i=document.querySelector(".analog"),d=document.querySelector(".date"),r(),setInterval(function(){var e=new Date;a(e),c(e)},l);var e=new Date;a(e),c(e),o(e)},window.onclick=function(){s.classList.toggle("hide"),i.classList.toggle("hide")}}(this,document,App);