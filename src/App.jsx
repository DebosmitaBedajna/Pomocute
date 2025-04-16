import './App.css'
import Counter from './assets/components/Counter'
import Logo from '/Icon.png'

function Navbar() {
  return (
    <nav className="bg-black min-h-10 flex items-center justify-between px-4 py-2 gap-3.5 relative">
      <img src={Logo} alt="Logo" className="w-8 h-8 absolute top-1 left-2" />
      <h1 className="absolute top-1.5 left-12 text-lg text-white font-['montserrat']">Pomocute</h1>
    </nav>
  );
}

function App() {

  return (
    <>
    <Navbar />
    <Counter/>
    </>
  )
}

export default App
