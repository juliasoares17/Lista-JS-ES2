var nome = prompt("Digite seu nome:", "Nome")

function calcularIMC(){
    var altura = parseFloat(document.getElementById('altura').value)
    var peso = parseFloat(document.getElementById('peso').value)
    var altura = (altura)/100
    var m = peso/(altura**2)
    var descricao = ''

    if (!altura || !peso || isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0){
        alert(`Não foi possível realizar o cálculo. Tente inserir outros valores.`)
        return
    }
    if (m < 16){
        descricao = 'Baixo peso muito grave'
    } else if (m >= 16 && m <= 16.99) {
        descricao = 'Baixo peso grave'
    } else if (m >= 17 && m <=18.49) {
        descricao = 'Baixo peso'
    } else if (m >= 18.50 && m <= 24.99) {
        descricao = 'Peso normal'
    } else if (m >= 25 && m <= 29.99) {
        descricao = 'Sobrepeso'
    } else if (m >= 30 && m <= 34.99) {
        descricao = 'Obesidade grau I'
    } else if (m >= 35 && m <= 39.99) {
        descricao = 'Obesidade grau II'
    } else {
        descricao = 'Obesidade grau III'
    }
    document.getElementById('resultado').innerText = `${nome} possui índice de massa corporal igual a ${m.toFixed(2)}, sendo classificado/a como ${descricao}`
    document.getElementById('div_resultado').classList.remove('esconder')
}

function limparCampos(){
    document.getElementById('altura').value = ''
    document.getElementById('peso').value = ''
}

