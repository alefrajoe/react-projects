import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { LuQuote } from "react-icons/lu";
import reviews from './data'

function App() {
  
  // Define the index of the current image
  const [indexReview, setIndexReview] = useState(0);

  // Destructuring current review
  const {name, job, image, text} = reviews[indexReview];  
  
  // Define next review function
  const nextReview = () => {
    setIndexReview((currentIndex) => {
      return (currentIndex + 1) % reviews.length;
    })
  }

  // Define previous review function
  const previousReview = () => {
    setIndexReview((currentIndex) => {
      return (currentIndex + reviews.length - 1) % reviews.length;
    })
  }

  // Return a random review
  const randomReview = () => {
    return setIndexReview(Math.floor(Math.random() * reviews.length));
  }

  return (
    <>
    <div className='container'>
      <div className='image-container'>
        <LuQuote className='luquote'/>
        <img src={image} alt={name} className='image-review'/>
      </div>
      <div className='text-container'>
        <p className='job-text'>{job}</p>
        <p className='info-text'>{text}</p>
      </div>
      <div className='buttons-container'>
        <button onClick={previousReview} className='btn-arrow'>
          <FaArrowAltCircleLeft className="arrow-left"/>
        </button>
        <button className='surprise-button' onClick={randomReview}>surprise me</button>
        <button onClick={nextReview} className='btn-arrow'>
          <FaArrowAltCircleRight className="arrow-right"/>
        </button>
      </div>
    </div>
    </>
  )
}

export default App
