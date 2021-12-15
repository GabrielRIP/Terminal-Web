import React from 'react'
import './App.css'

// Import Components
import Mainterminal from './components/templates/MainTerminal'
import NavTerminal from './components/templates/NavTerminal'

export default function App () {
  return (
    <div className='App'>
      <NavTerminal />
      <Mainterminal />
    </div>
  )
}
