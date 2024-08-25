import './navbar.css'

export default function NavBar({setShowCart,showCart,cart}){
    return(
    <div className='main-navigation'>
       <h1>AUSUS LAPTOPS</h1>
       <div className="left-navigation">
        <button onClick={()=>setShowCart(prev => !prev)}>{showCart?'CART':'PRODUCTS'}  {showCart && (cart.length>0?cart.length:'')}</button>
        </div> 
    </div>
    )
}