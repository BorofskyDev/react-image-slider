import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { BsCircleFill } from 'react-icons/bs'

export default function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
  }

  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
  }

  const sliderStyles = {
    height: '100%',
    position: 'relative',
  }

  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].url})`,
  }

  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center'
  }

  const dotStyles = {
    margin: '6px 12px',
    cursor: 'pointer',
    fontSize: '20px'
  }

  function goToPrevious() {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1
     setCurrentIndex(newIndex)
  }

  function goToNext(){
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  function goToSlide(slideIndex){
    setCurrentIndex(slideIndex)
  }
  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        <AiOutlineArrowLeft />{' '}
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        <AiOutlineArrowRight />{' '}
      </div>
      <div style={slideStyles}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
         <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}><BsCircleFill /></div>
        ))}
      </div>
    </div>
  )
}
