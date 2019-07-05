import $ from 'jquery';
import DoctorService from './doctor-service';

$(document).ready(function(){
  $(".doctor-search-form").submit(function(e){
    e.preventDefault();

    let doctorService = new DoctorService();
    let promise = doctorService.getDoctorBy();

    promise.then(function(response){
      body = JSON.parse(response);
      console.log(body);
    }, function(error){
      console.log('error');
    })
  })
})
