let = numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
let firstFilm = prompt("Один из последних просмотренных фильмов?");
let firstGrade = prompt("На сколько оцените его?");
let secondFilm = prompt("Один из последних просмотренных фильмов?");
let secondGrade = prompt("На сколько оцените его?");
personalMovieDB.movies[firstFilm] = firstGrade;
personalMovieDB.movies[secondFilm] = secondGrade;
console.log(personalMovieDB);
