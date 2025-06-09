import React, { useState } from 'react'
import { useEffect } from 'react';
import { useBlockStore } from "../store/useBlockStore"
import { PlusCircleIcon, RefreshCwIcon } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import AddBlockModal from '../components/AddBlockModal';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate()



  const [searchTerm, setSearchTerm] = useState('')

  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/auth/user",{
      credentials:'include',
    })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        setUser(data);
        setIsAdmin(data.isAdmin);
      }
    })
    .catch((error) => console.error("Error fetching users",error));
  },[]);


  const {blocks, loading, error, fetchBlocks, searchBlocks} = useBlockStore()

  useEffect(()=>{
    fetchBlocks();},[fetchBlocks]
  );

  

  


  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-center items-center mb-8 gap-4">
        <input type='text' placeholder='search!' value={searchTerm} onChange={(e) => {
            const value = e.target.value;
            setSearchTerm(value);
            searchBlocks(value); // this will call your backend /api/blocks/search?q=value
          }}

    className="input input-bordered w-full sm:w-1/2"
  />


        {isAdmin && (
          <button className='btn btn-primary' onClick={() => document.getElementById("add_block_modal").showModal()}>
          <PlusCircleIcon className='size-5 mr-2' />
          Add Block
        </button>
        )}


        
        <button className='btn btn-ghost btn-circle' onClick={fetchBlocks}>
          <RefreshCwIcon className='size-5' />
        </button>
      </div>

      <AddBlockModal/>

      {error && <div className='alert alert-error mb-8'>{error}</div>}

      {loading ? (
        <div className='flex justify-center items-center h-64'>
          <div className='loading loading-spinner loading-lg' />
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {blocks.map((block) => (
            <ProductCard key={block.id} blocks={block} isAdmin={isAdmin} />
          ))}


        </div>
      )}

    
    </main>
  )
}

export default HomePage
