// API key handled server-side via Vercel env var ANTHROPIC_API_KEY.
// All AI calls go to /api/anthropic which proxies to Anthropic with the secret key.

// Early shims so onclick attrs work before main script loads
(function(){
  function _safeGoTo(id){
    document.querySelectorAll('.page').forEach(function(p){ p.classList.remove('active'); });
    var el = document.getElementById(id);
    if(el){ el.classList.add('active'); window.scrollTo(0,0); }
  }
  if(typeof goTo          === 'undefined') window.goTo          = _safeGoTo;
  if(typeof showClasses   === 'undefined') window.showClasses   = function(section, btn){
    document.querySelectorAll('.lvl-btn').forEach(function(b){ b.classList.remove('on'); });
    if(btn) btn.classList.add('on');
    var cr = document.getElementById('classRow');
    if(cr) cr.style.display = 'block';
  };
  if(typeof enterClassroom === 'undefined') window.enterClassroom = function(){
    setTimeout(function(){ if(typeof enterCL === 'function') enterCL(); }, 400);
  };
})();
