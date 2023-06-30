// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
import GraphModal from 'graph-modal';
const modal = new GraphModal();
// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(".swiper", {
//   slidesPerView: 1,
//   spaceBetween:10,
  
// });

// Подключение анимаций по скроллу
import AOS from 'aos';
AOS.init({
    once:true
});

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

import { validateForms } from './functions/validate-forms';
import JustValidate from "just-validate";
// const rules1 = [
//    { email:{
//     required:true
//     }}
// ];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

const telSelector = document.querySelectorAll('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector,{
    showMaskOnHover: false,
});




const validation = new JustValidate(".offer__form--page") 
validation
    .addField(".form__input--name ", [
        {
            rule:"required",
            value:true,
            errorMessage:"Введите имя"
        }
    ])
    .addField(".form__input--phone ", [
        {
            rule:"required",
            value:true,
            errorMessage:"Введите номер"
        },
        {
            rule:"function",
            errorMessage:"Введите корректный номер",
            validator: function() {
            const phone = telSelector[0].inputmask.unmaskedvalue();
            return phone.length === 10;
          },
        }
    ])
    .addField(".form__input--email ", [
        {
            rule:"required",
            value:true,
            errorMessage:"Введите Email"
        }
    ]).onSuccess((ev) => {
            console.log(ev.target)
          let formData = new FormData(ev.target);
        console.log(formData)
          new  GraphModal().open('modalthanks')
          let xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              if (xhr.status === 200) {
                if (afterSend) {
                  afterSend();
                }
                new GraphModal().open('modalthanks')
              
                console.log('Отправлено');
              }
            }
          }
      
          xhr.open('POST', 'mail.php', true);
          xhr.send(formData);
      
          ev.target.reset();
    })

    const btnRemove = document.querySelector('[data-graph-target="modal"] .graph-modal__close')
    const validation2 = new JustValidate(".graph-modal .offer__form") 
    validation2
        .addField(".form__input--name ", [
            {
                rule:"required",
                value:true,
                errorMessage:"Введите имя"
            }
        ])
        .addField(".form__input--phone ", [
            {
                rule:"required",
                value:true,
                errorMessage:"Введите номер"
            },
            {
                rule:"function",
                errorMessage:"Введите корректный номер",
                validator: function() {
                const phone = telSelector[1].inputmask.unmaskedvalue();
                return phone.length === 10;
              },
            }
        ])
        .addField(".form__input--email ", [
            {
                rule:"required",
                value:true,
                errorMessage:"Введите Email"
            }
        ]).onSuccess((ev) => {
              console.log(ev.target)
              let formData = new FormData(ev.target);
              console.log(formData)
              let xhr = new XMLHttpRequest();
              btnRemove.click();
              new GraphModal().close('modal')
              new GraphModal().open('modalthanks')
              console.log('Отправлено');
              xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                  if (xhr.status === 200) {
                   
                  }
                }
              }
          
              xhr.open('POST', 'mail.php', true);
              xhr.send(formData);
          
              ev.target.reset();
        })