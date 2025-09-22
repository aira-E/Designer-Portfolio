import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='section_hero'>
          <img src="src/assets/icons/airaestur.png" className='icon_airaestur' alt="icon_airaestur" />
        <div className='section_hero_texts'>
          <h1>Behind the Screens</h1>
          <p className="objectives">
            I’m <b> Aira </b>, UI/UX designer based in the Philippines. I am passionate in creating a user-centric and intuitive design.
          </p>
        </div>
      </div>

      <div className='section_case_studies'>
        <h2> Case Studies </h2>

      <div className='card_case_studies'>
        <img src="src/assets/icons/dost.png" className='icon_logos' alt="icon_dost" />
        <div className='card_case_studies_texts'>
          <h3> DOST Website Revamp </h3>
          <p> Enhancing the Department of Science and Technology (DOST) Website as a Centralized Hub for Public Services </p>
          <button >
            Read case study
          </button>
          <img src="src/assets/mock-ups/dost.png" className='mock-ups' alt="mock-ups_dost" />
        </div>
      </div>
      </div>


    </>
  )
}

export default App
