import"./hoisted.CjCQvWA7.js";const r=document.getElementById("registerForm");r.addEventListener("submit",async function(o){o.preventDefault();const n=new FormData(r),s=Object.fromEntries(n),t=await fetch("http://localhost:3000/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!t.ok){alert("Erreur lors de l'inscription");return}const e=await t.json();e.redirect?window.location.href=e.redirect:alert("Erreur : "+e.message)});