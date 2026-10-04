
const menuBtn = document.querySelector('[data-menu]');
const mobilePanel = document.querySelector('[data-mobile]');
if(menuBtn && mobilePanel){
  menuBtn.addEventListener('click',()=>{
    const open = mobilePanel.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded',String(open));
    document.body.classList.toggle('menu-open',open);
  });
  mobilePanel.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    mobilePanel.classList.remove('open'); document.body.classList.remove('menu-open'); menuBtn.setAttribute('aria-expanded','false');
  }));
}
document.querySelectorAll('.faq-q').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item=btn.closest('.faq-item');
    const open=item.classList.toggle('open');
    btn.setAttribute('aria-expanded',String(open));
  });
});
const cookie = document.querySelector('[data-cookie]');
if(cookie && !localStorage.getItem('tolivi-cookie-choice')){
  setTimeout(()=>cookie.classList.add('show'),900);
}
document.querySelectorAll('[data-cookie-choice]').forEach(btn=>btn.addEventListener('click',()=>{
  localStorage.setItem('tolivi-cookie-choice',btn.dataset.cookieChoice);
  if(cookie) cookie.classList.remove('show');
}));
document.querySelectorAll('[data-host-form]').forEach(form=>{
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const fd=new FormData(form);
    const subject=encodeURIComponent('Tolivi host setup');
    const body=encodeURIComponent(
`Hi Tolivi,

I'd like the setup link.

Work email: ${fd.get('email')||''}
City: ${fd.get('city')||''}
Venue or promoter: ${fd.get('venue')||''}`
    );
    window.location.href=`mailto:info@tolivi.com?subject=${subject}&body=${body}`;
  });
});
