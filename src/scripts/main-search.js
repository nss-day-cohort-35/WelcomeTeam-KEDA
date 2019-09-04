/*
//
*/


function searchItem ( input,initial,query ) {
    this.input = input;
    this.initial = initial;
    this.query = query;
}

let searchInputs = [];

searchInputs[0] = new searchItem( "parks_input","parks by feature","" )
searchInputs[1] = new searchItem( "restaurants_input","restaurants by food type","" )
searchInputs[2] = new searchItem( "meetups_input","meetups by topic","" ) 
searchInputs[3] = new searchItem( "concerts_input","concerts by genre","" ) 

document.querySelector('#search-button').addEventListener( "click", event => {
    for( let i = 0; i < searchInputs.length; i++ ) { // loop through all inputs and put their values in the respective searchinput
        let inputValue = document.querySelector(`#${searchInputs[i].input}`).value;
        if( searchInputs[i].initial != inputValue ) {
            searchInputs[i].query = inputValue;
        }
    }
    //add the start of your fucntion chain here!
    getParkData(searchInputs[0].query) // im passing the value rathing than referencing it directly





})

console.log( searchInputs );
