import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productSlice';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ProductSchema = Yup.object().shape({
  name: Yup.string().required('Product name is required'),
  price: Yup.number().required('Price is required').positive('Price must be positive'),
  description: Yup.string().required('Description is required'),
});

const ProductManagement = () => {
  const dispatch = useDispatch();

  const handleAddProduct = (values, { resetForm }) => {
    dispatch(addProduct(values));
    resetForm();
  };

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Add New Product</h2>
      <Formik
        initialValues={{ name: '', price: '', description: '' }}
        validationSchema={ProductSchema}
        onSubmit={handleAddProduct}
      >
        {({ isSubmitting }) => (
          <Form className='space-y-4'>
            <div>
              <label htmlFor='name' className='block mb-1'>Product Name</label>
              <Field type='text' name='name' className='border p-2 w-full' />
              <ErrorMessage name='name' component='div' className='text-red-600' />
            </div>
            <div>
              <label htmlFor='price' className='block mb-1'>Price</label>
              <Field type='number' name='price' className='border p-2 w-full' />
              <ErrorMessage name='price' component='div' className='text-red-600' />
            </div>
            <div>
              <label htmlFor='description' className='block mb-1'>Description</label>
              <Field as='textarea' name='description' className='border p-2 w-full' />
              <ErrorMessage name='description' component='div' className='text-red-600' />
            </div>
            <button type='submit' className='bg-blue-500 text-white py-2 px-4' disabled={isSubmitting}>
              Add Product
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductManagement;
