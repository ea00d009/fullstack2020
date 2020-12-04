

var answer1 = "mary"

var answer2 = "silence"

var answer3 = "darkness"

var answer4 = "envelope"

function askRiddle() {



confirm("Click OK if you're ready to play GUESS!!");
confirm("You will be asked a series of 4 Riddles... Answers must be in all lowercase, and if you GUESS wrong, you start over. \nGood luck!")

  var riddle1 = prompt("Riddle #1: Mary's mom has four children. Their names are North, South, East... what is the fourth childs name??? \n Answer = 4 characters");

    if(riddle1 === answer1) {
      document.getElementById("button").innerHTML = riddle1;
      alert("CORRECT!! You're good! Keep on keepin on. \n Click OK for the next one!");

        var riddle2 = prompt("Riddle #2: What is it that you will break, every time you name it??? \n Answer = 7 characters");

          if(riddle2 === answer2) {
            document.getElementById("button").innerHTML = riddle2;
            alert("2 for 2! Keep going!!!");

              var riddle3 = prompt("Riddle #3: The more of me there is, the less you see...\n Answer = 8 characters");

                  if(riddle3 === answer3) {
                    document.getElementById("button").innerHTML = riddle3;
                    alert("3 for 3!! whOa MG keep going!!!");

                      var riddle4 = prompt("What 8-letter word has one letter in it??? \n Answer = 8 characters, duh.");

                        if(riddle4 === answer4) {
                          document.getElementById("button").innerHTML = riddle4;
                          alert("Thats all. YOU DID IT!!! Thanks for playing");
                          document.getElementById("button").innerHTML = "Thanks!";

                        } else {
                          alert("OOOOOOOOOO so close. START OVER!");
                          document.getElementById("button").innerHTML = "Try Again!";
                        }

                  } else {
                    alert("Starting over again, huh?");
                    document.getElementById("button").innerHTML = "Try Harder this time!";
                  }

          } else {
            alert("Now you have to start over! HAHAHAHA!");
            document.getElementById("button").innerHTML = "Try Again!";
          }

    } else {
      alert("WRONG! Try Again");
      document.getElementById("button").innerHTML = "Try Again!";
    }
}
