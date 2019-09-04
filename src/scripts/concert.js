fetch("https://app.ticketmaster.com/discovery/v2/")
  .then(main => main.json())
  .then(parsedMain => {
    console.table(parsedMain)
  })



