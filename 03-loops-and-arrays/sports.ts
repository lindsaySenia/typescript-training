let sportsArr: string[] = ['Golf', 'Cricket', 'Tennis', 'Swimming'];


for (let currentSport of sportsArr) {
    if (currentSport == 'Swimming') {
        console.log(currentSport + ' << My Favorite!');
    } else {
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
