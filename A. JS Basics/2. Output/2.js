var write = document.getElementById('write');
var aler = document.getElementById('aler');
var conlog = document.getElementById('conlog');
var prin = document.getElementById('prin');

write.addEventListener('click', function write(){
	document.write(1 + 1);
});

aler.addEventListener('click', function aler(){
	window.alert('This Using window.alert');
});

conlog.addEventListener('click', function conlog(){
	console.log('This Using console.log');
});

prin.addEventListener('click', function prin(){
	window.print('This Using console.log');
});