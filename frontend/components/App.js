import React, { useState, useEffect}  from 'react'
import axios from 'axios'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`




function App() {
  const[apod, setApod] = useState()


  useEffect( () => {
    function fetchPhoto () {
        axios.get(URL)
        .then (res => {
          console.log(res.data)
          setApod(res.data)
        })
        .catch (err => {
          console.log(err.message)
        })
    }
    //fetchPhoto()
    setApod (
      {
        "date": "2024-02-10",
        "explanation": "On January 18, 2024, during its 72nd flight in the thin Martian atmosphere, autonomous Mars Helicopter Ingenuity rose to an altitude of 12 meters (40 feet) and hovered for 4.5 seconds above the Red Planet.  Ingenuity's 72nd landing was a rough one though. During descent it lost contact with the Perseverance rover about 1 meter above the Martian surface. Ingenuity was able to transmit this image after contact was re-established, showing the shadow of one of its rotor blades likely damaged during ...",
        "hdurl": "https://apod.nasa.gov/apod/image/2402/PIA26243-web.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "The Shadow of Ingenuity's Damaged Rotor Blade",
        "url": "https://apod.nasa.gov/apod/image/2402/PIA26243-1024.jpg"
      },
    )
  }, [])


  if (!apod) return 'Fetching Photo of the Day...'
  return (
    <section>
      <Card
        title = {apod.title}
        text= {apod.explanation}
        imageURL ={apod.url}
        date = {apod.date}
        />
    </section>
  )
}

export default App
