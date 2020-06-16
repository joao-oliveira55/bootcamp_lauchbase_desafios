// Criar um programa que calcula a média
//das notas entre os alunos
//mensagem do calculo da média.

const aluno01 = 'Joao'
const notaAluno01 = 10

const aluno02 = 'Ana'
const notaAluno02 = 9.9

const aluno03 = 'Diego' 
const notaAluno03 = 8.9

const media = (notaAluno01+notaAluno02+notaAluno03) / 3

if(media > 5){
    console.log(`Parabens sua media é ${media}`)
}else{
    console.log('Sua media é menor que 5')
}
