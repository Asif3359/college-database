import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);

  const [data, setData] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:5000/student')
      .then(data => {
        console.log(data.data);
        setData(data.data);
      })

  }, [])

  return (
    <>
      <div className='mx-4'>
        <h1>Hello World</h1>
        <div className='grid grid-cols-4  gap-4 mt-5'>
          {
            data.map((item, index) => <div className='border-2 p-2' key={item.id}>
              <h1>{item.id}</h1>
              <h1>{item.Name}</h1>
              
              <h1>{item.cgpa}</h1>
              <h1>{item.Email}</h1>
              <h1>{item.Phone}*****</h1>
            </div>)
          }
        </div>
      </div>
    </>
  )
}

export default App
