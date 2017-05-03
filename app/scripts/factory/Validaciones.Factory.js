App.factory('Validaciones',function() {

	var json_return = {};

	json_return.letras = function(array) {
		var patron=/^[a-zA-Z\s]*$/;
		for (var i = 0; i < array.length; i++) {
			if (!patron.test(array[i].value)) {
				return {status:false,msg:"Sólo se permiten letras en este campo",id:array[i].id};
			}
		}
		return {status:true};
	}

	json_return.nulos = function(array){
		for (var i = 0; i < array.length; i++) {
			if (array[i].value === "" || array[i].value === null || array[i].value === undefined|| array[i].value === "NaN-NaN-NaN" ){
				return {status:false,msg:"Tiene un campo Incorrecto",id:array[i].id};
			}
		}
		return {status:true};
	}

	json_return.FechaLimite = function(array) {
		var actual = new Date();
		for (var i = 0; i < array.length; i++) {
			var envio = new Date(array[i].value);
			if (envio>actual) {
				return {status:false,msg:"Las fechas no puede ser mayores a la actual",id:array[i].id};
			}
		}
		return {status:true}
	}

	json_return.FechaNacimiento = function(array) {
		var actual = new Date();
		var envio = new Date(array[0].value);
		var age = actual.getFullYear() - envio.getFullYear();
		var m = actual.getMonth() - envio.getMonth();
	    if (m < 0 || (m === 0 && actual.getDate() < envio.getDate())) {
	        age--;
		}
		if (age<18) {
			return {status:false,msg:"Solo se registran mayores de edad",id:array[0].id};
		}
		return {status:true};
	}

	return json_return;
});
