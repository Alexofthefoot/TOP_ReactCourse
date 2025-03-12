import "./styles.css";
import { aboutgreeting } from "./modules/about";
import { menugreeting } from "./modules/menu";
import { homegreeting, setUpHome } from "./modules/home";


// // Page control
// let CURRENTPAGE = home;

const initButtons = () => {
    let button = document.getElementById("btn-home");
    button.addEventListener("click", myFunction);
    button.greeting = homegreeting;

    button = document.getElementById("btn-menu");
    button.addEventListener("click", myFunction, menugreeting);
    button.greeting = menugreeting;

    button = document.getElementById("btn-about");
    button.addEventListener("click", myFunction, aboutgreeting);
    button.greeting = aboutgreeting;
}

const myFunction = (event) => {
    console.log(event.currentTarget.greeting);
    setUpHome();
    


}

initButtons();