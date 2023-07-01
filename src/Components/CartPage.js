import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { removeFromCart,checkout } from "../redux/actions/cartActions";
import { useNavigate } from "react-router-dom";

const CartPage=()=>{
    const {cart}=useSelector(state=>state.cart);
    const dispatch=useDispatch();
    let navigate=useNavigate();
    const totalPrice=cart.reduce((total,product)=>total+product.price,0)
   
    return(
        <div>
          <h1 style={{marginLeft:'40vw'}}>My Cart</h1>
         <div className='cart'>
         <div className="container1">  
            {
               cart.map(item=>(
                <div key={item.id} className="card">
                   <h3>{item.title}</h3>
                   <img src={item.thumbnail} alt={item.title} style={{width:"200px"}}/> 
                            <p><strong>Description:</strong>{item.description}</p>
                            <p><strong>₹{item.price}</strong></p>
                            <button
                              onClick = {() => dispatch(removeFromCart(item.id))}
                            >Remove From Cart</button>
                           
                </div>
                
               ))
            }
            </div>
            <div className="checkout">
            <h3>Checkout</h3>
            <div className="cart-table">{
                cart.map(item=>(
                    <div className="inner-cart-table">
                    <div>{item.title}</div>
                    <div>{item.price}</div>
                    </div>
                ))
                    }</div>
                    <div className="total-price">
                        <div>Total Price:</div>
                        <div>{totalPrice}</div>
                        </div>
            <button className='btn' onClick={()=>{dispatch(checkout()) }} style={{margin:"5px"}}>Click to Checkout</button>
            </div>
        
         </div>
        </div>
    )
}
export default CartPage;