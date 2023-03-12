"use strict";
const texts = {
    text1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    text2: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.",
    text3: "Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.",
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/

const text = document.querySelector(".text");

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
    link.addEventListener("click", clickHandler);
});

/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event
 */
function clickHandler(event) {
    changeActiveClass(event);
    changeText(event);
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event
 */
function changeActiveClass(event) {
    navLinks.forEach((link) => {
        link.classList.remove("active");
    });

    if (event.target.className != "active") {
        event.target.classList.toggle("active");
    }
}

/**
 * Эта фукнция должна читать текст (например через textContent) из
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event
 */
function changeText(event) {
    const currentLinkText = event.target.textContent; // текст текущей ссылки
    //   const currentNumberLink = parseInt(currentLinkText.replace(/\D/g, "")); //номер ссылки

    const textInput = document.querySelector(".text"); // поле с текстом

    //   console.log(textInput)

    for (let text in texts) {
        if (findNumberOfText(currentLinkText) == findNumberOfText(text)) {
            textInput.innerHTML = texts[text];
        }
    }
}

/**
 * Метод принимает текст и ищет в нем цифры, если нашел - выводит их,
 * если нет - возвращает false
 * @param {String} text
 */
function findNumberOfText(text) {
    return parseInt(text.replace(/\D/g, "")) || false;
}