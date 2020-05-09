let graphic_images_amount = 11;
let water_color_images_amount = 9;
let oil_paintings_images_amount = 15;
let personage_images_amount = 5;
let background_images_amount = 3;
let illustration_images_amount = 11;
let logo_images_amount = 3;
let banner_images_amount = 4;
let lending_page_images_amount = 4;


let category;
let images_amount;
let image_name = "hobbit";
let image_description = "desc";

function load_images() {

    category = localStorage.getItem("category");
    images_amount = localStorage.getItem("images_amount");
    for (let i = 1; i <= images_amount; i++) {
        document.write(`<div class="preview_art"><a onclick=localStorage.setItem("item_name",${i}) href="img_details.html"><img src="img/${category}${i}.jpg"></div>`);
    }
}


function load_img_details() {
    document.write(`     <div>
         <a href="#"><img src="img/${localStorage.getItem("category")}/Full/${localStorage.getItem("item_name")}.jpg" alt="img" style="width: 1500px"></a>
     </div>
     <div class="text_img">
         <div class="gradient_teaser">
             <span>${image_name}</span>
         </div>
         <span class="text_img_span_padding">${image_description}</span>
         <button class="button_menu">
             <a href="Image_list.html">
                 <img alt="arrow_icon" src="https://img.icons8.com/material-rounded/48/ffffff/back.png"/>
             </a>
         </button>`)
}

async function read_image_description() {
    let say = await import('Portfolio/img/Tradition_art/Graphic/Full/say.js');
    say.hi(); // Привет!

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
    localStorage.setItem("category", "Design/Lending_page/");
    localStorage.setItem("images_amount", lending_page_images_amount);
}