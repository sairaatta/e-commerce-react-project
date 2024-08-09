import React from 'react'
import { useNavigate } from 'react-router-dom'

const Order = ({order}) => {

  const navigate = useNavigate();
  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
        <h2 className='text-2xl font-semibold mb-4'>Thank You for your order </h2>
        <p>Your order has been placed successfully you will recieve an email confirmation for this</p>
        <div className='mt-6 p-4 border rounded-lg bg-gray-100'>
            <h1 className='text-lg font-semibold mb-2'>Order summary</h1>
            <p>order number: {order.orderNumber}</p>
            <div className='mt-4'>
              <h2 className='text-md font-semibold mb-2'>Shipping Information</h2>
              <p>{order.shippingInformation.address}</p>
              <p>{order.shippingInformation.city}</p>
              <p>{order.shippingInformation.zip}</p>            
            </div>
            <div className='mt-4'>
              <h3 className='text-md font-semibold mb-2'>Products Ordered</h3>
              {order.products.map(product => (
                <div key={product.id} className='flex justify-between mt-2' >
                  <p>{product.name} x {product.quantity}</p>
                  <p>${product.price} * {product.quantity}</p>
                </div>
              ))}
            </div>
            <div className='mt-4 flex justify-between'>
              <span>Total price: </span>
              <span className='font-semibold'>${order.totalPrice.toFixed(2)}</span>
            </div>
            <div>
              <div>
              <button className='bg-green-500 text-white py-2 px-4 hover:bg-green-600 m-4'>Order Tracking</button>
              <button className='bg-red-600 text-white py-2 px-4 hover:bg-red-800'
              onClick={()=> navigate('/')}>
                Continue Shopping </button>
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default Order