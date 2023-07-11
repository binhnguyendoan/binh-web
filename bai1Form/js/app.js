
const button = document.querySelector(".button");
const moDal = document.querySelector(".modal");
const close = this.document.querySelector(".modal-close")

button.addEventListener('click', handelButton);

function handelButton() {
    moDal.classList.toggle("active");

}
close.addEventListener('click', function () {
    moDal.classList.remove('active');


})
const overplay = document.querySelector(".modal-overlay")
overplay.addEventListener('click', function(){
    moDal.classList.remove('active');
})



