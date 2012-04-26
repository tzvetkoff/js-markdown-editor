window.onload = function() {
  var converter = new Showdown.converter();
	var source = document.getElementById('source');
	var markdown = document.getElementById('markdown');

	source.onchange = source.onkeyup = function() {
	  var html = converter.makeHtml(this.value);
	  markdown.innerHTML = html;
	}
}
