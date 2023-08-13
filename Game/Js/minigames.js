//mini game logic

// hiding all minigames until they are used
document.getElementById("minigame_1_oldman").style.display = "none";
document.getElementById("raider_minigame_1").style.display = "none";
document.getElementById("flashlight").style.display = "none";
document.getElementById("keypad1").style.display = "none";
document.getElementById("keypad2").style.display = "none";
document.getElementById("fishing").style.display = "none";
document.getElementById("minigame_1_bear").style.display = "none";
document.getElementById("minigame_1_son").style.display = "none";

// ------------------------------------------------------------------------
// raider_minigame

document.getElementById("score").innerHTML = "Score: "
// adding coordinate and score variables
var x = 100;
var y = 100;
var score = 0;
var ammo = 5;

// code for starting screen
var screen1 = document.getElementById("startScreen");
var span_Raider = document.getElementsByClassName("minigame_close")[0];
screen1.style.display = "block";
span_Raider.onclick = function () {
    screen1.style.display = "none";
    start_game();
}
window.onclick = function (event1) {
    if (event1.target == screen1) {
        screen1.style.display = "none";
        start_game();
    }
}
// main game loop
function start_game() {
    if (score < 10) {
        setTimeout(start_game, 1000);
    }
    else {
        document.getElementById("scene-context").style.display = "block";
        document.getElementById("input").style.display = "block";
        document.getElementById("raider_minigame_1").style.display = "none";
        curScene = 23;
        changeScene(23);
    }
    random_raider1();
    random_raider2();
    random_raider3();
    random_raider4();
}
// generates random coords
function random_int() {
    x = Math.floor(Math.random() * 90) + "%";
    y = Math.floor(Math.random() * 75) + "%";
}
//assigns the coords to each raider
function random_raider1() {
    random_int();
    let radier1 = document.getElementById('raider1');
    raider1.style.position = 'absolute';
    raider1.style.left = x;
    raider1.style.top = y;
}
function random_raider2() {
    random_int();
    let radier2 = document.getElementById('raider2');
    raider2.style.position = 'absolute';
    raider2.style.left = x;
    raider2.style.top = y;
}
function random_raider3() {
    random_int();
    let radier3 = document.getElementById('raider3');
    raider3.style.position = 'absolute';
    raider3.style.left = x;
    raider3.style.top = y;
}
function random_raider4() {
    random_int();
    let radier4 = document.getElementById('raider4');
    raider4.style.position = 'absolute';
    raider4.style.left = x;
    raider4.style.top = y;
}
// registers a hit for each raider
function hit1() {
    score = score + 1;
    document.getElementById("score").innerHTML = "Score: "+score;
    document.getElementById("raider1").src = raider1.src.replace("minigames/images/raider.png","minigames/images/explosion.png");
    setTimeout(() => {  document.getElementById("raider1").src = raider1.src.replace("minigames/images/explosion.png","minigames/images/raider.png"); }, 200);
    let gunshot = new Audio('../Game/sounds/gunshot.mp3');
    gunshot.play();
}
function hit2() {
    score = score + 1;
    document.getElementById("score").innerHTML = "Score: "+score;
    document.getElementById("raider2").src = raider2.src.replace("minigames/images/raider.png","minigames/images/explosion.png");
    setTimeout(() => {  document.getElementById("raider2").src = raider2.src.replace("minigames/images/explosion.png","minigames/images/raider.png"); }, 200);
    let gunshot = new Audio('../Game/sounds/gunshot.mp3');
    gunshot.play();
}
function hit3() {
    score = score + 1;
    document.getElementById("score").innerHTML = "Score: "+score;
    document.getElementById("raider3").src = raider3.src.replace("minigames/images/raider.png","minigames/images/explosion.png");
    setTimeout(() => {  document.getElementById("raider3").src = raider3.src.replace("minigames/images/explosion.png","minigames/images/raider.png"); }, 200);
    let gunshot = new Audio('../Game/sounds/gunshot.mp3');
    gunshot.play();
}
function hit4() {
    score = score + 1;
    document.getElementById("score").innerHTML = "Score: "+score;
    document.getElementById("raider4").src = raider4.src.replace("minigames/images/raider.png","minigames/images/explosion.png");
    setTimeout(() => {  document.getElementById("raider4").src = raider4.src.replace("minigames/images/explosion.png","minigames/images/raider.png"); }, 200);
    let gunshot = new Audio('../Game/sounds/gunshot.mp3');
    gunshot.play();
}

// --------------------------------------------------------------------

// oldman minigame

// adding coordinate and score variables
document.getElementById("score_oldman").innerHTML = "Score: "
var x_oldman = 500;
var y_oldman = 400;
var score_oldman = 0;

// startup screen for minigame
var screen1_oldman = document.getElementById("startScreen_oldman");
var span_oldMan = document.getElementsByClassName("minigame_close_oldman")[0];
screen1_oldman.style.display = "block";

span_oldMan.onclick = function () {
    screen1_oldman.style.display = "none";
    start_game_oldman();
}
window.onclick = function (event2) {
    if (event2.target == screen1_oldman) {
        screen1_oldman.style.display = "none";
        start_game_oldman();
    }
}
// start loop for oldman minigame
function start_game_oldman() {
    if (score_oldman < 3) {
        setTimeout(start_game_oldman, 2000);
    }
    else {
        document.getElementById("scene-context").style.display = "block";
        document.getElementById("input").style.display = "block";
        document.getElementById("minigame_1_oldman").style.display = "none";
        curScene = 5;
        changeScene(5);
    }
    random_oldman();
}
// generates random coords
function random_int_oldman() {
    x_oldman = Math.floor(Math.random() * 90) + "%";
    y_oldman = Math.floor(Math.random() * 75) + "%";
}
// assigns coords to oldman
function random_oldman() {
    random_int_oldman();
    let oldman = document.getElementById('oldman');
    oldman.style.position = 'absolute';
    oldman.style.left = x_oldman;
    oldman.style.top = y_oldman;
}
// registers a hit for old man
function hit_oldman() {
    score_oldman = score_oldman + 1;
    document.getElementById("score_oldman").innerHTML = "Score: " + score_oldman;
    document.getElementById("oldman").src = oldman.src.replace("minigames/images/oldman.png", "minigames/images/explosion.png");
    setTimeout(() => { document.getElementById("oldman").src = oldman.src.replace("minigames/images/explosion.png", "minigames/images/oldman.png"); }, 200);
    let gunshot = new Audio('../Game/sounds/gunshot.mp3');
    gunshot.play();
}

// flashlight

// startup screen for flashlight minigame
var screen1_flashlight = document.getElementById("startScreen_flashlight");
var span_flashlight = document.getElementsByClassName("minigame_close_flashlight")[0];
screen1_flashlight.style.display = "block";

span_flashlight.onclick = function () {
    screen1_flashlight.style.display = "none";
}
// when torch moves, updates correct x and y coords of users mouse
function move_torch(event) {
    var torch = document.getElementsByClassName("torch")[0];
    torch.style.clipPath = `circle(120px at ${event.offsetX}px ${event.offsetY}px)`;
}
// next scene button (used to be called something different)
function medkit(){
    document.getElementById("scene-context").style.display = "block";
    document.getElementById("input").style.display = "block";
    document.getElementById("flashlight").style.display = "none";
    curScene = 26;
    changeScene(26);
}

// keypad1

// startup screen for keypad minigame
var screen1_keypad1 = document.getElementById("startScreen_keypad1");
var span_keypad1 = document.getElementsByClassName("minigame_close_keypad1")[0];
screen1_keypad1.style.display = "block";

span_keypad1.onclick = function () {
    screen1_keypad1.style.display = "none";
}
// code variables
var keypad1_code = "1234";
var keypad1_current_code = "";

// registers when a number button is pressed, or enter, cancel and clear
function button_pressed(number){
    keypad1_current_code = (keypad1_current_code + number);
    document.getElementById("current_code").innerHTML = "Code: "+keypad1_current_code;
}

function keypad1_enter(){
    if (keypad1_current_code === keypad1_code){
        keypad1_current_code = ""
        document.getElementById("scene-context").style.display = "block";
        document.getElementById("input").style.display = "block";
        document.getElementById("keypad1").style.display = "none";
        curScene = 13;
        changeScene(13);
    }
    else{
        document.getElementById("current_code").innerHTML = "Error Wrong Code";
        keypad1_current_code = ""
    }
}
function keypad1_clear(){
    keypad1_current_code = keypad1_current_code.substring(0, keypad1_current_code.length-1);
    document.getElementById("current_code").innerHTML = "Code: "+keypad1_current_code;
}
function keypad1_cancel(){
    keypad1_current_code = "";
    document.getElementById("current_code").innerHTML = "Code: ";
}

// keypad2

// startup screen for keypad minigame
var screen1_keypad2 = document.getElementById("startScreen_keypad2");
var span_keypad2 = document.getElementsByClassName("minigame_close_keypad2")[0];
screen1_keypad2.style.display = "block";

span_keypad2.onclick = function () {
    screen1_keypad2.style.display = "none";
}

// code variables
var keypad2_code = "1987";
var keypad2_current_code = "";

// registers when a number button is pressed, or enter, cancel and clear
function button_pressed_keypad2(number_keypad2){
    keypad2_current_code = (keypad2_current_code + number_keypad2);
    document.getElementById("current_code_keypad2").innerHTML = "Code: "+keypad2_current_code;
}

function keypad2_enter(){
    if (keypad2_current_code === keypad2_code){
        keypad2_current_code = ""
        document.getElementById("scene-context").style.display = "block";
        document.getElementById("input").style.display = "block";
        document.getElementById("keypad2").style.display = "none";
        curScene = 79;
        changeScene(79);
    }
    else{
        document.getElementById("current_code_keypad2").innerHTML = "Error Wrong Code";
        keypad2_current_code = ""
    }
}
function keypad2_clear(){
    keypad2_current_code = keypad2_current_code.substring(0, keypad2_current_code.length-1);
    document.getElementById("current_code_keypad2").innerHTML = "Code: "+keypad2_current_code;
}
function keypad2_cancel(){
    keypad2_current_code = "";
    document.getElementById("current_code_keypad2").innerHTML = "Code: ";
}

// fishing

// coords for fish and the score
document.getElementById("score_fishing").innerHTML = "Score: "
var x_fishing = 100;
var y_fishing = 100;
var score_fishing = 0;

// start screen for fishing
var screen1_fishing = document.getElementById("startScreen_fishing");
var span_fishing = document.getElementsByClassName("minigame_close_fishing")[0];
screen1_fishing.style.display = "block";

span_fishing.onclick = function () {
    screen1_fishing.style.display = "none";
    start_game_fishing();
}

window.onclick = function (event1_fishing) {
    if (event1_fishing.target == screen1_fishing) {
        screen1_fishing.style.display = "none";
        start_game_fishing();
    }
}

// main fishing loop
function start_game_fishing() {
    if (score_fishing < 5) {
        setTimeout(start_game_fishing, 2000);
    }
    else {
        document.getElementById("scene-context").style.display = "block";
        document.getElementById("input").style.display = "block";
        document.getElementById("fishing").style.display = "none";
        curScene = 59;
        changeScene(59);
    }
    random_fish1();
    random_fish2();
    random_fish3();
    random_fish4();
}
// generates random int for fish coords
function random_int_fishing() {
    x_fishing = Math.floor(Math.random() * 90) + "%";
    y_fishing = Math.floor(Math.random() * 75) + "%";
}
// assigns each fish with the random coords to move to
function random_fish1() {
    random_int_fishing();
    let fish = document.getElementById('fish1');
    fish1.style.position = 'absolute';
    fish1.style.left = x_fishing;
    fish1.style.top = y_fishing;
}
function random_fish2() {
    random_int_fishing();
    let fish2 = document.getElementById('fish2');
    fish2.style.position = 'absolute';
    fish2.style.left = x_fishing;
    fish2.style.top = y_fishing;
}
function random_fish3() {
    random_int_fishing();
    let fish3 = document.getElementById('fish3');
    fish3.style.position = 'absolute';
    fish3.style.left = x_fishing;
    fish3.style.top = y_fishing;
}
function random_fish4() {
    random_int_fishing();
    let fish4 = document.getElementById('fish4');
    fish4.style.position = 'absolute';
    fish4.style.left = x_fishing;
    fish4.style.top = y_fishing;
}
// detects when a fish is hit
function hit1_fishing() {
    score_fishing = score_fishing + 1;
    document.getElementById("score_fishing").innerHTML = "Score: "+score_fishing;
    document.getElementById("fish1").src = fish1.src.replace("minigames/images/fish.png","minigames/images/splash.png");
    setTimeout(() => {  document.getElementById("fish1").src = fish1.src.replace("minigames/images/splash.png","minigames/images/fish.png"); }, 200);
}
function hit2_fishing() {
    score_fishing = score_fishing + 1;
    document.getElementById("score_fishing").innerHTML = "Score: "+score_fishing;
    document.getElementById("fish2").src = fish2.src.replace("minigames/images/fish.png","minigames/images/splash.png");
    setTimeout(() => {  document.getElementById("fish2").src = fish2.src.replace("minigames/images/splash.png","minigames/images/fish.png"); }, 200);
}
function hit3_fishing() {
    score_fishing = score_fishing + 1;
    document.getElementById("score_fishing").innerHTML = "Score: "+score_fishing;
    document.getElementById("fish3").src = fish3.src.replace("minigames/images/fish.png","minigames/images/splash.png");
    setTimeout(() => {  document.getElementById("fish3").src = fish3.src.replace("minigames/images/splash.png","minigames/images/fish.png"); }, 200);
}
function hit4_fishing() {
    score_fishing = score_fishing + 1;
    document.getElementById("score_fishing").innerHTML = "Score: "+score_fishing;
    document.getElementById("fish4").src = fish4.src.replace("minigames/images/fish.png","minigames/images/splash.png");
    setTimeout(() => {  document.getElementById("fish4").src = fish4.src.replace("minigames/images/splash.png","minigames/images/fish.png"); }, 200);
}

//bear minigame

// x, y and score variables for bear minigame
document.getElementById("score_bear").innerHTML = "Score: "
var x_bear = 500;
var y_bear = 400;
var score_bear = 0;

// start-screen for bear minigame
var screen1_bear = document.getElementById("startScreen_bear");
var span_bear = document.getElementsByClassName("minigame_close_bear")[0];
screen1_bear.style.display = "block";

span_bear.onclick = function () {
    screen1_bear.style.display = "none";
    start_game_bear();
}
window.onclick = function (event2) {
    if (event2.target == screen1_bear) {
        screen1_bear.style.display = "none";
        start_game_bear();
    }
}

// sets the axis the bear will be on
var bear_scale = 1;

// main bear loop
function start_game_bear() {
    if (score_bear < 10) {
        setTimeout(start_game_bear, 1000);
        // document.getElementById("bear").style.transform = "rotate(" + bear_angle + "deg)";
        // bear_angle = (bear_angle + 90);
        document.getElementById("bear").style.transform = "scaleX(" + bear_scale + ")";
        bear_scale = (Math.floor(Math.random() * (1 - -1 + 1) + -1));
        if (bear_scale === 0){
            bear_scale = -1;
        }
    }
    else {
        document.getElementById("scene-context").style.display = "block";
        document.getElementById("input").style.display = "block";
        document.getElementById("minigame_1_bear").style.display = "none";
        curScene = 100;
        changeScene(100);
    }
    random_bear();
}
// generates random x and y coords for bear
function random_int_bear() {
    x_bear = Math.floor(Math.random() * 90) + "%";
    y_bear = Math.floor(Math.random() * 75) + "%";
}
// assigns coords to bear
function random_bear() {
    random_int_bear();
    let bear = document.getElementById('bear');
    bear.style.position = 'absolute';
    bear.style.left = x_bear;
    bear.style.top = y_bear;
}

// detects when bear is hit
function hit_bear() {
    score_bear = score_bear + 1;
    document.getElementById("score_bear").innerHTML = "Score: " + score_bear;
    document.getElementById("bear").src = bear.src.replace("minigames/images/bear.png", "minigames/images/explosion.png");
    setTimeout(() => { document.getElementById("bear").src = bear.src.replace("minigames/images/explosion.png", "minigames/images/bear.png"); }, 200);
    let gunshot = new Audio('../Game/sounds/gunshot.mp3');
    gunshot.play();
}

//son minigame

// variables for x,y and score for the son minigame
document.getElementById("score_son").innerHTML = "Score: "
var x_son = 500;
var y_son = 400;
var score_son = 0;

// startup screen
var screen1_son = document.getElementById("startScreen_son");
var span_son = document.getElementsByClassName("minigame_close_son")[0];
screen1_son.style.display = "block";

span_son.onclick = function () {
    screen1_son.style.display = "none";
    start_game_son();
}
window.onclick = function (event2) {
    if (event2.target == screen1_son) {
        screen1_son.style.display = "none";
        start_game_son();
    }
}
// sets the angle the son spawn in at
var son_angle = 0;

// main son minigame loop
function start_game_son() {
    if (score_son < 15) {
        setTimeout(start_game_son, 1000);
        document.getElementById("son").style.transform = "rotate(" + son_angle + "deg)";
        son_angle = (son_angle + 180);
        // document.getElementById("son").style.transform = "scaleX(" + son_scale + ")";
        // son_scale = (Math.floor(Math.random() * (1 - -1 + 1) + -1));
        // if (son_scale === 0){
        //     son_scale = -1;
        // }
    }
    else {
        document.getElementById("scene-context").style.display = "block";
        document.getElementById("input").style.display = "block";
        document.getElementById("minigame_1_son").style.display = "none";
        curScene = 1002;
        changeScene(1002);
    }
    random_son();
}
// generates random coords for the son to move to
function random_int_son() {
    x_son = Math.floor(Math.random() * 90) + "%";
    y_son = Math.floor(Math.random() * 75) + "%";
}
// assigns coords to son
function random_son() {
    random_int_son();
    let son = document.getElementById('son');
    son.style.position = 'absolute';
    son.style.left = x_son;
    son.style.top = y_son;
}
// detects when son is hit and increases score
function hit_son() {
    score_son = score_son + 1;
    document.getElementById("score_son").innerHTML = "Score: " + score_son;
    document.getElementById("son").src = son.src.replace("minigames/images/son.png", "minigames/images/explosion.png");
    setTimeout(() => { document.getElementById("son").src = son.src.replace("minigames/images/explosion.png", "minigames/images/son.png"); }, 200);
    let gunshot = new Audio('../Game/sounds/gunshot.mp3');
    gunshot.play();
}
