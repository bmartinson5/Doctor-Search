# Doctor Search

## Author

Ben Martinson

## Description

This webpage uses the Better Doctor Api to search for doctors based on the users search query which is a combination of

three different parameters; location, name and medical issue. The location given by the user converts into a lagitude and longitude

using the Mapquest Geocoding Api. The query parameters are sent to the Better doctor Api and the list of doctors that it

returns is then displayed below the search form. Information that is displayed for each doctor includes: name, phone, address, and an

image. Messages are displayed when no doctors are found and when the user does not input a name nor a location, the Better Doctor Api

needs at least a name or a location to return results.


## Setup
Clone this repository, use 'npm install' to install dependencies, then use 'npm run start' to

run the dev server, which will open the page in chrome browser. The Api keys needed for the api calls are

stored in a .env file.

## Technologies Used

html, css, git, javascript, Karma, Jasmine, jquery and bootstrap

### legal

copyright (c) 2019 Ben Martinson
MIT License
