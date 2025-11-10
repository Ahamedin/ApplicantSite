import { BrickWall, Images, IndianRupee, ListCollapse } from 'lucide-react'
import React from 'react'
import { useBlockStore } from '../store/useBlockStore'

function AddBlockModal() {

  const { addBlock, formData2, setFormData2, loading } = useBlockStore();

  const closeModal = () => {
    const modal = document.getElementById("add_block_modal");
    if (modal) modal.close();
  }

  return (
    <dialog id="add_block_modal" className="modal">
      <div className="modal-box w-full max-w-xs sm:max-w-md md:max-w-xl">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={closeModal}
        >
          ✕
        </button>

        <h3 className="font-bold text-2xl mb-6 text-center">Add New Design</h3>

        {/* scroll if content big */}
        <form
          onSubmit={addBlock}
          className="space-y-6 max-h-[65vh] overflow-y-auto pr-1"
        >
          {/* NAME */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-medium">Block Name</span>
            </label>
            <div className="relative">
              <BrickWall className="size-5 absolute left-3 top-3 text-base-content/50" />
              <input
                type="text"
                placeholder="Enter Block Name"
                className="input input-bordered w-full pl-10 py-3"
                value={formData2.name}
                onChange={(e) => setFormData2({ ...formData2, name: e.target.value })}
              />
            </div>
          </div>

          {/* PRICE */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-medium">Price</span>
            </label>
            <div className="relative">
              <IndianRupee className="size-5 absolute left-3 top-3 text-base-content/50" />
              <input
                type="number"
                placeholder="0.00"
                min="0"
                step="0.01"
                className="input input-bordered w-full pl-10 py-3"
                value={formData2.price}
                onChange={(e) => setFormData2({ ...formData2, price: e.target.value })}
              />
            </div>
          </div>

          {/* IMAGE */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-medium">Image URL</span>
            </label>
            <div className="relative">
              <Images className="size-5 absolute left-3 top-3 text-base-content/50" />
              <input
                type="text"
                placeholder="www.example.com/image.jpg"
                className="input input-bordered w-full pl-10 py-3"
                value={formData2.image}
                onChange={(e) => setFormData2({ ...formData2, image: e.target.value })}
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-medium">Description</span>
            </label>
            <div className="relative">
              <ListCollapse className="size-5 absolute left-3 top-3 text-base-content/50" />
              <input
                type="text"
                placeholder="Block description"
                className="input input-bordered w-full pl-10 py-3"
                value={formData2.description}
                onChange={(e) => setFormData2({ ...formData2, description: e.target.value })}
              />
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex justify-end gap-3 pt-4">
            <button type="button" className="btn btn-ghost" onClick={closeModal}>
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-primary min-w-[120px]"
              disabled={!formData2.name || !formData2.price || !formData2.image || !formData2.description || loading}
            >
              {loading ? <span className="loading loading-spinner loading-sm" /> : "Add Block"}
            </button>
          </div>
        </form>
      </div>

      <button className="modal-backdrop" onClick={closeModal} />
    </dialog>
  )
}

export default AddBlockModal
