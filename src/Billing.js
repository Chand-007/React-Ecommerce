import './Billing.css'
import { useState } from 'react'
export default function Billing({cart}){
        const totalAmount = cart.reduce((total,item)=>total+item.cost*item.count,0)
        const DiscountedAmount = cart.reduce((total,item)=>total+item.cost*(item.Discount/100)*item.count,0)
        console.log("Discounted Amount is :",DiscountedAmount)
        return(
            <div className="billing-container">
                <h1 className='Title'>Billing Details</h1>
                <table>
                    <tr>
                        <th>Item</th>
                        <th>Quantity * Price</th>
                        <th>Total Cost</th>
                    </tr>
               
                {cart.map((item)=>{
                    return(
                        <tr className="product">
                            <td><h3>{item.Name}</h3></td>
                            <td><h4>{item.count} x {item.cost}</h4></td>
                            <td><h5>{item.count * item.cost}</h5></td>
                        </tr>  
                    )
                })}
                <tr>
                    <td><h2>The Total Price is:</h2></td>
                    <td></td>
                    <td><h2>{totalAmount}</h2></td>
                </tr>
                <tr>
                    <td><h2>The Total Discount is:</h2></td>
                    <td></td>
                    <td><h2>-{DiscountedAmount}</h2></td>
                </tr>
                <tr style={{backgroundColor:'blue',color:'white'}}>
                    <td><h2>The Total Payable Amount is:</h2></td>
                    <td></td>
                    <td><h2>{totalAmount-DiscountedAmount}</h2></td>
                </tr>
                 </table>
            </div>
        )
}