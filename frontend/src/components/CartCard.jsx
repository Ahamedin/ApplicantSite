import { SquareArrowOutUpRight, Trash2Icon } from "lucide-react";
import { useBlockStore } from "../store/useBlockStore";
import { Link } from "react-router-dom";

function CartCard({ savedblocks }) {
  const { deleteSBlock } = useBlockStore();

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden">

      {/* IMAGE */}
      <figure className="relative">
        <img
          src={savedblocks.image}
          alt={savedblocks.name}
          className="w-full h-48 sm:h-56 md:h-64 object-cover"
        />
      </figure>

      {/* CONTENT */}
      <div className="card-body p-4 sm:p-5">
        <h2 className="text-base sm:text-lg font-semibold">{savedblocks.name}</h2>
        <p className="text-xl sm:text-2xl font-bold text-primary mt-2">
          ${Number(savedblocks.price).toFixed(2)}
        </p>

        {/* ACTION BUTTONS */}
        <div className="card-actions mt-4 flex justify-end gap-2 sm:gap-3">
          <Link
            to={`/savedpage/${savedblocks.id}`}
            className="btn btn-sm btn-info btn-outline"
          >
            <SquareArrowOutUpRight className="size-4" />
          </Link>

          <button
            className="btn btn-sm btn-error btn-outline"
            onClick={() => deleteSBlock(savedblocks.id)}
          >
            <Trash2Icon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
