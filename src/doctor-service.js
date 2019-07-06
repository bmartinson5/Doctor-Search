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

  getLocation(city){
    const mapApiKey = process.env.exports.mapApiKey;
    let url = 'http://open.mapquestapi.com/geocoding/v1/address?key='+ mapApiKey + '&location=' + city;
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
      let startUrl = 'https://api.betterdoctor.com/2016-03-01/doctors?';
      let endUrl = '100&skip=0&limit=10&user_key=' + apiKey;
      let middleUrl = '';

      listOfParams.forEach(function(param){
        middleUrl += param[0] + '=' + param[1] + '&';
      });
      console.dir(startUrl + middleUrl + endUrl);

      return startUrl + middleUrl + endUrl;
  }
}
