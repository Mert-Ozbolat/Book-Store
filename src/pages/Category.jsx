import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'



const Category = () => {
    const role = "admin";
    if (role !== "admin") {
        return (
            <h1>Erişim Yetkiniz Yok</h1>
        )
    }

    return (
        <div className='d-flex align-items-center gap-4 p-5'>
            <NavLink to={'/kategori/hikaye'}>Hikaye</NavLink>
            <NavLink to={'/kategori/roman'}>Roman</NavLink>

            <Outlet />
        </div>
    )
}

export default Category