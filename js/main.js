// "use strict";

// const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {  // Цикл через for
//     const a = prompt("Один из просмотренных фильмов?", ""),
//         b = +prompt("На сколько оцените его ?", "");

//     if (a != '' && b != '' && a != null && b != null && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         console.log("Error");
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман!");
// } else {
//     console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);