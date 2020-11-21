const chalk = require("chalk");
var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question(chalk.blueBright("What is your name? "));
console.log(chalk.blueBright("Hi " + userName + "! Welcome to TBBT quiz!"));

//rules
console.log(chalk.yellowBright("\nHere are the Rules: \n1] There are total 20 questions. They are divided into 3 levels each with slightly increased difficulty at each level. \n2] TYPE 1,2,3 OR 4 AS THE CORRECT ANSWER. \n3] Each question holds five points. \n4] Two points will be deducted for a wrong answer. \n5] You need 25 points to enter level 2 and 40 points to enter level 3. \n6] Highscores will be updated when you score one and send me a screenshot \n6] Good luck! \n"))

console.log(chalk.yellowBright("Let's Start!"))
console.log(chalk.yellowBright("===================Level One==================="))

// highscores
var highScores = [{
  name: "Kaustubh:",
  sCore: " 100"
}, {
  name: "Aditya:",
  sCore: " 93"
}, {
  name: "Tushar:",
  sCore: " 93"
}, {
  name: "Sajani",
  sCore: " 86"
}]

//function
function play(question, answer, options) {
  var yourAnswer = readlineSync.question(chalk.cyanBright(question, options));
  if (yourAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.bgGreen("Yay! You are right! "));
    score = score + 5;
  } else {
    console.log(chalk.bgRed("Oh no! You are wrong! "));
    console.log(chalk.cyan("Correct answer is: ", answer));
    score = score - 2;
  }
  console.log(chalk.yellow("Your score is : ", score));
  console.log("=============");
}

// TBBTquiz
var questionslevel1 = [{
  question: "What is Sheldon Cooper's profession? ",
  answer: "1",
  options: "\n1] Theoretical Physicist \n2] Experimental Physicist \n3] Astrophysicist \nYour Answer: "
}, {
  question: "Which state is Penny originally from? ",
  answer: "2",
  options: "\n1] Texas \n2] Nebraska \n3] North Carolina \n4] California \nYour Answer: "
}, {
  question: "At what age did Sheldon get his PhD? ",
  answer: "3",
  options: "\n1] 11 \n2] 13 \n3] 16 \n4] 17 \nYour Answer: "
}, {
  question: "How many children did Howard have? ",
  answer: "2",
  options: "\n1] One \n2] Two \n3] Three \n4] None \nYour Answer: "
}, {
  question: "What is Sheldon Cooper's middle Name? ",
  answer: "2",
  options: "\n1] No middle name \n2] Lee \n3] Donald \n4] Tim \nYour Answer: "
}, {
  question: "What is the name of Raj's dog? ",
  answer: "4",
  options: "\n1] Ginger \n2] Nutmeg \n3] Cashew \n4] Cinnamon \nYour Answer: "
}, {
  question: "What is Sheldon's sister called? ",
  answer: "1",
  options: "\n1] Missy \n2] Shelly \n3] Alex \n4] Lucy \nYour Answer: "
}, {
  question: "What number is Sheldon's apartment? ",
  answer: "3",
  options: "\n1] 1B \n2] 2A \n3] 4A \n4] 4B \nYour Answer: "
}, {
  question: "What is Sheldon and Leonard's shower curtain decorated with? ",
  answer: "2",
  options: "\n1] Orange fish \n2] Periodic Table \n3] Darth Vader Helmets \n4] It's plain white \nYour Answer: "
}, {
  question: "What color is Penny's sofa ",
  answer: "1",
  options: "\n1]Turquoise \n2]Yellow \n3]Brown \nYour Answer: "
}]

//level2
var questionslevel2 = [{
  question: "What food did the group have on Thursdays? ",
  answer: "3",
  options: "\n1] Thai food \n2] Chinese food \n3] Pizza \n4] Cheesecake Factory burgers \nYour Answer: "
}, {
  question: "What is the name of Sheldon's brother and what was his profession? ",
  answer: "2",
  options: "\n1] Lucas, Painter \n2] George, Owns tire stores \n3] John, Doctor \n4] Kevin, An Engineer \nYour Answer: "
}, {
  question: "Where does Penny work after she gives up acting? ",
  answer: "2",
  options: "\n1] SunGen Pharma \n2] ZanGen Pharma \n3] The Cheescake Factory \n4] HeliGen Pharma \nYour Answer: "
}, {
  question: "What is Sheldon's IQ? ",
  answer: "3",
  options: "\n1] 180 \n2] 185 \n3] 187 \n4] 190  \nYour Answer: "
}, {
  question: "What does Penny gift Sheldon on Christmas? ",
  answer: "2",
  options: "\n1] An original Darth Vader helmet replica \n2] A napkin used by Leonard Nimoy \n3] A real size time machine replica \n4] An Original Green Lantern Figurine \nYour Answer: "
}]


//level3
var questionslevel3 = [{
  question: "What is hung above Howard's bed when he was living with his mom? ",
  answer: "1",
  options: "\n1] Two lightsabres \n2] Two swords \n3] Two Belts with his favorite buckles \n4] Nothing, just a random painting \nYour Answer: "
}, {
  question: "What is the last location in Raj's Scavenger Hunt? ",
  answer: "4",
  options: "\n1] Sheldon's Office \n2] The Laundry room \n3] Leonard's Lab \n4] Sheldons Couch \nYour Answer: "
}, {
  question: "What is Leonard's middle name? ",
  answer: "2",
  options: "\n1] Badger \n2] Leakey \n3] Johnathan \n4] Melvin  \nYour Answer: "
}, {
  question: "How many siblings does Rajesh Koothrapalli have? ",
  answer: "4",
  options: "\n1] one \n2] two \n3] four \n4] five  \nYour Answer: "
}, {
  question: "Which band sang the TBBT intro theme song? ",
  answer: "1",
  options: "\n1] The Barenaked ladies \n2] The Schoolkidgang \n3] Geeks who love to sing \n4] Phantomsingers \nYour Answer: "
}]

//questions loop
for (var i = 0; i < questionslevel1.length; i++) {
  var currentQuestion = questionslevel1[i];
  play(currentQuestion.question, currentQuestion.answer, currentQuestion.options)
}

//condition to enter second level
if (score >= 25) {
  console.log(chalk.yellow("Congratulations! You have entered level 2 of the quiz. The difficulty has been increased slightly. Good luck!"))
  console.log(chalk.yellowBright("===================Level Two==================="))
  for (var j = 0; j < questionslevel2.length; j++) {
    var currentQuestion = questionslevel2[j];
    play(currentQuestion.question, currentQuestion.answer, currentQuestion.options)
  }
} else {
  console.log(chalk.red("Unfortunately, you didn't qualify for the second round. You need 25 points to enter the second level. Better luck next Time!"))
}

//condition to enter last level
if (score >= 40) {
  console.log(chalk.yellow("Good job! You have entered Level 3 of the quiz! This is the hardest difficulty. Good luck!"))
  console.log(chalk.yellowBright("===================Level Three==================="))
  for (var k = 0; k < questionslevel3.length; k++) {
    var currentQuestion = questionslevel3[k];
    play(currentQuestion.question, currentQuestion.answer, currentQuestion.options)
  }
} else {
  console.log(chalk.red("Unfortunately, you didn't qualify for the last round. You need 40 points to enter the last level. Better luck next Time!"))
}
console.log(chalk.yellow("Your final score: ", score))

//highscore loop
console.log(chalk.blue("The highscores are: "))
for (var l = 0; l < highScores.length; l++) {
  console.log(chalk.blue(highScores[l].name))
  console.log(chalk.blue(highScores[l].sCore))
}

//prompt in case of highscore
if (score >= highScores[2].sCore) {
  console.log(chalk.green("Congratulations " + userName + "! You have scored a highscore! "))
  console.log(chalk.green("Please send me your score so I can update the highscore list!"))
}
console.log(chalk.blueBright("Thanks " + userName + " for taking the quiz! Have a nice day!"))