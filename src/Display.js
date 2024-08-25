import './Display.css'

export default function DisplayItems({Name,GraphicCard,OS,Processor,Display,RefreshRate,Storage,cost,Discount,id,handlecart,count,flag,removeFromCart,incrementCart,decrementCart}){
    return(
            <div className="Item" key={id}>
            <div className="Name">
                <h4>{Name}</h4>
            </div>
            <div className='GraphicCard'>
                <h6>{GraphicCard}</h6>
            </div>
            <div className='OS'>
                <h6>{OS}</h6>
            </div>
            <div className='Processor'>
                <h6>{Processor}</h6>
            </div>
            <div className='Display'>
                <h6>{Display}</h6>
            </div>
            <div className='RefreshRate'>
                <h6>{RefreshRate}</h6>
            </div>
            <div className='Storage'>
                <h6>{Storage}</h6>
            </div>
            <div className='Cost'>
                <h6>$  {cost}</h6>
            </div>
            <div className='Discount'>
                <h6>{Discount}  %</h6>
            </div>
            
            {flag === 'cart' ? (<div className='Button'>
                <button onClick={()=>(removeFromCart(id))}>Remove from cart</button>
            </div>):(<div className='Button'>
                <button onClick={()=>(handlecart(id))}>Add to cart</button>
            </div>)}
            {flag === 'cart' && (<div className='Button'>
                <button onClick={()=>(incrementCart(id))}>Increment</button>
            </div>)}
            {flag === 'cart' && (<div className='Button'>
                <button>{count}</button>
            </div>)}
            {flag === 'cart' && (<div className='Button'>
                <button onClick={()=>(decrementCart(id))}>Decrement</button>
            </div>)}
            
            </div>
    )
}