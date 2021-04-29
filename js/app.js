const toogleButton = document.getElementsByClassName('toggle-button')[0];
const navBarLinks = document.getElementsByClassName('navb-links')[0];

toogleButton.addEventListener('click', () =>{
    navBarLinks.classList.toggle('active');
});

const progressBars = document.getElementsByClassName("skills_progress-percent")

for(let i = 0; i < progressBars.length; i++){
    const skillpercent = progressBars.item(i);
    console.log(skillpercent);
    skillpercent.style.width = skillpercent.getAttribute('percent')+'%';
    skillpercent.style.backgroundColor = skillpercent.getAttribute('color');
}

