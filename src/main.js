import $ from 'jquery';
import './styles.css'
import { DoctorService } from './doctor-service';

$(document).ready(function(){
  $(".doctor-search-form").submit(function(e){
    e.preventDefault();
    $(".display-param-warning").hide();

    let doctorService = new DoctorService();
    let params = collectParams();

    if(!checkMinParams(params)){
      $(".display-param-warning").show();
      return
    }

    let promise = doctorService.getDoctorBy(params);
    //let promise = doctorService.getDoctorBy([['location','37.773,-122.413']]);

    promise.then(function(response){
      let body = JSON.parse(response);
      console.log(body);
    }, function(error){
      console.log('error');
    })
  })

})

function checkMinParams(params){
  //look for user input of name or location field - need at least one to be filled
  //required by the better doctor api
  let found = false;
  params.forEach(function(param){
    if(param[0] === 'name' || param[0] === 'location')
      found = true;
  })
  return found;
}

function collectParams(){
  let params = [
                  ['specialty_uid', $("#medical-issue-search").val()],
                  ['name', $("#name-search").val()],
                  ['location', $("#location-search").val()]
                  //['location', '37.773%2C-122.413%2C100']
               ];
  //return params that were filled in - not void
  return params.filter(function(param){ if(param[1]) return param; })
}
