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
function recordListener( section,letter ) {

    recordList = document.querySelectorAll( `.${section}` );
    console.log("RecordListener:");
    console.log(recordList);

    for( let i = 0; i < recordList.length; i++ ){

        recordList[i].addEventListener( "mouseover", event => {
            if( event.target.className != `${section}_chosen` ){
                if( event.target.tagName === 'P' ){ event.target.className = `${section}_over`; } 
            }
        })
        recordList[i].addEventListener( "mouseout", event => {
            if( event.target.className != `${section}_chosen` ){
                if( event.target.tagName === 'P' ){ event.target.className = `${section}`; }
            }
        })
        recordList[i].addEventListener( "click", event => {
            chosenRecord = document.querySelectorAll( `.${section}_chosen` );
            if( chosenRecord.length ){
                for( let i = 0; i < chosenRecord.length; i++ ){
                    chosenRecord[i].className = `${section}`;
                }
            }
            if( event.target.tagName === 'P' ){ event.target.className = `${section}_chosen`; }

            const restaurantName = event.target.getElementsByTagName( 'SPAN' );

            console.log(restaurantName);

            document.querySelector(`#${letter}ittinerary`).innerHTML = restaurantName[0].innerHTML;
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
    recordListener( 'restaurant_name','r' );
}
