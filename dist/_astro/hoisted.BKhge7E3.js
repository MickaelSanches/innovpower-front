import"./hoisted.CjCQvWA7.js";const n=document.getElementById("animated-text");function d(){if(n){const t=n.getBoundingClientRect(),e=window.innerHeight;t.top<=e&&t.bottom>=0?(n.classList.add("typing-effect"),n.classList.remove("reverse-typing-effect")):(t.top>e||t.bottom<0)&&(n.classList.add("reverse-typing-effect"),n.classList.remove("typing-effect"))}}window.addEventListener("scroll",d);function c(){const t=document.getElementById("founder-title"),e=document.getElementById("signature");if(t&&e){const i=t.getBoundingClientRect().top,o=e.getBoundingClientRect().top,s=window.innerHeight;i<s&&i>0&&t.classList.add("fadeInOnScroll"),o<s&&o>0&&e.classList.add("fadeInOnScroll")}}window.addEventListener("scroll",c);