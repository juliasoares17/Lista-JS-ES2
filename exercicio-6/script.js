function calculo(){
    var num1 = parseFloat(document.getElementById('numero1').value)
    var num2 = parseFloat(document.getElementById('numero2').value)
    var operacao = (document.getElementById('operacao').value).toLowerCase()

    if (isNaN(num1) || isNaN(num2)){
        alert(`Não foi possível realizar o cálculo. Insira apenas valores numéricos.`)
        return
    }

    var resultado

    switch (operacao){
        case 'soma':
            resultado = (num1 + num2)
            break
        case 'subtração':
            resultado = (num1 - num2)
            break
        default:
            alert(`Operação não identificada. Escreva 'soma' ou 'subtração'.`)
            return
    }

    document.getElementById('resultado').innerText = `O resultado é: ${resultado}`
    document.getElementById('resultado_container').classList.remove('esconder')
}

function limparCampos(){
    document.getElementById('numero1').value = ''
    document.getElementById('numero2').value = ''
    document.getElementById('operacao').value = ''
}