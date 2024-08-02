import React from 'react'
import TableComponent from '../components/TableComponent'
import Filters from '../components/Filters'

const Crypto = () => {
  return (
    <section className=' w-[80%] h-full flex-col mt-10 mb-24 relative'>
      <Filters />
      <TableComponent />
    </section>
  )
}

export default Crypto
