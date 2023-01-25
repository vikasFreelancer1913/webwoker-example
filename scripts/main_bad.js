const calcBtn = document.querySelector('#calcSum');
const colorBtn = document.querySelector('#changeBg');
const totalSumDiv = document.querySelector('#totalSum');
const pageTitle = document.querySelector('#pageTitle');

calcBtn.addEventListener('click', () => {
    let sum = 0;
    for (let i = 0; i < 10000000000; i++) {
        sum += i;
    }
    totalSumDiv.textContent = `Total sum is equal to : ${sum}`;
});

colorBtn.addEventListener('click', () => {
    let documentBodyColor = document.body.style.background;
    pageTitle.style.color = '#e4e7e7';
    totalSumDiv.style.color = '#e4e7e7';
    switch (documentBodyColor) {
        case 'green': document.body.style.background = 'orange';
            break;
        case 'orange': document.body.style.background = 'pink';
            pageTitle.style.color = 'darkslategrey';
            totalSumDiv.style.color = 'darkslategrey';
            break;
        case 'pink': document.body.style.background = 'red';
            break;
        case 'red': document.body.style.background = 'blue';
            break;
        case 'blue': document.body.style.background = 'brown';
            break;
        case 'brown': document.body.style.background = 'yellow';
            pageTitle.style.color = 'darkslategrey';
            totalSumDiv.style.color = 'darkslategrey';
            break;
        case 'yellow': document.body.style.background = 'green';
            break;
        default: document.body.style.background = 'green';
            break;
    }
});