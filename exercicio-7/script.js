function converterData(){
    var data = document.getElementById('data').value.trim()

    if (data.length !== 10 || data[2] !== '/' || data[5] !== '/') {
        alert("Formato inválido! Tente novamente.")
        return
    }

    var data_separada = data.split('/')

    var dia = parseInt(data_separada[0])
    var mes = parseInt(data_separada[1], 10)
    var ano = parseInt(data_separada[2])

    if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
        alert("Data inválida! Insira apenas números no formato dd/mm/aaaa.")
        return
    }

    if (dia < 1 || dia > 31) {
        alert("Dia inválido! Insira um valor entre 01 e 31.")
        return
    }

    if (mes < 1 || mes > 12) {
        alert("Mês inválido! Insira um valor entre 01 e 12.")
        return
    }

    var meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ]

    var mes_extenso = meses[mes - 1]

    document.getElementById('resultado').innerText = `${dia} de ${mes_extenso} de ${ano}`
    document.getElementById('resultado_container').classList.remove('esconder')
}