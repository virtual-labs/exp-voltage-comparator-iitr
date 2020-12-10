/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "Kirchhoff's second law is based on law of conservation of",  ///// Write the question inside double quotes
      answers: {
        a: "charge",                  ///// Write the option 1 inside double quotes
        b: "energy",                  ///// Write the option 2 inside double quotes
        c: "mass",                  ///// Write the option 3 inside double quotes
        d: "momentum"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

    {
      question: "A differential amplifier …………….",  ///// Write the question inside double quotes
      answers: {
        a: "is a part of an Op-amp",                  ///// Write the option 1 inside double quotes
        b: "has one input and one output",                  ///// Write the option 2 inside double quotes
        c: "has two outputs",                  ///// Write the option 3 inside double quotes
        d: "answers (1) and (2)"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    }, 


    {
      question: "The current to voltage converter photosensitive device can be used as",  ///// Write the question inside double quotes
      answers: {
        a: "Light intensity meter",                  ///// Write the option 1 inside double quotes
        b: "Light radiating meter",                  ///// Write the option 2 inside double quotes
        c: "Light deposition meter",                  ///// Write the option 3 inside double quotes
        d: "None of the mentioned"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    		

    {
      question: "How will be the output voltage obtained for an ideal op-amp?",  ///// Write the question inside double quotes
      answers: {
        a: "Amplifies the difference between the two input voltages",                  ///// Write the option 1 inside double quotes
        b: "Amplifies individual voltages input voltages",                  ///// Write the option 2 inside double quotes
        c: "Amplifies products of two input voltage",                  ///// Write the option 3 inside double quotes
        d: "Output signal cannot be determined"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    }, 
    

    {
      question: "Which is not the ideal characteristic of an op-amp?",  ///// Write the question inside double quotes
      answers: {
        a: "Input Resistance –> 0",                  ///// Write the option 1 inside double quotes
        b: "Output impedance –> 0",                  ///// Write the option 2 inside double quotes
        c: "Bandwidth –> ∞",                  ///// Write the option 3 inside double quotes
        d: "Open loop voltage gain –> ∞"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },     							                  ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////