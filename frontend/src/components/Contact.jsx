import React, { useEffect } from 'react'
import { useBlockStore } from '../store/useBlockStore'


function Contact() {

  const { addForm,formData,setFormData,loading} = useBlockStore()

  const closeModal = () =>{
   const modal = document.getElementById("add_form");
    if (modal) modal.close();
  }

  useEffect(() => {
    const modal = document.getElementById("add_form");
    if (modal) modal.showModal();
  }, []);

  return (
    <dialog id="add_form" className='modal'>
      <div className='modal-box'>
        <h3 className='font-bold text-xl mb-8'>
          Contact Form
        </h3>

        <form onSubmit={async (e) =>{
          e.preventDefault();
          await addForm(e);
           const modal = document.getElementById("add_form");
           if (modal) modal.close();

        }} className='space-y-6'>
          <div className='grid gap-6'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text text-base font-medium'>
                  Name
                </span>
              </label>
              <div className='relative'>
                <input type='text' placeholder='Enter your name' className='input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200'
                 value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>

              <div className='form-control'>
                <label className='label'>
                  <span className='label-text text-base font-medium '>Mobile</span>
                </label>
                <div className='relative'>
                  <input type='text' placeholder='Enter your Contact number' className='input input-bordered w-full pl-10 py-3'
                  value={formData.mobile} onChange={(e) => setFormData({ ...formData,mobile: e.target.value})}/>

                </div>
              </div>

              <div className='form-control '>
                <label className='label'>
                  <span className='label-text text-base font-medium'>
                    Address
                  </span>
                </label>
                <div className='relative'>
                  <input type='text' placeholder='123,street name,area name,city name-pincode'
                  className='input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200' value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value})} />

                </div>
              </div>
            </div>
          
          <div className='modal-action'>
            <button type='button' className='btn btn-ghost' onClick={closeModal}>
              Cancel
            </button>

            <button type='submit' className='btn btn-primary min-w-[120px]' disabled={!formData.name || !formData.mobile || !formData.address || loading}>
              {loading ? (
                <span className='loading loading-spinner loading-sm' />
              ) : (
                <>
                  SUBMIT 
                </>
              )}
            </button >
          </div>

          </div>

        </form>
      </div>
      <button className='modal-backdrop' onClick={closeModal}></button>
    </dialog>
  )
}

export default Contact
