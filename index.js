// const { fetchMyIP } = require('./iss');
// const {fetchCoordsByIP} = require('./iss')
// const {fetchISSFlyOverTimes} = require('./iss')
const { nextISSTimesForMyLocation } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('99.250.110.55', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:' , coordinates);
// });

// const myCoords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchISSFlyOverTimes(myCoords, (error, flyovers) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned flyover times' , flyovers);
// });

const printTimes = function(passTimes) {
  for (const each of passTimes) {
    const time = new Date(0);
    time.setUTCSeconds(each.risetime);
    const length = each.duration;
    console.log(
      `Next time the ISS will pass is ${time}for a short time - ${length} seconds!`
    );
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  //if successful
  printTimes(passTimes);
});
