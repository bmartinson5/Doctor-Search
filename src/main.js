import $ from 'jquery';
import './styles.css'
import { DoctorService } from './doctor-service';

$(document).ready(function(){
  //search button clicked
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
      $(".doctorSearch-form").hide();
      let body = JSON.parse(response);
      displayDoctors(body.data);
      console.log(body);
    }, function(error){
      console.log('error');
    })
  })

})

function displayDoctors(doctors){
  $("#display-results-list").empty();
  if(doctors.length === 0){
    $(".display-results").text("No doctors were found.")
    return
  }
  doctors.forEach(function(doctor){
    console.log(doctor);
    if(!doctor.profile || !doctor.practices[0] || !doctor.practices[0].visit_address || !doctor.practices[0].phones){
      return;
    }
    let profile = doctor.profile;
    let address = doctor.practices[0].visit_address;
    let phone = doctor.practices[0].phones[0].number;
    console.log('here');

    $("#display-results-list").append(
        `<li>

          ${profile.first_name} ${profile.last_name}<br>
          ${address.street}, ${address.city}, ${address.state} ${address.zip}<br>
          ${phone}
        </li><br>`

      );
  })
}

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
                  ['name', $("#name-search").val()],
                  ['specialty_uid', $("#medical-issue-search").val()],
                  ['location', $("#location-search").val()]
                  //['location', '37.773%2C-122.413%2C100']
               ];
  //return params that were filled in - not void
  return params.filter(function(param){ if(param[1]) return param; })
}
