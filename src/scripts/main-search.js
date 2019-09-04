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

    for( let i = 0; i < searchInputs.length; i++ ) {

        //let inputValue = document.querySelector("#parks_input").value;
        let inputValue = document.querySelector(`#${searchInputs[i].input}`).value;
        if( searchInputs[i].input != inputValue ) {
            searchInputs[i].query = inputValue;
        }
    }


    /*
    searchInputs[0].query = document.querySelector("#parks_input").value;
    searchInputs[1].query = document.querySelector("#restaurants_input").value;
    searchInputs[2].query = document.querySelector("#meetups_input").value;
    searchInputs[3].query = document.querySelector("#concerts_input").value;*/
})

console.log( searchInputs );
