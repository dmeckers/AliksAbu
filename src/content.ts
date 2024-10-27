// Функция для плавного ввода значения в поле
function smoothInput(element: Element, value: string, delay: number | undefined) {
    let index = 0; // Индекс текущей буквы

    // Функция для ввода одной буквы
    function typeNextLetter() {
        if (index < value.length) {
            (element as HTMLInputElement).value += value.charAt(index); // Добавляем текущую букву к значению поля
            console.log(`Вводим букву: ${value.charAt(index)}`);

            // Создаем и отправляем событие 'input' для уведомления системы об изменении значения
            const event = new Event('input', { bubbles: true });
            element.dispatchEvent(event);

            index++; // Переходим к следующей букве
            setTimeout(typeNextLetter, delay); // Ждем перед вводом следующей буквы
        } else {
            console.log('Ввод завершён');

            // Нажимаем Enter
            const enterEvent = new KeyboardEvent('keydown', {
                key: 'Enter',
                code: 'Enter',
                keyCode: 13,
                charCode: 0,
                bubbles: true
            });

            setTimeout(() => {
                console.log("Нажимаем Enter");
                element.dispatchEvent(enterEvent); // Отправляем событие Enter
            }, 5000); // Задержка 5 секунд перед нажатием Enter
        }
    }

    typeNextLetter(); // Начинаем ввод
}

// Функция для заполнения формы
function fillForm() {
    console.log('Заполнение формы началось...');

    // Поле для выбора страны (Latvia)
    const countryField = document.querySelector('input[aria-label="select"][role="combobox"]');
    const countryArrow = document.querySelector('.next-select-arrow'); // Стрелка для открытия выпадающего списка

    if (countryField && countryArrow) {
        // Клик по стрелке для открытия выпадающего списка
        (countryArrow as HTMLElement).click();
        console.log('Стрелка для выбора страны нажата');

        // Пауза 2 секунды перед вводом значения
        setTimeout(() => {
            smoothInput(countryField, 'Latvia', 300); // Плавный ввод с задержкой 300 мс между буквами
        }, 2000); // Задержка 2 секунды перед вводом
    } else {
        console.log('Поле или стрелка для выбора страны не найдены');
    }
}

// Ждём 7 секунд для полной загрузки страницы, затем заполняем форму
setTimeout(() => {
    fillForm();
}, 7000);

// Обработчик события на кнопку "Начать"
document.getElementById('start')?.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id as number },
            func: fillForm
        })
    });
});

