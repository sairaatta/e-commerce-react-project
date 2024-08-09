import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useAuth();

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      try {
        const response = await fetch('https://fake-data3.p.rapidapi.com/fk/users?_gender=female', {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'fake-data3.p.rapidapi.com',
            'x-rapidapi-key': 'dd141cd566msh44ec6b22cd09145p1f4a20jsn50f73d0c3806',
          },
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log(data); 
        if (Array.isArray(data)) {
          setOrders(data);
        } else {
          console.error('Unexpected data structure:', data);
          setError('Unexpected data structure');
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError(error.message || 'Error fetching orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error}</p>;

  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
      <h1 className='text-3xl font-bold mb-4'>Order History</h1>
      <ul>
        {orders.length > 0 ? (
          orders.map(order => (
            <li key={order.id} className='mb-4 p-4 border rounded'>
              <p>Order ID: {order.id}</p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
              <p>Total: ${order.total.toFixed(2)}</p>
            </li>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </ul>
    </div>
  );
};

export default OrderHistory;
