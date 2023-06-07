import './App.css'
import Articles from './components/Articles'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <main className="max-w-screen-lg h-full px-4 mx-auto items-center">
      <Navbar/>
      <div className="grid md:grid-cols-3 gap-6 my-8" >
        <div className="md:col-span-2">
          <Hero/>
        </div>
        <Sidebar/>
      </div>
      <Articles/>
    </main>
  )
}

export default App
