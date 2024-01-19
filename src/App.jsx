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
        setData(data.data);
      })

  }, [])

  const studentData = (e) => {
    e.preventDefault();
    const from = e.target;
    const id = from.id.value;
    const name = from.name.value;
    const email = from.email.value;
    const phone = from.phone.value;
    const cgpa = parseFloat(from.cgpa.value).toFixed(2);

    const studentInfo = {
      id, name, email, phone, cgpa
    }
    axios.post('http://localhost:5000/insert', {
      id: id,
      name: name,
      email: email,
      phone: phone,
      cgpa: cgpa,
    }).then((res) => {
      console.log(res);
    })

    axios.get('http://localhost:5000/student')
      .then(data => {
        setData(data.data);
      })
  }

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
      <div>
        <form onSubmit={studentData} className='border p-4 grid grid-cols-5 gap-3'>
          <div>
            <label>id :</label>
            <br></br>
            <input type="number" name='id' className='border-2 p-2 rounded-lg border-black ' />
          </div>
          <div>
            <label>Name :</label>
            <br></br>
            <input type="text" name='name' className='border-2 p-2 rounded-lg border-black ' />
          </div>
          <div>
            <label>cgpa :</label>
            <br></br>
            <input type="number" name='cgpa' min="0" max="5" step="0.01" className='border-2 p-2 rounded-lg border-black ' />
          </div>
          <div>
            <label>Email :</label>
            <br></br>
            <input type="text" name='email' className='border-2 p-2 rounded-lg border-black ' />
          </div>
          <div>
            <label>Phone :</label>
            <br></br>
            <input type="text" name='phone' className='border-2 p-2 rounded-lg border-black ' />
          </div>
          <div>
            <input type="submit" value="submit" className='bg-gray-500 p-2 rounded-lg text-white ' />
          </div>
        </form>
      </div>
    </>
  )
}

export default App
