function printm() {
	let elem = document.getElementById("input1"); 

	if (!elem.value) {
		return;
	}

	alert(document.getElementById("input1").value);
}

function clearf() {
	document.getElementById("input1").value = "";
}