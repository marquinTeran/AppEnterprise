describe("Test Inyector", function(){

    it('Porcentaje de carga de plasma, dependiendo el daño', function ()
    {
		var result = inyector.getFujoPlasma(0);
        expect(result).toEqual(100);
    });

});
