document.getElementById('intro').innerHTML = 'Hello JS';
document.getElementById('intro').style.fontSize = '100px';

var show = document.getElementById('show');
var hide = document.getElementById('hide');

show.addEventListener('click', function show(){
	document.getElementById('intro').style.display = 'block'; // memunculkan element pada JS
});

hide.addEventListener('click', function hide(){
	document.getElementById('intro').style.display = 'none'; // menghilangkan element pada JS
});	