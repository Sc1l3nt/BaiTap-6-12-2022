import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Burger extends Component {
    burger = () => {
        let { salad, cheese, beef } = this.props

        let burgerSalad = salad.menu
        let burgerCheese = cheese.menu
        let burgerBeef = beef.menu
        let burger = []

        let i = 0
        while (burgerCheese + burgerBeef > 0) {
            let beefLayer = Math.floor(burgerBeef / burgerCheese) > 1 ? Math.floor(burgerBeef / burgerCheese) : 1
            console.log('beef:', beefLayer)
            let cheeseLayer = Math.floor(burgerCheese / burgerBeef) > 1 ? Math.floor(burgerCheese / burgerBeef) : 1
            console.log('cheese:', cheeseLayer)

            for (let j = 0; j < beefLayer && burgerBeef > 0; j++) {
                burger.splice(0, 0, beef.className)
                burgerBeef--
            }

            for (let j = 0; j < cheeseLayer && burgerCheese > 0; j++) {
                burger.splice(0, 0, cheese.className)
                burgerCheese--
            }
        }
        for (let i = 0; i < burgerSalad; i++) {
            burger.push(salad.className)
        }
        return burger
    }
    renderBurger = () => {
        let burger = this.burger()
        return burger.map((className, index) => {
            return <div key={index} className={className}></div>
        })
    }
    render() {
        return (
            <div>
                <h3 className='text-center text-danger'>Bánh burger của bạn</h3>
                <div className='breadTop'></div>
                {this.renderBurger()}
                <div className='breadBottom'></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    salad: state.salad,
    cheese: state.cheese,
    beef: state.beef
})

export default connect(mapStateToProps)(Burger)