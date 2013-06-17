var reactor = {

    porcentaje_energia : 300,

    numero_inyectores_habiles : 3,

    getEnergia: function (velocidad_nave)
    {
		var energia = ((velocidad_nave * this.porcentaje_energia)/100);
        return energia;
    },

	setInyectores: function(value)
	{
		this.numero_inyectores_habiles = value;
	},

	setInyectoresHabiles: function()
	{
		this.numero_inyectores_habiles -= 1;
	},

	getMgsAdicionales: function(danios_por_inyector, energia)
	{
		var mgs_conjunto_inyectores = 0;
		for(i = 0; i < danios_por_inyector.length; i++)
			mgs_conjunto_inyectores += inyector.getFujoPlasma(danios_por_inyector[i]);
		var suma_mgs = reactor.getEnergia(energia) - mgs_conjunto_inyectores;
		return suma_mgs;
	},

	getResultados: function(danios_por_inyector, energia)
	{
		var mgs_adicionales = this.getMgsAdicionales(danios_por_inyector, energia);
		var resultados = {}; resultados.flujo = []; resultados.suma = [];
		for(i = 0; i < danios_por_inyector.length; i++)
			resultados.flujo[i] = inyector.getFujoPlasma(danios_por_inyector[i]);
		var mgs_por_inyector_habiles = mgs_adicionales / this.numero_inyectores_habiles;
		resultados.suma[0] = mgs_por_inyector_habiles;
		return resultados;
	},

	getValoresInyectar_TiempoFuncionamiento: function(arrayparametros){
		arrayparametros.tiempo = [];
		for(i = 0; i < arrayparametros["flujo"].length; i++){
			if(arrayparametros["flujo"][i] > 0){
				if( arrayparametros["suma"][0] > inyector.flujo_plasma_adicional){
					arrayparametros["flujo"][i] = "Unable to comply";
				}else{
					suma = arrayparametros["flujo"][i]+arrayparametros["suma"][0];
					arrayparametros["flujo"][i] = "Flujo a inyectar " + suma + " mg/s";;
				}
			}
		}
		var tiempo = 100 - arrayparametros["suma"][0];
		arrayparametros.tiempo[0] = (tiempo == null || tiempo >= 100 )? "INFINITO" : (tiempo < 0)? 0 : tiempo;
		return arrayparametros;
	}

};
