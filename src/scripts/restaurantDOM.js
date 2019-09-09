/*
//
*/

//
function makeDomElement( restaurant, index ) {
    return `
        <p class="restaurant_name">        
        <span id="rtarget${index}">${restaurant.name}</span> (Address: ${restaurant.address}) <a href="${restaurant.url}">Web</a>
        </p>
    `
}
//<button class="rcheckbutton styleasbutton" id = "rbutton${index}"></button>

//
function recordListener() {

    recordList = document.querySelectorAll( '.restaurant_name' );

    for( let i = 0; i < recordList.length; i++ ){

        recordList[i].addEventListener( "mouseover", event => {
            if( event.target.className != "restaurant_name_chosen" ){
                if( event.target.tagName === 'P' ){ event.target.className = "restaurant_name_over"; } 
            }
        })
        recordList[i].addEventListener( "mouseout", event => {
            if( event.target.className != "restaurant_name_chosen" ){
                if( event.target.tagName === 'P' ){ event.target.className = "restaurant_name"; }
            }
        })
        recordList[i].addEventListener( "click", event => {
            chosenRecord = document.querySelectorAll( '.restaurant_name_chosen' );
            if( chosenRecord.length ){
                for( let i = 0; i < chosenRecord.length; i++ ){
                    chosenRecord[i].className = "restaurant_name";
                }
            }
            if( event.target.tagName === 'P' ){ event.target.className = "restaurant_name_chosen"; }

            const restaurantName = event.target.getElementsByTagName( 'SPAN' );
            document.querySelector(`#rittinerary`).innerHTML = restaurantName[0].innerHTML;
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
