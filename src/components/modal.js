import React from 'react';
import { useFormik } from 'formik';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
const validate = (values) => {
    const errors = {};
    if (!values.customer_name) {
        errors.name = 'Required'
    }
    if (!values.customer_email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.customer_email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.product) {
        errors.product = 'Required';
    } else if (!['Product 1', 'Product 2', 'Product 3'].includes(values.product)) {
        errors.product = 'Invalid Product';
    }
    if (!values.quantity) {
        errors.quantity = 'Required';
    } else if (values.quantity <= 0) {
        errors.quantity = 'Invalid quantity';
    }
    return errors;
}
const ModalComponent = ({ open, onCloseModal, buttonType, item, onSubmit }) => {
    const rand = (length, ...ranges) => {
            var str = "";
            while(length--){
                var ind = Math.floor(Math.random() * ranges.length);              
                var min = ranges[ind][0].charCodeAt(0),                           
                max = ranges[ind][1].charCodeAt(0);                           
                var c = Math.floor(Math.random() * (max - min + 1)) + min;        
                str += String.fromCharCode(c);
            }
            return str;
    }
    const generatedID = rand(25, ["a", "z"], ["0","9"]);
    const formik = useFormik({
        initialValues: {
            id: (item?.id ? item?.id : generatedID),
            customer_name: (item?.customer_name ? item?.customer_name : ''),
            customer_email: (item?.customer_email ? item?.customer_email : ''),
            product: (item?.product ? item?.product : ''),
            quantity: (item?.quantity ? item?.quantity : '')
        },
        validate,
        onSubmit: values => {
            if(!item) {
                const details = {
                    id: values.id,
                    customer_name: values.customer_name,
                    customer_email: values.customer_email,
                    product: values.product,
                    quantity: values.quantity
                }
                onSubmit(details);
            }
            else {
                const details = {
                    id: values.id,
                    customer_name: values.customer_name,
                    customer_email: values.customer_email,
                    product: values.product,
                    quantity: values.quantity
                }
                onSubmit(details);
            }
        }
    })
    
    const { values, handleSubmit, handleBlur, handleChange, errors, touched } = formik;
    return (
        <div className='flex flex-col'>
            <Modal open={open} onClose={onCloseModal} center>
                <div className='mb-10  justify-center items-center'>{buttonType} DETAILS</div>
                <form onSubmit={handleSubmit}>
                    <label className='flex flex-row'>ID <div className='ml-10 mb-2'>{values.id}</div></label>
                    <label className='flex flex-row'>Name
                        <input id='customer_name' name='customer_name' type='text' className='ml-10 mb-2 border-2' value={values.customer_name} onChange={handleChange} onBlur={handleBlur} />
                    </label>
                    {touched.name && errors.name ? (<div className='mb-2 text-red-400'>{errors.name}</div>) : null}
                    <label className='flex flex-row'>Email
                        <input id='customer_email' name='customer_email' type='email' className='ml-11 mb-2 border-2' value={values.customer_email} onChange={handleChange} onBlur={handleBlur} />
                    </label>
                    {touched.email &&  errors.email ? (<div className='mb-2 text-red-400'>{errors.email}</div>): null}
                    <label className='flex flex-row'>Product
                        <select value={values.product} id='product' className='ml-12 mb-2 border-2' onChange={handleChange} onBlur={handleBlur}>
                            <option id='0' value="Nada">Select</option>
                            <option id='1' value='Product 1'>Product 1</option>
                            <option id='2' value='Product 2'>Product 2</option>
                            <option id='3' value='Product 3'>Product 3</option>
                        </select>
                    </label>
                    {touched.product && errors.product ? (<div className='mb-2 text-red-400'>{errors.product}</div>) : null}
                    <label className='flex flex-row w-20'> Quantity
                        <input type='number' id='quantity' name='quantity' className='mb-2 ml-4 border-2' value={values.quantity} onChange={handleChange} onBlur={handleBlur} /> 
                    </label>
                    {touched.quantity && errors.quantity ? (<div className='text-red-400'>{errors.quantity}</div>) : null}
                    <button type="submit" className='w-full h-10 bg-blue-500 mt-10 hover:bg-blue-700 text-white'>SUBMIT</button>
                </form>
            </Modal>
        </div>
    );
}

export default ModalComponent;