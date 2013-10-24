var updateWebView = function() {
	$.a.blur();$.b.blur();
};
var calcC = function() {
	$.c.value = String(Math.round(100 - parseInt($.a.value || 0) - parseInt($.b.value || 0))+ '');
};

$.submit.addEventListener('click', updateWebView);
$.a.addEventListener('change', calcC);
$.b.addEventListener('change', calcC);
