const Calcular = document.getElementById('CalcularMontante');

function CalculoMontante() {
    let parcelaMensal = parseFloat(document.getElementById('ParcelaMensal').value);
    let taxaJuros = parseFloat(document.getElementById('TaxaJuros').value);
    let tempo = parseFloat(document.getElementById('Tempo').value);
    const divResultado = document.getElementById('divResultado');

    if (parcelaMensal != "" && tempo != "" && taxaJuros != "") {
        parcelaMensal = parcelaMensal.toFixed(2);
        taxaJuros = taxaJuros / 100;
        let futureValue = (parcelaMensal * ((1 + taxaJuros)**tempo - 1)) / taxaJuros;
        let Resultado = parseFloat(futureValue.toFixed(2));
        Resultado = Resultado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        
        divResultado.textContent = `Seu montante será de ${Resultado}.`;
    }else {
        divResultado.textContent = `Preencha os campos corretamente.`;
    }
}

Calcular.addEventListener('click', CalculoMontante);