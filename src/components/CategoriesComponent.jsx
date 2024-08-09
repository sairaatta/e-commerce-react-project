import React from 'react';
import { Link } from 'react-router-dom';
import { Categories } from '../assets/mockData'; 

const CategoriesComponent = () => {
  console.log(Categories); 

  return (
    <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {Categories.length > 0 ? (
          Categories.map(category => (
            <Link
              key={category}
              to={`/category/${category}`}
              className="bg-white p-4 shadow rounded text-center flex items-center justify-center hover:bg-gray-100 transition-transform duration-300 hover:scale-105"
            >
              <p className="text-sm md:text-base lg:text-lg xl:text-xl font-medium truncate">{category}</p>
            </Link>
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </div>
    </div>
  );
};

export default CategoriesComponent;
