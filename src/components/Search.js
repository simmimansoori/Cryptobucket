import React, { useContext, useState } from 'react'
import searchIcon from '../assets/search-icon.svg'
import { CryptoContext } from '../context/CryptoContext';
import debounce from 'lodash.debounce';


const SearchInput = ({handleSearch}) => {

  const [searchText, setSearchText] = useState("");

  let {searchData, setSearchData, setCoinSearch} = useContext(CryptoContext);

  let handleInput = (e) => {
    e.preventDefault();
    let query = e.target.value;
    setSearchText(query)
    handleSearch(query);
  }


  let handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchText);
  }

  const selectCoin =(coin) => {
    setSearchText("");
    setSearchData();
    setCoinSearch(coin);
  }

  return(
    <>
      <form className='w-96 relative flex items-center mx-7 font-nunito ' onSubmit={handleSubmit}  >
      <input onChange={handleInput} className='w-full rounded bg-gray-700 placeholder:text-gray-300 pl-2
      required outline-0 border-transparent border focus:border-cyan-300' placeholder='Search here...' type="text" name='seach' />
      <button type='submit' className='absolute right-1 cursor-pointer'>
        <img src={searchIcon} alt="search"  className='w-full h-auto'/>
      </button>
      </form>


      {
        searchText.length > 0 ? (
        <ul className='absolute top-11 left-7 w-96 h-96 rounded overflow-x-hidden py-2
        bg-gray-700 bg-opacity-60  backdrop-blur-md '>
        {
          searchData ? 
          
          searchData.map(coin => {return <li className='flex items-center ml-4 my-2 cursor-pointer'
                key={coin.id}
                onClick={() => selectCoin(coin.id)}>
               <img className='w-[1rem] h-[1rem] mx-1.5' src={coin.thumb} alt={coin.name} />
               <span>{coin.name}</span>
          </li>})
          
          : <div className='w-ful h-full flex justify-center items-center'>
              <div className='w-8 h-8 border-4 border-cyan-300 rounded-full
               border-b-gray-700 animate-spin
              ' role='status'>
                  
              </div>
              <span className='ml-2'> Searching...</span>
          </div>
        }
        </ul> 
        ): 
        null
      }
    </>
  )
}

const Search = () => {
    

    let {getSearchResult} = useContext(CryptoContext);

    const debounceFunc = debounce(function (val) {
      getSearchResult(val);
    }, 2000)

  return (
    <div className='relative  '>
    <SearchInput handleSearch={debounceFunc} />
    </div>
  )
}

export default Search
