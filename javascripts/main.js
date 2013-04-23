window.onload = function() {
  // Set default options
  marked.setOptions({
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    langPrefix: 'language-',
    highlight: function(code, lang) {
      if (lang === 'js') {
        return highlighter.javascript(code);
      }
      return code;
    }
  });

  var source = document.getElementById('source');
  var markdown = document.getElementById('markdown');

  source.onchange = source.onkeyup = function() {
    var html = marked(this.value);
    markdown.innerHTML = '<div class="markdown-body">'+html+'</div>';
  }
};
