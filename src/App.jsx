import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from '../components/header'
import './App.css'
import imageUrl from "/src/assets/images/mypic-edits.png"


function App() {
  return (
    
    <div className='page'>
      <div className='page-wraper'>
        <div className='page-card'>
              <Header 
                yearExp ={2+"+"}
                myProfileUrl = {imageUrl}
                altText = "Profile Image"
              />
            <main>
              
            </main>
          </div>
      </div>
      
     </div>
  )
}

export default App
