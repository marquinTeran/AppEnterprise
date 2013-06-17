describe("Test Reactor", function(){

    function inyector_uno(porcentaje_daño)
    {
        return inyector.flujo_plasma;
    }

    it('Obtener la cantidad de energía requerida', function ()
    {
		nave.setVelocidadRequerida(100);
		var velocidad_nave = nave.velocidad_requerida;
		var result = reactor.getEnergia(velocidad_nave);
        expect(result).toEqual(300);
    });

    it('Número de inyectores para funcionamiento del reactor', function ()
    {
		reactor.setInyectores(3);
        expect(reactor.numero_inyectores_habiles).toEqual(3);
    });

    it('Número de inyectores hábiles', function ()
    {
		inyector.getFujoPlasma(100);
		var result = reactor.numero_inyectores_habiles;
        expect(result).toEqual(2);
    });

    it('Maximo Flujo del conjunto de inyectores', function ()
    {
		danios_por_inyector = new Array(20, 10, 0);
		var total = 0;
		for(i = 0; i < danios_por_inyector.length; i++)
			total += inyector.getFujoPlasma(danios_por_inyector[i]);
        expect(total).toEqual(270);
    });

    it('mg/s Adicionales', function ()
    {
		danios_por_inyector = new Array(20, 10, 0);
		var result = reactor.getMgsAdicionales(danios_por_inyector, 100);
        expect(result).toEqual(30);
    });

    it('Obtener array de resultados sin sumar plasma adicional', function ()
    {
		var resultados = {}; resultados.flujo = []; resultados.suma = [];
		resultados.flujo = new Array(80, 90, 100);
		resultados.suma[0] = 15;
		danios_por_inyector = new Array(20, 10, 0);
		var result = reactor.getResultados(danios_por_inyector, 100);
        expect(result).toEqual(resultados);
    });


    it('Obtener array de resultados sumand0 plasma adicional y tiempo de funcionamiento', function ()
    {
		var resultados = {}; resultados.flujo = []; resultados.suma = [];resultados.tiempo = [];
		resultados.flujo[0] = 'Flujo a inyectar 95 mg/s';
		resultados.flujo[1] = 'Flujo a inyectar 105 mg/s';
		resultados.flujo[2] = 'Flujo a inyectar 115 mg/s';
		resultados.suma[0] = 15;
		resultados.tiempo[0] = 85;
		danios_por_inyector = [20, 10 ,0];
		var result = reactor.getResultados(danios_por_inyector, 100);
        expect(reactor.getValoresInyectar_TiempoFuncionamiento(result)).toEqual(resultados);
    });

});
