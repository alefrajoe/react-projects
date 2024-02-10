import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {list} from './data.js'
import Slider from './Slider.jsx'


function App() {

  // Define an index related to the card displayed
  const [index, setIndex] = useState(0)

  // Define a function to take the next slide
  function nextSlide(){
    setIndex((index + 1) % list.length)
  }

    // Define a function to take the next slide
    function prevSlide(){
      setIndex((index + list.length - 1) % list.length)
    }

  // Next slide on keydown
  $(document).on('keydown', (e) => {

    // Next slide on arrow right
    if (e.key === 'ArrowRight'){
      nextSlide()
    }

    // Previous slide on arrow left
    if (e.key === 'ArrowLeft'){
      prevSlide()
    }

  })

  // Translate the cards
  $('.card-container').css({transform: `translateX(-${50}%) translateX(-${index * 1263.25}px)`})

  return (
    <div className='app-container'>
    <Slider list={list}/>
    </div>
  )
}

export default App
