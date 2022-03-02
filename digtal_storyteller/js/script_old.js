function add_img() {
    var src = "img/character.png";
    // show_image(src, 276,110, "Google Logo");

    var img = document.createElement("img");
    var targetelement= document.getElementById("comic")
    img.src = src;
    img.width = 200;
    img.height = 200;

    img.style.position = "absolute"
    img.style.left = 200+'px';
    img.style.top = 200+'px'; 

    img.alt = "bg";
    targetelement.appendChild(img);
}

function add_bg(){
    var src = "img/bg.png";
    // show_image(src, 276,110, "Google Logo");

    var img = document.createElement("img");
    var targetelement= document.getElementById("comic")
    img.src = src;
    img.width = 400;
    img.height = 400;

    img.style.position = "absolute"
    img.style.left = 0+'px';
    img.style.top = 0+'px'; 
    img.alt = "bg";
    targetelement.appendChild(img);

}

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    var targetelement= document.getElementById("comic")
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    targetelement.appendChild(img);
}