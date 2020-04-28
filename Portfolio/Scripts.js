function hide_element(class_name) {
    document.getElementById(class_name).hidden = true;
}

function hide_galery_menu() {
    hide_element("test");

}

let category = "Graphic_design/";

function set_category(select) {
    category = select;
}

// function load_images() {
//     for (let i = 1; i < 7; i++) {
//         document.write('<div class="preview_art"><a class="" href="img/'+ category + i + '.jpg"><img src="img/'+ category + i + '.jpg" ></div>');
//     }
// }

