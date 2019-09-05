



    getParkData = function() { //get data
        
    
       fetch(`https://data.nashville.gov/resource/74d7-b74t.json`) //get data based of off search, aka parksearch bar's text content
       .then(entrieslist => entrieslist.json()) // get and parse data
       .then(parsedentries =>{

            updateParkSearchResults(parsedentries); // send data off

       });
       
      
       
    }




function updateParkSearchResults(idata) { // works with the park api, so this is not universal. Uses the (letter)target(number) naming conventiion

    let parktargetinsert = document.querySelector("#parkresults"); // the park results container
    //you can change this to the id of the container for park search results, please still keep it outputing to the park results section

    console.log(idata);

    parktargetinsert.innerHTML = ``;
    //clear results in park section to make room for the loop inserting the new ones

    let workinglist = [];

    workinglist[0] = {park_name:"No park"} // i recomend you add a "no option" to the start of your list

    for (let i = 0; i < idata.length; i++) {

        if (idata[i].notes.includes(searchInputs[0].query)) {
            workinglist.push(idata[i]);
        }

    }





    for (let i = 0; i < workinglist.length; i++) { // loop through all results, creating html framework as we go
        parktargetinsert.innerHTML += `
        <div class="inline">
        <button class="pcheckbutton styleasbutton" id = "pbutton${i}"></button>
        <p id = "ptarget${i}">${workinglist[i].park_name}</p>
        </div>
        
        
        `; // this adds unique ids to "pbuttons" and "ptargets" so that they can be easily targeted using for loops
        //make sure you have your unique letter in fornt of "button", "checkbutton", and "target"
        // and be sure to get the name of what you want to display into and put it into the p tag.
        console.log(`ptarget${i}`);
        console.log(`looped`);
    }

    addButtonListeners("p"); //move on to making functionality, change the letter to your unique letter, the first letter of your catagory


}










