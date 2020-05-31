let video = videojs('my-video', {
  playbackRates: [0.5, 1, 1.5, 2]
})

video.on('ended', async () => {
  let data = {id: 1}
  let response = await fetch('complete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
   console.log(reponse.json())
})