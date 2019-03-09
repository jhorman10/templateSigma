//validando formulario
var valor;
var q1 = null; 
var q2 = null; 
var q3 = null; 
var q4 = null; 
var q5 = null; 
var q6 = null; 
function validar(){
	q1 = document.getElementById("q1");
	q2 = document.getElementById("q2");
	q3 = document.getElementById("q3");
	q4 = document.getElementById("q4");
	q5 = document.getElementById("q5");
	q6 = document.getElementById("q6");

	if (q1 == 'no' && q2 == 'no' && q3 == 'no' && q4 == 'no' && q5 == 'no' && q6 == 'no')
			{
			return valor = false;
			}
	else{
			return valor = true;
			}
}
// consumiendo API
var slide = document.querySelector('#carouselExampleCaptions')
function traer(){
	fetch('https://api.myjson.com/bins/17ocpi')
	.then(res => res.json())
	.then(data =>{
		console.log(data);
	});
}
