const toogleButton = document.getElementsByClassName('toggle-button')[0];
const navBarLinks = document.getElementsByClassName('navb-links')[0];
let closeModal = document.querySelectorAll(".close")[0];
let openModal = document.querySelectorAll(".btn")[0];
let modal = document.querySelectorAll(".modall")[0];
let modalC = document.querySelectorAll(".modal-container")[0];


toogleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
});

const progressBars = document.getElementsByClassName("skills_progress-percent")

for (let i = 0; i < progressBars.length; i++) {
    const skillpercent = progressBars.item(i);
    console.log(skillpercent);
    skillpercent.style.width = skillpercent.getAttribute('percent') + '%';
    skillpercent.style.backgroundColor = skillpercent.getAttribute('color');
}

openModal.addEventListener("click", function (e) {
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

closeModal.addEventListener("click", function () {
    modal.classList.toggle("modal-close");
    setTimeout(function () {
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    }, 300);
})

