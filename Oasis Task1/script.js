let questionField = document.getElementById('questionField').firstElementChild;
let answerField = document.getElementById('answerField').firstElementChild;
let arrayOfButtons = document.getElementsByClassName('buttons');
let questionString = questionField.textContent.trim();

Array.from(arrayOfButtons).forEach((button) => {
    button.addEventListener('click', () => {
        let buttonString = button.textContent.trim();
        if (buttonString === 'AC') {
            questionField.textContent = '';
            questionString = '';
            answerField.textContent = '';
        } else if (buttonString === '( )') {
            if (questionString.includes('(')) {
                if (questionString.includes(')')) {
                    if (questionString.lastIndexOf('(') > questionString.lastIndexOf(')')) {
                        addToQuestion(')');
                    } else {
                        addToQuestion('(');
                    }
                } else {
                    addToQuestion(')');
                }
            } else {
                addToQuestion('(');
            }
        } else if (buttonString === '<-') {
            questionString = questionString.slice(0, questionString.length - 1);
            questionField.textContent = questionString;
        } else if (buttonString === '=') {
            // console.log(questionString);
            let ans = null;
            try {
                ans = eval(questionString).toString();
                if (ans.length > 10) {
                    ans = ans.substring(0, 10);
                }
            } catch (e) {
                ans = 'Invalid Input';
            } finally {
                answerField.textContent = ans;
            }
            // console.log(ans);
        } else if (buttonString === 'x') {
            addToQuestion('*');
        } else {
            addToQuestion(buttonString);
        }
    });
});

addToQuestion = (string) => {
    questionString = questionString.concat(string);
    // console.log(questionString);
    questionField.textContent = questionString;
};
