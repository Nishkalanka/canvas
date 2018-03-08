function fch() {
	var chbox = document.getElementById('one');

	if (chbox.checked) {
		alert('Выбрано');
	} else {
		alert('Не выбрано');
	}
}

function fun() {
	var radios = document.getElementsByName('r1');

	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			alert('Выбран ' + i + ' элемент'  );
		}
	}

}



