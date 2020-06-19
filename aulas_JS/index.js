// Criar um programa que calcula a média
//das notas entre os alunos
//mensagem do calculo da média.

const alunosTurma1 =[
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
    },  
    {
        nome:'Rafael',
        nota: 0
    }
]

const alunosTurma2 =[
    {
        nome: 'Joao',
        nota: 8
    },
    {
        nome:'Ana',
        nota : 8
    },
    {
        nome: 'Diego',
        nota: 8
    },
    {
        nome: 'Patrick',
        nota: 10
    }
]

function calculaMedia(alunos){
    soma = 0
    for(let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].nota
    }    
    return soma / alunos.length
}

function mensagem(media, turma){
    if(media > 5){
        console.log(`Parabens a media da ${turma} é ${media}`)
    }else{
        console.log(`Sua media da ${turmas} é menor que 5`)
    }
}

const mediaTurma1 = calculaMedia(alunosTurma1)
const mediaTurma2 = calculaMedia(alunosTurma2)

mensagem(mediaTurma1, 'turma1')
mensagem(mediaTurma2, 'turma2')

function MarcarComoReprovado(aluno){
    aluno.reprovado = false
    if(aluno.nota < 5){
        aluno.reprovado = true
    }
}

function enviarMensagemReprovado(aluno){
    if(aluno.reprovado){
        console.log(`o Aluno ${aluno.nome} foi reprovado`)
    }
}

function alunoReprovado(alunos){
    for(let aluno of alunos){
        MarcarComoReprovado(aluno)
        enviarMensagemReprovado(aluno)
    }
}

alunoReprovado(alunosTurma1)
alunoReprovado(alunosTurma2)
