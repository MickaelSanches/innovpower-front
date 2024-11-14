import"./hoisted.CjCQvWA7.js";function a(e){const r=document.getElementById("projectTable");if(r){const t=document.createElement("tr");t.innerHTML=`
          <td class="border px-4 py-2">${e.id}</td>
          <td class="border px-4 py-2">${e.name}</td>
          <td class="border px-4 py-2">${e.status}</td>
          <td class="border px-4 py-2">${new Date(e.created_at).toLocaleDateString()}</td>
          <td class="border px-4 py-2">
            <button class="text-yellow-500 hover:underline" onclick="modifierProjet(${e.id})">Modifier</button>
            <button class="text-red-500 hover:underline ml-4" onclick="supprimerProjet(${e.id})">Supprimer</button>
          </td>
        `,r.appendChild(t)}}document.addEventListener("DOMContentLoaded",async()=>{try{const e=await fetch("/projects",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});if(!e.ok){alert("Erreur lors de la récupération des projets");return}(await e.json()).forEach(t=>a(t))}catch(e){console.error("Erreur:",e),alert("Une erreur est survenue")}});const n=document.getElementById("projectForm");n&&n.addEventListener("submit",async e=>{e.preventDefault();const r=new FormData(n),t=Object.fromEntries(r);try{const o=await fetch("/projects",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},body:JSON.stringify(t)});if(!o.ok){alert("Erreur lors de l'ajout du projet");return}const s=await o.json();a(s),n.reset()}catch(o){console.error("Erreur:",o),alert("Une erreur est survenue")}});
