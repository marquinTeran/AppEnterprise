describe("Test Reactor", function(){

    function inyector_uno(porcentaje_daño)
    {
        return inyector.flujo_plasma;
    }

    it('Obtener la cantidad de energia requerida', function ()
    {
		nave.setVelocidadRequerida(100);
		var velocidad_nave = nave.velocidad_requerida;
		var result = reactor.getEnergia(velocidad_nave);
        expect(result).toEqual(300);
    });

    it('Numero de inyectores habiles', function ()
    {
		inyector.getFujoPlasma(10);
		var result = reactor.numero_inyectores_habiles;
        expect(result).toEqual(3);
    });

    it('Maximo Flujo del conjunto de inyectores', function ()
    {
		var total = inyector.getFujoPlasma(20) + inyector.getFujoPlasma(10) + inyector.getFujoPlasma(0);
        expect(total).toEqual(270);
    });

//    it('mg/s Adicionales', function ()
//    {
//		var result = reactor.getMgsAdicionales(20, 10, 0, 100);
//        expect(result).toEqual(30);
//    });

});
