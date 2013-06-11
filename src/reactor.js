var reactor = {

    porcentaje_energia : 300,

    numero_inyectores_habiles : 3,

    getEnergia: function (velocidad_nave)
    {
		var energia = ((velocidad_nave * this.porcentaje_energia)/100);
        return energia;
    },

	setInyectoresHabiles: function()
	{
		this.numero_inyectores_habiles -= 1;
	},

	getMgsAdicionales: function(daño1, daño2, daño3, energia)
	{
		var resultados = {}; resultados.flujo = []; resultados.suma = [];
		var flujo_plasma_inyector_uno = inyector.getFujoPlasma(daño1);
		var flujo_plasma_inyector_dos = inyector.getFujoPlasma(daño2);
		var flujo_plasma_inyector_tres = inyector.getFujoPlasma(daño3);
		resultados.flujo[0] = flujo_plasma_inyector_uno;
		resultados.flujo[1] = flujo_plasma_inyector_dos;
		resultados.flujo[2] = flujo_plasma_inyector_tres;
		var mgs_conjunto_inyectores = flujo_plasma_inyector_uno + flujo_plasma_inyector_dos + flujo_plasma_inyector_tres;
		var mgs_requerido = reactor.getEnergia(energia);
		var suma_mgs = mgs_requerido - mgs_conjunto_inyectores;
		var mgs_por_inyector = suma_mgs / this.numero_inyectores_habiles;
		resultados.suma[0] = mgs_por_inyector;
		return this.setArrayResult(resultados);
	},

	setArrayResult: function(arrayparametros){
		arrayparametros.tiempo = [];
		for(i = 0; i < arrayparametros["flujo"].length; i++){
			if(arrayparametros["flujo"][i] > 0){
				if( arrayparametros["suma"][0] > 99){
					arrayparametros["flujo"][i] = "Unable to comply";
				}else{
					suma = arrayparametros["flujo"][i]+arrayparametros["suma"][0];
					arrayparametros["flujo"][i] = "Flujo a inyectar " + suma + " mg/s";;
				}
			}
		}
		if ( arrayparametros["suma"][0] != 0 )
			arrayparametros.tiempo[0] = 100 - arrayparametros["suma"][0];
		console.log(arrayparametros)
		return arrayparametros;
	}

};
