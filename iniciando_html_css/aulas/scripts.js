const modalOverlay = document.querySelector(".modal__overlay");

const cards = document.querySelectorAll('.card')

for(let card of cards){
    card.addEventListener("click", function(){
        var videoID = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoID}`
    })
}

const close_modal = document.querySelector('.close__modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src =""
})


