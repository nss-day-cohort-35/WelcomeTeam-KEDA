


parksearch = document.querySelector("#parkssearch").textContent; //Getting the search parameters







    getparkdata = function() { //get data
        
    
       fetch("https://data.nashville.gov/resource/74d7-b74t.json?notes='${parksearch}'") //get data based of off search, aka parksearch bar's text content
       .then(entrieslist => entrieslist.json()) // get and parse data
       .then(parsedentries =>{

           updatesearchresults(parsedentries); // send data off
       });
       
      
       
    }


function updateparksearchresults(idata) {

    let parktargetinsert = document.querySelector("#parkresults");
    //you can change this to the id of the container for park search results

    parktargetinsert.innerHTML = ``;
    //clear results

    for (let i = 0; i < idata.length; i++) { // loop through all results, creating html framework as we go
        parktargetinsert.innerHTML += `
        <div class="inline">
        <button class="checkbutton" id = "pbutton${i}"></button>
        <p id = "ptarget${i}">${idata[i].park_name}</p>
        </div>
        
        
        
        `; // this adds unique ids to "pbuttons" and "ptargets" so that they can be easily targeted using for loops
    }
    addparkbuttonlisteners(); //move on to making functionality


}


function addbuttonlisteners() { // add button functionality modularly

    let buttonlist = document.querySelectorAll(".checkbutton");
    // you can change this id to fit if you rename the button identifier



    for (let i = 0; i < buttonlist.length; i++) { // loop through all gathered buttons
        
        buttonlist[i].addEventListener("click", pbuttonfunction => { // add event listener
            updateittinerary(itinerarypark,document.querySelector("#ptarget" + ${i}).innerHTML);
            // call another function so we don't have 1000 search results with 20 lines of code imbeded each
        });
        
        ;
}



function updateittinerary(catagory, newtext) { // To update the itinerary, can be used for all catagories


document.querySelector("#" + ${catagory}).innerHTML = newtext; //selects the id of whatever catagory is, and puts whatever newtext is inside of that.






}

