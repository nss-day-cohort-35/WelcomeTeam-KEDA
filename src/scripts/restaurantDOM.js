/*
//
*/

//
function makePanel( title, action ) {
    return `
        <p class="restaurant_panel">
            <span>${title} search results - ${action}</span>
        </p>
    `
}

//
function makeDomElement( restaurant, index ) {
    return `
        <p class="restaurant_name">        
        <span id="rtarget${index}">${restaurant.name}</span> (Address: ${restaurant.address}) <a href="${restaurant.url}">Web</a>
        </p>
    `
}

//
function createDomPanel( section, title, action ){
    const restaurantPanel = document.createElement( 'div' );
    restaurantPanel.innerHTML = makePanel( title, action );
    section.appendChild( restaurantPanel );
}

//
function recordListener( section, letter, inputs ) {

    const recordList = document.querySelectorAll( `.${section}` );

    if( inputs.chosen != -1 ){
        recordList[ inputs.chosen ].className =  `${section}_chosen`;
    }

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
            let chosenRecord = document.querySelectorAll( `.${section}_chosen` );
            if( chosenRecord.length ){
                for( let i = 0; i < chosenRecord.length; i++ ){
                    chosenRecord[i].className = `${section}`;
                }
            }

            if( event.target.tagName === 'P' ){ 
                event.target.className = `${section}_chosen`;
                inputs.chosen = i;
             }

            const restaurantName = event.target.getElementsByTagName( 'SPAN' );
            document.querySelector(`#${letter}ittinerary`).innerHTML = restaurantName[0].innerHTML;
        })
    }        
}

//
function panelListener( results, section, panel, title, inputs ) {

    let panelElement = document.querySelector( `.${panel}` );

    panelElement.addEventListener( "mouseover", event => {
        if( event.target.tagName == 'P' ){ 
            if( event.target.className.includes('panel_show') ){
                event.target.className = `${panel}_over panel_show`;
            } else {
                event.target.className = `${panel}_over`;
            }
        }
    })

    panelElement.addEventListener( "mouseout", event => {
        if( event.target.tagName == 'P' ){ 
            if( event.target.className.includes('panel_show') ){
                event.target.className = `${panel} panel_show`;
            } else {
                event.target.className = `${panel}`;
            }
        }
    })
    
    panelElement.addEventListener( "click", event => {

        if( event.target.tagName === 'P' ) {
            if( event.target.className.includes('panel_show') ) {
                event.target.className = `${panel}`;

                let spanElement = event.target.getElementsByTagName( 'span' );
                spanElement[0].textContent = `${title} search results - SHOW`;

                let resultsElement = document.querySelectorAll( ".restaurantresults" );
                for( let i = 0; i < resultsElement.length; i++ ){
                    resultsElement[i].parentNode.removeChild( resultsElement[i] );
                }
            } else {
                event.target.className += ' panel_show';

                let spanElement = event.target.getElementsByTagName( 'span' );
                spanElement[0].textContent = `${title} search results - HIDE`;

                const resultsElement = document.createElement( 'div' );
                resultsElement.className = "restaurantresults";
                resultsElement.className += " searchcontainer";

                for( let i = 0; i < results.length; i++ ) {
                    const restaurantElement = document.createElement('div');
                    restaurantElement.innerHTML = makeDomElement( results[i], i );

                    resultsElement.appendChild( restaurantElement );
                }

                section.appendChild( resultsElement );

                recordListener( 'restaurant_name', 'r', inputs );
            }
        }   
    })
}

//
function buildDomSection( restaurantSearshResult,inputs ) {

    let restaurantsSection = document.querySelector('.restaurant_data');
    restaurantsSection.innerHTML = '';

    createDomPanel( restaurantsSection, 'Restaurant', 'SHOW' );

    panelListener( restaurantSearshResult, restaurantsSection, 'restaurant_panel', 'Restaurant', inputs );
 
    //addButtonListeners("r");
}
