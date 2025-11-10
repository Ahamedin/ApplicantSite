import React, { useEffect, useState } from 'react'
import { useBlockStore } from '../store/useBlockStore'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeftIcon } from 'lucide-react'
import Contact from '../components/Contact'

function BlockPageForCart() {
  const [showContactForm, setShowContactForm] = useState(false)

  const { getSingle, loading, error, currentSavedBlock } = useBlockStore()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getSingle(id)
  }, [getSingle, id])

  const handleBook = () => {
    setShowContactForm(true)
    setTimeout(() => {
      const modal = document.getElementById("add_form")
      if (modal) modal.showModal()
    }, 0)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="alert alert-error">{error}</div>
      </div>
    )
  }

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/savedpage")}
        className="btn btn-ghost mb-6 text-sm sm:text-base"
      >
        <ArrowLeftIcon className="size-4 mr-2" />
        Back
      </button>

      {/* CARD */}
      <div className="card bg-base-100 shadow-lg p-6">

        {/* IMAGE + DESCRIPTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          <div className="rounded-lg overflow-hidden shadow-lg bg-base-100 w-full">
            <img
              src={currentSavedBlock?.image}
              alt={currentSavedBlock?.name}
              className="w-full h-56 sm:h-72 md:h-96 object-cover"
            />
          </div>

          <p className="text-lg sm:text-xl leading-relaxed font-light">
            {currentSavedBlock?.description}
          </p>
        </div>

        {/* NAME + PRICE + BUTTON */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-6 sm:gap-0 px-2 sm:px-4">

          <div>
            <h2 className="text-3xl sm:text-4xl font-serif">
              {currentSavedBlock?.name}
            </h2>
            <p className="text-xl sm:text-2xl font-semibold text-primary mt-4">
              ${Number(currentSavedBlock?.price).toFixed(2)}
            </p>
          </div>

          <button
            onClick={handleBook}
            className="btn btn-success btn-outline text-xl sm:text-2xl h-14 sm:h-16 px-6 sm:px-10 rounded-xl shadow-lg"
          >
            Book
          </button>

        </div>
      </div>

      {showContactForm && <Contact onClose={() => setShowContactForm(false)} />}

    </main>
  )
}

export default BlockPageForCart
