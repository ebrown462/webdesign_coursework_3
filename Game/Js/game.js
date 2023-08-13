//Api References
const diceroll = "http://andymcdowell.hosting.hal.davecutting.uk/1030_APIs/diceroll.php";

//Scene References
const input = document.getElementById('input');
const txt = document.getElementById('SceneTxt');
const textbox = document.getElementById('text-container');
const imgs = document.getElementById("SceneBg");
const choices = document.getElementById("Choices");
const healthbox = document.getElementById("health-tracker");
const karmabox = document.getElementById("karma-tracker");

//Scene Variables
const specialScenes = [5, 100];
let timerRef;
let prevChoicetxt = "The Beginning";
let timeleft = 300;
let curScene = 1;
var packageNum = 0;

//Text Generation
var txtPos = 0;
var txtDelay = 1;
var loop;
var pause = false;

//Variables
let playerName = "John";
let packageName = ["Nuclear Bomb", "Subway Sandwhich", "Launch Codes", "Machine Parts", "Encrypted Message,", "Vaccine"];
let playerHealth = 100;
let playerKarma = 0;
var botInterval;
var winState = false;

//Statistic Tracking 
const numOfScenes = document.getElementById("numOfScenes");
const avgSceneTimeRef = document.getElementById("avgSceneTime");
const daySurvived = document.getElementById("daySurvived");
const karma = document.getElementById("karma");
const health = document.getElementById("health");
const timeRemaing = document.getElementById("timeRemaing");
const endMsg = document.getElementById("ending-txt");

let sceneCount = 0;
let avgSceneTime = 0;
let dayCounter = 0;

//Start functions
getApi(diceroll);
timer(); //Starts game timer




//Api call to diceroll to pick random player package
async function getApi(src) {
  let myObject = await fetch(src);
  let myText = await myObject.text();
  apiOutput(myText);
  return (myText);
}
//Api response after promise
function apiOutput(x) {
   packageNum = x - 1;
}

//Calls Character damage api with inputted values
async function genDamage(minDmg, maxDmg) {
  const api = `http://andymcdowell.hosting.hal.davecutting.uk/1030_APIs/
characterDamage.php?minDmg=`+ minDmg + "&maxDmg=" + maxDmg + "&critChance=" + 1 + "&critDmg=" + 100;

  fetch(api)
    .then(res => res.text())
    .then(data => outputDamage(data));
}
//Once promise is resolved recieves texts and converts to int and subtracts player health
function outputDamage(text) {
  var str = text.split(",");
  var result = parseInt(str[1].substring(17, 25));
  playerHealth = playerHealth - result;
  console.log("Health:" + playerHealth + " Damage:" + result);
  healthbox.innerHTML = playerHealth + "%";
}

//Calls Character damage api with inputted values to add health
async function genHealth(minHealth, minHealth) {
  const api = `http://andymcdowell.hosting.hal.davecutting.uk/1030_APIs/
characterDamage.php?minDmg=`+ minHealth + "&maxDmg=" + minHealth + "&critChance=" + 1 + "&critDmg=" + 100;

  fetch(api)
    .then(res => res.text())
    .then(data => outputHealth(data));
}
//Once promise is resolved recieves texts and converts to int and subtracts player health
function outputHealth(text) {
  var str = text.split(",");
  var result = parseInt(str[1].substring(17, 25));
  playerHealth = playerHealth + result;
  healthbox.innerHTML = playerHealth + "%";
}

//Calls Character damage api with inputted values (used for karma)
async function genKarma(minKmr, maxKmr,) {
  const api = `http://andymcdowell.hosting.hal.davecutting.uk/1030_APIs/
characterDamage.php?minDmg=`+ minKmr + "&maxDmg=" + maxKmr + "&critChance=" + 1 + "&critDmg=" + 100;

  fetch(api)
    .then(res => res.text())
    .then(data => outputKarma(data));
}
//Once promise is resolved recieves texts and converts to int adds player karma
function outputKarma(text) {
  var str = text.split(",");
  var result = parseInt(str[1].substring(17, 25));
  playerKarma = playerKarma + result;
  console.log("Karma:" + playerKarma + " Increase:" + result);
  karmabox.innerHTML = playerKarma + "%";
}


//Adds event listener for keydown if = Enter key => check if int => sceneManager func
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    inputHandler(input.value);
    input.value = "";
    clearInterval(botInterval);
    botInterval = setInterval(bottom, 1);
  }
})

//Checks if input is int or string and outputs selected choice position 
function inputHandler(input) {
  var choices = scenario[curScene].options;
  if (!pause) {
    if (parseInt(input)) {
      sceneManager(input);
    }
    else {
      var int = 0; //Used to track choice position
      choices.forEach(choice => {
        int++;
        if (input.toLowerCase() === choice[0].toLowerCase()) {
          sceneManager(int);
          int = 0;
        }
      });
    }
  }
}

//Takes selected choice and gets choice info [text, scene target] and passes it on
function sceneManager(x) {
  var choices = scenario[curScene].options;
  choices.forEach(choice => { //For each choice for current scene
    console.log('Choice: ' + (choices.indexOf(choice) + 1) + ' => Scene ' + choice[1]); // for debugging

    if (parseInt(x) === (choices.indexOf(choice) + 1)) { //if input value is equal to scence choice based on index select choice
      prevChoicetxt = choice[0]; //Sets previous text to selected choice
      changeScene(choice[1]); //changes scence to selected
    }
  })
}
//Creates new elements for text and updates option text depending on scene
function changeElements(sceneTxt, imgsSrc, choicesList) {
  txtPos = 0; //Resets position

  let prevTxt = document.createElement("p");
  let newTxt = document.createElement("p");

  prevTxt.innerHTML = "<br><br>" + prevChoicetxt; //Sets the PrevChoiceText to the prev selected choice

  textbox.appendChild(prevTxt);
  textbox.appendChild(newTxt);

  loop = setInterval(genText.bind(null, sceneTxt, newTxt), txtDelay); //Sets delay interveral and calls genText Function to load in scene Text
  imgs.src = imgsSrc;
  choices.innerHTML = "";


  for (let i = 0; i < choicesList.length; i++) { // Generates a choice option for total amount of choices
    choices.innerHTML += "<p>[" + (i + 1) + "]&nbsp" + choicesList[i][0] + "<p>"
  }

  prevTxt.id = "prevChoiceTxt"; //adds a id to prevtxt
  prevTxt.className = "prevChoiceClass"; //adds class to prevtxt
}

//Runs on delay creates a text typing effect
function genText(sceneTxt, newTxt) {
  var trueText = "";

  trueText = sceneTxt;
  trueText = trueText.replace("NAME", playerName).replace("PACKAGE", packageName[packageNum]); //Replaces specific scene text with current counterpart


  //Function runs on delay so each char is printed at a set rate to create effect
  if (txtPos < trueText.length) {
    newTxt.innerHTML += trueText.charAt(txtPos);
    txtPos++;
    pause = true;
  } //Clears loop once finished
  if (txtPos > trueText.length - 1) {
    clearInterval(loop);
    pause = false;
  }
}

//Hides main console and displays selected mini game
function loadminiGame(x) {
  document.getElementById("scene-context").style.display = "none";
  document.getElementById("input").style.display = "none";
  document.getElementById(x).style.display = "block";
}

//General change scene function checks and updates scene content
function changeScene(x) {
  //Runs function to determine if scene needs time subtracted
  curScene = x; //Global Scene Tracking
  sceneTimeSubtract();
  gameVarSys(); 
  playerName = playerName1;
  //Statistic Trackers
  sceneCount++;
  if (curScene === 1) { dayCounter = 1; }
  if (curScene === 18) { dayCounter = 2; }
  if (curScene === 47) { dayCounter = 3; }
  //End of trackers
  var s = scenario[x]; //reference to story.js scenario variable

  //Checks looking for specific story variables
  if (s.gameover != null) {
    showSum();
  }
  if (s.addPlayerItem != null) {
    addPlayerItem(s.addPlayerItem[0], s.addPlayerItem[1]);
  }
  if (s.removePlayerItem != null) {
    removePlayerItem(s.removePlayerItem);
  }
  if (s.damage != null) {
    genDamage(s.damage[0], s.damage[1]);
  }
  if (s.health != null) {
    genHealth(s.health[0], s.health[1]);
  }
  if (s.karma != null) {
    genKarma(s.karma[0], s.karma[1]);
  }
  if (s.minigame != null) {
    loadminiGame(s.minigame);
  } else {
    changeElements(s.text, s.image, s.options);
  }
}

//Overall game timer ends game after 5 minutes
function timer() { //Need to change execution order as it is delayed but works
  var txt = document.getElementById("timer")
  clearInterval(timerRef); //Clears loop so it dosent overlap
  timerRef = setInterval(timer, 1000); //Loops timing function every 1000ms
  if (timeleft < 0) { timeleft = 0; changeScene(1000);} else { txt.innerHTML = timeleft; }
  if (timeleft <= timeleft / 4) { txt.style.color = "red"; }

  timeleft -= 1;
}

//Creates Item and adds it to correct div
function addPlayerItem(itemname, imgsrc) {
  var titleName = itemname;
  var src = imgsrc;

  var box = document.getElementById("tools");

  var listitem = document.createElement("li");

  var div = document.createElement("div");
  div.id = "ItemBox" + itemname;

  var title = document.createElement("h4");
  title.innerHTML = titleName;

  var img = document.createElement("img");
  img.src = "imgs/" + src;
  img.id = "imgBox";

  box.appendChild(listitem);
  listitem.appendChild(div);
  div.appendChild(title);
  div.appendChild(img);

}
//Removes selected item
function removePlayerItem(name) {
  document.getElementById("ItemBox" + name).remove();
}

//Waits for page interaction before autoplaying audio to comply with browser 
document.body.addEventListener("mousedown", function (event) {
  var audio = document.querySelector("audio");
  audio.volume = .1;
  audio.play();
})

//Reloads window 
function resetGame() { //Resets all game Logic
  location.reload();
}

//Used to stop page scrolling to bottom when scrolling up to read text history
document.getElementById('text-container').addEventListener("wheel", function (event) {
  clearInterval(botInterval);
})

//Constantly scrolls to bottom of gameplay window
function bottom() {
  var txtBottom = document.getElementById('text-container');
  txtBottom.scrollTop = txtBottom.scrollHeight - txtBottom.clientHeight;
}

//if selected scene reduce time by amount
function sceneTimeSubtract() {
  switch (parseInt(curScene)) {
    case 2: timeleft = timeleft - 20;
  }
}

//If health or karma exceeds limits game over
function gameVarSys() {
  if (playerHealth === 0) {
    changeScene(1000);
  }
  if (playerKarma === 100) {
    changeScene(1000);
  }
}

//Generates statistics at end of game
function statistics() {
  clearInterval(timerRef);
  document.getElementById("timer").style.display = "none";

  avgSceneTime = ((300 - timeleft) / sceneCount).toFixed(2);

  numOfScenes.innerHTML = sceneCount;
  avgSceneTimeRef.innerHTML = avgSceneTime;
  daySurvived.innerHTML = dayCounter;
  karma.innerHTML = playerKarma;
  health.innerHTML = playerHealth;
  timeRemaing.innerHTML = timeleft;

  //Changes ending message depending on scene
  endMsg.innerHTML = "You failed to deliver the " + packageName[packageNum];
  if (curScene === "1001") {endMsg.innerHTML = "You delivered the "+packageName[packageNum]+"!"; }
}