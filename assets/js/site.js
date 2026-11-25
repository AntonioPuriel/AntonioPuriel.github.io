// Theme toggle and spam-protected email. The initial theme is set inline in <head>.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  function sync() {
    var dark = root.getAttribute('data-theme') === 'dark';
    btn.textContent = dark ? 'Light' : 'Dark';
    btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
  }
  if (btn) {
    sync();
    btn.addEventListener('click', function () {
      var t = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', t);
      try { localStorage.setItem('theme', t); } catch (e) {}
      sync();
    });
  }
  // The address is assembled at runtime and never appears in the HTML source.
  var u = ['apuri', 'elh'].join(''), d = ['gmail', 'com'].join('.');
  document.querySelectorAll('.js-mail').forEach(function (a) {
    a.href = 'mai' + 'lto:' + u + '@' + d;
    a.textContent = u + '@' + d;
  });
})();
