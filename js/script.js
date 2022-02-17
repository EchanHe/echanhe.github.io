

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

function myFunction() {
    var popup = document.getElementById("exp_popup");
    popup.classList.toggle("show");
  }






// window.addEventListener("load", function(){
//     console.log("istener")
//     console.log(bg_name);
// });

function add_bg_with_name(src){
    // show_image(src, 276,110, "Google Logo");

    var img = document.createElement("img");
    var targetelement= document.getElementById("comic");
    img.src = src;
    img.width = 400;
    img.height = 400;

    img.style.position = "absolute"
    img.style.left = 0+'px';
    img.style.top = 0+'px'; 
    img.alt = "bg";
    targetelement.appendChild(img);

}


function write_text(){
    // var text = document.getElementById("text").value;
    // var y = document.createTextNode(text);

    // var targetelement= document.getElementById("comic");
    // targetelement.appendChild(y);







    
    addTextToImage("img/bg2.png", text)
}

// var e = document.getElementById('addtext')
// e.addEventListener('click', addTextToImage("img/bg2.png"))

function addTextToImage(imagePath) {
    console.log("add text");
    var text ="asdasd";
    var circle_canvas = document.getElementById("canvas");
    var context = circle_canvas.getContext("2d");

    // Draw Image function





    // img.onload = function () {

    // };

    // document.getElementById("addtext").addEventListener("click", function(){console.log("clicked");}, false);
}
// const form = document.getElementById('text_form');
// const log = document.getElementById('log');
// form.addEventListener('submit', console.log(document.getElementById('enter_text').value));

// addTextToImage("img/bg2.png", "Your text");

//function in the index.html

function loadpage_home(){
    // config = JSON.parse("config2.json");
    // config =require("config2.json");

    // fs.readFile("config2.json", function (error, content) {
    //     config = JSON.parse(content);
    //     console.log(config.collection.length);
    // });

    var targetelement= document.getElementById("main_panel");

    //add face choices
    create_choices(targetelement , "char_panel", "char_info", config ,"characters", key_l1 = 'face');
    create_choices(targetelement , "bg_panel", "bg_info", config ,"backgrounds");
    function create_choices(targetelement,div_id, label_name, config, choice_type, key_l1 = null){
        var length = Object.keys(config[choice_type]).length;
        var div = document.createElement("div");
        div.id = div_id;


        for (i=0;i<length; i++){
            var label = document.createElement("label");
            key = Object.keys(config[choice_type])[i];

            if(key_l1==null){
                filename = config[choice_type][key]['filename']
            }else{
                filename = config[choice_type][key][key_l1]['filename']
            }
            
            // console.log(characters["1"])
            label.innerHTML = "<input type=\"radio\" name=" + label_name+ " value=" + key +
            " checked> <img src=" + config["folder"] + filename + " class=\"choice_img\">";
            
            div.appendChild(label);
        }
        
        targetelement.appendChild(div);

    }

}

var id_eye = 0;
var id_mouth = 0;
var bool_draw_face
function add_face(filename , l_eye, eye_x_offset, eye_y_offset,
    l_mouth, m_x_offset, m_y_offset ){

    // show_image(src, 276,110, "Google Logo");

    var targetelement= document.getElementById("face_choicer_body");

    var img = document.createElement("img");
    img.src = filename;

    // eyes
    var eye = document.createElement("img");
    eye.src = l_eye[0];

    id_eye = 0;
    
    //mouths
    var mouth = document.createElement("img");
    mouth.src = l_mouth[0];
 
    id_mouth = 0;

    load_img_cnt=0;

    var onImgLoad = function()
    {
        load_img_cnt++;
        if(load_img_cnt == 3){
            draw_face();
            draw_parts(targetelement , eye, ratio, eye_x_offset , eye_y_offset,"img_eye");
            draw_parts(targetelement , mouth, ratio, m_x_offset , m_y_offset, "img_mouth");
        }

    };

    img.onload = onImgLoad;
    eye.onload = onImgLoad;
    mouth.onload = onImgLoad;

    function draw_face(){
        ratio = calculateAspectRatio(img.width,img.height,targetelement.offsetWidth,targetelement.offsetHeight);
        console.log(ratio)

        img.width = img.width * ratio;
        img.height = img.height * ratio;
    
  
        //relative image size
        // img.style.maxHeight = "100%";
        // img.style.maxWidth = "100%";


        // eye.width = eye.width * ratio;
        // eye.height = eye.height * ratio;

        // eye.id = "img_eye";
        
        // eye.style.position = "absolute"
        // eye.style.left = x_offset * ratio+'px';
        // eye.style.top = y_offset * ratio+'px'; 

        targetelement.appendChild(img);
    };
    
}

function build_expression(filename, folder){

    // show_image(src, 276,110, "Google Logo");

    var targetelement= document.getElementById("face_choicer_body");

    var img = document.createElement("img");
    img.src = folder + filename;

    // eyes
    var eye = document.createElement("img");
    eye.src = folder + l_eye[0]['filename'];
    var eye_x_offset= l_eye[0]['x_offset_face'];
    var eye_y_offset= l_eye[0]['y_offset_face'];

    id_eye = 0;
    
    //mouths
    var mouth = document.createElement("img");
    mouth.src = folder + l_mouth[0]['filename'];
    var m_x_offset= l_mouth[0]['x_offset_face'];
    var m_y_offset= l_mouth[0]['y_offset_face'];

    id_mouth = 0;

    load_img_cnt=0;

    var onImgLoad = function()
    {
        load_img_cnt++;
        if(load_img_cnt == 3){
            draw_face();
            draw_parts(targetelement , eye, ratio, eye_x_offset , eye_y_offset,"img_eye");
            draw_parts(targetelement , mouth, ratio, m_x_offset , m_y_offset, "img_mouth");
        }

    };

    img.onload = onImgLoad;
    eye.onload = onImgLoad;
    mouth.onload = onImgLoad;

    function draw_face(){
        ratio = calculateAspectRatio(img.width,img.height,targetelement.offsetWidth,targetelement.offsetHeight);
        console.log(ratio)

        img.width = img.width * ratio;
        img.height = img.height * ratio;
    
  
        //relative image size
        // img.style.maxHeight = "100%";
        // img.style.maxWidth = "100%";


        // eye.width = eye.width * ratio;
        // eye.height = eye.height * ratio;

        // eye.id = "img_eye";
        
        // eye.style.position = "absolute"
        // eye.style.left = x_offset * ratio+'px';
        // eye.style.top = y_offset * ratio+'px'; 

        targetelement.appendChild(img);
    };
    
}


// function add_eye(){
//     var targetelement= document.getElementById("face_choicer_body")
//     var eye = document.createElement("img");
//     eye.src = l_eye[0];
//     global_l_eye = l_eye;
//     id_eye = 0;

//     eye.onload = function () {
//         if(bool_draw_face==true)
//             draw_parts(targetelement , eye, ratio, eye_x_offset , eye_y_offset)

//     };

// };

// function add_mouth(){
//     var targetelement= document.getElementById("face_choicer_body")
//     var mouth = document.createElement("img");
//     mouth.src = l_mouth[0];
//     global_l_mouth = l_mouth;
//     id_mouth = 0;

//     mouth.onload = function () {
//         if(bool_draw_face==true)
//             draw_parts(targetelement , mouth, ratio, m_x_offset , m_y_offset)

//     };
// };

function move_eye(next){
    //remove previous eyes
    var targetelement= document.getElementById("face_choicer_body")
    document.getElementById("img_eye").remove();

    //choose the next/prev eye
    id_eye = prev_next_id(id_eye, l_eye.length,  next);

    var eye = document.createElement("img");
    eye.src = config['folder'] +  l_eye[id_eye]['filename'];

    var eye_x_offset= l_eye[id_eye]['x_offset_face'];
    var eye_y_offset= l_eye[id_eye]['y_offset_face'];

    eye.onload = function () {
        //TODO read the jason in when the page is loaded.
        draw_parts(targetelement , eye, ratio,
             eye_x_offset , eye_y_offset, "img_eye")

    };
}

function move_mouth(next){
    var targetelement= document.getElementById("face_choicer_body")
    document.getElementById("img_mouth").remove();
    id_mouth = prev_next_id(id_mouth, l_mouth.length,  next);

    var mouth = document.createElement("img");
    mouth.src = config['folder'] + l_mouth[id_mouth]['filename'];
    var m_x_offset= l_mouth[id_mouth]['x_offset_face'];
    var m_y_offset= l_mouth[id_mouth]['y_offset_face'];

    //get the offset from json.
    mouth.onload = function () {
        //TODO read the jason in when the page is loaded.
        draw_parts(targetelement , mouth, ratio,
             m_x_offset , m_y_offset, "img_mouth")

    };
}


function prev_next_id(idx, length,next){
    if(next ==true){
        idx++;
        if (idx>=length){
            idx=0;
        }
    }else{
        idx--;
        if (idx<0){
            idx=length-1;
        }
    }
    return idx;
}

function draw_parts(targetelement, img, ratio, x_offset,y_offset, id_name  ){
    img.id = id_name;
        
    img.style.position = "absolute"
    img.style.left = x_offset * ratio+'px';
    img.style.top = y_offset * ratio+'px'; 

    targetelement.appendChild(img);
}

function open_comic(){
    var ele = document.getElementsByName('bg_info');
    localStorage.setItem("bg_key", get_choice(ele));

    var ele = document.getElementsByName('char_info');
    localStorage.setItem("char_key", get_choice(ele));

    localStorage.setItem("id_eye", id_eye);
    localStorage.setItem("id_mouth", id_mouth);
    window.location.href = 'comic.html';
    
}

//-------------Functions for drawing comic-------------.



function loadpage(){

    // var bg_name =  localStorage.getItem("bg_name")
    // add_bg_with_name(bg_name);
    add_bg_char_to_canvas();
}
var bg = new Image();
var char = new Image();
var eye = new Image();
var mouth = new Image();
var dialog = new Image();
var text = '';
var imagesLoaded = 0;
function add_bg_char_to_canvas(){
    // Draw Image function
    imagesLoaded = 0;
    bg.onload = img_onload;

    char.onload = img_onload;

    eye.onload = img_onload;

    mouth.onload = img_onload;
    
    dialog.onload = img_onload;

    function img_onload(){
        imagesLoaded++;
        if(imagesLoaded == 5){
            allLoaded();
        }
    };

    function allLoaded(){
        draw_canvas()
    }

    bg_key = localStorage.getItem("bg_key");
    char_key = localStorage.getItem("char_key");
    id_eye = localStorage.getItem("id_eye");
    id_mouth = localStorage.getItem("id_mouth");

    var folder = config['folder'];
    dialog.src = "img_2/dialog1.png"
    bg.src = folder + config['backgrounds'][bg_key]['filename'];
    char.src = folder + config['characters'][char_key]['figure']['filename'];
    eye.src= folder + config['characters'][char_key]['eyes'][id_eye]['filename'];
    mouth.src= folder + config['characters'][char_key]['mouth'][id_mouth]['filename'];

    // window.addEventListener('resize', draw_canvas, false);
}



function go() {
    var c1 = document.getElementById('area1').value;
    var d1 = document.getElementById('as');
    console.log(c1)


    var circle_canvas = document.getElementById("canvas");
    var context = circle_canvas.getContext("2d");

    // Draw Image function
    text= document.getElementById('area1').value


    
    draw_canvas()


}


function draw_canvas(){
    var circle_canvas = document.getElementById("canvas");
    var context = circle_canvas.getContext("2d");

    // context.canvas.width  = window.innerWidth*0.75;
    // context.canvas.height = window.innerHeight*0.75;
    context.clearRect(0, 0, canvas.width, canvas.height);
    // console.log(circle_canvas.width ,circle_canvas.height )

    // alert(bg.width + 'x' + bg.height);
    // alert(char.width + 'x' + char.height);
    // alert(dialog.width + 'x' + dialog.height);
    context.drawImage(bg, 0, 0 ,dw =700,dh=700);

    x_char=config['backgrounds'][bg_key]['x_offset_char'];
    y_char=config['backgrounds'][bg_key]['y_offset_char'];

    context.drawImage(char, x_char, y_char);


    x_offset_eye = config['characters'][char_key]['eyes'][id_eye]['x_offset_figure'];
    y_offset_eye= config['characters'][char_key]['eyes'][id_eye]['y_offset_figure'];

    x_eye = x_char + x_offset_eye;
    y_eye = y_char + y_offset_eye;


    x_offset_mouth = config['characters'][char_key]['mouth'][id_mouth]['x_offset_figure'];
    y_offset_mouth= config['characters'][char_key]['mouth'][id_mouth]['y_offset_figure'];


    x_mouth =  x_char +x_offset_mouth;
    y_mouth = y_char +y_offset_mouth;

    context.drawImage(eye, x_eye, y_eye);
    context.drawImage(mouth, x_mouth, y_mouth);

    if(text !=''){


        font = 20;
        n_char_per_line = 10
        
        text_array =  foldRgx(text, n_char_per_line);
        // new_text = text_array.join('\n');

        x_dia = x_char + char.width;
        y_dia = y_char 
        
        dia_width =  font * 0.5  * n_char_per_line;
        dia_height=40* (text_array.length-1);
        context.drawImage(dialog, x_dia, y_dia, dw =dia_width, dh =dia_height);
        context.lineWidth = 1;
        context.fillStyle = "#CC00FF";
        context.lineStyle = "#ffff00";
        context.font = font+"px sans-serif";

        lineheight=font+ 1;
        for (var i = 0; i<text_array.length; i++){
            context.fillText(text_array[i], x_dia, y_dia+ font + (i*lineheight) );
        }
            

        // console.log("drawing" +new_text)
        // context.fillText(new_text, x_dia, y_dia + (dia_height/2));
    }
}

function countChar(val) {
    var len = val.value.length;
    // if (len >= 20) {
    //   val.value = val.value.substring(0, 500);
    // } else {

    max_length = document.getElementById("area1").maxLength;
      $('#charNum').text(len+"/"+max_length);
    // }
  };



  //
// Folds a string at a specified length, optionally attempting
// to insert newlines after whitespace characters.
//
// s          -  input string
// n          -  number of chars at which to separate lines
// useSpaces  -  if true, attempt to insert newlines at whitespace
// a          -  array used to build result
//
// Returns an array of strings that are no longer than n
// characters long.  If a is specified as an array, the lines 
// found in s will be pushed onto the end of a. 
//
// If s is huge and n is very small, this metho will have
// problems... StackOverflow.
//

function fold(s, n, useSpaces, a) {
    a = a || [];
    if (s.length <= n) {
        a.push(s);
        return a;
    }
    var line = s.substring(0, n);
    if (! useSpaces) { // insert newlines anywhere
        a.push(line);
        return fold(s.substring(n), n, useSpaces, a);
    }
    else { // attempt to insert newlines after whitespace
        var lastSpaceRgx = /\s(?!.*\s)/;
        var idx = line.search(lastSpaceRgx);
        var nextIdx = n;
        if (idx > 0) {
            line = line.substring(0, idx);
            nextIdx = idx;
        }
        a.push(line);
        return fold(s.substring(nextIdx), n, useSpaces, a);
    }
}

// Regex version of fold function.

function foldRgx(s, n) {
    var rgx = new RegExp('.{0,' + n + '}', 'g');
    return s.match(rgx);
}

function calculateAspectRatio(srcWidth, srcHeight, maxWidth, maxHeight) {

    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

    // return { width: srcWidth*ratio, height: srcHeight*ratio };
    return ratio;
 }
// download https://jsfiddle.net/user2314737/28wqq1gu/
 function download() {
    var canvas = document.getElementById("canvas");
    var img    = canvas.toDataURL("image/png");
    document.write('<img src="'+img+'"/>');
    }

