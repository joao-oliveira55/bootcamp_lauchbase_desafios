const usuarios1 = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
]

function ChecagemCSS(user){
    let checagem = 0
    for(let j = 0; j < user.tecnologias.length; j++){
        if(user.tecnologias[j] == "CSS"){
            checagem = 1
            j = user.tecnologias.length
        }else{
           checagem = 2
        }
    }
    if(checagem == 1){
        return true
    }else{
        return false
    }
}

for(let i = 0; i < usuarios1.length; i++){

    const usuarioTrabalhaCSS = ChecagemCSS(usuarios1[i])

    if(usuarioTrabalhaCSS == true){
        console.log(`O usuario ${usuarios1[i].nome} trabalha com css`)
    }
}




