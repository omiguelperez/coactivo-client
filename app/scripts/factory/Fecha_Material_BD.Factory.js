App.factory('datepicker',function() {

	var json_return = {};

	json_return.conversor = function(fecha) {
		var date = new Date(fecha);
		return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();	
	}

	return json_return;
});
