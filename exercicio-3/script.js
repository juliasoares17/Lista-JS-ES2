function calculoMedia(){
    var nota1 = parseFloat(document.getElementById('nota_lab').value)
    var nota2 = parseFloat(document.getElementById('nota_prova').value)
    var nota3 = parseFloat(document.getElementById('nota_trabalho').value)
    var classificacao = ''

    if (nota1 < 0 || nota2 < 0 || nota3 < 0 || isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 > 10 || nota2 > 10 || nota3 > 10) {
        alert(`Não foi possível realizar o cálculo. Tente inserir outros valores.`)
        return }

    var media = ((2*nota1)+(5*nota2)+(3*nota3))/10

    if (media >= 0 && media <= 5){
        classificacao = 'F'
    } else if (media > 5 && media <= 6){
        classificacao = 'E'
    } else if (media > 6 && media <= 7){
        classificacao = 'D'
    } else if (media > 7 && media <= 8){
        classificacao = 'C'
    } else if (media > 8 && media <= 9){
        classificacao = 'B'
    } else {
        classificacao = 'A'
    }
    document.getElementById('resultado_div').classList.remove('esconder')
    document.getElementById('resultado').innerText = `A média do aluno é = ${media.toFixed(2)} e sua classificação é ${classificacao}`
}

function limparCampos(){
    document.getElementById('nota_lab').value = ''
    document.getElementById('nota_prova').value = ''
    document.getElementById('nota_trabalho').value = ''
}