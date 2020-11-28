// Declaration variables
const correctAnswersHTML = ['H', 'H', 'H', 'H'];
const correctAnswersCSS = ['C', 'C', 'C', 'C'];
const correctAnswersJS = ['J', 'J', 'J', 'J'];
const form = document.querySelector('.test-form');
const results = document.querySelector('.results');
const begin = document.querySelector('.pop-starter');
const button = document.querySelector('.btn');
const quiz = document.querySelector('.quiz');
const btnSubmit = document.querySelector('.btnSubmit');
const status = results.querySelector('.status');
const total = results.querySelector('.spanTotal');
const refresh = results.querySelector('.refresh');

    let scoreHTML = 0;
    let scoreCSS = 0;
    let scoreJS = 0;
    let allScore = 0;

form.addEventListener('submit', e => {
    e.preventDefault();
    

    const userAnswersHTML = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    const userAnswersCSS = [form.q5.value, form.q6.value, form.q7.value, form.q8.value];
    const userAnswersJS = [form.q9.value, form.q10.value, form.q11.value, form.q12.value];
    
    // Get the score for each element
    userAnswersHTML.forEach((answer, index) => {
        if (answer === correctAnswersHTML[index]) {
            scoreHTML += 5;
        }
    });
    console.log(`HTML score is: ${scoreHTML}`);

    userAnswersCSS.forEach((answer, index) => {
        if (answer === correctAnswersCSS[index]) {
            scoreCSS += 10;
        }
    });
    console.log(`CSS score is: ${scoreCSS}`);

    userAnswersJS.forEach((answer, index) => {
        if (answer === correctAnswersJS[index]) {
            scoreJS += 10;
        }
    });
    console.log(`JS score is: ${scoreJS}`);
    allScore = scoreHTML + scoreCSS + scoreJS;
    console.log(`All score: ${allScore}`);

    // Show results 
    results.querySelector('.html').textContent = `${scoreHTML}%`;
    results.querySelector('.css').textContent = `${scoreCSS}%`;
    results.querySelector('.javascript').textContent = `${scoreJS}%`;
    results.querySelector('.spanTotal').textContent = `${allScore}%`;

    const congrats = results.querySelector('.congrats');

    if (allScore >= 70) {
        status.classList.add('success');
        status.textContent = 'You Passed!';
        total.classList.add('success');
        congrats.classList.remove('d-none');
        refresh.classList.add('d-none');
    } else {
        status.classList.add('failed');
        status.textContent = 'You Failed, Please Retake!';
        total.classList.add('failed');
    };
});

// display popups
// begin test
button.addEventListener('click', () => {
    begin.classList.remove('d-flex');
    begin.classList.add('d-none');
    quiz.classList.remove('d-none');
});
// show result on popup
btnSubmit.addEventListener('click', () => {
    quiz.classList.add('d-none');
    results.classList.add('d-flex');
});

