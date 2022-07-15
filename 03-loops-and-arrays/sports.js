var sportsArr = ['Golf', 'Cricket', 'Tennis', 'Swimming'];
for (var _i = 0, sportsArr_1 = sportsArr; _i < sportsArr_1.length; _i++) {
    var currentSport = sportsArr_1[_i];
    if (currentSport == 'Swimming') {
        console.log(currentSport + ' << My Favorite!');
    }
    else {
        console.log(currentSport);
    }
}
//traditional for loop
/*
for (let i=0; i < sportsArr.length; i++) {
    console.log(sportsArr[i]);
}
*/
//simplified for loop
/*
for (let currentSport of sportsArr) {
    console.log(currentSport);
}
*/
