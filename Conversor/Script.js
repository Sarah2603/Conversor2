function converterTemperatura() {
    const temperaturaInput = document.getElementById("temperature");
    const conversionType = document.getElementById("conversionType");
    const outputDiv = document.getElementById("output");

    const temperatura = parseFloat(temperaturaInput.value);
    const escolha = parseInt(conversionType.value);

    if (isNaN(temperatura)) {
        alert("Por favor, digite uma temperatura válida.");
        return;
    }

    let resultado;

    switch (escolha) {
        case 1:
            resultado = celsiusParaFahrenheit(temperatura);
            break;
        case 2:
            resultado = fahrenheitParaCelsius(temperatura);
            break;
        case 3:
            resultado = celsiusParaKelvin(temperatura);
            break;
        default:
            alert("Opção inválida. Por favor, escolha uma opção válida.");
            return;
    }

    outputDiv.style.display = "block";
    outputDiv.innerHTML = `${temperatura}° é equivalente a ${resultado}°`;

    adicionarAoHistorico(temperatura);
}

function exibirHistorico() {
    const outputDiv = document.getElementById("output");
    const historico = obterHistorico();

    outputDiv.style.display = "block";
    outputDiv.innerHTML = "<strong>Últimas temperaturas convertidas:</strong><br>";

    historico.forEach((temperatura, index) => {
        outputDiv.innerHTML += `${index + 1}. ${temperatura}°<br>`;
    });
}

function sair() {
    alert("Obrigado por usar o Conversor de Temperatura. Até mais!");
}

function obterHistorico() {
    
    return JSON.parse(localStorage.getItem("historico")) || [];
}

function adicionarAoHistorico(temperatura) {
    const historico = obterHistorico();
    historico.push(temperatura);

    if (historico.length > 5) {
        historico.shift();
    }

    
    localStorage.setItem("historico", JSON.stringify(historico));
}

function celsiusParaFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function celsiusParaKelvin(celsius) {
    return celsius + 273.15;
}
