// -----1-----
// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду,
// починаючи від from і закінчуючи to. Зробіть два варіанти рішення. Використовуючи setInterval. Використовуючи вкладений setTimeout

//Варіант з setInterval

// function NumbersInterval(from, to) {
//     let currentTime = from;
//     const intervalId = setInterval(function(){
//         console.log(currentTime);
//         if (currentTime === to) {
//             clearInterval(intervalId)
//         } currentTime++
//     }, 1000)
// }

// NumbersInterval(1, 10);

//Варіант з setTimeout

// function NumbersTimeout(from, to) {
//     let currentTime = from;
//     function printNextTime() {
//         console.log(currentTime);
//         if (currentTime < to) {
//             currentTime++;
//             setTimeout(printNextTime, 1000);
//         }
//     }
//     printNextTime();
// }

// NumbersTimeout(1, 10);

// -----2-----
// Вбудована функція setTimeout використовує колбек-функції. Створіть
// альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через ms мілісекунд, так щоб ми могли додати до нього .then:
// function delay(ms) {
// // ваш код
// }delay(3000).then(() => alert('виконалось через 3 секунди'));

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }
// delay(3000).then(() => alert("виконалось через 3 секунди"));
