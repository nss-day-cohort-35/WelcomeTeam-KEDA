







// feed this fucntion the first letter of your catagory your working on
function addbuttonlisteners(uniqueletter) { // add button functionality modularly, can be used for all catagories

    let buttonlist = document.querySelectorAll(".checkbutton");
    // you can change this id to fit if you rename the button identifier



    for (let i = 0; i < buttonlist.length; i++) { // loop through all gathered buttons to, when clicked, add their respective text to the ittinerary
        
        buttonlist[i].addEventListener("click", pbuttonfunction => { // add event listener
            updateittinerary(uniqueletter,document.querySelector("#"+ ${uniqueletter} +"target" + ${i}).innerHTML);
            // call another function so we don't have 1000 search results with 20 lines of code imbeded each
            // currenting naming convention for buttons ids = (first letter of your catagory)target(number made in for loop)
            // example: ftarget3    is a text target of the [food] catagory that is [3]rd in line.
        });
        
        ;
}



function updateittinerary(catagory, newtext) { // To update the itinerary, can be used for all catagories


document.querySelector("#" + ${catagory} + "ittinerary").innerHTML = newtext; //selects the id of whatever catagory is, and puts whatever newtext is inside of that.

}