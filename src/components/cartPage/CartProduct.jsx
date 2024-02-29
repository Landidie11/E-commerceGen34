import React from 'react'
import './styles/cartproduct.css';
import { deleteCartThunk, updatecartThunk } from '../../store/slices/cart.slice';
import { useDispatch } from 'react-redux';

const CartProduct = ({prod}) => {

    const dispatch = useDispatch();

    const handleLess = () => {
        dispatch(updatecartThunk(prod, -1));
    }


    const handlePlus = () => {
        dispatch(updatecartThunk(prod, 1));
    }

    const handleRemove = () => {
        dispatch(deleteCartThunk(prod.id));
    }
  return (
    prod.product &&
    <div className='cartProduct'>
        <figure>
            <img src={prod.product.images[0].url} alt="product image" />
        </figure>
        <div className='container__cart'>
            <h2>{prod.product.title}</h2>
            <button onClick={handleLess}>-</button>
            <span>{prod.quantity}</span>
            <button onClick={handlePlus}>+</button>
            <h3>Total product: $ {prod.product.price * prod.quantity}</h3>
        </div>
        <button onClick={handleRemove}>Delete</button>
    </div>
  )
}

export default CartProduct;