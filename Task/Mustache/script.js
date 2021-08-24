
var viewData = { name: 'Jonny' };
$.Mustache.load('./templates/greetings.htm')
	.done(function () {
    	$('body').mustache('simple-hello', viewData);
    });



function renderHello() {
  var template = document.getElementById('template').innerHTML;
  var rendered = Mustache.render(template, { name: 'Luke' });
  document.getElementById('target').innerHTML = rendered;
}