import React from 'react'

const cartContext = React.createContext({
    items:[],
    totalAmount:0,
    addItems:(item)=>{},
    removeItems:(id)=>{}
})

export default cartContext