fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=31apikey=b2mgLaafqqPj3qedr8Zo6jklYkDTEYkb')
  .then(music => music.json())
  .then(parsedMain => {
    console.table(parsedMain)
  })
