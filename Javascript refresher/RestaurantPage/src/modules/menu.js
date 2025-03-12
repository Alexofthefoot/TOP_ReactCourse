import lavImage from "./../lavender.png";

const createImg = () => {
    let img = document.createElement('img');
    img.src = lavImage;
    img.alt = "illustration of a lavender flower";
    return img;
}

const setUpMenu = () => {
    let content = document.getElementById("content");
    let menu = document.createElement("div");
    content.appendChild(menu);
    menu.id = "menu-section";

    //H1
    let newDiv = document.createElement("div");
    let newH1 = document.createElement("h1");
    newH1.innerHTML = "Our Menu";
    newDiv.appendChild(newH1);
    menu.appendChild(newDiv);
    //Drinks
    newDiv = document.createElement("div");
    let newP = document.createElement("p");
    newP.innerHTML = "Drinks";
    newDiv.appendChild(newP);
    newP = document.createElement("p");
    newP.innerHTML = `Lavender Latte – A smooth espresso combined with steamed milk and a hint of lavender syrup.<br>
                    Café au Lait – Classic French-style coffee with equal parts rich coffee and steamed milk.<br>
                    Herbal Lavender Tea – A calming blend of lavender, chamomile, and mint, served hot or iced.`;
    newDiv.appendChild(newP);
    menu.appendChild(newDiv);
    //img
    let img = createImg();
    menu.appendChild(img);
    //Pastries
    newDiv = document.createElement("div");
    newP = document.createElement("p");
    newP.innerHTML = "Pastries";
    newDiv.appendChild(newP);
    newP = document.createElement("p");
    newP.innerHTML = `Lavender Croissant – Flaky, buttery croissant with a subtle lavender essence.<br>
                    Madeleine – Soft, delicate sponge cake with a light lemon zest and a touch of lavender.<br>
                    Pain au Chocolat – Rich, buttery pastry filled with premium dark chocolate.`;
    newDiv.appendChild(newP);
    menu.appendChild(newDiv);
    //img 
    img = createImg();
    menu.appendChild(img);
    //Desserts
    newDiv = document.createElement("div");
    newP = document.createElement("p");
    newP.innerHTML = "Desserts";
    newDiv.appendChild(newP);
    newP = document.createElement("p");
    newP.innerHTML = `Lavender Croissant – Flaky, buttery croissant with a subtle lavender essence.<br>
                    Madeleine – Soft, delicate sponge cake with a light lemon zest and a touch of lavender.<br>
                    Pain au Chocolat – Rich, buttery pastry filled with premium dark chocolate.`;
    newDiv.appendChild(newP);
    menu.appendChild(newDiv);
    //Attribution
    let newA = document.createElement('a');
    newA.href = "https://pngtree.com/freepng/lavender-flower-isolated_14561552.html";
    newA.innerHTML = "png image from pngtree.com/";
    menu.appendChild(newA);

}

export { setUpMenu };