import React from 'react';
import { useFormik } from 'formik';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const validate = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
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
const ModalComponent = ({ open, onCloseModal, buttonType, }) => {
    const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
            email: '',
            product: '',
            quantity: ''
        },
        validate,
        onSubmit: values => {
            alert('Modal submitted!')
        }
    })
    const { values, handleSubmit, handleBlur, handleChange, errors, touched } = formik;
    return (
        <div>
            <Modal open={open} onClose={onCloseModal} center>
                <div>{buttonType} DETAILS</div>
                <form onSubmit={handleSubmit}>
                    <label>Enter Name:
                        <input id='name' name='name' type='text' value={values.name} onChange={handleChange} onBlur={handleBlur} />
                    </label>
                    {touched.name && errors.name ? (<div>{errors.name}</div>) : null}
                    <label>Enter Email:
                        <input id='email' name='email' type='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                    </label>
                    {touched.email &&  errors.email ? (<div>{errors.email}</div>): null}
                    <label>Select Product type:
                        <select value={values.product} onChange={handleChange} onBlur={handleBlur}>
                            <option value='Product 1'>Product 1</option>
                            <option value='Product 2'>Product 2</option>
                            <option value='Product 3'>Product 3</option>
                        </select>
                    </label>
                    {touched.product && errors.product ? (<div>{errors.product}</div>) : null}
                    <label> Enter Quantity:
                        <input type='number' id='quantity' name='quantity' value={values.quantity} onChange={handleChange} onBlur={handleBlur} /> 
                    </label>
                    {touched.quantity && errors.quantity ? (<div>{errors.quantity}</div>) : null}
                </form>
            </Modal>
        </div>
    );
}

export default ModalComponent;