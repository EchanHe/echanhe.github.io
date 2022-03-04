

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

            if(key_l1=='face'){
                //old version actual face
                // var filename = config[choice_type][key][key_l1]['filename'];
                // thumbnail filenames
                var filename = config[choice_type][key][key_l1]['thumbnail'];
                var folder = config["folder"] + config[choice_type][key]['subfolder'];

            }else if (key_l1==null){
                var filename = config[choice_type][key]['filename'];
                var folder = config["folder"] + config[choice_type][key]['subfolder'];
            }else{
                alert("config file error");
            }
        

            // console.log(characters["1"])
            label.innerHTML = "<input type=\"radio\" name=" + label_name+ " value=" + key +
            " checked> <img src=" + folder + filename + " class=\"choice_img\">";
            
            div.appendChild(label);
        }
        
        targetelement.appendChild(div);

    }


    // window.addEventListener('resize', function(event) {
    //     var circle_canvas = document.getElementById("face_canvas");
    //     var context = circle_canvas.getContext("2d");
    //     console.log("window resized: canvas size: " + circle_canvas.height +"  "+ circle_canvas.width )
    //     circle_canvas.height  = circle_canvas.width;

    //     console.log("window resized: canvas size: " + circle_canvas.height +"  "+ circle_canvas.width )
    // }, true);

}

var id_eye = 0;
var id_mouth = 0;
var bool_draw_face
// function add_face(filename , l_eye, eye_x_offset, eye_y_offset,
//     l_mouth, m_x_offset, m_y_offset ){

//     // show_image(src, 276,110, "Google Logo");

//     var targetelement= document.getElementById("face_choicer_body");

//     var img = document.createElement("img");
//     img.src = filename;

//     // eyes
//     var eye = document.createElement("img");
//     eye.src = l_eye[0];

//     id_eye = 0;
    
//     //mouths
//     var mouth = document.createElement("img");
//     mouth.src = l_mouth[0];
 
//     id_mouth = 0;

//     load_img_cnt=0;

//     var onImgLoad = function()
//     {
//         load_img_cnt++;
//         if(load_img_cnt == 3){
//             draw_face();
//             draw_parts(targetelement , eye, ratio, eye_x_offset , eye_y_offset,"img_eye");
//             draw_parts(targetelement , mouth, ratio, m_x_offset , m_y_offset, "img_mouth");
//         }

//     };

//     img.onload = onImgLoad;
//     eye.onload = onImgLoad;
//     mouth.onload = onImgLoad;

//     function draw_face(){
//         ratio = calculateAspectRatio(img.width,img.height,targetelement.offsetWidth,targetelement.offsetHeight);
//         console.log(ratio)

//         img.width = img.width * ratio;
//         img.height = img.height * ratio;
    
  
//         //relative image size
//         // img.style.maxHeight = "100%";
//         // img.style.maxWidth = "100%";


//         // eye.width = eye.width * ratio;
//         // eye.height = eye.height * ratio;

//         // eye.id = "img_eye";
        
//         // eye.style.position = "absolute"
//         // eye.style.left = x_offset * ratio+'px';
//         // eye.style.top = y_offset * ratio+'px'; 

//         targetelement.appendChild(img);
//     };
    
// }

function build_expression(filename){

    // show_image(src, 276,110, "Google Logo");

    var targetelement= document.getElementById("face_choicer_body");

    var root_folder = config['folder'];
    var subfolder = config['characters'][char_key]['subfolder']

    if(subfolder == "None"){
        var folder  =root_folder;
    }else{
        var folder  =root_folder + subfolder;
    }

    eye_folder = folder +'face_parts/';
    mouth_folder = folder +'face_parts/';

    face = document.createElement("img");
    face.src = folder + filename;

    // eyes
    eye = document.createElement("img");
    // eye.src = eye_folder + l_eye[0]['filename']; // older version config using 'filename'
    eye.src = eye_folder + l_eye[0]['face_filename'];

    var eye_x_offset= l_eye[0]['x_offset_face'];
    var eye_y_offset= l_eye[0]['y_offset_face'];

    id_eye = 0;
    
    //mouths
    mouth = document.createElement("img");
    // mouth.src = mouth_folder + l_mouth[0]['filename'];  // older version config using 'filename'
    mouth.src = mouth_folder + l_mouth[0]['face_filename'];

    var m_x_offset= l_mouth[0]['x_offset_face'];
    var m_y_offset= l_mouth[0]['y_offset_face'];

    id_mouth = 0;

    load_img_cnt=0;

    var onImgLoad = function()
    {
        load_img_cnt++;
        if(load_img_cnt == 3){
            // draw_face();
            // draw_parts(targetelement , eye, ratio, eye_x_offset , eye_y_offset,"img_eye");
            // draw_parts(targetelement , mouth, ratio, m_x_offset , m_y_offset, "img_mouth");

            draw_face_canvas();
        }

    };

    face.onload = onImgLoad;
    eye.onload = onImgLoad;
    mouth.onload = onImgLoad;


    
}


function draw_face_canvas(){

    var circle_canvas = document.getElementById("face_canvas");
    var context = circle_canvas.getContext("2d");

    // context.canvas.width  = window.innerWidth*0.75;
    // context.canvas.height = window.innerHeight*0.75;

    console.log("Canvas figure size: "+context.canvas.width +" x " + context.canvas.height);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);



    console.log("character face size: "+face.width +" x " + face.height);
    context.drawImage(face,0 ,0 );
    context.drawImage(eye ,0,0);
    context.drawImage(mouth,0,0);

};

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
    // document.getElementById("img_eye").remove();
    //choose the next/prev eye
    id_eye = prev_next_id(id_eye, l_eye.length,  next);

    eye = document.createElement("img");


    
    // eye.src = eye_folder +  l_eye[id_eye]['filename']; // older version config using 'filename'
    eye.src = eye_folder +  l_eye[id_eye]['face_filename'];
    var eye_x_offset= l_eye[id_eye]['x_offset_face'];
    var eye_y_offset= l_eye[id_eye]['y_offset_face'];

    eye.onload = function () {
        //TODO read the jason in when the page is loaded.
        // draw_parts(targetelement , eye, ratio,
        //      eye_x_offset , eye_y_offset, "img_eye")

        draw_face_canvas();

    };
}

function move_mouth(next){
    var targetelement= document.getElementById("face_choicer_body")
    // document.getElementById("img_mouth").remove();
    id_mouth = prev_next_id(id_mouth, l_mouth.length,  next);

    mouth = document.createElement("img");
    // mouth.src = mouth_folder + l_mouth[id_mouth]['filename'];  // older version config using 'filename'
    mouth.src = mouth_folder + l_mouth[id_mouth]['face_filename'];

    var m_x_offset= l_mouth[id_mouth]['x_offset_face'];
    var m_y_offset= l_mouth[id_mouth]['y_offset_face'];

    //get the offset from json.
    mouth.onload = function () {
        //TODO read the jason in when the page is loaded.
        // draw_parts(targetelement , mouth, ratio,
        //      m_x_offset , m_y_offset, "img_mouth")
        draw_face_canvas();

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
};

function draw_face(){



    // The scale of image from the read in size to the Illustrator size
    ori_width = v_character['face']['width'];
    ori_height = v_character['face']['height'];

    svg_resize_scale= calculateAspectRatio(ori_width,ori_height, img.width,img.height );
    // the scale of image to the canvas
    ratio = calculateAspectRatio(img.width,img.height,targetelement.offsetWidth,targetelement.offsetHeight);
    
    

    console.log("scale ratio for the face: "+ratio);

    console.log("face img origin size: "+img.width +" x " + img.height);

    img.width = img.width * ratio;
    img.height = img.height * ratio;
    console.log("face img scaled size: "+img.width +" x " + img.height);

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

function draw_parts(targetelement, img, ratio, x_offset,y_offset, id_name  ){
    img.id = id_name;
    
    console.log(id_name + " img size: "+img.width +" x " + img.height);
    img.width = img.width * ratio;
    img.height = img.height * ratio;
    console.log(id_name + " img scaled size: "+img.width +" x " + img.height);

    img.style.position = "absolute"
    // img.style.left = x_offset * ratio * svg_resize_scale+'px';
    // img.style.top = y_offset * ratio * svg_resize_scale+'px'; 

    img.style.left = '0px';
    img.style.top = '0px'; 

    targetelement.appendChild(img);
};



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
    
    // dialog.onload = img_onload;

    function img_onload(){
        imagesLoaded++;
        if(imagesLoaded == 4){
            draw_character("canvas" ,bg, char,eye,mouth, char_key );
        }
    };

    bg_key = localStorage.getItem("bg_key");
    char_key = localStorage.getItem("char_key");
    id_eye = localStorage.getItem("id_eye");
    id_mouth = localStorage.getItem("id_mouth");

    


    var root_folder = config['folder'];
    var subfolder = config['characters'][char_key]['subfolder']
    var bg_folder = root_folder +  config['backgrounds'][bg_key]['subfolder'];

    if(subfolder == "None"){
        var folder  =root_folder;
    }else{
        var folder  =root_folder + subfolder;
    }

    var parts_folder = folder + 'figure_parts/';

    bg.src = bg_folder + config['backgrounds'][bg_key]['filename'];
    char.src = folder + config['characters'][char_key]['figure']['filename'];

    //older version using 'filename'
    // eye.src= parts_folder + config['characters'][char_key]['eyes'][id_eye]['filename']; 
    // mouth.src= parts_folder + config['characters'][char_key]['mouth'][id_mouth]['filename'];

    eye.src= parts_folder + config['characters'][char_key]['eyes'][id_eye]['figure_filename']; 
    mouth.src= parts_folder + config['characters'][char_key]['mouth'][id_mouth]['figure_filename'];

    // window.addEventListener('resize', draw_canvas, false);
}



function go() {
    // Draw Image function
    text= document.getElementById('area1').value
    
    n_char = text.length;
    if(n_char>0 & n_char<20){
        bubble_key='small';
    }else if (n_char<102){
        bubble_key='medium';
    }else if (n_char<175){
        bubble_key='large';
    }else{
        bubble_key='long';
    }


    // bubble_key = bubble_keys[bubble_id];
    var bubble_folder = config['folder'] + config['speech_bubbles']['subfolder'];
    dialog.src = bubble_folder + config['speech_bubbles'][bubble_key]['filename'];


    dialog.onload =img_onload;

    function img_onload(){

        draw_character("canvas" ,bg, char,eye,mouth, char_key , text , dialog ,bubble_key);

    };
}

function draw_character(canvas_id ,bg, char,eye,mouth, char_key , text='' , dialog ,bubble_key){
    console.log("==== Drawing Comic ====");
    var circle_canvas = document.getElementById(canvas_id);
    var context = circle_canvas.getContext("2d");

    //update the canvas as the background's width and heighy
    context.canvas.width  = bg.width;
    context.canvas.height = bg.height;

    console.log("Canvas figure size: "+context.canvas.width +" x " + context.canvas.height);
    context.clearRect(0, 0,context.canvas.width, context.canvas.height);


    console.log("Background figure size: "+context.canvas.width +" x " + context.canvas.height);
    context.drawImage(bg, 0, 0 , context.canvas.width, context.canvas.height);


    x_char=config['characters'][char_key]['figure']['x_offset_from_bg'];
    y_char=config['characters'][char_key]['figure']['y_offset_from_bg'];

    var width_char = config['characters'][char_key]['figure']['width'];
    var height_char = config['characters'][char_key]['figure']['height'];


    console.log("character figure size: "+char.width +" x " + char.height);
    console.log("character figure  x: "+x_char +", y: " + y_char);
    context.drawImage(char, x_char, y_char,width=width_char, height=height_char);

    
    x_eye = x_char;
    y_eye = y_char;


    x_mouth = x_char;
    y_mouth = y_char;

    console.log("eye size: "+eye.width +" x " + eye.height);
    console.log("mouth size: "+mouth.width +" x " + mouth.height);

    context.drawImage(eye, x_eye, y_eye,width=width_char, height=height_char);
    context.drawImage(mouth, x_mouth, y_mouth,width=width_char, height=height_char);


    //Draw and dialog text
    if(text !=''){
        font = 34;
        console.log("Use speech bubble:" +bubble_key );
        var bubble_x_offset= config['speech_bubbles'][bubble_key]['x_offset_background'];
        var bubble_y_offset= config['speech_bubbles'][bubble_key]['y_offset_background'];
    
        var bubble_width = config['speech_bubbles'][bubble_key]['width'];
        var bubble_height = config['speech_bubbles'][bubble_key]['height'];
        context.drawImage(dialog, bubble_x_offset, bubble_y_offset, width = bubble_width, height = bubble_height);
        


        // bubble_type='medium';
        if(bubble_key=='large'){
            n_char_per_line = 25;
        }else if(bubble_key=='medium'){
            n_char_per_line = 17;
        }else if(bubble_key=='long'){
            n_char_per_line = 60;
        }else if(bubble_key=='small'){
            n_char_per_line = 10;
        }

        
        text_array =  foldRgx(text, n_char_per_line);
        // new_text = text_array.join('\n');

        console.log("displaying text with font size: " + font)
        console.log("Characters per line: " + n_char_per_line)
        console.log("Lines: " + text_array.length)

        // x_dia = x_char 
        // y_dia = y_char 

        x_text = bubble_x_offset + config['speech_bubbles'][bubble_key]['x_offset_text'];
        y_text = bubble_y_offset + config['speech_bubbles'][bubble_key]['y_offset_text'];
        
        // dia_width =  font * 0.5  * n_char_per_line;
        // dia_height=40* (text_array.length-1);
        // context.drawImage(dialog, x_dia, y_dia, dw =dia_width, dh =dia_height);
        // context.lineWidth = 1;
        // context.fillStyle = "#CC00FF";
        // context.lineStyle = "#ffff00";
        
        context.font = font+"px sans-serif";

        lineheight=font+ 1;
        for (var i = 0; i<text_array.length; i++){
            context.fillText(text_array[i], x_text, y_text+ font + (i*lineheight) );
        }
    }
}



var comic_limit=2;
var comic_config=[];
var current_mini_canvas = -1;
var bubble_key='None';
function add_to_gallery(){
    // var circle_canvas = document.getElementById("mini_canvas_1");

    if (comic_config.length ==comic_limit){
        alert("No more comic can be added");
    // Check if there is a dialog
    }else if(text ==''){
        alert("add dialog first");
    }else {
        
        comic_config.push({"text":text, "bg":bg })
        draw_character("mini_canvas_"+comic_config.length ,bg, char,eye,mouth, char_key , text , dialog ,bubble_key)
        
        // Redraw the main canvas and reset the dialog
        document.getElementById('area1').value ='';
        text='';
        draw_character("canvas",bg, char,eye,mouth, char_key)
    }

    

}

function redraw(){
    // var circle_canvas = document.getElementById("mini_canvas_1");

    var text_temp = comic_config[current_mini_canvas-1]["text"]
    n_char = text_temp.length;
    if(n_char>0 & n_char<20){
        bubble_key='small';
    }else if (n_char<102){
        bubble_key='medium';
    }else if (n_char<175){
        bubble_key='large';
    }else{
        bubble_key='long';
    }


    // bubble_key = bubble_keys[bubble_id];
    var bubble_folder = config['folder'] + config['speech_bubbles']['subfolder'];
    dialog.src = bubble_folder + config['speech_bubbles'][bubble_key]['filename'];


    dialog.onload =img_onload;

    function img_onload(){

        draw_character("canvas",bg, char,eye,mouth, char_key ,  text_temp,
        dialog ,bubble_key)

    };



    

}

// To be deleted bubble test
// bubble_id = 0;
// bubble_keys = ["long" , "medium" , "small" , "large"];
// function speech_bubble_test(){
    
//     bubble_id++;
//     if(bubble_id>3){
//         bubble_id=0;
//     }
//     bubble_key = bubble_keys[bubble_id];

//     var bubble_folder = config['folder'] + config['speech_bubbles']['subfolder'];
//     // mouth.src = mouth_folder + l_mouth[id_mouth]['filename'];  // older version config using 'filename'
//     dialog.src = bubble_folder + config['speech_bubbles'][bubble_key]['filename'];
    
//     console.log("using speech bubble: "+dialog.src )

//     dialog.onload = function () {
//         draw_canvas();

//     };
// }


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
    // document.write('<img src="'+img+'"/>');

    var link = document.createElement("a");
    link.download = current_mini_canvas+'png';
    link.href = canvas.toDataURL("image/png");
    link.click();
}

function draw_canvas(){
    console.log("==== Drawing Comic ====");
    var circle_canvas = document.getElementById("canvas");
    var context = circle_canvas.getContext("2d");

    // context.canvas.width  = window.innerWidth*0.75;
    // context.canvas.height = window.innerHeight*0.75;

    //update the canvas as the background's width and heighy
    context.canvas.width  = bg.width;
    context.canvas.height = bg.height;

    console.log("Canvas figure size: "+context.canvas.width +" x " + context.canvas.height);
    context.clearRect(0, 0,context.canvas.width, context.canvas.height);


    console.log("Background figure size: "+context.canvas.width +" x " + context.canvas.height);
    context.drawImage(bg, 0, 0 , context.canvas.width, context.canvas.height);


    x_char=config['characters'][char_key]['figure']['x_offset_from_bg'];
    y_char=config['characters'][char_key]['figure']['y_offset_from_bg'];

    var width_char = config['characters'][char_key]['figure']['width'];
    var height_char = config['characters'][char_key]['figure']['height'];


    console.log("character figure size: "+char.width +" x " + char.height);
    console.log("character figure  x: "+x_char +", y: " + y_char);
    context.drawImage(char, x_char, y_char,width=width_char, height=height_char);

    
    x_eye = x_char;
    y_eye = y_char;


    // x_offset_mouth = config['characters'][char_key]['mouth'][id_mouth]['x_offset_figure'];
    // y_offset_mouth= config['characters'][char_key]['mouth'][id_mouth]['y_offset_figure'];


    x_mouth = x_char;
    y_mouth = y_char;

    console.log("eye size: "+eye.width +" x " + eye.height);
    console.log("mouth size: "+mouth.width +" x " + mouth.height);

    context.drawImage(eye, x_eye, y_eye,width=width_char, height=height_char);
    context.drawImage(mouth, x_mouth, y_mouth,width=width_char, height=height_char);


    //Draw and dialog text
    if(text !=''){
        font = 34;


        console.log("Use speech bubble:" +bubble_key );
        var bubble_x_offset= config['speech_bubbles'][bubble_key]['x_offset_background'];
        var bubble_y_offset= config['speech_bubbles'][bubble_key]['y_offset_background'];
    
        var bubble_width = config['speech_bubbles'][bubble_key]['width'];
        var bubble_height = config['speech_bubbles'][bubble_key]['height'];
        context.drawImage(dialog, bubble_x_offset, bubble_y_offset, width = bubble_width, height = bubble_height);
        


        // bubble_type='medium';
        if(bubble_key=='large'){
            n_char_per_line = 25;
        }else if(bubble_key=='medium'){
            n_char_per_line = 17;
        }else if(bubble_key=='long'){
            n_char_per_line = 60;
        }else if(bubble_key=='small'){
            n_char_per_line = 10;
        }

        
        text_array =  foldRgx(text, n_char_per_line);
        // new_text = text_array.join('\n');

        console.log("displaying text with font size: " + font)
        console.log("Characters per line: " + n_char_per_line)
        console.log("Lines: " + text_array.length)

        // x_dia = x_char 
        // y_dia = y_char 

        x_text = bubble_x_offset + config['speech_bubbles'][bubble_key]['x_offset_text'];
        y_text = bubble_y_offset + config['speech_bubbles'][bubble_key]['y_offset_text'];
        
        // dia_width =  font * 0.5  * n_char_per_line;
        // dia_height=40* (text_array.length-1);
        // context.drawImage(dialog, x_dia, y_dia, dw =dia_width, dh =dia_height);
        // context.lineWidth = 1;
        // context.fillStyle = "#CC00FF";
        // context.lineStyle = "#ffff00";
        
        context.font = font+"px sans-serif";

        lineheight=font+ 1;
        for (var i = 0; i<text_array.length; i++){
            context.fillText(text_array[i], x_text, y_text+ font + (i*lineheight) );
        }

    }


}




    