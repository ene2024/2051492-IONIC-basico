async function getValues() {
    let tipoGastoInput = await document.getElementById("tipo-gasto").getInputElement();
    let montoGastoInput = await document.getElementById("monto-gasto").getInputElement();

    if (tipoGastoInput.value.trim().length === 0 || montoGastoInput.value.length === 0) {
        return;
    }

    let previousTotal = parseInt(document.getElementById("total").innerText);
    let newTotal = previousTotal + parseInt(montoGastoInput.value);
    document.getElementById("total").innerHTML = newTotal;


    let child = document.createElement("p");
    child.innerHTML = "Articulo: " + tipoGastoInput.value + "<br> Monto: " + montoGastoInput.value;

    document.getElementById("resultados").appendChild(child)
    tipoGastoInput.value = ""
    montoGastoInput.value = ""
}
