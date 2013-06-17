var interfaz = {

    getInputs: function (numero_inyectores)
    {
		var str = "";
		for(i = 1; i <= numero_inyectores; i++)
		{
			str += "<fieldset class='inyector'><legend>INYECTOR "+i+"</legend><meter value='0' id='inyector"+i+"'></meter><input type='text' class='entradas' maxlength='3' id='txtDano"+i+"' onkeyPress=cambiarValor('inyector"+i+"','txtDano"+i+"') placeholder='% Daño' /><br><label style='color: #73d216' id='lblFlujo"+i+"'></label></fieldset>";
		}
		document.getElementById('motor').innerHTML = str;
    },

};
