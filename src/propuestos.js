var caso = new Array(0, 0, 0);
var caso1 = new Array(20, 10, 0);
var caso2 = new Array(0, 0 , 100);
var caso3 = new Array(0, 0, 30);
var caso4 = new Array(20, 50, 40);

resultCaso1 = reactor.getValoresInyectar_TiempoFuncionamiento(reactor.getResultados(caso, 100));
document.getElementById('caso0').innerHTML = resultCaso1['flujo'];
document.getElementById('tiempo0').innerHTML = resultCaso1['tiempo'];
init();
resultCaso2 = reactor.getValoresInyectar_TiempoFuncionamiento(reactor.getResultados(caso, 90));
document.getElementById('caso1').innerHTML = resultCaso2['flujo'];
document.getElementById('tiempo1').innerHTML = resultCaso2['tiempo'];
init();
resultCaso3 = reactor.getValoresInyectar_TiempoFuncionamiento(reactor.getResultados(caso, 30));
document.getElementById('caso2').innerHTML = resultCaso3['flujo'];
document.getElementById('tiempo2').innerHTML = resultCaso3['tiempo'];
init();
resultCaso4 = reactor.getValoresInyectar_TiempoFuncionamiento(reactor.getResultados(caso1, 100));
document.getElementById('caso3').innerHTML = resultCaso4['flujo'];
document.getElementById('tiempo3').innerHTML = resultCaso4['tiempo'];
init();
resultCaso5 = reactor.getValoresInyectar_TiempoFuncionamiento(reactor.getResultados(caso2, 80));
document.getElementById('caso4').innerHTML = resultCaso5['flujo'];
document.getElementById('tiempo4').innerHTML = resultCaso5['tiempo'];
init();
resultCaso6 = reactor.getValoresInyectar_TiempoFuncionamiento(reactor.getResultados(caso, 150));
document.getElementById('caso5').innerHTML = resultCaso6['flujo'];
document.getElementById('tiempo5').innerHTML = resultCaso6['tiempo'];
init();
resultCaso7 = reactor.getValoresInyectar_TiempoFuncionamiento(reactor.getResultados(caso3, 140));
document.getElementById('caso6').innerHTML = resultCaso7['flujo'];
document.getElementById('tiempo6').innerHTML = resultCaso7['tiempo'];
init();
resultCaso8 = reactor.getValoresInyectar_TiempoFuncionamiento(reactor.getResultados(caso4, 170));
document.getElementById('caso7').innerHTML = resultCaso8['flujo'];
document.getElementById('tiempo7').innerHTML = resultCaso8['tiempo'];
