import React from 'react'
import './styles/main.scss'
import Toggle from './component/Toggle'
import ModalButton from './component/ModalButton'
import Tab from './component/Tab'

function App() {
  return (
    <div className="App">
      {/* Modal */}
      <ModalButton />

      {/* Tab */}
      <Tab />

      {/* Toggle */}
      <Toggle />
    </div>
  )
}

export default App
