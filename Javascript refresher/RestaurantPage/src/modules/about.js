import lavImage from "./../lavender.png";

const createImg = () => {
    let img = document.createElement('img');
    img.src = lavImage;
    img.alt = "illustration of a lavender flower";
    return img;
}

const setUpAbout = () => {
    let content = document.getElementById("content");
    let about = document.createElement("div");
    about.id = "about-section";
    content.appendChild(about);
    //H1
    let newDiv = document.createElement("div");
    let newH1 = document.createElement("H1");
    newH1.innerHTML = "Le Petit Lavande";
    newDiv.appendChild(newH1);
    about.appendChild(newDiv);
    //About us
    newDiv = document.createElement("div");
    let newP = document.createElement("p");
    newP.innerHTML = "About Us";
    newDiv.appendChild(newP);
    newP = document.createElement("p");
    newP.innerHTML = `At La Petite Lavande, we bring the charm of Provence to the heart of the city. Inspired by the
                    lavender fields of France, our café offers a menu filled with fresh, seasonal ingredients and
                    delicate flavors. From our signature lavender pastries to rich café au lait, we aim to create a cozy
                    space where guests can unwind and enjoy simple, elegant French cuisine.</p>
`;
    newDiv.appendChild(newP);
    newP = document.createElement("p");
    newP.innerHTML = "Bon appétit!";
    newDiv.appendChild(newP);
    about.appendChild(newDiv);
    //img
    let img = createImg();
    about.appendChild(img);
    //Meet the owner
    newDiv = document.createElement("div");
    newP = document.createElement("p");
    newP.innerHTML = "Meet the Owner";
    newDiv.appendChild(newP);
    newP = document.createElement("p");
    newP.innerHTML = `Sophie Dubois grew up in the French countryside, inspired by the beauty of lavender fields. After
                    years of working in Parisian cafés, she opened La Petite Lavande to bring the charm of Provence to
                    the city. With a love for French cuisine and hospitality, Sophie aims to create a warm, welcoming
                    space where guests can relax and savor delicious, lavender-infused dishes.`;
    newDiv.appendChild(newP);
    about.appendChild(newDiv);
    //img
    img = createImg();
    about.appendChild(img)
    //Contact us
    newDiv = document.createElement("div");
    newP = document.createElement("p");
    newP.innerHTML = "Contact Us:";
    newDiv.appendChild(newP);
    newP = document.createElement("p");
    newP.innerHTML = `We’d love to hear from you! Whether you have a question about our menu, need assistance with a
                    reservation, or just want to say hello, feel free to reach out to us.<br>`;
    newDiv.appendChild(newP);
    newP = document.createElement("p");
    newP.innerHTML = `Phone: 123-456-7890<br>
                    Email: lapetitlavande@realemail.com`;
    newDiv.appendChild(newP);
    newP = document.createElement("p");
    newP.innerHTML = `Visit Us:<br>
                    La Petite Lavande<br>
                    123 French Ave `;
    newDiv.appendChild(newP);
    newP = document.createElement("p");
    newP.innerHTML = `Hours of Operation:<br>
                    Monday - Friday: 7:00 AM - 3:00 PM<br>
                    Saturday - Sunday: 8:00 AM - 4:00 PM`;
    newDiv.appendChild(newP);
    about.appendChild(newDiv);
    //Attribution
    let newA = document.createElement('a');
    newA.href = "https://pngtree.com/freepng/lavender-flower-isolated_14561552.html";
    newA.innerHTML = "png image from pngtree.com/";
    about.appendChild(newA);

}


export { setUpAbout };