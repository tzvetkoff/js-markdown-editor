window.onload = function() {
  marked.setOptions({
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    langPrefix: 'language-'/*,
    highlight: function(code, lang) {
      if (lang === 'js') {
        return highlighter.javascript(code);
      }
      return code;
    }
    */
  });

  var source = document.getElementById('editor_code');
  var output = document.getElementById('preview_code');

  source.onkeydown = function(event) {
    var keyCode = event.keyCode ? event.keyCode : event.charCode ? event.charCode : event.which;
    if (keyCode == 9 && !event.shiftKey && !event.ctrlKey && !event.altKey) {
      var scrollTop = this.scrollTop;

      if (this.setSelectionRange) {
        var selectionStart = this.selectionStart;
        var selectionEnd = this.selectionEnd;
        this.value = this.value.substring(0, selectionStart) + '\t' + this.value.substr(selectionEnd);
        this.setSelectionRange(selectionStart + 1, selectionStart + 1);
        this.focus();
      } else if (this.createTextRange) {
        document.selection.createRange().text = '\t';
        event.returnValue = false;
      }

      this.scrollTop = scrollTop;

      if (event.preventDefault) {
        event.preventDefault();
      }

      return false;
    }

    return true;
  }

  source.onchange = source.onkeyup = function() {
    var html = marked(this.value);
    output.innerHTML = '<div class="markdown-body">'+html+'</div>';
  }

  source.onchange();
};
