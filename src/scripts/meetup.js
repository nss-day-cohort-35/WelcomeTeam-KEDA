



getMeetupData = function(query) { //get data
        
    console.log("getting data");

    if (query === "") {
        updateMeetupSearchResults([]);
        
   
     } else if (query === "all" || query === "park" || query === "parks") {

        searchInputs[2].query = "";

        fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${query}&location.address=nashville&token=7P4J2J4LJXEBIE5UBPBB`, {
            "headers": {
                "Accept": "application/json"
            }
          })//get data based of off search, aka parksearch bar's text content
         .then(entrieslist => entrieslist.json()) // get and parse data
         .then(parsedentries =>{
           
            updateMeetupSearchResults(parsedentries);
            
        
        
         });

     } else {

        fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${query}&location.address=nashville&token=7P4J2J4LJXEBIE5UBPBB`, {
    "headers": {
        "Accept": "application/json"
    }
    })//get data based of off search, aka parksearch bar's text content
    .then(entrieslist => entrieslist.json()) // get and parse data
    .then(parsedentries =>{
        
        updateMeetupSearchResults(parsedentries);
        


 });

     }
   
}


console.log("fecthing");




function updateMeetupSearchResults(idata) { // works with the park api, so this is not universal. Uses the (letter)target(number) naming conventiion

    let meetuptargetinsert = document.querySelector("#meetupresults"); // the park results container
    //you can change this to the id of the container for park search results, please still keep it outputing to the park results section

    

    meetuptargetinsert.innerHTML = ``;
    //clear results in park section to make room for the loop inserting the new ones

    meetuptargetinsert.innerHTML += `
        <div class="inline">
        <button class="mcheckbutton styleasbutton" id = "mbutton0"></button>
        <p id = "mtarget0">No Meetup</p>
        
        </div>
        `

    if (typeof idata.events != "undefined") {
    for (let i = 1; i < idata.events.length; i++) { // loop through all results, creating html framework as we go
        meetuptargetinsert.innerHTML += `
        <div class="minline">
        <button class="mcheckbutton styleasbutton" id = "mbutton${i}"></button>
        <strong id = "mtarget${i}">${idata.events[i-1].name.text}</strong>
        <p>${idata.events[i-1].summary}</p>
        <a href="${idata.events[i-1].url}"><p>Web</p></a>
        </div>
        
        
        `; // this adds unique ids to "pbuttons" and "ptargets" so that they can be easily targeted using for loops
        //make sure you have your unique letter in fornt of "button", "checkbutton", and "target"
        // and be sure to get the name of what you want to display into and put it into the p tag.
        
    }

    addButtonListeners("m"); //move on to making functionality, change the letter to your unique letter, the first letter of your catagory


}

}





/*

https://www.eventbriteapi.com/v3/users/me/?token=7P4J2J4LJXEBIE5UBPBB

https://www.eventbriteapi.com/v3/events/events?time_filter=current_future

https://www.eventbriteapi.com/v3/events?time_filter=current_future


//After got ids from Above, cycle through bellow and gett all "Music". (catagory.name === "Music")

https://www.eventbriteapi.com/v3/events/{event_id}/?expand=category

https://www.eventbriteapi.com/v3/events/{event_id}/?expand=category

*/