function test() {
	location.href = 'nave.jasmine.test.htm';
}

function cambiarValor(idBarra, idCampo){
	document.getElementById(idBarra).value = (document.getElementById(idCampo).value/10);
}

function velocidad(){
document.getElementById('lblVelocidad').innerHTML = (document.getElementById('rgVelocidad').value * 2) + "%"
}

function calcular(){
	var dano1 = parseInt(document.getElementById("txtDano1").value);
	var dano2 = parseInt(document.getElementById("txtDano2").value);
	var dano3 = parseInt(document.getElementById("txtDano3").value);
	var porcentaje_velocidad = parseInt(document.getElementById("lblVelocidad").innerHTML);
	var status = document.getElementById("chkCalcular").checked;
	if(!status){
		location.reload();
	}else{
		arrayResultados = reactor.getMgsAdicionales(dano1, dano2, dano3, porcentaje_velocidad);
		var tiempo = (arrayResultados['tiempo'][0] == null || arrayResultados['tiempo'][0] > 100 ) ? "INFINITO" : (arrayResultados['tiempo'][0] < 0 ) ? 0 : arrayResultados['tiempo'][0] ;
		document.getElementById("txtTiempo").value = tiempo;
		document.getElementById("lblFlujo1").innerHTML = arrayResultados['flujo'][0];
		document.getElementById("lblFlujo2").innerHTML = arrayResultados['flujo'][1];
		document.getElementById("lblFlujo3").innerHTML = arrayResultados['flujo'][2];
	}
}
