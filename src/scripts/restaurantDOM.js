/*
//
*/

//
function makeDomElement( restaurant, index ) {
    return `
        <p>
        <button class="rcheckbutton styleasbutton" id = "rbutton${index}"></button>
        <span class="restaurant_name" id = "rtarget${index}">${restaurant.name}</span> (Address: ${restaurant.address}) <a href="${restaurant.url}">Web</a>
        </p>
    `
}

function buildDomSection( restaurantSearshResult ) {
    const restaurantsSection = document.querySelector('#restaurantresults');
    restaurantsSection.innerHTML = '';

    for( let i = 0; i < restaurantSearshResult.length; i++ ) {

        const restaurantElement = document.createElement('div');
        restaurantElement.innerHTML = makeDomElement( restaurantSearshResult[i], i );

        restaurantsSection.appendChild( restaurantElement );
    }

    addButtonListeners("r");
}
