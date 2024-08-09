import React from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const UserSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  role: Yup.string().required('Role is required'),
});

const UserManagement = () => {
  const dispatch = useDispatch();

  const handleAddUser = (values, { resetForm }) => {
    dispatch(addUser(values));
    resetForm();
  };

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Add New User</h2>
      <Formik
        initialValues={{ username: '', email: '', role: '' }}
        validationSchema={UserSchema}
        onSubmit={handleAddUser}
      >
        {({ isSubmitting }) => (
          <Form className='space-y-4'>
            <div>
              <label htmlFor='username' className='block mb-1'>Username</label>
              <Field type='text' name='username' className='border p-2 w-full' />
              <ErrorMessage name='username' component='div' className='text-red-600' />
            </div>
            <div>
              <label htmlFor='email' className='block mb-1'>Email</label>
              <Field type='email' name='email' className='border p-2 w-full' />
              <ErrorMessage name='email' component='div' className='text-red-600' />
            </div>
            <div>
              <label htmlFor='role' className='block mb-1'>Role</label>
              <Field as='select' name='role' className='border p-2 w-full'>
                <option value='' label='Select role' />
                <option value='admin' label='Admin' />
                <option value='user' label='User' />
              </Field>
              <ErrorMessage name='role' component='div' className='text-red-600' />
            </div>
            <button type='submit' className='bg-blue-500 text-white py-2 px-4' disabled={isSubmitting}>
              Add User
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserManagement;
