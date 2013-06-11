var inyector = {

    flujo_plasma: 100,

    flujo_plasma_adicional: 99,

    getFujoPlasma: function (porcentaje_daño)
    {
		if ( porcentaje_daño != 100 ){
			return this.flujo_plasma - porcentaje_daño;
		}else{
	        reactor.setInyectoresHabiles();
			return 0;
		}
    }

};
