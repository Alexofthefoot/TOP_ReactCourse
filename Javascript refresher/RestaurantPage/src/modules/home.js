import lavImage from "./../lavender.png";
let homegreeting = "this is the home page";

const setUpHome = () => {
    let content = document.getElementById("content");
    let home = document.createElement("div");
    home.id = "home-section";
    content.appendChild(home);

    //H1
    let newDiv = document.createElement("div");
    let newH1 = document.createElement("H1");
    newH1.innerHTML = "Le Petit Lavande";
    newDiv.appendChild(newH1);
    home.appendChild(newDiv);

    // Welcome paragraph
    newDiv = document.createElement("div");
    let newP = document.createElement("p");
    newP.innerHTML = "Welcome to La Petite Lavande";
    newDiv.appendChild(newP);
    newP = document.createElement("p");
    newP.innerHTML = `A taste of Provence in every bite. Tucked away in a quiet corner of the city, La Petite Lavande
                    brings
                    the charm of a rustic French café to your table. Inspired by the rolling lavender fields of
                    Provence,
                    our menu is crafted with fresh ingredients, delicate flavors, and a touch of Parisian elegance.
                    Start your morning with a buttery croissant and a rich café au lait, or indulge in our signature
                    lavender-infused pastries. Whether you're here for a leisurely brunch or a cozy afternoon tea, we
                    invite
                    you to slow down, savor the moment, and enjoy the simple pleasures of French cuisine.`;
    newDiv.appendChild(newP);
    home.appendChild(newDiv);
    //img
    let img = document.createElement('img');
        img.src = lavImage;
        img.alt = "illustration of a lavender flower";
    home.appendChild(img)
    //Call to action
    newDiv = document.createElement("div");
    newP = document.createElement("p");
    newP.innerHTML = `Start your morning with a buttery croissant and a rich café au lait, or indulge in our signature
                    lavender-infused pastries. Whether you're here for a leisurely brunch or a cozy afternoon tea, we
                    invite
                    you to slow down, savor the moment, and enjoy the simple pleasures of French cuisine.`;
    newDiv.appendChild(newP);
    newP = document.createElement("p");
    newP.innerHTML = `☕ Freshly brewed espresso & artisanal teas<br>
                🥐 House-made pastries, delicate crêpes, and warm baguettes<br>
                🌿 Seasonal ingredients with a touch of lavender-inspired magic`;
    newDiv.appendChild(newP);
    home.appendChild(newDiv);
    //Attribution
    let newA = document.createElement('a');
    newA.href = "https://pngtree.com/freepng/lavender-flower-isolated_14561552.html";
    newA.innerHTML = "png image from pngtree.com/";
    home.appendChild(newA);

}

export { homegreeting, setUpHome };