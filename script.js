function calcularImc() {
    const alturaInput = document.querySelector('input[name=altura]');
    const altura = parseFloat(alturaInput.value);

    const pesoInput = document.querySelector('input[name=peso]');
    const peso = parseFloat(pesoInput.value);

    const resultado = document.getElementById('resultado');

    if (!isNaN(altura) && !isNaN(peso) && altura > 0 && peso > 0) {
        const imc = peso / (altura * altura);
        let mensagem = `Seu IMC é: ${imc.toFixed(2)}.`;

        if (imc < 18.5) {
            mensagem += ' (Abaixo do Peso)';
        } else if (imc < 24.9) {
            mensagem += ' (Peso Normal)';
        } else if (imc < 29.9) {
            mensagem += ' (Sobrepeso)';
        } else if (imc < 34.9) {
            mensagem += ' (Obesidade Grau I)';
        } else if (imc < 39.9) {
            mensagem += ' (Obesidade Grau II)';
        } else {
            mensagem += ' (Obesidade Grau III)';
        }

        resultado.textContent = mensagem;
    } else {
        resultado.textContent = 'Por favor, insira valores válidos para altura e peso.';
    }
}
