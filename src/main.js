import $ from 'jquery';

$(document).ready(function(){
  const apiKey = process.env.exports.apiKey;
  const resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key='
                        + apiKey;

  $.get(resource_url).then(function(response){
    console.log(response);
  })
})
