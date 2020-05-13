let graphic_images_amount = 11;
let water_color_images_amount = 9;
let oil_paintings_images_amount = 15;
let personage_images_amount = 5;
let background_images_amount = 3;
let illustration_images_amount = 11;
let logo_images_amount = 3;
let banner_images_amount = 4;
let lending_page_images_amount = 4;

let content;
let category;
let images_amount;
let image_name;
let image_description;

function load_images() {

    category = localStorage.getItem("category");
    images_amount = localStorage.getItem("images_amount");
    for (let i = 1; i <= images_amount; i++) {
        document.write(`<div class="preview_art"><a onclick=localStorage.setItem("item_name",${i}) href="img_details.html"><img src="../../img/${category}${i}.jpg"></div>`);
    }
}


function load_img_details() {
set_image_details()
    document.write(`
     <div>
         <a href="#"><img src="../../img/${localStorage.getItem("category")}/Full/${localStorage.getItem("item_name")}.jpg" alt="img" class="size_img"></a>
     </div>
     <div class="text_img">
      <div class="gradient_teaser">
       <span>${image_name}</span>
     </div>
       <span class="text_img_span_padding">${image_description}</span>
       <div class="button_menu_gallery">
         <button class="button_menu">
             <a href="Images_list.html">
                 <img alt="arrow_icon" src="https://img.icons8.com/material-rounded/48/ffffff/back.png"/>
             </a>
         </button></div>`)
}

function get_content_by_category() {
    if (localStorage.getItem("category") === "Tradition_art/Graphic/") {
        content = traditional_art_Graphic;
    } else if (localStorage.getItem("category") === "Tradition_art/WaterColor/") {
        content = traditional_art_WaterColor;
    } else if (localStorage.getItem("category") === "Tradition_art/OilPaintings/") {
        content = traditional_art_OilPaintings;
    } else if (localStorage.getItem("category") === "Digital_art/personage/") {
        content = digital_art_Personage;
    } else if (localStorage.getItem("category") === "Digital_art/background/") {
        content = digital_art_Background;
    } else if (localStorage.getItem("category") === "Digital_art/illustration/") {
        content = digital_art_Illustration;
    } else if (localStorage.getItem("category") === "Design/Logo/") {
        content = design_Logo;
    } else if (localStorage.getItem("category") === "Design/Banner/") {
        content = design_Banner;
    } else if (localStorage.getItem("category") === "Design/Lending_page/") {
        content = design_Landing_page;
    }
}

function set_image_details() {
get_content_by_category();
image_name = content["name"+localStorage.getItem("item_name")];
image_description = content["description"+localStorage.getItem("item_name")];
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