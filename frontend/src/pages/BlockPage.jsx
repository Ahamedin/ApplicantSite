import { data, useNavigate, useParams } from "react-router-dom"
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
    blocks,
    recommendedProduct,

  } = useBlockStore()

  const navigate = useNavigate()
  const {id} = useParams()

  
  useEffect(() => {
      // Fetch logged-in user info from backend
      fetch('http://localhost:3000/auth/user', {
        credentials: 'include', // Important: send cookies
      })
        .then(res => res.json())
        .then(data => {
          
          if (data) {
            setUser(data);
            setIsAdmin(data.isAdmin);
          } else {
            setUser(null);
          }
        })
        .catch(() => setUser(null));
    }, []);

  useEffect(() => {
    fetchBlock(id);
  },[fetchBlock, id])



  console.log(currentProduct);


  const handleBook = async () => {
     
      setShowContactForm(true);

  setTimeout(() =>{
     const modal = document.getElementById("add_form");
     if (modal) modal.showModal();
    }, 0);
    }

  if (loading){
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  if(error){
    return(
      <div className="container mx-auto px-4 py-8">
        <div className="alert alert-error">{error}</div>
      </div>
    )
  }
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <button onClick={() => navigate("/modals") } className="btn btn-ghost mb-8">
        <ArrowLeftIcon className="size-4 mr-2" />
        Back To Products
      </button>

      

      <div className="card bg-base-100 shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="rounded-lg overflow-hidden shadow-lg bg-base-100 mt-6 ml-6">
                    <img src={currentProduct?.image} alt={currentProduct?.name} className="size-full object-cover" />
                  </div>
                  <div className="card-title text-3xl mb-2 text-left">
                    <p>{currentProduct?.description}</p>
                  </div>
          </div>


        <div className="card-body p-0 space-y-0">
            <div className="flex justify-between items-center mt-2 px-5 py-5">
              <div>
              <h2 className="card-title text-4xl mb-2">
                {currentProduct?.name}
              </h2>
              <p className="text-2xl font-semibold text-primary mt-8">
                  ${Number(currentProduct?.price).toFixed(2)}
              </p>
              </div>

              {!isAdmin && (
                <button className="btn btn-success btn-outline text-3xl h-20 px-10 rounded-xl shadow-lg leading-none mt-5" onClick={handleBook}>
                  Book
                </button>
              )}
              

            </div>
            
        </div>
      </div>

      {recommendedProduct?.length > 0 && (
      <>
      <div className="w-full max-w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-20 gap-16">
        {recommendedProduct.map(blocks => (
          <ProductCard key={blocks.id} blocks={blocks} />
        ))}
      </div>
     </>
      )}

      {showContactForm && <Contact onClose={() => setShowContactForm(true)} />}
    </div>
      
  )
}

export default BlockPage
