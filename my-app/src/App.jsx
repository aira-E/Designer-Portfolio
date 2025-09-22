import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='section_hero'>
        <a>
          <img src="src/assets/icons/airaestur.png" className='icon_airaestur' alt="icon_airaestur" />
        </a>

        <div className='section_hero_texts'>
          <h1>Behind the Screens</h1>
          <p className="objectives">
            I’m <b> Aira </b>, UI/UX designer based in the Philippines. I am passionate in creating a user-centric and intuitive design.
          </p>
        </div>
      </div>
    </>
  )
}

export default App
