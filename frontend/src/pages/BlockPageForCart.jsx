import React from 'react'
import { useBlockStore } from '../store/useBlockStore';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import Contact from '../components/Contact';
import { useState } from 'react';

function BlockPageForCart() {

  const [showContactForm, setShowContactForm] = useState(false);
  const { getSingle,loading,error,currentSavedBlock } = useBlockStore()

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getSingle(id);
  },[getSingle, id])

//   console.log(currentSavedBlock);

const handleBook = async () => {
    setShowContactForm(true);

    setTimeout(() => {
        const modal = document.getElementById("add_form");
        if(modal) modal.showModal();
    }, 0);
}

if (loading){
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='loading loading-spinner loading-lg' />
        </div>
    )
}

if(error){
    return (
        <div className='container mx-auto px-4 py-8'>
            <div className='alert alert-error'>{error}</div>
        </div>
    )
}
  return (
    <div className='container mx-auto px-4 py-8 max-w-4xl'>
      <button onClick={() => navigate("/savedpage")} className='btn btn-ghost mb-8'>
        <ArrowLeftIcon className='size-4 mr-2' />
        Back
      </button>

      <div className='card bg-base-100 shadow-lg p-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div className='rounded-lg overflow-hidden sahdow-lg bg-base-100 mt-6 ml-6'>
                <img src={currentSavedBlock?.image} alt={currentSavedBlock.name} className='size-full object-cover' />
            </div>
            <div className='card-title text-3xl mb-2 text-left'>
                <p>{currentSavedBlock?.description}</p>
            </div>
        </div>

        <div className='card-body p-0 space-y-0'>
            <div className='flex justify-between items-center mt-2 px-5 py-5'>
                <div>
                    <h2 className='card-title text-4xl mb-2'>
                        {currentSavedBlock?.name}
                    </h2>
                    <p className='text-2xl font-semibold text-primary mt-8'>
                        ${Number(currentSavedBlock?.price).toFixed(2)}
                    </p>
                </div>

                <button className='btn btn-success btn-outline text-3xl h-20 px-10 rounded-xl shadow-lg leading-none mt-5' onClick={handleBook}>
                    Book
                </button>
            </div>
        </div>
      </div>
      {showContactForm && <Contact onClose={() => setShowContactForm(true)} />}
    </div>
  )
}

export default BlockPageForCart
