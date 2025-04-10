import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from '../components/Header'
import './App.css'
import imageUrl from "/src/assets/images/mypic-edits.png"
import AboutMe from '../components/aboutme'


function App() {
  return (
    <>
    <div className='page'>
      <div className='page-wraper'>
        <div className='page-card'>
              <Header 
                yearExp ={2+"+"}
                myProfileUrl = {imageUrl}
                altText = "Profile Image"
                hourlyRate = {5+"$"}
              />
            <main>
              <AboutMe
                myName = "Anwar Rahim"
                careerDasignation= "Software Engineer | Frontend Engineer"
              />
              
            </main>
          </div>
      </div>
      
     </div>

     </>
  )
}

export default App
