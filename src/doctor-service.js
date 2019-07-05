export class DoctorService {
  getDoctorBy(listOfParams) {
    let url = this.createUrl(listOfParams);

    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  createUrl(listOfParams){
      const apiKey = process.env.exports.apiKey;
      let startUrl = 'https://api.betterdoctor.com/2016-03-01/practices?';
      let endUrl = '100&skip=2&limit=10&user_key=' + apiKey;
      let middleUrl = '';

      listOfParams.forEach(function(param){
        middleUrl += param[0] + '=' + param[1] + '&';
      });
      console.log(startUrl + middleUrl + endUrl);

      // return startUrl + middleUrl + endUrl;
      return 'https://api.betterdoctor.com/2016-03-01/practices?name=Cary&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=975cdf755dccdb62421b7e6dbe27b255';
  }
}
