(function(){
var D=window.DATA,B=window.BASE,P=D.puppies,WA='https://wa.me/971500000000';
var $=function(s,r){return (r||document).querySelector(s)};
var main=$('#main');
function u(p){return p&&p.indexOf('http')!==0?B+p:p}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function title(p){return p.name}
function doorCard(p){
  return '<a class="door" href="#/puppies/'+p.slug+'"><h3 class="plush">'+esc(p.name)+'</h3><small>'+esc(p.meta)+'</small>'+
  '<div class="fw"><span class="avail">Available</span><div class="frame" style="--dc:'+p.door+'"><img loading="lazy" alt="'+esc(p.name+', '+p.meta)+'" src="'+u(p.cover)+'" style="object-position:'+p.pos+'"></div></div></a>';
}
function home(){
  var a=P.slice(0,7).map(function(p,i){return '<div class="arch'+(i==1?' tag':'')+'"><span>'+esc(p.breed.split(' ').pop())+'</span><img alt="" src="'+u(p.cover)+'" style="object-position:'+p.pos+'"></div>'}).join('');
  var chips=['Maltipoo','Pomeranian','Poodle','Cavapoo','Shih Tzu'].map(function(c){return '<button class="chip" data-b="'+c+'">'+c+'</button>'}).join('');
  var gal=D.happy.slice(1,9).map(function(g){return '<img loading="lazy" alt="Happy family with their TeddyPups puppy" src="'+u(g)+'">'}).join('');
  var faqs=FAQ.slice(0,3).map(function(f){return '<div class="note"><h3>'+f[0]+'</h3><p>'+f[1]+'</p></div>'}).join('');
  return '<section class="hero"><span class="hand">every puppy is family</span><h1>Premium teacup puppies in Dubai</h1>'+
  '<p class="lead">Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.</p>'+
  '<div class="btns"><a class="btn btn-toffee" href="#/puppies">View available puppies</a><a class="btn btn-ghost" target="_blank" rel="noopener" href="'+WA+'">Enquire on WhatsApp</a></div>'+
  '<div class="arches">'+a+'</div></section><div class="scallop"></div>'+
  '<section class="sec meet"><div class="wrap"><div class="sec-h"><div><h2>Meet the pups</h2><p>Real puppies, real photos, looking for their families right now.</p></div><a class="btn btn-toffee" href="#/puppies">See all available puppies</a></div><div class="doors">'+P.map(doorCard).join('')+'</div></div></section><div class="floor"></div>'+
  '<section class="sec"><div class="wrap"><div class="sec-h"><div><span class="hand">choose your way</span><h2>Two ways to meet your puppy</h2></div></div><div class="two">'+
  '<div class="card sky"><span class="tag">In Dubai</span><h3>Meet in person</h3><p>Visit our Downtown Dubai showroom, spend time bonding, and take your puppy home the same day.</p><p style="margin-top:1rem"><a class="btn btn-ghost" href="#/puppies?origin=local">Local puppies</a></p></div>'+
  '<div class="card blush"><span class="tag">Imported</span><h3>Order upon request</h3><p>Rare teacup breeds sourced from certified breeders in Europe and Korea. We handle the import for you.</p><p style="margin-top:1rem"><a class="btn btn-ghost" href="#/puppies?origin=imported">Imported puppies</a></p></div></div></div></section>'+
  '<section class="sec" style="padding-top:0"><div class="wrap"><div class="sec-h"><h2>Your puppy journey</h2></div><div class="steps">'+
  '<div class="step"><b>1</b><h3>Pick your pup</h3><p>Browse photos, breed, age and health details for every puppy.</p></div>'+
  '<div class="step"><b>2</b><h3>Say hello</h3><p>Message us on WhatsApp or send a letter. We reply with real photos and videos.</p></div>'+
  '<div class="step"><b>3</b><h3>Welcome home</h3><p>Pick up your puppy or have them delivered safely to your door.</p></div></div></div></section>'+
  '<section class="sec" style="padding-top:0"><div class="wrap"><div class="chat"><div><span class="hand">chat with us</span><h2 style="font-size:clamp(2rem,4vw,3rem);margin:.4rem 0 1rem">Ask on WhatsApp, get real photos</h2><p>Tap a breed and see how a conversation starts.</p><div class="chips" id="chips">'+chips+'</div><p style="margin-top:1.2rem"><a class="btn btn-green" target="_blank" rel="noopener" href="'+WA+'">Open WhatsApp</a></p></div>'+
  '<div class="bubbles"><div class="bub me" id="bme">Hi! Do you have a Maltipoo available?</div><div class="bub">Hello! Yes, we do. Sending photos and the health certificate now 🐶</div><div class="bub">Would you like to visit the showroom or have delivery?</div></div></div></div></section>'+
  '<section class="sec" style="padding-top:0"><div class="wrap"><div class="sec-h"><h2>Why families trust TeddyPups</h2></div><div class="why">'+
  '<div><div class="ic">🩺</div><h3>Vet-checked &amp; healthy</h3><p>Every puppy is vaccinated, dewormed and comes with a health certificate.</p></div>'+
  '<div><div class="ic">✈️</div><h3>Korea to Dubai, safely</h3><p>We manage health checks, travel and paperwork for imported puppies.</p></div>'+
  '<div><div class="ic">💬</div><h3>Support 24/7</h3><p>Advice on training, nutrition and care, any time you need it.</p></div></div></div></section>'+
  '<section class="sec" style="padding-top:0"><div class="wrap"><div class="sec-h"><div><h2>Happy families</h2></div><a class="btn btn-ghost" href="#/happy-families">See the wall</a></div>'+
  '<div class="quote"><p>“TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect.”</p><cite>Sarah M., Dubai, UAE</cite></div><div class="gal">'+gal+'</div></div></section>'+
  '<section class="sec" style="padding-top:0"><div class="wrap"><div class="sec-h"><h2>Good questions</h2><a class="btn btn-ghost" href="#/faq">All FAQs</a></div><div class="notes">'+faqs+'</div></div></section>'+
  '<section class="wrap"><div class="cta"><h2>Ready to meet your puppy?</h2><p>Message us any time. We reply with real photos and health details.</p><a class="btn btn-green" target="_blank" rel="noopener" href="'+WA+'">Enquire on WhatsApp</a></div></section>';
}
function puppies(q){
  var b=q.breed||'',o=q.origin||'';
  var breeds=[];P.forEach(function(p){if(breeds.indexOf(p.breed)<0)breeds.push(p.breed)});
  var list=P.filter(function(p){return (!b||p.breed===b)&&(!o||(o==='imported'?/Imported/.test(p.where):/local/i.test(p.where)))});
  return '<div class="wrap"><div class="page-h"><span class="hand">available now</span><h1>Puppies</h1><p>Every puppy comes vaccinated, dewormed and with a health certificate.</p></div>'+
  '<div class="filters"><select id="fb" aria-label="Breed"><option value="">All breeds</option>'+breeds.map(function(x){return '<option'+(x===b?' selected':'')+'>'+esc(x)+'</option>'}).join('')+'</select>'+
  '<select id="fo" aria-label="Origin"><option value="">Local &amp; imported</option><option value="local"'+(o==='local'?' selected':'')+'>Local (Dubai showroom)</option><option value="imported"'+(o==='imported'?' selected':'')+'>Imported for you</option></select></div>'+
  (list.length?'<div class="doors">'+list.map(doorCard).join('')+'</div><div class="floor" style="margin-top:2rem"></div>':'<p class="empty">No puppies match right now. Message us on WhatsApp and we will help you find one.</p>')+'</div>';
}
function detail(slug){
  var p=P.filter(function(x){return x.slug===slug})[0];
  if(!p)return '<div class="wrap"><div class="page-h"><h1>Puppy not found</h1><p><a class="btn btn-toffee" href="#/puppies">See available puppies</a></p></div></div>';
  var im=p.imgs.length?p.imgs:[p.cover];
  var th=im.map(function(s,i){return '<img data-i="'+i+'" alt="Photo '+(i+1)+'" src="'+u(s)+'" class="'+(i?'':'on')+'">'}).join('');
  var wa=WA+'?text='+encodeURIComponent('Hi TeddyPups, I would like to ask about '+p.name);
  return '<div class="wrap"><a class="back" href="#/puppies">← All puppies</a><div class="detail"><div><div class="gmain"><img id="gm" alt="'+esc(p.name)+'" src="'+u(im[0])+'"><span class="count" id="gc">1 / '+im.length+'</span>'+(im.length>1?'<button class="gnav l" id="gp" aria-label="Previous">‹</button><button class="gnav r" id="gn" aria-label="Next">›</button>':'')+'</div><div class="thumbs" id="th">'+th+'</div></div>'+
  '<div><span class="tag">Available</span><h1 class="plush">'+esc(p.name)+'</h1><p>'+esc(p.meta)+'</p><dl class="facts"><div><dt>Breed</dt><dd>'+esc(p.breed)+'</dd></div><div><dt>Boy or girl</dt><dd>'+esc(p.sex)+'</dd></div><div><dt>Age</dt><dd>'+esc(p.age)+'</dd></div><div><dt>Where</dt><dd>'+esc(p.where)+'</dd></div></dl>'+
  '<p style="display:flex;gap:.8rem;flex-wrap:wrap"><a class="btn btn-green" target="_blank" rel="noopener" href="'+wa+'">Ask about '+esc(p.name)+' on WhatsApp</a><a class="btn btn-ghost" href="#/contact?puppy='+p.slug+'">Send an enquiry</a></p>'+
  '<h3 style="margin:1.8rem 0 .3rem;font-size:1.4rem">What comes with every puppy</h3><ul class="inc"><li>Vaccinated</li><li>Dewormed</li><li>Verified health certificate</li></ul>'+
  '<h3 style="font-size:1.4rem">The way home</h3><ol class="way"><li>Say hello on WhatsApp or send an enquiry.</li><li>We share photos, videos and health details.</li><li>Meet your puppy or confirm the import.</li><li>Pick up or delivery to your door.</li></ol></div></div></div>';
}
var FAQ=[["Are your puppies vaccinated and health-checked?","Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family."],["Can I meet a puppy before I decide?","Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision."],["Can I take my puppy home the same day?","Local puppies are available immediately, so you can take your puppy home the same day."],["Do you import puppies from abroad?","Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond, and we handle the import for you."],["How does an imported puppy travel to Dubai?","We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free."],["Will I see photos and health details first?","Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp."],["Do you deliver?","Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world."],["Which breeds do you usually have?","Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie."],["Is there help after my puppy comes home?","Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend."]];
function faq(){
  return '<div class="wrap"><div class="page-h"><span class="hand">sniff out a question</span><h1>Questions &amp; answers</h1><p>Can\'t find what you\'re looking for? Message us on WhatsApp. Our team is available 24/7.</p><input class="faq-search" id="fs" type="search" placeholder="delivery, Korea, vaccinated…" autocomplete="off" aria-label="Search questions"></div><div class="notes" id="fn">'+FAQ.map(function(f){return '<div class="note"><h3>'+f[0]+'</h3><p>'+f[1]+'</p></div>'}).join('')+'</div><p class="empty" id="fe" hidden>Nothing found. Ask your own question on WhatsApp.</p><p style="text-align:center"><a class="btn btn-green" target="_blank" rel="noopener" href="'+WA+'">Ask your own question</a></p></div>';
}
function how(){
  function steps(a){return '<div class="steps" style="grid-template-columns:repeat(auto-fit,minmax(14rem,1fr))">'+a.map(function(s,i){return '<div class="step"><b>'+(i+1)+'</b><h3>'+s[0]+'</h3><p>'+s[1]+'</p></div>'}).join('')+'</div>'}
  return '<div class="wrap"><div class="page-h"><span class="hand">choose your way</span><h1>How it works</h1><p>Whether you choose to visit us locally or order a premium breed from overseas, TeddyPups is here to make the experience unforgettable.</p></div>'+
  '<section class="sec" style="padding-top:1rem"><span class="tag">In Dubai</span><h2 style="margin:.6rem 0">Meet your puppy in person</h2><p style="max-width:44rem;margin-bottom:1.5rem">Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. We source healthy, well-socialized puppies from trusted local breeders, raised with care, proper nutrition, and veterinary checks.</p>'+
  steps([["Explore our puppies","Browse our website to view the available puppies. Each listing includes photos, breed details, age, and health information."],["Choose your puppy","Open their profile for more information or to enquire further. You can also reach out directly."],["Meet before you choose","Spend time bonding before making your decision."],["Pick-up or delivery","Pick up your puppy or have them delivered within Dubai, safely and reliably."]])+'</section>'+
  '<section class="sec" style="padding-top:1rem"><span class="tag">Imported</span><h2 style="margin:.6rem 0">Order upon request</h2><p style="max-width:44rem;margin-bottom:1.5rem">Our Order Upon Request service gives you access to some of the world\'s most sought-after teacup breeds, ethically sourced from certified breeders across Europe, Korea, and beyond. From Korean teacup poodles to rare Maltese, Pom, and Yorkie lines.</p>'+
  steps([["Reserve your puppy","Place a reservation for the teacup puppy that captures your heart. Each puppy is sourced to your preferences."],["Personalized consultation","Once confirmed, we finalize details and update you on your puppy\'s journey."],["Import and arrival","We manage health checks, travel arrangements, and documentation."],["Welcome home","On arrival we help your puppy settle in. Our team is there for any extra help."]])+'</section>'+
  '<div class="passport"><h3 style="font-size:1.6rem;margin-bottom:.6rem">Our premium puppy promise</h3><ul><li>Verified health certificate from licensed vets</li><li>Vaccinated and dewormed</li><li>Photos, videos and health details shared before travel</li><li>24/7 support after your puppy comes home</li></ul></div></div>';
}
function happy(){
  return '<div class="wrap"><div class="page-h"><span class="hand">our wall of happy endings</span><h1>Happy families</h1><p>Nothing makes us happier than seeing our puppies in loving homes! Here are some moments shared by our amazing clients.</p><p style="margin-top:1rem"><b style="font-family:Fraunces;font-size:2rem">64</b> moments and counting</p></div><div class="quote"><p>“TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support gave us complete peace of mind.”</p><cite>Sarah M., Dubai, UAE</cite></div><div class="gal">'+D.happy.slice(1).map(function(g,i){return '<img loading="lazy" alt="Happy family photo '+(i+1)+'" src="'+u(g)+'">'}).join('')+'</div><p class="hand" style="text-align:center;margin:2rem 0">every one of them was a Teddy Pup once</p></div>';
}
function gone(){
  var n=[["Ace","Pomeranian, boy"],["Leo","Poodle, boy"],["Mia","Maltipoo, girl"],["Sadie","Maltipoo, girl"],["Ollie","Pomsky, boy"],["Bruno","Maltipoo, boy"],["Buddy","Maltese, boy"],["Charlie","Maltese, boy"],["Daisy","Pomeranian, girl"],["Bella","Pomeranian, girl"],["Teddy","Poodle, boy"],["Molly","Poodle, girl"],["Coco","Pomsky, girl"],["Rosie","Pomsky, girl"],["Rocky","Poodle, boy"],["Sophie","Maltipoo, girl"],["Lola","Maltipoo, girl"],["Rex","Pomeranian, boy"],["Finn","Pomsky, boy"],["Zoe","Maltipoo, girl"],["Mimi","Pomeranian, girl"],["Bailey","Bichon, boy"]];
  return '<div class="wrap"><div class="page-h"><span class="hand">tickets home</span><h1>Gone home</h1><p>Every puppy here has already joined a loving family. Looking for one just like them? Tell us and we will help you find your match.</p><p style="margin-top:1.2rem"><a class="btn btn-toffee" href="#/puppies">See available puppies</a></p></div><div class="tickets">'+n.map(function(x,i){return '<div class="ticket"><img alt="" loading="lazy" src="'+u(D.gone[i%D.gone.length])+'"><div><small>one ticket home</small><b>'+x[0]+'</b><br>'+x[1]+'<small style="margin-top:.4rem">home ♥ · admit one</small></div></div>'}).join('')+'</div></div>';
}
function contact(q){
  var opts='<option value="">any puppy (not sure yet)</option>'+P.map(function(p){return '<option value="'+p.slug+'"'+(q.puppy===p.slug?' selected':'')+'>'+esc(p.name+' ('+p.breed+', '+p.sex.toLowerCase()+')')+'</option>'}).join('');
  return '<div class="wrap"><div class="page-h"><span class="hand">say hello</span><h1>Get in touch with us</h1><p>Have questions about our puppies or adoption process? Fill out the form and our team will get back to you promptly.</p></div><div class="contact-grid"><form class="letter" id="cf" novalidate>Dear TeddyPups,<br>my name is <input name="name" required minlength="2" maxlength="80" aria-label="Your name (required)" autocomplete="name">, and you can reach me on <input name="phone" type="tel" required placeholder="+971 50 123 4567" aria-label="Phone or WhatsApp (required)" autocomplete="tel"> or by email at <input name="email" type="email" placeholder="optional" aria-label="Email (optional)" autocomplete="email">. I live in <input name="area" maxlength="80" placeholder="e.g. Dubai Marina" aria-label="Your area (optional)">, and I\'m curious about <select name="puppyId" aria-label="Puppy you\'re interested in (optional)">'+opts+'</select>.'+
  '<textarea name="message" rows="4" maxlength="2000" placeholder="Anything else you\'d like to tell us…" aria-label="Your message (optional)"></textarea><input class="hp" tabindex="-1" autocomplete="off" name="website" aria-hidden="true"><span class="sig">with love, a future puppy parent</span><button class="btn btn-toffee" type="submit">Post my letter</button><div id="fm" role="status"></div></form>'+
  '<div class="info"><div class="card"><h3>WhatsApp</h3><a href="'+WA+'" target="_blank" rel="noopener">+971 50 000 0000</a></div><div class="card"><h3>Call us</h3><a href="tel:+971500000000">+971 50 000 0000</a></div><div class="card"><h3>Visit us in Downtown Dubai</h3><p>Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face.</p><p style="margin-top:.6rem"><a class="hand" target="_blank" rel="noopener" href="https://maps.google.com/?q=Downtown+Dubai">Open in Google Maps →</a></p></div></div></div></div>';
}
function qs(s){var o={};(s||'').split('&').forEach(function(x){if(x){var k=x.split('=');o[decodeURIComponent(k[0])]=decodeURIComponent(k[1]||'')}});return o}
function after(r,q){
  if(r==='home'){var me=$('#bme');document.querySelectorAll('.chip').forEach(function(c){c.onclick=function(){document.querySelectorAll('.chip').forEach(function(x){x.classList.remove('on')});c.classList.add('on');me.textContent='Hi! Do you have a '+c.dataset.b+' available?'}});}
  if(r==='puppies'){var go=function(){location.hash='#/puppies?'+['breed='+encodeURIComponent($('#fb').value),'origin='+$('#fo').value].filter(function(x){return !/=$/.test(x)}).join('&')};$('#fb').onchange=go;$('#fo').onchange=go}
  if(r==='puppy'){var p=P.filter(function(x){return x.slug===q})[0];if(p){var im=p.imgs.length?p.imgs:[p.cover],i=0;var show=function(n){i=(n+im.length)%im.length;$('#gm').src=u(im[i]);$('#gc').textContent=(i+1)+' / '+im.length;document.querySelectorAll('#th img').forEach(function(t,k){t.classList.toggle('on',k===i)})};if($('#gn')){$('#gn').onclick=function(){show(i+1)};$('#gp').onclick=function(){show(i-1)}}document.querySelectorAll('#th img').forEach(function(t){t.onclick=function(){show(+t.dataset.i)}})}}
  if(r==='faq'||r==='home'){document.querySelectorAll('.note').forEach(function(n){n.onclick=function(){n.classList.toggle('open')}})}
  if(r==='faq'){$('#fs').oninput=function(e){var v=e.target.value.toLowerCase(),c=0;document.querySelectorAll('#fn .note').forEach(function(n){var m=n.textContent.toLowerCase().indexOf(v)>=0;n.hidden=!m;if(m)c++});$('#fe').hidden=c>0}}
  if(r==='contact'){$('#cf').onsubmit=function(e){e.preventDefault();var f=e.target,m=$('#fm');var d=new FormData(f);if(d.get('website')){return}
    var ok=(d.get('name')||'').trim().length>=2&&/^[+()\d\s-]{7,}$/.test((d.get('phone')||'').trim());
    if(!ok){m.className='formmsg err';m.textContent='Please add your name and a phone or WhatsApp number with country code.';return}
    try{var a=JSON.parse(localStorage.getItem('tp-enquiries')||'[]');a.push({name:d.get('name'),phone:d.get('phone'),email:d.get('email'),area:d.get('area'),puppy:d.get('puppyId'),message:d.get('message'),at:new Date().toISOString()});localStorage.setItem('tp-enquiries',JSON.stringify(a))}catch(x){}
    m.className='formmsg';m.textContent='Thank you, '+d.get('name').trim()+'! Your letter is posted. We will message you shortly. (Demo: stored in this browser only.)';f.reset()}}
}
function route(){
  var h=location.hash.replace(/^#/,'')||'/',pq=h.split('?'),path=pq[0].replace(/\/$/,'')||'/',q=qs(pq[1]),html,r='home',x;
  if(path==='/'){html=home()}
  else if(path==='/puppies'){r='puppies';html=puppies(q)}
  else if((x=path.match(/^\/puppies\/(.+)$/))){r='puppy';html=detail(x[1]);q=x[1]}
  else if(path==='/faq'){r='faq';html=faq()}
  else if(path==='/how-it-works'){r='how-it-works';html=how()}
  else if(path==='/happy-families'){r='happy-families';html=happy()}
  else if(path==='/gone-home'){r='gone-home';html=gone()}
  else if(path==='/contact'){r='contact';html=contact(q)}
  else{r='x';html='<div class="wrap"><div class="page-h"><h1>Page not found</h1><p><a class="btn btn-toffee" href="#/">Back home</a></p></div></div>'}
  main.innerHTML='<div class="fade">'+html+'</div>';
  var cur=r==='puppy'?'puppies':r;document.querySelectorAll('.nav a').forEach(function(a){a.classList.toggle('on',a.dataset.r===cur)});
  $('#nav').classList.remove('open');$('#burger').setAttribute('aria-expanded','false');
  window.scrollTo(0,0);document.title=(r==='puppy'&&P.filter(function(p){return p.slug===q})[0]?P.filter(function(p){return p.slug===q})[0].name+' | ':'')+'TeddyPups U.A.E.';
  after(r,q);
}
$('#burger').onclick=function(){var o=$('#nav').classList.toggle('open');this.setAttribute('aria-expanded',o)};
window.addEventListener('hashchange',route);route();
})();
