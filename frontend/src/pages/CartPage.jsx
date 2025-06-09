import React from 'react'
import { useBlockStore } from '../store/useBlockStore'
import CartCard from "../components/CartCard"
import { useEffect } from 'react'


function CartPage() {
  const { getBlock,saveBlock,savedblocks,loading,error } = useBlockStore()

  useEffect(()=>{
    getBlock();
  },[]);

  console.log(savedblocks);

  return (
    <main className='max-w-6xl mx-auto px-4 py-8'>
      


          {loading ? (
            <div className='flex justify-center items-center h-64'>
                <div className='loading loading-spinner loading-lg' />
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {savedblocks.map(savedblocks => (
                <CartCard key={savedblocks.id} savedblocks={savedblocks} />
              ))}
          
            </div>
          )} 
     
    </main>
  )
}

export default CartPage
