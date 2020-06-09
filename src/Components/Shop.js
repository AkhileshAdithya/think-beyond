import React, { Component } from 'react'
import Product from './Product'
import './Shop.css'

class Shop extends Component{
    render() {
        return (
            <div className="Shop">
                <Product />
            </div>
        )
    }
}

export default Shop