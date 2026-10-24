const list=document.getElementById('list'),q=document.getElementById('q');
function card(a){const url=a.live?L+a.live+'/':null;
const st=url?`<span class="st on">Live</span> <a class=open href="${url}">Open it</a>`:`<span class="st off">Built, not shipped (waiting on Dad)</span><div class=path>On my computer: library/made/${a.path}/</div>`;
const ex=(a.x||[]).map(k=>`<details><summary>${SEC[k].t}</summary><div class=in>${SEC[k].h}</div></details>`).join('');
return `<details class=card><summary><span class=nm>${a.n}</span></summary><div class=in><p>${a.d}</p>${st}${a.lim?`<p class=lim><b>Limits:</b> ${a.lim}</p>`:''}${ex}</div></details>`}
function show(){const t=q.value.trim().toLowerCase();const r=APPS.filter(a=>!t||(a.n+a.d+a.lim+(a.x||[]).map(k=>SEC[k].t+SEC[k].h).join('')).toLowerCase().includes(t));
list.innerHTML=r.length?r.map(card).join(''):'<p>Nothing found. Try another word.</p>';
if(t)list.querySelectorAll('details').forEach(d=>{if(d.textContent.toLowerCase().includes(t))d.open=true})}
q.addEventListener('input',show);show();
if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js');
