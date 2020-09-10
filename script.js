window.addEventListener('DOMContentLoaded', function() {

    // Modal

    let more = document.querySelector('.more'), // кнопка узнать больше одна
        overlay = document.querySelector('.overlay'), // блок в котором содержится модальное окно
        close = document.querySelector('.popup-close'), // элмент крестик в модальном окне
        tabsBtn = document.querySelectorAll('.description-btn'), // кнопки узнать подробнее в табах
        modalBtn = document.querySelector('#about');
        // родитель, в ктором содержаться more и modalBtn, а так почти весь контент,
        // переменная modalBtn использовалась для делегтрованния события more и modalBtn
    
    // функция которая показывает модальное окно и не дает прокручиваться окну
    function showModal() {                       
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    // вешаем обработчик событий на modalBtn, чтобы делегировать событие на дочерние элементы,
    // которые получаем при клике и свойста объекта event записываются в него. Далее создаем
    // переменную let target и записываем в неё свойство target объекта event. Далее делаем
    // проверку на дурака, существует ли элемент на который мы кликнули и содержит ли этот
    // элемент класс description-btn или more, если да, то добавляем к текущему элемену класс
    // more-splash и запускаем функцию showModal().
    modalBtn.addEventListener('click', function(event) {
        let target = event.target;
        if(target && target.classList.contains('description-btn') || target.classList.contains('more')) {
            target.classList.add('more-splash');
            showModal(); // сначала сделал showModal(target), затем убрал, вроде всё работает 
            
        }
    });
    
    // вешаем обработчик событий на элемент close (крестик в модальном окне), при клике на него
    // скрывается модальное окно, удаляется класс (more-splash') с переменной more в которой
    // лежит кнопка, переберается псевдомассив tabsBtn при помощи метода forEach и если находит
    // в элементе псевдомассива класс 'more-splash', удаляет его и далее overflow очищается и
    // окно браузера снова перемещается.
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        tabsBtn.forEach(function (item) {
            item.classList.remove('more-splash');
        });
        document.body.style.overflow = '';
    });
    
    // код ниже по отдельности для кнопки more и для кнопок tabsBtn, выше улучшенный код
    /* more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    tabsBtn.forEach(function(item) {
        item.addEventListener('click', function() {
            overlay.style.display = 'block';
            item.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    });  */     
});