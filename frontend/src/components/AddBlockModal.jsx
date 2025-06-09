import { BrickWall, DollarSign, Images, IndianRupee, ListCollapse, PlusCircleIcon } from 'lucide-react'
import React from 'react'
import { useBlockStore } from '../store/useBlockStore'

function AddBlockModal() {

    const{ addBlock, formData2, setFormData2, loading} = useBlockStore();

    const closeModal = () => {
        const modal = document.getElementById("add_block_modal");
        if(modal) modal.close();
    }

return (
    <dialog id='add_block_modal' className='modal'>
        <div className='modal-box'>
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2' onClick={closeModal}>
                X
            </button>

            <h3 className='font-bold text-xl mb-8'>Add New Design</h3>

            <form onSubmit={addBlock} className='space-y-6'>
                <div className='grid gap-6'>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text text-base font-medium'>BlockName</span>
                        </label>
                        <div className='relative'>
                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50'>
                                <BrickWall className='size-5' />
                            </div>
                            <input 
                            type='text'
                            placeholder='Enter BlockName'
                            className='input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200'
                            value={formData2.name}
                            onChange={(e) => setFormData2({ ...formData2, name: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className='form-control'>
                        <label className='label'>   
                            <span className='label-text text-base font-medium'>Price</span>

                        </label>
                        <div className='relative'>
                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50'>
                               <IndianRupee className='size-5'/>
                            </div>
                            <input
                                type='number'
                                placeholder='0.00'
                                min="0"
                                step="0.01"
                                className='input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200'
                                value={formData2.price}
                                onChange={(e) => setFormData2({...formData2, price: e.target.value })}
                                />
                        </div>
                    </div>

                    <div className='form-control'>
                        <label className='label'>
                            <span>ImageURL</span>
                        </label>
                        <div className='relative'>
                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50'>
                                <Images className='size-5' />
                            </div>
                            <input
                                type='text'
                                placeholder='www.images.in'
                                className='input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200'
                                value={formData2.image}
                                onChange={(e) => setFormData2({ ...formData2, image: e.target.value })}
                                />
                        </div>
                    </div>

                    <div className='form-control'>
                        <label className='label'>
                            <span>Description</span>
                        </label>
                        <div className='relative'>
                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50'>
                                <ListCollapse className='size-5' />
                            </div>
                            <input
                                type='text'
                                placeholder='Block Descp'
                                className='input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200'
                                value={formData2.description}
                                onChange={(e) => setFormData2({ ...formData2, description: e.target.value })}
                                />
                        </div>
                    </div>
                </div>

                <div className='modal-action'>
                    <button className='btn btn-ghost' type='button' onClick={closeModal}>
                        Cancel
                    </button>

                    <button type='submit' className='btn btn-ghost' disabled={!formData2.name || !formData2.price || !formData2.image || !formData2.description || loading}>
                        {loading ? (
                            <span className='loading loading-spinner loading-sm'/>
                        ):(
                            <>
                                Add Block
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>

        <button className='modal-backdrop' onClick={closeModal}/>
    </dialog>
  )
}

export default AddBlockModal
