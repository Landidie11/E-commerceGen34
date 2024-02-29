import React from 'react'
import { useForm } from 'react-hook-form';
import './styles/formPrice.css';

const FormPrice = ({setFormValue}) => {

    const { handleSubmit, register, reset } = useForm();

    const submit = (data, ) => {
        setFormValue({
            from: data.from || 0,
            to: data.to || Infinity,
        });

    }


  return (
    <div>
        <form className='form__search' onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="from">From: </label>
                <input {...register('from')} id='from' type="text" />
            </div>
            <div>
                <label htmlFor="to">To: </label>
                <input {...register('to')} id='to' type="text" />
            </div>
            <button className='button__search'><box-icon name='search-alt-2'></box-icon></button>
        </form>
    </div>
  )
}

export default FormPrice;