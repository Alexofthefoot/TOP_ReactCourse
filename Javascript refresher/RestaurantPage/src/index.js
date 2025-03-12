import "./styles.css";
import { aboutgreeting, setUpAbout } from "./modules/about";
import { menugreeting, setUpMenu } from "./modules/menu";
import { homegreeting, setUpHome } from "./modules/home";


const initButtons = () => {
    let button = document.getElementById("btn-home");
    button.addEventListener("click", buttonPress);
    button.greeting = homegreeting;

    button = document.getElementById("btn-menu");
    button.addEventListener("click", buttonPress);
    button.greeting = menugreeting;

    button = document.getElementById("btn-about");
    button.addEventListener("click", buttonPress);
    button.greeting = aboutgreeting;
}

const activateButton = (target) => {
    //deactivate previous button
    let button = document.getElementsByClassName('btn-active')[0]; 
    //TODO: currently there is always an active button, may change this in future
    button.classList.remove('btn-active');

    //activate new button
    target.className = "btn-active";
}
const resetPage = () => {
    let content = document.getElementById('content');
    let child = content.lastElementChild;
    while (child) {
        content.removeChild(child);
        child = content.lastElementChild;
    }
}

const buttonPress = (event) => {
    console.log(event.currentTarget.greeting);
    //Remove existing html
    resetPage();
    //adjust active button
    activateButton(event.currentTarget);

    //generate new html
    if (event.currentTarget.id == "btn-home") {
        setUpHome();
    }
    else if (event.currentTarget.id == "btn-menu") {
        setUpMenu();
    }
    else if (event.currentTarget.id == "btn-about") {
        // setUpAbout();
    }

}

initButtons();
setUpHome();