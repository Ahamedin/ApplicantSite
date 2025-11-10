import React, { useState, useEffect } from 'react'
import { useBlockStore } from "../store/useBlockStore"
import { PlusCircleIcon, RefreshCwIcon } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import AddBlockModal from '../components/AddBlockModal';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState('')
  const [user, setUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/auth/user", { credentials:'include' })
    .then((res) => res.json())
    .then((data) => { 
      if (data) { setUser(data); setIsAdmin(data.isAdmin); }
    })
    .catch((error) => console.error("Error fetching users", error));
  }, []);

  const { blocks, loading, error, fetchBlocks, searchBlocks } = useBlockStore()

  useEffect(() => { fetchBlocks(); }, [fetchBlocks])

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">

      {/* SEARCH / ADMIN TOOLBAR */}
<div className="flex items-center justify-center gap-3 mb-8 px-2 w-full">
  <input
    type="text"
    placeholder="Search…"
    value={searchTerm}
    onChange={(e) => {
      const value = e.target.value;
      setSearchTerm(value);
      searchBlocks(value);
    }}
    className="
      input input-bordered
      flex-1
      min-w-[180px]
      max-w-[300px]
      md:max-w-[450px]
    "
  />

  {isAdmin && (
    <button
      className="btn btn-primary btn-sm"
      onClick={() => document.getElementById('add_block_modal').showModal()}
    >
      <PlusCircleIcon className="size-4 mr-1" />
      Add
    </button>
  )}

  <button className="btn btn-ghost btn-circle btn-sm" onClick={fetchBlocks}>
    <RefreshCwIcon className="size-5" />
  </button>
</div>



      <AddBlockModal />

      {/* STATUS */}
      {error && <div className="alert alert-error mb-8">{error}</div>}

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loading loading-spinner loading-lg" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {blocks.map((block) => (
            <ProductCard key={block.id} blocks={block} isAdmin={isAdmin} />
          ))}
        </div>
      )}

    </main>
  )
}

export default HomePage;
