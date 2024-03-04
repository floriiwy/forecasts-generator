/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const prediction = document.querySelector('.current-forecast h1');
const percent = document.querySelector('.current-forecast p');
const list = document.querySelector('#forecast-item');
const button = document.querySelector('button');
const listItem = document.querySelector('.forecasts');

function getRandomInt(min, max) {
    return Math.round(Math.random() * 100);
}

function getRandomPrediction(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


let predictionNumber = getRandomPrediction(1, 4);
let predictionText = "";

if (predictionNumber == 1) {
    predictionText = "Все будет супер!";
} else if (predictionNumber == 2) {
    predictionText = "Все будет еще лучше!";
} else {
    predictionText = "На WB отменят все комиссии";
}

const predictionItem = button.addEventListener('click', percent.append("Вероятность: " + (getRandomInt(0, 101) + '%')));
const predictionItemText = button.addEventListener('click', prediction.prepend(predictionText));