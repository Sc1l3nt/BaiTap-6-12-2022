import React, { Component } from 'react'
import Burger from './Burger'
import Table from './Table'

export default class BaiTapBurger extends Component {
    render() {
        return (
            <div className='container pb-5' style={{ height: '100%' }}>
                <h2 className='text-center py-4'>BÀI TẬP BURGER</h2>
                <h1 className='text-success fw-light display-4'>Bài tập burger cybersoft</h1>
                <div className='row'>
                    <div className='col col-lg-6 col-md-12 col-12'>
                        <Burger />
                    </div>
                    <div className='col col-lg-6 col-md-12 col-12'>
                        <Table />
                    </div>
                </div>
            </div>
        )
    }
}
