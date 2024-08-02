import React, { useContext } from 'react'
import paginationArrow from '../assets/pagination-arrow.svg'
import { CryptoContext } from '../context/CryptoContext';

const Pagination = () => {

    let {page,setPage} = useContext(CryptoContext)

    const totalNumbers = 250;

    const next = () => {
        if(page  === totalNumbers){
            return null;
        }else{
            setPage(page+1);
        }
    }

    const previous = () => {
        if(page  === 1){
            return null;
        }else{
            setPage(page-1);
        }
    }

    const multiStepNext = () => {
        if(page+3>= totalNumbers){
            setPage(totalNumbers-1);
        }else{
            setPage(page + 3);
        }
    }

    const multiStepPrev = () => {
        if(page-3 <= 1 ){
            setPage(totalNumbers+1);
        }else{
            setPage(page -2);
        }
    }

  return (
    <div className='flex items-center'>
        <ul className='flex items-center justify-end text-sm '>
            <li className='flex items-center'>
                <button className='outline-0 hover:text-cyan-300 w-8'>
                    <img className='w-full h-auto rotate-180' src={paginationArrow} alt="left"  onClick={previous}/>
                </button>
                
            </li>
            {
                page +1 === totalNumbers || page === totalNumbers  ? (<li>{" "}<button onClick={multiStepPrev} className='outline-0 hover:text-cyan-300 w-8 h-8 rounded-full flex items-center justify-center text-lg'>...</button></li>

               ) :null

            }

            {

                page-1 !== 0  ?  <li><button  className='outline-0 hover:text-cyan-300 w-8 h-8 rounded-full flex items-center justify-center bg-gray-700 mx-1.5' onClick={previous}>{" "}{page - 1} { " "}</button>  </li>
           
                :null

            }
           
           
            <li><button  className='outline-0  w-8 h-8 rounded-full flex items-center justify-center bg-cyan-300 text-gray-700 mx-1.5 '>  {page}</button> </li>
            
            {
                page +1 !== totalNumbers && page !== totalNumbers  ?  <li><button  className='outline-0 hover:text-cyan-300 w-8 h-8 rounded-full flex items-center justify-center bg-gray-700 mx-1.5 ' onClick={next}>  {page + 1} </button> </li>
          
                :null
            }
            
            
            {
                page +1 !== totalNumbers && page !== totalNumbers ?   <li><button onClick={multiStepNext} className='outline-0 hover:text-cyan-300 w-8 h-8 rounded-full flex items-center justify-center text-lg'>...   </button> </li>
          
                :null
            }
            
            
            
            
            {
                page !== totalNumbers ? <li><button onClick={() => setPage(totalNumbers)} className='outline-0 hover:text-cyan-300 w-8 h-8 rounded-full flex items-center justify-center bg-gray-700 mx-1.5 '>{totalNumbers}</button> </li>
            
                : null
            }
            <li><button className='outline-0 hover:text-cyan-300 w-8'>
                 <img className='w-full h-auto'  src={paginationArrow} alt="right" onClick={next} /> 
                </button> 
                
            </li>

        </ul>
      
    </div>
  )
}

export default Pagination
