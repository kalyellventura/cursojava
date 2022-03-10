// declaração de função

//function minhaFuncao(param) {
     //bloco de código
//}

//minhaFuncao('param')

//expressao de funçao

//diferença principal: HOISTING
//funções e var são "lsitadas" no topo
console.log(apresentar())

function apresentar() {
    return 'olá'
}

console.log(soma(1, 1))
const soma = function(num1, num2) {return num1 + num2}