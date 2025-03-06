var erroDetectado = false

function valorHora(){
    var turno = document.getElementById('turno').value.toUpperCase()
    var categoria = document.getElementById('categoria').value.toUpperCase()
    var salario_minimo = parseFloat(document.getElementById('salario_minimo').value)

    if (isNaN(salario_minimo) || salario_minimo < 0){
        if (!erroDetectado) {
            alert('Não foi possível realizar o cálculo. Tente inserir outro valor para o salário mínimo.')
            erroDetectado = true;
        }
        return
    }

    switch (categoria) {
        case 'G':
            if (turno == 'M' || turno == 'V'){
                var hora = 0.04 * salario_minimo
            } else if (turno === 'N') { 
                if (!erroDetectado) {
                    alert("Turno inválido para a categoria G.")
                    erroDetectado = true
                } return
            } else {
                if (!erroDetectado) {
                    alert("Turno não identificado. Use 'M' para Matutino, 'V' para Vespertino ou 'N' para Noturno.")
                    erroDetectado = true
                }
                return
            }
            break
        case 'F':
            if (turno == 'N'){
                var hora = 0.02 * salario_minimo
            }
            else if (turno == 'M' || turno == 'V'){
                var hora = 0.01 * salario_minimo
            } else {
                if (!erroDetectado) {
                    alert("Turno não identificado. Use 'M' para Matutino, 'V' para Vespertino ou 'N' para Noturno.")
                    erroDetectado = true
                }
                return;
            }
            break
        default:
            if (!erroDetectado) {
                alert("Categoria inválida. Use 'G' para Gerente ou 'F' para Funcionário.")
                erroDetectado = true
            }
            return
    }

    return hora
}

function salarioInicial(){
    var horas_trab = parseFloat(document.getElementById('horas_trab').value)

    if (isNaN(horas_trab) || horas_trab < 0){
        if (!erroDetectado) {
            alert('Não foi possível realizar o cálculo. Tente inserir outra quantidade de horas trabalhadas no mês.')
            erroDetectado = true
        }
        return
    }

    var hora = valorHora()
    var salario_inicial = horas_trab * hora
    return salario_inicial
}

function auxilioAlimentacao(){
    var salario_inicial = salarioInicial()
    if (salario_inicial <= 800){
        var auxilio = 0.25 * salario_inicial
    } else if (salario_inicial > 800 && salario_inicial <= 1200){
        var auxilio = 0.20 * salario_inicial
    } else if (salario_inicial > 1200){
        var auxilio = 0.15 * salario_inicial
    }
    return auxilio
}

function resultado(){
    erroDetectado = false
    var codigo = document.getElementById('codigo').value
    var horas_trab = parseFloat(document.getElementById('horas_trab').value)
    var hora = valorHora()
    var salario_inicial = salarioInicial()
    var auxilio = auxilioAlimentacao()
    if (erroDetectado) {
        return
    }

    document.getElementById('codigo_result').innerText = `Código: ${codigo}`
    document.getElementById('horas_trab_result').innerText = `Horas trabalhadas no mês: ${horas_trab}`
    document.getElementById('valor_hora_result').innerText = `Valor da hora trabalhada: R$ ${hora.toFixed(2)}`
    document.getElementById('salario_inicial_result').innerText = `Salário inicial: R$ ${salario_inicial.toFixed(2)}`
    document.getElementById('auxilio_result').innerText = `Auxílio-alimentação: R$ ${auxilio.toFixed(2)}`
    document.getElementById('salario_final_result').innerText = `Salário final: R$ ${(salario_inicial + auxilio).toFixed(2)}`
    
    document.getElementById('resultado').classList.remove('esconder')
}

function limparCampos(){
    document.getElementById('codigo').value = ''
    document.getElementById('horas_trab').value = ''
    document.getElementById('turno').value = ''
    document.getElementById('categoria').value = ''
    document.getElementById('salario_minimo').value = ''
}
