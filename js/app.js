const toogleButton = document.getElementsByClassName('toggle-button')[0];
const navBarLinks = document.getElementsByClassName('navb-links')[0];
let closeModal = document.querySelector(".close");
let openModal = document.querySelectorAll(".btn");
let modal = document.querySelector(".modall");
let modalC = document.querySelector(".modal-container");
let modalImg = document.getElementsByClassName("modal-img")[0];
let modalTitle = document.getElementsByClassName("modal-title")[0];
let modalDescription = document.getElementsByClassName("modal-description")[0];
let modalTools = document.querySelectorAll(".tool");
let navbar = document.querySelector(".navb");

toogleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
});

const progressBars = document.getElementsByClassName("skills_progress-percent")

for (let i = 0; i < progressBars.length; i++) {
    const skillpercent = progressBars.item(i);
    console.log(skillpercent);
    skillpercent.style.width = skillpercent.getAttribute('percent') + '%';
}

openModal.forEach((element) => {
    element.addEventListener("click", function (e) {
        var counter = 0;
        var tools = [];
        switch (e.target.id) {
            case 'quizzbtn':
                tools = ["JAVA", "ANDROID", "MYSQL"];
                modalImg.setAttribute('src', 'images/proyects/quizzApp_2.png');
                modalTitle.innerText = "QuizzApp";
                modalDescription.innerHTML = `A trivia game where users can choose between different topics and prove their knowledge and try 
                to get the first place.<br/><br/> It was made in Android Studio using Java as programming language and MySQL as the database to store and retrieve 
                the information the applications needs to function.`;
                modalTools.forEach((tool) => {
                    tool.innerText = tools[counter];
                    counter++;
                });
                modalC.style.opacity = "1";
                modalC.style.visibility = "visible";
                modal.classList.toggle("modal-close");
                break;

            case 'cartesianbtn':
                tools = ["ARDUINO", "SOLIDWORKS", "ELECTRONICS"];
                modalImg.setAttribute('src', 'images/proyects/SolidWorks_3.jpg');
                modalTitle.innerText = "Cartesian Robot";
                modalDescription.innerHTML = `A robot consisting of a cubic structure, with three arms, and each one can move along a two-dimensional
                 plane. This arms have a right angle between them simulating the coordinate axes of a three-dimensional plain. <br/><br/>
                 These kind of robots are used in industry to perform activities such as material handling, and cutting processes`;
                modalTools.forEach((tool) => {
                    tool.innerText = tools[counter];
                    tool.style.width = "26%"
                    counter++;
                });
                modalC.style.opacity = "1";
                modalC.style.visibility = "visible";
                modal.classList.toggle("modal-close");
                break;

            case 'todobtn':
                tools = ["ANDROID", "FIREBASE", "JAVA"];
                modalImg.setAttribute('src', 'images/proyects/ToDo-List_5.jpg');
                modalTitle.innerText = "To-Do List";
                modalDescription.innerHTML = `A To-Do application where users can schedule different activities during the week and can share
                these activities with friends and other people. The app is capable of creating a list and customize them with colors, icons, 
                and names. <br/><br/> The application connects to Firebase to get the information and the authentication.`;
                modalTools.forEach((tool) => {
                    tool.innerText = tools[counter];
                    tool.style.width = "26%"
                    counter++;
                });
                modalC.style.opacity = "1";
                modalC.style.visibility = "visible";
                modal.classList.toggle("modal-close");
                break;

            case 'petbtn':
                tools = ["HTML", "CSS", "RESPONSIVE"];
                modalImg.setAttribute('src', 'images/proyects/petGallery2.png');
                modalTitle.innerText = "Pet-Gallery";
                modalDescription.innerHTML = `A gallery that contains different pet photos for people to adopt.An HTML web page that applies 
                CSS styles to organized and give presentation to the page. <br/><br/> The project only covers the design and structure of the page.`;
                modalTools.forEach((tool) => {
                    tool.innerText = tools[counter];
                    tool.style.width = "26%"
                    counter++;
                });
                modalC.style.opacity = "1";
                modalC.style.visibility = "visible";
                modal.classList.toggle("modal-close");
                break;

            case 'clockbtn':
                tools = ["HTML", "CSS", "JAVASCRIPT"];
                modalImg.setAttribute('src', 'images/proyects/realTimeClock2.png');
                modalTitle.innerText = "Digital Clock";
                modalDescription.innerHTML = ``;
                modalTools.forEach((tool) => {
                    tool.innerText = tools[counter];
                    tool.style.width = "26%"
                    counter++;
                });
                modalC.style.opacity = "1";
                modalC.style.visibility = "visible";
                modal.classList.toggle("modal-close");
                break;

            case 'bandabtn':
                tools = ["PYTHON", "ELECTRONIC", "PSOC"];
                modalImg.setAttribute('src', 'images/proyects/banda2.jpeg');
                modalTitle.innerText = "Sorting System";
                modalDescription.innerHTML = `A prototype of a sorting system that implements computer vision to clasificate the products by
                reading the QR codes attach to them. <br/><br/> The camera detect the QR code and proceed to read it, and if the code is correct, the 
                python program sends the signals to the microcontroller to start the operation`;
                modalTools.forEach((tool) => {
                    tool.innerText = tools[counter];
                    tool.style.width = "26%"
                    counter++;
                });
                modalC.style.opacity = "1";
                modalC.style.visibility = "visible";
                modal.classList.toggle("modal-close");
                break;
        }
    });
})

closeModal.addEventListener("click", function () {
    modal.classList.toggle("modal-close");
    setTimeout(function () {
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    }, 300);
});

window.addEventListener("click", function (e) {
    if (e.target === modalC) {
        modal.classList.toggle("modal-close");
        setTimeout(function () {
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        }, 300);
    }
});

window.addEventListener("scroll", function (e) {
    navbar.classList.toggle("sticky", window.scrollY > 250);
});

