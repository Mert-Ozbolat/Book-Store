import React from 'react'

const Filter = () => {
    return (
        <div className='d-flex justify-content-between align-items-center my-4 gap-3'>

            <div>
                <select className='form-select'>
                    <option value="">Sırala</option>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                </select>
            </div>

            <form className='d-flex gap-2'>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Kitap Ara..'
                />
                <button className='btn btn-primary'>Ara</button>
            </form>

        </div>
    )
}

export default Filter