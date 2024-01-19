import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Student = () => {
    const { id } = useParams();
    const [student, setStudent] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/studentDetails/${id}`)
            .then((res) => {
                setStudent(res.data)
            })
    }, []);

    const studentData = (e) => {
        e.preventDefault();
        const from = e.target;
        const id = from.id.value;
        const name = from.name.value;
        const email = from.email.value;
        const phone = from.phone.value;
        const cgpa = parseFloat(from.cgpa.value).toFixed(2);

        axios.put(`http://localhost:5000/update/${id}`, {
            id: id,
            name: name,
            email: email,
            phone: phone,
            cgpa: cgpa,
        }).then((res) => {
            console.log(res);
        })
    }
    return (
        <>
            <div className='m-10'>
                <h1>{student.id}</h1>
                <h1>{student.Name}</h1>
                <h1>{student.Email}</h1>
                <h1>{student.Phone}</h1>
                <h1>{student.cgpa}</h1>
            </div>

            <div>
                <form onSubmit={studentData} className='border p-4 grid grid-cols-5 gap-3'>
                    <div>
                        <label>id :</label>
                        <br></br>
                        <input type="number" name='id' defaultValue={student.id} className='border-2 p-2 rounded-lg border-black ' />
                    </div>
                    <div>
                        <label>Name :</label>
                        <br></br>
                        <input type="text" name='name' defaultValue={student.Name} className='border-2 p-2 rounded-lg border-black ' />
                    </div>
                    <div>
                        <label>cgpa :</label>
                        <br></br>
                        <input type="number" name='cgpa' defaultValue={student.cgpa} step="0.01" className='border-2 p-2 rounded-lg border-black ' />
                    </div>
                    <div>
                        <label>Email :</label>
                        <br></br>
                        <input type="text" name='email' defaultValue={student.Email} className='border-2 p-2 rounded-lg border-black ' />
                    </div>
                    <div>
                        <label>Phone :</label>
                        <br></br>
                        <input type="text" name='phone' defaultValue={student.Phone} className='border-2 p-2 rounded-lg border-black ' />
                    </div>
                    <div>
                        <input type="submit" value="submit" className='bg-gray-500 p-2 rounded-lg text-white ' />
                    </div>
                </form>
            </div>
        </>

    );
};

export default Student;