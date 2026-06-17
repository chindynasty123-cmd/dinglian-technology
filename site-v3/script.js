const buttons = document.querySelectorAll('.lang-switch button');
const translatable = document.querySelectorAll('[data-en][data-zh]');
function setLang(lang){
  document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
  document.body.classList.toggle('zh-mode', lang === 'zh');
  translatable.forEach(el => { el.textContent = el.dataset[lang]; });
  buttons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  localStorage.setItem('dinglian-lang', lang);
}
buttons.forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.lang)));
setLang(localStorage.getItem('dinglian-lang') || 'en');
