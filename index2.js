const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss_promised');
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

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message)
  });
