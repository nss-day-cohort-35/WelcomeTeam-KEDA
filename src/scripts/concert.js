fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=b2mgLaafqqPj3qedr8Zo6jklYkDTEYkb&classificationName=country")
  .then( res => res.json())
  .then(parsedMain =>  {
    updateConcertResults(parsedMain)
  })


  let concertTargetInsert = document.querySelector('#concertresults') // Where results will show in the dom
    
  // Function to update results
  function updateConcertResults(concerts) {
    console.log(concerts._embedded.events[0].name) 
    console.log(concerts._embedded.events[0].url)
    console.log(concerts._embedded.events[0]._embedded.venues[0].name)
    console.log(concerts._embedded.events[0].dates.start.localDate)
    console.log(concerts._embedded.events[0].dates.start.localTime)
    console.log(concerts)

  }
/*
    concertTargetInsert.innerHTML = ``;  //clear results in concert section to make room for the loop inserting the new ones 
    
    let concertList = []
    concertList[0] = {concert_name:"No concert"} // added "no option" to the start of my list
    
    for (let i = 0; i < concerts.length; i++) {
      if (concerts[i]._embedded.eventsincludes(searchInputs[0].query)) {
            concertList.push([i]);
        }

    }
    
    for (let i = 0; i < concertsList.length; i++) { // loop through all results, creating html framework as we go
      concertTargetInsert.innerHTML += `
      <div class="inline">
      <button class="pcheckbutton styleasbutton" id = "pbutton${i}"></button>
      <p id = "ptarget${i}">${workinglist[i].park_name}</p>
      </div>


    }  
 }
*/