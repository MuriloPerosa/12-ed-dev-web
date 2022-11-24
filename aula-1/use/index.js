console.log('carregando script...')
var button = document.getElementById('btnTest');
var click  = 1;
button.addEventListener('click', (ev) => console.log(click++));