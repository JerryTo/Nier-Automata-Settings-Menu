// Get references to all buttons
var optionLanguage = document.getElementById("optionLanguage");
var optionGame     = document.getElementById("optionGame");
var optionCamera   = document.getElementById("optionCamera");
var optionScreen   = document.getElementById("optionScreen");
var optionSound    = document.getElementById("optionSound");
var optionOther    = document.getElementById("optionOther");

var languageVoices = document.getElementById("languageVoices");
var languageText   = document.getElementById("languageText");

var cameraHorizontalOrientation   = document.getElementById("cameraHorizontalOrientation");
var cameraVerticalOrientation     = document.getElementById("cameraVerticalOrientation");
var cameraHorizontalRotationSpeed = document.getElementById("cameraHorizontalRotationSpeed");
var cameraDistanceStandard        = document.getElementById("cameraDistanceStandard");
var cameraDistanceCombat          = document.getElementById("cameraDistanceConbat");
var cameraZoomSpeed               = document.getElementById("cameraZoomSpeed");
var cameraVerticalAutoAdjust      = document.getElementById("cameraVerticalAutoAdjust");
var cameraHorizontalAutoAdjust    = document.getElementById("cameraHorizontalAutoAdjust");
var cameraFreeEnemyTracking       = document.getElementById("cameraFreeEnemyTracking");
var cameraPursuitSpeed            = document.getElementById("cameraPursuitSpeed");
var cameraLockedEnemyTracking     = document.getElementById("cameraLockedEnemyTracking");
var cameraHorizontalMapControls   = document.getElementById("cameraHorizontalMapControls");
var cameraVerticalMapControls     = document.getElementById("cameraVerticalMapControls");
var cameraMapControls             = document.getElementById("cameraMapControls");
var cameraRestoreDefaults         = document.getElementById("cameraRestoreDefaults");

var gameDifficulty   = document.getElementById("gameDifficulty");
var gamePartnerStyle = document.getElementById("gamePartnerStyle");
var gameMapRotation  = document.getElementById("gameMapRotation");
var gameVibration    = document.getElementById("gameVibration");

var screenBrightness = document.getElementById("screenBrightness");

var soundMusicVolume  = document.getElementById("soundMusicVolume");
var soundEffectVolume = document.getElementById("soundEffectVolume");
var soundVoiceVolume  = document.getElementById("soundVoiceVolume");
var soundAudioOutput  = document.getElementById("soundAudioOutput");

var otherRestoreDefaults = document.getElementById("otherRestoreDefaults");

var voices = document.getElementById("voices");
var text = document.getElementById("text");
var difficulty = document.getElementById("difficulty");

/*
    Left column
 */
var leftColumnListItems = document.querySelectorAll("#leftColumn li");
for (var i = 0; i < leftColumnListItems.length; i++) {
    leftColumnListItems[i].addEventListener("click", handleSelectedOption, false);
    leftColumnListItems[i].addEventListener("mouseenter", function () {
        createImgArrow(this);
    }, false);
}

function handleSelectedOption() {
    // Hide everything in the middle column first
    var middleSection = document.querySelectorAll("#middle div");
    for (var i = 0; i < middleSection.length; i++) {
        middleSection[i].classList.add("hidden");
    }

    // Remove list item hover arrow
    var arrowSpan = document.getElementById("arrow_middle");
    if (arrowSpan) {
        removeElement(arrowSpan.id);
    }

    // Reset all active list items
    for (var i = 0; i < leftColumnListItems.length; i++) {
        leftColumnListItems[i].classList.remove("activeListItem");
    }

    // Show selected option
    var settingToShow = "settings" + this.innerText;
    document.getElementById(settingToShow).classList.remove("hidden");

    // Make clicked element active and fade in
    this.classList.add("activeListItem");
    fadeinElement(document.getElementById(settingToShow));
}

/*
    Middle Options
*/
var middleItem;
languageVoices.addEventListener("click", function() {handleSelectedSubOption("voices", this)}, false);
languageText.addEventListener("click", function() {handleSelectedSubOption("text", this)}, false);

gameDifficulty.addEventListener("click", function() {handleSelectedSubOption("difficulty", this)}, false);
gamePartnerStyle.addEventListener("click", function() {handleSelectedSubOption("partner", this)}, false);
gameMapRotation.addEventListener("click", function() {handleSelectedSubOption("settingsOnOff", this)}, false);
gameVibration.addEventListener("click", function() {handleSelectedSubOption("settingsOnOff", this)}, false);

cameraHorizontalOrientation.addEventListener("click", function() {handleSelectedSubOption("settingsNormalInverted", this)}, false);
cameraVerticalOrientation.addEventListener("click", function() {handleSelectedSubOption("settingsNormalInverted", this)}, false);
cameraHorizontalMapControls.addEventListener("click", function() {handleSelectedSubOption("settingsNormalInverted", this)}, false);
cameraVerticalMapControls.addEventListener("click", function() {handleSelectedSubOption("settingsNormalInverted", this)}, false);
cameraMapControls.addEventListener("click", function() {handleSelectedSubOption("settingsNormalInverted", this)}, false);

soundAudioOutput.addEventListener("click", function() {handleSelectedSubOption("audio", this)}, false);


var sliders = document.getElementsByClassName("slider");
for (var i = 0; i < sliders.length; i++) {
    sliders[i].addEventListener("click", function () {
        expandSlider(this);
    }, false);
}

// Add hover arrows
var middleColumnListItems = document.querySelectorAll("#middle li");
for (var i = 0; i < middleColumnListItems.length; i++) {
    middleColumnListItems[i].addEventListener("mouseenter", function () {
        createImgArrow(this);
    }, false);
}

function handleSelectedSubOption(idName, middleElement) {
    // Hide everything first
    document.getElementById("right").classList.add("hidden");

    // Show selected option
    document.getElementById("right").classList.remove("hidden");
    document.getElementById(idName).classList.remove("hidden");

    fadeinElement(document.getElementById("right"));

    dimBackground();
    fadeinElement(document.getElementById("dimDiv"));

    // Remember the list item that was clicked
    middleItem = middleElement;

    createImgArrow(middleElement);
}

/*
    Right Options
 */
var rightListItems = document.querySelectorAll("#right li");
for (var i = 0; i < rightListItems.length; i++) {
    rightListItems[i].addEventListener("click", function () {handleSelectedRightOption(middleItem, this)}, false);
    rightListItems[i].addEventListener("mouseenter", function () {
        createImgArrow(this);
    }, false);
}

/* Perform operations when right column item is clicked */
function handleSelectedRightOption(middleItem, rightItem) {
    hideRightColumn();
    middleItem.getElementsByClassName("floatRight")[0].innerText = rightItem.innerText;
    removeElement("dimDiv");
}

// Hide all right column elements
function hideRightColumn() {
    document.getElementById("right").classList.add("hidden");
    var rightItems = document.getElementById("right").children;
    for (var i = 0; i < rightItems.length; i++) {
        rightItems[i].classList.add("hidden");
    }

    // Remove list item hover arrow
    var arrowSpan = document.getElementById("arrow_right");
    if (arrowSpan) {
        removeElement(arrowSpan.id);
    }
}

/*
    Footer text
 */

var listItems = document.getElementsByTagName("li");
for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("mouseenter", replaceWithNewText, false);
}

function replaceWithNewText() {
    var newFooterString = "";
    switch (this.id) {
        case "optionLanguage":
        case "optionGame":
        case "optionCamera":
        case "optionScreen":
        case "optionSound":
        case "optionOther":
            newFooterString =  "Adjust " + this.innerText + " settings.";
            break;
        case "cameraHorizontalOrientation":
        case "cameraVerticalOrientation":
            newFooterString = "Change the camera controls.";
            break;
        case "cameraHorizontalRotationSpeed":
            newFooterString = "Adjust horizontal (left/right) camera rotation speed.";
            break;
        case "cameraVerticaalRotationSpeed":
            newFooterString = "Adjust vertical (up/down) camera rotation speed.";
            break;
        case "cameraDistanceStandard":
            newFooterString = "Adjust how far the camera is typically positioned from the player.";
            break;
        case "cameraDistanceCombat":
            newFooterString = "Adjust how far the camera pans out when enemies are nearby.";
            break;
        case "cameraZoomSpeed":
            newFooterString = "Adjust how fast the camera moves in and out.";
            break;
        case "cameraVerticalAutoAdjust":
            newFooterString = "Adjust how fast the camera moves up/down in response to player actions.";
            break;
        case "cameraHorizontalAutoAdjust":
            newFooterString = "Adjust how fast the camera moves left/right in response to player actions.";
            break;
        case "cameraFreeEnemyTracking":
            newFooterString = "Adjust how fast the camera tracks enemies when not locked on.";
            break;
        case "cameraPursuitSpeed":
            newFooterString = "Adjust how fast the camera follows in pursuit of the player.";
            break;
        case "cameraLockedEnemyTracking":
            newFooterString = "Adjust how fast the camera tracks enemies when locked on.";
            break;
        case "cameraHorizontalMapControls":
            newFooterString = "Toggle right stick horizontal (left/right) controls when viewing the map.";
            break;
        case "cameraVerticalMapControls":
            newFooterString = "Toggle right stick vertical (up/down) controls when viewing the map.";
            break;
        case "cameraMapControls":
            newFooterString = "Toggle left stick controls when viewing the map.";
            break;
        case "cameraRestoreDefaults":
            newFooterString = "Restore all camera settings to their default values.";
            break;
        case "languageVoices":
            newFooterString = "Select the language for spoken voices.";
            break;
        case "languageText":
            newFooterString = "Select the language for menus, subtitles, etc.";
            break;
        case "gameDifficulty":
            newFooterString = "Adjust the difficulty level.";
            break;
        case "gameDifficultyEasy":
            newFooterString = "Enemies are weak, and you can equip auto-chips.";
            break;
        case "gameDifficultyNormal":
            newFooterString = "The standard, most enjoyable difficulty. Probably.";
            break;
        case "gameDifficultyHard":
            newFooterString = "Battles are tougher and you can't use lock-on.";
            break;
        case "gameDifficultyVeryHard":
            newFooterString = "You can't use lock-on, and you die in one hit.";
            break;
        case "gamePartnerStyle":
            newFooterString = "Select a combat style for your allies.";
            break;
        case "gameMapRotation":
            newFooterString = "Toggle whether the mini-map rotates or remains static.";
            break;
        case "gameVibration":
            newFooterString = "Toggle the vibration function of the DUALSHOCK®4 wireless controller.";
            break;
        case "screenBrightness":
            newFooterString = "Adjust the brightness level of the display.";
            break;
        case "soundMusicVolume":
            newFooterString = "Adjust the volume of background music.";
            break;
        case "soundEffectVolume":
            newFooterString = "Adjust the volume of sound effects.";
            break;
        case "soundVoiceVolume":
            newFooterString = "Adjust the volume of in-game voices.";
            break;
        case "soundAudioOutput":
            newFooterString = "Select your preferred audio output method.";
            break;
        case "otherRestoreDefaults":
            newFooterString = "Restore all settings to their default values.";
            break;
        default:
            break;
    }

    // Update Footer Text if it's different
    var footerText = document.getElementById("footerHelpText");
    if (newFooterString && newFooterString !== footerText.innerText) {
        fadeinElement(footerText, newFooterString);
    }
}


/*
    Slider
 */
for (var i = 0; i < sliders.length; i++) {
    var listItemRightSpan = sliders[i].getElementsByClassName("floatRight")[0];
    listItemRightSpan.innerHTML = buildSVGLineElement(listItemRightSpan.id, 10);
}

var volSlider = document.getElementsByClassName("volSlider");
for (var k = 1; k < volSlider.length; k++) {
    volSlider[k].addEventListener("mouseover", handleSliderHover, false);
}

function buildSVGLineElement(parentID, amount) {
    var str = "";
    for (var i = 1; i <= amount; i++) {
        str += '<svg width="5" height="25" xmlns="http://www.w3.org/2000/svg" id="' + parentID + '_' + i + '" class="volSlider">\n'
             + '<line x1="0" y1="10" x2="0" y2="15" style="stroke: #c5bca9; stroke-width:10"></line>\n'
             + '</svg>\n';
    }
    return str;
}

function handleSliderHover() {

    // Only run when expanded
    if (!this.parentNode.parentNode.classList.contains("expandedSlider")) {
        return false;
    }

    var hoverCount = Number(this.id.split("_")[1]);
    var parentNodeID = this.parentNode.id;

    var currentElement;

    // Reset size
    for (var i = 1; i <= 10; i++) {
        currentElement = document.getElementById(parentNodeID + "_" + i).children[0];
        currentElement.setAttribute("y1", "10");
        currentElement.setAttribute("y2", "15");
    }

    for (var j = 1; j <= hoverCount; j++) {
        currentElement = document.getElementById(parentNodeID + "_" + j).children[0];
        currentElement.setAttribute("y1", "0");
        currentElement.setAttribute("y2", "25");
    }
}

function expandSlider(clickedItem) {
    console.log(clickedItem);

    var dimDiv = document.getElementById("dimDiv");
    if (dimDiv) {
        return false;
    }

    dimBackground();

    clickedItem.classList.add("expandedSlider");
    clickedItem.classList.add("activeListItem");
    clickedItem.style.zIndex = 1050;
    clickedItem.style.position = "relative";

    var dimDiv = document.getElementById("dimDiv");
    dimDiv.style.opacity = 0;
    dimDiv.addEventListener("click", function () {
        clickedItem.classList.remove("expandedSlider");
        clickedItem.classList.remove("activeListItem");
        clickedItem.style = "";
    });
}

/*
    Helper Functions
*/
function fadeinElement(domElement, str) {
    domElement.classList.add('hide');
    if (str) {
        setTimeout(function() {
            domElement.textContent = str;
        }, 200);
    }
    setTimeout(function() {
        domElement.classList.remove('hide')
    }, 200);
}

function dimBackground() {
    var dimDiv = document.createElement("div");
    dimDiv.className = "dim";
    dimDiv.id = "dimDiv";
    dimDiv.addEventListener("click", function () {
        removeElement("dimDiv");
        hideRightColumn();
    });
    document.body.appendChild(dimDiv);
}

// Create and insert List Item Arrow
function createImgArrow(clickedListItem) {

    // Don't update if hovering over the same element
    var arrows = document.getElementsByClassName("arrowSpan");
    for (var i = 0; i < arrows.length; i++) {
        if (clickedListItem.id === arrows[i].parentNode.id) {
            return false;
        }
    }

    // Get column type
    var column = clickedListItem.parentNode.parentNode.parentNode.id || clickedListItem.parentNode.parentNode.id;
    var arrowSpanID = "arrow_" + column;

    // Setup <img>
    var img = document.createElement("img");
    img.src = "./img/Arrow.png";
    img.className = "arrow hide";

    // Remove existing arrow
    removeElement(arrowSpanID);

    // Setup <span><img></span>
    var span = document.createElement("span");
    span.classList = column === "right" ? "arrowSpan arrowSpanPointLeft" : "arrowSpan arrowSpanPointRight";
    span.id = arrowSpanID;
    span.appendChild(img);
    clickedListItem.insertBefore(span, clickedListItem.firstChild);

    // Add fade in effect
    setTimeout(function() {
        img.classList.remove('hide')
    }, 50);
}

// Remove element from page
function removeElement(stringID) {
    var node = document.getElementById(stringID);
    if (node && node.parentNode) {
        node.parentNode.removeChild(node);
    }
}
