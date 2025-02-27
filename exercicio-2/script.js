function faixaEtaria(){
    var idade = parseInt(document.getElementById('idade').value)
    if (isNaN(idade) || idade < 0) {
        alert('Por favor, digite uma idade válida!')
        return
    }

    var mensagem = ''
    if (idade >= 0 && idade < 15){
        var mensagem = 'criança'
    } else if (idade >= 15 && idade < 30){
        var mensagem = 'jovem'
    } else if (idade >= 30 && idade < 60){
        var mensagem = 'adulto'
    } else {
        var mensagem = 'idoso'
    }
    document.getElementById('resultado').classList.remove('escondido')
    document.getElementById('resultado').innerText = `Com ${idade} anos, você é classificado como ${mensagem}!`
}