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
let navButton = document.querySelector(".header__nav");

toogleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
});

const progressBars = document.getElementsByClassName("skills_progress-percent")

for (let i = 0; i < progressBars.length; i++) {
    const skillpercent = progressBars.item(i);
    const percent = skillpercent.getAttribute('percent');
    let percentNum = parseInt(percent);
    skillpercent.style.width = percent + '%';
    if (percentNum < 50) {
        skillpercent.style.backgroundImage = 'linear-gradient(to right, #b5dbec 0%, #1826a0 300%)';
    }
    else if (percentNum >= 50 && percentNum < 75) {
        skillpercent.style.backgroundImage = 'linear-gradient(to right, #b5dbec 0%, #1826a0 150%)';
    }
    else if (percentNum >= 75 && percentNum <= 100)
        skillpercent.style.backgroundImage = 'linear-gradient(to right, #b5dbec 0%, #1826a0 80%)';

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
                modalDescription.innerHTML = `A trivia game where users can test their knowledge on certain topics and try to get among the 
                first places on the scoreboard. Each player can create a profile and configure their game as they wish without fear of losing 
                their information.<br/><br/> The application was made in Android Studio using Java as main language and the library "Romm"
                to create a database that makes the information persistent.`;
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
                modalImg.setAttribute('src', 'images/proyects/Clientes3.png');
                modalTitle.innerText = "Customer Manager";
                modalDescription.innerHTML = `This is an application to manage the total balance of a customer list. It contains a form to validate 
                and record the information of each client and send them to a database. The application allows the user to add and delete customers, 
                as well as edit their information at any time.<br/> <br/>The program for managing the information on the server was carried out in Java, the database used was MySQL and finally HTML, CSS and Bootstrap were used for the design of the page.`;
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
                modalDescription.innerHTML = `A To-Do list where users can schedule different activities during the week and can share
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
                modalImg.setAttribute('src', 'images/proyects/BudgetList3.png');
                modalTitle.innerText = "Budget App";
                modalDescription.innerHTML = `In this web app, the user can create his budget by adding his income and expenses for the month. 
                He can add the quantity and a description to each one of these and if necessary he can also remove them. At the end, the program 
                shows to the user the total amount of money that the user has. <br/> </br>The project was realized to apply the basic concepts of 
                JavaScript to create a functional application.`;
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
                modalImg.setAttribute('src', 'images/proyects/WeatherApp2.png');
                modalTitle.innerText = "Weather App";
                modalDescription.innerHTML = `An application to observe the weather information of almost any city in the world. It implements 
                the OpenWeatherMap API to receive the data of the city and its weather, as well as the Google Places API so  the users can 
                receive suggestions when writing the name of the city and autocompletes the input field if desired.`;
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
                modalDescription.innerHTML = `A prototype of a classification system that implements computer vision to classify products by 
                reading the QR codes attached to them. The process begins when the camera detects the QR code and proceeds to read it, if the 
                code is correct and the product meets the appropriate specifications, the program sends the signals to the microcontroller so 
                that the belt moves the product to its corresponding place.`;
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
    if (window.scrollY > window.innerHeight) {
        navbar.classList.toggle("sticky", window.scrollY > innerHeight);
    } else if (window.scrollY < window.innerHeight) {
        navbar.classList.toggle("sticky", window.scrollY > innerHeight - 90);
    }
});


