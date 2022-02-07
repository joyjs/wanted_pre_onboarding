import React from 'react'
import './styles/main.scss'
import ModalButton from './component/ModalButton'
import Tab from './component/Tab'

function App() {
  return (
    <div className="App">
      {/* 2. Modal */}
      <ModalButton />

      {/* 3. Tab */}
      <Tab />
    </div>
  )
}

export default App
