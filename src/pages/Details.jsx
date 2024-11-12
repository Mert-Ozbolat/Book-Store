import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Details = () => {

    const [book, setBook] = useState();
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/books/${id}`)
            .then((res) => setBook(res.data))
            .catch((err) => navigate('/undefined', { state: err.status }))
    })

    return !book ? (
        <p>Loader...</p>
    ) : (
        <div className='row my-5 p-5 mx-auto container'>
            <div className='col-md-6 d-flex justify-content-center align-items-center'>
                <img src={book.image} className='rounded img-fluid shadow' />
            </div>

            <div className='col-md-6 d-flex flex-column justify-content-center align-items-center my-4'>
                <h1>{book.title}</h1>

                <div className='my-4'>

                    <Info title="Yazar" value={book.author} />
                    <Info title="Yıl" value={book.year} />
                    <Info title="Sayfa Sayısı" value={book.page} />
                    <Info title="Ücret" value={book.price} />
                    <Info title="Açıklama" value={book.description} />

                </div>

            </div>
        </div>
    )
}

export default Details


const Info = ({ title, value }) => {
    return (
        <p className='fs-5'>
            <span className='bange bg-dark me-3'>{title}</span>
            <span>{value}</span>
        </p>
    )
}