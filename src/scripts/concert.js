fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=b2mgLaafqqPj3qedr8Zo6jklYkDTEYkb')
  .then(main => main.json())
  .then(parsedMain => {
    console.table(parsedMain)
  })

