const modalOverlay = document.querySelector('.modal_overlay')

const colseModal = document.querySelector(".material-icons")

const cursos = document.querySelectorAll('.curso')



for(let curso of cursos){
    curso.addEventListener("click", function(){

        var siteID = curso.getAttribute("id")

        modalOverlay.classList.add("active")

        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${siteID}`

    })
}

colseModal.addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src =""
})