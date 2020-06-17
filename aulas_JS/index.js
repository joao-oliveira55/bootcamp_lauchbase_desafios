// Criar um programa que calcula a média
//das notas entre os alunos
//mensagem do calculo da média.

const alunos =[
    {
        nome: 'Joao',
        nota: 10
    },
    {
        nome:'Ana',
        nota : 10
    },
    {
        nome: 'Diego',
        nota: 10
    }
    
]

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

if(media > 5){
    console.log(`Parabens sua media é ${media}`)
}else{
    console.log('Sua media é menor que 5')
}
