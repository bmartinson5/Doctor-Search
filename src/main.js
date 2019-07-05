import $ from 'jquery';
import { DoctorService } from './doctor-service';

$(document).ready(function(){
  $(".doctor-search-form").submit(function(e){
    e.preventDefault();

    let doctorService = new DoctorService();
    let promise = doctorService.getDoctorBy([['name', 'Cary'], ['location','37.773%2C-122.413%2C100']]);
    //let promise = doctorService.getDoctorBy([['location','37.773,-122.413']]);

    promise.then(function(response){
      let body = JSON.parse(response);
      console.log(body);
    }, function(error){
      console.log('error');
    })
  })
})
