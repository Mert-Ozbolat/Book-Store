import React from 'react'
import { useLocation } from 'react-router-dom'



const Undefined = () => {

    const loc = useLocation();
    const status = loc.state ? loc.state : 400

    return (
        <div className='text-center'>
            <div className='text-center text-danger fw-bold fs-4'>{status}</div>
            <p className='fs-2'>Aradığınız Sayfa BUlunamadı</p>
            <p className='fs-1'><Link to='/'>Anasayfa</Link>'a bir bir göz at</p>
        </div>

    )
}

export default Undefined