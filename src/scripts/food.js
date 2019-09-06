/*
//
*/

//


//
const createInfoComponentB = (entry) => {
  // Create your own HTML structure for a journal entry
  return `
        <article class="city-info">
            <h3><span>${entry.name}</span>, ${entry.country_name}</h3>
            <p>${entry.state_name}</p>
        </article> 
    `
}

function makeDomElementB(restaurant) {
  return `
    <p><span class="restaurant_name">${restaurant.name}</span><br>
    ${restaurant.address}<br> 
    <a href="${restaurant.url}">Web</a></p>
  
  `
}

//
//const sectionElement = document.getElementById('citiesInfo');
//

function buildDomSectionB( restaurantSearshResult ) {

  //console.log( "restaurantSearshResult.length: ", restaurantSearshResult.length );
  //console.log( restaurantSearshResult.length, " restaurants info is here: ", restaurantSearshResult );

  //
  //const restaurantsSection = document.querySelector( '#restaurants_search_result' );
  //console.log( restaurantsSection );
  const restaurantsSection = document.querySelector('#restaurantresults');

  for (let i = 0; i < restaurantSearshResult.length; i++) {
    //console.log( "restaurant #", i, " info" );

    const restaurantElement = document.createElement('div');
    restaurantElement.innerHTML = makeDomElement(restaurantSearshResult[i]);

    //console.log( "restaurantElement: ", restaurantElement );

    restaurantsSection.appendChild(restaurantElement);
  }
}

/*
function restaurantInfo(name, address, url) {
  this.name = name;
  this.address = address;
  this.url = url;
}
*/


const API = {
  zomatoApiData(cuisineUrl, query) {
    return fetch(cuisineUrl)
      .then(response => response.json())
      //.then(data => console.table(data))
      .then(list => {

        let cuisineNumber = -1;

        console.log("cuisine: ", list);
        console.log("list length: ", list.cuisines.length);

        for (let i = 0; i < list.cuisines.length; i++) {
          console.log("query value: ", query);

          if (query.toLowerCase() === list.cuisines[i].cuisine.cuisine_name.toLowerCase()) {
            console.log("cuisine:", list.cuisines[i].cuisine.cuisine_id)
            cuisineNumber = list.cuisines[i].cuisine.cuisine_id;
          }
        }
        console.log("loop cuisine number:", cuisineNumber);
        return cuisineNumber;
      })
      .then(cuisineNumber => {
        //----------------------------------------------

        //function getRestaurant(cuisineNumber) {

        console.log("restaurant cuisine number:", cuisineNumber);

        if (cuisineNumber != -1) {
          console.log("url cuisine number:", cuisineNumber);
          const zomatoApiKey = "fab738084a47c48fd99c4c3f0e29b9c8"; //?
          const queryUrl = `https://developers.zomato.com/api/v2.1/search?city_id=$1138&cuisine=${cuisineNumber}&apikey=${zomatoApiKey}`;

          fetch(queryUrl)
            .then(response => response.json())
            .then(data => {

              //console.log( "api data: ", data );
              let restaurantSearshResult = [];
              for (let i = 0; i < data.restaurants.length; i++) {
                restaurantSearshResult[i] = new restaurantInfo(data.restaurants[i].restaurant.name, data.restaurants[i].restaurant.location.address, data.restaurants[i].restaurant.url);
              }

              buildDomSection( restaurantSearshResult );
            })
        }
      })
  }
}


function getRestaurantDataB() {


  const zomatoApiKey = "fab738084a47c48fd99c4c3f0e29b9c8";
  const cuisineUrl = `https://developers.zomato.com/api/v2.1/cuisines?city_id=1138&apikey=${zomatoApiKey}`

  //API.zomatoApiData(cuisineUrl, searchInputs[1].query);


  //let cuisineNumber = -1;

  //cuisineNumber = getCuisine( cuisineNumber,searchInputs[1].query );

  //const nashvilleId = 1138;

  //console.log( "search cuisine number:", cuisineNumber );

  //getRestaurant( cuisineNumber );
  //getRestaurant(getCuisine(cuisineNumber, searchInputs[1].query));
  //

}

