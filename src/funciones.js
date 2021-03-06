function test() {
	location.href = 'nave.jasmine.test.html';
}

function propuesto() {
	location.href = 'propuesto.html';
}

function nave() {
	location.href = 'nave.html';
}


function cambiarValor(idBarra, idCampo){
	document.getElementById(idBarra).value = (document.getElementById(idCampo).value/10);
}

function velocidad(){
document.getElementById('lblVelocidad').innerHTML = (document.getElementById('rgVelocidad').value * 2) + "%"
}

function calcular(){
	var limite = reactor.numero_inyectores_habiles;
	var danios_por_inyector = new Array(limite);
	for(i = 1; i <= limite; i++){
		danios_por_inyector[i-1] = parseInt(document.getElementById("txtDano"+i).value);
	}
	var porcentaje_velocidad = parseInt(document.getElementById("lblVelocidad").innerHTML);
	var status = document.getElementById("chkCalcular").checked;
	if(!status){
		location.reload();
	}else{		
		arrayResultados = reactor.getValoresInyectar_TiempoFuncionamiento(reactor.getResultados(danios_por_inyector, 100));
		document.getElementById("txtTiempo").value = arrayResultados['tiempo'][0];
		for(i = 1; i <= limite; i++){
			document.getElementById("lblFlujo"+i).innerHTML = arrayResultados['flujo'][i-1];
		}
	}
}

function init(){
    inyector.flujo_plasma = 100;
    nave.velocidad_requerida = 100;
    reactor.porcentaje_energia = 300;
    reactor.numero_inyectores_habiles = 3;
}
