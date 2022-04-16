// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// // How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(anyMoviesArr){
  let directorsArr = anyMoviesArr.map(function(movie){ 
        return movie.director
      }); 
  return directorsArr;
}

// console.log(getAllDirectors(movies))

// let AllDirectors = testArr.map(function(num){
//   return (num * num)
// })
// console.log("MAP", newArr)

// // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr2) {
  let moviesOfSpiel = arr2.filter(function(object){
    return object.director === "Steven Spielberg" && object.genre.includes('Drama')})

return moviesOfSpiel.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr3) {

  if (arr3.length === 0){
    return 0
  }
  
  let avgs = arr3.reduce(function(total, num) {
    return total + num.score
  },0)
  
  return Number(parseFloat(avgs / arr3.length).toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr4) {


  

  let dramas = arr4.filter(function(object){
      return object.genre.includes('Drama') })
  
    let avgsDrama = dramas.reduce(function(total, num) {
    return total + num.score
  },0)

  if (dramas.length === 0){
    return 0
  }

  return Number(parseFloat(avgsDrama / dramas.length).toFixed(2))
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr5) {
  let sortedYears = [...arr5].sort(function(a, b) {
    return a.year - b.year || a.title.localeCompare(b.title)})
  return sortedYears
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr6) {

  let mapArr = arr6.map(function(object) {
    return object.title
  })

  let sortArr = mapArr.sort(function(a,b) {
    return a.localeCompare(b)})
  
return sortArr.slice(0,20)
  
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
