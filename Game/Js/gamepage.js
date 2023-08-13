function fontSizeUp() {
    var scT = document.getElementById('SceneTxt');
    var mainC = document.getElementById('main-container');

    stylescT = window.getComputedStyle(scT).getPropertyValue('font-size');
    stylemainC = window.getComputedStyle(mainC).getPropertyValue('font-size');

    fontsizescT = parseFloat(stylescT);
    fontsizemainC = parseFloat(stylemainC);

    scT.style.fontSize = (fontsizescT + 1) + 'px';
    mainC.style.fontSize = (fontsizemainC + 1) + 'px';
}

function fontSizeDown() {
    var scT = document.getElementById('SceneTxt');
    var mainC = document.getElementById('main-container');

    stylescT = window.getComputedStyle(scT).getPropertyValue('font-size');
    stylemainC = window.getComputedStyle(mainC).getPropertyValue('font-size');

    fontsizescT = parseFloat(stylescT);
    fontsizemainC = parseFloat(stylemainC);

    scT.style.fontSize = (fontsizescT - 1) + 'px';
    mainC.style.fontSize = (fontsizemainC - 1) + 'px';
}

var body = document.body;
var mainC = document.getElementById('main-container');
var sceneCon = document.getElementById('scene-context');
var choiceVar = document.getElementById('choices');
var leftCon = document.getElementById('container-left-bottom-main');
var inp = document.getElementById('input');
var leftConBot = document.getElementById('left-container-bottom');
var leftConTain = document.getElementById('left-container');

var btnAccArr = document.getElementsByClassName('btnAcc');
var timerVar = document.getElementById('timer');

var webbtnid = document.getElementById('webBtnID');
var webdrkbtnid = document.getElementById('webDrkBtnID');
var websunbtnid = document.getElementById('webSunBtnID');
var journalbtnid = document.getElementById('journalBtnID');
var bluebtnid = document.getElementById('blueBtnID');

var pChoice = document.getElementById('prevChoiceTxt');

function websiteTheme() {
    body.classList.toggle('bodyWeb');
    mainC.classList.toggle('maincontainClassWeb');
    sceneCon.classList.toggle('sceneContextClassWeb');
    choices.classList.toggle('choicesClassWeb');
    leftCon.classList.toggle('leftContBottomClassWeb');
    inp.classList.toggle('inputClassWeb');
    timerVar.classList.toggle('timerClassWeb');
    leftConBot.classList.toggle('leftConBotWeb');
    leftConTain.classList.toggle('leftConTainWeb');

    webbtnid.classList.toggle('webBtnWeb');
    webdrkbtnid.classList.toggle('btnNone');
    websunbtnid.classList.toggle('btnNone');
    journalbtnid.classList.toggle('btnNone');
    bluebtnid.classList.toggle('btnNone');

    for (var i = 0; i < btnAccArr.length; i++) {
        btnAccArr[i].classList.toggle('btnAccWeb');
    }

    document.getElementById('s1C').classList.toggle('webs1C');
}

function websiteDark() {
    mainC.classList.toggle('maincontainClassDark');
    sceneCon.classList.toggle('sceneContextClassDark');
    choices.classList.toggle('choicesClassDark');
    leftCon.classList.toggle('leftContBottomClassDark');
    inp.classList.toggle('inputClassDark');
    timerVar.classList.toggle('timerClassDark');
    leftConBot.classList.toggle('leftConBotDark');

    webbtnid.classList.toggle('btnNone');
    webdrkbtnid.classList.toggle('webDarkBtn');
    websunbtnid.classList.toggle('btnNone');
    journalbtnid.classList.toggle('btnNone');
    bluebtnid.classList.toggle('btnNone');

    for (var i = 0; i < btnAccArr.length; i++) {
        btnAccArr[i].classList.toggle('btnAccDark');
    }
}

function websiteSunset() {
    body.classList.toggle('bodySun');
    mainC.classList.toggle('maincontainClassSunset');
    sceneCon.classList.toggle('sceneContextClassSunset');
    choices.classList.toggle('choicesClassSunset');
    leftCon.classList.toggle('leftContBottomClassSunset');
    inp.classList.toggle('inputClassSunset');
    timerVar.classList.toggle('timerClassSunset');
    leftConBot.classList.toggle('leftContBottomSunset');
    leftConTain.classList.toggle('leftConTainSunset');

    webbtnid.classList.toggle('btnNone');
    webdrkbtnid.classList.toggle('btnNone');
    websunbtnid.classList.toggle('webSunBtn');
    journalbtnid.classList.toggle('btnNone');
    bluebtnid.classList.toggle('btnNone');

    for (var i = 0; i < btnAccArr.length; i++) {
        btnAccArr[i].classList.toggle('btnAccSunset');
    }
}

function journalTheme() {
    body.classList.toggle('bodyJour');
    mainC.classList.toggle('mainJour');
    sceneCon.classList.toggle('sceneJour');
    choices.classList.toggle('choicesJour');
    leftCon.classList.toggle('leftcontJour');
    inp.classList.toggle('inputJour');
    timerVar.classList.toggle('timerJour');
    leftConBot.classList.toggle('leftcontbotJour');
    leftConTain.classList.toggle('leftcontainJour');

    webbtnid.classList.toggle('btnNone');
    webdrkbtnid.classList.toggle('btnNone');
    websunbtnid.classList.toggle('btnNone');
    journalbtnid.classList.toggle('jourBtn');
    bluebtnid.classList.toggle('btnNone');

    document.getElementById('prevChoiceTxt').classList.toggle('jourprevChoice');

    for (var i = 0; i < btnAccArr.length; i++) {
        btnAccArr[i].classList.toggle('btnAccJour');
    }
}

function blueTheme() {
    body.classList.toggle('bodyBlue');
    mainC.classList.toggle('mainBlue');
    sceneCon.classList.toggle('sceneBlue');
    choices.classList.toggle('choicesBlue');
    leftCon.classList.toggle('leftcontBlue');
    inp.classList.toggle('inputBlue');
    timerVar.classList.toggle('timerBlue');
    leftConBot.classList.toggle('leftcontbotBlue');
    leftConTain.classList.toggle('leftcontainBlue');

    webbtnid.classList.toggle('btnNone');
    webdrkbtnid.classList.toggle('btnNone');
    websunbtnid.classList.toggle('btnNone');
    journalbtnid.classList.toggle('btnNone');
    bluebtnid.classList.toggle('btnBlue');

    document.getElementById('prevChoiceTxt').classList.toggle('blueprevChoice');

    // pChoice.classList.toggle('pChoiceJour');

    for (var i = 0; i < btnAccArr.length; i++) {
        btnAccArr[i].classList.toggle('btnAccBlue');
    }
}

function showSum() {
    statistics();
    var summar = document.getElementById("summaryId");
    summar.className = "show";
}

function hide() { 
    document.getElementById('summaryId').classList.toggle('close');
}

function showCon() {    
    document.getElementById('blkbg').className = "blackbg";
    document.getElementById('main-container').style.backgroundColor = "black";
    document.getElementById('left-container-bottom').style.backgroundColor = "black";

    var contra = document.getElementById('contractId');
    contra.className = "contractClass";

}


var playerName1 = document.getElementById('playerName').value;
function next() {
    
    playerName1 = document.getElementById('playerName').value;
    if (playerName1 == "") {
        document.getElementById('errorC').innerHTML = "Please enter your name";
        return false;
    } else if (!checkGen()) {
        return false;
    }
    
    document.getElementById('contractId').className = "close";

    playerName1 = document.getElementById('playerName').value;

    document.getElementById('contractContinue').className = "continued";
    document.getElementById('name').innerHTML = playerName;
}

function hideCon() {
    document.getElementById('blkbg').className = "close";
    document.getElementById('contractContinue').className = "close";
    document.getElementById('main-container').style.backgroundColor = "rgb(4, 71, 4)";
    document.getElementById('left-container-bottom').style.backgroundColor = "rgb(19, 19, 19)";

    changeScene(1); //default scene
}

// window.onbeforeunload = function() {
// return "Your progress will not be saved, is that okay?";
// };

var rad = document.getElementsByName('gender');

function checkGen() {
    let output = false;

    for (var i = 0; i < rad.length; i++) {
        if (!rad[i].checked) {
            document.getElementById('errorC').innerHTML = "Please select a gender";
        } else if (rad[i].checked){
            gender = rad[i].value;
            output = true;
            break;
        }
    }
    return output;
}