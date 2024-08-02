import React, { useContext, useRef } from 'react'
import Search from './Search'
import submitIcon from '../assets/submit-icon.svg';
import selectIcon from '../assets/select-icon.svg';
import { CryptoContext } from '../context/CryptoContext';

const Filters = () => {

  let {setCurrency, setSortBy} =useContext(CryptoContext);
  const currencyRef = useRef(null);

  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    let val = currencyRef.current.value;
    setCurrency(val);
    // currencyRef.current.value("");
  }

  const handleSort = (e) => {
    e.preventDefault();
    let val = e.target.value;
    setSortBy(val);
   
  }

  return (
    <div className='w-full h-12 flex items-center justify-between relative
    border-2 border-gray-400 rounded-lg'>
      <Search />
      <div className='flex mr-7'>
        <form className='relative flex items-center 
          font-nunito mr-12' onSubmit={handleCurrencySubmit}>
        <label htmlFor="currency" className=' mr-2 font-bold flex justify-center items-center' >currency</label>
          <input type="text" name='currency' ref = {currencyRef} placeholder='usd' className='w-16 rounded bg-gray-700
          pl-2  required outline-0 border-transparent focus:border-cyan-300 leading-4 ' />
       
          <button type="submit" className='ml-2 cursor-pointer'>
            <img src={submitIcon} alt="Submit" className='w-full h-full ' />
          </button>
        </form>
        <label className='relative flex justify-center items-center'>
          <span className='font-bold mr-2'>sort by: </span>
          <select name="sortby" className='rounded bg-gray-700 text-base pl-2 pr-10 py-0.5 
          leading-4 capitalize focus:outline-0' onClick={handleSort}>
            <option value="market_cap_desc">Market Cap desc</option>
            <option value="market_cap_asc">Market Cap asc</option>
            <option value="volume_asc">Volume asc</option>
            <option value="volume_desc">Volume desc</option>
            <option value="id_desc">Id desc</option>
            <option value="id_asc">Id asc</option>
            <option value="gecko_desc">Gecko desc</option>
            <option value="gecko_asc">Gecko asc</option>
       
          </select>
          <img src={selectIcon} alt="Select" className='w-[1.2rem] absolute right-0.5 top-2.1 pointer-events-none h-auto' />
         
        </label>
      </div>
    </div>
        
  
  )
}
 
export default Filters
