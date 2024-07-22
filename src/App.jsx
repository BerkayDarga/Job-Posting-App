import { useState, useEffect } from 'react'
import './App.css'

function App() {


  const [IsIlanları, setIsIlanları] = useState([])


  useEffect(() => {
    fetch("http://localhost:4000/IsIlanları")
      .then(response => response.json())
      .then(data => setIsIlanları(data))
      .catch(error => console.log(error))
  }, []);


  return (
    <>
      <Router>
        <Routes>
          <Route></Route>
        </Routes>
      </Router>

      {categories.map(category => (
        <Category key={category.Id} handleClick={() => productsField(category.Id)} ikon={category.ImageUrl} description={category.Name} />
      ))}
    </>
  )
}

export default App
