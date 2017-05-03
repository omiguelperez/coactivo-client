App.factory('TemporalData',function() {

	var json_return = {};

	json_return.array = new Array();

	json_return.almacenar = function(json) {
		json_return.array.push(json);
	}

	json_return.vaciar = function(json) {
		json_return.array = [];
	}

	return json_return;
});