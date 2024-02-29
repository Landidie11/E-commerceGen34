import React, { useState } from 'react'
import { postCartThunk, updatecartThunk } from '../../store/slices/cart.slice';
import { useDispatch, useSelector } from 'react-redux';

const InfoIdPage = ({productId}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart);

    const handleLess = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
        

    }

    const handlePlus = () => {
        setQuantity(quantity + 1);

    }

    const handleAddTocart = () => {
        const item = cart.filter(prod => prod.productId===productId.id);
        if (item[0]) {
            dispatch(updatecartThunk(...item, quantity));
            
        } else {
            dispatch(postCartThunk({
                quantity: quantity,
                productId: productId.id,
            }));

        }
       
    }

  return (
    <div>
        <div>
            <h2>{productId?.brand}</h2>
            <h3>{productId?.title}</h3>
            <p>{productId?.description}</p>
        </div>
        <div>
            <ul>
                <li>Price</li>
                <li>$ {productId?.price}</li>
            </ul>
            <div>
                <p>Quantity</p>
                <button onClick={handleLess}>-</button>
                <span>{quantity}</span>
                <button onClick={handlePlus}>+</button>
            </div>
        </div>
        <button onClick={handleAddTocart}><box-icon name='cart-download'></box-icon></button>
    </div>
  )
}

export default InfoIdPage;