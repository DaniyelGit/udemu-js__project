"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели ?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: true
};

for (let i = 0; i < 2; i++) {
	const a = prompt('Один из послдений просмотренных фильмов?', ''),
		b = +prompt('На сколько оцените его?', '');

	if (a != '' && b != '' && a != null && b != null && a.length <= 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}
}

if (personalMovieDB.count < 10) {
	console.log('Просмотренно довольно мало фильмов...');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('Вы классический зритель!');
} else if (personalMovieDB.count >= 30) {
	console.log('Вы киноман!');
} else {
	console.log('Произошла ошибка');
}

console.log(personalMovieDB);


// ---- Переписать цикл под while ----

// let i = 0;
// while (i < 2) {
// 	const a = prompt('Один из послдений просмотренных фильмов?', ''),
// 		b = +prompt('На сколько оцените его?', '');
// 	i++;
// 	if (a != '' && b != '' && a != null && b != null && a.length <= 50) {
// 		personalMovieDB.movies[a] = b;
// 		console.log('done');
// 	} else {
// 		console.log('error');
// 		i--;
// 	}
// }


// ---- переписать цикл do while ----

// let i = 0;

// do {
// 	const a = prompt('Один из послдений просмотренных фильмов?', ''),
// 		b = +prompt('На сколько оцените его?', '');
// 	i++;
// 	if (a != '' && b != '' && a != null && b != null && a.length <= 50) {
// 		personalMovieDB.movies[a] = b;
// 		console.log('done');
// 	} else {
// 		console.log('error');
// 		i--;
// 	}
// } while (i < 2);