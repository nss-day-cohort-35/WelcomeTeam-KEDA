


parksearch = document.querySelector("#parkssearch").textContent; //Getting the search parameters


getparkdata();




    getparkdata = function() { //get data
        
    
       fetch("https://data.nashville.gov/resource/74d7-b74t.json?notes='${parksearch}'") //get data based of off search, aka parksearch bar's text content
       .then(entrieslist => entrieslist.json()) // get and parse data
       .then(parsedentries =>{

           updatesearchresults(parsedentries); // send data off
       });
       
      
       
    }


function updateparksearchresults(idata) { // works with the park api, so this is not universal. Uses the (letter)target(number) naming conventiion

    let parktargetinsert = document.querySelector("#parkresults");
    //you can change this to the id of the container for park search results, please still keep it outputing to the park results section

    parktargetinsert.innerHTML = ``;
    //clear results in park section to make room for the loop inserting the new ones

    for (let i = 0; i < idata.length; i++) { // loop through all results, creating html framework as we go
        parktargetinsert.innerHTML += `
        <div class="inline">
        <button class="checkbutton" id = "pbutton${i}"></button>
        <p id = "ptarget${i}">${idata[i].park_name}</p>
        </div>
        
        
        
        `; // this adds unique ids to "pbuttons" and "ptargets" so that they can be easily targeted using for loops
    }

    addparkbuttonlisteners("p"); //move on to making functionality


}










