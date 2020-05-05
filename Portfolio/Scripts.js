let graphic_design_images_amount = 13;
let traditional_art_images_amount = 13;
let digital_art_images_amount = 13;
let category;
let images_amount;

function graphic_design_select() {
    localStorage.setItem("category", "Graphic_design/");
    localStorage.setItem("images_amount", graphic_design_images_amount);
}

function traditional_art_select() {
    localStorage.setItem("category", "Graphic_design/");
    localStorage.setItem("images_amount", traditional_art_images_amount);
}

function digital_art_select() {
    localStorage.setItem("category", "Graphic_design/");
    localStorage.setItem("images_amount", digital_art_images_amount);
}

function load_images() {
    category = localStorage.getItem("category");
    images_amount = localStorage.getItem("images_amount");
    for (let i = 1; i <= images_amount; i++) {
        document.write('<div class="preview_art"><a href="img/'+ category + i + '.jpg"><img src="img/'+ category + i + '.jpg" ></div>');
    }
}

