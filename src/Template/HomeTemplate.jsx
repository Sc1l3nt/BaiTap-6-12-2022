import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default class HomeTemplate extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                        <div className="container">
                            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavId">
                                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                    <li className="nav-item">
                                        <NavLink className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to='/home'>Home</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Bài tập</a>
                                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                                            <NavLink className="dropdown-item" to={'/baitapburger'}>Burger</NavLink>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className='content' style={{ minHeight: '650px' }}><Outlet /></div>
                <footer>
                    <div className='bg-dark'>
                        <p className='text-light text-center py-4 px-2'>© 2021 Copyright: Trương Văn Đại</p>
                    </div>
                </footer>
            </div>
        )
    }
}
