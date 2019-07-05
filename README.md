# Doctor Search

#### A webpage to search for Doctors in your area, July 2019

#### By Ben Martinson

## Description

This webpage uses the Better Doctor Api to search for doctors based on the users search query which is a combination of
three different parameters; location, name and medical issue. The location given by the user converts into a lagitude and longitude
using the Mapquest Geocoding Api. The query parameters are sent to the Better doctor Api and the list of doctors that it
returns is then displayed below the search form. Information that is displayed for each doctor includes: name, phone, address, and an
image. Messages are displayed when no doctors are found and when the user does not input a name nor a location, the Better Doctor Api
needs at least a name or a location to return results.

## Setup/Installation Requirements

* Clone this repository
* Use 'npm install' to install dependencies
* then use 'npm run start' to run the dev server, which will open the page in chrome browser.
* The Api keys needed for the api calls are stored in a .env file.

## Known Bugs

* Pictures are often displayed as silhouettes.
* Searching by medical issue isn't efficient. Not a lot of results are displayed this way because the query has to be an exact match to the specialty_uid of the api results.

## Technologies Used

html, css, git, javascript, Karma, Jasmine, jquery and bootstrap

### legal

copyright (c) 2019 Ben Martinson
MIT License
