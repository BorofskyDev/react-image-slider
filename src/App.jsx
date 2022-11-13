import './App.css'
import ImageSlider from './ImageSlider'

function App() {
  const slides = [
    {url: '../public/images/img1.jpg', title: 'Image 1'},
    {url: '../public/images/img2.jpg', title: 'Image 2'},
    {url: '../public/images/img3.jpg', title: 'Image 3'},
    {url: '../public/images/img4.jpg', title: 'Image 4'},
    {url: '../public/images/img5.jpg', title: 'Image 5'},
    {url: '../public/images/img6.jpg', title: 'Image 6'}
  ]

  const containerStyles = {
    width: '500px',
    height: '280px',
    margin: '0 auto',
  }
  return (
    <div>
      <h1>This is working</h1>
      <div style={containerStyles}>
      <ImageSlider slides={slides} />

      </div>
    </div>
  )
}

export default App
