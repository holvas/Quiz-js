1. START QUIZ
   questions = [{}, {}, {}]
   questionIndex = 0
   score = 0
2. CLEAR HTML MARKUP
3. RENDER OF THE CURRENT QUESTION
4. CLICKING BY BUTTON "Відповисти"
5. CHECKING THE CORRECTNESS OF ANSWERS
   checkAnswer
6. FIND SELECTED BUTTON radio
7. CHECKING IF THE SELECTED RADIO BUTTON IS FOUND:
    no => the user did not select the button
     => exit from the function checkAnswer (& back to the CLICKING BY BUTTON "Відповисти")
    yes => we finding out the number of the user's answer
      => IS THE ANSWER CORRECT? no => do nothing
                                yes => INCREASE USER ACCOUNT score++
9. WAS THAT THE LAST QUESTION?   no => INCREASE INDEX => CLEAR PAGE => SHOW NEXT QUESTION (& back to the CLICKING BY BUTTON "Відповисти")
                                 yes => CLEAR PAGE
10.                                 => SHOWING THE RESULT
11.                                 => CHANGE THE BUTTON TO "Play Again"
12.                                   => WHEN YOU CLICK "Play again" - REFRESHING THE PAGE
