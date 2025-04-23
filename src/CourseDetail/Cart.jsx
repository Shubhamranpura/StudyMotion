import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTocart } from '../slice/cartSlice';
import courseData from '../catalog/courseimages';
import { FaJetFighterUp } from 'react-icons/fa6';

function Cart() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cart);
  const uniqueCartData = Array.from(new Map(cartData.map(course => [course.id, course])).values());
  


  const totalPrice = uniqueCartData.reduce((total, course) => total + course.price, 0);

  return (
    <div className="p-5">
      <h1 className="text-white text-2xl font-bold mb-4">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {uniqueCartData.map((course, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col justify-between">
            {course.Cardimg && (
              <img src={course.Cardimg} alt={course.title} className="w-full h-40 object-cover rounded-md mb-3" />
            )}


            <h2 className="text-white text-3xl font-semibold">{course.title}</h2>
            <p className="text-gray-300 text-3xl mt-2">Price: {course.price} ₹</p>
            <p className='text-blue-500 text-3xl my-3 '>{course.instructor}</p>
            <p className='text-white text-2xl my-3 '> lessons : {course.lessons}</p>

            <button
              onClick={() => dispatch(removeTocart(course))}
              className="mt-3 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-gray-900 text-white rounded-lg text-3xl font-semibold">
        Total Price: ₹{totalPrice}
      </div>
    </div>
  );
}

export default Cart;

