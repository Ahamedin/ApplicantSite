import { useNavigate, useParams } from "react-router-dom"
import { useBlockStore } from "../store/useBlockStore"
import { useEffect,useState } from "react"
import { ArrowLeftIcon } from "lucide-react"
import Contact from "../components/Contact"
import ProductCard from "../components/ProductCard"

function BlockPage() {

  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const {
    fetchBlock,
    loading,
    error,
    currentProduct,
    recommendedProduct,
  } = useBlockStore()

  const navigate = useNavigate()
  const {id} = useParams()

  
  useEffect(() => {
    fetch('http://localhost:3000/auth/user', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          setUser(data);
          setIsAdmin(data.isAdmin);
        } else setUser(null);
      })
      .catch(() => setUser(null));
  }, []);

  useEffect(() => {
    fetchBlock(id);
  }, [fetchBlock, id])

  const handleBook = () => {
    setShowContactForm(true)
    setTimeout(() => {
      const modal = document.getElementById("add_form")
      if (modal) modal.showModal()
    }, 0)
  }

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )

  if (error)
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="alert alert-error">{error}</div>
      </div>
    )

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* back */}
      <button onClick={() => navigate("/modals")} className="btn btn-ghost mb-6 text-sm sm:text-base">
        <ArrowLeftIcon className="size-4 mr-2" />
        Back To Products
      </button>

      {/* card */}
      <div className="card bg-base-100 shadow-lg p-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg bg-base-100 w-full">
            <img
              src={currentProduct?.image}
              alt={currentProduct?.name}
              className="w-full h-56 sm:h-72 md:h-96 object-cover"
            />
          </div>

          <p className="text-lg sm:text-xl leading-relaxed font-light">
            {currentProduct?.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-6 sm:gap-0 px-2 sm:px-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif">{currentProduct?.name}</h2>
            <p className="text-xl sm:text-2xl font-semibold text-primary mt-4">
              ${Number(currentProduct?.price).toFixed(2)}
            </p>
          </div>

          {!isAdmin && (
            <button
              className="btn btn-success btn-outline text-xl sm:text-2xl h-14 sm:h-16 px-6 sm:px-10 rounded-xl shadow-lg"
              onClick={handleBook}
            >
              Book
            </button>
          )}
        </div>
      </div>

      {/* recommended */}
      {recommendedProduct?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {recommendedProduct.map(block => (
            <ProductCard key={block.id} blocks={block} />
          ))}
        </div>
      )}

      {showContactForm && <Contact onClose={() => setShowContactForm(false)} />}
    </main>
  )
}

export default BlockPage
