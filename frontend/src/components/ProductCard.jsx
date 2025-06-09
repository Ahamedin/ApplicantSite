import { EditIcon, Eye, Heart, HeartIcon, SquareArrowOutDownLeft, SquareArrowOutUpRight, Trash2Icon } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useBlockStore } from '../store/useBlockStore';


function ProductCard({blocks, isAdmin}) {
    const { deleteBlock,saveBlock} = useBlockStore();

    
    
  return (
    <div className='card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300'>
        <figure className='relative pt-[56.25%]'>
            <img src={blocks.image} alt={blocks.name} className='absolute top-0 left-0 w-full h-full object-cover' />
        </figure>

        <div className='card-body'>
            <h2 className='card-title text-lg font-semibold'>{blocks.name}</h2>
            <p className='text-2xl font-bold text-primary'>${Number(blocks.price).toFixed(2)}</p>

            
        </div>

        <div className='card-actions justify-end mt-4'>
            
            
            <Link to={`/blocks/${blocks.id}`} className="btn btn-sm btn-info btn-outline mr-6 absolute right-4 bottom-20">
                <SquareArrowOutUpRight className="size-4" />
            </Link>
            {!isAdmin && (
                <button className='btn btn-sm btn-outline btn-error mr-6 absolute right-16 bottom-20' onClick={() => saveBlock(blocks.id)} >
                    <HeartIcon className='size-5'/>
                </button>
            )}
            

            {isAdmin && (
                <button className='btn btn-sm btn-error btn-outline mr-6 absolute right-16 bottom-20 ' onClick={() => deleteBlock(blocks.id)}>
                     <Trash2Icon className='size-4' />
                </button>
            )}
            
        </div>
    </div>
  )
}

export default ProductCard
