import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredData, selectProducts, setSearchTerm } from '../redux/productSlice';
import { getFilteredProducts } from '../redux/productSlice';
import { useNavigate } from 'react-router-dom';



const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const navigate = useNavigate();

  const handleSearch = () => {

    navigate(`/category/${searchTerm}`);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      dispatch(setFilteredData(filteredProducts));
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}></button>
    </div>
  );
};

export default SearchBar;
