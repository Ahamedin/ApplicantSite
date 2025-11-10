import React, { useEffect } from 'react'
import { useBlockStore } from '../store/useBlockStore'

function Contact() {

  const { addForm, formData, setFormData, loading } = useBlockStore()

  const closeModal = () => {
    const modal = document.getElementById("add_form");
    if (modal) modal.close();
  }

  useEffect(() => {
    const modal = document.getElementById("add_form");
    if (modal) modal.showModal();
  }, []);

  return (
    <dialog id="add_form" className="modal">
      <div className="modal-box w-full max-w-xs sm:max-w-md md:max-w-xl">
        <h3 className="font-semibold text-2xl mb-6 text-center">Contact Form</h3>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await addForm(e);
            closeModal();
          }}
          className="space-y-6 max-h-[65vh] overflow-y-auto pr-1"
        >

          {/* NAME */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-medium">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          {/* MOBILE */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-medium">Mobile</span>
            </label>
            <input
              type="text"
              placeholder="Enter your contact number"
              className="input input-bordered w-full"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            />
          </div>

          {/* ADDRESS */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-medium">Address</span>
            </label>
            <input
              type="text"
              placeholder="123, Street, Area, City - Pincode"
              className="input input-bordered w-full"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>

          {/* ACTION */}
          <div className="flex justify-end gap-3 pt-4">
            <button type="button" className="btn btn-ghost" onClick={closeModal}>
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-primary min-w-[120px]"
              disabled={!formData.name || !formData.mobile || !formData.address || loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                "SUBMIT"
              )}
            </button>
          </div>
        </form>
      </div>

      <button className="modal-backdrop" onClick={closeModal}></button>
    </dialog>
  )
}

export default Contact
