var city = new Array(
  "MONTGOMERY",
  "JUNEAU",
  "PHOENIX",
  "LITTLE ROCK",
  "SACRAMENTO",
  "DENVER",
  "HARTFORD",
  "DOVER",
  "TALLAHASSEE",
  "ATLANTA",
  "HONOLULU",
  "BOISE",
  "SPRINGFIELD",
  "INDIANAPOLIS",
  "DES MOINES",
  "TOPEKA",
  "FRANKFORT",
  "BATON ROUGE",
  "AUGUSTA",
  "ANNAPOLIS",
  "BOSTON",
  "LANSING",
  "SAINT PAUL",
  "JACKSON",
  "JEFFERSON CITY",
  "HELENA",
  "LINCOLN",
  "CARSON CITY",
  "CONCORD",
  "TRENTON",
  "SANTA FE",
  "ALBANY",
  "RALEIGH",
  "BISMARK",
  "COLUMBUS",
  "OKLAHOMA CITY",
  "SALEM",
  "HARRISBURG",
  "PROVIDENCE",
  "COLUMBIA",
  "PIERRE",
  "NASHVILLE",
  "AUSTIN",
  "SALT LAKE CITY",
  "MONTPELIER",
  "RICHMOND",
  "OLYMPIA",
  "CHARLESTON",
  "MADISON",
  "CHEYENNE"
);

var state = new Array(
  "ALABAMA",
  "ALASKA",
  "ARIZONA",
  "ARKANSAS",
  "CALIFORNIA",
  "COLORADO",
  "CONNECTICUT",
  "DELAWARE",
  "FLORIDA",
  "GEORGIA",
  "HAWAII",
  "IDAHO",
  "ILLINOIS",
  "INDIANA",
  "IOWA",
  "KANSAS",
  "KENTUCKY",
  "LOUISIANA",
  "MAINE",
  "MARYLAND",
  "MASSACHUSETTS",
  "MICHIGAN",
  "MINNESOTA",
  "MISSISSIPPI",
  "MISSOURI",
  "MONTANA",
  "NEBRASKA",
  "NEVADA",
  "NEW HAMPSHIRE",
  "NEW JERSEY",
  "NEW MEXICO",
  "NEW YORK",
  "NORTH CAROLINA",
  "NORTH DAKOTA",
  "OHIO",
  "OKLAHOMA",
  "OREGON",
  "PENNSYLVANIA",
  "RHODE ISLAND",
  "SOUTH CAROLINA",
  "SOUTH DAKOTA",
  "TENNESSEE",
  "TEXAS",
  "UTAH",
  "VERMONT",
  "VIRGINIA",
  "WASHINGTON",
  "WEST VIRGINIA",
  "WISCONSIN",
  "WYOMING"
);

var stateImage = new Array();
stateImage[0] = "images/alabama.png";
stateImage[1] = "images/alaska.png";
stateImage[2] = "images/arizona.png";
stateImage[3] = "images/arkansas.png";
stateImage[4] = "images/california.png";
stateImage[5] = "images/colorado.png";
stateImage[6] = "images/connecticut.png";
stateImage[7] = "images/delaware.png";
stateImage[8] = "images/florida.png";
stateImage[9] = "images/georgia.png";
stateImage[10] = "images/hawaii.png";
stateImage[11] = "images/idaho.png";
stateImage[12] = "images/illinois.png";
stateImage[13] = "images/indiana.png";
stateImage[14] = "images/iowa.png";
stateImage[15] = "images/kansas.png";
stateImage[16] = "images/kentucky.png";
stateImage[17] = "images/louisiana.png";
stateImage[18] = "images/maine.png";
stateImage[19] = "images/maryland.png";
stateImage[20] = "images/massachusetts.png";
stateImage[21] = "images/michigan.png";
stateImage[22] = "images/minnesota.png";
stateImage[23] = "images/mississippi.png";
stateImage[24] = "images/missouri.png";
stateImage[25] = "images/montana.png";
stateImage[26] = "images/nebraska.png";
stateImage[27] = "images/nevada.png";
stateImage[28] = "images/new_hampshire.png";
stateImage[29] = "images/new_jersey.png";
stateImage[30] = "images/new_mexico.png";
stateImage[31] = "images/new_york.png";
stateImage[32] = "images/north_carolina.png";
stateImage[33] = "images/north_dakota.png";
stateImage[34] = "images/ohio.png";
stateImage[35] = "images/oklahoma.png";
stateImage[36] = "images/oregon.png";
stateImage[37] = "images/pennsylvania.png";
stateImage[38] = "images/rhode_island.png";
stateImage[39] = "images/south_carolina.png";
stateImage[40] = "images/south_dakota.png";
stateImage[41] = "images/tennessee.png";
stateImage[42] = "images/texas.png";
stateImage[43] = "images/utah.png";
stateImage[44] = "images/vermont.png";
stateImage[45] = "images/virginia.png";
stateImage[46] = "images/washington.png";
stateImage[47] = "images/west_virginia.png";
stateImage[48] = "images/wisconsin.png";
stateImage[49] = "images/wyoming.png";

var num = Math.floor(Math.random() * city.length);

var cityName;
var stateName;
var stateMap;
var tries = 0;
var score = 0;
var topScore = 0;

function guessIt() {
  var guess = document.form1.guess1.value;
  tries++;
  document.form1.tries123.value = "Tries: " + tries;

  switch (tries) {
    case 1:
      document.form1.hint.value =
        "FIRST Hint: The state capital starts with ' " +
        cityName.charAt(0) +
        " '";
      document.form1.stateClue.value = "";
      break;
    case 2:
      document.form1.hint.value =
        "SECOND Hint: The state capital ends with ' " +
        cityName.charAt(cityName.length - 1).toLowerCase() +
        " '";
      break;
    case 3:
      document.form1.hint.value =
        "THIRD Hint: The second letter in name is ' " +
        cityName.charAt(1).toLowerCase() +
        " '";
      break;
    default:
      document.form1.hint.value =
        "LAST Hint: The state capital has " + cityName.length + " characters";
      break;
  }

  if (guess.toUpperCase() == cityName) {
    switch (tries) {
      case 1:
        score += 10;
        break;
      case 2:
        score += 8;
        break;
      case 3:
        score += 6;
        break;
      case 4:
        score += 4;
        break;
      default:
        score += 0;
    }
    alert(
      "You are CORRECT!\n\nThe state capital of " +
        stateName.toTitleCase() +
        " is " +
        cityName +
        ".\n\nPlease hit OK for your next question"
    );
    document.form1.current1.value = "Current Score: " + score;
    if (score > topScore) {
      topScore = score;
      document.form1.top1.value = "High Score: " + topScore;
    }
    resetGame();
    localStorage.setItem("highScore", topScore);
  } else {
    if (tries == 5) {
      if (
        window.confirm(
          "Sorry! You have run out of guesses.\n\nThe state capital of " +
            stateName.toTitleCase() +
            " is " +
            cityName +
            ".\n\nDo you want to play again?"
        )
      ) {
        newGame();
      }
    }
  }
}

function resetGame() {
  num = Math.floor(Math.random() * city.length);
  cityName = city[num];
  stateName = state[num];
  stateMap = stateImage[num];
  tries = 0;
  document.showState.src = stateMap;
  document.form1.hint.value =
    "The state to guess is: " + stateName.toTitleCase() + ".";
  document.form1.stateClue.value =
    "Enter the state capital below and click Guess";
  document.form1.guess1.value = "";
  unDisable();
}

function catchKeyCode() {
  if (event.keyCode == 13) {
    guessIt();
  }
}

function guessStatus() {
  document.form1.tries123.value = "Tries: " + tries;
  if (typeof Storage !== "undefined") {
    var temp1 = localStorage.getItem("highScore");
    var temp2 = parseInt(temp1);

    if (temp2 > topScore) {
      topScore = temp2;
      document.form1.top1.value = "High Score: " + topScore;
    }
  } else {
    alert(
      "Sorry, this browser version does not support HTML5 Local Storage, and your High Score will not be saved."
    );
  }
}

function clearBox() {
  document.form1.guess1.value = "";
}

function newGame() {
  var score = 0;

  document.form1.current1.value = "Current Score: " + score;

  resetGame();
}

function resetEverything() {
  if (
    window.confirm(
      "ARE YOU SURE YOU WANT TO RESET YOUR GAME?\nBIG WARNING: This will reset the game to its default settings and clear your HIGH SCORE.\nClick 'Cancel' if you do NOT want to lose your High Score, otherwise click 'OK'."
    )
  ) {
    score = 0;
    topScore = 0;
    document.form1.current1.value = "Current Score: " + score;
    document.form1.top1.value = "Top Score: " + topScore;

    localStorage.removeItem("highScore");

    document.showState.src = "images/a_guessing_game.png";
    document.form1.stateClue.value = "Press 'New' to play again.";
    document.form1.hint.value = "The game has been reset to default settings.";
    window.location.reload();
    disable();
  }
}

String.prototype.toTitleCase = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

function unDisable() {
  document.getElementById("guessBtn").disabled = false;
}

function disable() {
  document.getElementById("guessBtn").disabled = true;
}
