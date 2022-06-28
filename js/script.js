function reajusteSalarial(){
    var funcionario = window.prompt('Qual o nome do funcionario: ')
    var salario = Number(window.prompt(`Qual o salario do(da) ${funcionario}: `))
    var reajuste = Number(window.prompt(`O salario do(da) vai ser reajustado em qual porcentagem: `))
    var aumento = (salario * reajuste) / 100
    var novoSalario = salario + aumento

    var msg1 = window.document.querySelector('#msg1')
    var msg2 = window.document.querySelector('#msg2')
    var msg3 = window.document.querySelector('#msg3')
    var msg4 = window.document.querySelector('#msg4')

    msg1.innerHTML = `${funcionario} recebeu um aumento salarial!`
    msg2.innerHTML = `O salario atual era ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
    msg3.innerHTML = `Com o aumento de ${reajuste}% ,o salario vai aumentar ${aumento.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} ,no proximo mês.`

    msg4.innerHTML = `E a partir daí, ${funcionario} vai passar a ganhar, ${novoSalario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`

}                                       