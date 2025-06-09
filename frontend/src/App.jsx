import { Route,Routes } from "react-router-dom"
import Navbar from "../src/components/Navbar.jsx"
import BlockPage from "../src/pages/BlockPage.jsx"
import HomePage from "../src/pages/HomePage.jsx"
import { useThemeStore } from "./store/useThemeStore.js"
import Contact from "./components/Contact.jsx"
import { Toaster } from "react-hot-toast"
import ContactPage from "./pages/ContactPage.jsx"
import AboutUsPage from "./pages/AboutUsPage.jsx"
import NewHomePage from "./pages/NewHomePage.jsx"
import CartPage from "./pages/CartPage.jsx"
import BlockPageForCart from "./pages/BlockPageForCart.jsx"
import BookingPage from "./pages/BookingPage.jsx"

function App() {
  const {theme} = useThemeStore()
  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300" data-theme={theme}>
      
      <Navbar />

      <Routes>
        <Route path="/modals" element={<HomePage/>} />
        <Route path="/blocks/:id" element={<BlockPage/>} />
        <Route path="/bookings" element={<Contact/>} />
        <Route path="/contactpage" element={<ContactPage/>} />
        <Route path="/aboutuspage" element={<AboutUsPage/>} />
        <Route path="/" element={<NewHomePage/>} />
        <Route path="/savedpage" element={<CartPage/>} />
        <Route path="/savedpage/:id" element={<BlockPageForCart/>}/>
        <Route path="/bookpage" element={<BookingPage/>} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
