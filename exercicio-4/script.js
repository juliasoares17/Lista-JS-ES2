function calcularFrete(){
    var rastreamento = document.getElementById('rastreamento').value
    var numero_pecas = parseFloat(document.getElementById('numero_pecas').value)
    var regiao = document.getElementById('regiao').value
    var distancia = parseFloat(document.getElementById('distancia').value)
    var combustivel = parseFloat(document.getElementById('combustivel').value)
    var resultado_final = 0
    var taxaRastreamento = 0
    var custo = 0

    if (isNaN(numero_pecas) || isNaN(distancia) || isNaN(combustivel) || numero_pecas < 0 || distancia < 0 || combustivel < 0){
        alert(`Não foi possível realizar o cálculo. Tente inserir outros valores.`)
        return
    }

    if (rastreamento.toLowerCase() == 's' || rastreamento.toLowerCase() == 'sim'){
        taxaRastreamento += 200
        resultado_final += taxaRastreamento
        } else if (rastreamento.toLowerCase() == 'n' || rastreamento.toLowerCase() == 'nao' || rastreamento.toLowerCase() == 'não'){
            taxaRastreamento = 0
        } else {
            alert('Escreva se deseja rastramento ou não.')
            return
        }

    switch ((regiao).toLowerCase()){
        case 'sul':
        case '1':
            if (numero_pecas <= 1000){
                custo = numero_pecas * 1.00
                resultado_final += custo
            } else {
                excesso = numero_pecas - 1000
                custo = (1000 * 1.00) + (excesso * 0.9)
                resultado_final += custo
            }
            break
        case 'sudeste':
        case '2':
            if (numero_pecas <= 1000){
                custo = numero_pecas * 1.20
                resultado_final += custo
            } else {
                excesso = numero_pecas - 1000
                custo = (1000 * 1.20) + (excesso * 1.056)
                resultado_final += custo
            }
            break
        case 'centro-oeste':
        case '3':
            if (numero_pecas <= 1000){
                custo = numero_pecas * 1.30
                resultado_final += custo
            } else{
                excesso = numero_pecas - 1000
                custo = (1000 * 1.30) + (excesso * 1.131)
                resultado_final += custo
            }
            break
        default:
            alert(`Região não reconhecida.`)
            return
    }

    var frete_distancia = distancia * combustivel
    resultado_final += frete_distancia

    document.getElementById('result-rastreamento').innerText = `R$ ${taxaRastreamento.toFixed(2)}`
    document.getElementById('result-frete-pecas').innerText = `R$ ${custo.toFixed(2)}`
    document.getElementById('result-frete-km').innerText = `R$ ${combustivel.toFixed(2)}`
    document.getElementById('result-total').innerText = `R$ ${resultado_final.toFixed(2)}`
    
    document.getElementById('resultado').classList.remove('esconder')

}

function limparCampos(){
    document.getElementById('rastreamento').value = ''
    document.getElementById('numero_pecas').value = ''
    document.getElementById('regiao').value = ''
    document.getElementById('distancia').value = ''
    document.getElementById('combustivel').value = ''
}