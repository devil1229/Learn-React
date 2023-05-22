import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data.js"


function App() {
  console.log(data)
  const arr = data.map((obj) => {
    return <Card 
     item = {obj}
    />
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='card-section'>
        {arr}
      </div>
      
    </div>
  )
}

export default App
