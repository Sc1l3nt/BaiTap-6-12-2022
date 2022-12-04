import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Table extends Component {
    handleInput = (e) => {
        let { name, value } = e.target
        value = Number(value)
        if (value <= 0) {
            value = null
        }

        const action = {
            type: name.toUpperCase() + '_CHANGE_VALUE',
            payload: value
        }
        this.props.dispatch(action)
    }

    handleButton = (name, menu, value) => {
        let sum = menu + value
        if (sum < 0) {
            sum = 0
        }
        const action = {
            type: name.toUpperCase() + '_CHANGE_VALUE',
            payload: sum
        }
        this.props.dispatch(action)
    }
    renderTable = () => {
        console.log('output')
        let { salad, beef, cheese } = this.props
        let state = [salad, cheese, beef]
        return state.map((tp, index) => {
            return <tr key={index}>
                <td>{tp.name}</td>
                <td>
                    <button className='btn btn-success py-1' onClick={() => {
                        this.handleButton(tp.name, tp.menu, 1)
                    }}>+</button>
                    <input value={tp.menu} name={tp.name} type="number" className='mx-1 p-1 text-center' style={{ width: '40px', border: 'none' }} onChange={this.handleInput} />
                    <button className='btn btn-danger py-1' onClick={() => {
                        this.handleButton(tp.name, tp.menu, -1)
                    }}>-</button>
                </td>
                <td>{tp.price}</td>
                <td>{tp.price * tp.menu}</td>
            </tr>
        })
    }
    render() {
        let { salad, beef, cheese } = this.props
        return (
            <div>
                <h3 className='text-center text-success'>Chọn thức ăn</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Thức ăn</th>
                            <th></th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Tổng cộng</td>
                            <td>{salad.menu * salad.price + beef.menu * beef.price + cheese.menu * cheese.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    salad: state.salad,
    cheese: state.cheese,
    beef: state.beef
})

export default connect(mapStateToProps)(Table)