import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Student = () => {
    const { id } = useParams();
    const [student , setStudent]= useState({});

    useEffect(()=>{
        axios.get(`http://localhost:5000/studentDetails/${id}`)
        .then((res)=>{
            setStudent(res.data)
        })
    },[])
    return (
        <div className='m-10'>
            <h1>{student.id}</h1>
            <h1>{student.Name}</h1>
            <h1>{student.Email}</h1>
            <h1>{student.Phone}</h1>
            <h1>{student.cgpa}</h1>
        </div>
    );
};

export default Student;