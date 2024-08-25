import { useState} from "react";
import { Items } from "./Items";
import DisplayItems from "./Display";
import './Shopping.css'
import Billing from "./Billing";
import Cart from "./cart";
import NavBar from "./navbar";
var fromcart = 'cart'


export default function ShoppingList(){
    const initial=[...Items['Zephyrus']]
    const [sort,setSort]=useState(initial)
    const [name,setName]=useState('Zephyrus')
    const [cart,setCart]=useState([])
    const [showCart,setShowCart] = useState(true)
    var totalarray=[...Items['Zephyrus'],...Items['Flow'],...Items['ROG_STRIX']]



    function handleClick(){
        var newArray=[...Items[name]]
        setSort(newArray)
    }

    function handlecart(id){
        var foundincart = cart.find((item)=>item.id === id)
        console.log("Item FOund in cart",foundincart)
        if (foundincart !== undefined){
            setCart(
            cart.map((item)=>{
                if(item.id === id){
                    return({
                        ...item,
                        count:item.count+1
                    })
                }
                return item
            })
        )
        }

        else{
            var founditem=totalarray.find((item)=> item.id === id)
            founditem = {...founditem,count:1}
            var cartitem=[]
            cartitem.push(founditem)
            setCart([...cart,...cartitem])
            console.log(cart)
        }
        
    }
    function removeFromCart(id){
        setCart(cart.filter(item=>item.id !== id))
    }

    function incrementCart(id){
        setCart(
            cart.map((item)=>{
                if(item.id === id){
                    return({
                        ...item,
                        count:item.count+1
                    })
                }
                return item
            })
        )
    }

    function decrementCart(id){
        setCart(
            cart.map((item)=>{
                if(item.id === id){
                    return({
                        ...item,
                        count:item.count-1
                    })
                }
                return item
            })
        )  
        const itemInCart = cart.find((item)=>item.id === id)
        if(itemInCart.count === 1){
            removeFromCart(id)
        }
    }

    return(
        <div>

            <div className="heading">
                <NavBar setShowCart={setShowCart} showCart={showCart} cart={cart}/>
            </div>

            {showCart?(
                <div>
                <div className="Selection">
                <select value={name} onChange={(e)=>(setName(e.target.value))}>
                    <option value='Zephyrus'>Zephyrus</option>
                    <option value='Flow'>Flow</option>
                    <option value='ROG_STRIX'>ROG_STRIX</option>
                </select>
                <button onClick={handleClick}>Search for {name}</button>
            </div>
            <br/>

            <div className="Container">
                {sort.map((laptop)=>(<DisplayItems Name={laptop.Name} GraphicCard={laptop.GraphicCard} OS={laptop.OS} Processor={laptop.Processor} Display={laptop.Display} RefreshRate={laptop.RefreshRate} Storage={laptop.Storage} cost={laptop.cost} Discount={laptop.Discount} id={laptop.id} handlecart={handlecart}/>))}
            </div>
            </div>
            ):( <div>
                {(cart.length)>0 ? (<div className="">
                <Cart cart={cart} setCart={setCart} removeFromCart={removeFromCart} incrementCart= {incrementCart} decrementCart={decrementCart} flag={fromcart}/>
                 </div>):<h1>Cart Is Empty</h1>}
            {(cart.length)>0 && (<div className="billing-section">
                <Billing cart={cart} />
            </div>)}
            </div>
            )} 
        </div>
    )
}