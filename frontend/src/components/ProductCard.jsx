import { HeartIcon, SquareArrowOutUpRight, Trash2Icon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom';
import { useBlockStore } from '../store/useBlockStore';

function ProductCard({ blocks, isAdmin }) {
  const { deleteBlock, saveBlock } = useBlockStore();

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden">

      {/* IMAGE */}
      <figure className="relative">
        <img
          src={blocks.image}
          alt={blocks.name}
          className="w-full h-48 sm:h-56 md:h-64 object-cover"
        />
      </figure>

      {/* CONTENT */}
      <div className="card-body p-4 sm:p-5">
        <h2 className="text-base sm:text-lg font-semibold">{blocks.name}</h2>
        <p className="text-xl sm:text-2xl font-bold text-primary mt-2">
          ${Number(blocks.price).toFixed(2)}
        </p>

        {/* ACTIONS */}
        <div className="card-actions mt-4 flex justify-end gap-2 sm:gap-3">

          {/* view */}
          <Link
            to={`/blocks/${blocks.id}`}
            className="btn btn-sm btn-info btn-outline"
          >
            <SquareArrowOutUpRight className="size-4" />
          </Link>

          {/* save for user */}
          {!isAdmin && (
            <button
              className="btn btn-sm btn-error btn-outline"
              onClick={() => saveBlock(blocks.id)}
            >
              <HeartIcon className="size-4" />
            </button>
          )}

          {/* delete for admin */}
          {isAdmin && (
            <button
              className="btn btn-sm btn-error btn-outline"
              onClick={() => deleteBlock(blocks.id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          )}

        </div>
      </div>
    </div>
  )
}

export default ProductCard
