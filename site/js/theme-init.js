(function () {
  try {
    var t = localStorage.getItem('iasds_theme_v1');
    if (t !== 'light' && t !== 'dark') {
      t = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.dataset.theme = t;
    if (t === 'dark') document.documentElement.classList.add('dark');
    var fs = JSON.parse(localStorage.getItem('iasds_font_size_v1') || '"md"');
    var lh = JSON.parse(localStorage.getItem('iasds_line_height_v1') || '"normal"');
    var fm = JSON.parse(localStorage.getItem('iasds_focus_mode_v1') || 'false');
    var sc = JSON.parse(localStorage.getItem('iasds_sidebar_collapsed_v1') || 'false');
    var tc = JSON.parse(localStorage.getItem('iasds_toc_collapsed_v1') || 'false');
    document.documentElement.dataset.fontSize = fs;
    document.documentElement.dataset.lineHeight = lh;
    document.documentElement.dataset.focusMode = fm ? 'true' : 'false';
    document.documentElement.dataset.sidebarCollapsed = sc ? 'true' : 'false';
    document.documentElement.dataset.tocCollapsed = tc ? 'true' : 'false';
  } catch (e) {}
})();
