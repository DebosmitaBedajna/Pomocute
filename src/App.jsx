import './App.css'
import Counter from './assets/components/Counter'
import Tasks from './assets/components/Tasks';
import Logo from '/Icon.png'

function Navbar() {
  return (
    <nav className="bg-black min-h-[6vh] flex items-center justify-between px-4 py-2 gap-3.5 relative">
      <img src={Logo} alt="Logo" className="w-8 h-8 absolute top-1 left-2" />
      <h1 className="absolute top-1.5 left-12 text-white font-['montserrat']">Pomocute</h1>
    </nav>
  );
}

function App() {

  return (
    <>
    <Navbar />
    <Counter/>
    <Tasks/>
    </>
  )
}

export default App
