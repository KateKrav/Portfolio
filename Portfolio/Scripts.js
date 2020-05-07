let graphic_images_amount = 11;
let water_color_images_amount = 9;
let oil_paintings_images_amount = 15;
let personage_images_amount = 5;
let background_images_amount = 3;
let illustration_images_amount = 11;
let logo_images_amount = 3;
let banner_images_amount = 4;
let ledingpage_images_amount = 4;






let category;
let images_amount;


function load_images() {
    category = localStorage.getItem("category");
    images_amount = localStorage.getItem("images_amount");
    for (let i = 1; i <= images_amount; i++) {
        document.write('<div class="preview_art"><a href="img/'+ category + i + '.jpg"><img src="img/'+ category + i + '.jpg" ></div>');
    }
}



function graphic() {
    localStorage.setItem("category", "Tradition_art/Graphic/");
    localStorage.setItem("images_amount", graphic_images_amount);
}

function watercolor() {
    localStorage.setItem("category", "Tradition_art/WaterColor/");
    localStorage.setItem("images_amount", water_color_images_amount);
}

function oil_paintings() {
    localStorage.setItem("category", "Tradition_art/OilPaintings/");
    localStorage.setItem("images_amount", oil_paintings_images_amount);
}

function personage() {
    localStorage.setItem("category", "Digital_art/personage/");
    localStorage.setItem("images_amount", personage_images_amount);
}

function background () {
    localStorage.setItem("category", "Digital_art/background/");
    localStorage.setItem("images_amount", background_images_amount);
}

function illustration () {
    localStorage.setItem("category", "Digital_art/illustration/");
    localStorage.setItem("images_amount", illustration_images_amount);
}


function logo() {
    localStorage.setItem("category", "Design/Logo/");
    localStorage.setItem("images_amount", logo_images_amount);
}

function banner () {
    localStorage.setItem("category", "Design/Banner/");
    localStorage.setItem("images_amount", banner_images_amount);
}

function ledingpage () {
    localStorage.setItem("category", "Design/Ledingpage/");
    localStorage.setItem("images_amount", ledingpage_images_amount);
}