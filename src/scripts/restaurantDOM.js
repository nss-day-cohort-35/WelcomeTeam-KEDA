/*
//
*/

//
function makePanel( inputs ) {
    return `
        <p class="${inputs.panel_class}">
            <span>${inputs.title} search results - ${inputs.action}</span>
        </p>
    `
}

//
function makeParkElement(inputs, workinglist, index ) {
    return `
    <p class="${inputs.name_class}">
    <span id = "${inputs.letter}target${index}">${workinglist.park_name}</span>
    </p>
    `
}

//
function makeDomElement( inputs, restaurant, index ) {
    return `
        <p class="${inputs.name_class}">        
        <span id="${inputs.letter}target${index}">${restaurant.name}</span> (Address: ${restaurant.address}) <a href="${restaurant.url}">Web</a>
        </p>
    `
}
/*
    if (typeof idata.events != "undefined") {
    for (let i = 1; i < idata.events.length; i++) { // loop through all results, creating html framework as we go
        meetuptargetinsert.innerHTML += `
        
        <p class="meetup_name">
        <span id = "mtarget${i}">${idata.events[i-1].name.text}</span>
        <p>${idata.events[i-1].summary}
        <a href="${idata.events[i-1].url}">Web</a></p>
        </p>
*/
//
function makeMeetupElement( inputs, events, i ) {
    //console.log( "events", events );

    return `
        <p class="${inputs.name_class}">
        <span id = "${inputs.letter}target${i}">${events.name.text}</span>
        ${events.summary}
        <a href="${events.url}">Web</a>
        </p>
    `
}

//
function makeConcertElement( inputs, concert, i ) {
    return `
       <p class="${inputs.name_class}">
        <span id ="${inputs.letter}target${i}">${concert.name}</span>
        ${concert.dates.start.localDate}
        ${concert.dates.start.localTime}
        ${concert.url}
        </p>
    `
}

//
function createDomPanel( section, inputs ){
    const restaurantPanel = document.createElement( 'div' );
    restaurantPanel.innerHTML = makePanel( inputs );
    section.appendChild( restaurantPanel );
}

//
function recordListener( inputs ) {

    const recordList = document.querySelectorAll( `.${inputs.name_class}` );

    if( inputs.chosen != -1 ){
        recordList[ inputs.chosen ].className =  `${inputs.name_class}_chosen`;
    }

    for( let i = 0; i < recordList.length; i++ ){

        recordList[i].addEventListener( "mouseover", event => {
            if( event.target.className != `${inputs.name_class}_chosen` ){
                if( event.target.tagName === 'P' ){ event.target.className = `${inputs.name_class}_over`; } 
            }
        })
        recordList[i].addEventListener( "mouseout", event => {
            if( event.target.className != `${inputs.name_class}_chosen` ){
                if( event.target.tagName === 'P' ){ event.target.className = `${inputs.name_class}`; }
            }
        })
        recordList[i].addEventListener( "click", event => {
            let chosenRecord = document.querySelectorAll( `.${inputs.name_class}_chosen` );
            if( chosenRecord.length ){
                for( let i = 0; i < chosenRecord.length; i++ ){
                    chosenRecord[i].className = `${inputs.name_class}`;
                }
            }

            if( event.target.tagName === 'P' ){ 
                event.target.className = `${inputs.name_class}_chosen`;
                inputs.chosen = i;
             }

            const restaurantName = event.target.getElementsByTagName( 'SPAN' );
            document.querySelector(`#${inputs.letter}ittinerary`).innerHTML = restaurantName[0].innerHTML;
        })
    }        
}

//
function panelListener( results, section, inputs ) {

    let panelElement = document.querySelector( `.${inputs.panel_class}` );

    panelElement.addEventListener( "mouseover", event => {
        if( event.target.tagName == 'P' ){ 
            if( event.target.className.includes('panel_show') ){
                event.target.className = `${inputs.panel_class}_over panel_show`;
            } else {
                event.target.className = `${inputs.panel_class}_over`;
            }
        }
    })

    panelElement.addEventListener( "mouseout", event => {
        if( event.target.tagName == 'P' ){ 
            if( event.target.className.includes('panel_show') ){
                event.target.className = `${inputs.panel_class} panel_show`;
            } else {
                event.target.className = `${inputs.panel_class}`;
            }
        }
    })
    
    panelElement.addEventListener( "click", event => {

        if( event.target.tagName === 'P' ) {
            if( event.target.className.includes('panel_show') ) {
                event.target.className = `${inputs.panel_class}`;

                let spanElement = event.target.getElementsByTagName( 'span' );
                spanElement[0].textContent = `${inputs.title} search results - SHOW`;

                let resultsElement = document.querySelectorAll( `.${inputs.result_class}` );
                for( let i = 0; i < resultsElement.length; i++ ){
                    resultsElement[i].parentNode.removeChild( resultsElement[i] );
                }
            } else {
                event.target.className += ' panel_show';

                let spanElement = event.target.getElementsByTagName( 'span' );
                spanElement[0].textContent = `${inputs.title} search results - HIDE`;

                const resultsElement = document.createElement( 'div' );
                resultsElement.className = `${inputs.result_class}`;
                resultsElement.className += " searchcontainer";

                for( let i = 0; i < results.length; i++ ) {
                    const restaurantElement = document.createElement('div');
                    //
                    switch( inputs.letter ) {
                        case 'p': { restaurantElement.innerHTML = makeParkElement( inputs, results[i], i ); }
                        break;
                        case 'r': { restaurantElement.innerHTML = makeDomElement( inputs, results[i], i ); }
                        break;
                        case 'm': { 
                            //console.log( "results.events[i]", results[i] );
                            restaurantElement.innerHTML = makeMeetupElement( inputs, results[i], i ); }
                        break;
                        case 'c': { restaurantElement.innerHTML = makeConcertElement( inputs, results[i], i ); }
                        break;
                        default: {}
                    }
                    //restaurantElement.innerHTML = makeDomElement( inputs, results[i], i );
                    //

                    resultsElement.appendChild( restaurantElement );
                }

                section.appendChild( resultsElement );

                recordListener( inputs );
            }
        }   
    })
}

//
function buildDomSection( restaurantSearshResult, inputs ) {

    //console.log( "restaurantSearshResult", restaurantSearshResult );

    let restaurantsSection = document.querySelector(`.${inputs.section_class}`);
    restaurantsSection.innerHTML = '';

    if( inputs.letter === 'm' ) {

        createDomPanel( restaurantsSection, inputs );
        panelListener( restaurantSearshResult.events, restaurantsSection, inputs );


    } else {
        createDomPanel( restaurantsSection, inputs );
        panelListener( restaurantSearshResult, restaurantsSection, inputs );

    }
    //addButtonListeners("r");
}
