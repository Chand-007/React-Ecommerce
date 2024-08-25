import {useState} from 'react'
import DisplayItems from "./Display";
import './Shopping.css'
import './cart.css'




export default function Cart({cart,removeFromCart,incrementCart,decrementCart,flag,setCart}){
    console.log("Logging Flag",flag)
    return(<div>
        <h2 className="title">CART ITEMS</h2>
        <button className="empty" onClick={()=>setCart([])}>Empty cart</button>
        <div className="Container">

{cart.map((laptop)=>(<DisplayItems 
Name={laptop.Name} 
GraphicCard={laptop.GraphicCard} 
OS={laptop.OS} 
Processor={laptop.Processor} 
Display={laptop.Display} 
RefreshRate={laptop.RefreshRate}
 Storage={laptop.Storage} 
 cost={laptop.cost} 
 Discount={laptop.Discount} 
 id={laptop.id} 
 count = {laptop.count} 
 flag ={flag}
 removeFromCart={removeFromCart}
 incrementCart={incrementCart}
 decrementCart={decrementCart}/>))}
</div>
    </div>
            
)
    
}