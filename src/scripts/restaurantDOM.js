/*
//
*/

//
function makeDomElement( restaurant, index ) {
    return `
        <p class="restaurant_name">        
        <span id = "rtarget${index}">${restaurant.name}</span> (Address: ${restaurant.address}) <a href="${restaurant.url}">Web</a>
        </p>
    `
}
//<button class="rcheckbutton styleasbutton" id = "rbutton${index}"></button>

//
function recordListener() {

    recordList = document.querySelectorAll( '.restaurant_name' );

    for( let i = 0; i < recordList.length; i++ ){
        recordList[i].addEventListener( "mouseover", event => {
            event.target.className = "restaurant_name_over";
        })
        recordList[i].addEventListener( "mouseout", event => {
            event.target.className = "restaurant_name";
        })
        recordList[i].addEventListener( "click", event => {
            //event.target.className = "";
            document.querySelector(`#rittinerary`).innerHTML = event.target.textContent;
        })
    }        
}

//
function buildDomSection( restaurantSearshResult ) {
    const restaurantsSection = document.querySelector('#restaurantresults');
    restaurantsSection.innerHTML = '';

    for( let i = 0; i < restaurantSearshResult.length; i++ ) {

        const restaurantElement = document.createElement('div');
        restaurantElement.innerHTML = makeDomElement( restaurantSearshResult[i], i );

        restaurantsSection.appendChild( restaurantElement );
    }

    //addButtonListeners("r");
    recordListener();
}
