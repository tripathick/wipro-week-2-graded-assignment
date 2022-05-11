1. Here, there is mainly 2 js File 

    1. fetch_data -> It is used mainly to fetch the data from the JSON.

    2. quiz- logic -> All the logic is implemented in this file.

2. quiz-logic 

  1. Here i initially i am showing only the rule page and the start test button.

  2. When User Click on the Start Test Button , the fetch_data function will be called and till the data got fetched , the loader will be visible for that time.

  3. After that a random question will be picked from fetch data and shown on UI with the option.

  4. Initially the sumbit button is disabled and when user clicked on any option , the submit button will be enabled.

  5. Clicking on the submit button will show the right and the wrong answer and after 2 sec again the first rule segment will be visible .

  6. So now again we can go for the next question.

3. Run the html file("index.html") on live server as like "http://127.0.0.1:5500/index.html"