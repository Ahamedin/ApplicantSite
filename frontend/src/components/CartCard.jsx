import { SquareArrowOutUpRight, Trash2Icon } from "lucide-react";
import { useBlockStore } from "../store/useBlockStore";
import { Link } from "react-router-dom"


function CartCard({savedblocks}){
    const{ getBlock,deleteSBlock } = useBlockStore();

    return(
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="relative pt-[56.25%]">
                <img src={savedblocks.image} alt={savedblocks.name} className="absolute top-0 left-0 w-full h-full object-cover" />

            </figure>

            <div className="card-body">
                <h2 className="card-title text-lg font-semibold">{savedblocks.name}</h2>
                <p className="text-2xl font-bold text-primary">${Number(savedblocks.price).toFixed(2)}</p>
            </div>

            <div className="card-actions justify-end mt-4">
                    <Link to={`/savedpage/${savedblocks.id}`} className="btn btn-sm btn-info btn-outline mr-6 absolute right-4 bottom-20">
                        <SquareArrowOutUpRight className="size-4" />
                    </Link>

                    <button className="btn btn-sm btn-error btn-outline mr-6 absolute right-16 bottom-20" onClick={() => deleteSBlock(savedblocks.id)}>
                        <Trash2Icon className="size-5"/>
                    </button>
            </div>

        </div>
    )
}

export default CartCard