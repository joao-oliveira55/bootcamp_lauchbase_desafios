 const modalOverlay = document.querySelector(".modal_overlay")
 const cards = document.querySelectorAll(".card")
 const modalContent = document.querySelector(".modal_content")
 const closeModal = document.querySelector(".close_modal")

for(let card of cards){
   card.addEventListener("click", function(){
      var imageID = card.getAttribute("id")
      var titleCard = card.querySelector("h3").innerText
      var pCard = card.querySelector("p").innerText

      modalContent.querySelector("h3").innerHTML = titleCard
      modalContent.querySelector("p").innerHTML = pCard
      modalContent.querySelector("img").src =`assets/${imageID}`
      modalOverlay.classList.add("active")   
   })

}

closeModal.addEventListener("click", function(){
      modalOverlay.classList.remove("active")
})